import "./CWj6FrbW.js";
import "./69_IOA4Y.js";
import {
	J as q,
	E as rt,
	aF as it,
	aG as ot,
	v as nt,
	x as st,
	aH as ct,
	aI as dt,
	aJ as ft,
	ar as lt,
	y as vt,
	n as C,
	aw as G,
	ax as J,
	ay as ut,
	p as Z,
	a as $,
	g as x,
	b as P,
	c as T,
	r as F,
	e as z,
	s as K,
	t as U,
} from "./C6vgWmgZ.js";
import { f as O, a as N, b as _t } from "./CGwGH024.js";
import { h as mt } from "./6DPKqfPG.js";
import { a as ht, s as H, d as W } from "./3bvnQgV4.js";
import { l as bt, p as B } from "./_wu0PA6r.js";
import { o as tt, e as at } from "./CSa6KPDp.js";
import { c as wt, w as yt, d as gt, i as M } from "./18m15ENF.js";
import { s as R } from "./CnTZH1bt.js";
import { b as L } from "./CDRdzyOh.js";
import { C as Q } from "./OwagsJha.js";
const kt = () => performance.now(),
	E = { tick: (a) => requestAnimationFrame(a), now: () => kt(), tasks: new Set() };
function et() {
	const a = E.now();
	E.tasks.forEach((t) => {
		t.c(a) || (E.tasks.delete(t), t.f());
	}),
		E.tasks.size !== 0 && E.tick(et);
}
function xt(a) {
	let t;
	return (
		E.tasks.size === 0 && E.tick(et),
		{
			promise: new Promise((e) => {
				E.tasks.add((t = { c: a, f: e }));
			}),
			abort() {
				E.tasks.delete(t);
			},
		}
	);
}
function S(a, t) {
	yt(() => {
		a.dispatchEvent(new CustomEvent(t));
	});
}
function Et(a) {
	if (a === "float") return "cssFloat";
	if (a === "offset") return "cssOffset";
	if (a.startsWith("--")) return a;
	const t = a.split("-");
	return t.length === 1
		? t[0]
		: t[0] +
				t
					.slice(1)
					.map((e) => e[0].toUpperCase() + e.slice(1))
					.join("");
}
function V(a) {
	const t = {},
		e = a.split(";");
	for (const r of e) {
		const [s, n] = r.split(":");
		if (!s || n === void 0) break;
		const _ = Et(s.trim());
		t[_] = n.trim();
	}
	return t;
}
const pt = (a) => a;
function X(a, t, e, r) {
	var s = (a & dt) !== 0,
		n = (a & ft) !== 0,
		_ = s && n,
		h = (a & ct) !== 0,
		g = _ ? "both" : s ? "in" : "out",
		y,
		i = t.inert,
		m = t.style.overflow,
		o,
		f;
	function k() {
		var u = ut,
			p = q;
		G(null), J(null);
		try {
			return y ?? (y = e()(t, (r == null ? void 0 : r()) ?? {}, { direction: g }));
		} finally {
			G(u), J(p);
		}
	}
	var l = {
			is_global: h,
			in() {
				var u;
				if (((t.inert = i), !s)) {
					f == null || f.abort(), (u = f == null ? void 0 : f.reset) == null || u.call(f);
					return;
				}
				n || o == null || o.abort(),
					S(t, "introstart"),
					(o = D(t, k(), f, 1, () => {
						S(t, "introend"), o == null || o.abort(), (o = y = void 0), (t.style.overflow = m);
					}));
			},
			out(u) {
				if (!n) {
					u == null || u(), (y = void 0);
					return;
				}
				(t.inert = !0),
					S(t, "outrostart"),
					(f = D(t, k(), o, 0, () => {
						S(t, "outroend"), u == null || u();
					}));
			},
			stop: () => {
				o == null || o.abort(), f == null || f.abort();
			},
		},
		d = q;
	if (((d.transitions ?? (d.transitions = [])).push(l), s && wt)) {
		var c = h;
		if (!c) {
			for (var v = d.parent; v && (v.f & rt) !== 0; ) for (; (v = v.parent) && (v.f & it) === 0; );
			c = !v || (v.f & ot) !== 0;
		}
		c &&
			nt(() => {
				st(() => l.in());
			});
	}
}
function D(a, t, e, r, s) {
	var n = r === 1;
	if (lt(t)) {
		var _,
			h = !1;
		return (
			vt(() => {
				if (!h) {
					var d = t({ direction: n ? "in" : "out" });
					_ = D(a, d, e, r, s);
				}
			}),
			{
				abort: () => {
					(h = !0), _ == null || _.abort();
				},
				deactivate: () => _.deactivate(),
				reset: () => _.reset(),
				t: () => _.t(),
			}
		);
	}
	if ((e == null || e.deactivate(), !(t != null && t.duration)))
		return s(), { abort: C, deactivate: C, reset: C, t: () => r };
	const { delay: g = 0, css: y, tick: i, easing: m = pt } = t;
	var o = [];
	if (n && e === void 0 && (i && i(0, 1), y)) {
		var f = V(y(0, 1));
		o.push(f, f);
	}
	var k = () => 1 - r,
		l = a.animate(o, { duration: g, fill: "forwards" });
	return (
		(l.onfinish = () => {
			l.cancel();
			var d = (e == null ? void 0 : e.t()) ?? 1 - r;
			e == null || e.abort();
			var c = r - d,
				v = t.duration * Math.abs(c),
				u = [];
			if (v > 0) {
				var p = !1;
				if (y)
					for (var b = Math.ceil(v / 16.666666666666668), w = 0; w <= b; w += 1) {
						var I = d + c * m(w / b),
							j = V(y(I, 1 - I));
						u.push(j), p || (p = j.overflow === "hidden");
					}
				p && (a.style.overflow = "hidden"),
					(k = () => {
						var A = l.currentTime;
						return d + c * m(A / v);
					}),
					i &&
						xt(() => {
							if (l.playState !== "running") return !1;
							var A = k();
							return i(A, 1 - A), !0;
						});
			}
			(l = a.animate(u, { duration: v, fill: "forwards" })),
				(l.onfinish = () => {
					(k = () => r), i == null || i(r, 1 - r), s();
				});
		}),
		{
			abort: () => {
				l && (l.cancel(), (l.effect = null), (l.onfinish = C));
			},
			deactivate: () => {
				s = C;
			},
			reset: () => {
				r === 0 && (i == null || i(1, 0));
			},
			t: () => k(),
		}
	);
}
const Ct = (a) => a;
function Tt(a) {
	const t = a - 1;
	return t * t * t + 1;
}
function Y(a) {
	const t = typeof a == "string" && a.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return t ? [parseFloat(t[1]), t[2] || "px"] : [a, "px"];
}
function Ft(a, { delay: t = 0, duration: e = 400, easing: r = Ct } = {}) {
	const s = +getComputedStyle(a).opacity;
	return { delay: t, duration: e, easing: r, css: (n) => `opacity: ${n * s}` };
}
function Nt(
	a,
	{ delay: t = 0, duration: e = 400, easing: r = Tt, x: s = 0, y: n = 0, opacity: _ = 0 } = {}
) {
	const h = getComputedStyle(a),
		g = +h.opacity,
		y = h.transform === "none" ? "" : h.transform,
		i = g * (1 - _),
		[m, o] = Y(s),
		[f, k] = Y(n);
	return {
		delay: t,
		duration: e,
		easing: r,
		css: (l, d) => `
			transform: ${y} translate(${(1 - l) * m}${o}, ${(1 - l) * f}${k});
			opacity: ${g - i * d}`,
	};
}
var It = O('<div class="contents" hidden><!></div>');
function Ot(a, t) {
	Z(t, !0);
	let e = P(void 0);
	tt(() => {
		var n;
		(n = x(e)) == null || n.ownerDocument.body.appendChild(x(e));
	}),
		at(() => {
			var n;
			(n = x(e)) != null && n.parentNode && x(e).parentNode.removeChild(x(e));
		});
	var r = It(),
		s = T(r);
	R(s, () => t.children ?? C),
		F(r),
		L(
			r,
			(n) => z(e, n),
			() => x(e)
		),
		N(a, r),
		$();
}
var At = _t("<svg><!></svg>");
function $t(a, t) {
	const e = bt(t, ["children", "$$slots", "$$events", "$$legacy"]);
	var r = At();
	ht(r, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...e }));
	var s = T(r);
	mt(
		s,
		() => '<path fill="currentColor" d="m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9z"/>',
		!0
	),
		F(r),
		N(a, r);
}
function ta(a) {
	return a < 0.5 ? 4 * a * a * a : 0.5 * Math.pow(2 * a - 2, 3) + 1;
}
function Bt(a) {
	const t = a - 1;
	return t * t * t + 1;
}
var St = (a, t) => {
		a.stopPropagation(), t(a);
	},
	zt = (a, t) => {
		var e;
		return (e = t.onclose) == null ? void 0 : e.call(t);
	},
	Lt = O('<button class="absolute right-4 top-4 z-50"><!></button>'),
	Mt = O('<div role="dialog" tabindex="-1"><!> <!></div>'),
	Pt = (a, t) => {
		var e;
		return (e = t.onclose) == null ? void 0 : e.call(t);
	},
	Rt = O('<button class="absolute right-4 top-4 z-50"><!></button>'),
	Dt = O('<div role="dialog" tabindex="-1"><!> <!></div>'),
	jt = O(
		'<div role="presentation" tabindex="-1" class="fixed inset-0 z-40 flex items-center justify-center bg-black/80 backdrop-blur-sm dark:bg-black/50"><!></div>'
	);
