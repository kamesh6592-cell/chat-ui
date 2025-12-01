import Elysia, { Elysia as Elysia$1, error, t, status } from "elysia";
import {
	b as authenticateRequest,
	a as authCondition,
	l as loginEnabled,
} from "../../../../../chunks/auth.js";
import { c as config } from "../../../../../chunks/config.js";
import { collections } from "../../../../../chunks/database.js";
import { ObjectId } from "mongodb";
import {
	v as validModelIdSchema,
	a as validateModel,
	d as defaultModel,
	m as models,
	r as refreshModels,
	l as lastModelRefreshSummary,
} from "../../../../../chunks/models.js";
import { c as convertLegacyConversation } from "../../../../../chunks/convertLegacyConversation.js";
import { C as CONV_NUM_PER_PAGE } from "../../../../../chunks/pagination.js";
import { D as DEFAULT_SETTINGS } from "../../../../../chunks/Settings.js";
import { z } from "zod";
import { l as logger } from "../../../../../chunks/logger.js";
import yazl from "yazl";
import { d as downloadFile } from "../../../../../chunks/downloadFile.js";
import mimeTypes from "mime-types";
import { b as base } from "../../../../../chunks/paths.js";
import { swagger } from "@elysiajs/swagger";
import superjson from "superjson";
const authPlugin = new Elysia({ name: "auth" }).derive(
	{ as: "scoped" },
	async ({ headers, cookie, request }) => {
		const auth = await authenticateRequest(
			{ type: "elysia", value: headers },
			{ type: "elysia", value: cookie },
			new URL(request.url, config.PUBLIC_ORIGIN || void 0),
			true
		);
		return {
			locals: {
				user: auth?.user,
				sessionId: auth?.sessionId,
				isAdmin: auth?.isAdmin,
				token: auth?.token,
			},
		};
	}
);
const conversationGroup = new Elysia$1().use(authPlugin).group("/conversations", (app2) => {
	return app2
		.guard({
			as: "scoped",
			beforeHandle: async ({ locals }) => {
				if (!locals.user?._id && !locals.sessionId) {
					return error(401, "Must have a valid session or user");
				}
			},
		})
		.get(
			"",
			async ({ locals, query }) => {
				const pageSize = CONV_NUM_PER_PAGE;
				const convs = await collections.conversations
					.find(authCondition(locals))
					.project({
						title: 1,
						updatedAt: 1,
						model: 1,
					})
					.sort({ updatedAt: -1 })
					.skip((query.p ?? 0) * pageSize)
					.limit(pageSize + 1)
					.toArray();
				const hasMore = convs.length > pageSize;
				const res = (hasMore ? convs.slice(0, pageSize) : convs).map((conv) => ({
					_id: conv._id,
					id: conv._id,
					// legacy param iOS
					title: conv.title,
					updatedAt: conv.updatedAt,
					model: conv.model,
					modelId: conv.model,
					// legacy param iOS
				}));
				return { conversations: res, hasMore };
			},
			{
				query: t.Object({
					p: t.Optional(t.Number()),
				}),
			}
		)
		.delete("", async ({ locals }) => {
			const res = await collections.conversations.deleteMany({
				...authCondition(locals),
			});
			return res.deletedCount;
		})
		.group(
			"/:id",
			{
				params: t.Object({
					id: t.String(),
				}),
			},
			(app22) => {
				return app22
					.derive(async ({ locals, params, query }) => {
						let conversation;
						let shared = false;
						if (params.id.length === 7) {
							conversation = await collections.sharedConversations.findOne({
								_id: params.id,
							});
							shared = true;
							if (!conversation) {
								throw new Error("Conversation not found");
							}
						} else {
							try {
								new ObjectId(params.id);
							} catch {
								throw new Error("Invalid conversation ID format");
							}
							conversation = await collections.conversations.findOne({
								_id: new ObjectId(params.id),
								...authCondition(locals),
							});
							if (!conversation) {
								const conversationExists =
									(await collections.conversations.countDocuments({
										_id: new ObjectId(params.id),
									})) !== 0;
								if (conversationExists) {
									throw new Error(
										"You don't have access to this conversation. If someone gave you this link, ask them to use the 'share' feature instead."
									);
								}
								throw new Error("Conversation not found.");
							}
							if (query.fromShare && conversation.meta?.fromShareId === query.fromShare) {
								shared = true;
							}
						}
						const convertedConv = {
							...conversation,
							...convertLegacyConversation(conversation),
							shared,
						};
						return { conversation: convertedConv };
					})
					.get(
						"",
						async ({ conversation }) => {
							return {
								messages: conversation.messages,
								title: conversation.title,
								model: conversation.model,
								preprompt: conversation.preprompt,
								rootMessageId: conversation.rootMessageId,
								id: conversation._id.toString(),
								updatedAt: conversation.updatedAt,
								modelId: conversation.model,
								shared: conversation.shared,
							};
						},
						{
							query: t.Optional(
								t.Object({
									fromShare: t.Optional(t.String()),
								})
							),
						}
					)
					.post("", () => {
						throw new Error("Not implemented");
					})
					.delete("", async ({ locals, params }) => {
						const res = await collections.conversations.deleteOne({
							_id: new ObjectId(params.id),
							...authCondition(locals),
						});
						if (res.deletedCount === 0) {
							throw new Error("Conversation not found");
						}
						return { success: true };
					})
					.get("/output/:sha256", () => {
						throw new Error("Not implemented");
					})
					.post("/share", () => {
						throw new Error("Not implemented");
					})
					.post("/stop-generating", () => {
						throw new Error("Not implemented");
					})
					.patch(
						"",
						async ({ locals, params, body }) => {
							if (body.model) {
								if (!validModelIdSchema.safeParse(body.model).success) {
									throw new Error("Invalid model ID");
								}
							}
							const updateValues = {
								...(body.title !== void 0 && {
									title: body.title.replace(/<\/?think>/gi, "").trim(),
								}),
								...(body.model !== void 0 && { model: body.model }),
							};
							const res = await collections.conversations.updateOne(
								{
									_id: new ObjectId(params.id),
									...authCondition(locals),
								},
								{
									$set: updateValues,
								}
							);
							if (
								typeof res.matchedCount === "number"
									? res.matchedCount === 0
									: res.modifiedCount === 0
							) {
								throw new Error("Conversation not found");
							}
							return { success: true };
						},
						{
							body: t.Object({
								title: t.Optional(
									t.String({
										minLength: 1,
										maxLength: 100,
									})
								),
								model: t.Optional(t.String()),
							}),
						}
					)
					.delete(
						"/message/:messageId",
						async ({ locals, params, conversation }) => {
							if (!conversation.messages.map((m) => m.id).includes(params.messageId)) {
								throw new Error("Message not found");
							}
							const filteredMessages = conversation.messages
								.filter(
									(message) =>
										// not the message AND the message is not in ancestors
										!(message.id === params.messageId) &&
										message.ancestors &&
										!message.ancestors.includes(params.messageId)
								)
								.map((message) => {
									if (message.children && message.children.includes(params.messageId)) {
										message.children = message.children.filter(
											(child) => child !== params.messageId
										);
									}
									return message;
								});
							const res = await collections.conversations.updateOne(
								{ _id: new ObjectId(conversation._id), ...authCondition(locals) },
								{ $set: { messages: filteredMessages } }
							);
							if (res.modifiedCount === 0) {
								throw new Error("Deleting message failed");
							}
							return { success: true };
						},
						{
							params: t.Object({
								id: t.String(),
								messageId: t.String(),
							}),
						}
					);
			}
		);
});
const userGroup = new Elysia$1()
	.use(authPlugin)
	.get("/login", () => {
		throw new Error("Not implemented");
	})
	.get("/login/callback", () => {
		throw new Error("Not implemented");
	})
	.post("/logout", () => {
		throw new Error("Not implemented");
	})
	.group("/user", (app2) => {
		return app2
			.get("/", ({ locals }) => {
				return locals.user
					? {
							id: locals.user._id.toString(),
							username: locals.user.username,
							avatarUrl: locals.user.avatarUrl,
							email: locals.user.email,
							isAdmin: locals.user.isAdmin ?? false,
							isEarlyAccess: locals.user.isEarlyAccess ?? false,
						}
					: null;
			})
			.get("/settings", async ({ locals }) => {
				const settings = await collections.settings.findOne(authCondition(locals));
				if (settings && !validateModel(models).safeParse(settings?.activeModel).success) {
					settings.activeModel = defaultModel.id;
					await collections.settings.updateOne(authCondition(locals), {
						$set: { activeModel: defaultModel.id },
					});
				}
				if (
					settings?.activeModel &&
					models.find((m) => m.id === settings?.activeModel)?.unlisted === true
				) {
					settings.activeModel = defaultModel.id;
					await collections.settings.updateOne(authCondition(locals), {
						$set: { activeModel: defaultModel.id },
					});
				}
				return {
					welcomeModalSeen: !!settings?.welcomeModalSeenAt,
					welcomeModalSeenAt: settings?.welcomeModalSeenAt ?? null,
					activeModel: settings?.activeModel ?? DEFAULT_SETTINGS.activeModel,
					disableStream: settings?.disableStream ?? DEFAULT_SETTINGS.disableStream,
					directPaste: settings?.directPaste ?? DEFAULT_SETTINGS.directPaste,
					hidePromptExamples: settings?.hidePromptExamples ?? DEFAULT_SETTINGS.hidePromptExamples,
					shareConversationsWithModelAuthors:
						settings?.shareConversationsWithModelAuthors ??
						DEFAULT_SETTINGS.shareConversationsWithModelAuthors,
					customPrompts: settings?.customPrompts ?? {},
					multimodalOverrides: settings?.multimodalOverrides ?? {},
					toolsOverrides: settings?.toolsOverrides ?? {},
					billingOrganization: settings?.billingOrganization ?? void 0,
				};
			})
			.post("/settings", async ({ locals, request }) => {
				const body = await request.json();
				const { welcomeModalSeen, ...settings } = z
					.object({
						shareConversationsWithModelAuthors: z
							.boolean()
							.default(DEFAULT_SETTINGS.shareConversationsWithModelAuthors),
						welcomeModalSeen: z.boolean().optional(),
						activeModel: z.string().default(DEFAULT_SETTINGS.activeModel),
						customPrompts: z.record(z.string()).default({}),
						multimodalOverrides: z.record(z.boolean()).default({}),
						toolsOverrides: z.record(z.boolean()).default({}),
						disableStream: z.boolean().default(false),
						directPaste: z.boolean().default(false),
						hidePromptExamples: z.record(z.boolean()).default({}),
						billingOrganization: z.string().optional(),
					})
					.parse(body);
				await collections.settings.updateOne(
					authCondition(locals),
					{
						$set: {
							...settings,
							...(welcomeModalSeen && { welcomeModalSeenAt: /* @__PURE__ */ new Date() }),
							updatedAt: /* @__PURE__ */ new Date(),
						},
						$setOnInsert: {
							createdAt: /* @__PURE__ */ new Date(),
						},
					},
					{
						upsert: true,
					}
				);
				return new Response();
			})
			.get("/reports", async ({ locals }) => {
				if (!locals.user || !locals.sessionId) {
					return [];
				}
				const reports = await collections.reports
					.find({
						createdBy: locals.user?._id ?? locals.sessionId,
					})
					.toArray();
				return reports;
			})
			.get("/billing-orgs", async ({ locals, set }) => {
				if (!config.isHuggingChat) {
					set.status = 404;
					return { error: "Not available" };
				}
				if (!locals.user) {
					set.status = 401;
					return { error: "Login required" };
				}
				if (!locals.token) {
					set.status = 401;
					return { error: "OAuth token not available. Please log out and log back in." };
				}
				try {
					const response = await fetch("https://huggingface.co/oauth/userinfo", {
						headers: { Authorization: `Bearer ${locals.token}` },
					});
					if (!response.ok) {
						logger.error(`Failed to fetch billing orgs: ${response.status}`);
						set.status = 502;
						return { error: "Failed to fetch billing information" };
					}
					const data = await response.json();
					const settings = await collections.settings.findOne(authCondition(locals));
					const currentBillingOrg = settings?.billingOrganization;
					const billingOrgs = (data.orgs ?? [])
						.filter((org) => org.canPay === true)
						.map((org) => ({
							sub: org.sub,
							name: org.name,
							preferred_username: org.preferred_username,
						}));
					const isCurrentOrgValid =
						!currentBillingOrg ||
						billingOrgs.some((org) => org.preferred_username === currentBillingOrg);
					if (!isCurrentOrgValid && currentBillingOrg) {
						logger.info(
							`Clearing invalid billingOrganization '${currentBillingOrg}' for user ${locals.user._id}`
						);
						await collections.settings.updateOne(authCondition(locals), {
							$unset: { billingOrganization: "" },
							$set: { updatedAt: /* @__PURE__ */ new Date() },
						});
					}
					return {
						userCanPay: data.canPay ?? false,
						organizations: billingOrgs,
						currentBillingOrg: isCurrentOrgValid ? currentBillingOrg : void 0,
					};
				} catch (err) {
					logger.error("Error fetching billing orgs:", err);
					set.status = 500;
					return { error: "Internal server error" };
				}
			});
	});
