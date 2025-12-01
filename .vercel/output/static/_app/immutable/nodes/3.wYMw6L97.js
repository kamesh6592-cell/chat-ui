import "../chunks/CWj6FrbW.js";
import { b as m, o as bt, a as _t, g as C } from "../chunks/CSa6KPDp.js";
import {
	c as i,
	r as l,
	p as ht,
	b as M,
	d as yt,
	s as u,
	a as kt,
	g as e,
	e as z,
	i as wt,
	t as j,
	u as $t,
	h as zt,
	n as Ct,
} from "../chunks/C6vgWmgZ.js";
import { d as Tt, i as y, s as Mt } from "../chunks/18m15ENF.js";
import { e as St, i as It, a as Ot } from "../chunks/CYA4sdSw.js";
import { b as Y, a as g, f as k } from "../chunks/CGwGH024.js";
import { s as Bt } from "../chunks/CnTZH1bt.js";
import { a as Z, u as Ht, r as Vt, s as S, b as U } from "../chunks/3bvnQgV4.js";
import { b as At } from "../chunks/CDRdzyOh.js";
import { l as tt, s as Et, a as Lt } from "../chunks/_wu0PA6r.js";
import { p as $ } from "../chunks/lmEnKYxK.js";
import { I as Nt } from "../chunks/B9mu6Rtg.js";
import { C as Pt } from "../chunks/OwagsJha.js";
import "../chunks/69_IOA4Y.js";
import { h as et } from "../chunks/6DPKqfPG.js";
import { C as Wt } from "../chunks/wt6lPunf.js";
import { T as jt, V as Dt } from "../chunks/Cbtu-SQV.js";
import { b as I } from "../chunks/C6o0iJkr.js";
const Rt = !1,
	Ce = Object.freeze(
		Object.defineProperty({ __proto__: null, ssr: Rt }, Symbol.toStringTag, { value: "Module" })
	);
var qt = Y("<svg><!></svg>");
function Ft(p, s) {
	const b = tt(s, ["children", "$$slots", "$$events", "$$legacy"]);
	var d = qt();
	Z(d, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...b }));
	var _ = i(d);
	et(
		_,
		() => '<path fill="currentColor" d="M6 24h14v2H6zm0-6h20v2H6zm0-6h20v2H6zm0-6h20v2H6z"/>',
		!0
	),
		l(d),
		g(p, d);
}
var Gt = Y("<svg><!></svg>");
function Jt(p, s) {
	const b = tt(s, ["children", "$$slots", "$$events", "$$legacy"]);
	var d = Gt();
	Z(d, () => ({ viewBox: "0 0 16 16", width: "1.2em", height: "1.2em", ...b }));
	var _ = i(d);
	et(
		_,
		() =>
			'<path fill="currentColor" d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86a2.929 2.929 0 0 1 0 5.858z"/>',
		!0
	),
		l(d),
		g(p, d);
}
const Kt = 768;
function X(p) {
	const { innerWidth: s } = p;
	return s > Kt;
}
function Qt(p, s) {
	let b;
	return function (...d) {
		clearTimeout(b),
			(b = setTimeout(() => {
				p(...d);
			}, s));
	};
}
var Ut = (p, s) => {
		z(s, !1), C(`${m}/settings`);
	},
	Xt = k('<button class="btn rounded-lg md:hidden" aria-label="Back to menu"><!></button>'),
	Yt = (p, s) => {
		C(e(s));
	},
	Zt = (p, s) => C(`${m}/settings/${e(s).id}`),
	te = k(
		'<span title="Tool calling supported" class="grid size-[21px] flex-none place-items-center rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-500" aria-label="Model supports tools" role="img"><!></span>'
	),
	ee = k(
		'<span title="Multimodal support (image inputs)" class="grid size-[21px] flex-none place-items-center rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-500" aria-label="Model is multimodal" role="img"><!></span>'
	),
	ae = k(
		'<div class="flex h-[21px] items-center rounded-md bg-black/90 px-2 text-[11px] font-semibold leading-none text-white dark:bg-white dark:text-black">Active</div>'
	),
	re = k(
		'<button type="button"><div class="mr-auto flex items-center gap-1 truncate"><span class="truncate"> </span> <!></div> <!> <!> <!> <!></button>'
	),
	oe = () => C(`${m}/settings/application`),
	se = k(
		'<div><h3 class="px-3 pb-1 pt-2 text-xs font-semibold tracking-wide text-gray-600 dark:text-gray-400 md:text-left">Models</h3> <div class="px-2 py-2"><input type="search" placeholder="Search by name" aria-label="Search models by name or id" class="w-full rounded-full border border-gray-300 bg-white px-4 py-1 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-500 dark:focus:ring-gray-700"/></div> <!> <button type="button" aria-label="Configure application settings"><!> Application Settings</button></div>'
	),
	ie = k("<div><!></div>"),
	le = k(
		'<div class="mx-auto grid h-full w-full max-w-[1400px] grid-cols-1 grid-rows-[auto,1fr] content-start gap-x-6 overflow-hidden p-4 text-gray-800 dark:text-gray-300 md:grid-cols-3 md:grid-rows-[auto,1fr] md:p-4"><div class="col-span-1 mb-3 flex items-center justify-between md:col-span-3 md:mb-4"><!> <h2 class=" left-0 right-0 mx-auto w-fit text-center text-xl font-bold md:hidden">Settings</h2> <button class="btn rounded-lg" aria-label="Close settings"><!></button></div> <!> <!></div>'
	);
