import "../chunks/CWj6FrbW.js";
import {
	c as i,
	r as o,
	p as ia,
	g as s,
	b as la,
	a as na,
	f as O,
	s as n,
	$ as da,
	t as j,
	u as ga,
	e as pa,
	h as va,
} from "../chunks/C6vgWmgZ.js";
import { d as ca, h as ua, i as g, s as U } from "../chunks/18m15ENF.js";
import { b as ma, a as l, f as d, c as fa } from "../chunks/CGwGH024.js";
import { e as ha, a as ba } from "../chunks/CYA4sdSw.js";
import { a as xa, u as ya, b as k, r as _a, s as ka } from "../chunks/3bvnQgV4.js";
import { l as wa, s as $a, a as Ma } from "../chunks/_wu0PA6r.js";
import { u as Ca } from "../chunks/Da9RVyMh.js";
import { b as F, g as za } from "../chunks/CSa6KPDp.js";
import { p as Ha } from "../chunks/lmEnKYxK.js";
import "../chunks/69_IOA4Y.js";
import { h as Aa } from "../chunks/6DPKqfPG.js";
import { T as Sa, V as Ta } from "../chunks/Cbtu-SQV.js";
import { S as ja } from "../chunks/DgLqPQQO.js";
var Va = ma("<svg><!></svg>");
function qa(c, u) {
	const w = wa(u, ["children", "$$slots", "$$events", "$$legacy"]);
	var m = Va();
	xa(m, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...w }));
	var f = i(m);
	Aa(
		f,
		() =>
			'<path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 23a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 25m1.142-7.754v2.501h-2.25V15h2.125a2.376 2.376 0 0 0 0-4.753h-1.5a2.38 2.38 0 0 0-2.375 2.375v.638h-2.25v-.638A4.63 4.63 0 0 1 15.517 8h1.5a4.624 4.624 0 0 1 .125 9.246"/><path fill="none" d="M16 25a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 25m1.142-7.754v2.501h-2.25V15h2.125a2.376 2.376 0 0 0 0-4.753h-1.5a2.38 2.38 0 0 0-2.375 2.375v.638h-2.25v-.638A4.63 4.63 0 0 1 15.517 8h1.5a4.624 4.624 0 0 1 .125 9.246"/>',
		!0
	),
		o(m),
		l(c, m);
}
var Ba = d(
		'<meta property="og:title" content="HuggingChat - Models"/> <meta property="og:type" content="link"/> <meta property="og:description" content="Browse HuggingChat available models"/> <meta property="og:url"/>',
		1
	),
	Na = d(
		'<a href="https://huggingface.co/docs/inference-providers" class="ml-auto text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300" target="_blank" aria-label="Hub discussion about models"><!></a>'
	),
	Pa = d(
		'&nbsp;via <a target="_blank" href="https://huggingface.co/inference/models" class="underline decoration-gray-300 hover:decoration-gray-500 dark:decoration-gray-600 dark:hover:decoration-gray-500">Inference Providers</a>',
		1
	),
	Ra = d('<img class="aspect-square size-6 rounded border bg-white dark:border-gray-700" alt=""/>'),
	Da = d(
		'<div class="size-6 rounded border border-transparent bg-gray-300 dark:bg-gray-800" aria-hidden="true"></div>'
	),
	Oa = d(
		'<span title="This model supports tool calling (functions)." class="background ml-auto flex size-[21px] items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-500" aria-label="Model supports tools" role="img"><!></span>'
	),
	Ua = d(
		'<span title="This model is multimodal and supports image inputs natively." class="flex size-[21px] items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-500" aria-label="Model is multimodal" role="img"><!></span>'
	),
	Fa = (c, u) => {
		c.preventDefault(), c.stopPropagation(), za(`${F}/settings/${s(u).id}`);
	},
	Ia = d(
		'<span class="rounded-full bg-black px-2 py-0.5 text-xs text-white dark:bg-white dark:text-black">Active</span>'
	),
	La = d(
		'<span class="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-500 dark:border-gray-500 dark:text-gray-400">Default</span>'
	),
	Ea = d(
		'<a aria-label="Model card"><div class="flex items-center justify-between gap-1"><!> <div class="flex items-center gap-1"><!> <!> <button type="button" title="Model settings" class="flex size-[21px] items-center justify-center rounded-md border border-gray-300 text-xs text-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"><!></button> <!></div></div> <span class="flex items-center gap-2 font-semibold"> </span> <span class="line-clamp-4 whitespace-pre-wrap text-sm text-gray-500 dark:text-gray-400"> </span></a>'
	),
	Ga =
		d(`<div class="scrollbar-custom h-full overflow-y-auto py-12 max-sm:pt-8 md:py-24"><div class="pt-42 mx-auto flex flex-col px-5 xl:w-[60rem] 2xl:w-[64rem]"><div class="flex items-center"><h1 class="text-2xl font-bold">Models</h1> <!></div> <h2 class="text-gray-500">All models available<!></h2> <input type="search" placeholder="Search by name" aria-label="Search models by name or id" class="mt-4 w-full rounded-3xl border border-gray-300 bg-white px-5 py-2 text-[15px]
				placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300
				dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-gray-700"/> <div class="mt-6 grid grid-cols-1 gap-3 sm:gap-5 xl:grid-cols-2"></div></div></div>`);
