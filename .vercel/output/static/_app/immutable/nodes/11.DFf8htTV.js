import "../chunks/CWj6FrbW.js";
import { o as Ye, g as $e, b as Se } from "../chunks/CSa6KPDp.js";
import {
	c as t,
	r,
	p as Ze,
	b as S,
	d as ke,
	s,
	t as h,
	a as et,
	e as v,
	g as o,
	h as U,
	f as tt,
	u as rt,
} from "../chunks/C6vgWmgZ.js";
import { d as at, i as b, s as M } from "../chunks/18m15ENF.js";
import { e as st, i as it } from "../chunks/CYA4sdSw.js";
import { b as ot, a as l, f as x } from "../chunks/CGwGH024.js";
import { a as nt, u as dt, s as D, b as te, i as lt, c as gt } from "../chunks/3bvnQgV4.js";
import { l as ct, a as we, s as vt, b as Pe } from "../chunks/_wu0PA6r.js";
import { T as xt, e as se } from "../chunks/BJid9-HC.js";
import { A as Ae } from "../chunks/CXl0Ln_S.js";
import "../chunks/69_IOA4Y.js";
import { h as ut } from "../chunks/6DPKqfPG.js";
import { S as re } from "../chunks/PDNaNhLJ.js";
import { p as H } from "../chunks/lmEnKYxK.js";
import { u as ft } from "../chunks/Da9RVyMh.js";
import { u as pt, h as ae } from "../chunks/CVHkYvGM.js";
import { g as ht, s as ie } from "../chunks/CTQezUnf.js";
var mt = ot("<svg><!></svg>");
function _t(u, n) {
	const k = ct(n, ["children", "$$slots", "$$events", "$$legacy"]);
	var f = mt();
	nt(f, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...k }));
	var A = t(f);
	ut(
		A,
		() =>
			'<path fill="currentColor" fill-rule="evenodd" d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.7 3.7 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2"/>',
		!0
	),
		r(f),
		l(u, f);
}
var yt = x(
		'<div class="mt-1 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-[12px] text-gray-700 dark:border-gray-700 dark:bg-gray-700/80 dark:text-gray-300"><span class="font-medium">API Base URL:</span> <code class="ml-1 break-all font-mono text-[12px] text-gray-800 dark:text-gray-100"> </code></div>'
	),
	bt = x(
		'<div class="flex flex-col items-start justify-between text-xl font-semibold text-gray-800 dark:text-gray-200"><a target="_blank" rel="noreferrer" class="text-sm font-light text-gray-500 dark:text-gray-400">Latest deployment <span class="gap-2 font-mono"> </span></a></div>'
	),
	kt = async (u, n, k, f, A) => {
		try {
			v(n, !0), v(k, null);
			const p = await f.models.refresh.post().then(ae),
				m = `+${p.added.length} −${p.removed.length} ~${p.changed.length}`;
			v(k, `Refreshed in ${p.durationMs} ms • ${m} • total ${p.total}`),
				await $e(H.url.pathname, { invalidateAll: !0 });
		} catch (p) {
			console.error(p), Pe(se, "Model refresh failed");
		} finally {
			v(n, !1);
		}
	},
	wt = x('<span class="text-xs text-gray-600 dark:text-gray-400"> </span>'),
	At = x(
		'<div class="flex items-center gap-2"><p class="rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 dark:bg-red-500/10 dark:text-red-300">Admin mode</p> <button type="button"> </button> <!></div>'
	),
	$t = x(
		'<div class="flex items-start justify-between py-3"><div><div class="text-[13px] font-medium text-gray-800 dark:text-gray-200">Share with model authors</div> <p class="text-[12px] text-gray-500 dark:text-gray-400">Sharing your data helps improve open models over time.</p></div> <!></div>'
	),
	St = (u, n) => {
		ie("system"), v(n, "system");
	},
	Pt = (u, n) => {
		ie("light"), v(n, "light");
	},
	Ct = (u, n) => {
		ie("dark"), v(n, "dark");
	},
	Ot = x('<span class="text-xs text-gray-500 dark:text-gray-400">Loading...</span>'),
	Bt = x('<span class="text-xs text-red-500"> </span>'),
	Mt = (u, n) => n(u.currentTarget.value),
	It = x("<option> </option>"),
	Lt = x(
		'<select class="rounded-md border border-gray-300 bg-white px-1 py-1 text-xs text-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"><option>Personal</option><!></select>'
	),
	jt = x(
		'<div class="rounded-xl border border-gray-200 bg-white px-3 shadow-sm dark:border-gray-700 dark:bg-gray-800"><div class="divide-y divide-gray-200 dark:divide-gray-700"><div class="flex items-start justify-between py-3"><div><div class="text-[13px] font-medium text-gray-800 dark:text-gray-200">Billing</div> <p class="text-[12px] text-gray-500 dark:text-gray-400">Select between personal or organization billing (for eligible organizations).</p></div> <div class="flex items-center"><!></div></div> <div class="flex items-start justify-between py-3"><div><div class="text-[13px] font-medium text-gray-800 dark:text-gray-200">Providers Usage</div> <p class="text-[12px] text-gray-500 dark:text-gray-400">See which providers you use and choose your preferred ones.</p></div> <a target="_blank" class="whitespace-nowrap rounded-md border border-gray-300 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">View Usage</a></div></div></div>'
	),
	Tt = x(
		'<a href="https://github.com/huggingface/chat-ui" target="_blank" class="flex items-center underline decoration-gray-300 underline-offset-2 hover:decoration-gray-700 dark:decoration-gray-700 dark:hover:decoration-gray-400"><!> Github repository</a> <a href="https://huggingface.co/spaces/huggingchat/chat-ui/discussions/764" target="_blank" rel="noreferrer" class="flex items-center underline decoration-gray-300 underline-offset-2 hover:decoration-gray-700 dark:decoration-gray-700 dark:hover:decoration-gray-400"><!> Share your feedback on HuggingChat</a> <a class="flex items-center underline decoration-gray-300 underline-offset-2 hover:decoration-gray-700 dark:decoration-gray-700 dark:hover:decoration-gray-400"><!> About & Privacy</a>',
		1
	),
	zt = async (u, n, k) => {
		u.preventDefault(),
			confirm("Are you sure you want to delete all conversations?") &&
				n.conversations
					.delete()
					.then(async () => {
						await $e(`${Se}/`, { invalidateAll: !0 });
					})
					.catch((f) => {
						console.error(f), Pe(se, f.message);
					});
	},
	Ut = x(
		'<div class="flex w-full flex-col gap-4"><h2 class="text-center text-lg font-semibold text-gray-800 dark:text-gray-200 md:text-left">Application Settings</h2> <!> <!> <!> <div class="flex h-full flex-col gap-4 max-sm:pt-0"><div class="rounded-xl border border-gray-200 bg-white px-3 shadow-sm dark:border-gray-700 dark:bg-gray-800"><div class="divide-y divide-gray-200 dark:divide-gray-700"><!> <div class="flex items-start justify-between py-3"><div><div class="text-[13px] font-medium text-gray-800 dark:text-gray-200">Disable streaming tokens</div> <p class="text-[12px] text-gray-500 dark:text-gray-400">Show responses only when complete.</p></div> <!></div> <div class="flex items-start justify-between py-3"><div><div class="text-[13px] font-medium text-gray-800 dark:text-gray-200">Paste text directly</div> <p class="text-[12px] text-gray-500 dark:text-gray-400">Paste long text directly into chat instead of a file.</p></div> <!></div> <div class="flex items-start justify-between py-3"><div><div class="text-[13px] font-medium text-gray-800 dark:text-gray-200">Theme</div> <p class="text-[12px] text-gray-500 dark:text-gray-400">Choose light, dark, or follow system.</p></div> <div class="flex overflow-hidden rounded-md border text-center dark:divide-gray-600 dark:border-gray-600 max-sm:flex-col max-sm:divide-y sm:items-center sm:divide-x"><button>system</button> <button>light</button> <button>dark</button></div></div></div></div> <!> <div class="mt-6 flex flex-col gap-2 self-start text-[13px]"><!> <button type="submit" class="flex items-center underline decoration-red-200 underline-offset-2 hover:decoration-red-500 dark:decoration-red-900 dark:hover:decoration-red-700"><!>Delete all conversations</button></div></div></div>'
	);
