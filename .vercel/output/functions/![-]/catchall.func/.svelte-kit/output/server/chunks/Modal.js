import { a as pop, p as push, f as attr_class, l as clsx } from "./index3.js";
import { o as onDestroy } from "./index-server.js";
import "clsx";
import { C as Close } from "./close.js";
function Portal($$payload, $$props) {
	push();
	let { children } = $$props;
	onDestroy(() => {});
	$$payload.out += `<div class="contents" hidden>`;
	children?.($$payload);
	$$payload.out += `<!----></div>`;
	pop();
}
function Modal($$payload, $$props) {
	push();
	let {
		width = "max-w-sm",
		children,
		closeButton = false,
		disableFly = false,
		closeOnBackdrop = true,
		onclose,
	} = $$props;
	onDestroy(() => {
		return;
	});
	Portal($$payload, {
		children: ($$payload2) => {
			$$payload2.out += `<div role="presentation" tabindex="-1" class="fixed inset-0 z-40 flex items-center justify-center bg-black/80 backdrop-blur-sm dark:bg-black/50">`;
			if (disableFly) {
				$$payload2.out += "<!--[-->";
				$$payload2.out += `<div role="dialog" tabindex="-1"${attr_class(
					clsx([
						"scrollbar-custom relative mx-auto max-h-[95dvh] max-w-[90dvw] overflow-y-auto overflow-x-hidden rounded-2xl bg-white shadow-2xl outline-none dark:bg-gray-800 dark:text-gray-200",
						width,
					])
				)}>`;
				if (closeButton) {
					$$payload2.out += "<!--[-->";
					$$payload2.out += `<button class="absolute right-4 top-4 z-50">`;
					Close($$payload2, {
						class: "size-6 text-gray-700 dark:text-gray-300",
					});
					$$payload2.out += `<!----></button>`;
				} else {
					$$payload2.out += "<!--[!-->";
				}
				$$payload2.out += `<!--]--> `;
				children?.($$payload2);
				$$payload2.out += `<!----></div>`;
			} else {
				$$payload2.out += "<!--[!-->";
				$$payload2.out += `<div role="dialog" tabindex="-1"${attr_class(
					clsx([
						"scrollbar-custom relative mx-auto max-h-[95dvh] max-w-[90dvw] overflow-y-auto overflow-x-hidden rounded-2xl bg-white shadow-2xl outline-none dark:bg-gray-800 dark:text-gray-200",
						width,
					])
				)}>`;
				if (closeButton) {
					$$payload2.out += "<!--[-->";
					$$payload2.out += `<button class="absolute right-4 top-4 z-50">`;
					Close($$payload2, {
						class: "size-6 text-gray-700 dark:text-gray-300",
					});
					$$payload2.out += `<!----></button>`;
				} else {
					$$payload2.out += "<!--[!-->";
				}
				$$payload2.out += `<!--]--> `;
				children?.($$payload2);
				$$payload2.out += `<!----></div>`;
			}
			$$payload2.out += `<!--]--></div>`;
		},
	});
	pop();
}
export { Modal as M };
