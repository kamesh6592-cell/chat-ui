import { b as Z, g as Ue } from "../chunks/CSa6KPDp.js";
import { r as Ve } from "../chunks/svoSlOfU.js";
import "../chunks/CWj6FrbW.js";
import {
	c as s,
	r as t,
	p as Ne,
	B as I,
	t as k,
	a as je,
	s as l,
	g as a,
	u as z,
	h as w,
	f as re,
} from "../chunks/C6vgWmgZ.js";
import { d as Ae, i as c, r as De, s as q, e as Ge, a as qe } from "../chunks/18m15ENF.js";
import { b as ae, a as n, f as p } from "../chunks/CGwGH024.js";
import { a as Ye, e as Ze } from "../chunks/CYA4sdSw.js";
import { a as te, u as Fe, b as M } from "../chunks/3bvnQgV4.js";
import { l as oe, s as Je, a as Ke } from "../chunks/_wu0PA6r.js";
import { p as d } from "../chunks/lmEnKYxK.js";
import { I as Qe } from "../chunks/B9mu6Rtg.js";
import { C as We, a as Xe, P as er } from "../chunks/60oP_XVD.js";
import { A as L } from "../chunks/CXl0Ln_S.js";
import "../chunks/69_IOA4Y.js";
import { h as se } from "../chunks/6DPKqfPG.js";
import { u as rr } from "../chunks/Da9RVyMh.js";
import { S as Y } from "../chunks/PDNaNhLJ.js";
async function ar({ parent: $, params: P }) {
	const h = await $(),
		m = h.models.find((v) => v.id === P.model);
	return (!m || m.unlisted) && Ve(302, `${Z}/settings`), h;
}
const Ur = Object.freeze(
	Object.defineProperty({ __proto__: null, load: ar }, Symbol.toStringTag, { value: "Module" })
);
var tr = ae("<svg><!></svg>");
function or($, P) {
	const h = oe(P, ["children", "$$slots", "$$events", "$$legacy"]);
	var m = tr();
	te(m, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...h }));
	var v = s(m);
	se(
		v,
		() =>
			'<path fill="currentColor" d="M17.74 30L16 29l4-7h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.84Z"/><path fill="currentColor" d="M8 10h16v2H8zm0 6h10v2H8z"/>',
		!0
	),
		t(m),
		n($, m);
}
var sr = ae("<svg><!></svg>");
function dr($, P) {
	const h = oe(P, ["children", "$$slots", "$$events", "$$legacy"]);
	var m = sr();
	te(m, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...h }));
	var v = s(m);
	se(
		v,
		() =>
			'<path fill="currentColor" d="m31 16l-7 7l-1.41-1.41L28.17 16l-5.58-5.59L24 9zM1 16l7-7l1.41 1.41L3.83 16l5.58 5.59L8 23zm11.42 9.484L17.64 6l1.932.517L14.352 26z"/>',
		!0
	),
		t(m),
		n($, m);
}
var ir = p(
		'<p class="line-clamp-2 whitespace-pre-wrap text-sm text-gray-600 dark:text-gray-400"> </p>'
	),
	lr = p(
		'<a target="_blank" rel="noreferrer" class="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-1 text-sm hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700/60"><!> Model page</a>'
	),
	nr = p(
		'<a target="_blank" rel="noreferrer" class="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-1 text-sm hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700/60"><!> Dataset page</a>'
	),
	mr = p(
		'<a target="_blank" class="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-1 text-sm hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700/60" rel="noreferrer"><!> Model website</a>'
	),
	pr = p(
		'<a target="_blank" rel="noreferrer" class="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-1 text-sm hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700/60"><!> API Playground</a> <a target="_blank" rel="noreferrer" class="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-1 text-sm hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700/60"><!> View model card</a>',
		1
	),
	vr = p('<div class="flex items-center gap-1.5"><!>Copy new chat link</div>'),
	gr = p("<!> <!>", 1),
	cr =
		p(`<p class="mb-3 mt-2 rounded-lg bg-gray-100 px-3 py-2 text-sm dark:bg-white/5"><!> Omni routes your messages to the best underlying model
				depending on your request.</p>`),
	ur = p(
		'<button class="ml-auto text-xs underline decoration-gray-300 hover:decoration-gray-700 dark:decoration-gray-700 dark:hover:decoration-gray-400">Reset</button>'
	),
	fr = p(
		'<div class="flex items-start justify-between py-3"><div><div class="text-[13px] font-medium text-gray-800 dark:text-gray-200">Hide prompt examples</div> <p class="text-[12px] text-gray-500 dark:text-gray-400">Hide the prompt suggestions above the chat input.</p></div> <!></div>'
	),
	xr = p('<img class="size-2.5 flex-none rounded-sm"/>'),
	yr = p(
		'<li><span class="flex items-center gap-1 rounded-md bg-gray-100 py-0.5 pl-1.5 pr-2 text-xs text-gray-700 dark:bg-gray-700/60 dark:text-gray-200"><!> </span></li>'
	),
	hr = p(
		'<div class="mt-3 flex flex-col gap-2.5 rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm dark:border-gray-700 dark:bg-gray-800"><div><div class="text-[13px] font-medium text-gray-800 dark:text-gray-200">Inference Providers</div> <p class="text-[12px] text-gray-500 dark:text-gray-400">Providers serving this model. You can enable/disable some providers from <a class="underline decoration-gray-400 hover:decoration-gray-700 dark:decoration-gray-500 dark:hover:decoration-gray-500" target="_blank" href="https://huggingface.co/settings/inference-providers/settings">your settings</a>.</p></div> <ul class="mb-0.5 flex flex-wrap gap-2"></ul></div>'
	),
	br = p(
		'<div class="flex flex-col items-start"><div class="mb-4 flex flex-col gap-0.5"><h2 class="text-base font-semibold md:text-lg"> </h2> <!></div> <div class="mb-4 flex flex-wrap items-center gap-1.5"><button class="flex w-fit items-center rounded-full bg-black px-3 py-1.5 text-sm !text-white shadow-sm hover:bg-black/90 dark:bg-white/80 dark:!text-gray-900 dark:hover:bg-white/90" name="Activate model"><!> New chat</button> <!> <!> <!> <!></div> <div class="relative flex w-full flex-col gap-2"><!> <div class="flex w-full flex-row content-between"><h3 class="mb-1 text-[15px] font-semibold text-gray-800 dark:text-gray-200">System Prompt</h3> <!></div> <textarea aria-label="Custom system prompt" rows="8" class="w-full resize-none rounded-md border border-gray-200 bg-gray-50 p-2 text-[13px] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"></textarea> <div class="mt-3 rounded-xl border border-gray-200 bg-white px-3 shadow-sm dark:border-gray-700 dark:bg-gray-800"><div class="divide-y divide-gray-200 dark:divide-gray-700"><div class="flex items-start justify-between py-3"><div><div class="text-[13px] font-medium text-gray-800 dark:text-gray-200">Tool calling (functions)</div> <p class="text-[12px] text-gray-500 dark:text-gray-400">Enable tools and allow the model to call them in chat.</p></div> <!></div> <div class="flex items-start justify-between py-3"><div><div class="text-[13px] font-medium text-gray-800 dark:text-gray-200">Multimodal support (image inputs)</div> <p class="text-[12px] text-gray-500 dark:text-gray-400">Enable image uploads and send images to this model.</p></div> <!></div> <!></div></div> <!></div></div>'
	);
