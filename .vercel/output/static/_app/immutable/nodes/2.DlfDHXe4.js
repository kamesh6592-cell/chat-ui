import "../chunks/CWj6FrbW.js";
import {
	p as x,
	b as _,
	d as k,
	a as w,
	e as y,
	g as d,
	f as $,
	n as S,
	s as C,
	c as M,
	h as P,
	r as F,
} from "../chunks/C6vgWmgZ.js";
import { f as p, a as n } from "../chunks/CGwGH024.js";
import { s as N } from "../chunks/CnTZH1bt.js";
import { i as j } from "../chunks/18m15ENF.js";
import { s as q, a as z } from "../chunks/_wu0PA6r.js";
import { b as l, a as A, g as B } from "../chunks/CSa6KPDp.js";
import { u as D } from "../chunks/3bvnQgV4.js";
import { M as E, C as G } from "../chunks/zLvdPMOW.js";
var H = p(
		'<div class="absolute bottom-4 right-4 m-2 flex items-center gap-1.5 rounded-full border bg-black px-3 py-1 text-white dark:border-white/10 dark:bg-gray-700 dark:text-gray-100"><!> Saved</div>'
	),
	I = p("<!> <!>", 1);
function X(g, s) {
	x(s, !0);
	const [h, u] = q(),
		m = () => z(v, "$settings", h);
	let e = _(k(l || "/"));
	A(({ from: t }) => {
		t != null &&
			t.url &&
			!t.url.pathname.includes("settings") &&
			y(e, t.url.toString() || d(e) || l || "/", !0);
	});
	const v = D();
	E(g, {
		onclose: () => B(d(e)),
		disableFly: !0,
		width:
			"border dark:border-gray-700 h-[95dvh] w-[90dvw] pb-0 overflow-hidden rounded-2xl bg-white shadow-2xl outline-none dark:bg-gray-800 dark:text-gray-200 sm:h-[95dvh] xl:w-[1200px] xl:h-[85dvh] 2xl:h-[75dvh]",
		children: (t, J) => {
			var o = I(),
				i = $(o);
			N(i, () => s.children ?? S);
			var c = C(i, 2);
			{
				var b = (a) => {
					var r = H(),
						f = M(r);
					G(f, { class: "text-white" }), P(), F(r), n(a, r);
				};
				j(c, (a) => {
					m().recentlySaved && a(b);
				});
			}
			n(t, o);
		},
		$$slots: { default: !0 },
	}),
		w(),
		u();
}
export { X as component };
