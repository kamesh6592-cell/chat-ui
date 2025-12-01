import {
	b as sanitize_props,
	c as spread_attributes,
	j as store_get,
	v as copy_payload,
	w as assign_payload,
	u as unsubscribe_stores,
	a as pop,
	p as push,
	e as escape_html,
	d as attr,
	g as stringify,
	h as ensure_array_like,
} from "../../../../../chunks/index3.js";
import { p as page } from "../../../../../chunks/index4.js";
import { b as base } from "../../../../../chunks/paths.js";
import { I as IconOmni } from "../../../../../chunks/IconOmni.js";
import { u as useSettingsStore } from "../../../../../chunks/settings2.js";
import { C as CopyToClipBoardBtn, a as Copy } from "../../../../../chunks/CopyToClipBoardBtn.js";
import { A as Arrow_up_right } from "../../../../../chunks/arrow-up-right.js";
import { h as html } from "../../../../../chunks/html.js";
import "../../../../../chunks/client.js";
import { u as usePublicConfig } from "../../../../../chunks/PublicConfig.svelte.js";
import { S as Switch } from "../../../../../chunks/Switch.js";
import { PROVIDERS_HUB_ORGS } from "@huggingface/inference";
function Chat($$payload, $$props) {
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
	)}>${html(`<path fill="currentColor" d="M17.74 30L16 29l4-7h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.84Z"/><path fill="currentColor" d="M8 10h16v2H8zm0 6h10v2H8z"/>`)}</svg>`;
}
function Code($$payload, $$props) {
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
	)}>${html(`<path fill="currentColor" d="m31 16l-7 7l-1.41-1.41L28.17 16l-5.58-5.59L24 9zM1 16l7-7l1.41 1.41L3.83 16l5.58 5.59L8 23zm11.42 9.484L17.64 6l1.932.517L14.352 26z"/>`)}</svg>`;
}
function _page($$payload, $$props) {
	push();
	var $$store_subs;
	const publicConfig = usePublicConfig();
	const settings = useSettingsStore();
	function getToolsOverride() {
		return (
			store_get(($$store_subs ??= {}), "$settings", settings).toolsOverrides?.[page.params.model] ??
			false
		);
	}
	function setToolsOverride(v) {
		settings.update((s) => ({
			...s,
			toolsOverrides: { ...s.toolsOverrides, [page.params.model]: v },
		}));
	}
	function getMultimodalOverride() {
		return (
			store_get(($$store_subs ??= {}), "$settings", settings).multimodalOverrides?.[
				page.params.model
			] ?? false
		);
	}
	function setMultimodalOverride(v) {
		settings.update((s) => ({
			...s,
			multimodalOverrides: {
				...s.multimodalOverrides,
				[page.params.model]: v,
			},
		}));
	}
	function getHidePromptExamples() {
		return (
			store_get(($$store_subs ??= {}), "$settings", settings).hidePromptExamples?.[
				page.params.model
			] ?? false
		);
	}
	function setHidePromptExamples(v) {
		settings.update((s) => ({
			...s,
			hidePromptExamples: {
				...s.hidePromptExamples,
				[page.params.model]: v,
			},
		}));
	}
	function getCustomPrompt() {
		return (
			store_get(($$store_subs ??= {}), "$settings", settings).customPrompts?.[page.params.model] ??
			""
		);
	}
	let hasCustomPreprompt =
		store_get(($$store_subs ??= {}), "$settings", settings).customPrompts[page.params.model] !==
		page.data.models.find((el) => el.id === page.params.model)?.preprompt;
	let model = page.data.models.find((el) => el.id === page.params.model);
	let providerList = model?.providers ?? [];
	let $$settled = true;
	let $$inner_payload;
	function $$render_inner($$payload2) {
		var bind_get = getToolsOverride;
		var bind_set = setToolsOverride;
		var bind_get_1 = getMultimodalOverride;
		var bind_set_1 = setMultimodalOverride;
		$$payload2.out += `<div class="flex flex-col items-start"><div class="mb-4 flex flex-col gap-0.5"><h2 class="text-base font-semibold md:text-lg">${escape_html(model.displayName)}</h2> `;
		if (model.description) {
			$$payload2.out += "<!--[-->";
			$$payload2.out += `<p class="line-clamp-2 whitespace-pre-wrap text-sm text-gray-600 dark:text-gray-400">${escape_html(model.description)}</p>`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--></div> <div class="mb-4 flex flex-wrap items-center gap-1.5"><button class="flex w-fit items-center rounded-full bg-black px-3 py-1.5 text-sm !text-white shadow-sm hover:bg-black/90 dark:bg-white/80 dark:!text-gray-900 dark:hover:bg-white/90" name="Activate model">`;
		Chat($$payload2, { class: "mr-1.5 text-sm" });
		$$payload2.out += `<!----> New chat</button> `;
		if (model.modelUrl) {
			$$payload2.out += "<!--[-->";
			$$payload2.out += `<a${attr("href", model.modelUrl || "https://huggingface.co/" + model.name)} target="_blank" rel="noreferrer" class="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-1 text-sm hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700/60">`;
			Arrow_up_right($$payload2, { class: "mr-1.5 shrink-0 text-xs " });
			$$payload2.out += `<!----> Model page</a>`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--> `;
		if (model.datasetName || model.datasetUrl) {
			$$payload2.out += "<!--[-->";
			$$payload2.out += `<a${attr("href", model.datasetUrl || "https://huggingface.co/datasets/" + model.datasetName)} target="_blank" rel="noreferrer" class="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-1 text-sm hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700/60">`;
			Arrow_up_right($$payload2, { class: "mr-1.5 shrink-0 text-xs " });
			$$payload2.out += `<!----> Dataset page</a>`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--> `;
		if (model.websiteUrl) {
			$$payload2.out += "<!--[-->";
			$$payload2.out += `<a${attr("href", model.websiteUrl)} target="_blank" class="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-1 text-sm hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700/60" rel="noreferrer">`;
			Arrow_up_right($$payload2, { class: "mr-1.5 shrink-0 text-xs " });
			$$payload2.out += `<!----> Model website</a>`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--> `;
		if (publicConfig.isHuggingChat) {
			$$payload2.out += "<!--[-->";
			if (!model?.isRouter) {
				$$payload2.out += "<!--[-->";
				$$payload2.out += `<a${attr("href", "https://huggingface.co/playground?modelId=" + model.name)} target="_blank" rel="noreferrer" class="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-1 text-sm hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700/60">`;
				Code($$payload2, { class: "mr-1.5 shrink-0 text-xs" });
				$$payload2.out += `<!----> API Playground</a> <a${attr("href", "https://huggingface.co/" + model.name)} target="_blank" rel="noreferrer" class="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-1 text-sm hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700/60">`;
				Arrow_up_right($$payload2, { class: "mr-1.5 shrink-0 text-xs" });
				$$payload2.out += `<!----> View model card</a>`;
			} else {
				$$payload2.out += "<!--[!-->";
			}
			$$payload2.out += `<!--]--> `;
			CopyToClipBoardBtn($$payload2, {
				value: `${stringify(publicConfig.PUBLIC_ORIGIN || page.url.origin)}${stringify(base)}/models/${stringify(model.id)}`,
				classNames:
					"inline-flex items-center rounded-full border border-gray-200 px-2.5 py-1 text-sm hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700/60",
				children: ($$payload3) => {
					$$payload3.out += `<div class="flex items-center gap-1.5">`;
					Copy($$payload3, { class: "shrink-0 text-xs" });
					$$payload3.out += `<!---->Copy new chat link</div>`;
				},
			});
			$$payload2.out += `<!---->`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--></div> <div class="relative flex w-full flex-col gap-2">`;
		if (model?.isRouter) {
			$$payload2.out += "<!--[-->";
			$$payload2.out += `<p class="mb-3 mt-2 rounded-lg bg-gray-100 px-3 py-2 text-sm dark:bg-white/5">`;
			IconOmni($$payload2, { classNames: "-translate-y-px" });
			$$payload2.out += `<!----> Omni routes your messages to the best underlying model
				depending on your request.</p>`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--> <div class="flex w-full flex-row content-between"><h3 class="mb-1 text-[15px] font-semibold text-gray-800 dark:text-gray-200">System Prompt</h3> `;
		if (hasCustomPreprompt) {
			$$payload2.out += "<!--[-->";
			$$payload2.out += `<button class="ml-auto text-xs underline decoration-gray-300 hover:decoration-gray-700 dark:decoration-gray-700 dark:hover:decoration-gray-400">Reset</button>`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--></div> <textarea aria-label="Custom system prompt" rows="8" class="w-full resize-none rounded-md border border-gray-200 bg-gray-50 p-2 text-[13px] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200">`;
		const $$body = escape_html(getCustomPrompt());
		if ($$body) {
			$$payload2.out += `${$$body}`;
		}
		$$payload2.out += `</textarea> <div class="mt-3 rounded-xl border border-gray-200 bg-white px-3 shadow-sm dark:border-gray-700 dark:bg-gray-800"><div class="divide-y divide-gray-200 dark:divide-gray-700"><div class="flex items-start justify-between py-3"><div><div class="text-[13px] font-medium text-gray-800 dark:text-gray-200">Tool calling (functions)</div> <p class="text-[12px] text-gray-500 dark:text-gray-400">Enable tools and allow the model to call them in chat.</p></div> `;
		Switch($$payload2, {
			name: "forceTools",
			get checked() {
				return bind_get();
			},
			set checked($$value) {
				bind_set($$value);
			},
		});
		$$payload2.out += `<!----></div> <div class="flex items-start justify-between py-3"><div><div class="text-[13px] font-medium text-gray-800 dark:text-gray-200">Multimodal support (image inputs)</div> <p class="text-[12px] text-gray-500 dark:text-gray-400">Enable image uploads and send images to this model.</p></div> `;
		Switch($$payload2, {
			name: "forceMultimodal",
			get checked() {
				return bind_get_1();
			},
			set checked($$value) {
				bind_set_1($$value);
			},
		});
		$$payload2.out += `<!----></div> `;
		if (model?.isRouter) {
			$$payload2.out += "<!--[-->";
			var bind_get_2 = getHidePromptExamples;
			var bind_set_2 = setHidePromptExamples;
			$$payload2.out += `<div class="flex items-start justify-between py-3"><div><div class="text-[13px] font-medium text-gray-800 dark:text-gray-200">Hide prompt examples</div> <p class="text-[12px] text-gray-500 dark:text-gray-400">Hide the prompt suggestions above the chat input.</p></div> `;
			Switch($$payload2, {
				name: "hidePromptExamples",
				get checked() {
					return bind_get_2();
				},
				set checked($$value) {
					bind_set_2($$value);
				},
			});
			$$payload2.out += `<!----></div>`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--></div></div> `;
		if (model.providers?.length) {
			$$payload2.out += "<!--[-->";
			const each_array = ensure_array_like(providerList);
			$$payload2.out += `<div class="mt-3 flex flex-col gap-2.5 rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm dark:border-gray-700 dark:bg-gray-800"><div><div class="text-[13px] font-medium text-gray-800 dark:text-gray-200">Inference Providers</div> <p class="text-[12px] text-gray-500 dark:text-gray-400">Providers serving this model. You can enable/disable some providers from <a class="underline decoration-gray-400 hover:decoration-gray-700 dark:decoration-gray-500 dark:hover:decoration-gray-500" target="_blank" href="https://huggingface.co/settings/inference-providers/settings">your settings</a>.</p></div> <ul class="mb-0.5 flex flex-wrap gap-2"><!--[-->`;
			for (let i = 0, $$length = each_array.length; i < $$length; i++) {
				let prov = each_array[i];
				const hubOrg = PROVIDERS_HUB_ORGS[prov.provider];
				$$payload2.out += `<li><span class="flex items-center gap-1 rounded-md bg-gray-100 py-0.5 pl-1.5 pr-2 text-xs text-gray-700 dark:bg-gray-700/60 dark:text-gray-200">`;
				if (hubOrg) {
					$$payload2.out += "<!--[-->";
					$$payload2.out += `<img${attr("src", `https://huggingface.co/api/organizations/${stringify(hubOrg)}/avatar`)}${attr("alt", `${stringify(prov.provider)} logo`)} class="size-2.5 flex-none rounded-sm" onerror="this.__e=event"/>`;
				} else {
					$$payload2.out += "<!--[!-->";
				}
				$$payload2.out += `<!--]--> ${escape_html(prov.provider)}</span></li>`;
			}
			$$payload2.out += `<!--]--></ul></div>`;
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
	if ($$store_subs) unsubscribe_stores($$store_subs);
	pop();
}
export { _page as default };