function tr(u, n) {
	Ze(n, !0);
	const [k, f] = vt(),
		A = () => we(I, "$settings", k),
		p = () => we(se, "$error", k),
		m = ft();
	let I = dt();
	function Ce() {
		return A().shareConversationsWithModelAuthors;
	}
	function Oe(e) {
		I.update((a) => ({ ...a, shareConversationsWithModelAuthors: e }));
	}
	function Be() {
		return A().disableStream;
	}
	function Me(e) {
		I.update((a) => ({ ...a, disableStream: e }));
	}
	function Ie() {
		return A().directPaste;
	}
	function Le(e) {
		I.update((a) => ({ ...a, directPaste: e }));
	}
	const j = pt();
	let R = S(null),
		oe = S(ke([])),
		E = S(!1),
		W = S(null);
	function T() {
		return A().billingOrganization ?? "";
	}
	function ne(e) {
		I.update((a) => ({ ...a, billingOrganization: e || void 0 }));
	}
	Ye(async () => {
		try {
			const e = await j.debug.config.get().then(ae);
			v(R, e.OPENAI_BASE_URL || null, !0);
		} catch {}
		if (m.isHuggingChat && H.data.user) {
			v(E, !0);
			try {
				const e = await j.user["billing-orgs"].get().then(ae);
				v(oe, e.organizations ?? [], !0),
					e.currentBillingOrg !== T() && ne(e.currentBillingOrg ?? "");
			} catch {
				v(W, "Failed to load billing options");
			} finally {
				v(E, !1);
			}
		}
	});
	let P = S(ke(ht())),
		z = S(!1),
		N = S(null);
	var G = Ut(),
		de = s(t(G), 2);
	{
		var je = (e) => {
			var a = yt(),
				i = s(t(a), 2),
				d = t(i, !0);
			r(i), r(a), h(() => M(d, o(R))), l(e, a);
		};
		b(de, (e) => {
			o(R) !== null && e(je);
		});
	}
	var le = s(de, 2);
	{
		var Te = (e) => {
			var a = bt(),
				i = t(a),
				d = s(t(i)),
				g = t(d, !0);
			r(d),
				r(i),
				r(a),
				h(
					(_) => {
						te(i, "href", `https://github.com/huggingface/chat-ui/commit/${m.PUBLIC_COMMIT_SHA}`),
							M(g, _);
					},
					[() => m.PUBLIC_COMMIT_SHA.slice(0, 7)]
				),
				l(e, a);
		};
		b(le, (e) => {
			m.PUBLIC_COMMIT_SHA && e(Te);
		});
	}
	var ge = s(le, 2);
	{
		var ze = (e) => {
			var a = At(),
				i = s(t(a), 2);
			let d;
			i.__click = [kt, z, N, j, p];
			var g = t(i, !0);
			r(i);
			var _ = s(i, 2);
			{
				var $ = (y) => {
					var C = wt(),
						X = t(C, !0);
					r(C), h(() => M(X, o(N))), l(y, C);
				};
				b(_, (y) => {
					o(N) && y($);
				});
			}
			r(a),
				h(
					(y) => {
						(d = D(i, 1, "btn rounded-md text-xs", null, d, y)),
							(i.disabled = o(z)),
							M(g, o(z) ? "Refreshing…" : "Refresh models");
					},
					[() => ({ underline: !o(z) })]
				),
				l(e, a);
		};
		b(ge, (e) => {
			H.data.isAdmin && e(ze);
		});
	}
	var ce = s(ge, 2),
		F = t(ce),
		ve = t(F),
		xe = t(ve);
	{
		var Ue = (e) => {
			var a = $t(),
				i = s(t(a), 2),
				d = Ce,
				g = Oe;
			re(i, {
				name: "shareConversationsWithModelAuthors",
				get checked() {
					return d();
				},
				set checked(_) {
					g(_);
				},
			}),
				r(a),
				l(e, a);
		};
		b(xe, (e) => {
			m.PUBLIC_APP_DATA_SHARING === "1" && e(Ue);
		});
	}
	var V = s(xe, 2),
		De = s(t(V), 2),
		He = Be,
		Re = Me;
	re(De, {
		name: "disableStream",
		get checked() {
			return He();
		},
		set checked(e) {
			Re(e);
		},
	}),
		r(V);
	var q = s(V, 2),
		Ee = s(t(q), 2),
		We = Ie,
		Ne = Le;
	re(Ee, {
		name: "directPaste",
		get checked() {
			return We();
		},
		set checked(e) {
			Ne(e);
		},
	}),
		r(q);
	var ue = s(q, 2),
		fe = s(t(ue), 2),
		J = t(fe);
	J.__click = [St, P];
	var K = s(J, 2);
	K.__click = [Pt, P];
	var pe = s(K, 2);
	(pe.__click = [Ct, P]), r(fe), r(ue), r(ve), r(F);
	var he = s(F, 2);
	{
		var Ge = (e) => {
			var a = jt(),
				i = t(a),
				d = t(i),
				g = s(t(d), 2),
				_ = t(g);
			{
				var $ = (w) => {
						var Y = Ot();
						l(w, Y);
					},
					y = (w, Y) => {
						{
							var qe = (O) => {
									var c = Bt(),
										B = t(c, !0);
									r(c), h(() => M(B, o(W))), l(O, c);
								},
								Je = (O) => {
									var c = Lt();
									const B = rt(T);
									lt(c, () => o(B));
									var ye;
									c.__change = [Mt, ne];
									var Z = t(c);
									Z.value = Z.__value = "";
									var Ke = s(Z);
									st(
										Ke,
										17,
										() => o(oe),
										it,
										(Qe, ee) => {
											var L = It(),
												be = {},
												Xe = t(L, !0);
											r(L),
												h(() => {
													be !== (be = o(ee).preferred_username) &&
														(L.value = (L.__value = o(ee).preferred_username) ?? ""),
														M(Xe, o(ee).name);
												}),
												l(Qe, L);
										}
									),
										r(c),
										h(() => {
											ye !== (ye = o(B)) && ((c.value = (c.__value = o(B)) ?? ""), gt(c, o(B)));
										}),
										l(O, c);
								};
							b(
								w,
								(O) => {
									o(W) ? O(qe) : O(Je, !1);
								},
								Y
							);
						}
					};
				b(_, (w) => {
					o(E) ? w($) : w(y, !1);
				});
			}
			r(g), r(d);
			var C = s(d, 2),
				X = s(t(C), 2);
			r(C),
				r(i),
				r(a),
				h(
					(w) => te(X, "href", w),
					[
						() =>
							T()
								? `https://huggingface.co/organizations/${T()}/settings/inference-providers/overview`
								: "https://huggingface.co/settings/inference-providers/overview",
					]
				),
				l(e, a);
		};
		b(he, (e) => {
			m.isHuggingChat && H.data.user && e(Ge);
		});
	}
	var me = s(he, 2),
		_e = t(me);
	{
		var Fe = (e) => {
			var a = Tt(),
				i = tt(a),
				d = t(i);
			_t(d, { class: "mr-1.5 shrink-0 text-sm " }), U(), r(i);
			var g = s(i, 2),
				_ = t(g);
			Ae(_, { class: "mr-1.5 shrink-0 text-sm " }), U(), r(g);
			var $ = s(g, 2),
				y = t($);
			Ae(y, { class: "mr-1.5 shrink-0 text-sm " }),
				U(),
				r($),
				h(() => te($, "href", `${Se ?? ""}/privacy`)),
				l(e, a);
		};
		b(_e, (e) => {
			m.isHuggingChat && e(Fe);
		});
	}
	var Q = s(_e, 2);
	Q.__click = [zt, j, p];
	var Ve = t(Q);
	xt(Ve, { class: "mr-2 inline text-sm text-red-500" }),
		U(),
		r(Q),
		r(me),
		r(ce),
		r(G),
		h(() => {
			D(
				J,
				1,
				"inline-flex items-center justify-center px-2.5 py-1 text-center text-xs " +
					(o(P) === "system"
						? "bg-black text-white dark:border-white/10 dark:bg-white/80 dark:text-gray-900"
						: "hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/60")
			),
				D(
					K,
					1,
					"inline-flex items-center justify-center px-2.5 py-1 text-center text-xs " +
						(o(P) === "light"
							? "bg-black text-white dark:border-white/10 dark:bg-white/80 dark:text-gray-900"
							: "hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/60")
				),
				D(
					pe,
					1,
					"inline-flex items-center justify-center px-2.5 py-1 text-center text-xs " +
						(o(P) === "dark"
							? "bg-black text-white dark:border-white/10 dark:bg-white/80 dark:text-gray-900"
							: "hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/60")
				);
		}),
		l(u, G),
		et(),
		f();
}
at(["click", "change"]);
export { tr as component };