function le(c, u) {
	ia(u, !0);
	const [w, m] = $a(),
		f = () => Ma(I, "$settings", w),
		I = ya(),
		$ = Ca();
	let M = la("");
	const V = (e) => e.toLowerCase().replace(/[^a-z0-9]+/g, " ");
	let L = ga(() => V(s(M)).trim().split(/\s+/).filter(Boolean));
	var C = Ga();
	ua((e) => {
		var a = fa(),
			p = O(a);
		{
			var v = (h) => {
				var b = Ba();
				da.title = "HuggingChat - Models";
				var _ = n(O(b), 6);
				j(() => k(_, "content", Ha.url.href)), l(h, b);
			};
			g(p, (h) => {
				$.isHuggingChat && h(v);
			});
		}
		l(e, a);
	});
	var q = i(C),
		z = i(q),
		E = n(i(z), 2);
	{
		var G = (e) => {
			var a = Na(),
				p = i(a);
			qa(p, {}), o(a), l(e, a);
		};
		g(E, (e) => {
			$.isHuggingChat && e(G);
		});
	}
	o(z);
	var H = n(z, 2),
		J = n(i(H));
	{
		var K = (e) => {
			var a = Pa();
			va(), l(e, a);
		};
		g(J, (e) => {
			$.isHuggingChat && e(K);
		});
	}
	o(H);
	var A = n(H, 2);
	_a(A);
	var B = n(A, 2);
	ha(
		B,
		23,
		() =>
			u.data.models
				.filter((e) => !e.unlisted)
				.filter((e) => {
					const a = V(`${e.id} ${e.name ?? ""} ${e.displayName ?? ""}`);
					return s(L).every((p) => a.includes(p));
				}),
		(e) => e.id,
		(e, a, p) => {
			var v = Ea();
			let h;
			var b = i(v),
				_ = i(b);
			{
				var Q = (r) => {
						var t = Ra();
						j(() => k(t, "src", s(a).logoUrl)), l(r, t);
					},
					W = (r) => {
						var t = Da();
						l(r, t);
					};
				g(_, (r) => {
					s(a).logoUrl ? r(Q) : r(W, !1);
				});
			}
			var N = n(_, 2),
				P = i(N);
			{
				var X = (r) => {
					var t = Oa(),
						y = i(t);
					Sa(y, { class: "text-xxs" }), o(t), l(r, t);
				};
				g(P, (r) => {
					var t;
					(((t = f().toolsOverrides) == null ? void 0 : t[s(a).id]) ?? s(a).supportsTools) && r(X);
				});
			}
			var R = n(P, 2);
			{
				var Y = (r) => {
					var t = Ua(),
						y = i(t);
					Ta(y, { class: "text-xxs" }), o(t), l(r, t);
				};
				g(R, (r) => {
					var t;
					(((t = f().multimodalOverrides) == null ? void 0 : t[s(a).id]) ?? s(a).multimodal) &&
						r(Y);
				});
			}
			var x = n(R, 2);
			x.__click = [Fa, a];
			var Z = i(x);
			ja(Z, { class: "text-xs" }), o(x);
			var aa = n(x, 2);
			{
				var ea = (r) => {
						var t = Ia();
						l(r, t);
					},
					ra = (r, t) => {
						{
							var y = (T) => {
								var oa = La();
								l(T, oa);
							};
							g(
								r,
								(T) => {
									s(p) === 0 && s(a).id === "omni" && T(y);
								},
								t
							);
						}
					};
				g(aa, (r) => {
					s(a).id === f().activeModel ? r(ea) : r(ra, !1);
				});
			}
			o(N), o(b);
			var S = n(b, 2),
				ta = i(S, !0);
			o(S);
			var D = n(S, 2),
				sa = i(D, !0);
			o(D),
				o(v),
				j(
					(r) => {
						k(v, "href", `${F ?? ""}/models/${s(a).id ?? ""}`),
							(h = ka(
								v,
								1,
								"relative flex flex-col gap-2 overflow-hidden rounded-xl border bg-gray-50/50 px-6 py-5 shadow hover:bg-gray-50 hover:shadow-inner dark:border-gray-800/70 dark:bg-gray-950/20 dark:hover:bg-gray-950/40 svelte-1h1flxw",
								null,
								h,
								r
							)),
							k(x, "aria-label", `Model settings for ${s(a).displayName ?? ""}`),
							U(ta, s(a).displayName),
							U(
								sa,
								s(a).isRouter
									? "Routes your messages to the best model for your request."
									: s(a).description || "-"
							);
					},
					[() => ({ "omni-gradient": s(a).isRouter, "active-model": s(a).id === f().activeModel })]
				),
				l(e, v);
		}
	),
		o(B),
		o(q),
		o(C),
		ba(
			A,
			() => s(M),
			(e) => pa(M, e)
		),
		l(c, C),
		na(),
		m();
}
ca(["click"]);
export { le as component };
