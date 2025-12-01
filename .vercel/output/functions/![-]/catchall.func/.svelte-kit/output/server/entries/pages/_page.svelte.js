import {
	j as store_get,
	v as copy_payload,
	w as assign_payload,
	u as unsubscribe_stores,
	a as pop,
	p as push,
	n as head,
	e as escape_html,
	o as store_set,
} from "../../chunks/index3.js";
import { g as goto } from "../../chunks/client.js";
import { b as base } from "../../chunks/paths.js";
import "../../chunks/index4.js";
import { u as usePublicConfig } from "../../chunks/PublicConfig.svelte.js";
import { f as findCurrentModel, C as ChatWindow } from "../../chunks/models2.js";
import { E as ERROR_MESSAGES, e as error } from "../../chunks/errors.js";
import { p as pendingMessage } from "../../chunks/pendingMessage.js";
import { u as useSettingsStore } from "../../chunks/settings2.js";
import { l as loading } from "../../chunks/loading.js";
function _page($$payload, $$props) {
	push();
	var $$store_subs;
	const publicConfig = usePublicConfig();
	let { data } = $$props;
	let hasModels = Boolean(data.models?.length);
	let files = [];
	let draft = "";
	const settings = useSettingsStore();
	async function createConversation(message) {
		try {
			store_set(loading, true);
			const validModels = data.models.map((model2) => model2.id);
			let model;
			if (
				validModels.includes(store_get(($$store_subs ??= {}), "$settings", settings).activeModel)
			) {
				model = store_get(($$store_subs ??= {}), "$settings", settings).activeModel;
			} else {
				model = data.models[0].id;
			}
			const res = await fetch(`${base}/conversation`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					model,
					preprompt: store_get(($$store_subs ??= {}), "$settings", settings).customPrompts[
						store_get(($$store_subs ??= {}), "$settings", settings).activeModel
					],
				}),
			});
			if (!res.ok) {
				const errorMessage = (await res.json()).message || ERROR_MESSAGES.default;
				error.set(errorMessage);
				console.error("Error while creating conversation: ", errorMessage);
				return;
			}
			const { conversationId } = await res.json();
			pendingMessage.set({ content: message, files });
			await goto(`${base}/conversation/${conversationId}`, { invalidateAll: true });
		} catch (err) {
			error.set(err.message || ERROR_MESSAGES.default);
			console.error(err);
		} finally {
			store_set(loading, false);
		}
	}
	let currentModel = findCurrentModel(
		data.models,
		data.oldModels,
		store_get(($$store_subs ??= {}), "$settings", settings).activeModel
	);
	let $$settled = true;
	let $$inner_payload;
	function $$render_inner($$payload2) {
		head($$payload2, ($$payload3) => {
			$$payload3.title = `<title>${escape_html(publicConfig.PUBLIC_APP_NAME)}</title>`;
		});
		if (hasModels) {
			$$payload2.out += "<!--[-->";
			ChatWindow($$payload2, {
				onmessage: (message) => createConversation(message),
				loading: store_get(($$store_subs ??= {}), "$loading", loading),
				currentModel,
				models: data.models,
				get files() {
					return files;
				},
				set files($$value) {
					files = $$value;
					$$settled = false;
				},
				get draft() {
					return draft;
				},
				set draft($$value) {
					draft = $$value;
					$$settled = false;
				},
			});
		} else {
			$$payload2.out += "<!--[!-->";
			$$payload2.out += `<div class="mx-auto my-20 max-w-xl rounded-xl border p-6 text-center dark:border-gray-700"><h2 class="mb-2 text-xl font-semibold">No models available</h2> <p class="text-gray-600 dark:text-gray-300">No chat models are configured. Set \`OPENAI_BASE_URL\` and ensure the server can reach the
			endpoint, then reload. If unset, the app defaults to the Hugging Face router.</p></div>`;
		}
		$$payload2.out += `<!--]-->`;
	}
	do {
		$$settled = true;
		$$inner_payload = copy_payload($$payload);
		$$render_inner($$inner_payload);
	} while (!$$settled);
	assign_payload($$payload, $$inner_payload);
	if ($$store_subs) unsubscribe_stores($$store_subs);
	pop();
}
export { _page as default };
