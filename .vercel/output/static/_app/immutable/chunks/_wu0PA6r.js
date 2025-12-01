import {
	n as D,
	a5 as U,
	g as a,
	ae as G,
	af as $,
	e as q,
	ag as m,
	ah as C,
	ai as z,
	G as A,
	U as V,
	aj as K,
	ak as Z,
	d as F,
	x as y,
	a6 as H,
	al as J,
	S as N,
	am as j,
	an as Q,
	ao as W,
	ap as L,
	aq as X,
	ar as _,
} from "./C6vgWmgZ.js";
import { c as k, d as ee } from "./CSa6KPDp.js";
import { l as re } from "./DIeogL5L.js";
let b = !1,
	O = Symbol();
function oe(e, r, n) {
	const u = n[r] ?? (n[r] = { store: null, source: U(void 0), unsubscribe: D });
	if (u.store !== e && !(O in n))
		if ((u.unsubscribe(), (u.store = e ?? null), e == null))
			(u.source.v = void 0), (u.unsubscribe = D);
		else {
			var i = !0;
			(u.unsubscribe = k(e, (t) => {
				i ? (u.source.v = t) : q(u.source, t);
			})),
				(i = !1);
		}
	return e && O in n ? ee(e) : a(u.source);
}
function ce(e, r) {
	return e.set(r), r;
}
function pe() {
	const e = {};
	function r() {
		G(() => {
			for (var n in e) e[n].unsubscribe();
			$(e, O, { enumerable: !1, value: !0 });
		});
	}
	return [e, r];
}
function ne(e) {
	var r = b;
	try {
		return (b = !1), [e(), b];
	} finally {
		b = r;
	}
}
function de(e, r = 1) {
	const n = e();
	return e(n + r), n;
}
const ue = {
	get(e, r) {
		if (!e.exclude.includes(r)) return e.props[r];
	},
	set(e, r) {
		return !1;
	},
	getOwnPropertyDescriptor(e, r) {
		if (!e.exclude.includes(r) && r in e.props)
			return { enumerable: !0, configurable: !0, value: e.props[r] };
	},
	has(e, r) {
		return e.exclude.includes(r) ? !1 : r in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((r) => !e.exclude.includes(r));
	},
};
function _e(e, r, n) {
	return new Proxy({ props: e, exclude: r }, ue);
}
const se = {
	get(e, r) {
		if (!e.exclude.includes(r)) return a(e.version), r in e.special ? e.special[r]() : e.props[r];
	},
	set(e, r, n) {
		return (
			r in e.special ||
				(e.special[r] = te(
					{
						get [r]() {
							return e.props[r];
						},
					},
					r,
					K
				)),
			e.special[r](n),
			L(e.version),
			!0
		);
	},
	getOwnPropertyDescriptor(e, r) {
		if (!e.exclude.includes(r) && r in e.props)
			return { enumerable: !0, configurable: !0, value: e.props[r] };
	},
	deleteProperty(e, r) {
		return e.exclude.includes(r) || (e.exclude.push(r), L(e.version)), !0;
	},
	has(e, r) {
		return e.exclude.includes(r) ? !1 : r in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((r) => !e.exclude.includes(r));
	},
};
function ve(e, r) {
	return new Proxy({ props: e, exclude: r, special: {}, version: H(0) }, se);
}
const ie = {
	get(e, r) {
		let n = e.props.length;
		for (; n--; ) {
			let u = e.props[n];
			if ((_(u) && (u = u()), typeof u == "object" && u !== null && r in u)) return u[r];
		}
	},
	set(e, r, n) {
		let u = e.props.length;
		for (; u--; ) {
			let i = e.props[u];
			_(i) && (i = i());
			const t = m(i, r);
			if (t && t.set) return t.set(n), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(e, r) {
		let n = e.props.length;
		for (; n--; ) {
			let u = e.props[n];
			if ((_(u) && (u = u()), typeof u == "object" && u !== null && r in u)) {
				const i = m(u, r);
				return i && !i.configurable && (i.configurable = !0), i;
			}
		}
	},
	has(e, r) {
		if (r === N || r === j) return !1;
		for (let n of e.props) if ((_(n) && (n = n()), n != null && r in n)) return !0;
		return !1;
	},
	ownKeys(e) {
		const r = [];
		for (let n of e.props)
			if ((_(n) && (n = n()), !!n)) {
				for (const u in n) r.includes(u) || r.push(u);
				for (const u of Object.getOwnPropertySymbols(n)) r.includes(u) || r.push(u);
			}
		return r;
	},
};
function be(...e) {
	return new Proxy({ props: e }, ie);
}
function T(e) {
	var r;
	return ((r = e.ctx) == null ? void 0 : r.d) ?? !1;
}
function te(e, r, n, u) {
	var g;
	var i = (n & W) !== 0,
		t = !re || (n & Q) !== 0,
		v = (n & J) !== 0,
		B = (n & X) !== 0,
		I = !1,
		o;
	v ? ([o, I] = ne(() => e[r])) : (o = e[r]);
	var M = N in e || j in e,
		d =
			(v && (((g = m(e, r)) == null ? void 0 : g.set) ?? (M && r in e && ((s) => (e[r] = s))))) ||
			void 0,
		f = u,
		P = !0,
		h = !1,
		R = () => ((h = !0), P && ((P = !1), B ? (f = y(u)) : (f = u)), f);
	o === void 0 && u !== void 0 && (d && t && C(), (o = R()), d && d(o));
	var c;
	if (t)
		c = () => {
			var s = e[r];
			return s === void 0 ? R() : ((P = !0), (h = !1), s);
		};
	else {
		var E = (i ? A : V)(() => e[r]);
		(E.f |= z),
			(c = () => {
				var s = a(E);
				return s !== void 0 && (f = void 0), s === void 0 ? f : s;
			});
	}
	if ((n & K) === 0 && t) return c;
	if (d) {
		var Y = e.$$legacy;
		return function (s, p) {
			return arguments.length > 0 ? ((!t || !p || Y || I) && d(p ? c() : s), s) : c();
		};
	}
	var x = !1,
		S = U(o),
		l = A(() => {
			var s = c(),
				p = a(S);
			return x ? ((x = !1), p) : (S.v = s);
		});
	return (
		v && a(l),
		i || (l.equals = Z),
		function (s, p) {
			if (arguments.length > 0) {
				const w = p ? a(l) : t && v ? F(s) : s;
				if (!l.equals(w)) {
					if (((x = !0), q(S, w), h && f !== void 0 && (f = w), T(l))) return s;
					y(() => a(l));
				}
				return s;
			}
			return T(l) ? l.v : a(l);
		}
	);
}
export { oe as a, ce as b, be as c, ve as l, te as p, _e as r, pe as s, de as u };