function aa(a, t) {
	Z(t, !0);
	let e = B(t, "width", 3, "max-w-sm"),
		r = B(t, "closeButton", 3, !1),
		s = B(t, "disableFly", 3, !1),
		n = B(t, "closeOnBackdrop", 3, !0),
		_ = P(void 0),
		h = P(void 0);
	function g(i) {
		var m;
		i.key === "Escape" && (i.preventDefault(), (m = t.onclose) == null || m.call(t));
	}
	function y(i) {
		var m, o;
		((m = window == null ? void 0 : window.getSelection()) != null && m.toString()) ||
			(i.target === x(_) && n() && ((o = t.onclose) == null || o.call(t)));
	}
	tt(() => {
		var i, m;
		(i = document.getElementById("app")) == null || i.setAttribute("inert", "true"),
			(m = x(h)) == null || m.focus(),
			window.addEventListener("keydown", g, { capture: !0 });
	}),
		at(() => {
			var i;
			(i = document.getElementById("app")) == null || i.removeAttribute("inert"),
				window.removeEventListener("keydown", g, { capture: !0 });
		}),
		Ot(a, {
			children: (i, m) => {
				var o = jt();
				o.__click = [St, y];
				var f = T(o);
				{
					var k = (d) => {
							var c = Mt();
							c.__keydown = g;
							var v = T(c);
							{
								var u = (b) => {
									var w = Lt();
									w.__click = [zt, t];
									var I = T(w);
									Q(I, { class: "size-6 text-gray-700 dark:text-gray-300" }), F(w), N(b, w);
								};
								M(v, (b) => {
									r() && b(u);
								});
							}
							var p = K(v, 2);
							R(p, () => t.children ?? C),
								F(c),
								L(
									c,
									(b) => z(h, b),
									() => x(h)
								),
								U(() =>
									H(
										c,
										1,
										W([
											"scrollbar-custom relative mx-auto max-h-[95dvh] max-w-[90dvw] overflow-y-auto overflow-x-hidden rounded-2xl bg-white shadow-2xl outline-none dark:bg-gray-800 dark:text-gray-200",
											e(),
										])
									)
								),
								N(d, c);
						},
						l = (d) => {
							var c = Dt();
							c.__keydown = g;
							var v = T(c);
							{
								var u = (b) => {
									var w = Rt();
									w.__click = [Pt, t];
									var I = T(w);
									Q(I, { class: "size-6 text-gray-700 dark:text-gray-300" }), F(w), N(b, w);
								};
								M(v, (b) => {
									r() && b(u);
								});
							}
							var p = K(v, 2);
							R(p, () => t.children ?? C),
								F(c),
								L(
									c,
									(b) => z(h, b),
									() => x(h)
								),
								U(() =>
									H(
										c,
										1,
										W([
											"scrollbar-custom relative mx-auto max-h-[95dvh] max-w-[90dvw] overflow-y-auto overflow-x-hidden rounded-2xl bg-white shadow-2xl outline-none dark:bg-gray-800 dark:text-gray-200",
											e(),
										])
									)
								),
								X(
									1,
									c,
									() => Nt,
									() => ({ y: 100 })
								),
								N(d, c);
						};
					M(f, (d) => {
						s() ? d(k) : d(l, !1);
					});
				}
				F(o),
					L(
						o,
						(d) => z(_, d),
						() => x(_)
					),
					X(
						3,
						o,
						() => Ft,
						() => ({ easing: Bt, duration: 300 })
					),
					N(i, o);
			},
			$$slots: { default: !0 },
		}),
		$();
}
gt(["click", "keydown"]);
export { $t as C, aa as M, Ot as P, Nt as a, ta as c, Ft as f, xt as l, E as r, X as t };
