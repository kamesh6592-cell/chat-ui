import {
	b as sanitize_props,
	c as spread_attributes,
	f as attr_class,
	e as escape_html,
	g as stringify,
	p as push,
	l as clsx,
	a as pop,
} from "./index3.js";
import { o as onDestroy } from "./index-server.js";
import { h as html } from "./html.js";
function Copy($$payload, $$props) {
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
	)}>${html(`<path fill="currentColor" d="M28 10v18H10V10zm0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2"/><path fill="currentColor" d="M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z"/>`)}</svg>`;
}
function Tooltip($$payload, $$props) {
	let {
		classNames = "",
		label = "Copied",
		position = "left-1/2 top-full transform -translate-x-1/2 translate-y-2",
	} = $$props;
	$$payload.out += `<div${attr_class(` pointer-events-none absolute rounded bg-black px-2 py-1 font-normal leading-tight text-white shadow transition-opacity ${stringify(position)} ${stringify(classNames)} `)}><div class="absolute bottom-full left-1/2 h-0 w-0 -translate-x-1/2 transform border-4 border-t-0 border-black" style="border-left-color: transparent; border-right-color: transparent;"></div> ${escape_html(label)}</div>`;
}
function CopyToClipBoardBtn($$payload, $$props) {
	push();
	let {
		classNames = "",
		iconClassNames = "",
		value,
		children,
		onClick,
		showTooltip = true,
	} = $$props;
	onDestroy(() => {});
	$$payload.out += `<button${attr_class(clsx(classNames))} title="Copy to clipboard" type="button"><div class="relative">`;
	if (children) {
		$$payload.out += "<!--[-->";
		children($$payload);
		$$payload.out += `<!---->`;
	} else {
		$$payload.out += "<!--[!-->";
		Copy($$payload, { class: iconClassNames });
	}
	$$payload.out += `<!--]--> `;
	if (showTooltip) {
		$$payload.out += "<!--[-->";
		Tooltip($$payload, {
			classNames: "opacity-0",
		});
	} else {
		$$payload.out += "<!--[!-->";
	}
	$$payload.out += `<!--]--></div></button>`;
	pop();
}
export { CopyToClipBoardBtn as C, Copy as a };
