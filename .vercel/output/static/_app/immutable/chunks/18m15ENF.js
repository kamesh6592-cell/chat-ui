import {
	y as W,
	j as _,
	P,
	aa as Y,
	aw as A,
	ax as k,
	ay as B,
	J as C,
	ae as z,
	af as x,
	a7 as ee,
	R as U,
	l as Z,
	az as te,
	aA as M,
	L as N,
	Y as E,
	O as T,
	q as y,
	aB as R,
	N as I,
	k as $,
	Z as re,
	M as ae,
	aC as ne,
	a1 as se,
	aD as ie,
	m as S,
	p as oe,
	z as ue,
	a as fe,
	E as le,
	V as ce,
	W as de,
	X as _e,
	_ as q,
	o as H,
	aE as ve,
} from "./C6vgWmgZ.js";
import { d as pe } from "./CGwGH024.js";
function Ae(e) {
	return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const he = [
	"beforeinput",
	"click",
	"change",
	"dblclick",
	"contextmenu",
	"focusin",
	"focusout",
	"input",
	"keydown",
	"keyup",
	"mousedown",
	"mousemove",
	"mouseout",
	"mouseover",
	"mouseup",
	"pointerdown",
	"pointermove",
	"pointerout",
	"pointerover",
	"pointerup",
	"touchend",
	"touchmove",
	"touchstart",
];
function ke(e) {
	return he.includes(e);
}
const Ee = {
	formnovalidate: "formNoValidate",
	ismap: "isMap",
	nomodule: "noModule",
	playsinline: "playsInline",
	readonly: "readOnly",
	defaultvalue: "defaultValue",
	defaultchecked: "defaultChecked",
	srcobject: "srcObject",
	novalidate: "noValidate",
	allowfullscreen: "allowFullscreen",
	disablepictureinpicture: "disablePictureInPicture",
	disableremoteplayback: "disableRemotePlayback",
};
function Ie(e) {
	return (e = e.toLowerCase()), Ee[e] ?? e;
}
const ye = ["touchstart", "touchmove"];
function be(e) {
	return ye.includes(e);
}
function Ne(e, t) {
	if (t) {
		const r = document.body;
		(e.autofocus = !0),
			W(() => {
				document.activeElement === r && e.focus();
			});
	}
}
function Re(e) {
	_ && P(e) !== null && Y(e);
}
let j = !1;
function ge() {
	j ||
		((j = !0),
		document.addEventListener(
			"reset",
			(e) => {
				Promise.resolve().then(() => {
					var t;
					if (!e.defaultPrevented)
						for (const r of e.target.elements) (t = r.__on_r) == null || t.call(r);
				});
			},
			{ capture: !0 }
		));
}
function Se(e, t, r, n = !0) {
	n && r();
	for (var s of t) e.addEventListener(s, r);
	z(() => {
		for (var a of t) e.removeEventListener(a, r);
	});
}
function G(e) {
	var t = B,
		r = C;
	A(null), k(null);
	try {
		return e();
	} finally {
		A(t), k(r);
	}
}
function De(e, t, r, n = r) {
	e.addEventListener(t, () => G(r));
	const s = e.__on_r;
	s
		? (e.__on_r = () => {
				s(), n(!0);
			})
		: (e.__on_r = () => n(!0)),
		ge();
}
const J = new Set(),
	D = new Set();
function Oe(e) {
	if (!_) return;
	e.removeAttribute("onload"), e.removeAttribute("onerror");
	const t = e.__e;
	t !== void 0 &&
		((e.__e = void 0),
		queueMicrotask(() => {
			e.isConnected && e.dispatchEvent(t);
		}));
}
function X(e, t, r, n = {}) {
	function s(a) {
		if ((n.capture || w.call(t, a), !a.cancelBubble))
			return G(() => (r == null ? void 0 : r.call(this, a)));
	}
	return (
		e.startsWith("pointer") || e.startsWith("touch") || e === "wheel"
			? W(() => {
					t.addEventListener(e, s, n);
				})
			: t.addEventListener(e, s, n),
		s
	);
}
function Pe(e, t, r, n = {}) {
	var s = X(t, e, r, n);
	return () => {
		e.removeEventListener(t, s, n);
	};
}
function Ce(e, t, r, n, s) {
	var a = { capture: n, passive: s },
		u = X(e, t, r, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) &&
		z(() => {
			t.removeEventListener(e, u, a);
		});
}
function Me(e) {
	for (var t = 0; t < e.length; t++) J.add(e[t]);
	for (var r of D) r(e);
}
function w(e) {
	var V;
	var t = this,
		r = t.ownerDocument,
		n = e.type,
		s = ((V = e.composedPath) == null ? void 0 : V.call(e)) || [],
		a = s[0] || e.target,
		u = 0,
		l = e.__root;
	if (l) {
		var p = s.indexOf(l);
		if (p !== -1 && (t === document || t === window)) {
			e.__root = t;
			return;
		}
		var v = s.indexOf(t);
		if (v === -1) return;
		p <= v && (u = p);
	}
	if (((a = s[u] || e.target), a !== t)) {
		x(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || r;
			},
		});
		var g = B,
			f = C;
		A(null), k(null);
		try {
			for (var o, i = []; a !== null; ) {
				var c = a.assignedSlot || a.parentNode || a.host || null;
				try {
					var h = a["__" + n];
					if (h != null && (!a.disabled || e.target === a))
						if (ee(h)) {
							var [m, ...Q] = h;
							m.apply(a, [e, ...Q]);
						} else h.call(a, e);
				} catch (L) {
					o ? i.push(L) : (o = L);
				}
				if (e.cancelBubble || c === t || c === null) break;
				a = c;
			}
			if (o) {
				for (let L of i)
					queueMicrotask(() => {
						throw L;
					});
				throw o;
			}
		} finally {
			(e.__root = t), delete e.currentTarget, A(g), k(f);
		}
	}
}
let d;
function me() {
	d = void 0;
}
function Ve(e) {
	let t = null,
		r = _;
	var n;
	if (_) {
		for (
			t = y, d === void 0 && (d = P(document.head));
			d !== null && (d.nodeType !== 8 || d.data !== M);

		)
			d = N(d);
		d === null ? E(!1) : (d = T(N(d)));
	}
	_ || (n = document.head.appendChild(U()));
	try {
		Z(() => e(n), te);
	} finally {
		r && (E(!0), (d = y), T(t));
	}
}
let F = !0;
function qe(e, t) {
	var r = t == null ? "" : typeof t == "object" ? t + "" : t;
	r !== (e.__t ?? (e.__t = e.nodeValue)) && ((e.__t = r), (e.nodeValue = r + ""));
}
function we(e, t) {
	return K(e, t);
}
function He(e, t) {
	R(), (t.intro = t.intro ?? !1);
	const r = t.target,
		n = _,
		s = y;
	try {
		for (var a = P(r); a && (a.nodeType !== 8 || a.data !== M); ) a = N(a);
		if (!a) throw I;
		E(!0), T(a), $();
		const u = K(e, { ...t, anchor: a });
		if (y === null || y.nodeType !== 8 || y.data !== re) throw (ae(), I);
		return E(!1), u;
	} catch (u) {
		if (u === I) return t.recover === !1 && ne(), R(), Y(r), E(!1), we(e, t);
		throw u;
	} finally {
		E(n), T(s), me();
	}
}
const b = new Map();
function K(e, { target: t, anchor: r, props: n = {}, events: s, context: a, intro: u = !0 }) {
	R();
	var l = new Set(),
		p = (f) => {
			for (var o = 0; o < f.length; o++) {
				var i = f[o];
				if (!l.has(i)) {
					l.add(i);
					var c = be(i);
					t.addEventListener(i, w, { passive: c });
					var h = b.get(i);
					h === void 0
						? (document.addEventListener(i, w, { passive: c }), b.set(i, 1))
						: b.set(i, h + 1);
				}
			}
		};
	p(se(J)), D.add(p);
	var v = void 0,
		g = ie(() => {
			var f = r ?? t.appendChild(U());
			return (
				S(() => {
					if (a) {
						oe({});
						var o = ue;
						o.c = a;
					}
					s && (n.$$events = s),
						_ && pe(f, null),
						(F = u),
						(v = e(f, n) || {}),
						(F = !0),
						_ && (C.nodes_end = y),
						a && fe();
				}),
				() => {
					var c;
					for (var o of l) {
						t.removeEventListener(o, w);
						var i = b.get(o);
						--i === 0 ? (document.removeEventListener(o, w), b.delete(o)) : b.set(o, i);
					}
					D.delete(p), f !== r && ((c = f.parentNode) == null || c.removeChild(f));
				}
			);
		});
	return O.set(v, g), v;
}
let O = new WeakMap();
function je(e, t) {
	const r = O.get(e);
	return r ? (O.delete(e), r(t)) : Promise.resolve();
}
function Fe(e, t, [r, n] = [0, 0]) {
	_ && r === 0 && $();
	var s = e,
		a = null,
		u = null,
		l = ve,
		p = r > 0 ? le : 0,
		v = !1;
	const g = (o, i = !0) => {
			(v = !0), f(i, o);
		},
		f = (o, i) => {
			if (l === (l = o)) return;
			let c = !1;
			if (_ && n !== -1) {
				if (r === 0) {
					const m = ce(s);
					m === M
						? (n = 0)
						: m === de
							? (n = 1 / 0)
							: ((n = parseInt(m.substring(1))), n !== n && (n = l ? 1 / 0 : -1));
				}
				const h = n > r;
				!!l === h && ((s = _e()), T(s), E(!1), (c = !0), (n = -1));
			}
			l
				? (a ? q(a) : i && (a = S(() => i(s))),
					u &&
						H(u, () => {
							u = null;
						}))
				: (u ? q(u) : i && (u = S(() => i(s, [r + 1, n]))),
					a &&
						H(a, () => {
							a = null;
						})),
				c && E(!0);
		};
	Z(() => {
		(v = !1), t(g), v || f(null, null);
	}, p),
		_ && (s = y);
}
export {
	Oe as a,
	He as b,
	F as c,
	Me as d,
	Ce as e,
	Ae as f,
	X as g,
	Ve as h,
	Fe as i,
	Ne as j,
	ge as k,
	De as l,
	we as m,
	Ie as n,
	ke as o,
	Se as p,
	Pe as q,
	Re as r,
	qe as s,
	je as u,
	G as w,
};
