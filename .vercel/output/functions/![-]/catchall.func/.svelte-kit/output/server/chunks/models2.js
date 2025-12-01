import {
	b as sanitize_props,
	c as spread_attributes,
	p as push,
	v as copy_payload,
	w as assign_payload,
	a as pop,
	f as attr_class,
	d as attr,
	e as escape_html,
	g as stringify,
	h as ensure_array_like,
	l as clsx,
	j as store_get,
	u as unsubscribe_stores,
	x as hasContext,
	t as getContext,
	s as setContext,
	y as derived,
	z as getAllContexts,
	A as spread_props,
	k as bind_props,
	B as props_id,
	m as attr_style,
	C as maybe_selected,
	D as await_block,
} from "./index3.js";
import { t as tick, m as mount, u as unmount, o as onDestroy } from "./index-server.js";
import { I as IconOmni } from "./IconOmni.js";
import { h as html } from "./html.js";
import "./client.js";
import { C as Close } from "./close.js";
import { M as Modal } from "./Modal.js";
import { I as IMAGE_MIME_ALLOWLIST_DEFAULT, T as TEXT_MIME_ALLOWLIST } from "./mime.js";
import { u as usePublicConfig } from "./PublicConfig.svelte.js";
import {
	t as toggleServer,
	h as healthCheckServer,
	a as allMcpServers,
	e as enabledServersCount,
	s as selectedServerIds,
	r as requireAuthUser,
	L as Logo,
	b as shareModal,
} from "./shareModal.js";
import { T as Trash_can } from "./trash-can.js";
import { T as Tools } from "./tools.js";
import { S as Settings } from "./settings3.js";
import { S as Switch } from "./Switch.js";
import { p as page } from "./index4.js";
import { clsx as clsx$1 } from "clsx";
import { o as on } from "./events.js";
import { isTabbable, tabbable, isFocusable, focusable } from "tabbable";
import { N as ATTACHMENT_KEY, O as run } from "./utils.js";
import parse from "style-to-object";
import {
	computePosition,
	offset,
	shift,
	flip,
	size,
	arrow,
	hide,
	limitShift,
} from "@floating-ui/dom";
import { b as base } from "./paths.js";
import { C as CopyToClipBoardBtn } from "./CopyToClipBoardBtn.js";
import katex from "katex";
import "katex/dist/contrib/mhchem.mjs";
import { Lexer, Marked } from "marked";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import json from "highlight.js/lib/languages/json";
import bash from "highlight.js/lib/languages/bash";
import shell from "highlight.js/lib/languages/shell";
import python from "highlight.js/lib/languages/python";
import go from "highlight.js/lib/languages/go";
import rust from "highlight.js/lib/languages/rust";
import java from "highlight.js/lib/languages/java";
import csharp from "highlight.js/lib/languages/csharp";
import cpp from "highlight.js/lib/languages/cpp";
import cLang from "highlight.js/lib/languages/c";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import scss from "highlight.js/lib/languages/scss";
import markdownLang from "highlight.js/lib/languages/markdown";
import yaml from "highlight.js/lib/languages/yaml";
import sql from "highlight.js/lib/languages/sql";
import plaintext from "highlight.js/lib/languages/plaintext";
import DOMPurify from "isomorphic-dompurify";
import { PROVIDERS_HUB_ORGS } from "@huggingface/inference";
import {
	b as MessageToolUpdateType,
	M as MessageUpdateType,
	T as ToolResultStatus,
} from "./Tool.js";
import { u as useSettingsStore } from "./settings2.js";
function createAttachmentKey() {
	return Symbol(ATTACHMENT_KEY);
}
function Checkmark_filled($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	$$payload.out += `<svg${spread_attributes(
		{
			viewBox: "0 0 32 32",
			width: "1.2em",
			height: "1.2em",
			...$$sanitized_props,
		},
		null,
		void 0,
		void 0,
		3
	)}>${html(`<path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z"/><path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585z"/>`)}</svg>`;
}
function Warning_filled($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	$$payload.out += `<svg${spread_attributes(
		{
			viewBox: "0 0 32 32",
			width: "1.2em",
			height: "1.2em",
			...$$sanitized_props,
		},
		null,
		void 0,
		void 0,
		3
	)}>${html(`<path fill="currentColor" d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2m-1.1 6h2.2v11h-2.2zM16 25c-.8 0-1.5-.7-1.5-1.5S15.2 22 16 22s1.5.7 1.5 1.5S16.8 25 16 25"/>`)}</svg>`;
}
function Pending_filled($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	$$payload.out += `<svg${spread_attributes(
		{
			viewBox: "0 0 32 32",
			width: "1.2em",
			height: "1.2em",
			...$$sanitized_props,
		},
		null,
		void 0,
		void 0,
		3
	)}>${html(`<path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2M8 18a2 2 0 1 1 2-2a2 2 0 0 1-2 2m8 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2m8 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2"/><path fill="none" d="M10 16a2 2 0 1 1-2-2a2 2 0 0 1 2 2m6-2a2 2 0 1 0 2 2a2 2 0 0 0-2-2m8 0a2 2 0 1 0 2 2a2 2 0 0 0-2-2"/>`)}</svg>`;
}
function Renew($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	$$payload.out += `<svg${spread_attributes(
		{
			viewBox: "0 0 32 32",
			width: "1.2em",
			height: "1.2em",
			...$$sanitized_props,
		},
		null,
		void 0,
		void 0,
		3
	)}>${html(`<path fill="currentColor" d="M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"/>`)}</svg>`;
}
function getMcpServerFaviconUrl(serverUrl, size2 = 64) {
	try {
		const parsed = new URL(serverUrl);
		const hostnameParts = parsed.hostname.split(".");
		const rootDomain =
			hostnameParts.length >= 2 ? hostnameParts.slice(-2).join(".") : parsed.hostname;
		const domain = `${parsed.protocol}//${rootDomain}`;
		return `https://www.google.com/s2/favicons?sz=${size2}&domain_url=${encodeURIComponent(domain)}`;
	} catch {
		return `https://www.google.com/s2/favicons?sz=${size2}&domain_url=${encodeURIComponent(serverUrl)}`;
	}
}
function isStrictHfMcpLogin(urlString) {
	try {
		const u = new URL(urlString);
		const host = u.hostname.toLowerCase();
		const allowedHosts = /* @__PURE__ */ new Set(["hf.co", "huggingface.co"]);
		return (
			u.protocol === "https:" &&
			allowedHosts.has(host) &&
			u.pathname === "/mcp" &&
			u.search === "?login"
		);
	} catch {
		return false;
	}
}
function ServerCard($$payload, $$props) {
	push();
	let { server, isSelected } = $$props;
	let isLoadingHealth = false;
	const isHfMcp = (() => isStrictHfMcpLogin(server.url))();
	const statusInfo = (() => {
		switch (server.status) {
			case "connected":
				return {
					label: "Connected",
					color: "text-green-600 dark:text-green-400",
					bgColor: "bg-green-100 dark:bg-green-900/20",
					icon: Checkmark_filled,
				};
			case "connecting":
				return {
					label: "Connecting...",
					color: "text-blue-600 dark:text-blue-400",
					bgColor: "bg-blue-100 dark:bg-blue-900/20",
					icon: Pending_filled,
				};
			case "error":
				return {
					label: "Error",
					color: "text-red-600 dark:text-red-400",
					bgColor: "bg-red-100 dark:bg-red-900/20",
					icon: Warning_filled,
				};
			case "disconnected":
			default:
				return {
					label: "Unknown",
					color: "text-gray-600 dark:text-gray-400",
					bgColor: "bg-gray-100 dark:bg-gray-700",
					icon: Pending_filled,
				};
		}
	})();
	function setEnabled(v) {
		if (v === isSelected) return;
		toggleServer(server.id);
		if (v && server.status !== "connected") handleHealthCheck();
	}
	async function handleHealthCheck() {
		isLoadingHealth = true;
		try {
			await healthCheckServer(server);
		} finally {
			isLoadingHealth = false;
		}
	}
	let $$settled = true;
	let $$inner_payload;
	function $$render_inner($$payload2) {
		var bind_get = () => isSelected;
		var bind_set = setEnabled;
		$$payload2.out += `<div${attr_class(`rounded-lg border bg-gradient-to-br transition-colors ${stringify(isSelected ? "border-blue-600/20 bg-blue-50 from-blue-500/5 to-transparent dark:border-blue-700/60 dark:bg-blue-900/10 dark:from-blue-900/20" : "border-gray-200 bg-white from-black/5 dark:border-gray-700 dark:bg-gray-800 dark:from-white/5")}`)}><div class="px-4 py-3.5"><div class="mb-3 flex items-start justify-between gap-3"><div class="min-w-0 flex-1"><div class="mb-0.5 flex items-center gap-2"><img${attr("src", getMcpServerFaviconUrl(server.url))} alt="" class="size-4 flex-shrink-0 rounded"/> <h3 class="truncate font-semibold text-gray-900 dark:text-gray-100">${escape_html(server.name)}</h3></div> <p class="truncate text-sm text-gray-600 dark:text-gray-400">${escape_html(server.url)}</p></div> `;
		Switch($$payload2, {
			name: `enable-${server.id}`,
			get checked() {
				return bind_get();
			},
			set checked($$value) {
				bind_set($$value);
			},
		});
		$$payload2.out += `<!----></div> `;
		if (server.status) {
			$$payload2.out += "<!--[-->";
			$$payload2.out += `<div class="mb-2 flex items-center gap-2"><span${attr_class(`inline-flex items-center gap-1 rounded-full ${stringify(statusInfo.bgColor)} py-0.5 pl-1.5 pr-2 text-xs font-medium ${stringify(statusInfo.color)}`)}>`;
			if (server.status === "connected") {
				$$payload2.out += "<!--[-->";
				Checkmark_filled($$payload2, { class: "size-3" });
			} else if (server.status === "connecting") {
				$$payload2.out += "<!--[1-->";
				Pending_filled($$payload2, { class: "size-3" });
			} else if (server.status === "error") {
				$$payload2.out += "<!--[2-->";
				Warning_filled($$payload2, { class: "size-3" });
			} else {
				$$payload2.out += "<!--[!-->";
				Pending_filled($$payload2, { class: "size-3" });
			}
			$$payload2.out += `<!--]--> ${escape_html(statusInfo.label)}</span> `;
			if (server.tools && server.tools.length > 0) {
				$$payload2.out += "<!--[-->";
				$$payload2.out += `<span class="inline-flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">`;
				Tools($$payload2, { class: "size-3" });
				$$payload2.out += `<!----> ${escape_html(server.tools.length)}
						${escape_html(server.tools.length === 1 ? "tool" : "tools")}</span>`;
			} else {
				$$payload2.out += "<!--[!-->";
			}
			$$payload2.out += `<!--]--></div>`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--> `;
		if (server.errorMessage) {
			$$payload2.out += "<!--[-->";
			$$payload2.out += `<div class="mb-2 flex items-center gap-2"><div class="line-clamp-6 break-words rounded bg-red-50 px-2 py-1 text-xs text-red-800 dark:bg-red-900/20 dark:text-red-200">${escape_html(server.errorMessage)}</div></div>`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--> <div class="flex flex-wrap gap-1"><button${attr("disabled", isLoadingHealth, true)} class="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-[.29rem] text-xs font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">`;
		Renew($$payload2, {
			class: `size-3 ${stringify(isLoadingHealth ? "animate-spin" : "")}`,
		});
		$$payload2.out += `<!----> Health Check</button> `;
		if (isHfMcp) {
			$$payload2.out += "<!--[-->";
			$$payload2.out += `<a href="https://huggingface.co/settings/mcp" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-[.29rem] text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600" aria-label="Open Hugging Face MCP settings">`;
			Settings($$payload2, { class: "size-3" });
			$$payload2.out += `<!----> Settings</a>`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--> `;
		if (server.type === "custom") {
			$$payload2.out += "<!--[-->";
			$$payload2.out += `<button class="flex items-center gap-1.5 rounded-lg border border-red-500/15 bg-red-50 px-2.5 py-[.29rem] text-xs font-medium text-red-600 hover:bg-red-100 dark:border-red-500/25 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50">`;
			Trash_can($$payload2, { class: "size-3" });
			$$payload2.out += `<!----> Delete</button>`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--></div> `;
		if (server.tools && server.tools.length > 0) {
			$$payload2.out += "<!--[-->";
			const each_array = ensure_array_like(server.tools);
			$$payload2.out += `<details class="mt-3"><summary class="cursor-pointer text-xs font-medium text-gray-700 dark:text-gray-300">Available Tools (${escape_html(server.tools.length)})</summary> <ul class="mt-2 space-y-1 text-xs"><!--[-->`;
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let tool = each_array[$$index];
				$$payload2.out += `<li class="text-gray-600 dark:text-gray-400"><span class="font-medium text-gray-900 dark:text-gray-100">${escape_html(tool.name)}</span> `;
				if (tool.description) {
					$$payload2.out += "<!--[-->";
					$$payload2.out += `<span class="text-gray-500 dark:text-gray-500">- ${escape_html(tool.description)}</span>`;
				} else {
					$$payload2.out += "<!--[!-->";
				}
				$$payload2.out += `<!--]--></li>`;
			}
			$$payload2.out += `<!--]--></ul></details>`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--></div></div>`;
	}
	do {
		$$settled = true;
		$$inner_payload = copy_payload($$payload);
		$$render_inner($$inner_payload);
	} while (!$$settled);
	assign_payload($$payload, $$inner_payload);
	pop();
}
function Add($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	$$payload.out += `<svg${spread_attributes(
		{
			viewBox: "0 0 32 32",
			width: "1.2em",
			height: "1.2em",
			...$$sanitized_props,
		},
		null,
		void 0,
		void 0,
		3
	)}>${html(`<path fill="currentColor" d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z"/>`)}</svg>`;
}
function Add_large($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	$$payload.out += `<svg${spread_attributes(
		{
			viewBox: "0 0 32 32",
			width: "1.2em",
			height: "1.2em",
			...$$sanitized_props,
		},
		null,
		void 0,
		void 0,
		3
	)}>${html(`<path fill="currentColor" d="M17 15V5h-2v10H5v2h10v10h2V17h10v-2z"/>`)}</svg>`;
}
function IconMCP($$payload, $$props) {
	let { classNames = "" } = $$props;
	$$payload.out += `<svg xmlns="http://www.w3.org/2000/svg"${attr_class(clsx(classNames))} width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m3.5 11.75l8.172-8.171a2.828 2.828 0 1 1 4 4m0 0L9.5 13.75m6.172-6.171a2.828 2.828 0 0 1 4 4l-6.965 6.964a1 1 0 0 0 0 1.414L14 21.25"></path><path d="m17.5 9.75l-6.172 6.171a2.829 2.829 0 0 1-4-4L13.5 5.749"></path></g></svg>`;
}
function MCPServerManager($$payload, $$props) {
	push();
	var $$store_subs;
	const publicConfig = usePublicConfig();
	let { onclose } = $$props;
	let isRefreshing = false;
	const baseServers = store_get(($$store_subs ??= {}), "$allMcpServers", allMcpServers).filter(
		(s) => s.type === "base"
	);
	const customServers = store_get(($$store_subs ??= {}), "$allMcpServers", allMcpServers).filter(
		(s) => s.type === "custom"
	);
	const enabledCount = store_get(
		($$store_subs ??= {}),
		"$enabledServersCount",
		enabledServersCount
	);
	Modal($$payload, {
		width: "w-[800px]",
		onclose,
		closeButton: true,
		children: ($$payload2) => {
			$$payload2.out += `<div class="p-6"><div class="mb-6"><h2 class="mb-1 text-xl font-semibold text-gray-900 dark:text-gray-200">`;
			{
				$$payload2.out += "<!--[-->";
				$$payload2.out += `MCP Servers`;
			}
			$$payload2.out += `<!--]--></h2> <p class="text-sm text-gray-600 dark:text-gray-400">`;
			{
				$$payload2.out += "<!--[-->";
				$$payload2.out += `Manage MCP servers to extend ${escape_html(publicConfig.PUBLIC_APP_NAME)} with external tools.`;
			}
			$$payload2.out += `<!--]--></p></div> `;
			{
				$$payload2.out += "<!--[-->";
				$$payload2.out += `<div${attr_class(`mb-6 flex justify-between rounded-lg p-4 max-sm:flex-col max-sm:gap-4 sm:items-center ${stringify(!enabledCount ? "bg-gray-100 dark:bg-white/5" : "bg-blue-50 dark:bg-blue-900/10")}`)}><div class="flex items-center gap-3"><div${attr_class("flex size-10 items-center justify-center rounded-xl bg-blue-500/10", void 0, { grayscale: !enabledCount })}>`;
				IconMCP($$payload2, {
					classNames: "size-8 text-blue-600 dark:text-blue-500",
				});
				$$payload2.out += `<!----></div> <div><p class="text-sm font-semibold text-gray-900 dark:text-gray-100">${escape_html(store_get(($$store_subs ??= {}), "$allMcpServers", allMcpServers).length)}
							${escape_html(store_get(($$store_subs ??= {}), "$allMcpServers", allMcpServers).length === 1 ? "server" : "servers")} configured</p> <p class="text-xs text-gray-600 dark:text-gray-400">${escape_html(enabledCount)} enabled</p></div></div> <div class="flex gap-2"><button${attr("disabled", isRefreshing, true)} class="btn gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">`;
				Renew($$payload2, {
					class: `size-4 ${stringify("")}`,
				});
				$$payload2.out += `<!----> ${escape_html("Refresh")}</button> <button class="btn flex items-center gap-0.5 rounded-lg bg-blue-600 py-1.5 pl-2 pr-3 text-sm font-medium text-white hover:bg-blue-600">`;
				Add_large($$payload2, { class: "size-4" });
				$$payload2.out += `<!----> Add Server</button></div></div> <div class="space-y-5">`;
				if (baseServers.length > 0) {
					$$payload2.out += "<!--[-->";
					const each_array = ensure_array_like(baseServers);
					$$payload2.out += `<div><h3 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">Base Servers (${escape_html(baseServers.length)})</h3> <div class="grid grid-cols-1 gap-3 md:grid-cols-2"><!--[-->`;
					for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
						let server = each_array[$$index];
						ServerCard($$payload2, {
							server,
							isSelected: store_get(
								($$store_subs ??= {}),
								"$selectedServerIds",
								selectedServerIds
							).has(server.id),
						});
					}
					$$payload2.out += `<!--]--></div></div>`;
				} else {
					$$payload2.out += "<!--[!-->";
				}
				$$payload2.out += `<!--]--> <div><h3 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">Custom Servers (${escape_html(customServers.length)})</h3> `;
				if (customServers.length === 0) {
					$$payload2.out += "<!--[-->";
					$$payload2.out += `<div class="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-8 dark:border-gray-700">`;
					Tools($$payload2, { class: "mb-3 size-12 text-gray-400" });
					$$payload2.out += `<!----> <p class="mb-1 text-sm font-medium text-gray-900 dark:text-gray-100">No custom servers yet</p> <p class="mb-4 text-xs text-gray-600 dark:text-gray-400">Add your own MCP servers with custom tools</p> <button class="flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">`;
					Add_large($$payload2, { class: "size-4" });
					$$payload2.out += `<!----> Add Your First Server</button></div>`;
				} else {
					$$payload2.out += "<!--[!-->";
					const each_array_1 = ensure_array_like(customServers);
					$$payload2.out += `<div class="grid grid-cols-1 gap-3 md:grid-cols-2"><!--[-->`;
					for (
						let $$index_1 = 0, $$length = each_array_1.length;
						$$index_1 < $$length;
						$$index_1++
					) {
						let server = each_array_1[$$index_1];
						ServerCard($$payload2, {
							server,
							isSelected: store_get(
								($$store_subs ??= {}),
								"$selectedServerIds",
								selectedServerIds
							).has(server.id),
						});
					}
					$$payload2.out += `<!--]--></div>`;
				}
				$$payload2.out += `<!--]--></div> <div class="rounded-lg bg-gray-50 p-4 dark:bg-gray-700"><h4 class="mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">💡 Quick Tips</h4> <ul class="space-y-1 text-xs text-gray-600 dark:text-gray-400"><li>• Only connect to servers you trust</li> <li>• Enable servers to make their tools available in chat</li> <li>• Use the Health Check button to verify server connectivity</li> <li>• You can add HTTP headers for authentication when required</li></ul></div></div>`;
			}
			$$payload2.out += `<!--]--></div>`;
		},
	});
	if ($$store_subs) unsubscribe_stores($$store_subs);
	pop();
}
const SvelteMap = globalThis.Map;
function createSubscriber(_) {
	return () => {};
}
function Chevron_left($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	$$payload.out += `<svg${spread_attributes(
		{
			viewBox: "0 0 32 32",
			width: "1.2em",
			height: "1.2em",
			...$$sanitized_props,
		},
		null,
		void 0,
		void 0,
		3
	)}>${html(`<path fill="currentColor" d="M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z"/>`)}</svg>`;
}
function Caret_down($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	$$payload.out += `<svg${spread_attributes(
		{
			viewBox: "0 0 32 32",
			width: "1.2em",
			height: "1.2em",
			...$$sanitized_props,
		},
		null,
		void 0,
		void 0,
		3
	)}>${html(`<path fill="currentColor" d="m24 12l-8 10l-8-10z"/>`)}</svg>`;
}
function isFunction$1(value) {
	return typeof value === "function";
}
function isObject(value) {
	return value !== null && typeof value === "object";
}
const CLASS_VALUE_PRIMITIVE_TYPES = ["string", "number", "bigint", "boolean"];
function isClassValue(value) {
	if (value === null || value === void 0) return true;
	if (CLASS_VALUE_PRIMITIVE_TYPES.includes(typeof value)) return true;
	if (Array.isArray(value)) return value.every((item) => isClassValue(item));
	if (typeof value === "object") {
		if (Object.getPrototypeOf(value) !== Object.prototype) return false;
		return true;
	}
	return false;
}
const BoxSymbol = Symbol("box");
const isWritableSymbol = Symbol("is-writable");
function boxWith(getter, setter) {
	const derived2 = getter();
	if (setter) {
		return {
			[BoxSymbol]: true,
			[isWritableSymbol]: true,
			get current() {
				return derived2;
			},
			set current(v) {
				setter(v);
			},
		};
	}
	return {
		[BoxSymbol]: true,
		get current() {
			return getter();
		},
	};
}
function isBox(value) {
	return isObject(value) && BoxSymbol in value;
}
function isWritableBox(value) {
	return isBox(value) && isWritableSymbol in value;
}
function boxFrom(value) {
	if (isBox(value)) return value;
	if (isFunction$1(value)) return boxWith(value);
	return simpleBox(value);
}
function boxFlatten(boxes) {
	return Object.entries(boxes).reduce((acc, [key, b]) => {
		if (!isBox(b)) {
			return Object.assign(acc, { [key]: b });
		}
		if (isWritableBox(b)) {
			Object.defineProperty(acc, key, {
				get() {
					return b.current;
				},
				set(v) {
					b.current = v;
				},
			});
		} else {
			Object.defineProperty(acc, key, {
				get() {
					return b.current;
				},
			});
		}
		return acc;
	}, {});
}
function toReadonlyBox(b) {
	if (!isWritableBox(b)) return b;
	return {
		[BoxSymbol]: true,
		get current() {
			return b.current;
		},
	};
}
function simpleBox(initialValue) {
	let current = initialValue;
	return {
		[BoxSymbol]: true,
		[isWritableSymbol]: true,
		get current() {
			return current;
		},
		set current(v) {
			current = v;
		},
	};
}
function box(initialValue) {
	let current = initialValue;
	return {
		[BoxSymbol]: true,
		[isWritableSymbol]: true,
		get current() {
			return current;
		},
		set current(v) {
			current = v;
		},
	};
}
box.from = boxFrom;
box.with = boxWith;
box.flatten = boxFlatten;
box.readonly = toReadonlyBox;
box.isBox = isBox;
box.isWritableBox = isWritableBox;
function composeHandlers(...handlers) {
	return function (e) {
		for (const handler of handlers) {
			if (!handler) continue;
			if (e.defaultPrevented) return;
			if (typeof handler === "function") {
				handler.call(this, e);
			} else {
				handler.current?.call(this, e);
			}
		}
	};
}
const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
	if (NUMBER_CHAR_RE.test(char)) return void 0;
	return char !== char.toLowerCase();
}
function splitByCase(str) {
	const parts = [];
	let buff = "";
	let previousUpper;
	let previousSplitter;
	for (const char of str) {
		const isSplitter = STR_SPLITTERS.includes(char);
		if (isSplitter === true) {
			parts.push(buff);
			buff = "";
			previousUpper = void 0;
			continue;
		}
		const isUpper = isUppercase(char);
		if (previousSplitter === false) {
			if (previousUpper === false && isUpper === true) {
				parts.push(buff);
				buff = char;
				previousUpper = isUpper;
				continue;
			}
			if (previousUpper === true && isUpper === false && buff.length > 1) {
				const lastChar = buff.at(-1);
				parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
				buff = lastChar + char;
				previousUpper = isUpper;
				continue;
			}
		}
		buff += char;
		previousUpper = isUpper;
		previousSplitter = isSplitter;
	}
	parts.push(buff);
	return parts;
}
function pascalCase(str) {
	if (!str) return "";
	return splitByCase(str)
		.map((p) => upperFirst(p))
		.join("");
}
function camelCase(str) {
	return lowerFirst(pascalCase(str || ""));
}
function upperFirst(str) {
	return str ? str[0].toUpperCase() + str.slice(1) : "";
}
function lowerFirst(str) {
	return str ? str[0].toLowerCase() + str.slice(1) : "";
}
function cssToStyleObj(css2) {
	if (!css2) return {};
	const styleObj = {};
	function iterator(name, value) {
		if (
			name.startsWith("-moz-") ||
			name.startsWith("-webkit-") ||
			name.startsWith("-ms-") ||
			name.startsWith("-o-")
		) {
			styleObj[pascalCase(name)] = value;
			return;
		}
		if (name.startsWith("--")) {
			styleObj[name] = value;
			return;
		}
		styleObj[camelCase(name)] = value;
	}
	parse(css2, iterator);
	return styleObj;
}
function executeCallbacks(...callbacks) {
	return (...args) => {
		for (const callback of callbacks) {
			if (typeof callback === "function") {
				callback(...args);
			}
		}
	};
}
function createParser(matcher, replacer) {
	const regex = RegExp(matcher, "g");
	return (str) => {
		if (typeof str !== "string") {
			throw new TypeError(`expected an argument of type string, but got ${typeof str}`);
		}
		if (!str.match(regex)) return str;
		return str.replace(regex, replacer);
	};
}
const camelToKebab = createParser(/[A-Z]/, (match) => `-${match.toLowerCase()}`);
function styleToCSS(styleObj) {
	if (!styleObj || typeof styleObj !== "object" || Array.isArray(styleObj)) {
		throw new TypeError(`expected an argument of type object, but got ${typeof styleObj}`);
	}
	return Object.keys(styleObj)
		.map((property) => `${camelToKebab(property)}: ${styleObj[property]};`)
		.join("\n");
}
function styleToString(style = {}) {
	return styleToCSS(style).replace("\n", " ");
}
const EVENT_LIST = [
	"onabort",
	"onanimationcancel",
	"onanimationend",
	"onanimationiteration",
	"onanimationstart",
	"onauxclick",
	"onbeforeinput",
	"onbeforetoggle",
	"onblur",
	"oncancel",
	"oncanplay",
	"oncanplaythrough",
	"onchange",
	"onclick",
	"onclose",
	"oncompositionend",
	"oncompositionstart",
	"oncompositionupdate",
	"oncontextlost",
	"oncontextmenu",
	"oncontextrestored",
	"oncopy",
	"oncuechange",
	"oncut",
	"ondblclick",
	"ondrag",
	"ondragend",
	"ondragenter",
	"ondragleave",
	"ondragover",
	"ondragstart",
	"ondrop",
	"ondurationchange",
	"onemptied",
	"onended",
	"onerror",
	"onfocus",
	"onfocusin",
	"onfocusout",
	"onformdata",
	"ongotpointercapture",
	"oninput",
	"oninvalid",
	"onkeydown",
	"onkeypress",
	"onkeyup",
	"onload",
	"onloadeddata",
	"onloadedmetadata",
	"onloadstart",
	"onlostpointercapture",
	"onmousedown",
	"onmouseenter",
	"onmouseleave",
	"onmousemove",
	"onmouseout",
	"onmouseover",
	"onmouseup",
	"onpaste",
	"onpause",
	"onplay",
	"onplaying",
	"onpointercancel",
	"onpointerdown",
	"onpointerenter",
	"onpointerleave",
	"onpointermove",
	"onpointerout",
	"onpointerover",
	"onpointerup",
	"onprogress",
	"onratechange",
	"onreset",
	"onresize",
	"onscroll",
	"onscrollend",
	"onsecuritypolicyviolation",
	"onseeked",
	"onseeking",
	"onselect",
	"onselectionchange",
	"onselectstart",
	"onslotchange",
	"onstalled",
	"onsubmit",
	"onsuspend",
	"ontimeupdate",
	"ontoggle",
	"ontouchcancel",
	"ontouchend",
	"ontouchmove",
	"ontouchstart",
	"ontransitioncancel",
	"ontransitionend",
	"ontransitionrun",
	"ontransitionstart",
	"onvolumechange",
	"onwaiting",
	"onwebkitanimationend",
	"onwebkitanimationiteration",
	"onwebkitanimationstart",
	"onwebkittransitionend",
	"onwheel",
];
const EVENT_LIST_SET = new Set(EVENT_LIST);
function isEventHandler(key) {
	return EVENT_LIST_SET.has(key);
}
function mergeProps(...args) {
	const result = { ...args[0] };
	for (let i = 1; i < args.length; i++) {
		const props = args[i];
		if (!props) continue;
		for (const key of Object.keys(props)) {
			const a = result[key];
			const b = props[key];
			const aIsFunction = typeof a === "function";
			const bIsFunction = typeof b === "function";
			if (aIsFunction && typeof bIsFunction && isEventHandler(key)) {
				const aHandler = a;
				const bHandler = b;
				result[key] = composeHandlers(aHandler, bHandler);
			} else if (aIsFunction && bIsFunction) {
				result[key] = executeCallbacks(a, b);
			} else if (key === "class") {
				const aIsClassValue = isClassValue(a);
				const bIsClassValue = isClassValue(b);
				if (aIsClassValue && bIsClassValue) {
					result[key] = clsx$1(a, b);
				} else if (aIsClassValue) {
					result[key] = clsx$1(a);
				} else if (bIsClassValue) {
					result[key] = clsx$1(b);
				}
			} else if (key === "style") {
				const aIsObject = typeof a === "object";
				const bIsObject = typeof b === "object";
				const aIsString = typeof a === "string";
				const bIsString = typeof b === "string";
				if (aIsObject && bIsObject) {
					result[key] = { ...a, ...b };
				} else if (aIsObject && bIsString) {
					const parsedStyle = cssToStyleObj(b);
					result[key] = { ...a, ...parsedStyle };
				} else if (aIsString && bIsObject) {
					const parsedStyle = cssToStyleObj(a);
					result[key] = { ...parsedStyle, ...b };
				} else if (aIsString && bIsString) {
					const parsedStyleA = cssToStyleObj(a);
					const parsedStyleB = cssToStyleObj(b);
					result[key] = { ...parsedStyleA, ...parsedStyleB };
				} else if (aIsObject) {
					result[key] = a;
				} else if (bIsObject) {
					result[key] = b;
				} else if (aIsString) {
					result[key] = a;
				} else if (bIsString) {
					result[key] = b;
				}
			} else {
				result[key] = b !== void 0 ? b : a;
			}
		}
		for (const key of Object.getOwnPropertySymbols(props)) {
			const a = result[key];
			const b = props[key];
			result[key] = b !== void 0 ? b : a;
		}
	}
	if (typeof result.style === "object") {
		result.style = styleToString(result.style).replaceAll("\n", " ");
	}
	if (result.hidden === false) {
		result.hidden = void 0;
		delete result.hidden;
	}
	if (result.disabled === false) {
		result.disabled = void 0;
		delete result.disabled;
	}
	return result;
}
const defaultWindow = void 0;
function getActiveElement$1(document2) {
	let activeElement = document2.activeElement;
	while (activeElement?.shadowRoot) {
		const node = activeElement.shadowRoot.activeElement;
		if (node === activeElement) break;
		else activeElement = node;
	}
	return activeElement;
}
class ActiveElement {
	#document;
	#subscribe;
	constructor(options = {}) {
		const { window: window2 = defaultWindow, document: document2 = window2?.document } = options;
		if (window2 === void 0) return;
		this.#document = document2;
		this.#subscribe = createSubscriber();
	}
	get current() {
		this.#subscribe?.();
		if (!this.#document) return null;
		return getActiveElement$1(this.#document);
	}
}
new ActiveElement();
function isFunction(value) {
	return typeof value === "function";
}
class Context {
	#name;
	#key;
	/**
	 * @param name The name of the context.
	 * This is used for generating the context key and error messages.
	 */
	constructor(name) {
		this.#name = name;
		this.#key = Symbol(name);
	}
	/**
	 * The key used to get and set the context.
	 *
	 * It is not recommended to use this value directly.
	 * Instead, use the methods provided by this class.
	 */
	get key() {
		return this.#key;
	}
	/**
	 * Checks whether this has been set in the context of a parent component.
	 *
	 * Must be called during component initialisation.
	 */
	exists() {
		return hasContext(this.#key);
	}
	/**
	 * Retrieves the context that belongs to the closest parent component.
	 *
	 * Must be called during component initialisation.
	 *
	 * @throws An error if the context does not exist.
	 */
	get() {
		const context = getContext(this.#key);
		if (context === void 0) {
			throw new Error(`Context "${this.#name}" not found`);
		}
		return context;
	}
	/**
	 * Retrieves the context that belongs to the closest parent component,
	 * or the given fallback value if the context does not exist.
	 *
	 * Must be called during component initialisation.
	 */
	getOr(fallback) {
		const context = getContext(this.#key);
		if (context === void 0) {
			return fallback;
		}
		return context;
	}
	/**
	 * Associates the given value with the current component and returns it.
	 *
	 * Must be called during component initialisation.
	 */
	set(context) {
		return setContext(this.#key, context);
	}
}
function runWatcher(sources, flush, effect, options = {}) {
	const { lazy = false } = options;
}
function watch(sources, effect, options) {
	runWatcher(sources, "post", effect, options);
}
function watchPre(sources, effect, options) {
	runWatcher(sources, "pre", effect, options);
}
watch.pre = watchPre;
function get$1(value) {
	if (isFunction(value)) {
		return value();
	}
	return value;
}
class ElementSize {
	// no need to use `$state` here since we are using createSubscriber
	#size = { width: 0, height: 0 };
	#observed = false;
	#options;
	#node;
	#window;
	// we use a derived here to extract the width so that if the width doesn't change we don't get a state update
	// which we would get if we would just use a getter since the version of the subscriber will be changing
	#width = derived(() => {
		this.#subscribe()?.();
		return this.getSize().width;
	});
	// we use a derived here to extract the height so that if the height doesn't change we don't get a state update
	// which we would get if we would just use a getter since the version of the subscriber will be changing
	#height = derived(() => {
		this.#subscribe()?.();
		return this.getSize().height;
	});
	// we need to use a derived here because the class will be created before the node is bound to the ref
	#subscribe = derived(() => {
		const node$ = get$1(this.#node);
		if (!node$) return;
		return createSubscriber();
	});
	constructor(node, options = { box: "border-box" }) {
		this.#window = options.window ?? defaultWindow;
		this.#options = options;
		this.#node = node;
		this.#size = { width: 0, height: 0 };
	}
	calculateSize() {
		const element = get$1(this.#node);
		if (!element || !this.#window) {
			return;
		}
		const offsetWidth = element.offsetWidth;
		const offsetHeight = element.offsetHeight;
		if (this.#options.box === "border-box") {
			return { width: offsetWidth, height: offsetHeight };
		}
		const style = this.#window.getComputedStyle(element);
		const paddingWidth = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
		const paddingHeight = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
		const borderWidth = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
		const borderHeight = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
		const contentWidth = offsetWidth - paddingWidth - borderWidth;
		const contentHeight = offsetHeight - paddingHeight - borderHeight;
		return { width: contentWidth, height: contentHeight };
	}
	getSize() {
		return this.#observed ? this.#size : (this.calculateSize() ?? this.#size);
	}
	get current() {
		this.#subscribe()?.();
		return this.getSize();
	}
	get width() {
		return this.#width();
	}
	get height() {
		return this.#height();
	}
}
function afterSleep(ms, cb) {
	return setTimeout(cb, ms);
}
function afterTick(fn) {
	tick().then(fn);
}
const ELEMENT_NODE = 1;
const DOCUMENT_NODE = 9;
const DOCUMENT_FRAGMENT_NODE = 11;
function isHTMLElement$1(node) {
	return isObject(node) && node.nodeType === ELEMENT_NODE && typeof node.nodeName === "string";
}
function isDocument(node) {
	return isObject(node) && node.nodeType === DOCUMENT_NODE;
}
function isWindow(node) {
	return isObject(node) && node.constructor?.name === "VisualViewport";
}
function isNode(node) {
	return isObject(node) && node.nodeType !== void 0;
}
function isShadowRoot(node) {
	return isNode(node) && node.nodeType === DOCUMENT_FRAGMENT_NODE && "host" in node;
}
function contains(parent, child) {
	if (!parent || !child) return false;
	if (!isHTMLElement$1(parent) || !isHTMLElement$1(child)) return false;
	const rootNode = child.getRootNode?.();
	if (parent === child) return true;
	if (parent.contains(child)) return true;
	if (rootNode && isShadowRoot(rootNode)) {
		let next = child;
		while (next) {
			if (parent === next) return true;
			next = next.parentNode || next.host;
		}
	}
	return false;
}
function getDocument(node) {
	if (isDocument(node)) return node;
	if (isWindow(node)) return node.document;
	return node?.ownerDocument ?? document;
}
function getWindow(node) {
	if (isShadowRoot(node)) return getWindow(node.host);
	if (isDocument(node)) return node.defaultView ?? window;
	if (isHTMLElement$1(node)) return node.ownerDocument?.defaultView ?? window;
	return window;
}
function getActiveElement(rootNode) {
	let activeElement = rootNode.activeElement;
	while (activeElement?.shadowRoot) {
		const el = activeElement.shadowRoot.activeElement;
		if (el === activeElement) break;
		else activeElement = el;
	}
	return activeElement;
}
class DOMContext {
	element;
	#root = derived(() => {
		if (!this.element.current) return document;
		const rootNode = this.element.current.getRootNode() ?? document;
		return rootNode;
	});
	get root() {
		return this.#root();
	}
	set root($$value) {
		return this.#root($$value);
	}
	constructor(element) {
		if (typeof element === "function") {
			this.element = boxWith(element);
		} else {
			this.element = element;
		}
	}
	getDocument = () => {
		return getDocument(this.root);
	};
	getWindow = () => {
		return this.getDocument().defaultView ?? window;
	};
	getActiveElement = () => {
		return getActiveElement(this.root);
	};
	isActiveElement = (node) => {
		return node === this.getActiveElement();
	};
	getElementById(id) {
		return this.root.getElementById(id);
	}
	querySelector = (selector) => {
		if (!this.root) return null;
		return this.root.querySelector(selector);
	};
	querySelectorAll = (selector) => {
		if (!this.root) return [];
		return this.root.querySelectorAll(selector);
	};
	setTimeout = (callback, delay) => {
		return this.getWindow().setTimeout(callback, delay);
	};
	clearTimeout = (timeoutId) => {
		return this.getWindow().clearTimeout(timeoutId);
	};
}
function attachRef(ref, onChange) {
	return {
		[createAttachmentKey()]: (node) => {
			if (isBox(ref)) {
				ref.current = node;
				run(() => onChange?.(node));
				return () => {
					if ("isConnected" in node && node.isConnected) return;
					ref.current = null;
					onChange?.(null);
				};
			}
			ref(node);
			run(() => onChange?.(node));
			return () => {
				if ("isConnected" in node && node.isConnected) return;
				ref(null);
				onChange?.(null);
			};
		},
	};
}
function boolToStr(condition) {
	return condition ? "true" : "false";
}
function boolToEmptyStrOrUndef(condition) {
	return condition ? "" : void 0;
}
function getDataOpenClosed(condition) {
	return condition ? "open" : "closed";
}
function getAriaChecked(checked, indeterminate) {
	if (indeterminate) {
		return "mixed";
	}
	return checked ? "true" : "false";
}
class BitsAttrs {
	#variant;
	#prefix;
	attrs;
	constructor(config) {
		this.#variant = config.getVariant ? config.getVariant() : null;
		this.#prefix = this.#variant ? `data-${this.#variant}-` : `data-${config.component}-`;
		this.getAttr = this.getAttr.bind(this);
		this.selector = this.selector.bind(this);
		this.attrs = Object.fromEntries(config.parts.map((part) => [part, this.getAttr(part)]));
	}
	getAttr(part, variantOverride) {
		if (variantOverride) return `data-${variantOverride}-${part}`;
		return `${this.#prefix}${part}`;
	}
	selector(part, variantOverride) {
		return `[${this.getAttr(part, variantOverride)}]`;
	}
}
function createBitsAttrs(config) {
	const bitsAttrs = new BitsAttrs(config);
	return {
		...bitsAttrs.attrs,
		selector: bitsAttrs.selector,
		getAttr: bitsAttrs.getAttr,
	};
}
const ARROW_DOWN = "ArrowDown";
const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
const ARROW_UP = "ArrowUp";
const END = "End";
const ENTER = "Enter";
const ESCAPE = "Escape";
const HOME = "Home";
const PAGE_DOWN = "PageDown";
const PAGE_UP = "PageUp";
const SPACE = " ";
const TAB = "Tab";
function getElemDirection(elem) {
	const style = window.getComputedStyle(elem);
	const direction = style.getPropertyValue("direction");
	return direction;
}
function getNextKey(dir = "ltr", orientation = "horizontal") {
	return {
		horizontal: dir === "rtl" ? ARROW_LEFT : ARROW_RIGHT,
		vertical: ARROW_DOWN,
	}[orientation];
}
function getPrevKey(dir = "ltr", orientation = "horizontal") {
	return {
		horizontal: dir === "rtl" ? ARROW_RIGHT : ARROW_LEFT,
		vertical: ARROW_UP,
	}[orientation];
}
function getDirectionalKeys(dir = "ltr", orientation = "horizontal") {
	if (!["ltr", "rtl"].includes(dir)) dir = "ltr";
	if (!["horizontal", "vertical"].includes(orientation)) orientation = "horizontal";
	return {
		nextKey: getNextKey(dir, orientation),
		prevKey: getPrevKey(dir, orientation),
	};
}
const isBrowser = typeof document !== "undefined";
const isIOS = getIsIOS();
function getIsIOS() {
	return (
		isBrowser &&
		window?.navigator?.userAgent &&
		(/iP(ad|hone|od)/.test(window.navigator.userAgent) || // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
			(window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent)))
	);
}
function isHTMLElement(element) {
	return element instanceof HTMLElement;
}
function isElement(element) {
	return element instanceof Element;
}
function isElementOrSVGElement(element) {
	return element instanceof Element || element instanceof SVGElement;
}
function isNotNull(value) {
	return value !== null;
}
function isSelectableInput(element) {
	return element instanceof HTMLInputElement && "select" in element;
}
class RovingFocusGroup {
	#opts;
	#currentTabStopId = box(null);
	constructor(opts) {
		this.#opts = opts;
	}
	getCandidateNodes() {
		return [];
	}
	focusFirstCandidate() {
		const items = this.getCandidateNodes();
		if (!items.length) return;
		items[0]?.focus();
	}
	handleKeydown(node, e, both = false) {
		const rootNode = this.#opts.rootNode.current;
		if (!rootNode || !node) return;
		const items = this.getCandidateNodes();
		if (!items.length) return;
		const currentIndex = items.indexOf(node);
		const dir = getElemDirection(rootNode);
		const { nextKey, prevKey } = getDirectionalKeys(dir, this.#opts.orientation.current);
		const loop = this.#opts.loop.current;
		const keyToIndex = {
			[nextKey]: currentIndex + 1,
			[prevKey]: currentIndex - 1,
			[HOME]: 0,
			[END]: items.length - 1,
		};
		if (both) {
			const altNextKey = nextKey === ARROW_DOWN ? ARROW_RIGHT : ARROW_DOWN;
			const altPrevKey = prevKey === ARROW_UP ? ARROW_LEFT : ARROW_UP;
			keyToIndex[altNextKey] = currentIndex + 1;
			keyToIndex[altPrevKey] = currentIndex - 1;
		}
		let itemIndex = keyToIndex[e.key];
		if (itemIndex === void 0) return;
		e.preventDefault();
		if (itemIndex < 0 && loop) {
			itemIndex = items.length - 1;
		} else if (itemIndex === items.length && loop) {
			itemIndex = 0;
		}
		const itemToFocus = items[itemIndex];
		if (!itemToFocus) return;
		itemToFocus.focus();
		this.#currentTabStopId.current = itemToFocus.id;
		this.#opts.onCandidateFocus?.(itemToFocus);
		return itemToFocus;
	}
	getTabIndex(node) {
		const items = this.getCandidateNodes();
		const anyActive = this.#currentTabStopId.current !== null;
		if (node && !anyActive && items[0] === node) {
			this.#currentTabStopId.current = node.id;
			return 0;
		} else if (node?.id === this.#currentTabStopId.current) {
			return 0;
		}
		return -1;
	}
	setCurrentTabStopId(id) {
		this.#currentTabStopId.current = id;
	}
	focusCurrentTabStop() {
		const currentTabStopId = this.#currentTabStopId.current;
		if (!currentTabStopId) return;
		const currentTabStop = this.#opts.rootNode.current?.querySelector(`#${currentTabStopId}`);
		if (!currentTabStop || !isHTMLElement(currentTabStop)) return;
		currentTabStop.focus();
	}
}
class AnimationsComplete {
	#opts;
	#currentFrame = null;
	constructor(opts) {
		this.#opts = opts;
	}
	#cleanup() {
		if (!this.#currentFrame) return;
		window.cancelAnimationFrame(this.#currentFrame);
		this.#currentFrame = null;
	}
	run(fn) {
		this.#cleanup();
		const node = this.#opts.ref.current;
		if (!node) return;
		if (typeof node.getAnimations !== "function") {
			this.#executeCallback(fn);
			return;
		}
		this.#currentFrame = window.requestAnimationFrame(() => {
			const animations = node.getAnimations();
			if (animations.length === 0) {
				this.#executeCallback(fn);
				return;
			}
			Promise.allSettled(animations.map((animation) => animation.finished)).then(() => {
				this.#executeCallback(fn);
			});
		});
	}
	#executeCallback(fn) {
		const execute = () => {
			fn();
		};
		if (this.#opts.afterTick) {
			afterTick(execute);
		} else {
			execute();
		}
	}
}
class PresenceManager {
	#opts;
	#enabled;
	#afterAnimations;
	#shouldRender = false;
	constructor(opts) {
		this.#opts = opts;
		this.#shouldRender = opts.open.current;
		this.#enabled = opts.enabled ?? true;
		this.#afterAnimations = new AnimationsComplete({
			ref: this.#opts.ref,
			afterTick: this.#opts.open,
		});
		watch(
			() => this.#opts.open.current,
			(isOpen) => {
				if (isOpen) this.#shouldRender = true;
				if (!this.#enabled) return;
				this.#afterAnimations.run(() => {
					if (isOpen === this.#opts.open.current) {
						if (!this.#opts.open.current) {
							this.#shouldRender = false;
						}
						this.#opts.onComplete?.();
					}
				});
			}
		);
	}
	get shouldRender() {
		return this.#shouldRender;
	}
}
function noop() {}
function createId(prefixOrUid, uid) {
	return `bits-${prefixOrUid}`;
}
const BitsConfigContext = new Context("BitsConfig");
function getBitsConfig() {
	const fallback = new BitsConfigState(null, {});
	return BitsConfigContext.getOr(fallback).opts;
}
class BitsConfigState {
	opts;
	constructor(parent, opts) {
		const resolveConfigOption = createConfigResolver(parent, opts);
		this.opts = {
			defaultPortalTo: resolveConfigOption((config) => config.defaultPortalTo),
			defaultLocale: resolveConfigOption((config) => config.defaultLocale),
		};
	}
}
function createConfigResolver(parent, currentOpts) {
	return (getter) => {
		const configOption = boxWith(() => {
			const value = getter(currentOpts)?.current;
			if (value !== void 0) return value;
			if (parent === null) return void 0;
			return getter(parent.opts)?.current;
		});
		return configOption;
	};
}
function createPropResolver(configOption, fallback) {
	return (getProp) => {
		const config = getBitsConfig();
		return boxWith(() => {
			const propValue = getProp();
			if (propValue !== void 0) return propValue;
			const option = configOption(config).current;
			if (option !== void 0) return option;
			return fallback;
		});
	};
}
const resolvePortalToProp = createPropResolver((config) => config.defaultPortalTo, "body");
function Portal($$payload, $$props) {
	push();
	let { to: toProp, children, disabled } = $$props;
	const to = resolvePortalToProp(() => toProp);
	getAllContexts();
	let target = getTarget();
	function getTarget() {
		if (!isBrowser || disabled) return null;
		let localTarget = null;
		if (typeof to.current === "string") {
			const target2 = document.querySelector(to.current);
			localTarget = target2;
		} else {
			localTarget = to.current;
		}
		return localTarget;
	}
	let instance;
	function unmountInstance() {
		if (instance) {
			unmount();
			instance = null;
		}
	}
	watch([() => target, () => disabled], ([target2, disabled2]) => {
		if (!target2 || disabled2) {
			unmountInstance();
			return;
		}
		instance = mount();
		return () => {
			unmountInstance();
		};
	});
	if (disabled) {
		$$payload.out += "<!--[-->";
		children?.($$payload);
		$$payload.out += `<!---->`;
	} else {
		$$payload.out += "<!--[!-->";
	}
	$$payload.out += `<!--]-->`;
	pop();
}
class CustomEventDispatcher {
	eventName;
	options;
	constructor(eventName, options = { bubbles: true, cancelable: true }) {
		this.eventName = eventName;
		this.options = options;
	}
	createEvent(detail) {
		return new CustomEvent(this.eventName, {
			...this.options,
			detail,
		});
	}
	dispatch(element, detail) {
		const event = this.createEvent(detail);
		element.dispatchEvent(event);
		return event;
	}
	listen(element, callback, options) {
		const handler = (event) => {
			callback(event);
		};
		return on(element, this.eventName, handler, options);
	}
}
function debounce(fn, wait = 500) {
	let timeout = null;
	const debounced = (...args) => {
		if (timeout !== null) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => {
			fn(...args);
		}, wait);
	};
	debounced.destroy = () => {
		if (timeout !== null) {
			clearTimeout(timeout);
			timeout = null;
		}
	};
	return debounced;
}
function isOrContainsTarget(node, target) {
	return node === target || node.contains(target);
}
function getOwnerDocument(el) {
	return el?.ownerDocument ?? document;
}
function isClickTrulyOutside(event, contentNode) {
	const { clientX, clientY } = event;
	const rect = contentNode.getBoundingClientRect();
	return clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom;
}
const SELECTION_KEYS = [ENTER, SPACE];
const FIRST_KEYS = [ARROW_DOWN, PAGE_UP, HOME];
const LAST_KEYS = [ARROW_UP, PAGE_DOWN, END];
const FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
const SUB_OPEN_KEYS = {
	ltr: [...SELECTION_KEYS, ARROW_RIGHT],
	rtl: [...SELECTION_KEYS, ARROW_LEFT],
};
const SUB_CLOSE_KEYS = {
	ltr: [ARROW_LEFT],
	rtl: [ARROW_RIGHT],
};
function isIndeterminate(checked) {
	return checked === "indeterminate";
}
function getCheckedState(checked) {
	return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function isMouseEvent(event) {
	return event.pointerType === "mouse";
}
function focus(element, { select = false } = {}) {
	if (!element || !element.focus) return;
	const doc = getDocument(element);
	if (doc.activeElement === element) return;
	const previouslyFocusedElement = doc.activeElement;
	element.focus({ preventScroll: true });
	if (element !== previouslyFocusedElement && isSelectableInput(element) && select) {
		element.select();
	}
}
function focusFirst(candidates, { select = false } = {}, getActiveElement2) {
	const previouslyFocusedElement = getActiveElement2();
	for (const candidate of candidates) {
		focus(candidate, { select });
		if (getActiveElement2() !== previouslyFocusedElement) return true;
	}
}
function getTabbableOptions() {
	return {
		getShadowRoot: true,
		displayCheck:
			// JSDOM does not support the `tabbable` library. To solve this we can
			// check if `ResizeObserver` is a real function (not polyfilled), which
			// determines if the current environment is JSDOM-like.
			typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]")
				? "full"
				: "none",
	};
}
function getTabbableFrom(currentNode, direction) {
	if (!isTabbable(currentNode, getTabbableOptions())) {
		return getTabbableFromFocusable(currentNode, direction);
	}
	const doc = getDocument(currentNode);
	const allTabbable = tabbable(doc.body, getTabbableOptions());
	if (direction === "prev") allTabbable.reverse();
	const activeIndex = allTabbable.indexOf(currentNode);
	if (activeIndex === -1) return doc.body;
	const nextTabbableElements = allTabbable.slice(activeIndex + 1);
	return nextTabbableElements[0];
}
function getTabbableFromFocusable(currentNode, direction) {
	const doc = getDocument(currentNode);
	if (!isFocusable(currentNode, getTabbableOptions())) return doc.body;
	const allFocusable = focusable(doc.body, getTabbableOptions());
	if (direction === "prev") allFocusable.reverse();
	const activeIndex = allFocusable.indexOf(currentNode);
	if (activeIndex === -1) return doc.body;
	const nextFocusableElements = allFocusable.slice(activeIndex + 1);
	return nextFocusableElements.find((node) => isTabbable(node, getTabbableOptions())) ?? doc.body;
}
function getNextMatch(values, search, currentMatch) {
	const lowerSearch = search.toLowerCase();
	if (lowerSearch.endsWith(" ")) {
		const searchWithoutSpace = lowerSearch.slice(0, -1);
		const matchesWithoutSpace = values.filter((value) =>
			value.toLowerCase().startsWith(searchWithoutSpace)
		);
		if (matchesWithoutSpace.length <= 1) {
			return getNextMatch(values, searchWithoutSpace, currentMatch);
		}
		const currentMatchLowercase = currentMatch?.toLowerCase();
		if (
			currentMatchLowercase &&
			currentMatchLowercase.startsWith(searchWithoutSpace) &&
			currentMatchLowercase.charAt(searchWithoutSpace.length) === " " &&
			search.trim() === searchWithoutSpace
		) {
			return currentMatch;
		}
		const spacedMatches = values.filter((value) => value.toLowerCase().startsWith(lowerSearch));
		if (spacedMatches.length > 0) {
			const currentMatchIndex2 = currentMatch ? values.indexOf(currentMatch) : -1;
			let wrappedMatches = wrapArray(spacedMatches, Math.max(currentMatchIndex2, 0));
			const nextMatch2 = wrappedMatches.find((match) => match !== currentMatch);
			return nextMatch2 || currentMatch;
		}
	}
	const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
	const normalizedSearch = isRepeated ? search[0] : search;
	const normalizedLowerSearch = normalizedSearch.toLowerCase();
	const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
	let wrappedValues = wrapArray(values, Math.max(currentMatchIndex, 0));
	const excludeCurrentMatch = normalizedSearch.length === 1;
	if (excludeCurrentMatch) wrappedValues = wrappedValues.filter((v) => v !== currentMatch);
	const nextMatch = wrappedValues.find((value) =>
		value?.toLowerCase().startsWith(normalizedLowerSearch)
	);
	return nextMatch !== currentMatch ? nextMatch : void 0;
}
function wrapArray(array, startIndex) {
	return array.map((_, index) => array[(startIndex + index) % array.length]);
}
const defaultOptions = { afterMs: 1e4, onChange: noop };
function boxAutoReset(defaultValue, options) {
	const { afterMs, onChange, getWindow: getWindow2 } = { ...defaultOptions, ...options };
	let timeout = null;
	let value = defaultValue;
	function resetAfter() {
		return getWindow2().setTimeout(() => {
			value = defaultValue;
			onChange?.(defaultValue);
		}, afterMs);
	}
	return boxWith(
		() => value,
		(v) => {
			value = v;
			onChange?.(v);
			if (timeout) getWindow2().clearTimeout(timeout);
			timeout = resetAfter();
		}
	);
}
class DOMTypeahead {
	#opts;
	#search;
	#onMatch = derived(() => {
		if (this.#opts.onMatch) return this.#opts.onMatch;
		return (node) => node.focus();
	});
	#getCurrentItem = derived(() => {
		if (this.#opts.getCurrentItem) return this.#opts.getCurrentItem;
		return this.#opts.getActiveElement;
	});
	constructor(opts) {
		this.#opts = opts;
		this.#search = boxAutoReset("", { afterMs: 1e3, getWindow: opts.getWindow });
		this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this);
		this.resetTypeahead = this.resetTypeahead.bind(this);
	}
	handleTypeaheadSearch(key, candidates) {
		if (!candidates.length) return;
		this.#search.current = this.#search.current + key;
		const currentItem = this.#getCurrentItem()();
		const currentMatch = candidates.find((item) => item === currentItem)?.textContent?.trim() ?? "";
		const values = candidates.map((item) => item.textContent?.trim() ?? "");
		const nextMatch = getNextMatch(values, this.#search.current, currentMatch);
		const newItem = candidates.find((item) => item.textContent?.trim() === nextMatch);
		if (newItem) this.#onMatch()(newItem);
		return newItem;
	}
	resetTypeahead() {
		this.#search.current = "";
	}
	get search() {
		return this.#search.current;
	}
}
class GraceArea {
	#opts;
	#enabled;
	#isPointerInTransit;
	#pointerGraceArea = null;
	constructor(opts) {
		this.#opts = opts;
		this.#enabled = derived(() => this.#opts.enabled());
		this.#isPointerInTransit = boxAutoReset(false, {
			afterMs: opts.transitTimeout ?? 300,
			onChange: (value) => {
				if (!this.#enabled()) return;
				this.#opts.setIsPointerInTransit?.(value);
			},
			getWindow: () => getWindow(this.#opts.triggerNode()),
		});
		watch(
			[opts.triggerNode, opts.contentNode, opts.enabled],
			([triggerNode, contentNode, enabled]) => {
				if (!triggerNode || !contentNode || !enabled) return;
				const handleTriggerLeave = (e) => {
					this.#createGraceArea(e, contentNode);
				};
				const handleContentLeave = (e) => {
					this.#createGraceArea(e, triggerNode);
				};
				return executeCallbacks(
					on(triggerNode, "pointerleave", handleTriggerLeave),
					on(contentNode, "pointerleave", handleContentLeave)
				);
			}
		);
		watch(
			() => this.#pointerGraceArea,
			() => {
				const handleTrackPointerGrace = (e) => {
					if (!this.#pointerGraceArea) return;
					const target = e.target;
					if (!isElement(target)) return;
					const pointerPosition = { x: e.clientX, y: e.clientY };
					const hasEnteredTarget =
						opts.triggerNode()?.contains(target) || opts.contentNode()?.contains(target);
					const isPointerOutsideGraceArea = !isPointInPolygon(
						pointerPosition,
						this.#pointerGraceArea
					);
					if (hasEnteredTarget) {
						this.#removeGraceArea();
					} else if (isPointerOutsideGraceArea) {
						this.#removeGraceArea();
						opts.onPointerExit();
					}
				};
				const doc = getDocument(opts.triggerNode() ?? opts.contentNode());
				if (!doc) return;
				return on(doc, "pointermove", handleTrackPointerGrace);
			}
		);
	}
	#removeGraceArea() {
		this.#pointerGraceArea = null;
		this.#isPointerInTransit.current = false;
	}
	#createGraceArea(e, hoverTarget) {
		const currentTarget = e.currentTarget;
		if (!isHTMLElement(currentTarget)) return;
		const exitPoint = { x: e.clientX, y: e.clientY };
		const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
		const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
		const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
		const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
		this.#pointerGraceArea = graceArea;
		this.#isPointerInTransit.current = true;
	}
}
function getExitSideFromRect(point, rect) {
	const top = Math.abs(rect.top - point.y);
	const bottom = Math.abs(rect.bottom - point.y);
	const right = Math.abs(rect.right - point.x);
	const left = Math.abs(rect.left - point.x);
	switch (Math.min(top, bottom, right, left)) {
		case left:
			return "left";
		case right:
			return "right";
		case top:
			return "top";
		case bottom:
			return "bottom";
		default:
			throw new Error("unreachable");
	}
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
	const tipPadding = padding * 1.5;
	switch (exitSide) {
		case "top":
			return [
				{
					x: exitPoint.x - padding,
					y: exitPoint.y + padding,
				},
				{ x: exitPoint.x, y: exitPoint.y - tipPadding },
				{
					x: exitPoint.x + padding,
					y: exitPoint.y + padding,
				},
			];
		case "bottom":
			return [
				{
					x: exitPoint.x - padding,
					y: exitPoint.y - padding,
				},
				{ x: exitPoint.x, y: exitPoint.y + tipPadding },
				{
					x: exitPoint.x + padding,
					y: exitPoint.y - padding,
				},
			];
		case "left":
			return [
				{
					x: exitPoint.x + padding,
					y: exitPoint.y - padding,
				},
				{ x: exitPoint.x - tipPadding, y: exitPoint.y },
				{
					x: exitPoint.x + padding,
					y: exitPoint.y + padding,
				},
			];
		case "right":
			return [
				{
					x: exitPoint.x - padding,
					y: exitPoint.y - padding,
				},
				{ x: exitPoint.x + tipPadding, y: exitPoint.y },
				{
					x: exitPoint.x - padding,
					y: exitPoint.y + padding,
				},
			];
	}
}
function getPointsFromRect(rect) {
	const { top, right, bottom, left } = rect;
	return [
		{ x: left, y: top },
		{ x: right, y: top },
		{ x: right, y: bottom },
		{ x: left, y: bottom },
	];
}
function isPointInPolygon(point, polygon) {
	const { x, y } = point;
	let inside = false;
	for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
		const xi = polygon[i].x;
		const yi = polygon[i].y;
		const xj = polygon[j].x;
		const yj = polygon[j].y;
		const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
		if (intersect) inside = !inside;
	}
	return inside;
}
function getHull(points) {
	const newPoints = points.slice();
	newPoints.sort((a, b) => {
		if (a.x < b.x) return -1;
		else if (a.x > b.x) return 1;
		else if (a.y < b.y) return -1;
		else if (a.y > b.y) return 1;
		else return 0;
	});
	return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
	if (points.length <= 1) return points.slice();
	const upperHull = [];
	for (let i = 0; i < points.length; i++) {
		const p = points[i];
		while (upperHull.length >= 2) {
			const q = upperHull[upperHull.length - 1];
			const r = upperHull[upperHull.length - 2];
			if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();
			else break;
		}
		upperHull.push(p);
	}
	upperHull.pop();
	const lowerHull = [];
	for (let i = points.length - 1; i >= 0; i--) {
		const p = points[i];
		while (lowerHull.length >= 2) {
			const q = lowerHull[lowerHull.length - 1];
			const r = lowerHull[lowerHull.length - 2];
			if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();
			else break;
		}
		lowerHull.push(p);
	}
	lowerHull.pop();
	if (
		upperHull.length === 1 &&
		lowerHull.length === 1 &&
		upperHull[0].x === lowerHull[0].x &&
		upperHull[0].y === lowerHull[0].y
	)
		return upperHull;
	else return upperHull.concat(lowerHull);
}
const CONTEXT_MENU_TRIGGER_ATTR = "data-context-menu-trigger";
const CONTEXT_MENU_CONTENT_ATTR = "data-context-menu-content";
const MenuRootContext = new Context("Menu.Root");
const MenuMenuContext = new Context("Menu.Root | Menu.Sub");
const MenuContentContext = new Context("Menu.Content");
const MenuCheckboxGroupContext = new Context("Menu.CheckboxGroup");
const MenuOpenEvent = new CustomEventDispatcher("bitsmenuopen", {
	bubbles: false,
	cancelable: true,
});
const menuAttrs = createBitsAttrs({
	component: "menu",
	parts: [
		"trigger",
		"content",
		"sub-trigger",
		"item",
		"group",
		"group-heading",
		"checkbox-group",
		"checkbox-item",
		"radio-group",
		"radio-item",
		"separator",
		"sub-content",
		"arrow",
	],
});
class MenuRootState {
	static create(opts) {
		const root = new MenuRootState(opts);
		return MenuRootContext.set(root);
	}
	opts;
	isUsingKeyboard = new IsUsingKeyboard();
	ignoreCloseAutoFocus = false;
	isPointerInTransit = false;
	constructor(opts) {
		this.opts = opts;
	}
	getBitsAttr = (part) => {
		return menuAttrs.getAttr(part, this.opts.variant.current);
	};
}
class MenuMenuState {
	static create(opts, root) {
		return MenuMenuContext.set(new MenuMenuState(opts, root, null));
	}
	opts;
	root;
	parentMenu;
	contentId = boxWith(() => "");
	contentNode = null;
	contentPresence;
	triggerNode = null;
	constructor(opts, root, parentMenu) {
		this.opts = opts;
		this.root = root;
		this.parentMenu = parentMenu;
		this.contentPresence = new PresenceManager({
			ref: boxWith(() => this.contentNode),
			open: this.opts.open,
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			},
		});
		if (parentMenu) {
			watch(
				() => parentMenu.opts.open.current,
				() => {
					if (parentMenu.opts.open.current) return;
					this.opts.open.current = false;
				}
			);
		}
	}
	toggleOpen() {
		this.opts.open.current = !this.opts.open.current;
	}
	onOpen() {
		this.opts.open.current = true;
	}
	onClose() {
		this.opts.open.current = false;
	}
}
class MenuContentState {
	static create(opts) {
		return MenuContentContext.set(new MenuContentState(opts, MenuMenuContext.get()));
	}
	opts;
	parentMenu;
	rovingFocusGroup;
	domContext;
	attachment;
	search = "";
	#timer = 0;
	#handleTypeaheadSearch;
	mounted = false;
	#isSub;
	constructor(opts, parentMenu) {
		this.opts = opts;
		this.parentMenu = parentMenu;
		this.domContext = new DOMContext(opts.ref);
		this.attachment = attachRef(this.opts.ref, (v) => {
			if (this.parentMenu.contentNode !== v) {
				this.parentMenu.contentNode = v;
			}
		});
		parentMenu.contentId = opts.id;
		this.#isSub = opts.isSub ?? false;
		this.onkeydown = this.onkeydown.bind(this);
		this.onblur = this.onblur.bind(this);
		this.onfocus = this.onfocus.bind(this);
		this.handleInteractOutside = this.handleInteractOutside.bind(this);
		new GraceArea({
			contentNode: () => this.parentMenu.contentNode,
			triggerNode: () => this.parentMenu.triggerNode,
			enabled: () =>
				this.parentMenu.opts.open.current &&
				Boolean(
					this.parentMenu.triggerNode?.hasAttribute(this.parentMenu.root.getBitsAttr("sub-trigger"))
				),
			onPointerExit: () => {
				this.parentMenu.opts.open.current = false;
			},
			setIsPointerInTransit: (value) => {
				this.parentMenu.root.isPointerInTransit = value;
			},
		});
		this.#handleTypeaheadSearch = new DOMTypeahead({
			getActiveElement: () => this.domContext.getActiveElement(),
			getWindow: () => this.domContext.getWindow(),
		}).handleTypeaheadSearch;
		this.rovingFocusGroup = new RovingFocusGroup({
			rootNode: boxWith(() => this.parentMenu.contentNode),
			candidateAttr: this.parentMenu.root.getBitsAttr("item"),
			loop: this.opts.loop,
			orientation: boxWith(() => "vertical"),
		});
		watch(
			() => this.parentMenu.contentNode,
			(contentNode) => {
				if (!contentNode) return;
				const handler = () => {
					afterTick(() => {
						if (!this.parentMenu.root.isUsingKeyboard.current) return;
						this.rovingFocusGroup.focusFirstCandidate();
					});
				};
				return MenuOpenEvent.listen(contentNode, handler);
			}
		);
	}
	#getCandidateNodes() {
		const node = this.parentMenu.contentNode;
		if (!node) return [];
		const candidates = Array.from(
			node.querySelectorAll(`[${this.parentMenu.root.getBitsAttr("item")}]:not([data-disabled])`)
		);
		return candidates;
	}
	#isPointerMovingToSubmenu() {
		return this.parentMenu.root.isPointerInTransit;
	}
	onCloseAutoFocus = (e) => {
		this.opts.onCloseAutoFocus.current?.(e);
		if (e.defaultPrevented || this.#isSub) return;
		if (this.parentMenu.triggerNode && isTabbable(this.parentMenu.triggerNode)) {
			e.preventDefault();
			this.parentMenu.triggerNode.focus();
		}
	};
	handleTabKeyDown(e) {
		let rootMenu = this.parentMenu;
		while (rootMenu.parentMenu !== null) {
			rootMenu = rootMenu.parentMenu;
		}
		if (!rootMenu.triggerNode) return;
		e.preventDefault();
		const nodeToFocus = getTabbableFrom(rootMenu.triggerNode, e.shiftKey ? "prev" : "next");
		if (nodeToFocus) {
			this.parentMenu.root.ignoreCloseAutoFocus = true;
			rootMenu.onClose();
			afterTick(() => {
				nodeToFocus.focus();
				afterTick(() => {
					this.parentMenu.root.ignoreCloseAutoFocus = false;
				});
			});
		} else {
			this.domContext.getDocument().body.focus();
		}
	}
	onkeydown(e) {
		if (e.defaultPrevented) return;
		if (e.key === TAB) {
			this.handleTabKeyDown(e);
			return;
		}
		const target = e.target;
		const currentTarget = e.currentTarget;
		if (!isHTMLElement(target) || !isHTMLElement(currentTarget)) return;
		const isKeydownInside =
			target.closest(`[${this.parentMenu.root.getBitsAttr("content")}]`)?.id ===
			this.parentMenu.contentId.current;
		const isModifierKey = e.ctrlKey || e.altKey || e.metaKey;
		const isCharacterKey = e.key.length === 1;
		const kbdFocusedEl = this.rovingFocusGroup.handleKeydown(target, e);
		if (kbdFocusedEl) return;
		if (e.code === "Space") return;
		const candidateNodes = this.#getCandidateNodes();
		if (isKeydownInside) {
			if (!isModifierKey && isCharacterKey) {
				this.#handleTypeaheadSearch(e.key, candidateNodes);
			}
		}
		if (e.target?.id !== this.parentMenu.contentId.current) return;
		if (!FIRST_LAST_KEYS.includes(e.key)) return;
		e.preventDefault();
		if (LAST_KEYS.includes(e.key)) {
			candidateNodes.reverse();
		}
		focusFirst(candidateNodes, { select: false }, () => this.domContext.getActiveElement());
	}
	onblur(e) {
		if (!isElement(e.currentTarget)) return;
		if (!isElement(e.target)) return;
		if (!e.currentTarget.contains?.(e.target)) {
			this.domContext.getWindow().clearTimeout(this.#timer);
			this.search = "";
		}
	}
	onfocus(_) {
		if (!this.parentMenu.root.isUsingKeyboard.current) return;
		afterTick(() => this.rovingFocusGroup.focusFirstCandidate());
	}
	onItemEnter() {
		return this.#isPointerMovingToSubmenu();
	}
	onItemLeave(e) {
		if (e.currentTarget.hasAttribute(this.parentMenu.root.getBitsAttr("sub-trigger"))) return;
		if (this.#isPointerMovingToSubmenu() || this.parentMenu.root.isUsingKeyboard.current) return;
		const contentNode = this.parentMenu.contentNode;
		contentNode?.focus();
		this.rovingFocusGroup.setCurrentTabStopId("");
	}
	onTriggerLeave() {
		if (this.#isPointerMovingToSubmenu()) return true;
		return false;
	}
	handleInteractOutside(e) {
		if (!isElementOrSVGElement(e.target)) return;
		const triggerId = this.parentMenu.triggerNode?.id;
		if (e.target.id === triggerId) {
			e.preventDefault();
			return;
		}
		if (e.target.closest(`#${triggerId}`)) {
			e.preventDefault();
		}
	}
	get shouldRender() {
		return this.parentMenu.contentPresence.shouldRender;
	}
	#snippetProps = derived(() => ({ open: this.parentMenu.opts.open.current }));
	get snippetProps() {
		return this.#snippetProps();
	}
	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		role: "menu",
		"aria-orientation": "vertical",
		[this.parentMenu.root.getBitsAttr("content")]: "",
		"data-state": getDataOpenClosed(this.parentMenu.opts.open.current),
		onkeydown: this.onkeydown,
		onblur: this.onblur,
		onfocus: this.onfocus,
		dir: this.parentMenu.root.opts.dir.current,
		style: { pointerEvents: "auto" },
		...this.attachment,
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
	popperProps = {
		onCloseAutoFocus: (e) => this.onCloseAutoFocus(e),
	};
}
class MenuItemSharedState {
	opts;
	content;
	attachment;
	#isFocused = false;
	constructor(opts, content) {
		this.opts = opts;
		this.content = content;
		this.attachment = attachRef(this.opts.ref);
		this.onpointermove = this.onpointermove.bind(this);
		this.onpointerleave = this.onpointerleave.bind(this);
		this.onfocus = this.onfocus.bind(this);
		this.onblur = this.onblur.bind(this);
	}
	onpointermove(e) {
		if (e.defaultPrevented) return;
		if (!isMouseEvent(e)) return;
		if (this.opts.disabled.current) {
			this.content.onItemLeave(e);
		} else {
			const defaultPrevented = this.content.onItemEnter();
			if (defaultPrevented) return;
			const item = e.currentTarget;
			if (!isHTMLElement(item)) return;
			item.focus();
		}
	}
	onpointerleave(e) {
		if (e.defaultPrevented) return;
		if (!isMouseEvent(e)) return;
		this.content.onItemLeave(e);
	}
	onfocus(e) {
		afterTick(() => {
			if (e.defaultPrevented || this.opts.disabled.current) return;
			this.#isFocused = true;
		});
	}
	onblur(e) {
		afterTick(() => {
			if (e.defaultPrevented) return;
			this.#isFocused = false;
		});
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		tabindex: -1,
		role: "menuitem",
		"aria-disabled": boolToStr(this.opts.disabled.current),
		"data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
		"data-highlighted": this.#isFocused ? "" : void 0,
		[this.content.parentMenu.root.getBitsAttr("item")]: "",
		//
		onpointermove: this.onpointermove,
		onpointerleave: this.onpointerleave,
		onfocus: this.onfocus,
		onblur: this.onblur,
		...this.attachment,
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
}
class MenuItemState {
	static create(opts) {
		const item = new MenuItemSharedState(opts, MenuContentContext.get());
		return new MenuItemState(opts, item);
	}
	opts;
	item;
	root;
	#isPointerDown = false;
	constructor(opts, item) {
		this.opts = opts;
		this.item = item;
		this.root = item.content.parentMenu.root;
		this.onkeydown = this.onkeydown.bind(this);
		this.onclick = this.onclick.bind(this);
		this.onpointerdown = this.onpointerdown.bind(this);
		this.onpointerup = this.onpointerup.bind(this);
	}
	#handleSelect() {
		if (this.item.opts.disabled.current) return;
		const selectEvent = new CustomEvent("menuitemselect", { bubbles: true, cancelable: true });
		this.opts.onSelect.current(selectEvent);
		if (selectEvent.defaultPrevented) {
			this.item.content.parentMenu.root.isUsingKeyboard.current = false;
			return;
		}
		if (this.opts.closeOnSelect.current) {
			this.item.content.parentMenu.root.opts.onClose();
		}
	}
	onkeydown(e) {
		const isTypingAhead = this.item.content.search !== "";
		if (this.item.opts.disabled.current || (isTypingAhead && e.key === SPACE)) return;
		if (SELECTION_KEYS.includes(e.key)) {
			if (!isHTMLElement(e.currentTarget)) return;
			e.currentTarget.click();
			e.preventDefault();
		}
	}
	onclick(_) {
		if (this.item.opts.disabled.current) return;
		this.#handleSelect();
	}
	onpointerup(e) {
		if (e.defaultPrevented) return;
		if (!this.#isPointerDown) {
			if (!isHTMLElement(e.currentTarget)) return;
			e.currentTarget?.click();
		}
	}
	onpointerdown(_) {
		this.#isPointerDown = true;
	}
	#props = derived(() =>
		mergeProps(this.item.props, {
			onclick: this.onclick,
			onpointerdown: this.onpointerdown,
			onpointerup: this.onpointerup,
			onkeydown: this.onkeydown,
		})
	);
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
}
class MenuSubTriggerState {
	static create(opts) {
		const content = MenuContentContext.get();
		const item = new MenuItemSharedState(opts, content);
		const submenu = MenuMenuContext.get();
		return new MenuSubTriggerState(opts, item, content, submenu);
	}
	opts;
	item;
	content;
	submenu;
	attachment;
	#openTimer = null;
	constructor(opts, item, content, submenu) {
		this.opts = opts;
		this.item = item;
		this.content = content;
		this.submenu = submenu;
		this.attachment = attachRef(this.opts.ref, (v) => (this.submenu.triggerNode = v));
		this.onpointerleave = this.onpointerleave.bind(this);
		this.onpointermove = this.onpointermove.bind(this);
		this.onkeydown = this.onkeydown.bind(this);
		this.onclick = this.onclick.bind(this);
	}
	#clearOpenTimer() {
		if (this.#openTimer === null) return;
		this.content.domContext.getWindow().clearTimeout(this.#openTimer);
		this.#openTimer = null;
	}
	onpointermove(e) {
		if (!isMouseEvent(e)) return;
		if (
			!this.item.opts.disabled.current &&
			!this.submenu.opts.open.current &&
			!this.#openTimer &&
			!this.content.parentMenu.root.isPointerInTransit
		) {
			this.#openTimer = this.content.domContext.setTimeout(() => {
				this.submenu.onOpen();
				this.#clearOpenTimer();
			}, this.opts.openDelay.current);
		}
	}
	onpointerleave(e) {
		if (!isMouseEvent(e)) return;
		this.#clearOpenTimer();
	}
	onkeydown(e) {
		const isTypingAhead = this.content.search !== "";
		if (this.item.opts.disabled.current || (isTypingAhead && e.key === SPACE)) return;
		if (SUB_OPEN_KEYS[this.submenu.root.opts.dir.current].includes(e.key)) {
			e.currentTarget.click();
			e.preventDefault();
		}
	}
	onclick(e) {
		if (this.item.opts.disabled.current) return;
		if (!isHTMLElement(e.currentTarget)) return;
		e.currentTarget.focus();
		const selectEvent = new CustomEvent("menusubtriggerselect", {
			bubbles: true,
			cancelable: true,
		});
		this.opts.onSelect.current(selectEvent);
		if (!this.submenu.opts.open.current) {
			this.submenu.onOpen();
			afterTick(() => {
				const contentNode = this.submenu.contentNode;
				if (!contentNode) return;
				MenuOpenEvent.dispatch(contentNode);
			});
		}
	}
	#props = derived(() =>
		mergeProps(
			{
				"aria-haspopup": "menu",
				"aria-expanded": boolToStr(this.submenu.opts.open.current),
				"data-state": getDataOpenClosed(this.submenu.opts.open.current),
				"aria-controls": this.submenu.opts.open.current ? this.submenu.contentId.current : void 0,
				[this.submenu.root.getBitsAttr("sub-trigger")]: "",
				onclick: this.onclick,
				onpointermove: this.onpointermove,
				onpointerleave: this.onpointerleave,
				onkeydown: this.onkeydown,
				...this.attachment,
			},
			this.item.props
		)
	);
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
}
class MenuCheckboxItemState {
	static create(opts, checkboxGroup) {
		const item = new MenuItemState(opts, new MenuItemSharedState(opts, MenuContentContext.get()));
		return new MenuCheckboxItemState(opts, item, checkboxGroup);
	}
	opts;
	item;
	group;
	constructor(opts, item, group = null) {
		this.opts = opts;
		this.item = item;
		this.group = group;
		if (this.group) {
			watch(
				() => this.group.opts.value.current,
				(groupValues) => {
					this.opts.checked.current = groupValues.includes(this.opts.value.current);
				}
			);
			watch(
				() => this.opts.checked.current,
				(checked) => {
					if (checked) {
						this.group.addValue(this.opts.value.current);
					} else {
						this.group.removeValue(this.opts.value.current);
					}
				}
			);
		}
	}
	toggleChecked() {
		if (this.opts.indeterminate.current) {
			this.opts.indeterminate.current = false;
			this.opts.checked.current = true;
		} else {
			this.opts.checked.current = !this.opts.checked.current;
		}
	}
	#snippetProps = derived(() => ({
		checked: this.opts.checked.current,
		indeterminate: this.opts.indeterminate.current,
	}));
	get snippetProps() {
		return this.#snippetProps();
	}
	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}
	#props = derived(() => ({
		...this.item.props,
		role: "menuitemcheckbox",
		"aria-checked": getAriaChecked(this.opts.checked.current, this.opts.indeterminate.current),
		"data-state": getCheckedState(this.opts.checked.current),
		[this.item.root.getBitsAttr("checkbox-item")]: "",
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
}
class MenuSeparatorState {
	static create(opts) {
		return new MenuSeparatorState(opts, MenuRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		role: "group",
		[this.root.getBitsAttr("separator")]: "",
		...this.attachment,
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
}
class DropdownMenuTriggerState {
	static create(opts) {
		return new DropdownMenuTriggerState(opts, MenuMenuContext.get());
	}
	opts;
	parentMenu;
	attachment;
	constructor(opts, parentMenu) {
		this.opts = opts;
		this.parentMenu = parentMenu;
		this.attachment = attachRef(this.opts.ref, (v) => (this.parentMenu.triggerNode = v));
	}
	onclick = (e) => {
		if (this.opts.disabled.current || e.detail !== 0) return;
		this.parentMenu.toggleOpen();
		e.preventDefault();
	};
	onpointerdown = (e) => {
		if (this.opts.disabled.current) return;
		if (e.pointerType === "touch") return e.preventDefault();
		if (e.button === 0 && e.ctrlKey === false) {
			this.parentMenu.toggleOpen();
			if (!this.parentMenu.opts.open.current) e.preventDefault();
		}
	};
	onpointerup = (e) => {
		if (this.opts.disabled.current) return;
		if (e.pointerType === "touch") {
			e.preventDefault();
			this.parentMenu.toggleOpen();
		}
	};
	onkeydown = (e) => {
		if (this.opts.disabled.current) return;
		if (e.key === SPACE || e.key === ENTER) {
			this.parentMenu.toggleOpen();
			e.preventDefault();
			return;
		}
		if (e.key === ARROW_DOWN) {
			this.parentMenu.onOpen();
			e.preventDefault();
		}
	};
	#ariaControls = derived(() => {
		if (this.parentMenu.opts.open.current && this.parentMenu.contentId.current)
			return this.parentMenu.contentId.current;
		return void 0;
	});
	#props = derived(() => ({
		id: this.opts.id.current,
		disabled: this.opts.disabled.current,
		"aria-haspopup": "menu",
		"aria-expanded": boolToStr(this.parentMenu.opts.open.current),
		"aria-controls": this.#ariaControls(),
		"data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
		"data-state": getDataOpenClosed(this.parentMenu.opts.open.current),
		[this.parentMenu.root.getBitsAttr("trigger")]: "",
		//
		onclick: this.onclick,
		onpointerdown: this.onpointerdown,
		onpointerup: this.onpointerup,
		onkeydown: this.onkeydown,
		...this.attachment,
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
}
class MenuSubmenuState {
	static create(opts) {
		const menu = MenuMenuContext.get();
		return MenuMenuContext.set(new MenuMenuState(opts, menu.root, menu));
	}
}
globalThis.bitsDismissableLayers ??= /* @__PURE__ */ new Map();
class DismissibleLayerState {
	static create(opts) {
		return new DismissibleLayerState(opts);
	}
	opts;
	#interactOutsideProp;
	#behaviorType;
	#interceptedEvents = { pointerdown: false };
	#isResponsibleLayer = false;
	#isFocusInsideDOMTree = false;
	#documentObj = void 0;
	#onFocusOutside;
	#unsubClickListener = noop;
	constructor(opts) {
		this.opts = opts;
		this.#behaviorType = opts.interactOutsideBehavior;
		this.#interactOutsideProp = opts.onInteractOutside;
		this.#onFocusOutside = opts.onFocusOutside;
		let unsubEvents = noop;
		const cleanup = () => {
			this.#resetState();
			globalThis.bitsDismissableLayers.delete(this);
			this.#handleInteractOutside.destroy();
			unsubEvents();
		};
		watch([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
			if (!this.opts.enabled.current || !this.opts.ref.current) return;
			afterSleep(1, () => {
				if (!this.opts.ref.current) return;
				globalThis.bitsDismissableLayers.set(this, this.#behaviorType);
				unsubEvents();
				unsubEvents = this.#addEventListeners();
			});
			return cleanup;
		});
	}
	#handleFocus = (event) => {
		if (event.defaultPrevented) return;
		if (!this.opts.ref.current) return;
		afterTick(() => {
			if (!this.opts.ref.current || this.#isTargetWithinLayer(event.target)) return;
			if (event.target && !this.#isFocusInsideDOMTree) {
				this.#onFocusOutside.current?.(event);
			}
		});
	};
	#addEventListeners() {
		return executeCallbacks(
			/**
			 * CAPTURE INTERACTION START
			 * mark interaction-start event as intercepted.
			 * mark responsible layer during interaction start
			 * to avoid checking if is responsible layer during interaction end
			 * when a new floating element may have been opened.
			 */
			on(
				this.#documentObj,
				"pointerdown",
				executeCallbacks(this.#markInterceptedEvent, this.#markResponsibleLayer),
				{ capture: true }
			),
			/**
			 * BUBBLE INTERACTION START
			 * Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
			 * to avoid prematurely checking if other events were intercepted.
			 */
			on(
				this.#documentObj,
				"pointerdown",
				executeCallbacks(this.#markNonInterceptedEvent, this.#handleInteractOutside)
			),
			/**
			 * HANDLE FOCUS OUTSIDE
			 */
			on(this.#documentObj, "focusin", this.#handleFocus)
		);
	}
	#handleDismiss = (e) => {
		let event = e;
		if (event.defaultPrevented) {
			event = createWrappedEvent(e);
		}
		this.#interactOutsideProp.current(e);
	};
	#handleInteractOutside = debounce((e) => {
		if (!this.opts.ref.current) {
			this.#unsubClickListener();
			return;
		}
		const isEventValid =
			this.opts.isValidEvent.current(e, this.opts.ref.current) ||
			isValidEvent(e, this.opts.ref.current);
		if (!this.#isResponsibleLayer || this.#isAnyEventIntercepted() || !isEventValid) {
			this.#unsubClickListener();
			return;
		}
		let event = e;
		if (event.defaultPrevented) {
			event = createWrappedEvent(event);
		}
		if (
			this.#behaviorType.current !== "close" &&
			this.#behaviorType.current !== "defer-otherwise-close"
		) {
			this.#unsubClickListener();
			return;
		}
		if (e.pointerType === "touch") {
			this.#unsubClickListener();
			this.#unsubClickListener = on(this.#documentObj, "click", this.#handleDismiss, {
				once: true,
			});
		} else {
			this.#interactOutsideProp.current(event);
		}
	}, 10);
	#markInterceptedEvent = (e) => {
		this.#interceptedEvents[e.type] = true;
	};
	#markNonInterceptedEvent = (e) => {
		this.#interceptedEvents[e.type] = false;
	};
	#markResponsibleLayer = () => {
		if (!this.opts.ref.current) return;
		this.#isResponsibleLayer = isResponsibleLayer(this.opts.ref.current);
	};
	#isTargetWithinLayer = (target) => {
		if (!this.opts.ref.current) return false;
		return isOrContainsTarget(this.opts.ref.current, target);
	};
	#resetState = debounce(() => {
		for (const eventType in this.#interceptedEvents) {
			this.#interceptedEvents[eventType] = false;
		}
		this.#isResponsibleLayer = false;
	}, 20);
	#isAnyEventIntercepted() {
		const i = Object.values(this.#interceptedEvents).some(Boolean);
		return i;
	}
	#onfocuscapture = () => {
		this.#isFocusInsideDOMTree = true;
	};
	#onblurcapture = () => {
		this.#isFocusInsideDOMTree = false;
	};
	props = {
		onfocuscapture: this.#onfocuscapture,
		onblurcapture: this.#onblurcapture,
	};
}
function getTopMostDismissableLayer(layersArr = [...globalThis.bitsDismissableLayers]) {
	return layersArr.findLast(
		([_, { current: behaviorType }]) => behaviorType === "close" || behaviorType === "ignore"
	);
}
function isResponsibleLayer(node) {
	const layersArr = [...globalThis.bitsDismissableLayers];
	const topMostLayer = getTopMostDismissableLayer(layersArr);
	if (topMostLayer) return topMostLayer[0].opts.ref.current === node;
	const [firstLayerNode] = layersArr[0];
	return firstLayerNode.opts.ref.current === node;
}
function isValidEvent(e, node) {
	const target = e.target;
	if (!isElementOrSVGElement(target)) return false;
	const targetIsContextMenuTrigger = Boolean(target.closest(`[${CONTEXT_MENU_TRIGGER_ATTR}]`));
	if ("button" in e && e.button > 0 && !targetIsContextMenuTrigger) return false;
	if ("button" in e && e.button === 0 && targetIsContextMenuTrigger) return true;
	const nodeIsContextMenu = Boolean(node.closest(`[${CONTEXT_MENU_CONTENT_ATTR}]`));
	if (targetIsContextMenuTrigger && nodeIsContextMenu) return false;
	const ownerDocument = getOwnerDocument(target);
	const isValid =
		ownerDocument.documentElement.contains(target) &&
		!isOrContainsTarget(node, target) &&
		isClickTrulyOutside(e, node);
	return isValid;
}
function createWrappedEvent(e) {
	const capturedCurrentTarget = e.currentTarget;
	const capturedTarget = e.target;
	let newEvent;
	if (e instanceof PointerEvent) {
		newEvent = new PointerEvent(e.type, e);
	} else {
		newEvent = new PointerEvent("pointerdown", e);
	}
	let isPrevented = false;
	const wrappedEvent = new Proxy(newEvent, {
		get: (target, prop) => {
			if (prop === "currentTarget") {
				return capturedCurrentTarget;
			}
			if (prop === "target") {
				return capturedTarget;
			}
			if (prop === "preventDefault") {
				return () => {
					isPrevented = true;
					if (typeof target.preventDefault === "function") {
						target.preventDefault();
					}
				};
			}
			if (prop === "defaultPrevented") {
				return isPrevented;
			}
			if (prop in target) {
				return target[prop];
			}
			return e[prop];
		},
	});
	return wrappedEvent;
}
function Dismissible_layer($$payload, $$props) {
	push();
	let {
		interactOutsideBehavior = "close",
		onInteractOutside = noop,
		onFocusOutside = noop,
		id,
		children,
		enabled,
		isValidEvent: isValidEvent2 = () => false,
		ref,
	} = $$props;
	const dismissibleLayerState = DismissibleLayerState.create({
		id: boxWith(() => id),
		interactOutsideBehavior: boxWith(() => interactOutsideBehavior),
		onInteractOutside: boxWith(() => onInteractOutside),
		enabled: boxWith(() => enabled),
		onFocusOutside: boxWith(() => onFocusOutside),
		isValidEvent: boxWith(() => isValidEvent2),
		ref,
	});
	children?.($$payload, { props: dismissibleLayerState.props });
	$$payload.out += `<!---->`;
	pop();
}
globalThis.bitsEscapeLayers ??= /* @__PURE__ */ new Map();
class EscapeLayerState {
	static create(opts) {
		return new EscapeLayerState(opts);
	}
	opts;
	domContext;
	constructor(opts) {
		this.opts = opts;
		this.domContext = new DOMContext(this.opts.ref);
		let unsubEvents = noop;
		watch(
			() => opts.enabled.current,
			(enabled) => {
				if (enabled) {
					globalThis.bitsEscapeLayers.set(this, opts.escapeKeydownBehavior);
					unsubEvents = this.#addEventListener();
				}
				return () => {
					unsubEvents();
					globalThis.bitsEscapeLayers.delete(this);
				};
			}
		);
	}
	#addEventListener = () => {
		return on(this.domContext.getDocument(), "keydown", this.#onkeydown, { passive: false });
	};
	#onkeydown = (e) => {
		if (e.key !== ESCAPE || !isResponsibleEscapeLayer(this)) return;
		const clonedEvent = new KeyboardEvent(e.type, e);
		e.preventDefault();
		const behaviorType = this.opts.escapeKeydownBehavior.current;
		if (behaviorType !== "close" && behaviorType !== "defer-otherwise-close") return;
		this.opts.onEscapeKeydown.current(clonedEvent);
	};
}
function isResponsibleEscapeLayer(instance) {
	const layersArr = [...globalThis.bitsEscapeLayers];
	const topMostLayer = layersArr.findLast(
		([_, { current: behaviorType }]) => behaviorType === "close" || behaviorType === "ignore"
	);
	if (topMostLayer) return topMostLayer[0] === instance;
	const [firstLayerNode] = layersArr[0];
	return firstLayerNode === instance;
}
function Escape_layer($$payload, $$props) {
	push();
	let { escapeKeydownBehavior = "close", onEscapeKeydown = noop, children, enabled, ref } = $$props;
	EscapeLayerState.create({
		escapeKeydownBehavior: boxWith(() => escapeKeydownBehavior),
		onEscapeKeydown: boxWith(() => onEscapeKeydown),
		enabled: boxWith(() => enabled),
		ref,
	});
	children?.($$payload);
	$$payload.out += `<!---->`;
	pop();
}
class FocusScopeManager {
	static instance;
	#scopeStack = simpleBox([]);
	#focusHistory = /* @__PURE__ */ new WeakMap();
	#preFocusHistory = /* @__PURE__ */ new WeakMap();
	static getInstance() {
		if (!this.instance) {
			this.instance = new FocusScopeManager();
		}
		return this.instance;
	}
	register(scope) {
		const current = this.getActive();
		if (current && current !== scope) {
			current.pause();
		}
		const activeElement = document.activeElement;
		if (activeElement && activeElement !== document.body) {
			this.#preFocusHistory.set(scope, activeElement);
		}
		this.#scopeStack.current = this.#scopeStack.current.filter((s) => s !== scope);
		this.#scopeStack.current.unshift(scope);
	}
	unregister(scope) {
		this.#scopeStack.current = this.#scopeStack.current.filter((s) => s !== scope);
		const next = this.getActive();
		if (next) {
			next.resume();
		}
	}
	getActive() {
		return this.#scopeStack.current[0];
	}
	setFocusMemory(scope, element) {
		this.#focusHistory.set(scope, element);
	}
	getFocusMemory(scope) {
		return this.#focusHistory.get(scope);
	}
	isActiveScope(scope) {
		return this.getActive() === scope;
	}
	setPreFocusMemory(scope, element) {
		this.#preFocusHistory.set(scope, element);
	}
	getPreFocusMemory(scope) {
		return this.#preFocusHistory.get(scope);
	}
	clearPreFocusMemory(scope) {
		this.#preFocusHistory.delete(scope);
	}
}
class FocusScope {
	#paused = false;
	#container = null;
	#manager = FocusScopeManager.getInstance();
	#cleanupFns = [];
	#opts;
	constructor(opts) {
		this.#opts = opts;
	}
	get paused() {
		return this.#paused;
	}
	pause() {
		this.#paused = true;
	}
	resume() {
		this.#paused = false;
	}
	#cleanup() {
		for (const fn of this.#cleanupFns) {
			fn();
		}
		this.#cleanupFns = [];
	}
	mount(container) {
		if (this.#container) {
			this.unmount();
		}
		this.#container = container;
		this.#manager.register(this);
		this.#setupEventListeners();
		this.#handleOpenAutoFocus();
	}
	unmount() {
		if (!this.#container) return;
		this.#cleanup();
		this.#handleCloseAutoFocus();
		this.#manager.unregister(this);
		this.#manager.clearPreFocusMemory(this);
		this.#container = null;
	}
	#handleOpenAutoFocus() {
		if (!this.#container) return;
		const event = new CustomEvent("focusScope.onOpenAutoFocus", {
			bubbles: false,
			cancelable: true,
		});
		this.#opts.onOpenAutoFocus.current(event);
		if (!event.defaultPrevented) {
			requestAnimationFrame(() => {
				if (!this.#container) return;
				const firstTabbable = this.#getFirstTabbable();
				if (firstTabbable) {
					firstTabbable.focus();
					this.#manager.setFocusMemory(this, firstTabbable);
				} else {
					this.#container.focus();
				}
			});
		}
	}
	#handleCloseAutoFocus() {
		const event = new CustomEvent("focusScope.onCloseAutoFocus", {
			bubbles: false,
			cancelable: true,
		});
		this.#opts.onCloseAutoFocus.current?.(event);
		if (!event.defaultPrevented) {
			const preFocusedElement = this.#manager.getPreFocusMemory(this);
			if (preFocusedElement && document.contains(preFocusedElement)) {
				try {
					preFocusedElement.focus();
				} catch {
					document.body.focus();
				}
			}
		}
	}
	#setupEventListeners() {
		if (!this.#container || !this.#opts.trap.current) return;
		const container = this.#container;
		const doc = container.ownerDocument;
		const handleFocus = (e) => {
			if (this.#paused || !this.#manager.isActiveScope(this)) return;
			const target = e.target;
			if (!target) return;
			const isInside = container.contains(target);
			if (isInside) {
				this.#manager.setFocusMemory(this, target);
			} else {
				const lastFocused = this.#manager.getFocusMemory(this);
				if (lastFocused && container.contains(lastFocused) && isFocusable(lastFocused)) {
					e.preventDefault();
					lastFocused.focus();
				} else {
					const firstTabbable = this.#getFirstTabbable();
					const firstFocusable = this.#getAllFocusables()[0];
					(firstTabbable || firstFocusable || container).focus();
				}
			}
		};
		const handleKeydown = (e) => {
			if (!this.#opts.loop || this.#paused || e.key !== "Tab") return;
			if (!this.#manager.isActiveScope(this)) return;
			const tabbables = this.#getTabbables();
			if (tabbables.length < 2) return;
			const first = tabbables[0];
			const last = tabbables[tabbables.length - 1];
			if (!e.shiftKey && doc.activeElement === last) {
				e.preventDefault();
				first.focus();
			} else if (e.shiftKey && doc.activeElement === first) {
				e.preventDefault();
				last.focus();
			}
		};
		this.#cleanupFns.push(
			on(doc, "focusin", handleFocus, { capture: true }),
			on(container, "keydown", handleKeydown)
		);
		const observer = new MutationObserver(() => {
			const lastFocused = this.#manager.getFocusMemory(this);
			if (lastFocused && !container.contains(lastFocused)) {
				const firstTabbable = this.#getFirstTabbable();
				const firstFocusable = this.#getAllFocusables()[0];
				const elementToFocus = firstTabbable || firstFocusable;
				if (elementToFocus) {
					elementToFocus.focus();
					this.#manager.setFocusMemory(this, elementToFocus);
				} else {
					container.focus();
				}
			}
		});
		observer.observe(container, { childList: true, subtree: true });
		this.#cleanupFns.push(() => observer.disconnect());
	}
	#getTabbables() {
		if (!this.#container) return [];
		return tabbable(this.#container, { includeContainer: false, getShadowRoot: true });
	}
	#getFirstTabbable() {
		const tabbables = this.#getTabbables();
		return tabbables[0] || null;
	}
	#getAllFocusables() {
		if (!this.#container) return [];
		return focusable(this.#container, { includeContainer: false, getShadowRoot: true });
	}
	static use(opts) {
		let scope = null;
		watch([() => opts.ref.current, () => opts.enabled.current], ([ref, enabled]) => {
			if (ref && enabled) {
				if (!scope) {
					scope = new FocusScope(opts);
				}
				scope.mount(ref);
			} else if (scope) {
				scope.unmount();
				scope = null;
			}
		});
		return {
			get props() {
				return { tabindex: -1 };
			},
		};
	}
}
function Focus_scope($$payload, $$props) {
	push();
	let {
		enabled = false,
		trapFocus = false,
		loop = false,
		onCloseAutoFocus = noop,
		onOpenAutoFocus = noop,
		focusScope,
		ref,
	} = $$props;
	const focusScopeState = FocusScope.use({
		enabled: boxWith(() => enabled),
		trap: boxWith(() => trapFocus),
		loop,
		onCloseAutoFocus: boxWith(() => onCloseAutoFocus),
		onOpenAutoFocus: boxWith(() => onOpenAutoFocus),
		ref,
	});
	focusScope?.($$payload, { props: focusScopeState.props });
	$$payload.out += `<!---->`;
	pop();
}
globalThis.bitsTextSelectionLayers ??= /* @__PURE__ */ new Map();
class TextSelectionLayerState {
	static create(opts) {
		return new TextSelectionLayerState(opts);
	}
	opts;
	domContext;
	#unsubSelectionLock = noop;
	constructor(opts) {
		this.opts = opts;
		this.domContext = new DOMContext(opts.ref);
		let unsubEvents = noop;
		watch(
			() => this.opts.enabled.current,
			(isEnabled) => {
				if (isEnabled) {
					globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled);
					unsubEvents();
					unsubEvents = this.#addEventListeners();
				}
				return () => {
					unsubEvents();
					this.#resetSelectionLock();
					globalThis.bitsTextSelectionLayers.delete(this);
				};
			}
		);
	}
	#addEventListeners() {
		return executeCallbacks(
			on(this.domContext.getDocument(), "pointerdown", this.#pointerdown),
			on(
				this.domContext.getDocument(),
				"pointerup",
				composeHandlers(this.#resetSelectionLock, this.opts.onPointerUp.current)
			)
		);
	}
	#pointerdown = (e) => {
		const node = this.opts.ref.current;
		const target = e.target;
		if (!isHTMLElement(node) || !isHTMLElement(target) || !this.opts.enabled.current) return;
		if (!isHighestLayer(this) || !contains(node, target)) return;
		this.opts.onPointerDown.current(e);
		if (e.defaultPrevented) return;
		this.#unsubSelectionLock = preventTextSelectionOverflow(
			node,
			this.domContext.getDocument().body
		);
	};
	#resetSelectionLock = () => {
		this.#unsubSelectionLock();
		this.#unsubSelectionLock = noop;
	};
}
const getUserSelect = (node) => node.style.userSelect || node.style.webkitUserSelect;
function preventTextSelectionOverflow(node, body) {
	const originalBodyUserSelect = getUserSelect(body);
	const originalNodeUserSelect = getUserSelect(node);
	setUserSelect(body, "none");
	setUserSelect(node, "text");
	return () => {
		setUserSelect(body, originalBodyUserSelect);
		setUserSelect(node, originalNodeUserSelect);
	};
}
function setUserSelect(node, value) {
	node.style.userSelect = value;
	node.style.webkitUserSelect = value;
}
function isHighestLayer(instance) {
	const layersArr = [...globalThis.bitsTextSelectionLayers];
	if (!layersArr.length) return false;
	const highestLayer = layersArr.at(-1);
	if (!highestLayer) return false;
	return highestLayer[0] === instance;
}
function Text_selection_layer($$payload, $$props) {
	push();
	let {
		preventOverflowTextSelection = true,
		onPointerDown = noop,
		onPointerUp = noop,
		id,
		children,
		enabled,
		ref,
	} = $$props;
	TextSelectionLayerState.create({
		id: boxWith(() => id),
		onPointerDown: boxWith(() => onPointerDown),
		onPointerUp: boxWith(() => onPointerUp),
		enabled: boxWith(() => enabled && preventOverflowTextSelection),
		ref,
	});
	children?.($$payload);
	$$payload.out += `<!---->`;
	pop();
}
globalThis.bitsIdCounter ??= { current: 0 };
function useId(prefix = "bits") {
	globalThis.bitsIdCounter.current++;
	return `${prefix}-${globalThis.bitsIdCounter.current}`;
}
class SharedState {
	#factory;
	#subscribers = 0;
	#state;
	#scope;
	constructor(factory) {
		this.#factory = factory;
	}
	#dispose() {
		this.#subscribers -= 1;
		if (this.#scope && this.#subscribers <= 0) {
			this.#scope();
			this.#state = void 0;
			this.#scope = void 0;
		}
	}
	get(...args) {
		this.#subscribers += 1;
		if (this.#state === void 0) {
			this.#scope = () => {};
		}
		return this.#state;
	}
}
const lockMap = new SvelteMap();
let initialBodyStyle = null;
let cleanupTimeoutId = null;
let isInCleanupTransition = false;
const anyLocked = boxWith(() => {
	for (const value of lockMap.values()) {
		if (value) return true;
	}
	return false;
});
let cleanupScheduledAt = null;
const bodyLockStackCount = new SharedState(() => {
	function resetBodyStyle() {
		return;
	}
	function cancelPendingCleanup() {
		if (cleanupTimeoutId === null) return;
		window.clearTimeout(cleanupTimeoutId);
		cleanupTimeoutId = null;
	}
	function scheduleCleanupIfNoNewLocks(delay, callback) {
		cancelPendingCleanup();
		isInCleanupTransition = true;
		cleanupScheduledAt = Date.now();
		const currentCleanupId = cleanupScheduledAt;
		const cleanupFn = () => {
			cleanupTimeoutId = null;
			if (cleanupScheduledAt !== currentCleanupId) return;
			if (!isAnyLocked(lockMap)) {
				isInCleanupTransition = false;
				callback();
			} else {
				isInCleanupTransition = false;
			}
		};
		const actualDelay = delay === null ? 24 : delay;
		cleanupTimeoutId = window.setTimeout(cleanupFn, actualDelay);
	}
	function ensureInitialStyleCaptured() {
		if (initialBodyStyle === null && lockMap.size === 0 && !isInCleanupTransition) {
			initialBodyStyle = document.body.getAttribute("style");
		}
	}
	watch(
		() => anyLocked.current,
		() => {
			if (!anyLocked.current) return;
			ensureInitialStyleCaptured();
			isInCleanupTransition = false;
			const bodyStyle = getComputedStyle(document.body);
			const verticalScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
			const paddingRight = Number.parseInt(bodyStyle.paddingRight ?? "0", 10);
			const config = {
				padding: paddingRight + verticalScrollbarWidth,
				margin: Number.parseInt(bodyStyle.marginRight ?? "0", 10),
			};
			if (verticalScrollbarWidth > 0) {
				document.body.style.paddingRight = `${config.padding}px`;
				document.body.style.marginRight = `${config.margin}px`;
				document.body.style.setProperty("--scrollbar-width", `${verticalScrollbarWidth}px`);
				document.body.style.overflow = "hidden";
			}
			if (isIOS) {
				on(
					document,
					"touchmove",
					(e) => {
						if (e.target !== document.documentElement) return;
						if (e.touches.length > 1) return;
						e.preventDefault();
					},
					{ passive: false }
				);
			}
			afterTick(() => {
				document.body.style.pointerEvents = "none";
				document.body.style.overflow = "hidden";
			});
		}
	);
	return {
		get lockMap() {
			return lockMap;
		},
		resetBodyStyle,
		scheduleCleanupIfNoNewLocks,
		cancelPendingCleanup,
		ensureInitialStyleCaptured,
	};
});
class BodyScrollLock {
	#id = useId();
	#initialState;
	#restoreScrollDelay = () => null;
	#countState;
	locked;
	constructor(initialState, restoreScrollDelay = () => null) {
		this.#initialState = initialState;
		this.#restoreScrollDelay = restoreScrollDelay;
		this.#countState = bodyLockStackCount.get();
		if (!this.#countState) return;
		this.#countState.cancelPendingCleanup();
		this.#countState.ensureInitialStyleCaptured();
		this.#countState.lockMap.set(this.#id, this.#initialState ?? false);
		this.locked = boxWith(
			() => this.#countState.lockMap.get(this.#id) ?? false,
			(v) => this.#countState.lockMap.set(this.#id, v)
		);
	}
}
function isAnyLocked(map) {
	for (const [_, value] of map) {
		if (value) return true;
	}
	return false;
}
function Scroll_lock($$payload, $$props) {
	push();
	let { preventScroll = true, restoreScrollDelay = null } = $$props;
	if (preventScroll) {
		new BodyScrollLock(preventScroll, () => restoreScrollDelay);
	}
	pop();
}
function get(valueOrGetValue) {
	return typeof valueOrGetValue === "function" ? valueOrGetValue() : valueOrGetValue;
}
function getDPR(element) {
	if (typeof window === "undefined") return 1;
	const win = element.ownerDocument.defaultView || window;
	return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
	const dpr = getDPR(element);
	return Math.round(value * dpr) / dpr;
}
function getFloatingContentCSSVars(name) {
	return {
		[`--bits-${name}-content-transform-origin`]: `var(--bits-floating-transform-origin)`,
		[`--bits-${name}-content-available-width`]: `var(--bits-floating-available-width)`,
		[`--bits-${name}-content-available-height`]: `var(--bits-floating-available-height)`,
		[`--bits-${name}-anchor-width`]: `var(--bits-floating-anchor-width)`,
		[`--bits-${name}-anchor-height`]: `var(--bits-floating-anchor-height)`,
	};
}
function useFloating(options) {
	const openOption = get(options.open) ?? true;
	const middlewareOption = get(options.middleware);
	const transformOption = get(options.transform) ?? true;
	const placementOption = get(options.placement) ?? "bottom";
	const strategyOption = get(options.strategy) ?? "absolute";
	const sideOffsetOption = get(options.sideOffset) ?? 0;
	const alignOffsetOption = get(options.alignOffset) ?? 0;
	const reference = options.reference;
	let x = 0;
	let y = 0;
	const floating = simpleBox(null);
	let strategy = strategyOption;
	let placement = placementOption;
	let middlewareData = {};
	let isPositioned = false;
	const floatingStyles = (() => {
		const xVal = floating.current ? roundByDPR(floating.current, x) : x;
		const yVal = floating.current ? roundByDPR(floating.current, y) : y;
		if (transformOption) {
			return {
				position: strategy,
				left: "0",
				top: "0",
				transform: `translate(${xVal}px, ${yVal}px)`,
				...(floating.current && getDPR(floating.current) >= 1.5 && { willChange: "transform" }),
			};
		}
		return {
			position: strategy,
			left: `${xVal}px`,
			top: `${yVal}px`,
		};
	})();
	function update() {
		if (reference.current === null || floating.current === null) return;
		computePosition(reference.current, floating.current, {
			middleware: middlewareOption,
			placement: placementOption,
			strategy: strategyOption,
		}).then((position) => {
			if (!openOption && x !== 0 && y !== 0) {
				const maxExpectedOffset = Math.max(
					Math.abs(sideOffsetOption),
					Math.abs(alignOffsetOption),
					15
				);
				if (position.x <= maxExpectedOffset && position.y <= maxExpectedOffset) return;
			}
			x = position.x;
			y = position.y;
			strategy = position.strategy;
			placement = position.placement;
			middlewareData = position.middlewareData;
			isPositioned = true;
		});
	}
	return {
		floating,
		reference,
		get strategy() {
			return strategy;
		},
		get placement() {
			return placement;
		},
		get middlewareData() {
			return middlewareData;
		},
		get isPositioned() {
			return isPositioned;
		},
		get floatingStyles() {
			return floatingStyles;
		},
		get update() {
			return update;
		},
	};
}
const OPPOSITE_SIDE = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right",
};
const FloatingRootContext = new Context("Floating.Root");
const FloatingContentContext = new Context("Floating.Content");
const FloatingTooltipRootContext = new Context("Floating.Root");
class FloatingRootState {
	static create(tooltip = false) {
		return tooltip
			? FloatingTooltipRootContext.set(new FloatingRootState())
			: FloatingRootContext.set(new FloatingRootState());
	}
	anchorNode = simpleBox(null);
	customAnchorNode = simpleBox(null);
	triggerNode = simpleBox(null);
	constructor() {}
}
class FloatingContentState {
	static create(opts, tooltip = false) {
		return tooltip
			? FloatingContentContext.set(new FloatingContentState(opts, FloatingTooltipRootContext.get()))
			: FloatingContentContext.set(new FloatingContentState(opts, FloatingRootContext.get()));
	}
	opts;
	root;
	// nodes
	contentRef = simpleBox(null);
	wrapperRef = simpleBox(null);
	arrowRef = simpleBox(null);
	contentAttachment = attachRef(this.contentRef);
	wrapperAttachment = attachRef(this.wrapperRef);
	arrowAttachment = attachRef(this.arrowRef);
	// ids
	arrowId = simpleBox(useId());
	#transformedStyle = derived(() => {
		if (typeof this.opts.style === "string") return cssToStyleObj(this.opts.style);
		if (!this.opts.style) return {};
	});
	#updatePositionStrategy = void 0;
	#arrowSize = new ElementSize(() => this.arrowRef.current ?? void 0);
	#arrowWidth = derived(() => this.#arrowSize?.width ?? 0);
	#arrowHeight = derived(() => this.#arrowSize?.height ?? 0);
	#desiredPlacement = derived(
		() =>
			this.opts.side?.current +
			(this.opts.align.current !== "center" ? `-${this.opts.align.current}` : "")
	);
	#boundary = derived(() =>
		Array.isArray(this.opts.collisionBoundary.current)
			? this.opts.collisionBoundary.current
			: [this.opts.collisionBoundary.current]
	);
	#hasExplicitBoundaries = derived(() => this.#boundary().length > 0);
	get hasExplicitBoundaries() {
		return this.#hasExplicitBoundaries();
	}
	set hasExplicitBoundaries($$value) {
		return this.#hasExplicitBoundaries($$value);
	}
	#detectOverflowOptions = derived(() => ({
		padding: this.opts.collisionPadding.current,
		boundary: this.#boundary().filter(isNotNull),
		altBoundary: this.hasExplicitBoundaries,
	}));
	get detectOverflowOptions() {
		return this.#detectOverflowOptions();
	}
	set detectOverflowOptions($$value) {
		return this.#detectOverflowOptions($$value);
	}
	#availableWidth = void 0;
	#availableHeight = void 0;
	#anchorWidth = void 0;
	#anchorHeight = void 0;
	#middleware = derived(() =>
		[
			offset({
				mainAxis: this.opts.sideOffset.current + this.#arrowHeight(),
				alignmentAxis: this.opts.alignOffset.current,
			}),
			this.opts.avoidCollisions.current &&
				shift({
					mainAxis: true,
					crossAxis: false,
					limiter: this.opts.sticky.current === "partial" ? limitShift() : void 0,
					...this.detectOverflowOptions,
				}),
			this.opts.avoidCollisions.current && flip({ ...this.detectOverflowOptions }),
			size({
				...this.detectOverflowOptions,
				apply: ({ rects, availableWidth, availableHeight }) => {
					const { width: anchorWidth, height: anchorHeight } = rects.reference;
					this.#availableWidth = availableWidth;
					this.#availableHeight = availableHeight;
					this.#anchorWidth = anchorWidth;
					this.#anchorHeight = anchorHeight;
				},
			}),
			this.arrowRef.current &&
				arrow({
					element: this.arrowRef.current,
					padding: this.opts.arrowPadding.current,
				}),
			transformOrigin({
				arrowWidth: this.#arrowWidth(),
				arrowHeight: this.#arrowHeight(),
			}),
			this.opts.hideWhenDetached.current &&
				hide({
					strategy: "referenceHidden",
					...this.detectOverflowOptions,
				}),
		].filter(Boolean)
	);
	get middleware() {
		return this.#middleware();
	}
	set middleware($$value) {
		return this.#middleware($$value);
	}
	floating;
	#placedSide = derived(() => getSideFromPlacement(this.floating.placement));
	get placedSide() {
		return this.#placedSide();
	}
	set placedSide($$value) {
		return this.#placedSide($$value);
	}
	#placedAlign = derived(() => getAlignFromPlacement(this.floating.placement));
	get placedAlign() {
		return this.#placedAlign();
	}
	set placedAlign($$value) {
		return this.#placedAlign($$value);
	}
	#arrowX = derived(() => this.floating.middlewareData.arrow?.x ?? 0);
	get arrowX() {
		return this.#arrowX();
	}
	set arrowX($$value) {
		return this.#arrowX($$value);
	}
	#arrowY = derived(() => this.floating.middlewareData.arrow?.y ?? 0);
	get arrowY() {
		return this.#arrowY();
	}
	set arrowY($$value) {
		return this.#arrowY($$value);
	}
	#cannotCenterArrow = derived(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
	get cannotCenterArrow() {
		return this.#cannotCenterArrow();
	}
	set cannotCenterArrow($$value) {
		return this.#cannotCenterArrow($$value);
	}
	contentZIndex;
	#arrowBaseSide = derived(() => OPPOSITE_SIDE[this.placedSide]);
	get arrowBaseSide() {
		return this.#arrowBaseSide();
	}
	set arrowBaseSide($$value) {
		return this.#arrowBaseSide($$value);
	}
	#wrapperProps = derived(() => ({
		id: this.opts.wrapperId.current,
		"data-bits-floating-content-wrapper": "",
		style: {
			...this.floating.floatingStyles,
			// keep off page when measuring
			transform: this.floating.isPositioned
				? this.floating.floatingStyles.transform
				: "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: this.contentZIndex,
			"--bits-floating-transform-origin": `${this.floating.middlewareData.transformOrigin?.x} ${this.floating.middlewareData.transformOrigin?.y}`,
			"--bits-floating-available-width": `${this.#availableWidth}px`,
			"--bits-floating-available-height": `${this.#availableHeight}px`,
			"--bits-floating-anchor-width": `${this.#anchorWidth}px`,
			"--bits-floating-anchor-height": `${this.#anchorHeight}px`,
			// hide the content if using the hide middleware and should be hidden
			...(this.floating.middlewareData.hide?.referenceHidden && {
				visibility: "hidden",
				"pointer-events": "none",
			}),
			...this.#transformedStyle(),
		},
		// Floating UI calculates logical alignment based the `dir` attribute
		dir: this.opts.dir.current,
		...this.wrapperAttachment,
	}));
	get wrapperProps() {
		return this.#wrapperProps();
	}
	set wrapperProps($$value) {
		return this.#wrapperProps($$value);
	}
	#props = derived(() => ({
		"data-side": this.placedSide,
		"data-align": this.placedAlign,
		style: styleToString({ ...this.#transformedStyle() }),
		...this.contentAttachment,
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
	#arrowStyle = derived(() => ({
		position: "absolute",
		left: this.arrowX ? `${this.arrowX}px` : void 0,
		top: this.arrowY ? `${this.arrowY}px` : void 0,
		[this.arrowBaseSide]: 0,
		"transform-origin": {
			top: "",
			right: "0 0",
			bottom: "center 0",
			left: "100% 0",
		}[this.placedSide],
		transform: {
			top: "translateY(100%)",
			right: "translateY(50%) rotate(90deg) translateX(-50%)",
			bottom: "rotate(180deg)",
			left: "translateY(50%) rotate(-90deg) translateX(50%)",
		}[this.placedSide],
		visibility: this.cannotCenterArrow ? "hidden" : void 0,
	}));
	get arrowStyle() {
		return this.#arrowStyle();
	}
	set arrowStyle($$value) {
		return this.#arrowStyle($$value);
	}
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		if (opts.customAnchor) {
			this.root.customAnchorNode.current = opts.customAnchor.current;
		}
		watch(
			() => opts.customAnchor.current,
			(customAnchor) => {
				this.root.customAnchorNode.current = customAnchor;
			}
		);
		this.floating = useFloating({
			strategy: () => this.opts.strategy.current,
			placement: () => this.#desiredPlacement(),
			middleware: () => this.middleware,
			reference: this.root.anchorNode,
			open: () => this.opts.enabled.current,
			sideOffset: () => this.opts.sideOffset.current,
			alignOffset: () => this.opts.alignOffset.current,
		});
		watch(
			() => this.contentRef.current,
			(contentNode) => {
				if (!contentNode) return;
				const win = getWindow(contentNode);
				this.contentZIndex = win.getComputedStyle(contentNode).zIndex;
			}
		);
	}
}
class FloatingAnchorState {
	static create(opts, tooltip = false) {
		return tooltip
			? new FloatingAnchorState(opts, FloatingTooltipRootContext.get())
			: new FloatingAnchorState(opts, FloatingRootContext.get());
	}
	opts;
	root;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		if (opts.virtualEl && opts.virtualEl.current) {
			root.triggerNode = boxFrom(opts.virtualEl.current);
		} else {
			root.triggerNode = opts.ref;
		}
	}
}
function transformOrigin(options) {
	return {
		name: "transformOrigin",
		options,
		fn(data) {
			const { placement, rects, middlewareData } = data;
			const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
			const isArrowHidden = cannotCenterArrow;
			const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
			const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
			const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
			const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
			const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
			const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
			let x = "";
			let y = "";
			if (placedSide === "bottom") {
				x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
				y = `${-arrowHeight}px`;
			} else if (placedSide === "top") {
				x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
				y = `${rects.floating.height + arrowHeight}px`;
			} else if (placedSide === "right") {
				x = `${-arrowHeight}px`;
				y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
			} else if (placedSide === "left") {
				x = `${rects.floating.width + arrowHeight}px`;
				y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
			}
			return { data: { x, y } };
		},
	};
}
function getSideAndAlignFromPlacement(placement) {
	const [side, align = "center"] = placement.split("-");
	return [side, align];
}
function getSideFromPlacement(placement) {
	return getSideAndAlignFromPlacement(placement)[0];
}
function getAlignFromPlacement(placement) {
	return getSideAndAlignFromPlacement(placement)[1];
}
function Floating_layer($$payload, $$props) {
	push();
	let { children, tooltip = false } = $$props;
	FloatingRootState.create(tooltip);
	children?.($$payload);
	$$payload.out += `<!---->`;
	pop();
}
function Floating_layer_anchor($$payload, $$props) {
	push();
	let { id, children, virtualEl, ref, tooltip = false } = $$props;
	FloatingAnchorState.create(
		{
			id: boxWith(() => id),
			virtualEl: boxWith(() => virtualEl),
			ref,
		},
		tooltip
	);
	children?.($$payload);
	$$payload.out += `<!---->`;
	pop();
}
function Floating_layer_content($$payload, $$props) {
	push();
	let {
		content,
		side = "bottom",
		sideOffset = 0,
		align = "center",
		alignOffset = 0,
		id,
		arrowPadding = 0,
		avoidCollisions = true,
		collisionBoundary = [],
		collisionPadding = 0,
		hideWhenDetached = false,
		onPlaced = () => {},
		sticky = "partial",
		updatePositionStrategy = "optimized",
		strategy = "fixed",
		dir = "ltr",
		style = {},
		wrapperId = useId(),
		customAnchor = null,
		enabled,
		tooltip = false,
	} = $$props;
	const contentState = FloatingContentState.create(
		{
			side: boxWith(() => side),
			sideOffset: boxWith(() => sideOffset),
			align: boxWith(() => align),
			alignOffset: boxWith(() => alignOffset),
			id: boxWith(() => id),
			arrowPadding: boxWith(() => arrowPadding),
			avoidCollisions: boxWith(() => avoidCollisions),
			collisionBoundary: boxWith(() => collisionBoundary),
			collisionPadding: boxWith(() => collisionPadding),
			hideWhenDetached: boxWith(() => hideWhenDetached),
			onPlaced: boxWith(() => onPlaced),
			sticky: boxWith(() => sticky),
			updatePositionStrategy: boxWith(() => updatePositionStrategy),
			strategy: boxWith(() => strategy),
			dir: boxWith(() => dir),
			style: boxWith(() => style),
			enabled: boxWith(() => enabled),
			wrapperId: boxWith(() => wrapperId),
			customAnchor: boxWith(() => customAnchor),
		},
		tooltip
	);
	const mergedProps = mergeProps(contentState.wrapperProps, { style: { pointerEvents: "auto" } });
	content?.($$payload, {
		props: contentState.props,
		wrapperProps: mergedProps,
	});
	$$payload.out += `<!---->`;
	pop();
}
function Floating_layer_content_static($$payload, $$props) {
	push();
	let { content } = $$props;
	content?.($$payload, { props: {}, wrapperProps: {} });
	$$payload.out += `<!---->`;
	pop();
}
function Popper_content($$payload, $$props) {
	let { content, isStatic = false, onPlaced, $$slots, $$events, ...restProps } = $$props;
	if (isStatic) {
		$$payload.out += "<!--[-->";
		Floating_layer_content_static($$payload, { content });
	} else {
		$$payload.out += "<!--[!-->";
		Floating_layer_content($$payload, spread_props([{ content, onPlaced }, restProps]));
	}
	$$payload.out += `<!--]-->`;
}
function Popper_layer_inner($$payload, $$props) {
	push();
	let {
		popper,
		onEscapeKeydown,
		escapeKeydownBehavior,
		preventOverflowTextSelection,
		id,
		onPointerDown,
		onPointerUp,
		side,
		sideOffset,
		align,
		alignOffset,
		arrowPadding,
		avoidCollisions,
		collisionBoundary,
		collisionPadding,
		sticky,
		hideWhenDetached,
		updatePositionStrategy,
		strategy,
		dir,
		preventScroll,
		wrapperId,
		style,
		onPlaced,
		onInteractOutside,
		onCloseAutoFocus,
		onOpenAutoFocus,
		onFocusOutside,
		interactOutsideBehavior = "close",
		loop,
		trapFocus = true,
		isValidEvent: isValidEvent2 = () => false,
		customAnchor = null,
		isStatic = false,
		enabled,
		ref,
		tooltip = false,
		$$slots,
		$$events,
		...restProps
	} = $$props;
	{
		let content = function ($$payload2, { props: floatingProps, wrapperProps }) {
			if (restProps.forceMount && enabled) {
				$$payload2.out += "<!--[-->";
				Scroll_lock($$payload2, { preventScroll });
			} else if (!restProps.forceMount) {
				$$payload2.out += "<!--[1-->";
				Scroll_lock($$payload2, { preventScroll });
			} else {
				$$payload2.out += "<!--[!-->";
			}
			$$payload2.out += `<!--]--> `;
			{
				let focusScope = function ($$payload3, { props: focusScopeProps }) {
					Escape_layer($$payload3, {
						onEscapeKeydown,
						escapeKeydownBehavior,
						enabled,
						ref,
						children: ($$payload4) => {
							{
								let children = function ($$payload5, { props: dismissibleProps }) {
									Text_selection_layer($$payload5, {
										id,
										preventOverflowTextSelection,
										onPointerDown,
										onPointerUp,
										enabled,
										ref,
										children: ($$payload6) => {
											popper?.($$payload6, {
												props: mergeProps(
													restProps,
													floatingProps,
													dismissibleProps,
													focusScopeProps,
													{ style: { pointerEvents: "auto" } }
												),
												wrapperProps,
											});
											$$payload6.out += `<!---->`;
										},
									});
								};
								Dismissible_layer($$payload4, {
									id,
									onInteractOutside,
									onFocusOutside,
									interactOutsideBehavior,
									isValidEvent: isValidEvent2,
									enabled,
									ref,
									children,
								});
							}
						},
					});
				};
				Focus_scope($$payload2, {
					onOpenAutoFocus,
					onCloseAutoFocus,
					loop,
					enabled,
					trapFocus,
					forceMount: restProps.forceMount,
					ref,
					focusScope,
				});
			}
			$$payload2.out += `<!---->`;
		};
		Popper_content($$payload, {
			isStatic,
			id,
			side,
			sideOffset,
			align,
			alignOffset,
			arrowPadding,
			avoidCollisions,
			collisionBoundary,
			collisionPadding,
			sticky,
			hideWhenDetached,
			updatePositionStrategy,
			strategy,
			dir,
			wrapperId,
			style,
			onPlaced,
			customAnchor,
			enabled,
			tooltip,
			content,
			$$slots: { content: true },
		});
	}
	pop();
}
function Popper_layer($$payload, $$props) {
	let {
		popper,
		open,
		onEscapeKeydown,
		escapeKeydownBehavior,
		preventOverflowTextSelection,
		id,
		onPointerDown,
		onPointerUp,
		side,
		sideOffset,
		align,
		alignOffset,
		arrowPadding,
		avoidCollisions,
		collisionBoundary,
		collisionPadding,
		sticky,
		hideWhenDetached,
		updatePositionStrategy,
		strategy,
		dir,
		preventScroll,
		wrapperId,
		style,
		onPlaced,
		onInteractOutside,
		onCloseAutoFocus,
		onOpenAutoFocus,
		onFocusOutside,
		interactOutsideBehavior = "close",
		loop,
		trapFocus = true,
		isValidEvent: isValidEvent2 = () => false,
		customAnchor = null,
		isStatic = false,
		ref,
		shouldRender,
		$$slots,
		$$events,
		...restProps
	} = $$props;
	if (shouldRender) {
		$$payload.out += "<!--[-->";
		Popper_layer_inner(
			$$payload,
			spread_props([
				{
					popper,
					onEscapeKeydown,
					escapeKeydownBehavior,
					preventOverflowTextSelection,
					id,
					onPointerDown,
					onPointerUp,
					side,
					sideOffset,
					align,
					alignOffset,
					arrowPadding,
					avoidCollisions,
					collisionBoundary,
					collisionPadding,
					sticky,
					hideWhenDetached,
					updatePositionStrategy,
					strategy,
					dir,
					preventScroll,
					wrapperId,
					style,
					onPlaced,
					customAnchor,
					isStatic,
					enabled: open,
					onInteractOutside,
					onCloseAutoFocus,
					onOpenAutoFocus,
					interactOutsideBehavior,
					loop,
					trapFocus,
					isValidEvent: isValidEvent2,
					onFocusOutside,
					forceMount: false,
					ref,
				},
				restProps,
			])
		);
	} else {
		$$payload.out += "<!--[!-->";
	}
	$$payload.out += `<!--]-->`;
}
function Popper_layer_force_mount($$payload, $$props) {
	let {
		popper,
		onEscapeKeydown,
		escapeKeydownBehavior,
		preventOverflowTextSelection,
		id,
		onPointerDown,
		onPointerUp,
		side,
		sideOffset,
		align,
		alignOffset,
		arrowPadding,
		avoidCollisions,
		collisionBoundary,
		collisionPadding,
		sticky,
		hideWhenDetached,
		updatePositionStrategy,
		strategy,
		dir,
		preventScroll,
		wrapperId,
		style,
		onPlaced,
		onInteractOutside,
		onCloseAutoFocus,
		onOpenAutoFocus,
		onFocusOutside,
		interactOutsideBehavior = "close",
		loop,
		trapFocus = true,
		isValidEvent: isValidEvent2 = () => false,
		customAnchor = null,
		isStatic = false,
		enabled,
		$$slots,
		$$events,
		...restProps
	} = $$props;
	Popper_layer_inner(
		$$payload,
		spread_props([
			{
				popper,
				onEscapeKeydown,
				escapeKeydownBehavior,
				preventOverflowTextSelection,
				id,
				onPointerDown,
				onPointerUp,
				side,
				sideOffset,
				align,
				alignOffset,
				arrowPadding,
				avoidCollisions,
				collisionBoundary,
				collisionPadding,
				sticky,
				hideWhenDetached,
				updatePositionStrategy,
				strategy,
				dir,
				preventScroll,
				wrapperId,
				style,
				onPlaced,
				customAnchor,
				isStatic,
				enabled,
				onInteractOutside,
				onCloseAutoFocus,
				onOpenAutoFocus,
				interactOutsideBehavior,
				loop,
				trapFocus,
				isValidEvent: isValidEvent2,
				onFocusOutside,
			},
			restProps,
			{ forceMount: true },
		])
	);
}
function Menu_sub($$payload, $$props) {
	push();
	let { open = false, onOpenChange = noop, onOpenChangeComplete = noop, children } = $$props;
	MenuSubmenuState.create({
		open: boxWith(
			() => open,
			(v) => {
				open = v;
				onOpenChange?.(v);
			}
		),
		onOpenChangeComplete: boxWith(() => onOpenChangeComplete),
	});
	Floating_layer($$payload, {
		children: ($$payload2) => {
			children?.($$payload2);
			$$payload2.out += `<!---->`;
		},
	});
	bind_props($$props, { open });
	pop();
}
function Menu_item($$payload, $$props) {
	push();
	const uid = props_id($$payload);
	let {
		child,
		children,
		ref = null,
		id = createId(uid),
		disabled = false,
		onSelect = noop,
		closeOnSelect = true,
		$$slots,
		$$events,
		...restProps
	} = $$props;
	const itemState = MenuItemState.create({
		id: boxWith(() => id),
		disabled: boxWith(() => disabled),
		onSelect: boxWith(() => onSelect),
		ref: boxWith(
			() => ref,
			(v) => (ref = v)
		),
		closeOnSelect: boxWith(() => closeOnSelect),
	});
	const mergedProps = mergeProps(restProps, itemState.props);
	if (child) {
		$$payload.out += "<!--[-->";
		child($$payload, { props: mergedProps });
		$$payload.out += `<!---->`;
	} else {
		$$payload.out += "<!--[!-->";
		$$payload.out += `<div${spread_attributes({ ...mergedProps })}>`;
		children?.($$payload);
		$$payload.out += `<!----></div>`;
	}
	$$payload.out += `<!--]-->`;
	bind_props($$props, { ref });
	pop();
}
function Menu_separator($$payload, $$props) {
	push();
	const uid = props_id($$payload);
	let {
		ref = null,
		id = createId(uid),
		child,
		children,
		$$slots,
		$$events,
		...restProps
	} = $$props;
	const separatorState = MenuSeparatorState.create({
		id: boxWith(() => id),
		ref: boxWith(
			() => ref,
			(v) => (ref = v)
		),
	});
	const mergedProps = mergeProps(restProps, separatorState.props);
	if (child) {
		$$payload.out += "<!--[-->";
		child($$payload, { props: mergedProps });
		$$payload.out += `<!---->`;
	} else {
		$$payload.out += "<!--[!-->";
		$$payload.out += `<div${spread_attributes({ ...mergedProps })}>`;
		children?.($$payload);
		$$payload.out += `<!----></div>`;
	}
	$$payload.out += `<!--]-->`;
	bind_props($$props, { ref });
	pop();
}
function Menu_sub_content($$payload, $$props) {
	push();
	const uid = props_id($$payload);
	let {
		id = createId(uid),
		ref = null,
		children,
		child,
		loop = true,
		onInteractOutside = noop,
		forceMount = false,
		onEscapeKeydown = noop,
		interactOutsideBehavior = "defer-otherwise-close",
		escapeKeydownBehavior = "defer-otherwise-close",
		onOpenAutoFocus: onOpenAutoFocusProp = noop,
		onCloseAutoFocus: onCloseAutoFocusProp = noop,
		onFocusOutside = noop,
		side = "right",
		trapFocus = false,
		$$slots,
		$$events,
		...restProps
	} = $$props;
	const subContentState = MenuContentState.create({
		id: boxWith(() => id),
		loop: boxWith(() => loop),
		ref: boxWith(
			() => ref,
			(v) => (ref = v)
		),
		isSub: true,
		onCloseAutoFocus: boxWith(() => handleCloseAutoFocus),
	});
	function onkeydown(e) {
		const isKeyDownInside = e.currentTarget.contains(e.target);
		const isCloseKey = SUB_CLOSE_KEYS[subContentState.parentMenu.root.opts.dir.current].includes(
			e.key
		);
		if (isKeyDownInside && isCloseKey) {
			subContentState.parentMenu.onClose();
			const triggerNode = subContentState.parentMenu.triggerNode;
			triggerNode?.focus();
			e.preventDefault();
		}
	}
	const dataAttr = subContentState.parentMenu.root.getBitsAttr("sub-content");
	const mergedProps = mergeProps(restProps, subContentState.props, {
		side,
		onkeydown,
		[dataAttr]: "",
	});
	function handleOpenAutoFocus(e) {
		onOpenAutoFocusProp(e);
		if (e.defaultPrevented) return;
		e.preventDefault();
		if (subContentState.parentMenu.root.isUsingKeyboard && subContentState.parentMenu.contentNode) {
			MenuOpenEvent.dispatch(subContentState.parentMenu.contentNode);
		}
	}
	function handleCloseAutoFocus(e) {
		onCloseAutoFocusProp(e);
		if (e.defaultPrevented) return;
		e.preventDefault();
	}
	function handleInteractOutside(e) {
		onInteractOutside(e);
		if (e.defaultPrevented) return;
		subContentState.parentMenu.onClose();
	}
	function handleEscapeKeydown(e) {
		onEscapeKeydown(e);
		if (e.defaultPrevented) return;
		subContentState.parentMenu.onClose();
	}
	function handleOnFocusOutside(e) {
		onFocusOutside(e);
		if (e.defaultPrevented) return;
		if (!isHTMLElement(e.target)) return;
		if (e.target.id !== subContentState.parentMenu.triggerNode?.id) {
			subContentState.parentMenu.onClose();
		}
	}
	if (forceMount) {
		$$payload.out += "<!--[-->";
		{
			let popper = function ($$payload2, { props, wrapperProps }) {
				const finalProps = mergeProps(props, mergedProps, {
					style: getFloatingContentCSSVars("menu"),
				});
				if (child) {
					$$payload2.out += "<!--[-->";
					child($$payload2, {
						props: finalProps,
						wrapperProps,
						...subContentState.snippetProps,
					});
					$$payload2.out += `<!---->`;
				} else {
					$$payload2.out += "<!--[!-->";
					$$payload2.out += `<div${spread_attributes({ ...wrapperProps })}><div${spread_attributes({ ...finalProps })}>`;
					children?.($$payload2);
					$$payload2.out += `<!----></div></div>`;
				}
				$$payload2.out += `<!--]-->`;
			};
			Popper_layer_force_mount(
				$$payload,
				spread_props([
					mergedProps,
					{
						ref: subContentState.opts.ref,
						interactOutsideBehavior,
						escapeKeydownBehavior,
						onOpenAutoFocus: handleOpenAutoFocus,
						enabled: subContentState.parentMenu.opts.open.current,
						onInteractOutside: handleInteractOutside,
						onEscapeKeydown: handleEscapeKeydown,
						onFocusOutside: handleOnFocusOutside,
						preventScroll: false,
						loop,
						trapFocus,
						shouldRender: subContentState.shouldRender,
						popper,
						$$slots: { popper: true },
					},
				])
			);
		}
	} else if (!forceMount) {
		$$payload.out += "<!--[1-->";
		{
			let popper = function ($$payload2, { props, wrapperProps }) {
				const finalProps = mergeProps(props, mergedProps, {
					style: getFloatingContentCSSVars("menu"),
				});
				if (child) {
					$$payload2.out += "<!--[-->";
					child($$payload2, {
						props: finalProps,
						wrapperProps,
						...subContentState.snippetProps,
					});
					$$payload2.out += `<!---->`;
				} else {
					$$payload2.out += "<!--[!-->";
					$$payload2.out += `<div${spread_attributes({ ...wrapperProps })}><div${spread_attributes({ ...finalProps })}>`;
					children?.($$payload2);
					$$payload2.out += `<!----></div></div>`;
				}
				$$payload2.out += `<!--]-->`;
			};
			Popper_layer(
				$$payload,
				spread_props([
					mergedProps,
					{
						ref: subContentState.opts.ref,
						interactOutsideBehavior,
						escapeKeydownBehavior,
						onCloseAutoFocus: handleCloseAutoFocus,
						onOpenAutoFocus: handleOpenAutoFocus,
						open: subContentState.parentMenu.opts.open.current,
						onInteractOutside: handleInteractOutside,
						onEscapeKeydown: handleEscapeKeydown,
						onFocusOutside: handleOnFocusOutside,
						preventScroll: false,
						loop,
						trapFocus,
						shouldRender: subContentState.shouldRender,
						popper,
						$$slots: { popper: true },
					},
				])
			);
		}
	} else {
		$$payload.out += "<!--[!-->";
	}
	$$payload.out += `<!--]-->`;
	bind_props($$props, { ref });
	pop();
}
function Menu_sub_trigger($$payload, $$props) {
	push();
	const uid = props_id($$payload);
	let {
		id = createId(uid),
		disabled = false,
		ref = null,
		children,
		child,
		onSelect = noop,
		openDelay = 100,
		$$slots,
		$$events,
		...restProps
	} = $$props;
	const subTriggerState = MenuSubTriggerState.create({
		disabled: boxWith(() => disabled),
		onSelect: boxWith(() => onSelect),
		id: boxWith(() => id),
		ref: boxWith(
			() => ref,
			(v) => (ref = v)
		),
		openDelay: boxWith(() => openDelay),
	});
	const mergedProps = mergeProps(restProps, subTriggerState.props);
	Floating_layer_anchor($$payload, {
		id,
		ref: subTriggerState.opts.ref,
		children: ($$payload2) => {
			if (child) {
				$$payload2.out += "<!--[-->";
				child($$payload2, { props: mergedProps });
				$$payload2.out += `<!---->`;
			} else {
				$$payload2.out += "<!--[!-->";
				$$payload2.out += `<div${spread_attributes({ ...mergedProps })}>`;
				children?.($$payload2);
				$$payload2.out += `<!----></div>`;
			}
			$$payload2.out += `<!--]-->`;
		},
	});
	bind_props($$props, { ref });
	pop();
}
function Menu_checkbox_item($$payload, $$props) {
	push();
	const uid = props_id($$payload);
	let {
		child,
		children,
		ref = null,
		checked = false,
		id = createId(uid),
		onCheckedChange = noop,
		disabled = false,
		onSelect = noop,
		closeOnSelect = true,
		indeterminate = false,
		onIndeterminateChange = noop,
		value = "",
		$$slots,
		$$events,
		...restProps
	} = $$props;
	const group = MenuCheckboxGroupContext.getOr(null);
	if (group && value) {
		if (group.opts.value.current.includes(value)) {
			checked = true;
		} else {
			checked = false;
		}
	}
	watch.pre(
		() => value,
		() => {
			if (group && value) {
				if (group.opts.value.current.includes(value)) {
					checked = true;
				} else {
					checked = false;
				}
			}
		}
	);
	const checkboxItemState = MenuCheckboxItemState.create(
		{
			checked: boxWith(
				() => checked,
				(v) => {
					if (v !== checked) {
						checked = v;
						onCheckedChange(v);
					}
				}
			),
			id: boxWith(() => id),
			disabled: boxWith(() => disabled),
			onSelect: boxWith(() => handleSelect),
			ref: boxWith(
				() => ref,
				(v) => (ref = v)
			),
			closeOnSelect: boxWith(() => closeOnSelect),
			indeterminate: boxWith(
				() => indeterminate,
				(v) => {
					if (v !== indeterminate) {
						indeterminate = v;
						onIndeterminateChange(v);
					}
				}
			),
			value: boxWith(() => value),
		},
		group
	);
	function handleSelect(e) {
		onSelect(e);
		if (e.defaultPrevented) return;
		checkboxItemState.toggleChecked();
	}
	const mergedProps = mergeProps(restProps, checkboxItemState.props);
	if (child) {
		$$payload.out += "<!--[-->";
		child($$payload, { checked, indeterminate, props: mergedProps });
		$$payload.out += `<!---->`;
	} else {
		$$payload.out += "<!--[!-->";
		$$payload.out += `<div${spread_attributes({ ...mergedProps })}>`;
		children?.($$payload, { checked, indeterminate });
		$$payload.out += `<!----></div>`;
	}
	$$payload.out += `<!--]-->`;
	bind_props($$props, { ref, checked, indeterminate });
	pop();
}
function Menu($$payload, $$props) {
	push();
	let {
		open = false,
		dir = "ltr",
		onOpenChange = noop,
		onOpenChangeComplete = noop,
		_internal_variant: variant = "dropdown-menu",
		children,
	} = $$props;
	const root = MenuRootState.create({
		variant: boxWith(() => variant),
		dir: boxWith(() => dir),
		onClose: () => {
			open = false;
			onOpenChange(false);
		},
	});
	MenuMenuState.create(
		{
			open: boxWith(
				() => open,
				(v) => {
					open = v;
					onOpenChange(v);
				}
			),
			onOpenChangeComplete: boxWith(() => onOpenChangeComplete),
		},
		root
	);
	Floating_layer($$payload, {
		children: ($$payload2) => {
			children?.($$payload2);
			$$payload2.out += `<!---->`;
		},
	});
	bind_props($$props, { open });
	pop();
}
function Dropdown_menu_content($$payload, $$props) {
	push();
	const uid = props_id($$payload);
	let {
		id = createId(uid),
		child,
		children,
		ref = null,
		loop = true,
		onInteractOutside = noop,
		onEscapeKeydown = noop,
		onCloseAutoFocus = noop,
		forceMount = false,
		trapFocus = false,
		$$slots,
		$$events,
		...restProps
	} = $$props;
	const contentState = MenuContentState.create({
		id: boxWith(() => id),
		loop: boxWith(() => loop),
		ref: boxWith(
			() => ref,
			(v) => (ref = v)
		),
		onCloseAutoFocus: boxWith(() => onCloseAutoFocus),
	});
	const mergedProps = mergeProps(restProps, contentState.props);
	function handleInteractOutside(e) {
		contentState.handleInteractOutside(e);
		if (e.defaultPrevented) return;
		onInteractOutside(e);
		if (e.defaultPrevented) return;
		if (e.target && e.target instanceof Element) {
			const subContentSelector = `[${contentState.parentMenu.root.getBitsAttr("sub-content")}]`;
			if (e.target.closest(subContentSelector)) return;
		}
		contentState.parentMenu.onClose();
	}
	function handleEscapeKeydown(e) {
		onEscapeKeydown(e);
		if (e.defaultPrevented) return;
		contentState.parentMenu.onClose();
	}
	if (forceMount) {
		$$payload.out += "<!--[-->";
		{
			let popper = function ($$payload2, { props, wrapperProps }) {
				const finalProps = mergeProps(props, {
					style: getFloatingContentCSSVars("dropdown-menu"),
				});
				if (child) {
					$$payload2.out += "<!--[-->";
					child($$payload2, {
						props: finalProps,
						wrapperProps,
						...contentState.snippetProps,
					});
					$$payload2.out += `<!---->`;
				} else {
					$$payload2.out += "<!--[!-->";
					$$payload2.out += `<div${spread_attributes({ ...wrapperProps })}><div${spread_attributes({ ...finalProps })}>`;
					children?.($$payload2);
					$$payload2.out += `<!----></div></div>`;
				}
				$$payload2.out += `<!--]-->`;
			};
			Popper_layer_force_mount(
				$$payload,
				spread_props([
					mergedProps,
					contentState.popperProps,
					{
						ref: contentState.opts.ref,
						enabled: contentState.parentMenu.opts.open.current,
						onInteractOutside: handleInteractOutside,
						onEscapeKeydown: handleEscapeKeydown,
						trapFocus,
						loop,
						forceMount: true,
						id,
						shouldRender: contentState.shouldRender,
						popper,
						$$slots: { popper: true },
					},
				])
			);
		}
	} else if (!forceMount) {
		$$payload.out += "<!--[1-->";
		{
			let popper = function ($$payload2, { props, wrapperProps }) {
				const finalProps = mergeProps(props, {
					style: getFloatingContentCSSVars("dropdown-menu"),
				});
				if (child) {
					$$payload2.out += "<!--[-->";
					child($$payload2, {
						props: finalProps,
						wrapperProps,
						...contentState.snippetProps,
					});
					$$payload2.out += `<!---->`;
				} else {
					$$payload2.out += "<!--[!-->";
					$$payload2.out += `<div${spread_attributes({ ...wrapperProps })}><div${spread_attributes({ ...finalProps })}>`;
					children?.($$payload2);
					$$payload2.out += `<!----></div></div>`;
				}
				$$payload2.out += `<!--]-->`;
			};
			Popper_layer(
				$$payload,
				spread_props([
					mergedProps,
					contentState.popperProps,
					{
						ref: contentState.opts.ref,
						open: contentState.parentMenu.opts.open.current,
						onInteractOutside: handleInteractOutside,
						onEscapeKeydown: handleEscapeKeydown,
						trapFocus,
						loop,
						forceMount: false,
						id,
						shouldRender: contentState.shouldRender,
						popper,
						$$slots: { popper: true },
					},
				])
			);
		}
	} else {
		$$payload.out += "<!--[!-->";
	}
	$$payload.out += `<!--]-->`;
	bind_props($$props, { ref });
	pop();
}
function Menu_trigger($$payload, $$props) {
	push();
	const uid = props_id($$payload);
	let {
		id = createId(uid),
		ref = null,
		child,
		children,
		disabled = false,
		type = "button",
		$$slots,
		$$events,
		...restProps
	} = $$props;
	const triggerState = DropdownMenuTriggerState.create({
		id: boxWith(() => id),
		disabled: boxWith(() => disabled ?? false),
		ref: boxWith(
			() => ref,
			(v) => (ref = v)
		),
	});
	const mergedProps = mergeProps(restProps, triggerState.props, { type });
	Floating_layer_anchor($$payload, {
		id,
		ref: triggerState.opts.ref,
		children: ($$payload2) => {
			if (child) {
				$$payload2.out += "<!--[-->";
				child($$payload2, { props: mergedProps });
				$$payload2.out += `<!---->`;
			} else {
				$$payload2.out += "<!--[!-->";
				$$payload2.out += `<button${spread_attributes({ ...mergedProps })}>`;
				children?.($$payload2);
				$$payload2.out += `<!----></button>`;
			}
			$$payload2.out += `<!--]-->`;
		},
	});
	bind_props($$props, { ref });
	pop();
}
let isUsingKeyboard = false;
class IsUsingKeyboard {
	static _refs = 0;
	// Reference counting to avoid multiple listeners.
	static _cleanup;
	constructor() {}
	get current() {
		return isUsingKeyboard;
	}
	set current(value) {
		isUsingKeyboard = value;
	}
}
function Image($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	$$payload.out += `<svg${spread_attributes(
		{
			viewBox: "0 0 32 32",
			width: "1.2em",
			height: "1.2em",
			...$$sanitized_props,
		},
		null,
		void 0,
		void 0,
		3
	)}>${html(`<path fill="currentColor" d="M19 14a3 3 0 1 0-3-3a3 3 0 0 0 3 3m0-4a1 1 0 1 1-1 1a1 1 0 0 1 1-1"/><path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 22H6v-6l5-5l5.59 5.59a2 2 0 0 0 2.82 0L21 19l5 5Zm0-4.83l-3.59-3.59a2 2 0 0 0-2.82 0L18 19.17l-5.59-5.59a2 2 0 0 0-2.82 0L6 17.17V6h20Z"/>`)}</svg>`;
}
function Document($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	$$payload.out += `<svg${spread_attributes(
		{
			viewBox: "0 0 32 32",
			width: "1.2em",
			height: "1.2em",
			...$$sanitized_props,
		},
		null,
		void 0,
		void 0,
		3
	)}>${html(`<path fill="currentColor" d="m25.7 9.3l-7-7c-.2-.2-.4-.3-.7-.3H8c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-.3-.1-.5-.3-.7M18 4.4l5.6 5.6H18zM24 28H8V4h8v6c0 1.1.9 2 2 2h6z"/><path fill="currentColor" d="M10 22h12v2H10zm0-6h12v2H10z"/>`)}</svg>`;
}
function Upload($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	$$payload.out += `<svg${spread_attributes(
		{
			viewBox: "0 0 32 32",
			width: "1.2em",
			height: "1.2em",
			...$$sanitized_props,
		},
		null,
		void 0,
		void 0,
		3
	)}>${html(`<path fill="currentColor" d="m6 18l1.41 1.41L15 11.83V30h2V11.83l7.59 7.58L26 18L16 8zM6 8V4h20v4h2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4z"/>`)}</svg>`;
}
function Link($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	$$payload.out += `<svg${spread_attributes(
		{
			viewBox: "0 0 32 32",
			width: "1.2em",
			height: "1.2em",
			...$$sanitized_props,
		},
		null,
		void 0,
		void 0,
		3
	)}>${html(`<path fill="currentColor" d="M29.25 6.76a6 6 0 0 0-8.5 0l1.42 1.42a4 4 0 1 1 5.67 5.67l-8 8a4 4 0 1 1-5.67-5.66l1.41-1.42l-1.41-1.42l-1.42 1.42a6 6 0 0 0 0 8.5A6 6 0 0 0 17 25a6 6 0 0 0 4.27-1.76l8-8a6 6 0 0 0-.02-8.48"/><path fill="currentColor" d="M4.19 24.82a4 4 0 0 1 0-5.67l8-8a4 4 0 0 1 5.67 0A3.94 3.94 0 0 1 19 14a4 4 0 0 1-1.17 2.85L15.71 19l1.42 1.42l2.12-2.12a6 6 0 0 0-8.51-8.51l-8 8a6 6 0 0 0 0 8.51A6 6 0 0 0 7 28a6.07 6.07 0 0 0 4.28-1.76l-1.42-1.42a4 4 0 0 1-5.67 0"/>`)}</svg>`;
}
function Chevron_right($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	$$payload.out += `<svg${spread_attributes(
		{
			viewBox: "0 0 32 32",
			width: "1.2em",
			height: "1.2em",
			...$$sanitized_props,
		},
		null,
		void 0,
		void 0,
		3
	)}>${html(`<path fill="currentColor" d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"/>`)}</svg>`;
}
function UrlFetchModal($$payload, $$props) {
	push();
	let { open = false, acceptMimeTypes = [], onclose, onfiles } = $$props;
	let urlValue = "";
	function close() {
		open = false;
		onclose?.();
	}
	if (open) {
		$$payload.out += "<!--[-->";
		{
			let children = function ($$payload2) {
				$$payload2.out += `<form class="flex w-full flex-col gap-5 p-6"><div class="flex items-start justify-between"><h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Add from URL</h2> <button type="button" class="group" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="size-5 text-gray-700 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-400"><path d="M24 9.41 22.59 8 16 14.59 9.41 8 8 9.41 14.59 16 8 22.59 9.41 24 16 17.41 22.59 24 24 22.59 17.41 16 24 9.41z" fill="currentColor"></path></svg></button></div> <div class="flex flex-col gap-2"><label class="text-sm text-gray-600 dark:text-gray-400" for="fetch-url-input">Enter URL</label> <input id="fetch-url-input"${attr("value", urlValue)} type="url" placeholder="https://example.com/file.txt" class="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-[15px] text-gray-800 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-gray-700"${attr("aria-invalid", "false")}/></div> `;
				{
					$$payload2.out += "<!--[!-->";
				}
				$$payload2.out += `<!--]--> <p class="-mt-2 text-xs text-gray-500 dark:text-gray-400">Only HTTPS. Max 10MB.</p> <div class="flex items-center justify-end gap-2"><button type="button" class="inline-flex items-center rounded-xl border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 shadow hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">Cancel</button> <button type="submit" class="inline-flex items-center rounded-xl border border-gray-900 bg-gray-900 px-3 py-1.5 text-sm font-semibold text-white hover:bg-black disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-100 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"${attr("disabled", urlValue.trim() === "", true)}>`;
				{
					$$payload2.out += "<!--[!-->";
					$$payload2.out += `Add`;
				}
				$$payload2.out += `<!--]--></button></div></form>`;
			};
			Modal($$payload, {
				onclose: close,
				width: "w-[90dvh] md:w-[480px]",
				children,
			});
		}
	} else {
		$$payload.out += "<!--[!-->";
	}
	$$payload.out += `<!--]-->`;
	bind_props($$props, { open });
	pop();
}
function isVirtualKeyboard() {
	return false;
}
function ChatInput($$payload, $$props) {
	push();
	var $$store_subs;
	let {
		files = [],
		mimeTypes = [],
		value = "",
		placeholder = "",
		loading = false,
		disabled = false,
		modelIsMultimodal = false,
		modelSupportsTools = true,
		children,
		onPaste,
		focused = false,
		onsubmit,
	} = $$props;
	let isUrlModalOpen = false;
	let isMcpManagerOpen = false;
	let isDropdownOpen = false;
	function openFilePickerText() {
		mimeTypes.filter((m) => !(m === "image/*" || m.startsWith("image/"))).join(",") ||
			TEXT_MIME_ALLOWLIST.join(",");
	}
	function openFilePickerImage() {
		mimeTypes.filter((m) => m === "image/*" || m.startsWith("image/")).join(",") ||
			IMAGE_MIME_ALLOWLIST_DEFAULT.join(",");
	}
	async function focusTextarea() {
		if (page.data.shared && page.data.loginEnabled && !page.data.user) return;
		return;
	}
	function handleFetchedFiles(newFiles) {
		if (!newFiles?.length) return;
		files = [...files, ...newFiles];
		queueMicrotask(async () => {
			await tick();
			void focusTextarea();
		});
	}
	let showFileUpload = mimeTypes.length > 0;
	let showNoTools = !showFileUpload;
	let selectedServers = store_get(($$store_subs ??= {}), "$allMcpServers", allMcpServers).filter(
		(server) =>
			store_get(($$store_subs ??= {}), "$selectedServerIds", selectedServerIds).has(server.id)
	);
	let $$settled = true;
	let $$inner_payload;
	function $$render_inner($$payload2) {
		$$payload2.out += `<div class="flex min-h-full flex-1 flex-col"><textarea rows="1" tabindex="0" inputmode="text"${attr_class("scrollbar-custom max-h-[4lh] w-full resize-none overflow-y-auto overflow-x-hidden border-0 bg-transparent px-2.5 py-2.5 outline-none focus:ring-0 focus-visible:ring-0 sm:px-3 md:max-h-[8lh]", void 0, { "text-gray-400": disabled })}${attr("placeholder", placeholder)}${attr("disabled", disabled, true)}>`;
		const $$body = escape_html(value);
		if ($$body) {
			$$payload2.out += `${$$body}`;
		}
		$$payload2.out += `</textarea> `;
		if (!showNoTools) {
			$$payload2.out += "<!--[-->";
			$$payload2.out += `<div${attr_class(
				clsx([
					"scrollbar-custom -ml-0.5 flex max-w-[calc(100%-40px)] flex-wrap items-center justify-start gap-2.5 px-3 pb-2.5 pt-1.5 text-gray-500 dark:text-gray-400 max-md:flex-nowrap max-md:overflow-x-auto sm:gap-2",
				])
			)}>`;
			if (showFileUpload) {
				$$payload2.out += "<!--[-->";
				$$payload2.out += `<div class="flex items-center"><input${attr("disabled", loading, true)} class="absolute hidden size-0" aria-label="Upload file" type="file" multiple${attr("accept", mimeTypes.join(","))}/> <!---->`;
				Menu($$payload2, {
					onOpenChange: (open) => {
						if (open && requireAuthUser()) {
							isDropdownOpen = false;
							return;
						}
						isDropdownOpen = open;
					},
					get open() {
						return isDropdownOpen;
					},
					set open($$value) {
						isDropdownOpen = $$value;
						$$settled = false;
					},
					children: ($$payload3) => {
						$$payload3.out += `<!---->`;
						Menu_trigger($$payload3, {
							class:
								"btn size-7 rounded-full border bg-white text-black shadow transition-none enabled:hover:bg-white enabled:hover:shadow-inner dark:border-transparent dark:bg-gray-600/50 dark:text-white dark:hover:enabled:bg-gray-600",
							disabled: loading,
							"aria-label": "Add attachment",
							children: ($$payload4) => {
								Add($$payload4, { class: "text-base" });
							},
							$$slots: { default: true },
						});
						$$payload3.out += `<!----> <!---->`;
						Portal($$payload3, {
							children: ($$payload4) => {
								$$payload4.out += `<!---->`;
								Dropdown_menu_content($$payload4, {
									class:
										"z-50 rounded-xl border border-gray-200 bg-white/95 p-1 text-gray-800 shadow-lg backdrop-blur dark:border-gray-700/60 dark:bg-gray-800/95 dark:text-gray-100",
									side: "top",
									sideOffset: 8,
									align: "start",
									trapFocus: false,
									onCloseAutoFocus: (e) => e.preventDefault(),
									interactOutsideBehavior: "defer-otherwise-close",
									children: ($$payload5) => {
										if (modelIsMultimodal) {
											$$payload5.out += "<!--[-->";
											$$payload5.out += `<!---->`;
											Menu_item($$payload5, {
												class:
													"flex h-8 select-none items-center gap-1 rounded-md px-2 text-sm text-gray-700 data-[highlighted]:bg-gray-100 focus-visible:outline-none dark:text-gray-200 dark:data-[highlighted]:bg-white/10",
												onSelect: () => openFilePickerImage(),
												children: ($$payload6) => {
													Image($$payload6, { class: "size-4 opacity-90 dark:opacity-80" });
													$$payload6.out += `<!----> Add image(s)`;
												},
												$$slots: { default: true },
											});
											$$payload5.out += `<!---->`;
										} else {
											$$payload5.out += "<!--[!-->";
										}
										$$payload5.out += `<!--]--> <!---->`;
										Menu_sub($$payload5, {
											children: ($$payload6) => {
												$$payload6.out += `<!---->`;
												Menu_sub_trigger($$payload6, {
													class:
														"flex h-8 select-none items-center gap-1 rounded-md px-2 text-sm text-gray-700 data-[highlighted]:bg-gray-100 data-[state=open]:bg-gray-100 focus-visible:outline-none dark:text-gray-200 dark:data-[highlighted]:bg-white/10 dark:data-[state=open]:bg-white/10",
													children: ($$payload7) => {
														$$payload7.out += `<div class="flex items-center gap-1">`;
														Document($$payload7, { class: "size-4 opacity-90 dark:opacity-80" });
														$$payload7.out += `<!----> Add text file</div> <div class="ml-auto flex items-center">`;
														Chevron_right($$payload7, {
															class: "size-4 opacity-70 dark:opacity-80",
														});
														$$payload7.out += `<!----></div>`;
													},
													$$slots: { default: true },
												});
												$$payload6.out += `<!----> <!---->`;
												Menu_sub_content($$payload6, {
													class:
														"z-50 rounded-xl border border-gray-200 bg-white/95 p-1 text-gray-800 shadow-lg backdrop-blur dark:border-gray-700/60 dark:bg-gray-800/95 dark:text-gray-100",
													sideOffset: 10,
													trapFocus: false,
													onCloseAutoFocus: (e) => e.preventDefault(),
													interactOutsideBehavior: "defer-otherwise-close",
													children: ($$payload7) => {
														$$payload7.out += `<!---->`;
														Menu_item($$payload7, {
															class:
																"flex h-8 select-none items-center gap-1 rounded-md px-2 text-sm text-gray-700 data-[highlighted]:bg-gray-100 focus-visible:outline-none dark:text-gray-200 dark:data-[highlighted]:bg-white/10",
															onSelect: () => openFilePickerText(),
															children: ($$payload8) => {
																Upload($$payload8, { class: "size-4 opacity-90 dark:opacity-80" });
																$$payload8.out += `<!----> Upload from device`;
															},
															$$slots: { default: true },
														});
														$$payload7.out += `<!----> <!---->`;
														Menu_item($$payload7, {
															class:
																"flex h-8 select-none items-center gap-1 rounded-md px-2 text-sm text-gray-700 data-[highlighted]:bg-gray-100 focus-visible:outline-none dark:text-gray-200 dark:data-[highlighted]:bg-white/10",
															onSelect: () => (isUrlModalOpen = true),
															children: ($$payload8) => {
																Link($$payload8, { class: "size-4 opacity-90 dark:opacity-80" });
																$$payload8.out += `<!----> Fetch from URL`;
															},
															$$slots: { default: true },
														});
														$$payload7.out += `<!---->`;
													},
													$$slots: { default: true },
												});
												$$payload6.out += `<!---->`;
											},
											$$slots: { default: true },
										});
										$$payload5.out += `<!----> <!---->`;
										Menu_sub($$payload5, {
											children: ($$payload6) => {
												$$payload6.out += `<!---->`;
												Menu_sub_trigger($$payload6, {
													class:
														"flex h-8 select-none items-center gap-1 rounded-md px-2 text-sm text-gray-700 data-[highlighted]:bg-gray-100 data-[state=open]:bg-gray-100 focus-visible:outline-none dark:text-gray-200 dark:data-[highlighted]:bg-white/10 dark:data-[state=open]:bg-white/10",
													children: ($$payload7) => {
														$$payload7.out += `<div class="flex items-center gap-1">`;
														IconMCP($$payload7, {
															classNames: "size-4 opacity-90 dark:opacity-80",
														});
														$$payload7.out += `<!----> MCP Servers</div> <div class="ml-auto flex items-center">`;
														Chevron_right($$payload7, {
															class: "size-4 opacity-70 dark:opacity-80",
														});
														$$payload7.out += `<!----></div>`;
													},
													$$slots: { default: true },
												});
												$$payload6.out += `<!----> <!---->`;
												Menu_sub_content($$payload6, {
													class:
														"z-50 rounded-xl border border-gray-200 bg-white/95 p-1 text-gray-800 shadow-lg backdrop-blur dark:border-gray-700/60 dark:bg-gray-800/95 dark:text-gray-100",
													sideOffset: 10,
													trapFocus: false,
													onCloseAutoFocus: (e) => e.preventDefault(),
													interactOutsideBehavior: "defer-otherwise-close",
													children: ($$payload7) => {
														const each_array = ensure_array_like(
															store_get(($$store_subs ??= {}), "$allMcpServers", allMcpServers)
														);
														$$payload7.out += `<!--[-->`;
														for (
															let $$index = 0, $$length = each_array.length;
															$$index < $$length;
															$$index++
														) {
															let server = each_array[$$index];
															$$payload7.out += `<!---->`;
															{
																let children2 = function ($$payload8, { checked }) {
																	$$payload8.out += `<img${attr("src", getMcpServerFaviconUrl(server.url))} alt="" class="size-4 flex-shrink-0 rounded"/> <span class="max-w-52 truncate py-1">${escape_html(server.name)}</span> <div class="ml-auto flex items-center"><span${attr_class(
																		clsx([
																			"relative mt-px flex h-4 w-7 items-center self-center rounded-full transition-colors",
																			checked ? "bg-blue-600/80" : "bg-gray-300 dark:bg-gray-700",
																		])
																	)}><span${attr_class(
																		clsx([
																			"block size-3 translate-x-0.5 rounded-full bg-white shadow transition-transform",
																			checked ? "translate-x-[14px]" : "translate-x-0.5",
																		])
																	)}></span></span></div>`;
																};
																Menu_checkbox_item($$payload7, {
																	checked: store_get(
																		($$store_subs ??= {}),
																		"$selectedServerIds",
																		selectedServerIds
																	).has(server.id),
																	onCheckedChange: () => toggleServer(server.id),
																	closeOnSelect: false,
																	class:
																		"flex h-9 select-none items-center gap-2 rounded-md px-2 text-sm leading-none text-gray-800 data-[highlighted]:bg-gray-100 focus-visible:outline-none dark:text-gray-100 dark:data-[highlighted]:bg-white/10",
																	children: children2,
																	$$slots: { default: true },
																});
															}
															$$payload7.out += `<!---->`;
														}
														$$payload7.out += `<!--]--> `;
														if (
															store_get(($$store_subs ??= {}), "$allMcpServers", allMcpServers)
																.length > 0
														) {
															$$payload7.out += "<!--[-->";
															$$payload7.out += `<!---->`;
															Menu_separator($$payload7, {
																class: "my-1 h-px bg-gray-200 dark:bg-gray-700/60",
															});
															$$payload7.out += `<!---->`;
														} else {
															$$payload7.out += "<!--[!-->";
														}
														$$payload7.out += `<!--]--> <!---->`;
														Menu_item($$payload7, {
															class:
																"flex h-8 select-none items-center gap-1 rounded-md px-2 text-sm text-gray-700 data-[highlighted]:bg-gray-100 focus-visible:outline-none dark:text-gray-200 dark:data-[highlighted]:bg-white/10",
															onSelect: () => (isMcpManagerOpen = true),
															children: ($$payload8) => {
																$$payload8.out += `<!---->Manage MCP Servers`;
															},
															$$slots: { default: true },
														});
														$$payload7.out += `<!---->`;
													},
													$$slots: { default: true },
												});
												$$payload6.out += `<!---->`;
											},
											$$slots: { default: true },
										});
										$$payload5.out += `<!---->`;
									},
									$$slots: { default: true },
								});
								$$payload4.out += `<!---->`;
							},
						});
						$$payload3.out += `<!---->`;
					},
					$$slots: { default: true },
				});
				$$payload2.out += `<!----> `;
				if (store_get(($$store_subs ??= {}), "$enabledServersCount", enabledServersCount) > 0) {
					$$payload2.out += "<!--[-->";
					$$payload2.out += `<div${attr_class(
						"ml-2 inline-flex h-7 items-center gap-1.5 rounded-full border border-blue-500/10 bg-blue-600/10 pl-2 pr-1 text-xs font-semibold text-blue-700 dark:bg-blue-600/20 dark:text-blue-400",
						void 0,
						{
							grayscale: !modelSupportsTools,
							"opacity-60": !modelSupportsTools,
							"cursor-help": !modelSupportsTools,
						}
					)}${attr("title", modelSupportsTools ? "MCP servers enabled" : "Current model doesn’t support tools")}><button${attr_class("inline-flex cursor-pointer select-none items-center gap-1 bg-transparent p-0 leading-none text-current focus:outline-none", void 0, { "line-through": !modelSupportsTools })} type="button" title="Manage MCP Servers">`;
					if (selectedServers.length) {
						$$payload2.out += "<!--[-->";
						const each_array_1 = ensure_array_like(selectedServers.slice(0, 3));
						$$payload2.out += `<span class="flex items-center -space-x-1"><!--[-->`;
						for (
							let $$index_1 = 0, $$length = each_array_1.length;
							$$index_1 < $$length;
							$$index_1++
						) {
							let server = each_array_1[$$index_1];
							$$payload2.out += `<img${attr("src", getMcpServerFaviconUrl(server.url))} alt="" class="size-4 rounded bg-white p-px shadow-sm ring-1 ring-black/5 dark:bg-gray-900 dark:ring-white/10"/>`;
						}
						$$payload2.out += `<!--]--> `;
						if (selectedServers.length > 3) {
							$$payload2.out += "<!--[-->";
							$$payload2.out += `<span class="ml-1 text-[10px] font-semibold text-blue-800 dark:text-blue-200">+${escape_html(selectedServers.length - 3)}</span>`;
						} else {
							$$payload2.out += "<!--[!-->";
						}
						$$payload2.out += `<!--]--></span>`;
					} else {
						$$payload2.out += "<!--[!-->";
					}
					$$payload2.out += `<!--]--> MCP (${escape_html(store_get(($$store_subs ??= {}), "$enabledServersCount", enabledServersCount))})</button> <button class="grid size-5 place-items-center rounded-full bg-blue-600/15 text-blue-700 transition-colors hover:bg-blue-600/25 dark:bg-blue-600/25 dark:text-blue-300 dark:hover:bg-blue-600/35" aria-label="Disable all MCP servers" type="button">`;
					Close($$payload2, { class: "size-3.5" });
					$$payload2.out += `<!----></button></div>`;
				} else {
					$$payload2.out += "<!--[!-->";
				}
				$$payload2.out += `<!--]--></div>`;
			} else {
				$$payload2.out += "<!--[!-->";
			}
			$$payload2.out += `<!--]--></div>`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--> `;
		children?.($$payload2);
		$$payload2.out += `<!----> `;
		UrlFetchModal($$payload2, {
			acceptMimeTypes: mimeTypes,
			onfiles: handleFetchedFiles,
			get open() {
				return isUrlModalOpen;
			},
			set open($$value) {
				isUrlModalOpen = $$value;
				$$settled = false;
			},
		});
		$$payload2.out += `<!----> `;
		if (isMcpManagerOpen) {
			$$payload2.out += "<!--[-->";
			MCPServerManager($$payload2, { onclose: () => (isMcpManagerOpen = false) });
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--></div>`;
	}
	do {
		$$settled = true;
		$$inner_payload = copy_payload($$payload);
		$$render_inner($$inner_payload);
	} while (!$$settled);
	assign_payload($$payload, $$inner_payload);
	if ($$store_subs) unsubscribe_stores($$store_subs);
	bind_props($$props, { files, value, focused });
	pop();
}
function Stop_filled_alt($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	$$payload.out += `<svg${spread_attributes(
		{
			viewBox: "0 0 32 32",
			width: "1.2em",
			height: "1.2em",
			...$$sanitized_props,
		},
		null,
		void 0,
		void 0,
		3
	)}>${html(`<path fill="currentColor" d="M24 6H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"/>`)}</svg>`;
}
function StopGeneratingBtn($$payload, $$props) {
	let { classNames = "", showBorder = false } = $$props;
	$$payload.out += `<button type="button"${attr_class(`btn stop-generating-btn ${showBorder ? "stop-generating-btn--spinning" : ""} ${classNames}`, "svelte-17ml63u")} aria-label="Stop generating"><span class="sr-only">Stop generating</span> `;
	Stop_filled_alt($$payload, { class: "size-3.5 text-gray-500" });
	$$payload.out += `<!----></button>`;
}
function Rotate_360($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	$$payload.out += `<svg${spread_attributes(
		{
			viewBox: "0 0 32 32",
			width: "1.2em",
			height: "1.2em",
			...$$sanitized_props,
		},
		null,
		void 0,
		void 0,
		3
	)}>${html(`<path d="M25.95 7.65l.005-.004c-.092-.11-.197-.206-.293-.312c-.184-.205-.367-.41-.563-.603c-.139-.136-.286-.262-.43-.391c-.183-.165-.366-.329-.558-.482c-.16-.128-.325-.247-.49-.367c-.192-.14-.385-.277-.585-.406a13.513 13.513 0 0 0-.533-.324q-.308-.179-.625-.341c-.184-.094-.37-.185-.56-.27c-.222-.1-.449-.191-.678-.28c-.19-.072-.378-.145-.571-.208c-.246-.082-.498-.15-.75-.217c-.186-.049-.368-.102-.556-.143c-.29-.063-.587-.107-.883-.15c-.16-.023-.315-.056-.476-.073A12.933 12.933 0 0 0 6 7.703V4H4v8h8v-2H6.811A10.961 10.961 0 0 1 16 5a11.111 11.111 0 0 1 1.189.067c.136.015.268.042.403.061c.25.037.501.075.746.128c.16.035.315.08.472.121c.213.057.425.114.633.183c.164.054.325.116.486.178c.193.074.384.15.57.235c.162.072.32.15.477.23q.268.136.526.286c.153.09.305.18.453.276c.168.11.33.224.492.342c.14.102.282.203.417.312c.162.13.316.268.47.406c.123.11.248.217.365.332c.167.164.323.338.479.512A10.993 10.993 0 1 1 5 16H3a13 13 0 1 0 22.95-8.35z" fill="currentColor"/>`)}</svg>`;
}
function RetryBtn($$payload, $$props) {
	let { classNames = "" } = $$props;
	$$payload.out += `<button type="button"${attr_class(`btn flex h-7 rounded-lg border bg-white px-2 py-1 text-sm text-gray-500 shadow-sm hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 ${stringify(classNames)}`)}>`;
	Rotate_360($$payload, { class: "mr-1 -translate-y-px text-[.65rem]" });
	$$payload.out += `<!----> Retry</button>`;
}
const file2base64 = (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			const dataUrl = reader.result;
			const base64 = dataUrl.split(",")[1];
			resolve(base64);
		};
		reader.onerror = (error) => reject(error);
	});
};
function IconLoading($$payload, $$props) {
	let { classNames = "" } = $$props;
	$$payload.out += `<div${attr_class("inline-flex h-8 flex-none items-center gap-1 " + classNames)}><div class="h-1 w-1 flex-none animate-bounce rounded-full bg-gray-500 dark:bg-gray-400" style="animation-delay: 0.25s;"></div> <div class="h-1 w-1 flex-none animate-bounce rounded-full bg-gray-500 dark:bg-gray-400" style="animation-delay: 0.5s;"></div> <div class="h-1 w-1 flex-none animate-bounce rounded-full bg-gray-500 dark:bg-gray-400" style="animation-delay: 0.75s;"></div></div>`;
}
function Pen($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	$$payload.out += `<svg${spread_attributes(
		{
			viewBox: "0 0 32 32",
			width: "1.2em",
			height: "1.2em",
			...$$sanitized_props,
		},
		null,
		void 0,
		void 0,
		3
	)}>${html(`<path fill="currentColor" d="M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"/>`)}</svg>`;
}
function Document_blank($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	$$payload.out += `<svg${spread_attributes(
		{
			viewBox: "0 0 32 32",
			width: "1.2em",
			height: "1.2em",
			...$$sanitized_props,
		},
		null,
		void 0,
		void 0,
		3
	)}>${html(`<path fill="currentColor" d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"/>`)}</svg>`;
}
function Download($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	$$payload.out += `<svg${spread_attributes(
		{
			viewBox: "0 0 32 32",
			width: "1.2em",
			height: "1.2em",
			...$$sanitized_props,
		},
		null,
		void 0,
		void 0,
		3
	)}>${html(`<path fill="currentColor" d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10z"/>`)}</svg>`;
}
function Play($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	$$payload.out += `<svg${spread_attributes(
		{
			viewBox: "0 0 32 32",
			width: "1.2em",
			height: "1.2em",
			...$$sanitized_props,
		},
		null,
		void 0,
		void 0,
		3
	)}>${html(`<path fill="currentColor" d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28M8 6.69v18.62L24.925 16Z"/>`)}</svg>`;
}
function AudioPlayer($$payload, $$props) {
	let { src, name } = $$props;
	let time = 0;
	let duration = 0;
	function format(time2) {
		if (isNaN(time2)) return "...";
		const minutes = Math.floor(time2 / 60);
		const seconds = Math.floor(time2 % 60);
		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	}
	$$payload.out += `<div class="flex h-14 w-72 items-center gap-4 rounded-2xl border border-gray-200 bg-white p-2.5 text-gray-600 shadow-sm transition-all dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"><audio${attr("src", src)} preload="metadata"></audio> <button class="mx-auto my-auto aspect-square size-8 rounded-full border border-gray-400 bg-gray-100 dark:border-gray-800 dark:bg-gray-700"${attr("aria-label", "play")}>`;
	{
		$$payload.out += "<!--[-->";
		Play($$payload, {
			class: "mx-auto my-auto text-gray-600 dark:text-gray-300",
		});
	}
	$$payload.out += `<!--]--></button> <div class="overflow-hidden"><div class="truncate font-medium">${escape_html(name)}</div> `;
	if (duration !== Infinity) {
		$$payload.out += "<!--[-->";
		$$payload.out += `<div class="flex items-center gap-2"><span class="text-xs">${escape_html(format(time))}</span> <div class="relative h-2 flex-1 rounded-full bg-gray-200 dark:bg-gray-700"><div class="absolute inset-0 h-full bg-gray-400 dark:bg-gray-600"${attr_style(`width: ${stringify((time / duration) * 100)}%`)}></div></div> <span class="text-xs">${escape_html("--:--")}</span></div>`;
	} else {
		$$payload.out += "<!--[!-->";
	}
	$$payload.out += `<!--]--></div></div>`;
}
function Loading($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	$$payload.out += `<svg${spread_attributes(
		{
			viewBox: "0 0 24 24",
			width: "1.2em",
			height: "1.2em",
			...$$sanitized_props,
		},
		null,
		void 0,
		void 0,
		3
	)}>${html(`<path fill="currentColor" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity=".5"/><path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"><animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate"/></path>`)}</svg>`;
}
function UploadedFile($$payload, $$props) {
	push();
	let { file, canClose = true, onclose } = $$props;
	let urlNotTrailing = page.url.pathname.replace(/\/$/, "");
	function truncateMiddle(text, maxLength) {
		if (text.length <= maxLength) {
			return text;
		}
		const halfLength = Math.floor((maxLength - 1) / 2);
		const start = text.substring(0, halfLength);
		const end = text.substring(text.length - halfLength);
		return `${start}…${end}`;
	}
	const isImage = (mime) =>
		mime.startsWith("image/") || mime === "webp" || mime === "jpeg" || mime === "png";
	const isAudio = (mime) =>
		mime.startsWith("audio/") || mime === "mp3" || mime === "wav" || mime === "x-wav";
	const isVideo = (mime) => mime.startsWith("video/") || mime === "mp4" || mime === "x-mpeg";
	function matchesAllowed(contentType, allowed) {
		const ct = contentType.split(";")[0]?.trim().toLowerCase();
		if (!ct) return false;
		const [ctType, ctSubtype] = ct.split("/");
		for (const a of allowed) {
			const [aType, aSubtype] = a.toLowerCase().split("/");
			const typeOk = aType === "*" || aType === ctType;
			const subOk = aSubtype === "*" || aSubtype === ctSubtype;
			if (typeOk && subOk) return true;
		}
		return false;
	}
	const isPlainText = (mime) =>
		mime === "application/vnd.chatui.clipboard" || matchesAllowed(mime, TEXT_MIME_ALLOWLIST);
	let isClickable = isImage(file.mime) || isPlainText(file.mime);
	{
		$$payload.out += "<!--[!-->";
	}
	$$payload.out += `<!--]--> <div role="button" tabindex="0"${attr_class("", void 0, { clickable: isClickable })}><div class="group relative flex items-center rounded-xl shadow-sm">`;
	if (isImage(file.mime)) {
		$$payload.out += "<!--[-->";
		$$payload.out += `<div class="h-36 overflow-hidden rounded-xl"><img${attr("src", file.type === "base64" ? `data:${file.mime};base64,${file.value}` : urlNotTrailing + "/output/" + file.value)}${attr("alt", file.name)} class="h-36 bg-gray-200 object-cover dark:bg-gray-800"/></div>`;
	} else if (isAudio(file.mime)) {
		$$payload.out += "<!--[1-->";
		AudioPlayer($$payload, {
			src:
				file.type === "base64"
					? `data:${file.mime};base64,${file.value}`
					: urlNotTrailing + "/output/" + file.value,
			name: truncateMiddle(file.name, 28),
		});
	} else if (isVideo(file.mime)) {
		$$payload.out += "<!--[2-->";
		$$payload.out += `<div class="border-1 w-72 overflow-clip rounded-xl border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"><video${attr("src", file.type === "base64" ? `data:${file.mime};base64,${file.value}` : urlNotTrailing + "/output/" + file.value)} controls></video></div>`;
	} else if (isPlainText(file.mime)) {
		$$payload.out += "<!--[3-->";
		$$payload.out += `<div${attr_class("flex h-14 w-64 items-center gap-2 overflow-hidden rounded-xl border border-gray-200 bg-white p-2 dark:border-gray-800 dark:bg-gray-900 2xl:w-72", void 0, { "file-hoverable": isClickable })}><div class="grid size-10 flex-none place-items-center rounded-lg bg-gray-100 dark:bg-gray-800">`;
		Document($$payload, {
			class: "text-base text-gray-700 dark:text-gray-300",
		});
		$$payload.out += `<!----></div> <dl class="flex flex-col items-start truncate leading-tight"><dd class="text-sm">${escape_html(truncateMiddle(file.name, 28))}</dd> `;
		if (file.mime === "application/vnd.chatui.clipboard") {
			$$payload.out += "<!--[-->";
			$$payload.out += `<dt class="text-xs text-gray-400">Clipboard source</dt>`;
		} else {
			$$payload.out += "<!--[!-->";
			$$payload.out += `<dt class="text-xs text-gray-400">${escape_html(file.mime)}</dt>`;
		}
		$$payload.out += `<!--]--></dl></div>`;
	} else if (file.mime === "application/octet-stream") {
		$$payload.out += "<!--[4-->";
		$$payload.out += `<div${attr_class("flex h-14 w-72 items-center gap-2 overflow-hidden rounded-xl border border-gray-200 bg-white p-2 dark:border-gray-800 dark:bg-gray-900", void 0, { "file-hoverable": isClickable })}><div class="grid size-10 flex-none place-items-center rounded-lg bg-gray-100 dark:bg-gray-800">`;
		Document_blank($$payload, {
			class: "text-base text-gray-700 dark:text-gray-300",
		});
		$$payload.out += `<!----></div> <dl class="flex flex-grow flex-col truncate leading-tight"><dd class="text-sm">${escape_html(truncateMiddle(file.name, 28))}</dd> <dt class="text-xs text-gray-400">File type could not be determined</dt></dl> <a${attr("href", file.type === "base64" ? `data:application/octet-stream;base64,${file.value}` : urlNotTrailing + "/output/" + file.value)}${attr("download", file.name)} class="ml-auto flex-none">`;
		Download($$payload, {
			class: "text-base text-gray-700 dark:text-gray-300",
		});
		$$payload.out += `<!----></a></div>`;
	} else {
		$$payload.out += "<!--[!-->";
		$$payload.out += `<div${attr_class("flex h-14 w-72 items-center gap-2 overflow-hidden rounded-xl border border-gray-200 bg-white p-2 dark:border-gray-800 dark:bg-gray-900", void 0, { "file-hoverable": isClickable })}><div class="grid size-10 flex-none place-items-center rounded-lg bg-gray-100 dark:bg-gray-800">`;
		Document_blank($$payload, {
			class: "text-base text-gray-700 dark:text-gray-300",
		});
		$$payload.out += `<!----></div> <dl class="flex flex-col items-start truncate leading-tight"><dd class="text-sm">${escape_html(truncateMiddle(file.name, 28))}</dd> <dt class="text-xs text-gray-400">${escape_html(file.mime)}</dt></dl></div>`;
	}
	$$payload.out += `<!--]--> `;
	if (canClose) {
		$$payload.out += "<!--[-->";
		$$payload.out += `<button${attr_class("absolute -right-2 -top-2 z-10 grid size-6 place-items-center rounded-full border bg-black group-hover:visible dark:border-gray-700", void 0, { invisible: navigator.maxTouchPoints === 0 })}>`;
		Close($$payload, { class: " text-xs  text-white" });
		$$payload.out += `<!----></button>`;
	} else {
		$$payload.out += "<!--[!-->";
	}
	$$payload.out += `<!--]--></div></div>`;
	pop();
}
const linkImagePattern = /(!?\[)([^\]]*?)$/;
const boldPattern = /(\*\*)([^*]*?)$/;
const italicPattern = /(__)([^_]*?)$/;
const boldItalicPattern = /(\*\*\*)([^*]*?)$/;
const singleAsteriskPattern = /(\*)([^*]*?)$/;
const singleUnderscorePattern = /(_)([^_]*?)$/;
const inlineCodePattern = /(`)([^`]*?)$/;
const strikethroughPattern = /(~~)([^~]*?)$/;
const hasCompleteCodeBlock = (text) => {
	const tripleBackticks = (text.match(/```/g) || []).length;
	return tripleBackticks > 0 && tripleBackticks % 2 === 0 && text.includes("\n");
};
const getOpenCodeFenceIndex = (text) => {
	let openFenceIndex = -1;
	let inFence = false;
	for (const match of text.matchAll(/```/g)) {
		const index = match.index ?? -1;
		if (index === -1) {
			continue;
		}
		if (inFence) {
			inFence = false;
			openFenceIndex = -1;
		} else {
			inFence = true;
			openFenceIndex = index;
		}
	}
	return openFenceIndex;
};
const handleIncompleteLinksAndImages = (text) => {
	const incompleteLinkUrlPattern = /(!?)\[([^\]]+)\]\(([^)]+)$/;
	const incompleteLinkUrlMatch = text.match(incompleteLinkUrlPattern);
	if (incompleteLinkUrlMatch) {
		const isImage = incompleteLinkUrlMatch[1] === "!";
		const linkText = incompleteLinkUrlMatch[2];
		const partialUrl = incompleteLinkUrlMatch[3];
		const matchStart = text.lastIndexOf(`${isImage ? "!" : ""}[${linkText}](${partialUrl}`);
		const beforeLink = text.substring(0, matchStart);
		if (isImage) {
			return beforeLink;
		}
		return `${beforeLink}[${linkText}](streamdown:incomplete-link)`;
	}
	const linkMatch = text.match(linkImagePattern);
	if (linkMatch) {
		const isImage = linkMatch[1].startsWith("!");
		if (isImage) {
			const startIndex = text.lastIndexOf(linkMatch[1]);
			return text.substring(0, startIndex);
		}
		return `${text}](streamdown:incomplete-link)`;
	}
	return text;
};
const handleIncompleteBold = (text) => {
	if (hasCompleteCodeBlock(text)) {
		return text;
	}
	const boldMatch = text.match(boldPattern);
	if (boldMatch) {
		const contentAfterMarker = boldMatch[2];
		if (!contentAfterMarker || /^[\s_~*`]*$/.test(contentAfterMarker)) {
			return text;
		}
		const markerIndex = text.lastIndexOf(boldMatch[1]);
		const openFenceIndex = getOpenCodeFenceIndex(text);
		if (openFenceIndex !== -1 && markerIndex > openFenceIndex) {
			return text;
		}
		const beforeMarker = text.substring(0, markerIndex);
		const lastNewlineBeforeMarker = beforeMarker.lastIndexOf("\n");
		const lineStart = lastNewlineBeforeMarker === -1 ? 0 : lastNewlineBeforeMarker + 1;
		const lineBeforeMarker = text.substring(lineStart, markerIndex);
		if (/^[\s]*[-*+][\s]+$/.test(lineBeforeMarker)) {
			const hasNewlineInContent = contentAfterMarker.includes("\n");
			if (hasNewlineInContent) {
				return text;
			}
		}
		const asteriskPairs = (text.match(/\*\*/g) || []).length;
		if (asteriskPairs % 2 === 1) {
			return `${text}**`;
		}
	}
	return text;
};
const handleIncompleteDoubleUnderscoreItalic = (text) => {
	if (hasCompleteCodeBlock(text)) {
		return text;
	}
	const italicMatch = text.match(italicPattern);
	if (italicMatch) {
		const contentAfterMarker = italicMatch[2];
		if (!contentAfterMarker || /^[\s_~*`]*$/.test(contentAfterMarker)) {
			return text;
		}
		const markerIndex = text.lastIndexOf(italicMatch[1]);
		const openFenceIndex = getOpenCodeFenceIndex(text);
		if (openFenceIndex !== -1 && markerIndex > openFenceIndex) {
			return text;
		}
		const beforeMarker = text.substring(0, markerIndex);
		const lastNewlineBeforeMarker = beforeMarker.lastIndexOf("\n");
		const lineStart = lastNewlineBeforeMarker === -1 ? 0 : lastNewlineBeforeMarker + 1;
		const lineBeforeMarker = text.substring(lineStart, markerIndex);
		if (/^[\s]*[-*+][\s]+$/.test(lineBeforeMarker)) {
			const hasNewlineInContent = contentAfterMarker.includes("\n");
			if (hasNewlineInContent) {
				return text;
			}
		}
		const underscorePairs = (text.match(/__/g) || []).length;
		if (underscorePairs % 2 === 1) {
			return `${text}__`;
		}
	}
	return text;
};
const countSingleAsterisks = (text) => {
	return text.split("").reduce((acc, char, index) => {
		if (char === "*") {
			const prevChar = text[index - 1];
			const nextChar = text[index + 1];
			if (prevChar === "\\") {
				return acc;
			}
			let lineStartIndex = index;
			for (let i = index - 1; i >= 0; i--) {
				if (text[i] === "\n") {
					lineStartIndex = i + 1;
					break;
				}
				if (i === 0) {
					lineStartIndex = 0;
					break;
				}
			}
			const beforeAsterisk = text.substring(lineStartIndex, index);
			if (beforeAsterisk.trim() === "" && (nextChar === " " || nextChar === "	")) {
				return acc;
			}
			if (prevChar !== "*" && nextChar !== "*") {
				return acc + 1;
			}
		}
		return acc;
	}, 0);
};
const handleIncompleteSingleAsteriskItalic = (text) => {
	if (hasCompleteCodeBlock(text)) {
		return text;
	}
	const singleAsteriskMatch = text.match(singleAsteriskPattern);
	if (singleAsteriskMatch) {
		let firstSingleAsteriskIndex = -1;
		for (let i = 0; i < text.length; i++) {
			if (text[i] === "*" && text[i - 1] !== "*" && text[i + 1] !== "*") {
				firstSingleAsteriskIndex = i;
				break;
			}
		}
		if (firstSingleAsteriskIndex === -1) {
			return text;
		}
		const openFenceIndex = getOpenCodeFenceIndex(text);
		if (openFenceIndex !== -1 && firstSingleAsteriskIndex > openFenceIndex) {
			return text;
		}
		const contentAfterFirstAsterisk = text.substring(firstSingleAsteriskIndex + 1);
		if (!contentAfterFirstAsterisk || /^[\s_~*`]*$/.test(contentAfterFirstAsterisk)) {
			return text;
		}
		const singleAsterisks = countSingleAsterisks(text);
		if (singleAsterisks % 2 === 1) {
			return `${text}*`;
		}
	}
	return text;
};
const isWithinMathBlock = (text, position) => {
	let inInlineMath = false;
	let inBlockMath = false;
	for (let i = 0; i < text.length && i < position; i++) {
		if (text[i] === "\\" && text[i + 1] === "$") {
			i++;
			continue;
		}
		if (text[i] === "$") {
			if (text[i + 1] === "$") {
				inBlockMath = !inBlockMath;
				i++;
				inInlineMath = false;
			} else if (!inBlockMath) {
				inInlineMath = !inInlineMath;
			}
		}
	}
	return inInlineMath || inBlockMath;
};
const countSingleUnderscores = (text) => {
	return text.split("").reduce((acc, char, index) => {
		if (char === "_") {
			const prevChar = text[index - 1];
			const nextChar = text[index + 1];
			if (prevChar === "\\") {
				return acc;
			}
			if (isWithinMathBlock(text, index)) {
				return acc;
			}
			if (
				prevChar &&
				nextChar &&
				/[\p{L}\p{N}_]/u.test(prevChar) &&
				/[\p{L}\p{N}_]/u.test(nextChar)
			) {
				return acc;
			}
			if (prevChar !== "_" && nextChar !== "_") {
				return acc + 1;
			}
		}
		return acc;
	}, 0);
};
const handleIncompleteSingleUnderscoreItalic = (text) => {
	if (hasCompleteCodeBlock(text)) {
		return text;
	}
	const singleUnderscoreMatch = text.match(singleUnderscorePattern);
	if (singleUnderscoreMatch) {
		let firstSingleUnderscoreIndex = -1;
		for (let i = 0; i < text.length; i++) {
			if (
				text[i] === "_" &&
				text[i - 1] !== "_" &&
				text[i + 1] !== "_" &&
				text[i - 1] !== "\\" &&
				!isWithinMathBlock(text, i)
			) {
				const prevChar = i > 0 ? text[i - 1] : "";
				const nextChar = i < text.length - 1 ? text[i + 1] : "";
				if (
					prevChar &&
					nextChar &&
					/[\p{L}\p{N}_]/u.test(prevChar) &&
					/[\p{L}\p{N}_]/u.test(nextChar)
				) {
					continue;
				}
				firstSingleUnderscoreIndex = i;
				break;
			}
		}
		if (firstSingleUnderscoreIndex === -1) {
			return text;
		}
		const openFenceIndex = getOpenCodeFenceIndex(text);
		if (openFenceIndex !== -1 && firstSingleUnderscoreIndex > openFenceIndex) {
			return text;
		}
		const contentAfterFirstUnderscore = text.substring(firstSingleUnderscoreIndex + 1);
		if (!contentAfterFirstUnderscore || /^[\s_~*`]*$/.test(contentAfterFirstUnderscore)) {
			return text;
		}
		const singleUnderscores = countSingleUnderscores(text);
		if (singleUnderscores % 2 === 1) {
			const trailingNewlineMatch = text.match(/\n+$/);
			if (trailingNewlineMatch) {
				const textBeforeNewlines = text.slice(0, -trailingNewlineMatch[0].length);
				return `${textBeforeNewlines}_${trailingNewlineMatch[0]}`;
			}
			return `${text}_`;
		}
	}
	return text;
};
const isPartOfTripleBacktick = (text, i) => {
	const isTripleStart = text.substring(i, i + 3) === "```";
	const isTripleMiddle = i > 0 && text.substring(i - 1, i + 2) === "```";
	const isTripleEnd = i > 1 && text.substring(i - 2, i + 1) === "```";
	return isTripleStart || isTripleMiddle || isTripleEnd;
};
const countSingleBackticks = (text) => {
	let count = 0;
	for (let i = 0; i < text.length; i++) {
		if (text[i] === "`" && !isPartOfTripleBacktick(text, i)) {
			count++;
		}
	}
	return count;
};
const handleIncompleteInlineCode = (text) => {
	const inlineTripleBacktickMatch = text.match(/^```[^`\n]*```?$/);
	if (inlineTripleBacktickMatch && !text.includes("\n")) {
		if (text.endsWith("``") && !text.endsWith("```")) {
			return `${text}\``;
		}
		return text;
	}
	const allTripleBackticks = (text.match(/```/g) || []).length;
	const insideIncompleteCodeBlock = allTripleBackticks % 2 === 1;
	if (allTripleBackticks > 0 && allTripleBackticks % 2 === 0 && text.includes("\n")) {
		return text;
	}
	if (text.endsWith("```\n") || text.endsWith("```")) {
		if (allTripleBackticks % 2 === 0) {
			return text;
		}
	}
	const inlineCodeMatch = text.match(inlineCodePattern);
	if (inlineCodeMatch && !insideIncompleteCodeBlock) {
		const contentAfterMarker = inlineCodeMatch[2];
		if (!contentAfterMarker || /^[\s_~*`]*$/.test(contentAfterMarker)) {
			return text;
		}
		const singleBacktickCount = countSingleBackticks(text);
		if (singleBacktickCount % 2 === 1) {
			return `${text}\``;
		}
	}
	return text;
};
const handleIncompleteStrikethrough = (text) => {
	const strikethroughMatch = text.match(strikethroughPattern);
	if (strikethroughMatch) {
		const contentAfterMarker = strikethroughMatch[2];
		if (!contentAfterMarker || /^[\s_~*`]*$/.test(contentAfterMarker)) {
			return text;
		}
		const tildePairs = (text.match(/~~/g) || []).length;
		if (tildePairs % 2 === 1) {
			return `${text}~~`;
		}
	}
	return text;
};
const handleIncompleteBlockKatex = (text) => {
	const dollarPairs = (text.match(/\$\$/g) || []).length;
	if (dollarPairs % 2 === 0) {
		return text;
	}
	const firstDollarIndex = text.indexOf("$$");
	const hasNewlineAfterStart =
		firstDollarIndex !== -1 && text.indexOf("\n", firstDollarIndex) !== -1;
	if (hasNewlineAfterStart && !text.endsWith("\n")) {
		return `${text}
$$`;
	}
	return `${text}$$`;
};
const countTripleAsterisks = (text) => {
	let count = 0;
	const matches = text.match(/\*+/g) || [];
	for (const match of matches) {
		const asteriskCount = match.length;
		if (asteriskCount >= 3) {
			count += Math.floor(asteriskCount / 3);
		}
	}
	return count;
};
const handleIncompleteBoldItalic = (text) => {
	if (hasCompleteCodeBlock(text)) {
		return text;
	}
	if (/^\*{4,}$/.test(text)) {
		return text;
	}
	const boldItalicMatch = text.match(boldItalicPattern);
	if (boldItalicMatch) {
		const contentAfterMarker = boldItalicMatch[2];
		if (!contentAfterMarker || /^[\s_~*`]*$/.test(contentAfterMarker)) {
			return text;
		}
		const markerIndex = text.lastIndexOf(boldItalicMatch[1]);
		const openFenceIndex = getOpenCodeFenceIndex(text);
		if (openFenceIndex !== -1 && markerIndex > openFenceIndex) {
			return text;
		}
		const tripleAsteriskCount = countTripleAsterisks(text);
		if (tripleAsteriskCount % 2 === 1) {
			return `${text}***`;
		}
	}
	return text;
};
const parseIncompleteMarkdown = (text) => {
	if (!text || typeof text !== "string") {
		return text;
	}
	let result = text;
	const processedResult = handleIncompleteLinksAndImages(result);
	if (processedResult.endsWith("](streamdown:incomplete-link)")) {
		return processedResult;
	}
	result = processedResult;
	result = handleIncompleteBoldItalic(result);
	result = handleIncompleteBold(result);
	result = handleIncompleteDoubleUnderscoreItalic(result);
	result = handleIncompleteSingleAsteriskItalic(result);
	result = handleIncompleteSingleUnderscoreItalic(result);
	result = handleIncompleteInlineCode(result);
	result = handleIncompleteStrikethrough(result);
	result = handleIncompleteBlockKatex(result);
	return result;
};
function parseMarkdownIntoBlocks(markdown) {
	const hasFootnoteReference = /\[\^[^\]\s]{1,200}\](?!:)/.test(markdown);
	const hasFootnoteDefinition = /\[\^[^\]\s]{1,200}\]:/.test(markdown);
	if (hasFootnoteReference || hasFootnoteDefinition) {
		return [markdown];
	}
	const tokens = Lexer.lex(markdown, { gfm: true });
	const mergedBlocks = [];
	const htmlStack = [];
	for (let i = 0; i < tokens.length; i++) {
		const token = tokens[i];
		const currentBlock = token.raw;
		if (htmlStack.length > 0) {
			mergedBlocks[mergedBlocks.length - 1] += currentBlock;
			if (token.type === "html") {
				const closingTagMatch = currentBlock.match(/<\/(\w+)>/);
				if (closingTagMatch) {
					const closingTag = closingTagMatch[1];
					if (htmlStack[htmlStack.length - 1] === closingTag) {
						htmlStack.pop();
					}
				}
			}
			continue;
		}
		if (token.type === "html" && token.block) {
			const openingTagMatch = currentBlock.match(/<(\w+)[\s>]/);
			if (openingTagMatch) {
				const tagName = openingTagMatch[1];
				const hasClosingTag = currentBlock.includes(`</${tagName}>`);
				if (!hasClosingTag) {
					htmlStack.push(tagName);
				}
			}
		}
		if (currentBlock.trim() === "$$" && mergedBlocks.length > 0) {
			const previousBlock = mergedBlocks.at(-1);
			if (!previousBlock) {
				mergedBlocks.push(currentBlock);
				continue;
			}
			const prevStartsWith$$ = previousBlock.trimStart().startsWith("$$");
			const prevDollarCount = (previousBlock.match(/\$\$/g) || []).length;
			if (prevStartsWith$$ && prevDollarCount % 2 === 1) {
				mergedBlocks[mergedBlocks.length - 1] = previousBlock + currentBlock;
				continue;
			}
		}
		if (mergedBlocks.length > 0 && currentBlock.trimEnd().endsWith("$$")) {
			const previousBlock = mergedBlocks.at(-1);
			if (!previousBlock) {
				mergedBlocks.push(currentBlock);
				continue;
			}
			const prevStartsWith$$ = previousBlock.trimStart().startsWith("$$");
			const prevDollarCount = (previousBlock.match(/\$\$/g) || []).length;
			const currDollarCount = (currentBlock.match(/\$\$/g) || []).length;
			if (
				prevStartsWith$$ &&
				prevDollarCount % 2 === 1 &&
				!currentBlock.trimStart().startsWith("$$") &&
				currDollarCount === 1
			) {
				mergedBlocks[mergedBlocks.length - 1] = previousBlock + currentBlock;
				continue;
			}
		}
		mergedBlocks.push(currentBlock);
	}
	return mergedBlocks;
}
const bundledLanguages = [
	["javascript", javascript],
	["typescript", typescript],
	["json", json],
	["bash", bash],
	["shell", shell],
	["python", python],
	["go", go],
	["rust", rust],
	["java", java],
	["csharp", csharp],
	["cpp", cpp],
	["c", cLang],
	["xml", xml],
	["html", xml],
	["css", css],
	["scss", scss],
	["markdown", markdownLang],
	["yaml", yaml],
	["sql", sql],
	["plaintext", plaintext],
];
bundledLanguages.forEach(([name, language]) => hljs.registerLanguage(name, language));
const katexBlockExtension = {
	name: "katexBlock",
	level: "block",
	start(src) {
		const match = src.match(/(\${2}|\\\[)/);
		return match ? match.index : -1;
	},
	tokenizer(src) {
		const rule1 = /^\${2}([\s\S]+?)\${2}/;
		const match1 = rule1.exec(src);
		if (match1) {
			const token = {
				type: "katexBlock",
				raw: match1[0],
				text: match1[1].trim(),
				displayMode: true,
			};
			return token;
		}
		const rule2 = /^\\\[([\s\S]+?)\\\]/;
		const match2 = rule2.exec(src);
		if (match2) {
			const token = {
				type: "katexBlock",
				raw: match2[0],
				text: match2[1].trim(),
				displayMode: true,
			};
			return token;
		}
		return void 0;
	},
	renderer(token) {
		if (token.type === "katexBlock") {
			return katex.renderToString(token.text, {
				throwOnError: false,
				displayMode: token.displayMode,
			});
		}
		return void 0;
	},
};
const katexInlineExtension = {
	name: "katexInline",
	level: "inline",
	start(src) {
		const match = src.match(/(\$|\\\()/);
		return match ? match.index : -1;
	},
	tokenizer(src) {
		const rule1 = /^\$([^$]+?)\$/;
		const match1 = rule1.exec(src);
		if (match1) {
			const token = {
				type: "katexInline",
				raw: match1[0],
				text: match1[1].trim(),
				displayMode: false,
			};
			return token;
		}
		const rule2 = /^\\\(([\s\S]+?)\\\)/;
		const match2 = rule2.exec(src);
		if (match2) {
			const token = {
				type: "katexInline",
				raw: match2[0],
				text: match2[1].trim(),
				displayMode: false,
			};
			return token;
		}
		return void 0;
	},
	renderer(token) {
		if (token.type === "katexInline") {
			return katex.renderToString(token.text, {
				throwOnError: false,
				displayMode: token.displayMode,
			});
		}
		return void 0;
	},
};
function escapeHTML(content) {
	return content.replace(
		/[<>&"']/g,
		(x) =>
			({
				"<": "&lt;",
				">": "&gt;",
				"&": "&amp;",
				"'": "&#39;",
				'"': "&quot;",
			})[x] || x
	);
}
function addInlineCitations(md, webSearchSources = []) {
	const linkStyle =
		"color: rgb(59, 130, 246); text-decoration: none; hover:text-decoration: underline;";
	return md.replace(/\[(\d+)\]/g, (match) => {
		const indices = (match.match(/\d+/g) || []).map(Number);
		const links = indices
			.map((index) => {
				if (index === 0) return false;
				const source = webSearchSources[index - 1];
				if (source) {
					return `<a href="${source.link}" target="_blank" rel="noreferrer" style="${linkStyle}">${index}</a>`;
				}
				return "";
			})
			.filter(Boolean)
			.join(", ");
		return links ? ` <sup>${links}</sup>` : match;
	});
}
function sanitizeHref(href) {
	if (!href) return void 0;
	const trimmed = href.trim();
	const lower = trimmed.toLowerCase();
	if (lower.startsWith("javascript:") || lower.startsWith("data:text/html")) {
		return void 0;
	}
	return trimmed.replace(/>$/, "");
}
function highlightCode(text, lang) {
	if (lang && hljs.getLanguage(lang)) {
		try {
			return hljs.highlight(text, { language: lang, ignoreIllegals: true }).value;
		} catch {}
	}
	return hljs.highlightAuto(text).value;
}
function createMarkedInstance(sources) {
	return new Marked({
		hooks: {
			postprocess: (html2) => addInlineCitations(html2, sources),
		},
		extensions: [katexBlockExtension, katexInlineExtension],
		renderer: {
			link: (href, title, text) => {
				const safeHref = sanitizeHref(href);
				return safeHref
					? `<a href="${safeHref}" target="_blank" rel="noreferrer">${text}</a>`
					: `<span>${escapeHTML(text ?? "")}</span>`;
			},
			html: (html2) => escapeHTML(html2),
		},
		gfm: true,
		breaks: true,
	});
}
function isFencedBlockClosed(raw) {
	if (!raw) return true;
	const trimmed = raw.replace(/[\s\u0000]+$/, "");
	const openingFenceMatch = trimmed.match(/^([`~]{3,})/);
	if (!openingFenceMatch) {
		return true;
	}
	const fence = openingFenceMatch[1];
	const closingFencePattern = new RegExp(`(?:
|\r
)${fence}(?:[	 ]+)?$`);
	return closingFencePattern.test(trimmed);
}
const blockCache = /* @__PURE__ */ new Map();
function cacheKey(index, blockContent, sources) {
	const sourceKey = sources.map((s) => s.link).join("|");
	return `${index}-${hashString(blockContent)}|${sourceKey}`;
}
function processTokensSync(content, sources) {
	const processedContent = parseIncompleteMarkdown(content);
	const marked = createMarkedInstance(sources);
	const tokens = marked.lexer(processedContent);
	return tokens.map((token) => {
		if (token.type === "code") {
			return {
				type: "code",
				lang: token.lang,
				code: highlightCode(token.text, token.lang),
				rawCode: token.text,
				isClosed: isFencedBlockClosed(token.raw ?? ""),
			};
		}
		return { type: "text", html: marked.parse(token.raw) };
	});
}
function hashString(str) {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		const char = str.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash = hash & hash;
	}
	return Math.abs(hash).toString(36);
}
function processBlocksSync(content, sources = []) {
	const blocks = parseMarkdownIntoBlocks(content);
	return blocks.map((blockContent, index) => {
		const key = cacheKey(index, blockContent, sources);
		const cached = blockCache.get(key);
		if (cached) return cached;
		const tokens = processTokensSync(blockContent, sources);
		const block = {
			id: `${index}-${hashString(blockContent)}`,
			content: blockContent,
			tokens,
		};
		blockCache.set(key, block);
		return block;
	});
}
function Play_filled_alt($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	$$payload.out += `<svg${spread_attributes(
		{
			viewBox: "0 0 32 32",
			width: "1.2em",
			height: "1.2em",
			...$$sanitized_props,
		},
		null,
		void 0,
		void 0,
		3
	)}>${html(`<path fill="currentColor" d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28"/>`)}</svg>`;
}
function CodeBlock($$payload, $$props) {
	push();
	let { code = "", rawCode = "", loading = false } = $$props;
	function hasStrictHtml5Doctype(input) {
		if (!input) return false;
		const withoutBOM = input.replace(/^\uFEFF/, "");
		const trimmed = withoutBOM.trimStart();
		return /^<!doctype\s+html\s*>/i.test(trimmed);
	}
	function isSvgDocument(input) {
		const trimmed = input.trimStart();
		return /^(?:<\?xml[^>]*>\s*)?(?:<!doctype\s+svg[^>]*>\s*)?<svg[\s>]/i.test(trimmed);
	}
	let showPreview = hasStrictHtml5Doctype(rawCode) || isSvgDocument(rawCode);
	$$payload.out += `<div class="group relative my-4 rounded-lg"><div class="pointer-events-none sticky top-0 w-full"><div class="pointer-events-auto absolute right-2 top-2 flex items-center gap-1.5 md:right-3 md:top-3">`;
	if (showPreview) {
		$$payload.out += "<!--[-->";
		$$payload.out += `<button class="btn h-7 gap-1 rounded-lg border px-2 text-xs shadow-sm backdrop-blur transition-none hover:border-gray-500 active:shadow-inner disabled:cursor-not-allowed disabled:opacity-80 dark:border-gray-600 dark:bg-gray-600/50 dark:hover:border-gray-500"${attr("disabled", loading, true)} title="Preview HTML" aria-label="Preview HTML">`;
		if (loading) {
			$$payload.out += "<!--[-->";
			Loading($$payload, { class: "size-3.5" });
		} else {
			$$payload.out += "<!--[!-->";
			Play_filled_alt($$payload, { class: "size-3.5" });
		}
		$$payload.out += `<!--]--> Preview</button>`;
	} else {
		$$payload.out += "<!--[!-->";
	}
	$$payload.out += `<!--]--> `;
	CopyToClipBoardBtn($$payload, {
		iconClassNames: "size-3",
		classNames:
			"btn transition-none rounded-lg border size-7 text-sm shadow-sm dark:bg-gray-600/50 backdrop-blur dark:hover:border-gray-500  active:shadow-inner dark:border-gray-600  hover:border-gray-500",
		value: rawCode,
	});
	$$payload.out += `<!----></div></div> <pre class="scrollbar-custom overflow-auto px-5 font-mono transition-[height]"><code>${html(DOMPurify.sanitize(code))}</code></pre> `;
	{
		$$payload.out += "<!--[!-->";
	}
	$$payload.out += `<!--]--></div>`;
	pop();
}
function MarkdownBlock($$payload, $$props) {
	let { tokens, loading = false } = $$props;
	const renderedTokens = tokens;
	const each_array = ensure_array_like(renderedTokens);
	$$payload.out += `<!--[-->`;
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let token = each_array[$$index];
		if (token.type === "text") {
			$$payload.out += "<!--[-->";
			$$payload.out += `${html(token.html)}`;
		} else if (token.type === "code") {
			$$payload.out += "<!--[1-->";
			CodeBlock($$payload, {
				code: token.code,
				rawCode: token.rawCode,
				loading: loading && !token.isClosed,
			});
		} else {
			$$payload.out += "<!--[!-->";
		}
		$$payload.out += `<!--]-->`;
	}
	$$payload.out += `<!--]-->`;
}
function MarkdownRenderer($$payload, $$props) {
	push();
	let { content, sources = [], loading = false } = $$props;
	let blocks = processBlocksSync(content, sources);
	let worker = null;
	onDestroy(() => {
		worker?.terminate();
		worker = null;
	});
	const each_array = ensure_array_like(blocks);
	$$payload.out += `<!--[-->`;
	for (let index = 0, $$length = each_array.length; index < $$length; index++) {
		let block = each_array[index];
		MarkdownBlock($$payload, { tokens: block.tokens, loading });
	}
	$$payload.out += `<!--]-->`;
	pop();
}
function OpenReasoningResults($$payload, $$props) {
	push();
	let { summary, content, loading = false } = $$props;
	let isOpen = loading;
	$$payload.out += `<details${attr("open", isOpen, true)} class="group flex w-fit max-w-full flex-col rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 [&amp;:has(+_.prose)]:mb-4 [.prose+&amp;]:mt-4 [details+&amp;]:mt-2 svelte-135jgtx"><summary class="grid min-w-72 cursor-pointer select-none grid-cols-[40px,1fr,24px] items-center gap-2.5 rounded-xl p-2 group-open:rounded-b-none hover:bg-gray-50 dark:hover:bg-gray-800/20 svelte-135jgtx"><div class="relative grid aspect-square place-content-center overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"><div class="grid h-dvh place-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path class="stroke-gray-600 dark:stroke-gray-400" style="stroke-width: 1.9; fill: none; stroke-linecap: round; stroke-linejoin: round;" d="M16 6v3.33M16 6c0-2.65 3.25-4.3 5.4-2.62 1.2.95 1.6 2.65.95 4.04a3.63 3.63 0 0 1 4.61.16 3.45 3.45 0 0 1 .46 4.37 5.32 5.32 0 0 1 1.87 4.75c-.22 1.66-1.39 3.6-3.07 4.14M16 6c0-2.65-3.25-4.3-5.4-2.62a3.37 3.37 0 0 0-.95 4.04 3.65 3.65 0 0 0-4.6.16 3.37 3.37 0 0 0-.49 4.27 5.57 5.57 0 0 0-1.85 4.85 5.3 5.3 0 0 0 3.07 4.15M16 9.33v17.34m0-17.34c0 2.18 1.82 4 4 4m6.22 7.5c.67 1.3.56 2.91-.27 4.11a4.05 4.05 0 0 1-4.62 1.5c0 1.53-1.05 2.9-2.66 2.9A2.7 2.7 0 0 1 16 26.66m10.22-5.83a4.05 4.05 0 0 0-3.55-2.17m-16.9 2.18a4.05 4.05 0 0 0 .28 4.1c1 1.44 2.92 2.09 4.59 1.5 0 1.52 1.12 2.88 2.7 2.88A2.7 2.7 0 0 0 16 26.67M5.78 20.85a4.04 4.04 0 0 1 3.55-2.18"></path>`;
	if (loading) {
		$$payload.out += "<!--[-->";
		$$payload.out += `<path class="animate-pulse stroke-white" style="stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 50;" d="M16 6v3.33M16 6c0-2.65 3.25-4.3 5.4-2.62 1.2.95 1.6 2.65.95 4.04a3.63 3.63 0 0 1 4.61.16 3.45 3.45 0 0 1 .46 4.37 5.32 5.32 0 0 1 1.87 4.75c-.22 1.66-1.39 3.6-3.07 4.14M16 6c0-2.65-3.25-4.3-5.4-2.62a3.37 3.37 0 0 0-.95 4.04 3.65 3.65 0 0 0-4.6.16 3.37 3.37 0 0 0-.49 4.27 5.57 5.57 0 0 0-1.85 4.85 5.3 5.3 0 0 0 3.07 4.15M16 9.33v17.34m0-17.34c0 2.18 1.82 4 4 4m6.22 7.5c.67 1.3.56 2.91-.27 4.11a4.05 4.05 0 0 1-4.62 1.5c0 1.53-1.05 2.9-2.66 2.9A2.7 2.7 0 0 1 16 26.66m10.22-5.83a4.05 4.05 0 0 0-3.55-2.17m-16.9 2.18a4.05 4.05 0 0 0 .28 4.1c1 1.44 2.92 2.09 4.59 1.5 0 1.52 1.12 2.88 2.7 2.88A2.7 2.7 0 0 0 16 26.67M5.78 20.85a4.04 4.04 0 0 1 3.55-2.18"><animate attributeName="stroke-dashoffset" values="0;500" dur="12s" repeatCount="indefinite"></animate></path>`;
	} else {
		$$payload.out += "<!--[!-->";
	}
	$$payload.out += `<!--]--></svg></div></div> <dl class="leading-4"><dd class="text-sm">Reasoning</dd> <dt${attr_class("flex items-center gap-1 truncate whitespace-nowrap text-[.82rem] text-gray-400", void 0, { "animate-pulse": loading })}>${escape_html(summary.length > 33 ? summary.substring(0, 33) + "..." : summary.endsWith("...") ? summary : summary + "...")}</dt></dl> `;
	Caret_down($$payload, {
		class: "transition-rotate size-5 -rotate-90 text-gray-400 group-open:rotate-0",
	});
	$$payload.out += `<!----></summary> <div class="prose prose-sm !max-w-none space-y-4 border-t border-gray-200 p-3 text-sm text-gray-600 dark:prose-invert prose-img:my-0 prose-img:rounded-lg dark:border-gray-800 dark:text-gray-400"><!---->`;
	{
		MarkdownRenderer($$payload, { content, loading });
	}
	$$payload.out += `<!----></div></details>`;
	pop();
}
function Alternatives($$payload, $$props) {
	push();
	let {
		message,
		alternatives = [],
		loading = false,
		classNames = "",
		onshowAlternateMsg,
	} = $$props;
	let currentIdx = alternatives.findIndex((id) => id === message.id);
	$$payload.out += `<div${attr_class(`font-white group/navbranch z-0 flex h-6 w-fit select-none items-center justify-center gap-1 whitespace-nowrap text-sm ${stringify(classNames)}`)}><button class="inline text-lg font-thin text-gray-400 hover:text-gray-800 disabled:pointer-events-none disabled:opacity-25 dark:text-gray-500 dark:hover:text-gray-200"${attr("disabled", currentIdx === 0 || loading, true)}>`;
	Chevron_left($$payload, { class: "text-sm" });
	$$payload.out += `<!----></button> <span class="text-gray-400 dark:text-gray-500">${escape_html(currentIdx + 1)} / ${escape_html(alternatives.length)}</span> <button class="inline text-lg font-thin text-gray-400 hover:text-gray-800 disabled:pointer-events-none disabled:opacity-25 dark:text-gray-500 dark:hover:text-gray-200"${attr("disabled", currentIdx === alternatives.length - 1 || loading, true)}>`;
	Chevron_right($$payload, { class: "text-sm" });
	$$payload.out += `<!----></button></div>`;
	pop();
}
function MessageAvatar($$payload, $$props) {
	push();
	let { classNames = "" } = $$props;
	onDestroy(() => {});
	$$payload.out += `<svg${attr_class(clsx(classNames))} id="ball" width="1em" height="1em" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Ball mask"><g clip-path="url(#a)"><path d="M12 6A6 6 0 1 0 0 6a6 6 0 0 0 12 0Z" fill="#fff"></path><mask id="b" style="mask-type:luminance" x="0" y="0" width="12" height="12"><path d="M12 6A6 6 0 1 0 0 6a6 6 0 0 0 12 0Z" fill="#fff"></path></mask><g filter="url(#c)" mask="url(#b)"><path id="blob" fill="#000" d="M11 1 L8 -4 L3 -8 L-6 6 L3 12 L7 11 L6 2 L11 1 Z"><animate attributeName="d" begin="indefinite" end="indefinite" dur="3.2s" repeatCount="indefinite" fill="remove" calcMode="spline" keyTimes="0; .33; .66; .9; 1" keySplines="
            .4 0 .2 1;
            .4 0 .2 1;
            .4 0 .2 1;
            .4 0 .2 1" values="
            M11 1 L8 -4 L3 -8 L-6 6 L3 12 L7 11 L6 2 L11 1 Z;
            M11 1 L8 -4 L3 -8 L-6 6 L3 12 L5 9  L7 4  L11 1 Z;
            M11 1 L8 -4 L3 -8 L-6 6 L3 12 L3 6  L5 1  L11 1 Z;
            M11 1 L8 -4 L3 -8 L-6 6 L3 12 L5 9  L7 4  L11 1 Z;
            M11 1 L8 -4 L3 -8 L-6 6 L3 12 L7 11 L6 2 L11 1 Z"></animate></path></g></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h12v12H0z"></path></clipPath><filter id="c" x="-9.4" y="-10.8" width="23.8" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="1.6"></feGaussianBlur></filter></defs></svg>`;
	pop();
}
async function fetchMessageUpdates(conversationId, opts, abortSignal) {
	const abortController = new AbortController();
	abortSignal.addEventListener("abort", () => abortController.abort());
	const form = new FormData();
	const optsJSON = JSON.stringify({
		inputs: opts.inputs,
		id: opts.messageId,
		is_retry: opts.isRetry,
		is_continue: Boolean(opts.isContinue),
		// Will be ignored server-side if unsupported
		selectedMcpServerNames: opts.selectedMcpServerNames,
		selectedMcpServers: opts.selectedMcpServers,
	});
	opts.files?.forEach((file) => {
		const name = file.type + ";" + file.name;
		form.append("files", new File([file.value], name, { type: file.mime }));
	});
	form.append("data", optsJSON);
	const response = await fetch(`${opts.base}/conversation/${conversationId}`, {
		method: "POST",
		body: form,
		signal: abortController.signal,
	});
	if (!response.ok) {
		const errorMessage = await response
			.json()
			.then((obj) => obj.message)
			.catch(() => `Request failed with status code ${response.status}: ${response.statusText}`);
		throw Error(errorMessage);
	}
	if (!response.body) {
		throw Error("Body not defined");
	}
	if (!(page.data.publicConfig.PUBLIC_SMOOTH_UPDATES === "true")) {
		return endpointStreamToIterator(response, abortController);
	}
	return smoothAsyncIterator(
		streamMessageUpdatesToFullWords(endpointStreamToIterator(response, abortController))
	);
}
async function* endpointStreamToIterator(response, abortController) {
	const reader = response.body?.pipeThrough(new TextDecoderStream()).getReader();
	if (!reader) throw Error("Response for endpoint had no body");
	reader.closed.then(() => abortController.abort());
	abortController.signal.addEventListener("abort", () => reader.cancel());
	let prevChunk = "";
	while (!abortController.signal.aborted) {
		const { done, value } = await reader.read();
		if (done) {
			abortController.abort();
			break;
		}
		if (!value) continue;
		const { messageUpdates, remainingText } = parseMessageUpdates(prevChunk + value);
		prevChunk = remainingText;
		for (const messageUpdate of messageUpdates) yield messageUpdate;
	}
}
function parseMessageUpdates(value) {
	const inputs = value.split("\n");
	const messageUpdates = [];
	for (const input of inputs) {
		try {
			messageUpdates.push(JSON.parse(input));
		} catch (error) {
			if (error instanceof SyntaxError) {
				return {
					messageUpdates,
					remainingText: inputs.at(-1) ?? "",
				};
			}
		}
	}
	return { messageUpdates, remainingText: "" };
}
async function* streamMessageUpdatesToFullWords(iterator) {
	let bufferedStreamUpdates = [];
	const endAlphanumeric = /[a-zA-Z0-9À-ž'`]+$/;
	const beginnningAlphanumeric = /^[a-zA-Z0-9À-ž'`]+/;
	for await (const messageUpdate of iterator) {
		if (messageUpdate.type !== "stream") {
			if (bufferedStreamUpdates.length > 0) {
				yield {
					type: MessageUpdateType.Stream,
					token: bufferedStreamUpdates.map((u) => u.token).join(""),
				};
				bufferedStreamUpdates = [];
			}
			yield messageUpdate;
			continue;
		}
		bufferedStreamUpdates.push(messageUpdate);
		let lastIndexEmitted = 0;
		for (let i = 1; i < bufferedStreamUpdates.length; i++) {
			const prevEndsAlphanumeric = endAlphanumeric.test(bufferedStreamUpdates[i - 1].token);
			const currBeginsAlphanumeric = beginnningAlphanumeric.test(bufferedStreamUpdates[i].token);
			const shouldCombine = prevEndsAlphanumeric && currBeginsAlphanumeric;
			const combinedTooMany = i - lastIndexEmitted >= 5;
			if (shouldCombine && !combinedTooMany) continue;
			yield {
				type: MessageUpdateType.Stream,
				token: bufferedStreamUpdates
					.slice(lastIndexEmitted, i)
					.map((_) => _.token)
					.join(""),
			};
			lastIndexEmitted = i;
		}
		bufferedStreamUpdates = bufferedStreamUpdates.slice(lastIndexEmitted);
	}
	for (const messageUpdate of bufferedStreamUpdates) yield messageUpdate;
}
async function* smoothAsyncIterator(iterator) {
	const eventTarget = new EventTarget();
	let done = false;
	const valuesBuffer = [];
	const valueTimesMS = [];
	const next = async () => {
		const obj = await iterator.next();
		if (obj.done) {
			done = true;
		} else {
			valuesBuffer.push(obj.value);
			valueTimesMS.push(performance.now());
			next();
		}
		eventTarget.dispatchEvent(new Event("next"));
	};
	next();
	let timeOfLastEmitMS = performance.now();
	while (!done || valuesBuffer.length > 0) {
		const sampledTimesMS = valueTimesMS.slice(-30);
		const anomalyThresholdMS = 2e3;
		const anomalyDurationMS = sampledTimesMS
			.map((time, i, times) => time - times[i - 1])
			.slice(1)
			.filter((time) => time > anomalyThresholdMS)
			.reduce((a, b) => a + b, 0);
		const totalTimeMSBetweenValues = sampledTimesMS.at(-1) - sampledTimesMS[0];
		const timeMSBetweenValues = totalTimeMSBetweenValues - anomalyDurationMS;
		const averageTimeMSBetweenValues = Math.min(
			200,
			timeMSBetweenValues / (sampledTimesMS.length - 1)
		);
		const timeSinceLastEmitMS = performance.now() - timeOfLastEmitMS;
		const gotNext = await Promise.race([
			sleep(Math.max(5, averageTimeMSBetweenValues - timeSinceLastEmitMS)),
			waitForEvent(eventTarget, "next"),
		]);
		if (gotNext) continue;
		if (valuesBuffer.length === 0) continue;
		timeOfLastEmitMS = performance.now();
		yield valuesBuffer.shift();
	}
}
const isMessageToolUpdate = (update) => update.type === MessageUpdateType.Tool;
const isMessageToolCallUpdate = (update) =>
	isMessageToolUpdate(update) && update.subtype === MessageToolUpdateType.Call;
const isMessageToolResultUpdate = (update) =>
	isMessageToolUpdate(update) && update.subtype === MessageToolUpdateType.Result;
const isMessageToolErrorUpdate = (update) =>
	isMessageToolUpdate(update) && update.subtype === MessageToolUpdateType.Error;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const waitForEvent = (eventTarget, eventName) =>
	new Promise((resolve) =>
		eventTarget.addEventListener(eventName, () => resolve(true), { once: true })
	);
function ToolUpdate($$payload, $$props) {
	push();
	let { tool, index, total } = $$props;
	let toolFnName = tool.find(isMessageToolCallUpdate)?.call.name;
	let toolError = tool.some(isMessageToolErrorUpdate);
	let toolDone = tool.some(isMessageToolResultUpdate);
	tool.find((update) => update.subtype === MessageToolUpdateType.ETA)?.eta;
	const availableTools = (() => page.data?.tools ?? [])();
	const formatValue = (value) => {
		if (value == null) return "";
		if (typeof value === "object") {
			try {
				return JSON.stringify(value, null, 2);
			} catch {
				return String(value);
			}
		}
		return String(value);
	};
	const getOutputText = (output) => {
		const maybeText = output["text"];
		if (typeof maybeText !== "string") return void 0;
		return maybeText;
	};
	const isImageBlock = (value) => {
		if (typeof value !== "object" || value === null) return false;
		const obj = value;
		return (
			obj["type"] === "image" &&
			typeof obj["data"] === "string" &&
			typeof obj["mimeType"] === "string"
		);
	};
	const getImageBlocks = (output) => {
		const blocks = output["content"];
		if (!Array.isArray(blocks)) return [];
		return blocks.filter(isImageBlock);
	};
	const getMetadataEntries = (output) => {
		return Object.entries(output).filter(
			([key, value]) => value != null && key !== "content" && key !== "text"
		);
	};
	const parseToolOutputs = (outputs) =>
		outputs.map((output) => ({
			text: getOutputText(output),
			images: getImageBlocks(output),
			metadata: getMetadataEntries(output),
		}));
	onDestroy(() => {});
	if (toolFnName) {
		$$payload.out += "<!--[-->";
		const each_array = ensure_array_like(tool);
		$$payload.out += `<details${attr_class(`group/tool my-2.5 w-fit max-w-full cursor-pointer rounded-lg border border-gray-200 bg-white px-1 ${stringify((total ?? 0) > 1 ? "" : "pr-2")} text-sm shadow-sm first:mt-0 open:mb-3 open:border-purple-500/10 open:bg-purple-600/5 open:shadow-sm dark:border-gray-800 dark:bg-gray-900 open:dark:border-purple-800/40 open:dark:bg-purple-800/10 [&+details]:-mt-2`, "svelte-9ax0m0")}><summary class="relative flex select-none list-none items-center gap-1.5 py-1 group-open/tool:text-purple-700 group-open/tool:dark:text-purple-300 svelte-9ax0m0"><div class="absolute -m-1 hidden h-full w-full rounded-lg bg-purple-500/5 transition-all dark:bg-purple-500/10"></div> <div class="relative grid size-[22px] place-items-center rounded bg-purple-600/10 dark:bg-purple-600/20"><svg${attr_class("absolute inset-0 text-purple-500/40 transition-opacity", void 0, { invisible: toolDone || toolError })} width="22" height="22" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="loading-path svelte-9ax0m0" d="M8 2.5H30C30 2.5 35.5 2.5 35.5 8V30C35.5 30 35.5 35.5 30 35.5H8C8 35.5 2.5 35.5 2.5 30V8C2.5 8 2.5 2.5 8 2.5Z" pathLength="100" stroke="currentColor" stroke-width="1" stroke-linecap="round" id="shape"></path></svg> `;
		Tools($$payload, {
			class: "text-xs text-purple-700 dark:text-purple-500",
		});
		$$payload.out += `<!----></div> <span class="relative">${escape_html(toolError ? "Error calling" : toolDone ? "Called" : "Calling")} tool <span class="font-semibold">${escape_html(availableTools.find((entry) => entry.name === toolFnName)?.displayName ?? toolFnName)}</span></span> `;
		if ((total ?? 0) > 1) {
			$$payload.out += "<!--[-->";
			$$payload.out += `<div class="relative ml-auto flex items-center gap-1.5"><div class="flex items-center divide-x rounded-md border border-gray-200 bg-gray-50 dark:divide-gray-700 dark:border-gray-800 dark:bg-gray-800"><button type="button" class="btn size-5 text-xs text-gray-500 hover:text-gray-700 focus:ring-0 disabled:opacity-40 dark:text-gray-400 dark:hover:text-gray-200" title="Previous tool" aria-label="Previous tool"${attr("disabled", index <= 0, true)}>`;
			Chevron_left($$payload, {});
			$$payload.out += `<!----></button> <span class="select-none px-1 text-center text-[10px] font-medium text-gray-500 dark:text-gray-400" aria-live="polite">${escape_html(index + 1)} <span class="text-gray-300 dark:text-gray-500">/</span> ${escape_html(total)}</span> <button type="button" class="btn size-5 text-xs text-gray-500 hover:text-gray-700 focus:ring-0 disabled:opacity-40 dark:text-gray-400 dark:hover:text-gray-200" title="Next tool" aria-label="Next tool"${attr("disabled", index >= (total ?? 1) - 1, true)}>`;
			Chevron_right($$payload, {});
			$$payload.out += `<!----></button></div></div>`;
		} else {
			$$payload.out += "<!--[!-->";
		}
		$$payload.out += `<!--]--></summary> <!--[-->`;
		for (let $$index_4 = 0, $$length = each_array.length; $$index_4 < $$length; $$index_4++) {
			let update = each_array[$$index_4];
			if (update.subtype === MessageToolUpdateType.Call) {
				$$payload.out += "<!--[-->";
				const each_array_1 = ensure_array_like(Object.entries(update.call.parameters ?? {}));
				$$payload.out += `<div class="mt-1 flex items-center gap-2 opacity-80"><h3 class="text-sm">Parameters</h3> <div class="h-px flex-1 bg-gradient-to-r from-gray-500/20"></div></div> <ul class="py-1 text-sm"><!--[-->`;
				for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
					let [key, value] = each_array_1[$$index];
					if (value != null) {
						$$payload.out += "<!--[-->";
						$$payload.out += `<li><span class="font-semibold">${escape_html(key)}</span>: <span class="whitespace-pre-wrap">${escape_html(formatValue(value))}</span></li>`;
					} else {
						$$payload.out += "<!--[!-->";
					}
					$$payload.out += `<!--]-->`;
				}
				$$payload.out += `<!--]--></ul>`;
			} else if (update.subtype === MessageToolUpdateType.Error) {
				$$payload.out += "<!--[1-->";
				$$payload.out += `<div class="mt-1 flex items-center gap-2 opacity-80"><h3 class="text-sm">Error</h3> <div class="h-px flex-1 bg-gradient-to-r from-gray-500/20"></div></div> <p class="text-sm">${escape_html(update.message)}</p>`;
			} else if (
				isMessageToolResultUpdate(update) &&
				update.result.status === ToolResultStatus.Success &&
				update.result.display
			) {
				$$payload.out += "<!--[2-->";
				const each_array_2 = ensure_array_like(parseToolOutputs(update.result.outputs));
				$$payload.out += `<div class="mt-1 flex items-center gap-2 opacity-80"><h3 class="text-sm">Result</h3> <div class="h-px flex-1 bg-gradient-to-r from-gray-500/20"></div></div> <div class="py-1 text-sm"><!--[-->`;
				for (
					let $$index_3 = 0, $$length2 = each_array_2.length;
					$$index_3 < $$length2;
					$$index_3++
				) {
					let parsedOutput = each_array_2[$$index_3];
					$$payload.out += `<div class="space-y-2 py-2 first:pt-0 last:pb-0">`;
					if (parsedOutput.text) {
						$$payload.out += "<!--[-->";
						$$payload.out += `<pre class="whitespace-pre-wrap break-all font-mono text-xs">${escape_html(parsedOutput.text)}</pre>`;
					} else {
						$$payload.out += "<!--[!-->";
					}
					$$payload.out += `<!--]--> `;
					if (parsedOutput.images.length > 0) {
						$$payload.out += "<!--[-->";
						const each_array_3 = ensure_array_like(parsedOutput.images);
						$$payload.out += `<div class="flex flex-wrap gap-2"><!--[-->`;
						for (
							let imageIndex = 0, $$length3 = each_array_3.length;
							imageIndex < $$length3;
							imageIndex++
						) {
							let image = each_array_3[imageIndex];
							$$payload.out += `<img${attr("alt", `Tool result image ${imageIndex + 1}`)} class="max-h-60 rounded border border-gray-200 dark:border-gray-800"${attr("src", `data:${image.mimeType};base64,${image.data}`)}/>`;
						}
						$$payload.out += `<!--]--></div>`;
					} else {
						$$payload.out += "<!--[!-->";
					}
					$$payload.out += `<!--]--> `;
					if (parsedOutput.metadata.length > 0) {
						$$payload.out += "<!--[-->";
						const each_array_4 = ensure_array_like(parsedOutput.metadata);
						$$payload.out += `<ul class="space-y-1"><!--[-->`;
						for (
							let $$index_2 = 0, $$length3 = each_array_4.length;
							$$index_2 < $$length3;
							$$index_2++
						) {
							let [key, value] = each_array_4[$$index_2];
							$$payload.out += `<li><span class="font-semibold">${escape_html(key)}</span>: <span class="whitespace-pre-wrap">${escape_html(formatValue(value))}</span></li>`;
						}
						$$payload.out += `<!--]--></ul>`;
					} else {
						$$payload.out += "<!--[!-->";
					}
					$$payload.out += `<!--]--></div>`;
				}
				$$payload.out += `<!--]--></div>`;
			} else if (
				isMessageToolResultUpdate(update) &&
				update.result.status === ToolResultStatus.Error &&
				update.result.display
			) {
				$$payload.out += "<!--[3-->";
				$$payload.out += `<div class="mt-1 flex items-center gap-2 opacity-80"><h3 class="text-sm text-red-600 dark:text-red-400">Error</h3> <div class="h-px flex-1 bg-gradient-to-r from-red-500/20"></div></div> <p class="whitespace-pre-wrap text-sm text-red-600 dark:text-red-400">${escape_html(update.result.message)}</p>`;
			} else {
				$$payload.out += "<!--[!-->";
			}
			$$payload.out += `<!--]-->`;
		}
		$$payload.out += `<!--]--></details>`;
	} else {
		$$payload.out += "<!--[!-->";
	}
	$$payload.out += `<!--]-->`;
	pop();
}
function ChatMessage($$payload, $$props) {
	push();
	const publicConfig = usePublicConfig();
	let {
		message,
		loading = false,
		isAuthor: _isAuthor = true,
		readOnly: _readOnly = false,
		isTapped = false,
		alternatives = [],
		editMsdgId = null,
		isLast = false,
		onretry,
		onshowAlternateMsg,
	} = $$props;
	let messageWidth = 0;
	let messageInfoWidth = 0;
	const THINK_BLOCK_REGEX = /(<think>[\s\S]*?(?:<\/think>|$))/gi;
	let hasClientThink = message.content.split(THINK_BLOCK_REGEX).length > 1;
	let contentWithoutThink = (() => message.content.replace(THINK_BLOCK_REGEX, "").trim())();
	let toolUpdateGroups = (() => {
		const groups = {};
		for (const u of message.updates ?? []) {
			if (!isMessageToolUpdate(u)) continue;
			(groups[u.uuid] ||= []).push(u);
		}
		return groups;
	})();
	let hasToolUpdates = Object.keys(toolUpdateGroups).length > 0;
	let toolGroups = Object.values(toolUpdateGroups);
	let toolNavIndex = 0;
	let editMode = editMsdgId === message.id;
	if (message.from === "assistant") {
		$$payload.out += "<!--[-->";
		$$payload.out += `<div${attr_class(`group relative -mb-4 flex w-fit max-w-full items-start justify-start gap-4 pb-4 leading-relaxed max-sm:mb-1 ${stringify(message.routerMetadata && messageInfoWidth >= messageWidth ? "mb-1" : "")}`)}${attr("data-message-id", message.id)} data-message-role="assistant" role="presentation">`;
		MessageAvatar($$payload, {
			classNames: "mt-5 size-3.5 flex-none select-none rounded-full shadow-lg max-sm:hidden",
		});
		$$payload.out += `<!----> <div class="relative flex min-w-[60px] flex-col gap-2 break-words rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 px-5 py-3.5 text-gray-600 prose-pre:my-2 dark:border-gray-800 dark:from-gray-800/80 dark:text-gray-300">`;
		if (message.files?.length) {
			$$payload.out += "<!--[-->";
			const each_array = ensure_array_like(message.files);
			$$payload.out += `<div class="flex h-fit flex-wrap gap-x-5 gap-y-2"><!--[-->`;
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let file = each_array[$$index];
				UploadedFile($$payload, { file, canClose: false });
			}
			$$payload.out += `<!--]--></div>`;
		} else {
			$$payload.out += "<!--[!-->";
		}
		$$payload.out += `<!--]--> `;
		if (hasToolUpdates) {
			$$payload.out += "<!--[-->";
			if (toolGroups.length) {
				$$payload.out += "<!--[-->";
				const group = toolGroups[toolNavIndex];
				ToolUpdate($$payload, {
					tool: group,
					index: toolNavIndex,
					total: toolGroups.length,
				});
			} else {
				$$payload.out += "<!--[!-->";
			}
			$$payload.out += `<!--]-->`;
		} else {
			$$payload.out += "<!--[!-->";
		}
		$$payload.out += `<!--]--> <div>`;
		if (isLast && loading && message.content.length === 0) {
			$$payload.out += "<!--[-->";
			IconLoading($$payload, { classNames: "loading inline ml-2 first:ml-0" });
		} else {
			$$payload.out += "<!--[!-->";
		}
		$$payload.out += `<!--]--> `;
		if (hasClientThink) {
			$$payload.out += "<!--[-->";
			const each_array_1 = ensure_array_like(message.content.split(THINK_BLOCK_REGEX));
			$$payload.out += `<!--[-->`;
			for (let _i = 0, $$length = each_array_1.length; _i < $$length; _i++) {
				let part = each_array_1[_i];
				if (part && part.startsWith("<think>")) {
					$$payload.out += "<!--[-->";
					const isClosed = part.endsWith("</think>");
					const thinkContent = part.slice(7, isClosed ? -8 : void 0);
					const isInterrupted = !isClosed && !loading;
					const summary =
						isClosed || isInterrupted
							? thinkContent.trim().split(/\n+/)[0] || "Reasoning"
							: "Thinking...";
					OpenReasoningResults($$payload, {
						summary,
						content: thinkContent,
						loading: isLast && loading && !isClosed,
					});
				} else if (part && part.trim().length > 0) {
					$$payload.out += "<!--[1-->";
					$$payload.out += `<div class="prose max-w-none dark:prose-invert max-sm:prose-sm prose-headings:font-semibold prose-h1:text-lg prose-h2:text-base prose-h3:text-base prose-pre:bg-gray-800 prose-img:my-0 prose-img:rounded-lg dark:prose-pre:bg-gray-900">`;
					MarkdownRenderer($$payload, { content: part, loading: isLast && loading });
					$$payload.out += `<!----></div>`;
				} else {
					$$payload.out += "<!--[!-->";
				}
				$$payload.out += `<!--]-->`;
			}
			$$payload.out += `<!--]-->`;
		} else {
			$$payload.out += "<!--[!-->";
			$$payload.out += `<div class="prose max-w-none dark:prose-invert max-sm:prose-sm prose-headings:font-semibold prose-h1:text-lg prose-h2:text-base prose-h3:text-base prose-pre:bg-gray-800 prose-img:my-0 prose-img:rounded-lg dark:prose-pre:bg-gray-900">`;
			MarkdownRenderer($$payload, {
				content: message.content,
				loading: isLast && loading,
			});
			$$payload.out += `<!----></div>`;
		}
		$$payload.out += `<!--]--></div></div> `;
		if (message.routerMetadata || (!loading && message.content)) {
			$$payload.out += "<!--[-->";
			$$payload.out += `<div${attr_class(`absolute -bottom-3.5 ${stringify(message.routerMetadata && messageInfoWidth > messageWidth ? "left-1 pl-1 lg:pl-7" : "right-1")} flex max-w-[calc(100dvw-40px)] items-center gap-0.5`)}>`;
			if (
				message.routerMetadata &&
				(message.routerMetadata.route ||
					message.routerMetadata.model ||
					message.routerMetadata.provider) &&
				(!isLast || !loading)
			) {
				$$payload.out += "<!--[-->";
				$$payload.out += `<div class="mr-2 flex items-center gap-1.5 truncate whitespace-nowrap text-[.65rem] text-gray-400 dark:text-gray-400 sm:text-xs">`;
				if (message.routerMetadata.route && message.routerMetadata.model) {
					$$payload.out += "<!--[-->";
					$$payload.out += `<span class="truncate rounded bg-gray-100 px-1 font-mono dark:bg-gray-800 sm:py-px">${escape_html(message.routerMetadata.route)}</span> <span class="text-gray-500">with</span> `;
					if (publicConfig.isHuggingChat) {
						$$payload.out += "<!--[-->";
						$$payload.out += `<a${attr("href", `/chat/settings/${stringify(message.routerMetadata.model)}`)} class="flex items-center gap-1 truncate rounded bg-gray-100 px-1 font-mono hover:text-gray-500 dark:bg-gray-800 dark:hover:text-gray-300 sm:py-px">${escape_html(message.routerMetadata.model.split("/").pop())}</a>`;
					} else {
						$$payload.out += "<!--[!-->";
						$$payload.out += `<span class="truncate rounded bg-gray-100 px-1.5 font-mono dark:bg-gray-800 sm:py-px">${escape_html(message.routerMetadata.model.split("/").pop())}</span>`;
					}
					$$payload.out += `<!--]-->`;
				} else {
					$$payload.out += "<!--[!-->";
				}
				$$payload.out += `<!--]--> `;
				if (message.routerMetadata.provider) {
					$$payload.out += "<!--[-->";
					const hubOrg = PROVIDERS_HUB_ORGS[message.routerMetadata.provider];
					$$payload.out += `<span class="text-gray-500 max-sm:hidden">via</span> <a target="_blank"${attr("href", `https://huggingface.co/${stringify(hubOrg)}`)} class="flex items-center gap-1 truncate rounded bg-gray-100 px-1 font-mono hover:text-gray-500 dark:bg-gray-800 dark:hover:text-gray-300 max-sm:hidden sm:py-px"><img${attr("src", `https://huggingface.co/api/organizations/${stringify(hubOrg)}/avatar`)}${attr("alt", `${stringify(message.routerMetadata.provider)} logo`)} class="size-2.5 flex-none rounded-sm" onerror="this.__e=event"/> ${escape_html(message.routerMetadata.provider)}</a>`;
				} else {
					$$payload.out += "<!--[!-->";
				}
				$$payload.out += `<!--]--></div>`;
			} else {
				$$payload.out += "<!--[!-->";
			}
			$$payload.out += `<!--]--> `;
			if (!isLast || !loading) {
				$$payload.out += "<!--[-->";
				CopyToClipBoardBtn($$payload, {
					onClick: () => {},
					classNames:
						"btn rounded-sm p-1 text-sm text-gray-400 hover:text-gray-500 focus:ring-0 dark:text-gray-400 dark:hover:text-gray-300",
					value: contentWithoutThink,
					iconClassNames: "text-xs",
				});
				$$payload.out += `<!----> <button class="btn rounded-sm p-1 text-xs text-gray-400 hover:text-gray-500 focus:ring-0 dark:text-gray-400 dark:hover:text-gray-300" title="Retry" type="button">`;
				Rotate_360($$payload, {});
				$$payload.out += `<!----></button> `;
				if (alternatives.length > 1 && editMsdgId === null) {
					$$payload.out += "<!--[-->";
					Alternatives($$payload, {
						message,
						alternatives,
						loading,
						onshowAlternateMsg: (payload) => onshowAlternateMsg?.(payload),
					});
				} else {
					$$payload.out += "<!--[!-->";
				}
				$$payload.out += `<!--]-->`;
			} else {
				$$payload.out += "<!--[!-->";
			}
			$$payload.out += `<!--]--></div>`;
		} else {
			$$payload.out += "<!--[!-->";
		}
		$$payload.out += `<!--]--></div>`;
	} else {
		$$payload.out += "<!--[!-->";
	}
	$$payload.out += `<!--]--> `;
	if (message.from === "user") {
		$$payload.out += "<!--[-->";
		$$payload.out += `<div${attr_class(`group relative ${stringify(alternatives.length > 1 && editMsdgId === null ? "mb-7" : "")} w-full items-start justify-start gap-4 max-sm:text-sm`)}${attr("data-message-id", message.id)} data-message-type="user" role="presentation"><div class="flex w-full flex-col gap-2">`;
		if (message.files?.length) {
			$$payload.out += "<!--[-->";
			const each_array_2 = ensure_array_like(message.files);
			$$payload.out += `<div class="flex w-fit gap-4 px-5"><!--[-->`;
			for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
				let file = each_array_2[$$index_2];
				UploadedFile($$payload, { file, canClose: false });
			}
			$$payload.out += `<!--]--></div>`;
		} else {
			$$payload.out += "<!--[!-->";
		}
		$$payload.out += `<!--]--> <div class="flex w-full flex-row flex-nowrap">`;
		if (!editMode) {
			$$payload.out += "<!--[-->";
			$$payload.out += `<p class="disabled w-full appearance-none whitespace-break-spaces text-wrap break-words bg-inherit px-5 py-3.5 text-gray-500 dark:text-gray-400">${escape_html(message.content.trim())}</p>`;
		} else {
			$$payload.out += "<!--[!-->";
			$$payload.out += `<form class="mt-3 flex w-full flex-col"><textarea class="w-full whitespace-break-spaces break-words rounded-xl bg-gray-100 px-5 py-3.5 text-gray-500 *:h-max focus:outline-none dark:bg-gray-800 dark:text-gray-400" rows="5" required>`;
			const $$body = escape_html(message.content.trim());
			if ($$body) {
				$$payload.out += `${$$body}`;
			}
			$$payload.out += `</textarea> <div class="flex w-full flex-row flex-nowrap items-center justify-center gap-2 pt-2"><button type="submit"${attr_class(`btn rounded-lg px-3 py-1.5 text-sm ${stringify(loading ? "bg-gray-300 text-gray-400 dark:bg-gray-700 dark:text-gray-600" : "bg-gray-200 text-gray-600 hover:text-gray-800   focus:ring-0 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-gray-200")} `)}${attr("disabled", loading, true)}>Send</button> <button type="button" class="btn rounded-sm p-2 text-sm text-gray-400 hover:text-gray-500 focus:ring-0 dark:text-gray-400 dark:hover:text-gray-300">Cancel</button></div></form>`;
		}
		$$payload.out += `<!--]--></div> <div class="absolute -bottom-4 ml-3.5 flex w-full gap-1.5">`;
		if (alternatives.length > 1 && editMsdgId === null) {
			$$payload.out += "<!--[-->";
			Alternatives($$payload, {
				message,
				alternatives,
				loading,
				onshowAlternateMsg: (payload) => onshowAlternateMsg?.(payload),
			});
		} else {
			$$payload.out += "<!--[!-->";
		}
		$$payload.out += `<!--]--> `;
		if ((alternatives.length > 1 && editMsdgId === null) || (!loading && !editMode)) {
			$$payload.out += "<!--[-->";
			$$payload.out += `<button class="hidden cursor-pointer items-center gap-1 rounded-md border border-gray-200 px-1.5 py-0.5 text-xs text-gray-400 group-hover:flex hover:flex hover:text-gray-500 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300 lg:-right-2" title="Edit" type="button">`;
			Pen($$payload, {});
			$$payload.out += `<!----> Edit</button>`;
		} else {
			$$payload.out += "<!--[!-->";
		}
		$$payload.out += `<!--]--></div></div></div>`;
	} else {
		$$payload.out += "<!--[!-->";
	}
	$$payload.out += `<!--]-->`;
	bind_props($$props, { isTapped, editMsdgId });
	pop();
}
function ScrollToBottomBtn($$payload, $$props) {
	push();
	{
		$$payload.out += "<!--[!-->";
	}
	$$payload.out += `<!--]-->`;
	pop();
}
function ScrollToPreviousBtn($$payload, $$props) {
	push();
	function destroy() {}
	onDestroy(destroy);
	{
		$$payload.out += "<!--[!-->";
	}
	$$payload.out += `<!--]-->`;
	pop();
}
function Blockchain($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	$$payload.out += `<svg${spread_attributes(
		{
			viewBox: "0 0 32 32",
			width: "1.2em",
			height: "1.2em",
			...$$sanitized_props,
		},
		null,
		void 0,
		void 0,
		3
	)}>${html(`<path fill="currentColor" d="M6 24H4V8h2ZM28 8h-2v16h2Zm-4-2V4H8v2Zm0 22v-2H8v2Z"/>`)}</svg>`;
}
function SystemPromptModal($$payload, $$props) {
	$$payload.out += `<button type="button" class="mx-auto flex items-center gap-1.5 rounded-full border border-gray-100 bg-gray-50 px-3 py-1 text-xs text-gray-500 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">`;
	Blockchain($$payload, { class: "text-xxs" });
	$$payload.out += `<!----> Using Custom System Prompt</button> `;
	{
		$$payload.out += "<!--[!-->";
	}
	$$payload.out += `<!--]-->`;
}
function ShareConversationModal($$payload, $$props) {
	push();
	let { open = false, onclose } = $$props;
	let creating = false;
	function close() {
		open = false;
		onclose?.();
	}
	if (open) {
		$$payload.out += "<!--[-->";
		Modal($$payload, {
			onclose: close,
			width: "w-[90dvh] md:w-[500px]",
			children: ($$payload2) => {
				$$payload2.out += `<div class="flex w-full flex-col gap-3 p-5 sm:gap-5 sm:p-6">`;
				{
					$$payload2.out += "<!--[!-->";
					$$payload2.out += `<div class="flex items-start justify-between"><div class="text-xl font-semibold text-gray-800 dark:text-gray-200">Share public link to chat</div> <button type="button" class="group" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="size-5 text-gray-700 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-400"><path d="M24 9.41 22.59 8 16 14.59 9.41 8 8 9.41 14.59 16 8 22.59 9.41 24 16 17.41 22.59 24 24 22.59 17.41 16 24 9.41z" fill="currentColor"></path></svg></button></div> <div class="text-sm text-gray-600 dark:text-gray-400">Any messages you add after sharing stay private.</div>`;
				}
				$$payload2.out += `<!--]--> `;
				{
					$$payload2.out += "<!--[!-->";
				}
				$$payload2.out += `<!--]--> <div class="flex h-12 items-center gap-2 whitespace-nowrap rounded-2xl border border-gray-200 bg-gray-50 p-2.5 dark:border-gray-700 dark:bg-gray-800"><input class="w-full truncate bg-transparent text-[15px] text-gray-700 outline-none placeholder:text-gray-400 dark:text-gray-200 dark:placeholder:text-gray-500 max-sm:text-sm" readonly${attr("value", `${page.data.publicConfig.PUBLIC_SHARE_PREFIX || `${page.data.publicConfig.PUBLIC_ORIGIN || page.url.origin}${base}`}/r/...`)}/> `;
				{
					$$payload2.out += "<!--[!-->";
					$$payload2.out += `<button class="-mr-1 inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 shadow hover:bg-gray-50 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600" type="button"${attr("disabled", creating, true)}>`;
					{
						$$payload2.out += "<!--[!-->";
						Link($$payload2, { class: "text-[1.05em]" });
						$$payload2.out += `<!----> Create link`;
					}
					$$payload2.out += `<!--]--></button>`;
				}
				$$payload2.out += `<!--]--></div></div>`;
			},
		});
	} else {
		$$payload.out += "<!--[!-->";
	}
	$$payload.out += `<!--]-->`;
	pop();
}
function ChatIntroduction($$payload, $$props) {
	push();
	const publicConfig = usePublicConfig();
	$$payload.out += `<div class="my-auto grid items-center justify-center gap-8 text-center"><div class="flex -translate-y-16 select-none items-center rounded-xl text-3xl font-semibold md:-translate-y-12 md:text-5xl">`;
	Logo($$payload, {
		classNames: "size-12 md:size-20 dark:invert mr-0.5",
	});
	$$payload.out += `<!----> ${escape_html(publicConfig.PUBLIC_APP_NAME)}</div></div>`;
	pop();
}
function ModelSwitch($$payload, $$props) {
	push();
	let { models, currentModel } = $$props;
	let selectedModelId = models.map((m) => m.id).includes(currentModel.id)
		? currentModel.id
		: models[0].id;
	const each_array = ensure_array_like(models);
	$$payload.out += `<div class="mx-auto mt-0 flex w-fit flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 bg-gray-500/20 p-4 dark:border-gray-800"><span>This model is no longer available. Switch to a new one to continue this conversation:</span> <div class="flex items-center space-x-2"><select class="rounded-md bg-gray-100 px-2 py-1 dark:bg-gray-900 max-sm:max-w-32">`;
	$$payload.select_value = selectedModelId;
	$$payload.out += `<!--[-->`;
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let model = each_array[$$index];
		$$payload.out += `<option${attr("value", model.id)}${maybe_selected($$payload, model.id)}>${escape_html(model.name)}</option>`;
	}
	$$payload.out += `<!--]-->`;
	$$payload.select_value = void 0;
	$$payload.out += `</select> <button${attr("disabled", selectedModelId === currentModel.id, true)} class="rounded-md bg-gray-100 px-2 py-1 dark:bg-gray-900">Accept</button></div></div>`;
	pop();
}
const routerExamples = [
	{
		title: "HTML game",
		prompt: "Code a minimal Flappy Bird game using HTML and Canvas",
		followUps: [
			{
				title: "README.md file",
				prompt: "Create a comprehensive README.md for the Flappy Bird game project.",
			},
			{
				title: "CRT Screen",
				prompt: "Add a CRT screen effect to the game",
			},
			{
				title: "Add power-ups",
				prompt:
					"Add collectible coins between pipes that award bonus points and a shield power-up that allows one collision.",
			},
			{
				title: "Explain collision detection",
				prompt:
					"Explain the collision detection algorithm for the bird and pipes in simple terms with examples.",
			},
		],
	},
	{
		title: "Weird painting",
		prompt: "is this a real painting?",
		attachments: [
			{
				src: "huggingchat/castle-example.jpg",
			},
		],
	},
	{
		title: "Landing page",
		prompt:
			"Build a responsive SaaS landing page for my AI coding assitant using Tailwind CSS. With a hero, features, testimonials, and pricing sections.",
		followUps: [
			{
				title: "Dark mode",
				prompt: "Add dark mode and make it the default",
			},
			{
				title: "Write blog post",
				prompt: "Write a blog post introducing my service.",
			},
			{
				title: "Translate to Italian",
				prompt: "Translate only the text content displayed to users into Italian.",
			},
			{
				title: "Architecture review",
				prompt:
					"Review the architecture and suggest improvements for scalability, SEO optimization, and performance.",
			},
		],
	},
	{
		title: "Eminem song",
		prompt:
			"Write an Eminem-style rap battling AI taking over hip-hop, with two energetic verses and a catchy hook.",
		followUps: [
			{
				title: "Psychological analysis",
				prompt: "Provide a psychological analysis of Eminem's emotions in this song.",
			},
			{
				title: "Wired Article",
				prompt: "Write an article in the style of Wired explaining this Eminem release.",
			},
			{
				title: "Roleplay",
				prompt: "Roleplay as Eminem so I can discuss the song with him.",
			},
			{
				title: "Translate to Spanish",
				prompt: "Translate the rap lyrics to Spanish while maintaining the rhyme scheme and flow.",
			},
		],
	},
	{
		title: "Act as Yoda",
		prompt: "Act as Yoda",
		followUps: [
			{
				title: "Give advice",
				prompt:
					"Continue acting as Yoda and offer three pieces of life advice for staying focused under pressure.",
			},
			{
				title: "Explain the Force",
				prompt:
					"In Yoda's voice, explain the concept of the Force to a young padawan using modern language.",
			},
			{
				title: "Plain English",
				prompt:
					"Rewrite the previous response from Yoda into plain English while keeping the same meaning.",
			},
			{
				title: "Compare philosophies",
				prompt:
					"Compare Yoda's Jedi philosophy to Stoic philosophy from ancient Greece and explain the similarities and differences.",
			},
		],
	},
	{
		title: "Generate prompts",
		prompt: `Generate 5 creative prompts Text-to-image prompts like: "Cyberpunk cityscape at night, neon lights, flying cars, rain-slicked streets, blade runner aesthetic, highly detailed`,
		followUps: [
			{
				title: "Turn into JSON",
				prompt: `Generate a detailed JSON object for each prompt. Include fields for subjects (list of objects), scene (setting, environment, background details), actions (what's happening), style (artistic style or medium)`,
			},
			{
				title: "Sci-fi portraits",
				prompt:
					"Produce five futuristic character portrait prompts with unique professions and settings.",
			},
			{
				title: "Explain image generation",
				prompt:
					"Explain how text-to-image diffusion models work, covering the denoising process and how text prompts guide generation.",
			},
		],
	},
	{
		title: "Explain LLMs",
		prompt:
			"Explain how large language models based on transformers work, covering attention, embeddings, and training objectives.",
		followUps: [
			{
				title: "Generate a Quiz",
				prompt: "Craft a 5-question multiple-choice quiz to validate what I learned.",
			},
			{
				title: "Compare to RNNs",
				prompt:
					"Compare transformer-based large language models to recurrent neural networks, focusing on training efficiency and capabilities.",
			},
			{
				title: "Student summary",
				prompt:
					"Summarize the explanation of large language models for a high school student using relatable analogies.",
			},
			{
				title: "Write a blog post",
				prompt:
					"Write a blog post about how transformers revolutionized NLP, targeting software engineers who are new to AI.",
			},
		],
	},
	{
		title: "Translate in Italian",
		prompt: `Translate in Italian: Some are born great, some achieve greatness, and some have greatness thrust upon 'em`,
		followUps: [
			{
				title: "Back to English",
				prompt:
					"Translate the Italian version back into English while keeping Shakespeare's tone intact.",
			},
			{
				title: "Explain choices",
				prompt: "Explain your translation choices for each key phrase from the Italian version.",
			},
			{
				title: "Modernize",
				prompt:
					"Modernize the Italian translation into contemporary informal Italian suitable for social media.",
			},
			{
				title: "Teach me Italian",
				prompt:
					"Help me practice Italian by conversing about this Shakespeare quote, correcting my grammar when needed.",
			},
		],
	},
	{
		title: "Pelican on a bicycle",
		prompt: "Draw an SVG of a pelican riding a bicycle",
		followUps: [
			{
				title: "Add a top hat",
				prompt: "Add a fancy top hat to the pelican and make it look distinguished",
			},
			{
				title: "Make it animated",
				prompt: "Add CSS animations to make the bicycle wheels spin and the pelican's wings flap",
			},
		],
	},
];
function ChatWindow($$payload, $$props) {
	push();
	var $$store_subs;
	let {
		messages = [],
		messagesAlternatives = [],
		loading = false,
		pending = false,
		shared = false,
		currentModel,
		models,
		preprompt = void 0,
		files = [],
		draft = "",
		onmessage,
		onstop,
		onretry,
		onshowAlternateMsg,
	} = $$props;
	let isReadOnly = !models.some((model) => model.id === currentModel.id);
	let shareModalOpen = false;
	let editMsdgId = null;
	let pastedLongContent = false;
	const handleSubmit = () => {
		if (requireAuthUser() || loading || !draft) return;
		onmessage?.(draft);
		draft = "";
	};
	const onPaste = (e) => {
		const textContent = e.clipboardData?.getData("text");
		if (
			!store_get(($$store_subs ??= {}), "$settings", settings).directPaste &&
			textContent &&
			textContent.length >= 3984
		) {
			e.preventDefault();
			pastedLongContent = true;
			setTimeout(() => {
				pastedLongContent = false;
			}, 1e3);
			const pastedFile = new File([textContent], "Pasted Content", {
				type: "application/vnd.chatui.clipboard",
			});
			files = [...files, pastedFile];
		}
		if (!e.clipboardData) {
			return;
		}
		const pastedFiles = Array.from(e.clipboardData.files);
		if (pastedFiles.length !== 0) {
			e.preventDefault();
			const filteredFiles = pastedFiles.filter((file) => {
				return activeMimeTypes.some((mimeType) => {
					const [type, subtype] = mimeType.split("/");
					const [fileType, fileSubtype] = file.type.split("/");
					return (
						(type === "*" || fileType === type) && (subtype === "*" || fileSubtype === subtype)
					);
				});
			});
			files = [...files, ...filteredFiles];
		}
	};
	(() => {
		const last = messages.at(-1);
		return last ? `${last.id}:${last.content.length}:${messages.length}` : `${messages.length}:0`;
	})();
	let streamingAssistantMessage = (() => {
		for (let i = messages.length - 1; i >= 0; i -= 1) {
			const candidate = messages[i];
			if (candidate.from === "assistant") {
				return candidate;
			}
		}
		return void 0;
	})();
	let streamingRouterMetadata = streamingAssistantMessage?.routerMetadata ?? null;
	streamingRouterMetadata?.model
		? (streamingRouterMetadata.model.split("/").pop() ?? streamingRouterMetadata.model)
		: "";
	let lastIsError =
		!loading &&
		(streamingAssistantMessage?.updates?.findIndex(
			(u) => u.type === "status" && u.status === "error"
		) ?? -1) !== -1;
	const availableTools = (() => page.data?.tools ?? [])();
	let streamingToolCallName = (() => {
		const updates = streamingAssistantMessage?.updates ?? [];
		if (!updates.length) return null;
		const done = /* @__PURE__ */ new Set();
		for (const u of updates) {
			if (isMessageToolResultUpdate(u) || isMessageToolErrorUpdate(u)) done.add(u.uuid);
		}
		for (let i = updates.length - 1; i >= 0; i -= 1) {
			const u = updates[i];
			if (isMessageToolCallUpdate(u) && !done.has(u.uuid)) {
				return u.call.name;
			}
		}
		return null;
	})();
	let sources = files?.map((file) =>
		file2base64(file).then((value) => ({
			type: "base64",
			value,
			mime: file.type,
			name: file.name,
		}))
	);
	const unsubscribeShareModal = shareModal.subscribe((value) => {
		shareModalOpen = value;
	});
	onDestroy(() => {
		unsubscribeShareModal();
		shareModal.close();
	});
	const settings = useSettingsStore();
	let hideRouterExamples =
		store_get(($$store_subs ??= {}), "$settings", settings).hidePromptExamples?.[currentModel.id] ??
		false;
	let modelIsMultimodalOverride = store_get(($$store_subs ??= {}), "$settings", settings)
		.multimodalOverrides?.[currentModel.id];
	let modelIsMultimodal = (modelIsMultimodalOverride ?? currentModel.multimodal) === true;
	let modelSupportsTools =
		(store_get(($$store_subs ??= {}), "$settings", settings).toolsOverrides?.[currentModel.id] ??
			currentModel.supportsTools) === true;
	let activeMimeTypes = Array.from(
		/* @__PURE__ */ new Set([
			...TEXT_MIME_ALLOWLIST,
			...(modelIsMultimodal
				? (currentModel.multimodalAcceptedMimetypes ?? [...IMAGE_MIME_ALLOWLIST_DEFAULT])
				: []),
		])
	);
	let isFileUploadEnabled = activeMimeTypes.length > 0;
	let focused = false;
	let activeRouterExamplePrompt = null;
	messages.filter((msg) => msg.from === "user");
	!draft.length && activeRouterExamplePrompt;
	let $$settled = true;
	let $$inner_payload;
	function $$render_inner($$payload2) {
		$$payload2.out += `<div class="relative z-[-1] min-h-0 min-w-0 svelte-1pgzd69">`;
		if (shareModalOpen) {
			$$payload2.out += "<!--[-->";
			ShareConversationModal($$payload2, {
				open: shareModalOpen,
				onclose: () => shareModal.close(),
			});
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--> <div class="scrollbar-custom h-full overflow-y-auto svelte-1pgzd69"><div class="mx-auto flex h-full max-w-3xl flex-col gap-6 px-5 pt-6 sm:gap-8 xl:max-w-4xl xl:pt-10 svelte-1pgzd69">`;
		if (preprompt && preprompt != currentModel.preprompt) {
			$$payload2.out += "<!--[-->";
			SystemPromptModal($$payload2);
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--> `;
		if (messages.length > 0) {
			$$payload2.out += "<!--[-->";
			const each_array = ensure_array_like(messages);
			$$payload2.out += `<div class="flex h-max flex-col gap-8 pb-52 svelte-1pgzd69"><!--[-->`;
			for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
				let message = each_array[idx];
				ChatMessage($$payload2, {
					loading,
					message,
					alternatives: messagesAlternatives.find((a) => a.includes(message.id)) ?? [],
					isAuthor: !shared,
					readOnly: isReadOnly,
					isLast: idx === messages.length - 1,
					onretry: (payload) => onretry?.(payload),
					onshowAlternateMsg: (payload) => onshowAlternateMsg?.(payload),
					get editMsdgId() {
						return editMsdgId;
					},
					set editMsdgId($$value) {
						editMsdgId = $$value;
						$$settled = false;
					},
				});
			}
			$$payload2.out += `<!--]--> `;
			if (isReadOnly) {
				$$payload2.out += "<!--[-->";
				ModelSwitch($$payload2, { models, currentModel });
			} else {
				$$payload2.out += "<!--[!-->";
			}
			$$payload2.out += `<!--]--></div>`;
		} else if (pending) {
			$$payload2.out += "<!--[1-->";
			ChatMessage($$payload2, {
				loading: true,
				message: {
					id: "0-0-0-0-0",
					content: "",
					from: "assistant",
					children: [],
				},
				isAuthor: !shared,
				readOnly: isReadOnly,
			});
		} else {
			$$payload2.out += "<!--[!-->";
			ChatIntroduction($$payload2);
		}
		$$payload2.out += `<!--]--></div> `;
		ScrollToPreviousBtn($$payload2);
		$$payload2.out += `<!----> `;
		ScrollToBottomBtn($$payload2);
		$$payload2.out += `<!----></div> <div class="pointer-events-none absolute inset-x-0 bottom-0 z-0 mx-auto flex w-full max-w-3xl flex-col items-center justify-center bg-gradient-to-t from-white via-white/100 to-white/0 px-3.5 pt-2 dark:border-gray-800 dark:from-gray-900 dark:via-gray-900/100 dark:to-gray-900/0 max-sm:py-0 sm:px-5 md:pb-4 xl:max-w-4xl [&amp;>*]:pointer-events-auto svelte-1pgzd69">`;
		if (
			!draft.length &&
			!messages.length &&
			!sources.length &&
			!loading &&
			currentModel.isRouter &&
			routerExamples.length &&
			!hideRouterExamples &&
			!lastIsError
		) {
			$$payload2.out += "<!--[-->";
			const each_array_1 = ensure_array_like(routerExamples);
			$$payload2.out += `<div class="no-scrollbar mb-3 flex w-full select-none justify-start gap-2 overflow-x-auto whitespace-nowrap text-gray-400 dark:text-gray-500 svelte-1pgzd69"><!--[-->`;
			for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
				let ex = each_array_1[$$index_1];
				$$payload2.out += `<button class="flex items-center rounded-lg bg-gray-100/90 px-2 py-0.5 text-center text-sm backdrop-blur hover:text-gray-500 dark:bg-gray-700/50 dark:hover:text-gray-400 svelte-1pgzd69">${escape_html(ex.title)}</button>`;
			}
			$$payload2.out += `<!--]--></div>`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--> `;
		{
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--> `;
		if (sources?.length && !loading) {
			$$payload2.out += "<!--[-->";
			const each_array_3 = ensure_array_like(sources);
			$$payload2.out += `<div class="flex flex-row flex-wrap justify-center gap-2.5 rounded-xl pb-3 svelte-1pgzd69"><!--[-->`;
			for (let index = 0, $$length = each_array_3.length; index < $$length; index++) {
				let source = each_array_3[index];
				await_block(
					$$payload2,
					source,
					() => {},
					(src) => {
						UploadedFile($$payload2, {
							file: src,
							onclose: () => {
								files = files.filter((_, i) => i !== index);
							},
						});
					}
				);
				$$payload2.out += `<!--]-->`;
			}
			$$payload2.out += `<!--]--></div>`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--> <div class="w-full svelte-1pgzd69"><div class="flex w-full *:mb-3 svelte-1pgzd69">`;
		if (!loading && lastIsError) {
			$$payload2.out += "<!--[-->";
			RetryBtn($$payload2, {
				classNames: "ml-auto",
			});
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--></div> <form tabindex="-1"${attr("aria-label", isFileUploadEnabled ? "file dropzone" : void 0)}${attr_class(
			clsx({
				"relative flex w-full max-w-4xl flex-1 items-center rounded-xl border bg-gray-100 dark:border-gray-700 dark:bg-gray-800": true,
				"opacity-30": isReadOnly,
				"max-sm:mb-4": focused && isVirtualKeyboard(),
			}),
			"svelte-1pgzd69"
		)}>`;
		{
			$$payload2.out += "<!--[!-->";
			$$payload2.out += `<div${attr_class("flex w-full flex-1 rounded-xl border-none bg-transparent svelte-1pgzd69", void 0, { "paste-glow": pastedLongContent })}>`;
			if (lastIsError) {
				$$payload2.out += "<!--[-->";
				ChatInput($$payload2, {
					value: "Sorry, something went wrong. Please try again.",
					disabled: true,
				});
			} else {
				$$payload2.out += "<!--[!-->";
				ChatInput($$payload2, {
					placeholder: isReadOnly ? "This conversation is read-only." : "Ask anything",
					loading,
					mimeTypes: activeMimeTypes,
					onsubmit: handleSubmit,
					onPaste,
					disabled: isReadOnly || lastIsError,
					modelIsMultimodal,
					modelSupportsTools,
					get value() {
						return draft;
					},
					set value($$value) {
						draft = $$value;
						$$settled = false;
					},
					get files() {
						return files;
					},
					set files($$value) {
						files = $$value;
						$$settled = false;
					},
					get focused() {
						return focused;
					},
					set focused($$value) {
						focused = $$value;
						$$settled = false;
					},
				});
			}
			$$payload2.out += `<!--]--> `;
			if (loading) {
				$$payload2.out += "<!--[-->";
				StopGeneratingBtn($$payload2, {
					showBorder: true,
					classNames:
						"absolute bottom-2 right-2 size-7 self-end rounded-full border bg-white text-black shadow transition-none dark:border-transparent dark:bg-gray-600 dark:text-white",
				});
			} else {
				$$payload2.out += "<!--[!-->";
				$$payload2.out += `<button${attr_class(`btn absolute bottom-2 right-2 size-7 self-end rounded-full border bg-white text-black shadow transition-none enabled:hover:bg-white enabled:hover:shadow-inner dark:border-transparent dark:bg-gray-600 dark:text-white dark:hover:enabled:bg-black ${stringify(!draft || isReadOnly ? "" : "!bg-black !text-white dark:!bg-white dark:!text-black")}`, "svelte-1pgzd69")}${attr("disabled", !draft || isReadOnly, true)} type="submit" aria-label="Send message" name="submit"><svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1pgzd69"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.0606 4.23197C16.4748 3.64618 15.525 3.64618 14.9393 4.23197L5.68412 13.4871C5.09833 14.0729 5.09833 15.0226 5.68412 15.6084C6.2699 16.1942 7.21965 16.1942 7.80544 15.6084L14.4999 8.91395V26.7074C14.4999 27.5359 15.1715 28.2074 15.9999 28.2074C16.8283 28.2074 17.4999 27.5359 17.4999 26.7074V8.91395L24.1944 15.6084C24.7802 16.1942 25.7299 16.1942 26.3157 15.6084C26.9015 15.0226 26.9015 14.0729 26.3157 13.4871L17.0606 4.23197Z" fill="currentColor" class="svelte-1pgzd69"></path></svg></button>`;
			}
			$$payload2.out += `<!--]--></div>`;
		}
		$$payload2.out += `<!--]--></form> <div${attr_class(
			clsx({
				"mt-1.5 flex h-5 items-center self-stretch whitespace-nowrap px-0.5 text-xs text-gray-400/90 max-md:mb-2 max-sm:gap-2": true,
				"max-sm:hidden": focused && isVirtualKeyboard(),
			}),
			"svelte-1pgzd69"
		)}>`;
		if (models.find((m) => m.id === currentModel.id)) {
			$$payload2.out += "<!--[-->";
			if (loading && streamingToolCallName) {
				$$payload2.out += "<!--[-->";
				$$payload2.out += `<span class="inline-flex items-center gap-1 whitespace-nowrap text-xs svelte-1pgzd69">`;
				Tools($$payload2, { class: "text-[11px]" });
				$$payload2.out += `<!----> Calling tool <span class="loading-dots font-medium svelte-1pgzd69">${escape_html(availableTools.find((t) => t.name === streamingToolCallName)?.displayName ?? streamingToolCallName)}</span></span>`;
			} else if (!currentModel.isRouter || !loading) {
				$$payload2.out += "<!--[1-->";
				$$payload2.out += `<a${attr("href", `${stringify(base)}/settings/${stringify(currentModel.id)}`)} class="inline-flex items-center gap-1 hover:underline svelte-1pgzd69">`;
				if (currentModel.isRouter) {
					$$payload2.out += "<!--[-->";
					IconOmni($$payload2, {});
					$$payload2.out += `<!----> ${escape_html(currentModel.displayName)}`;
				} else {
					$$payload2.out += "<!--[!-->";
					$$payload2.out += `Model: ${escape_html(currentModel.displayName)}`;
				}
				$$payload2.out += `<!--]--> `;
				Caret_down($$payload2, { class: "-ml-0.5 text-xxs" });
				$$payload2.out += `<!----></a>`;
			} else {
				$$payload2.out += "<!--[!-->";
				$$payload2.out += `<div class="loading-dots relative inline-flex items-center text-gray-400 dark:text-gray-400 svelte-1pgzd69" aria-label="Routing…">`;
				IconOmni($$payload2, { classNames: "text-xs animate-pulse mr-1" });
				$$payload2.out += `<!----> Routing</div>`;
			}
			$$payload2.out += `<!--]-->`;
		} else {
			$$payload2.out += "<!--[!-->";
			$$payload2.out += `<span class="inline-flex items-center line-through dark:border-gray-700 svelte-1pgzd69">${escape_html(currentModel.id)}</span>`;
		}
		$$payload2.out += `<!--]--> `;
		if (!messages.length && !loading) {
			$$payload2.out += "<!--[-->";
			$$payload2.out += `<span class="svelte-1pgzd69">Generated content may be inaccurate or false.</span>`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--></div></div></div></div>`;
	}
	do {
		$$settled = true;
		$$inner_payload = copy_payload($$payload);
		$$render_inner($$inner_payload);
	} while (!$$settled);
	assign_payload($$payload, $$inner_payload);
	if ($$store_subs) unsubscribe_stores($$store_subs);
	bind_props($$props, { files, draft });
	pop();
}
const findCurrentModel = (models, _oldModels = [], id) => {
	if (id) {
		const direct = models.find((m) => m.id === id);
		if (direct) return direct;
	}
	return models[0];
};
export { ChatWindow as C, file2base64 as a, fetchMessageUpdates as b, findCurrentModel as f };
