import {
	b as sanitize_props,
	c as spread_attributes,
	h as ensure_array_like,
	n as head,
	d as attr,
	f as attr_class,
	g as stringify,
	j as store_get,
	e as escape_html,
	u as unsubscribe_stores,
	a as pop,
	p as push,
} from "../../../chunks/index3.js";
import { u as usePublicConfig } from "../../../chunks/PublicConfig.svelte.js";
import { b as base } from "../../../chunks/paths.js";
import { p as page } from "../../../chunks/index4.js";
import { h as html } from "../../../chunks/html.js";
import { V as View } from "../../../chunks/view.js";
import { T as Tools } from "../../../chunks/tools.js";
import { S as Settings } from "../../../chunks/settings3.js";
import { u as useSettingsStore } from "../../../chunks/settings2.js";
import "../../../chunks/client.js";
function Help_filled($$payload, $$props) {
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
	)}>${html(`<path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 23a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 25m1.142-7.754v2.501h-2.25V15h2.125a2.376 2.376 0 0 0 0-4.753h-1.5a2.38 2.38 0 0 0-2.375 2.375v.638h-2.25v-.638A4.63 4.63 0 0 1 15.517 8h1.5a4.624 4.624 0 0 1 .125 9.246"/><path fill="none" d="M16 25a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 25m1.142-7.754v2.501h-2.25V15h2.125a2.376 2.376 0 0 0 0-4.753h-1.5a2.38 2.38 0 0 0-2.375 2.375v.638h-2.25v-.638A4.63 4.63 0 0 1 15.517 8h1.5a4.624 4.624 0 0 1 .125 9.246"/>`)}</svg>`;
}
function _page($$payload, $$props) {
	push();
	var $$store_subs;
	let { data } = $$props;
	const settings = useSettingsStore();
	const publicConfig = usePublicConfig();
	let modelFilter = "";
	const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ");
	let queryTokens = normalize(modelFilter).trim().split(/\s+/).filter(Boolean);
	const each_array = ensure_array_like(
		data.models
			.filter((el) => !el.unlisted)
			.filter((el) => {
				const haystack = normalize(`${el.id} ${el.name ?? ""} ${el.displayName ?? ""}`);
				return queryTokens.every((q) => haystack.includes(q));
			})
	);
	head($$payload, ($$payload2) => {
		if (publicConfig.isHuggingChat) {
			$$payload2.out += "<!--[-->";
			$$payload2.title = `<title>HuggingChat - Models</title>`;
			$$payload2.out += `<meta property="og:title" content="HuggingChat - Models"/> <meta property="og:type" content="link"/> <meta property="og:description" content="Browse HuggingChat available models"/> <meta property="og:url"${attr("content", page.url.href)}/>`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]-->`;
	});
	$$payload.out += `<div class="scrollbar-custom h-full overflow-y-auto py-12 max-sm:pt-8 md:py-24"><div class="pt-42 mx-auto flex flex-col px-5 xl:w-[60rem] 2xl:w-[64rem]"><div class="flex items-center"><h1 class="text-2xl font-bold">Models</h1> `;
	if (publicConfig.isHuggingChat) {
		$$payload.out += "<!--[-->";
		$$payload.out += `<a href="https://huggingface.co/docs/inference-providers" class="ml-auto text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300" target="_blank" aria-label="Hub discussion about models">`;
		Help_filled($$payload, {});
		$$payload.out += `<!----></a>`;
	} else {
		$$payload.out += "<!--[!-->";
	}
	$$payload.out += `<!--]--></div> <h2 class="text-gray-500">All models available`;
	if (publicConfig.isHuggingChat) {
		$$payload.out += "<!--[-->";
		$$payload.out += ` via <a target="_blank" href="https://huggingface.co/inference/models" class="underline decoration-gray-300 hover:decoration-gray-500 dark:decoration-gray-600 dark:hover:decoration-gray-500">Inference Providers</a>`;
	} else {
		$$payload.out += "<!--[!-->";
	}
	$$payload.out += `<!--]--></h2> <input type="search"${attr("value", modelFilter)} placeholder="Search by name" aria-label="Search models by name or id" class="mt-4 w-full rounded-3xl border border-gray-300 bg-white px-5 py-2 text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-gray-700"/> <div class="mt-6 grid grid-cols-1 gap-3 sm:gap-5 xl:grid-cols-2"><!--[-->`;
	for (let index = 0, $$length = each_array.length; index < $$length; index++) {
		let model = each_array[index];
		$$payload.out += `<a${attr("href", `${stringify(base)}/models/${stringify(model.id)}`)} aria-label="Model card"${attr_class(
			"relative flex flex-col gap-2 overflow-hidden rounded-xl border bg-gray-50/50 px-6 py-5 shadow hover:bg-gray-50 hover:shadow-inner dark:border-gray-800/70 dark:bg-gray-950/20 dark:hover:bg-gray-950/40 svelte-1h1flxw",
			void 0,
			{
				"omni-gradient": model.isRouter,
				"active-model":
					model.id === store_get(($$store_subs ??= {}), "$settings", settings).activeModel,
			}
		)}><div class="flex items-center justify-between gap-1">`;
		if (model.logoUrl) {
			$$payload.out += "<!--[-->";
			$$payload.out += `<img class="aspect-square size-6 rounded border bg-white dark:border-gray-700"${attr("src", model.logoUrl)} alt=""/>`;
		} else {
			$$payload.out += "<!--[!-->";
			$$payload.out += `<div class="size-6 rounded border border-transparent bg-gray-300 dark:bg-gray-800" aria-hidden="true"></div>`;
		}
		$$payload.out += `<!--]--> <div class="flex items-center gap-1">`;
		if (
			store_get(($$store_subs ??= {}), "$settings", settings).toolsOverrides?.[model.id] ??
			model.supportsTools
		) {
			$$payload.out += "<!--[-->";
			$$payload.out += `<span title="This model supports tool calling (functions)." class="background ml-auto flex size-[21px] items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-500" aria-label="Model supports tools" role="img">`;
			Tools($$payload, { class: "text-xxs" });
			$$payload.out += `<!----></span>`;
		} else {
			$$payload.out += "<!--[!-->";
		}
		$$payload.out += `<!--]--> `;
		if (
			store_get(($$store_subs ??= {}), "$settings", settings).multimodalOverrides?.[model.id] ??
			model.multimodal
		) {
			$$payload.out += "<!--[-->";
			$$payload.out += `<span title="This model is multimodal and supports image inputs natively." class="flex size-[21px] items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-500" aria-label="Model is multimodal" role="img">`;
			View($$payload, { class: "text-xxs" });
			$$payload.out += `<!----></span>`;
		} else {
			$$payload.out += "<!--[!-->";
		}
		$$payload.out += `<!--]--> <button type="button" title="Model settings"${attr("aria-label", `Model settings for ${stringify(model.displayName)}`)} class="flex size-[21px] items-center justify-center rounded-md border border-gray-300 text-xs text-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">`;
		Settings($$payload, { class: "text-xs" });
		$$payload.out += `<!----></button> `;
		if (model.id === store_get(($$store_subs ??= {}), "$settings", settings).activeModel) {
			$$payload.out += "<!--[-->";
			$$payload.out += `<span class="rounded-full bg-black px-2 py-0.5 text-xs text-white dark:bg-white dark:text-black">Active</span>`;
		} else if (index === 0 && model.id === "omni") {
			$$payload.out += "<!--[1-->";
			$$payload.out += `<span class="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-500 dark:border-gray-500 dark:text-gray-400">Default</span>`;
		} else {
			$$payload.out += "<!--[!-->";
		}
		$$payload.out += `<!--]--></div></div> <span class="flex items-center gap-2 font-semibold">${escape_html(model.displayName)}</span> <span class="line-clamp-4 whitespace-pre-wrap text-sm text-gray-500 dark:text-gray-400">${escape_html(model.isRouter ? "Routes your messages to the best model for your request." : model.description || "-")}</span></a>`;
	}
	$$payload.out += `<!--]--></div></div></div>`;
	if ($$store_subs) unsubscribe_stores($$store_subs);
	pop();
}
export { _page as default };
