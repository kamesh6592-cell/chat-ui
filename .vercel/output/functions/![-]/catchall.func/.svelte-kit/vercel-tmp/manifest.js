export const manifest = (() => {
	function __memo(fn) {
		let value;
		return () => (value ??= value = fn());
	}

	return {
		appDir: "_app",
		appPath: "_app",
		assets: new Set([
			"chatui/apple-touch-icon.png",
			"chatui/favicon-dev.svg",
			"chatui/favicon.ico",
			"chatui/favicon.svg",
			"chatui/icon-128x128.png",
			"chatui/icon-144x144.png",
			"chatui/icon-192x192.png",
			"chatui/icon-256x256.png",
			"chatui/icon-36x36.png",
			"chatui/icon-48x48.png",
			"chatui/icon-512x512.png",
			"chatui/icon-72x72.png",
			"chatui/icon-96x96.png",
			"chatui/icon.svg",
			"chatui/logo.svg",
			"chatui/manifest.json",
			"huggingchat/apple-touch-icon.png",
			"huggingchat/assistants-thumbnail.png",
			"huggingchat/castle-example.jpg",
			"huggingchat/favicon-dark.svg",
			"huggingchat/favicon-dev.svg",
			"huggingchat/favicon.ico",
			"huggingchat/favicon.svg",
			"huggingchat/fulltext-logo.svg",
			"huggingchat/icon-128x128.png",
			"huggingchat/icon-144x144.png",
			"huggingchat/icon-192x192.png",
			"huggingchat/icon-256x256.png",
			"huggingchat/icon-36x36.png",
			"huggingchat/icon-48x48.png",
			"huggingchat/icon-512x512.png",
			"huggingchat/icon-72x72.png",
			"huggingchat/icon-96x96.png",
			"huggingchat/icon.svg",
			"huggingchat/logo.svg",
			"huggingchat/manifest.json",
			"huggingchat/routes.chat.json",
			"huggingchat/thumbnail.png",
			"huggingchat/tools-thumbnail.png",
		]),
		mimeTypes: {
			".png": "image/png",
			".svg": "image/svg+xml",
			".json": "application/json",
			".jpg": "image/jpeg",
		},
		_: {
			client: {
				start: "_app/immutable/entry/start.G3EhLT6A.js",
				app: "_app/immutable/entry/app.6aiLNoqj.js",
				imports: [
					"_app/immutable/entry/start.G3EhLT6A.js",
					"_app/immutable/chunks/CSa6KPDp.js",
					"_app/immutable/chunks/C6vgWmgZ.js",
					"_app/immutable/chunks/DIeogL5L.js",
					"_app/immutable/entry/app.6aiLNoqj.js",
					"_app/immutable/chunks/Da9RVyMh.js",
					"_app/immutable/chunks/C6vgWmgZ.js",
					"_app/immutable/chunks/DIeogL5L.js",
					"_app/immutable/chunks/lmEnKYxK.js",
					"_app/immutable/chunks/CSa6KPDp.js",
					"_app/immutable/chunks/18m15ENF.js",
					"_app/immutable/chunks/CGwGH024.js",
					"_app/immutable/chunks/CWj6FrbW.js",
					"_app/immutable/chunks/DYGgpYWv.js",
					"_app/immutable/chunks/CDRdzyOh.js",
					"_app/immutable/chunks/_wu0PA6r.js",
				],
				stylesheets: [],
				fonts: [],
				uses_env_dynamic_public: true,
			},
			nodes: [
				__memo(() => import("../output/server/nodes/0.js")),
				__memo(() => import("../output/server/nodes/1.js")),
				__memo(() => import("../output/server/nodes/2.js")),
				__memo(() => import("../output/server/nodes/3.js")),
				__memo(() => import("../output/server/nodes/4.js")),
				__memo(() => import("../output/server/nodes/5.js")),
				__memo(() => import("../output/server/nodes/6.js")),
				__memo(() => import("../output/server/nodes/7.js")),
				__memo(() => import("../output/server/nodes/8.js")),
				__memo(() => import("../output/server/nodes/9.js")),
				__memo(() => import("../output/server/nodes/10.js")),
				__memo(() => import("../output/server/nodes/11.js")),
				__memo(() => import("../output/server/nodes/12.js")),
			],
			routes: [
				{
					id: "/",
					pattern: /^\/$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 4 },
					endpoint: null,
				},
				{
					id: "/.well-known/oauth-cimd",
					pattern: /^\/\.well-known\/oauth-cimd\/?$/,
					params: [],
					page: null,
					endpoint: __memo(
						() => import("../output/server/entries/endpoints/.well-known/oauth-cimd/_server.ts.js")
					),
				},
				{
					id: "/__debug/openai",
					pattern: /^\/__debug\/openai\/?$/,
					params: [],
					page: null,
					endpoint: __memo(
						() => import("../output/server/entries/endpoints/__debug/openai/_server.ts.js")
					),
				},
				{
					id: "/admin/export",
					pattern: /^\/admin\/export\/?$/,
					params: [],
					page: null,
					endpoint: __memo(
						() => import("../output/server/entries/endpoints/admin/export/_server.ts.js")
					),
				},
				{
					id: "/admin/stats/compute",
					pattern: /^\/admin\/stats\/compute\/?$/,
					params: [],
					page: null,
					endpoint: __memo(
						() => import("../output/server/entries/endpoints/admin/stats/compute/_server.ts.js")
					),
				},
				{
					id: "/api/conversations",
					pattern: /^\/api\/conversations\/?$/,
					params: [],
					page: null,
					endpoint: __memo(
						() => import("../output/server/entries/endpoints/api/conversations/_server.ts.js")
					),
				},
				{
					id: "/api/conversation/[id]",
					pattern: /^\/api\/conversation\/([^/]+?)\/?$/,
					params: [{ name: "id", optional: false, rest: false, chained: false }],
					page: null,
					endpoint: __memo(
						() => import("../output/server/entries/endpoints/api/conversation/_id_/_server.ts.js")
					),
				},
				{
					id: "/api/conversation/[id]/message/[messageId]",
					pattern: /^\/api\/conversation\/([^/]+?)\/message\/([^/]+?)\/?$/,
					params: [
						{ name: "id", optional: false, rest: false, chained: false },
						{ name: "messageId", optional: false, rest: false, chained: false },
					],
					page: null,
					endpoint: __memo(
						() =>
							import(
								"../output/server/entries/endpoints/api/conversation/_id_/message/_messageId_/_server.ts.js"
							)
					),
				},
				{
					id: "/api/fetch-url",
					pattern: /^\/api\/fetch-url\/?$/,
					params: [],
					page: null,
					endpoint: __memo(
						() => import("../output/server/entries/endpoints/api/fetch-url/_server.ts.js")
					),
				},
				{
					id: "/api/mcp/health",
					pattern: /^\/api\/mcp\/health\/?$/,
					params: [],
					page: null,
					endpoint: __memo(
						() => import("../output/server/entries/endpoints/api/mcp/health/_server.ts.js")
					),
				},
				{
					id: "/api/mcp/servers",
					pattern: /^\/api\/mcp\/servers\/?$/,
					params: [],
					page: null,
					endpoint: __memo(
						() => import("../output/server/entries/endpoints/api/mcp/servers/_server.ts.js")
					),
				},
				{
					id: "/api/models",
					pattern: /^\/api\/models\/?$/,
					params: [],
					page: null,
					endpoint: __memo(
						() => import("../output/server/entries/endpoints/api/models/_server.ts.js")
					),
				},
				{
					id: "/api/user",
					pattern: /^\/api\/user\/?$/,
					params: [],
					page: null,
					endpoint: __memo(
						() => import("../output/server/entries/endpoints/api/user/_server.ts.js")
					),
				},
				{
					id: "/api/user/validate-token",
					pattern: /^\/api\/user\/validate-token\/?$/,
					params: [],
					page: null,
					endpoint: __memo(
						() => import("../output/server/entries/endpoints/api/user/validate-token/_server.ts.js")
					),
				},
				{
					id: "/api/v2/[...slugs]",
					pattern: /^\/api\/v2(?:\/(.*))?\/?$/,
					params: [{ name: "slugs", optional: false, rest: true, chained: true }],
					page: null,
					endpoint: __memo(
						() => import("../output/server/entries/endpoints/api/v2/_...slugs_/_server.ts.js")
					),
				},
				{
					id: "/conversation",
					pattern: /^\/conversation\/?$/,
					params: [],
					page: null,
					endpoint: __memo(
						() => import("../output/server/entries/endpoints/conversation/_server.ts.js")
					),
				},
				{
					id: "/conversation/[id]",
					pattern: /^\/conversation\/([^/]+?)\/?$/,
					params: [{ name: "id", optional: false, rest: false, chained: false }],
					page: { layouts: [0], errors: [1], leaf: 5 },
					endpoint: __memo(
						() => import("../output/server/entries/endpoints/conversation/_id_/_server.ts.js")
					),
				},
				{
					id: "/conversation/[id]/message/[messageId]/prompt",
					pattern: /^\/conversation\/([^/]+?)\/message\/([^/]+?)\/prompt\/?$/,
					params: [
						{ name: "id", optional: false, rest: false, chained: false },
						{ name: "messageId", optional: false, rest: false, chained: false },
					],
					page: null,
					endpoint: __memo(
						() =>
							import(
								"../output/server/entries/endpoints/conversation/_id_/message/_messageId_/prompt/_server.ts.js"
							)
					),
				},
				{
					id: "/conversation/[id]/output/[sha256]",
					pattern: /^\/conversation\/([^/]+?)\/output\/([^/]+?)\/?$/,
					params: [
						{ name: "id", optional: false, rest: false, chained: false },
						{ name: "sha256", optional: false, rest: false, chained: false },
					],
					page: null,
					endpoint: __memo(
						() =>
							import(
								"../output/server/entries/endpoints/conversation/_id_/output/_sha256_/_server.ts.js"
							)
					),
				},
				{
					id: "/conversation/[id]/share",
					pattern: /^\/conversation\/([^/]+?)\/share\/?$/,
					params: [{ name: "id", optional: false, rest: false, chained: false }],
					page: null,
					endpoint: __memo(
						() => import("../output/server/entries/endpoints/conversation/_id_/share/_server.ts.js")
					),
				},
				{
					id: "/conversation/[id]/stop-generating",
					pattern: /^\/conversation\/([^/]+?)\/stop-generating\/?$/,
					params: [{ name: "id", optional: false, rest: false, chained: false }],
					page: null,
					endpoint: __memo(
						() =>
							import(
								"../output/server/entries/endpoints/conversation/_id_/stop-generating/_server.ts.js"
							)
					),
				},
				{
					id: "/healthcheck",
					pattern: /^\/healthcheck\/?$/,
					params: [],
					page: null,
					endpoint: __memo(
						() => import("../output/server/entries/endpoints/healthcheck/_server.ts.js")
					),
				},
				{
					id: "/login",
					pattern: /^\/login\/?$/,
					params: [],
					page: null,
					endpoint: __memo(() => import("../output/server/entries/endpoints/login/_server.ts.js")),
				},
				{
					id: "/login/callback",
					pattern: /^\/login\/callback\/?$/,
					params: [],
					page: null,
					endpoint: __memo(
						() => import("../output/server/entries/endpoints/login/callback/_server.ts.js")
					),
				},
				{
					id: "/logout",
					pattern: /^\/logout\/?$/,
					params: [],
					page: null,
					endpoint: __memo(() => import("../output/server/entries/endpoints/logout/_server.ts.js")),
				},
				{
					id: "/metrics",
					pattern: /^\/metrics\/?$/,
					params: [],
					page: null,
					endpoint: __memo(
						() => import("../output/server/entries/endpoints/metrics/_server.ts.js")
					),
				},
				{
					id: "/models",
					pattern: /^\/models\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 6 },
					endpoint: null,
				},
				{
					id: "/models/[...model]/thumbnail.png",
					pattern: /^\/models(?:\/(.*))?\/thumbnail\.png\/?$/,
					params: [{ name: "model", optional: false, rest: true, chained: true }],
					page: null,
					endpoint: __memo(
						() =>
							import(
								"../output/server/entries/endpoints/models/_...model_/thumbnail.png/_server.ts.js"
							)
					),
				},
				{
					id: "/models/[...model]",
					pattern: /^\/models(?:\/(.*))?\/?$/,
					params: [{ name: "model", optional: false, rest: true, chained: true }],
					page: { layouts: [0], errors: [1], leaf: 7 },
					endpoint: null,
				},
				{
					id: "/privacy",
					pattern: /^\/privacy\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 8 },
					endpoint: null,
				},
				{
					id: "/r/[id]",
					pattern: /^\/r\/([^/]+?)\/?$/,
					params: [{ name: "id", optional: false, rest: false, chained: false }],
					page: { layouts: [0], errors: [1], leaf: 9 },
					endpoint: null,
				},
				{
					id: "/settings/(nav)",
					pattern: /^\/settings\/?$/,
					params: [],
					page: { layouts: [0, 2, 3], errors: [1, , ,], leaf: 10 },
					endpoint: __memo(
						() => import("../output/server/entries/endpoints/settings/(nav)/_server.ts.js")
					),
				},
				{
					id: "/settings/(nav)/application",
					pattern: /^\/settings\/application\/?$/,
					params: [],
					page: { layouts: [0, 2, 3], errors: [1, , ,], leaf: 11 },
					endpoint: null,
				},
				{
					id: "/settings/(nav)/[...model]",
					pattern: /^\/settings(?:\/(.*))?\/?$/,
					params: [{ name: "model", optional: false, rest: true, chained: true }],
					page: { layouts: [0, 2, 3], errors: [1, , ,], leaf: 12 },
					endpoint: null,
				},
			],
			prerendered_routes: new Set([]),
			matchers: async () => {
				return {};
			},
			server_assets: {},
		},
	};
})();
