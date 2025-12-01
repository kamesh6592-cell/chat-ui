import {
	b as sanitize_props,
	c as spread_attributes,
	v as copy_payload,
	w as assign_payload,
	a as pop,
	p as push,
	d as attr,
	e as escape_html,
	f as attr_class,
	h as ensure_array_like,
	C as maybe_selected,
	g as stringify,
	u as unsubscribe_stores,
	j as store_get,
} from "../../../../../chunks/index3.js";
import { T as Trash_can } from "../../../../../chunks/trash-can.js";
import { A as Arrow_up_right } from "../../../../../chunks/arrow-up-right.js";
import { h as html } from "../../../../../chunks/html.js";
import { u as useSettingsStore } from "../../../../../chunks/settings2.js";
import { S as Switch } from "../../../../../chunks/Switch.js";
import "../../../../../chunks/client.js";
import { b as base } from "../../../../../chunks/paths.js";
import { p as page } from "../../../../../chunks/index4.js";
import { u as usePublicConfig } from "../../../../../chunks/PublicConfig.svelte.js";
import { u as useAPIClient } from "../../../../../chunks/APIClient.js";
function Logo_github($$payload, $$props) {
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
	)}>${html(`<path fill="currentColor" fill-rule="evenodd" d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.7 3.7 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2"/>`)}</svg>`;
}
function _page($$payload, $$props) {
	push();
	var $$store_subs;
	const publicConfig = usePublicConfig();
	let settings = useSettingsStore();
	function getShareWithAuthors() {
		return store_get(($$store_subs ??= {}), "$settings", settings)
			.shareConversationsWithModelAuthors;
	}
	function setShareWithAuthors(v) {
		settings.update((s) => ({ ...s, shareConversationsWithModelAuthors: v }));
	}
	function getDisableStream() {
		return store_get(($$store_subs ??= {}), "$settings", settings).disableStream;
	}
	function setDisableStream(v) {
		settings.update((s) => ({ ...s, disableStream: v }));
	}
	function getDirectPaste() {
		return store_get(($$store_subs ??= {}), "$settings", settings).directPaste;
	}
	function setDirectPaste(v) {
		settings.update((s) => ({ ...s, directPaste: v }));
	}
	useAPIClient();
	let billingOrgs = [];
	function getBillingOrganization() {
		return store_get(($$store_subs ??= {}), "$settings", settings).billingOrganization ?? "";
	}
	let refreshing = false;
	let $$settled = true;
	let $$inner_payload;
	function $$render_inner($$payload2) {
		var bind_get_1 = getDisableStream;
		var bind_set_1 = setDisableStream;
		var bind_get_2 = getDirectPaste;
		var bind_set_2 = setDirectPaste;
		$$payload2.out += `<div class="flex w-full flex-col gap-4"><h2 class="text-center text-lg font-semibold text-gray-800 dark:text-gray-200 md:text-left">Application Settings</h2> `;
		{
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--> `;
		if (!!publicConfig.PUBLIC_COMMIT_SHA) {
			$$payload2.out += "<!--[-->";
			$$payload2.out += `<div class="flex flex-col items-start justify-between text-xl font-semibold text-gray-800 dark:text-gray-200"><a${attr("href", `https://github.com/huggingface/chat-ui/commit/${publicConfig.PUBLIC_COMMIT_SHA}`)} target="_blank" rel="noreferrer" class="text-sm font-light text-gray-500 dark:text-gray-400">Latest deployment <span class="gap-2 font-mono">${escape_html(publicConfig.PUBLIC_COMMIT_SHA.slice(0, 7))}</span></a></div>`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--> `;
		if (page.data.isAdmin) {
			$$payload2.out += "<!--[-->";
			$$payload2.out += `<div class="flex items-center gap-2"><p class="rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 dark:bg-red-500/10 dark:text-red-300">Admin mode</p> <button${attr_class("btn rounded-md text-xs", void 0, { underline: true })} type="button"${attr("disabled", refreshing, true)}>${escape_html("Refresh models")}</button> `;
			{
				$$payload2.out += "<!--[!-->";
			}
			$$payload2.out += `<!--]--></div>`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--> <div class="flex h-full flex-col gap-4 max-sm:pt-0"><div class="rounded-xl border border-gray-200 bg-white px-3 shadow-sm dark:border-gray-700 dark:bg-gray-800"><div class="divide-y divide-gray-200 dark:divide-gray-700">`;
		if (publicConfig.PUBLIC_APP_DATA_SHARING === "1") {
			$$payload2.out += "<!--[-->";
			var bind_get = getShareWithAuthors;
			var bind_set = setShareWithAuthors;
			$$payload2.out += `<div class="flex items-start justify-between py-3"><div><div class="text-[13px] font-medium text-gray-800 dark:text-gray-200">Share with model authors</div> <p class="text-[12px] text-gray-500 dark:text-gray-400">Sharing your data helps improve open models over time.</p></div> `;
			Switch($$payload2, {
				name: "shareConversationsWithModelAuthors",
				get checked() {
					return bind_get();
				},
				set checked($$value) {
					bind_set($$value);
				},
			});
			$$payload2.out += `<!----></div>`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--> <div class="flex items-start justify-between py-3"><div><div class="text-[13px] font-medium text-gray-800 dark:text-gray-200">Disable streaming tokens</div> <p class="text-[12px] text-gray-500 dark:text-gray-400">Show responses only when complete.</p></div> `;
		Switch($$payload2, {
			name: "disableStream",
			get checked() {
				return bind_get_1();
			},
			set checked($$value) {
				bind_set_1($$value);
			},
		});
		$$payload2.out += `<!----></div> <div class="flex items-start justify-between py-3"><div><div class="text-[13px] font-medium text-gray-800 dark:text-gray-200">Paste text directly</div> <p class="text-[12px] text-gray-500 dark:text-gray-400">Paste long text directly into chat instead of a file.</p></div> `;
		Switch($$payload2, {
			name: "directPaste",
			get checked() {
				return bind_get_2();
			},
			set checked($$value) {
				bind_set_2($$value);
			},
		});
		$$payload2.out += `<!----></div> <div class="flex items-start justify-between py-3"><div><div class="text-[13px] font-medium text-gray-800 dark:text-gray-200">Theme</div> <p class="text-[12px] text-gray-500 dark:text-gray-400">Choose light, dark, or follow system.</p></div> <div class="flex overflow-hidden rounded-md border text-center dark:divide-gray-600 dark:border-gray-600 max-sm:flex-col max-sm:divide-y sm:items-center sm:divide-x"><button${attr_class("inline-flex items-center justify-center px-2.5 py-1 text-center text-xs bg-black text-white dark:border-white/10 dark:bg-white/80 dark:text-gray-900")}>system</button> <button${attr_class("inline-flex items-center justify-center px-2.5 py-1 text-center text-xs hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/60")}>light</button> <button${attr_class("inline-flex items-center justify-center px-2.5 py-1 text-center text-xs hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/60")}>dark</button></div></div></div></div> `;
		if (publicConfig.isHuggingChat && page.data.user) {
			$$payload2.out += "<!--[-->";
			$$payload2.out += `<div class="rounded-xl border border-gray-200 bg-white px-3 shadow-sm dark:border-gray-700 dark:bg-gray-800"><div class="divide-y divide-gray-200 dark:divide-gray-700"><div class="flex items-start justify-between py-3"><div><div class="text-[13px] font-medium text-gray-800 dark:text-gray-200">Billing</div> <p class="text-[12px] text-gray-500 dark:text-gray-400">Select between personal or organization billing (for eligible organizations).</p></div> <div class="flex items-center">`;
			{
				$$payload2.out += "<!--[!-->";
				const each_array = ensure_array_like(billingOrgs);
				$$payload2.out += `<select class="rounded-md border border-gray-300 bg-white px-1 py-1 text-xs text-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">`;
				$$payload2.select_value = getBillingOrganization();
				$$payload2.out += `<option value=""${maybe_selected($$payload2, "")}>Personal</option><!--[-->`;
				for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
					let org = each_array[$$index];
					$$payload2.out += `<option${attr("value", org.preferred_username)}${maybe_selected($$payload2, org.preferred_username)}>${escape_html(org.name)}</option>`;
				}
				$$payload2.out += `<!--]-->`;
				$$payload2.select_value = void 0;
				$$payload2.out += `</select>`;
			}
			$$payload2.out += `<!--]--></div></div> <div class="flex items-start justify-between py-3"><div><div class="text-[13px] font-medium text-gray-800 dark:text-gray-200">Providers Usage</div> <p class="text-[12px] text-gray-500 dark:text-gray-400">See which providers you use and choose your preferred ones.</p></div> <a${attr("href", getBillingOrganization() ? `https://huggingface.co/organizations/${getBillingOrganization()}/settings/inference-providers/overview` : "https://huggingface.co/settings/inference-providers/overview")} target="_blank" class="whitespace-nowrap rounded-md border border-gray-300 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">View Usage</a></div></div></div>`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--> <div class="mt-6 flex flex-col gap-2 self-start text-[13px]">`;
		if (publicConfig.isHuggingChat) {
			$$payload2.out += "<!--[-->";
			$$payload2.out += `<a href="https://github.com/huggingface/chat-ui" target="_blank" class="flex items-center underline decoration-gray-300 underline-offset-2 hover:decoration-gray-700 dark:decoration-gray-700 dark:hover:decoration-gray-400">`;
			Logo_github($$payload2, { class: "mr-1.5 shrink-0 text-sm " });
			$$payload2.out += `<!----> Github repository</a> <a href="https://huggingface.co/spaces/huggingchat/chat-ui/discussions/764" target="_blank" rel="noreferrer" class="flex items-center underline decoration-gray-300 underline-offset-2 hover:decoration-gray-700 dark:decoration-gray-700 dark:hover:decoration-gray-400">`;
			Arrow_up_right($$payload2, { class: "mr-1.5 shrink-0 text-sm " });
			$$payload2.out += `<!----> Share your feedback on HuggingChat</a> <a${attr("href", `${stringify(base)}/privacy`)} class="flex items-center underline decoration-gray-300 underline-offset-2 hover:decoration-gray-700 dark:decoration-gray-700 dark:hover:decoration-gray-400">`;
			Arrow_up_right($$payload2, { class: "mr-1.5 shrink-0 text-sm " });
			$$payload2.out += `<!----> About &amp; Privacy</a>`;
		} else {
			$$payload2.out += "<!--[!-->";
		}
		$$payload2.out += `<!--]--> <button type="submit" class="flex items-center underline decoration-red-200 underline-offset-2 hover:decoration-red-500 dark:decoration-red-900 dark:hover:decoration-red-700">`;
		Trash_can($$payload2, { class: "mr-2 inline text-sm text-red-500" });
		$$payload2.out += `<!---->Delete all conversations</button></div></div></div>`;
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
