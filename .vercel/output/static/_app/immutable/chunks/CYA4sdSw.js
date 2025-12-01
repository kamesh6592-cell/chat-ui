import {
	R as fe,
	l as ie,
	T as K,
	O as R,
	j as A,
	P as se,
	k as ue,
	g as P,
	U as ve,
	V as te,
	W as de,
	X as W,
	Y as M,
	q as y,
	Z as ce,
	_ as Q,
	m as $,
	o as _e,
	a0 as D,
	a1 as p,
	y as oe,
	J as Z,
	a2 as O,
	a3 as z,
	a4 as V,
	a5 as he,
	a6 as F,
	a7 as Ee,
	a8 as me,
	a9 as ke,
	aa as Te,
	ab as Ae,
	H as be,
	ac as xe,
	L as Ie,
	ad as Ce,
	x as j,
	w as ee,
} from "./C6vgWmgZ.js";
import { l as ae } from "./18m15ENF.js";
function Re(e, a) {
	return a;
}
function we(e, a, r, s) {
	for (var i = [], u = a.length, t = 0; t < u; t++) ke(a[t].e, i, !0);
	var _ = u > 0 && i.length === 0 && r !== null;
	if (_) {
		var k = r.parentNode;
		Te(k), k.append(r), s.clear(), I(e, a[0].prev, a[u - 1].next);
	}
	Ae(i, () => {
		for (var h = 0; h < u; h++) {
			var c = a[h];
			_ || (s.delete(c.k), I(e, c.prev, c.next)), be(c.e, !_);
		}
	});
}
function Me(e, a, r, s, i, u = null) {
	var t = e,
		_ = { flags: a, items: new Map(), first: null },
		k = (a & K) !== 0;
	if (k) {
		var h = e;
		t = A ? R(se(h)) : h.appendChild(fe());
	}
	A && ue();
	var c = null,
		C = !1,
		f = ve(() => {
			var d = r();
			return Ee(d) ? d : d == null ? [] : p(d);
		});
	ie(() => {
		var d = P(f),
			n = d.length;
		if (C && n === 0) return;
		C = n === 0;
		let b = !1;
		if (A) {
			var E = te(t) === de;
			E !== (n === 0) && ((t = W()), R(t), M(!1), (b = !0));
		}
		if (A) {
			for (var m = null, T, o = 0; o < n; o++) {
				if (y.nodeType === 8 && y.data === ce) {
					(t = y), (b = !0), M(!1);
					break;
				}
				var l = d[o],
					v = s(l, o);
				(T = re(y, _, m, null, l, v, o, i, a, r)), _.items.set(v, T), (m = T);
			}
			n > 0 && R(W());
		}
		A || ye(d, _, t, i, a, s, r),
			u !== null &&
				(n === 0
					? c
						? Q(c)
						: (c = $(() => u(t)))
					: c !== null &&
						_e(c, () => {
							c = null;
						})),
			b && M(!0),
			P(f);
	}),
		A && (t = y);
}
function ye(e, a, r, s, i, u, t) {
	var Y, B, U, X;
	var _ = (i & me) !== 0,
		k = (i & (O | V)) !== 0,
		h = e.length,
		c = a.items,
		C = a.first,
		f = C,
		d,
		n = null,
		b,
		E = [],
		m = [],
		T,
		o,
		l,
		v;
	if (_)
		for (v = 0; v < h; v += 1)
			(T = e[v]),
				(o = u(T, v)),
				(l = c.get(o)),
				l !== void 0 && ((Y = l.a) == null || Y.measure(), (b ?? (b = new Set())).add(l));
	for (v = 0; v < h; v += 1) {
		if (((T = e[v]), (o = u(T, v)), (l = c.get(o)), l === void 0)) {
			var ne = f ? f.e.nodes_start : r;
			(n = re(ne, a, n, n === null ? a.first : n.next, T, o, v, s, i, t)),
				c.set(o, n),
				(E = []),
				(m = []),
				(f = n.next);
			continue;
		}
		if (
			(k && Se(l, T, v, i),
			(l.e.f & D) !== 0 &&
				(Q(l.e), _ && ((B = l.a) == null || B.unfix(), (b ?? (b = new Set())).delete(l))),
			l !== f)
		) {
			if (d !== void 0 && d.has(l)) {
				if (E.length < m.length) {
					var S = m[0],
						x;
					n = S.prev;
					var q = E[0],
						H = E[E.length - 1];
					for (x = 0; x < E.length; x += 1) G(E[x], S, r);
					for (x = 0; x < m.length; x += 1) d.delete(m[x]);
					I(a, q.prev, H.next),
						I(a, n, q),
						I(a, H, S),
						(f = S),
						(n = H),
						(v -= 1),
						(E = []),
						(m = []);
				} else
					d.delete(l),
						G(l, f, r),
						I(a, l.prev, l.next),
						I(a, l, n === null ? a.first : n.next),
						I(a, n, l),
						(n = l);
				continue;
			}
			for (E = [], m = []; f !== null && f.k !== o; )
				(f.e.f & D) === 0 && (d ?? (d = new Set())).add(f), m.push(f), (f = f.next);
			if (f === null) continue;
			l = f;
		}
		E.push(l), (n = l), (f = l.next);
	}
	if (f !== null || d !== void 0) {
		for (var w = d === void 0 ? [] : p(d); f !== null; )
			(f.e.f & D) === 0 && w.push(f), (f = f.next);
		var N = w.length;
		if (N > 0) {
			var le = (i & K) !== 0 && h === 0 ? r : null;
			if (_) {
				for (v = 0; v < N; v += 1) (U = w[v].a) == null || U.measure();
				for (v = 0; v < N; v += 1) (X = w[v].a) == null || X.fix();
			}
			we(a, w, le, c);
		}
	}
	_ &&
		oe(() => {
			var J;
			if (b !== void 0) for (l of b) (J = l.a) == null || J.apply();
		}),
		(Z.first = a.first && a.first.e),
		(Z.last = n && n.e);
}
function Se(e, a, r, s) {
	(s & O) !== 0 && z(e.v, a), (s & V) !== 0 ? z(e.i, r) : (e.i = r);
}
function re(e, a, r, s, i, u, t, _, k, h) {
	var c = (k & O) !== 0,
		C = (k & xe) === 0,
		f = c ? (C ? he(i) : F(i)) : i,
		d = (k & V) === 0 ? t : F(t),
		n = { i: d, v: f, k: u, a: null, e: null, prev: r, next: s };
	try {
		return (
			(n.e = $(() => _(e, f, d, h), A)),
			(n.e.prev = r && r.e),
			(n.e.next = s && s.e),
			r === null ? (a.first = n) : ((r.next = n), (r.e.next = n.e)),
			s !== null && ((s.prev = n), (s.e.prev = n.e)),
			n
		);
	} finally {
	}
}
function G(e, a, r) {
	for (
		var s = e.next ? e.next.e.nodes_start : r, i = a ? a.e.nodes_start : r, u = e.e.nodes_start;
		u !== s;

	) {
		var t = Ie(u);
		i.before(u), (u = t);
	}
}
function I(e, a, r) {
	a === null ? (e.first = r) : ((a.next = r), (a.e.next = r && r.e)),
		r !== null && ((r.prev = a), (r.e.prev = a && a.e));
}
function De(e, a, r = a) {
	var s = Ce();
	ae(e, "input", (i) => {
		var u = i ? e.defaultValue : e.value;
		if (((u = g(e) ? L(u) : u), r(u), s && u !== (u = a()))) {
			var t = e.selectionStart,
				_ = e.selectionEnd;
			(e.value = u ?? ""),
				_ !== null && ((e.selectionStart = t), (e.selectionEnd = Math.min(_, e.value.length)));
		}
	}),
		((A && e.defaultValue !== e.value) || (j(a) == null && e.value)) &&
			r(g(e) ? L(e.value) : e.value),
		ee(() => {
			var i = a();
			(g(e) && i === L(e.value)) ||
				(e.type === "date" && !i && !e.value) ||
				(i !== e.value && (e.value = i ?? ""));
		});
}
function ge(e, a, r = a) {
	ae(e, "change", (s) => {
		var i = s ? e.defaultChecked : e.checked;
		r(i);
	}),
		((A && e.defaultChecked !== e.checked) || j(a) == null) && r(e.checked),
		ee(() => {
			var s = a();
			e.checked = !!s;
		});
}
function g(e) {
	var a = e.type;
	return a === "number" || a === "range";
}
function L(e) {
	return e === "" ? null : +e;
}
export { De as a, ge as b, Me as e, Re as i };
