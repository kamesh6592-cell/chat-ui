import {
	f as attr_class,
	d as attr,
	l as clsx,
	g as stringify,
	a as pop,
	p as push,
} from "./index3.js";
import { u as usePublicConfig } from "./PublicConfig.svelte.js";
import { g as goto } from "./client.js";
import { b as base } from "./paths.js";
import { p as page } from "./index4.js";
import { d as derived, w as writable } from "./index2.js";
import { p as public_env } from "./shared-server.js";
function Logo($$payload, $$props) {
	push();
	const publicConfig = usePublicConfig();
	let { classNames = "" } = $$props;
	$$payload.out += `<img${attr_class(clsx(classNames))}${attr("alt", `${stringify(publicConfig.PUBLIC_APP_NAME)} logo`)}${attr("src", `${stringify(publicConfig.assetPath)}/logo.svg`)}/>`;
	pop();
}
function requireAuthUser() {
	if (page.data.loginEnabled && !page.data.user) {
		const url =
			page.data.shared || page.url.pathname.startsWith(`${base}/models/`)
				? `${base}/login?next=${encodeURIComponent(page.url.pathname + page.url.search)}`
				: `${base}/login`;
		goto(url, {});
		return true;
	}
	return false;
}
function toKeyPart(s) {
	return (s || "").toLowerCase().replace(/[^a-z0-9_-]+/g, "-");
}
toKeyPart(public_env.PUBLIC_APP_ASSETS || public_env.PUBLIC_APP_NAME);
toKeyPart(typeof base === "string" ? base : "");
function loadSelectedIds() {
	return /* @__PURE__ */ new Set();
}
const allMcpServers = writable([]);
const selectedServerIds = writable(loadSelectedIds());
const enabledServers = derived([allMcpServers, selectedServerIds], ([$all, $selected]) =>
	$all.filter((s) => $selected.has(s.id))
);
const enabledServersCount = derived(enabledServers, ($enabled) => $enabled.length);
function toggleServer(id) {
	selectedServerIds.update(($ids) => {
		const newSet = new Set($ids);
		if (newSet.has(id)) {
			newSet.delete(id);
		} else {
			newSet.add(id);
		}
		return newSet;
	});
}
function updateServerStatus(id, status, errorMessage, tools, authRequired) {
	allMcpServers.update(($servers) =>
		$servers.map((s) =>
			s.id === id
				? {
						...s,
						status,
						errorMessage,
						tools,
						authRequired,
					}
				: s
		)
	);
}
async function healthCheckServer(server) {
	try {
		updateServerStatus(server.id, "connecting");
		const response = await fetch(`${base}/api/mcp/health`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ url: server.url, headers: server.headers }),
		});
		const result = await response.json();
		if (result.ready && result.tools) {
			updateServerStatus(server.id, "connected", void 0, result.tools, false);
			return { ready: true, tools: result.tools };
		} else {
			updateServerStatus(server.id, "error", result.error, void 0, Boolean(result.authRequired));
			return { ready: false, error: result.error };
		}
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : "Unknown error";
		updateServerStatus(server.id, "error", errorMessage);
		return { ready: false, error: errorMessage };
	}
}
function createShareModalStore() {
	const { subscribe, set } = writable(false);
	return {
		subscribe,
		open: () => set(true),
		close: () => set(false),
	};
}
const shareModal = createShareModalStore();
export {
	Logo as L,
	allMcpServers as a,
	shareModal as b,
	enabledServers as c,
	enabledServersCount as e,
	healthCheckServer as h,
	requireAuthUser as r,
	selectedServerIds as s,
	toggleServer as t,
};