function Vr($, P) {
	Ne(P, !0);
	const [h, m] = Je(),
		v = () => Ke(g, "$settings", h),
		F = rr(),
		g = Fe();
	function de() {
		var e;
		return ((e = v().toolsOverrides) == null ? void 0 : e[d.params.model]) ?? !1;
	}
	function ie(e) {
		g.update((r) => ({ ...r, toolsOverrides: { ...r.toolsOverrides, [d.params.model]: e } }));
	}
	function le() {
		var e;
		return ((e = v().multimodalOverrides) == null ? void 0 : e[d.params.model]) ?? !1;
	}
	function ne(e) {
		g.update((r) => ({
			...r,
			multimodalOverrides: { ...r.multimodalOverrides, [d.params.model]: e },
		}));
	}
	function me() {
		var e;
		return ((e = v().hidePromptExamples) == null ? void 0 : e[d.params.model]) ?? !1;
	}
	function pe(e) {
		g.update((r) => ({
			...r,
			hidePromptExamples: { ...r.hidePromptExamples, [d.params.model]: e },
		}));
	}
	function ve() {
		var e;
		return ((e = v().customPrompts) == null ? void 0 : e[d.params.model]) ?? "";
	}
	function ge(e) {
		g.update((r) => ({ ...r, customPrompts: { ...r.customPrompts, [d.params.model]: e } }));
	}
	I(() => {
		var r;
		const e =
			((r = d.data.models.find((i) => i.id === d.params.model)) == null ? void 0 : r.preprompt) ||
			"";
		g.initValue("customPrompts", d.params.model, e);
	});
	let ce = z(() => {
			var e;
			return (
				v().customPrompts[d.params.model] !==
				((e = d.data.models.find((r) => r.id === d.params.model)) == null ? void 0 : e.preprompt)
			);
		}),
		o = z(() => d.data.models.find((e) => e.id === d.params.model)),
		ue = z(() => {
			var e;
			return ((e = a(o)) == null ? void 0 : e.providers) ?? [];
		});
	I(() => {
		a(o) && g.initValue("multimodalOverrides", d.params.model, !!a(o).multimodal);
	}),
		I(() => {
			a(o) && g.initValue("toolsOverrides", d.params.model, !!a(o).supportsTools);
		}),
		I(() => {
			g.initValue("hidePromptExamples", d.params.model, !1);
		});
	var B = br(),
		R = s(B),
		T = s(R),
		fe = s(T, !0);
	t(T);
	var xe = l(T, 2);
	{
		var ye = (e) => {
			var r = ir(),
				i = s(r, !0);
			t(r), k(() => q(i, a(o).description)), n(e, r);
		};
		c(xe, (e) => {
			a(o).description && e(ye);
		});
	}
	t(R);
	var U = l(R, 2),
		E = s(U);
	E.__click = (e) => {
		e.stopPropagation(), g.instantSet({ activeModel: d.params.model }), Ue(`${Z}/`);
	};
	var he = s(E);
	or(he, { class: "mr-1.5 text-sm" }), w(), t(E);
	var J = l(E, 2);
	{
		var be = (e) => {
			var r = lr(),
				i = s(r);
			L(i, { class: "mr-1.5 shrink-0 text-xs " }),
				w(),
				t(r),
				k(() => M(r, "href", a(o).modelUrl || "https://huggingface.co/" + a(o).name)),
				n(e, r);
		};
		c(J, (e) => {
			a(o).modelUrl && e(be);
		});
	}
	var K = l(J, 2);
	{
		var _e = (e) => {
			var r = nr(),
				i = s(r);
			L(i, { class: "mr-1.5 shrink-0 text-xs " }),
				w(),
				t(r),
				k(() =>
					M(r, "href", a(o).datasetUrl || "https://huggingface.co/datasets/" + a(o).datasetName)
				),
				n(e, r);
		};
		c(K, (e) => {
			(a(o).datasetName || a(o).datasetUrl) && e(_e);
		});
	}
	var Q = l(K, 2);
	{
		var ke = (e) => {
			var r = mr(),
				i = s(r);
			L(i, { class: "mr-1.5 shrink-0 text-xs " }),
				w(),
				t(r),
				k(() => M(r, "href", a(o).websiteUrl)),
				n(e, r);
		};
		c(Q, (e) => {
			a(o).websiteUrl && e(ke);
		});
	}
	var we = l(Q, 2);
	{
		var $e = (e) => {
			var r = gr(),
				i = re(r);
			{
				var u = (b) => {
					var _ = pr(),
						f = re(_),
						C = s(f);
					dr(C, { class: "mr-1.5 shrink-0 text-xs" }), w(), t(f);
					var y = l(f, 2),
						G = s(y);
					L(G, { class: "mr-1.5 shrink-0 text-xs" }),
						w(),
						t(y),
						k(() => {
							M(f, "href", "https://huggingface.co/playground?modelId=" + a(o).name),
								M(y, "href", "https://huggingface.co/" + a(o).name);
						}),
						n(b, _);
				};
				c(i, (b) => {
					var _;
					((_ = a(o)) != null && _.isRouter) || b(u);
				});
			}
			var x = l(i, 2);
			const O = z(() => F.PUBLIC_ORIGIN || d.url.origin),
				H = z(() => Z),
				S = z(() => a(o).id);
			We(x, {
				get value() {
					return `${a(O) ?? ""}${a(H) ?? ""}/models/${a(S) ?? ""}`;
				},
				classNames:
					"inline-flex items-center rounded-full border border-gray-200 px-2.5 py-1 text-sm hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700/60",
				children: (b, _) => {
					var f = vr(),
						C = s(f);
					Xe(C, { class: "shrink-0 text-xs" }), w(), t(f), n(b, f);
				},
				$$slots: { default: !0 },
			}),
				n(e, r);
		};
		c(we, (e) => {
			F.isHuggingChat && e($e);
		});
	}
	t(U);
	var W = l(U, 2),
		X = s(W);
	{
		var Pe = (e) => {
			var r = cr(),
				i = s(r);
			Qe(i, { classNames: "-translate-y-px" }), w(), t(r), n(e, r);
		};
		c(X, (e) => {
			var r;
			(r = a(o)) != null && r.isRouter && e(Pe);
		});
	}
	var V = l(X, 2),
		Oe = l(s(V), 2);
	{
		var Ce = (e) => {
			var r = ur();
			(r.__click = (i) => {
				i.stopPropagation(),
					g.update((u) => ({
						...u,
						customPrompts: { ...u.customPrompts, [d.params.model]: a(o).preprompt },
					}));
			}),
				n(e, r);
		};
		c(Oe, (e) => {
			a(ce) && e(Ce);
		});
	}
	t(V);
	var N = l(V, 2);
	De(N);
	var j = l(N, 2),
		ee = s(j),
		A = s(ee),
		ze = l(s(A), 2),
		Me = de,
		Ee = ie;
	Y(ze, {
		name: "forceTools",
		get checked() {
			return Me();
		},
		set checked(e) {
			Ee(e);
		},
	}),
		t(A);
	var D = l(A, 2),
		He = l(s(D), 2),
		Se = le,
		Ie = ne;
	Y(He, {
		name: "forceMultimodal",
		get checked() {
			return Se();
		},
		set checked(e) {
			Ie(e);
		},
	}),
		t(D);
	var Le = l(D, 2);
	{
		var Be = (e) => {
			var r = fr(),
				i = l(s(r), 2),
				u = me,
				x = pe;
			Y(i, {
				name: "hidePromptExamples",
				get checked() {
					return u();
				},
				set checked(O) {
					x(O);
				},
			}),
				t(r),
				n(e, r);
		};
		c(Le, (e) => {
			var r;
			(r = a(o)) != null && r.isRouter && e(Be);
		});
	}
	t(ee), t(j);
	var Re = l(j, 2);
	{
		var Te = (e) => {
			var r = hr(),
				i = l(s(r), 2);
			Ze(
				i,
				23,
				() => a(ue),
				(u, x) => u.provider || x,
				(u, x) => {
					var O = yr();
					const H = z(() => er[a(x).provider]);
					var S = s(O),
						b = s(S);
					{
						var _ = (C) => {
							var y = xr();
							k(() => {
								M(y, "src", `https://huggingface.co/api/organizations/${a(H) ?? ""}/avatar`),
									M(y, "alt", `${a(x).provider ?? ""} logo`);
							}),
								Ge("error", y, (G) => (G.currentTarget.style.display = "none")),
								qe(y),
								n(C, y);
						};
						c(b, (C) => {
							a(H) && C(_);
						});
					}
					var f = l(b);
					t(S), t(O), k(() => q(f, ` ${a(x).provider ?? ""}`)), n(u, O);
				}
			),
				t(i),
				t(r),
				n(e, r);
		};
		c(Re, (e) => {
			var r;
			(r = a(o).providers) != null && r.length && e(Te);
		});
	}
	t(W), t(B), k(() => q(fe, a(o).displayName)), Ye(N, ve, ge), n($, B), je(), m();
}
Ae(["click"]);
export { Vr as component, Ur as universal };