function Te(p, s) {
	ht(s, !0);
	const [b, d] = Et(),
		_ = () => Lt(at, "$settings", b);
	let O = M(yt(m || "/")),
		h = M(!1),
		B = M(void 0);
	async function D() {
		await wt();
		const t = e(B);
		if (!t) return;
		const r = $.params.model;
		if (!r) return;
		const v = t.querySelectorAll("button[data-model-id]");
		let x = null;
		for (const w of v)
			if (w.dataset.modelId === r) {
				x = w;
				break;
			}
		x && x.scrollIntoView({ block: "nearest", inline: "nearest" });
	}
	function H() {
		X(window) &&
			$.url.pathname === `${m}/settings` &&
			!$.url.pathname.endsWith("/application") &&
			C(`${m}/settings/application`);
	}
	bt(() => {
		z(h, $.url.pathname !== `${m}/settings`), H(), D();
		{
			const t = Qt(H, 100);
			return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
		}
	}),
		_t(({ from: t }) => {
			t != null &&
				t.url &&
				!t.url.pathname.includes("settings") &&
				z(O, t.url.toString() || e(O) || m || "/", !0),
				z(h, $.url.pathname !== `${m}/settings`),
				H(),
				D();
		});
	const at = Ht();
	let V = M("");
	const R = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, " ");
	let rt = $t(() => R(e(V)).trim().split(/\s+/).filter(Boolean));
	var A = le(),
		E = i(A),
		q = i(E);
	{
		var ot = (t) => {
			var r = Xt();
			r.__click = [Ut, h];
			var v = i(r);
			Wt(v, {
				class: "text-xl text-gray-900 hover:text-black dark:text-gray-200 dark:hover:text-white",
			}),
				l(r),
				g(t, r);
		};
		y(q, (t) => {
			e(h) && I && t(ot);
		});
	}
	var L = u(q, 4);
	L.__click = [Yt, O];
	var st = i(L);
	Pt(st, {
		class: "text-xl text-gray-900 hover:text-black dark:text-gray-200 dark:hover:text-white",
	}),
		l(L),
		l(E);
	var F = u(E, 2);
	{
		var it = (t) => {
			var r = se();
			let v;
			var x = u(i(r), 2),
				w = i(x);
			Vt(w), l(x);
			var G = u(x, 2);
			St(
				G,
				17,
				() =>
					s.data.models
						.filter((c) => !c.unlisted)
						.filter((c) => {
							const n = R(`${c.id} ${c.name ?? ""} ${c.displayName ?? ""}`);
							return e(rt).every((f) => n.includes(f));
						}),
				It,
				(c, n) => {
					var f = re();
					f.__click = [Zt, n];
					var N = i(f),
						P = i(N),
						ct = i(P, !0);
					l(P);
					var pt = u(P, 2);
					{
						var ut = (a) => {
							Nt(a, {});
						};
						y(pt, (a) => {
							e(n).isRouter && a(ut);
						});
					}
					l(N);
					var J = u(N, 2);
					{
						var gt = (a) => {
							var o = te(),
								W = i(o);
							jt(W, { class: "text-xxs" }), l(o), g(a, o);
						};
						y(J, (a) => {
							var o;
							(((o = _().toolsOverrides) == null ? void 0 : o[e(n).id]) ?? e(n).supportsTools) &&
								a(gt);
						});
					}
					var K = u(J, 2);
					{
						var mt = (a) => {
							var o = ee(),
								W = i(o);
							Dt(W, { class: "text-xxs" }), l(o), g(a, o);
						};
						y(K, (a) => {
							var o;
							(((o = _().multimodalOverrides) == null ? void 0 : o[e(n).id]) ?? e(n).multimodal) &&
								a(mt);
						});
					}
					var Q = u(K, 2);
					{
						var vt = (a) => {
							Ft(a, {
								class:
									"size-6 rounded-md border border-gray-300 p-1 text-gray-800 dark:border-gray-600 dark:text-gray-200",
							});
						};
						y(Q, (a) => {
							var o;
							(o = _().customPrompts) != null && o[e(n).id] && a(vt);
						});
					}
					var xt = u(Q, 2);
					{
						var ft = (a) => {
							var o = ae();
							g(a, o);
						};
						y(xt, (a) => {
							e(n).id === _().activeModel && a(ft);
						});
					}
					l(f),
						j(() => {
							S(
								f,
								1,
								`group flex h-9 w-full flex-none items-center gap-1 rounded-lg px-3 text-[13px] text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800/60 md:rounded-xl md:px-3 ${e(n).id === $.params.model ? "!bg-gray-100 !text-gray-800 dark:!bg-gray-700 dark:!text-gray-200" : ""}`
							),
								U(f, "data-model-id", e(n).id),
								U(f, "aria-label", `Configure ${e(n).displayName ?? ""}`),
								Mt(ct, e(n).displayName);
						}),
						g(c, f);
				}
			);
			var T = u(G, 2);
			T.__click = [oe];
			var dt = i(T);
			Jt(dt, { class: "mr-0.5 text-xxs" }),
				zt(),
				l(T),
				l(r),
				At(
					r,
					(c) => z(B, c),
					() => e(B)
				),
				j(
					(c) => {
						(v = S(
							r,
							1,
							"scrollbar-custom col-span-1 flex flex-col overflow-y-auto whitespace-nowrap rounded-r-xl bg-gradient-to-l from-gray-50 to-10% dark:from-gray-700/40 max-md:-mx-4 max-md:h-full md:pr-6",
							null,
							v,
							c
						)),
							S(
								T,
								1,
								`group sticky bottom-0 mt-1 flex h-9 w-full flex-none items-center gap-1 rounded-lg px-3 text-[13px] text-gray-600 dark:text-gray-300 max-md:order-first md:rounded-xl md:px-3 ${$.url.pathname === `${m}/settings/application` ? "!bg-gray-100 !text-gray-800 dark:!bg-gray-700 dark:!text-gray-200" : "bg-white dark:bg-gray-800"}`
							);
					},
					[() => ({ "max-md:hidden": e(h) && I })]
				),
				Ot(
					w,
					() => e(V),
					(c) => z(V, c)
				),
				g(t, r);
		};
		y(F, (t) => {
			(e(h) && I && !X(window)) || t(it);
		});
	}
	var lt = u(F, 2);
	{
		var nt = (t) => {
			var r = ie();
			let v;
			var x = i(r);
			Bt(x, () => s.children ?? Ct),
				l(r),
				j(
					(w) =>
						(v = S(
							r,
							1,
							"scrollbar-custom col-span-1 w-full overflow-y-auto overflow-x-clip px-1 md:col-span-2 md:row-span-2",
							null,
							v,
							w
						)),
					[() => ({ "max-md:hidden": !e(h) && I })]
				),
				g(t, r);
		};
		y(lt, (t) => {
			e(h) && t(nt);
		});
	}
	l(A), g(p, A), kt(), d();
}
Tt(["click"]);
export { Te as component, Ce as universal };