const misc = new Elysia$1()
	.use(authPlugin)
	.get("/public-config", async () => config.getPublicConfig())
	.get("/feature-flags", async ({ locals }) => {
		return {
			enableAssistants: config.ENABLE_ASSISTANTS === "true",
			loginEnabled,
			// login feature is on when OID is configured
			isAdmin: locals.isAdmin,
		};
	})
	.get("/export", async ({ locals }) => {
		if (!locals.user) {
			throw new Error("Not logged in");
		}
		if (!locals.isAdmin) {
			throw new Error("Not admin");
		}
		if (config.ENABLE_DATA_EXPORT !== "true") {
			throw new Error("Data export is not enabled");
		}
		const nExports = await collections.messageEvents.countDocuments({
			userId: locals.user._id,
			type: "export",
			expiresAt: { $gt: /* @__PURE__ */ new Date() },
		});
		if (nExports >= 1) {
			throw new Error(
				"You have already exported your data recently. Please wait 1 hour before exporting again."
			);
		}
		const stats = {
			nConversations: 0,
			nMessages: 0,
			nFiles: 0,
			nAssistants: 0,
			nAvatars: 0,
		};
		const zipfile = new yazl.ZipFile();
		const promises = [
			collections.conversations
				.find({ ...authCondition(locals) })
				.toArray()
				.then(async (conversations) => {
					const formattedConversations = await Promise.all(
						conversations.map(async (conversation) => {
							stats.nConversations++;
							const hashes = [];
							conversation.messages.forEach(async (message) => {
								stats.nMessages++;
								if (message.files) {
									message.files.forEach((file) => {
										hashes.push(file.value);
									});
								}
							});
							const files = await Promise.all(
								hashes.map(async (hash) => {
									try {
										const fileData = await downloadFile(hash, conversation._id);
										return fileData;
									} catch {
										return null;
									}
								})
							);
							const filenames = [];
							files.forEach((file) => {
								if (!file) return;
								const extension = mimeTypes.extension(file.mime) || null;
								const convId = conversation._id.toString();
								const fileId = file.name.split("-")[1].slice(0, 8);
								const fileName = `file-${convId}-${fileId}` + (extension ? `.${extension}` : "");
								filenames.push(fileName);
								zipfile.addBuffer(Buffer.from(file.value, "base64"), fileName);
								stats.nFiles++;
							});
							return {
								...conversation,
								messages: conversation.messages.map((message) => {
									return {
										...message,
										files: filenames,
										updates: void 0,
									};
								}),
							};
						})
					);
					zipfile.addBuffer(
						Buffer.from(JSON.stringify(formattedConversations, null, 2)),
						"conversations.json"
					);
				}),
			collections.assistants
				.find({ createdById: locals.user._id })
				.toArray()
				.then(async (assistants) => {
					const formattedAssistants = await Promise.all(
						assistants.map(async (assistant) => {
							if (assistant.avatar) {
								const fileId = collections.bucket.find({ filename: assistant._id.toString() });
								const content = await fileId.next().then(async (file) => {
									if (!file?._id) return;
									const fileStream = collections.bucket.openDownloadStream(file?._id);
									const fileBuffer = await new Promise((resolve, reject) => {
										const chunks = [];
										fileStream.on("data", (chunk) => chunks.push(chunk));
										fileStream.on("error", reject);
										fileStream.on("end", () => resolve(Buffer.concat(chunks)));
									});
									return fileBuffer;
								});
								if (!content) return;
								zipfile.addBuffer(content, `avatar-${assistant._id.toString()}.jpg`);
								stats.nAvatars++;
							}
							stats.nAssistants++;
							return {
								_id: assistant._id.toString(),
								name: assistant.name,
								createdById: assistant.createdById.toString(),
								createdByName: assistant.createdByName,
								avatar: `avatar-${assistant._id.toString()}.jpg`,
								modelId: assistant.modelId,
								preprompt: assistant.preprompt,
								description: assistant.description,
								dynamicPrompt: assistant.dynamicPrompt,
								exampleInputs: assistant.exampleInputs,
								generateSettings: assistant.generateSettings,
								createdAt: assistant.createdAt.toISOString(),
								updatedAt: assistant.updatedAt.toISOString(),
							};
						})
					);
					zipfile.addBuffer(
						Buffer.from(JSON.stringify(formattedAssistants, null, 2)),
						"assistants.json"
					);
				}),
		];
		Promise.all(promises).then(async () => {
			logger.info(
				{
					userId: locals.user?._id,
					...stats,
				},
				"Exported user data"
			);
			zipfile.end();
			if (locals.user?._id) {
				await collections.messageEvents.insertOne({
					userId: locals.user?._id,
					type: "export",
					createdAt: /* @__PURE__ */ new Date(),
					expiresAt: new Date(Date.now() + 1e3 * 60 * 60),
					// 1 hour
				});
			}
		});
		return new Response(zipfile.outputStream, {
			headers: {
				"Content-Type": "application/zip",
				"Content-Disposition": 'attachment; filename="export.zip"',
			},
		});
	});
