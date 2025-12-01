import {
	b as sanitize_props,
	c as spread_attributes,
	j as store_get,
	u as unsubscribe_stores,
	a as pop,
	p as push,
} from "../../../chunks/index3.js";
import { g as goto } from "../../../chunks/client.js";
import { u as useSettingsStore } from "../../../chunks/settings2.js";
import { h as html } from "../../../chunks/html.js";
import { M as Modal } from "../../../chunks/Modal.js";
function Checkmark($$payload, $$props) {
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
	)}>${html(`<path fill="currentColor" d="m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9z"/>`)}</svg>`;
}
function _layout($$payload, $$props) {
	push();
	var $$store_subs;
	let { children } = $$props;
	const settings = useSettingsStore();
	Modal($$payload, {
		onclose: () => goto(),
		disableFly: true,
		width:
			"border dark:border-gray-700 h-[95dvh] w-[90dvw] pb-0 overflow-hidden rounded-2xl bg-white shadow-2xl outline-none dark:bg-gray-800 dark:text-gray-200 sm:h-[95dvh] xl:w-[1200px] xl:h-[85dvh] 2xl:h-[75dvh]",
		children: ($$payload2) => {
			children?.($$payload2);
			$$payload2.out += `<!----> `;
			if (store_get(($$store_subs ??= {}), "$settings", settings).recentlySaved) {
				$$payload2.out += "<!--[-->";
				$$payload2.out += `<div class="absolute bottom-4 right-4 m-2 flex items-center gap-1.5 rounded-full border bg-black px-3 py-1 text-white dark:border-white/10 dark:bg-gray-700 dark:text-gray-100">`;
				Checkmark($$payload2, { class: "text-white" });
				$$payload2.out += `<!----> Saved</div>`;
			} else {
				$$payload2.out += "<!--[!-->";
			}
			$$payload2.out += `<!--]-->`;
		},
	});
	if ($$store_subs) unsubscribe_stores($$store_subs);
	pop();
}
export { _layout as default };