const modelGroup = new Elysia$1().group("/models", (app2) =>
	app2
		.get("/", async () => {
			try {
				const { models: models2 } = await import("../../../../../chunks/models.js").then(
					(n) => n.n
				);
				return models2
					.filter((m) => m.unlisted == false)
					.map((model) => ({
						id: model.id,
						name: model.name,
						websiteUrl: model.websiteUrl,
						modelUrl: model.modelUrl,
						datasetName: model.datasetName,
						datasetUrl: model.datasetUrl,
						displayName: model.displayName,
						description: model.description,
						logoUrl: model.logoUrl,
						providers: model.providers,
						promptExamples: model.promptExamples,
						parameters: model.parameters,
						preprompt: model.preprompt,
						multimodal: model.multimodal,
						multimodalAcceptedMimetypes: model.multimodalAcceptedMimetypes,
						supportsTools: model.supportsTools ?? false,
						unlisted: model.unlisted,
						hasInferenceAPI: model.hasInferenceAPI,
						isRouter: model.isRouter,
					}));
			} catch (e) {
				return [];
			}
		})
		.get("/old", async () => {
			return [];
		})
		.group("/refresh", (app22) =>
			app22.use(authPlugin).post("", async ({ locals }) => {
				if (!locals.user && !locals.sessionId) {
					throw status(401, "Unauthorized");
				}
				if (!locals.isAdmin) {
					throw status(403, "Admin privileges required");
				}
				const previous = lastModelRefreshSummary;
				try {
					const summary = await refreshModels();
					return {
						refreshedAt: summary.refreshedAt.toISOString(),
						durationMs: summary.durationMs,
						added: summary.added,
						removed: summary.removed,
						changed: summary.changed,
						total: summary.total,
						hadChanges:
							summary.added.length > 0 || summary.removed.length > 0 || summary.changed.length > 0,
						previous:
							previous.refreshedAt.getTime() > 0
								? {
										refreshedAt: previous.refreshedAt.toISOString(),
										total: previous.total,
									}
								: null,
					};
				} catch (err) {
					throw status(502, "Model refresh failed");
				}
			})
		)
		.group("/:namespace/:model?", (app22) =>
			app22
				.derive(async ({ params, error: error2 }) => {
					let modelId = params.namespace;
					if (params.model) {
						modelId += "/" + params.model;
					}
					try {
						const { models: models2 } = await import("../../../../../chunks/models.js").then(
							(n) => n.n
						);
						const model = models2.find((m) => m.id === modelId);
						if (!model || model.unlisted) {
							return error2(404, "Model not found");
						}
						return { model };
					} catch (e) {
						return error2(500, "Models not available");
					}
				})
				.get("/", ({ model }) => {
					return model;
				})
				.use(authPlugin)
				.post("/subscribe", async ({ locals, model, error: error2 }) => {
					if (!locals.sessionId) {
						return error2(401, "Unauthorized");
					}
					await collections.settings.updateOne(
						authCondition(locals),
						{
							$set: {
								activeModel: model.id,
								updatedAt: /* @__PURE__ */ new Date(),
							},
							$setOnInsert: {
								createdAt: /* @__PURE__ */ new Date(),
							},
						},
						{
							upsert: true,
						}
					);
					return new Response();
				})
		)
);
const debugGroup = new Elysia$1().group("/debug", (app2) =>
	app2
		.get("/config", async () => {
			const { models: models2 } = await import("../../../../../chunks/models.js").then((n) => n.n);
			return {
				OPENAI_BASE_URL: config.OPENAI_BASE_URL,
				OPENAI_API_KEY_SET: Boolean(config.OPENAI_API_KEY || config.HF_TOKEN),
				LEGACY_HF_TOKEN_SET: Boolean(config.HF_TOKEN && !config.OPENAI_API_KEY),
				MODELS_COUNT: models2.length,
				NODE_VERSION: process.versions.node,
			};
		})
		.get("/refresh", async () => {
			const base2 = (config.OPENAI_BASE_URL || "https://router.huggingface.co/v1").replace(
				/\/$/,
				""
			);
			const res = await fetch(`${base2}/models`);
			const body = await res.text();
			let parsed;
			try {
				parsed = JSON.parse(body);
			} catch (_err) {
				parsed = void 0;
			}
			return {
				status: res.status,
				ok: res.ok,
				base: base2,
				length: (() => {
					if (parsed && typeof parsed === "object" && "data" in parsed) {
						const data = parsed.data;
						return Array.isArray(data) ? data.length : null;
					}
					return null;
				})(),
				sample: body.slice(0, 2e3),
			};
		})
);
const prefix = `${base}/api/v2`;
const app = new Elysia$1({ prefix })
	.mapResponse(({ response, request }) => {
		if (request.url.endsWith("/export")) {
			return response;
		}
		return new Response(superjson.stringify(response), {
			headers: {
				"Content-Type": "application/json",
			},
		});
	})
	.use(
		swagger({
			documentation: {
				info: {
					title: "chat-ui API",
					version: config.PUBLIC_VERSION,
				},
			},
			provider: "swagger-ui",
			path: `swagger`,
		})
	)
	.use(authPlugin)
	.use(conversationGroup)
	.use(userGroup)
	.use(modelGroup)
	.use(misc)
	.use(debugGroup);
const GET = ({ request }) => app.handle(request);
const POST = ({ request }) => app.handle(request);
const PUT = ({ request }) => app.handle(request);
const PATCH = ({ request }) => app.handle(request);
const DELETE = ({ request }) => app.handle(request);
export { DELETE, GET, PATCH, POST, PUT };
