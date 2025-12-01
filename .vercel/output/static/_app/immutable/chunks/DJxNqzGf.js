var zm = Object.defineProperty;
var Bm = Object.getPrototypeOf;
var Pm = Reflect.get;
var od = (r) => {
	throw TypeError(r);
};
var Fm = (r, e, t) =>
	e in r ? zm(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (r[e] = t);
var Se = (r, e, t) => Fm(r, typeof e != "symbol" ? e + "" : e, t),
	Ml = (r, e, t) => e.has(r) || od("Cannot " + t);
var w = (r, e, t) => (Ml(r, e, "read from private field"), t ? t.call(r) : e.get(r)),
	W = (r, e, t) =>
		e.has(r)
			? od("Cannot add the same private member more than once")
			: e instanceof WeakSet
				? e.add(r)
				: e.set(r, t),
	Ye = (r, e, t, n) => (Ml(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t),
	_t = (r, e, t) => (Ml(r, e, "access private method"), t);
var sd = (r, e, t) => Pm(Bm(r), t, e);
import "./CWj6FrbW.js";
import { o as _s, b as Oa, a as qm, e as Ki, h as Um, w as Hm } from "./CSa6KPDp.js";
import {
	aP as Gm,
	j as bi,
	k as G1,
	ad as W1,
	l as V1,
	aX as ld,
	W as Wm,
	X as Vm,
	O as Km,
	Y as cd,
	aE as nc,
	a3 as Cl,
	a6 as Qn,
	a5 as ud,
	y as Ym,
	q as K1,
	ax as dd,
	aw as hd,
	aY as fd,
	z as Xm,
	_ as md,
	m as e0,
	o as t0,
	av as Zm,
	aZ as jm,
	a_ as Y1,
	v as Vc,
	x as ni,
	w as ul,
	F as Jm,
	ae as X1,
	e as F,
	a$ as Qm,
	g as m,
	i as bn,
	c as L,
	r as O,
	u as j,
	b as Ee,
	d as cn,
	b0 as $m,
	I as pd,
	aS as ep,
	A as tp,
	B as Rt,
	f as pe,
	n as Qt,
	p as yt,
	b1 as rp,
	a as xt,
	aW as Kc,
	s as X,
	U as mo,
	t as Me,
	h as ar,
	aT as lo,
	aU as gd,
} from "./C6vgWmgZ.js";
import {
	p as np,
	q as yr,
	i as ne,
	m as ap,
	u as ip,
	d as Mr,
	e as dr,
	s as ut,
	r as Yc,
	a as op,
} from "./18m15ENF.js";
import { a as Z1, e as Tr, i as sn } from "./CYA4sdSw.js";
import { b as or, a as C, c as He, f as Z, p as si, t as f0 } from "./CGwGH024.js";
import {
	a as zt,
	h as Ol,
	r as j1,
	b as qt,
	s as Tt,
	d as ti,
	f as sp,
	e as Xc,
	j as lp,
	u as cp,
} from "./3bvnQgV4.js";
import { M as ks, t as Zc, f as J1, C as up, c as dp, a as hp } from "./zLvdPMOW.js";
import { b as vn } from "./CDRdzyOh.js";
import { l as Cr, p as q, c as ai, r as _n, s as Q1, a as r0 } from "./_wu0PA6r.js";
import { I as Nl } from "./B9mu6Rtg.js";
import "./69_IOA4Y.js";
import { h as wr } from "./6DPKqfPG.js";
import { s as It } from "./CnTZH1bt.js";
import { c as Rr } from "./DYGgpYWv.js";
import {
	r as Bn,
	b as fp,
	A as mp,
	I as pp,
	t as gp,
	g as vd,
	d as bd,
	f as vp,
	c as bp,
	M as ac,
	h as yi,
	L as yp,
	s as Rl,
} from "./Djt0-lxN.js";
import { C as m0 } from "./OwagsJha.js";
import { p as br, n as yd } from "./lmEnKYxK.js";
import { u as $1 } from "./Da9RVyMh.js";
import { a as xp, C as jc, P as wp } from "./60oP_XVD.js";
import { _ as _p, M as kp } from "./BMNPVVsa.js";
import { g as eh } from "./BJid9-HC.js";
import { C as th } from "./wt6lPunf.js";
import { T as rh } from "./Cbtu-SQV.js";
import { b as Sp } from "./C6o0iJkr.js";
function Ep() {
	return Symbol(Gm);
}
const Il = 0,
	Bs = 1,
	Dl = 2;
function nh(r, e, t, n, a) {
	bi && G1();
	var i = r,
		o = W1(),
		s = Xm,
		l = nc,
		u,
		h,
		f,
		p = (o ? Qn : ud)(void 0),
		g = (o ? Qn : ud)(void 0),
		y = !1;
	function x(k, T) {
		(y = !0), T && (dd(_), hd(_), fd(s));
		try {
			k === Il && t && (u ? md(u) : (u = e0(() => t(i)))),
				k === Bs && n && (h ? md(h) : (h = e0(() => n(i, p)))),
				k !== Il && u && t0(u, () => (u = null)),
				k !== Bs && h && t0(h, () => (h = null)),
				k !== Dl && f && t0(f, () => (f = null));
		} finally {
			T && (fd(null), hd(null), dd(null), Zm());
		}
	}
	var _ = V1(() => {
		if (l === (l = e())) return;
		let k = bi && ld(l) === (i.data === Wm);
		if ((k && ((i = Vm()), Km(i), cd(!1), (k = !0)), ld(l))) {
			var T = l;
			(y = !1),
				T.then(
					(B) => {
						T === l && (Cl(p, B), x(Bs, !0));
					},
					(B) => {
						if (T === l) throw (Cl(g, B), x(Dl, !0), g.v);
					}
				),
				bi
					? t && (u = e0(() => t(i)))
					: Ym(() => {
							y || x(Il, !0);
						});
		} else Cl(p, l), x(Bs, !1);
		return k && cd(!0), () => (l = nc);
	});
	bi && (i = K1);
}
function ah(r, e, t) {
	bi && G1();
	var n = r,
		a = nc,
		i,
		o = W1() ? jm : Y1;
	V1(() => {
		o(a, (a = e())) && (i && t0(i), (i = e0(() => t(n))));
	}),
		bi && (n = K1);
}
function Tp(r, e, t) {
	Vc(() => {
		var n = ni(() => e(r, t == null ? void 0 : t()) || {});
		if (t && n != null && n.update) {
			var a = !1,
				i = {};
			ul(() => {
				var o = t();
				Jm(o), a && Y1(i, o) && ((i = o), n.update(o));
			}),
				(a = !0);
		}
		if (n != null && n.destroy) return () => n.destroy();
	});
}
function Ap(r, e, t = e) {
	var n,
		a,
		i = () => {
			cancelAnimationFrame(n), r.paused || (n = requestAnimationFrame(i));
			var o = r.currentTime;
			a !== o && t((a = o));
		};
	(n = requestAnimationFrame(i)),
		r.addEventListener("timeupdate", i),
		ul(() => {
			var o = Number(e());
			a !== o && !isNaN(o) && (r.currentTime = a = o);
		}),
		X1(() => {
			cancelAnimationFrame(n), r.removeEventListener("timeupdate", i);
		});
}
function Mp(r, e, t = e) {
	var n = e(),
		a = () => {
			n !== r.paused && t((n = r.paused));
		};
	np(r, ["play", "pause", "canplay"], a, n == null),
		Vc(() => {
			(n = !!e()) !== r.paused &&
				(n
					? r.pause()
					: r.play().catch(() => {
							t((n = !0));
						}));
		});
}
var ba, ki, wo, P0, ih;
const F0 = class F0 {
	constructor(e) {
		W(this, P0);
		W(this, ba, new WeakMap());
		W(this, ki);
		W(this, wo);
		Ye(this, wo, e);
	}
	observe(e, t) {
		var n = w(this, ba).get(e) || new Set();
		return (
			n.add(t),
			w(this, ba).set(e, n),
			_t(this, P0, ih).call(this).observe(e, w(this, wo)),
			() => {
				var a = w(this, ba).get(e);
				a.delete(t), a.size === 0 && (w(this, ba).delete(e), w(this, ki).unobserve(e));
			}
		);
	}
};
(ba = new WeakMap()),
	(ki = new WeakMap()),
	(wo = new WeakMap()),
	(P0 = new WeakSet()),
	(ih = function () {
		return (
			w(this, ki) ??
			Ye(
				this,
				ki,
				new ResizeObserver((e) => {
					for (var t of e) {
						F0.entries.set(t.target, t);
						for (var n of w(this, ba).get(t.target) || []) n(t);
					}
				})
			)
		);
	}),
	Se(F0, "entries", new WeakMap());
let ic = F0;
var Cp = new ic({ box: "border-box" });
function xd(r, e, t) {
	var n = Cp.observe(r, () => t(r[e]));
	Vc(() => (ni(() => t(r[e])), n));
}
function oh(r, e, t, n, a) {
	var i = () => {
		n(t[r]);
	};
	t.addEventListener(e, i),
		a
			? ul(() => {
					t[r] = a();
				})
			: i(),
		(t === document.body || t === window || t === document) &&
			X1(() => {
				t.removeEventListener(e, i);
			});
}
function gi(r) {
	F(r, r.v + 1);
}
function sh(r) {
	let e = 0,
		t = Qn(0),
		n;
	return () => {
		Qm() &&
			(m(t),
			ul(
				() => (
					e === 0 && (n = ni(() => r(() => gi(t)))),
					(e += 1),
					() => {
						bn().then(() => {
							(e -= 1), e === 0 && (n == null || n(), (n = void 0));
						});
					}
				)
			));
	};
}
var Mn, Cn, ea, Si, n0;
const Pu = class Pu extends Map {
	constructor(t) {
		super();
		W(this, Si);
		W(this, Mn, new Map());
		W(this, Cn, Qn(0));
		W(this, ea, Qn(0));
		if (t) {
			for (var [n, a] of t) super.set(n, a);
			w(this, ea).v = super.size;
		}
	}
	has(t) {
		var n = w(this, Mn),
			a = n.get(t);
		if (a === void 0) {
			var i = super.get(t);
			if (i !== void 0) (a = Qn(0)), n.set(t, a);
			else return m(w(this, Cn)), !1;
		}
		return m(a), !0;
	}
	forEach(t, n) {
		_t(this, Si, n0).call(this), super.forEach(t, n);
	}
	get(t) {
		var n = w(this, Mn),
			a = n.get(t);
		if (a === void 0) {
			var i = super.get(t);
			if (i !== void 0) (a = Qn(0)), n.set(t, a);
			else {
				m(w(this, Cn));
				return;
			}
		}
		return m(a), super.get(t);
	}
	set(t, n) {
		var f;
		var a = w(this, Mn),
			i = a.get(t),
			o = super.get(t),
			s = super.set(t, n),
			l = w(this, Cn);
		if (i === void 0) a.set(t, Qn(0)), F(w(this, ea), super.size), gi(l);
		else if (o !== n) {
			gi(i);
			var u = l.reactions === null ? null : new Set(l.reactions),
				h = u === null || !((f = i.reactions) != null && f.every((p) => u.has(p)));
			h && gi(l);
		}
		return s;
	}
	delete(t) {
		var n = w(this, Mn),
			a = n.get(t),
			i = super.delete(t);
		return a !== void 0 && (n.delete(t), F(w(this, ea), super.size), F(a, -1), gi(w(this, Cn))), i;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var t = w(this, Mn);
			F(w(this, ea), 0);
			for (var n of t.values()) F(n, -1);
			gi(w(this, Cn)), t.clear();
		}
	}
	keys() {
		return m(w(this, Cn)), super.keys();
	}
	values() {
		return _t(this, Si, n0).call(this), super.values();
	}
	entries() {
		return _t(this, Si, n0).call(this), super.entries();
	}
	[Symbol.iterator]() {
		return this.entries();
	}
	get size() {
		return m(w(this, ea)), super.size;
	}
};
(Mn = new WeakMap()),
	(Cn = new WeakMap()),
	(ea = new WeakMap()),
	(Si = new WeakSet()),
	(n0 = function () {
		m(w(this, Cn));
		var t = w(this, Mn);
		if (w(this, ea).v !== t.size)
			for (var n of sd(Pu.prototype, this, "keys").call(this)) t.has(n) || t.set(n, Qn(0));
		for (var [, a] of w(this, Mn)) m(a);
	});
let oc = Pu;
var Op = or("<svg><!></svg>");
function lh(r, e) {
	const t = Cr(e, ["children", "$$slots", "$$events", "$$legacy"]);
	var n = Op();
	zt(n, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var a = L(n);
	wr(a, () => '<path fill="currentColor" d="m24 12l-8 10l-8-10z"/>', !0), O(n), C(r, n);
}
var Np = or("<svg><!></svg>");
function Rp(r, e) {
	const t = Cr(e, ["children", "$$slots", "$$events", "$$legacy"]);
	var n = Np();
	zt(n, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var a = L(n);
	wr(
		a,
		() =>
			'<path fill="currentColor" d="m19 4l-1.414 1.414L22.172 10H10a2 2 0 0 0-2 2v16h2V12h12.172l-4.586 4.586L19 18l7-7Z"/>',
		!0
	),
		O(n),
		C(r, n);
}
function Ip(r) {
	return typeof r == "function";
}
function Ss(r) {
	return r !== null && typeof r == "object";
}
const Dp = ["string", "number", "bigint", "boolean"];
function sc(r) {
	return r == null || Dp.includes(typeof r)
		? !0
		: Array.isArray(r)
			? r.every((e) => sc(e))
			: typeof r == "object"
				? Object.getPrototypeOf(r) === Object.prototype
				: !1;
}
const Ui = Symbol("box"),
	dl = Symbol("is-writable");
function ge(r, e) {
	const t = j(r);
	return e
		? {
				[Ui]: !0,
				[dl]: !0,
				get current() {
					return m(t);
				},
				set current(n) {
					e(n);
				},
			}
		: {
				[Ui]: !0,
				get current() {
					return r();
				},
			};
}
function Es(r) {
	return Ss(r) && Ui in r;
}
function Jc(r) {
	return Es(r) && dl in r;
}
function ch(r) {
	return Es(r) ? r : Ip(r) ? ge(r) : Rn(r);
}
function Lp(r) {
	return Object.entries(r).reduce(
		(e, [t, n]) =>
			Es(n)
				? (Jc(n)
						? Object.defineProperty(e, t, {
								get() {
									return n.current;
								},
								set(a) {
									n.current = a;
								},
							})
						: Object.defineProperty(e, t, {
								get() {
									return n.current;
								},
							}),
					e)
				: Object.assign(e, { [t]: n }),
		{}
	);
}
function zp(r) {
	return Jc(r)
		? {
				[Ui]: !0,
				get current() {
					return r.current;
				},
			}
		: r;
}
function Rn(r) {
	let e = Ee(cn(r));
	return {
		[Ui]: !0,
		[dl]: !0,
		get current() {
			return m(e);
		},
		set current(t) {
			F(e, t, !0);
		},
	};
}
function li(r) {
	let e = Ee(cn(r));
	return {
		[Ui]: !0,
		[dl]: !0,
		get current() {
			return m(e);
		},
		set current(t) {
			F(e, t, !0);
		},
	};
}
li.from = ch;
li.with = ge;
li.flatten = Lp;
li.readonly = zp;
li.isBox = Es;
li.isWritableBox = Jc;
function uh(...r) {
	return function (e) {
		var t;
		for (const n of r)
			if (n) {
				if (e.defaultPrevented) return;
				typeof n == "function" ? n.call(this, e) : (t = n.current) == null || t.call(this, e);
			}
	};
}
var wd = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
	Bp = /\n/g,
	Pp = /^\s*/,
	Fp = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
	qp = /^:\s*/,
	Up = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
	Hp = /^[;\s]*/,
	Gp = /^\s+|\s+$/g,
	Wp = `
`,
	_d = "/",
	kd = "*",
	Va = "",
	Vp = "comment",
	Kp = "declaration";
function Yp(r, e) {
	if (typeof r != "string") throw new TypeError("First argument must be a string");
	if (!r) return [];
	e = e || {};
	var t = 1,
		n = 1;
	function a(y) {
		var x = y.match(Bp);
		x && (t += x.length);
		var _ = y.lastIndexOf(Wp);
		n = ~_ ? y.length - _ : n + y.length;
	}
	function i() {
		var y = { line: t, column: n };
		return function (x) {
			return (x.position = new o(y)), u(), x;
		};
	}
	function o(y) {
		(this.start = y), (this.end = { line: t, column: n }), (this.source = e.source);
	}
	o.prototype.content = r;
	function s(y) {
		var x = new Error(e.source + ":" + t + ":" + n + ": " + y);
		if (
			((x.reason = y),
			(x.filename = e.source),
			(x.line = t),
			(x.column = n),
			(x.source = r),
			!e.silent)
		)
			throw x;
	}
	function l(y) {
		var x = y.exec(r);
		if (x) {
			var _ = x[0];
			return a(_), (r = r.slice(_.length)), x;
		}
	}
	function u() {
		l(Pp);
	}
	function h(y) {
		var x;
		for (y = y || []; (x = f()); ) x !== !1 && y.push(x);
		return y;
	}
	function f() {
		var y = i();
		if (!(_d != r.charAt(0) || kd != r.charAt(1))) {
			for (var x = 2; Va != r.charAt(x) && (kd != r.charAt(x) || _d != r.charAt(x + 1)); ) ++x;
			if (((x += 2), Va === r.charAt(x - 1))) return s("End of comment missing");
			var _ = r.slice(2, x - 2);
			return (n += 2), a(_), (r = r.slice(x)), (n += 2), y({ type: Vp, comment: _ });
		}
	}
	function p() {
		var y = i(),
			x = l(Fp);
		if (x) {
			if ((f(), !l(qp))) return s("property missing ':'");
			var _ = l(Up),
				k = y({
					type: Kp,
					property: Sd(x[0].replace(wd, Va)),
					value: _ ? Sd(_[0].replace(wd, Va)) : Va,
				});
			return l(Hp), k;
		}
	}
	function g() {
		var y = [];
		h(y);
		for (var x; (x = p()); ) x !== !1 && (y.push(x), h(y));
		return y;
	}
	return u(), g();
}
function Sd(r) {
	return r ? r.replace(Gp, Va) : Va;
}
function Xp(r, e) {
	let t = null;
	if (!r || typeof r != "string") return t;
	const n = Yp(r),
		a = typeof e == "function";
	return (
		n.forEach((i) => {
			if (i.type !== "declaration") return;
			const { property: o, value: s } = i;
			a ? e(o, s, i) : s && ((t = t || {}), (t[o] = s));
		}),
		t
	);
}
const Zp = /\d/,
	jp = ["-", "_", "/", "."];
function Jp(r = "") {
	if (!Zp.test(r)) return r !== r.toLowerCase();
}
function Qp(r) {
	const e = [];
	let t = "",
		n,
		a;
	for (const i of r) {
		const o = jp.includes(i);
		if (o === !0) {
			e.push(t), (t = ""), (n = void 0);
			continue;
		}
		const s = Jp(i);
		if (a === !1) {
			if (n === !1 && s === !0) {
				e.push(t), (t = i), (n = s);
				continue;
			}
			if (n === !0 && s === !1 && t.length > 1) {
				const l = t.at(-1);
				e.push(t.slice(0, Math.max(0, t.length - 1))), (t = l + i), (n = s);
				continue;
			}
		}
		(t += i), (n = s), (a = o);
	}
	return e.push(t), e;
}
function dh(r) {
	return r
		? Qp(r)
				.map((e) => eg(e))
				.join("")
		: "";
}
function $p(r) {
	return tg(dh(r || ""));
}
function eg(r) {
	return r ? r[0].toUpperCase() + r.slice(1) : "";
}
function tg(r) {
	return r ? r[0].toLowerCase() + r.slice(1) : "";
}
function co(r) {
	if (!r) return {};
	const e = {};
	function t(n, a) {
		if (
			n.startsWith("-moz-") ||
			n.startsWith("-webkit-") ||
			n.startsWith("-ms-") ||
			n.startsWith("-o-")
		) {
			e[dh(n)] = a;
			return;
		}
		if (n.startsWith("--")) {
			e[n] = a;
			return;
		}
		e[$p(n)] = a;
	}
	return Xp(r, t), e;
}
function ri(...r) {
	return (...e) => {
		for (const t of r) typeof t == "function" && t(...e);
	};
}
function rg(r, e) {
	const t = RegExp(r, "g");
	return (n) => {
		if (typeof n != "string")
			throw new TypeError(`expected an argument of type string, but got ${typeof n}`);
		return n.match(t) ? n.replace(t, e) : n;
	};
}
const ng = rg(/[A-Z]/, (r) => `-${r.toLowerCase()}`);
function ag(r) {
	if (!r || typeof r != "object" || Array.isArray(r))
		throw new TypeError(`expected an argument of type object, but got ${typeof r}`);
	return Object.keys(r).map((e) => `${ng(e)}: ${r[e]};`).join(`
`);
}
function hh(r = {}) {
	return ag(r).replace(
		`
`,
		" "
	);
}
const ig = [
		"onabort",
		"onanimationcancel",
		"onanimationend",
		"onanimationiteration",
		"onanimationstart",
		"onauxclick",
		"onbeforeinput",
		"onbeforetoggle",
		"onblur",
		"oncancel",
		"oncanplay",
		"oncanplaythrough",
		"onchange",
		"onclick",
		"onclose",
		"oncompositionend",
		"oncompositionstart",
		"oncompositionupdate",
		"oncontextlost",
		"oncontextmenu",
		"oncontextrestored",
		"oncopy",
		"oncuechange",
		"oncut",
		"ondblclick",
		"ondrag",
		"ondragend",
		"ondragenter",
		"ondragleave",
		"ondragover",
		"ondragstart",
		"ondrop",
		"ondurationchange",
		"onemptied",
		"onended",
		"onerror",
		"onfocus",
		"onfocusin",
		"onfocusout",
		"onformdata",
		"ongotpointercapture",
		"oninput",
		"oninvalid",
		"onkeydown",
		"onkeypress",
		"onkeyup",
		"onload",
		"onloadeddata",
		"onloadedmetadata",
		"onloadstart",
		"onlostpointercapture",
		"onmousedown",
		"onmouseenter",
		"onmouseleave",
		"onmousemove",
		"onmouseout",
		"onmouseover",
		"onmouseup",
		"onpaste",
		"onpause",
		"onplay",
		"onplaying",
		"onpointercancel",
		"onpointerdown",
		"onpointerenter",
		"onpointerleave",
		"onpointermove",
		"onpointerout",
		"onpointerover",
		"onpointerup",
		"onprogress",
		"onratechange",
		"onreset",
		"onresize",
		"onscroll",
		"onscrollend",
		"onsecuritypolicyviolation",
		"onseeked",
		"onseeking",
		"onselect",
		"onselectionchange",
		"onselectstart",
		"onslotchange",
		"onstalled",
		"onsubmit",
		"onsuspend",
		"ontimeupdate",
		"ontoggle",
		"ontouchcancel",
		"ontouchend",
		"ontouchmove",
		"ontouchstart",
		"ontransitioncancel",
		"ontransitionend",
		"ontransitionrun",
		"ontransitionstart",
		"onvolumechange",
		"onwaiting",
		"onwebkitanimationend",
		"onwebkitanimationiteration",
		"onwebkitanimationstart",
		"onwebkittransitionend",
		"onwheel",
	],
	og = new Set(ig);
function sg(r) {
	return og.has(r);
}
function Fr(...r) {
	const e = { ...r[0] };
	for (let t = 1; t < r.length; t++) {
		const n = r[t];
		if (n) {
			for (const a of Object.keys(n)) {
				const i = e[a],
					o = n[a],
					s = typeof i == "function",
					l = typeof o == "function";
				if (s && sg(a)) {
					const u = i,
						h = o;
					e[a] = uh(u, h);
				} else if (s && l) e[a] = ri(i, o);
				else if (a === "class") {
					const u = sc(i),
						h = sc(o);
					u && h ? (e[a] = Ol(i, o)) : u ? (e[a] = Ol(i)) : h && (e[a] = Ol(o));
				} else if (a === "style") {
					const u = typeof i == "object",
						h = typeof o == "object",
						f = typeof i == "string",
						p = typeof o == "string";
					if (u && h) e[a] = { ...i, ...o };
					else if (u && p) {
						const g = co(o);
						e[a] = { ...i, ...g };
					} else if (f && h) {
						const g = co(i);
						e[a] = { ...g, ...o };
					} else if (f && p) {
						const g = co(i),
							y = co(o);
						e[a] = { ...g, ...y };
					} else u ? (e[a] = i) : h ? (e[a] = o) : f ? (e[a] = i) : p && (e[a] = o);
				} else e[a] = o !== void 0 ? o : i;
			}
			for (const a of Object.getOwnPropertySymbols(n)) {
				const i = e[a],
					o = n[a];
				e[a] = o !== void 0 ? o : i;
			}
		}
	}
	return (
		typeof e.style == "object" &&
			(e.style = hh(e.style).replaceAll(
				`
`,
				" "
			)),
		e.hidden === !1 && ((e.hidden = void 0), delete e.hidden),
		e.disabled === !1 && ((e.disabled = void 0), delete e.disabled),
		e
	);
}
const fh = typeof window < "u" ? window : void 0;
function lg(r) {
	let e = r.activeElement;
	for (; e != null && e.shadowRoot; ) {
		const t = e.shadowRoot.activeElement;
		if (t === e) break;
		e = t;
	}
	return e;
}
var Ei, _o;
class cg {
	constructor(e = {}) {
		W(this, Ei);
		W(this, _o);
		const { window: t = fh, document: n = t == null ? void 0 : t.document } = e;
		t !== void 0 &&
			(Ye(this, Ei, n),
			Ye(
				this,
				_o,
				sh((a) => {
					const i = yr(t, "focusin", a),
						o = yr(t, "focusout", a);
					return () => {
						i(), o();
					};
				})
			));
	}
	get current() {
		var e;
		return (e = w(this, _o)) == null || e.call(this), w(this, Ei) ? lg(w(this, Ei)) : null;
	}
}
(Ei = new WeakMap()), (_o = new WeakMap());
new cg();
function ug(r) {
	return typeof r == "function";
}
var ko, ta;
class Ba {
	constructor(e) {
		W(this, ko);
		W(this, ta);
		Ye(this, ko, e), Ye(this, ta, Symbol(e));
	}
	get key() {
		return w(this, ta);
	}
	exists() {
		return $m(w(this, ta));
	}
	get() {
		const e = pd(w(this, ta));
		if (e === void 0) throw new Error(`Context "${w(this, ko)}" not found`);
		return e;
	}
	getOr(e) {
		const t = pd(w(this, ta));
		return t === void 0 ? e : t;
	}
	set(e) {
		return ep(w(this, ta), e);
	}
}
(ko = new WeakMap()), (ta = new WeakMap());
function dg(r, e) {
	switch (r) {
		case "post":
			Rt(e);
			break;
		case "pre":
			tp(e);
			break;
	}
}
function mh(r, e, t, n = {}) {
	const { lazy: a = !1 } = n;
	let i = !a,
		o = Array.isArray(r) ? [] : void 0;
	dg(e, () => {
		const s = Array.isArray(r) ? r.map((u) => u()) : r();
		if (!i) {
			(i = !0), (o = s);
			return;
		}
		const l = ni(() => t(s, o));
		return (o = s), l;
	});
}
function Ar(r, e, t) {
	mh(r, "post", e, t);
}
function hg(r, e, t) {
	mh(r, "pre", e, t);
}
Ar.pre = hg;
function Ed(r) {
	return ug(r) ? r() : r;
}
var ya, Ti, Ai, Mi, xa, q0, U0, Ci;
class fg {
	constructor(e, t = { box: "border-box" }) {
		W(this, ya, { width: 0, height: 0 });
		W(this, Ti, !1);
		W(this, Ai);
		W(this, Mi);
		W(this, xa);
		W(
			this,
			q0,
			j(() => {
				var e;
				return (e = m(w(this, Ci))) == null || e(), this.getSize().width;
			})
		);
		W(
			this,
			U0,
			j(() => {
				var e;
				return (e = m(w(this, Ci))) == null || e(), this.getSize().height;
			})
		);
		W(
			this,
			Ci,
			j(() => {
				const e = Ed(w(this, Mi));
				if (e)
					return sh((t) => {
						if (!w(this, xa)) return;
						const n = new (w(this, xa).ResizeObserver)((a) => {
							Ye(this, Ti, !0);
							for (const i of a) {
								const o = w(this, Ai).box === "content-box" ? i.contentBoxSize : i.borderBoxSize,
									s = Array.isArray(o) ? o : [o];
								(w(this, ya).width = s.reduce((l, u) => Math.max(l, u.inlineSize), 0)),
									(w(this, ya).height = s.reduce((l, u) => Math.max(l, u.blockSize), 0));
							}
							t();
						});
						return (
							n.observe(e),
							() => {
								Ye(this, Ti, !1), n.disconnect();
							}
						);
					});
			})
		);
		Ye(this, xa, t.window ?? fh),
			Ye(this, Ai, t),
			Ye(this, Mi, e),
			Ye(this, ya, { width: 0, height: 0 });
	}
	calculateSize() {
		const e = Ed(w(this, Mi));
		if (!e || !w(this, xa)) return;
		const t = e.offsetWidth,
			n = e.offsetHeight;
		if (w(this, Ai).box === "border-box") return { width: t, height: n };
		const a = w(this, xa).getComputedStyle(e),
			i = parseFloat(a.paddingLeft) + parseFloat(a.paddingRight),
			o = parseFloat(a.paddingTop) + parseFloat(a.paddingBottom),
			s = parseFloat(a.borderLeftWidth) + parseFloat(a.borderRightWidth),
			l = parseFloat(a.borderTopWidth) + parseFloat(a.borderBottomWidth),
			u = t - i - s,
			h = n - o - l;
		return { width: u, height: h };
	}
	getSize() {
		return w(this, Ti) ? w(this, ya) : (this.calculateSize() ?? w(this, ya));
	}
	get current() {
		var e;
		return (e = m(w(this, Ci))) == null || e(), this.getSize();
	}
	get width() {
		return m(w(this, q0));
	}
	get height() {
		return m(w(this, U0));
	}
}
(ya = new WeakMap()),
	(Ti = new WeakMap()),
	(Ai = new WeakMap()),
	(Mi = new WeakMap()),
	(xa = new WeakMap()),
	(q0 = new WeakMap()),
	(U0 = new WeakMap()),
	(Ci = new WeakMap());
function Yi(r) {
	Rt(() => () => {
		r();
	});
}
function mg(r, e) {
	return setTimeout(e, r);
}
function In(r) {
	bn().then(r);
}
const pg = 1,
	gg = 9,
	vg = 11;
function lc(r) {
	return Ss(r) && r.nodeType === pg && typeof r.nodeName == "string";
}
function ph(r) {
	return Ss(r) && r.nodeType === gg;
}
function bg(r) {
	var e;
	return Ss(r) && ((e = r.constructor) == null ? void 0 : e.name) === "VisualViewport";
}
function yg(r) {
	return Ss(r) && r.nodeType !== void 0;
}
function gh(r) {
	return yg(r) && r.nodeType === vg && "host" in r;
}
function xg(r, e) {
	var n;
	if (!r || !e || !lc(r) || !lc(e)) return !1;
	const t = (n = e.getRootNode) == null ? void 0 : n.call(e);
	if (r === e || r.contains(e)) return !0;
	if (t && gh(t)) {
		let a = e;
		for (; a; ) {
			if (r === a) return !0;
			a = a.parentNode || a.host;
		}
	}
	return !1;
}
function Ts(r) {
	return ph(r) ? r : bg(r) ? r.document : ((r == null ? void 0 : r.ownerDocument) ?? document);
}
function Qc(r) {
	var e;
	return gh(r)
		? Qc(r.host)
		: ph(r)
			? (r.defaultView ?? window)
			: lc(r)
				? (((e = r.ownerDocument) == null ? void 0 : e.defaultView) ?? window)
				: window;
}
function wg(r) {
	let e = r.activeElement;
	for (; e != null && e.shadowRoot; ) {
		const t = e.shadowRoot.activeElement;
		if (t === e) break;
		e = t;
	}
	return e;
}
var So;
class $c {
	constructor(e) {
		Se(this, "element");
		W(
			this,
			So,
			j(() => (this.element.current ? (this.element.current.getRootNode() ?? document) : document))
		);
		Se(this, "getDocument", () => Ts(this.root));
		Se(this, "getWindow", () => this.getDocument().defaultView ?? window);
		Se(this, "getActiveElement", () => wg(this.root));
		Se(this, "isActiveElement", (e) => e === this.getActiveElement());
		Se(this, "querySelector", (e) => (this.root ? this.root.querySelector(e) : null));
		Se(this, "querySelectorAll", (e) => (this.root ? this.root.querySelectorAll(e) : []));
		Se(this, "setTimeout", (e, t) => this.getWindow().setTimeout(e, t));
		Se(this, "clearTimeout", (e) => this.getWindow().clearTimeout(e));
		typeof e == "function" ? (this.element = ge(e)) : (this.element = e);
	}
	get root() {
		return m(w(this, So));
	}
	set root(e) {
		F(w(this, So), e);
	}
	getElementById(e) {
		return this.root.getElementById(e);
	}
}
So = new WeakMap();
function Ma(r, e) {
	return {
		[Ep()]: (t) =>
			Es(r)
				? ((r.current = t),
					ni(() => (e == null ? void 0 : e(t))),
					() => {
						("isConnected" in t && t.isConnected) || ((r.current = null), e == null || e(null));
					})
				: (r(t),
					ni(() => (e == null ? void 0 : e(t))),
					() => {
						("isConnected" in t && t.isConnected) || (r(null), e == null || e(null));
					}),
	};
}
function eu(r) {
	return r ? "true" : "false";
}
function vh(r) {
	return r ? "" : void 0;
}
function tu(r) {
	return r ? "open" : "closed";
}
function _g(r, e) {
	return e ? "mixed" : r ? "true" : "false";
}
var Oi, Eo;
class kg {
	constructor(e) {
		W(this, Oi);
		W(this, Eo);
		Se(this, "attrs");
		Ye(this, Oi, e.getVariant ? e.getVariant() : null),
			Ye(this, Eo, w(this, Oi) ? `data-${w(this, Oi)}-` : `data-${e.component}-`),
			(this.getAttr = this.getAttr.bind(this)),
			(this.selector = this.selector.bind(this)),
			(this.attrs = Object.fromEntries(e.parts.map((t) => [t, this.getAttr(t)])));
	}
	getAttr(e, t) {
		return t ? `data-${t}-${e}` : `${w(this, Eo)}${e}`;
	}
	selector(e, t) {
		return `[${this.getAttr(e, t)}]`;
	}
}
(Oi = new WeakMap()), (Eo = new WeakMap());
function Sg(r) {
	const e = new kg(r);
	return { ...e.attrs, selector: e.selector, getAttr: e.getAttr };
}
const po = "ArrowDown",
	As = "ArrowLeft",
	Ms = "ArrowRight",
	p0 = "ArrowUp",
	bh = "End",
	yh = "Enter",
	Eg = "Escape",
	xh = "Home",
	Tg = "PageDown",
	Ag = "PageUp",
	hl = " ",
	Mg = "Tab";
function Cg(r) {
	return window.getComputedStyle(r).getPropertyValue("direction");
}
function Og(r = "ltr", e = "horizontal") {
	return { horizontal: r === "rtl" ? As : Ms, vertical: po }[e];
}
function Ng(r = "ltr", e = "horizontal") {
	return { horizontal: r === "rtl" ? Ms : As, vertical: p0 }[e];
}
function Rg(r = "ltr", e = "horizontal") {
	return (
		["ltr", "rtl"].includes(r) || (r = "ltr"),
		["horizontal", "vertical"].includes(e) || (e = "horizontal"),
		{ nextKey: Og(r, e), prevKey: Ng(r, e) }
	);
}
const wh = typeof document < "u",
	Td = Ig();
function Ig() {
	var r, e;
	return (
		wh &&
		((r = window == null ? void 0 : window.navigator) == null ? void 0 : r.userAgent) &&
		(/iP(ad|hone|od)/.test(window.navigator.userAgent) ||
			(((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.maxTouchPoints) > 2 &&
				/iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent)))
	);
}
function yn(r) {
	return r instanceof HTMLElement;
}
function cc(r) {
	return r instanceof Element;
}
function _h(r) {
	return r instanceof Element || r instanceof SVGElement;
}
function Dg(r) {
	return r !== null;
}
function Lg(r) {
	return r instanceof HTMLInputElement && "select" in r;
}
var Ir, ra;
class zg {
	constructor(e) {
		W(this, Ir);
		W(this, ra, li(null));
		Ye(this, Ir, e);
	}
	getCandidateNodes() {
		return w(this, Ir).rootNode.current
			? w(this, Ir).candidateSelector
				? Array.from(w(this, Ir).rootNode.current.querySelectorAll(w(this, Ir).candidateSelector))
				: w(this, Ir).candidateAttr
					? Array.from(
							w(this, Ir).rootNode.current.querySelectorAll(
								`[${w(this, Ir).candidateAttr}]:not([data-disabled])`
							)
						)
					: []
			: [];
	}
	focusFirstCandidate() {
		var t;
		const e = this.getCandidateNodes();
		e.length && ((t = e[0]) == null || t.focus());
	}
	handleKeydown(e, t, n = !1) {
		var y, x;
		const a = w(this, Ir).rootNode.current;
		if (!a || !e) return;
		const i = this.getCandidateNodes();
		if (!i.length) return;
		const o = i.indexOf(e),
			s = Cg(a),
			{ nextKey: l, prevKey: u } = Rg(s, w(this, Ir).orientation.current),
			h = w(this, Ir).loop.current,
			f = { [l]: o + 1, [u]: o - 1, [xh]: 0, [bh]: i.length - 1 };
		if (n) {
			const _ = l === po ? Ms : po,
				k = u === p0 ? As : p0;
			(f[_] = o + 1), (f[k] = o - 1);
		}
		let p = f[t.key];
		if (p === void 0) return;
		t.preventDefault(), p < 0 && h ? (p = i.length - 1) : p === i.length && h && (p = 0);
		const g = i[p];
		if (g)
			return (
				g.focus(),
				(w(this, ra).current = g.id),
				(x = (y = w(this, Ir)).onCandidateFocus) == null || x.call(y, g),
				g
			);
	}
	getTabIndex(e) {
		const t = this.getCandidateNodes(),
			n = w(this, ra).current !== null;
		return e && !n && t[0] === e
			? ((w(this, ra).current = e.id), 0)
			: (e == null ? void 0 : e.id) === w(this, ra).current
				? 0
				: -1;
	}
	setCurrentTabStopId(e) {
		w(this, ra).current = e;
	}
	focusCurrentTabStop() {
		var n;
		const e = w(this, ra).current;
		if (!e) return;
		const t = (n = w(this, Ir).rootNode.current) == null ? void 0 : n.querySelector(`#${e}`);
		!t || !yn(t) || t.focus();
	}
}
(Ir = new WeakMap()), (ra = new WeakMap());
var Ni, Ka, ca, uc, a0;
class Bg {
	constructor(e) {
		W(this, ca);
		W(this, Ni);
		W(this, Ka, null);
		Ye(this, Ni, e), Yi(() => _t(this, ca, uc).call(this));
	}
	run(e) {
		_t(this, ca, uc).call(this);
		const t = w(this, Ni).ref.current;
		if (t) {
			if (typeof t.getAnimations != "function") {
				_t(this, ca, a0).call(this, e);
				return;
			}
			Ye(
				this,
				Ka,
				window.requestAnimationFrame(() => {
					const n = t.getAnimations();
					if (n.length === 0) {
						_t(this, ca, a0).call(this, e);
						return;
					}
					Promise.allSettled(n.map((a) => a.finished)).then(() => {
						_t(this, ca, a0).call(this, e);
					});
				})
			);
		}
	}
}
(Ni = new WeakMap()),
	(Ka = new WeakMap()),
	(ca = new WeakSet()),
	(uc = function () {
		w(this, Ka) && (window.cancelAnimationFrame(w(this, Ka)), Ye(this, Ka, null));
	}),
	(a0 = function (e) {
		const t = () => {
			e();
		};
		w(this, Ni).afterTick ? In(t) : t();
	});
var On, To, Ao, Ya;
class Pg {
	constructor(e) {
		W(this, On);
		W(this, To);
		W(this, Ao);
		W(this, Ya, Ee(!1));
		Ye(this, On, e),
			F(w(this, Ya), e.open.current, !0),
			Ye(this, To, e.enabled ?? !0),
			Ye(this, Ao, new Bg({ ref: w(this, On).ref, afterTick: w(this, On).open })),
			Ar(
				() => w(this, On).open.current,
				(t) => {
					t && F(w(this, Ya), !0),
						w(this, To) &&
							w(this, Ao).run(() => {
								var n, a;
								t === w(this, On).open.current &&
									(w(this, On).open.current || F(w(this, Ya), !1),
									(a = (n = w(this, On)).onComplete) == null || a.call(n));
							});
				}
			);
	}
	get shouldRender() {
		return m(w(this, Ya));
	}
}
(On = new WeakMap()), (To = new WeakMap()), (Ao = new WeakMap()), (Ya = new WeakMap());
function Lt() {}
function ci(r, e) {
	return `bits-${r}`;
}
function Fg(r, e) {
	var t = He(),
		n = pe(t);
	ah(
		n,
		() => e.children,
		(a) => {
			var i = He(),
				o = pe(i);
			It(o, () => e.children ?? Qt), C(a, i);
		}
	),
		C(r, t);
}
const qg = new Ba("BitsConfig");
function Ug() {
	const r = new Hg(null, {});
	return qg.getOr(r).opts;
}
class Hg {
	constructor(e, t) {
		Se(this, "opts");
		const n = Gg(e, t);
		this.opts = {
			defaultPortalTo: n((a) => a.defaultPortalTo),
			defaultLocale: n((a) => a.defaultLocale),
		};
	}
}
function Gg(r, e) {
	return (t) =>
		ge(() => {
			var i, o;
			const a = (i = t(e)) == null ? void 0 : i.current;
			if (a !== void 0) return a;
			if (r !== null) return (o = t(r.opts)) == null ? void 0 : o.current;
		});
}
function Wg(r, e) {
	return (t) => {
		const n = Ug();
		return ge(() => {
			const a = t();
			if (a !== void 0) return a;
			const i = r(n).current;
			return i !== void 0 ? i : e;
		});
	};
}
const Vg = Wg((r) => r.defaultPortalTo, "body");
function Kg(r, e) {
	yt(e, !0);
	const t = Vg(() => e.to),
		n = rp();
	let a = j(i);
	function i() {
		if (!wh || e.disabled) return null;
		let f = null;
		return (
			typeof t.current == "string" ? (f = document.querySelector(t.current)) : (f = t.current), f
		);
	}
	let o;
	function s() {
		o && (ip(o), (o = null));
	}
	Ar([() => m(a), () => e.disabled], ([f, p]) => {
		if (!f || p) {
			s();
			return;
		}
		return (
			(o = ap(Fg, { target: f, props: { children: e.children }, context: n })),
			() => {
				s();
			}
		);
	});
	var l = He(),
		u = pe(l);
	{
		var h = (f) => {
			var p = He(),
				g = pe(p);
			It(g, () => e.children ?? Qt), C(f, p);
		};
		ne(u, (f) => {
			e.disabled && f(h);
		});
	}
	C(r, l), xt();
}
class Yg {
	constructor(e, t = { bubbles: !0, cancelable: !0 }) {
		Se(this, "eventName");
		Se(this, "options");
		(this.eventName = e), (this.options = t);
	}
	createEvent(e) {
		return new CustomEvent(this.eventName, { ...this.options, detail: e });
	}
	dispatch(e, t) {
		const n = this.createEvent(t);
		return e.dispatchEvent(n), n;
	}
	listen(e, t, n) {
		const a = (i) => {
			t(i);
		};
		return yr(e, this.eventName, a, n);
	}
}
function Ad(r, e = 500) {
	let t = null;
	const n = (...a) => {
		t !== null && clearTimeout(t),
			(t = setTimeout(() => {
				r(...a);
			}, e));
	};
	return (
		(n.destroy = () => {
			t !== null && (clearTimeout(t), (t = null));
		}),
		n
	);
}
function kh(r, e) {
	return r === e || r.contains(e);
}
function Sh(r) {
	return (r == null ? void 0 : r.ownerDocument) ?? document;
}
function Xg(r, e) {
	const { clientX: t, clientY: n } = r,
		a = e.getBoundingClientRect();
	return t < a.left || t > a.right || n < a.top || n > a.bottom;
}
const dc = [yh, hl],
	Zg = [po, Ag, xh],
	Eh = [p0, Tg, bh],
	jg = [...Zg, ...Eh],
	Jg = { ltr: [...dc, Ms], rtl: [...dc, As] },
	Qg = { ltr: [As], rtl: [Ms] };
function $g(r) {
	return r === "indeterminate";
}
function e4(r) {
	return $g(r) ? "indeterminate" : r ? "checked" : "unchecked";
}
function g0(r) {
	return r.pointerType === "mouse";
}
function t4(r, { select: e = !1 } = {}) {
	if (!r || !r.focus) return;
	const t = Ts(r);
	if (t.activeElement === r) return;
	const n = t.activeElement;
	r.focus({ preventScroll: !0 }), r !== n && Lg(r) && e && r.select();
}
function r4(r, { select: e = !1 } = {}, t) {
	const n = t();
	for (const a of r) if ((t4(a, { select: e }), t() !== n)) return !0;
}
/*!
 * tabbable 6.3.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */ var Th = [
		"input:not([inert])",
		"select:not([inert])",
		"textarea:not([inert])",
		"a[href]:not([inert])",
		"button:not([inert])",
		"[tabindex]:not(slot):not([inert])",
		"audio[controls]:not([inert])",
		"video[controls]:not([inert])",
		'[contenteditable]:not([contenteditable="false"]):not([inert])',
		"details>summary:first-of-type:not([inert])",
		"details:not([inert])",
	],
	v0 = Th.join(","),
	Ah = typeof Element > "u",
	ii = Ah
		? function () {}
		: Element.prototype.matches ||
			Element.prototype.msMatchesSelector ||
			Element.prototype.webkitMatchesSelector,
	b0 =
		!Ah && Element.prototype.getRootNode
			? function (r) {
					var e;
					return r == null || (e = r.getRootNode) === null || e === void 0 ? void 0 : e.call(r);
				}
			: function (r) {
					return r == null ? void 0 : r.ownerDocument;
				},
	go = function (e, t) {
		var n;
		t === void 0 && (t = !0);
		var a =
				e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "inert"),
			i = a === "" || a === "true",
			o = i || (t && e && go(e.parentNode));
		return o;
	},
	n4 = function (e) {
		var t,
			n =
				e == null || (t = e.getAttribute) === null || t === void 0
					? void 0
					: t.call(e, "contenteditable");
		return n === "" || n === "true";
	},
	Mh = function (e, t, n) {
		if (go(e)) return [];
		var a = Array.prototype.slice.apply(e.querySelectorAll(v0));
		return t && ii.call(e, v0) && a.unshift(e), (a = a.filter(n)), a;
	},
	y0 = function (e, t, n) {
		for (var a = [], i = Array.from(e); i.length; ) {
			var o = i.shift();
			if (!go(o, !1))
				if (o.tagName === "SLOT") {
					var s = o.assignedElements(),
						l = s.length ? s : o.children,
						u = y0(l, !0, n);
					n.flatten ? a.push.apply(a, u) : a.push({ scopeParent: o, candidates: u });
				} else {
					var h = ii.call(o, v0);
					h && n.filter(o) && (t || !e.includes(o)) && a.push(o);
					var f = o.shadowRoot || (typeof n.getShadowRoot == "function" && n.getShadowRoot(o)),
						p = !go(f, !1) && (!n.shadowRootFilter || n.shadowRootFilter(o));
					if (f && p) {
						var g = y0(f === !0 ? o.children : f.children, !0, n);
						n.flatten ? a.push.apply(a, g) : a.push({ scopeParent: o, candidates: g });
					} else i.unshift.apply(i, o.children);
				}
		}
		return a;
	},
	Ch = function (e) {
		return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
	},
	Oh = function (e) {
		if (!e) throw new Error("No node provided");
		return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || n4(e)) && !Ch(e)
			? 0
			: e.tabIndex;
	},
	a4 = function (e, t) {
		var n = Oh(e);
		return n < 0 && t && !Ch(e) ? 0 : n;
	},
	i4 = function (e, t) {
		return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
	},
	Nh = function (e) {
		return e.tagName === "INPUT";
	},
	o4 = function (e) {
		return Nh(e) && e.type === "hidden";
	},
	s4 = function (e) {
		var t =
			e.tagName === "DETAILS" &&
			Array.prototype.slice.apply(e.children).some(function (n) {
				return n.tagName === "SUMMARY";
			});
		return t;
	},
	l4 = function (e, t) {
		for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
	},
	c4 = function (e) {
		if (!e.name) return !0;
		var t = e.form || b0(e),
			n = function (s) {
				return t.querySelectorAll('input[type="radio"][name="' + s + '"]');
			},
			a;
		if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
			a = n(window.CSS.escape(e.name));
		else
			try {
				a = n(e.name);
			} catch (o) {
				return (
					console.error(
						"Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
						o.message
					),
					!1
				);
			}
		var i = l4(a, e.form);
		return !i || i === e;
	},
	u4 = function (e) {
		return Nh(e) && e.type === "radio";
	},
	d4 = function (e) {
		return u4(e) && !c4(e);
	},
	h4 = function (e) {
		var t,
			n = e && b0(e),
			a = (t = n) === null || t === void 0 ? void 0 : t.host,
			i = !1;
		if (n && n !== e) {
			var o, s, l;
			for (
				i = !!(
					((o = a) !== null &&
						o !== void 0 &&
						(s = o.ownerDocument) !== null &&
						s !== void 0 &&
						s.contains(a)) ||
					(e != null && (l = e.ownerDocument) !== null && l !== void 0 && l.contains(e))
				);
				!i && a;

			) {
				var u, h, f;
				(n = b0(a)),
					(a = (u = n) === null || u === void 0 ? void 0 : u.host),
					(i = !!(
						(h = a) !== null &&
						h !== void 0 &&
						(f = h.ownerDocument) !== null &&
						f !== void 0 &&
						f.contains(a)
					));
			}
		}
		return i;
	},
	Md = function (e) {
		var t = e.getBoundingClientRect(),
			n = t.width,
			a = t.height;
		return n === 0 && a === 0;
	},
	f4 = function (e, t) {
		var n = t.displayCheck,
			a = t.getShadowRoot;
		if (n === "full-native" && "checkVisibility" in e) {
			var i = e.checkVisibility({
				checkOpacity: !1,
				opacityProperty: !1,
				contentVisibilityAuto: !0,
				visibilityProperty: !0,
				checkVisibilityCSS: !0,
			});
			return !i;
		}
		if (getComputedStyle(e).visibility === "hidden") return !0;
		var o = ii.call(e, "details>summary:first-of-type"),
			s = o ? e.parentElement : e;
		if (ii.call(s, "details:not([open]) *")) return !0;
		if (!n || n === "full" || n === "full-native" || n === "legacy-full") {
			if (typeof a == "function") {
				for (var l = e; e; ) {
					var u = e.parentElement,
						h = b0(e);
					if (u && !u.shadowRoot && a(u) === !0) return Md(e);
					e.assignedSlot
						? (e = e.assignedSlot)
						: !u && h !== e.ownerDocument
							? (e = h.host)
							: (e = u);
				}
				e = l;
			}
			if (h4(e)) return !e.getClientRects().length;
			if (n !== "legacy-full") return !0;
		} else if (n === "non-zero-area") return Md(e);
		return !1;
	},
	m4 = function (e) {
		if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
			for (var t = e.parentElement; t; ) {
				if (t.tagName === "FIELDSET" && t.disabled) {
					for (var n = 0; n < t.children.length; n++) {
						var a = t.children.item(n);
						if (a.tagName === "LEGEND")
							return ii.call(t, "fieldset[disabled] *") ? !0 : !a.contains(e);
					}
					return !0;
				}
				t = t.parentElement;
			}
		return !1;
	},
	x0 = function (e, t) {
		return !(t.disabled || go(t) || o4(t) || f4(t, e) || s4(t) || m4(t));
	},
	hc = function (e, t) {
		return !(d4(t) || Oh(t) < 0 || !x0(e, t));
	},
	p4 = function (e) {
		var t = parseInt(e.getAttribute("tabindex"), 10);
		return !!(isNaN(t) || t >= 0);
	},
	Rh = function (e) {
		var t = [],
			n = [];
		return (
			e.forEach(function (a, i) {
				var o = !!a.scopeParent,
					s = o ? a.scopeParent : a,
					l = a4(s, o),
					u = o ? Rh(a.candidates) : s;
				l === 0
					? o
						? t.push.apply(t, u)
						: t.push(s)
					: n.push({ documentOrder: i, tabIndex: l, item: a, isScope: o, content: u });
			}),
			n
				.sort(i4)
				.reduce(function (a, i) {
					return i.isScope ? a.push.apply(a, i.content) : a.push(i.content), a;
				}, [])
				.concat(t)
		);
	},
	Ih = function (e, t) {
		t = t || {};
		var n;
		return (
			t.getShadowRoot
				? (n = y0([e], t.includeContainer, {
						filter: hc.bind(null, t),
						flatten: !1,
						getShadowRoot: t.getShadowRoot,
						shadowRootFilter: p4,
					}))
				: (n = Mh(e, t.includeContainer, hc.bind(null, t))),
			Rh(n)
		);
	},
	Dh = function (e, t) {
		t = t || {};
		var n;
		return (
			t.getShadowRoot
				? (n = y0([e], t.includeContainer, {
						filter: x0.bind(null, t),
						flatten: !0,
						getShadowRoot: t.getShadowRoot,
					}))
				: (n = Mh(e, t.includeContainer, x0.bind(null, t))),
			n
		);
	},
	ru = function (e, t) {
		if (((t = t || {}), !e)) throw new Error("No node provided");
		return ii.call(e, v0) === !1 ? !1 : hc(t, e);
	},
	g4 = Th.concat("iframe").join(","),
	Lh = function (e, t) {
		if (((t = t || {}), !e)) throw new Error("No node provided");
		return ii.call(e, g4) === !1 ? !1 : x0(t, e);
	};
function ho() {
	return {
		getShadowRoot: !0,
		displayCheck:
			typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]")
				? "full"
				: "none",
	};
}
function v4(r, e) {
	if (!ru(r, ho())) return b4(r, e);
	const t = Ts(r),
		n = Ih(t.body, ho());
	e === "prev" && n.reverse();
	const a = n.indexOf(r);
	return a === -1 ? t.body : n.slice(a + 1)[0];
}
function b4(r, e) {
	const t = Ts(r);
	if (!Lh(r, ho())) return t.body;
	const n = Dh(t.body, ho());
	e === "prev" && n.reverse();
	const a = n.indexOf(r);
	return a === -1 ? t.body : (n.slice(a + 1).find((o) => ru(o, ho())) ?? t.body);
}
function zh(r, e, t) {
	const n = e.toLowerCase();
	if (n.endsWith(" ")) {
		const f = n.slice(0, -1);
		if (r.filter((x) => x.toLowerCase().startsWith(f)).length <= 1) return zh(r, f, t);
		const g = t == null ? void 0 : t.toLowerCase();
		if (g && g.startsWith(f) && g.charAt(f.length) === " " && e.trim() === f) return t;
		const y = r.filter((x) => x.toLowerCase().startsWith(n));
		if (y.length > 0) {
			const x = t ? r.indexOf(t) : -1;
			return Cd(y, Math.max(x, 0)).find((T) => T !== t) || t;
		}
	}
	const i = e.length > 1 && Array.from(e).every((f) => f === e[0]) ? e[0] : e,
		o = i.toLowerCase(),
		s = t ? r.indexOf(t) : -1;
	let l = Cd(r, Math.max(s, 0));
	i.length === 1 && (l = l.filter((f) => f !== t));
	const h = l.find((f) => (f == null ? void 0 : f.toLowerCase().startsWith(o)));
	return h !== t ? h : void 0;
}
function Cd(r, e) {
	return r.map((t, n) => r[(e + n) % r.length]);
}
const y4 = { afterMs: 1e4, onChange: Lt };
function Bh(r, e) {
	const { afterMs: t, onChange: n, getWindow: a } = { ...y4, ...e };
	let i = null,
		o = Ee(cn(r));
	function s() {
		return a().setTimeout(() => {
			F(o, r, !0), n == null || n(r);
		}, t);
	}
	return (
		Rt(() => () => {
			i && a().clearTimeout(i);
		}),
		ge(
			() => m(o),
			(l) => {
				F(o, l, !0), n == null || n(l), i && a().clearTimeout(i), (i = s());
			}
		)
	);
}
var na, aa, H0, G0;
class x4 {
	constructor(e) {
		W(this, na);
		W(this, aa);
		W(
			this,
			H0,
			j(() => (w(this, na).onMatch ? w(this, na).onMatch : (e) => e.focus()))
		);
		W(
			this,
			G0,
			j(() =>
				w(this, na).getCurrentItem ? w(this, na).getCurrentItem : w(this, na).getActiveElement
			)
		);
		Ye(this, na, e),
			Ye(this, aa, Bh("", { afterMs: 1e3, getWindow: e.getWindow })),
			(this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this)),
			(this.resetTypeahead = this.resetTypeahead.bind(this));
	}
	handleTypeaheadSearch(e, t) {
		var l, u;
		if (!t.length) return;
		w(this, aa).current = w(this, aa).current + e;
		const n = m(w(this, G0))(),
			a =
				((u = (l = t.find((h) => h === n)) == null ? void 0 : l.textContent) == null
					? void 0
					: u.trim()) ?? "",
			i = t.map((h) => {
				var f;
				return ((f = h.textContent) == null ? void 0 : f.trim()) ?? "";
			}),
			o = zh(i, w(this, aa).current, a),
			s = t.find((h) => {
				var f;
				return ((f = h.textContent) == null ? void 0 : f.trim()) === o;
			});
		return s && m(w(this, H0))(s), s;
	}
	resetTypeahead() {
		w(this, aa).current = "";
	}
	get search() {
		return w(this, aa).current;
	}
}
(na = new WeakMap()), (aa = new WeakMap()), (H0 = new WeakMap()), (G0 = new WeakMap());
var Xa, Mo, Ri, wa, za, fc, mc;
class w4 {
	constructor(e) {
		W(this, za);
		W(this, Xa);
		W(this, Mo);
		W(this, Ri);
		W(this, wa, Ee(null));
		Ye(this, Xa, e),
			Ye(
				this,
				Mo,
				j(() => w(this, Xa).enabled())
			),
			Ye(
				this,
				Ri,
				Bh(!1, {
					afterMs: e.transitTimeout ?? 300,
					onChange: (t) => {
						var n, a;
						m(w(this, Mo)) &&
							((a = (n = w(this, Xa)).setIsPointerInTransit) == null || a.call(n, t));
					},
					getWindow: () => Qc(w(this, Xa).triggerNode()),
				})
			),
			Ar([e.triggerNode, e.contentNode, e.enabled], ([t, n, a]) => {
				if (!t || !n || !a) return;
				const i = (s) => {
						_t(this, za, mc).call(this, s, n);
					},
					o = (s) => {
						_t(this, za, mc).call(this, s, t);
					};
				return ri(yr(t, "pointerleave", i), yr(n, "pointerleave", o));
			}),
			Ar(
				() => m(w(this, wa)),
				() => {
					const t = (a) => {
							var u, h;
							if (!m(w(this, wa))) return;
							const i = a.target;
							if (!cc(i)) return;
							const o = { x: a.clientX, y: a.clientY },
								s =
									((u = e.triggerNode()) == null ? void 0 : u.contains(i)) ||
									((h = e.contentNode()) == null ? void 0 : h.contains(i)),
								l = !E4(o, m(w(this, wa)));
							s
								? _t(this, za, fc).call(this)
								: l && (_t(this, za, fc).call(this), e.onPointerExit());
						},
						n = Ts(e.triggerNode() ?? e.contentNode());
					if (n) return yr(n, "pointermove", t);
				}
			);
	}
}
(Xa = new WeakMap()),
	(Mo = new WeakMap()),
	(Ri = new WeakMap()),
	(wa = new WeakMap()),
	(za = new WeakSet()),
	(fc = function () {
		F(w(this, wa), null), (w(this, Ri).current = !1);
	}),
	(mc = function (e, t) {
		const n = e.currentTarget;
		if (!yn(n)) return;
		const a = { x: e.clientX, y: e.clientY },
			i = _4(a, n.getBoundingClientRect()),
			o = k4(a, i),
			s = S4(t.getBoundingClientRect()),
			l = T4([...o, ...s]);
		F(w(this, wa), l, !0), (w(this, Ri).current = !0);
	});
function _4(r, e) {
	const t = Math.abs(e.top - r.y),
		n = Math.abs(e.bottom - r.y),
		a = Math.abs(e.right - r.x),
		i = Math.abs(e.left - r.x);
	switch (Math.min(t, n, a, i)) {
		case i:
			return "left";
		case a:
			return "right";
		case t:
			return "top";
		case n:
			return "bottom";
		default:
			throw new Error("unreachable");
	}
}
function k4(r, e, t = 5) {
	const n = t * 1.5;
	switch (e) {
		case "top":
			return [
				{ x: r.x - t, y: r.y + t },
				{ x: r.x, y: r.y - n },
				{ x: r.x + t, y: r.y + t },
			];
		case "bottom":
			return [
				{ x: r.x - t, y: r.y - t },
				{ x: r.x, y: r.y + n },
				{ x: r.x + t, y: r.y - t },
			];
		case "left":
			return [
				{ x: r.x + t, y: r.y - t },
				{ x: r.x - n, y: r.y },
				{ x: r.x + t, y: r.y + t },
			];
		case "right":
			return [
				{ x: r.x - t, y: r.y - t },
				{ x: r.x + n, y: r.y },
				{ x: r.x - t, y: r.y + t },
			];
	}
}
function S4(r) {
	const { top: e, right: t, bottom: n, left: a } = r;
	return [
		{ x: a, y: e },
		{ x: t, y: e },
		{ x: t, y: n },
		{ x: a, y: n },
	];
}
function E4(r, e) {
	const { x: t, y: n } = r;
	let a = !1;
	for (let i = 0, o = e.length - 1; i < e.length; o = i++) {
		const s = e[i].x,
			l = e[i].y,
			u = e[o].x,
			h = e[o].y;
		l > n != h > n && t < ((u - s) * (n - l)) / (h - l) + s && (a = !a);
	}
	return a;
}
function T4(r) {
	const e = r.slice();
	return (
		e.sort((t, n) => (t.x < n.x ? -1 : t.x > n.x ? 1 : t.y < n.y ? -1 : t.y > n.y ? 1 : 0)), A4(e)
	);
}
function A4(r) {
	if (r.length <= 1) return r.slice();
	const e = [];
	for (let n = 0; n < r.length; n++) {
		const a = r[n];
		for (; e.length >= 2; ) {
			const i = e[e.length - 1],
				o = e[e.length - 2];
			if ((i.x - o.x) * (a.y - o.y) >= (i.y - o.y) * (a.x - o.x)) e.pop();
			else break;
		}
		e.push(a);
	}
	e.pop();
	const t = [];
	for (let n = r.length - 1; n >= 0; n--) {
		const a = r[n];
		for (; t.length >= 2; ) {
			const i = t[t.length - 1],
				o = t[t.length - 2];
			if ((i.x - o.x) * (a.y - o.y) >= (i.y - o.y) * (a.x - o.x)) t.pop();
			else break;
		}
		t.push(a);
	}
	return (
		t.pop(),
		e.length === 1 && t.length === 1 && e[0].x === t[0].x && e[0].y === t[0].y ? e : e.concat(t)
	);
}
const M4 = "data-context-menu-trigger",
	C4 = "data-context-menu-content",
	Ph = new Ba("Menu.Root"),
	Hi = new Ba("Menu.Root | Menu.Sub"),
	fl = new Ba("Menu.Content"),
	O4 = new Ba("Menu.CheckboxGroup"),
	nu = new Yg("bitsmenuopen", { bubbles: !1, cancelable: !0 }),
	N4 = Sg({
		component: "menu",
		parts: [
			"trigger",
			"content",
			"sub-trigger",
			"item",
			"group",
			"group-heading",
			"checkbox-group",
			"checkbox-item",
			"radio-group",
			"radio-item",
			"separator",
			"sub-content",
			"arrow",
		],
	});
var Co, Oo;
const Fu = class Fu {
	constructor(e) {
		Se(this, "opts");
		Se(this, "isUsingKeyboard", new Nc());
		W(this, Co, Ee(!1));
		W(this, Oo, Ee(!1));
		Se(this, "getBitsAttr", (e) => N4.getAttr(e, this.opts.variant.current));
		this.opts = e;
	}
	static create(e) {
		const t = new Fu(e);
		return Ph.set(t);
	}
	get ignoreCloseAutoFocus() {
		return m(w(this, Co));
	}
	set ignoreCloseAutoFocus(e) {
		F(w(this, Co), e, !0);
	}
	get isPointerInTransit() {
		return m(w(this, Oo));
	}
	set isPointerInTransit(e) {
		F(w(this, Oo), e, !0);
	}
};
(Co = new WeakMap()), (Oo = new WeakMap());
let pc = Fu;
var No, Ro;
const qu = class qu {
	constructor(e, t, n) {
		Se(this, "opts");
		Se(this, "root");
		Se(this, "parentMenu");
		Se(
			this,
			"contentId",
			ge(() => "")
		);
		W(this, No, Ee(null));
		Se(this, "contentPresence");
		W(this, Ro, Ee(null));
		(this.opts = e),
			(this.root = t),
			(this.parentMenu = n),
			(this.contentPresence = new Pg({
				ref: ge(() => this.contentNode),
				open: this.opts.open,
				onComplete: () => {
					this.opts.onOpenChangeComplete.current(this.opts.open.current);
				},
			})),
			n &&
				Ar(
					() => n.opts.open.current,
					() => {
						n.opts.open.current || (this.opts.open.current = !1);
					}
				);
	}
	static create(e, t) {
		return Hi.set(new qu(e, t, null));
	}
	get contentNode() {
		return m(w(this, No));
	}
	set contentNode(e) {
		F(w(this, No), e, !0);
	}
	get triggerNode() {
		return m(w(this, Ro));
	}
	set triggerNode(e) {
		F(w(this, Ro), e, !0);
	}
	toggleOpen() {
		this.opts.open.current = !this.opts.open.current;
	}
	onOpen() {
		this.opts.open.current = !0;
	}
	onClose() {
		this.opts.open.current = !1;
	}
};
(No = new WeakMap()), (Ro = new WeakMap());
let w0 = qu;
var Io, Do, Lo, zo, Bo, Ca, Fh, i0, Po, Fo;
const Uu = class Uu {
	constructor(e, t) {
		W(this, Ca);
		Se(this, "opts");
		Se(this, "parentMenu");
		Se(this, "rovingFocusGroup");
		Se(this, "domContext");
		Se(this, "attachment");
		W(this, Io, Ee(""));
		W(this, Do, 0);
		W(this, Lo);
		W(this, zo, Ee(!1));
		W(this, Bo);
		Se(this, "onCloseAutoFocus", (e) => {
			var t, n;
			(n = (t = this.opts.onCloseAutoFocus).current) == null || n.call(t, e),
				!(e.defaultPrevented || w(this, Bo)) &&
					this.parentMenu.triggerNode &&
					ru(this.parentMenu.triggerNode) &&
					(e.preventDefault(), this.parentMenu.triggerNode.focus());
		});
		W(
			this,
			Po,
			j(() => ({ open: this.parentMenu.opts.open.current }))
		);
		W(
			this,
			Fo,
			j(() => ({
				id: this.opts.id.current,
				role: "menu",
				"aria-orientation": "vertical",
				[this.parentMenu.root.getBitsAttr("content")]: "",
				"data-state": tu(this.parentMenu.opts.open.current),
				onkeydown: this.onkeydown,
				onblur: this.onblur,
				onfocus: this.onfocus,
				dir: this.parentMenu.root.opts.dir.current,
				style: { pointerEvents: "auto" },
				...this.attachment,
			}))
		);
		Se(this, "popperProps", { onCloseAutoFocus: (e) => this.onCloseAutoFocus(e) });
		(this.opts = e),
			(this.parentMenu = t),
			(this.domContext = new $c(e.ref)),
			(this.attachment = Ma(this.opts.ref, (n) => {
				this.parentMenu.contentNode !== n && (this.parentMenu.contentNode = n);
			})),
			(t.contentId = e.id),
			Ye(this, Bo, e.isSub ?? !1),
			(this.onkeydown = this.onkeydown.bind(this)),
			(this.onblur = this.onblur.bind(this)),
			(this.onfocus = this.onfocus.bind(this)),
			(this.handleInteractOutside = this.handleInteractOutside.bind(this)),
			new w4({
				contentNode: () => this.parentMenu.contentNode,
				triggerNode: () => this.parentMenu.triggerNode,
				enabled: () => {
					var n;
					return (
						this.parentMenu.opts.open.current &&
						!!(
							(n = this.parentMenu.triggerNode) != null &&
							n.hasAttribute(this.parentMenu.root.getBitsAttr("sub-trigger"))
						)
					);
				},
				onPointerExit: () => {
					this.parentMenu.opts.open.current = !1;
				},
				setIsPointerInTransit: (n) => {
					this.parentMenu.root.isPointerInTransit = n;
				},
			}),
			Ye(
				this,
				Lo,
				new x4({
					getActiveElement: () => this.domContext.getActiveElement(),
					getWindow: () => this.domContext.getWindow(),
				}).handleTypeaheadSearch
			),
			(this.rovingFocusGroup = new zg({
				rootNode: ge(() => this.parentMenu.contentNode),
				candidateAttr: this.parentMenu.root.getBitsAttr("item"),
				loop: this.opts.loop,
				orientation: ge(() => "vertical"),
			})),
			Ar(
				() => this.parentMenu.contentNode,
				(n) => {
					if (!n) return;
					const a = () => {
						In(() => {
							this.parentMenu.root.isUsingKeyboard.current &&
								this.rovingFocusGroup.focusFirstCandidate();
						});
					};
					return nu.listen(n, a);
				}
			),
			Rt(() => {
				this.parentMenu.opts.open.current || this.domContext.getWindow().clearTimeout(w(this, Do));
			});
	}
	static create(e) {
		return fl.set(new Uu(e, Hi.get()));
	}
	get search() {
		return m(w(this, Io));
	}
	set search(e) {
		F(w(this, Io), e, !0);
	}
	get mounted() {
		return m(w(this, zo));
	}
	set mounted(e) {
		F(w(this, zo), e, !0);
	}
	handleTabKeyDown(e) {
		let t = this.parentMenu;
		for (; t.parentMenu !== null; ) t = t.parentMenu;
		if (!t.triggerNode) return;
		e.preventDefault();
		const n = v4(t.triggerNode, e.shiftKey ? "prev" : "next");
		n
			? ((this.parentMenu.root.ignoreCloseAutoFocus = !0),
				t.onClose(),
				In(() => {
					n.focus(),
						In(() => {
							this.parentMenu.root.ignoreCloseAutoFocus = !1;
						});
				}))
			: this.domContext.getDocument().body.focus();
	}
	onkeydown(e) {
		var u, h;
		if (e.defaultPrevented) return;
		if (e.key === Mg) {
			this.handleTabKeyDown(e);
			return;
		}
		const t = e.target,
			n = e.currentTarget;
		if (!yn(t) || !yn(n)) return;
		const a =
				((u = t.closest(`[${this.parentMenu.root.getBitsAttr("content")}]`)) == null
					? void 0
					: u.id) === this.parentMenu.contentId.current,
			i = e.ctrlKey || e.altKey || e.metaKey,
			o = e.key.length === 1;
		if (this.rovingFocusGroup.handleKeydown(t, e) || e.code === "Space") return;
		const l = _t(this, Ca, Fh).call(this);
		a && !i && o && w(this, Lo).call(this, e.key, l),
			((h = e.target) == null ? void 0 : h.id) === this.parentMenu.contentId.current &&
				jg.includes(e.key) &&
				(e.preventDefault(),
				Eh.includes(e.key) && l.reverse(),
				r4(l, { select: !1 }, () => this.domContext.getActiveElement()));
	}
	onblur(e) {
		var t, n;
		cc(e.currentTarget) &&
			cc(e.target) &&
			(((n = (t = e.currentTarget).contains) != null && n.call(t, e.target)) ||
				(this.domContext.getWindow().clearTimeout(w(this, Do)), (this.search = "")));
	}
	onfocus(e) {
		this.parentMenu.root.isUsingKeyboard.current &&
			In(() => this.rovingFocusGroup.focusFirstCandidate());
	}
	onItemEnter() {
		return _t(this, Ca, i0).call(this);
	}
	onItemLeave(e) {
		if (
			e.currentTarget.hasAttribute(this.parentMenu.root.getBitsAttr("sub-trigger")) ||
			_t(this, Ca, i0).call(this) ||
			this.parentMenu.root.isUsingKeyboard.current
		)
			return;
		const t = this.parentMenu.contentNode;
		t == null || t.focus(), this.rovingFocusGroup.setCurrentTabStopId("");
	}
	onTriggerLeave() {
		return !!_t(this, Ca, i0).call(this);
	}
	handleInteractOutside(e) {
		var n;
		if (!_h(e.target)) return;
		const t = (n = this.parentMenu.triggerNode) == null ? void 0 : n.id;
		if (e.target.id === t) {
			e.preventDefault();
			return;
		}
		e.target.closest(`#${t}`) && e.preventDefault();
	}
	get shouldRender() {
		return this.parentMenu.contentPresence.shouldRender;
	}
	get snippetProps() {
		return m(w(this, Po));
	}
	set snippetProps(e) {
		F(w(this, Po), e);
	}
	get props() {
		return m(w(this, Fo));
	}
	set props(e) {
		F(w(this, Fo), e);
	}
};
(Io = new WeakMap()),
	(Do = new WeakMap()),
	(Lo = new WeakMap()),
	(zo = new WeakMap()),
	(Bo = new WeakMap()),
	(Ca = new WeakSet()),
	(Fh = function () {
		const e = this.parentMenu.contentNode;
		return e
			? Array.from(
					e.querySelectorAll(`[${this.parentMenu.root.getBitsAttr("item")}]:not([data-disabled])`)
				)
			: [];
	}),
	(i0 = function () {
		return this.parentMenu.root.isPointerInTransit;
	}),
	(Po = new WeakMap()),
	(Fo = new WeakMap());
let _0 = Uu;
var Ii, qo;
class au {
	constructor(e, t) {
		Se(this, "opts");
		Se(this, "content");
		Se(this, "attachment");
		W(this, Ii, Ee(!1));
		W(
			this,
			qo,
			j(() => ({
				id: this.opts.id.current,
				tabindex: -1,
				role: "menuitem",
				"aria-disabled": eu(this.opts.disabled.current),
				"data-disabled": vh(this.opts.disabled.current),
				"data-highlighted": m(w(this, Ii)) ? "" : void 0,
				[this.content.parentMenu.root.getBitsAttr("item")]: "",
				onpointermove: this.onpointermove,
				onpointerleave: this.onpointerleave,
				onfocus: this.onfocus,
				onblur: this.onblur,
				...this.attachment,
			}))
		);
		(this.opts = e),
			(this.content = t),
			(this.attachment = Ma(this.opts.ref)),
			(this.onpointermove = this.onpointermove.bind(this)),
			(this.onpointerleave = this.onpointerleave.bind(this)),
			(this.onfocus = this.onfocus.bind(this)),
			(this.onblur = this.onblur.bind(this));
	}
	onpointermove(e) {
		if (!e.defaultPrevented && g0(e))
			if (this.opts.disabled.current) this.content.onItemLeave(e);
			else {
				if (this.content.onItemEnter()) return;
				const n = e.currentTarget;
				if (!yn(n)) return;
				n.focus();
			}
	}
	onpointerleave(e) {
		e.defaultPrevented || (g0(e) && this.content.onItemLeave(e));
	}
	onfocus(e) {
		In(() => {
			e.defaultPrevented || this.opts.disabled.current || F(w(this, Ii), !0);
		});
	}
	onblur(e) {
		In(() => {
			e.defaultPrevented || F(w(this, Ii), !1);
		});
	}
	get props() {
		return m(w(this, qo));
	}
	set props(e) {
		F(w(this, qo), e);
	}
}
(Ii = new WeakMap()), (qo = new WeakMap());
var Uo, W0, qh, Ho;
const Hu = class Hu {
	constructor(e, t) {
		W(this, W0);
		Se(this, "opts");
		Se(this, "item");
		Se(this, "root");
		W(this, Uo, !1);
		W(
			this,
			Ho,
			j(() =>
				Fr(this.item.props, {
					onclick: this.onclick,
					onpointerdown: this.onpointerdown,
					onpointerup: this.onpointerup,
					onkeydown: this.onkeydown,
				})
			)
		);
		(this.opts = e),
			(this.item = t),
			(this.root = t.content.parentMenu.root),
			(this.onkeydown = this.onkeydown.bind(this)),
			(this.onclick = this.onclick.bind(this)),
			(this.onpointerdown = this.onpointerdown.bind(this)),
			(this.onpointerup = this.onpointerup.bind(this));
	}
	static create(e) {
		const t = new au(e, fl.get());
		return new Hu(e, t);
	}
	onkeydown(e) {
		const t = this.item.content.search !== "";
		if (!(this.item.opts.disabled.current || (t && e.key === hl)) && dc.includes(e.key)) {
			if (!yn(e.currentTarget)) return;
			e.currentTarget.click(), e.preventDefault();
		}
	}
	onclick(e) {
		this.item.opts.disabled.current || _t(this, W0, qh).call(this);
	}
	onpointerup(e) {
		var t;
		if (!e.defaultPrevented && !w(this, Uo)) {
			if (!yn(e.currentTarget)) return;
			(t = e.currentTarget) == null || t.click();
		}
	}
	onpointerdown(e) {
		Ye(this, Uo, !0);
	}
	get props() {
		return m(w(this, Ho));
	}
	set props(e) {
		F(w(this, Ho), e);
	}
};
(Uo = new WeakMap()),
	(W0 = new WeakSet()),
	(qh = function () {
		if (this.item.opts.disabled.current) return;
		const e = new CustomEvent("menuitemselect", { bubbles: !0, cancelable: !0 });
		if ((this.opts.onSelect.current(e), e.defaultPrevented)) {
			this.item.content.parentMenu.root.isUsingKeyboard.current = !1;
			return;
		}
		this.opts.closeOnSelect.current && this.item.content.parentMenu.root.opts.onClose();
	}),
	(Ho = new WeakMap());
let k0 = Hu;
var _a, Di, o0, Go;
const Gu = class Gu {
	constructor(e, t, n, a) {
		W(this, Di);
		Se(this, "opts");
		Se(this, "item");
		Se(this, "content");
		Se(this, "submenu");
		Se(this, "attachment");
		W(this, _a, null);
		W(
			this,
			Go,
			j(() =>
				Fr(
					{
						"aria-haspopup": "menu",
						"aria-expanded": eu(this.submenu.opts.open.current),
						"data-state": tu(this.submenu.opts.open.current),
						"aria-controls": this.submenu.opts.open.current
							? this.submenu.contentId.current
							: void 0,
						[this.submenu.root.getBitsAttr("sub-trigger")]: "",
						onclick: this.onclick,
						onpointermove: this.onpointermove,
						onpointerleave: this.onpointerleave,
						onkeydown: this.onkeydown,
						...this.attachment,
					},
					this.item.props
				)
			)
		);
		(this.opts = e),
			(this.item = t),
			(this.content = n),
			(this.submenu = a),
			(this.attachment = Ma(this.opts.ref, (i) => (this.submenu.triggerNode = i))),
			(this.onpointerleave = this.onpointerleave.bind(this)),
			(this.onpointermove = this.onpointermove.bind(this)),
			(this.onkeydown = this.onkeydown.bind(this)),
			(this.onclick = this.onclick.bind(this)),
			Yi(() => {
				_t(this, Di, o0).call(this);
			});
	}
	static create(e) {
		const t = fl.get(),
			n = new au(e, t),
			a = Hi.get();
		return new Gu(e, n, t, a);
	}
	onpointermove(e) {
		g0(e) &&
			!this.item.opts.disabled.current &&
			!this.submenu.opts.open.current &&
			!w(this, _a) &&
			!this.content.parentMenu.root.isPointerInTransit &&
			Ye(
				this,
				_a,
				this.content.domContext.setTimeout(() => {
					this.submenu.onOpen(), _t(this, Di, o0).call(this);
				}, this.opts.openDelay.current)
			);
	}
	onpointerleave(e) {
		g0(e) && _t(this, Di, o0).call(this);
	}
	onkeydown(e) {
		const t = this.content.search !== "";
		this.item.opts.disabled.current ||
			(t && e.key === hl) ||
			(Jg[this.submenu.root.opts.dir.current].includes(e.key) &&
				(e.currentTarget.click(), e.preventDefault()));
	}
	onclick(e) {
		if (this.item.opts.disabled.current || !yn(e.currentTarget)) return;
		e.currentTarget.focus();
		const t = new CustomEvent("menusubtriggerselect", { bubbles: !0, cancelable: !0 });
		this.opts.onSelect.current(t),
			this.submenu.opts.open.current ||
				(this.submenu.onOpen(),
				In(() => {
					const n = this.submenu.contentNode;
					n && nu.dispatch(n);
				}));
	}
	get props() {
		return m(w(this, Go));
	}
	set props(e) {
		F(w(this, Go), e);
	}
};
(_a = new WeakMap()),
	(Di = new WeakSet()),
	(o0 = function () {
		w(this, _a) !== null &&
			(this.content.domContext.getWindow().clearTimeout(w(this, _a)), Ye(this, _a, null));
	}),
	(Go = new WeakMap());
let gc = Gu;
var Wo, Vo;
const Wu = class Wu {
	constructor(e, t, n = null) {
		Se(this, "opts");
		Se(this, "item");
		Se(this, "group");
		W(
			this,
			Wo,
			j(() => ({
				checked: this.opts.checked.current,
				indeterminate: this.opts.indeterminate.current,
			}))
		);
		W(
			this,
			Vo,
			j(() => ({
				...this.item.props,
				role: "menuitemcheckbox",
				"aria-checked": _g(this.opts.checked.current, this.opts.indeterminate.current),
				"data-state": e4(this.opts.checked.current),
				[this.item.root.getBitsAttr("checkbox-item")]: "",
			}))
		);
		(this.opts = e),
			(this.item = t),
			(this.group = n),
			this.group &&
				(Ar(
					() => this.group.opts.value.current,
					(a) => {
						this.opts.checked.current = a.includes(this.opts.value.current);
					}
				),
				Ar(
					() => this.opts.checked.current,
					(a) => {
						a
							? this.group.addValue(this.opts.value.current)
							: this.group.removeValue(this.opts.value.current);
					}
				));
	}
	static create(e, t) {
		const n = new k0(e, new au(e, fl.get()));
		return new Wu(e, n, t);
	}
	toggleChecked() {
		this.opts.indeterminate.current
			? ((this.opts.indeterminate.current = !1), (this.opts.checked.current = !0))
			: (this.opts.checked.current = !this.opts.checked.current);
	}
	get snippetProps() {
		return m(w(this, Wo));
	}
	set snippetProps(e) {
		F(w(this, Wo), e);
	}
	get props() {
		return m(w(this, Vo));
	}
	set props(e) {
		F(w(this, Vo), e);
	}
};
(Wo = new WeakMap()), (Vo = new WeakMap());
let vc = Wu;
var Ko;
const Vu = class Vu {
	constructor(e, t) {
		Se(this, "opts");
		Se(this, "root");
		Se(this, "attachment");
		W(
			this,
			Ko,
			j(() => ({
				id: this.opts.id.current,
				role: "group",
				[this.root.getBitsAttr("separator")]: "",
				...this.attachment,
			}))
		);
		(this.opts = e), (this.root = t), (this.attachment = Ma(this.opts.ref));
	}
	static create(e) {
		return new Vu(e, Ph.get());
	}
	get props() {
		return m(w(this, Ko));
	}
	set props(e) {
		F(w(this, Ko), e);
	}
};
Ko = new WeakMap();
let bc = Vu;
var V0, Yo;
const Ku = class Ku {
	constructor(e, t) {
		Se(this, "opts");
		Se(this, "parentMenu");
		Se(this, "attachment");
		Se(this, "onclick", (e) => {
			this.opts.disabled.current ||
				e.detail !== 0 ||
				(this.parentMenu.toggleOpen(), e.preventDefault());
		});
		Se(this, "onpointerdown", (e) => {
			if (!this.opts.disabled.current) {
				if (e.pointerType === "touch") return e.preventDefault();
				e.button === 0 &&
					e.ctrlKey === !1 &&
					(this.parentMenu.toggleOpen(), this.parentMenu.opts.open.current || e.preventDefault());
			}
		});
		Se(this, "onpointerup", (e) => {
			this.opts.disabled.current ||
				(e.pointerType === "touch" && (e.preventDefault(), this.parentMenu.toggleOpen()));
		});
		Se(this, "onkeydown", (e) => {
			if (!this.opts.disabled.current) {
				if (e.key === hl || e.key === yh) {
					this.parentMenu.toggleOpen(), e.preventDefault();
					return;
				}
				e.key === po && (this.parentMenu.onOpen(), e.preventDefault());
			}
		});
		W(
			this,
			V0,
			j(() => {
				if (this.parentMenu.opts.open.current && this.parentMenu.contentId.current)
					return this.parentMenu.contentId.current;
			})
		);
		W(
			this,
			Yo,
			j(() => ({
				id: this.opts.id.current,
				disabled: this.opts.disabled.current,
				"aria-haspopup": "menu",
				"aria-expanded": eu(this.parentMenu.opts.open.current),
				"aria-controls": m(w(this, V0)),
				"data-disabled": vh(this.opts.disabled.current),
				"data-state": tu(this.parentMenu.opts.open.current),
				[this.parentMenu.root.getBitsAttr("trigger")]: "",
				onclick: this.onclick,
				onpointerdown: this.onpointerdown,
				onpointerup: this.onpointerup,
				onkeydown: this.onkeydown,
				...this.attachment,
			}))
		);
		(this.opts = e),
			(this.parentMenu = t),
			(this.attachment = Ma(this.opts.ref, (n) => (this.parentMenu.triggerNode = n)));
	}
	static create(e) {
		return new Ku(e, Hi.get());
	}
	get props() {
		return m(w(this, Yo));
	}
	set props(e) {
		F(w(this, Yo), e);
	}
};
(V0 = new WeakMap()), (Yo = new WeakMap());
let yc = Ku;
class R4 {
	static create(e) {
		const t = Hi.get();
		return Hi.set(new w0(e, t.root, t));
	}
}
globalThis.bitsDismissableLayers ?? (globalThis.bitsDismissableLayers = new Map());
var Li, Za, ka, zi, Bi, Sa, Xo, ia, K0, Vi, Uh, Y0, Pi, X0, Z0, j0, J0, Zo, Hh, Q0, $0;
const Yu = class Yu {
	constructor(e) {
		W(this, Vi);
		Se(this, "opts");
		W(this, Li);
		W(this, Za);
		W(this, ka, { pointerdown: !1 });
		W(this, zi, !1);
		W(this, Bi, !1);
		W(this, Sa);
		W(this, Xo);
		W(this, ia, Lt);
		W(this, K0, (e) => {
			e.defaultPrevented ||
				(this.opts.ref.current &&
					In(() => {
						var t, n;
						!this.opts.ref.current ||
							w(this, J0).call(this, e.target) ||
							(e.target &&
								!w(this, Bi) &&
								((n = (t = w(this, Xo)).current) == null || n.call(t, e)));
					}));
		});
		W(this, Y0, (e) => {
			let t = e;
			t.defaultPrevented && (t = Od(e)), w(this, Li).current(e);
		});
		W(
			this,
			Pi,
			Ad((e) => {
				if (!this.opts.ref.current) {
					w(this, ia).call(this);
					return;
				}
				const t =
					this.opts.isValidEvent.current(e, this.opts.ref.current) || L4(e, this.opts.ref.current);
				if (!w(this, zi) || _t(this, Vi, Hh).call(this) || !t) {
					w(this, ia).call(this);
					return;
				}
				let n = e;
				if (
					(n.defaultPrevented && (n = Od(n)),
					w(this, Za).current !== "close" && w(this, Za).current !== "defer-otherwise-close")
				) {
					w(this, ia).call(this);
					return;
				}
				e.pointerType === "touch"
					? (w(this, ia).call(this),
						Ye(this, ia, yr(w(this, Sa), "click", w(this, Y0), { once: !0 })))
					: w(this, Li).current(n);
			}, 10)
		);
		W(this, X0, (e) => {
			w(this, ka)[e.type] = !0;
		});
		W(this, Z0, (e) => {
			w(this, ka)[e.type] = !1;
		});
		W(this, j0, () => {
			this.opts.ref.current && Ye(this, zi, D4(this.opts.ref.current));
		});
		W(this, J0, (e) => (this.opts.ref.current ? kh(this.opts.ref.current, e) : !1));
		W(
			this,
			Zo,
			Ad(() => {
				for (const e in w(this, ka)) w(this, ka)[e] = !1;
				Ye(this, zi, !1);
			}, 20)
		);
		W(this, Q0, () => {
			Ye(this, Bi, !0);
		});
		W(this, $0, () => {
			Ye(this, Bi, !1);
		});
		Se(this, "props", { onfocuscapture: w(this, Q0), onblurcapture: w(this, $0) });
		(this.opts = e),
			Ye(this, Za, e.interactOutsideBehavior),
			Ye(this, Li, e.onInteractOutside),
			Ye(this, Xo, e.onFocusOutside),
			Rt(() => {
				Ye(this, Sa, Sh(this.opts.ref.current));
			});
		let t = Lt;
		const n = () => {
			w(this, Zo).call(this),
				globalThis.bitsDismissableLayers.delete(this),
				w(this, Pi).destroy(),
				t();
		};
		Ar([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
			if (!(!this.opts.enabled.current || !this.opts.ref.current))
				return (
					mg(1, () => {
						this.opts.ref.current &&
							(globalThis.bitsDismissableLayers.set(this, w(this, Za)),
							t(),
							(t = _t(this, Vi, Uh).call(this)));
					}),
					n
				);
		}),
			Yi(() => {
				w(this, Zo).destroy(),
					globalThis.bitsDismissableLayers.delete(this),
					w(this, Pi).destroy(),
					w(this, ia).call(this),
					t();
			});
	}
	static create(e) {
		return new Yu(e);
	}
};
(Li = new WeakMap()),
	(Za = new WeakMap()),
	(ka = new WeakMap()),
	(zi = new WeakMap()),
	(Bi = new WeakMap()),
	(Sa = new WeakMap()),
	(Xo = new WeakMap()),
	(ia = new WeakMap()),
	(K0 = new WeakMap()),
	(Vi = new WeakSet()),
	(Uh = function () {
		return ri(
			yr(w(this, Sa), "pointerdown", ri(w(this, X0), w(this, j0)), { capture: !0 }),
			yr(w(this, Sa), "pointerdown", ri(w(this, Z0), w(this, Pi))),
			yr(w(this, Sa), "focusin", w(this, K0))
		);
	}),
	(Y0 = new WeakMap()),
	(Pi = new WeakMap()),
	(X0 = new WeakMap()),
	(Z0 = new WeakMap()),
	(j0 = new WeakMap()),
	(J0 = new WeakMap()),
	(Zo = new WeakMap()),
	(Hh = function () {
		return Object.values(w(this, ka)).some(Boolean);
	}),
	(Q0 = new WeakMap()),
	($0 = new WeakMap());
let xc = Yu;
function I4(r = [...globalThis.bitsDismissableLayers]) {
	return r.findLast(([e, { current: t }]) => t === "close" || t === "ignore");
}
function D4(r) {
	const e = [...globalThis.bitsDismissableLayers],
		t = I4(e);
	if (t) return t[0].opts.ref.current === r;
	const [n] = e[0];
	return n.opts.ref.current === r;
}
function L4(r, e) {
	const t = r.target;
	if (!_h(t)) return !1;
	const n = !!t.closest(`[${M4}]`);
	if ("button" in r && r.button > 0 && !n) return !1;
	if ("button" in r && r.button === 0 && n) return !0;
	const a = !!e.closest(`[${C4}]`);
	return n && a ? !1 : Sh(t).documentElement.contains(t) && !kh(e, t) && Xg(r, e);
}
function Od(r) {
	const e = r.currentTarget,
		t = r.target;
	let n;
	r instanceof PointerEvent
		? (n = new PointerEvent(r.type, r))
		: (n = new PointerEvent("pointerdown", r));
	let a = !1;
	return new Proxy(n, {
		get: (o, s) =>
			s === "currentTarget"
				? e
				: s === "target"
					? t
					: s === "preventDefault"
						? () => {
								(a = !0), typeof o.preventDefault == "function" && o.preventDefault();
							}
						: s === "defaultPrevented"
							? a
							: s in o
								? o[s]
								: r[s],
	});
}
function z4(r, e) {
	yt(e, !0);
	let t = q(e, "interactOutsideBehavior", 3, "close"),
		n = q(e, "onInteractOutside", 3, Lt),
		a = q(e, "onFocusOutside", 3, Lt),
		i = q(e, "isValidEvent", 3, () => !1);
	const o = xc.create({
		id: ge(() => e.id),
		interactOutsideBehavior: ge(() => t()),
		onInteractOutside: ge(() => n()),
		enabled: ge(() => e.enabled),
		onFocusOutside: ge(() => a()),
		isValidEvent: ge(() => i()),
		ref: e.ref,
	});
	var s = He(),
		l = pe(s);
	It(
		l,
		() => e.children ?? Qt,
		() => ({ props: o.props })
	),
		C(r, s),
		xt();
}
globalThis.bitsEscapeLayers ?? (globalThis.bitsEscapeLayers = new Map());
var el, tl;
const Xu = class Xu {
	constructor(e) {
		Se(this, "opts");
		Se(this, "domContext");
		W(this, el, () => yr(this.domContext.getDocument(), "keydown", w(this, tl), { passive: !1 }));
		W(this, tl, (e) => {
			if (e.key !== Eg || !B4(this)) return;
			const t = new KeyboardEvent(e.type, e);
			e.preventDefault();
			const n = this.opts.escapeKeydownBehavior.current;
			(n !== "close" && n !== "defer-otherwise-close") || this.opts.onEscapeKeydown.current(t);
		});
		(this.opts = e), (this.domContext = new $c(this.opts.ref));
		let t = Lt;
		Ar(
			() => e.enabled.current,
			(n) => (
				n &&
					(globalThis.bitsEscapeLayers.set(this, e.escapeKeydownBehavior),
					(t = w(this, el).call(this))),
				() => {
					t(), globalThis.bitsEscapeLayers.delete(this);
				}
			)
		);
	}
	static create(e) {
		return new Xu(e);
	}
};
(el = new WeakMap()), (tl = new WeakMap());
let wc = Xu;
function B4(r) {
	const e = [...globalThis.bitsEscapeLayers],
		t = e.findLast(([a, { current: i }]) => i === "close" || i === "ignore");
	if (t) return t[0] === r;
	const [n] = e[0];
	return n === r;
}
function P4(r, e) {
	yt(e, !0);
	let t = q(e, "escapeKeydownBehavior", 3, "close"),
		n = q(e, "onEscapeKeydown", 3, Lt);
	wc.create({
		escapeKeydownBehavior: ge(() => t()),
		onEscapeKeydown: ge(() => n()),
		enabled: ge(() => e.enabled),
		ref: e.ref,
	});
	var a = He(),
		i = pe(a);
	It(i, () => e.children ?? Qt), C(r, a), xt();
}
var oa, jo, ja;
const rl = class rl {
	constructor() {
		W(this, oa, Rn([]));
		W(this, jo, new WeakMap());
		W(this, ja, new WeakMap());
	}
	static getInstance() {
		return this.instance || (this.instance = new rl()), this.instance;
	}
	register(e) {
		const t = this.getActive();
		t && t !== e && t.pause();
		const n = document.activeElement;
		n && n !== document.body && w(this, ja).set(e, n),
			(w(this, oa).current = w(this, oa).current.filter((a) => a !== e)),
			w(this, oa).current.unshift(e);
	}
	unregister(e) {
		w(this, oa).current = w(this, oa).current.filter((n) => n !== e);
		const t = this.getActive();
		t && t.resume();
	}
	getActive() {
		return w(this, oa).current[0];
	}
	setFocusMemory(e, t) {
		w(this, jo).set(e, t);
	}
	getFocusMemory(e) {
		return w(this, jo).get(e);
	}
	isActiveScope(e) {
		return this.getActive() === e;
	}
	setPreFocusMemory(e, t) {
		w(this, ja).set(e, t);
	}
	getPreFocusMemory(e) {
		return w(this, ja).get(e);
	}
	clearPreFocusMemory(e) {
		w(this, ja).delete(e);
	}
};
(oa = new WeakMap()), (jo = new WeakMap()), (ja = new WeakMap()), Se(rl, "instance");
let _c = rl;
var Ea, Dr, Vr, Ja, Ta, hr, Gh, Wh, Vh, Kh, Sc, s0, Ec;
const Zu = class Zu {
	constructor(e) {
		W(this, hr);
		W(this, Ea, !1);
		W(this, Dr, null);
		W(this, Vr, _c.getInstance());
		W(this, Ja, []);
		W(this, Ta);
		Ye(this, Ta, e);
	}
	get paused() {
		return w(this, Ea);
	}
	pause() {
		Ye(this, Ea, !0);
	}
	resume() {
		Ye(this, Ea, !1);
	}
	mount(e) {
		w(this, Dr) && this.unmount(),
			Ye(this, Dr, e),
			w(this, Vr).register(this),
			_t(this, hr, Kh).call(this),
			_t(this, hr, Wh).call(this);
	}
	unmount() {
		w(this, Dr) &&
			(_t(this, hr, Gh).call(this),
			_t(this, hr, Vh).call(this),
			w(this, Vr).unregister(this),
			w(this, Vr).clearPreFocusMemory(this),
			Ye(this, Dr, null));
	}
	static use(e) {
		let t = null;
		return (
			Ar([() => e.ref.current, () => e.enabled.current], ([n, a]) => {
				n && a ? (t || (t = new Zu(e)), t.mount(n)) : t && (t.unmount(), (t = null));
			}),
			Yi(() => {
				t == null || t.unmount();
			}),
			{
				get props() {
					return { tabindex: -1 };
				},
			}
		);
	}
};
(Ea = new WeakMap()),
	(Dr = new WeakMap()),
	(Vr = new WeakMap()),
	(Ja = new WeakMap()),
	(Ta = new WeakMap()),
	(hr = new WeakSet()),
	(Gh = function () {
		for (const e of w(this, Ja)) e();
		Ye(this, Ja, []);
	}),
	(Wh = function () {
		if (!w(this, Dr)) return;
		const e = new CustomEvent("focusScope.onOpenAutoFocus", { bubbles: !1, cancelable: !0 });
		w(this, Ta).onOpenAutoFocus.current(e),
			e.defaultPrevented ||
				requestAnimationFrame(() => {
					if (!w(this, Dr)) return;
					const t = _t(this, hr, s0).call(this);
					t ? (t.focus(), w(this, Vr).setFocusMemory(this, t)) : w(this, Dr).focus();
				});
	}),
	(Vh = function () {
		var t, n;
		const e = new CustomEvent("focusScope.onCloseAutoFocus", { bubbles: !1, cancelable: !0 });
		if (
			((n = (t = w(this, Ta).onCloseAutoFocus).current) == null || n.call(t, e),
			!e.defaultPrevented)
		) {
			const a = w(this, Vr).getPreFocusMemory(this);
			if (a && document.contains(a))
				try {
					a.focus();
				} catch {
					document.body.focus();
				}
		}
	}),
	(Kh = function () {
		if (!w(this, Dr) || !w(this, Ta).trap.current) return;
		const e = w(this, Dr),
			t = e.ownerDocument,
			n = (o) => {
				if (w(this, Ea) || !w(this, Vr).isActiveScope(this)) return;
				const s = o.target;
				if (!s) return;
				if (e.contains(s)) w(this, Vr).setFocusMemory(this, s);
				else {
					const u = w(this, Vr).getFocusMemory(this);
					if (u && e.contains(u) && Lh(u)) o.preventDefault(), u.focus();
					else {
						const h = _t(this, hr, s0).call(this),
							f = _t(this, hr, Ec).call(this)[0];
						(h || f || e).focus();
					}
				}
			},
			a = (o) => {
				if (!w(this, Ta).loop || w(this, Ea) || o.key !== "Tab" || !w(this, Vr).isActiveScope(this))
					return;
				const s = _t(this, hr, Sc).call(this);
				if (s.length < 2) return;
				const l = s[0],
					u = s[s.length - 1];
				!o.shiftKey && t.activeElement === u
					? (o.preventDefault(), l.focus())
					: o.shiftKey && t.activeElement === l && (o.preventDefault(), u.focus());
			};
		w(this, Ja).push(yr(t, "focusin", n, { capture: !0 }), yr(e, "keydown", a));
		const i = new MutationObserver(() => {
			const o = w(this, Vr).getFocusMemory(this);
			if (o && !e.contains(o)) {
				const s = _t(this, hr, s0).call(this),
					l = _t(this, hr, Ec).call(this)[0],
					u = s || l;
				u ? (u.focus(), w(this, Vr).setFocusMemory(this, u)) : e.focus();
			}
		});
		i.observe(e, { childList: !0, subtree: !0 }), w(this, Ja).push(() => i.disconnect());
	}),
	(Sc = function () {
		return w(this, Dr) ? Ih(w(this, Dr), { includeContainer: !1, getShadowRoot: !0 }) : [];
	}),
	(s0 = function () {
		return _t(this, hr, Sc).call(this)[0] || null;
	}),
	(Ec = function () {
		return w(this, Dr) ? Dh(w(this, Dr), { includeContainer: !1, getShadowRoot: !0 }) : [];
	});
let kc = Zu;
function F4(r, e) {
	yt(e, !0);
	let t = q(e, "enabled", 3, !1),
		n = q(e, "trapFocus", 3, !1),
		a = q(e, "loop", 3, !1),
		i = q(e, "onCloseAutoFocus", 3, Lt),
		o = q(e, "onOpenAutoFocus", 3, Lt);
	const s = kc.use({
		enabled: ge(() => t()),
		trap: ge(() => n()),
		loop: a(),
		onCloseAutoFocus: ge(() => i()),
		onOpenAutoFocus: ge(() => o()),
		ref: e.ref,
	});
	var l = He(),
		u = pe(l);
	It(
		u,
		() => e.focusScope ?? Qt,
		() => ({ props: s.props })
	),
		C(r, l),
		xt();
}
globalThis.bitsTextSelectionLayers ?? (globalThis.bitsTextSelectionLayers = new Map());
var Fi, nl, Yh, al, Jo;
const ju = class ju {
	constructor(e) {
		W(this, nl);
		Se(this, "opts");
		Se(this, "domContext");
		W(this, Fi, Lt);
		W(this, al, (e) => {
			const t = this.opts.ref.current,
				n = e.target;
			!yn(t) ||
				!yn(n) ||
				!this.opts.enabled.current ||
				!U4(this) ||
				!xg(t, n) ||
				(this.opts.onPointerDown.current(e),
				!e.defaultPrevented && Ye(this, Fi, q4(t, this.domContext.getDocument().body)));
		});
		W(this, Jo, () => {
			w(this, Fi).call(this), Ye(this, Fi, Lt);
		});
		(this.opts = e), (this.domContext = new $c(e.ref));
		let t = Lt;
		Ar(
			() => this.opts.enabled.current,
			(n) => (
				n &&
					(globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled),
					t(),
					(t = _t(this, nl, Yh).call(this))),
				() => {
					t(), w(this, Jo).call(this), globalThis.bitsTextSelectionLayers.delete(this);
				}
			)
		);
	}
	static create(e) {
		return new ju(e);
	}
};
(Fi = new WeakMap()),
	(nl = new WeakSet()),
	(Yh = function () {
		return ri(
			yr(this.domContext.getDocument(), "pointerdown", w(this, al)),
			yr(this.domContext.getDocument(), "pointerup", uh(w(this, Jo), this.opts.onPointerUp.current))
		);
	}),
	(al = new WeakMap()),
	(Jo = new WeakMap());
let Tc = ju;
const Nd = (r) => r.style.userSelect || r.style.webkitUserSelect;
function q4(r, e) {
	const t = Nd(e),
		n = Nd(r);
	return (
		Ps(e, "none"),
		Ps(r, "text"),
		() => {
			Ps(e, t), Ps(r, n);
		}
	);
}
function Ps(r, e) {
	(r.style.userSelect = e), (r.style.webkitUserSelect = e);
}
function U4(r) {
	const e = [...globalThis.bitsTextSelectionLayers];
	if (!e.length) return !1;
	const t = e.at(-1);
	return t ? t[0] === r : !1;
}
function H4(r, e) {
	yt(e, !0);
	let t = q(e, "preventOverflowTextSelection", 3, !0),
		n = q(e, "onPointerDown", 3, Lt),
		a = q(e, "onPointerUp", 3, Lt);
	Tc.create({
		id: ge(() => e.id),
		onPointerDown: ge(() => n()),
		onPointerUp: ge(() => a()),
		enabled: ge(() => e.enabled && t()),
		ref: e.ref,
	});
	var i = He(),
		o = pe(i);
	It(o, () => e.children ?? Qt), C(r, i), xt();
}
globalThis.bitsIdCounter ?? (globalThis.bitsIdCounter = { current: 0 });
function iu(r = "bits") {
	return globalThis.bitsIdCounter.current++, `${r}-${globalThis.bitsIdCounter.current}`;
}
var Qo, qi, Qa, $a, il, Xh;
class G4 {
	constructor(e) {
		W(this, il);
		W(this, Qo);
		W(this, qi, 0);
		W(this, Qa, Ee());
		W(this, $a);
		Ye(this, Qo, e);
	}
	get(...e) {
		return (
			Ye(this, qi, w(this, qi) + 1),
			m(w(this, Qa)) === void 0 &&
				Ye(
					this,
					$a,
					Kc(() => {
						F(w(this, Qa), w(this, Qo).call(this, ...e), !0);
					})
				),
			Rt(() => () => {
				_t(this, il, Xh).call(this);
			}),
			m(w(this, Qa))
		);
	}
}
(Qo = new WeakMap()),
	(qi = new WeakMap()),
	(Qa = new WeakMap()),
	($a = new WeakMap()),
	(il = new WeakSet()),
	(Xh = function () {
		Ye(this, qi, w(this, qi) - 1),
			w(this, $a) &&
				w(this, qi) <= 0 &&
				(w(this, $a).call(this), F(w(this, Qa), void 0), Ye(this, $a, void 0));
	});
const l0 = new oc();
let Fs = Ee(null),
	Ua = null,
	io = null,
	oo = !1;
const Rd = ge(() => {
	for (const r of l0.values()) if (r) return !0;
	return !1;
});
let Ll = null;
const W4 = new G4(() => {
	function r() {
		document.body.setAttribute("style", m(Fs) ?? ""),
			document.body.style.removeProperty("--scrollbar-width"),
			Td && (Ua == null || Ua()),
			F(Fs, null);
	}
	function e() {
		io !== null && (window.clearTimeout(io), (io = null));
	}
	function t(a, i) {
		e(), (oo = !0), (Ll = Date.now());
		const o = Ll,
			s = () => {
				(io = null), Ll === o && (Zh(l0) ? (oo = !1) : ((oo = !1), i()));
			},
			l = a === null ? 24 : a;
		io = window.setTimeout(s, l);
	}
	function n() {
		m(Fs) === null && l0.size === 0 && !oo && F(Fs, document.body.getAttribute("style"), !0);
	}
	return (
		Ar(
			() => Rd.current,
			() => {
				if (!Rd.current) return;
				n(), (oo = !1);
				const a = getComputedStyle(document.body),
					i = window.innerWidth - document.documentElement.clientWidth,
					s = {
						padding: Number.parseInt(a.paddingRight ?? "0", 10) + i,
						margin: Number.parseInt(a.marginRight ?? "0", 10),
					};
				i > 0 &&
					((document.body.style.paddingRight = `${s.padding}px`),
					(document.body.style.marginRight = `${s.margin}px`),
					document.body.style.setProperty("--scrollbar-width", `${i}px`),
					(document.body.style.overflow = "hidden")),
					Td &&
						(Ua = yr(
							document,
							"touchmove",
							(l) => {
								l.target === document.documentElement &&
									(l.touches.length > 1 || l.preventDefault());
							},
							{ passive: !1 }
						)),
					In(() => {
						(document.body.style.pointerEvents = "none"), (document.body.style.overflow = "hidden");
					});
			}
		),
		Yi(() => () => {
			Ua == null || Ua();
		}),
		{
			get lockMap() {
				return l0;
			},
			resetBodyStyle: r,
			scheduleCleanupIfNoNewLocks: t,
			cancelPendingCleanup: e,
			ensureInitialStyleCaptured: n,
		}
	);
});
var ei, $o, es, Kr;
class V4 {
	constructor(e, t = () => null) {
		W(this, ei, iu());
		W(this, $o);
		W(this, es, () => null);
		W(this, Kr);
		Se(this, "locked");
		Ye(this, $o, e),
			Ye(this, es, t),
			Ye(this, Kr, W4.get()),
			w(this, Kr) &&
				(w(this, Kr).cancelPendingCleanup(),
				w(this, Kr).ensureInitialStyleCaptured(),
				w(this, Kr).lockMap.set(w(this, ei), w(this, $o) ?? !1),
				(this.locked = ge(
					() => w(this, Kr).lockMap.get(w(this, ei)) ?? !1,
					(n) => w(this, Kr).lockMap.set(w(this, ei), n)
				)),
				Yi(() => {
					if ((w(this, Kr).lockMap.delete(w(this, ei)), Zh(w(this, Kr).lockMap))) return;
					const n = w(this, es).call(this);
					w(this, Kr).scheduleCleanupIfNoNewLocks(n, () => {
						w(this, Kr).resetBodyStyle();
					});
				}));
	}
}
(ei = new WeakMap()), ($o = new WeakMap()), (es = new WeakMap()), (Kr = new WeakMap());
function Zh(r) {
	for (const [e, t] of r) if (t) return !0;
	return !1;
}
function Id(r, e) {
	yt(e, !0);
	let t = q(e, "preventScroll", 3, !0),
		n = q(e, "restoreScrollDelay", 3, null);
	t() && new V4(t(), () => n()), xt();
}
const K4 = ["top", "right", "bottom", "left"],
	Na = Math.min,
	Qr = Math.max,
	S0 = Math.round,
	qs = Math.floor,
	Pn = (r) => ({ x: r, y: r }),
	Y4 = { left: "right", right: "left", bottom: "top", top: "bottom" },
	X4 = { start: "end", end: "start" };
function Ac(r, e, t) {
	return Qr(r, Na(e, t));
}
function ua(r, e) {
	return typeof r == "function" ? r(e) : r;
}
function da(r) {
	return r.split("-")[0];
}
function Xi(r) {
	return r.split("-")[1];
}
function ou(r) {
	return r === "x" ? "y" : "x";
}
function su(r) {
	return r === "y" ? "height" : "width";
}
const Z4 = new Set(["top", "bottom"]);
function Dn(r) {
	return Z4.has(da(r)) ? "y" : "x";
}
function lu(r) {
	return ou(Dn(r));
}
function j4(r, e, t) {
	t === void 0 && (t = !1);
	const n = Xi(r),
		a = lu(r),
		i = su(a);
	let o =
		a === "x" ? (n === (t ? "end" : "start") ? "right" : "left") : n === "start" ? "bottom" : "top";
	return e.reference[i] > e.floating[i] && (o = E0(o)), [o, E0(o)];
}
function J4(r) {
	const e = E0(r);
	return [Mc(r), e, Mc(e)];
}
function Mc(r) {
	return r.replace(/start|end/g, (e) => X4[e]);
}
const Dd = ["left", "right"],
	Ld = ["right", "left"],
	Q4 = ["top", "bottom"],
	$4 = ["bottom", "top"];
function e2(r, e, t) {
	switch (r) {
		case "top":
		case "bottom":
			return t ? (e ? Ld : Dd) : e ? Dd : Ld;
		case "left":
		case "right":
			return e ? Q4 : $4;
		default:
			return [];
	}
}
function t2(r, e, t, n) {
	const a = Xi(r);
	let i = e2(da(r), t === "start", n);
	return a && ((i = i.map((o) => o + "-" + a)), e && (i = i.concat(i.map(Mc)))), i;
}
function E0(r) {
	return r.replace(/left|right|bottom|top/g, (e) => Y4[e]);
}
function r2(r) {
	return { top: 0, right: 0, bottom: 0, left: 0, ...r };
}
function jh(r) {
	return typeof r != "number" ? r2(r) : { top: r, right: r, bottom: r, left: r };
}
function T0(r) {
	const { x: e, y: t, width: n, height: a } = r;
	return { width: n, height: a, top: t, left: e, right: e + n, bottom: t + a, x: e, y: t };
}
function zd(r, e, t) {
	let { reference: n, floating: a } = r;
	const i = Dn(e),
		o = lu(e),
		s = su(o),
		l = da(e),
		u = i === "y",
		h = n.x + n.width / 2 - a.width / 2,
		f = n.y + n.height / 2 - a.height / 2,
		p = n[s] / 2 - a[s] / 2;
	let g;
	switch (l) {
		case "top":
			g = { x: h, y: n.y - a.height };
			break;
		case "bottom":
			g = { x: h, y: n.y + n.height };
			break;
		case "right":
			g = { x: n.x + n.width, y: f };
			break;
		case "left":
			g = { x: n.x - a.width, y: f };
			break;
		default:
			g = { x: n.x, y: n.y };
	}
	switch (Xi(e)) {
		case "start":
			g[o] -= p * (t && u ? -1 : 1);
			break;
		case "end":
			g[o] += p * (t && u ? -1 : 1);
			break;
	}
	return g;
}
const n2 = async (r, e, t) => {
	const { placement: n = "bottom", strategy: a = "absolute", middleware: i = [], platform: o } = t,
		s = i.filter(Boolean),
		l = await (o.isRTL == null ? void 0 : o.isRTL(e));
	let u = await o.getElementRects({ reference: r, floating: e, strategy: a }),
		{ x: h, y: f } = zd(u, n, l),
		p = n,
		g = {},
		y = 0;
	for (let x = 0; x < s.length; x++) {
		const { name: _, fn: k } = s[x],
			{
				x: T,
				y: B,
				data: A,
				reset: N,
			} = await k({
				x: h,
				y: f,
				initialPlacement: n,
				placement: p,
				strategy: a,
				middlewareData: g,
				rects: u,
				platform: o,
				elements: { reference: r, floating: e },
			});
		(h = T ?? h),
			(f = B ?? f),
			(g = { ...g, [_]: { ...g[_], ...A } }),
			N &&
				y <= 50 &&
				(y++,
				typeof N == "object" &&
					(N.placement && (p = N.placement),
					N.rects &&
						(u =
							N.rects === !0
								? await o.getElementRects({ reference: r, floating: e, strategy: a })
								: N.rects),
					({ x: h, y: f } = zd(u, p, l))),
				(x = -1));
	}
	return { x: h, y: f, placement: p, strategy: a, middlewareData: g };
};
async function vo(r, e) {
	var t;
	e === void 0 && (e = {});
	const { x: n, y: a, platform: i, rects: o, elements: s, strategy: l } = r,
		{
			boundary: u = "clippingAncestors",
			rootBoundary: h = "viewport",
			elementContext: f = "floating",
			altBoundary: p = !1,
			padding: g = 0,
		} = ua(e, r),
		y = jh(g),
		_ = s[p ? (f === "floating" ? "reference" : "floating") : f],
		k = T0(
			await i.getClippingRect({
				element:
					(t = await (i.isElement == null ? void 0 : i.isElement(_))) == null || t
						? _
						: _.contextElement ||
							(await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating))),
				boundary: u,
				rootBoundary: h,
				strategy: l,
			})
		),
		T =
			f === "floating"
				? { x: n, y: a, width: o.floating.width, height: o.floating.height }
				: o.reference,
		B = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)),
		A = (await (i.isElement == null ? void 0 : i.isElement(B)))
			? (await (i.getScale == null ? void 0 : i.getScale(B))) || { x: 1, y: 1 }
			: { x: 1, y: 1 },
		N = T0(
			i.convertOffsetParentRelativeRectToViewportRelativeRect
				? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
						elements: s,
						rect: T,
						offsetParent: B,
						strategy: l,
					})
				: T
		);
	return {
		top: (k.top - N.top + y.top) / A.y,
		bottom: (N.bottom - k.bottom + y.bottom) / A.y,
		left: (k.left - N.left + y.left) / A.x,
		right: (N.right - k.right + y.right) / A.x,
	};
}
const a2 = (r) => ({
		name: "arrow",
		options: r,
		async fn(e) {
			const { x: t, y: n, placement: a, rects: i, platform: o, elements: s, middlewareData: l } = e,
				{ element: u, padding: h = 0 } = ua(r, e) || {};
			if (u == null) return {};
			const f = jh(h),
				p = { x: t, y: n },
				g = lu(a),
				y = su(g),
				x = await o.getDimensions(u),
				_ = g === "y",
				k = _ ? "top" : "left",
				T = _ ? "bottom" : "right",
				B = _ ? "clientHeight" : "clientWidth",
				A = i.reference[y] + i.reference[g] - p[g] - i.floating[y],
				N = p[g] - i.reference[g],
				z = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
			let I = z ? z[B] : 0;
			(!I || !(await (o.isElement == null ? void 0 : o.isElement(z)))) &&
				(I = s.floating[B] || i.floating[y]);
			const G = A / 2 - N / 2,
				re = I / 2 - x[y] / 2 - 1,
				V = Na(f[k], re),
				se = Na(f[T], re),
				ce = V,
				Ce = I - x[y] - se,
				Q = I / 2 - x[y] / 2 + G,
				$ = Ac(ce, Q, Ce),
				K =
					!l.arrow &&
					Xi(a) != null &&
					Q !== $ &&
					i.reference[y] / 2 - (Q < ce ? V : se) - x[y] / 2 < 0,
				le = K ? (Q < ce ? Q - ce : Q - Ce) : 0;
			return {
				[g]: p[g] + le,
				data: { [g]: $, centerOffset: Q - $ - le, ...(K && { alignmentOffset: le }) },
				reset: K,
			};
		},
	}),
	i2 = function (r) {
		return (
			r === void 0 && (r = {}),
			{
				name: "flip",
				options: r,
				async fn(e) {
					var t, n;
					const {
							placement: a,
							middlewareData: i,
							rects: o,
							initialPlacement: s,
							platform: l,
							elements: u,
						} = e,
						{
							mainAxis: h = !0,
							crossAxis: f = !0,
							fallbackPlacements: p,
							fallbackStrategy: g = "bestFit",
							fallbackAxisSideDirection: y = "none",
							flipAlignment: x = !0,
							..._
						} = ua(r, e);
					if ((t = i.arrow) != null && t.alignmentOffset) return {};
					const k = da(a),
						T = Dn(s),
						B = da(s) === s,
						A = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
						N = p || (B || !x ? [E0(s)] : J4(s)),
						z = y !== "none";
					!p && z && N.push(...t2(s, x, y, A));
					const I = [s, ...N],
						G = await vo(e, _),
						re = [];
					let V = ((n = i.flip) == null ? void 0 : n.overflows) || [];
					if ((h && re.push(G[k]), f)) {
						const Q = j4(a, o, A);
						re.push(G[Q[0]], G[Q[1]]);
					}
					if (((V = [...V, { placement: a, overflows: re }]), !re.every((Q) => Q <= 0))) {
						var se, ce;
						const Q = (((se = i.flip) == null ? void 0 : se.index) || 0) + 1,
							$ = I[Q];
						if (
							$ &&
							(!(f === "alignment" ? T !== Dn($) : !1) ||
								V.every((ie) => (Dn(ie.placement) === T ? ie.overflows[0] > 0 : !0)))
						)
							return { data: { index: Q, overflows: V }, reset: { placement: $ } };
						let K =
							(ce = V.filter((le) => le.overflows[0] <= 0).sort(
								(le, ie) => le.overflows[1] - ie.overflows[1]
							)[0]) == null
								? void 0
								: ce.placement;
						if (!K)
							switch (g) {
								case "bestFit": {
									var Ce;
									const le =
										(Ce = V.filter((ie) => {
											if (z) {
												const oe = Dn(ie.placement);
												return oe === T || oe === "y";
											}
											return !0;
										})
											.map((ie) => [
												ie.placement,
												ie.overflows.filter((oe) => oe > 0).reduce((oe, te) => oe + te, 0),
											])
											.sort((ie, oe) => ie[1] - oe[1])[0]) == null
											? void 0
											: Ce[0];
									le && (K = le);
									break;
								}
								case "initialPlacement":
									K = s;
									break;
							}
						if (a !== K) return { reset: { placement: K } };
					}
					return {};
				},
			}
		);
	};
function Bd(r, e) {
	return {
		top: r.top - e.height,
		right: r.right - e.width,
		bottom: r.bottom - e.height,
		left: r.left - e.width,
	};
}
function Pd(r) {
	return K4.some((e) => r[e] >= 0);
}
const o2 = function (r) {
		return (
			r === void 0 && (r = {}),
			{
				name: "hide",
				options: r,
				async fn(e) {
					const { rects: t } = e,
						{ strategy: n = "referenceHidden", ...a } = ua(r, e);
					switch (n) {
						case "referenceHidden": {
							const i = await vo(e, { ...a, elementContext: "reference" }),
								o = Bd(i, t.reference);
							return { data: { referenceHiddenOffsets: o, referenceHidden: Pd(o) } };
						}
						case "escaped": {
							const i = await vo(e, { ...a, altBoundary: !0 }),
								o = Bd(i, t.floating);
							return { data: { escapedOffsets: o, escaped: Pd(o) } };
						}
						default:
							return {};
					}
				},
			}
		);
	},
	Jh = new Set(["left", "top"]);
async function s2(r, e) {
	const { placement: t, platform: n, elements: a } = r,
		i = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)),
		o = da(t),
		s = Xi(t),
		l = Dn(t) === "y",
		u = Jh.has(o) ? -1 : 1,
		h = i && l ? -1 : 1,
		f = ua(e, r);
	let {
		mainAxis: p,
		crossAxis: g,
		alignmentAxis: y,
	} = typeof f == "number"
		? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
		: { mainAxis: f.mainAxis || 0, crossAxis: f.crossAxis || 0, alignmentAxis: f.alignmentAxis };
	return (
		s && typeof y == "number" && (g = s === "end" ? y * -1 : y),
		l ? { x: g * h, y: p * u } : { x: p * u, y: g * h }
	);
}
const l2 = function (r) {
		return (
			r === void 0 && (r = 0),
			{
				name: "offset",
				options: r,
				async fn(e) {
					var t, n;
					const { x: a, y: i, placement: o, middlewareData: s } = e,
						l = await s2(e, r);
					return o === ((t = s.offset) == null ? void 0 : t.placement) &&
						(n = s.arrow) != null &&
						n.alignmentOffset
						? {}
						: { x: a + l.x, y: i + l.y, data: { ...l, placement: o } };
				},
			}
		);
	},
	c2 = function (r) {
		return (
			r === void 0 && (r = {}),
			{
				name: "shift",
				options: r,
				async fn(e) {
					const { x: t, y: n, placement: a } = e,
						{
							mainAxis: i = !0,
							crossAxis: o = !1,
							limiter: s = {
								fn: (_) => {
									let { x: k, y: T } = _;
									return { x: k, y: T };
								},
							},
							...l
						} = ua(r, e),
						u = { x: t, y: n },
						h = await vo(e, l),
						f = Dn(da(a)),
						p = ou(f);
					let g = u[p],
						y = u[f];
					if (i) {
						const _ = p === "y" ? "top" : "left",
							k = p === "y" ? "bottom" : "right",
							T = g + h[_],
							B = g - h[k];
						g = Ac(T, g, B);
					}
					if (o) {
						const _ = f === "y" ? "top" : "left",
							k = f === "y" ? "bottom" : "right",
							T = y + h[_],
							B = y - h[k];
						y = Ac(T, y, B);
					}
					const x = s.fn({ ...e, [p]: g, [f]: y });
					return { ...x, data: { x: x.x - t, y: x.y - n, enabled: { [p]: i, [f]: o } } };
				},
			}
		);
	},
	u2 = function (r) {
		return (
			r === void 0 && (r = {}),
			{
				options: r,
				fn(e) {
					const { x: t, y: n, placement: a, rects: i, middlewareData: o } = e,
						{ offset: s = 0, mainAxis: l = !0, crossAxis: u = !0 } = ua(r, e),
						h = { x: t, y: n },
						f = Dn(a),
						p = ou(f);
					let g = h[p],
						y = h[f];
					const x = ua(s, e),
						_ =
							typeof x == "number"
								? { mainAxis: x, crossAxis: 0 }
								: { mainAxis: 0, crossAxis: 0, ...x };
					if (l) {
						const B = p === "y" ? "height" : "width",
							A = i.reference[p] - i.floating[B] + _.mainAxis,
							N = i.reference[p] + i.reference[B] - _.mainAxis;
						g < A ? (g = A) : g > N && (g = N);
					}
					if (u) {
						var k, T;
						const B = p === "y" ? "width" : "height",
							A = Jh.has(da(a)),
							N =
								i.reference[f] -
								i.floating[B] +
								((A && ((k = o.offset) == null ? void 0 : k[f])) || 0) +
								(A ? 0 : _.crossAxis),
							z =
								i.reference[f] +
								i.reference[B] +
								(A ? 0 : ((T = o.offset) == null ? void 0 : T[f]) || 0) -
								(A ? _.crossAxis : 0);
						y < N ? (y = N) : y > z && (y = z);
					}
					return { [p]: g, [f]: y };
				},
			}
		);
	},
	d2 = function (r) {
		return (
			r === void 0 && (r = {}),
			{
				name: "size",
				options: r,
				async fn(e) {
					var t, n;
					const { placement: a, rects: i, platform: o, elements: s } = e,
						{ apply: l = () => {}, ...u } = ua(r, e),
						h = await vo(e, u),
						f = da(a),
						p = Xi(a),
						g = Dn(a) === "y",
						{ width: y, height: x } = i.floating;
					let _, k;
					f === "top" || f === "bottom"
						? ((_ = f),
							(k =
								p === ((await (o.isRTL == null ? void 0 : o.isRTL(s.floating))) ? "start" : "end")
									? "left"
									: "right"))
						: ((k = f), (_ = p === "end" ? "top" : "bottom"));
					const T = x - h.top - h.bottom,
						B = y - h.left - h.right,
						A = Na(x - h[_], T),
						N = Na(y - h[k], B),
						z = !e.middlewareData.shift;
					let I = A,
						G = N;
					if (
						((t = e.middlewareData.shift) != null && t.enabled.x && (G = B),
						(n = e.middlewareData.shift) != null && n.enabled.y && (I = T),
						z && !p)
					) {
						const V = Qr(h.left, 0),
							se = Qr(h.right, 0),
							ce = Qr(h.top, 0),
							Ce = Qr(h.bottom, 0);
						g
							? (G = y - 2 * (V !== 0 || se !== 0 ? V + se : Qr(h.left, h.right)))
							: (I = x - 2 * (ce !== 0 || Ce !== 0 ? ce + Ce : Qr(h.top, h.bottom)));
					}
					await l({ ...e, availableWidth: G, availableHeight: I });
					const re = await o.getDimensions(s.floating);
					return y !== re.width || x !== re.height ? { reset: { rects: !0 } } : {};
				},
			}
		);
	};
function ml() {
	return typeof window < "u";
}
function Zi(r) {
	return Qh(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function en(r) {
	var e;
	return (r == null || (e = r.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function qn(r) {
	var e;
	return (e = (Qh(r) ? r.ownerDocument : r.document) || window.document) == null
		? void 0
		: e.documentElement;
}
function Qh(r) {
	return ml() ? r instanceof Node || r instanceof en(r).Node : !1;
}
function xn(r) {
	return ml() ? r instanceof Element || r instanceof en(r).Element : !1;
}
function Fn(r) {
	return ml() ? r instanceof HTMLElement || r instanceof en(r).HTMLElement : !1;
}
function Fd(r) {
	return !ml() || typeof ShadowRoot > "u"
		? !1
		: r instanceof ShadowRoot || r instanceof en(r).ShadowRoot;
}
const h2 = new Set(["inline", "contents"]);
function Cs(r) {
	const { overflow: e, overflowX: t, overflowY: n, display: a } = wn(r);
	return /auto|scroll|overlay|hidden|clip/.test(e + n + t) && !h2.has(a);
}
const f2 = new Set(["table", "td", "th"]);
function m2(r) {
	return f2.has(Zi(r));
}
const p2 = [":popover-open", ":modal"];
function pl(r) {
	return p2.some((e) => {
		try {
			return r.matches(e);
		} catch {
			return !1;
		}
	});
}
const g2 = ["transform", "translate", "scale", "rotate", "perspective"],
	v2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
	b2 = ["paint", "layout", "strict", "content"];
function cu(r) {
	const e = uu(),
		t = xn(r) ? wn(r) : r;
	return (
		g2.some((n) => (t[n] ? t[n] !== "none" : !1)) ||
		(t.containerType ? t.containerType !== "normal" : !1) ||
		(!e && (t.backdropFilter ? t.backdropFilter !== "none" : !1)) ||
		(!e && (t.filter ? t.filter !== "none" : !1)) ||
		v2.some((n) => (t.willChange || "").includes(n)) ||
		b2.some((n) => (t.contain || "").includes(n))
	);
}
function y2(r) {
	let e = Ra(r);
	for (; Fn(e) && !Gi(e); ) {
		if (cu(e)) return e;
		if (pl(e)) return null;
		e = Ra(e);
	}
	return null;
}
function uu() {
	return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const x2 = new Set(["html", "body", "#document"]);
function Gi(r) {
	return x2.has(Zi(r));
}
function wn(r) {
	return en(r).getComputedStyle(r);
}
function gl(r) {
	return xn(r)
		? { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop }
		: { scrollLeft: r.scrollX, scrollTop: r.scrollY };
}
function Ra(r) {
	if (Zi(r) === "html") return r;
	const e = r.assignedSlot || r.parentNode || (Fd(r) && r.host) || qn(r);
	return Fd(e) ? e.host : e;
}
function $h(r) {
	const e = Ra(r);
	return Gi(e) ? (r.ownerDocument ? r.ownerDocument.body : r.body) : Fn(e) && Cs(e) ? e : $h(e);
}
function bo(r, e, t) {
	var n;
	e === void 0 && (e = []), t === void 0 && (t = !0);
	const a = $h(r),
		i = a === ((n = r.ownerDocument) == null ? void 0 : n.body),
		o = en(a);
	if (i) {
		const s = Cc(o);
		return e.concat(o, o.visualViewport || [], Cs(a) ? a : [], s && t ? bo(s) : []);
	}
	return e.concat(a, bo(a, [], t));
}
function Cc(r) {
	return r.parent && Object.getPrototypeOf(r.parent) ? r.frameElement : null;
}
function ef(r) {
	const e = wn(r);
	let t = parseFloat(e.width) || 0,
		n = parseFloat(e.height) || 0;
	const a = Fn(r),
		i = a ? r.offsetWidth : t,
		o = a ? r.offsetHeight : n,
		s = S0(t) !== i || S0(n) !== o;
	return s && ((t = i), (n = o)), { width: t, height: n, $: s };
}
function du(r) {
	return xn(r) ? r : r.contextElement;
}
function xi(r) {
	const e = du(r);
	if (!Fn(e)) return Pn(1);
	const t = e.getBoundingClientRect(),
		{ width: n, height: a, $: i } = ef(e);
	let o = (i ? S0(t.width) : t.width) / n,
		s = (i ? S0(t.height) : t.height) / a;
	return (
		(!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), { x: o, y: s }
	);
}
const w2 = Pn(0);
function tf(r) {
	const e = en(r);
	return !uu() || !e.visualViewport
		? w2
		: { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function _2(r, e, t) {
	return e === void 0 && (e = !1), !t || (e && t !== en(r)) ? !1 : e;
}
function oi(r, e, t, n) {
	e === void 0 && (e = !1), t === void 0 && (t = !1);
	const a = r.getBoundingClientRect(),
		i = du(r);
	let o = Pn(1);
	e && (n ? xn(n) && (o = xi(n)) : (o = xi(r)));
	const s = _2(i, t, n) ? tf(i) : Pn(0);
	let l = (a.left + s.x) / o.x,
		u = (a.top + s.y) / o.y,
		h = a.width / o.x,
		f = a.height / o.y;
	if (i) {
		const p = en(i),
			g = n && xn(n) ? en(n) : n;
		let y = p,
			x = Cc(y);
		for (; x && n && g !== y; ) {
			const _ = xi(x),
				k = x.getBoundingClientRect(),
				T = wn(x),
				B = k.left + (x.clientLeft + parseFloat(T.paddingLeft)) * _.x,
				A = k.top + (x.clientTop + parseFloat(T.paddingTop)) * _.y;
			(l *= _.x), (u *= _.y), (h *= _.x), (f *= _.y), (l += B), (u += A), (y = en(x)), (x = Cc(y));
		}
	}
	return T0({ width: h, height: f, x: l, y: u });
}
function vl(r, e) {
	const t = gl(r).scrollLeft;
	return e ? e.left + t : oi(qn(r)).left + t;
}
function rf(r, e) {
	const t = r.getBoundingClientRect(),
		n = t.left + e.scrollLeft - vl(r, t),
		a = t.top + e.scrollTop;
	return { x: n, y: a };
}
function k2(r) {
	let { elements: e, rect: t, offsetParent: n, strategy: a } = r;
	const i = a === "fixed",
		o = qn(n),
		s = e ? pl(e.floating) : !1;
	if (n === o || (s && i)) return t;
	let l = { scrollLeft: 0, scrollTop: 0 },
		u = Pn(1);
	const h = Pn(0),
		f = Fn(n);
	if ((f || (!f && !i)) && ((Zi(n) !== "body" || Cs(o)) && (l = gl(n)), Fn(n))) {
		const g = oi(n);
		(u = xi(n)), (h.x = g.x + n.clientLeft), (h.y = g.y + n.clientTop);
	}
	const p = o && !f && !i ? rf(o, l) : Pn(0);
	return {
		width: t.width * u.x,
		height: t.height * u.y,
		x: t.x * u.x - l.scrollLeft * u.x + h.x + p.x,
		y: t.y * u.y - l.scrollTop * u.y + h.y + p.y,
	};
}
function S2(r) {
	return Array.from(r.getClientRects());
}
function E2(r) {
	const e = qn(r),
		t = gl(r),
		n = r.ownerDocument.body,
		a = Qr(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
		i = Qr(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
	let o = -t.scrollLeft + vl(r);
	const s = -t.scrollTop;
	return (
		wn(n).direction === "rtl" && (o += Qr(e.clientWidth, n.clientWidth) - a),
		{ width: a, height: i, x: o, y: s }
	);
}
const qd = 25;
function T2(r, e) {
	const t = en(r),
		n = qn(r),
		a = t.visualViewport;
	let i = n.clientWidth,
		o = n.clientHeight,
		s = 0,
		l = 0;
	if (a) {
		(i = a.width), (o = a.height);
		const h = uu();
		(!h || (h && e === "fixed")) && ((s = a.offsetLeft), (l = a.offsetTop));
	}
	const u = vl(n);
	if (u <= 0) {
		const h = n.ownerDocument,
			f = h.body,
			p = getComputedStyle(f),
			g =
				(h.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight)) ||
				0,
			y = Math.abs(n.clientWidth - f.clientWidth - g);
		y <= qd && (i -= y);
	} else u <= qd && (i += u);
	return { width: i, height: o, x: s, y: l };
}
const A2 = new Set(["absolute", "fixed"]);
function M2(r, e) {
	const t = oi(r, !0, e === "fixed"),
		n = t.top + r.clientTop,
		a = t.left + r.clientLeft,
		i = Fn(r) ? xi(r) : Pn(1),
		o = r.clientWidth * i.x,
		s = r.clientHeight * i.y,
		l = a * i.x,
		u = n * i.y;
	return { width: o, height: s, x: l, y: u };
}
function Ud(r, e, t) {
	let n;
	if (e === "viewport") n = T2(r, t);
	else if (e === "document") n = E2(qn(r));
	else if (xn(e)) n = M2(e, t);
	else {
		const a = tf(r);
		n = { x: e.x - a.x, y: e.y - a.y, width: e.width, height: e.height };
	}
	return T0(n);
}
function nf(r, e) {
	const t = Ra(r);
	return t === e || !xn(t) || Gi(t) ? !1 : wn(t).position === "fixed" || nf(t, e);
}
function C2(r, e) {
	const t = e.get(r);
	if (t) return t;
	let n = bo(r, [], !1).filter((s) => xn(s) && Zi(s) !== "body"),
		a = null;
	const i = wn(r).position === "fixed";
	let o = i ? Ra(r) : r;
	for (; xn(o) && !Gi(o); ) {
		const s = wn(o),
			l = cu(o);
		!l && s.position === "fixed" && (a = null),
			(
				i
					? !l && !a
					: (!l && s.position === "static" && !!a && A2.has(a.position)) ||
						(Cs(o) && !l && nf(r, o))
			)
				? (n = n.filter((h) => h !== o))
				: (a = s),
			(o = Ra(o));
	}
	return e.set(r, n), n;
}
function O2(r) {
	let { element: e, boundary: t, rootBoundary: n, strategy: a } = r;
	const o = [...(t === "clippingAncestors" ? (pl(e) ? [] : C2(e, this._c)) : [].concat(t)), n],
		s = o[0],
		l = o.reduce(
			(u, h) => {
				const f = Ud(e, h, a);
				return (
					(u.top = Qr(f.top, u.top)),
					(u.right = Na(f.right, u.right)),
					(u.bottom = Na(f.bottom, u.bottom)),
					(u.left = Qr(f.left, u.left)),
					u
				);
			},
			Ud(e, s, a)
		);
	return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}
function N2(r) {
	const { width: e, height: t } = ef(r);
	return { width: e, height: t };
}
function R2(r, e, t) {
	const n = Fn(e),
		a = qn(e),
		i = t === "fixed",
		o = oi(r, !0, i, e);
	let s = { scrollLeft: 0, scrollTop: 0 };
	const l = Pn(0);
	function u() {
		l.x = vl(a);
	}
	if (n || (!n && !i))
		if (((Zi(e) !== "body" || Cs(a)) && (s = gl(e)), n)) {
			const g = oi(e, !0, i, e);
			(l.x = g.x + e.clientLeft), (l.y = g.y + e.clientTop);
		} else a && u();
	i && !n && a && u();
	const h = a && !n && !i ? rf(a, s) : Pn(0),
		f = o.left + s.scrollLeft - l.x - h.x,
		p = o.top + s.scrollTop - l.y - h.y;
	return { x: f, y: p, width: o.width, height: o.height };
}
function zl(r) {
	return wn(r).position === "static";
}
function Hd(r, e) {
	if (!Fn(r) || wn(r).position === "fixed") return null;
	if (e) return e(r);
	let t = r.offsetParent;
	return qn(r) === t && (t = t.ownerDocument.body), t;
}
function af(r, e) {
	const t = en(r);
	if (pl(r)) return t;
	if (!Fn(r)) {
		let a = Ra(r);
		for (; a && !Gi(a); ) {
			if (xn(a) && !zl(a)) return a;
			a = Ra(a);
		}
		return t;
	}
	let n = Hd(r, e);
	for (; n && m2(n) && zl(n); ) n = Hd(n, e);
	return n && Gi(n) && zl(n) && !cu(n) ? t : n || y2(r) || t;
}
const I2 = async function (r) {
	const e = this.getOffsetParent || af,
		t = this.getDimensions,
		n = await t(r.floating);
	return {
		reference: R2(r.reference, await e(r.floating), r.strategy),
		floating: { x: 0, y: 0, width: n.width, height: n.height },
	};
};
function D2(r) {
	return wn(r).direction === "rtl";
}
const L2 = {
	convertOffsetParentRelativeRectToViewportRelativeRect: k2,
	getDocumentElement: qn,
	getClippingRect: O2,
	getOffsetParent: af,
	getElementRects: I2,
	getClientRects: S2,
	getDimensions: N2,
	getScale: xi,
	isElement: xn,
	isRTL: D2,
};
function of(r, e) {
	return r.x === e.x && r.y === e.y && r.width === e.width && r.height === e.height;
}
function z2(r, e) {
	let t = null,
		n;
	const a = qn(r);
	function i() {
		var s;
		clearTimeout(n), (s = t) == null || s.disconnect(), (t = null);
	}
	function o(s, l) {
		s === void 0 && (s = !1), l === void 0 && (l = 1), i();
		const u = r.getBoundingClientRect(),
			{ left: h, top: f, width: p, height: g } = u;
		if ((s || e(), !p || !g)) return;
		const y = qs(f),
			x = qs(a.clientWidth - (h + p)),
			_ = qs(a.clientHeight - (f + g)),
			k = qs(h),
			B = {
				rootMargin: -y + "px " + -x + "px " + -_ + "px " + -k + "px",
				threshold: Qr(0, Na(1, l)) || 1,
			};
		let A = !0;
		function N(z) {
			const I = z[0].intersectionRatio;
			if (I !== l) {
				if (!A) return o();
				I
					? o(!1, I)
					: (n = setTimeout(() => {
							o(!1, 1e-7);
						}, 1e3));
			}
			I === 1 && !of(u, r.getBoundingClientRect()) && o(), (A = !1);
		}
		try {
			t = new IntersectionObserver(N, { ...B, root: a.ownerDocument });
		} catch {
			t = new IntersectionObserver(N, B);
		}
		t.observe(r);
	}
	return o(!0), i;
}
function B2(r, e, t, n) {
	n === void 0 && (n = {});
	const {
			ancestorScroll: a = !0,
			ancestorResize: i = !0,
			elementResize: o = typeof ResizeObserver == "function",
			layoutShift: s = typeof IntersectionObserver == "function",
			animationFrame: l = !1,
		} = n,
		u = du(r),
		h = a || i ? [...(u ? bo(u) : []), ...bo(e)] : [];
	h.forEach((k) => {
		a && k.addEventListener("scroll", t, { passive: !0 }), i && k.addEventListener("resize", t);
	});
	const f = u && s ? z2(u, t) : null;
	let p = -1,
		g = null;
	o &&
		((g = new ResizeObserver((k) => {
			let [T] = k;
			T &&
				T.target === u &&
				g &&
				(g.unobserve(e),
				cancelAnimationFrame(p),
				(p = requestAnimationFrame(() => {
					var B;
					(B = g) == null || B.observe(e);
				}))),
				t();
		})),
		u && !l && g.observe(u),
		g.observe(e));
	let y,
		x = l ? oi(r) : null;
	l && _();
	function _() {
		const k = oi(r);
		x && !of(x, k) && t(), (x = k), (y = requestAnimationFrame(_));
	}
	return (
		t(),
		() => {
			var k;
			h.forEach((T) => {
				a && T.removeEventListener("scroll", t), i && T.removeEventListener("resize", t);
			}),
				f == null || f(),
				(k = g) == null || k.disconnect(),
				(g = null),
				l && cancelAnimationFrame(y);
		}
	);
}
const P2 = l2,
	F2 = c2,
	q2 = i2,
	U2 = d2,
	H2 = o2,
	G2 = a2,
	W2 = u2,
	V2 = (r, e, t) => {
		const n = new Map(),
			a = { platform: L2, ...t },
			i = { ...a.platform, _c: n };
		return n2(r, e, { ...a, platform: i });
	};
function Ha(r) {
	return typeof r == "function" ? r() : r;
}
function sf(r) {
	return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Gd(r, e) {
	const t = sf(r);
	return Math.round(e * t) / t;
}
function A0(r) {
	return {
		[`--bits-${r}-content-transform-origin`]: "var(--bits-floating-transform-origin)",
		[`--bits-${r}-content-available-width`]: "var(--bits-floating-available-width)",
		[`--bits-${r}-content-available-height`]: "var(--bits-floating-available-height)",
		[`--bits-${r}-anchor-width`]: "var(--bits-floating-anchor-width)",
		[`--bits-${r}-anchor-height`]: "var(--bits-floating-anchor-height)",
	};
}
function K2(r) {
	const e = r.whileElementsMounted,
		t = j(() => Ha(r.open) ?? !0),
		n = j(() => Ha(r.middleware)),
		a = j(() => Ha(r.transform) ?? !0),
		i = j(() => Ha(r.placement) ?? "bottom"),
		o = j(() => Ha(r.strategy) ?? "absolute"),
		s = j(() => Ha(r.sideOffset) ?? 0),
		l = j(() => Ha(r.alignOffset) ?? 0),
		u = r.reference;
	let h = Ee(0),
		f = Ee(0);
	const p = Rn(null);
	let g = Ee(cn(m(o))),
		y = Ee(cn(m(i))),
		x = Ee(cn({})),
		_ = Ee(!1);
	const k = j(() => {
		const I = p.current ? Gd(p.current, m(h)) : m(h),
			G = p.current ? Gd(p.current, m(f)) : m(f);
		return m(a)
			? {
					position: m(g),
					left: "0",
					top: "0",
					transform: `translate(${I}px, ${G}px)`,
					...(p.current && sf(p.current) >= 1.5 && { willChange: "transform" }),
				}
			: { position: m(g), left: `${I}px`, top: `${G}px` };
	});
	let T;
	function B() {
		u.current === null ||
			p.current === null ||
			V2(u.current, p.current, { middleware: m(n), placement: m(i), strategy: m(o) }).then((I) => {
				if (!m(t) && m(h) !== 0 && m(f) !== 0) {
					const G = Math.max(Math.abs(m(s)), Math.abs(m(l)), 15);
					if (I.x <= G && I.y <= G) return;
				}
				F(h, I.x, !0),
					F(f, I.y, !0),
					F(g, I.strategy, !0),
					F(y, I.placement, !0),
					F(x, I.middlewareData, !0),
					F(_, !0);
			});
	}
	function A() {
		typeof T == "function" && (T(), (T = void 0));
	}
	function N() {
		if ((A(), e === void 0)) {
			B();
			return;
		}
		u.current === null || p.current === null || (T = e(u.current, p.current, B));
	}
	function z() {
		m(t) || F(_, !1);
	}
	return (
		Rt(B),
		Rt(N),
		Rt(z),
		Rt(() => A),
		{
			floating: p,
			reference: u,
			get strategy() {
				return m(g);
			},
			get placement() {
				return m(y);
			},
			get middlewareData() {
				return m(x);
			},
			get isPositioned() {
				return m(_);
			},
			get floatingStyles() {
				return m(k);
			},
			get update() {
				return B;
			},
		}
	);
}
const Y2 = { top: "bottom", right: "left", bottom: "top", left: "right" },
	hu = new Ba("Floating.Root"),
	Wd = new Ba("Floating.Content"),
	fu = new Ba("Floating.Root");
class M0 {
	constructor() {
		Se(this, "anchorNode", Rn(null));
		Se(this, "customAnchorNode", Rn(null));
		Se(this, "triggerNode", Rn(null));
		Rt(() => {
			this.customAnchorNode.current
				? typeof this.customAnchorNode.current == "string"
					? (this.anchorNode.current = document.querySelector(this.customAnchorNode.current))
					: (this.anchorNode.current = this.customAnchorNode.current)
				: (this.anchorNode.current = this.triggerNode.current);
		});
	}
	static create(e = !1) {
		return e ? fu.set(new M0()) : hu.set(new M0());
	}
}
var ts, ol, rs, sl, ns, ll, as, is, os, ss, ls, cs, us, ds, hs, fs, ms, ps, gs, vs, bs, ys, xs, ws;
const cl = class cl {
	constructor(e, t) {
		Se(this, "opts");
		Se(this, "root");
		Se(this, "contentRef", Rn(null));
		Se(this, "wrapperRef", Rn(null));
		Se(this, "arrowRef", Rn(null));
		Se(this, "contentAttachment", Ma(this.contentRef));
		Se(this, "wrapperAttachment", Ma(this.wrapperRef));
		Se(this, "arrowAttachment", Ma(this.arrowRef));
		Se(this, "arrowId", Rn(iu()));
		W(
			this,
			ts,
			j(() => {
				if (typeof this.opts.style == "string") return co(this.opts.style);
				if (!this.opts.style) return {};
			})
		);
		W(this, ol);
		W(this, rs, new fg(() => this.arrowRef.current ?? void 0));
		W(
			this,
			sl,
			j(() => {
				var e;
				return ((e = w(this, rs)) == null ? void 0 : e.width) ?? 0;
			})
		);
		W(
			this,
			ns,
			j(() => {
				var e;
				return ((e = w(this, rs)) == null ? void 0 : e.height) ?? 0;
			})
		);
		W(
			this,
			ll,
			j(() => {
				var e;
				return (
					((e = this.opts.side) == null ? void 0 : e.current) +
					(this.opts.align.current !== "center" ? `-${this.opts.align.current}` : "")
				);
			})
		);
		W(
			this,
			as,
			j(() =>
				Array.isArray(this.opts.collisionBoundary.current)
					? this.opts.collisionBoundary.current
					: [this.opts.collisionBoundary.current]
			)
		);
		W(
			this,
			is,
			j(() => m(w(this, as)).length > 0)
		);
		W(
			this,
			os,
			j(() => ({
				padding: this.opts.collisionPadding.current,
				boundary: m(w(this, as)).filter(Dg),
				altBoundary: this.hasExplicitBoundaries,
			}))
		);
		W(this, ss, Ee(void 0));
		W(this, ls, Ee(void 0));
		W(this, cs, Ee(void 0));
		W(this, us, Ee(void 0));
		W(
			this,
			ds,
			j(() =>
				[
					P2({
						mainAxis: this.opts.sideOffset.current + m(w(this, ns)),
						alignmentAxis: this.opts.alignOffset.current,
					}),
					this.opts.avoidCollisions.current &&
						F2({
							mainAxis: !0,
							crossAxis: !1,
							limiter: this.opts.sticky.current === "partial" ? W2() : void 0,
							...this.detectOverflowOptions,
						}),
					this.opts.avoidCollisions.current && q2({ ...this.detectOverflowOptions }),
					U2({
						...this.detectOverflowOptions,
						apply: ({ rects: e, availableWidth: t, availableHeight: n }) => {
							const { width: a, height: i } = e.reference;
							F(w(this, ss), t, !0),
								F(w(this, ls), n, !0),
								F(w(this, cs), a, !0),
								F(w(this, us), i, !0);
						},
					}),
					this.arrowRef.current &&
						G2({ element: this.arrowRef.current, padding: this.opts.arrowPadding.current }),
					X2({ arrowWidth: m(w(this, sl)), arrowHeight: m(w(this, ns)) }),
					this.opts.hideWhenDetached.current &&
						H2({ strategy: "referenceHidden", ...this.detectOverflowOptions }),
				].filter(Boolean)
			)
		);
		Se(this, "floating");
		W(
			this,
			hs,
			j(() => Z2(this.floating.placement))
		);
		W(
			this,
			fs,
			j(() => j2(this.floating.placement))
		);
		W(
			this,
			ms,
			j(() => {
				var e;
				return ((e = this.floating.middlewareData.arrow) == null ? void 0 : e.x) ?? 0;
			})
		);
		W(
			this,
			ps,
			j(() => {
				var e;
				return ((e = this.floating.middlewareData.arrow) == null ? void 0 : e.y) ?? 0;
			})
		);
		W(
			this,
			gs,
			j(() => {
				var e;
				return ((e = this.floating.middlewareData.arrow) == null ? void 0 : e.centerOffset) !== 0;
			})
		);
		W(this, vs, Ee());
		W(
			this,
			bs,
			j(() => Y2[this.placedSide])
		);
		W(
			this,
			ys,
			j(() => {
				var e, t, n;
				return {
					id: this.opts.wrapperId.current,
					"data-bits-floating-content-wrapper": "",
					style: {
						...this.floating.floatingStyles,
						transform: this.floating.isPositioned
							? this.floating.floatingStyles.transform
							: "translate(0, -200%)",
						minWidth: "max-content",
						zIndex: this.contentZIndex,
						"--bits-floating-transform-origin": `${(e = this.floating.middlewareData.transformOrigin) == null ? void 0 : e.x} ${(t = this.floating.middlewareData.transformOrigin) == null ? void 0 : t.y}`,
						"--bits-floating-available-width": `${m(w(this, ss))}px`,
						"--bits-floating-available-height": `${m(w(this, ls))}px`,
						"--bits-floating-anchor-width": `${m(w(this, cs))}px`,
						"--bits-floating-anchor-height": `${m(w(this, us))}px`,
						...(((n = this.floating.middlewareData.hide) == null ? void 0 : n.referenceHidden) && {
							visibility: "hidden",
							"pointer-events": "none",
						}),
						...m(w(this, ts)),
					},
					dir: this.opts.dir.current,
					...this.wrapperAttachment,
				};
			})
		);
		W(
			this,
			xs,
			j(() => ({
				"data-side": this.placedSide,
				"data-align": this.placedAlign,
				style: hh({ ...m(w(this, ts)) }),
				...this.contentAttachment,
			}))
		);
		W(
			this,
			ws,
			j(() => ({
				position: "absolute",
				left: this.arrowX ? `${this.arrowX}px` : void 0,
				top: this.arrowY ? `${this.arrowY}px` : void 0,
				[this.arrowBaseSide]: 0,
				"transform-origin": { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[
					this.placedSide
				],
				transform: {
					top: "translateY(100%)",
					right: "translateY(50%) rotate(90deg) translateX(-50%)",
					bottom: "rotate(180deg)",
					left: "translateY(50%) rotate(-90deg) translateX(50%)",
				}[this.placedSide],
				visibility: this.cannotCenterArrow ? "hidden" : void 0,
			}))
		);
		(this.opts = e),
			(this.root = t),
			e.customAnchor && (this.root.customAnchorNode.current = e.customAnchor.current),
			Ar(
				() => e.customAnchor.current,
				(n) => {
					this.root.customAnchorNode.current = n;
				}
			),
			(this.floating = K2({
				strategy: () => this.opts.strategy.current,
				placement: () => m(w(this, ll)),
				middleware: () => this.middleware,
				reference: this.root.anchorNode,
				whileElementsMounted: (...n) => {
					var i;
					return B2(...n, {
						animationFrame: ((i = w(this, ol)) == null ? void 0 : i.current) === "always",
					});
				},
				open: () => this.opts.enabled.current,
				sideOffset: () => this.opts.sideOffset.current,
				alignOffset: () => this.opts.alignOffset.current,
			})),
			Rt(() => {
				var n;
				this.floating.isPositioned && ((n = this.opts.onPlaced) == null || n.current());
			}),
			Ar(
				() => this.contentRef.current,
				(n) => {
					if (!n) return;
					const a = Qc(n);
					this.contentZIndex = a.getComputedStyle(n).zIndex;
				}
			),
			Rt(() => {
				this.floating.floating.current = this.wrapperRef.current;
			});
	}
	static create(e, t = !1) {
		return t ? Wd.set(new cl(e, fu.get())) : Wd.set(new cl(e, hu.get()));
	}
	get hasExplicitBoundaries() {
		return m(w(this, is));
	}
	set hasExplicitBoundaries(e) {
		F(w(this, is), e);
	}
	get detectOverflowOptions() {
		return m(w(this, os));
	}
	set detectOverflowOptions(e) {
		F(w(this, os), e);
	}
	get middleware() {
		return m(w(this, ds));
	}
	set middleware(e) {
		F(w(this, ds), e);
	}
	get placedSide() {
		return m(w(this, hs));
	}
	set placedSide(e) {
		F(w(this, hs), e);
	}
	get placedAlign() {
		return m(w(this, fs));
	}
	set placedAlign(e) {
		F(w(this, fs), e);
	}
	get arrowX() {
		return m(w(this, ms));
	}
	set arrowX(e) {
		F(w(this, ms), e);
	}
	get arrowY() {
		return m(w(this, ps));
	}
	set arrowY(e) {
		F(w(this, ps), e);
	}
	get cannotCenterArrow() {
		return m(w(this, gs));
	}
	set cannotCenterArrow(e) {
		F(w(this, gs), e);
	}
	get contentZIndex() {
		return m(w(this, vs));
	}
	set contentZIndex(e) {
		F(w(this, vs), e, !0);
	}
	get arrowBaseSide() {
		return m(w(this, bs));
	}
	set arrowBaseSide(e) {
		F(w(this, bs), e);
	}
	get wrapperProps() {
		return m(w(this, ys));
	}
	set wrapperProps(e) {
		F(w(this, ys), e);
	}
	get props() {
		return m(w(this, xs));
	}
	set props(e) {
		F(w(this, xs), e);
	}
	get arrowStyle() {
		return m(w(this, ws));
	}
	set arrowStyle(e) {
		F(w(this, ws), e);
	}
};
(ts = new WeakMap()),
	(ol = new WeakMap()),
	(rs = new WeakMap()),
	(sl = new WeakMap()),
	(ns = new WeakMap()),
	(ll = new WeakMap()),
	(as = new WeakMap()),
	(is = new WeakMap()),
	(os = new WeakMap()),
	(ss = new WeakMap()),
	(ls = new WeakMap()),
	(cs = new WeakMap()),
	(us = new WeakMap()),
	(ds = new WeakMap()),
	(hs = new WeakMap()),
	(fs = new WeakMap()),
	(ms = new WeakMap()),
	(ps = new WeakMap()),
	(gs = new WeakMap()),
	(vs = new WeakMap()),
	(bs = new WeakMap()),
	(ys = new WeakMap()),
	(xs = new WeakMap()),
	(ws = new WeakMap());
let Oc = cl;
class C0 {
	constructor(e, t) {
		Se(this, "opts");
		Se(this, "root");
		(this.opts = e),
			(this.root = t),
			e.virtualEl && e.virtualEl.current
				? (t.triggerNode = ch(e.virtualEl.current))
				: (t.triggerNode = e.ref);
	}
	static create(e, t = !1) {
		return t ? new C0(e, fu.get()) : new C0(e, hu.get());
	}
}
function X2(r) {
	return {
		name: "transformOrigin",
		options: r,
		fn(e) {
			var _, k, T;
			const { placement: t, rects: n, middlewareData: a } = e,
				o = ((_ = a.arrow) == null ? void 0 : _.centerOffset) !== 0,
				s = o ? 0 : r.arrowWidth,
				l = o ? 0 : r.arrowHeight,
				[u, h] = mu(t),
				f = { start: "0%", center: "50%", end: "100%" }[h],
				p = (((k = a.arrow) == null ? void 0 : k.x) ?? 0) + s / 2,
				g = (((T = a.arrow) == null ? void 0 : T.y) ?? 0) + l / 2;
			let y = "",
				x = "";
			return (
				u === "bottom"
					? ((y = o ? f : `${p}px`), (x = `${-l}px`))
					: u === "top"
						? ((y = o ? f : `${p}px`), (x = `${n.floating.height + l}px`))
						: u === "right"
							? ((y = `${-l}px`), (x = o ? f : `${g}px`))
							: u === "left" && ((y = `${n.floating.width + l}px`), (x = o ? f : `${g}px`)),
				{ data: { x: y, y: x } }
			);
		},
	};
}
function mu(r) {
	const [e, t = "center"] = r.split("-");
	return [e, t];
}
function Z2(r) {
	return mu(r)[0];
}
function j2(r) {
	return mu(r)[1];
}
function lf(r, e) {
	yt(e, !0);
	let t = q(e, "tooltip", 3, !1);
	M0.create(t());
	var n = He(),
		a = pe(n);
	It(a, () => e.children ?? Qt), C(r, n), xt();
}
function cf(r, e) {
	yt(e, !0);
	let t = q(e, "tooltip", 3, !1);
	C0.create({ id: ge(() => e.id), virtualEl: ge(() => e.virtualEl), ref: e.ref }, t());
	var n = He(),
		a = pe(n);
	It(a, () => e.children ?? Qt), C(r, n), xt();
}
function J2(r, e) {
	yt(e, !0);
	let t = q(e, "side", 3, "bottom"),
		n = q(e, "sideOffset", 3, 0),
		a = q(e, "align", 3, "center"),
		i = q(e, "alignOffset", 3, 0),
		o = q(e, "arrowPadding", 3, 0),
		s = q(e, "avoidCollisions", 3, !0),
		l = q(e, "collisionBoundary", 19, () => []),
		u = q(e, "collisionPadding", 3, 0),
		h = q(e, "hideWhenDetached", 3, !1),
		f = q(e, "onPlaced", 3, () => {}),
		p = q(e, "sticky", 3, "partial"),
		g = q(e, "updatePositionStrategy", 3, "optimized"),
		y = q(e, "strategy", 3, "fixed"),
		x = q(e, "dir", 3, "ltr"),
		_ = q(e, "style", 19, () => ({})),
		k = q(e, "wrapperId", 19, iu),
		T = q(e, "customAnchor", 3, null),
		B = q(e, "tooltip", 3, !1);
	const A = Oc.create(
			{
				side: ge(() => t()),
				sideOffset: ge(() => n()),
				align: ge(() => a()),
				alignOffset: ge(() => i()),
				id: ge(() => e.id),
				arrowPadding: ge(() => o()),
				avoidCollisions: ge(() => s()),
				collisionBoundary: ge(() => l()),
				collisionPadding: ge(() => u()),
				hideWhenDetached: ge(() => h()),
				onPlaced: ge(() => f()),
				sticky: ge(() => p()),
				updatePositionStrategy: ge(() => g()),
				strategy: ge(() => y()),
				dir: ge(() => x()),
				style: ge(() => _()),
				enabled: ge(() => e.enabled),
				wrapperId: ge(() => k()),
				customAnchor: ge(() => T()),
			},
			B()
		),
		N = j(() => Fr(A.wrapperProps, { style: { pointerEvents: "auto" } }));
	var z = He(),
		I = pe(z);
	It(
		I,
		() => e.content ?? Qt,
		() => ({ props: A.props, wrapperProps: m(N) })
	),
		C(r, z),
		xt();
}
function Q2(r, e) {
	yt(e, !0),
		_s(() => {
			var a;
			(a = e.onPlaced) == null || a.call(e);
		});
	var t = He(),
		n = pe(t);
	It(
		n,
		() => e.content ?? Qt,
		() => ({ props: {}, wrapperProps: {} })
	),
		C(r, t),
		xt();
}
function $2(r, e) {
	let t = q(e, "isStatic", 3, !1),
		n = _n(e, ["$$slots", "$$events", "$$legacy", "content", "isStatic", "onPlaced"]);
	var a = He(),
		i = pe(a);
	{
		var o = (l) => {
				Q2(l, {
					get content() {
						return e.content;
					},
					get onPlaced() {
						return e.onPlaced;
					},
				});
			},
			s = (l) => {
				J2(
					l,
					ai(
						{
							get content() {
								return e.content;
							},
							get onPlaced() {
								return e.onPlaced;
							},
						},
						() => n
					)
				);
			};
		ne(i, (l) => {
			t() ? l(o) : l(s, !1);
		});
	}
	C(r, a);
}
var ev = Z("<!> <!>", 1);
function uf(r, e) {
	yt(e, !0);
	let t = q(e, "interactOutsideBehavior", 3, "close"),
		n = q(e, "trapFocus", 3, !0),
		a = q(e, "isValidEvent", 3, () => !1),
		i = q(e, "customAnchor", 3, null),
		o = q(e, "isStatic", 3, !1),
		s = q(e, "tooltip", 3, !1),
		l = _n(e, [
			"$$slots",
			"$$events",
			"$$legacy",
			"popper",
			"onEscapeKeydown",
			"escapeKeydownBehavior",
			"preventOverflowTextSelection",
			"id",
			"onPointerDown",
			"onPointerUp",
			"side",
			"sideOffset",
			"align",
			"alignOffset",
			"arrowPadding",
			"avoidCollisions",
			"collisionBoundary",
			"collisionPadding",
			"sticky",
			"hideWhenDetached",
			"updatePositionStrategy",
			"strategy",
			"dir",
			"preventScroll",
			"wrapperId",
			"style",
			"onPlaced",
			"onInteractOutside",
			"onCloseAutoFocus",
			"onOpenAutoFocus",
			"onFocusOutside",
			"interactOutsideBehavior",
			"loop",
			"trapFocus",
			"isValidEvent",
			"customAnchor",
			"isStatic",
			"enabled",
			"ref",
			"tooltip",
		]);
	$2(r, {
		get isStatic() {
			return o();
		},
		get id() {
			return e.id;
		},
		get side() {
			return e.side;
		},
		get sideOffset() {
			return e.sideOffset;
		},
		get align() {
			return e.align;
		},
		get alignOffset() {
			return e.alignOffset;
		},
		get arrowPadding() {
			return e.arrowPadding;
		},
		get avoidCollisions() {
			return e.avoidCollisions;
		},
		get collisionBoundary() {
			return e.collisionBoundary;
		},
		get collisionPadding() {
			return e.collisionPadding;
		},
		get sticky() {
			return e.sticky;
		},
		get hideWhenDetached() {
			return e.hideWhenDetached;
		},
		get updatePositionStrategy() {
			return e.updatePositionStrategy;
		},
		get strategy() {
			return e.strategy;
		},
		get dir() {
			return e.dir;
		},
		get wrapperId() {
			return e.wrapperId;
		},
		get style() {
			return e.style;
		},
		get onPlaced() {
			return e.onPlaced;
		},
		get customAnchor() {
			return i();
		},
		get enabled() {
			return e.enabled;
		},
		get tooltip() {
			return s();
		},
		content: (h, f) => {
			let p = () => (f == null ? void 0 : f().props),
				g = () => (f == null ? void 0 : f().wrapperProps);
			var y = ev(),
				x = pe(y);
			{
				var _ = (B) => {
						Id(B, {
							get preventScroll() {
								return e.preventScroll;
							},
						});
					},
					k = (B, A) => {
						{
							var N = (z) => {
								Id(z, {
									get preventScroll() {
										return e.preventScroll;
									},
								});
							};
							ne(
								B,
								(z) => {
									e.forceMount || z(N);
								},
								A
							);
						}
					};
				ne(x, (B) => {
					e.forceMount && e.enabled ? B(_) : B(k, !1);
				});
			}
			var T = X(x, 2);
			F4(T, {
				get onOpenAutoFocus() {
					return e.onOpenAutoFocus;
				},
				get onCloseAutoFocus() {
					return e.onCloseAutoFocus;
				},
				get loop() {
					return e.loop;
				},
				get enabled() {
					return e.enabled;
				},
				get trapFocus() {
					return n();
				},
				get forceMount() {
					return e.forceMount;
				},
				get ref() {
					return e.ref;
				},
				focusScope: (A, N) => {
					let z = () => (N == null ? void 0 : N().props);
					P4(A, {
						get onEscapeKeydown() {
							return e.onEscapeKeydown;
						},
						get escapeKeydownBehavior() {
							return e.escapeKeydownBehavior;
						},
						get enabled() {
							return e.enabled;
						},
						get ref() {
							return e.ref;
						},
						children: (I, G) => {
							{
								const re = (V, se) => {
									let ce = () => (se == null ? void 0 : se().props);
									H4(V, {
										get id() {
											return e.id;
										},
										get preventOverflowTextSelection() {
											return e.preventOverflowTextSelection;
										},
										get onPointerDown() {
											return e.onPointerDown;
										},
										get onPointerUp() {
											return e.onPointerUp;
										},
										get enabled() {
											return e.enabled;
										},
										get ref() {
											return e.ref;
										},
										children: (Ce, Q) => {
											var $ = He(),
												K = pe($),
												le = mo(() => ({
													props: Fr(l, p(), ce(), z(), { style: { pointerEvents: "auto" } }),
													wrapperProps: g(),
												}));
											It(
												K,
												() => e.popper ?? Qt,
												() => m(le)
											),
												C(Ce, $);
										},
										$$slots: { default: !0 },
									});
								};
								z4(I, {
									get id() {
										return e.id;
									},
									get onInteractOutside() {
										return e.onInteractOutside;
									},
									get onFocusOutside() {
										return e.onFocusOutside;
									},
									get interactOutsideBehavior() {
										return t();
									},
									isValidEvent: a(),
									get enabled() {
										return e.enabled;
									},
									get ref() {
										return e.ref;
									},
									children: re,
									$$slots: { default: !0 },
								});
							}
						},
						$$slots: { default: !0 },
					});
				},
				$$slots: { focusScope: !0 },
			}),
				C(h, y);
		},
		$$slots: { content: !0 },
	}),
		xt();
}
function df(r, e) {
	let t = q(e, "interactOutsideBehavior", 3, "close"),
		n = q(e, "trapFocus", 3, !0),
		a = q(e, "isValidEvent", 3, () => !1),
		i = q(e, "customAnchor", 3, null),
		o = q(e, "isStatic", 3, !1),
		s = _n(e, [
			"$$slots",
			"$$events",
			"$$legacy",
			"popper",
			"open",
			"onEscapeKeydown",
			"escapeKeydownBehavior",
			"preventOverflowTextSelection",
			"id",
			"onPointerDown",
			"onPointerUp",
			"side",
			"sideOffset",
			"align",
			"alignOffset",
			"arrowPadding",
			"avoidCollisions",
			"collisionBoundary",
			"collisionPadding",
			"sticky",
			"hideWhenDetached",
			"updatePositionStrategy",
			"strategy",
			"dir",
			"preventScroll",
			"wrapperId",
			"style",
			"onPlaced",
			"onInteractOutside",
			"onCloseAutoFocus",
			"onOpenAutoFocus",
			"onFocusOutside",
			"interactOutsideBehavior",
			"loop",
			"trapFocus",
			"isValidEvent",
			"customAnchor",
			"isStatic",
			"ref",
			"shouldRender",
		]);
	var l = He(),
		u = pe(l);
	{
		var h = (f) => {
			uf(
				f,
				ai(
					{
						get popper() {
							return e.popper;
						},
						get onEscapeKeydown() {
							return e.onEscapeKeydown;
						},
						get escapeKeydownBehavior() {
							return e.escapeKeydownBehavior;
						},
						get preventOverflowTextSelection() {
							return e.preventOverflowTextSelection;
						},
						get id() {
							return e.id;
						},
						get onPointerDown() {
							return e.onPointerDown;
						},
						get onPointerUp() {
							return e.onPointerUp;
						},
						get side() {
							return e.side;
						},
						get sideOffset() {
							return e.sideOffset;
						},
						get align() {
							return e.align;
						},
						get alignOffset() {
							return e.alignOffset;
						},
						get arrowPadding() {
							return e.arrowPadding;
						},
						get avoidCollisions() {
							return e.avoidCollisions;
						},
						get collisionBoundary() {
							return e.collisionBoundary;
						},
						get collisionPadding() {
							return e.collisionPadding;
						},
						get sticky() {
							return e.sticky;
						},
						get hideWhenDetached() {
							return e.hideWhenDetached;
						},
						get updatePositionStrategy() {
							return e.updatePositionStrategy;
						},
						get strategy() {
							return e.strategy;
						},
						get dir() {
							return e.dir;
						},
						get preventScroll() {
							return e.preventScroll;
						},
						get wrapperId() {
							return e.wrapperId;
						},
						get style() {
							return e.style;
						},
						get onPlaced() {
							return e.onPlaced;
						},
						get customAnchor() {
							return i();
						},
						get isStatic() {
							return o();
						},
						get enabled() {
							return e.open;
						},
						get onInteractOutside() {
							return e.onInteractOutside;
						},
						get onCloseAutoFocus() {
							return e.onCloseAutoFocus;
						},
						get onOpenAutoFocus() {
							return e.onOpenAutoFocus;
						},
						get interactOutsideBehavior() {
							return t();
						},
						get loop() {
							return e.loop;
						},
						get trapFocus() {
							return n();
						},
						isValidEvent: a(),
						get onFocusOutside() {
							return e.onFocusOutside;
						},
						forceMount: !1,
						get ref() {
							return e.ref;
						},
					},
					() => s
				)
			);
		};
		ne(u, (f) => {
			e.shouldRender && f(h);
		});
	}
	C(r, l);
}
function hf(r, e) {
	let t = q(e, "interactOutsideBehavior", 3, "close"),
		n = q(e, "trapFocus", 3, !0),
		a = q(e, "isValidEvent", 3, () => !1),
		i = q(e, "customAnchor", 3, null),
		o = q(e, "isStatic", 3, !1),
		s = _n(e, [
			"$$slots",
			"$$events",
			"$$legacy",
			"popper",
			"onEscapeKeydown",
			"escapeKeydownBehavior",
			"preventOverflowTextSelection",
			"id",
			"onPointerDown",
			"onPointerUp",
			"side",
			"sideOffset",
			"align",
			"alignOffset",
			"arrowPadding",
			"avoidCollisions",
			"collisionBoundary",
			"collisionPadding",
			"sticky",
			"hideWhenDetached",
			"updatePositionStrategy",
			"strategy",
			"dir",
			"preventScroll",
			"wrapperId",
			"style",
			"onPlaced",
			"onInteractOutside",
			"onCloseAutoFocus",
			"onOpenAutoFocus",
			"onFocusOutside",
			"interactOutsideBehavior",
			"loop",
			"trapFocus",
			"isValidEvent",
			"customAnchor",
			"isStatic",
			"enabled",
		]);
	uf(
		r,
		ai(
			{
				get popper() {
					return e.popper;
				},
				get onEscapeKeydown() {
					return e.onEscapeKeydown;
				},
				get escapeKeydownBehavior() {
					return e.escapeKeydownBehavior;
				},
				get preventOverflowTextSelection() {
					return e.preventOverflowTextSelection;
				},
				get id() {
					return e.id;
				},
				get onPointerDown() {
					return e.onPointerDown;
				},
				get onPointerUp() {
					return e.onPointerUp;
				},
				get side() {
					return e.side;
				},
				get sideOffset() {
					return e.sideOffset;
				},
				get align() {
					return e.align;
				},
				get alignOffset() {
					return e.alignOffset;
				},
				get arrowPadding() {
					return e.arrowPadding;
				},
				get avoidCollisions() {
					return e.avoidCollisions;
				},
				get collisionBoundary() {
					return e.collisionBoundary;
				},
				get collisionPadding() {
					return e.collisionPadding;
				},
				get sticky() {
					return e.sticky;
				},
				get hideWhenDetached() {
					return e.hideWhenDetached;
				},
				get updatePositionStrategy() {
					return e.updatePositionStrategy;
				},
				get strategy() {
					return e.strategy;
				},
				get dir() {
					return e.dir;
				},
				get preventScroll() {
					return e.preventScroll;
				},
				get wrapperId() {
					return e.wrapperId;
				},
				get style() {
					return e.style;
				},
				get onPlaced() {
					return e.onPlaced;
				},
				get customAnchor() {
					return i();
				},
				get isStatic() {
					return o();
				},
				get enabled() {
					return e.enabled;
				},
				get onInteractOutside() {
					return e.onInteractOutside;
				},
				get onCloseAutoFocus() {
					return e.onCloseAutoFocus;
				},
				get onOpenAutoFocus() {
					return e.onOpenAutoFocus;
				},
				get interactOutsideBehavior() {
					return t();
				},
				get loop() {
					return e.loop;
				},
				get trapFocus() {
					return n();
				},
				isValidEvent: a(),
				get onFocusOutside() {
					return e.onFocusOutside;
				},
			},
			() => s,
			{ forceMount: !0 }
		)
	);
}
function Vd(r, e) {
	yt(e, !0);
	let t = q(e, "open", 15, !1),
		n = q(e, "onOpenChange", 3, Lt),
		a = q(e, "onOpenChangeComplete", 3, Lt);
	R4.create({
		open: ge(
			() => t(),
			(i) => {
				var o;
				t(i), (o = n()) == null || o(i);
			}
		),
		onOpenChangeComplete: ge(() => a()),
	}),
		lf(r, {
			children: (i, o) => {
				var s = He(),
					l = pe(s);
				It(l, () => e.children ?? Qt), C(i, s);
			},
			$$slots: { default: !0 },
		}),
		xt();
}
var tv = Z("<div><!></div>");
function Us(r, e) {
	const t = si();
	yt(e, !0);
	let n = q(e, "ref", 15, null),
		a = q(e, "id", 19, () => ci(t)),
		i = q(e, "disabled", 3, !1),
		o = q(e, "onSelect", 3, Lt),
		s = q(e, "closeOnSelect", 3, !0),
		l = _n(e, [
			"$$slots",
			"$$events",
			"$$legacy",
			"child",
			"children",
			"ref",
			"id",
			"disabled",
			"onSelect",
			"closeOnSelect",
		]);
	const u = k0.create({
			id: ge(() => a()),
			disabled: ge(() => i()),
			onSelect: ge(() => o()),
			ref: ge(
				() => n(),
				(x) => n(x)
			),
			closeOnSelect: ge(() => s()),
		}),
		h = j(() => Fr(l, u.props));
	var f = He(),
		p = pe(f);
	{
		var g = (x) => {
				var _ = He(),
					k = pe(_);
				It(
					k,
					() => e.child,
					() => ({ props: m(h) })
				),
					C(x, _);
			},
			y = (x) => {
				var _ = tv();
				zt(_, () => ({ ...m(h) }));
				var k = L(_);
				It(k, () => e.children ?? Qt), O(_), C(x, _);
			};
		ne(p, (x) => {
			e.child ? x(g) : x(y, !1);
		});
	}
	C(r, f), xt();
}
var rv = Z("<div><!></div>");
function nv(r, e) {
	const t = si();
	yt(e, !0);
	let n = q(e, "ref", 15, null),
		a = q(e, "id", 19, () => ci(t)),
		i = _n(e, ["$$slots", "$$events", "$$legacy", "ref", "id", "child", "children"]);
	const o = bc.create({
			id: ge(() => a()),
			ref: ge(
				() => n(),
				(p) => n(p)
			),
		}),
		s = j(() => Fr(i, o.props));
	var l = He(),
		u = pe(l);
	{
		var h = (p) => {
				var g = He(),
					y = pe(g);
				It(
					y,
					() => e.child,
					() => ({ props: m(s) })
				),
					C(p, g);
			},
			f = (p) => {
				var g = rv();
				zt(g, () => ({ ...m(s) }));
				var y = L(g);
				It(y, () => e.children ?? Qt), O(g), C(p, g);
			};
		ne(u, (p) => {
			e.child ? p(h) : p(f, !1);
		});
	}
	C(r, l), xt();
}
var av = Z("<div><div><!></div></div>"),
	iv = Z("<div><div><!></div></div>");
function Kd(r, e) {
	const t = si();
	yt(e, !0);
	let n = q(e, "id", 19, () => ci(t)),
		a = q(e, "ref", 15, null),
		i = q(e, "loop", 3, !0),
		o = q(e, "onInteractOutside", 3, Lt),
		s = q(e, "forceMount", 3, !1),
		l = q(e, "onEscapeKeydown", 3, Lt),
		u = q(e, "interactOutsideBehavior", 3, "defer-otherwise-close"),
		h = q(e, "escapeKeydownBehavior", 3, "defer-otherwise-close"),
		f = q(e, "onOpenAutoFocus", 3, Lt),
		p = q(e, "onCloseAutoFocus", 3, Lt),
		g = q(e, "onFocusOutside", 3, Lt),
		y = q(e, "side", 3, "right"),
		x = q(e, "trapFocus", 3, !1),
		_ = _n(e, [
			"$$slots",
			"$$events",
			"$$legacy",
			"id",
			"ref",
			"children",
			"child",
			"loop",
			"onInteractOutside",
			"forceMount",
			"onEscapeKeydown",
			"interactOutsideBehavior",
			"escapeKeydownBehavior",
			"onOpenAutoFocus",
			"onCloseAutoFocus",
			"onFocusOutside",
			"side",
			"trapFocus",
		]);
	const k = _0.create({
		id: ge(() => n()),
		loop: ge(() => i()),
		ref: ge(
			() => a(),
			(Q) => a(Q)
		),
		isSub: !0,
		onCloseAutoFocus: ge(() => z),
	});
	function T(Q) {
		const $ = Q.currentTarget.contains(Q.target),
			K = Qg[k.parentMenu.root.opts.dir.current].includes(Q.key);
		if ($ && K) {
			k.parentMenu.onClose();
			const le = k.parentMenu.triggerNode;
			le == null || le.focus(), Q.preventDefault();
		}
	}
	const B = j(() => k.parentMenu.root.getBitsAttr("sub-content")),
		A = j(() => Fr(_, k.props, { side: y(), onkeydown: T, [m(B)]: "" }));
	function N(Q) {
		f()(Q),
			!Q.defaultPrevented &&
				(Q.preventDefault(),
				k.parentMenu.root.isUsingKeyboard &&
					k.parentMenu.contentNode &&
					nu.dispatch(k.parentMenu.contentNode));
	}
	function z(Q) {
		p()(Q), !Q.defaultPrevented && Q.preventDefault();
	}
	function I(Q) {
		o()(Q), !Q.defaultPrevented && k.parentMenu.onClose();
	}
	function G(Q) {
		l()(Q), !Q.defaultPrevented && k.parentMenu.onClose();
	}
	function re(Q) {
		var $;
		g()(Q),
			!Q.defaultPrevented &&
				yn(Q.target) &&
				Q.target.id !== (($ = k.parentMenu.triggerNode) == null ? void 0 : $.id) &&
				k.parentMenu.onClose();
	}
	var V = He(),
		se = pe(V);
	{
		var ce = (Q) => {
				hf(
					Q,
					ai(() => m(A), {
						get ref() {
							return k.opts.ref;
						},
						get interactOutsideBehavior() {
							return u();
						},
						get escapeKeydownBehavior() {
							return h();
						},
						onOpenAutoFocus: N,
						get enabled() {
							return k.parentMenu.opts.open.current;
						},
						onInteractOutside: I,
						onEscapeKeydown: G,
						onFocusOutside: re,
						preventScroll: !1,
						get loop() {
							return i();
						},
						get trapFocus() {
							return x();
						},
						get shouldRender() {
							return k.shouldRender;
						},
						popper: (K, le) => {
							let ie = () => (le == null ? void 0 : le().props),
								oe = () => (le == null ? void 0 : le().wrapperProps);
							var te = He();
							const Ke = j(() => Fr(ie(), m(A), { style: A0("menu") }));
							var qe = pe(te);
							{
								var Qe = (Xe) => {
										var it = He(),
											lt = pe(it),
											we = mo(() => ({ props: m(Ke), wrapperProps: oe(), ...k.snippetProps }));
										It(
											lt,
											() => e.child,
											() => m(we)
										),
											C(Xe, it);
									},
									je = (Xe) => {
										var it = av();
										zt(it, () => ({ ...oe() }));
										var lt = L(it);
										zt(lt, () => ({ ...m(Ke) }));
										var we = L(lt);
										It(we, () => e.children ?? Qt), O(lt), O(it), C(Xe, it);
									};
								ne(qe, (Xe) => {
									e.child ? Xe(Qe) : Xe(je, !1);
								});
							}
							C(K, te);
						},
						$$slots: { popper: !0 },
					})
				);
			},
			Ce = (Q, $) => {
				{
					var K = (le) => {
						df(
							le,
							ai(() => m(A), {
								get ref() {
									return k.opts.ref;
								},
								get interactOutsideBehavior() {
									return u();
								},
								get escapeKeydownBehavior() {
									return h();
								},
								onCloseAutoFocus: z,
								onOpenAutoFocus: N,
								get open() {
									return k.parentMenu.opts.open.current;
								},
								onInteractOutside: I,
								onEscapeKeydown: G,
								onFocusOutside: re,
								preventScroll: !1,
								get loop() {
									return i();
								},
								get trapFocus() {
									return x();
								},
								get shouldRender() {
									return k.shouldRender;
								},
								popper: (oe, te) => {
									let Ke = () => (te == null ? void 0 : te().props),
										qe = () => (te == null ? void 0 : te().wrapperProps);
									var Qe = He();
									const je = j(() => Fr(Ke(), m(A), { style: A0("menu") }));
									var Xe = pe(Qe);
									{
										var it = (we) => {
												var ye = He(),
													be = pe(ye),
													Le = mo(() => ({ props: m(je), wrapperProps: qe(), ...k.snippetProps }));
												It(
													be,
													() => e.child,
													() => m(Le)
												),
													C(we, ye);
											},
											lt = (we) => {
												var ye = iv();
												zt(ye, () => ({ ...qe() }));
												var be = L(ye);
												zt(be, () => ({ ...m(je) }));
												var Le = L(be);
												It(Le, () => e.children ?? Qt), O(be), O(ye), C(we, ye);
											};
										ne(Xe, (we) => {
											e.child ? we(it) : we(lt, !1);
										});
									}
									C(oe, Qe);
								},
								$$slots: { popper: !0 },
							})
						);
					};
					ne(
						Q,
						(le) => {
							s() || le(K);
						},
						$
					);
				}
			};
		ne(se, (Q) => {
			s() ? Q(ce) : Q(Ce, !1);
		});
	}
	C(r, V), xt();
}
var ov = Z("<div><!></div>");
function Yd(r, e) {
	const t = si();
	yt(e, !0);
	let n = q(e, "id", 19, () => ci(t)),
		a = q(e, "disabled", 3, !1),
		i = q(e, "ref", 15, null),
		o = q(e, "onSelect", 3, Lt),
		s = q(e, "openDelay", 3, 100),
		l = _n(e, [
			"$$slots",
			"$$events",
			"$$legacy",
			"id",
			"disabled",
			"ref",
			"children",
			"child",
			"onSelect",
			"openDelay",
		]);
	const u = gc.create({
			disabled: ge(() => a()),
			onSelect: ge(() => o()),
			id: ge(() => n()),
			ref: ge(
				() => i(),
				(f) => i(f)
			),
			openDelay: ge(() => s()),
		}),
		h = j(() => Fr(l, u.props));
	cf(r, {
		get id() {
			return n();
		},
		get ref() {
			return u.opts.ref;
		},
		children: (f, p) => {
			var g = He(),
				y = pe(g);
			{
				var x = (k) => {
						var T = He(),
							B = pe(T);
						It(
							B,
							() => e.child,
							() => ({ props: m(h) })
						),
							C(k, T);
					},
					_ = (k) => {
						var T = ov();
						zt(T, () => ({ ...m(h) }));
						var B = L(T);
						It(B, () => e.children ?? Qt), O(T), C(k, T);
					};
				ne(y, (k) => {
					e.child ? k(x) : k(_, !1);
				});
			}
			C(f, g);
		},
		$$slots: { default: !0 },
	}),
		xt();
}
var sv = Z("<div><!></div>");
function lv(r, e) {
	const t = si();
	yt(e, !0);
	let n = q(e, "ref", 15, null),
		a = q(e, "checked", 15, !1),
		i = q(e, "id", 19, () => ci(t)),
		o = q(e, "onCheckedChange", 3, Lt),
		s = q(e, "disabled", 3, !1),
		l = q(e, "onSelect", 3, Lt),
		u = q(e, "closeOnSelect", 3, !0),
		h = q(e, "indeterminate", 15, !1),
		f = q(e, "onIndeterminateChange", 3, Lt),
		p = q(e, "value", 3, ""),
		g = _n(e, [
			"$$slots",
			"$$events",
			"$$legacy",
			"child",
			"children",
			"ref",
			"checked",
			"id",
			"onCheckedChange",
			"disabled",
			"onSelect",
			"closeOnSelect",
			"indeterminate",
			"onIndeterminateChange",
			"value",
		]);
	const y = O4.getOr(null);
	y && p() && (y.opts.value.current.includes(p()) ? a(!0) : a(!1)),
		Ar.pre(
			() => p(),
			() => {
				y && p() && (y.opts.value.current.includes(p()) ? a(!0) : a(!1));
			}
		);
	const x = vc.create(
		{
			checked: ge(
				() => a(),
				(z) => {
					z !== a() && (a(z), o()(z));
				}
			),
			id: ge(() => i()),
			disabled: ge(() => s()),
			onSelect: ge(() => _),
			ref: ge(
				() => n(),
				(z) => n(z)
			),
			closeOnSelect: ge(() => u()),
			indeterminate: ge(
				() => h(),
				(z) => {
					z !== h() && (h(z), f()(z));
				}
			),
			value: ge(() => p()),
		},
		y
	);
	function _(z) {
		l()(z), !z.defaultPrevented && x.toggleChecked();
	}
	const k = j(() => Fr(g, x.props));
	var T = He(),
		B = pe(T);
	{
		var A = (z) => {
				var I = He(),
					G = pe(I);
				It(
					G,
					() => e.child,
					() => ({ checked: a(), indeterminate: h(), props: m(k) })
				),
					C(z, I);
			},
			N = (z) => {
				var I = sv();
				zt(I, () => ({ ...m(k) }));
				var G = L(I);
				It(
					G,
					() => e.children ?? Qt,
					() => ({ checked: a(), indeterminate: h() })
				),
					O(I),
					C(z, I);
			};
		ne(B, (z) => {
			e.child ? z(A) : z(N, !1);
		});
	}
	C(r, T), xt();
}
function cv(r, e) {
	yt(e, !0);
	let t = q(e, "open", 15, !1),
		n = q(e, "dir", 3, "ltr"),
		a = q(e, "onOpenChange", 3, Lt),
		i = q(e, "onOpenChangeComplete", 3, Lt),
		o = q(e, "_internal_variant", 3, "dropdown-menu");
	const s = pc.create({
		variant: ge(() => o()),
		dir: ge(() => n()),
		onClose: () => {
			t(!1), a()(!1);
		},
	});
	w0.create(
		{
			open: ge(
				() => t(),
				(l) => {
					t(l), a()(l);
				}
			),
			onOpenChangeComplete: ge(() => i()),
		},
		s
	),
		lf(r, {
			children: (l, u) => {
				var h = He(),
					f = pe(h);
				It(f, () => e.children ?? Qt), C(l, h);
			},
			$$slots: { default: !0 },
		}),
		xt();
}
var uv = Z("<div><div><!></div></div>"),
	dv = Z("<div><div><!></div></div>");
function hv(r, e) {
	const t = si();
	yt(e, !0);
	let n = q(e, "id", 19, () => ci(t)),
		a = q(e, "ref", 15, null),
		i = q(e, "loop", 3, !0),
		o = q(e, "onInteractOutside", 3, Lt),
		s = q(e, "onEscapeKeydown", 3, Lt),
		l = q(e, "onCloseAutoFocus", 3, Lt),
		u = q(e, "forceMount", 3, !1),
		h = q(e, "trapFocus", 3, !1),
		f = _n(e, [
			"$$slots",
			"$$events",
			"$$legacy",
			"id",
			"child",
			"children",
			"ref",
			"loop",
			"onInteractOutside",
			"onEscapeKeydown",
			"onCloseAutoFocus",
			"forceMount",
			"trapFocus",
		]);
	const p = _0.create({
			id: ge(() => n()),
			loop: ge(() => i()),
			ref: ge(
				() => a(),
				(A) => a(A)
			),
			onCloseAutoFocus: ge(() => l()),
		}),
		g = j(() => Fr(f, p.props));
	function y(A) {
		if ((p.handleInteractOutside(A), !A.defaultPrevented && (o()(A), !A.defaultPrevented))) {
			if (A.target && A.target instanceof Element) {
				const N = `[${p.parentMenu.root.getBitsAttr("sub-content")}]`;
				if (A.target.closest(N)) return;
			}
			p.parentMenu.onClose();
		}
	}
	function x(A) {
		s()(A), !A.defaultPrevented && p.parentMenu.onClose();
	}
	var _ = He(),
		k = pe(_);
	{
		var T = (A) => {
				hf(
					A,
					ai(
						() => m(g),
						() => p.popperProps,
						{
							get ref() {
								return p.opts.ref;
							},
							get enabled() {
								return p.parentMenu.opts.open.current;
							},
							onInteractOutside: y,
							onEscapeKeydown: x,
							get trapFocus() {
								return h();
							},
							get loop() {
								return i();
							},
							forceMount: !0,
							get id() {
								return n();
							},
							get shouldRender() {
								return p.shouldRender;
							},
							popper: (z, I) => {
								let G = () => (I == null ? void 0 : I().props),
									re = () => (I == null ? void 0 : I().wrapperProps);
								var V = He();
								const se = j(() => Fr(G(), { style: A0("dropdown-menu") }));
								var ce = pe(V);
								{
									var Ce = ($) => {
											var K = He(),
												le = pe(K),
												ie = mo(() => ({ props: m(se), wrapperProps: re(), ...p.snippetProps }));
											It(
												le,
												() => e.child,
												() => m(ie)
											),
												C($, K);
										},
										Q = ($) => {
											var K = uv();
											zt(K, () => ({ ...re() }));
											var le = L(K);
											zt(le, () => ({ ...m(se) }));
											var ie = L(le);
											It(ie, () => e.children ?? Qt), O(le), O(K), C($, K);
										};
									ne(ce, ($) => {
										e.child ? $(Ce) : $(Q, !1);
									});
								}
								C(z, V);
							},
							$$slots: { popper: !0 },
						}
					)
				);
			},
			B = (A, N) => {
				{
					var z = (I) => {
						df(
							I,
							ai(
								() => m(g),
								() => p.popperProps,
								{
									get ref() {
										return p.opts.ref;
									},
									get open() {
										return p.parentMenu.opts.open.current;
									},
									onInteractOutside: y,
									onEscapeKeydown: x,
									get trapFocus() {
										return h();
									},
									get loop() {
										return i();
									},
									forceMount: !1,
									get id() {
										return n();
									},
									get shouldRender() {
										return p.shouldRender;
									},
									popper: (re, V) => {
										let se = () => (V == null ? void 0 : V().props),
											ce = () => (V == null ? void 0 : V().wrapperProps);
										var Ce = He();
										const Q = j(() => Fr(se(), { style: A0("dropdown-menu") }));
										var $ = pe(Ce);
										{
											var K = (ie) => {
													var oe = He(),
														te = pe(oe),
														Ke = mo(() => ({ props: m(Q), wrapperProps: ce(), ...p.snippetProps }));
													It(
														te,
														() => e.child,
														() => m(Ke)
													),
														C(ie, oe);
												},
												le = (ie) => {
													var oe = dv();
													zt(oe, () => ({ ...ce() }));
													var te = L(oe);
													zt(te, () => ({ ...m(Q) }));
													var Ke = L(te);
													It(Ke, () => e.children ?? Qt), O(te), O(oe), C(ie, oe);
												};
											ne($, (ie) => {
												e.child ? ie(K) : ie(le, !1);
											});
										}
										C(re, Ce);
									},
									$$slots: { popper: !0 },
								}
							)
						);
					};
					ne(
						A,
						(I) => {
							u() || I(z);
						},
						N
					);
				}
			};
		ne(k, (A) => {
			u() ? A(T) : A(B, !1);
		});
	}
	C(r, _), xt();
}
var fv = Z("<button><!></button>");
function mv(r, e) {
	const t = si();
	yt(e, !0);
	let n = q(e, "id", 19, () => ci(t)),
		a = q(e, "ref", 15, null),
		i = q(e, "disabled", 3, !1),
		o = q(e, "type", 3, "button"),
		s = _n(e, [
			"$$slots",
			"$$events",
			"$$legacy",
			"id",
			"ref",
			"child",
			"children",
			"disabled",
			"type",
		]);
	const l = yc.create({
			id: ge(() => n()),
			disabled: ge(() => i() ?? !1),
			ref: ge(
				() => a(),
				(h) => a(h)
			),
		}),
		u = j(() => Fr(s, l.props, { type: o() }));
	cf(r, {
		get id() {
			return n();
		},
		get ref() {
			return l.opts.ref;
		},
		children: (h, f) => {
			var p = He(),
				g = pe(p);
			{
				var y = (_) => {
						var k = He(),
							T = pe(k);
						It(
							T,
							() => e.child,
							() => ({ props: m(u) })
						),
							C(_, k);
					},
					x = (_) => {
						var k = fv();
						zt(k, () => ({ ...m(u) }));
						var T = L(k);
						It(T, () => e.children ?? Qt), O(k), C(_, k);
					};
				ne(g, (_) => {
					e.child ? _(y) : _(x, !1);
				});
			}
			C(h, p);
		},
		$$slots: { default: !0 },
	}),
		xt();
}
let so = Ee(!1);
const on = class on {
	constructor() {
		Rt(
			() => (
				on._refs === 0 &&
					(on._cleanup = Kc(() => {
						const e = [],
							t = (a) => {
								F(so, !1);
							},
							n = (a) => {
								F(so, !0);
							};
						return (
							e.push(
								yr(document, "pointerdown", t, { capture: !0 }),
								yr(document, "pointermove", t, { capture: !0 }),
								yr(document, "keydown", n, { capture: !0 })
							),
							ri(...e)
						);
					})),
				on._refs++,
				() => {
					var e;
					on._refs--, on._refs === 0 && (F(so, !1), (e = on._cleanup) == null || e.call(on));
				}
			)
		);
	}
	get current() {
		return m(so);
	}
	set current(e) {
		F(so, e, !0);
	}
};
Se(on, "_refs", 0), Se(on, "_cleanup");
let Nc = on;
var pv = or("<svg><!></svg>");
function ff(r, e) {
	const t = Cr(e, ["children", "$$slots", "$$events", "$$legacy"]);
	var n = pv();
	zt(n, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var a = L(n);
	wr(
		a,
		() =>
			'<path fill="currentColor" d="M19 14a3 3 0 1 0-3-3a3 3 0 0 0 3 3m0-4a1 1 0 1 1-1 1a1 1 0 0 1 1-1"/><path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 22H6v-6l5-5l5.59 5.59a2 2 0 0 0 2.82 0L21 19l5 5Zm0-4.83l-3.59-3.59a2 2 0 0 0-2.82 0L18 19.17l-5.59-5.59a2 2 0 0 0-2.82 0L6 17.17V6h20Z"/>',
		!0
	),
		O(n),
		C(r, n);
}
var gv = or("<svg><!></svg>");
function Rc(r, e) {
	const t = Cr(e, ["children", "$$slots", "$$events", "$$legacy"]);
	var n = gv();
	zt(n, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var a = L(n);
	wr(
		a,
		() =>
			'<path fill="currentColor" d="m25.7 9.3l-7-7c-.2-.2-.4-.3-.7-.3H8c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-.3-.1-.5-.3-.7M18 4.4l5.6 5.6H18zM24 28H8V4h8v6c0 1.1.9 2 2 2h6z"/><path fill="currentColor" d="M10 22h12v2H10zm0-6h12v2H10z"/>',
		!0
	),
		O(n),
		C(r, n);
}
var vv = or("<svg><!></svg>");
function bv(r, e) {
	const t = Cr(e, ["children", "$$slots", "$$events", "$$legacy"]);
	var n = vv();
	zt(n, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var a = L(n);
	wr(
		a,
		() =>
			'<path fill="currentColor" d="m6 18l1.41 1.41L15 11.83V30h2V11.83l7.59 7.58L26 18L16 8zM6 8V4h20v4h2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4z"/>',
		!0
	),
		O(n),
		C(r, n);
}
var yv = or("<svg><!></svg>");
function mf(r, e) {
	const t = Cr(e, ["children", "$$slots", "$$events", "$$legacy"]);
	var n = yv();
	zt(n, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var a = L(n);
	wr(
		a,
		() =>
			'<path fill="currentColor" d="M29.25 6.76a6 6 0 0 0-8.5 0l1.42 1.42a4 4 0 1 1 5.67 5.67l-8 8a4 4 0 1 1-5.67-5.66l1.41-1.42l-1.41-1.42l-1.42 1.42a6 6 0 0 0 0 8.5A6 6 0 0 0 17 25a6 6 0 0 0 4.27-1.76l8-8a6 6 0 0 0-.02-8.48"/><path fill="currentColor" d="M4.19 24.82a4 4 0 0 1 0-5.67l8-8a4 4 0 0 1 5.67 0A3.94 3.94 0 0 1 19 14a4 4 0 0 1-1.17 2.85L15.71 19l1.42 1.42l2.12-2.12a6 6 0 0 0-8.51-8.51l-8 8a6 6 0 0 0 0 8.51A6 6 0 0 0 7 28a6.07 6.07 0 0 0 4.28-1.76l-1.42-1.42a4 4 0 0 1-5.67 0"/>',
		!0
	),
		O(n),
		C(r, n);
}
var xv = or("<svg><!></svg>");
function O0(r, e) {
	const t = Cr(e, ["children", "$$slots", "$$events", "$$legacy"]);
	var n = xv();
	zt(n, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var a = L(n);
	wr(a, () => '<path fill="currentColor" d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"/>', !0),
		O(n),
		C(r, n);
}
const Xd = {
	png: "image/png",
	jpg: "image/jpeg",
	jpe: "image/jpeg",
	jpeg: "image/jpeg",
	gif: "image/gif",
	webp: "image/webp",
	svg: "image/svg+xml",
	pdf: "application/pdf",
	txt: "text/plain",
	csv: "text/csv",
	json: "application/json",
	mp3: "audio/mpeg",
	wav: "audio/wav",
	ogg: "audio/ogg",
	mp4: "video/mp4",
	mov: "video/quicktime",
	webm: "video/webm",
	zip: "application/zip",
	gz: "application/gzip",
	tgz: "application/gzip",
	tar: "application/x-tar",
	html: "text/html",
	htm: "text/html",
	md: "text/markdown",
};
function wv(r) {
	var e;
	try {
		const n = (e = new URL(r).pathname.split(".").pop()) == null ? void 0 : e.toLowerCase();
		if (n && Xd[n]) return Xd[n];
	} catch {}
}
function _v(r, e, t) {
	const n = wv(t);
	return (
		r ||
		(n && (!e || e === "application/octet-stream" || e.startsWith("text/plain"))
			? n
			: e || n || "application/octet-stream")
	);
}
var kv = (r, e) => {
		r.key === "Enter" && (r.preventDefault(), e());
	},
	Sv = Z('<p class="-mt-1 text-sm text-red-600 dark:text-red-400"> </p>'),
	Ev = Z(
		'<form class="flex w-full flex-col gap-5 p-6"><div class="flex items-start justify-between"><h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Add from URL</h2> <button type="button" class="group" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="size-5 text-gray-700 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-400"><path d="M24 9.41 22.59 8 16 14.59 9.41 8 8 9.41 14.59 16 8 22.59 9.41 24 16 17.41 22.59 24 24 22.59 17.41 16 24 9.41z" fill="currentColor"></path></svg></button></div> <div class="flex flex-col gap-2"><label class="text-sm text-gray-600 dark:text-gray-400" for="fetch-url-input">Enter URL</label> <input id="fetch-url-input" type="url" placeholder="https://example.com/file.txt" class="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-[15px] text-gray-800 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-gray-700"/></div> <!> <p class="-mt-2 text-xs text-gray-500 dark:text-gray-400">Only HTTPS. Max 10MB.</p> <div class="flex items-center justify-end gap-2"><button type="button" class="inline-flex items-center rounded-xl border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 shadow hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">Cancel</button> <button type="submit" class="inline-flex items-center rounded-xl border border-gray-900 bg-gray-900 px-3 py-1.5 text-sm font-semibold text-white hover:bg-black disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-100 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"><!></button></div></form>'
	);
function Tv(r, e) {
	yt(e, !0);
	let t = q(e, "open", 15, !1),
		n = q(e, "acceptMimeTypes", 19, () => []),
		a = Ee(""),
		i = Ee(!1),
		o = Ee(""),
		s = Ee(void 0);
	async function l() {
		await bn(),
			await bn(),
			setTimeout(() => {
				var _, k;
				(_ = m(s)) == null || _.focus(), (k = m(s)) == null || k.select();
			}, 0);
	}
	Rt(() => {
		t() && (F(a, ""), F(o, ""), l());
	});
	function u(_) {
		try {
			return new URL(_).protocol === "https:";
		} catch {
			return !1;
		}
	}
	function h(_, k) {
		var N;
		const T = (N = _.split(";")[0]) == null ? void 0 : N.trim().toLowerCase();
		if (!T) return !1;
		const [B, A] = T.split("/");
		for (const z of k) {
			const [I, G] = z.toLowerCase().split("/");
			if ((I === "*" || I === B) && (G === "*" || G === A)) return !0;
		}
		return !1;
	}
	function f() {
		var _;
		t(!1), (_ = e.onclose) == null || _.call(e);
	}
	async function p() {
		var k;
		F(o, "");
		const _ = m(a).trim();
		if (!u(_)) {
			F(o, "Enter a valid HTTPS URL.");
			return;
		}
		F(i, !0);
		try {
			const T = new URLSearchParams({ url: _ });
			n().length > 0 && T.set("accept", n().join(","));
			const B = `${Oa}/api/fetch-url?${T}`,
				A = await fetch(B);
			if (!A.ok) {
				const se = await A.text();
				throw new Error(se || `Failed to fetch (${A.status})`);
			}
			const N = A.headers.get("x-forwarded-content-type"),
				z = await A.blob(),
				I = _v(N, z.type, _);
			if (n().length > 0 && I && !h(I, n())) throw new Error("File type not allowed.");
			const G = A.headers.get("content-disposition"),
				re = (() => {
					var Ce, Q;
					const se =
						(Ce = G == null ? void 0 : G.match(/filename\*=UTF-8''([^;]+)/i)) == null
							? void 0
							: Ce[1];
					if (se) {
						const $ = se.trim().replace(/['"]/g, "");
						try {
							return decodeURIComponent($);
						} catch {
							return $;
						}
					}
					const ce =
						(Q = G == null ? void 0 : G.match(/filename="?([^";]+)"?/i)) == null ? void 0 : Q[1];
					if (ce) return ce.trim();
					try {
						const K = new URL(_).pathname.split("/").pop() || "attachment";
						return decodeURIComponent(K);
					} catch {
						return "attachment";
					}
				})(),
				V = new File([z], re, { type: I });
			(k = e.onfiles) == null || k.call(e, [V]), f();
		} catch (T) {
			F(o, T instanceof Error ? T.message : "Failed to fetch URL", !0);
		} finally {
			F(i, !1);
		}
	}
	var g = He(),
		y = pe(g);
	{
		var x = (_) => {
			ks(_, {
				onclose: f,
				width: "w-[90dvh] md:w-[480px]",
				children: (T) => {
					var B = Ev(),
						A = L(B),
						N = X(L(A), 2);
					(N.__click = f), O(A);
					var z = X(A, 2),
						I = X(L(z), 2);
					j1(I),
						(I.__keydown = [kv, p]),
						vn(
							I,
							(K) => F(s, K),
							() => m(s)
						),
						O(z);
					var G = X(z, 2);
					{
						var re = (K) => {
							var le = Sv(),
								ie = L(le, !0);
							O(le), Me(() => ut(ie, m(o))), C(K, le);
						};
						ne(G, (K) => {
							m(o) && K(re);
						});
					}
					var V = X(G, 4),
						se = L(V);
					se.__click = f;
					var ce = X(se, 2),
						Ce = L(ce);
					{
						var Q = (K) => {
								var le = f0("Fetching…");
								C(K, le);
							},
							$ = (K) => {
								var le = f0("Add");
								C(K, le);
							};
						ne(Ce, (K) => {
							m(i) ? K(Q) : K($, !1);
						});
					}
					O(ce),
						O(V),
						O(B),
						Me(
							(K) => {
								qt(I, "aria-invalid", m(o) ? "true" : "false"), (ce.disabled = K);
							},
							[() => m(i) || m(a).trim() === ""]
						),
						dr("submit", B, (K) => {
							K.preventDefault(), p();
						}),
						Z1(
							I,
							() => m(a),
							(K) => F(a, K)
						),
						C(T, B);
				},
				$$slots: { default: !0 },
			});
		};
		ne(y, (_) => {
			t() && _(x);
		});
	}
	C(r, g), xt();
}
Mr(["click", "keydown"]);
const pu = ["text/*", "application/json", "application/xml", "application/csv"],
	pf = ["image/jpeg", "image/png"];
function wi() {
	if ((navigator.maxTouchPoints > 0 && screen.width <= 768) || "ontouchstart" in window) return !0;
	const r = navigator.userAgent.toLowerCase();
	return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(r);
}
const Av = async (r, e, t) => {
	if (!r.target) return;
	const n = r.target,
		a = Array.from(n.files ?? []);
	a.length !== 0 && (e([...e(), ...a]), await bn(), t());
};
function Mv(r, e, t, n) {
	var a;
	r.key === "Enter" &&
		!r.shiftKey &&
		!m(e) &&
		!wi() &&
		t().trim() !== "" &&
		(r.preventDefault(), bn(), (a = n.onsubmit) == null || a.call(n));
}
var Cv = (r) => {
		Bn() && r.preventDefault();
	},
	Ov = Z("<!> Add image(s)", 1),
	Nv = Z(
		'<div class="flex items-center gap-1"><!> Add text file</div> <div class="ml-auto flex items-center"><!></div>',
		1
	),
	Rv = Z("<!> Upload from device", 1),
	Iv = Z("<!> Fetch from URL", 1),
	Dv = Z("<!> <!>", 1),
	Lv = Z("<!> <!>", 1),
	zv = Z(
		'<div class="flex items-center gap-1"><!> MCP Servers</div> <div class="ml-auto flex items-center"><!></div>',
		1
	),
	Bv = Z(
		'<img alt="" class="size-4 flex-shrink-0 rounded"/> <span class="max-w-52 truncate py-1"> </span> <div class="ml-auto flex items-center"><span><span></span></span></div>',
		1
	),
	Pv = Z("<!> <!> <!>", 1),
	Fv = Z("<!> <!>", 1),
	qv = Z("<!> <!> <!>", 1),
	Uv = Z("<!> <!>", 1),
	Hv = (r, e) => F(e, !0),
	Gv = Z(
		'<img alt="" class="size-4 rounded bg-white p-px shadow-sm ring-1 ring-black/5 dark:bg-gray-900 dark:ring-white/10"/>'
	),
	Wv = Z('<span class="ml-1 text-[10px] font-semibold text-blue-800 dark:text-blue-200"> </span>'),
	Vv = Z('<span class="flex items-center -space-x-1"><!> <!></span>'),
	Kv = Z(
		'<div><button type="button" title="Manage MCP Servers"><!> </button> <button class="grid size-5 place-items-center rounded-full bg-blue-600/15 text-blue-700 transition-colors hover:bg-blue-600/25 dark:bg-blue-600/25 dark:text-blue-300 dark:hover:bg-blue-600/35" aria-label="Disable all MCP servers" type="button"><!></button></div>'
	),
	Yv = Z(
		'<div class="flex items-center"><input class="absolute hidden size-0" aria-label="Upload file" type="file" multiple/> <!> <!></div>'
	),
	Xv = Z("<div><!></div>"),
	Zv = Z(
		'<div class="flex min-h-full flex-1 flex-col"><textarea rows="1" tabindex="0" inputmode="text"></textarea> <!> <!> <!> <!></div>'
	);
function Zd(r, e) {
	yt(e, !0);
	const [t, n] = Q1(),
		a = () => r0(vp, "$allMcpServers", t),
		i = () => r0(bd, "$selectedServerIds", t),
		o = () => r0(bp, "$enabledServersCount", t);
	let s = q(e, "files", 31, () => cn([])),
		l = q(e, "mimeTypes", 19, () => []),
		u = q(e, "value", 15, ""),
		h = q(e, "placeholder", 3, ""),
		f = q(e, "loading", 3, !1),
		p = q(e, "disabled", 3, !1),
		g = q(e, "modelIsMultimodal", 3, !1),
		y = q(e, "modelSupportsTools", 3, !0),
		x = q(e, "focused", 15, !1),
		_ = Ee(void 0),
		k = Ee(!1),
		T = Ee(null),
		B = Ee(void 0),
		A = Ee(!1),
		N = Ee(!1),
		z = Ee(!1);
	function I(we) {
		if (!m(B)) return;
		const ye = l().join(",");
		m(B).setAttribute("accept", we),
			m(B).click(),
			queueMicrotask(() => {
				var be;
				return (be = m(B)) == null ? void 0 : be.setAttribute("accept", ye);
			});
	}
	function G() {
		const we =
			l()
				.filter((ye) => !(ye === "image/*" || ye.startsWith("image/")))
				.join(",") || pu.join(",");
		I(we);
	}
	function re() {
		const we =
			l()
				.filter((ye) => ye === "image/*" || ye.startsWith("image/"))
				.join(",") || pf.join(",");
		I(we);
	}
	const V = () =>
		typeof requestAnimationFrame == "function"
			? new Promise((we) => {
					requestAnimationFrame(() => we());
				})
			: Promise.resolve();
	async function se() {
		if (
			!(br.data.shared && br.data.loginEnabled && !br.data.user) &&
			!(!m(_) || m(_).disabled || wi()) &&
			!(typeof document < "u" && document.activeElement === m(_)) &&
			(await bn(),
			typeof requestAnimationFrame == "function" && (await V(), await V()),
			!(!m(_) || m(_).disabled || wi()))
		)
			try {
				m(_).focus({ preventScroll: !0 });
			} catch {
				m(_).focus();
			}
	}
	function ce(we) {
		we != null &&
			we.length &&
			(s([...s(), ...we]),
			queueMicrotask(async () => {
				await bn(), se();
			}));
	}
	_s(() => {
		se();
	}),
		qm(() => {
			se();
		});
	function Ce() {
		m(_) &&
			((m(_).style.height = "auto"),
			(m(_).style.height = `${m(_).scrollHeight}px`),
			m(_).selectionStart === m(_).value.length && (m(_).scrollTop = m(_).scrollHeight));
	}
	Rt(() => {
		m(_) && (u(), Ce());
	});
	function Q() {
		Bn() || (m(T) && (clearTimeout(m(T)), F(T, null)), x(!0));
	}
	function $() {
		if (!wi()) {
			x(!1);
			return;
		}
		m(T) && clearTimeout(m(T)),
			F(
				T,
				setTimeout(() => {
					F(T, null), x(!1);
				}),
				!0
			);
	}
	let K = j(() => l().length > 0),
		le = j(() => !m(K)),
		ie = j(() => a().filter((we) => i().has(we.id)));
	var oe = Zv(),
		te = L(oe);
	Yc(te);
	let Ke;
	(te.__keydown = [Mv, k, u, e]),
		(te.__beforeinput = function (...we) {
			var ye;
			(ye = Bn) == null || ye.apply(this, we);
		}),
		vn(
			te,
			(we) => F(_, we),
			() => m(_)
		);
	var qe = X(te, 2);
	{
		var Qe = (we) => {
			var ye = Xv();
			Tt(
				ye,
				1,
				ti([
					"scrollbar-custom -ml-0.5 flex max-w-[calc(100%-40px)] flex-wrap items-center justify-start gap-2.5 px-3 pb-2.5 pt-1.5 text-gray-500 dark:text-gray-400 max-md:flex-nowrap max-md:overflow-x-auto sm:gap-2",
				])
			);
			var be = L(ye);
			{
				var Le = (ze) => {
					var Be = Yv(),
						tt = L(Be);
					(tt.__change = [Av, s, se]),
						(tt.__click = [Cv]),
						vn(
							tt,
							(ct) => F(B, ct),
							() => m(B)
						);
					var ot = X(tt, 2);
					Rr(
						ot,
						() => cv,
						(ct, pt) => {
							pt(ct, {
								onOpenChange: (Mt) => {
									if (Mt && Bn()) {
										F(z, !1);
										return;
									}
									F(z, Mt, !0);
								},
								get open() {
									return m(z);
								},
								set open(Mt) {
									F(z, Mt, !0);
								},
								children: (Mt, Ct) => {
									var Pe = Uv(),
										_e = pe(Pe);
									Rr(
										_e,
										() => mv,
										(ke, Re) => {
											Re(ke, {
												class:
													"btn size-7 rounded-full border bg-white text-black shadow transition-none enabled:hover:bg-white enabled:hover:shadow-inner dark:border-transparent dark:bg-gray-600/50 dark:text-white dark:hover:enabled:bg-gray-600",
												get disabled() {
													return f();
												},
												"aria-label": "Add attachment",
												children: (dt, Et) => {
													mp(dt, { class: "text-base" });
												},
												$$slots: { default: !0 },
											});
										}
									);
									var De = X(_e, 2);
									Rr(
										De,
										() => Kg,
										(ke, Re) => {
											Re(ke, {
												children: (dt, Et) => {
													var Ht = He(),
														nr = pe(Ht);
													Rr(
														nr,
														() => hv,
														(Zt, $t) => {
															$t(Zt, {
																class:
																	"z-50 rounded-xl border border-gray-200 bg-white/95 p-1 text-gray-800 shadow-lg backdrop-blur dark:border-gray-700/60 dark:bg-gray-800/95 dark:text-gray-100",
																side: "top",
																sideOffset: 8,
																align: "start",
																trapFocus: !1,
																onCloseAutoFocus: (Gt) => Gt.preventDefault(),
																interactOutsideBehavior: "defer-otherwise-close",
																children: (Gt, mr) => {
																	var sr = qv(),
																		_r = pe(sr);
																	{
																		var Wn = (Ur) => {
																			var Lr = He(),
																				Wt = pe(Lr);
																			Rr(
																				Wt,
																				() => Us,
																				(lr, M) => {
																					M(lr, {
																						class:
																							"flex h-8 select-none items-center gap-1 rounded-md px-2 text-sm text-gray-700 data-[highlighted]:bg-gray-100 focus-visible:outline-none dark:text-gray-200 dark:data-[highlighted]:bg-white/10",
																						onSelect: () => re(),
																						children: (Y, ve) => {
																							var Ge = Ov(),
																								kt = pe(Ge);
																							ff(kt, {
																								class: "size-4 opacity-90 dark:opacity-80",
																							}),
																								ar(),
																								C(Y, Ge);
																						},
																						$$slots: { default: !0 },
																					});
																				}
																			),
																				C(Ur, Lr);
																		};
																		ne(_r, (Ur) => {
																			g() && Ur(Wn);
																		});
																	}
																	var kn = X(_r, 2);
																	Rr(
																		kn,
																		() => Vd,
																		(Ur, Lr) => {
																			Lr(Ur, {
																				children: (Wt, lr) => {
																					var M = Lv(),
																						Y = pe(M);
																					Rr(
																						Y,
																						() => Yd,
																						(Ge, kt) => {
																							kt(Ge, {
																								class:
																									"flex h-8 select-none items-center gap-1 rounded-md px-2 text-sm text-gray-700 data-[highlighted]:bg-gray-100 data-[state=open]:bg-gray-100 focus-visible:outline-none dark:text-gray-200 dark:data-[highlighted]:bg-white/10 dark:data-[state=open]:bg-white/10",
																								children: (P, H) => {
																									var J = Nv(),
																										de = pe(J),
																										Ie = L(de);
																									Rc(Ie, {
																										class: "size-4 opacity-90 dark:opacity-80",
																									}),
																										ar(),
																										O(de);
																									var Ne = X(de, 2),
																										gt = L(Ne);
																									O0(gt, {
																										class: "size-4 opacity-70 dark:opacity-80",
																									}),
																										O(Ne),
																										C(P, J);
																								},
																								$$slots: { default: !0 },
																							});
																						}
																					);
																					var ve = X(Y, 2);
																					Rr(
																						ve,
																						() => Kd,
																						(Ge, kt) => {
																							kt(Ge, {
																								class:
																									"z-50 rounded-xl border border-gray-200 bg-white/95 p-1 text-gray-800 shadow-lg backdrop-blur dark:border-gray-700/60 dark:bg-gray-800/95 dark:text-gray-100",
																								sideOffset: 10,
																								trapFocus: !1,
																								onCloseAutoFocus: (P) => P.preventDefault(),
																								interactOutsideBehavior: "defer-otherwise-close",
																								children: (P, H) => {
																									var J = Dv(),
																										de = pe(J);
																									Rr(
																										de,
																										() => Us,
																										(Ne, gt) => {
																											gt(Ne, {
																												class:
																													"flex h-8 select-none items-center gap-1 rounded-md px-2 text-sm text-gray-700 data-[highlighted]:bg-gray-100 focus-visible:outline-none dark:text-gray-200 dark:data-[highlighted]:bg-white/10",
																												onSelect: () => G(),
																												children: (St, Dt) => {
																													var at = Rv(),
																														We = pe(at);
																													bv(We, {
																														class:
																															"size-4 opacity-90 dark:opacity-80",
																													}),
																														ar(),
																														C(St, at);
																												},
																												$$slots: { default: !0 },
																											});
																										}
																									);
																									var Ie = X(de, 2);
																									Rr(
																										Ie,
																										() => Us,
																										(Ne, gt) => {
																											gt(Ne, {
																												class:
																													"flex h-8 select-none items-center gap-1 rounded-md px-2 text-sm text-gray-700 data-[highlighted]:bg-gray-100 focus-visible:outline-none dark:text-gray-200 dark:data-[highlighted]:bg-white/10",
																												onSelect: () => F(A, !0),
																												children: (St, Dt) => {
																													var at = Iv(),
																														We = pe(at);
																													mf(We, {
																														class:
																															"size-4 opacity-90 dark:opacity-80",
																													}),
																														ar(),
																														C(St, at);
																												},
																												$$slots: { default: !0 },
																											});
																										}
																									),
																										C(P, J);
																								},
																								$$slots: { default: !0 },
																							});
																						}
																					),
																						C(Wt, M);
																				},
																				$$slots: { default: !0 },
																			});
																		}
																	);
																	var Zr = X(kn, 2);
																	Rr(
																		Zr,
																		() => Vd,
																		(Ur, Lr) => {
																			Lr(Ur, {
																				children: (Wt, lr) => {
																					var M = Fv(),
																						Y = pe(M);
																					Rr(
																						Y,
																						() => Yd,
																						(Ge, kt) => {
																							kt(Ge, {
																								class:
																									"flex h-8 select-none items-center gap-1 rounded-md px-2 text-sm text-gray-700 data-[highlighted]:bg-gray-100 data-[state=open]:bg-gray-100 focus-visible:outline-none dark:text-gray-200 dark:data-[highlighted]:bg-white/10 dark:data-[state=open]:bg-white/10",
																								children: (P, H) => {
																									var J = zv(),
																										de = pe(J),
																										Ie = L(de);
																									pp(Ie, {
																										classNames: "size-4 opacity-90 dark:opacity-80",
																									}),
																										ar(),
																										O(de);
																									var Ne = X(de, 2),
																										gt = L(Ne);
																									O0(gt, {
																										class: "size-4 opacity-70 dark:opacity-80",
																									}),
																										O(Ne),
																										C(P, J);
																								},
																								$$slots: { default: !0 },
																							});
																						}
																					);
																					var ve = X(Y, 2);
																					Rr(
																						ve,
																						() => Kd,
																						(Ge, kt) => {
																							kt(Ge, {
																								class:
																									"z-50 rounded-xl border border-gray-200 bg-white/95 p-1 text-gray-800 shadow-lg backdrop-blur dark:border-gray-700/60 dark:bg-gray-800/95 dark:text-gray-100",
																								sideOffset: 10,
																								trapFocus: !1,
																								onCloseAutoFocus: (P) => P.preventDefault(),
																								interactOutsideBehavior: "defer-otherwise-close",
																								children: (P, H) => {
																									var J = Pv(),
																										de = pe(J);
																									Tr(
																										de,
																										1,
																										a,
																										(St) => St.id,
																										(St, Dt) => {
																											var at = He(),
																												We = pe(at);
																											const Pt = j(() => i().has(m(Dt).id));
																											Rr(
																												We,
																												() => lv,
																												(wt, zr) => {
																													zr(wt, {
																														get checked() {
																															return m(Pt);
																														},
																														onCheckedChange: () => gp(m(Dt).id),
																														closeOnSelect: !1,
																														class:
																															"flex h-9 select-none items-center gap-2 rounded-md px-2 text-sm leading-none text-gray-800 data-[highlighted]:bg-gray-100 focus-visible:outline-none dark:text-gray-100 dark:data-[highlighted]:bg-white/10",
																														children: (Kt, pr) => {
																															let Or = () =>
																																pr == null ? void 0 : pr().checked;
																															var rn = Bv(),
																																kr = pe(rn),
																																Vn = X(kr, 2),
																																Fa = L(Vn, !0);
																															O(Vn);
																															var fn = X(Vn, 2),
																																Sn = L(fn),
																																mn = L(Sn);
																															O(Sn),
																																O(fn),
																																Me(
																																	(En) => {
																																		qt(kr, "src", En),
																																			ut(Fa, m(Dt).name),
																																			Tt(
																																				Sn,
																																				1,
																																				ti([
																																					"relative mt-px flex h-4 w-7 items-center self-center rounded-full transition-colors",
																																					Or()
																																						? "bg-blue-600/80"
																																						: "bg-gray-300 dark:bg-gray-700",
																																				])
																																			),
																																			Tt(
																																				mn,
																																				1,
																																				ti([
																																					"block size-3 translate-x-0.5 rounded-full bg-white shadow transition-transform",
																																					Or()
																																						? "translate-x-[14px]"
																																						: "translate-x-0.5",
																																				])
																																			);
																																	},
																																	[() => vd(m(Dt).url)]
																																),
																																C(Kt, rn);
																														},
																														$$slots: { default: !0 },
																													});
																												}
																											),
																												C(St, at);
																										}
																									);
																									var Ie = X(de, 2);
																									{
																										var Ne = (St) => {
																											var Dt = He(),
																												at = pe(Dt);
																											Rr(
																												at,
																												() => nv,
																												(We, Pt) => {
																													Pt(We, {
																														class:
																															"my-1 h-px bg-gray-200 dark:bg-gray-700/60",
																													});
																												}
																											),
																												C(St, Dt);
																										};
																										ne(Ie, (St) => {
																											a().length > 0 && St(Ne);
																										});
																									}
																									var gt = X(Ie, 2);
																									Rr(
																										gt,
																										() => Us,
																										(St, Dt) => {
																											Dt(St, {
																												class:
																													"flex h-8 select-none items-center gap-1 rounded-md px-2 text-sm text-gray-700 data-[highlighted]:bg-gray-100 focus-visible:outline-none dark:text-gray-200 dark:data-[highlighted]:bg-white/10",
																												onSelect: () => F(N, !0),
																												children: (at, We) => {
																													ar();
																													var Pt = f0("Manage MCP Servers");
																													C(at, Pt);
																												},
																												$$slots: { default: !0 },
																											});
																										}
																									),
																										C(P, J);
																								},
																								$$slots: { default: !0 },
																							});
																						}
																					),
																						C(Wt, M);
																				},
																				$$slots: { default: !0 },
																			});
																		}
																	),
																		C(Gt, sr);
																},
																$$slots: { default: !0 },
															});
														}
													),
														C(dt, Ht);
												},
												$$slots: { default: !0 },
											});
										}
									),
										C(Mt, Pe);
								},
								$$slots: { default: !0 },
							});
						}
					);
					var st = X(ot, 2);
					{
						var vt = (ct) => {
							var pt = Kv();
							let Mt;
							var Ct = L(pt);
							let Pe;
							Ct.__click = [Hv, N];
							var _e = L(Ct);
							{
								var De = (Et) => {
									var Ht = Vv(),
										nr = L(Ht);
									Tr(
										nr,
										17,
										() => m(ie).slice(0, 3),
										(Gt) => Gt.id,
										(Gt, mr) => {
											var sr = Gv();
											Me((_r) => qt(sr, "src", _r), [() => vd(m(mr).url)]), C(Gt, sr);
										}
									);
									var Zt = X(nr, 2);
									{
										var $t = (Gt) => {
											var mr = Wv(),
												sr = L(mr);
											O(mr), Me(() => ut(sr, `+${m(ie).length - 3}`)), C(Gt, mr);
										};
										ne(Zt, (Gt) => {
											m(ie).length > 3 && Gt($t);
										});
									}
									O(Ht), C(Et, Ht);
								};
								ne(_e, (Et) => {
									m(ie).length && Et(De);
								});
							}
							var ke = X(_e);
							O(Ct);
							var Re = X(Ct, 2);
							Re.__click = () => bd.set(new Set());
							var dt = L(Re);
							m0(dt, { class: "size-3.5" }),
								O(Re),
								O(pt),
								Me(
									(Et, Ht) => {
										(Mt = Tt(
											pt,
											1,
											"ml-2 inline-flex h-7 items-center gap-1.5 rounded-full border border-blue-500/10 bg-blue-600/10 pl-2 pr-1 text-xs font-semibold text-blue-700 dark:bg-blue-600/20 dark:text-blue-400",
											null,
											Mt,
											Et
										)),
											qt(
												pt,
												"title",
												y() ? "MCP servers enabled" : "Current model doesn’t support tools"
											),
											(Pe = Tt(
												Ct,
												1,
												"inline-flex cursor-pointer select-none items-center gap-1 bg-transparent p-0 leading-none text-current focus:outline-none",
												null,
												Pe,
												Ht
											)),
											ut(ke, ` MCP (${o() ?? ""})`);
									},
									[
										() => ({ grayscale: !y(), "opacity-60": !y(), "cursor-help": !y() }),
										() => ({ "line-through": !y() }),
									]
								),
								C(ct, pt);
						};
						ne(st, (ct) => {
							o() > 0 && ct(vt);
						});
					}
					O(Be),
						Me(
							(ct) => {
								(tt.disabled = f()), qt(tt, "accept", ct);
							},
							[() => l().join(",")]
						),
						C(ze, Be);
				};
				ne(be, (ze) => {
					m(K) && ze(Le);
				});
			}
			O(ye), C(we, ye);
		};
		ne(qe, (we) => {
			m(le) || we(Qe);
		});
	}
	var je = X(qe, 2);
	It(je, () => e.children ?? Qt);
	var Xe = X(je, 2);
	Tv(Xe, {
		get acceptMimeTypes() {
			return l();
		},
		onfiles: ce,
		get open() {
			return m(A);
		},
		set open(we) {
			F(A, we, !0);
		},
	});
	var it = X(Xe, 2);
	{
		var lt = (we) => {
			fp(we, { onclose: () => F(N, !1) });
		};
		ne(it, (we) => {
			m(N) && we(lt);
		});
	}
	O(oe),
		Me(
			(we) => {
				(Ke = Tt(
					te,
					1,
					"scrollbar-custom max-h-[4lh] w-full resize-none overflow-y-auto overflow-x-hidden border-0 bg-transparent px-2.5 py-2.5 outline-none focus:ring-0 focus-visible:ring-0 sm:px-3 md:max-h-[8lh]",
					null,
					Ke,
					we
				)),
					qt(te, "placeholder", h()),
					(te.disabled = p());
			},
			[() => ({ "text-gray-400": p() })]
		),
		dr("paste", oe, function (...we) {
			var ye;
			(ye = e.onPaste) == null || ye.apply(this, we);
		}),
		dr("compositionstart", te, () => F(k, !0)),
		dr("compositionend", te, () => F(k, !1)),
		dr("focus", te, Q),
		dr("blur", te, $),
		Z1(te, u),
		C(r, oe),
		xt(),
		n();
}
Mr(["keydown", "beforeinput", "change", "click"]);
var jv = or("<svg><!></svg>");
function Jv(r, e) {
	const t = Cr(e, ["children", "$$slots", "$$events", "$$legacy"]);
	var n = jv();
	zt(n, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var a = L(n);
	wr(
		a,
		() =>
			'<path fill="currentColor" d="M24 6H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"/>',
		!0
	),
		O(n),
		C(r, n);
}
var Qv = Z(
	'<button type="button" aria-label="Stop generating"><span class="sr-only">Stop generating</span> <!></button>'
);
function $v(r, e) {
	let t = q(e, "classNames", 3, ""),
		n = q(e, "showBorder", 3, !1);
	var a = Qv();
	a.__click = function (...o) {
		var s;
		(s = e.onClick) == null || s.apply(this, o);
	};
	var i = X(L(a), 2);
	Jv(i, { class: "size-3.5 text-gray-500" }),
		O(a),
		Me(() =>
			Tt(
				a,
				1,
				`btn stop-generating-btn ${n() ? "stop-generating-btn--spinning" : ""} ${t()}`,
				"svelte-17ml63u"
			)
		),
		C(r, a);
}
Mr(["click"]);
var e3 = Z('<div id="dropzone" role="form"><!> <p>Drop File to add to chat</p></div>');
function t3(r, e) {
	yt(e, !0);
	let t = q(e, "files", 15),
		n = q(e, "mimeTypes", 19, () => []),
		a = q(e, "onDrag", 15, !1),
		i = q(e, "onDragInner", 15, !1);
	async function o(h) {
		if (
			(h.preventDefault(),
			!Bn() &&
				h.dataTransfer &&
				h.dataTransfer.items &&
				(t().length > 0 && t([]), h.dataTransfer.items[0].kind === "file"))
		) {
			for (let f = 0; f < h.dataTransfer.items.length; f++) {
				const p = h.dataTransfer.items[f].getAsFile();
				if (p) {
					if (
						!n().some((g) => {
							const [y, x] = g.split("/"),
								[_, k] = p.type.split("/");
							return (y === "*" || y === _) && (x === "*" || x === k);
						})
					) {
						s(
							`Some file type not supported. Only allowed: ${n().join(", ")}. Uploaded document is of type ${p.type}`
						),
							t([]);
						return;
					}
					if (p.size > 10 * 1024 * 1024) {
						s("Some file is too big. (10MB max)"), t([]);
						return;
					}
					t([...t(), p]);
				}
			}
			a(!1);
		}
	}
	function s(h) {
		a(!1), alert(h);
	}
	var l = e3(),
		u = L(l);
	ff(u, { class: "text-xl" }),
		ar(2),
		O(l),
		Me(() =>
			Tt(
				l,
				1,
				`relative flex h-28 w-full max-w-4xl flex-col items-center justify-center gap-1 rounded-xl border-2 border-dotted ${i() ? "border-blue-200 !bg-blue-600/10 text-blue-600 *:pointer-events-none dark:border-blue-600 dark:bg-blue-600/20 dark:text-blue-600" : "bg-gray-100 text-gray-500 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-400"}`
			)
		),
		dr("drop", l, o),
		dr("dragenter", l, () => i(!0)),
		dr("dragleave", l, () => i(!1)),
		dr("dragover", l, (h) => {
			h.preventDefault();
		}),
		C(r, l),
		xt();
}
var r3 = or("<svg><!></svg>");
function gf(r, e) {
	const t = Cr(e, ["children", "$$slots", "$$events", "$$legacy"]);
	var n = r3();
	zt(n, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var a = L(n);
	wr(
		a,
		() =>
			'<path d="M25.95 7.65l.005-.004c-.092-.11-.197-.206-.293-.312c-.184-.205-.367-.41-.563-.603c-.139-.136-.286-.262-.43-.391c-.183-.165-.366-.329-.558-.482c-.16-.128-.325-.247-.49-.367c-.192-.14-.385-.277-.585-.406a13.513 13.513 0 0 0-.533-.324q-.308-.179-.625-.341c-.184-.094-.37-.185-.56-.27c-.222-.1-.449-.191-.678-.28c-.19-.072-.378-.145-.571-.208c-.246-.082-.498-.15-.75-.217c-.186-.049-.368-.102-.556-.143c-.29-.063-.587-.107-.883-.15c-.16-.023-.315-.056-.476-.073A12.933 12.933 0 0 0 6 7.703V4H4v8h8v-2H6.811A10.961 10.961 0 0 1 16 5a11.111 11.111 0 0 1 1.189.067c.136.015.268.042.403.061c.25.037.501.075.746.128c.16.035.315.08.472.121c.213.057.425.114.633.183c.164.054.325.116.486.178c.193.074.384.15.57.235c.162.072.32.15.477.23q.268.136.526.286c.153.09.305.18.453.276c.168.11.33.224.492.342c.14.102.282.203.417.312c.162.13.316.268.47.406c.123.11.248.217.365.332c.167.164.323.338.479.512A10.993 10.993 0 1 1 5 16H3a13 13 0 1 0 22.95-8.35z" fill="currentColor"/>',
		!0
	),
		O(n),
		C(r, n);
}
var n3 = Z('<button type="button"><!> Retry</button>');
function a3(r, e) {
	let t = q(e, "classNames", 3, "");
	var n = n3();
	n.__click = function (...i) {
		var o;
		(o = e.onClick) == null || o.apply(this, i);
	};
	var a = L(n);
	gf(a, { class: "mr-1 -translate-y-px text-[.65rem]" }),
		ar(),
		O(n),
		Me(() =>
			Tt(
				n,
				1,
				`btn flex h-7 rounded-lg border bg-white px-2 py-1 text-sm text-gray-500 shadow-sm hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 ${t() ?? ""}`
			)
		),
		C(r, n);
}
Mr(["click"]);
const i3 = (r) =>
	new Promise((e, t) => {
		const n = new FileReader();
		n.readAsDataURL(r),
			(n.onload = () => {
				const i = n.result.split(",")[1];
				e(i);
			}),
			(n.onerror = (a) => t(a));
	});
var o3 = Z(
	'<div><div class="h-1 w-1 flex-none animate-bounce rounded-full bg-gray-500 dark:bg-gray-400" style="animation-delay: 0.25s;"></div> <div class="h-1 w-1 flex-none animate-bounce rounded-full bg-gray-500 dark:bg-gray-400" style="animation-delay: 0.5s;"></div> <div class="h-1 w-1 flex-none animate-bounce rounded-full bg-gray-500 dark:bg-gray-400" style="animation-delay: 0.75s;"></div></div>'
);
function s3(r, e) {
	let t = q(e, "classNames", 3, "");
	var n = o3();
	Me(() => Tt(n, 1, "inline-flex h-8 flex-none items-center gap-1 " + t())), C(r, n);
}
var l3 = or("<svg><!></svg>");
function c3(r, e) {
	const t = Cr(e, ["children", "$$slots", "$$events", "$$legacy"]);
	var n = l3();
	zt(n, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var a = L(n);
	wr(
		a,
		() =>
			'<path fill="currentColor" d="M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"/>',
		!0
	),
		O(n),
		C(r, n);
}
var u3 = or("<svg><!></svg>");
function jd(r, e) {
	const t = Cr(e, ["children", "$$slots", "$$events", "$$legacy"]);
	var n = u3();
	zt(n, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var a = L(n);
	wr(
		a,
		() =>
			'<path fill="currentColor" d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"/>',
		!0
	),
		O(n),
		C(r, n);
}
var d3 = or("<svg><!></svg>");
function h3(r, e) {
	const t = Cr(e, ["children", "$$slots", "$$events", "$$legacy"]);
	var n = d3();
	zt(n, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var a = L(n);
	wr(
		a,
		() =>
			'<path fill="currentColor" d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10z"/>',
		!0
	),
		O(n),
		C(r, n);
}
var f3 = or("<svg><!></svg>");
function m3(r, e) {
	const t = Cr(e, ["children", "$$slots", "$$events", "$$legacy"]);
	var n = f3();
	zt(n, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var a = L(n);
	wr(
		a,
		() =>
			'<path fill="currentColor" d="M12 8v16H8V8zm0-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m12 2v16h-4V8zm0-2h-4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"/>',
		!0
	),
		O(n),
		C(r, n);
}
var p3 = or("<svg><!></svg>");
function g3(r, e) {
	const t = Cr(e, ["children", "$$slots", "$$events", "$$legacy"]);
	var n = p3();
	zt(n, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var a = L(n);
	wr(
		a,
		() =>
			'<path fill="currentColor" d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28M8 6.69v18.62L24.925 16Z"/>',
		!0
	),
		O(n),
		C(r, n);
}
var v3 = (r, e) => F(e, !m(e)),
	b3 = (r, e) => {
		F(e, !0);
	},
	y3 = Z(
		'<div class="flex items-center gap-2"><span class="text-xs"> </span> <div class="relative h-2 flex-1 rounded-full bg-gray-200 dark:bg-gray-700"><div class="absolute inset-0 h-full bg-gray-400 dark:bg-gray-600"></div></div> <span class="text-xs"> </span></div>'
	),
	x3 = Z(
		'<div class="flex h-14 w-72 items-center gap-4 rounded-2xl border border-gray-200 bg-white p-2.5 text-gray-600 shadow-sm transition-all dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"><audio preload="metadata"></audio> <button class="mx-auto my-auto aspect-square size-8 rounded-full border border-gray-400 bg-gray-100 dark:border-gray-800 dark:bg-gray-700"><!></button> <div class="overflow-hidden"><div class="truncate font-medium"> </div> <!></div></div>'
	);
function w3(r, e) {
	let t = Ee(0),
		n = Ee(0),
		a = Ee(!0);
	function i(T) {
		if (isNaN(T)) return "...";
		const B = Math.floor(T / 60),
			A = Math.floor(T % 60);
		return `${B}:${A < 10 ? `0${A}` : A}`;
	}
	function o(T) {
		if (!T.currentTarget) return;
		const { left: B, width: A } = T.currentTarget.getBoundingClientRect();
		let N = (T.clientX - B) / A;
		N < 0 && (N = 0), N > 1 && (N = 1), F(t, N * m(n));
	}
	var s = x3(),
		l = L(s),
		u = X(l, 2);
	u.__click = [v3, a];
	var h = L(u);
	{
		var f = (T) => {
				g3(T, { class: "mx-auto my-auto text-gray-600 dark:text-gray-300" });
			},
			p = (T) => {
				m3(T, { class: "mx-auto my-auto text-gray-600 dark:text-gray-300" });
			};
		ne(h, (T) => {
			m(a) ? T(f) : T(p, !1);
		});
	}
	O(u);
	var g = X(u, 2),
		y = L(g),
		x = L(y, !0);
	O(y);
	var _ = X(y, 2);
	{
		var k = (T) => {
			var B = y3(),
				A = L(B),
				N = L(A, !0);
			O(A);
			var z = X(A, 2);
			(z.__pointerdown = [b3, a]), (z.__pointerup = o);
			var I = L(z);
			O(z);
			var G = X(z, 2),
				re = L(G, !0);
			O(G),
				O(B),
				Me(
					(V, se) => {
						ut(N, V), sp(I, `width: ${(m(t) / m(n)) * 100}%`), ut(re, se);
					},
					[() => i(m(t)), () => (m(n) ? i(m(n)) : "--:--")]
				),
				C(T, B);
		};
		ne(_, (T) => {
			m(n) !== 1 / 0 && T(k);
		});
	}
	O(g),
		O(s),
		Me(() => {
			qt(l, "src", e.src), qt(u, "aria-label", m(a) ? "play" : "pause"), ut(x, e.name);
		}),
		dr("ended", l, () => {
			F(t, 0);
		}),
		Ap(
			l,
			() => m(t),
			(T) => F(t, T)
		),
		oh("duration", "durationchange", l, (T) => F(n, T)),
		Mp(
			l,
			() => m(a),
			(T) => F(a, T)
		),
		C(r, s);
}
Mr(["click", "pointerdown", "pointerup"]);
var _3 = or("<svg><!></svg>");
function gu(r, e) {
	const t = Cr(e, ["children", "$$slots", "$$events", "$$legacy"]);
	var n = _3();
	zt(n, () => ({ viewBox: "0 0 24 24", width: "1.2em", height: "1.2em", ...t }));
	var a = L(n);
	wr(
		a,
		() =>
			'<path fill="currentColor" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity=".5"/><path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"><animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate"/></path>',
		!0
	),
		O(n),
		C(r, n);
}
var k3 = Z('<img alt="input from user" class="aspect-auto"/>'),
	S3 = Z('<img alt="input from user" class="aspect-auto"/>'),
	E3 =
		Z(`<p class="text-sm text-gray-500">If you prefer to inject clipboard content directly in the chat, you can disable this
						feature in the <a class="underline">settings page</a>.</p>`),
	T3 = (r, e) => F(e, !1),
	A3 = Z("<pre> </pre>"),
	M3 = Z('<div class="flex h-full w-full items-center justify-center"><!></div>'),
	C3 = Z("<pre> </pre>"),
	O3 = Z(
		'<div class="relative flex h-full w-full flex-col gap-2 p-4"><div class="flex items-center gap-1"><!> <h3 class="text-lg font-semibold"> </h3></div> <!> <button class="absolute right-4 top-4 text-xl text-gray-500 hover:text-gray-800"><!></button> <!></div>'
	),
	N3 = (r, e, t) => m(e) && F(t, !0),
	R3 = (r, e, t) => {
		m(e) && (r.key === "Enter" || r.key === " ") && F(t, !0);
	},
	I3 = Z(
		'<div class="h-36 overflow-hidden rounded-xl"><img class="h-36 bg-gray-200 object-cover dark:bg-gray-800"/></div>'
	),
	D3 = Z(
		'<div class="border-1 w-72 overflow-clip rounded-xl border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"><video controls></video></div>',
		2
	),
	L3 = Z('<dt class="text-xs text-gray-400">Clipboard source</dt>'),
	z3 = Z('<dt class="text-xs text-gray-400"> </dt>'),
	B3 = Z(
		'<div><div class="grid size-10 flex-none place-items-center rounded-lg bg-gray-100 dark:bg-gray-800"><!></div> <dl class="flex flex-col items-start truncate leading-tight"><dd class="text-sm"> </dd> <!></dl></div>'
	),
	P3 = Z(
		'<div><div class="grid size-10 flex-none place-items-center rounded-lg bg-gray-100 dark:bg-gray-800"><!></div> <dl class="flex flex-grow flex-col truncate leading-tight"><dd class="text-sm"> </dd> <dt class="text-xs text-gray-400">File type could not be determined</dt></dl> <a class="ml-auto flex-none"><!></a></div>'
	),
	F3 = Z(
		'<div><div class="grid size-10 flex-none place-items-center rounded-lg bg-gray-100 dark:bg-gray-800"><!></div> <dl class="flex flex-col items-start truncate leading-tight"><dd class="text-sm"> </dd> <dt class="text-xs text-gray-400"> </dt></dl></div>'
	),
	q3 = (r, e) => {
		var t;
		r.preventDefault(), r.stopPropagation(), (t = e.onclose) == null || t.call(e);
	},
	U3 = Z("<button><!></button>"),
	H3 = Z(
		'<!> <div role="button" tabindex="0"><div class="group relative flex items-center rounded-xl shadow-sm"><!> <!></div></div>',
		1
	);
function Ic(r, e) {
	yt(e, !0);
	let t = q(e, "canClose", 3, !0),
		n = Ee(!1),
		a = br.url.pathname.replace(/\/$/, "");
	function i(I, G) {
		if (I.length <= G) return I;
		const re = Math.floor((G - 1) / 2),
			V = I.substring(0, re),
			se = I.substring(I.length - re);
		return `${V}…${se}`;
	}
	const o = (I) => I.startsWith("image/") || I === "webp" || I === "jpeg" || I === "png",
		s = (I) => I.startsWith("audio/") || I === "mp3" || I === "wav" || I === "x-wav",
		l = (I) => I.startsWith("video/") || I === "mp4" || I === "x-mpeg";
	function u(I, G) {
		var ce;
		const re = (ce = I.split(";")[0]) == null ? void 0 : ce.trim().toLowerCase();
		if (!re) return !1;
		const [V, se] = re.split("/");
		for (const Ce of G) {
			const [Q, $] = Ce.toLowerCase().split("/");
			if ((Q === "*" || Q === V) && ($ === "*" || $ === se)) return !0;
		}
		return !1;
	}
	const h = (I) => I === "application/vnd.chatui.clipboard" || u(I, pu);
	let f = j(() => o(e.file.mime) || h(e.file.mime));
	var p = H3(),
		g = pe(p);
	{
		var y = (I) => {
			ks(I, {
				width: "xl:max-w-[75dvw]",
				onclose: () => F(n, !1),
				children: (G, re) => {
					var V = He(),
						se = pe(V);
					{
						var ce = (Q) => {
								var $ = He(),
									K = pe($);
								{
									var le = (oe) => {
											var te = k3();
											Me(() => qt(te, "src", a + "/output/" + e.file.value)), C(oe, te);
										},
										ie = (oe) => {
											var te = S3();
											Me(() => qt(te, "src", `data:${e.file.mime};base64,${e.file.value}`)),
												C(oe, te);
										};
									ne(K, (oe) => {
										e.file.type === "hash" ? oe(le) : oe(ie, !1);
									});
								}
								C(Q, $);
							},
							Ce = (Q, $) => {
								{
									var K = (le) => {
										var ie = O3(),
											oe = L(ie),
											te = L(oe);
										Rc(te, {});
										var Ke = X(te, 2),
											qe = L(Ke, !0);
										O(Ke), O(oe);
										var Qe = X(oe, 2);
										{
											var je = (be) => {
												var Le = E3(),
													ze = X(L(Le));
												ar(), O(Le), Me(() => qt(ze, "href", `${Oa}/settings`)), C(be, Le);
											};
											ne(Qe, (be) => {
												e.file.mime === "application/vnd.chatui.clipboard" && be(je);
											});
										}
										var Xe = X(Qe, 2);
										Xe.__click = [T3, n];
										var it = L(Xe);
										m0(it, { class: "text-xl" }), O(Xe);
										var lt = X(Xe, 2);
										{
											var we = (be) => {
													var Le = He(),
														ze = pe(Le);
													nh(
														ze,
														() => fetch(a + "/output/" + e.file.value).then((Be) => Be.text()),
														(Be) => {
															var tt = M3(),
																ot = L(tt);
															gu(ot, { class: "text-xl" }), O(tt), C(Be, tt);
														},
														(Be, tt) => {
															var ot = A3();
															let st;
															var vt = L(ot, !0);
															O(ot),
																Me(
																	(ct) => {
																		(st = Tt(
																			ot,
																			1,
																			"w-full whitespace-pre-wrap break-words pt-0 text-xs",
																			null,
																			st,
																			ct
																		)),
																			ut(vt, m(tt));
																	},
																	[
																		() => ({
																			"font-sans":
																				e.file.mime === "text/plain" ||
																				e.file.mime === "application/vnd.chatui.clipboard",
																			"font-mono":
																				e.file.mime !== "text/plain" &&
																				e.file.mime !== "application/vnd.chatui.clipboard",
																		}),
																	]
																),
																C(Be, ot);
														}
													),
														C(be, Le);
												},
												ye = (be) => {
													var Le = C3();
													let ze;
													var Be = L(Le, !0);
													O(Le),
														Me(
															(tt, ot) => {
																(ze = Tt(
																	Le,
																	1,
																	"w-full whitespace-pre-wrap break-words pt-0 text-xs",
																	null,
																	ze,
																	tt
																)),
																	ut(Be, ot);
															},
															[
																() => ({
																	"font-sans":
																		e.file.mime === "text/plain" ||
																		e.file.mime === "application/vnd.chatui.clipboard",
																	"font-mono":
																		e.file.mime !== "text/plain" &&
																		e.file.mime !== "application/vnd.chatui.clipboard",
																}),
																() => atob(e.file.value),
															]
														),
														C(be, Le);
												};
											ne(lt, (be) => {
												e.file.type === "hash" ? be(we) : be(ye, !1);
											});
										}
										O(ie), Me(() => ut(qe, e.file.name)), C(le, ie);
									};
									ne(
										Q,
										(le) => {
											h(e.file.mime) && le(K);
										},
										$
									);
								}
							};
						ne(se, (Q) => {
							o(e.file.mime) ? Q(ce) : Q(Ce, !1);
						});
					}
					C(G, V);
				},
				$$slots: { default: !0 },
			});
		};
		ne(g, (I) => {
			m(n) && m(f) && I(y);
		});
	}
	var x = X(g, 2);
	(x.__click = [N3, f, n]), (x.__keydown = [R3, f, n]);
	let _;
	var k = L(x),
		T = L(k);
	{
		var B = (I) => {
				var G = I3(),
					re = L(G);
				O(G),
					Me(() => {
						qt(
							re,
							"src",
							e.file.type === "base64"
								? `data:${e.file.mime};base64,${e.file.value}`
								: a + "/output/" + e.file.value
						),
							qt(re, "alt", e.file.name);
					}),
					C(I, G);
			},
			A = (I, G) => {
				{
					var re = (se) => {
							const ce = j(() =>
									e.file.type === "base64"
										? `data:${e.file.mime};base64,${e.file.value}`
										: a + "/output/" + e.file.value
								),
								Ce = j(() => i(e.file.name, 28));
							w3(se, {
								get src() {
									return m(ce);
								},
								get name() {
									return m(Ce);
								},
							});
						},
						V = (se, ce) => {
							{
								var Ce = ($) => {
										var K = D3(),
											le = L(K);
										O(K),
											Me(() =>
												qt(
													le,
													"src",
													e.file.type === "base64"
														? `data:${e.file.mime};base64,${e.file.value}`
														: a + "/output/" + e.file.value
												)
											),
											C($, K);
									},
									Q = ($, K) => {
										{
											var le = (oe) => {
													var te = B3();
													let Ke;
													var qe = L(te),
														Qe = L(qe);
													Rc(Qe, { class: "text-base text-gray-700 dark:text-gray-300" }), O(qe);
													var je = X(qe, 2),
														Xe = L(je),
														it = L(Xe, !0);
													O(Xe);
													var lt = X(Xe, 2);
													{
														var we = (be) => {
																var Le = L3();
																C(be, Le);
															},
															ye = (be) => {
																var Le = z3(),
																	ze = L(Le, !0);
																O(Le), Me(() => ut(ze, e.file.mime)), C(be, Le);
															};
														ne(lt, (be) => {
															e.file.mime === "application/vnd.chatui.clipboard"
																? be(we)
																: be(ye, !1);
														});
													}
													O(je),
														O(te),
														Me(
															(be, Le) => {
																(Ke = Tt(
																	te,
																	1,
																	"flex h-14 w-64 items-center gap-2 overflow-hidden rounded-xl border border-gray-200 bg-white p-2 dark:border-gray-800 dark:bg-gray-900 2xl:w-72",
																	null,
																	Ke,
																	be
																)),
																	ut(it, Le);
															},
															[() => ({ "file-hoverable": m(f) }), () => i(e.file.name, 28)]
														),
														C(oe, te);
												},
												ie = (oe, te) => {
													{
														var Ke = (Qe) => {
																var je = P3();
																let Xe;
																var it = L(je),
																	lt = L(it);
																jd(lt, { class: "text-base text-gray-700 dark:text-gray-300" }),
																	O(it);
																var we = X(it, 2),
																	ye = L(we),
																	be = L(ye, !0);
																O(ye), ar(2), O(we);
																var Le = X(we, 2),
																	ze = L(Le);
																h3(ze, { class: "text-base text-gray-700 dark:text-gray-300" }),
																	O(Le),
																	O(je),
																	Me(
																		(Be, tt) => {
																			(Xe = Tt(
																				je,
																				1,
																				"flex h-14 w-72 items-center gap-2 overflow-hidden rounded-xl border border-gray-200 bg-white p-2 dark:border-gray-800 dark:bg-gray-900",
																				null,
																				Xe,
																				Be
																			)),
																				ut(be, tt),
																				qt(
																					Le,
																					"href",
																					e.file.type === "base64"
																						? `data:application/octet-stream;base64,${e.file.value}`
																						: a + "/output/" + e.file.value
																				),
																				qt(Le, "download", e.file.name);
																		},
																		[() => ({ "file-hoverable": m(f) }), () => i(e.file.name, 28)]
																	),
																	C(Qe, je);
															},
															qe = (Qe) => {
																var je = F3();
																let Xe;
																var it = L(je),
																	lt = L(it);
																jd(lt, { class: "text-base text-gray-700 dark:text-gray-300" }),
																	O(it);
																var we = X(it, 2),
																	ye = L(we),
																	be = L(ye, !0);
																O(ye);
																var Le = X(ye, 2),
																	ze = L(Le, !0);
																O(Le),
																	O(we),
																	O(je),
																	Me(
																		(Be, tt) => {
																			(Xe = Tt(
																				je,
																				1,
																				"flex h-14 w-72 items-center gap-2 overflow-hidden rounded-xl border border-gray-200 bg-white p-2 dark:border-gray-800 dark:bg-gray-900",
																				null,
																				Xe,
																				Be
																			)),
																				ut(be, tt),
																				ut(ze, e.file.mime);
																		},
																		[() => ({ "file-hoverable": m(f) }), () => i(e.file.name, 28)]
																	),
																	C(Qe, je);
															};
														ne(
															oe,
															(Qe) => {
																e.file.mime === "application/octet-stream" ? Qe(Ke) : Qe(qe, !1);
															},
															te
														);
													}
												};
											ne(
												$,
												(oe) => {
													h(e.file.mime) ? oe(le) : oe(ie, !1);
												},
												K
											);
										}
									};
								ne(
									se,
									($) => {
										l(e.file.mime) ? $(Ce) : $(Q, !1);
									},
									ce
								);
							}
						};
					ne(
						I,
						(se) => {
							s(e.file.mime) ? se(re) : se(V, !1);
						},
						G
					);
				}
			};
		ne(T, (I) => {
			o(e.file.mime) ? I(B) : I(A, !1);
		});
	}
	var N = X(T, 2);
	{
		var z = (I) => {
			var G = U3();
			Tt(
				G,
				1,
				"absolute -right-2 -top-2 z-10 grid size-6 place-items-center rounded-full border bg-black group-hover:visible dark:border-gray-700",
				null,
				{},
				{ invisible: navigator.maxTouchPoints === 0 }
			),
				(G.__click = [q3, e]);
			var re = L(G);
			m0(re, { class: " text-xs  text-white" }), O(G), C(I, G);
		};
		ne(N, (I) => {
			t() && I(z);
		});
	}
	O(k),
		O(x),
		Me((I) => (_ = Tt(x, 1, "", null, _, I)), [() => ({ clickable: m(f) })]),
		C(r, p),
		xt();
}
Mr(["click", "keydown"]);
class Jr {
	constructor(e, t, n) {
		(this.lexer = void 0),
			(this.start = void 0),
			(this.end = void 0),
			(this.lexer = e),
			(this.start = t),
			(this.end = n);
	}
	static range(e, t) {
		return t
			? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer
				? null
				: new Jr(e.loc.lexer, e.loc.start, t.loc.end)
			: e && e.loc;
	}
}
class un {
	constructor(e, t) {
		(this.text = void 0),
			(this.loc = void 0),
			(this.noexpand = void 0),
			(this.treatAsRelax = void 0),
			(this.text = e),
			(this.loc = t);
	}
	range(e, t) {
		return new un(t, Jr.range(this, e));
	}
}
class fe {
	constructor(e, t) {
		(this.name = void 0),
			(this.position = void 0),
			(this.length = void 0),
			(this.rawMessage = void 0);
		var n = "KaTeX parse error: " + e,
			a,
			i,
			o = t && t.loc;
		if (o && o.start <= o.end) {
			var s = o.lexer.input;
			(a = o.start),
				(i = o.end),
				a === s.length ? (n += " at end of input: ") : (n += " at position " + (a + 1) + ": ");
			var l = s.slice(a, i).replace(/[^]/g, "$&̲"),
				u;
			a > 15 ? (u = "…" + s.slice(a - 15, a)) : (u = s.slice(0, a));
			var h;
			i + 15 < s.length ? (h = s.slice(i, i + 15) + "…") : (h = s.slice(i)), (n += u + l + h);
		}
		var f = new Error(n);
		return (
			(f.name = "ParseError"),
			(f.__proto__ = fe.prototype),
			(f.position = a),
			a != null && i != null && (f.length = i - a),
			(f.rawMessage = e),
			f
		);
	}
}
fe.prototype.__proto__ = Error.prototype;
var G3 = function (e, t) {
		return e.indexOf(t) !== -1;
	},
	W3 = function (e, t) {
		return e === void 0 ? t : e;
	},
	V3 = /([A-Z])/g,
	K3 = function (e) {
		return e.replace(V3, "-$1").toLowerCase();
	},
	Y3 = { "&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#x27;" },
	X3 = /[&><"']/g;
function Z3(r) {
	return String(r).replace(X3, (e) => Y3[e]);
}
var vf = function r(e) {
		return e.type === "ordgroup" || e.type === "color"
			? e.body.length === 1
				? r(e.body[0])
				: e
			: e.type === "font"
				? r(e.body)
				: e;
	},
	j3 = function (e) {
		var t = vf(e);
		return t.type === "mathord" || t.type === "textord" || t.type === "atom";
	},
	J3 = function (e) {
		if (!e) throw new Error("Expected non-null, but got " + String(e));
		return e;
	},
	Q3 = function (e) {
		var t = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
		return t
			? t[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1])
				? null
				: t[1].toLowerCase()
			: "_relative";
	},
	Je = {
		contains: G3,
		deflt: W3,
		escape: Z3,
		hyphenate: K3,
		getBaseElem: vf,
		isCharacterBox: j3,
		protocolFromUrl: Q3,
	},
	c0 = {
		displayMode: {
			type: "boolean",
			description:
				"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
			cli: "-d, --display-mode",
		},
		output: {
			type: { enum: ["htmlAndMathml", "html", "mathml"] },
			description: "Determines the markup language of the output.",
			cli: "-F, --format <type>",
		},
		leqno: {
			type: "boolean",
			description: "Render display math in leqno style (left-justified tags).",
		},
		fleqn: { type: "boolean", description: "Render display math flush left." },
		throwOnError: {
			type: "boolean",
			default: !0,
			cli: "-t, --no-throw-on-error",
			cliDescription:
				"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error.",
		},
		errorColor: {
			type: "string",
			default: "#cc0000",
			cli: "-c, --error-color <color>",
			cliDescription:
				"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
			cliProcessor: (r) => "#" + r,
		},
		macros: {
			type: "object",
			cli: "-m, --macro <def>",
			cliDescription:
				"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
			cliDefault: [],
			cliProcessor: (r, e) => (e.push(r), e),
		},
		minRuleThickness: {
			type: "number",
			description:
				"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
			processor: (r) => Math.max(0, r),
			cli: "--min-rule-thickness <size>",
			cliProcessor: parseFloat,
		},
		colorIsTextColor: {
			type: "boolean",
			description:
				"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
			cli: "-b, --color-is-text-color",
		},
		strict: {
			type: [{ enum: ["warn", "ignore", "error"] }, "boolean", "function"],
			description:
				"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
			cli: "-S, --strict",
			cliDefault: !1,
		},
		trust: {
			type: ["boolean", "function"],
			description: "Trust the input, enabling all HTML features such as \\url.",
			cli: "-T, --trust",
		},
		maxSize: {
			type: "number",
			default: 1 / 0,
			description:
				"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
			processor: (r) => Math.max(0, r),
			cli: "-s, --max-size <n>",
			cliProcessor: parseInt,
		},
		maxExpand: {
			type: "number",
			default: 1e3,
			description:
				"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
			processor: (r) => Math.max(0, r),
			cli: "-e, --max-expand <n>",
			cliProcessor: (r) => (r === "Infinity" ? 1 / 0 : parseInt(r)),
		},
		globalGroup: { type: "boolean", cli: !1 },
	};
function $3(r) {
	if (r.default) return r.default;
	var e = r.type,
		t = Array.isArray(e) ? e[0] : e;
	if (typeof t != "string") return t.enum[0];
	switch (t) {
		case "boolean":
			return !1;
		case "string":
			return "";
		case "number":
			return 0;
		case "object":
			return {};
	}
}
class vu {
	constructor(e) {
		(this.displayMode = void 0),
			(this.output = void 0),
			(this.leqno = void 0),
			(this.fleqn = void 0),
			(this.throwOnError = void 0),
			(this.errorColor = void 0),
			(this.macros = void 0),
			(this.minRuleThickness = void 0),
			(this.colorIsTextColor = void 0),
			(this.strict = void 0),
			(this.trust = void 0),
			(this.maxSize = void 0),
			(this.maxExpand = void 0),
			(this.globalGroup = void 0),
			(e = e || {});
		for (var t in c0)
			if (c0.hasOwnProperty(t)) {
				var n = c0[t];
				this[t] = e[t] !== void 0 ? (n.processor ? n.processor(e[t]) : e[t]) : $3(n);
			}
	}
	reportNonstrict(e, t, n) {
		var a = this.strict;
		if ((typeof a == "function" && (a = a(e, t, n)), !(!a || a === "ignore"))) {
			if (a === !0 || a === "error")
				throw new fe(
					"LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"),
					n
				);
			a === "warn"
				? typeof console < "u" &&
					console.warn(
						"LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")
					)
				: typeof console < "u" &&
					console.warn(
						"LaTeX-incompatible input and strict mode is set to " +
							("unrecognized '" + a + "': " + t + " [" + e + "]")
					);
		}
	}
	useStrictBehavior(e, t, n) {
		var a = this.strict;
		if (typeof a == "function")
			try {
				a = a(e, t, n);
			} catch {
				a = "error";
			}
		return !a || a === "ignore"
			? !1
			: a === !0 || a === "error"
				? !0
				: a === "warn"
					? (typeof console < "u" &&
							console.warn(
								"LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")
							),
						!1)
					: (typeof console < "u" &&
							console.warn(
								"LaTeX-incompatible input and strict mode is set to " +
									("unrecognized '" + a + "': " + t + " [" + e + "]")
							),
						!1);
	}
	isTrusted(e) {
		if (e.url && !e.protocol) {
			var t = Je.protocolFromUrl(e.url);
			if (t == null) return !1;
			e.protocol = t;
		}
		var n = typeof this.trust == "function" ? this.trust(e) : this.trust;
		return !!n;
	}
}
class ga {
	constructor(e, t, n) {
		(this.id = void 0),
			(this.size = void 0),
			(this.cramped = void 0),
			(this.id = e),
			(this.size = t),
			(this.cramped = n);
	}
	sup() {
		return Nn[e5[this.id]];
	}
	sub() {
		return Nn[t5[this.id]];
	}
	fracNum() {
		return Nn[r5[this.id]];
	}
	fracDen() {
		return Nn[n5[this.id]];
	}
	cramp() {
		return Nn[a5[this.id]];
	}
	text() {
		return Nn[i5[this.id]];
	}
	isTight() {
		return this.size >= 2;
	}
}
var bu = 0,
	N0 = 1,
	_i = 2,
	sa = 3,
	yo = 4,
	ln = 5,
	Wi = 6,
	Pr = 7,
	Nn = [
		new ga(bu, 0, !1),
		new ga(N0, 0, !0),
		new ga(_i, 1, !1),
		new ga(sa, 1, !0),
		new ga(yo, 2, !1),
		new ga(ln, 2, !0),
		new ga(Wi, 3, !1),
		new ga(Pr, 3, !0),
	],
	e5 = [yo, ln, yo, ln, Wi, Pr, Wi, Pr],
	t5 = [ln, ln, ln, ln, Pr, Pr, Pr, Pr],
	r5 = [_i, sa, yo, ln, Wi, Pr, Wi, Pr],
	n5 = [sa, sa, ln, ln, Pr, Pr, Pr, Pr],
	a5 = [N0, N0, sa, sa, ln, ln, Pr, Pr],
	i5 = [bu, N0, _i, sa, _i, sa, _i, sa],
	et = { DISPLAY: Nn[bu], TEXT: Nn[_i], SCRIPT: Nn[yo], SCRIPTSCRIPT: Nn[Wi] },
	Dc = [
		{
			name: "latin",
			blocks: [
				[256, 591],
				[768, 879],
			],
		},
		{ name: "cyrillic", blocks: [[1024, 1279]] },
		{ name: "armenian", blocks: [[1328, 1423]] },
		{ name: "brahmic", blocks: [[2304, 4255]] },
		{ name: "georgian", blocks: [[4256, 4351]] },
		{
			name: "cjk",
			blocks: [
				[12288, 12543],
				[19968, 40879],
				[65280, 65376],
			],
		},
		{ name: "hangul", blocks: [[44032, 55215]] },
	];
function o5(r) {
	for (var e = 0; e < Dc.length; e++)
		for (var t = Dc[e], n = 0; n < t.blocks.length; n++) {
			var a = t.blocks[n];
			if (r >= a[0] && r <= a[1]) return t.name;
		}
	return null;
}
var u0 = [];
Dc.forEach((r) => r.blocks.forEach((e) => u0.push(...e)));
function bf(r) {
	for (var e = 0; e < u0.length; e += 2) if (r >= u0[e] && r <= u0[e + 1]) return !0;
	return !1;
}
var pi = 80,
	s5 = function (e, t) {
		return (
			"M95," +
			(622 + e + t) +
			`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` +
			e / 2.075 +
			" -" +
			e +
			`
c5.3,-9.3,12,-14,20,-14
H400000v` +
			(40 + e) +
			`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` +
			(834 + e) +
			" " +
			t +
			"h400000v" +
			(40 + e) +
			"h-400000z"
		);
	},
	l5 = function (e, t) {
		return (
			"M263," +
			(601 + e + t) +
			`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` +
			e / 2.084 +
			" -" +
			e +
			`
c4.7,-7.3,11,-11,19,-11
H40000v` +
			(40 + e) +
			`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` +
			(1001 + e) +
			" " +
			t +
			"h400000v" +
			(40 + e) +
			"h-400000z"
		);
	},
	c5 = function (e, t) {
		return (
			"M983 " +
			(10 + e + t) +
			`
l` +
			e / 3.13 +
			" -" +
			e +
			`
c4,-6.7,10,-10,18,-10 H400000v` +
			(40 + e) +
			`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` +
			(1001 + e) +
			" " +
			t +
			"h400000v" +
			(40 + e) +
			"h-400000z"
		);
	},
	u5 = function (e, t) {
		return (
			"M424," +
			(2398 + e + t) +
			`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` +
			e / 4.223 +
			" -" +
			e +
			`c4,-6.7,10,-10,18,-10 H400000
v` +
			(40 + e) +
			`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` +
			(1001 + e) +
			" " +
			t +
			`
h400000v` +
			(40 + e) +
			"h-400000z"
		);
	},
	d5 = function (e, t) {
		return (
			"M473," +
			(2713 + e + t) +
			`
c339.3,-1799.3,509.3,-2700,510,-2702 l` +
			e / 5.298 +
			" -" +
			e +
			`
c3.3,-7.3,9.3,-11,18,-11 H400000v` +
			(40 + e) +
			`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` +
			(1001 + e) +
			" " +
			t +
			"h400000v" +
			(40 + e) +
			"H1017.7z"
		);
	},
	h5 = function (e) {
		var t = e / 2;
		return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
	},
	f5 = function (e, t, n) {
		var a = n - 54 - t - e;
		return (
			"M702 " +
			(e + t) +
			"H400000" +
			(40 + e) +
			`
H742v` +
			a +
			`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` +
			t +
			"H400000v" +
			(40 + e) +
			"H742z"
		);
	},
	m5 = function (e, t, n) {
		t = 1e3 * t;
		var a = "";
		switch (e) {
			case "sqrtMain":
				a = s5(t, pi);
				break;
			case "sqrtSize1":
				a = l5(t, pi);
				break;
			case "sqrtSize2":
				a = c5(t, pi);
				break;
			case "sqrtSize3":
				a = u5(t, pi);
				break;
			case "sqrtSize4":
				a = d5(t, pi);
				break;
			case "sqrtTall":
				a = f5(t, pi, n);
		}
		return a;
	},
	p5 = function (e, t) {
		switch (e) {
			case "⎜":
				return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
			case "∣":
				return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
			case "∥":
				return (
					"M145 0 H188 V" +
					t +
					" H145z M145 0 H188 V" +
					t +
					" H145z" +
					("M367 0 H410 V" + t + " H367z M367 0 H410 V" + t + " H367z")
				);
			case "⎟":
				return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
			case "⎢":
				return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
			case "⎥":
				return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
			case "⎪":
				return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
			case "⏐":
				return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
			case "‖":
				return (
					"M257 0 H300 V" +
					t +
					" H257z M257 0 H300 V" +
					t +
					" H257z" +
					("M478 0 H521 V" + t + " H478z M478 0 H521 V" + t + " H478z")
				);
			default:
				return "";
		}
	},
	Jd = {
		doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
		doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
		leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
		leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
		leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
		leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
		leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
		leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
		leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
		leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
		leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
		lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
		leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
		leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
		leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
		longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
		midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
		midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
		oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
		oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
		oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
		oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
		rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
		rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
		rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
		rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
		rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
		rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
		rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
		rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
		rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
		righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
		rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
		rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
		twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
		twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
		tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
		tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
		tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
		tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
		vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
		widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
		widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
		widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
		widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
		widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
		widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
		widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
		widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
		baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
		rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
		baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
		rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
		shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
		shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`,
	},
	g5 = function (e, t) {
		switch (e) {
			case "lbrack":
				return (
					"M403 1759 V84 H666 V0 H319 V1759 v" +
					t +
					` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` +
					t +
					" v1759 h84z"
				);
			case "rbrack":
				return (
					"M347 1759 V0 H0 V84 H263 V1759 v" +
					t +
					` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` +
					t +
					" v1759 h84z"
				);
			case "vert":
				return (
					"M145 15 v585 v" +
					t +
					` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` +
					-t +
					` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` +
					t +
					" v585 h43z"
				);
			case "doublevert":
				return (
					"M145 15 v585 v" +
					t +
					` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` +
					-t +
					` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` +
					t +
					` v585 h43z
M367 15 v585 v` +
					t +
					` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` +
					-t +
					` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` +
					t +
					" v585 h43z"
				);
			case "lfloor":
				return (
					"M319 602 V0 H403 V602 v" +
					t +
					` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` +
					t +
					" v1715 H319z"
				);
			case "rfloor":
				return (
					"M319 602 V0 H403 V602 v" +
					t +
					` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` +
					t +
					" v1715 H319z"
				);
			case "lceil":
				return (
					"M403 1759 V84 H666 V0 H319 V1759 v" +
					t +
					` v602 h84z
M403 1759 V0 H319 V1759 v` +
					t +
					" v602 h84z"
				);
			case "rceil":
				return (
					"M347 1759 V0 H0 V84 H263 V1759 v" +
					t +
					` v602 h84z
M347 1759 V0 h-84 V1759 v` +
					t +
					" v602 h84z"
				);
			case "lparen":
				return (
					`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` +
					(t + 84) +
					`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` +
					(t + 92) +
					`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`
				);
			case "rparen":
				return (
					`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` +
					(t + 9) +
					`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` +
					(t + 144) +
					`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`
				);
			default:
				throw new Error("Unknown stretchy delimiter.");
		}
	};
class Os {
	constructor(e) {
		(this.children = void 0),
			(this.classes = void 0),
			(this.height = void 0),
			(this.depth = void 0),
			(this.maxFontSize = void 0),
			(this.style = void 0),
			(this.children = e),
			(this.classes = []),
			(this.height = 0),
			(this.depth = 0),
			(this.maxFontSize = 0),
			(this.style = {});
	}
	hasClass(e) {
		return Je.contains(this.classes, e);
	}
	toNode() {
		for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++)
			e.appendChild(this.children[t].toNode());
		return e;
	}
	toMarkup() {
		for (var e = "", t = 0; t < this.children.length; t++) e += this.children[t].toMarkup();
		return e;
	}
	toText() {
		var e = (t) => t.toText();
		return this.children.map(e).join("");
	}
}
var Ln = {
		"AMS-Regular": {
			32: [0, 0, 0, 0, 0.25],
			65: [0, 0.68889, 0, 0, 0.72222],
			66: [0, 0.68889, 0, 0, 0.66667],
			67: [0, 0.68889, 0, 0, 0.72222],
			68: [0, 0.68889, 0, 0, 0.72222],
			69: [0, 0.68889, 0, 0, 0.66667],
			70: [0, 0.68889, 0, 0, 0.61111],
			71: [0, 0.68889, 0, 0, 0.77778],
			72: [0, 0.68889, 0, 0, 0.77778],
			73: [0, 0.68889, 0, 0, 0.38889],
			74: [0.16667, 0.68889, 0, 0, 0.5],
			75: [0, 0.68889, 0, 0, 0.77778],
			76: [0, 0.68889, 0, 0, 0.66667],
			77: [0, 0.68889, 0, 0, 0.94445],
			78: [0, 0.68889, 0, 0, 0.72222],
			79: [0.16667, 0.68889, 0, 0, 0.77778],
			80: [0, 0.68889, 0, 0, 0.61111],
			81: [0.16667, 0.68889, 0, 0, 0.77778],
			82: [0, 0.68889, 0, 0, 0.72222],
			83: [0, 0.68889, 0, 0, 0.55556],
			84: [0, 0.68889, 0, 0, 0.66667],
			85: [0, 0.68889, 0, 0, 0.72222],
			86: [0, 0.68889, 0, 0, 0.72222],
			87: [0, 0.68889, 0, 0, 1],
			88: [0, 0.68889, 0, 0, 0.72222],
			89: [0, 0.68889, 0, 0, 0.72222],
			90: [0, 0.68889, 0, 0, 0.66667],
			107: [0, 0.68889, 0, 0, 0.55556],
			160: [0, 0, 0, 0, 0.25],
			165: [0, 0.675, 0.025, 0, 0.75],
			174: [0.15559, 0.69224, 0, 0, 0.94666],
			240: [0, 0.68889, 0, 0, 0.55556],
			295: [0, 0.68889, 0, 0, 0.54028],
			710: [0, 0.825, 0, 0, 2.33334],
			732: [0, 0.9, 0, 0, 2.33334],
			770: [0, 0.825, 0, 0, 2.33334],
			771: [0, 0.9, 0, 0, 2.33334],
			989: [0.08167, 0.58167, 0, 0, 0.77778],
			1008: [0, 0.43056, 0.04028, 0, 0.66667],
			8245: [0, 0.54986, 0, 0, 0.275],
			8463: [0, 0.68889, 0, 0, 0.54028],
			8487: [0, 0.68889, 0, 0, 0.72222],
			8498: [0, 0.68889, 0, 0, 0.55556],
			8502: [0, 0.68889, 0, 0, 0.66667],
			8503: [0, 0.68889, 0, 0, 0.44445],
			8504: [0, 0.68889, 0, 0, 0.66667],
			8513: [0, 0.68889, 0, 0, 0.63889],
			8592: [-0.03598, 0.46402, 0, 0, 0.5],
			8594: [-0.03598, 0.46402, 0, 0, 0.5],
			8602: [-0.13313, 0.36687, 0, 0, 1],
			8603: [-0.13313, 0.36687, 0, 0, 1],
			8606: [0.01354, 0.52239, 0, 0, 1],
			8608: [0.01354, 0.52239, 0, 0, 1],
			8610: [0.01354, 0.52239, 0, 0, 1.11111],
			8611: [0.01354, 0.52239, 0, 0, 1.11111],
			8619: [0, 0.54986, 0, 0, 1],
			8620: [0, 0.54986, 0, 0, 1],
			8621: [-0.13313, 0.37788, 0, 0, 1.38889],
			8622: [-0.13313, 0.36687, 0, 0, 1],
			8624: [0, 0.69224, 0, 0, 0.5],
			8625: [0, 0.69224, 0, 0, 0.5],
			8630: [0, 0.43056, 0, 0, 1],
			8631: [0, 0.43056, 0, 0, 1],
			8634: [0.08198, 0.58198, 0, 0, 0.77778],
			8635: [0.08198, 0.58198, 0, 0, 0.77778],
			8638: [0.19444, 0.69224, 0, 0, 0.41667],
			8639: [0.19444, 0.69224, 0, 0, 0.41667],
			8642: [0.19444, 0.69224, 0, 0, 0.41667],
			8643: [0.19444, 0.69224, 0, 0, 0.41667],
			8644: [0.1808, 0.675, 0, 0, 1],
			8646: [0.1808, 0.675, 0, 0, 1],
			8647: [0.1808, 0.675, 0, 0, 1],
			8648: [0.19444, 0.69224, 0, 0, 0.83334],
			8649: [0.1808, 0.675, 0, 0, 1],
			8650: [0.19444, 0.69224, 0, 0, 0.83334],
			8651: [0.01354, 0.52239, 0, 0, 1],
			8652: [0.01354, 0.52239, 0, 0, 1],
			8653: [-0.13313, 0.36687, 0, 0, 1],
			8654: [-0.13313, 0.36687, 0, 0, 1],
			8655: [-0.13313, 0.36687, 0, 0, 1],
			8666: [0.13667, 0.63667, 0, 0, 1],
			8667: [0.13667, 0.63667, 0, 0, 1],
			8669: [-0.13313, 0.37788, 0, 0, 1],
			8672: [-0.064, 0.437, 0, 0, 1.334],
			8674: [-0.064, 0.437, 0, 0, 1.334],
			8705: [0, 0.825, 0, 0, 0.5],
			8708: [0, 0.68889, 0, 0, 0.55556],
			8709: [0.08167, 0.58167, 0, 0, 0.77778],
			8717: [0, 0.43056, 0, 0, 0.42917],
			8722: [-0.03598, 0.46402, 0, 0, 0.5],
			8724: [0.08198, 0.69224, 0, 0, 0.77778],
			8726: [0.08167, 0.58167, 0, 0, 0.77778],
			8733: [0, 0.69224, 0, 0, 0.77778],
			8736: [0, 0.69224, 0, 0, 0.72222],
			8737: [0, 0.69224, 0, 0, 0.72222],
			8738: [0.03517, 0.52239, 0, 0, 0.72222],
			8739: [0.08167, 0.58167, 0, 0, 0.22222],
			8740: [0.25142, 0.74111, 0, 0, 0.27778],
			8741: [0.08167, 0.58167, 0, 0, 0.38889],
			8742: [0.25142, 0.74111, 0, 0, 0.5],
			8756: [0, 0.69224, 0, 0, 0.66667],
			8757: [0, 0.69224, 0, 0, 0.66667],
			8764: [-0.13313, 0.36687, 0, 0, 0.77778],
			8765: [-0.13313, 0.37788, 0, 0, 0.77778],
			8769: [-0.13313, 0.36687, 0, 0, 0.77778],
			8770: [-0.03625, 0.46375, 0, 0, 0.77778],
			8774: [0.30274, 0.79383, 0, 0, 0.77778],
			8776: [-0.01688, 0.48312, 0, 0, 0.77778],
			8778: [0.08167, 0.58167, 0, 0, 0.77778],
			8782: [0.06062, 0.54986, 0, 0, 0.77778],
			8783: [0.06062, 0.54986, 0, 0, 0.77778],
			8785: [0.08198, 0.58198, 0, 0, 0.77778],
			8786: [0.08198, 0.58198, 0, 0, 0.77778],
			8787: [0.08198, 0.58198, 0, 0, 0.77778],
			8790: [0, 0.69224, 0, 0, 0.77778],
			8791: [0.22958, 0.72958, 0, 0, 0.77778],
			8796: [0.08198, 0.91667, 0, 0, 0.77778],
			8806: [0.25583, 0.75583, 0, 0, 0.77778],
			8807: [0.25583, 0.75583, 0, 0, 0.77778],
			8808: [0.25142, 0.75726, 0, 0, 0.77778],
			8809: [0.25142, 0.75726, 0, 0, 0.77778],
			8812: [0.25583, 0.75583, 0, 0, 0.5],
			8814: [0.20576, 0.70576, 0, 0, 0.77778],
			8815: [0.20576, 0.70576, 0, 0, 0.77778],
			8816: [0.30274, 0.79383, 0, 0, 0.77778],
			8817: [0.30274, 0.79383, 0, 0, 0.77778],
			8818: [0.22958, 0.72958, 0, 0, 0.77778],
			8819: [0.22958, 0.72958, 0, 0, 0.77778],
			8822: [0.1808, 0.675, 0, 0, 0.77778],
			8823: [0.1808, 0.675, 0, 0, 0.77778],
			8828: [0.13667, 0.63667, 0, 0, 0.77778],
			8829: [0.13667, 0.63667, 0, 0, 0.77778],
			8830: [0.22958, 0.72958, 0, 0, 0.77778],
			8831: [0.22958, 0.72958, 0, 0, 0.77778],
			8832: [0.20576, 0.70576, 0, 0, 0.77778],
			8833: [0.20576, 0.70576, 0, 0, 0.77778],
			8840: [0.30274, 0.79383, 0, 0, 0.77778],
			8841: [0.30274, 0.79383, 0, 0, 0.77778],
			8842: [0.13597, 0.63597, 0, 0, 0.77778],
			8843: [0.13597, 0.63597, 0, 0, 0.77778],
			8847: [0.03517, 0.54986, 0, 0, 0.77778],
			8848: [0.03517, 0.54986, 0, 0, 0.77778],
			8858: [0.08198, 0.58198, 0, 0, 0.77778],
			8859: [0.08198, 0.58198, 0, 0, 0.77778],
			8861: [0.08198, 0.58198, 0, 0, 0.77778],
			8862: [0, 0.675, 0, 0, 0.77778],
			8863: [0, 0.675, 0, 0, 0.77778],
			8864: [0, 0.675, 0, 0, 0.77778],
			8865: [0, 0.675, 0, 0, 0.77778],
			8872: [0, 0.69224, 0, 0, 0.61111],
			8873: [0, 0.69224, 0, 0, 0.72222],
			8874: [0, 0.69224, 0, 0, 0.88889],
			8876: [0, 0.68889, 0, 0, 0.61111],
			8877: [0, 0.68889, 0, 0, 0.61111],
			8878: [0, 0.68889, 0, 0, 0.72222],
			8879: [0, 0.68889, 0, 0, 0.72222],
			8882: [0.03517, 0.54986, 0, 0, 0.77778],
			8883: [0.03517, 0.54986, 0, 0, 0.77778],
			8884: [0.13667, 0.63667, 0, 0, 0.77778],
			8885: [0.13667, 0.63667, 0, 0, 0.77778],
			8888: [0, 0.54986, 0, 0, 1.11111],
			8890: [0.19444, 0.43056, 0, 0, 0.55556],
			8891: [0.19444, 0.69224, 0, 0, 0.61111],
			8892: [0.19444, 0.69224, 0, 0, 0.61111],
			8901: [0, 0.54986, 0, 0, 0.27778],
			8903: [0.08167, 0.58167, 0, 0, 0.77778],
			8905: [0.08167, 0.58167, 0, 0, 0.77778],
			8906: [0.08167, 0.58167, 0, 0, 0.77778],
			8907: [0, 0.69224, 0, 0, 0.77778],
			8908: [0, 0.69224, 0, 0, 0.77778],
			8909: [-0.03598, 0.46402, 0, 0, 0.77778],
			8910: [0, 0.54986, 0, 0, 0.76042],
			8911: [0, 0.54986, 0, 0, 0.76042],
			8912: [0.03517, 0.54986, 0, 0, 0.77778],
			8913: [0.03517, 0.54986, 0, 0, 0.77778],
			8914: [0, 0.54986, 0, 0, 0.66667],
			8915: [0, 0.54986, 0, 0, 0.66667],
			8916: [0, 0.69224, 0, 0, 0.66667],
			8918: [0.0391, 0.5391, 0, 0, 0.77778],
			8919: [0.0391, 0.5391, 0, 0, 0.77778],
			8920: [0.03517, 0.54986, 0, 0, 1.33334],
			8921: [0.03517, 0.54986, 0, 0, 1.33334],
			8922: [0.38569, 0.88569, 0, 0, 0.77778],
			8923: [0.38569, 0.88569, 0, 0, 0.77778],
			8926: [0.13667, 0.63667, 0, 0, 0.77778],
			8927: [0.13667, 0.63667, 0, 0, 0.77778],
			8928: [0.30274, 0.79383, 0, 0, 0.77778],
			8929: [0.30274, 0.79383, 0, 0, 0.77778],
			8934: [0.23222, 0.74111, 0, 0, 0.77778],
			8935: [0.23222, 0.74111, 0, 0, 0.77778],
			8936: [0.23222, 0.74111, 0, 0, 0.77778],
			8937: [0.23222, 0.74111, 0, 0, 0.77778],
			8938: [0.20576, 0.70576, 0, 0, 0.77778],
			8939: [0.20576, 0.70576, 0, 0, 0.77778],
			8940: [0.30274, 0.79383, 0, 0, 0.77778],
			8941: [0.30274, 0.79383, 0, 0, 0.77778],
			8994: [0.19444, 0.69224, 0, 0, 0.77778],
			8995: [0.19444, 0.69224, 0, 0, 0.77778],
			9416: [0.15559, 0.69224, 0, 0, 0.90222],
			9484: [0, 0.69224, 0, 0, 0.5],
			9488: [0, 0.69224, 0, 0, 0.5],
			9492: [0, 0.37788, 0, 0, 0.5],
			9496: [0, 0.37788, 0, 0, 0.5],
			9585: [0.19444, 0.68889, 0, 0, 0.88889],
			9586: [0.19444, 0.74111, 0, 0, 0.88889],
			9632: [0, 0.675, 0, 0, 0.77778],
			9633: [0, 0.675, 0, 0, 0.77778],
			9650: [0, 0.54986, 0, 0, 0.72222],
			9651: [0, 0.54986, 0, 0, 0.72222],
			9654: [0.03517, 0.54986, 0, 0, 0.77778],
			9660: [0, 0.54986, 0, 0, 0.72222],
			9661: [0, 0.54986, 0, 0, 0.72222],
			9664: [0.03517, 0.54986, 0, 0, 0.77778],
			9674: [0.11111, 0.69224, 0, 0, 0.66667],
			9733: [0.19444, 0.69224, 0, 0, 0.94445],
			10003: [0, 0.69224, 0, 0, 0.83334],
			10016: [0, 0.69224, 0, 0, 0.83334],
			10731: [0.11111, 0.69224, 0, 0, 0.66667],
			10846: [0.19444, 0.75583, 0, 0, 0.61111],
			10877: [0.13667, 0.63667, 0, 0, 0.77778],
			10878: [0.13667, 0.63667, 0, 0, 0.77778],
			10885: [0.25583, 0.75583, 0, 0, 0.77778],
			10886: [0.25583, 0.75583, 0, 0, 0.77778],
			10887: [0.13597, 0.63597, 0, 0, 0.77778],
			10888: [0.13597, 0.63597, 0, 0, 0.77778],
			10889: [0.26167, 0.75726, 0, 0, 0.77778],
			10890: [0.26167, 0.75726, 0, 0, 0.77778],
			10891: [0.48256, 0.98256, 0, 0, 0.77778],
			10892: [0.48256, 0.98256, 0, 0, 0.77778],
			10901: [0.13667, 0.63667, 0, 0, 0.77778],
			10902: [0.13667, 0.63667, 0, 0, 0.77778],
			10933: [0.25142, 0.75726, 0, 0, 0.77778],
			10934: [0.25142, 0.75726, 0, 0, 0.77778],
			10935: [0.26167, 0.75726, 0, 0, 0.77778],
			10936: [0.26167, 0.75726, 0, 0, 0.77778],
			10937: [0.26167, 0.75726, 0, 0, 0.77778],
			10938: [0.26167, 0.75726, 0, 0, 0.77778],
			10949: [0.25583, 0.75583, 0, 0, 0.77778],
			10950: [0.25583, 0.75583, 0, 0, 0.77778],
			10955: [0.28481, 0.79383, 0, 0, 0.77778],
			10956: [0.28481, 0.79383, 0, 0, 0.77778],
			57350: [0.08167, 0.58167, 0, 0, 0.22222],
			57351: [0.08167, 0.58167, 0, 0, 0.38889],
			57352: [0.08167, 0.58167, 0, 0, 0.77778],
			57353: [0, 0.43056, 0.04028, 0, 0.66667],
			57356: [0.25142, 0.75726, 0, 0, 0.77778],
			57357: [0.25142, 0.75726, 0, 0, 0.77778],
			57358: [0.41951, 0.91951, 0, 0, 0.77778],
			57359: [0.30274, 0.79383, 0, 0, 0.77778],
			57360: [0.30274, 0.79383, 0, 0, 0.77778],
			57361: [0.41951, 0.91951, 0, 0, 0.77778],
			57366: [0.25142, 0.75726, 0, 0, 0.77778],
			57367: [0.25142, 0.75726, 0, 0, 0.77778],
			57368: [0.25142, 0.75726, 0, 0, 0.77778],
			57369: [0.25142, 0.75726, 0, 0, 0.77778],
			57370: [0.13597, 0.63597, 0, 0, 0.77778],
			57371: [0.13597, 0.63597, 0, 0, 0.77778],
		},
		"Caligraphic-Regular": {
			32: [0, 0, 0, 0, 0.25],
			65: [0, 0.68333, 0, 0.19445, 0.79847],
			66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
			67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
			68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
			69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
			70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
			71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
			72: [0, 0.68333, 0.00965, 0.11111, 0.84452],
			73: [0, 0.68333, 0.07382, 0, 0.54452],
			74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
			75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
			76: [0, 0.68333, 0, 0.13889, 0.68972],
			77: [0, 0.68333, 0, 0.13889, 1.2009],
			78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
			79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
			80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
			81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
			82: [0, 0.68333, 0, 0.08334, 0.8475],
			83: [0, 0.68333, 0.075, 0.13889, 0.60556],
			84: [0, 0.68333, 0.25417, 0, 0.54464],
			85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
			86: [0, 0.68333, 0.08222, 0, 0.61278],
			87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
			88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
			89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
			90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
			160: [0, 0, 0, 0, 0.25],
		},
		"Fraktur-Regular": {
			32: [0, 0, 0, 0, 0.25],
			33: [0, 0.69141, 0, 0, 0.29574],
			34: [0, 0.69141, 0, 0, 0.21471],
			38: [0, 0.69141, 0, 0, 0.73786],
			39: [0, 0.69141, 0, 0, 0.21201],
			40: [0.24982, 0.74947, 0, 0, 0.38865],
			41: [0.24982, 0.74947, 0, 0, 0.38865],
			42: [0, 0.62119, 0, 0, 0.27764],
			43: [0.08319, 0.58283, 0, 0, 0.75623],
			44: [0, 0.10803, 0, 0, 0.27764],
			45: [0.08319, 0.58283, 0, 0, 0.75623],
			46: [0, 0.10803, 0, 0, 0.27764],
			47: [0.24982, 0.74947, 0, 0, 0.50181],
			48: [0, 0.47534, 0, 0, 0.50181],
			49: [0, 0.47534, 0, 0, 0.50181],
			50: [0, 0.47534, 0, 0, 0.50181],
			51: [0.18906, 0.47534, 0, 0, 0.50181],
			52: [0.18906, 0.47534, 0, 0, 0.50181],
			53: [0.18906, 0.47534, 0, 0, 0.50181],
			54: [0, 0.69141, 0, 0, 0.50181],
			55: [0.18906, 0.47534, 0, 0, 0.50181],
			56: [0, 0.69141, 0, 0, 0.50181],
			57: [0.18906, 0.47534, 0, 0, 0.50181],
			58: [0, 0.47534, 0, 0, 0.21606],
			59: [0.12604, 0.47534, 0, 0, 0.21606],
			61: [-0.13099, 0.36866, 0, 0, 0.75623],
			63: [0, 0.69141, 0, 0, 0.36245],
			65: [0, 0.69141, 0, 0, 0.7176],
			66: [0, 0.69141, 0, 0, 0.88397],
			67: [0, 0.69141, 0, 0, 0.61254],
			68: [0, 0.69141, 0, 0, 0.83158],
			69: [0, 0.69141, 0, 0, 0.66278],
			70: [0.12604, 0.69141, 0, 0, 0.61119],
			71: [0, 0.69141, 0, 0, 0.78539],
			72: [0.06302, 0.69141, 0, 0, 0.7203],
			73: [0, 0.69141, 0, 0, 0.55448],
			74: [0.12604, 0.69141, 0, 0, 0.55231],
			75: [0, 0.69141, 0, 0, 0.66845],
			76: [0, 0.69141, 0, 0, 0.66602],
			77: [0, 0.69141, 0, 0, 1.04953],
			78: [0, 0.69141, 0, 0, 0.83212],
			79: [0, 0.69141, 0, 0, 0.82699],
			80: [0.18906, 0.69141, 0, 0, 0.82753],
			81: [0.03781, 0.69141, 0, 0, 0.82699],
			82: [0, 0.69141, 0, 0, 0.82807],
			83: [0, 0.69141, 0, 0, 0.82861],
			84: [0, 0.69141, 0, 0, 0.66899],
			85: [0, 0.69141, 0, 0, 0.64576],
			86: [0, 0.69141, 0, 0, 0.83131],
			87: [0, 0.69141, 0, 0, 1.04602],
			88: [0, 0.69141, 0, 0, 0.71922],
			89: [0.18906, 0.69141, 0, 0, 0.83293],
			90: [0.12604, 0.69141, 0, 0, 0.60201],
			91: [0.24982, 0.74947, 0, 0, 0.27764],
			93: [0.24982, 0.74947, 0, 0, 0.27764],
			94: [0, 0.69141, 0, 0, 0.49965],
			97: [0, 0.47534, 0, 0, 0.50046],
			98: [0, 0.69141, 0, 0, 0.51315],
			99: [0, 0.47534, 0, 0, 0.38946],
			100: [0, 0.62119, 0, 0, 0.49857],
			101: [0, 0.47534, 0, 0, 0.40053],
			102: [0.18906, 0.69141, 0, 0, 0.32626],
			103: [0.18906, 0.47534, 0, 0, 0.5037],
			104: [0.18906, 0.69141, 0, 0, 0.52126],
			105: [0, 0.69141, 0, 0, 0.27899],
			106: [0, 0.69141, 0, 0, 0.28088],
			107: [0, 0.69141, 0, 0, 0.38946],
			108: [0, 0.69141, 0, 0, 0.27953],
			109: [0, 0.47534, 0, 0, 0.76676],
			110: [0, 0.47534, 0, 0, 0.52666],
			111: [0, 0.47534, 0, 0, 0.48885],
			112: [0.18906, 0.52396, 0, 0, 0.50046],
			113: [0.18906, 0.47534, 0, 0, 0.48912],
			114: [0, 0.47534, 0, 0, 0.38919],
			115: [0, 0.47534, 0, 0, 0.44266],
			116: [0, 0.62119, 0, 0, 0.33301],
			117: [0, 0.47534, 0, 0, 0.5172],
			118: [0, 0.52396, 0, 0, 0.5118],
			119: [0, 0.52396, 0, 0, 0.77351],
			120: [0.18906, 0.47534, 0, 0, 0.38865],
			121: [0.18906, 0.47534, 0, 0, 0.49884],
			122: [0.18906, 0.47534, 0, 0, 0.39054],
			160: [0, 0, 0, 0, 0.25],
			8216: [0, 0.69141, 0, 0, 0.21471],
			8217: [0, 0.69141, 0, 0, 0.21471],
			58112: [0, 0.62119, 0, 0, 0.49749],
			58113: [0, 0.62119, 0, 0, 0.4983],
			58114: [0.18906, 0.69141, 0, 0, 0.33328],
			58115: [0.18906, 0.69141, 0, 0, 0.32923],
			58116: [0.18906, 0.47534, 0, 0, 0.50343],
			58117: [0, 0.69141, 0, 0, 0.33301],
			58118: [0, 0.62119, 0, 0, 0.33409],
			58119: [0, 0.47534, 0, 0, 0.50073],
		},
		"Main-Bold": {
			32: [0, 0, 0, 0, 0.25],
			33: [0, 0.69444, 0, 0, 0.35],
			34: [0, 0.69444, 0, 0, 0.60278],
			35: [0.19444, 0.69444, 0, 0, 0.95833],
			36: [0.05556, 0.75, 0, 0, 0.575],
			37: [0.05556, 0.75, 0, 0, 0.95833],
			38: [0, 0.69444, 0, 0, 0.89444],
			39: [0, 0.69444, 0, 0, 0.31944],
			40: [0.25, 0.75, 0, 0, 0.44722],
			41: [0.25, 0.75, 0, 0, 0.44722],
			42: [0, 0.75, 0, 0, 0.575],
			43: [0.13333, 0.63333, 0, 0, 0.89444],
			44: [0.19444, 0.15556, 0, 0, 0.31944],
			45: [0, 0.44444, 0, 0, 0.38333],
			46: [0, 0.15556, 0, 0, 0.31944],
			47: [0.25, 0.75, 0, 0, 0.575],
			48: [0, 0.64444, 0, 0, 0.575],
			49: [0, 0.64444, 0, 0, 0.575],
			50: [0, 0.64444, 0, 0, 0.575],
			51: [0, 0.64444, 0, 0, 0.575],
			52: [0, 0.64444, 0, 0, 0.575],
			53: [0, 0.64444, 0, 0, 0.575],
			54: [0, 0.64444, 0, 0, 0.575],
			55: [0, 0.64444, 0, 0, 0.575],
			56: [0, 0.64444, 0, 0, 0.575],
			57: [0, 0.64444, 0, 0, 0.575],
			58: [0, 0.44444, 0, 0, 0.31944],
			59: [0.19444, 0.44444, 0, 0, 0.31944],
			60: [0.08556, 0.58556, 0, 0, 0.89444],
			61: [-0.10889, 0.39111, 0, 0, 0.89444],
			62: [0.08556, 0.58556, 0, 0, 0.89444],
			63: [0, 0.69444, 0, 0, 0.54305],
			64: [0, 0.69444, 0, 0, 0.89444],
			65: [0, 0.68611, 0, 0, 0.86944],
			66: [0, 0.68611, 0, 0, 0.81805],
			67: [0, 0.68611, 0, 0, 0.83055],
			68: [0, 0.68611, 0, 0, 0.88194],
			69: [0, 0.68611, 0, 0, 0.75555],
			70: [0, 0.68611, 0, 0, 0.72361],
			71: [0, 0.68611, 0, 0, 0.90416],
			72: [0, 0.68611, 0, 0, 0.9],
			73: [0, 0.68611, 0, 0, 0.43611],
			74: [0, 0.68611, 0, 0, 0.59444],
			75: [0, 0.68611, 0, 0, 0.90138],
			76: [0, 0.68611, 0, 0, 0.69166],
			77: [0, 0.68611, 0, 0, 1.09166],
			78: [0, 0.68611, 0, 0, 0.9],
			79: [0, 0.68611, 0, 0, 0.86388],
			80: [0, 0.68611, 0, 0, 0.78611],
			81: [0.19444, 0.68611, 0, 0, 0.86388],
			82: [0, 0.68611, 0, 0, 0.8625],
			83: [0, 0.68611, 0, 0, 0.63889],
			84: [0, 0.68611, 0, 0, 0.8],
			85: [0, 0.68611, 0, 0, 0.88472],
			86: [0, 0.68611, 0.01597, 0, 0.86944],
			87: [0, 0.68611, 0.01597, 0, 1.18888],
			88: [0, 0.68611, 0, 0, 0.86944],
			89: [0, 0.68611, 0.02875, 0, 0.86944],
			90: [0, 0.68611, 0, 0, 0.70277],
			91: [0.25, 0.75, 0, 0, 0.31944],
			92: [0.25, 0.75, 0, 0, 0.575],
			93: [0.25, 0.75, 0, 0, 0.31944],
			94: [0, 0.69444, 0, 0, 0.575],
			95: [0.31, 0.13444, 0.03194, 0, 0.575],
			97: [0, 0.44444, 0, 0, 0.55902],
			98: [0, 0.69444, 0, 0, 0.63889],
			99: [0, 0.44444, 0, 0, 0.51111],
			100: [0, 0.69444, 0, 0, 0.63889],
			101: [0, 0.44444, 0, 0, 0.52708],
			102: [0, 0.69444, 0.10903, 0, 0.35139],
			103: [0.19444, 0.44444, 0.01597, 0, 0.575],
			104: [0, 0.69444, 0, 0, 0.63889],
			105: [0, 0.69444, 0, 0, 0.31944],
			106: [0.19444, 0.69444, 0, 0, 0.35139],
			107: [0, 0.69444, 0, 0, 0.60694],
			108: [0, 0.69444, 0, 0, 0.31944],
			109: [0, 0.44444, 0, 0, 0.95833],
			110: [0, 0.44444, 0, 0, 0.63889],
			111: [0, 0.44444, 0, 0, 0.575],
			112: [0.19444, 0.44444, 0, 0, 0.63889],
			113: [0.19444, 0.44444, 0, 0, 0.60694],
			114: [0, 0.44444, 0, 0, 0.47361],
			115: [0, 0.44444, 0, 0, 0.45361],
			116: [0, 0.63492, 0, 0, 0.44722],
			117: [0, 0.44444, 0, 0, 0.63889],
			118: [0, 0.44444, 0.01597, 0, 0.60694],
			119: [0, 0.44444, 0.01597, 0, 0.83055],
			120: [0, 0.44444, 0, 0, 0.60694],
			121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
			122: [0, 0.44444, 0, 0, 0.51111],
			123: [0.25, 0.75, 0, 0, 0.575],
			124: [0.25, 0.75, 0, 0, 0.31944],
			125: [0.25, 0.75, 0, 0, 0.575],
			126: [0.35, 0.34444, 0, 0, 0.575],
			160: [0, 0, 0, 0, 0.25],
			163: [0, 0.69444, 0, 0, 0.86853],
			168: [0, 0.69444, 0, 0, 0.575],
			172: [0, 0.44444, 0, 0, 0.76666],
			176: [0, 0.69444, 0, 0, 0.86944],
			177: [0.13333, 0.63333, 0, 0, 0.89444],
			184: [0.17014, 0, 0, 0, 0.51111],
			198: [0, 0.68611, 0, 0, 1.04166],
			215: [0.13333, 0.63333, 0, 0, 0.89444],
			216: [0.04861, 0.73472, 0, 0, 0.89444],
			223: [0, 0.69444, 0, 0, 0.59722],
			230: [0, 0.44444, 0, 0, 0.83055],
			247: [0.13333, 0.63333, 0, 0, 0.89444],
			248: [0.09722, 0.54167, 0, 0, 0.575],
			305: [0, 0.44444, 0, 0, 0.31944],
			338: [0, 0.68611, 0, 0, 1.16944],
			339: [0, 0.44444, 0, 0, 0.89444],
			567: [0.19444, 0.44444, 0, 0, 0.35139],
			710: [0, 0.69444, 0, 0, 0.575],
			711: [0, 0.63194, 0, 0, 0.575],
			713: [0, 0.59611, 0, 0, 0.575],
			714: [0, 0.69444, 0, 0, 0.575],
			715: [0, 0.69444, 0, 0, 0.575],
			728: [0, 0.69444, 0, 0, 0.575],
			729: [0, 0.69444, 0, 0, 0.31944],
			730: [0, 0.69444, 0, 0, 0.86944],
			732: [0, 0.69444, 0, 0, 0.575],
			733: [0, 0.69444, 0, 0, 0.575],
			915: [0, 0.68611, 0, 0, 0.69166],
			916: [0, 0.68611, 0, 0, 0.95833],
			920: [0, 0.68611, 0, 0, 0.89444],
			923: [0, 0.68611, 0, 0, 0.80555],
			926: [0, 0.68611, 0, 0, 0.76666],
			928: [0, 0.68611, 0, 0, 0.9],
			931: [0, 0.68611, 0, 0, 0.83055],
			933: [0, 0.68611, 0, 0, 0.89444],
			934: [0, 0.68611, 0, 0, 0.83055],
			936: [0, 0.68611, 0, 0, 0.89444],
			937: [0, 0.68611, 0, 0, 0.83055],
			8211: [0, 0.44444, 0.03194, 0, 0.575],
			8212: [0, 0.44444, 0.03194, 0, 1.14999],
			8216: [0, 0.69444, 0, 0, 0.31944],
			8217: [0, 0.69444, 0, 0, 0.31944],
			8220: [0, 0.69444, 0, 0, 0.60278],
			8221: [0, 0.69444, 0, 0, 0.60278],
			8224: [0.19444, 0.69444, 0, 0, 0.51111],
			8225: [0.19444, 0.69444, 0, 0, 0.51111],
			8242: [0, 0.55556, 0, 0, 0.34444],
			8407: [0, 0.72444, 0.15486, 0, 0.575],
			8463: [0, 0.69444, 0, 0, 0.66759],
			8465: [0, 0.69444, 0, 0, 0.83055],
			8467: [0, 0.69444, 0, 0, 0.47361],
			8472: [0.19444, 0.44444, 0, 0, 0.74027],
			8476: [0, 0.69444, 0, 0, 0.83055],
			8501: [0, 0.69444, 0, 0, 0.70277],
			8592: [-0.10889, 0.39111, 0, 0, 1.14999],
			8593: [0.19444, 0.69444, 0, 0, 0.575],
			8594: [-0.10889, 0.39111, 0, 0, 1.14999],
			8595: [0.19444, 0.69444, 0, 0, 0.575],
			8596: [-0.10889, 0.39111, 0, 0, 1.14999],
			8597: [0.25, 0.75, 0, 0, 0.575],
			8598: [0.19444, 0.69444, 0, 0, 1.14999],
			8599: [0.19444, 0.69444, 0, 0, 1.14999],
			8600: [0.19444, 0.69444, 0, 0, 1.14999],
			8601: [0.19444, 0.69444, 0, 0, 1.14999],
			8636: [-0.10889, 0.39111, 0, 0, 1.14999],
			8637: [-0.10889, 0.39111, 0, 0, 1.14999],
			8640: [-0.10889, 0.39111, 0, 0, 1.14999],
			8641: [-0.10889, 0.39111, 0, 0, 1.14999],
			8656: [-0.10889, 0.39111, 0, 0, 1.14999],
			8657: [0.19444, 0.69444, 0, 0, 0.70277],
			8658: [-0.10889, 0.39111, 0, 0, 1.14999],
			8659: [0.19444, 0.69444, 0, 0, 0.70277],
			8660: [-0.10889, 0.39111, 0, 0, 1.14999],
			8661: [0.25, 0.75, 0, 0, 0.70277],
			8704: [0, 0.69444, 0, 0, 0.63889],
			8706: [0, 0.69444, 0.06389, 0, 0.62847],
			8707: [0, 0.69444, 0, 0, 0.63889],
			8709: [0.05556, 0.75, 0, 0, 0.575],
			8711: [0, 0.68611, 0, 0, 0.95833],
			8712: [0.08556, 0.58556, 0, 0, 0.76666],
			8715: [0.08556, 0.58556, 0, 0, 0.76666],
			8722: [0.13333, 0.63333, 0, 0, 0.89444],
			8723: [0.13333, 0.63333, 0, 0, 0.89444],
			8725: [0.25, 0.75, 0, 0, 0.575],
			8726: [0.25, 0.75, 0, 0, 0.575],
			8727: [-0.02778, 0.47222, 0, 0, 0.575],
			8728: [-0.02639, 0.47361, 0, 0, 0.575],
			8729: [-0.02639, 0.47361, 0, 0, 0.575],
			8730: [0.18, 0.82, 0, 0, 0.95833],
			8733: [0, 0.44444, 0, 0, 0.89444],
			8734: [0, 0.44444, 0, 0, 1.14999],
			8736: [0, 0.69224, 0, 0, 0.72222],
			8739: [0.25, 0.75, 0, 0, 0.31944],
			8741: [0.25, 0.75, 0, 0, 0.575],
			8743: [0, 0.55556, 0, 0, 0.76666],
			8744: [0, 0.55556, 0, 0, 0.76666],
			8745: [0, 0.55556, 0, 0, 0.76666],
			8746: [0, 0.55556, 0, 0, 0.76666],
			8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
			8764: [-0.10889, 0.39111, 0, 0, 0.89444],
			8768: [0.19444, 0.69444, 0, 0, 0.31944],
			8771: [0.00222, 0.50222, 0, 0, 0.89444],
			8773: [0.027, 0.638, 0, 0, 0.894],
			8776: [0.02444, 0.52444, 0, 0, 0.89444],
			8781: [0.00222, 0.50222, 0, 0, 0.89444],
			8801: [0.00222, 0.50222, 0, 0, 0.89444],
			8804: [0.19667, 0.69667, 0, 0, 0.89444],
			8805: [0.19667, 0.69667, 0, 0, 0.89444],
			8810: [0.08556, 0.58556, 0, 0, 1.14999],
			8811: [0.08556, 0.58556, 0, 0, 1.14999],
			8826: [0.08556, 0.58556, 0, 0, 0.89444],
			8827: [0.08556, 0.58556, 0, 0, 0.89444],
			8834: [0.08556, 0.58556, 0, 0, 0.89444],
			8835: [0.08556, 0.58556, 0, 0, 0.89444],
			8838: [0.19667, 0.69667, 0, 0, 0.89444],
			8839: [0.19667, 0.69667, 0, 0, 0.89444],
			8846: [0, 0.55556, 0, 0, 0.76666],
			8849: [0.19667, 0.69667, 0, 0, 0.89444],
			8850: [0.19667, 0.69667, 0, 0, 0.89444],
			8851: [0, 0.55556, 0, 0, 0.76666],
			8852: [0, 0.55556, 0, 0, 0.76666],
			8853: [0.13333, 0.63333, 0, 0, 0.89444],
			8854: [0.13333, 0.63333, 0, 0, 0.89444],
			8855: [0.13333, 0.63333, 0, 0, 0.89444],
			8856: [0.13333, 0.63333, 0, 0, 0.89444],
			8857: [0.13333, 0.63333, 0, 0, 0.89444],
			8866: [0, 0.69444, 0, 0, 0.70277],
			8867: [0, 0.69444, 0, 0, 0.70277],
			8868: [0, 0.69444, 0, 0, 0.89444],
			8869: [0, 0.69444, 0, 0, 0.89444],
			8900: [-0.02639, 0.47361, 0, 0, 0.575],
			8901: [-0.02639, 0.47361, 0, 0, 0.31944],
			8902: [-0.02778, 0.47222, 0, 0, 0.575],
			8968: [0.25, 0.75, 0, 0, 0.51111],
			8969: [0.25, 0.75, 0, 0, 0.51111],
			8970: [0.25, 0.75, 0, 0, 0.51111],
			8971: [0.25, 0.75, 0, 0, 0.51111],
			8994: [-0.13889, 0.36111, 0, 0, 1.14999],
			8995: [-0.13889, 0.36111, 0, 0, 1.14999],
			9651: [0.19444, 0.69444, 0, 0, 1.02222],
			9657: [-0.02778, 0.47222, 0, 0, 0.575],
			9661: [0.19444, 0.69444, 0, 0, 1.02222],
			9667: [-0.02778, 0.47222, 0, 0, 0.575],
			9711: [0.19444, 0.69444, 0, 0, 1.14999],
			9824: [0.12963, 0.69444, 0, 0, 0.89444],
			9825: [0.12963, 0.69444, 0, 0, 0.89444],
			9826: [0.12963, 0.69444, 0, 0, 0.89444],
			9827: [0.12963, 0.69444, 0, 0, 0.89444],
			9837: [0, 0.75, 0, 0, 0.44722],
			9838: [0.19444, 0.69444, 0, 0, 0.44722],
			9839: [0.19444, 0.69444, 0, 0, 0.44722],
			10216: [0.25, 0.75, 0, 0, 0.44722],
			10217: [0.25, 0.75, 0, 0, 0.44722],
			10815: [0, 0.68611, 0, 0, 0.9],
			10927: [0.19667, 0.69667, 0, 0, 0.89444],
			10928: [0.19667, 0.69667, 0, 0, 0.89444],
			57376: [0.19444, 0.69444, 0, 0, 0],
		},
		"Main-BoldItalic": {
			32: [0, 0, 0, 0, 0.25],
			33: [0, 0.69444, 0.11417, 0, 0.38611],
			34: [0, 0.69444, 0.07939, 0, 0.62055],
			35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
			37: [0.05556, 0.75, 0.12861, 0, 0.94444],
			38: [0, 0.69444, 0.08528, 0, 0.88555],
			39: [0, 0.69444, 0.12945, 0, 0.35555],
			40: [0.25, 0.75, 0.15806, 0, 0.47333],
			41: [0.25, 0.75, 0.03306, 0, 0.47333],
			42: [0, 0.75, 0.14333, 0, 0.59111],
			43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
			44: [0.19444, 0.14722, 0, 0, 0.35555],
			45: [0, 0.44444, 0.02611, 0, 0.41444],
			46: [0, 0.14722, 0, 0, 0.35555],
			47: [0.25, 0.75, 0.15806, 0, 0.59111],
			48: [0, 0.64444, 0.13167, 0, 0.59111],
			49: [0, 0.64444, 0.13167, 0, 0.59111],
			50: [0, 0.64444, 0.13167, 0, 0.59111],
			51: [0, 0.64444, 0.13167, 0, 0.59111],
			52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
			53: [0, 0.64444, 0.13167, 0, 0.59111],
			54: [0, 0.64444, 0.13167, 0, 0.59111],
			55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
			56: [0, 0.64444, 0.13167, 0, 0.59111],
			57: [0, 0.64444, 0.13167, 0, 0.59111],
			58: [0, 0.44444, 0.06695, 0, 0.35555],
			59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
			61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
			63: [0, 0.69444, 0.11472, 0, 0.59111],
			64: [0, 0.69444, 0.09208, 0, 0.88555],
			65: [0, 0.68611, 0, 0, 0.86555],
			66: [0, 0.68611, 0.0992, 0, 0.81666],
			67: [0, 0.68611, 0.14208, 0, 0.82666],
			68: [0, 0.68611, 0.09062, 0, 0.87555],
			69: [0, 0.68611, 0.11431, 0, 0.75666],
			70: [0, 0.68611, 0.12903, 0, 0.72722],
			71: [0, 0.68611, 0.07347, 0, 0.89527],
			72: [0, 0.68611, 0.17208, 0, 0.8961],
			73: [0, 0.68611, 0.15681, 0, 0.47166],
			74: [0, 0.68611, 0.145, 0, 0.61055],
			75: [0, 0.68611, 0.14208, 0, 0.89499],
			76: [0, 0.68611, 0, 0, 0.69777],
			77: [0, 0.68611, 0.17208, 0, 1.07277],
			78: [0, 0.68611, 0.17208, 0, 0.8961],
			79: [0, 0.68611, 0.09062, 0, 0.85499],
			80: [0, 0.68611, 0.0992, 0, 0.78721],
			81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
			82: [0, 0.68611, 0.02559, 0, 0.85944],
			83: [0, 0.68611, 0.11264, 0, 0.64999],
			84: [0, 0.68611, 0.12903, 0, 0.7961],
			85: [0, 0.68611, 0.17208, 0, 0.88083],
			86: [0, 0.68611, 0.18625, 0, 0.86555],
			87: [0, 0.68611, 0.18625, 0, 1.15999],
			88: [0, 0.68611, 0.15681, 0, 0.86555],
			89: [0, 0.68611, 0.19803, 0, 0.86555],
			90: [0, 0.68611, 0.14208, 0, 0.70888],
			91: [0.25, 0.75, 0.1875, 0, 0.35611],
			93: [0.25, 0.75, 0.09972, 0, 0.35611],
			94: [0, 0.69444, 0.06709, 0, 0.59111],
			95: [0.31, 0.13444, 0.09811, 0, 0.59111],
			97: [0, 0.44444, 0.09426, 0, 0.59111],
			98: [0, 0.69444, 0.07861, 0, 0.53222],
			99: [0, 0.44444, 0.05222, 0, 0.53222],
			100: [0, 0.69444, 0.10861, 0, 0.59111],
			101: [0, 0.44444, 0.085, 0, 0.53222],
			102: [0.19444, 0.69444, 0.21778, 0, 0.4],
			103: [0.19444, 0.44444, 0.105, 0, 0.53222],
			104: [0, 0.69444, 0.09426, 0, 0.59111],
			105: [0, 0.69326, 0.11387, 0, 0.35555],
			106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
			107: [0, 0.69444, 0.11111, 0, 0.53222],
			108: [0, 0.69444, 0.10861, 0, 0.29666],
			109: [0, 0.44444, 0.09426, 0, 0.94444],
			110: [0, 0.44444, 0.09426, 0, 0.64999],
			111: [0, 0.44444, 0.07861, 0, 0.59111],
			112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
			113: [0.19444, 0.44444, 0.105, 0, 0.53222],
			114: [0, 0.44444, 0.11111, 0, 0.50167],
			115: [0, 0.44444, 0.08167, 0, 0.48694],
			116: [0, 0.63492, 0.09639, 0, 0.385],
			117: [0, 0.44444, 0.09426, 0, 0.62055],
			118: [0, 0.44444, 0.11111, 0, 0.53222],
			119: [0, 0.44444, 0.11111, 0, 0.76777],
			120: [0, 0.44444, 0.12583, 0, 0.56055],
			121: [0.19444, 0.44444, 0.105, 0, 0.56166],
			122: [0, 0.44444, 0.13889, 0, 0.49055],
			126: [0.35, 0.34444, 0.11472, 0, 0.59111],
			160: [0, 0, 0, 0, 0.25],
			168: [0, 0.69444, 0.11473, 0, 0.59111],
			176: [0, 0.69444, 0, 0, 0.94888],
			184: [0.17014, 0, 0, 0, 0.53222],
			198: [0, 0.68611, 0.11431, 0, 1.02277],
			216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
			223: [0.19444, 0.69444, 0.09736, 0, 0.665],
			230: [0, 0.44444, 0.085, 0, 0.82666],
			248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
			305: [0, 0.44444, 0.09426, 0, 0.35555],
			338: [0, 0.68611, 0.11431, 0, 1.14054],
			339: [0, 0.44444, 0.085, 0, 0.82666],
			567: [0.19444, 0.44444, 0.04611, 0, 0.385],
			710: [0, 0.69444, 0.06709, 0, 0.59111],
			711: [0, 0.63194, 0.08271, 0, 0.59111],
			713: [0, 0.59444, 0.10444, 0, 0.59111],
			714: [0, 0.69444, 0.08528, 0, 0.59111],
			715: [0, 0.69444, 0, 0, 0.59111],
			728: [0, 0.69444, 0.10333, 0, 0.59111],
			729: [0, 0.69444, 0.12945, 0, 0.35555],
			730: [0, 0.69444, 0, 0, 0.94888],
			732: [0, 0.69444, 0.11472, 0, 0.59111],
			733: [0, 0.69444, 0.11472, 0, 0.59111],
			915: [0, 0.68611, 0.12903, 0, 0.69777],
			916: [0, 0.68611, 0, 0, 0.94444],
			920: [0, 0.68611, 0.09062, 0, 0.88555],
			923: [0, 0.68611, 0, 0, 0.80666],
			926: [0, 0.68611, 0.15092, 0, 0.76777],
			928: [0, 0.68611, 0.17208, 0, 0.8961],
			931: [0, 0.68611, 0.11431, 0, 0.82666],
			933: [0, 0.68611, 0.10778, 0, 0.88555],
			934: [0, 0.68611, 0.05632, 0, 0.82666],
			936: [0, 0.68611, 0.10778, 0, 0.88555],
			937: [0, 0.68611, 0.0992, 0, 0.82666],
			8211: [0, 0.44444, 0.09811, 0, 0.59111],
			8212: [0, 0.44444, 0.09811, 0, 1.18221],
			8216: [0, 0.69444, 0.12945, 0, 0.35555],
			8217: [0, 0.69444, 0.12945, 0, 0.35555],
			8220: [0, 0.69444, 0.16772, 0, 0.62055],
			8221: [0, 0.69444, 0.07939, 0, 0.62055],
		},
		"Main-Italic": {
			32: [0, 0, 0, 0, 0.25],
			33: [0, 0.69444, 0.12417, 0, 0.30667],
			34: [0, 0.69444, 0.06961, 0, 0.51444],
			35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
			37: [0.05556, 0.75, 0.13639, 0, 0.81777],
			38: [0, 0.69444, 0.09694, 0, 0.76666],
			39: [0, 0.69444, 0.12417, 0, 0.30667],
			40: [0.25, 0.75, 0.16194, 0, 0.40889],
			41: [0.25, 0.75, 0.03694, 0, 0.40889],
			42: [0, 0.75, 0.14917, 0, 0.51111],
			43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
			44: [0.19444, 0.10556, 0, 0, 0.30667],
			45: [0, 0.43056, 0.02826, 0, 0.35778],
			46: [0, 0.10556, 0, 0, 0.30667],
			47: [0.25, 0.75, 0.16194, 0, 0.51111],
			48: [0, 0.64444, 0.13556, 0, 0.51111],
			49: [0, 0.64444, 0.13556, 0, 0.51111],
			50: [0, 0.64444, 0.13556, 0, 0.51111],
			51: [0, 0.64444, 0.13556, 0, 0.51111],
			52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
			53: [0, 0.64444, 0.13556, 0, 0.51111],
			54: [0, 0.64444, 0.13556, 0, 0.51111],
			55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
			56: [0, 0.64444, 0.13556, 0, 0.51111],
			57: [0, 0.64444, 0.13556, 0, 0.51111],
			58: [0, 0.43056, 0.0582, 0, 0.30667],
			59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
			61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
			63: [0, 0.69444, 0.1225, 0, 0.51111],
			64: [0, 0.69444, 0.09597, 0, 0.76666],
			65: [0, 0.68333, 0, 0, 0.74333],
			66: [0, 0.68333, 0.10257, 0, 0.70389],
			67: [0, 0.68333, 0.14528, 0, 0.71555],
			68: [0, 0.68333, 0.09403, 0, 0.755],
			69: [0, 0.68333, 0.12028, 0, 0.67833],
			70: [0, 0.68333, 0.13305, 0, 0.65277],
			71: [0, 0.68333, 0.08722, 0, 0.77361],
			72: [0, 0.68333, 0.16389, 0, 0.74333],
			73: [0, 0.68333, 0.15806, 0, 0.38555],
			74: [0, 0.68333, 0.14028, 0, 0.525],
			75: [0, 0.68333, 0.14528, 0, 0.76888],
			76: [0, 0.68333, 0, 0, 0.62722],
			77: [0, 0.68333, 0.16389, 0, 0.89666],
			78: [0, 0.68333, 0.16389, 0, 0.74333],
			79: [0, 0.68333, 0.09403, 0, 0.76666],
			80: [0, 0.68333, 0.10257, 0, 0.67833],
			81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
			82: [0, 0.68333, 0.03868, 0, 0.72944],
			83: [0, 0.68333, 0.11972, 0, 0.56222],
			84: [0, 0.68333, 0.13305, 0, 0.71555],
			85: [0, 0.68333, 0.16389, 0, 0.74333],
			86: [0, 0.68333, 0.18361, 0, 0.74333],
			87: [0, 0.68333, 0.18361, 0, 0.99888],
			88: [0, 0.68333, 0.15806, 0, 0.74333],
			89: [0, 0.68333, 0.19383, 0, 0.74333],
			90: [0, 0.68333, 0.14528, 0, 0.61333],
			91: [0.25, 0.75, 0.1875, 0, 0.30667],
			93: [0.25, 0.75, 0.10528, 0, 0.30667],
			94: [0, 0.69444, 0.06646, 0, 0.51111],
			95: [0.31, 0.12056, 0.09208, 0, 0.51111],
			97: [0, 0.43056, 0.07671, 0, 0.51111],
			98: [0, 0.69444, 0.06312, 0, 0.46],
			99: [0, 0.43056, 0.05653, 0, 0.46],
			100: [0, 0.69444, 0.10333, 0, 0.51111],
			101: [0, 0.43056, 0.07514, 0, 0.46],
			102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
			103: [0.19444, 0.43056, 0.08847, 0, 0.46],
			104: [0, 0.69444, 0.07671, 0, 0.51111],
			105: [0, 0.65536, 0.1019, 0, 0.30667],
			106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
			107: [0, 0.69444, 0.10764, 0, 0.46],
			108: [0, 0.69444, 0.10333, 0, 0.25555],
			109: [0, 0.43056, 0.07671, 0, 0.81777],
			110: [0, 0.43056, 0.07671, 0, 0.56222],
			111: [0, 0.43056, 0.06312, 0, 0.51111],
			112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
			113: [0.19444, 0.43056, 0.08847, 0, 0.46],
			114: [0, 0.43056, 0.10764, 0, 0.42166],
			115: [0, 0.43056, 0.08208, 0, 0.40889],
			116: [0, 0.61508, 0.09486, 0, 0.33222],
			117: [0, 0.43056, 0.07671, 0, 0.53666],
			118: [0, 0.43056, 0.10764, 0, 0.46],
			119: [0, 0.43056, 0.10764, 0, 0.66444],
			120: [0, 0.43056, 0.12042, 0, 0.46389],
			121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
			122: [0, 0.43056, 0.12292, 0, 0.40889],
			126: [0.35, 0.31786, 0.11585, 0, 0.51111],
			160: [0, 0, 0, 0, 0.25],
			168: [0, 0.66786, 0.10474, 0, 0.51111],
			176: [0, 0.69444, 0, 0, 0.83129],
			184: [0.17014, 0, 0, 0, 0.46],
			198: [0, 0.68333, 0.12028, 0, 0.88277],
			216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
			223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
			230: [0, 0.43056, 0.07514, 0, 0.71555],
			248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
			338: [0, 0.68333, 0.12028, 0, 0.98499],
			339: [0, 0.43056, 0.07514, 0, 0.71555],
			710: [0, 0.69444, 0.06646, 0, 0.51111],
			711: [0, 0.62847, 0.08295, 0, 0.51111],
			713: [0, 0.56167, 0.10333, 0, 0.51111],
			714: [0, 0.69444, 0.09694, 0, 0.51111],
			715: [0, 0.69444, 0, 0, 0.51111],
			728: [0, 0.69444, 0.10806, 0, 0.51111],
			729: [0, 0.66786, 0.11752, 0, 0.30667],
			730: [0, 0.69444, 0, 0, 0.83129],
			732: [0, 0.66786, 0.11585, 0, 0.51111],
			733: [0, 0.69444, 0.1225, 0, 0.51111],
			915: [0, 0.68333, 0.13305, 0, 0.62722],
			916: [0, 0.68333, 0, 0, 0.81777],
			920: [0, 0.68333, 0.09403, 0, 0.76666],
			923: [0, 0.68333, 0, 0, 0.69222],
			926: [0, 0.68333, 0.15294, 0, 0.66444],
			928: [0, 0.68333, 0.16389, 0, 0.74333],
			931: [0, 0.68333, 0.12028, 0, 0.71555],
			933: [0, 0.68333, 0.11111, 0, 0.76666],
			934: [0, 0.68333, 0.05986, 0, 0.71555],
			936: [0, 0.68333, 0.11111, 0, 0.76666],
			937: [0, 0.68333, 0.10257, 0, 0.71555],
			8211: [0, 0.43056, 0.09208, 0, 0.51111],
			8212: [0, 0.43056, 0.09208, 0, 1.02222],
			8216: [0, 0.69444, 0.12417, 0, 0.30667],
			8217: [0, 0.69444, 0.12417, 0, 0.30667],
			8220: [0, 0.69444, 0.1685, 0, 0.51444],
			8221: [0, 0.69444, 0.06961, 0, 0.51444],
			8463: [0, 0.68889, 0, 0, 0.54028],
		},
		"Main-Regular": {
			32: [0, 0, 0, 0, 0.25],
			33: [0, 0.69444, 0, 0, 0.27778],
			34: [0, 0.69444, 0, 0, 0.5],
			35: [0.19444, 0.69444, 0, 0, 0.83334],
			36: [0.05556, 0.75, 0, 0, 0.5],
			37: [0.05556, 0.75, 0, 0, 0.83334],
			38: [0, 0.69444, 0, 0, 0.77778],
			39: [0, 0.69444, 0, 0, 0.27778],
			40: [0.25, 0.75, 0, 0, 0.38889],
			41: [0.25, 0.75, 0, 0, 0.38889],
			42: [0, 0.75, 0, 0, 0.5],
			43: [0.08333, 0.58333, 0, 0, 0.77778],
			44: [0.19444, 0.10556, 0, 0, 0.27778],
			45: [0, 0.43056, 0, 0, 0.33333],
			46: [0, 0.10556, 0, 0, 0.27778],
			47: [0.25, 0.75, 0, 0, 0.5],
			48: [0, 0.64444, 0, 0, 0.5],
			49: [0, 0.64444, 0, 0, 0.5],
			50: [0, 0.64444, 0, 0, 0.5],
			51: [0, 0.64444, 0, 0, 0.5],
			52: [0, 0.64444, 0, 0, 0.5],
			53: [0, 0.64444, 0, 0, 0.5],
			54: [0, 0.64444, 0, 0, 0.5],
			55: [0, 0.64444, 0, 0, 0.5],
			56: [0, 0.64444, 0, 0, 0.5],
			57: [0, 0.64444, 0, 0, 0.5],
			58: [0, 0.43056, 0, 0, 0.27778],
			59: [0.19444, 0.43056, 0, 0, 0.27778],
			60: [0.0391, 0.5391, 0, 0, 0.77778],
			61: [-0.13313, 0.36687, 0, 0, 0.77778],
			62: [0.0391, 0.5391, 0, 0, 0.77778],
			63: [0, 0.69444, 0, 0, 0.47222],
			64: [0, 0.69444, 0, 0, 0.77778],
			65: [0, 0.68333, 0, 0, 0.75],
			66: [0, 0.68333, 0, 0, 0.70834],
			67: [0, 0.68333, 0, 0, 0.72222],
			68: [0, 0.68333, 0, 0, 0.76389],
			69: [0, 0.68333, 0, 0, 0.68056],
			70: [0, 0.68333, 0, 0, 0.65278],
			71: [0, 0.68333, 0, 0, 0.78472],
			72: [0, 0.68333, 0, 0, 0.75],
			73: [0, 0.68333, 0, 0, 0.36111],
			74: [0, 0.68333, 0, 0, 0.51389],
			75: [0, 0.68333, 0, 0, 0.77778],
			76: [0, 0.68333, 0, 0, 0.625],
			77: [0, 0.68333, 0, 0, 0.91667],
			78: [0, 0.68333, 0, 0, 0.75],
			79: [0, 0.68333, 0, 0, 0.77778],
			80: [0, 0.68333, 0, 0, 0.68056],
			81: [0.19444, 0.68333, 0, 0, 0.77778],
			82: [0, 0.68333, 0, 0, 0.73611],
			83: [0, 0.68333, 0, 0, 0.55556],
			84: [0, 0.68333, 0, 0, 0.72222],
			85: [0, 0.68333, 0, 0, 0.75],
			86: [0, 0.68333, 0.01389, 0, 0.75],
			87: [0, 0.68333, 0.01389, 0, 1.02778],
			88: [0, 0.68333, 0, 0, 0.75],
			89: [0, 0.68333, 0.025, 0, 0.75],
			90: [0, 0.68333, 0, 0, 0.61111],
			91: [0.25, 0.75, 0, 0, 0.27778],
			92: [0.25, 0.75, 0, 0, 0.5],
			93: [0.25, 0.75, 0, 0, 0.27778],
			94: [0, 0.69444, 0, 0, 0.5],
			95: [0.31, 0.12056, 0.02778, 0, 0.5],
			97: [0, 0.43056, 0, 0, 0.5],
			98: [0, 0.69444, 0, 0, 0.55556],
			99: [0, 0.43056, 0, 0, 0.44445],
			100: [0, 0.69444, 0, 0, 0.55556],
			101: [0, 0.43056, 0, 0, 0.44445],
			102: [0, 0.69444, 0.07778, 0, 0.30556],
			103: [0.19444, 0.43056, 0.01389, 0, 0.5],
			104: [0, 0.69444, 0, 0, 0.55556],
			105: [0, 0.66786, 0, 0, 0.27778],
			106: [0.19444, 0.66786, 0, 0, 0.30556],
			107: [0, 0.69444, 0, 0, 0.52778],
			108: [0, 0.69444, 0, 0, 0.27778],
			109: [0, 0.43056, 0, 0, 0.83334],
			110: [0, 0.43056, 0, 0, 0.55556],
			111: [0, 0.43056, 0, 0, 0.5],
			112: [0.19444, 0.43056, 0, 0, 0.55556],
			113: [0.19444, 0.43056, 0, 0, 0.52778],
			114: [0, 0.43056, 0, 0, 0.39167],
			115: [0, 0.43056, 0, 0, 0.39445],
			116: [0, 0.61508, 0, 0, 0.38889],
			117: [0, 0.43056, 0, 0, 0.55556],
			118: [0, 0.43056, 0.01389, 0, 0.52778],
			119: [0, 0.43056, 0.01389, 0, 0.72222],
			120: [0, 0.43056, 0, 0, 0.52778],
			121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
			122: [0, 0.43056, 0, 0, 0.44445],
			123: [0.25, 0.75, 0, 0, 0.5],
			124: [0.25, 0.75, 0, 0, 0.27778],
			125: [0.25, 0.75, 0, 0, 0.5],
			126: [0.35, 0.31786, 0, 0, 0.5],
			160: [0, 0, 0, 0, 0.25],
			163: [0, 0.69444, 0, 0, 0.76909],
			167: [0.19444, 0.69444, 0, 0, 0.44445],
			168: [0, 0.66786, 0, 0, 0.5],
			172: [0, 0.43056, 0, 0, 0.66667],
			176: [0, 0.69444, 0, 0, 0.75],
			177: [0.08333, 0.58333, 0, 0, 0.77778],
			182: [0.19444, 0.69444, 0, 0, 0.61111],
			184: [0.17014, 0, 0, 0, 0.44445],
			198: [0, 0.68333, 0, 0, 0.90278],
			215: [0.08333, 0.58333, 0, 0, 0.77778],
			216: [0.04861, 0.73194, 0, 0, 0.77778],
			223: [0, 0.69444, 0, 0, 0.5],
			230: [0, 0.43056, 0, 0, 0.72222],
			247: [0.08333, 0.58333, 0, 0, 0.77778],
			248: [0.09722, 0.52778, 0, 0, 0.5],
			305: [0, 0.43056, 0, 0, 0.27778],
			338: [0, 0.68333, 0, 0, 1.01389],
			339: [0, 0.43056, 0, 0, 0.77778],
			567: [0.19444, 0.43056, 0, 0, 0.30556],
			710: [0, 0.69444, 0, 0, 0.5],
			711: [0, 0.62847, 0, 0, 0.5],
			713: [0, 0.56778, 0, 0, 0.5],
			714: [0, 0.69444, 0, 0, 0.5],
			715: [0, 0.69444, 0, 0, 0.5],
			728: [0, 0.69444, 0, 0, 0.5],
			729: [0, 0.66786, 0, 0, 0.27778],
			730: [0, 0.69444, 0, 0, 0.75],
			732: [0, 0.66786, 0, 0, 0.5],
			733: [0, 0.69444, 0, 0, 0.5],
			915: [0, 0.68333, 0, 0, 0.625],
			916: [0, 0.68333, 0, 0, 0.83334],
			920: [0, 0.68333, 0, 0, 0.77778],
			923: [0, 0.68333, 0, 0, 0.69445],
			926: [0, 0.68333, 0, 0, 0.66667],
			928: [0, 0.68333, 0, 0, 0.75],
			931: [0, 0.68333, 0, 0, 0.72222],
			933: [0, 0.68333, 0, 0, 0.77778],
			934: [0, 0.68333, 0, 0, 0.72222],
			936: [0, 0.68333, 0, 0, 0.77778],
			937: [0, 0.68333, 0, 0, 0.72222],
			8211: [0, 0.43056, 0.02778, 0, 0.5],
			8212: [0, 0.43056, 0.02778, 0, 1],
			8216: [0, 0.69444, 0, 0, 0.27778],
			8217: [0, 0.69444, 0, 0, 0.27778],
			8220: [0, 0.69444, 0, 0, 0.5],
			8221: [0, 0.69444, 0, 0, 0.5],
			8224: [0.19444, 0.69444, 0, 0, 0.44445],
			8225: [0.19444, 0.69444, 0, 0, 0.44445],
			8230: [0, 0.123, 0, 0, 1.172],
			8242: [0, 0.55556, 0, 0, 0.275],
			8407: [0, 0.71444, 0.15382, 0, 0.5],
			8463: [0, 0.68889, 0, 0, 0.54028],
			8465: [0, 0.69444, 0, 0, 0.72222],
			8467: [0, 0.69444, 0, 0.11111, 0.41667],
			8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
			8476: [0, 0.69444, 0, 0, 0.72222],
			8501: [0, 0.69444, 0, 0, 0.61111],
			8592: [-0.13313, 0.36687, 0, 0, 1],
			8593: [0.19444, 0.69444, 0, 0, 0.5],
			8594: [-0.13313, 0.36687, 0, 0, 1],
			8595: [0.19444, 0.69444, 0, 0, 0.5],
			8596: [-0.13313, 0.36687, 0, 0, 1],
			8597: [0.25, 0.75, 0, 0, 0.5],
			8598: [0.19444, 0.69444, 0, 0, 1],
			8599: [0.19444, 0.69444, 0, 0, 1],
			8600: [0.19444, 0.69444, 0, 0, 1],
			8601: [0.19444, 0.69444, 0, 0, 1],
			8614: [0.011, 0.511, 0, 0, 1],
			8617: [0.011, 0.511, 0, 0, 1.126],
			8618: [0.011, 0.511, 0, 0, 1.126],
			8636: [-0.13313, 0.36687, 0, 0, 1],
			8637: [-0.13313, 0.36687, 0, 0, 1],
			8640: [-0.13313, 0.36687, 0, 0, 1],
			8641: [-0.13313, 0.36687, 0, 0, 1],
			8652: [0.011, 0.671, 0, 0, 1],
			8656: [-0.13313, 0.36687, 0, 0, 1],
			8657: [0.19444, 0.69444, 0, 0, 0.61111],
			8658: [-0.13313, 0.36687, 0, 0, 1],
			8659: [0.19444, 0.69444, 0, 0, 0.61111],
			8660: [-0.13313, 0.36687, 0, 0, 1],
			8661: [0.25, 0.75, 0, 0, 0.61111],
			8704: [0, 0.69444, 0, 0, 0.55556],
			8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
			8707: [0, 0.69444, 0, 0, 0.55556],
			8709: [0.05556, 0.75, 0, 0, 0.5],
			8711: [0, 0.68333, 0, 0, 0.83334],
			8712: [0.0391, 0.5391, 0, 0, 0.66667],
			8715: [0.0391, 0.5391, 0, 0, 0.66667],
			8722: [0.08333, 0.58333, 0, 0, 0.77778],
			8723: [0.08333, 0.58333, 0, 0, 0.77778],
			8725: [0.25, 0.75, 0, 0, 0.5],
			8726: [0.25, 0.75, 0, 0, 0.5],
			8727: [-0.03472, 0.46528, 0, 0, 0.5],
			8728: [-0.05555, 0.44445, 0, 0, 0.5],
			8729: [-0.05555, 0.44445, 0, 0, 0.5],
			8730: [0.2, 0.8, 0, 0, 0.83334],
			8733: [0, 0.43056, 0, 0, 0.77778],
			8734: [0, 0.43056, 0, 0, 1],
			8736: [0, 0.69224, 0, 0, 0.72222],
			8739: [0.25, 0.75, 0, 0, 0.27778],
			8741: [0.25, 0.75, 0, 0, 0.5],
			8743: [0, 0.55556, 0, 0, 0.66667],
			8744: [0, 0.55556, 0, 0, 0.66667],
			8745: [0, 0.55556, 0, 0, 0.66667],
			8746: [0, 0.55556, 0, 0, 0.66667],
			8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
			8764: [-0.13313, 0.36687, 0, 0, 0.77778],
			8768: [0.19444, 0.69444, 0, 0, 0.27778],
			8771: [-0.03625, 0.46375, 0, 0, 0.77778],
			8773: [-0.022, 0.589, 0, 0, 0.778],
			8776: [-0.01688, 0.48312, 0, 0, 0.77778],
			8781: [-0.03625, 0.46375, 0, 0, 0.77778],
			8784: [-0.133, 0.673, 0, 0, 0.778],
			8801: [-0.03625, 0.46375, 0, 0, 0.77778],
			8804: [0.13597, 0.63597, 0, 0, 0.77778],
			8805: [0.13597, 0.63597, 0, 0, 0.77778],
			8810: [0.0391, 0.5391, 0, 0, 1],
			8811: [0.0391, 0.5391, 0, 0, 1],
			8826: [0.0391, 0.5391, 0, 0, 0.77778],
			8827: [0.0391, 0.5391, 0, 0, 0.77778],
			8834: [0.0391, 0.5391, 0, 0, 0.77778],
			8835: [0.0391, 0.5391, 0, 0, 0.77778],
			8838: [0.13597, 0.63597, 0, 0, 0.77778],
			8839: [0.13597, 0.63597, 0, 0, 0.77778],
			8846: [0, 0.55556, 0, 0, 0.66667],
			8849: [0.13597, 0.63597, 0, 0, 0.77778],
			8850: [0.13597, 0.63597, 0, 0, 0.77778],
			8851: [0, 0.55556, 0, 0, 0.66667],
			8852: [0, 0.55556, 0, 0, 0.66667],
			8853: [0.08333, 0.58333, 0, 0, 0.77778],
			8854: [0.08333, 0.58333, 0, 0, 0.77778],
			8855: [0.08333, 0.58333, 0, 0, 0.77778],
			8856: [0.08333, 0.58333, 0, 0, 0.77778],
			8857: [0.08333, 0.58333, 0, 0, 0.77778],
			8866: [0, 0.69444, 0, 0, 0.61111],
			8867: [0, 0.69444, 0, 0, 0.61111],
			8868: [0, 0.69444, 0, 0, 0.77778],
			8869: [0, 0.69444, 0, 0, 0.77778],
			8872: [0.249, 0.75, 0, 0, 0.867],
			8900: [-0.05555, 0.44445, 0, 0, 0.5],
			8901: [-0.05555, 0.44445, 0, 0, 0.27778],
			8902: [-0.03472, 0.46528, 0, 0, 0.5],
			8904: [0.005, 0.505, 0, 0, 0.9],
			8942: [0.03, 0.903, 0, 0, 0.278],
			8943: [-0.19, 0.313, 0, 0, 1.172],
			8945: [-0.1, 0.823, 0, 0, 1.282],
			8968: [0.25, 0.75, 0, 0, 0.44445],
			8969: [0.25, 0.75, 0, 0, 0.44445],
			8970: [0.25, 0.75, 0, 0, 0.44445],
			8971: [0.25, 0.75, 0, 0, 0.44445],
			8994: [-0.14236, 0.35764, 0, 0, 1],
			8995: [-0.14236, 0.35764, 0, 0, 1],
			9136: [0.244, 0.744, 0, 0, 0.412],
			9137: [0.244, 0.745, 0, 0, 0.412],
			9651: [0.19444, 0.69444, 0, 0, 0.88889],
			9657: [-0.03472, 0.46528, 0, 0, 0.5],
			9661: [0.19444, 0.69444, 0, 0, 0.88889],
			9667: [-0.03472, 0.46528, 0, 0, 0.5],
			9711: [0.19444, 0.69444, 0, 0, 1],
			9824: [0.12963, 0.69444, 0, 0, 0.77778],
			9825: [0.12963, 0.69444, 0, 0, 0.77778],
			9826: [0.12963, 0.69444, 0, 0, 0.77778],
			9827: [0.12963, 0.69444, 0, 0, 0.77778],
			9837: [0, 0.75, 0, 0, 0.38889],
			9838: [0.19444, 0.69444, 0, 0, 0.38889],
			9839: [0.19444, 0.69444, 0, 0, 0.38889],
			10216: [0.25, 0.75, 0, 0, 0.38889],
			10217: [0.25, 0.75, 0, 0, 0.38889],
			10222: [0.244, 0.744, 0, 0, 0.412],
			10223: [0.244, 0.745, 0, 0, 0.412],
			10229: [0.011, 0.511, 0, 0, 1.609],
			10230: [0.011, 0.511, 0, 0, 1.638],
			10231: [0.011, 0.511, 0, 0, 1.859],
			10232: [0.024, 0.525, 0, 0, 1.609],
			10233: [0.024, 0.525, 0, 0, 1.638],
			10234: [0.024, 0.525, 0, 0, 1.858],
			10236: [0.011, 0.511, 0, 0, 1.638],
			10815: [0, 0.68333, 0, 0, 0.75],
			10927: [0.13597, 0.63597, 0, 0, 0.77778],
			10928: [0.13597, 0.63597, 0, 0, 0.77778],
			57376: [0.19444, 0.69444, 0, 0, 0],
		},
		"Math-BoldItalic": {
			32: [0, 0, 0, 0, 0.25],
			48: [0, 0.44444, 0, 0, 0.575],
			49: [0, 0.44444, 0, 0, 0.575],
			50: [0, 0.44444, 0, 0, 0.575],
			51: [0.19444, 0.44444, 0, 0, 0.575],
			52: [0.19444, 0.44444, 0, 0, 0.575],
			53: [0.19444, 0.44444, 0, 0, 0.575],
			54: [0, 0.64444, 0, 0, 0.575],
			55: [0.19444, 0.44444, 0, 0, 0.575],
			56: [0, 0.64444, 0, 0, 0.575],
			57: [0.19444, 0.44444, 0, 0, 0.575],
			65: [0, 0.68611, 0, 0, 0.86944],
			66: [0, 0.68611, 0.04835, 0, 0.8664],
			67: [0, 0.68611, 0.06979, 0, 0.81694],
			68: [0, 0.68611, 0.03194, 0, 0.93812],
			69: [0, 0.68611, 0.05451, 0, 0.81007],
			70: [0, 0.68611, 0.15972, 0, 0.68889],
			71: [0, 0.68611, 0, 0, 0.88673],
			72: [0, 0.68611, 0.08229, 0, 0.98229],
			73: [0, 0.68611, 0.07778, 0, 0.51111],
			74: [0, 0.68611, 0.10069, 0, 0.63125],
			75: [0, 0.68611, 0.06979, 0, 0.97118],
			76: [0, 0.68611, 0, 0, 0.75555],
			77: [0, 0.68611, 0.11424, 0, 1.14201],
			78: [0, 0.68611, 0.11424, 0, 0.95034],
			79: [0, 0.68611, 0.03194, 0, 0.83666],
			80: [0, 0.68611, 0.15972, 0, 0.72309],
			81: [0.19444, 0.68611, 0, 0, 0.86861],
			82: [0, 0.68611, 0.00421, 0, 0.87235],
			83: [0, 0.68611, 0.05382, 0, 0.69271],
			84: [0, 0.68611, 0.15972, 0, 0.63663],
			85: [0, 0.68611, 0.11424, 0, 0.80027],
			86: [0, 0.68611, 0.25555, 0, 0.67778],
			87: [0, 0.68611, 0.15972, 0, 1.09305],
			88: [0, 0.68611, 0.07778, 0, 0.94722],
			89: [0, 0.68611, 0.25555, 0, 0.67458],
			90: [0, 0.68611, 0.06979, 0, 0.77257],
			97: [0, 0.44444, 0, 0, 0.63287],
			98: [0, 0.69444, 0, 0, 0.52083],
			99: [0, 0.44444, 0, 0, 0.51342],
			100: [0, 0.69444, 0, 0, 0.60972],
			101: [0, 0.44444, 0, 0, 0.55361],
			102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
			103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
			104: [0, 0.69444, 0, 0, 0.66759],
			105: [0, 0.69326, 0, 0, 0.4048],
			106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
			107: [0, 0.69444, 0.01852, 0, 0.6037],
			108: [0, 0.69444, 0.0088, 0, 0.34815],
			109: [0, 0.44444, 0, 0, 1.0324],
			110: [0, 0.44444, 0, 0, 0.71296],
			111: [0, 0.44444, 0, 0, 0.58472],
			112: [0.19444, 0.44444, 0, 0, 0.60092],
			113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
			114: [0, 0.44444, 0.03194, 0, 0.5287],
			115: [0, 0.44444, 0, 0, 0.53125],
			116: [0, 0.63492, 0, 0, 0.41528],
			117: [0, 0.44444, 0, 0, 0.68102],
			118: [0, 0.44444, 0.03704, 0, 0.56666],
			119: [0, 0.44444, 0.02778, 0, 0.83148],
			120: [0, 0.44444, 0, 0, 0.65903],
			121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
			122: [0, 0.44444, 0.04213, 0, 0.55509],
			160: [0, 0, 0, 0, 0.25],
			915: [0, 0.68611, 0.15972, 0, 0.65694],
			916: [0, 0.68611, 0, 0, 0.95833],
			920: [0, 0.68611, 0.03194, 0, 0.86722],
			923: [0, 0.68611, 0, 0, 0.80555],
			926: [0, 0.68611, 0.07458, 0, 0.84125],
			928: [0, 0.68611, 0.08229, 0, 0.98229],
			931: [0, 0.68611, 0.05451, 0, 0.88507],
			933: [0, 0.68611, 0.15972, 0, 0.67083],
			934: [0, 0.68611, 0, 0, 0.76666],
			936: [0, 0.68611, 0.11653, 0, 0.71402],
			937: [0, 0.68611, 0.04835, 0, 0.8789],
			945: [0, 0.44444, 0, 0, 0.76064],
			946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
			947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
			948: [0, 0.69444, 0.03819, 0, 0.52222],
			949: [0, 0.44444, 0, 0, 0.52882],
			950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
			951: [0.19444, 0.44444, 0.03704, 0, 0.6],
			952: [0, 0.69444, 0.03194, 0, 0.5618],
			953: [0, 0.44444, 0, 0, 0.41204],
			954: [0, 0.44444, 0, 0, 0.66759],
			955: [0, 0.69444, 0, 0, 0.67083],
			956: [0.19444, 0.44444, 0, 0, 0.70787],
			957: [0, 0.44444, 0.06898, 0, 0.57685],
			958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
			959: [0, 0.44444, 0, 0, 0.58472],
			960: [0, 0.44444, 0.03704, 0, 0.68241],
			961: [0.19444, 0.44444, 0, 0, 0.6118],
			962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
			963: [0, 0.44444, 0.03704, 0, 0.68588],
			964: [0, 0.44444, 0.13472, 0, 0.52083],
			965: [0, 0.44444, 0.03704, 0, 0.63055],
			966: [0.19444, 0.44444, 0, 0, 0.74722],
			967: [0.19444, 0.44444, 0, 0, 0.71805],
			968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
			969: [0, 0.44444, 0.03704, 0, 0.71782],
			977: [0, 0.69444, 0, 0, 0.69155],
			981: [0.19444, 0.69444, 0, 0, 0.7125],
			982: [0, 0.44444, 0.03194, 0, 0.975],
			1009: [0.19444, 0.44444, 0, 0, 0.6118],
			1013: [0, 0.44444, 0, 0, 0.48333],
			57649: [0, 0.44444, 0, 0, 0.39352],
			57911: [0.19444, 0.44444, 0, 0, 0.43889],
		},
		"Math-Italic": {
			32: [0, 0, 0, 0, 0.25],
			48: [0, 0.43056, 0, 0, 0.5],
			49: [0, 0.43056, 0, 0, 0.5],
			50: [0, 0.43056, 0, 0, 0.5],
			51: [0.19444, 0.43056, 0, 0, 0.5],
			52: [0.19444, 0.43056, 0, 0, 0.5],
			53: [0.19444, 0.43056, 0, 0, 0.5],
			54: [0, 0.64444, 0, 0, 0.5],
			55: [0.19444, 0.43056, 0, 0, 0.5],
			56: [0, 0.64444, 0, 0, 0.5],
			57: [0.19444, 0.43056, 0, 0, 0.5],
			65: [0, 0.68333, 0, 0.13889, 0.75],
			66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
			67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
			68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
			69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
			70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
			71: [0, 0.68333, 0, 0.08334, 0.78625],
			72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
			73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
			74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
			75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
			76: [0, 0.68333, 0, 0.02778, 0.68056],
			77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
			78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
			79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
			80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
			81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
			82: [0, 0.68333, 0.00773, 0.08334, 0.75929],
			83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
			84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
			85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
			86: [0, 0.68333, 0.22222, 0, 0.58333],
			87: [0, 0.68333, 0.13889, 0, 0.94445],
			88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
			89: [0, 0.68333, 0.22222, 0, 0.58056],
			90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
			97: [0, 0.43056, 0, 0, 0.52859],
			98: [0, 0.69444, 0, 0, 0.42917],
			99: [0, 0.43056, 0, 0.05556, 0.43276],
			100: [0, 0.69444, 0, 0.16667, 0.52049],
			101: [0, 0.43056, 0, 0.05556, 0.46563],
			102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
			103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
			104: [0, 0.69444, 0, 0, 0.57616],
			105: [0, 0.65952, 0, 0, 0.34451],
			106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
			107: [0, 0.69444, 0.03148, 0, 0.5206],
			108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
			109: [0, 0.43056, 0, 0, 0.87801],
			110: [0, 0.43056, 0, 0, 0.60023],
			111: [0, 0.43056, 0, 0.05556, 0.48472],
			112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
			113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
			114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
			115: [0, 0.43056, 0, 0.05556, 0.46875],
			116: [0, 0.61508, 0, 0.08334, 0.36111],
			117: [0, 0.43056, 0, 0.02778, 0.57246],
			118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
			119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
			120: [0, 0.43056, 0, 0.02778, 0.57153],
			121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
			122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
			160: [0, 0, 0, 0, 0.25],
			915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
			916: [0, 0.68333, 0, 0.16667, 0.83334],
			920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
			923: [0, 0.68333, 0, 0.16667, 0.69445],
			926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
			928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
			931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
			933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
			934: [0, 0.68333, 0, 0.08334, 0.66667],
			936: [0, 0.68333, 0.11, 0.05556, 0.61222],
			937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
			945: [0, 0.43056, 0.0037, 0.02778, 0.6397],
			946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
			947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
			948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
			949: [0, 0.43056, 0, 0.08334, 0.46632],
			950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
			951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
			952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
			953: [0, 0.43056, 0, 0.05556, 0.35394],
			954: [0, 0.43056, 0, 0, 0.57616],
			955: [0, 0.69444, 0, 0, 0.58334],
			956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
			957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
			958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
			959: [0, 0.43056, 0, 0.05556, 0.48472],
			960: [0, 0.43056, 0.03588, 0, 0.57003],
			961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
			962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
			963: [0, 0.43056, 0.03588, 0, 0.57141],
			964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
			965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
			966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
			967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
			968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
			969: [0, 0.43056, 0.03588, 0, 0.62245],
			977: [0, 0.69444, 0, 0.08334, 0.59144],
			981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
			982: [0, 0.43056, 0.02778, 0, 0.82813],
			1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
			1013: [0, 0.43056, 0, 0.05556, 0.4059],
			57649: [0, 0.43056, 0, 0.02778, 0.32246],
			57911: [0.19444, 0.43056, 0, 0.08334, 0.38403],
		},
		"SansSerif-Bold": {
			32: [0, 0, 0, 0, 0.25],
			33: [0, 0.69444, 0, 0, 0.36667],
			34: [0, 0.69444, 0, 0, 0.55834],
			35: [0.19444, 0.69444, 0, 0, 0.91667],
			36: [0.05556, 0.75, 0, 0, 0.55],
			37: [0.05556, 0.75, 0, 0, 1.02912],
			38: [0, 0.69444, 0, 0, 0.83056],
			39: [0, 0.69444, 0, 0, 0.30556],
			40: [0.25, 0.75, 0, 0, 0.42778],
			41: [0.25, 0.75, 0, 0, 0.42778],
			42: [0, 0.75, 0, 0, 0.55],
			43: [0.11667, 0.61667, 0, 0, 0.85556],
			44: [0.10556, 0.13056, 0, 0, 0.30556],
			45: [0, 0.45833, 0, 0, 0.36667],
			46: [0, 0.13056, 0, 0, 0.30556],
			47: [0.25, 0.75, 0, 0, 0.55],
			48: [0, 0.69444, 0, 0, 0.55],
			49: [0, 0.69444, 0, 0, 0.55],
			50: [0, 0.69444, 0, 0, 0.55],
			51: [0, 0.69444, 0, 0, 0.55],
			52: [0, 0.69444, 0, 0, 0.55],
			53: [0, 0.69444, 0, 0, 0.55],
			54: [0, 0.69444, 0, 0, 0.55],
			55: [0, 0.69444, 0, 0, 0.55],
			56: [0, 0.69444, 0, 0, 0.55],
			57: [0, 0.69444, 0, 0, 0.55],
			58: [0, 0.45833, 0, 0, 0.30556],
			59: [0.10556, 0.45833, 0, 0, 0.30556],
			61: [-0.09375, 0.40625, 0, 0, 0.85556],
			63: [0, 0.69444, 0, 0, 0.51945],
			64: [0, 0.69444, 0, 0, 0.73334],
			65: [0, 0.69444, 0, 0, 0.73334],
			66: [0, 0.69444, 0, 0, 0.73334],
			67: [0, 0.69444, 0, 0, 0.70278],
			68: [0, 0.69444, 0, 0, 0.79445],
			69: [0, 0.69444, 0, 0, 0.64167],
			70: [0, 0.69444, 0, 0, 0.61111],
			71: [0, 0.69444, 0, 0, 0.73334],
			72: [0, 0.69444, 0, 0, 0.79445],
			73: [0, 0.69444, 0, 0, 0.33056],
			74: [0, 0.69444, 0, 0, 0.51945],
			75: [0, 0.69444, 0, 0, 0.76389],
			76: [0, 0.69444, 0, 0, 0.58056],
			77: [0, 0.69444, 0, 0, 0.97778],
			78: [0, 0.69444, 0, 0, 0.79445],
			79: [0, 0.69444, 0, 0, 0.79445],
			80: [0, 0.69444, 0, 0, 0.70278],
			81: [0.10556, 0.69444, 0, 0, 0.79445],
			82: [0, 0.69444, 0, 0, 0.70278],
			83: [0, 0.69444, 0, 0, 0.61111],
			84: [0, 0.69444, 0, 0, 0.73334],
			85: [0, 0.69444, 0, 0, 0.76389],
			86: [0, 0.69444, 0.01528, 0, 0.73334],
			87: [0, 0.69444, 0.01528, 0, 1.03889],
			88: [0, 0.69444, 0, 0, 0.73334],
			89: [0, 0.69444, 0.0275, 0, 0.73334],
			90: [0, 0.69444, 0, 0, 0.67223],
			91: [0.25, 0.75, 0, 0, 0.34306],
			93: [0.25, 0.75, 0, 0, 0.34306],
			94: [0, 0.69444, 0, 0, 0.55],
			95: [0.35, 0.10833, 0.03056, 0, 0.55],
			97: [0, 0.45833, 0, 0, 0.525],
			98: [0, 0.69444, 0, 0, 0.56111],
			99: [0, 0.45833, 0, 0, 0.48889],
			100: [0, 0.69444, 0, 0, 0.56111],
			101: [0, 0.45833, 0, 0, 0.51111],
			102: [0, 0.69444, 0.07639, 0, 0.33611],
			103: [0.19444, 0.45833, 0.01528, 0, 0.55],
			104: [0, 0.69444, 0, 0, 0.56111],
			105: [0, 0.69444, 0, 0, 0.25556],
			106: [0.19444, 0.69444, 0, 0, 0.28611],
			107: [0, 0.69444, 0, 0, 0.53056],
			108: [0, 0.69444, 0, 0, 0.25556],
			109: [0, 0.45833, 0, 0, 0.86667],
			110: [0, 0.45833, 0, 0, 0.56111],
			111: [0, 0.45833, 0, 0, 0.55],
			112: [0.19444, 0.45833, 0, 0, 0.56111],
			113: [0.19444, 0.45833, 0, 0, 0.56111],
			114: [0, 0.45833, 0.01528, 0, 0.37222],
			115: [0, 0.45833, 0, 0, 0.42167],
			116: [0, 0.58929, 0, 0, 0.40417],
			117: [0, 0.45833, 0, 0, 0.56111],
			118: [0, 0.45833, 0.01528, 0, 0.5],
			119: [0, 0.45833, 0.01528, 0, 0.74445],
			120: [0, 0.45833, 0, 0, 0.5],
			121: [0.19444, 0.45833, 0.01528, 0, 0.5],
			122: [0, 0.45833, 0, 0, 0.47639],
			126: [0.35, 0.34444, 0, 0, 0.55],
			160: [0, 0, 0, 0, 0.25],
			168: [0, 0.69444, 0, 0, 0.55],
			176: [0, 0.69444, 0, 0, 0.73334],
			180: [0, 0.69444, 0, 0, 0.55],
			184: [0.17014, 0, 0, 0, 0.48889],
			305: [0, 0.45833, 0, 0, 0.25556],
			567: [0.19444, 0.45833, 0, 0, 0.28611],
			710: [0, 0.69444, 0, 0, 0.55],
			711: [0, 0.63542, 0, 0, 0.55],
			713: [0, 0.63778, 0, 0, 0.55],
			728: [0, 0.69444, 0, 0, 0.55],
			729: [0, 0.69444, 0, 0, 0.30556],
			730: [0, 0.69444, 0, 0, 0.73334],
			732: [0, 0.69444, 0, 0, 0.55],
			733: [0, 0.69444, 0, 0, 0.55],
			915: [0, 0.69444, 0, 0, 0.58056],
			916: [0, 0.69444, 0, 0, 0.91667],
			920: [0, 0.69444, 0, 0, 0.85556],
			923: [0, 0.69444, 0, 0, 0.67223],
			926: [0, 0.69444, 0, 0, 0.73334],
			928: [0, 0.69444, 0, 0, 0.79445],
			931: [0, 0.69444, 0, 0, 0.79445],
			933: [0, 0.69444, 0, 0, 0.85556],
			934: [0, 0.69444, 0, 0, 0.79445],
			936: [0, 0.69444, 0, 0, 0.85556],
			937: [0, 0.69444, 0, 0, 0.79445],
			8211: [0, 0.45833, 0.03056, 0, 0.55],
			8212: [0, 0.45833, 0.03056, 0, 1.10001],
			8216: [0, 0.69444, 0, 0, 0.30556],
			8217: [0, 0.69444, 0, 0, 0.30556],
			8220: [0, 0.69444, 0, 0, 0.55834],
			8221: [0, 0.69444, 0, 0, 0.55834],
		},
		"SansSerif-Italic": {
			32: [0, 0, 0, 0, 0.25],
			33: [0, 0.69444, 0.05733, 0, 0.31945],
			34: [0, 0.69444, 0.00316, 0, 0.5],
			35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
			36: [0.05556, 0.75, 0.11156, 0, 0.5],
			37: [0.05556, 0.75, 0.03126, 0, 0.83334],
			38: [0, 0.69444, 0.03058, 0, 0.75834],
			39: [0, 0.69444, 0.07816, 0, 0.27778],
			40: [0.25, 0.75, 0.13164, 0, 0.38889],
			41: [0.25, 0.75, 0.02536, 0, 0.38889],
			42: [0, 0.75, 0.11775, 0, 0.5],
			43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
			44: [0.125, 0.08333, 0, 0, 0.27778],
			45: [0, 0.44444, 0.01946, 0, 0.33333],
			46: [0, 0.08333, 0, 0, 0.27778],
			47: [0.25, 0.75, 0.13164, 0, 0.5],
			48: [0, 0.65556, 0.11156, 0, 0.5],
			49: [0, 0.65556, 0.11156, 0, 0.5],
			50: [0, 0.65556, 0.11156, 0, 0.5],
			51: [0, 0.65556, 0.11156, 0, 0.5],
			52: [0, 0.65556, 0.11156, 0, 0.5],
			53: [0, 0.65556, 0.11156, 0, 0.5],
			54: [0, 0.65556, 0.11156, 0, 0.5],
			55: [0, 0.65556, 0.11156, 0, 0.5],
			56: [0, 0.65556, 0.11156, 0, 0.5],
			57: [0, 0.65556, 0.11156, 0, 0.5],
			58: [0, 0.44444, 0.02502, 0, 0.27778],
			59: [0.125, 0.44444, 0.02502, 0, 0.27778],
			61: [-0.13, 0.37, 0.05087, 0, 0.77778],
			63: [0, 0.69444, 0.11809, 0, 0.47222],
			64: [0, 0.69444, 0.07555, 0, 0.66667],
			65: [0, 0.69444, 0, 0, 0.66667],
			66: [0, 0.69444, 0.08293, 0, 0.66667],
			67: [0, 0.69444, 0.11983, 0, 0.63889],
			68: [0, 0.69444, 0.07555, 0, 0.72223],
			69: [0, 0.69444, 0.11983, 0, 0.59722],
			70: [0, 0.69444, 0.13372, 0, 0.56945],
			71: [0, 0.69444, 0.11983, 0, 0.66667],
			72: [0, 0.69444, 0.08094, 0, 0.70834],
			73: [0, 0.69444, 0.13372, 0, 0.27778],
			74: [0, 0.69444, 0.08094, 0, 0.47222],
			75: [0, 0.69444, 0.11983, 0, 0.69445],
			76: [0, 0.69444, 0, 0, 0.54167],
			77: [0, 0.69444, 0.08094, 0, 0.875],
			78: [0, 0.69444, 0.08094, 0, 0.70834],
			79: [0, 0.69444, 0.07555, 0, 0.73611],
			80: [0, 0.69444, 0.08293, 0, 0.63889],
			81: [0.125, 0.69444, 0.07555, 0, 0.73611],
			82: [0, 0.69444, 0.08293, 0, 0.64584],
			83: [0, 0.69444, 0.09205, 0, 0.55556],
			84: [0, 0.69444, 0.13372, 0, 0.68056],
			85: [0, 0.69444, 0.08094, 0, 0.6875],
			86: [0, 0.69444, 0.1615, 0, 0.66667],
			87: [0, 0.69444, 0.1615, 0, 0.94445],
			88: [0, 0.69444, 0.13372, 0, 0.66667],
			89: [0, 0.69444, 0.17261, 0, 0.66667],
			90: [0, 0.69444, 0.11983, 0, 0.61111],
			91: [0.25, 0.75, 0.15942, 0, 0.28889],
			93: [0.25, 0.75, 0.08719, 0, 0.28889],
			94: [0, 0.69444, 0.0799, 0, 0.5],
			95: [0.35, 0.09444, 0.08616, 0, 0.5],
			97: [0, 0.44444, 0.00981, 0, 0.48056],
			98: [0, 0.69444, 0.03057, 0, 0.51667],
			99: [0, 0.44444, 0.08336, 0, 0.44445],
			100: [0, 0.69444, 0.09483, 0, 0.51667],
			101: [0, 0.44444, 0.06778, 0, 0.44445],
			102: [0, 0.69444, 0.21705, 0, 0.30556],
			103: [0.19444, 0.44444, 0.10836, 0, 0.5],
			104: [0, 0.69444, 0.01778, 0, 0.51667],
			105: [0, 0.67937, 0.09718, 0, 0.23889],
			106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
			107: [0, 0.69444, 0.08336, 0, 0.48889],
			108: [0, 0.69444, 0.09483, 0, 0.23889],
			109: [0, 0.44444, 0.01778, 0, 0.79445],
			110: [0, 0.44444, 0.01778, 0, 0.51667],
			111: [0, 0.44444, 0.06613, 0, 0.5],
			112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
			113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
			114: [0, 0.44444, 0.10836, 0, 0.34167],
			115: [0, 0.44444, 0.0778, 0, 0.38333],
			116: [0, 0.57143, 0.07225, 0, 0.36111],
			117: [0, 0.44444, 0.04169, 0, 0.51667],
			118: [0, 0.44444, 0.10836, 0, 0.46111],
			119: [0, 0.44444, 0.10836, 0, 0.68334],
			120: [0, 0.44444, 0.09169, 0, 0.46111],
			121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
			122: [0, 0.44444, 0.08752, 0, 0.43472],
			126: [0.35, 0.32659, 0.08826, 0, 0.5],
			160: [0, 0, 0, 0, 0.25],
			168: [0, 0.67937, 0.06385, 0, 0.5],
			176: [0, 0.69444, 0, 0, 0.73752],
			184: [0.17014, 0, 0, 0, 0.44445],
			305: [0, 0.44444, 0.04169, 0, 0.23889],
			567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
			710: [0, 0.69444, 0.0799, 0, 0.5],
			711: [0, 0.63194, 0.08432, 0, 0.5],
			713: [0, 0.60889, 0.08776, 0, 0.5],
			714: [0, 0.69444, 0.09205, 0, 0.5],
			715: [0, 0.69444, 0, 0, 0.5],
			728: [0, 0.69444, 0.09483, 0, 0.5],
			729: [0, 0.67937, 0.07774, 0, 0.27778],
			730: [0, 0.69444, 0, 0, 0.73752],
			732: [0, 0.67659, 0.08826, 0, 0.5],
			733: [0, 0.69444, 0.09205, 0, 0.5],
			915: [0, 0.69444, 0.13372, 0, 0.54167],
			916: [0, 0.69444, 0, 0, 0.83334],
			920: [0, 0.69444, 0.07555, 0, 0.77778],
			923: [0, 0.69444, 0, 0, 0.61111],
			926: [0, 0.69444, 0.12816, 0, 0.66667],
			928: [0, 0.69444, 0.08094, 0, 0.70834],
			931: [0, 0.69444, 0.11983, 0, 0.72222],
			933: [0, 0.69444, 0.09031, 0, 0.77778],
			934: [0, 0.69444, 0.04603, 0, 0.72222],
			936: [0, 0.69444, 0.09031, 0, 0.77778],
			937: [0, 0.69444, 0.08293, 0, 0.72222],
			8211: [0, 0.44444, 0.08616, 0, 0.5],
			8212: [0, 0.44444, 0.08616, 0, 1],
			8216: [0, 0.69444, 0.07816, 0, 0.27778],
			8217: [0, 0.69444, 0.07816, 0, 0.27778],
			8220: [0, 0.69444, 0.14205, 0, 0.5],
			8221: [0, 0.69444, 0.00316, 0, 0.5],
		},
		"SansSerif-Regular": {
			32: [0, 0, 0, 0, 0.25],
			33: [0, 0.69444, 0, 0, 0.31945],
			34: [0, 0.69444, 0, 0, 0.5],
			35: [0.19444, 0.69444, 0, 0, 0.83334],
			36: [0.05556, 0.75, 0, 0, 0.5],
			37: [0.05556, 0.75, 0, 0, 0.83334],
			38: [0, 0.69444, 0, 0, 0.75834],
			39: [0, 0.69444, 0, 0, 0.27778],
			40: [0.25, 0.75, 0, 0, 0.38889],
			41: [0.25, 0.75, 0, 0, 0.38889],
			42: [0, 0.75, 0, 0, 0.5],
			43: [0.08333, 0.58333, 0, 0, 0.77778],
			44: [0.125, 0.08333, 0, 0, 0.27778],
			45: [0, 0.44444, 0, 0, 0.33333],
			46: [0, 0.08333, 0, 0, 0.27778],
			47: [0.25, 0.75, 0, 0, 0.5],
			48: [0, 0.65556, 0, 0, 0.5],
			49: [0, 0.65556, 0, 0, 0.5],
			50: [0, 0.65556, 0, 0, 0.5],
			51: [0, 0.65556, 0, 0, 0.5],
			52: [0, 0.65556, 0, 0, 0.5],
			53: [0, 0.65556, 0, 0, 0.5],
			54: [0, 0.65556, 0, 0, 0.5],
			55: [0, 0.65556, 0, 0, 0.5],
			56: [0, 0.65556, 0, 0, 0.5],
			57: [0, 0.65556, 0, 0, 0.5],
			58: [0, 0.44444, 0, 0, 0.27778],
			59: [0.125, 0.44444, 0, 0, 0.27778],
			61: [-0.13, 0.37, 0, 0, 0.77778],
			63: [0, 0.69444, 0, 0, 0.47222],
			64: [0, 0.69444, 0, 0, 0.66667],
			65: [0, 0.69444, 0, 0, 0.66667],
			66: [0, 0.69444, 0, 0, 0.66667],
			67: [0, 0.69444, 0, 0, 0.63889],
			68: [0, 0.69444, 0, 0, 0.72223],
			69: [0, 0.69444, 0, 0, 0.59722],
			70: [0, 0.69444, 0, 0, 0.56945],
			71: [0, 0.69444, 0, 0, 0.66667],
			72: [0, 0.69444, 0, 0, 0.70834],
			73: [0, 0.69444, 0, 0, 0.27778],
			74: [0, 0.69444, 0, 0, 0.47222],
			75: [0, 0.69444, 0, 0, 0.69445],
			76: [0, 0.69444, 0, 0, 0.54167],
			77: [0, 0.69444, 0, 0, 0.875],
			78: [0, 0.69444, 0, 0, 0.70834],
			79: [0, 0.69444, 0, 0, 0.73611],
			80: [0, 0.69444, 0, 0, 0.63889],
			81: [0.125, 0.69444, 0, 0, 0.73611],
			82: [0, 0.69444, 0, 0, 0.64584],
			83: [0, 0.69444, 0, 0, 0.55556],
			84: [0, 0.69444, 0, 0, 0.68056],
			85: [0, 0.69444, 0, 0, 0.6875],
			86: [0, 0.69444, 0.01389, 0, 0.66667],
			87: [0, 0.69444, 0.01389, 0, 0.94445],
			88: [0, 0.69444, 0, 0, 0.66667],
			89: [0, 0.69444, 0.025, 0, 0.66667],
			90: [0, 0.69444, 0, 0, 0.61111],
			91: [0.25, 0.75, 0, 0, 0.28889],
			93: [0.25, 0.75, 0, 0, 0.28889],
			94: [0, 0.69444, 0, 0, 0.5],
			95: [0.35, 0.09444, 0.02778, 0, 0.5],
			97: [0, 0.44444, 0, 0, 0.48056],
			98: [0, 0.69444, 0, 0, 0.51667],
			99: [0, 0.44444, 0, 0, 0.44445],
			100: [0, 0.69444, 0, 0, 0.51667],
			101: [0, 0.44444, 0, 0, 0.44445],
			102: [0, 0.69444, 0.06944, 0, 0.30556],
			103: [0.19444, 0.44444, 0.01389, 0, 0.5],
			104: [0, 0.69444, 0, 0, 0.51667],
			105: [0, 0.67937, 0, 0, 0.23889],
			106: [0.19444, 0.67937, 0, 0, 0.26667],
			107: [0, 0.69444, 0, 0, 0.48889],
			108: [0, 0.69444, 0, 0, 0.23889],
			109: [0, 0.44444, 0, 0, 0.79445],
			110: [0, 0.44444, 0, 0, 0.51667],
			111: [0, 0.44444, 0, 0, 0.5],
			112: [0.19444, 0.44444, 0, 0, 0.51667],
			113: [0.19444, 0.44444, 0, 0, 0.51667],
			114: [0, 0.44444, 0.01389, 0, 0.34167],
			115: [0, 0.44444, 0, 0, 0.38333],
			116: [0, 0.57143, 0, 0, 0.36111],
			117: [0, 0.44444, 0, 0, 0.51667],
			118: [0, 0.44444, 0.01389, 0, 0.46111],
			119: [0, 0.44444, 0.01389, 0, 0.68334],
			120: [0, 0.44444, 0, 0, 0.46111],
			121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
			122: [0, 0.44444, 0, 0, 0.43472],
			126: [0.35, 0.32659, 0, 0, 0.5],
			160: [0, 0, 0, 0, 0.25],
			168: [0, 0.67937, 0, 0, 0.5],
			176: [0, 0.69444, 0, 0, 0.66667],
			184: [0.17014, 0, 0, 0, 0.44445],
			305: [0, 0.44444, 0, 0, 0.23889],
			567: [0.19444, 0.44444, 0, 0, 0.26667],
			710: [0, 0.69444, 0, 0, 0.5],
			711: [0, 0.63194, 0, 0, 0.5],
			713: [0, 0.60889, 0, 0, 0.5],
			714: [0, 0.69444, 0, 0, 0.5],
			715: [0, 0.69444, 0, 0, 0.5],
			728: [0, 0.69444, 0, 0, 0.5],
			729: [0, 0.67937, 0, 0, 0.27778],
			730: [0, 0.69444, 0, 0, 0.66667],
			732: [0, 0.67659, 0, 0, 0.5],
			733: [0, 0.69444, 0, 0, 0.5],
			915: [0, 0.69444, 0, 0, 0.54167],
			916: [0, 0.69444, 0, 0, 0.83334],
			920: [0, 0.69444, 0, 0, 0.77778],
			923: [0, 0.69444, 0, 0, 0.61111],
			926: [0, 0.69444, 0, 0, 0.66667],
			928: [0, 0.69444, 0, 0, 0.70834],
			931: [0, 0.69444, 0, 0, 0.72222],
			933: [0, 0.69444, 0, 0, 0.77778],
			934: [0, 0.69444, 0, 0, 0.72222],
			936: [0, 0.69444, 0, 0, 0.77778],
			937: [0, 0.69444, 0, 0, 0.72222],
			8211: [0, 0.44444, 0.02778, 0, 0.5],
			8212: [0, 0.44444, 0.02778, 0, 1],
			8216: [0, 0.69444, 0, 0, 0.27778],
			8217: [0, 0.69444, 0, 0, 0.27778],
			8220: [0, 0.69444, 0, 0, 0.5],
			8221: [0, 0.69444, 0, 0, 0.5],
		},
		"Script-Regular": {
			32: [0, 0, 0, 0, 0.25],
			65: [0, 0.7, 0.22925, 0, 0.80253],
			66: [0, 0.7, 0.04087, 0, 0.90757],
			67: [0, 0.7, 0.1689, 0, 0.66619],
			68: [0, 0.7, 0.09371, 0, 0.77443],
			69: [0, 0.7, 0.18583, 0, 0.56162],
			70: [0, 0.7, 0.13634, 0, 0.89544],
			71: [0, 0.7, 0.17322, 0, 0.60961],
			72: [0, 0.7, 0.29694, 0, 0.96919],
			73: [0, 0.7, 0.19189, 0, 0.80907],
			74: [0.27778, 0.7, 0.19189, 0, 1.05159],
			75: [0, 0.7, 0.31259, 0, 0.91364],
			76: [0, 0.7, 0.19189, 0, 0.87373],
			77: [0, 0.7, 0.15981, 0, 1.08031],
			78: [0, 0.7, 0.3525, 0, 0.9015],
			79: [0, 0.7, 0.08078, 0, 0.73787],
			80: [0, 0.7, 0.08078, 0, 1.01262],
			81: [0, 0.7, 0.03305, 0, 0.88282],
			82: [0, 0.7, 0.06259, 0, 0.85],
			83: [0, 0.7, 0.19189, 0, 0.86767],
			84: [0, 0.7, 0.29087, 0, 0.74697],
			85: [0, 0.7, 0.25815, 0, 0.79996],
			86: [0, 0.7, 0.27523, 0, 0.62204],
			87: [0, 0.7, 0.27523, 0, 0.80532],
			88: [0, 0.7, 0.26006, 0, 0.94445],
			89: [0, 0.7, 0.2939, 0, 0.70961],
			90: [0, 0.7, 0.24037, 0, 0.8212],
			160: [0, 0, 0, 0, 0.25],
		},
		"Size1-Regular": {
			32: [0, 0, 0, 0, 0.25],
			40: [0.35001, 0.85, 0, 0, 0.45834],
			41: [0.35001, 0.85, 0, 0, 0.45834],
			47: [0.35001, 0.85, 0, 0, 0.57778],
			91: [0.35001, 0.85, 0, 0, 0.41667],
			92: [0.35001, 0.85, 0, 0, 0.57778],
			93: [0.35001, 0.85, 0, 0, 0.41667],
			123: [0.35001, 0.85, 0, 0, 0.58334],
			125: [0.35001, 0.85, 0, 0, 0.58334],
			160: [0, 0, 0, 0, 0.25],
			710: [0, 0.72222, 0, 0, 0.55556],
			732: [0, 0.72222, 0, 0, 0.55556],
			770: [0, 0.72222, 0, 0, 0.55556],
			771: [0, 0.72222, 0, 0, 0.55556],
			8214: [-99e-5, 0.601, 0, 0, 0.77778],
			8593: [1e-5, 0.6, 0, 0, 0.66667],
			8595: [1e-5, 0.6, 0, 0, 0.66667],
			8657: [1e-5, 0.6, 0, 0, 0.77778],
			8659: [1e-5, 0.6, 0, 0, 0.77778],
			8719: [0.25001, 0.75, 0, 0, 0.94445],
			8720: [0.25001, 0.75, 0, 0, 0.94445],
			8721: [0.25001, 0.75, 0, 0, 1.05556],
			8730: [0.35001, 0.85, 0, 0, 1],
			8739: [-0.00599, 0.606, 0, 0, 0.33333],
			8741: [-0.00599, 0.606, 0, 0, 0.55556],
			8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
			8748: [0.306, 0.805, 0.19445, 0, 0.47222],
			8749: [0.306, 0.805, 0.19445, 0, 0.47222],
			8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
			8896: [0.25001, 0.75, 0, 0, 0.83334],
			8897: [0.25001, 0.75, 0, 0, 0.83334],
			8898: [0.25001, 0.75, 0, 0, 0.83334],
			8899: [0.25001, 0.75, 0, 0, 0.83334],
			8968: [0.35001, 0.85, 0, 0, 0.47222],
			8969: [0.35001, 0.85, 0, 0, 0.47222],
			8970: [0.35001, 0.85, 0, 0, 0.47222],
			8971: [0.35001, 0.85, 0, 0, 0.47222],
			9168: [-99e-5, 0.601, 0, 0, 0.66667],
			10216: [0.35001, 0.85, 0, 0, 0.47222],
			10217: [0.35001, 0.85, 0, 0, 0.47222],
			10752: [0.25001, 0.75, 0, 0, 1.11111],
			10753: [0.25001, 0.75, 0, 0, 1.11111],
			10754: [0.25001, 0.75, 0, 0, 1.11111],
			10756: [0.25001, 0.75, 0, 0, 0.83334],
			10758: [0.25001, 0.75, 0, 0, 0.83334],
		},
		"Size2-Regular": {
			32: [0, 0, 0, 0, 0.25],
			40: [0.65002, 1.15, 0, 0, 0.59722],
			41: [0.65002, 1.15, 0, 0, 0.59722],
			47: [0.65002, 1.15, 0, 0, 0.81111],
			91: [0.65002, 1.15, 0, 0, 0.47222],
			92: [0.65002, 1.15, 0, 0, 0.81111],
			93: [0.65002, 1.15, 0, 0, 0.47222],
			123: [0.65002, 1.15, 0, 0, 0.66667],
			125: [0.65002, 1.15, 0, 0, 0.66667],
			160: [0, 0, 0, 0, 0.25],
			710: [0, 0.75, 0, 0, 1],
			732: [0, 0.75, 0, 0, 1],
			770: [0, 0.75, 0, 0, 1],
			771: [0, 0.75, 0, 0, 1],
			8719: [0.55001, 1.05, 0, 0, 1.27778],
			8720: [0.55001, 1.05, 0, 0, 1.27778],
			8721: [0.55001, 1.05, 0, 0, 1.44445],
			8730: [0.65002, 1.15, 0, 0, 1],
			8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
			8748: [0.862, 1.36, 0.44445, 0, 0.55556],
			8749: [0.862, 1.36, 0.44445, 0, 0.55556],
			8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
			8896: [0.55001, 1.05, 0, 0, 1.11111],
			8897: [0.55001, 1.05, 0, 0, 1.11111],
			8898: [0.55001, 1.05, 0, 0, 1.11111],
			8899: [0.55001, 1.05, 0, 0, 1.11111],
			8968: [0.65002, 1.15, 0, 0, 0.52778],
			8969: [0.65002, 1.15, 0, 0, 0.52778],
			8970: [0.65002, 1.15, 0, 0, 0.52778],
			8971: [0.65002, 1.15, 0, 0, 0.52778],
			10216: [0.65002, 1.15, 0, 0, 0.61111],
			10217: [0.65002, 1.15, 0, 0, 0.61111],
			10752: [0.55001, 1.05, 0, 0, 1.51112],
			10753: [0.55001, 1.05, 0, 0, 1.51112],
			10754: [0.55001, 1.05, 0, 0, 1.51112],
			10756: [0.55001, 1.05, 0, 0, 1.11111],
			10758: [0.55001, 1.05, 0, 0, 1.11111],
		},
		"Size3-Regular": {
			32: [0, 0, 0, 0, 0.25],
			40: [0.95003, 1.45, 0, 0, 0.73611],
			41: [0.95003, 1.45, 0, 0, 0.73611],
			47: [0.95003, 1.45, 0, 0, 1.04445],
			91: [0.95003, 1.45, 0, 0, 0.52778],
			92: [0.95003, 1.45, 0, 0, 1.04445],
			93: [0.95003, 1.45, 0, 0, 0.52778],
			123: [0.95003, 1.45, 0, 0, 0.75],
			125: [0.95003, 1.45, 0, 0, 0.75],
			160: [0, 0, 0, 0, 0.25],
			710: [0, 0.75, 0, 0, 1.44445],
			732: [0, 0.75, 0, 0, 1.44445],
			770: [0, 0.75, 0, 0, 1.44445],
			771: [0, 0.75, 0, 0, 1.44445],
			8730: [0.95003, 1.45, 0, 0, 1],
			8968: [0.95003, 1.45, 0, 0, 0.58334],
			8969: [0.95003, 1.45, 0, 0, 0.58334],
			8970: [0.95003, 1.45, 0, 0, 0.58334],
			8971: [0.95003, 1.45, 0, 0, 0.58334],
			10216: [0.95003, 1.45, 0, 0, 0.75],
			10217: [0.95003, 1.45, 0, 0, 0.75],
		},
		"Size4-Regular": {
			32: [0, 0, 0, 0, 0.25],
			40: [1.25003, 1.75, 0, 0, 0.79167],
			41: [1.25003, 1.75, 0, 0, 0.79167],
			47: [1.25003, 1.75, 0, 0, 1.27778],
			91: [1.25003, 1.75, 0, 0, 0.58334],
			92: [1.25003, 1.75, 0, 0, 1.27778],
			93: [1.25003, 1.75, 0, 0, 0.58334],
			123: [1.25003, 1.75, 0, 0, 0.80556],
			125: [1.25003, 1.75, 0, 0, 0.80556],
			160: [0, 0, 0, 0, 0.25],
			710: [0, 0.825, 0, 0, 1.8889],
			732: [0, 0.825, 0, 0, 1.8889],
			770: [0, 0.825, 0, 0, 1.8889],
			771: [0, 0.825, 0, 0, 1.8889],
			8730: [1.25003, 1.75, 0, 0, 1],
			8968: [1.25003, 1.75, 0, 0, 0.63889],
			8969: [1.25003, 1.75, 0, 0, 0.63889],
			8970: [1.25003, 1.75, 0, 0, 0.63889],
			8971: [1.25003, 1.75, 0, 0, 0.63889],
			9115: [0.64502, 1.155, 0, 0, 0.875],
			9116: [1e-5, 0.6, 0, 0, 0.875],
			9117: [0.64502, 1.155, 0, 0, 0.875],
			9118: [0.64502, 1.155, 0, 0, 0.875],
			9119: [1e-5, 0.6, 0, 0, 0.875],
			9120: [0.64502, 1.155, 0, 0, 0.875],
			9121: [0.64502, 1.155, 0, 0, 0.66667],
			9122: [-99e-5, 0.601, 0, 0, 0.66667],
			9123: [0.64502, 1.155, 0, 0, 0.66667],
			9124: [0.64502, 1.155, 0, 0, 0.66667],
			9125: [-99e-5, 0.601, 0, 0, 0.66667],
			9126: [0.64502, 1.155, 0, 0, 0.66667],
			9127: [1e-5, 0.9, 0, 0, 0.88889],
			9128: [0.65002, 1.15, 0, 0, 0.88889],
			9129: [0.90001, 0, 0, 0, 0.88889],
			9130: [0, 0.3, 0, 0, 0.88889],
			9131: [1e-5, 0.9, 0, 0, 0.88889],
			9132: [0.65002, 1.15, 0, 0, 0.88889],
			9133: [0.90001, 0, 0, 0, 0.88889],
			9143: [0.88502, 0.915, 0, 0, 1.05556],
			10216: [1.25003, 1.75, 0, 0, 0.80556],
			10217: [1.25003, 1.75, 0, 0, 0.80556],
			57344: [-0.00499, 0.605, 0, 0, 1.05556],
			57345: [-0.00499, 0.605, 0, 0, 1.05556],
			57680: [0, 0.12, 0, 0, 0.45],
			57681: [0, 0.12, 0, 0, 0.45],
			57682: [0, 0.12, 0, 0, 0.45],
			57683: [0, 0.12, 0, 0, 0.45],
		},
		"Typewriter-Regular": {
			32: [0, 0, 0, 0, 0.525],
			33: [0, 0.61111, 0, 0, 0.525],
			34: [0, 0.61111, 0, 0, 0.525],
			35: [0, 0.61111, 0, 0, 0.525],
			36: [0.08333, 0.69444, 0, 0, 0.525],
			37: [0.08333, 0.69444, 0, 0, 0.525],
			38: [0, 0.61111, 0, 0, 0.525],
			39: [0, 0.61111, 0, 0, 0.525],
			40: [0.08333, 0.69444, 0, 0, 0.525],
			41: [0.08333, 0.69444, 0, 0, 0.525],
			42: [0, 0.52083, 0, 0, 0.525],
			43: [-0.08056, 0.53055, 0, 0, 0.525],
			44: [0.13889, 0.125, 0, 0, 0.525],
			45: [-0.08056, 0.53055, 0, 0, 0.525],
			46: [0, 0.125, 0, 0, 0.525],
			47: [0.08333, 0.69444, 0, 0, 0.525],
			48: [0, 0.61111, 0, 0, 0.525],
			49: [0, 0.61111, 0, 0, 0.525],
			50: [0, 0.61111, 0, 0, 0.525],
			51: [0, 0.61111, 0, 0, 0.525],
			52: [0, 0.61111, 0, 0, 0.525],
			53: [0, 0.61111, 0, 0, 0.525],
			54: [0, 0.61111, 0, 0, 0.525],
			55: [0, 0.61111, 0, 0, 0.525],
			56: [0, 0.61111, 0, 0, 0.525],
			57: [0, 0.61111, 0, 0, 0.525],
			58: [0, 0.43056, 0, 0, 0.525],
			59: [0.13889, 0.43056, 0, 0, 0.525],
			60: [-0.05556, 0.55556, 0, 0, 0.525],
			61: [-0.19549, 0.41562, 0, 0, 0.525],
			62: [-0.05556, 0.55556, 0, 0, 0.525],
			63: [0, 0.61111, 0, 0, 0.525],
			64: [0, 0.61111, 0, 0, 0.525],
			65: [0, 0.61111, 0, 0, 0.525],
			66: [0, 0.61111, 0, 0, 0.525],
			67: [0, 0.61111, 0, 0, 0.525],
			68: [0, 0.61111, 0, 0, 0.525],
			69: [0, 0.61111, 0, 0, 0.525],
			70: [0, 0.61111, 0, 0, 0.525],
			71: [0, 0.61111, 0, 0, 0.525],
			72: [0, 0.61111, 0, 0, 0.525],
			73: [0, 0.61111, 0, 0, 0.525],
			74: [0, 0.61111, 0, 0, 0.525],
			75: [0, 0.61111, 0, 0, 0.525],
			76: [0, 0.61111, 0, 0, 0.525],
			77: [0, 0.61111, 0, 0, 0.525],
			78: [0, 0.61111, 0, 0, 0.525],
			79: [0, 0.61111, 0, 0, 0.525],
			80: [0, 0.61111, 0, 0, 0.525],
			81: [0.13889, 0.61111, 0, 0, 0.525],
			82: [0, 0.61111, 0, 0, 0.525],
			83: [0, 0.61111, 0, 0, 0.525],
			84: [0, 0.61111, 0, 0, 0.525],
			85: [0, 0.61111, 0, 0, 0.525],
			86: [0, 0.61111, 0, 0, 0.525],
			87: [0, 0.61111, 0, 0, 0.525],
			88: [0, 0.61111, 0, 0, 0.525],
			89: [0, 0.61111, 0, 0, 0.525],
			90: [0, 0.61111, 0, 0, 0.525],
			91: [0.08333, 0.69444, 0, 0, 0.525],
			92: [0.08333, 0.69444, 0, 0, 0.525],
			93: [0.08333, 0.69444, 0, 0, 0.525],
			94: [0, 0.61111, 0, 0, 0.525],
			95: [0.09514, 0, 0, 0, 0.525],
			96: [0, 0.61111, 0, 0, 0.525],
			97: [0, 0.43056, 0, 0, 0.525],
			98: [0, 0.61111, 0, 0, 0.525],
			99: [0, 0.43056, 0, 0, 0.525],
			100: [0, 0.61111, 0, 0, 0.525],
			101: [0, 0.43056, 0, 0, 0.525],
			102: [0, 0.61111, 0, 0, 0.525],
			103: [0.22222, 0.43056, 0, 0, 0.525],
			104: [0, 0.61111, 0, 0, 0.525],
			105: [0, 0.61111, 0, 0, 0.525],
			106: [0.22222, 0.61111, 0, 0, 0.525],
			107: [0, 0.61111, 0, 0, 0.525],
			108: [0, 0.61111, 0, 0, 0.525],
			109: [0, 0.43056, 0, 0, 0.525],
			110: [0, 0.43056, 0, 0, 0.525],
			111: [0, 0.43056, 0, 0, 0.525],
			112: [0.22222, 0.43056, 0, 0, 0.525],
			113: [0.22222, 0.43056, 0, 0, 0.525],
			114: [0, 0.43056, 0, 0, 0.525],
			115: [0, 0.43056, 0, 0, 0.525],
			116: [0, 0.55358, 0, 0, 0.525],
			117: [0, 0.43056, 0, 0, 0.525],
			118: [0, 0.43056, 0, 0, 0.525],
			119: [0, 0.43056, 0, 0, 0.525],
			120: [0, 0.43056, 0, 0, 0.525],
			121: [0.22222, 0.43056, 0, 0, 0.525],
			122: [0, 0.43056, 0, 0, 0.525],
			123: [0.08333, 0.69444, 0, 0, 0.525],
			124: [0.08333, 0.69444, 0, 0, 0.525],
			125: [0.08333, 0.69444, 0, 0, 0.525],
			126: [0, 0.61111, 0, 0, 0.525],
			127: [0, 0.61111, 0, 0, 0.525],
			160: [0, 0, 0, 0, 0.525],
			176: [0, 0.61111, 0, 0, 0.525],
			184: [0.19445, 0, 0, 0, 0.525],
			305: [0, 0.43056, 0, 0, 0.525],
			567: [0.22222, 0.43056, 0, 0, 0.525],
			711: [0, 0.56597, 0, 0, 0.525],
			713: [0, 0.56555, 0, 0, 0.525],
			714: [0, 0.61111, 0, 0, 0.525],
			715: [0, 0.61111, 0, 0, 0.525],
			728: [0, 0.61111, 0, 0, 0.525],
			730: [0, 0.61111, 0, 0, 0.525],
			770: [0, 0.61111, 0, 0, 0.525],
			771: [0, 0.61111, 0, 0, 0.525],
			776: [0, 0.61111, 0, 0, 0.525],
			915: [0, 0.61111, 0, 0, 0.525],
			916: [0, 0.61111, 0, 0, 0.525],
			920: [0, 0.61111, 0, 0, 0.525],
			923: [0, 0.61111, 0, 0, 0.525],
			926: [0, 0.61111, 0, 0, 0.525],
			928: [0, 0.61111, 0, 0, 0.525],
			931: [0, 0.61111, 0, 0, 0.525],
			933: [0, 0.61111, 0, 0, 0.525],
			934: [0, 0.61111, 0, 0, 0.525],
			936: [0, 0.61111, 0, 0, 0.525],
			937: [0, 0.61111, 0, 0, 0.525],
			8216: [0, 0.61111, 0, 0, 0.525],
			8217: [0, 0.61111, 0, 0, 0.525],
			8242: [0, 0.61111, 0, 0, 0.525],
			9251: [0.11111, 0.21944, 0, 0, 0.525],
		},
	},
	Hs = {
		slant: [0.25, 0.25, 0.25],
		space: [0, 0, 0],
		stretch: [0, 0, 0],
		shrink: [0, 0, 0],
		xHeight: [0.431, 0.431, 0.431],
		quad: [1, 1.171, 1.472],
		extraSpace: [0, 0, 0],
		num1: [0.677, 0.732, 0.925],
		num2: [0.394, 0.384, 0.387],
		num3: [0.444, 0.471, 0.504],
		denom1: [0.686, 0.752, 1.025],
		denom2: [0.345, 0.344, 0.532],
		sup1: [0.413, 0.503, 0.504],
		sup2: [0.363, 0.431, 0.404],
		sup3: [0.289, 0.286, 0.294],
		sub1: [0.15, 0.143, 0.2],
		sub2: [0.247, 0.286, 0.4],
		supDrop: [0.386, 0.353, 0.494],
		subDrop: [0.05, 0.071, 0.1],
		delim1: [2.39, 1.7, 1.98],
		delim2: [1.01, 1.157, 1.42],
		axisHeight: [0.25, 0.25, 0.25],
		defaultRuleThickness: [0.04, 0.049, 0.049],
		bigOpSpacing1: [0.111, 0.111, 0.111],
		bigOpSpacing2: [0.166, 0.166, 0.166],
		bigOpSpacing3: [0.2, 0.2, 0.2],
		bigOpSpacing4: [0.6, 0.611, 0.611],
		bigOpSpacing5: [0.1, 0.143, 0.143],
		sqrtRuleThickness: [0.04, 0.04, 0.04],
		ptPerEm: [10, 10, 10],
		doubleRuleSep: [0.2, 0.2, 0.2],
		arrayRuleWidth: [0.04, 0.04, 0.04],
		fboxsep: [0.3, 0.3, 0.3],
		fboxrule: [0.04, 0.04, 0.04],
	},
	Qd = {
		Å: "A",
		Ð: "D",
		Þ: "o",
		å: "a",
		ð: "d",
		þ: "o",
		А: "A",
		Б: "B",
		В: "B",
		Г: "F",
		Д: "A",
		Е: "E",
		Ж: "K",
		З: "3",
		И: "N",
		Й: "N",
		К: "K",
		Л: "N",
		М: "M",
		Н: "H",
		О: "O",
		П: "N",
		Р: "P",
		С: "C",
		Т: "T",
		У: "y",
		Ф: "O",
		Х: "X",
		Ц: "U",
		Ч: "h",
		Ш: "W",
		Щ: "W",
		Ъ: "B",
		Ы: "X",
		Ь: "B",
		Э: "3",
		Ю: "X",
		Я: "R",
		а: "a",
		б: "b",
		в: "a",
		г: "r",
		д: "y",
		е: "e",
		ж: "m",
		з: "e",
		и: "n",
		й: "n",
		к: "n",
		л: "n",
		м: "m",
		н: "n",
		о: "o",
		п: "n",
		р: "p",
		с: "c",
		т: "o",
		у: "y",
		ф: "b",
		х: "x",
		ц: "n",
		ч: "n",
		ш: "w",
		щ: "w",
		ъ: "a",
		ы: "m",
		ь: "a",
		э: "e",
		ю: "m",
		я: "r",
	};
function v5(r, e) {
	Ln[r] = e;
}
function yu(r, e, t) {
	if (!Ln[e]) throw new Error("Font metrics not found for font: " + e + ".");
	var n = r.charCodeAt(0),
		a = Ln[e][n];
	if (
		(!a && r[0] in Qd && ((n = Qd[r[0]].charCodeAt(0)), (a = Ln[e][n])),
		!a && t === "text" && bf(n) && (a = Ln[e][77]),
		a)
	)
		return { depth: a[0], height: a[1], italic: a[2], skew: a[3], width: a[4] };
}
var Bl = {};
function b5(r) {
	var e;
	if ((r >= 5 ? (e = 0) : r >= 3 ? (e = 1) : (e = 2), !Bl[e])) {
		var t = (Bl[e] = { cssEmPerMu: Hs.quad[e] / 18 });
		for (var n in Hs) Hs.hasOwnProperty(n) && (t[n] = Hs[n][e]);
	}
	return Bl[e];
}
var y5 = [
		[1, 1, 1],
		[2, 1, 1],
		[3, 1, 1],
		[4, 2, 1],
		[5, 2, 1],
		[6, 3, 1],
		[7, 4, 2],
		[8, 6, 3],
		[9, 7, 6],
		[10, 8, 7],
		[11, 10, 9],
	],
	$d = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488],
	e1 = function (e, t) {
		return t.size < 2 ? e : y5[e - 1][t.size - 1];
	};
class $n {
	constructor(e) {
		(this.style = void 0),
			(this.color = void 0),
			(this.size = void 0),
			(this.textSize = void 0),
			(this.phantom = void 0),
			(this.font = void 0),
			(this.fontFamily = void 0),
			(this.fontWeight = void 0),
			(this.fontShape = void 0),
			(this.sizeMultiplier = void 0),
			(this.maxSize = void 0),
			(this.minRuleThickness = void 0),
			(this._fontMetrics = void 0),
			(this.style = e.style),
			(this.color = e.color),
			(this.size = e.size || $n.BASESIZE),
			(this.textSize = e.textSize || this.size),
			(this.phantom = !!e.phantom),
			(this.font = e.font || ""),
			(this.fontFamily = e.fontFamily || ""),
			(this.fontWeight = e.fontWeight || ""),
			(this.fontShape = e.fontShape || ""),
			(this.sizeMultiplier = $d[this.size - 1]),
			(this.maxSize = e.maxSize),
			(this.minRuleThickness = e.minRuleThickness),
			(this._fontMetrics = void 0);
	}
	extend(e) {
		var t = {
			style: this.style,
			size: this.size,
			textSize: this.textSize,
			color: this.color,
			phantom: this.phantom,
			font: this.font,
			fontFamily: this.fontFamily,
			fontWeight: this.fontWeight,
			fontShape: this.fontShape,
			maxSize: this.maxSize,
			minRuleThickness: this.minRuleThickness,
		};
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
		return new $n(t);
	}
	havingStyle(e) {
		return this.style === e ? this : this.extend({ style: e, size: e1(this.textSize, e) });
	}
	havingCrampedStyle() {
		return this.havingStyle(this.style.cramp());
	}
	havingSize(e) {
		return this.size === e && this.textSize === e
			? this
			: this.extend({ style: this.style.text(), size: e, textSize: e, sizeMultiplier: $d[e - 1] });
	}
	havingBaseStyle(e) {
		e = e || this.style.text();
		var t = e1($n.BASESIZE, e);
		return this.size === t && this.textSize === $n.BASESIZE && this.style === e
			? this
			: this.extend({ style: e, size: t });
	}
	havingBaseSizing() {
		var e;
		switch (this.style.id) {
			case 4:
			case 5:
				e = 3;
				break;
			case 6:
			case 7:
				e = 1;
				break;
			default:
				e = 6;
		}
		return this.extend({ style: this.style.text(), size: e });
	}
	withColor(e) {
		return this.extend({ color: e });
	}
	withPhantom() {
		return this.extend({ phantom: !0 });
	}
	withFont(e) {
		return this.extend({ font: e });
	}
	withTextFontFamily(e) {
		return this.extend({ fontFamily: e, font: "" });
	}
	withTextFontWeight(e) {
		return this.extend({ fontWeight: e, font: "" });
	}
	withTextFontShape(e) {
		return this.extend({ fontShape: e, font: "" });
	}
	sizingClasses(e) {
		return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : [];
	}
	baseSizingClasses() {
		return this.size !== $n.BASESIZE
			? ["sizing", "reset-size" + this.size, "size" + $n.BASESIZE]
			: [];
	}
	fontMetrics() {
		return this._fontMetrics || (this._fontMetrics = b5(this.size)), this._fontMetrics;
	}
	getColor() {
		return this.phantom ? "transparent" : this.color;
	}
}
$n.BASESIZE = 6;
var Lc = {
		pt: 1,
		mm: 7227 / 2540,
		cm: 7227 / 254,
		in: 72.27,
		bp: 803 / 800,
		pc: 12,
		dd: 1238 / 1157,
		cc: 14856 / 1157,
		nd: 685 / 642,
		nc: 1370 / 107,
		sp: 1 / 65536,
		px: 803 / 800,
	},
	x5 = { ex: !0, em: !0, mu: !0 },
	yf = function (e) {
		return typeof e != "string" && (e = e.unit), e in Lc || e in x5 || e === "ex";
	},
	Jt = function (e, t) {
		var n;
		if (e.unit in Lc) n = Lc[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
		else if (e.unit === "mu") n = t.fontMetrics().cssEmPerMu;
		else {
			var a;
			if ((t.style.isTight() ? (a = t.havingStyle(t.style.text())) : (a = t), e.unit === "ex"))
				n = a.fontMetrics().xHeight;
			else if (e.unit === "em") n = a.fontMetrics().quad;
			else throw new fe("Invalid unit: '" + e.unit + "'");
			a !== t && (n *= a.sizeMultiplier / t.sizeMultiplier);
		}
		return Math.min(e.number * n, t.maxSize);
	},
	xe = function (e) {
		return +e.toFixed(4) + "em";
	},
	Ia = function (e) {
		return e.filter((t) => t).join(" ");
	},
	xf = function (e, t, n) {
		if (
			((this.classes = e || []),
			(this.attributes = {}),
			(this.height = 0),
			(this.depth = 0),
			(this.maxFontSize = 0),
			(this.style = n || {}),
			t)
		) {
			t.style.isTight() && this.classes.push("mtight");
			var a = t.getColor();
			a && (this.style.color = a);
		}
	},
	wf = function (e) {
		var t = document.createElement(e);
		t.className = Ia(this.classes);
		for (var n in this.style) this.style.hasOwnProperty(n) && (t.style[n] = this.style[n]);
		for (var a in this.attributes)
			this.attributes.hasOwnProperty(a) && t.setAttribute(a, this.attributes[a]);
		for (var i = 0; i < this.children.length; i++) t.appendChild(this.children[i].toNode());
		return t;
	},
	w5 = /[\s"'>/=\x00-\x1f]/,
	_f = function (e) {
		var t = "<" + e;
		this.classes.length && (t += ' class="' + Je.escape(Ia(this.classes)) + '"');
		var n = "";
		for (var a in this.style)
			this.style.hasOwnProperty(a) && (n += Je.hyphenate(a) + ":" + this.style[a] + ";");
		n && (t += ' style="' + Je.escape(n) + '"');
		for (var i in this.attributes)
			if (this.attributes.hasOwnProperty(i)) {
				if (w5.test(i)) throw new fe("Invalid attribute name '" + i + "'");
				t += " " + i + '="' + Je.escape(this.attributes[i]) + '"';
			}
		t += ">";
		for (var o = 0; o < this.children.length; o++) t += this.children[o].toMarkup();
		return (t += "</" + e + ">"), t;
	};
class Ns {
	constructor(e, t, n, a) {
		(this.children = void 0),
			(this.attributes = void 0),
			(this.classes = void 0),
			(this.height = void 0),
			(this.depth = void 0),
			(this.width = void 0),
			(this.maxFontSize = void 0),
			(this.style = void 0),
			xf.call(this, e, n, a),
			(this.children = t || []);
	}
	setAttribute(e, t) {
		this.attributes[e] = t;
	}
	hasClass(e) {
		return Je.contains(this.classes, e);
	}
	toNode() {
		return wf.call(this, "span");
	}
	toMarkup() {
		return _f.call(this, "span");
	}
}
class xu {
	constructor(e, t, n, a) {
		(this.children = void 0),
			(this.attributes = void 0),
			(this.classes = void 0),
			(this.height = void 0),
			(this.depth = void 0),
			(this.maxFontSize = void 0),
			(this.style = void 0),
			xf.call(this, t, a),
			(this.children = n || []),
			this.setAttribute("href", e);
	}
	setAttribute(e, t) {
		this.attributes[e] = t;
	}
	hasClass(e) {
		return Je.contains(this.classes, e);
	}
	toNode() {
		return wf.call(this, "a");
	}
	toMarkup() {
		return _f.call(this, "a");
	}
}
class _5 {
	constructor(e, t, n) {
		(this.src = void 0),
			(this.alt = void 0),
			(this.classes = void 0),
			(this.height = void 0),
			(this.depth = void 0),
			(this.maxFontSize = void 0),
			(this.style = void 0),
			(this.alt = t),
			(this.src = e),
			(this.classes = ["mord"]),
			(this.style = n);
	}
	hasClass(e) {
		return Je.contains(this.classes, e);
	}
	toNode() {
		var e = document.createElement("img");
		(e.src = this.src), (e.alt = this.alt), (e.className = "mord");
		for (var t in this.style) this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
		return e;
	}
	toMarkup() {
		var e = '<img src="' + Je.escape(this.src) + '"' + (' alt="' + Je.escape(this.alt) + '"'),
			t = "";
		for (var n in this.style)
			this.style.hasOwnProperty(n) && (t += Je.hyphenate(n) + ":" + this.style[n] + ";");
		return t && (e += ' style="' + Je.escape(t) + '"'), (e += "'/>"), e;
	}
}
var k5 = { î: "ı̂", ï: "ı̈", í: "ı́", ì: "ı̀" };
class dn {
	constructor(e, t, n, a, i, o, s, l) {
		(this.text = void 0),
			(this.height = void 0),
			(this.depth = void 0),
			(this.italic = void 0),
			(this.skew = void 0),
			(this.width = void 0),
			(this.maxFontSize = void 0),
			(this.classes = void 0),
			(this.style = void 0),
			(this.text = e),
			(this.height = t || 0),
			(this.depth = n || 0),
			(this.italic = a || 0),
			(this.skew = i || 0),
			(this.width = o || 0),
			(this.classes = s || []),
			(this.style = l || {}),
			(this.maxFontSize = 0);
		var u = o5(this.text.charCodeAt(0));
		u && this.classes.push(u + "_fallback"),
			/[îïíì]/.test(this.text) && (this.text = k5[this.text]);
	}
	hasClass(e) {
		return Je.contains(this.classes, e);
	}
	toNode() {
		var e = document.createTextNode(this.text),
			t = null;
		this.italic > 0 &&
			((t = document.createElement("span")), (t.style.marginRight = xe(this.italic))),
			this.classes.length > 0 &&
				((t = t || document.createElement("span")), (t.className = Ia(this.classes)));
		for (var n in this.style)
			this.style.hasOwnProperty(n) &&
				((t = t || document.createElement("span")), (t.style[n] = this.style[n]));
		return t ? (t.appendChild(e), t) : e;
	}
	toMarkup() {
		var e = !1,
			t = "<span";
		this.classes.length &&
			((e = !0), (t += ' class="'), (t += Je.escape(Ia(this.classes))), (t += '"'));
		var n = "";
		this.italic > 0 && (n += "margin-right:" + this.italic + "em;");
		for (var a in this.style)
			this.style.hasOwnProperty(a) && (n += Je.hyphenate(a) + ":" + this.style[a] + ";");
		n && ((e = !0), (t += ' style="' + Je.escape(n) + '"'));
		var i = Je.escape(this.text);
		return e ? ((t += ">"), (t += i), (t += "</span>"), t) : i;
	}
}
class ha {
	constructor(e, t) {
		(this.children = void 0),
			(this.attributes = void 0),
			(this.children = e || []),
			(this.attributes = t || {});
	}
	toNode() {
		var e = "http://www.w3.org/2000/svg",
			t = document.createElementNS(e, "svg");
		for (var n in this.attributes)
			Object.prototype.hasOwnProperty.call(this.attributes, n) &&
				t.setAttribute(n, this.attributes[n]);
		for (var a = 0; a < this.children.length; a++) t.appendChild(this.children[a].toNode());
		return t;
	}
	toMarkup() {
		var e = '<svg xmlns="http://www.w3.org/2000/svg"';
		for (var t in this.attributes)
			Object.prototype.hasOwnProperty.call(this.attributes, t) &&
				(e += " " + t + '="' + Je.escape(this.attributes[t]) + '"');
		e += ">";
		for (var n = 0; n < this.children.length; n++) e += this.children[n].toMarkup();
		return (e += "</svg>"), e;
	}
}
class Da {
	constructor(e, t) {
		(this.pathName = void 0), (this.alternate = void 0), (this.pathName = e), (this.alternate = t);
	}
	toNode() {
		var e = "http://www.w3.org/2000/svg",
			t = document.createElementNS(e, "path");
		return (
			this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", Jd[this.pathName]),
			t
		);
	}
	toMarkup() {
		return this.alternate
			? '<path d="' + Je.escape(this.alternate) + '"/>'
			: '<path d="' + Je.escape(Jd[this.pathName]) + '"/>';
	}
}
class zc {
	constructor(e) {
		(this.attributes = void 0), (this.attributes = e || {});
	}
	toNode() {
		var e = "http://www.w3.org/2000/svg",
			t = document.createElementNS(e, "line");
		for (var n in this.attributes)
			Object.prototype.hasOwnProperty.call(this.attributes, n) &&
				t.setAttribute(n, this.attributes[n]);
		return t;
	}
	toMarkup() {
		var e = "<line";
		for (var t in this.attributes)
			Object.prototype.hasOwnProperty.call(this.attributes, t) &&
				(e += " " + t + '="' + Je.escape(this.attributes[t]) + '"');
		return (e += "/>"), e;
	}
}
function t1(r) {
	if (r instanceof dn) return r;
	throw new Error("Expected symbolNode but got " + String(r) + ".");
}
function S5(r) {
	if (r instanceof Ns) return r;
	throw new Error("Expected span<HtmlDomNode> but got " + String(r) + ".");
}
var E5 = { bin: 1, close: 1, inner: 1, open: 1, punct: 1, rel: 1 },
	T5 = { "accent-token": 1, mathord: 1, "op-token": 1, spacing: 1, textord: 1 },
	Vt = { math: {}, text: {} };
function c(r, e, t, n, a, i) {
	(Vt[r][a] = { font: e, group: t, replace: n }), i && n && (Vt[r][n] = Vt[r][a]);
}
var d = "math",
	ae = "text",
	v = "main",
	S = "ams",
	Xt = "accent-token",
	Oe = "bin",
	qr = "close",
	ji = "inner",
	$e = "mathord",
	fr = "op-token",
	tn = "open",
	bl = "punct",
	E = "rel",
	pa = "spacing",
	D = "textord";
c(d, v, E, "≡", "\\equiv", !0);
c(d, v, E, "≺", "\\prec", !0);
c(d, v, E, "≻", "\\succ", !0);
c(d, v, E, "∼", "\\sim", !0);
c(d, v, E, "⊥", "\\perp");
c(d, v, E, "⪯", "\\preceq", !0);
c(d, v, E, "⪰", "\\succeq", !0);
c(d, v, E, "≃", "\\simeq", !0);
c(d, v, E, "∣", "\\mid", !0);
c(d, v, E, "≪", "\\ll", !0);
c(d, v, E, "≫", "\\gg", !0);
c(d, v, E, "≍", "\\asymp", !0);
c(d, v, E, "∥", "\\parallel");
c(d, v, E, "⋈", "\\bowtie", !0);
c(d, v, E, "⌣", "\\smile", !0);
c(d, v, E, "⊑", "\\sqsubseteq", !0);
c(d, v, E, "⊒", "\\sqsupseteq", !0);
c(d, v, E, "≐", "\\doteq", !0);
c(d, v, E, "⌢", "\\frown", !0);
c(d, v, E, "∋", "\\ni", !0);
c(d, v, E, "∝", "\\propto", !0);
c(d, v, E, "⊢", "\\vdash", !0);
c(d, v, E, "⊣", "\\dashv", !0);
c(d, v, E, "∋", "\\owns");
c(d, v, bl, ".", "\\ldotp");
c(d, v, bl, "⋅", "\\cdotp");
c(d, v, D, "#", "\\#");
c(ae, v, D, "#", "\\#");
c(d, v, D, "&", "\\&");
c(ae, v, D, "&", "\\&");
c(d, v, D, "ℵ", "\\aleph", !0);
c(d, v, D, "∀", "\\forall", !0);
c(d, v, D, "ℏ", "\\hbar", !0);
c(d, v, D, "∃", "\\exists", !0);
c(d, v, D, "∇", "\\nabla", !0);
c(d, v, D, "♭", "\\flat", !0);
c(d, v, D, "ℓ", "\\ell", !0);
c(d, v, D, "♮", "\\natural", !0);
c(d, v, D, "♣", "\\clubsuit", !0);
c(d, v, D, "℘", "\\wp", !0);
c(d, v, D, "♯", "\\sharp", !0);
c(d, v, D, "♢", "\\diamondsuit", !0);
c(d, v, D, "ℜ", "\\Re", !0);
c(d, v, D, "♡", "\\heartsuit", !0);
c(d, v, D, "ℑ", "\\Im", !0);
c(d, v, D, "♠", "\\spadesuit", !0);
c(d, v, D, "§", "\\S", !0);
c(ae, v, D, "§", "\\S");
c(d, v, D, "¶", "\\P", !0);
c(ae, v, D, "¶", "\\P");
c(d, v, D, "†", "\\dag");
c(ae, v, D, "†", "\\dag");
c(ae, v, D, "†", "\\textdagger");
c(d, v, D, "‡", "\\ddag");
c(ae, v, D, "‡", "\\ddag");
c(ae, v, D, "‡", "\\textdaggerdbl");
c(d, v, qr, "⎱", "\\rmoustache", !0);
c(d, v, tn, "⎰", "\\lmoustache", !0);
c(d, v, qr, "⟯", "\\rgroup", !0);
c(d, v, tn, "⟮", "\\lgroup", !0);
c(d, v, Oe, "∓", "\\mp", !0);
c(d, v, Oe, "⊖", "\\ominus", !0);
c(d, v, Oe, "⊎", "\\uplus", !0);
c(d, v, Oe, "⊓", "\\sqcap", !0);
c(d, v, Oe, "∗", "\\ast");
c(d, v, Oe, "⊔", "\\sqcup", !0);
c(d, v, Oe, "◯", "\\bigcirc", !0);
c(d, v, Oe, "∙", "\\bullet", !0);
c(d, v, Oe, "‡", "\\ddagger");
c(d, v, Oe, "≀", "\\wr", !0);
c(d, v, Oe, "⨿", "\\amalg");
c(d, v, Oe, "&", "\\And");
c(d, v, E, "⟵", "\\longleftarrow", !0);
c(d, v, E, "⇐", "\\Leftarrow", !0);
c(d, v, E, "⟸", "\\Longleftarrow", !0);
c(d, v, E, "⟶", "\\longrightarrow", !0);
c(d, v, E, "⇒", "\\Rightarrow", !0);
c(d, v, E, "⟹", "\\Longrightarrow", !0);
c(d, v, E, "↔", "\\leftrightarrow", !0);
c(d, v, E, "⟷", "\\longleftrightarrow", !0);
c(d, v, E, "⇔", "\\Leftrightarrow", !0);
c(d, v, E, "⟺", "\\Longleftrightarrow", !0);
c(d, v, E, "↦", "\\mapsto", !0);
c(d, v, E, "⟼", "\\longmapsto", !0);
c(d, v, E, "↗", "\\nearrow", !0);
c(d, v, E, "↩", "\\hookleftarrow", !0);
c(d, v, E, "↪", "\\hookrightarrow", !0);
c(d, v, E, "↘", "\\searrow", !0);
c(d, v, E, "↼", "\\leftharpoonup", !0);
c(d, v, E, "⇀", "\\rightharpoonup", !0);
c(d, v, E, "↙", "\\swarrow", !0);
c(d, v, E, "↽", "\\leftharpoondown", !0);
c(d, v, E, "⇁", "\\rightharpoondown", !0);
c(d, v, E, "↖", "\\nwarrow", !0);
c(d, v, E, "⇌", "\\rightleftharpoons", !0);
c(d, S, E, "≮", "\\nless", !0);
c(d, S, E, "", "\\@nleqslant");
c(d, S, E, "", "\\@nleqq");
c(d, S, E, "⪇", "\\lneq", !0);
c(d, S, E, "≨", "\\lneqq", !0);
c(d, S, E, "", "\\@lvertneqq");
c(d, S, E, "⋦", "\\lnsim", !0);
c(d, S, E, "⪉", "\\lnapprox", !0);
c(d, S, E, "⊀", "\\nprec", !0);
c(d, S, E, "⋠", "\\npreceq", !0);
c(d, S, E, "⋨", "\\precnsim", !0);
c(d, S, E, "⪹", "\\precnapprox", !0);
c(d, S, E, "≁", "\\nsim", !0);
c(d, S, E, "", "\\@nshortmid");
c(d, S, E, "∤", "\\nmid", !0);
c(d, S, E, "⊬", "\\nvdash", !0);
c(d, S, E, "⊭", "\\nvDash", !0);
c(d, S, E, "⋪", "\\ntriangleleft");
c(d, S, E, "⋬", "\\ntrianglelefteq", !0);
c(d, S, E, "⊊", "\\subsetneq", !0);
c(d, S, E, "", "\\@varsubsetneq");
c(d, S, E, "⫋", "\\subsetneqq", !0);
c(d, S, E, "", "\\@varsubsetneqq");
c(d, S, E, "≯", "\\ngtr", !0);
c(d, S, E, "", "\\@ngeqslant");
c(d, S, E, "", "\\@ngeqq");
c(d, S, E, "⪈", "\\gneq", !0);
c(d, S, E, "≩", "\\gneqq", !0);
c(d, S, E, "", "\\@gvertneqq");
c(d, S, E, "⋧", "\\gnsim", !0);
c(d, S, E, "⪊", "\\gnapprox", !0);
c(d, S, E, "⊁", "\\nsucc", !0);
c(d, S, E, "⋡", "\\nsucceq", !0);
c(d, S, E, "⋩", "\\succnsim", !0);
c(d, S, E, "⪺", "\\succnapprox", !0);
c(d, S, E, "≆", "\\ncong", !0);
c(d, S, E, "", "\\@nshortparallel");
c(d, S, E, "∦", "\\nparallel", !0);
c(d, S, E, "⊯", "\\nVDash", !0);
c(d, S, E, "⋫", "\\ntriangleright");
c(d, S, E, "⋭", "\\ntrianglerighteq", !0);
c(d, S, E, "", "\\@nsupseteqq");
c(d, S, E, "⊋", "\\supsetneq", !0);
c(d, S, E, "", "\\@varsupsetneq");
c(d, S, E, "⫌", "\\supsetneqq", !0);
c(d, S, E, "", "\\@varsupsetneqq");
c(d, S, E, "⊮", "\\nVdash", !0);
c(d, S, E, "⪵", "\\precneqq", !0);
c(d, S, E, "⪶", "\\succneqq", !0);
c(d, S, E, "", "\\@nsubseteqq");
c(d, S, Oe, "⊴", "\\unlhd");
c(d, S, Oe, "⊵", "\\unrhd");
c(d, S, E, "↚", "\\nleftarrow", !0);
c(d, S, E, "↛", "\\nrightarrow", !0);
c(d, S, E, "⇍", "\\nLeftarrow", !0);
c(d, S, E, "⇏", "\\nRightarrow", !0);
c(d, S, E, "↮", "\\nleftrightarrow", !0);
c(d, S, E, "⇎", "\\nLeftrightarrow", !0);
c(d, S, E, "△", "\\vartriangle");
c(d, S, D, "ℏ", "\\hslash");
c(d, S, D, "▽", "\\triangledown");
c(d, S, D, "◊", "\\lozenge");
c(d, S, D, "Ⓢ", "\\circledS");
c(d, S, D, "®", "\\circledR");
c(ae, S, D, "®", "\\circledR");
c(d, S, D, "∡", "\\measuredangle", !0);
c(d, S, D, "∄", "\\nexists");
c(d, S, D, "℧", "\\mho");
c(d, S, D, "Ⅎ", "\\Finv", !0);
c(d, S, D, "⅁", "\\Game", !0);
c(d, S, D, "‵", "\\backprime");
c(d, S, D, "▲", "\\blacktriangle");
c(d, S, D, "▼", "\\blacktriangledown");
c(d, S, D, "■", "\\blacksquare");
c(d, S, D, "⧫", "\\blacklozenge");
c(d, S, D, "★", "\\bigstar");
c(d, S, D, "∢", "\\sphericalangle", !0);
c(d, S, D, "∁", "\\complement", !0);
c(d, S, D, "ð", "\\eth", !0);
c(ae, v, D, "ð", "ð");
c(d, S, D, "╱", "\\diagup");
c(d, S, D, "╲", "\\diagdown");
c(d, S, D, "□", "\\square");
c(d, S, D, "□", "\\Box");
c(d, S, D, "◊", "\\Diamond");
c(d, S, D, "¥", "\\yen", !0);
c(ae, S, D, "¥", "\\yen", !0);
c(d, S, D, "✓", "\\checkmark", !0);
c(ae, S, D, "✓", "\\checkmark");
c(d, S, D, "ℶ", "\\beth", !0);
c(d, S, D, "ℸ", "\\daleth", !0);
c(d, S, D, "ℷ", "\\gimel", !0);
c(d, S, D, "ϝ", "\\digamma", !0);
c(d, S, D, "ϰ", "\\varkappa");
c(d, S, tn, "┌", "\\@ulcorner", !0);
c(d, S, qr, "┐", "\\@urcorner", !0);
c(d, S, tn, "└", "\\@llcorner", !0);
c(d, S, qr, "┘", "\\@lrcorner", !0);
c(d, S, E, "≦", "\\leqq", !0);
c(d, S, E, "⩽", "\\leqslant", !0);
c(d, S, E, "⪕", "\\eqslantless", !0);
c(d, S, E, "≲", "\\lesssim", !0);
c(d, S, E, "⪅", "\\lessapprox", !0);
c(d, S, E, "≊", "\\approxeq", !0);
c(d, S, Oe, "⋖", "\\lessdot");
c(d, S, E, "⋘", "\\lll", !0);
c(d, S, E, "≶", "\\lessgtr", !0);
c(d, S, E, "⋚", "\\lesseqgtr", !0);
c(d, S, E, "⪋", "\\lesseqqgtr", !0);
c(d, S, E, "≑", "\\doteqdot");
c(d, S, E, "≓", "\\risingdotseq", !0);
c(d, S, E, "≒", "\\fallingdotseq", !0);
c(d, S, E, "∽", "\\backsim", !0);
c(d, S, E, "⋍", "\\backsimeq", !0);
c(d, S, E, "⫅", "\\subseteqq", !0);
c(d, S, E, "⋐", "\\Subset", !0);
c(d, S, E, "⊏", "\\sqsubset", !0);
c(d, S, E, "≼", "\\preccurlyeq", !0);
c(d, S, E, "⋞", "\\curlyeqprec", !0);
c(d, S, E, "≾", "\\precsim", !0);
c(d, S, E, "⪷", "\\precapprox", !0);
c(d, S, E, "⊲", "\\vartriangleleft");
c(d, S, E, "⊴", "\\trianglelefteq");
c(d, S, E, "⊨", "\\vDash", !0);
c(d, S, E, "⊪", "\\Vvdash", !0);
c(d, S, E, "⌣", "\\smallsmile");
c(d, S, E, "⌢", "\\smallfrown");
c(d, S, E, "≏", "\\bumpeq", !0);
c(d, S, E, "≎", "\\Bumpeq", !0);
c(d, S, E, "≧", "\\geqq", !0);
c(d, S, E, "⩾", "\\geqslant", !0);
c(d, S, E, "⪖", "\\eqslantgtr", !0);
c(d, S, E, "≳", "\\gtrsim", !0);
c(d, S, E, "⪆", "\\gtrapprox", !0);
c(d, S, Oe, "⋗", "\\gtrdot");
c(d, S, E, "⋙", "\\ggg", !0);
c(d, S, E, "≷", "\\gtrless", !0);
c(d, S, E, "⋛", "\\gtreqless", !0);
c(d, S, E, "⪌", "\\gtreqqless", !0);
c(d, S, E, "≖", "\\eqcirc", !0);
c(d, S, E, "≗", "\\circeq", !0);
c(d, S, E, "≜", "\\triangleq", !0);
c(d, S, E, "∼", "\\thicksim");
c(d, S, E, "≈", "\\thickapprox");
c(d, S, E, "⫆", "\\supseteqq", !0);
c(d, S, E, "⋑", "\\Supset", !0);
c(d, S, E, "⊐", "\\sqsupset", !0);
c(d, S, E, "≽", "\\succcurlyeq", !0);
c(d, S, E, "⋟", "\\curlyeqsucc", !0);
c(d, S, E, "≿", "\\succsim", !0);
c(d, S, E, "⪸", "\\succapprox", !0);
c(d, S, E, "⊳", "\\vartriangleright");
c(d, S, E, "⊵", "\\trianglerighteq");
c(d, S, E, "⊩", "\\Vdash", !0);
c(d, S, E, "∣", "\\shortmid");
c(d, S, E, "∥", "\\shortparallel");
c(d, S, E, "≬", "\\between", !0);
c(d, S, E, "⋔", "\\pitchfork", !0);
c(d, S, E, "∝", "\\varpropto");
c(d, S, E, "◀", "\\blacktriangleleft");
c(d, S, E, "∴", "\\therefore", !0);
c(d, S, E, "∍", "\\backepsilon");
c(d, S, E, "▶", "\\blacktriangleright");
c(d, S, E, "∵", "\\because", !0);
c(d, S, E, "⋘", "\\llless");
c(d, S, E, "⋙", "\\gggtr");
c(d, S, Oe, "⊲", "\\lhd");
c(d, S, Oe, "⊳", "\\rhd");
c(d, S, E, "≂", "\\eqsim", !0);
c(d, v, E, "⋈", "\\Join");
c(d, S, E, "≑", "\\Doteq", !0);
c(d, S, Oe, "∔", "\\dotplus", !0);
c(d, S, Oe, "∖", "\\smallsetminus");
c(d, S, Oe, "⋒", "\\Cap", !0);
c(d, S, Oe, "⋓", "\\Cup", !0);
c(d, S, Oe, "⩞", "\\doublebarwedge", !0);
c(d, S, Oe, "⊟", "\\boxminus", !0);
c(d, S, Oe, "⊞", "\\boxplus", !0);
c(d, S, Oe, "⋇", "\\divideontimes", !0);
c(d, S, Oe, "⋉", "\\ltimes", !0);
c(d, S, Oe, "⋊", "\\rtimes", !0);
c(d, S, Oe, "⋋", "\\leftthreetimes", !0);
c(d, S, Oe, "⋌", "\\rightthreetimes", !0);
c(d, S, Oe, "⋏", "\\curlywedge", !0);
c(d, S, Oe, "⋎", "\\curlyvee", !0);
c(d, S, Oe, "⊝", "\\circleddash", !0);
c(d, S, Oe, "⊛", "\\circledast", !0);
c(d, S, Oe, "⋅", "\\centerdot");
c(d, S, Oe, "⊺", "\\intercal", !0);
c(d, S, Oe, "⋒", "\\doublecap");
c(d, S, Oe, "⋓", "\\doublecup");
c(d, S, Oe, "⊠", "\\boxtimes", !0);
c(d, S, E, "⇢", "\\dashrightarrow", !0);
c(d, S, E, "⇠", "\\dashleftarrow", !0);
c(d, S, E, "⇇", "\\leftleftarrows", !0);
c(d, S, E, "⇆", "\\leftrightarrows", !0);
c(d, S, E, "⇚", "\\Lleftarrow", !0);
c(d, S, E, "↞", "\\twoheadleftarrow", !0);
c(d, S, E, "↢", "\\leftarrowtail", !0);
c(d, S, E, "↫", "\\looparrowleft", !0);
c(d, S, E, "⇋", "\\leftrightharpoons", !0);
c(d, S, E, "↶", "\\curvearrowleft", !0);
c(d, S, E, "↺", "\\circlearrowleft", !0);
c(d, S, E, "↰", "\\Lsh", !0);
c(d, S, E, "⇈", "\\upuparrows", !0);
c(d, S, E, "↿", "\\upharpoonleft", !0);
c(d, S, E, "⇃", "\\downharpoonleft", !0);
c(d, v, E, "⊶", "\\origof", !0);
c(d, v, E, "⊷", "\\imageof", !0);
c(d, S, E, "⊸", "\\multimap", !0);
c(d, S, E, "↭", "\\leftrightsquigarrow", !0);
c(d, S, E, "⇉", "\\rightrightarrows", !0);
c(d, S, E, "⇄", "\\rightleftarrows", !0);
c(d, S, E, "↠", "\\twoheadrightarrow", !0);
c(d, S, E, "↣", "\\rightarrowtail", !0);
c(d, S, E, "↬", "\\looparrowright", !0);
c(d, S, E, "↷", "\\curvearrowright", !0);
c(d, S, E, "↻", "\\circlearrowright", !0);
c(d, S, E, "↱", "\\Rsh", !0);
c(d, S, E, "⇊", "\\downdownarrows", !0);
c(d, S, E, "↾", "\\upharpoonright", !0);
c(d, S, E, "⇂", "\\downharpoonright", !0);
c(d, S, E, "⇝", "\\rightsquigarrow", !0);
c(d, S, E, "⇝", "\\leadsto");
c(d, S, E, "⇛", "\\Rrightarrow", !0);
c(d, S, E, "↾", "\\restriction");
c(d, v, D, "‘", "`");
c(d, v, D, "$", "\\$");
c(ae, v, D, "$", "\\$");
c(ae, v, D, "$", "\\textdollar");
c(d, v, D, "%", "\\%");
c(ae, v, D, "%", "\\%");
c(d, v, D, "_", "\\_");
c(ae, v, D, "_", "\\_");
c(ae, v, D, "_", "\\textunderscore");
c(d, v, D, "∠", "\\angle", !0);
c(d, v, D, "∞", "\\infty", !0);
c(d, v, D, "′", "\\prime");
c(d, v, D, "△", "\\triangle");
c(d, v, D, "Γ", "\\Gamma", !0);
c(d, v, D, "Δ", "\\Delta", !0);
c(d, v, D, "Θ", "\\Theta", !0);
c(d, v, D, "Λ", "\\Lambda", !0);
c(d, v, D, "Ξ", "\\Xi", !0);
c(d, v, D, "Π", "\\Pi", !0);
c(d, v, D, "Σ", "\\Sigma", !0);
c(d, v, D, "Υ", "\\Upsilon", !0);
c(d, v, D, "Φ", "\\Phi", !0);
c(d, v, D, "Ψ", "\\Psi", !0);
c(d, v, D, "Ω", "\\Omega", !0);
c(d, v, D, "A", "Α");
c(d, v, D, "B", "Β");
c(d, v, D, "E", "Ε");
c(d, v, D, "Z", "Ζ");
c(d, v, D, "H", "Η");
c(d, v, D, "I", "Ι");
c(d, v, D, "K", "Κ");
c(d, v, D, "M", "Μ");
c(d, v, D, "N", "Ν");
c(d, v, D, "O", "Ο");
c(d, v, D, "P", "Ρ");
c(d, v, D, "T", "Τ");
c(d, v, D, "X", "Χ");
c(d, v, D, "¬", "\\neg", !0);
c(d, v, D, "¬", "\\lnot");
c(d, v, D, "⊤", "\\top");
c(d, v, D, "⊥", "\\bot");
c(d, v, D, "∅", "\\emptyset");
c(d, S, D, "∅", "\\varnothing");
c(d, v, $e, "α", "\\alpha", !0);
c(d, v, $e, "β", "\\beta", !0);
c(d, v, $e, "γ", "\\gamma", !0);
c(d, v, $e, "δ", "\\delta", !0);
c(d, v, $e, "ϵ", "\\epsilon", !0);
c(d, v, $e, "ζ", "\\zeta", !0);
c(d, v, $e, "η", "\\eta", !0);
c(d, v, $e, "θ", "\\theta", !0);
c(d, v, $e, "ι", "\\iota", !0);
c(d, v, $e, "κ", "\\kappa", !0);
c(d, v, $e, "λ", "\\lambda", !0);
c(d, v, $e, "μ", "\\mu", !0);
c(d, v, $e, "ν", "\\nu", !0);
c(d, v, $e, "ξ", "\\xi", !0);
c(d, v, $e, "ο", "\\omicron", !0);
c(d, v, $e, "π", "\\pi", !0);
c(d, v, $e, "ρ", "\\rho", !0);
c(d, v, $e, "σ", "\\sigma", !0);
c(d, v, $e, "τ", "\\tau", !0);
c(d, v, $e, "υ", "\\upsilon", !0);
c(d, v, $e, "ϕ", "\\phi", !0);
c(d, v, $e, "χ", "\\chi", !0);
c(d, v, $e, "ψ", "\\psi", !0);
c(d, v, $e, "ω", "\\omega", !0);
c(d, v, $e, "ε", "\\varepsilon", !0);
c(d, v, $e, "ϑ", "\\vartheta", !0);
c(d, v, $e, "ϖ", "\\varpi", !0);
c(d, v, $e, "ϱ", "\\varrho", !0);
c(d, v, $e, "ς", "\\varsigma", !0);
c(d, v, $e, "φ", "\\varphi", !0);
c(d, v, Oe, "∗", "*", !0);
c(d, v, Oe, "+", "+");
c(d, v, Oe, "−", "-", !0);
c(d, v, Oe, "⋅", "\\cdot", !0);
c(d, v, Oe, "∘", "\\circ", !0);
c(d, v, Oe, "÷", "\\div", !0);
c(d, v, Oe, "±", "\\pm", !0);
c(d, v, Oe, "×", "\\times", !0);
c(d, v, Oe, "∩", "\\cap", !0);
c(d, v, Oe, "∪", "\\cup", !0);
c(d, v, Oe, "∖", "\\setminus", !0);
c(d, v, Oe, "∧", "\\land");
c(d, v, Oe, "∨", "\\lor");
c(d, v, Oe, "∧", "\\wedge", !0);
c(d, v, Oe, "∨", "\\vee", !0);
c(d, v, D, "√", "\\surd");
c(d, v, tn, "⟨", "\\langle", !0);
c(d, v, tn, "∣", "\\lvert");
c(d, v, tn, "∥", "\\lVert");
c(d, v, qr, "?", "?");
c(d, v, qr, "!", "!");
c(d, v, qr, "⟩", "\\rangle", !0);
c(d, v, qr, "∣", "\\rvert");
c(d, v, qr, "∥", "\\rVert");
c(d, v, E, "=", "=");
c(d, v, E, ":", ":");
c(d, v, E, "≈", "\\approx", !0);
c(d, v, E, "≅", "\\cong", !0);
c(d, v, E, "≥", "\\ge");
c(d, v, E, "≥", "\\geq", !0);
c(d, v, E, "←", "\\gets");
c(d, v, E, ">", "\\gt", !0);
c(d, v, E, "∈", "\\in", !0);
c(d, v, E, "", "\\@not");
c(d, v, E, "⊂", "\\subset", !0);
c(d, v, E, "⊃", "\\supset", !0);
c(d, v, E, "⊆", "\\subseteq", !0);
c(d, v, E, "⊇", "\\supseteq", !0);
c(d, S, E, "⊈", "\\nsubseteq", !0);
c(d, S, E, "⊉", "\\nsupseteq", !0);
c(d, v, E, "⊨", "\\models");
c(d, v, E, "←", "\\leftarrow", !0);
c(d, v, E, "≤", "\\le");
c(d, v, E, "≤", "\\leq", !0);
c(d, v, E, "<", "\\lt", !0);
c(d, v, E, "→", "\\rightarrow", !0);
c(d, v, E, "→", "\\to");
c(d, S, E, "≱", "\\ngeq", !0);
c(d, S, E, "≰", "\\nleq", !0);
c(d, v, pa, " ", "\\ ");
c(d, v, pa, " ", "\\space");
c(d, v, pa, " ", "\\nobreakspace");
c(ae, v, pa, " ", "\\ ");
c(ae, v, pa, " ", " ");
c(ae, v, pa, " ", "\\space");
c(ae, v, pa, " ", "\\nobreakspace");
c(d, v, pa, null, "\\nobreak");
c(d, v, pa, null, "\\allowbreak");
c(d, v, bl, ",", ",");
c(d, v, bl, ";", ";");
c(d, S, Oe, "⊼", "\\barwedge", !0);
c(d, S, Oe, "⊻", "\\veebar", !0);
c(d, v, Oe, "⊙", "\\odot", !0);
c(d, v, Oe, "⊕", "\\oplus", !0);
c(d, v, Oe, "⊗", "\\otimes", !0);
c(d, v, D, "∂", "\\partial", !0);
c(d, v, Oe, "⊘", "\\oslash", !0);
c(d, S, Oe, "⊚", "\\circledcirc", !0);
c(d, S, Oe, "⊡", "\\boxdot", !0);
c(d, v, Oe, "△", "\\bigtriangleup");
c(d, v, Oe, "▽", "\\bigtriangledown");
c(d, v, Oe, "†", "\\dagger");
c(d, v, Oe, "⋄", "\\diamond");
c(d, v, Oe, "⋆", "\\star");
c(d, v, Oe, "◃", "\\triangleleft");
c(d, v, Oe, "▹", "\\triangleright");
c(d, v, tn, "{", "\\{");
c(ae, v, D, "{", "\\{");
c(ae, v, D, "{", "\\textbraceleft");
c(d, v, qr, "}", "\\}");
c(ae, v, D, "}", "\\}");
c(ae, v, D, "}", "\\textbraceright");
c(d, v, tn, "{", "\\lbrace");
c(d, v, qr, "}", "\\rbrace");
c(d, v, tn, "[", "\\lbrack", !0);
c(ae, v, D, "[", "\\lbrack", !0);
c(d, v, qr, "]", "\\rbrack", !0);
c(ae, v, D, "]", "\\rbrack", !0);
c(d, v, tn, "(", "\\lparen", !0);
c(d, v, qr, ")", "\\rparen", !0);
c(ae, v, D, "<", "\\textless", !0);
c(ae, v, D, ">", "\\textgreater", !0);
c(d, v, tn, "⌊", "\\lfloor", !0);
c(d, v, qr, "⌋", "\\rfloor", !0);
c(d, v, tn, "⌈", "\\lceil", !0);
c(d, v, qr, "⌉", "\\rceil", !0);
c(d, v, D, "\\", "\\backslash");
c(d, v, D, "∣", "|");
c(d, v, D, "∣", "\\vert");
c(ae, v, D, "|", "\\textbar", !0);
c(d, v, D, "∥", "\\|");
c(d, v, D, "∥", "\\Vert");
c(ae, v, D, "∥", "\\textbardbl");
c(ae, v, D, "~", "\\textasciitilde");
c(ae, v, D, "\\", "\\textbackslash");
c(ae, v, D, "^", "\\textasciicircum");
c(d, v, E, "↑", "\\uparrow", !0);
c(d, v, E, "⇑", "\\Uparrow", !0);
c(d, v, E, "↓", "\\downarrow", !0);
c(d, v, E, "⇓", "\\Downarrow", !0);
c(d, v, E, "↕", "\\updownarrow", !0);
c(d, v, E, "⇕", "\\Updownarrow", !0);
c(d, v, fr, "∐", "\\coprod");
c(d, v, fr, "⋁", "\\bigvee");
c(d, v, fr, "⋀", "\\bigwedge");
c(d, v, fr, "⨄", "\\biguplus");
c(d, v, fr, "⋂", "\\bigcap");
c(d, v, fr, "⋃", "\\bigcup");
c(d, v, fr, "∫", "\\int");
c(d, v, fr, "∫", "\\intop");
c(d, v, fr, "∬", "\\iint");
c(d, v, fr, "∭", "\\iiint");
c(d, v, fr, "∏", "\\prod");
c(d, v, fr, "∑", "\\sum");
c(d, v, fr, "⨂", "\\bigotimes");
c(d, v, fr, "⨁", "\\bigoplus");
c(d, v, fr, "⨀", "\\bigodot");
c(d, v, fr, "∮", "\\oint");
c(d, v, fr, "∯", "\\oiint");
c(d, v, fr, "∰", "\\oiiint");
c(d, v, fr, "⨆", "\\bigsqcup");
c(d, v, fr, "∫", "\\smallint");
c(ae, v, ji, "…", "\\textellipsis");
c(d, v, ji, "…", "\\mathellipsis");
c(ae, v, ji, "…", "\\ldots", !0);
c(d, v, ji, "…", "\\ldots", !0);
c(d, v, ji, "⋯", "\\@cdots", !0);
c(d, v, ji, "⋱", "\\ddots", !0);
c(d, v, D, "⋮", "\\varvdots");
c(ae, v, D, "⋮", "\\varvdots");
c(d, v, Xt, "ˊ", "\\acute");
c(d, v, Xt, "ˋ", "\\grave");
c(d, v, Xt, "¨", "\\ddot");
c(d, v, Xt, "~", "\\tilde");
c(d, v, Xt, "ˉ", "\\bar");
c(d, v, Xt, "˘", "\\breve");
c(d, v, Xt, "ˇ", "\\check");
c(d, v, Xt, "^", "\\hat");
c(d, v, Xt, "⃗", "\\vec");
c(d, v, Xt, "˙", "\\dot");
c(d, v, Xt, "˚", "\\mathring");
c(d, v, $e, "", "\\@imath");
c(d, v, $e, "", "\\@jmath");
c(d, v, D, "ı", "ı");
c(d, v, D, "ȷ", "ȷ");
c(ae, v, D, "ı", "\\i", !0);
c(ae, v, D, "ȷ", "\\j", !0);
c(ae, v, D, "ß", "\\ss", !0);
c(ae, v, D, "æ", "\\ae", !0);
c(ae, v, D, "œ", "\\oe", !0);
c(ae, v, D, "ø", "\\o", !0);
c(ae, v, D, "Æ", "\\AE", !0);
c(ae, v, D, "Œ", "\\OE", !0);
c(ae, v, D, "Ø", "\\O", !0);
c(ae, v, Xt, "ˊ", "\\'");
c(ae, v, Xt, "ˋ", "\\`");
c(ae, v, Xt, "ˆ", "\\^");
c(ae, v, Xt, "˜", "\\~");
c(ae, v, Xt, "ˉ", "\\=");
c(ae, v, Xt, "˘", "\\u");
c(ae, v, Xt, "˙", "\\.");
c(ae, v, Xt, "¸", "\\c");
c(ae, v, Xt, "˚", "\\r");
c(ae, v, Xt, "ˇ", "\\v");
c(ae, v, Xt, "¨", '\\"');
c(ae, v, Xt, "˝", "\\H");
c(ae, v, Xt, "◯", "\\textcircled");
var kf = { "--": !0, "---": !0, "``": !0, "''": !0 };
c(ae, v, D, "–", "--", !0);
c(ae, v, D, "–", "\\textendash");
c(ae, v, D, "—", "---", !0);
c(ae, v, D, "—", "\\textemdash");
c(ae, v, D, "‘", "`", !0);
c(ae, v, D, "‘", "\\textquoteleft");
c(ae, v, D, "’", "'", !0);
c(ae, v, D, "’", "\\textquoteright");
c(ae, v, D, "“", "``", !0);
c(ae, v, D, "“", "\\textquotedblleft");
c(ae, v, D, "”", "''", !0);
c(ae, v, D, "”", "\\textquotedblright");
c(d, v, D, "°", "\\degree", !0);
c(ae, v, D, "°", "\\degree");
c(ae, v, D, "°", "\\textdegree", !0);
c(d, v, D, "£", "\\pounds");
c(d, v, D, "£", "\\mathsterling", !0);
c(ae, v, D, "£", "\\pounds");
c(ae, v, D, "£", "\\textsterling", !0);
c(d, S, D, "✠", "\\maltese");
c(ae, S, D, "✠", "\\maltese");
var r1 = '0123456789/@."';
for (var Pl = 0; Pl < r1.length; Pl++) {
	var n1 = r1.charAt(Pl);
	c(d, v, D, n1, n1);
}
var a1 = '0123456789!@*()-=+";:?/.,';
for (var Fl = 0; Fl < a1.length; Fl++) {
	var i1 = a1.charAt(Fl);
	c(ae, v, D, i1, i1);
}
var R0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var ql = 0; ql < R0.length; ql++) {
	var Gs = R0.charAt(ql);
	c(d, v, $e, Gs, Gs), c(ae, v, D, Gs, Gs);
}
c(d, S, D, "C", "ℂ");
c(ae, S, D, "C", "ℂ");
c(d, S, D, "H", "ℍ");
c(ae, S, D, "H", "ℍ");
c(d, S, D, "N", "ℕ");
c(ae, S, D, "N", "ℕ");
c(d, S, D, "P", "ℙ");
c(ae, S, D, "P", "ℙ");
c(d, S, D, "Q", "ℚ");
c(ae, S, D, "Q", "ℚ");
c(d, S, D, "R", "ℝ");
c(ae, S, D, "R", "ℝ");
c(d, S, D, "Z", "ℤ");
c(ae, S, D, "Z", "ℤ");
c(d, v, $e, "h", "ℎ");
c(ae, v, $e, "h", "ℎ");
var nt = "";
for (var Br = 0; Br < R0.length; Br++) {
	var rr = R0.charAt(Br);
	(nt = String.fromCharCode(55349, 56320 + Br)),
		c(d, v, $e, rr, nt),
		c(ae, v, D, rr, nt),
		(nt = String.fromCharCode(55349, 56372 + Br)),
		c(d, v, $e, rr, nt),
		c(ae, v, D, rr, nt),
		(nt = String.fromCharCode(55349, 56424 + Br)),
		c(d, v, $e, rr, nt),
		c(ae, v, D, rr, nt),
		(nt = String.fromCharCode(55349, 56580 + Br)),
		c(d, v, $e, rr, nt),
		c(ae, v, D, rr, nt),
		(nt = String.fromCharCode(55349, 56684 + Br)),
		c(d, v, $e, rr, nt),
		c(ae, v, D, rr, nt),
		(nt = String.fromCharCode(55349, 56736 + Br)),
		c(d, v, $e, rr, nt),
		c(ae, v, D, rr, nt),
		(nt = String.fromCharCode(55349, 56788 + Br)),
		c(d, v, $e, rr, nt),
		c(ae, v, D, rr, nt),
		(nt = String.fromCharCode(55349, 56840 + Br)),
		c(d, v, $e, rr, nt),
		c(ae, v, D, rr, nt),
		(nt = String.fromCharCode(55349, 56944 + Br)),
		c(d, v, $e, rr, nt),
		c(ae, v, D, rr, nt),
		Br < 26 &&
			((nt = String.fromCharCode(55349, 56632 + Br)),
			c(d, v, $e, rr, nt),
			c(ae, v, D, rr, nt),
			(nt = String.fromCharCode(55349, 56476 + Br)),
			c(d, v, $e, rr, nt),
			c(ae, v, D, rr, nt));
}
nt = "𝕜";
c(d, v, $e, "k", nt);
c(ae, v, D, "k", nt);
for (var Ga = 0; Ga < 10; Ga++) {
	var va = Ga.toString();
	(nt = String.fromCharCode(55349, 57294 + Ga)),
		c(d, v, $e, va, nt),
		c(ae, v, D, va, nt),
		(nt = String.fromCharCode(55349, 57314 + Ga)),
		c(d, v, $e, va, nt),
		c(ae, v, D, va, nt),
		(nt = String.fromCharCode(55349, 57324 + Ga)),
		c(d, v, $e, va, nt),
		c(ae, v, D, va, nt),
		(nt = String.fromCharCode(55349, 57334 + Ga)),
		c(d, v, $e, va, nt),
		c(ae, v, D, va, nt);
}
var Bc = "ÐÞþ";
for (var Ul = 0; Ul < Bc.length; Ul++) {
	var Ws = Bc.charAt(Ul);
	c(d, v, $e, Ws, Ws), c(ae, v, D, Ws, Ws);
}
var Vs = [
		["mathbf", "textbf", "Main-Bold"],
		["mathbf", "textbf", "Main-Bold"],
		["mathnormal", "textit", "Math-Italic"],
		["mathnormal", "textit", "Math-Italic"],
		["boldsymbol", "boldsymbol", "Main-BoldItalic"],
		["boldsymbol", "boldsymbol", "Main-BoldItalic"],
		["mathscr", "textscr", "Script-Regular"],
		["", "", ""],
		["", "", ""],
		["", "", ""],
		["mathfrak", "textfrak", "Fraktur-Regular"],
		["mathfrak", "textfrak", "Fraktur-Regular"],
		["mathbb", "textbb", "AMS-Regular"],
		["mathbb", "textbb", "AMS-Regular"],
		["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
		["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
		["mathsf", "textsf", "SansSerif-Regular"],
		["mathsf", "textsf", "SansSerif-Regular"],
		["mathboldsf", "textboldsf", "SansSerif-Bold"],
		["mathboldsf", "textboldsf", "SansSerif-Bold"],
		["mathitsf", "textitsf", "SansSerif-Italic"],
		["mathitsf", "textitsf", "SansSerif-Italic"],
		["", "", ""],
		["", "", ""],
		["mathtt", "texttt", "Typewriter-Regular"],
		["mathtt", "texttt", "Typewriter-Regular"],
	],
	o1 = [
		["mathbf", "textbf", "Main-Bold"],
		["", "", ""],
		["mathsf", "textsf", "SansSerif-Regular"],
		["mathboldsf", "textboldsf", "SansSerif-Bold"],
		["mathtt", "texttt", "Typewriter-Regular"],
	],
	A5 = function (e, t) {
		var n = e.charCodeAt(0),
			a = e.charCodeAt(1),
			i = (n - 55296) * 1024 + (a - 56320) + 65536,
			o = t === "math" ? 0 : 1;
		if (119808 <= i && i < 120484) {
			var s = Math.floor((i - 119808) / 26);
			return [Vs[s][2], Vs[s][o]];
		} else if (120782 <= i && i <= 120831) {
			var l = Math.floor((i - 120782) / 10);
			return [o1[l][2], o1[l][o]];
		} else {
			if (i === 120485 || i === 120486) return [Vs[0][2], Vs[0][o]];
			if (120486 < i && i < 120782) return ["", ""];
			throw new fe("Unsupported character: " + e);
		}
	},
	yl = function (e, t, n) {
		return (
			Vt[n][e] && Vt[n][e].replace && (e = Vt[n][e].replace), { value: e, metrics: yu(e, t, n) }
		);
	},
	gn = function (e, t, n, a, i) {
		var o = yl(e, t, n),
			s = o.metrics;
		e = o.value;
		var l;
		if (s) {
			var u = s.italic;
			(n === "text" || (a && a.font === "mathit")) && (u = 0),
				(l = new dn(e, s.height, s.depth, u, s.skew, s.width, i));
		} else
			typeof console < "u" &&
				console.warn(
					"No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + n + "'")
				),
				(l = new dn(e, 0, 0, 0, 0, 0, i));
		if (a) {
			(l.maxFontSize = a.sizeMultiplier), a.style.isTight() && l.classes.push("mtight");
			var h = a.getColor();
			h && (l.style.color = h);
		}
		return l;
	},
	M5 = function (e, t, n, a) {
		return (
			a === void 0 && (a = []),
			n.font === "boldsymbol" && yl(e, "Main-Bold", t).metrics
				? gn(e, "Main-Bold", t, n, a.concat(["mathbf"]))
				: e === "\\" || Vt[t][e].font === "main"
					? gn(e, "Main-Regular", t, n, a)
					: gn(e, "AMS-Regular", t, n, a.concat(["amsrm"]))
		);
	},
	C5 = function (e, t, n, a, i) {
		return i !== "textord" && yl(e, "Math-BoldItalic", t).metrics
			? { fontName: "Math-BoldItalic", fontClass: "boldsymbol" }
			: { fontName: "Main-Bold", fontClass: "mathbf" };
	},
	O5 = function (e, t, n) {
		var a = e.mode,
			i = e.text,
			o = ["mord"],
			s = a === "math" || (a === "text" && t.font),
			l = s ? t.font : t.fontFamily,
			u = "",
			h = "";
		if ((i.charCodeAt(0) === 55349 && ([u, h] = A5(i, a)), u.length > 0))
			return gn(i, u, a, t, o.concat(h));
		if (l) {
			var f, p;
			if (l === "boldsymbol") {
				var g = C5(i, a, t, o, n);
				(f = g.fontName), (p = [g.fontClass]);
			} else
				s
					? ((f = Tf[l].fontName), (p = [l]))
					: ((f = Ks(l, t.fontWeight, t.fontShape)), (p = [l, t.fontWeight, t.fontShape]));
			if (yl(i, f, a).metrics) return gn(i, f, a, t, o.concat(p));
			if (kf.hasOwnProperty(i) && f.slice(0, 10) === "Typewriter") {
				for (var y = [], x = 0; x < i.length; x++) y.push(gn(i[x], f, a, t, o.concat(p)));
				return Ef(y);
			}
		}
		if (n === "mathord") return gn(i, "Math-Italic", a, t, o.concat(["mathnormal"]));
		if (n === "textord") {
			var _ = Vt[a][i] && Vt[a][i].font;
			if (_ === "ams") {
				var k = Ks("amsrm", t.fontWeight, t.fontShape);
				return gn(i, k, a, t, o.concat("amsrm", t.fontWeight, t.fontShape));
			} else if (_ === "main" || !_) {
				var T = Ks("textrm", t.fontWeight, t.fontShape);
				return gn(i, T, a, t, o.concat(t.fontWeight, t.fontShape));
			} else {
				var B = Ks(_, t.fontWeight, t.fontShape);
				return gn(i, B, a, t, o.concat(B, t.fontWeight, t.fontShape));
			}
		} else throw new Error("unexpected type: " + n + " in makeOrd");
	},
	N5 = (r, e) => {
		if (Ia(r.classes) !== Ia(e.classes) || r.skew !== e.skew || r.maxFontSize !== e.maxFontSize)
			return !1;
		if (r.classes.length === 1) {
			var t = r.classes[0];
			if (t === "mbin" || t === "mord") return !1;
		}
		for (var n in r.style) if (r.style.hasOwnProperty(n) && r.style[n] !== e.style[n]) return !1;
		for (var a in e.style) if (e.style.hasOwnProperty(a) && r.style[a] !== e.style[a]) return !1;
		return !0;
	},
	R5 = (r) => {
		for (var e = 0; e < r.length - 1; e++) {
			var t = r[e],
				n = r[e + 1];
			t instanceof dn &&
				n instanceof dn &&
				N5(t, n) &&
				((t.text += n.text),
				(t.height = Math.max(t.height, n.height)),
				(t.depth = Math.max(t.depth, n.depth)),
				(t.italic = n.italic),
				r.splice(e + 1, 1),
				e--);
		}
		return r;
	},
	wu = function (e) {
		for (var t = 0, n = 0, a = 0, i = 0; i < e.children.length; i++) {
			var o = e.children[i];
			o.height > t && (t = o.height),
				o.depth > n && (n = o.depth),
				o.maxFontSize > a && (a = o.maxFontSize);
		}
		(e.height = t), (e.depth = n), (e.maxFontSize = a);
	},
	Yr = function (e, t, n, a) {
		var i = new Ns(e, t, n, a);
		return wu(i), i;
	},
	Sf = (r, e, t, n) => new Ns(r, e, t, n),
	I5 = function (e, t, n) {
		var a = Yr([e], [], t);
		return (
			(a.height = Math.max(n || t.fontMetrics().defaultRuleThickness, t.minRuleThickness)),
			(a.style.borderBottomWidth = xe(a.height)),
			(a.maxFontSize = 1),
			a
		);
	},
	D5 = function (e, t, n, a) {
		var i = new xu(e, t, n, a);
		return wu(i), i;
	},
	Ef = function (e) {
		var t = new Os(e);
		return wu(t), t;
	},
	L5 = function (e, t) {
		return e instanceof Os ? Yr([], [e], t) : e;
	},
	z5 = function (e) {
		if (e.positionType === "individualShift") {
			for (
				var t = e.children, n = [t[0]], a = -t[0].shift - t[0].elem.depth, i = a, o = 1;
				o < t.length;
				o++
			) {
				var s = -t[o].shift - i - t[o].elem.depth,
					l = s - (t[o - 1].elem.height + t[o - 1].elem.depth);
				(i = i + s), n.push({ type: "kern", size: l }), n.push(t[o]);
			}
			return { children: n, depth: a };
		}
		var u;
		if (e.positionType === "top") {
			for (var h = e.positionData, f = 0; f < e.children.length; f++) {
				var p = e.children[f];
				h -= p.type === "kern" ? p.size : p.elem.height + p.elem.depth;
			}
			u = h;
		} else if (e.positionType === "bottom") u = -e.positionData;
		else {
			var g = e.children[0];
			if (g.type !== "elem") throw new Error('First child must have type "elem".');
			if (e.positionType === "shift") u = -g.elem.depth - e.positionData;
			else if (e.positionType === "firstBaseline") u = -g.elem.depth;
			else throw new Error("Invalid positionType " + e.positionType + ".");
		}
		return { children: e.children, depth: u };
	},
	B5 = function (e, t) {
		for (var { children: n, depth: a } = z5(e), i = 0, o = 0; o < n.length; o++) {
			var s = n[o];
			if (s.type === "elem") {
				var l = s.elem;
				i = Math.max(i, l.maxFontSize, l.height);
			}
		}
		i += 2;
		var u = Yr(["pstrut"], []);
		u.style.height = xe(i);
		for (var h = [], f = a, p = a, g = a, y = 0; y < n.length; y++) {
			var x = n[y];
			if (x.type === "kern") g += x.size;
			else {
				var _ = x.elem,
					k = x.wrapperClasses || [],
					T = x.wrapperStyle || {},
					B = Yr(k, [u, _], void 0, T);
				(B.style.top = xe(-i - g - _.depth)),
					x.marginLeft && (B.style.marginLeft = x.marginLeft),
					x.marginRight && (B.style.marginRight = x.marginRight),
					h.push(B),
					(g += _.height + _.depth);
			}
			(f = Math.min(f, g)), (p = Math.max(p, g));
		}
		var A = Yr(["vlist"], h);
		A.style.height = xe(p);
		var N;
		if (f < 0) {
			var z = Yr([], []),
				I = Yr(["vlist"], [z]);
			I.style.height = xe(-f);
			var G = Yr(["vlist-s"], [new dn("​")]);
			N = [Yr(["vlist-r"], [A, G]), Yr(["vlist-r"], [I])];
		} else N = [Yr(["vlist-r"], [A])];
		var re = Yr(["vlist-t"], N);
		return N.length === 2 && re.classes.push("vlist-t2"), (re.height = p), (re.depth = -f), re;
	},
	P5 = (r, e) => {
		var t = Yr(["mspace"], [], e),
			n = Jt(r, e);
		return (t.style.marginRight = xe(n)), t;
	},
	Ks = function (e, t, n) {
		var a = "";
		switch (e) {
			case "amsrm":
				a = "AMS";
				break;
			case "textrm":
				a = "Main";
				break;
			case "textsf":
				a = "SansSerif";
				break;
			case "texttt":
				a = "Typewriter";
				break;
			default:
				a = e;
		}
		var i;
		return (
			t === "textbf" && n === "textit"
				? (i = "BoldItalic")
				: t === "textbf"
					? (i = "Bold")
					: t === "textit"
						? (i = "Italic")
						: (i = "Regular"),
			a + "-" + i
		);
	},
	Tf = {
		mathbf: { variant: "bold", fontName: "Main-Bold" },
		mathrm: { variant: "normal", fontName: "Main-Regular" },
		textit: { variant: "italic", fontName: "Main-Italic" },
		mathit: { variant: "italic", fontName: "Main-Italic" },
		mathnormal: { variant: "italic", fontName: "Math-Italic" },
		mathsfit: { variant: "sans-serif-italic", fontName: "SansSerif-Italic" },
		mathbb: { variant: "double-struck", fontName: "AMS-Regular" },
		mathcal: { variant: "script", fontName: "Caligraphic-Regular" },
		mathfrak: { variant: "fraktur", fontName: "Fraktur-Regular" },
		mathscr: { variant: "script", fontName: "Script-Regular" },
		mathsf: { variant: "sans-serif", fontName: "SansSerif-Regular" },
		mathtt: { variant: "monospace", fontName: "Typewriter-Regular" },
	},
	Af = {
		vec: ["vec", 0.471, 0.714],
		oiintSize1: ["oiintSize1", 0.957, 0.499],
		oiintSize2: ["oiintSize2", 1.472, 0.659],
		oiiintSize1: ["oiiintSize1", 1.304, 0.499],
		oiiintSize2: ["oiiintSize2", 1.98, 0.659],
	},
	F5 = function (e, t) {
		var [n, a, i] = Af[e],
			o = new Da(n),
			s = new ha([o], {
				width: xe(a),
				height: xe(i),
				style: "width:" + xe(a),
				viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
				preserveAspectRatio: "xMinYMin",
			}),
			l = Sf(["overlay"], [s], t);
		return (l.height = i), (l.style.height = xe(i)), (l.style.width = xe(a)), l;
	},
	U = {
		fontMap: Tf,
		makeSymbol: gn,
		mathsym: M5,
		makeSpan: Yr,
		makeSvgSpan: Sf,
		makeLineSpan: I5,
		makeAnchor: D5,
		makeFragment: Ef,
		wrapFragment: L5,
		makeVList: B5,
		makeOrd: O5,
		makeGlue: P5,
		staticSvg: F5,
		svgData: Af,
		tryCombineChars: R5,
	},
	jt = { number: 3, unit: "mu" },
	Wa = { number: 4, unit: "mu" },
	Jn = { number: 5, unit: "mu" },
	q5 = {
		mord: { mop: jt, mbin: Wa, mrel: Jn, minner: jt },
		mop: { mord: jt, mop: jt, mrel: Jn, minner: jt },
		mbin: { mord: Wa, mop: Wa, mopen: Wa, minner: Wa },
		mrel: { mord: Jn, mop: Jn, mopen: Jn, minner: Jn },
		mopen: {},
		mclose: { mop: jt, mbin: Wa, mrel: Jn, minner: jt },
		mpunct: { mord: jt, mop: jt, mrel: Jn, mopen: jt, mclose: jt, mpunct: jt, minner: jt },
		minner: { mord: jt, mop: jt, mbin: Wa, mrel: Jn, mopen: jt, mpunct: jt, minner: jt },
	},
	U5 = {
		mord: { mop: jt },
		mop: { mord: jt, mop: jt },
		mbin: {},
		mrel: {},
		mopen: {},
		mclose: { mop: jt },
		mpunct: {},
		minner: { mop: jt },
	},
	Mf = {},
	I0 = {},
	D0 = {};
function Ae(r) {
	for (
		var { type: e, names: t, props: n, handler: a, htmlBuilder: i, mathmlBuilder: o } = r,
			s = {
				type: e,
				numArgs: n.numArgs,
				argTypes: n.argTypes,
				allowedInArgument: !!n.allowedInArgument,
				allowedInText: !!n.allowedInText,
				allowedInMath: n.allowedInMath === void 0 ? !0 : n.allowedInMath,
				numOptionalArgs: n.numOptionalArgs || 0,
				infix: !!n.infix,
				primitive: !!n.primitive,
				handler: a,
			},
			l = 0;
		l < t.length;
		++l
	)
		Mf[t[l]] = s;
	e && (i && (I0[e] = i), o && (D0[e] = o));
}
function ui(r) {
	var { type: e, htmlBuilder: t, mathmlBuilder: n } = r;
	Ae({
		type: e,
		names: [],
		props: { numArgs: 0 },
		handler() {
			throw new Error("Should never be called.");
		},
		htmlBuilder: t,
		mathmlBuilder: n,
	});
}
var L0 = function (e) {
		return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
	},
	ir = function (e) {
		return e.type === "ordgroup" ? e.body : [e];
	},
	fa = U.makeSpan,
	H5 = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"],
	G5 = ["rightmost", "mrel", "mclose", "mpunct"],
	W5 = { display: et.DISPLAY, text: et.TEXT, script: et.SCRIPT, scriptscript: et.SCRIPTSCRIPT },
	V5 = {
		mord: "mord",
		mop: "mop",
		mbin: "mbin",
		mrel: "mrel",
		mopen: "mopen",
		mclose: "mclose",
		mpunct: "mpunct",
		minner: "minner",
	},
	xr = function (e, t, n, a) {
		a === void 0 && (a = [null, null]);
		for (var i = [], o = 0; o < e.length; o++) {
			var s = At(e[o], t);
			if (s instanceof Os) {
				var l = s.children;
				i.push(...l);
			} else i.push(s);
		}
		if ((U.tryCombineChars(i), !n)) return i;
		var u = t;
		if (e.length === 1) {
			var h = e[0];
			h.type === "sizing"
				? (u = t.havingSize(h.size))
				: h.type === "styling" && (u = t.havingStyle(W5[h.style]));
		}
		var f = fa([a[0] || "leftmost"], [], t),
			p = fa([a[1] || "rightmost"], [], t),
			g = n === "root";
		return (
			s1(
				i,
				(y, x) => {
					var _ = x.classes[0],
						k = y.classes[0];
					_ === "mbin" && Je.contains(G5, k)
						? (x.classes[0] = "mord")
						: k === "mbin" && Je.contains(H5, _) && (y.classes[0] = "mord");
				},
				{ node: f },
				p,
				g
			),
			s1(
				i,
				(y, x) => {
					var _ = Pc(x),
						k = Pc(y),
						T = _ && k ? (y.hasClass("mtight") ? U5[_][k] : q5[_][k]) : null;
					if (T) return U.makeGlue(T, u);
				},
				{ node: f },
				p,
				g
			),
			i
		);
	},
	s1 = function r(e, t, n, a, i) {
		a && e.push(a);
		for (var o = 0; o < e.length; o++) {
			var s = e[o],
				l = Cf(s);
			if (l) {
				r(l.children, t, n, null, i);
				continue;
			}
			var u = !s.hasClass("mspace");
			if (u) {
				var h = t(s, n.node);
				h && (n.insertAfter ? n.insertAfter(h) : (e.unshift(h), o++));
			}
			u ? (n.node = s) : i && s.hasClass("newline") && (n.node = fa(["leftmost"])),
				(n.insertAfter = ((f) => (p) => {
					e.splice(f + 1, 0, p), o++;
				})(o));
		}
		a && e.pop();
	},
	Cf = function (e) {
		return e instanceof Os || e instanceof xu || (e instanceof Ns && e.hasClass("enclosing"))
			? e
			: null;
	},
	K5 = function r(e, t) {
		var n = Cf(e);
		if (n) {
			var a = n.children;
			if (a.length) {
				if (t === "right") return r(a[a.length - 1], "right");
				if (t === "left") return r(a[0], "left");
			}
		}
		return e;
	},
	Pc = function (e, t) {
		return e ? (t && (e = K5(e, t)), V5[e.classes[0]] || null) : null;
	},
	xo = function (e, t) {
		var n = ["nulldelimiter"].concat(e.baseSizingClasses());
		return fa(t.concat(n));
	},
	At = function (e, t, n) {
		if (!e) return fa();
		if (I0[e.type]) {
			var a = I0[e.type](e, t);
			if (n && t.size !== n.size) {
				a = fa(t.sizingClasses(n), [a], t);
				var i = t.sizeMultiplier / n.sizeMultiplier;
				(a.height *= i), (a.depth *= i);
			}
			return a;
		} else throw new fe("Got group of unknown type: '" + e.type + "'");
	};
function Ys(r, e) {
	var t = fa(["base"], r, e),
		n = fa(["strut"]);
	return (
		(n.style.height = xe(t.height + t.depth)),
		t.depth && (n.style.verticalAlign = xe(-t.depth)),
		t.children.unshift(n),
		t
	);
}
function Fc(r, e) {
	var t = null;
	r.length === 1 && r[0].type === "tag" && ((t = r[0].tag), (r = r[0].body));
	var n = xr(r, e, "root"),
		a;
	n.length === 2 && n[1].hasClass("tag") && (a = n.pop());
	for (var i = [], o = [], s = 0; s < n.length; s++)
		if (
			(o.push(n[s]), n[s].hasClass("mbin") || n[s].hasClass("mrel") || n[s].hasClass("allowbreak"))
		) {
			for (
				var l = !1;
				s < n.length - 1 && n[s + 1].hasClass("mspace") && !n[s + 1].hasClass("newline");

			)
				s++, o.push(n[s]), n[s].hasClass("nobreak") && (l = !0);
			l || (i.push(Ys(o, e)), (o = []));
		} else
			n[s].hasClass("newline") &&
				(o.pop(), o.length > 0 && (i.push(Ys(o, e)), (o = [])), i.push(n[s]));
	o.length > 0 && i.push(Ys(o, e));
	var u;
	t ? ((u = Ys(xr(t, e, !0))), (u.classes = ["tag"]), i.push(u)) : a && i.push(a);
	var h = fa(["katex-html"], i);
	if ((h.setAttribute("aria-hidden", "true"), u)) {
		var f = u.children[0];
		(f.style.height = xe(h.height + h.depth)), h.depth && (f.style.verticalAlign = xe(-h.depth));
	}
	return h;
}
function Of(r) {
	return new Os(r);
}
class $r {
	constructor(e, t, n) {
		(this.type = void 0),
			(this.attributes = void 0),
			(this.children = void 0),
			(this.classes = void 0),
			(this.type = e),
			(this.attributes = {}),
			(this.children = t || []),
			(this.classes = n || []);
	}
	setAttribute(e, t) {
		this.attributes[e] = t;
	}
	getAttribute(e) {
		return this.attributes[e];
	}
	toNode() {
		var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
		for (var t in this.attributes)
			Object.prototype.hasOwnProperty.call(this.attributes, t) &&
				e.setAttribute(t, this.attributes[t]);
		this.classes.length > 0 && (e.className = Ia(this.classes));
		for (var n = 0; n < this.children.length; n++)
			if (this.children[n] instanceof zn && this.children[n + 1] instanceof zn) {
				for (
					var a = this.children[n].toText() + this.children[++n].toText();
					this.children[n + 1] instanceof zn;

				)
					a += this.children[++n].toText();
				e.appendChild(new zn(a).toNode());
			} else e.appendChild(this.children[n].toNode());
		return e;
	}
	toMarkup() {
		var e = "<" + this.type;
		for (var t in this.attributes)
			Object.prototype.hasOwnProperty.call(this.attributes, t) &&
				((e += " " + t + '="'), (e += Je.escape(this.attributes[t])), (e += '"'));
		this.classes.length > 0 && (e += ' class ="' + Je.escape(Ia(this.classes)) + '"'), (e += ">");
		for (var n = 0; n < this.children.length; n++) e += this.children[n].toMarkup();
		return (e += "</" + this.type + ">"), e;
	}
	toText() {
		return this.children.map((e) => e.toText()).join("");
	}
}
class zn {
	constructor(e) {
		(this.text = void 0), (this.text = e);
	}
	toNode() {
		return document.createTextNode(this.text);
	}
	toMarkup() {
		return Je.escape(this.toText());
	}
	toText() {
		return this.text;
	}
}
class Y5 {
	constructor(e) {
		(this.width = void 0),
			(this.character = void 0),
			(this.width = e),
			e >= 0.05555 && e <= 0.05556
				? (this.character = " ")
				: e >= 0.1666 && e <= 0.1667
					? (this.character = " ")
					: e >= 0.2222 && e <= 0.2223
						? (this.character = " ")
						: e >= 0.2777 && e <= 0.2778
							? (this.character = "  ")
							: e >= -0.05556 && e <= -0.05555
								? (this.character = " ⁣")
								: e >= -0.1667 && e <= -0.1666
									? (this.character = " ⁣")
									: e >= -0.2223 && e <= -0.2222
										? (this.character = " ⁣")
										: e >= -0.2778 && e <= -0.2777
											? (this.character = " ⁣")
											: (this.character = null);
	}
	toNode() {
		if (this.character) return document.createTextNode(this.character);
		var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
		return e.setAttribute("width", xe(this.width)), e;
	}
	toMarkup() {
		return this.character
			? "<mtext>" + this.character + "</mtext>"
			: '<mspace width="' + xe(this.width) + '"/>';
	}
	toText() {
		return this.character ? this.character : " ";
	}
}
var ue = { MathNode: $r, TextNode: zn, SpaceNode: Y5, newDocumentFragment: Of },
	hn = function (e, t, n) {
		return (
			Vt[t][e] &&
				Vt[t][e].replace &&
				e.charCodeAt(0) !== 55349 &&
				!(
					kf.hasOwnProperty(e) &&
					n &&
					((n.fontFamily && n.fontFamily.slice(4, 6) === "tt") ||
						(n.font && n.font.slice(4, 6) === "tt"))
				) &&
				(e = Vt[t][e].replace),
			new ue.TextNode(e)
		);
	},
	_u = function (e) {
		return e.length === 1 ? e[0] : new ue.MathNode("mrow", e);
	},
	ku = function (e, t) {
		if (t.fontFamily === "texttt") return "monospace";
		if (t.fontFamily === "textsf")
			return t.fontShape === "textit" && t.fontWeight === "textbf"
				? "sans-serif-bold-italic"
				: t.fontShape === "textit"
					? "sans-serif-italic"
					: t.fontWeight === "textbf"
						? "bold-sans-serif"
						: "sans-serif";
		if (t.fontShape === "textit" && t.fontWeight === "textbf") return "bold-italic";
		if (t.fontShape === "textit") return "italic";
		if (t.fontWeight === "textbf") return "bold";
		var n = t.font;
		if (!n || n === "mathnormal") return null;
		var a = e.mode;
		if (n === "mathit") return "italic";
		if (n === "boldsymbol") return e.type === "textord" ? "bold" : "bold-italic";
		if (n === "mathbf") return "bold";
		if (n === "mathbb") return "double-struck";
		if (n === "mathsfit") return "sans-serif-italic";
		if (n === "mathfrak") return "fraktur";
		if (n === "mathscr" || n === "mathcal") return "script";
		if (n === "mathsf") return "sans-serif";
		if (n === "mathtt") return "monospace";
		var i = e.text;
		if (Je.contains(["\\imath", "\\jmath"], i)) return null;
		Vt[a][i] && Vt[a][i].replace && (i = Vt[a][i].replace);
		var o = U.fontMap[n].fontName;
		return yu(i, o, a) ? U.fontMap[n].variant : null;
	};
function Hl(r) {
	if (!r) return !1;
	if (r.type === "mi" && r.children.length === 1) {
		var e = r.children[0];
		return e instanceof zn && e.text === ".";
	} else if (
		r.type === "mo" &&
		r.children.length === 1 &&
		r.getAttribute("separator") === "true" &&
		r.getAttribute("lspace") === "0em" &&
		r.getAttribute("rspace") === "0em"
	) {
		var t = r.children[0];
		return t instanceof zn && t.text === ",";
	} else return !1;
}
var Xr = function (e, t, n) {
		if (e.length === 1) {
			var a = Ut(e[0], t);
			return (
				n &&
					a instanceof $r &&
					a.type === "mo" &&
					(a.setAttribute("lspace", "0em"), a.setAttribute("rspace", "0em")),
				[a]
			);
		}
		for (var i = [], o, s = 0; s < e.length; s++) {
			var l = Ut(e[s], t);
			if (l instanceof $r && o instanceof $r) {
				if (
					l.type === "mtext" &&
					o.type === "mtext" &&
					l.getAttribute("mathvariant") === o.getAttribute("mathvariant")
				) {
					o.children.push(...l.children);
					continue;
				} else if (l.type === "mn" && o.type === "mn") {
					o.children.push(...l.children);
					continue;
				} else if (Hl(l) && o.type === "mn") {
					o.children.push(...l.children);
					continue;
				} else if (l.type === "mn" && Hl(o)) (l.children = [...o.children, ...l.children]), i.pop();
				else if (
					(l.type === "msup" || l.type === "msub") &&
					l.children.length >= 1 &&
					(o.type === "mn" || Hl(o))
				) {
					var u = l.children[0];
					u instanceof $r &&
						u.type === "mn" &&
						((u.children = [...o.children, ...u.children]), i.pop());
				} else if (o.type === "mi" && o.children.length === 1) {
					var h = o.children[0];
					if (
						h instanceof zn &&
						h.text === "̸" &&
						(l.type === "mo" || l.type === "mi" || l.type === "mn")
					) {
						var f = l.children[0];
						f instanceof zn &&
							f.text.length > 0 &&
							((f.text = f.text.slice(0, 1) + "̸" + f.text.slice(1)), i.pop());
					}
				}
			}
			i.push(l), (o = l);
		}
		return i;
	},
	La = function (e, t, n) {
		return _u(Xr(e, t, n));
	},
	Ut = function (e, t) {
		if (!e) return new ue.MathNode("mrow");
		if (D0[e.type]) {
			var n = D0[e.type](e, t);
			return n;
		} else throw new fe("Got group of unknown type: '" + e.type + "'");
	};
function l1(r, e, t, n, a) {
	var i = Xr(r, t),
		o;
	i.length === 1 && i[0] instanceof $r && Je.contains(["mrow", "mtable"], i[0].type)
		? (o = i[0])
		: (o = new ue.MathNode("mrow", i));
	var s = new ue.MathNode("annotation", [new ue.TextNode(e)]);
	s.setAttribute("encoding", "application/x-tex");
	var l = new ue.MathNode("semantics", [o, s]),
		u = new ue.MathNode("math", [l]);
	u.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"),
		n && u.setAttribute("display", "block");
	var h = a ? "katex" : "katex-mathml";
	return U.makeSpan([h], [u]);
}
var Nf = function (e) {
		return new $n({
			style: e.displayMode ? et.DISPLAY : et.TEXT,
			maxSize: e.maxSize,
			minRuleThickness: e.minRuleThickness,
		});
	},
	Rf = function (e, t) {
		if (t.displayMode) {
			var n = ["katex-display"];
			t.leqno && n.push("leqno"), t.fleqn && n.push("fleqn"), (e = U.makeSpan(n, [e]));
		}
		return e;
	},
	X5 = function (e, t, n) {
		var a = Nf(n),
			i;
		if (n.output === "mathml") return l1(e, t, a, n.displayMode, !0);
		if (n.output === "html") {
			var o = Fc(e, a);
			i = U.makeSpan(["katex"], [o]);
		} else {
			var s = l1(e, t, a, n.displayMode, !1),
				l = Fc(e, a);
			i = U.makeSpan(["katex"], [s, l]);
		}
		return Rf(i, n);
	},
	Z5 = function (e, t, n) {
		var a = Nf(n),
			i = Fc(e, a),
			o = U.makeSpan(["katex"], [i]);
		return Rf(o, n);
	},
	j5 = {
		widehat: "^",
		widecheck: "ˇ",
		widetilde: "~",
		utilde: "~",
		overleftarrow: "←",
		underleftarrow: "←",
		xleftarrow: "←",
		overrightarrow: "→",
		underrightarrow: "→",
		xrightarrow: "→",
		underbrace: "⏟",
		overbrace: "⏞",
		overgroup: "⏠",
		undergroup: "⏡",
		overleftrightarrow: "↔",
		underleftrightarrow: "↔",
		xleftrightarrow: "↔",
		Overrightarrow: "⇒",
		xRightarrow: "⇒",
		overleftharpoon: "↼",
		xleftharpoonup: "↼",
		overrightharpoon: "⇀",
		xrightharpoonup: "⇀",
		xLeftarrow: "⇐",
		xLeftrightarrow: "⇔",
		xhookleftarrow: "↩",
		xhookrightarrow: "↪",
		xmapsto: "↦",
		xrightharpoondown: "⇁",
		xleftharpoondown: "↽",
		xrightleftharpoons: "⇌",
		xleftrightharpoons: "⇋",
		xtwoheadleftarrow: "↞",
		xtwoheadrightarrow: "↠",
		xlongequal: "=",
		xtofrom: "⇄",
		xrightleftarrows: "⇄",
		xrightequilibrium: "⇌",
		xleftequilibrium: "⇋",
		"\\cdrightarrow": "→",
		"\\cdleftarrow": "←",
		"\\cdlongequal": "=",
	},
	J5 = function (e) {
		var t = new ue.MathNode("mo", [new ue.TextNode(j5[e.replace(/^\\/, "")])]);
		return t.setAttribute("stretchy", "true"), t;
	},
	Q5 = {
		overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
		overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
		underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
		underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
		xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
		"\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
		xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
		"\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
		Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
		xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
		xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
		overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
		xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
		xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
		overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
		xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
		xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
		xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
		"\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
		xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
		xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
		overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
		overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
		underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
		underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
		xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
		xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
		xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
		xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
		xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
		xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
		overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
		underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
		overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
		undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
		xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
		xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
		xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
		xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
		xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716],
	},
	$5 = function (e) {
		return e.type === "ordgroup" ? e.body.length : 1;
	},
	e6 = function (e, t) {
		function n() {
			var s = 4e5,
				l = e.label.slice(1);
			if (Je.contains(["widehat", "widecheck", "widetilde", "utilde"], l)) {
				var u = e,
					h = $5(u.base),
					f,
					p,
					g;
				if (h > 5)
					l === "widehat" || l === "widecheck"
						? ((f = 420), (s = 2364), (g = 0.42), (p = l + "4"))
						: ((f = 312), (s = 2340), (g = 0.34), (p = "tilde4"));
				else {
					var y = [1, 1, 2, 2, 3, 3][h];
					l === "widehat" || l === "widecheck"
						? ((s = [0, 1062, 2364, 2364, 2364][y]),
							(f = [0, 239, 300, 360, 420][y]),
							(g = [0, 0.24, 0.3, 0.3, 0.36, 0.42][y]),
							(p = l + y))
						: ((s = [0, 600, 1033, 2339, 2340][y]),
							(f = [0, 260, 286, 306, 312][y]),
							(g = [0, 0.26, 0.286, 0.3, 0.306, 0.34][y]),
							(p = "tilde" + y));
				}
				var x = new Da(p),
					_ = new ha([x], {
						width: "100%",
						height: xe(g),
						viewBox: "0 0 " + s + " " + f,
						preserveAspectRatio: "none",
					});
				return { span: U.makeSvgSpan([], [_], t), minWidth: 0, height: g };
			} else {
				var k = [],
					T = Q5[l],
					[B, A, N] = T,
					z = N / 1e3,
					I = B.length,
					G,
					re;
				if (I === 1) {
					var V = T[3];
					(G = ["hide-tail"]), (re = [V]);
				} else if (I === 2)
					(G = ["halfarrow-left", "halfarrow-right"]), (re = ["xMinYMin", "xMaxYMin"]);
				else if (I === 3)
					(G = ["brace-left", "brace-center", "brace-right"]),
						(re = ["xMinYMin", "xMidYMin", "xMaxYMin"]);
				else
					throw new Error(
						`Correct katexImagesData or update code here to support
                    ` +
							I +
							" children."
					);
				for (var se = 0; se < I; se++) {
					var ce = new Da(B[se]),
						Ce = new ha([ce], {
							width: "400em",
							height: xe(z),
							viewBox: "0 0 " + s + " " + N,
							preserveAspectRatio: re[se] + " slice",
						}),
						Q = U.makeSvgSpan([G[se]], [Ce], t);
					if (I === 1) return { span: Q, minWidth: A, height: z };
					(Q.style.height = xe(z)), k.push(Q);
				}
				return { span: U.makeSpan(["stretchy"], k, t), minWidth: A, height: z };
			}
		}
		var { span: a, minWidth: i, height: o } = n();
		return (a.height = o), (a.style.height = xe(o)), i > 0 && (a.style.minWidth = xe(i)), a;
	},
	t6 = function (e, t, n, a, i) {
		var o,
			s = e.height + e.depth + n + a;
		if (/fbox|color|angl/.test(t)) {
			if (((o = U.makeSpan(["stretchy", t], [], i)), t === "fbox")) {
				var l = i.color && i.getColor();
				l && (o.style.borderColor = l);
			}
		} else {
			var u = [];
			/^[bx]cancel$/.test(t) &&
				u.push(new zc({ x1: "0", y1: "0", x2: "100%", y2: "100%", "stroke-width": "0.046em" })),
				/^x?cancel$/.test(t) &&
					u.push(new zc({ x1: "0", y1: "100%", x2: "100%", y2: "0", "stroke-width": "0.046em" }));
			var h = new ha(u, { width: "100%", height: xe(s) });
			o = U.makeSvgSpan([], [h], i);
		}
		return (o.height = s), (o.style.height = xe(s)), o;
	},
	ma = { encloseSpan: t6, mathMLnode: J5, svgSpan: e6 };
function ft(r, e) {
	if (!r || r.type !== e)
		throw new Error(
			"Expected node of type " + e + ", but got " + (r ? "node of type " + r.type : String(r))
		);
	return r;
}
function Su(r) {
	var e = xl(r);
	if (!e)
		throw new Error(
			"Expected node of symbol group type, but got " + (r ? "node of type " + r.type : String(r))
		);
	return e;
}
function xl(r) {
	return r && (r.type === "atom" || T5.hasOwnProperty(r.type)) ? r : null;
}
var Eu = (r, e) => {
		var t, n, a;
		r && r.type === "supsub"
			? ((n = ft(r.base, "accent")), (t = n.base), (r.base = t), (a = S5(At(r, e))), (r.base = n))
			: ((n = ft(r, "accent")), (t = n.base));
		var i = At(t, e.havingCrampedStyle()),
			o = n.isShifty && Je.isCharacterBox(t),
			s = 0;
		if (o) {
			var l = Je.getBaseElem(t),
				u = At(l, e.havingCrampedStyle());
			s = t1(u).skew;
		}
		var h = n.label === "\\c",
			f = h ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight),
			p;
		if (n.isStretchy)
			(p = ma.svgSpan(n, e)),
				(p = U.makeVList(
					{
						positionType: "firstBaseline",
						children: [
							{ type: "elem", elem: i },
							{
								type: "elem",
								elem: p,
								wrapperClasses: ["svg-align"],
								wrapperStyle:
									s > 0
										? { width: "calc(100% - " + xe(2 * s) + ")", marginLeft: xe(2 * s) }
										: void 0,
							},
						],
					},
					e
				));
		else {
			var g, y;
			n.label === "\\vec"
				? ((g = U.staticSvg("vec", e)), (y = U.svgData.vec[1]))
				: ((g = U.makeOrd({ mode: n.mode, text: n.label }, e, "textord")),
					(g = t1(g)),
					(g.italic = 0),
					(y = g.width),
					h && (f += g.depth)),
				(p = U.makeSpan(["accent-body"], [g]));
			var x = n.label === "\\textcircled";
			x && (p.classes.push("accent-full"), (f = i.height));
			var _ = s;
			x || (_ -= y / 2),
				(p.style.left = xe(_)),
				n.label === "\\textcircled" && (p.style.top = ".2em"),
				(p = U.makeVList(
					{
						positionType: "firstBaseline",
						children: [
							{ type: "elem", elem: i },
							{ type: "kern", size: -f },
							{ type: "elem", elem: p },
						],
					},
					e
				));
		}
		var k = U.makeSpan(["mord", "accent"], [p], e);
		return a
			? ((a.children[0] = k), (a.height = Math.max(k.height, a.height)), (a.classes[0] = "mord"), a)
			: k;
	},
	If = (r, e) => {
		var t = r.isStretchy ? ma.mathMLnode(r.label) : new ue.MathNode("mo", [hn(r.label, r.mode)]),
			n = new ue.MathNode("mover", [Ut(r.base, e), t]);
		return n.setAttribute("accent", "true"), n;
	},
	r6 = new RegExp(
		[
			"\\acute",
			"\\grave",
			"\\ddot",
			"\\tilde",
			"\\bar",
			"\\breve",
			"\\check",
			"\\hat",
			"\\vec",
			"\\dot",
			"\\mathring",
		]
			.map((r) => "\\" + r)
			.join("|")
	);
Ae({
	type: "accent",
	names: [
		"\\acute",
		"\\grave",
		"\\ddot",
		"\\tilde",
		"\\bar",
		"\\breve",
		"\\check",
		"\\hat",
		"\\vec",
		"\\dot",
		"\\mathring",
		"\\widecheck",
		"\\widehat",
		"\\widetilde",
		"\\overrightarrow",
		"\\overleftarrow",
		"\\Overrightarrow",
		"\\overleftrightarrow",
		"\\overgroup",
		"\\overlinesegment",
		"\\overleftharpoon",
		"\\overrightharpoon",
	],
	props: { numArgs: 1 },
	handler: (r, e) => {
		var t = L0(e[0]),
			n = !r6.test(r.funcName),
			a =
				!n ||
				r.funcName === "\\widehat" ||
				r.funcName === "\\widetilde" ||
				r.funcName === "\\widecheck";
		return {
			type: "accent",
			mode: r.parser.mode,
			label: r.funcName,
			isStretchy: n,
			isShifty: a,
			base: t,
		};
	},
	htmlBuilder: Eu,
	mathmlBuilder: If,
});
Ae({
	type: "accent",
	names: [
		"\\'",
		"\\`",
		"\\^",
		"\\~",
		"\\=",
		"\\u",
		"\\.",
		'\\"',
		"\\c",
		"\\r",
		"\\H",
		"\\v",
		"\\textcircled",
	],
	props: { numArgs: 1, allowedInText: !0, allowedInMath: !0, argTypes: ["primitive"] },
	handler: (r, e) => {
		var t = e[0],
			n = r.parser.mode;
		return (
			n === "math" &&
				(r.parser.settings.reportNonstrict(
					"mathVsTextAccents",
					"LaTeX's accent " + r.funcName + " works only in text mode"
				),
				(n = "text")),
			{ type: "accent", mode: n, label: r.funcName, isStretchy: !1, isShifty: !0, base: t }
		);
	},
	htmlBuilder: Eu,
	mathmlBuilder: If,
});
Ae({
	type: "accentUnder",
	names: [
		"\\underleftarrow",
		"\\underrightarrow",
		"\\underleftrightarrow",
		"\\undergroup",
		"\\underlinesegment",
		"\\utilde",
	],
	props: { numArgs: 1 },
	handler: (r, e) => {
		var { parser: t, funcName: n } = r,
			a = e[0];
		return { type: "accentUnder", mode: t.mode, label: n, base: a };
	},
	htmlBuilder: (r, e) => {
		var t = At(r.base, e),
			n = ma.svgSpan(r, e),
			a = r.label === "\\utilde" ? 0.12 : 0,
			i = U.makeVList(
				{
					positionType: "top",
					positionData: t.height,
					children: [
						{ type: "elem", elem: n, wrapperClasses: ["svg-align"] },
						{ type: "kern", size: a },
						{ type: "elem", elem: t },
					],
				},
				e
			);
		return U.makeSpan(["mord", "accentunder"], [i], e);
	},
	mathmlBuilder: (r, e) => {
		var t = ma.mathMLnode(r.label),
			n = new ue.MathNode("munder", [Ut(r.base, e), t]);
		return n.setAttribute("accentunder", "true"), n;
	},
});
var Xs = (r) => {
	var e = new ue.MathNode("mpadded", r ? [r] : []);
	return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
Ae({
	type: "xArrow",
	names: [
		"\\xleftarrow",
		"\\xrightarrow",
		"\\xLeftarrow",
		"\\xRightarrow",
		"\\xleftrightarrow",
		"\\xLeftrightarrow",
		"\\xhookleftarrow",
		"\\xhookrightarrow",
		"\\xmapsto",
		"\\xrightharpoondown",
		"\\xrightharpoonup",
		"\\xleftharpoondown",
		"\\xleftharpoonup",
		"\\xrightleftharpoons",
		"\\xleftrightharpoons",
		"\\xlongequal",
		"\\xtwoheadrightarrow",
		"\\xtwoheadleftarrow",
		"\\xtofrom",
		"\\xrightleftarrows",
		"\\xrightequilibrium",
		"\\xleftequilibrium",
		"\\\\cdrightarrow",
		"\\\\cdleftarrow",
		"\\\\cdlongequal",
	],
	props: { numArgs: 1, numOptionalArgs: 1 },
	handler(r, e, t) {
		var { parser: n, funcName: a } = r;
		return { type: "xArrow", mode: n.mode, label: a, body: e[0], below: t[0] };
	},
	htmlBuilder(r, e) {
		var t = e.style,
			n = e.havingStyle(t.sup()),
			a = U.wrapFragment(At(r.body, n, e), e),
			i = r.label.slice(0, 2) === "\\x" ? "x" : "cd";
		a.classes.push(i + "-arrow-pad");
		var o;
		r.below &&
			((n = e.havingStyle(t.sub())),
			(o = U.wrapFragment(At(r.below, n, e), e)),
			o.classes.push(i + "-arrow-pad"));
		var s = ma.svgSpan(r, e),
			l = -e.fontMetrics().axisHeight + 0.5 * s.height,
			u = -e.fontMetrics().axisHeight - 0.5 * s.height - 0.111;
		(a.depth > 0.25 || r.label === "\\xleftequilibrium") && (u -= a.depth);
		var h;
		if (o) {
			var f = -e.fontMetrics().axisHeight + o.height + 0.5 * s.height + 0.111;
			h = U.makeVList(
				{
					positionType: "individualShift",
					children: [
						{ type: "elem", elem: a, shift: u },
						{ type: "elem", elem: s, shift: l },
						{ type: "elem", elem: o, shift: f },
					],
				},
				e
			);
		} else
			h = U.makeVList(
				{
					positionType: "individualShift",
					children: [
						{ type: "elem", elem: a, shift: u },
						{ type: "elem", elem: s, shift: l },
					],
				},
				e
			);
		return (
			h.children[0].children[0].children[1].classes.push("svg-align"),
			U.makeSpan(["mrel", "x-arrow"], [h], e)
		);
	},
	mathmlBuilder(r, e) {
		var t = ma.mathMLnode(r.label);
		t.setAttribute("minsize", r.label.charAt(0) === "x" ? "1.75em" : "3.0em");
		var n;
		if (r.body) {
			var a = Xs(Ut(r.body, e));
			if (r.below) {
				var i = Xs(Ut(r.below, e));
				n = new ue.MathNode("munderover", [t, i, a]);
			} else n = new ue.MathNode("mover", [t, a]);
		} else if (r.below) {
			var o = Xs(Ut(r.below, e));
			n = new ue.MathNode("munder", [t, o]);
		} else (n = Xs()), (n = new ue.MathNode("mover", [t, n]));
		return n;
	},
});
var n6 = U.makeSpan;
function Df(r, e) {
	var t = xr(r.body, e, !0);
	return n6([r.mclass], t, e);
}
function Lf(r, e) {
	var t,
		n = Xr(r.body, e);
	return (
		r.mclass === "minner"
			? (t = new ue.MathNode("mpadded", n))
			: r.mclass === "mord"
				? r.isCharacterBox
					? ((t = n[0]), (t.type = "mi"))
					: (t = new ue.MathNode("mi", n))
				: (r.isCharacterBox ? ((t = n[0]), (t.type = "mo")) : (t = new ue.MathNode("mo", n)),
					r.mclass === "mbin"
						? ((t.attributes.lspace = "0.22em"), (t.attributes.rspace = "0.22em"))
						: r.mclass === "mpunct"
							? ((t.attributes.lspace = "0em"), (t.attributes.rspace = "0.17em"))
							: r.mclass === "mopen" || r.mclass === "mclose"
								? ((t.attributes.lspace = "0em"), (t.attributes.rspace = "0em"))
								: r.mclass === "minner" &&
									((t.attributes.lspace = "0.0556em"), (t.attributes.width = "+0.1111em"))),
		t
	);
}
Ae({
	type: "mclass",
	names: [
		"\\mathord",
		"\\mathbin",
		"\\mathrel",
		"\\mathopen",
		"\\mathclose",
		"\\mathpunct",
		"\\mathinner",
	],
	props: { numArgs: 1, primitive: !0 },
	handler(r, e) {
		var { parser: t, funcName: n } = r,
			a = e[0];
		return {
			type: "mclass",
			mode: t.mode,
			mclass: "m" + n.slice(5),
			body: ir(a),
			isCharacterBox: Je.isCharacterBox(a),
		};
	},
	htmlBuilder: Df,
	mathmlBuilder: Lf,
});
var wl = (r) => {
	var e = r.type === "ordgroup" && r.body.length ? r.body[0] : r;
	return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
Ae({
	type: "mclass",
	names: ["\\@binrel"],
	props: { numArgs: 2 },
	handler(r, e) {
		var { parser: t } = r;
		return {
			type: "mclass",
			mode: t.mode,
			mclass: wl(e[0]),
			body: ir(e[1]),
			isCharacterBox: Je.isCharacterBox(e[1]),
		};
	},
});
Ae({
	type: "mclass",
	names: ["\\stackrel", "\\overset", "\\underset"],
	props: { numArgs: 2 },
	handler(r, e) {
		var { parser: t, funcName: n } = r,
			a = e[1],
			i = e[0],
			o;
		n !== "\\stackrel" ? (o = wl(a)) : (o = "mrel");
		var s = {
				type: "op",
				mode: a.mode,
				limits: !0,
				alwaysHandleSupSub: !0,
				parentIsSupSub: !1,
				symbol: !1,
				suppressBaseShift: n !== "\\stackrel",
				body: ir(a),
			},
			l = {
				type: "supsub",
				mode: i.mode,
				base: s,
				sup: n === "\\underset" ? null : i,
				sub: n === "\\underset" ? i : null,
			};
		return {
			type: "mclass",
			mode: t.mode,
			mclass: o,
			body: [l],
			isCharacterBox: Je.isCharacterBox(l),
		};
	},
	htmlBuilder: Df,
	mathmlBuilder: Lf,
});
Ae({
	type: "pmb",
	names: ["\\pmb"],
	props: { numArgs: 1, allowedInText: !0 },
	handler(r, e) {
		var { parser: t } = r;
		return { type: "pmb", mode: t.mode, mclass: wl(e[0]), body: ir(e[0]) };
	},
	htmlBuilder(r, e) {
		var t = xr(r.body, e, !0),
			n = U.makeSpan([r.mclass], t, e);
		return (n.style.textShadow = "0.02em 0.01em 0.04px"), n;
	},
	mathmlBuilder(r, e) {
		var t = Xr(r.body, e),
			n = new ue.MathNode("mstyle", t);
		return n.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), n;
	},
});
var a6 = {
		">": "\\\\cdrightarrow",
		"<": "\\\\cdleftarrow",
		"=": "\\\\cdlongequal",
		A: "\\uparrow",
		V: "\\downarrow",
		"|": "\\Vert",
		".": "no arrow",
	},
	c1 = () => ({ type: "styling", body: [], mode: "math", style: "display" }),
	u1 = (r) => r.type === "textord" && r.text === "@",
	i6 = (r, e) => (r.type === "mathord" || r.type === "atom") && r.text === e;
function o6(r, e, t) {
	var n = a6[r];
	switch (n) {
		case "\\\\cdrightarrow":
		case "\\\\cdleftarrow":
			return t.callFunction(n, [e[0]], [e[1]]);
		case "\\uparrow":
		case "\\downarrow": {
			var a = t.callFunction("\\\\cdleft", [e[0]], []),
				i = { type: "atom", text: n, mode: "math", family: "rel" },
				o = t.callFunction("\\Big", [i], []),
				s = t.callFunction("\\\\cdright", [e[1]], []),
				l = { type: "ordgroup", mode: "math", body: [a, o, s] };
			return t.callFunction("\\\\cdparent", [l], []);
		}
		case "\\\\cdlongequal":
			return t.callFunction("\\\\cdlongequal", [], []);
		case "\\Vert": {
			var u = { type: "textord", text: "\\Vert", mode: "math" };
			return t.callFunction("\\Big", [u], []);
		}
		default:
			return { type: "textord", text: " ", mode: "math" };
	}
}
function s6(r) {
	var e = [];
	for (
		r.gullet.beginGroup(), r.gullet.macros.set("\\cr", "\\\\\\relax"), r.gullet.beginGroup();
		;

	) {
		e.push(r.parseExpression(!1, "\\\\")), r.gullet.endGroup(), r.gullet.beginGroup();
		var t = r.fetch().text;
		if (t === "&" || t === "\\\\") r.consume();
		else if (t === "\\end") {
			e[e.length - 1].length === 0 && e.pop();
			break;
		} else throw new fe("Expected \\\\ or \\cr or \\end", r.nextToken);
	}
	for (var n = [], a = [n], i = 0; i < e.length; i++) {
		for (var o = e[i], s = c1(), l = 0; l < o.length; l++)
			if (!u1(o[l])) s.body.push(o[l]);
			else {
				n.push(s), (l += 1);
				var u = Su(o[l]).text,
					h = new Array(2);
				if (
					((h[0] = { type: "ordgroup", mode: "math", body: [] }),
					(h[1] = { type: "ordgroup", mode: "math", body: [] }),
					!("=|.".indexOf(u) > -1))
				)
					if ("<>AV".indexOf(u) > -1)
						for (var f = 0; f < 2; f++) {
							for (var p = !0, g = l + 1; g < o.length; g++) {
								if (i6(o[g], u)) {
									(p = !1), (l = g);
									break;
								}
								if (u1(o[g]))
									throw new fe("Missing a " + u + " character to complete a CD arrow.", o[g]);
								h[f].body.push(o[g]);
							}
							if (p) throw new fe("Missing a " + u + " character to complete a CD arrow.", o[l]);
						}
					else throw new fe('Expected one of "<>AV=|." after @', o[l]);
				var y = o6(u, h, r),
					x = { type: "styling", body: [y], mode: "math", style: "display" };
				n.push(x), (s = c1());
			}
		i % 2 === 0 ? n.push(s) : n.shift(), (n = []), a.push(n);
	}
	r.gullet.endGroup(), r.gullet.endGroup();
	var _ = new Array(a[0].length).fill({ type: "align", align: "c", pregap: 0.25, postgap: 0.25 });
	return {
		type: "array",
		mode: "math",
		body: a,
		arraystretch: 1,
		addJot: !0,
		rowGaps: [null],
		cols: _,
		colSeparationType: "CD",
		hLinesBeforeRow: new Array(a.length + 1).fill([]),
	};
}
Ae({
	type: "cdlabel",
	names: ["\\\\cdleft", "\\\\cdright"],
	props: { numArgs: 1 },
	handler(r, e) {
		var { parser: t, funcName: n } = r;
		return { type: "cdlabel", mode: t.mode, side: n.slice(4), label: e[0] };
	},
	htmlBuilder(r, e) {
		var t = e.havingStyle(e.style.sup()),
			n = U.wrapFragment(At(r.label, t, e), e);
		return (
			n.classes.push("cd-label-" + r.side),
			(n.style.bottom = xe(0.8 - n.depth)),
			(n.height = 0),
			(n.depth = 0),
			n
		);
	},
	mathmlBuilder(r, e) {
		var t = new ue.MathNode("mrow", [Ut(r.label, e)]);
		return (
			(t = new ue.MathNode("mpadded", [t])),
			t.setAttribute("width", "0"),
			r.side === "left" && t.setAttribute("lspace", "-1width"),
			t.setAttribute("voffset", "0.7em"),
			(t = new ue.MathNode("mstyle", [t])),
			t.setAttribute("displaystyle", "false"),
			t.setAttribute("scriptlevel", "1"),
			t
		);
	},
});
Ae({
	type: "cdlabelparent",
	names: ["\\\\cdparent"],
	props: { numArgs: 1 },
	handler(r, e) {
		var { parser: t } = r;
		return { type: "cdlabelparent", mode: t.mode, fragment: e[0] };
	},
	htmlBuilder(r, e) {
		var t = U.wrapFragment(At(r.fragment, e), e);
		return t.classes.push("cd-vert-arrow"), t;
	},
	mathmlBuilder(r, e) {
		return new ue.MathNode("mrow", [Ut(r.fragment, e)]);
	},
});
Ae({
	type: "textord",
	names: ["\\@char"],
	props: { numArgs: 1, allowedInText: !0 },
	handler(r, e) {
		for (
			var { parser: t } = r, n = ft(e[0], "ordgroup"), a = n.body, i = "", o = 0;
			o < a.length;
			o++
		) {
			var s = ft(a[o], "textord");
			i += s.text;
		}
		var l = parseInt(i),
			u;
		if (isNaN(l)) throw new fe("\\@char has non-numeric argument " + i);
		if (l < 0 || l >= 1114111) throw new fe("\\@char with invalid code point " + i);
		return (
			l <= 65535
				? (u = String.fromCharCode(l))
				: ((l -= 65536), (u = String.fromCharCode((l >> 10) + 55296, (l & 1023) + 56320))),
			{ type: "textord", mode: t.mode, text: u }
		);
	},
});
var zf = (r, e) => {
		var t = xr(r.body, e.withColor(r.color), !1);
		return U.makeFragment(t);
	},
	Bf = (r, e) => {
		var t = Xr(r.body, e.withColor(r.color)),
			n = new ue.MathNode("mstyle", t);
		return n.setAttribute("mathcolor", r.color), n;
	};
Ae({
	type: "color",
	names: ["\\textcolor"],
	props: { numArgs: 2, allowedInText: !0, argTypes: ["color", "original"] },
	handler(r, e) {
		var { parser: t } = r,
			n = ft(e[0], "color-token").color,
			a = e[1];
		return { type: "color", mode: t.mode, color: n, body: ir(a) };
	},
	htmlBuilder: zf,
	mathmlBuilder: Bf,
});
Ae({
	type: "color",
	names: ["\\color"],
	props: { numArgs: 1, allowedInText: !0, argTypes: ["color"] },
	handler(r, e) {
		var { parser: t, breakOnTokenText: n } = r,
			a = ft(e[0], "color-token").color;
		t.gullet.macros.set("\\current@color", a);
		var i = t.parseExpression(!0, n);
		return { type: "color", mode: t.mode, color: a, body: i };
	},
	htmlBuilder: zf,
	mathmlBuilder: Bf,
});
Ae({
	type: "cr",
	names: ["\\\\"],
	props: { numArgs: 0, numOptionalArgs: 0, allowedInText: !0 },
	handler(r, e, t) {
		var { parser: n } = r,
			a = n.gullet.future().text === "[" ? n.parseSizeGroup(!0) : null,
			i =
				!n.settings.displayMode ||
				!n.settings.useStrictBehavior(
					"newLineInDisplayMode",
					"In LaTeX, \\\\ or \\newline does nothing in display mode"
				);
		return { type: "cr", mode: n.mode, newLine: i, size: a && ft(a, "size").value };
	},
	htmlBuilder(r, e) {
		var t = U.makeSpan(["mspace"], [], e);
		return (
			r.newLine && (t.classes.push("newline"), r.size && (t.style.marginTop = xe(Jt(r.size, e)))), t
		);
	},
	mathmlBuilder(r, e) {
		var t = new ue.MathNode("mspace");
		return (
			r.newLine &&
				(t.setAttribute("linebreak", "newline"),
				r.size && t.setAttribute("height", xe(Jt(r.size, e)))),
			t
		);
	},
});
var qc = {
		"\\global": "\\global",
		"\\long": "\\\\globallong",
		"\\\\globallong": "\\\\globallong",
		"\\def": "\\gdef",
		"\\gdef": "\\gdef",
		"\\edef": "\\xdef",
		"\\xdef": "\\xdef",
		"\\let": "\\\\globallet",
		"\\futurelet": "\\\\globalfuture",
	},
	Pf = (r) => {
		var e = r.text;
		if (/^(?:[\\{}$&#^_]|EOF)$/.test(e)) throw new fe("Expected a control sequence", r);
		return e;
	},
	l6 = (r) => {
		var e = r.gullet.popToken();
		return (
			e.text === "=" && ((e = r.gullet.popToken()), e.text === " " && (e = r.gullet.popToken())), e
		);
	},
	Ff = (r, e, t, n) => {
		var a = r.gullet.macros.get(t.text);
		a == null &&
			((t.noexpand = !0),
			(a = { tokens: [t], numArgs: 0, unexpandable: !r.gullet.isExpandable(t.text) })),
			r.gullet.macros.set(e, a, n);
	};
Ae({
	type: "internal",
	names: ["\\global", "\\long", "\\\\globallong"],
	props: { numArgs: 0, allowedInText: !0 },
	handler(r) {
		var { parser: e, funcName: t } = r;
		e.consumeSpaces();
		var n = e.fetch();
		if (qc[n.text])
			return (
				(t === "\\global" || t === "\\\\globallong") && (n.text = qc[n.text]),
				ft(e.parseFunction(), "internal")
			);
		throw new fe("Invalid token after macro prefix", n);
	},
});
Ae({
	type: "internal",
	names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
	props: { numArgs: 0, allowedInText: !0, primitive: !0 },
	handler(r) {
		var { parser: e, funcName: t } = r,
			n = e.gullet.popToken(),
			a = n.text;
		if (/^(?:[\\{}$&#^_]|EOF)$/.test(a)) throw new fe("Expected a control sequence", n);
		for (var i = 0, o, s = [[]]; e.gullet.future().text !== "{"; )
			if (((n = e.gullet.popToken()), n.text === "#")) {
				if (e.gullet.future().text === "{") {
					(o = e.gullet.future()), s[i].push("{");
					break;
				}
				if (((n = e.gullet.popToken()), !/^[1-9]$/.test(n.text)))
					throw new fe('Invalid argument number "' + n.text + '"');
				if (parseInt(n.text) !== i + 1)
					throw new fe('Argument number "' + n.text + '" out of order');
				i++, s.push([]);
			} else {
				if (n.text === "EOF") throw new fe("Expected a macro definition");
				s[i].push(n.text);
			}
		var { tokens: l } = e.gullet.consumeArg();
		return (
			o && l.unshift(o),
			(t === "\\edef" || t === "\\xdef") && ((l = e.gullet.expandTokens(l)), l.reverse()),
			e.gullet.macros.set(a, { tokens: l, numArgs: i, delimiters: s }, t === qc[t]),
			{ type: "internal", mode: e.mode }
		);
	},
});
Ae({
	type: "internal",
	names: ["\\let", "\\\\globallet"],
	props: { numArgs: 0, allowedInText: !0, primitive: !0 },
	handler(r) {
		var { parser: e, funcName: t } = r,
			n = Pf(e.gullet.popToken());
		e.gullet.consumeSpaces();
		var a = l6(e);
		return Ff(e, n, a, t === "\\\\globallet"), { type: "internal", mode: e.mode };
	},
});
Ae({
	type: "internal",
	names: ["\\futurelet", "\\\\globalfuture"],
	props: { numArgs: 0, allowedInText: !0, primitive: !0 },
	handler(r) {
		var { parser: e, funcName: t } = r,
			n = Pf(e.gullet.popToken()),
			a = e.gullet.popToken(),
			i = e.gullet.popToken();
		return (
			Ff(e, n, i, t === "\\\\globalfuture"),
			e.gullet.pushToken(i),
			e.gullet.pushToken(a),
			{ type: "internal", mode: e.mode }
		);
	},
});
var uo = function (e, t, n) {
		var a = Vt.math[e] && Vt.math[e].replace,
			i = yu(a || e, t, n);
		if (!i) throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
		return i;
	},
	Tu = function (e, t, n, a) {
		var i = n.havingBaseStyle(t),
			o = U.makeSpan(a.concat(i.sizingClasses(n)), [e], n),
			s = i.sizeMultiplier / n.sizeMultiplier;
		return (o.height *= s), (o.depth *= s), (o.maxFontSize = i.sizeMultiplier), o;
	},
	qf = function (e, t, n) {
		var a = t.havingBaseStyle(n),
			i = (1 - t.sizeMultiplier / a.sizeMultiplier) * t.fontMetrics().axisHeight;
		e.classes.push("delimcenter"), (e.style.top = xe(i)), (e.height -= i), (e.depth += i);
	},
	c6 = function (e, t, n, a, i, o) {
		var s = U.makeSymbol(e, "Main-Regular", i, a),
			l = Tu(s, t, a, o);
		return n && qf(l, a, t), l;
	},
	u6 = function (e, t, n, a) {
		return U.makeSymbol(e, "Size" + t + "-Regular", n, a);
	},
	Uf = function (e, t, n, a, i, o) {
		var s = u6(e, t, i, a),
			l = Tu(U.makeSpan(["delimsizing", "size" + t], [s], a), et.TEXT, a, o);
		return n && qf(l, a, et.TEXT), l;
	},
	Gl = function (e, t, n) {
		var a;
		t === "Size1-Regular" ? (a = "delim-size1") : (a = "delim-size4");
		var i = U.makeSpan(["delimsizinginner", a], [U.makeSpan([], [U.makeSymbol(e, t, n)])]);
		return { type: "elem", elem: i };
	},
	Wl = function (e, t, n) {
		var a = Ln["Size4-Regular"][e.charCodeAt(0)]
				? Ln["Size4-Regular"][e.charCodeAt(0)][4]
				: Ln["Size1-Regular"][e.charCodeAt(0)][4],
			i = new Da("inner", p5(e, Math.round(1e3 * t))),
			o = new ha([i], {
				width: xe(a),
				height: xe(t),
				style: "width:" + xe(a),
				viewBox: "0 0 " + 1e3 * a + " " + Math.round(1e3 * t),
				preserveAspectRatio: "xMinYMin",
			}),
			s = U.makeSvgSpan([], [o], n);
		return (
			(s.height = t), (s.style.height = xe(t)), (s.style.width = xe(a)), { type: "elem", elem: s }
		);
	},
	Uc = 0.008,
	Zs = { type: "kern", size: -1 * Uc },
	d6 = ["|", "\\lvert", "\\rvert", "\\vert"],
	h6 = ["\\|", "\\lVert", "\\rVert", "\\Vert"],
	Hf = function (e, t, n, a, i, o) {
		var s,
			l,
			u,
			h,
			f = "",
			p = 0;
		(s = u = h = e), (l = null);
		var g = "Size1-Regular";
		e === "\\uparrow"
			? (u = h = "⏐")
			: e === "\\Uparrow"
				? (u = h = "‖")
				: e === "\\downarrow"
					? (s = u = "⏐")
					: e === "\\Downarrow"
						? (s = u = "‖")
						: e === "\\updownarrow"
							? ((s = "\\uparrow"), (u = "⏐"), (h = "\\downarrow"))
							: e === "\\Updownarrow"
								? ((s = "\\Uparrow"), (u = "‖"), (h = "\\Downarrow"))
								: Je.contains(d6, e)
									? ((u = "∣"), (f = "vert"), (p = 333))
									: Je.contains(h6, e)
										? ((u = "∥"), (f = "doublevert"), (p = 556))
										: e === "[" || e === "\\lbrack"
											? ((s = "⎡"),
												(u = "⎢"),
												(h = "⎣"),
												(g = "Size4-Regular"),
												(f = "lbrack"),
												(p = 667))
											: e === "]" || e === "\\rbrack"
												? ((s = "⎤"),
													(u = "⎥"),
													(h = "⎦"),
													(g = "Size4-Regular"),
													(f = "rbrack"),
													(p = 667))
												: e === "\\lfloor" || e === "⌊"
													? ((u = s = "⎢"),
														(h = "⎣"),
														(g = "Size4-Regular"),
														(f = "lfloor"),
														(p = 667))
													: e === "\\lceil" || e === "⌈"
														? ((s = "⎡"),
															(u = h = "⎢"),
															(g = "Size4-Regular"),
															(f = "lceil"),
															(p = 667))
														: e === "\\rfloor" || e === "⌋"
															? ((u = s = "⎥"),
																(h = "⎦"),
																(g = "Size4-Regular"),
																(f = "rfloor"),
																(p = 667))
															: e === "\\rceil" || e === "⌉"
																? ((s = "⎤"),
																	(u = h = "⎥"),
																	(g = "Size4-Regular"),
																	(f = "rceil"),
																	(p = 667))
																: e === "(" || e === "\\lparen"
																	? ((s = "⎛"),
																		(u = "⎜"),
																		(h = "⎝"),
																		(g = "Size4-Regular"),
																		(f = "lparen"),
																		(p = 875))
																	: e === ")" || e === "\\rparen"
																		? ((s = "⎞"),
																			(u = "⎟"),
																			(h = "⎠"),
																			(g = "Size4-Regular"),
																			(f = "rparen"),
																			(p = 875))
																		: e === "\\{" || e === "\\lbrace"
																			? ((s = "⎧"),
																				(l = "⎨"),
																				(h = "⎩"),
																				(u = "⎪"),
																				(g = "Size4-Regular"))
																			: e === "\\}" || e === "\\rbrace"
																				? ((s = "⎫"),
																					(l = "⎬"),
																					(h = "⎭"),
																					(u = "⎪"),
																					(g = "Size4-Regular"))
																				: e === "\\lgroup" || e === "⟮"
																					? ((s = "⎧"), (h = "⎩"), (u = "⎪"), (g = "Size4-Regular"))
																					: e === "\\rgroup" || e === "⟯"
																						? ((s = "⎫"),
																							(h = "⎭"),
																							(u = "⎪"),
																							(g = "Size4-Regular"))
																						: e === "\\lmoustache" || e === "⎰"
																							? ((s = "⎧"),
																								(h = "⎭"),
																								(u = "⎪"),
																								(g = "Size4-Regular"))
																							: (e === "\\rmoustache" || e === "⎱") &&
																								((s = "⎫"),
																								(h = "⎩"),
																								(u = "⎪"),
																								(g = "Size4-Regular"));
		var y = uo(s, g, i),
			x = y.height + y.depth,
			_ = uo(u, g, i),
			k = _.height + _.depth,
			T = uo(h, g, i),
			B = T.height + T.depth,
			A = 0,
			N = 1;
		if (l !== null) {
			var z = uo(l, g, i);
			(A = z.height + z.depth), (N = 2);
		}
		var I = x + B + A,
			G = Math.max(0, Math.ceil((t - I) / (N * k))),
			re = I + G * N * k,
			V = a.fontMetrics().axisHeight;
		n && (V *= a.sizeMultiplier);
		var se = re / 2 - V,
			ce = [];
		if (f.length > 0) {
			var Ce = re - x - B,
				Q = Math.round(re * 1e3),
				$ = g5(f, Math.round(Ce * 1e3)),
				K = new Da(f, $),
				le = (p / 1e3).toFixed(3) + "em",
				ie = (Q / 1e3).toFixed(3) + "em",
				oe = new ha([K], { width: le, height: ie, viewBox: "0 0 " + p + " " + Q }),
				te = U.makeSvgSpan([], [oe], a);
			(te.height = Q / 1e3),
				(te.style.width = le),
				(te.style.height = ie),
				ce.push({ type: "elem", elem: te });
		} else {
			if ((ce.push(Gl(h, g, i)), ce.push(Zs), l === null)) {
				var Ke = re - x - B + 2 * Uc;
				ce.push(Wl(u, Ke, a));
			} else {
				var qe = (re - x - B - A) / 2 + 2 * Uc;
				ce.push(Wl(u, qe, a)),
					ce.push(Zs),
					ce.push(Gl(l, g, i)),
					ce.push(Zs),
					ce.push(Wl(u, qe, a));
			}
			ce.push(Zs), ce.push(Gl(s, g, i));
		}
		var Qe = a.havingBaseStyle(et.TEXT),
			je = U.makeVList({ positionType: "bottom", positionData: se, children: ce }, Qe);
		return Tu(U.makeSpan(["delimsizing", "mult"], [je], Qe), et.TEXT, a, o);
	},
	Vl = 80,
	Kl = 0.08,
	Yl = function (e, t, n, a, i) {
		var o = m5(e, a, n),
			s = new Da(e, o),
			l = new ha([s], {
				width: "400em",
				height: xe(t),
				viewBox: "0 0 400000 " + n,
				preserveAspectRatio: "xMinYMin slice",
			});
		return U.makeSvgSpan(["hide-tail"], [l], i);
	},
	f6 = function (e, t) {
		var n = t.havingBaseSizing(),
			a = Kf("\\surd", e * n.sizeMultiplier, Vf, n),
			i = n.sizeMultiplier,
			o = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness),
			s,
			l = 0,
			u = 0,
			h = 0,
			f;
		return (
			a.type === "small"
				? ((h = 1e3 + 1e3 * o + Vl),
					e < 1 ? (i = 1) : e < 1.4 && (i = 0.7),
					(l = (1 + o + Kl) / i),
					(u = (1 + o) / i),
					(s = Yl("sqrtMain", l, h, o, t)),
					(s.style.minWidth = "0.853em"),
					(f = 0.833 / i))
				: a.type === "large"
					? ((h = (1e3 + Vl) * fo[a.size]),
						(u = (fo[a.size] + o) / i),
						(l = (fo[a.size] + o + Kl) / i),
						(s = Yl("sqrtSize" + a.size, l, h, o, t)),
						(s.style.minWidth = "1.02em"),
						(f = 1 / i))
					: ((l = e + o + Kl),
						(u = e + o),
						(h = Math.floor(1e3 * e + o) + Vl),
						(s = Yl("sqrtTall", l, h, o, t)),
						(s.style.minWidth = "0.742em"),
						(f = 1.056)),
			(s.height = u),
			(s.style.height = xe(l)),
			{ span: s, advanceWidth: f, ruleWidth: (t.fontMetrics().sqrtRuleThickness + o) * i }
		);
	},
	Gf = [
		"(",
		"\\lparen",
		")",
		"\\rparen",
		"[",
		"\\lbrack",
		"]",
		"\\rbrack",
		"\\{",
		"\\lbrace",
		"\\}",
		"\\rbrace",
		"\\lfloor",
		"\\rfloor",
		"⌊",
		"⌋",
		"\\lceil",
		"\\rceil",
		"⌈",
		"⌉",
		"\\surd",
	],
	m6 = [
		"\\uparrow",
		"\\downarrow",
		"\\updownarrow",
		"\\Uparrow",
		"\\Downarrow",
		"\\Updownarrow",
		"|",
		"\\|",
		"\\vert",
		"\\Vert",
		"\\lvert",
		"\\rvert",
		"\\lVert",
		"\\rVert",
		"\\lgroup",
		"\\rgroup",
		"⟮",
		"⟯",
		"\\lmoustache",
		"\\rmoustache",
		"⎰",
		"⎱",
	],
	Wf = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"],
	fo = [0, 1.2, 1.8, 2.4, 3],
	p6 = function (e, t, n, a, i) {
		if (
			(e === "<" || e === "\\lt" || e === "⟨"
				? (e = "\\langle")
				: (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"),
			Je.contains(Gf, e) || Je.contains(Wf, e))
		)
			return Uf(e, t, !1, n, a, i);
		if (Je.contains(m6, e)) return Hf(e, fo[t], !1, n, a, i);
		throw new fe("Illegal delimiter: '" + e + "'");
	},
	g6 = [
		{ type: "small", style: et.SCRIPTSCRIPT },
		{ type: "small", style: et.SCRIPT },
		{ type: "small", style: et.TEXT },
		{ type: "large", size: 1 },
		{ type: "large", size: 2 },
		{ type: "large", size: 3 },
		{ type: "large", size: 4 },
	],
	v6 = [
		{ type: "small", style: et.SCRIPTSCRIPT },
		{ type: "small", style: et.SCRIPT },
		{ type: "small", style: et.TEXT },
		{ type: "stack" },
	],
	Vf = [
		{ type: "small", style: et.SCRIPTSCRIPT },
		{ type: "small", style: et.SCRIPT },
		{ type: "small", style: et.TEXT },
		{ type: "large", size: 1 },
		{ type: "large", size: 2 },
		{ type: "large", size: 3 },
		{ type: "large", size: 4 },
		{ type: "stack" },
	],
	b6 = function (e) {
		if (e.type === "small") return "Main-Regular";
		if (e.type === "large") return "Size" + e.size + "-Regular";
		if (e.type === "stack") return "Size4-Regular";
		throw new Error("Add support for delim type '" + e.type + "' here.");
	},
	Kf = function (e, t, n, a) {
		for (var i = Math.min(2, 3 - a.style.size), o = i; o < n.length && n[o].type !== "stack"; o++) {
			var s = uo(e, b6(n[o]), "math"),
				l = s.height + s.depth;
			if (n[o].type === "small") {
				var u = a.havingBaseStyle(n[o].style);
				l *= u.sizeMultiplier;
			}
			if (l > t) return n[o];
		}
		return n[n.length - 1];
	},
	Yf = function (e, t, n, a, i, o) {
		e === "<" || e === "\\lt" || e === "⟨"
			? (e = "\\langle")
			: (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
		var s;
		Je.contains(Wf, e) ? (s = g6) : Je.contains(Gf, e) ? (s = Vf) : (s = v6);
		var l = Kf(e, t, s, a);
		return l.type === "small"
			? c6(e, l.style, n, a, i, o)
			: l.type === "large"
				? Uf(e, l.size, n, a, i, o)
				: Hf(e, t, n, a, i, o);
	},
	y6 = function (e, t, n, a, i, o) {
		var s = a.fontMetrics().axisHeight * a.sizeMultiplier,
			l = 901,
			u = 5 / a.fontMetrics().ptPerEm,
			h = Math.max(t - s, n + s),
			f = Math.max((h / 500) * l, 2 * h - u);
		return Yf(e, f, !0, a, i, o);
	},
	la = {
		sqrtImage: f6,
		sizedDelim: p6,
		sizeToMaxHeight: fo,
		customSizedDelim: Yf,
		leftRightDelim: y6,
	},
	d1 = {
		"\\bigl": { mclass: "mopen", size: 1 },
		"\\Bigl": { mclass: "mopen", size: 2 },
		"\\biggl": { mclass: "mopen", size: 3 },
		"\\Biggl": { mclass: "mopen", size: 4 },
		"\\bigr": { mclass: "mclose", size: 1 },
		"\\Bigr": { mclass: "mclose", size: 2 },
		"\\biggr": { mclass: "mclose", size: 3 },
		"\\Biggr": { mclass: "mclose", size: 4 },
		"\\bigm": { mclass: "mrel", size: 1 },
		"\\Bigm": { mclass: "mrel", size: 2 },
		"\\biggm": { mclass: "mrel", size: 3 },
		"\\Biggm": { mclass: "mrel", size: 4 },
		"\\big": { mclass: "mord", size: 1 },
		"\\Big": { mclass: "mord", size: 2 },
		"\\bigg": { mclass: "mord", size: 3 },
		"\\Bigg": { mclass: "mord", size: 4 },
	},
	x6 = [
		"(",
		"\\lparen",
		")",
		"\\rparen",
		"[",
		"\\lbrack",
		"]",
		"\\rbrack",
		"\\{",
		"\\lbrace",
		"\\}",
		"\\rbrace",
		"\\lfloor",
		"\\rfloor",
		"⌊",
		"⌋",
		"\\lceil",
		"\\rceil",
		"⌈",
		"⌉",
		"<",
		">",
		"\\langle",
		"⟨",
		"\\rangle",
		"⟩",
		"\\lt",
		"\\gt",
		"\\lvert",
		"\\rvert",
		"\\lVert",
		"\\rVert",
		"\\lgroup",
		"\\rgroup",
		"⟮",
		"⟯",
		"\\lmoustache",
		"\\rmoustache",
		"⎰",
		"⎱",
		"/",
		"\\backslash",
		"|",
		"\\vert",
		"\\|",
		"\\Vert",
		"\\uparrow",
		"\\Uparrow",
		"\\downarrow",
		"\\Downarrow",
		"\\updownarrow",
		"\\Updownarrow",
		".",
	];
function _l(r, e) {
	var t = xl(r);
	if (t && Je.contains(x6, t.text)) return t;
	throw t
		? new fe("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", r)
		: new fe("Invalid delimiter type '" + r.type + "'", r);
}
Ae({
	type: "delimsizing",
	names: [
		"\\bigl",
		"\\Bigl",
		"\\biggl",
		"\\Biggl",
		"\\bigr",
		"\\Bigr",
		"\\biggr",
		"\\Biggr",
		"\\bigm",
		"\\Bigm",
		"\\biggm",
		"\\Biggm",
		"\\big",
		"\\Big",
		"\\bigg",
		"\\Bigg",
	],
	props: { numArgs: 1, argTypes: ["primitive"] },
	handler: (r, e) => {
		var t = _l(e[0], r);
		return {
			type: "delimsizing",
			mode: r.parser.mode,
			size: d1[r.funcName].size,
			mclass: d1[r.funcName].mclass,
			delim: t.text,
		};
	},
	htmlBuilder: (r, e) =>
		r.delim === "."
			? U.makeSpan([r.mclass])
			: la.sizedDelim(r.delim, r.size, e, r.mode, [r.mclass]),
	mathmlBuilder: (r) => {
		var e = [];
		r.delim !== "." && e.push(hn(r.delim, r.mode));
		var t = new ue.MathNode("mo", e);
		r.mclass === "mopen" || r.mclass === "mclose"
			? t.setAttribute("fence", "true")
			: t.setAttribute("fence", "false"),
			t.setAttribute("stretchy", "true");
		var n = xe(la.sizeToMaxHeight[r.size]);
		return t.setAttribute("minsize", n), t.setAttribute("maxsize", n), t;
	},
});
function h1(r) {
	if (!r.body) throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
Ae({
	type: "leftright-right",
	names: ["\\right"],
	props: { numArgs: 1, primitive: !0 },
	handler: (r, e) => {
		var t = r.parser.gullet.macros.get("\\current@color");
		if (t && typeof t != "string") throw new fe("\\current@color set to non-string in \\right");
		return { type: "leftright-right", mode: r.parser.mode, delim: _l(e[0], r).text, color: t };
	},
});
Ae({
	type: "leftright",
	names: ["\\left"],
	props: { numArgs: 1, primitive: !0 },
	handler: (r, e) => {
		var t = _l(e[0], r),
			n = r.parser;
		++n.leftrightDepth;
		var a = n.parseExpression(!1);
		--n.leftrightDepth, n.expect("\\right", !1);
		var i = ft(n.parseFunction(), "leftright-right");
		return {
			type: "leftright",
			mode: n.mode,
			body: a,
			left: t.text,
			right: i.delim,
			rightColor: i.color,
		};
	},
	htmlBuilder: (r, e) => {
		h1(r);
		for (
			var t = xr(r.body, e, !0, ["mopen", "mclose"]), n = 0, a = 0, i = !1, o = 0;
			o < t.length;
			o++
		)
			t[o].isMiddle ? (i = !0) : ((n = Math.max(t[o].height, n)), (a = Math.max(t[o].depth, a)));
		(n *= e.sizeMultiplier), (a *= e.sizeMultiplier);
		var s;
		if (
			(r.left === "."
				? (s = xo(e, ["mopen"]))
				: (s = la.leftRightDelim(r.left, n, a, e, r.mode, ["mopen"])),
			t.unshift(s),
			i)
		)
			for (var l = 1; l < t.length; l++) {
				var u = t[l],
					h = u.isMiddle;
				h && (t[l] = la.leftRightDelim(h.delim, n, a, h.options, r.mode, []));
			}
		var f;
		if (r.right === ".") f = xo(e, ["mclose"]);
		else {
			var p = r.rightColor ? e.withColor(r.rightColor) : e;
			f = la.leftRightDelim(r.right, n, a, p, r.mode, ["mclose"]);
		}
		return t.push(f), U.makeSpan(["minner"], t, e);
	},
	mathmlBuilder: (r, e) => {
		h1(r);
		var t = Xr(r.body, e);
		if (r.left !== ".") {
			var n = new ue.MathNode("mo", [hn(r.left, r.mode)]);
			n.setAttribute("fence", "true"), t.unshift(n);
		}
		if (r.right !== ".") {
			var a = new ue.MathNode("mo", [hn(r.right, r.mode)]);
			a.setAttribute("fence", "true"),
				r.rightColor && a.setAttribute("mathcolor", r.rightColor),
				t.push(a);
		}
		return _u(t);
	},
});
Ae({
	type: "middle",
	names: ["\\middle"],
	props: { numArgs: 1, primitive: !0 },
	handler: (r, e) => {
		var t = _l(e[0], r);
		if (!r.parser.leftrightDepth) throw new fe("\\middle without preceding \\left", t);
		return { type: "middle", mode: r.parser.mode, delim: t.text };
	},
	htmlBuilder: (r, e) => {
		var t;
		if (r.delim === ".") t = xo(e, []);
		else {
			t = la.sizedDelim(r.delim, 1, e, r.mode, []);
			var n = { delim: r.delim, options: e };
			t.isMiddle = n;
		}
		return t;
	},
	mathmlBuilder: (r, e) => {
		var t = r.delim === "\\vert" || r.delim === "|" ? hn("|", "text") : hn(r.delim, r.mode),
			n = new ue.MathNode("mo", [t]);
		return (
			n.setAttribute("fence", "true"),
			n.setAttribute("lspace", "0.05em"),
			n.setAttribute("rspace", "0.05em"),
			n
		);
	},
});
var Au = (r, e) => {
		var t = U.wrapFragment(At(r.body, e), e),
			n = r.label.slice(1),
			a = e.sizeMultiplier,
			i,
			o = 0,
			s = Je.isCharacterBox(r.body);
		if (n === "sout")
			(i = U.makeSpan(["stretchy", "sout"])),
				(i.height = e.fontMetrics().defaultRuleThickness / a),
				(o = -0.5 * e.fontMetrics().xHeight);
		else if (n === "phase") {
			var l = Jt({ number: 0.6, unit: "pt" }, e),
				u = Jt({ number: 0.35, unit: "ex" }, e),
				h = e.havingBaseSizing();
			a = a / h.sizeMultiplier;
			var f = t.height + t.depth + l + u;
			t.style.paddingLeft = xe(f / 2 + l);
			var p = Math.floor(1e3 * f * a),
				g = h5(p),
				y = new ha([new Da("phase", g)], {
					width: "400em",
					height: xe(p / 1e3),
					viewBox: "0 0 400000 " + p,
					preserveAspectRatio: "xMinYMin slice",
				});
			(i = U.makeSvgSpan(["hide-tail"], [y], e)), (i.style.height = xe(f)), (o = t.depth + l + u);
		} else {
			/cancel/.test(n)
				? s || t.classes.push("cancel-pad")
				: n === "angl"
					? t.classes.push("anglpad")
					: t.classes.push("boxpad");
			var x = 0,
				_ = 0,
				k = 0;
			/box/.test(n)
				? ((k = Math.max(e.fontMetrics().fboxrule, e.minRuleThickness)),
					(x = e.fontMetrics().fboxsep + (n === "colorbox" ? 0 : k)),
					(_ = x))
				: n === "angl"
					? ((k = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness)),
						(x = 4 * k),
						(_ = Math.max(0, 0.25 - t.depth)))
					: ((x = s ? 0.2 : 0), (_ = x)),
				(i = ma.encloseSpan(t, n, x, _, e)),
				/fbox|boxed|fcolorbox/.test(n)
					? ((i.style.borderStyle = "solid"), (i.style.borderWidth = xe(k)))
					: n === "angl" &&
						k !== 0.049 &&
						((i.style.borderTopWidth = xe(k)), (i.style.borderRightWidth = xe(k))),
				(o = t.depth + _),
				r.backgroundColor &&
					((i.style.backgroundColor = r.backgroundColor),
					r.borderColor && (i.style.borderColor = r.borderColor));
		}
		var T;
		if (r.backgroundColor)
			T = U.makeVList(
				{
					positionType: "individualShift",
					children: [
						{ type: "elem", elem: i, shift: o },
						{ type: "elem", elem: t, shift: 0 },
					],
				},
				e
			);
		else {
			var B = /cancel|phase/.test(n) ? ["svg-align"] : [];
			T = U.makeVList(
				{
					positionType: "individualShift",
					children: [
						{ type: "elem", elem: t, shift: 0 },
						{ type: "elem", elem: i, shift: o, wrapperClasses: B },
					],
				},
				e
			);
		}
		return (
			/cancel/.test(n) && ((T.height = t.height), (T.depth = t.depth)),
			/cancel/.test(n) && !s
				? U.makeSpan(["mord", "cancel-lap"], [T], e)
				: U.makeSpan(["mord"], [T], e)
		);
	},
	Mu = (r, e) => {
		var t = 0,
			n = new ue.MathNode(r.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [
				Ut(r.body, e),
			]);
		switch (r.label) {
			case "\\cancel":
				n.setAttribute("notation", "updiagonalstrike");
				break;
			case "\\bcancel":
				n.setAttribute("notation", "downdiagonalstrike");
				break;
			case "\\phase":
				n.setAttribute("notation", "phasorangle");
				break;
			case "\\sout":
				n.setAttribute("notation", "horizontalstrike");
				break;
			case "\\fbox":
				n.setAttribute("notation", "box");
				break;
			case "\\angl":
				n.setAttribute("notation", "actuarial");
				break;
			case "\\fcolorbox":
			case "\\colorbox":
				if (
					((t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm),
					n.setAttribute("width", "+" + 2 * t + "pt"),
					n.setAttribute("height", "+" + 2 * t + "pt"),
					n.setAttribute("lspace", t + "pt"),
					n.setAttribute("voffset", t + "pt"),
					r.label === "\\fcolorbox")
				) {
					var a = Math.max(e.fontMetrics().fboxrule, e.minRuleThickness);
					n.setAttribute("style", "border: " + a + "em solid " + String(r.borderColor));
				}
				break;
			case "\\xcancel":
				n.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
				break;
		}
		return r.backgroundColor && n.setAttribute("mathbackground", r.backgroundColor), n;
	};
Ae({
	type: "enclose",
	names: ["\\colorbox"],
	props: { numArgs: 2, allowedInText: !0, argTypes: ["color", "text"] },
	handler(r, e, t) {
		var { parser: n, funcName: a } = r,
			i = ft(e[0], "color-token").color,
			o = e[1];
		return { type: "enclose", mode: n.mode, label: a, backgroundColor: i, body: o };
	},
	htmlBuilder: Au,
	mathmlBuilder: Mu,
});
Ae({
	type: "enclose",
	names: ["\\fcolorbox"],
	props: { numArgs: 3, allowedInText: !0, argTypes: ["color", "color", "text"] },
	handler(r, e, t) {
		var { parser: n, funcName: a } = r,
			i = ft(e[0], "color-token").color,
			o = ft(e[1], "color-token").color,
			s = e[2];
		return { type: "enclose", mode: n.mode, label: a, backgroundColor: o, borderColor: i, body: s };
	},
	htmlBuilder: Au,
	mathmlBuilder: Mu,
});
Ae({
	type: "enclose",
	names: ["\\fbox"],
	props: { numArgs: 1, argTypes: ["hbox"], allowedInText: !0 },
	handler(r, e) {
		var { parser: t } = r;
		return { type: "enclose", mode: t.mode, label: "\\fbox", body: e[0] };
	},
});
Ae({
	type: "enclose",
	names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
	props: { numArgs: 1 },
	handler(r, e) {
		var { parser: t, funcName: n } = r,
			a = e[0];
		return { type: "enclose", mode: t.mode, label: n, body: a };
	},
	htmlBuilder: Au,
	mathmlBuilder: Mu,
});
Ae({
	type: "enclose",
	names: ["\\angl"],
	props: { numArgs: 1, argTypes: ["hbox"], allowedInText: !1 },
	handler(r, e) {
		var { parser: t } = r;
		return { type: "enclose", mode: t.mode, label: "\\angl", body: e[0] };
	},
});
var Xf = {};
function Un(r) {
	for (
		var { type: e, names: t, props: n, handler: a, htmlBuilder: i, mathmlBuilder: o } = r,
			s = { type: e, numArgs: n.numArgs || 0, allowedInText: !1, numOptionalArgs: 0, handler: a },
			l = 0;
		l < t.length;
		++l
	)
		Xf[t[l]] = s;
	i && (I0[e] = i), o && (D0[e] = o);
}
var Zf = {};
function b(r, e) {
	Zf[r] = e;
}
function f1(r) {
	var e = [];
	r.consumeSpaces();
	var t = r.fetch().text;
	for (
		t === "\\relax" && (r.consume(), r.consumeSpaces(), (t = r.fetch().text));
		t === "\\hline" || t === "\\hdashline";

	)
		r.consume(), e.push(t === "\\hdashline"), r.consumeSpaces(), (t = r.fetch().text);
	return e;
}
var kl = (r) => {
	var e = r.parser.settings;
	if (!e.displayMode) throw new fe("{" + r.envName + "} can be used only in display mode.");
};
function Cu(r) {
	if (r.indexOf("ed") === -1) return r.indexOf("*") === -1;
}
function Pa(r, e, t) {
	var {
		hskipBeforeAndAfter: n,
		addJot: a,
		cols: i,
		arraystretch: o,
		colSeparationType: s,
		autoTag: l,
		singleRow: u,
		emptySingleRow: h,
		maxNumCols: f,
		leqno: p,
	} = e;
	if ((r.gullet.beginGroup(), u || r.gullet.macros.set("\\cr", "\\\\\\relax"), !o)) {
		var g = r.gullet.expandMacroAsText("\\arraystretch");
		if (g == null) o = 1;
		else if (((o = parseFloat(g)), !o || o < 0)) throw new fe("Invalid \\arraystretch: " + g);
	}
	r.gullet.beginGroup();
	var y = [],
		x = [y],
		_ = [],
		k = [],
		T = l != null ? [] : void 0;
	function B() {
		l && r.gullet.macros.set("\\@eqnsw", "1", !0);
	}
	function A() {
		T &&
			(r.gullet.macros.get("\\df@tag")
				? (T.push(r.subparse([new un("\\df@tag")])), r.gullet.macros.set("\\df@tag", void 0, !0))
				: T.push(!!l && r.gullet.macros.get("\\@eqnsw") === "1"));
	}
	for (B(), k.push(f1(r)); ; ) {
		var N = r.parseExpression(!1, u ? "\\end" : "\\\\");
		r.gullet.endGroup(),
			r.gullet.beginGroup(),
			(N = { type: "ordgroup", mode: r.mode, body: N }),
			t && (N = { type: "styling", mode: r.mode, style: t, body: [N] }),
			y.push(N);
		var z = r.fetch().text;
		if (z === "&") {
			if (f && y.length === f) {
				if (u || s) throw new fe("Too many tab characters: &", r.nextToken);
				r.settings.reportNonstrict(
					"textEnv",
					"Too few columns specified in the {array} column argument."
				);
			}
			r.consume();
		} else if (z === "\\end") {
			A(),
				y.length === 1 &&
					N.type === "styling" &&
					N.body[0].body.length === 0 &&
					(x.length > 1 || !h) &&
					x.pop(),
				k.length < x.length + 1 && k.push([]);
			break;
		} else if (z === "\\\\") {
			r.consume();
			var I = void 0;
			r.gullet.future().text !== " " && (I = r.parseSizeGroup(!0)),
				_.push(I ? I.value : null),
				A(),
				k.push(f1(r)),
				(y = []),
				x.push(y),
				B();
		} else throw new fe("Expected & or \\\\ or \\cr or \\end", r.nextToken);
	}
	return (
		r.gullet.endGroup(),
		r.gullet.endGroup(),
		{
			type: "array",
			mode: r.mode,
			addJot: a,
			arraystretch: o,
			body: x,
			cols: i,
			rowGaps: _,
			hskipBeforeAndAfter: n,
			hLinesBeforeRow: k,
			colSeparationType: s,
			tags: T,
			leqno: p,
		}
	);
}
function Ou(r) {
	return r.slice(0, 1) === "d" ? "display" : "text";
}
var Hn = function (e, t) {
		var n,
			a,
			i = e.body.length,
			o = e.hLinesBeforeRow,
			s = 0,
			l = new Array(i),
			u = [],
			h = Math.max(t.fontMetrics().arrayRuleWidth, t.minRuleThickness),
			f = 1 / t.fontMetrics().ptPerEm,
			p = 5 * f;
		if (e.colSeparationType && e.colSeparationType === "small") {
			var g = t.havingStyle(et.SCRIPT).sizeMultiplier;
			p = 0.2778 * (g / t.sizeMultiplier);
		}
		var y = e.colSeparationType === "CD" ? Jt({ number: 3, unit: "ex" }, t) : 12 * f,
			x = 3 * f,
			_ = e.arraystretch * y,
			k = 0.7 * _,
			T = 0.3 * _,
			B = 0;
		function A(ct) {
			for (var pt = 0; pt < ct.length; ++pt)
				pt > 0 && (B += 0.25), u.push({ pos: B, isDashed: ct[pt] });
		}
		for (A(o[0]), n = 0; n < e.body.length; ++n) {
			var N = e.body[n],
				z = k,
				I = T;
			s < N.length && (s = N.length);
			var G = new Array(N.length);
			for (a = 0; a < N.length; ++a) {
				var re = At(N[a], t);
				I < re.depth && (I = re.depth), z < re.height && (z = re.height), (G[a] = re);
			}
			var V = e.rowGaps[n],
				se = 0;
			V && ((se = Jt(V, t)), se > 0 && ((se += T), I < se && (I = se), (se = 0))),
				e.addJot && (I += x),
				(G.height = z),
				(G.depth = I),
				(B += z),
				(G.pos = B),
				(B += I + se),
				(l[n] = G),
				A(o[n + 1]);
		}
		var ce = B / 2 + t.fontMetrics().axisHeight,
			Ce = e.cols || [],
			Q = [],
			$,
			K,
			le = [];
		if (e.tags && e.tags.some((ct) => ct))
			for (n = 0; n < i; ++n) {
				var ie = l[n],
					oe = ie.pos - ce,
					te = e.tags[n],
					Ke = void 0;
				te === !0
					? (Ke = U.makeSpan(["eqn-num"], [], t))
					: te === !1
						? (Ke = U.makeSpan([], [], t))
						: (Ke = U.makeSpan([], xr(te, t, !0), t)),
					(Ke.depth = ie.depth),
					(Ke.height = ie.height),
					le.push({ type: "elem", elem: Ke, shift: oe });
			}
		for (a = 0, K = 0; a < s || K < Ce.length; ++a, ++K) {
			for (var qe = Ce[K] || {}, Qe = !0; qe.type === "separator"; ) {
				if (
					(Qe ||
						(($ = U.makeSpan(["arraycolsep"], [])),
						($.style.width = xe(t.fontMetrics().doubleRuleSep)),
						Q.push($)),
					qe.separator === "|" || qe.separator === ":")
				) {
					var je = qe.separator === "|" ? "solid" : "dashed",
						Xe = U.makeSpan(["vertical-separator"], [], t);
					(Xe.style.height = xe(B)),
						(Xe.style.borderRightWidth = xe(h)),
						(Xe.style.borderRightStyle = je),
						(Xe.style.margin = "0 " + xe(-h / 2));
					var it = B - ce;
					it && (Xe.style.verticalAlign = xe(-it)), Q.push(Xe);
				} else throw new fe("Invalid separator type: " + qe.separator);
				K++, (qe = Ce[K] || {}), (Qe = !1);
			}
			if (!(a >= s)) {
				var lt = void 0;
				(a > 0 || e.hskipBeforeAndAfter) &&
					((lt = Je.deflt(qe.pregap, p)),
					lt !== 0 && (($ = U.makeSpan(["arraycolsep"], [])), ($.style.width = xe(lt)), Q.push($)));
				var we = [];
				for (n = 0; n < i; ++n) {
					var ye = l[n],
						be = ye[a];
					if (be) {
						var Le = ye.pos - ce;
						(be.depth = ye.depth),
							(be.height = ye.height),
							we.push({ type: "elem", elem: be, shift: Le });
					}
				}
				(we = U.makeVList({ positionType: "individualShift", children: we }, t)),
					(we = U.makeSpan(["col-align-" + (qe.align || "c")], [we])),
					Q.push(we),
					(a < s - 1 || e.hskipBeforeAndAfter) &&
						((lt = Je.deflt(qe.postgap, p)),
						lt !== 0 &&
							(($ = U.makeSpan(["arraycolsep"], [])), ($.style.width = xe(lt)), Q.push($)));
			}
		}
		if (((l = U.makeSpan(["mtable"], Q)), u.length > 0)) {
			for (
				var ze = U.makeLineSpan("hline", t, h),
					Be = U.makeLineSpan("hdashline", t, h),
					tt = [{ type: "elem", elem: l, shift: 0 }];
				u.length > 0;

			) {
				var ot = u.pop(),
					st = ot.pos - ce;
				ot.isDashed
					? tt.push({ type: "elem", elem: Be, shift: st })
					: tt.push({ type: "elem", elem: ze, shift: st });
			}
			l = U.makeVList({ positionType: "individualShift", children: tt }, t);
		}
		if (le.length === 0) return U.makeSpan(["mord"], [l], t);
		var vt = U.makeVList({ positionType: "individualShift", children: le }, t);
		return (vt = U.makeSpan(["tag"], [vt], t)), U.makeFragment([l, vt]);
	},
	w6 = { c: "center ", l: "left ", r: "right " },
	Gn = function (e, t) {
		for (
			var n = [],
				a = new ue.MathNode("mtd", [], ["mtr-glue"]),
				i = new ue.MathNode("mtd", [], ["mml-eqn-num"]),
				o = 0;
			o < e.body.length;
			o++
		) {
			for (var s = e.body[o], l = [], u = 0; u < s.length; u++)
				l.push(new ue.MathNode("mtd", [Ut(s[u], t)]));
			e.tags && e.tags[o] && (l.unshift(a), l.push(a), e.leqno ? l.unshift(i) : l.push(i)),
				n.push(new ue.MathNode("mtr", l));
		}
		var h = new ue.MathNode("mtable", n),
			f = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
		h.setAttribute("rowspacing", xe(f));
		var p = "",
			g = "";
		if (e.cols && e.cols.length > 0) {
			var y = e.cols,
				x = "",
				_ = !1,
				k = 0,
				T = y.length;
			y[0].type === "separator" && ((p += "top "), (k = 1)),
				y[y.length - 1].type === "separator" && ((p += "bottom "), (T -= 1));
			for (var B = k; B < T; B++)
				y[B].type === "align"
					? ((g += w6[y[B].align]), _ && (x += "none "), (_ = !0))
					: y[B].type === "separator" &&
						_ &&
						((x += y[B].separator === "|" ? "solid " : "dashed "), (_ = !1));
			h.setAttribute("columnalign", g.trim()),
				/[sd]/.test(x) && h.setAttribute("columnlines", x.trim());
		}
		if (e.colSeparationType === "align") {
			for (var A = e.cols || [], N = "", z = 1; z < A.length; z++) N += z % 2 ? "0em " : "1em ";
			h.setAttribute("columnspacing", N.trim());
		} else
			e.colSeparationType === "alignat" || e.colSeparationType === "gather"
				? h.setAttribute("columnspacing", "0em")
				: e.colSeparationType === "small"
					? h.setAttribute("columnspacing", "0.2778em")
					: e.colSeparationType === "CD"
						? h.setAttribute("columnspacing", "0.5em")
						: h.setAttribute("columnspacing", "1em");
		var I = "",
			G = e.hLinesBeforeRow;
		(p += G[0].length > 0 ? "left " : ""), (p += G[G.length - 1].length > 0 ? "right " : "");
		for (var re = 1; re < G.length - 1; re++)
			I += G[re].length === 0 ? "none " : G[re][0] ? "dashed " : "solid ";
		return (
			/[sd]/.test(I) && h.setAttribute("rowlines", I.trim()),
			p !== "" && ((h = new ue.MathNode("menclose", [h])), h.setAttribute("notation", p.trim())),
			e.arraystretch &&
				e.arraystretch < 1 &&
				((h = new ue.MathNode("mstyle", [h])), h.setAttribute("scriptlevel", "1")),
			h
		);
	},
	jf = function (e, t) {
		e.envName.indexOf("ed") === -1 && kl(e);
		var n = [],
			a = e.envName.indexOf("at") > -1 ? "alignat" : "align",
			i = e.envName === "split",
			o = Pa(
				e.parser,
				{
					cols: n,
					addJot: !0,
					autoTag: i ? void 0 : Cu(e.envName),
					emptySingleRow: !0,
					colSeparationType: a,
					maxNumCols: i ? 2 : void 0,
					leqno: e.parser.settings.leqno,
				},
				"display"
			),
			s,
			l = 0,
			u = { type: "ordgroup", mode: e.mode, body: [] };
		if (t[0] && t[0].type === "ordgroup") {
			for (var h = "", f = 0; f < t[0].body.length; f++) {
				var p = ft(t[0].body[f], "textord");
				h += p.text;
			}
			(s = Number(h)), (l = s * 2);
		}
		var g = !l;
		o.body.forEach(function (k) {
			for (var T = 1; T < k.length; T += 2) {
				var B = ft(k[T], "styling"),
					A = ft(B.body[0], "ordgroup");
				A.body.unshift(u);
			}
			if (g) l < k.length && (l = k.length);
			else {
				var N = k.length / 2;
				if (s < N)
					throw new fe("Too many math in a row: " + ("expected " + s + ", but got " + N), k[0]);
			}
		});
		for (var y = 0; y < l; ++y) {
			var x = "r",
				_ = 0;
			y % 2 === 1 ? (x = "l") : y > 0 && g && (_ = 1),
				(n[y] = { type: "align", align: x, pregap: _, postgap: 0 });
		}
		return (o.colSeparationType = g ? "align" : "alignat"), o;
	};
Un({
	type: "array",
	names: ["array", "darray"],
	props: { numArgs: 1 },
	handler(r, e) {
		var t = xl(e[0]),
			n = t ? [e[0]] : ft(e[0], "ordgroup").body,
			a = n.map(function (o) {
				var s = Su(o),
					l = s.text;
				if ("lcr".indexOf(l) !== -1) return { type: "align", align: l };
				if (l === "|") return { type: "separator", separator: "|" };
				if (l === ":") return { type: "separator", separator: ":" };
				throw new fe("Unknown column alignment: " + l, o);
			}),
			i = { cols: a, hskipBeforeAndAfter: !0, maxNumCols: a.length };
		return Pa(r.parser, i, Ou(r.envName));
	},
	htmlBuilder: Hn,
	mathmlBuilder: Gn,
});
Un({
	type: "array",
	names: [
		"matrix",
		"pmatrix",
		"bmatrix",
		"Bmatrix",
		"vmatrix",
		"Vmatrix",
		"matrix*",
		"pmatrix*",
		"bmatrix*",
		"Bmatrix*",
		"vmatrix*",
		"Vmatrix*",
	],
	props: { numArgs: 0 },
	handler(r) {
		var e = {
				matrix: null,
				pmatrix: ["(", ")"],
				bmatrix: ["[", "]"],
				Bmatrix: ["\\{", "\\}"],
				vmatrix: ["|", "|"],
				Vmatrix: ["\\Vert", "\\Vert"],
			}[r.envName.replace("*", "")],
			t = "c",
			n = { hskipBeforeAndAfter: !1, cols: [{ type: "align", align: t }] };
		if (r.envName.charAt(r.envName.length - 1) === "*") {
			var a = r.parser;
			if ((a.consumeSpaces(), a.fetch().text === "[")) {
				if ((a.consume(), a.consumeSpaces(), (t = a.fetch().text), "lcr".indexOf(t) === -1))
					throw new fe("Expected l or c or r", a.nextToken);
				a.consume(),
					a.consumeSpaces(),
					a.expect("]"),
					a.consume(),
					(n.cols = [{ type: "align", align: t }]);
			}
		}
		var i = Pa(r.parser, n, Ou(r.envName)),
			o = Math.max(0, ...i.body.map((s) => s.length));
		return (
			(i.cols = new Array(o).fill({ type: "align", align: t })),
			e
				? {
						type: "leftright",
						mode: r.mode,
						body: [i],
						left: e[0],
						right: e[1],
						rightColor: void 0,
					}
				: i
		);
	},
	htmlBuilder: Hn,
	mathmlBuilder: Gn,
});
Un({
	type: "array",
	names: ["smallmatrix"],
	props: { numArgs: 0 },
	handler(r) {
		var e = { arraystretch: 0.5 },
			t = Pa(r.parser, e, "script");
		return (t.colSeparationType = "small"), t;
	},
	htmlBuilder: Hn,
	mathmlBuilder: Gn,
});
Un({
	type: "array",
	names: ["subarray"],
	props: { numArgs: 1 },
	handler(r, e) {
		var t = xl(e[0]),
			n = t ? [e[0]] : ft(e[0], "ordgroup").body,
			a = n.map(function (o) {
				var s = Su(o),
					l = s.text;
				if ("lc".indexOf(l) !== -1) return { type: "align", align: l };
				throw new fe("Unknown column alignment: " + l, o);
			});
		if (a.length > 1) throw new fe("{subarray} can contain only one column");
		var i = { cols: a, hskipBeforeAndAfter: !1, arraystretch: 0.5 };
		if (((i = Pa(r.parser, i, "script")), i.body.length > 0 && i.body[0].length > 1))
			throw new fe("{subarray} can contain only one column");
		return i;
	},
	htmlBuilder: Hn,
	mathmlBuilder: Gn,
});
Un({
	type: "array",
	names: ["cases", "dcases", "rcases", "drcases"],
	props: { numArgs: 0 },
	handler(r) {
		var e = {
				arraystretch: 1.2,
				cols: [
					{ type: "align", align: "l", pregap: 0, postgap: 1 },
					{ type: "align", align: "l", pregap: 0, postgap: 0 },
				],
			},
			t = Pa(r.parser, e, Ou(r.envName));
		return {
			type: "leftright",
			mode: r.mode,
			body: [t],
			left: r.envName.indexOf("r") > -1 ? "." : "\\{",
			right: r.envName.indexOf("r") > -1 ? "\\}" : ".",
			rightColor: void 0,
		};
	},
	htmlBuilder: Hn,
	mathmlBuilder: Gn,
});
Un({
	type: "array",
	names: ["align", "align*", "aligned", "split"],
	props: { numArgs: 0 },
	handler: jf,
	htmlBuilder: Hn,
	mathmlBuilder: Gn,
});
Un({
	type: "array",
	names: ["gathered", "gather", "gather*"],
	props: { numArgs: 0 },
	handler(r) {
		Je.contains(["gather", "gather*"], r.envName) && kl(r);
		var e = {
			cols: [{ type: "align", align: "c" }],
			addJot: !0,
			colSeparationType: "gather",
			autoTag: Cu(r.envName),
			emptySingleRow: !0,
			leqno: r.parser.settings.leqno,
		};
		return Pa(r.parser, e, "display");
	},
	htmlBuilder: Hn,
	mathmlBuilder: Gn,
});
Un({
	type: "array",
	names: ["alignat", "alignat*", "alignedat"],
	props: { numArgs: 1 },
	handler: jf,
	htmlBuilder: Hn,
	mathmlBuilder: Gn,
});
Un({
	type: "array",
	names: ["equation", "equation*"],
	props: { numArgs: 0 },
	handler(r) {
		kl(r);
		var e = {
			autoTag: Cu(r.envName),
			emptySingleRow: !0,
			singleRow: !0,
			maxNumCols: 1,
			leqno: r.parser.settings.leqno,
		};
		return Pa(r.parser, e, "display");
	},
	htmlBuilder: Hn,
	mathmlBuilder: Gn,
});
Un({
	type: "array",
	names: ["CD"],
	props: { numArgs: 0 },
	handler(r) {
		return kl(r), s6(r.parser);
	},
	htmlBuilder: Hn,
	mathmlBuilder: Gn,
});
b("\\nonumber", "\\gdef\\@eqnsw{0}");
b("\\notag", "\\nonumber");
Ae({
	type: "text",
	names: ["\\hline", "\\hdashline"],
	props: { numArgs: 0, allowedInText: !0, allowedInMath: !0 },
	handler(r, e) {
		throw new fe(r.funcName + " valid only within array environment");
	},
});
var m1 = Xf;
Ae({
	type: "environment",
	names: ["\\begin", "\\end"],
	props: { numArgs: 1, argTypes: ["text"] },
	handler(r, e) {
		var { parser: t, funcName: n } = r,
			a = e[0];
		if (a.type !== "ordgroup") throw new fe("Invalid environment name", a);
		for (var i = "", o = 0; o < a.body.length; ++o) i += ft(a.body[o], "textord").text;
		if (n === "\\begin") {
			if (!m1.hasOwnProperty(i)) throw new fe("No such environment: " + i, a);
			var s = m1[i],
				{ args: l, optArgs: u } = t.parseArguments("\\begin{" + i + "}", s),
				h = { mode: t.mode, envName: i, parser: t },
				f = s.handler(h, l, u);
			t.expect("\\end", !1);
			var p = t.nextToken,
				g = ft(t.parseFunction(), "environment");
			if (g.name !== i)
				throw new fe("Mismatch: \\begin{" + i + "} matched by \\end{" + g.name + "}", p);
			return f;
		}
		return { type: "environment", mode: t.mode, name: i, nameGroup: a };
	},
});
var Jf = (r, e) => {
		var t = r.font,
			n = e.withFont(t);
		return At(r.body, n);
	},
	Qf = (r, e) => {
		var t = r.font,
			n = e.withFont(t);
		return Ut(r.body, n);
	},
	p1 = {
		"\\Bbb": "\\mathbb",
		"\\bold": "\\mathbf",
		"\\frak": "\\mathfrak",
		"\\bm": "\\boldsymbol",
	};
Ae({
	type: "font",
	names: [
		"\\mathrm",
		"\\mathit",
		"\\mathbf",
		"\\mathnormal",
		"\\mathsfit",
		"\\mathbb",
		"\\mathcal",
		"\\mathfrak",
		"\\mathscr",
		"\\mathsf",
		"\\mathtt",
		"\\Bbb",
		"\\bold",
		"\\frak",
	],
	props: { numArgs: 1, allowedInArgument: !0 },
	handler: (r, e) => {
		var { parser: t, funcName: n } = r,
			a = L0(e[0]),
			i = n;
		return i in p1 && (i = p1[i]), { type: "font", mode: t.mode, font: i.slice(1), body: a };
	},
	htmlBuilder: Jf,
	mathmlBuilder: Qf,
});
Ae({
	type: "mclass",
	names: ["\\boldsymbol", "\\bm"],
	props: { numArgs: 1 },
	handler: (r, e) => {
		var { parser: t } = r,
			n = e[0],
			a = Je.isCharacterBox(n);
		return {
			type: "mclass",
			mode: t.mode,
			mclass: wl(n),
			body: [{ type: "font", mode: t.mode, font: "boldsymbol", body: n }],
			isCharacterBox: a,
		};
	},
});
Ae({
	type: "font",
	names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
	props: { numArgs: 0, allowedInText: !0 },
	handler: (r, e) => {
		var { parser: t, funcName: n, breakOnTokenText: a } = r,
			{ mode: i } = t,
			o = t.parseExpression(!0, a),
			s = "math" + n.slice(1);
		return { type: "font", mode: i, font: s, body: { type: "ordgroup", mode: t.mode, body: o } };
	},
	htmlBuilder: Jf,
	mathmlBuilder: Qf,
});
var $f = (r, e) => {
		var t = e;
		return (
			r === "display"
				? (t = t.id >= et.SCRIPT.id ? t.text() : et.DISPLAY)
				: r === "text" && t.size === et.DISPLAY.size
					? (t = et.TEXT)
					: r === "script"
						? (t = et.SCRIPT)
						: r === "scriptscript" && (t = et.SCRIPTSCRIPT),
			t
		);
	},
	Nu = (r, e) => {
		var t = $f(r.size, e.style),
			n = t.fracNum(),
			a = t.fracDen(),
			i;
		i = e.havingStyle(n);
		var o = At(r.numer, i, e);
		if (r.continued) {
			var s = 8.5 / e.fontMetrics().ptPerEm,
				l = 3.5 / e.fontMetrics().ptPerEm;
			(o.height = o.height < s ? s : o.height), (o.depth = o.depth < l ? l : o.depth);
		}
		i = e.havingStyle(a);
		var u = At(r.denom, i, e),
			h,
			f,
			p;
		r.hasBarLine
			? (r.barSize
					? ((f = Jt(r.barSize, e)), (h = U.makeLineSpan("frac-line", e, f)))
					: (h = U.makeLineSpan("frac-line", e)),
				(f = h.height),
				(p = h.height))
			: ((h = null), (f = 0), (p = e.fontMetrics().defaultRuleThickness));
		var g, y, x;
		t.size === et.DISPLAY.size || r.size === "display"
			? ((g = e.fontMetrics().num1),
				f > 0 ? (y = 3 * p) : (y = 7 * p),
				(x = e.fontMetrics().denom1))
			: (f > 0 ? ((g = e.fontMetrics().num2), (y = p)) : ((g = e.fontMetrics().num3), (y = 3 * p)),
				(x = e.fontMetrics().denom2));
		var _;
		if (h) {
			var T = e.fontMetrics().axisHeight;
			g - o.depth - (T + 0.5 * f) < y && (g += y - (g - o.depth - (T + 0.5 * f))),
				T - 0.5 * f - (u.height - x) < y && (x += y - (T - 0.5 * f - (u.height - x)));
			var B = -(T - 0.5 * f);
			_ = U.makeVList(
				{
					positionType: "individualShift",
					children: [
						{ type: "elem", elem: u, shift: x },
						{ type: "elem", elem: h, shift: B },
						{ type: "elem", elem: o, shift: -g },
					],
				},
				e
			);
		} else {
			var k = g - o.depth - (u.height - x);
			k < y && ((g += 0.5 * (y - k)), (x += 0.5 * (y - k))),
				(_ = U.makeVList(
					{
						positionType: "individualShift",
						children: [
							{ type: "elem", elem: u, shift: x },
							{ type: "elem", elem: o, shift: -g },
						],
					},
					e
				));
		}
		(i = e.havingStyle(t)),
			(_.height *= i.sizeMultiplier / e.sizeMultiplier),
			(_.depth *= i.sizeMultiplier / e.sizeMultiplier);
		var A;
		t.size === et.DISPLAY.size
			? (A = e.fontMetrics().delim1)
			: t.size === et.SCRIPTSCRIPT.size
				? (A = e.havingStyle(et.SCRIPT).fontMetrics().delim2)
				: (A = e.fontMetrics().delim2);
		var N, z;
		return (
			r.leftDelim == null
				? (N = xo(e, ["mopen"]))
				: (N = la.customSizedDelim(r.leftDelim, A, !0, e.havingStyle(t), r.mode, ["mopen"])),
			r.continued
				? (z = U.makeSpan([]))
				: r.rightDelim == null
					? (z = xo(e, ["mclose"]))
					: (z = la.customSizedDelim(r.rightDelim, A, !0, e.havingStyle(t), r.mode, ["mclose"])),
			U.makeSpan(["mord"].concat(i.sizingClasses(e)), [N, U.makeSpan(["mfrac"], [_]), z], e)
		);
	},
	Ru = (r, e) => {
		var t = new ue.MathNode("mfrac", [Ut(r.numer, e), Ut(r.denom, e)]);
		if (!r.hasBarLine) t.setAttribute("linethickness", "0px");
		else if (r.barSize) {
			var n = Jt(r.barSize, e);
			t.setAttribute("linethickness", xe(n));
		}
		var a = $f(r.size, e.style);
		if (a.size !== e.style.size) {
			t = new ue.MathNode("mstyle", [t]);
			var i = a.size === et.DISPLAY.size ? "true" : "false";
			t.setAttribute("displaystyle", i), t.setAttribute("scriptlevel", "0");
		}
		if (r.leftDelim != null || r.rightDelim != null) {
			var o = [];
			if (r.leftDelim != null) {
				var s = new ue.MathNode("mo", [new ue.TextNode(r.leftDelim.replace("\\", ""))]);
				s.setAttribute("fence", "true"), o.push(s);
			}
			if ((o.push(t), r.rightDelim != null)) {
				var l = new ue.MathNode("mo", [new ue.TextNode(r.rightDelim.replace("\\", ""))]);
				l.setAttribute("fence", "true"), o.push(l);
			}
			return _u(o);
		}
		return t;
	};
Ae({
	type: "genfrac",
	names: [
		"\\dfrac",
		"\\frac",
		"\\tfrac",
		"\\dbinom",
		"\\binom",
		"\\tbinom",
		"\\\\atopfrac",
		"\\\\bracefrac",
		"\\\\brackfrac",
	],
	props: { numArgs: 2, allowedInArgument: !0 },
	handler: (r, e) => {
		var { parser: t, funcName: n } = r,
			a = e[0],
			i = e[1],
			o,
			s = null,
			l = null,
			u = "auto";
		switch (n) {
			case "\\dfrac":
			case "\\frac":
			case "\\tfrac":
				o = !0;
				break;
			case "\\\\atopfrac":
				o = !1;
				break;
			case "\\dbinom":
			case "\\binom":
			case "\\tbinom":
				(o = !1), (s = "("), (l = ")");
				break;
			case "\\\\bracefrac":
				(o = !1), (s = "\\{"), (l = "\\}");
				break;
			case "\\\\brackfrac":
				(o = !1), (s = "["), (l = "]");
				break;
			default:
				throw new Error("Unrecognized genfrac command");
		}
		switch (n) {
			case "\\dfrac":
			case "\\dbinom":
				u = "display";
				break;
			case "\\tfrac":
			case "\\tbinom":
				u = "text";
				break;
		}
		return {
			type: "genfrac",
			mode: t.mode,
			continued: !1,
			numer: a,
			denom: i,
			hasBarLine: o,
			leftDelim: s,
			rightDelim: l,
			size: u,
			barSize: null,
		};
	},
	htmlBuilder: Nu,
	mathmlBuilder: Ru,
});
Ae({
	type: "genfrac",
	names: ["\\cfrac"],
	props: { numArgs: 2 },
	handler: (r, e) => {
		var { parser: t, funcName: n } = r,
			a = e[0],
			i = e[1];
		return {
			type: "genfrac",
			mode: t.mode,
			continued: !0,
			numer: a,
			denom: i,
			hasBarLine: !0,
			leftDelim: null,
			rightDelim: null,
			size: "display",
			barSize: null,
		};
	},
});
Ae({
	type: "infix",
	names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
	props: { numArgs: 0, infix: !0 },
	handler(r) {
		var { parser: e, funcName: t, token: n } = r,
			a;
		switch (t) {
			case "\\over":
				a = "\\frac";
				break;
			case "\\choose":
				a = "\\binom";
				break;
			case "\\atop":
				a = "\\\\atopfrac";
				break;
			case "\\brace":
				a = "\\\\bracefrac";
				break;
			case "\\brack":
				a = "\\\\brackfrac";
				break;
			default:
				throw new Error("Unrecognized infix genfrac command");
		}
		return { type: "infix", mode: e.mode, replaceWith: a, token: n };
	},
});
var g1 = ["display", "text", "script", "scriptscript"],
	v1 = function (e) {
		var t = null;
		return e.length > 0 && ((t = e), (t = t === "." ? null : t)), t;
	};
Ae({
	type: "genfrac",
	names: ["\\genfrac"],
	props: {
		numArgs: 6,
		allowedInArgument: !0,
		argTypes: ["math", "math", "size", "text", "math", "math"],
	},
	handler(r, e) {
		var { parser: t } = r,
			n = e[4],
			a = e[5],
			i = L0(e[0]),
			o = i.type === "atom" && i.family === "open" ? v1(i.text) : null,
			s = L0(e[1]),
			l = s.type === "atom" && s.family === "close" ? v1(s.text) : null,
			u = ft(e[2], "size"),
			h,
			f = null;
		u.isBlank ? (h = !0) : ((f = u.value), (h = f.number > 0));
		var p = "auto",
			g = e[3];
		if (g.type === "ordgroup") {
			if (g.body.length > 0) {
				var y = ft(g.body[0], "textord");
				p = g1[Number(y.text)];
			}
		} else (g = ft(g, "textord")), (p = g1[Number(g.text)]);
		return {
			type: "genfrac",
			mode: t.mode,
			numer: n,
			denom: a,
			continued: !1,
			hasBarLine: h,
			barSize: f,
			leftDelim: o,
			rightDelim: l,
			size: p,
		};
	},
	htmlBuilder: Nu,
	mathmlBuilder: Ru,
});
Ae({
	type: "infix",
	names: ["\\above"],
	props: { numArgs: 1, argTypes: ["size"], infix: !0 },
	handler(r, e) {
		var { parser: t, funcName: n, token: a } = r;
		return {
			type: "infix",
			mode: t.mode,
			replaceWith: "\\\\abovefrac",
			size: ft(e[0], "size").value,
			token: a,
		};
	},
});
Ae({
	type: "genfrac",
	names: ["\\\\abovefrac"],
	props: { numArgs: 3, argTypes: ["math", "size", "math"] },
	handler: (r, e) => {
		var { parser: t, funcName: n } = r,
			a = e[0],
			i = J3(ft(e[1], "infix").size),
			o = e[2],
			s = i.number > 0;
		return {
			type: "genfrac",
			mode: t.mode,
			numer: a,
			denom: o,
			continued: !1,
			hasBarLine: s,
			barSize: i,
			leftDelim: null,
			rightDelim: null,
			size: "auto",
		};
	},
	htmlBuilder: Nu,
	mathmlBuilder: Ru,
});
var em = (r, e) => {
		var t = e.style,
			n,
			a;
		r.type === "supsub"
			? ((n = r.sup ? At(r.sup, e.havingStyle(t.sup()), e) : At(r.sub, e.havingStyle(t.sub()), e)),
				(a = ft(r.base, "horizBrace")))
			: (a = ft(r, "horizBrace"));
		var i = At(a.base, e.havingBaseStyle(et.DISPLAY)),
			o = ma.svgSpan(a, e),
			s;
		if (
			(a.isOver
				? ((s = U.makeVList(
						{
							positionType: "firstBaseline",
							children: [
								{ type: "elem", elem: i },
								{ type: "kern", size: 0.1 },
								{ type: "elem", elem: o },
							],
						},
						e
					)),
					s.children[0].children[0].children[1].classes.push("svg-align"))
				: ((s = U.makeVList(
						{
							positionType: "bottom",
							positionData: i.depth + 0.1 + o.height,
							children: [
								{ type: "elem", elem: o },
								{ type: "kern", size: 0.1 },
								{ type: "elem", elem: i },
							],
						},
						e
					)),
					s.children[0].children[0].children[0].classes.push("svg-align")),
			n)
		) {
			var l = U.makeSpan(["mord", a.isOver ? "mover" : "munder"], [s], e);
			a.isOver
				? (s = U.makeVList(
						{
							positionType: "firstBaseline",
							children: [
								{ type: "elem", elem: l },
								{ type: "kern", size: 0.2 },
								{ type: "elem", elem: n },
							],
						},
						e
					))
				: (s = U.makeVList(
						{
							positionType: "bottom",
							positionData: l.depth + 0.2 + n.height + n.depth,
							children: [
								{ type: "elem", elem: n },
								{ type: "kern", size: 0.2 },
								{ type: "elem", elem: l },
							],
						},
						e
					));
		}
		return U.makeSpan(["mord", a.isOver ? "mover" : "munder"], [s], e);
	},
	_6 = (r, e) => {
		var t = ma.mathMLnode(r.label);
		return new ue.MathNode(r.isOver ? "mover" : "munder", [Ut(r.base, e), t]);
	};
Ae({
	type: "horizBrace",
	names: ["\\overbrace", "\\underbrace"],
	props: { numArgs: 1 },
	handler(r, e) {
		var { parser: t, funcName: n } = r;
		return { type: "horizBrace", mode: t.mode, label: n, isOver: /^\\over/.test(n), base: e[0] };
	},
	htmlBuilder: em,
	mathmlBuilder: _6,
});
Ae({
	type: "href",
	names: ["\\href"],
	props: { numArgs: 2, argTypes: ["url", "original"], allowedInText: !0 },
	handler: (r, e) => {
		var { parser: t } = r,
			n = e[1],
			a = ft(e[0], "url").url;
		return t.settings.isTrusted({ command: "\\href", url: a })
			? { type: "href", mode: t.mode, href: a, body: ir(n) }
			: t.formatUnsupportedCmd("\\href");
	},
	htmlBuilder: (r, e) => {
		var t = xr(r.body, e, !1);
		return U.makeAnchor(r.href, [], t, e);
	},
	mathmlBuilder: (r, e) => {
		var t = La(r.body, e);
		return t instanceof $r || (t = new $r("mrow", [t])), t.setAttribute("href", r.href), t;
	},
});
Ae({
	type: "href",
	names: ["\\url"],
	props: { numArgs: 1, argTypes: ["url"], allowedInText: !0 },
	handler: (r, e) => {
		var { parser: t } = r,
			n = ft(e[0], "url").url;
		if (!t.settings.isTrusted({ command: "\\url", url: n })) return t.formatUnsupportedCmd("\\url");
		for (var a = [], i = 0; i < n.length; i++) {
			var o = n[i];
			o === "~" && (o = "\\textasciitilde"), a.push({ type: "textord", mode: "text", text: o });
		}
		var s = { type: "text", mode: t.mode, font: "\\texttt", body: a };
		return { type: "href", mode: t.mode, href: n, body: ir(s) };
	},
});
Ae({
	type: "hbox",
	names: ["\\hbox"],
	props: { numArgs: 1, argTypes: ["text"], allowedInText: !0, primitive: !0 },
	handler(r, e) {
		var { parser: t } = r;
		return { type: "hbox", mode: t.mode, body: ir(e[0]) };
	},
	htmlBuilder(r, e) {
		var t = xr(r.body, e, !1);
		return U.makeFragment(t);
	},
	mathmlBuilder(r, e) {
		return new ue.MathNode("mrow", Xr(r.body, e));
	},
});
Ae({
	type: "html",
	names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
	props: { numArgs: 2, argTypes: ["raw", "original"], allowedInText: !0 },
	handler: (r, e) => {
		var { parser: t, funcName: n, token: a } = r,
			i = ft(e[0], "raw").string,
			o = e[1];
		t.settings.strict &&
			t.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
		var s,
			l = {};
		switch (n) {
			case "\\htmlClass":
				(l.class = i), (s = { command: "\\htmlClass", class: i });
				break;
			case "\\htmlId":
				(l.id = i), (s = { command: "\\htmlId", id: i });
				break;
			case "\\htmlStyle":
				(l.style = i), (s = { command: "\\htmlStyle", style: i });
				break;
			case "\\htmlData": {
				for (var u = i.split(","), h = 0; h < u.length; h++) {
					var f = u[h].split("=");
					if (f.length !== 2) throw new fe("Error parsing key-value for \\htmlData");
					l["data-" + f[0].trim()] = f[1].trim();
				}
				s = { command: "\\htmlData", attributes: l };
				break;
			}
			default:
				throw new Error("Unrecognized html command");
		}
		return t.settings.isTrusted(s)
			? { type: "html", mode: t.mode, attributes: l, body: ir(o) }
			: t.formatUnsupportedCmd(n);
	},
	htmlBuilder: (r, e) => {
		var t = xr(r.body, e, !1),
			n = ["enclosing"];
		r.attributes.class && n.push(...r.attributes.class.trim().split(/\s+/));
		var a = U.makeSpan(n, t, e);
		for (var i in r.attributes)
			i !== "class" && r.attributes.hasOwnProperty(i) && a.setAttribute(i, r.attributes[i]);
		return a;
	},
	mathmlBuilder: (r, e) => La(r.body, e),
});
Ae({
	type: "htmlmathml",
	names: ["\\html@mathml"],
	props: { numArgs: 2, allowedInText: !0 },
	handler: (r, e) => {
		var { parser: t } = r;
		return { type: "htmlmathml", mode: t.mode, html: ir(e[0]), mathml: ir(e[1]) };
	},
	htmlBuilder: (r, e) => {
		var t = xr(r.html, e, !1);
		return U.makeFragment(t);
	},
	mathmlBuilder: (r, e) => La(r.mathml, e),
});
var Xl = function (e) {
	if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e)) return { number: +e, unit: "bp" };
	var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
	if (!t) throw new fe("Invalid size: '" + e + "' in \\includegraphics");
	var n = { number: +(t[1] + t[2]), unit: t[3] };
	if (!yf(n)) throw new fe("Invalid unit: '" + n.unit + "' in \\includegraphics.");
	return n;
};
Ae({
	type: "includegraphics",
	names: ["\\includegraphics"],
	props: { numArgs: 1, numOptionalArgs: 1, argTypes: ["raw", "url"], allowedInText: !1 },
	handler: (r, e, t) => {
		var { parser: n } = r,
			a = { number: 0, unit: "em" },
			i = { number: 0.9, unit: "em" },
			o = { number: 0, unit: "em" },
			s = "";
		if (t[0])
			for (var l = ft(t[0], "raw").string, u = l.split(","), h = 0; h < u.length; h++) {
				var f = u[h].split("=");
				if (f.length === 2) {
					var p = f[1].trim();
					switch (f[0].trim()) {
						case "alt":
							s = p;
							break;
						case "width":
							a = Xl(p);
							break;
						case "height":
							i = Xl(p);
							break;
						case "totalheight":
							o = Xl(p);
							break;
						default:
							throw new fe("Invalid key: '" + f[0] + "' in \\includegraphics.");
					}
				}
			}
		var g = ft(e[0], "url").url;
		return (
			s === "" &&
				((s = g), (s = s.replace(/^.*[\\/]/, "")), (s = s.substring(0, s.lastIndexOf(".")))),
			n.settings.isTrusted({ command: "\\includegraphics", url: g })
				? {
						type: "includegraphics",
						mode: n.mode,
						alt: s,
						width: a,
						height: i,
						totalheight: o,
						src: g,
					}
				: n.formatUnsupportedCmd("\\includegraphics")
		);
	},
	htmlBuilder: (r, e) => {
		var t = Jt(r.height, e),
			n = 0;
		r.totalheight.number > 0 && (n = Jt(r.totalheight, e) - t);
		var a = 0;
		r.width.number > 0 && (a = Jt(r.width, e));
		var i = { height: xe(t + n) };
		a > 0 && (i.width = xe(a)), n > 0 && (i.verticalAlign = xe(-n));
		var o = new _5(r.src, r.alt, i);
		return (o.height = t), (o.depth = n), o;
	},
	mathmlBuilder: (r, e) => {
		var t = new ue.MathNode("mglyph", []);
		t.setAttribute("alt", r.alt);
		var n = Jt(r.height, e),
			a = 0;
		if (
			(r.totalheight.number > 0 &&
				((a = Jt(r.totalheight, e) - n), t.setAttribute("valign", xe(-a))),
			t.setAttribute("height", xe(n + a)),
			r.width.number > 0)
		) {
			var i = Jt(r.width, e);
			t.setAttribute("width", xe(i));
		}
		return t.setAttribute("src", r.src), t;
	},
});
Ae({
	type: "kern",
	names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
	props: { numArgs: 1, argTypes: ["size"], primitive: !0, allowedInText: !0 },
	handler(r, e) {
		var { parser: t, funcName: n } = r,
			a = ft(e[0], "size");
		if (t.settings.strict) {
			var i = n[1] === "m",
				o = a.value.unit === "mu";
			i
				? (o ||
						t.settings.reportNonstrict(
							"mathVsTextUnits",
							"LaTeX's " + n + " supports only mu units, " + ("not " + a.value.unit + " units")
						),
					t.mode !== "math" &&
						t.settings.reportNonstrict(
							"mathVsTextUnits",
							"LaTeX's " + n + " works only in math mode"
						))
				: o &&
					t.settings.reportNonstrict(
						"mathVsTextUnits",
						"LaTeX's " + n + " doesn't support mu units"
					);
		}
		return { type: "kern", mode: t.mode, dimension: a.value };
	},
	htmlBuilder(r, e) {
		return U.makeGlue(r.dimension, e);
	},
	mathmlBuilder(r, e) {
		var t = Jt(r.dimension, e);
		return new ue.SpaceNode(t);
	},
});
Ae({
	type: "lap",
	names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
	props: { numArgs: 1, allowedInText: !0 },
	handler: (r, e) => {
		var { parser: t, funcName: n } = r,
			a = e[0];
		return { type: "lap", mode: t.mode, alignment: n.slice(5), body: a };
	},
	htmlBuilder: (r, e) => {
		var t;
		r.alignment === "clap"
			? ((t = U.makeSpan([], [At(r.body, e)])), (t = U.makeSpan(["inner"], [t], e)))
			: (t = U.makeSpan(["inner"], [At(r.body, e)]));
		var n = U.makeSpan(["fix"], []),
			a = U.makeSpan([r.alignment], [t, n], e),
			i = U.makeSpan(["strut"]);
		return (
			(i.style.height = xe(a.height + a.depth)),
			a.depth && (i.style.verticalAlign = xe(-a.depth)),
			a.children.unshift(i),
			(a = U.makeSpan(["thinbox"], [a], e)),
			U.makeSpan(["mord", "vbox"], [a], e)
		);
	},
	mathmlBuilder: (r, e) => {
		var t = new ue.MathNode("mpadded", [Ut(r.body, e)]);
		if (r.alignment !== "rlap") {
			var n = r.alignment === "llap" ? "-1" : "-0.5";
			t.setAttribute("lspace", n + "width");
		}
		return t.setAttribute("width", "0px"), t;
	},
});
Ae({
	type: "styling",
	names: ["\\(", "$"],
	props: { numArgs: 0, allowedInText: !0, allowedInMath: !1 },
	handler(r, e) {
		var { funcName: t, parser: n } = r,
			a = n.mode;
		n.switchMode("math");
		var i = t === "\\(" ? "\\)" : "$",
			o = n.parseExpression(!1, i);
		return n.expect(i), n.switchMode(a), { type: "styling", mode: n.mode, style: "text", body: o };
	},
});
Ae({
	type: "text",
	names: ["\\)", "\\]"],
	props: { numArgs: 0, allowedInText: !0, allowedInMath: !1 },
	handler(r, e) {
		throw new fe("Mismatched " + r.funcName);
	},
});
var b1 = (r, e) => {
	switch (e.style.size) {
		case et.DISPLAY.size:
			return r.display;
		case et.TEXT.size:
			return r.text;
		case et.SCRIPT.size:
			return r.script;
		case et.SCRIPTSCRIPT.size:
			return r.scriptscript;
		default:
			return r.text;
	}
};
Ae({
	type: "mathchoice",
	names: ["\\mathchoice"],
	props: { numArgs: 4, primitive: !0 },
	handler: (r, e) => {
		var { parser: t } = r;
		return {
			type: "mathchoice",
			mode: t.mode,
			display: ir(e[0]),
			text: ir(e[1]),
			script: ir(e[2]),
			scriptscript: ir(e[3]),
		};
	},
	htmlBuilder: (r, e) => {
		var t = b1(r, e),
			n = xr(t, e, !1);
		return U.makeFragment(n);
	},
	mathmlBuilder: (r, e) => {
		var t = b1(r, e);
		return La(t, e);
	},
});
var tm = (r, e, t, n, a, i, o) => {
		r = U.makeSpan([], [r]);
		var s = t && Je.isCharacterBox(t),
			l,
			u;
		if (e) {
			var h = At(e, n.havingStyle(a.sup()), n);
			u = {
				elem: h,
				kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - h.depth),
			};
		}
		if (t) {
			var f = At(t, n.havingStyle(a.sub()), n);
			l = {
				elem: f,
				kern: Math.max(n.fontMetrics().bigOpSpacing2, n.fontMetrics().bigOpSpacing4 - f.height),
			};
		}
		var p;
		if (u && l) {
			var g = n.fontMetrics().bigOpSpacing5 + l.elem.height + l.elem.depth + l.kern + r.depth + o;
			p = U.makeVList(
				{
					positionType: "bottom",
					positionData: g,
					children: [
						{ type: "kern", size: n.fontMetrics().bigOpSpacing5 },
						{ type: "elem", elem: l.elem, marginLeft: xe(-i) },
						{ type: "kern", size: l.kern },
						{ type: "elem", elem: r },
						{ type: "kern", size: u.kern },
						{ type: "elem", elem: u.elem, marginLeft: xe(i) },
						{ type: "kern", size: n.fontMetrics().bigOpSpacing5 },
					],
				},
				n
			);
		} else if (l) {
			var y = r.height - o;
			p = U.makeVList(
				{
					positionType: "top",
					positionData: y,
					children: [
						{ type: "kern", size: n.fontMetrics().bigOpSpacing5 },
						{ type: "elem", elem: l.elem, marginLeft: xe(-i) },
						{ type: "kern", size: l.kern },
						{ type: "elem", elem: r },
					],
				},
				n
			);
		} else if (u) {
			var x = r.depth + o;
			p = U.makeVList(
				{
					positionType: "bottom",
					positionData: x,
					children: [
						{ type: "elem", elem: r },
						{ type: "kern", size: u.kern },
						{ type: "elem", elem: u.elem, marginLeft: xe(i) },
						{ type: "kern", size: n.fontMetrics().bigOpSpacing5 },
					],
				},
				n
			);
		} else return r;
		var _ = [p];
		if (l && i !== 0 && !s) {
			var k = U.makeSpan(["mspace"], [], n);
			(k.style.marginRight = xe(i)), _.unshift(k);
		}
		return U.makeSpan(["mop", "op-limits"], _, n);
	},
	rm = ["\\smallint"],
	Ji = (r, e) => {
		var t,
			n,
			a = !1,
			i;
		r.type === "supsub"
			? ((t = r.sup), (n = r.sub), (i = ft(r.base, "op")), (a = !0))
			: (i = ft(r, "op"));
		var o = e.style,
			s = !1;
		o.size === et.DISPLAY.size && i.symbol && !Je.contains(rm, i.name) && (s = !0);
		var l;
		if (i.symbol) {
			var u = s ? "Size2-Regular" : "Size1-Regular",
				h = "";
			if (
				((i.name === "\\oiint" || i.name === "\\oiiint") &&
					((h = i.name.slice(1)), (i.name = h === "oiint" ? "\\iint" : "\\iiint")),
				(l = U.makeSymbol(i.name, u, "math", e, ["mop", "op-symbol", s ? "large-op" : "small-op"])),
				h.length > 0)
			) {
				var f = l.italic,
					p = U.staticSvg(h + "Size" + (s ? "2" : "1"), e);
				(l = U.makeVList(
					{
						positionType: "individualShift",
						children: [
							{ type: "elem", elem: l, shift: 0 },
							{ type: "elem", elem: p, shift: s ? 0.08 : 0 },
						],
					},
					e
				)),
					(i.name = "\\" + h),
					l.classes.unshift("mop"),
					(l.italic = f);
			}
		} else if (i.body) {
			var g = xr(i.body, e, !0);
			g.length === 1 && g[0] instanceof dn
				? ((l = g[0]), (l.classes[0] = "mop"))
				: (l = U.makeSpan(["mop"], g, e));
		} else {
			for (var y = [], x = 1; x < i.name.length; x++) y.push(U.mathsym(i.name[x], i.mode, e));
			l = U.makeSpan(["mop"], y, e);
		}
		var _ = 0,
			k = 0;
		return (
			(l instanceof dn || i.name === "\\oiint" || i.name === "\\oiiint") &&
				!i.suppressBaseShift &&
				((_ = (l.height - l.depth) / 2 - e.fontMetrics().axisHeight), (k = l.italic)),
			a
				? tm(l, t, n, e, o, k, _)
				: (_ && ((l.style.position = "relative"), (l.style.top = xe(_))), l)
		);
	},
	Rs = (r, e) => {
		var t;
		if (r.symbol)
			(t = new $r("mo", [hn(r.name, r.mode)])),
				Je.contains(rm, r.name) && t.setAttribute("largeop", "false");
		else if (r.body) t = new $r("mo", Xr(r.body, e));
		else {
			t = new $r("mi", [new zn(r.name.slice(1))]);
			var n = new $r("mo", [hn("⁡", "text")]);
			r.parentIsSupSub ? (t = new $r("mrow", [t, n])) : (t = Of([t, n]));
		}
		return t;
	},
	k6 = {
		"∏": "\\prod",
		"∐": "\\coprod",
		"∑": "\\sum",
		"⋀": "\\bigwedge",
		"⋁": "\\bigvee",
		"⋂": "\\bigcap",
		"⋃": "\\bigcup",
		"⨀": "\\bigodot",
		"⨁": "\\bigoplus",
		"⨂": "\\bigotimes",
		"⨄": "\\biguplus",
		"⨆": "\\bigsqcup",
	};
Ae({
	type: "op",
	names: [
		"\\coprod",
		"\\bigvee",
		"\\bigwedge",
		"\\biguplus",
		"\\bigcap",
		"\\bigcup",
		"\\intop",
		"\\prod",
		"\\sum",
		"\\bigotimes",
		"\\bigoplus",
		"\\bigodot",
		"\\bigsqcup",
		"\\smallint",
		"∏",
		"∐",
		"∑",
		"⋀",
		"⋁",
		"⋂",
		"⋃",
		"⨀",
		"⨁",
		"⨂",
		"⨄",
		"⨆",
	],
	props: { numArgs: 0 },
	handler: (r, e) => {
		var { parser: t, funcName: n } = r,
			a = n;
		return (
			a.length === 1 && (a = k6[a]),
			{ type: "op", mode: t.mode, limits: !0, parentIsSupSub: !1, symbol: !0, name: a }
		);
	},
	htmlBuilder: Ji,
	mathmlBuilder: Rs,
});
Ae({
	type: "op",
	names: ["\\mathop"],
	props: { numArgs: 1, primitive: !0 },
	handler: (r, e) => {
		var { parser: t } = r,
			n = e[0];
		return { type: "op", mode: t.mode, limits: !1, parentIsSupSub: !1, symbol: !1, body: ir(n) };
	},
	htmlBuilder: Ji,
	mathmlBuilder: Rs,
});
var S6 = {
	"∫": "\\int",
	"∬": "\\iint",
	"∭": "\\iiint",
	"∮": "\\oint",
	"∯": "\\oiint",
	"∰": "\\oiiint",
};
Ae({
	type: "op",
	names: [
		"\\arcsin",
		"\\arccos",
		"\\arctan",
		"\\arctg",
		"\\arcctg",
		"\\arg",
		"\\ch",
		"\\cos",
		"\\cosec",
		"\\cosh",
		"\\cot",
		"\\cotg",
		"\\coth",
		"\\csc",
		"\\ctg",
		"\\cth",
		"\\deg",
		"\\dim",
		"\\exp",
		"\\hom",
		"\\ker",
		"\\lg",
		"\\ln",
		"\\log",
		"\\sec",
		"\\sin",
		"\\sinh",
		"\\sh",
		"\\tan",
		"\\tanh",
		"\\tg",
		"\\th",
	],
	props: { numArgs: 0 },
	handler(r) {
		var { parser: e, funcName: t } = r;
		return { type: "op", mode: e.mode, limits: !1, parentIsSupSub: !1, symbol: !1, name: t };
	},
	htmlBuilder: Ji,
	mathmlBuilder: Rs,
});
Ae({
	type: "op",
	names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
	props: { numArgs: 0 },
	handler(r) {
		var { parser: e, funcName: t } = r;
		return { type: "op", mode: e.mode, limits: !0, parentIsSupSub: !1, symbol: !1, name: t };
	},
	htmlBuilder: Ji,
	mathmlBuilder: Rs,
});
Ae({
	type: "op",
	names: [
		"\\int",
		"\\iint",
		"\\iiint",
		"\\oint",
		"\\oiint",
		"\\oiiint",
		"∫",
		"∬",
		"∭",
		"∮",
		"∯",
		"∰",
	],
	props: { numArgs: 0 },
	handler(r) {
		var { parser: e, funcName: t } = r,
			n = t;
		return (
			n.length === 1 && (n = S6[n]),
			{ type: "op", mode: e.mode, limits: !1, parentIsSupSub: !1, symbol: !0, name: n }
		);
	},
	htmlBuilder: Ji,
	mathmlBuilder: Rs,
});
var nm = (r, e) => {
		var t,
			n,
			a = !1,
			i;
		r.type === "supsub"
			? ((t = r.sup), (n = r.sub), (i = ft(r.base, "operatorname")), (a = !0))
			: (i = ft(r, "operatorname"));
		var o;
		if (i.body.length > 0) {
			for (
				var s = i.body.map((f) => {
						var p = f.text;
						return typeof p == "string" ? { type: "textord", mode: f.mode, text: p } : f;
					}),
					l = xr(s, e.withFont("mathrm"), !0),
					u = 0;
				u < l.length;
				u++
			) {
				var h = l[u];
				h instanceof dn && (h.text = h.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
			}
			o = U.makeSpan(["mop"], l, e);
		} else o = U.makeSpan(["mop"], [], e);
		return a ? tm(o, t, n, e, e.style, 0, 0) : o;
	},
	E6 = (r, e) => {
		for (var t = Xr(r.body, e.withFont("mathrm")), n = !0, a = 0; a < t.length; a++) {
			var i = t[a];
			if (!(i instanceof ue.SpaceNode))
				if (i instanceof ue.MathNode)
					switch (i.type) {
						case "mi":
						case "mn":
						case "ms":
						case "mspace":
						case "mtext":
							break;
						case "mo": {
							var o = i.children[0];
							i.children.length === 1 && o instanceof ue.TextNode
								? (o.text = o.text.replace(/\u2212/, "-").replace(/\u2217/, "*"))
								: (n = !1);
							break;
						}
						default:
							n = !1;
					}
				else n = !1;
		}
		if (n) {
			var s = t.map((h) => h.toText()).join("");
			t = [new ue.TextNode(s)];
		}
		var l = new ue.MathNode("mi", t);
		l.setAttribute("mathvariant", "normal");
		var u = new ue.MathNode("mo", [hn("⁡", "text")]);
		return r.parentIsSupSub ? new ue.MathNode("mrow", [l, u]) : ue.newDocumentFragment([l, u]);
	};
Ae({
	type: "operatorname",
	names: ["\\operatorname@", "\\operatornamewithlimits"],
	props: { numArgs: 1 },
	handler: (r, e) => {
		var { parser: t, funcName: n } = r,
			a = e[0];
		return {
			type: "operatorname",
			mode: t.mode,
			body: ir(a),
			alwaysHandleSupSub: n === "\\operatornamewithlimits",
			limits: !1,
			parentIsSupSub: !1,
		};
	},
	htmlBuilder: nm,
	mathmlBuilder: E6,
});
b("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
ui({
	type: "ordgroup",
	htmlBuilder(r, e) {
		return r.semisimple
			? U.makeFragment(xr(r.body, e, !1))
			: U.makeSpan(["mord"], xr(r.body, e, !0), e);
	},
	mathmlBuilder(r, e) {
		return La(r.body, e, !0);
	},
});
Ae({
	type: "overline",
	names: ["\\overline"],
	props: { numArgs: 1 },
	handler(r, e) {
		var { parser: t } = r,
			n = e[0];
		return { type: "overline", mode: t.mode, body: n };
	},
	htmlBuilder(r, e) {
		var t = At(r.body, e.havingCrampedStyle()),
			n = U.makeLineSpan("overline-line", e),
			a = e.fontMetrics().defaultRuleThickness,
			i = U.makeVList(
				{
					positionType: "firstBaseline",
					children: [
						{ type: "elem", elem: t },
						{ type: "kern", size: 3 * a },
						{ type: "elem", elem: n },
						{ type: "kern", size: a },
					],
				},
				e
			);
		return U.makeSpan(["mord", "overline"], [i], e);
	},
	mathmlBuilder(r, e) {
		var t = new ue.MathNode("mo", [new ue.TextNode("‾")]);
		t.setAttribute("stretchy", "true");
		var n = new ue.MathNode("mover", [Ut(r.body, e), t]);
		return n.setAttribute("accent", "true"), n;
	},
});
Ae({
	type: "phantom",
	names: ["\\phantom"],
	props: { numArgs: 1, allowedInText: !0 },
	handler: (r, e) => {
		var { parser: t } = r,
			n = e[0];
		return { type: "phantom", mode: t.mode, body: ir(n) };
	},
	htmlBuilder: (r, e) => {
		var t = xr(r.body, e.withPhantom(), !1);
		return U.makeFragment(t);
	},
	mathmlBuilder: (r, e) => {
		var t = Xr(r.body, e);
		return new ue.MathNode("mphantom", t);
	},
});
Ae({
	type: "hphantom",
	names: ["\\hphantom"],
	props: { numArgs: 1, allowedInText: !0 },
	handler: (r, e) => {
		var { parser: t } = r,
			n = e[0];
		return { type: "hphantom", mode: t.mode, body: n };
	},
	htmlBuilder: (r, e) => {
		var t = U.makeSpan([], [At(r.body, e.withPhantom())]);
		if (((t.height = 0), (t.depth = 0), t.children))
			for (var n = 0; n < t.children.length; n++)
				(t.children[n].height = 0), (t.children[n].depth = 0);
		return (
			(t = U.makeVList(
				{ positionType: "firstBaseline", children: [{ type: "elem", elem: t }] },
				e
			)),
			U.makeSpan(["mord"], [t], e)
		);
	},
	mathmlBuilder: (r, e) => {
		var t = Xr(ir(r.body), e),
			n = new ue.MathNode("mphantom", t),
			a = new ue.MathNode("mpadded", [n]);
		return a.setAttribute("height", "0px"), a.setAttribute("depth", "0px"), a;
	},
});
Ae({
	type: "vphantom",
	names: ["\\vphantom"],
	props: { numArgs: 1, allowedInText: !0 },
	handler: (r, e) => {
		var { parser: t } = r,
			n = e[0];
		return { type: "vphantom", mode: t.mode, body: n };
	},
	htmlBuilder: (r, e) => {
		var t = U.makeSpan(["inner"], [At(r.body, e.withPhantom())]),
			n = U.makeSpan(["fix"], []);
		return U.makeSpan(["mord", "rlap"], [t, n], e);
	},
	mathmlBuilder: (r, e) => {
		var t = Xr(ir(r.body), e),
			n = new ue.MathNode("mphantom", t),
			a = new ue.MathNode("mpadded", [n]);
		return a.setAttribute("width", "0px"), a;
	},
});
Ae({
	type: "raisebox",
	names: ["\\raisebox"],
	props: { numArgs: 2, argTypes: ["size", "hbox"], allowedInText: !0 },
	handler(r, e) {
		var { parser: t } = r,
			n = ft(e[0], "size").value,
			a = e[1];
		return { type: "raisebox", mode: t.mode, dy: n, body: a };
	},
	htmlBuilder(r, e) {
		var t = At(r.body, e),
			n = Jt(r.dy, e);
		return U.makeVList(
			{ positionType: "shift", positionData: -n, children: [{ type: "elem", elem: t }] },
			e
		);
	},
	mathmlBuilder(r, e) {
		var t = new ue.MathNode("mpadded", [Ut(r.body, e)]),
			n = r.dy.number + r.dy.unit;
		return t.setAttribute("voffset", n), t;
	},
});
Ae({
	type: "internal",
	names: ["\\relax"],
	props: { numArgs: 0, allowedInText: !0, allowedInArgument: !0 },
	handler(r) {
		var { parser: e } = r;
		return { type: "internal", mode: e.mode };
	},
});
Ae({
	type: "rule",
	names: ["\\rule"],
	props: {
		numArgs: 2,
		numOptionalArgs: 1,
		allowedInText: !0,
		allowedInMath: !0,
		argTypes: ["size", "size", "size"],
	},
	handler(r, e, t) {
		var { parser: n } = r,
			a = t[0],
			i = ft(e[0], "size"),
			o = ft(e[1], "size");
		return {
			type: "rule",
			mode: n.mode,
			shift: a && ft(a, "size").value,
			width: i.value,
			height: o.value,
		};
	},
	htmlBuilder(r, e) {
		var t = U.makeSpan(["mord", "rule"], [], e),
			n = Jt(r.width, e),
			a = Jt(r.height, e),
			i = r.shift ? Jt(r.shift, e) : 0;
		return (
			(t.style.borderRightWidth = xe(n)),
			(t.style.borderTopWidth = xe(a)),
			(t.style.bottom = xe(i)),
			(t.width = n),
			(t.height = a + i),
			(t.depth = -i),
			(t.maxFontSize = a * 1.125 * e.sizeMultiplier),
			t
		);
	},
	mathmlBuilder(r, e) {
		var t = Jt(r.width, e),
			n = Jt(r.height, e),
			a = r.shift ? Jt(r.shift, e) : 0,
			i = (e.color && e.getColor()) || "black",
			o = new ue.MathNode("mspace");
		o.setAttribute("mathbackground", i),
			o.setAttribute("width", xe(t)),
			o.setAttribute("height", xe(n));
		var s = new ue.MathNode("mpadded", [o]);
		return (
			a >= 0
				? s.setAttribute("height", xe(a))
				: (s.setAttribute("height", xe(a)), s.setAttribute("depth", xe(-a))),
			s.setAttribute("voffset", xe(a)),
			s
		);
	},
});
function am(r, e, t) {
	for (var n = xr(r, e, !1), a = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < n.length; i++) {
		var o = n[i].classes.indexOf("sizing");
		o < 0
			? Array.prototype.push.apply(n[i].classes, e.sizingClasses(t))
			: n[i].classes[o + 1] === "reset-size" + e.size &&
				(n[i].classes[o + 1] = "reset-size" + t.size),
			(n[i].height *= a),
			(n[i].depth *= a);
	}
	return U.makeFragment(n);
}
var y1 = [
		"\\tiny",
		"\\sixptsize",
		"\\scriptsize",
		"\\footnotesize",
		"\\small",
		"\\normalsize",
		"\\large",
		"\\Large",
		"\\LARGE",
		"\\huge",
		"\\Huge",
	],
	T6 = (r, e) => {
		var t = e.havingSize(r.size);
		return am(r.body, t, e);
	};
Ae({
	type: "sizing",
	names: y1,
	props: { numArgs: 0, allowedInText: !0 },
	handler: (r, e) => {
		var { breakOnTokenText: t, funcName: n, parser: a } = r,
			i = a.parseExpression(!1, t);
		return { type: "sizing", mode: a.mode, size: y1.indexOf(n) + 1, body: i };
	},
	htmlBuilder: T6,
	mathmlBuilder: (r, e) => {
		var t = e.havingSize(r.size),
			n = Xr(r.body, t),
			a = new ue.MathNode("mstyle", n);
		return a.setAttribute("mathsize", xe(t.sizeMultiplier)), a;
	},
});
Ae({
	type: "smash",
	names: ["\\smash"],
	props: { numArgs: 1, numOptionalArgs: 1, allowedInText: !0 },
	handler: (r, e, t) => {
		var { parser: n } = r,
			a = !1,
			i = !1,
			o = t[0] && ft(t[0], "ordgroup");
		if (o)
			for (var s = "", l = 0; l < o.body.length; ++l) {
				var u = o.body[l];
				if (((s = u.text), s === "t")) a = !0;
				else if (s === "b") i = !0;
				else {
					(a = !1), (i = !1);
					break;
				}
			}
		else (a = !0), (i = !0);
		var h = e[0];
		return { type: "smash", mode: n.mode, body: h, smashHeight: a, smashDepth: i };
	},
	htmlBuilder: (r, e) => {
		var t = U.makeSpan([], [At(r.body, e)]);
		if (!r.smashHeight && !r.smashDepth) return t;
		if (r.smashHeight && ((t.height = 0), t.children))
			for (var n = 0; n < t.children.length; n++) t.children[n].height = 0;
		if (r.smashDepth && ((t.depth = 0), t.children))
			for (var a = 0; a < t.children.length; a++) t.children[a].depth = 0;
		var i = U.makeVList(
			{ positionType: "firstBaseline", children: [{ type: "elem", elem: t }] },
			e
		);
		return U.makeSpan(["mord"], [i], e);
	},
	mathmlBuilder: (r, e) => {
		var t = new ue.MathNode("mpadded", [Ut(r.body, e)]);
		return (
			r.smashHeight && t.setAttribute("height", "0px"),
			r.smashDepth && t.setAttribute("depth", "0px"),
			t
		);
	},
});
Ae({
	type: "sqrt",
	names: ["\\sqrt"],
	props: { numArgs: 1, numOptionalArgs: 1 },
	handler(r, e, t) {
		var { parser: n } = r,
			a = t[0],
			i = e[0];
		return { type: "sqrt", mode: n.mode, body: i, index: a };
	},
	htmlBuilder(r, e) {
		var t = At(r.body, e.havingCrampedStyle());
		t.height === 0 && (t.height = e.fontMetrics().xHeight), (t = U.wrapFragment(t, e));
		var n = e.fontMetrics(),
			a = n.defaultRuleThickness,
			i = a;
		e.style.id < et.TEXT.id && (i = e.fontMetrics().xHeight);
		var o = a + i / 4,
			s = t.height + t.depth + o + a,
			{ span: l, ruleWidth: u, advanceWidth: h } = la.sqrtImage(s, e),
			f = l.height - u;
		f > t.height + t.depth + o && (o = (o + f - t.height - t.depth) / 2);
		var p = l.height - t.height - o - u;
		t.style.paddingLeft = xe(h);
		var g = U.makeVList(
			{
				positionType: "firstBaseline",
				children: [
					{ type: "elem", elem: t, wrapperClasses: ["svg-align"] },
					{ type: "kern", size: -(t.height + p) },
					{ type: "elem", elem: l },
					{ type: "kern", size: u },
				],
			},
			e
		);
		if (r.index) {
			var y = e.havingStyle(et.SCRIPTSCRIPT),
				x = At(r.index, y, e),
				_ = 0.6 * (g.height - g.depth),
				k = U.makeVList(
					{ positionType: "shift", positionData: -_, children: [{ type: "elem", elem: x }] },
					e
				),
				T = U.makeSpan(["root"], [k]);
			return U.makeSpan(["mord", "sqrt"], [T, g], e);
		} else return U.makeSpan(["mord", "sqrt"], [g], e);
	},
	mathmlBuilder(r, e) {
		var { body: t, index: n } = r;
		return n
			? new ue.MathNode("mroot", [Ut(t, e), Ut(n, e)])
			: new ue.MathNode("msqrt", [Ut(t, e)]);
	},
});
var x1 = { display: et.DISPLAY, text: et.TEXT, script: et.SCRIPT, scriptscript: et.SCRIPTSCRIPT };
Ae({
	type: "styling",
	names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
	props: { numArgs: 0, allowedInText: !0, primitive: !0 },
	handler(r, e) {
		var { breakOnTokenText: t, funcName: n, parser: a } = r,
			i = a.parseExpression(!0, t),
			o = n.slice(1, n.length - 5);
		return { type: "styling", mode: a.mode, style: o, body: i };
	},
	htmlBuilder(r, e) {
		var t = x1[r.style],
			n = e.havingStyle(t).withFont("");
		return am(r.body, n, e);
	},
	mathmlBuilder(r, e) {
		var t = x1[r.style],
			n = e.havingStyle(t),
			a = Xr(r.body, n),
			i = new ue.MathNode("mstyle", a),
			o = {
				display: ["0", "true"],
				text: ["0", "false"],
				script: ["1", "false"],
				scriptscript: ["2", "false"],
			},
			s = o[r.style];
		return i.setAttribute("scriptlevel", s[0]), i.setAttribute("displaystyle", s[1]), i;
	},
});
var A6 = function (e, t) {
	var n = e.base;
	if (n)
		if (n.type === "op") {
			var a = n.limits && (t.style.size === et.DISPLAY.size || n.alwaysHandleSupSub);
			return a ? Ji : null;
		} else if (n.type === "operatorname") {
			var i = n.alwaysHandleSupSub && (t.style.size === et.DISPLAY.size || n.limits);
			return i ? nm : null;
		} else {
			if (n.type === "accent") return Je.isCharacterBox(n.base) ? Eu : null;
			if (n.type === "horizBrace") {
				var o = !e.sub;
				return o === n.isOver ? em : null;
			} else return null;
		}
	else return null;
};
ui({
	type: "supsub",
	htmlBuilder(r, e) {
		var t = A6(r, e);
		if (t) return t(r, e);
		var { base: n, sup: a, sub: i } = r,
			o = At(n, e),
			s,
			l,
			u = e.fontMetrics(),
			h = 0,
			f = 0,
			p = n && Je.isCharacterBox(n);
		if (a) {
			var g = e.havingStyle(e.style.sup());
			(s = At(a, g, e)),
				p || (h = o.height - (g.fontMetrics().supDrop * g.sizeMultiplier) / e.sizeMultiplier);
		}
		if (i) {
			var y = e.havingStyle(e.style.sub());
			(l = At(i, y, e)),
				p || (f = o.depth + (y.fontMetrics().subDrop * y.sizeMultiplier) / e.sizeMultiplier);
		}
		var x;
		e.style === et.DISPLAY ? (x = u.sup1) : e.style.cramped ? (x = u.sup3) : (x = u.sup2);
		var _ = e.sizeMultiplier,
			k = xe(0.5 / u.ptPerEm / _),
			T = null;
		if (l) {
			var B =
				r.base &&
				r.base.type === "op" &&
				r.base.name &&
				(r.base.name === "\\oiint" || r.base.name === "\\oiiint");
			(o instanceof dn || B) && (T = xe(-o.italic));
		}
		var A;
		if (s && l) {
			(h = Math.max(h, x, s.depth + 0.25 * u.xHeight)), (f = Math.max(f, u.sub2));
			var N = u.defaultRuleThickness,
				z = 4 * N;
			if (h - s.depth - (l.height - f) < z) {
				f = z - (h - s.depth) + l.height;
				var I = 0.8 * u.xHeight - (h - s.depth);
				I > 0 && ((h += I), (f -= I));
			}
			var G = [
				{ type: "elem", elem: l, shift: f, marginRight: k, marginLeft: T },
				{ type: "elem", elem: s, shift: -h, marginRight: k },
			];
			A = U.makeVList({ positionType: "individualShift", children: G }, e);
		} else if (l) {
			f = Math.max(f, u.sub1, l.height - 0.8 * u.xHeight);
			var re = [{ type: "elem", elem: l, marginLeft: T, marginRight: k }];
			A = U.makeVList({ positionType: "shift", positionData: f, children: re }, e);
		} else if (s)
			(h = Math.max(h, x, s.depth + 0.25 * u.xHeight)),
				(A = U.makeVList(
					{
						positionType: "shift",
						positionData: -h,
						children: [{ type: "elem", elem: s, marginRight: k }],
					},
					e
				));
		else throw new Error("supsub must have either sup or sub.");
		var V = Pc(o, "right") || "mord";
		return U.makeSpan([V], [o, U.makeSpan(["msupsub"], [A])], e);
	},
	mathmlBuilder(r, e) {
		var t = !1,
			n,
			a;
		r.base &&
			r.base.type === "horizBrace" &&
			((a = !!r.sup), a === r.base.isOver && ((t = !0), (n = r.base.isOver))),
			r.base &&
				(r.base.type === "op" || r.base.type === "operatorname") &&
				(r.base.parentIsSupSub = !0);
		var i = [Ut(r.base, e)];
		r.sub && i.push(Ut(r.sub, e)), r.sup && i.push(Ut(r.sup, e));
		var o;
		if (t) o = n ? "mover" : "munder";
		else if (r.sub)
			if (r.sup) {
				var u = r.base;
				(u && u.type === "op" && u.limits && e.style === et.DISPLAY) ||
				(u &&
					u.type === "operatorname" &&
					u.alwaysHandleSupSub &&
					(e.style === et.DISPLAY || u.limits))
					? (o = "munderover")
					: (o = "msubsup");
			} else {
				var l = r.base;
				(l && l.type === "op" && l.limits && (e.style === et.DISPLAY || l.alwaysHandleSupSub)) ||
				(l &&
					l.type === "operatorname" &&
					l.alwaysHandleSupSub &&
					(l.limits || e.style === et.DISPLAY))
					? (o = "munder")
					: (o = "msub");
			}
		else {
			var s = r.base;
			(s && s.type === "op" && s.limits && (e.style === et.DISPLAY || s.alwaysHandleSupSub)) ||
			(s &&
				s.type === "operatorname" &&
				s.alwaysHandleSupSub &&
				(s.limits || e.style === et.DISPLAY))
				? (o = "mover")
				: (o = "msup");
		}
		return new ue.MathNode(o, i);
	},
});
ui({
	type: "atom",
	htmlBuilder(r, e) {
		return U.mathsym(r.text, r.mode, e, ["m" + r.family]);
	},
	mathmlBuilder(r, e) {
		var t = new ue.MathNode("mo", [hn(r.text, r.mode)]);
		if (r.family === "bin") {
			var n = ku(r, e);
			n === "bold-italic" && t.setAttribute("mathvariant", n);
		} else
			r.family === "punct"
				? t.setAttribute("separator", "true")
				: (r.family === "open" || r.family === "close") && t.setAttribute("stretchy", "false");
		return t;
	},
});
var im = { mi: "italic", mn: "normal", mtext: "normal" };
ui({
	type: "mathord",
	htmlBuilder(r, e) {
		return U.makeOrd(r, e, "mathord");
	},
	mathmlBuilder(r, e) {
		var t = new ue.MathNode("mi", [hn(r.text, r.mode, e)]),
			n = ku(r, e) || "italic";
		return n !== im[t.type] && t.setAttribute("mathvariant", n), t;
	},
});
ui({
	type: "textord",
	htmlBuilder(r, e) {
		return U.makeOrd(r, e, "textord");
	},
	mathmlBuilder(r, e) {
		var t = hn(r.text, r.mode, e),
			n = ku(r, e) || "normal",
			a;
		return (
			r.mode === "text"
				? (a = new ue.MathNode("mtext", [t]))
				: /[0-9]/.test(r.text)
					? (a = new ue.MathNode("mn", [t]))
					: r.text === "\\prime"
						? (a = new ue.MathNode("mo", [t]))
						: (a = new ue.MathNode("mi", [t])),
			n !== im[a.type] && a.setAttribute("mathvariant", n),
			a
		);
	},
});
var Zl = { "\\nobreak": "nobreak", "\\allowbreak": "allowbreak" },
	jl = {
		" ": {},
		"\\ ": {},
		"~": { className: "nobreak" },
		"\\space": {},
		"\\nobreakspace": { className: "nobreak" },
	};
ui({
	type: "spacing",
	htmlBuilder(r, e) {
		if (jl.hasOwnProperty(r.text)) {
			var t = jl[r.text].className || "";
			if (r.mode === "text") {
				var n = U.makeOrd(r, e, "textord");
				return n.classes.push(t), n;
			} else return U.makeSpan(["mspace", t], [U.mathsym(r.text, r.mode, e)], e);
		} else {
			if (Zl.hasOwnProperty(r.text)) return U.makeSpan(["mspace", Zl[r.text]], [], e);
			throw new fe('Unknown type of space "' + r.text + '"');
		}
	},
	mathmlBuilder(r, e) {
		var t;
		if (jl.hasOwnProperty(r.text)) t = new ue.MathNode("mtext", [new ue.TextNode(" ")]);
		else {
			if (Zl.hasOwnProperty(r.text)) return new ue.MathNode("mspace");
			throw new fe('Unknown type of space "' + r.text + '"');
		}
		return t;
	},
});
var w1 = () => {
	var r = new ue.MathNode("mtd", []);
	return r.setAttribute("width", "50%"), r;
};
ui({
	type: "tag",
	mathmlBuilder(r, e) {
		var t = new ue.MathNode("mtable", [
			new ue.MathNode("mtr", [
				w1(),
				new ue.MathNode("mtd", [La(r.body, e)]),
				w1(),
				new ue.MathNode("mtd", [La(r.tag, e)]),
			]),
		]);
		return t.setAttribute("width", "100%"), t;
	},
});
var _1 = {
		"\\text": void 0,
		"\\textrm": "textrm",
		"\\textsf": "textsf",
		"\\texttt": "texttt",
		"\\textnormal": "textrm",
	},
	k1 = { "\\textbf": "textbf", "\\textmd": "textmd" },
	M6 = { "\\textit": "textit", "\\textup": "textup" },
	S1 = (r, e) => {
		var t = r.font;
		if (t) {
			if (_1[t]) return e.withTextFontFamily(_1[t]);
			if (k1[t]) return e.withTextFontWeight(k1[t]);
			if (t === "\\emph")
				return e.fontShape === "textit"
					? e.withTextFontShape("textup")
					: e.withTextFontShape("textit");
		} else return e;
		return e.withTextFontShape(M6[t]);
	};
Ae({
	type: "text",
	names: [
		"\\text",
		"\\textrm",
		"\\textsf",
		"\\texttt",
		"\\textnormal",
		"\\textbf",
		"\\textmd",
		"\\textit",
		"\\textup",
		"\\emph",
	],
	props: { numArgs: 1, argTypes: ["text"], allowedInArgument: !0, allowedInText: !0 },
	handler(r, e) {
		var { parser: t, funcName: n } = r,
			a = e[0];
		return { type: "text", mode: t.mode, body: ir(a), font: n };
	},
	htmlBuilder(r, e) {
		var t = S1(r, e),
			n = xr(r.body, t, !0);
		return U.makeSpan(["mord", "text"], n, t);
	},
	mathmlBuilder(r, e) {
		var t = S1(r, e);
		return La(r.body, t);
	},
});
Ae({
	type: "underline",
	names: ["\\underline"],
	props: { numArgs: 1, allowedInText: !0 },
	handler(r, e) {
		var { parser: t } = r;
		return { type: "underline", mode: t.mode, body: e[0] };
	},
	htmlBuilder(r, e) {
		var t = At(r.body, e),
			n = U.makeLineSpan("underline-line", e),
			a = e.fontMetrics().defaultRuleThickness,
			i = U.makeVList(
				{
					positionType: "top",
					positionData: t.height,
					children: [
						{ type: "kern", size: a },
						{ type: "elem", elem: n },
						{ type: "kern", size: 3 * a },
						{ type: "elem", elem: t },
					],
				},
				e
			);
		return U.makeSpan(["mord", "underline"], [i], e);
	},
	mathmlBuilder(r, e) {
		var t = new ue.MathNode("mo", [new ue.TextNode("‾")]);
		t.setAttribute("stretchy", "true");
		var n = new ue.MathNode("munder", [Ut(r.body, e), t]);
		return n.setAttribute("accentunder", "true"), n;
	},
});
Ae({
	type: "vcenter",
	names: ["\\vcenter"],
	props: { numArgs: 1, argTypes: ["original"], allowedInText: !1 },
	handler(r, e) {
		var { parser: t } = r;
		return { type: "vcenter", mode: t.mode, body: e[0] };
	},
	htmlBuilder(r, e) {
		var t = At(r.body, e),
			n = e.fontMetrics().axisHeight,
			a = 0.5 * (t.height - n - (t.depth + n));
		return U.makeVList(
			{ positionType: "shift", positionData: a, children: [{ type: "elem", elem: t }] },
			e
		);
	},
	mathmlBuilder(r, e) {
		return new ue.MathNode("mpadded", [Ut(r.body, e)], ["vcenter"]);
	},
});
Ae({
	type: "verb",
	names: ["\\verb"],
	props: { numArgs: 0, allowedInText: !0 },
	handler(r, e, t) {
		throw new fe("\\verb ended by end of line instead of matching delimiter");
	},
	htmlBuilder(r, e) {
		for (var t = E1(r), n = [], a = e.havingStyle(e.style.text()), i = 0; i < t.length; i++) {
			var o = t[i];
			o === "~" && (o = "\\textasciitilde"),
				n.push(U.makeSymbol(o, "Typewriter-Regular", r.mode, a, ["mord", "texttt"]));
		}
		return U.makeSpan(["mord", "text"].concat(a.sizingClasses(e)), U.tryCombineChars(n), a);
	},
	mathmlBuilder(r, e) {
		var t = new ue.TextNode(E1(r)),
			n = new ue.MathNode("mtext", [t]);
		return n.setAttribute("mathvariant", "monospace"), n;
	},
});
var E1 = (r) => r.body.replace(/ /g, r.star ? "␣" : " "),
	Aa = Mf,
	om = `[ \r
	]`,
	C6 = "\\\\[a-zA-Z@]+",
	O6 = "\\\\[^\uD800-\uDFFF]",
	N6 = "(" + C6 + ")" + om + "*",
	R6 = `\\\\(
|[ \r	]+
?)[ \r	]*`,
	Hc = "[̀-ͯ]",
	I6 = new RegExp(Hc + "+$"),
	D6 =
		"(" +
		om +
		"+)|" +
		(R6 + "|") +
		"([!-\\[\\]-‧‪-퟿豈-￿]" +
		(Hc + "*") +
		"|[\uD800-\uDBFF][\uDC00-\uDFFF]" +
		(Hc + "*") +
		"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" +
		("|" + N6) +
		("|" + O6 + ")");
class T1 {
	constructor(e, t) {
		(this.input = void 0),
			(this.settings = void 0),
			(this.tokenRegex = void 0),
			(this.catcodes = void 0),
			(this.input = e),
			(this.settings = t),
			(this.tokenRegex = new RegExp(D6, "g")),
			(this.catcodes = { "%": 14, "~": 13 });
	}
	setCatcode(e, t) {
		this.catcodes[e] = t;
	}
	lex() {
		var e = this.input,
			t = this.tokenRegex.lastIndex;
		if (t === e.length) return new un("EOF", new Jr(this, t, t));
		var n = this.tokenRegex.exec(e);
		if (n === null || n.index !== t)
			throw new fe("Unexpected character: '" + e[t] + "'", new un(e[t], new Jr(this, t, t + 1)));
		var a = n[6] || n[3] || (n[2] ? "\\ " : " ");
		if (this.catcodes[a] === 14) {
			var i = e.indexOf(
				`
`,
				this.tokenRegex.lastIndex
			);
			return (
				i === -1
					? ((this.tokenRegex.lastIndex = e.length),
						this.settings.reportNonstrict(
							"commentAtEnd",
							"% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)"
						))
					: (this.tokenRegex.lastIndex = i + 1),
				this.lex()
			);
		}
		return new un(a, new Jr(this, t, this.tokenRegex.lastIndex));
	}
}
class L6 {
	constructor(e, t) {
		e === void 0 && (e = {}),
			t === void 0 && (t = {}),
			(this.current = void 0),
			(this.builtins = void 0),
			(this.undefStack = void 0),
			(this.current = t),
			(this.builtins = e),
			(this.undefStack = []);
	}
	beginGroup() {
		this.undefStack.push({});
	}
	endGroup() {
		if (this.undefStack.length === 0)
			throw new fe(
				"Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug"
			);
		var e = this.undefStack.pop();
		for (var t in e)
			e.hasOwnProperty(t) && (e[t] == null ? delete this.current[t] : (this.current[t] = e[t]));
	}
	endGroups() {
		for (; this.undefStack.length > 0; ) this.endGroup();
	}
	has(e) {
		return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
	}
	get(e) {
		return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
	}
	set(e, t, n) {
		if ((n === void 0 && (n = !1), n)) {
			for (var a = 0; a < this.undefStack.length; a++) delete this.undefStack[a][e];
			this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t);
		} else {
			var i = this.undefStack[this.undefStack.length - 1];
			i && !i.hasOwnProperty(e) && (i[e] = this.current[e]);
		}
		t == null ? delete this.current[e] : (this.current[e] = t);
	}
}
var z6 = Zf;
b("\\noexpand", function (r) {
	var e = r.popToken();
	return (
		r.isExpandable(e.text) && ((e.noexpand = !0), (e.treatAsRelax = !0)),
		{ tokens: [e], numArgs: 0 }
	);
});
b("\\expandafter", function (r) {
	var e = r.popToken();
	return r.expandOnce(!0), { tokens: [e], numArgs: 0 };
});
b("\\@firstoftwo", function (r) {
	var e = r.consumeArgs(2);
	return { tokens: e[0], numArgs: 0 };
});
b("\\@secondoftwo", function (r) {
	var e = r.consumeArgs(2);
	return { tokens: e[1], numArgs: 0 };
});
b("\\@ifnextchar", function (r) {
	var e = r.consumeArgs(3);
	r.consumeSpaces();
	var t = r.future();
	return e[0].length === 1 && e[0][0].text === t.text
		? { tokens: e[1], numArgs: 0 }
		: { tokens: e[2], numArgs: 0 };
});
b("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
b("\\TextOrMath", function (r) {
	var e = r.consumeArgs(2);
	return r.mode === "text" ? { tokens: e[0], numArgs: 0 } : { tokens: e[1], numArgs: 0 };
});
var A1 = {
	0: 0,
	1: 1,
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6,
	7: 7,
	8: 8,
	9: 9,
	a: 10,
	A: 10,
	b: 11,
	B: 11,
	c: 12,
	C: 12,
	d: 13,
	D: 13,
	e: 14,
	E: 14,
	f: 15,
	F: 15,
};
b("\\char", function (r) {
	var e = r.popToken(),
		t,
		n = "";
	if (e.text === "'") (t = 8), (e = r.popToken());
	else if (e.text === '"') (t = 16), (e = r.popToken());
	else if (e.text === "`")
		if (((e = r.popToken()), e.text[0] === "\\")) n = e.text.charCodeAt(1);
		else {
			if (e.text === "EOF") throw new fe("\\char` missing argument");
			n = e.text.charCodeAt(0);
		}
	else t = 10;
	if (t) {
		if (((n = A1[e.text]), n == null || n >= t))
			throw new fe("Invalid base-" + t + " digit " + e.text);
		for (var a; (a = A1[r.future().text]) != null && a < t; ) (n *= t), (n += a), r.popToken();
	}
	return "\\@char{" + n + "}";
});
var Iu = (r, e, t, n) => {
	var a = r.consumeArg().tokens;
	if (a.length !== 1) throw new fe("\\newcommand's first argument must be a macro name");
	var i = a[0].text,
		o = r.isDefined(i);
	if (o && !e)
		throw new fe("\\newcommand{" + i + "} attempting to redefine " + (i + "; use \\renewcommand"));
	if (!o && !t)
		throw new fe(
			"\\renewcommand{" + i + "} when command " + i + " does not yet exist; use \\newcommand"
		);
	var s = 0;
	if (((a = r.consumeArg().tokens), a.length === 1 && a[0].text === "[")) {
		for (var l = "", u = r.expandNextToken(); u.text !== "]" && u.text !== "EOF"; )
			(l += u.text), (u = r.expandNextToken());
		if (!l.match(/^\s*[0-9]+\s*$/)) throw new fe("Invalid number of arguments: " + l);
		(s = parseInt(l)), (a = r.consumeArg().tokens);
	}
	return (o && n) || r.macros.set(i, { tokens: a, numArgs: s }), "";
};
b("\\newcommand", (r) => Iu(r, !1, !0, !1));
b("\\renewcommand", (r) => Iu(r, !0, !1, !1));
b("\\providecommand", (r) => Iu(r, !0, !0, !0));
b("\\message", (r) => {
	var e = r.consumeArgs(1)[0];
	return (
		console.log(
			e
				.reverse()
				.map((t) => t.text)
				.join("")
		),
		""
	);
});
b("\\errmessage", (r) => {
	var e = r.consumeArgs(1)[0];
	return (
		console.error(
			e
				.reverse()
				.map((t) => t.text)
				.join("")
		),
		""
	);
});
b("\\show", (r) => {
	var e = r.popToken(),
		t = e.text;
	return console.log(e, r.macros.get(t), Aa[t], Vt.math[t], Vt.text[t]), "";
});
b("\\bgroup", "{");
b("\\egroup", "}");
b("~", "\\nobreakspace");
b("\\lq", "`");
b("\\rq", "'");
b("\\aa", "\\r a");
b("\\AA", "\\r A");
b("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
b("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
b("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
b("ℬ", "\\mathscr{B}");
b("ℰ", "\\mathscr{E}");
b("ℱ", "\\mathscr{F}");
b("ℋ", "\\mathscr{H}");
b("ℐ", "\\mathscr{I}");
b("ℒ", "\\mathscr{L}");
b("ℳ", "\\mathscr{M}");
b("ℛ", "\\mathscr{R}");
b("ℭ", "\\mathfrak{C}");
b("ℌ", "\\mathfrak{H}");
b("ℨ", "\\mathfrak{Z}");
b("\\Bbbk", "\\Bbb{k}");
b("·", "\\cdotp");
b("\\llap", "\\mathllap{\\textrm{#1}}");
b("\\rlap", "\\mathrlap{\\textrm{#1}}");
b("\\clap", "\\mathclap{\\textrm{#1}}");
b("\\mathstrut", "\\vphantom{(}");
b("\\underbar", "\\underline{\\text{#1}}");
b("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
b("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
b("\\ne", "\\neq");
b("≠", "\\neq");
b("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
b("∉", "\\notin");
b(
	"≘",
	"\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}"
);
b("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
b("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
b("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
b("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
b("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
b("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
b("⟂", "\\perp");
b("‼", "\\mathclose{!\\mkern-0.8mu!}");
b("∌", "\\notni");
b("⌜", "\\ulcorner");
b("⌝", "\\urcorner");
b("⌞", "\\llcorner");
b("⌟", "\\lrcorner");
b("©", "\\copyright");
b("®", "\\textregistered");
b("️", "\\textregistered");
b("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
b("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
b("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
b("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
b("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
b("⋮", "\\vdots");
b("\\varGamma", "\\mathit{\\Gamma}");
b("\\varDelta", "\\mathit{\\Delta}");
b("\\varTheta", "\\mathit{\\Theta}");
b("\\varLambda", "\\mathit{\\Lambda}");
b("\\varXi", "\\mathit{\\Xi}");
b("\\varPi", "\\mathit{\\Pi}");
b("\\varSigma", "\\mathit{\\Sigma}");
b("\\varUpsilon", "\\mathit{\\Upsilon}");
b("\\varPhi", "\\mathit{\\Phi}");
b("\\varPsi", "\\mathit{\\Psi}");
b("\\varOmega", "\\mathit{\\Omega}");
b("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
b(
	"\\colon",
	"\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax"
);
b("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
b("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
b("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
b("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
b("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");
b("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
var M1 = {
	",": "\\dotsc",
	"\\not": "\\dotsb",
	"+": "\\dotsb",
	"=": "\\dotsb",
	"<": "\\dotsb",
	">": "\\dotsb",
	"-": "\\dotsb",
	"*": "\\dotsb",
	":": "\\dotsb",
	"\\DOTSB": "\\dotsb",
	"\\coprod": "\\dotsb",
	"\\bigvee": "\\dotsb",
	"\\bigwedge": "\\dotsb",
	"\\biguplus": "\\dotsb",
	"\\bigcap": "\\dotsb",
	"\\bigcup": "\\dotsb",
	"\\prod": "\\dotsb",
	"\\sum": "\\dotsb",
	"\\bigotimes": "\\dotsb",
	"\\bigoplus": "\\dotsb",
	"\\bigodot": "\\dotsb",
	"\\bigsqcup": "\\dotsb",
	"\\And": "\\dotsb",
	"\\longrightarrow": "\\dotsb",
	"\\Longrightarrow": "\\dotsb",
	"\\longleftarrow": "\\dotsb",
	"\\Longleftarrow": "\\dotsb",
	"\\longleftrightarrow": "\\dotsb",
	"\\Longleftrightarrow": "\\dotsb",
	"\\mapsto": "\\dotsb",
	"\\longmapsto": "\\dotsb",
	"\\hookrightarrow": "\\dotsb",
	"\\doteq": "\\dotsb",
	"\\mathbin": "\\dotsb",
	"\\mathrel": "\\dotsb",
	"\\relbar": "\\dotsb",
	"\\Relbar": "\\dotsb",
	"\\xrightarrow": "\\dotsb",
	"\\xleftarrow": "\\dotsb",
	"\\DOTSI": "\\dotsi",
	"\\int": "\\dotsi",
	"\\oint": "\\dotsi",
	"\\iint": "\\dotsi",
	"\\iiint": "\\dotsi",
	"\\iiiint": "\\dotsi",
	"\\idotsint": "\\dotsi",
	"\\DOTSX": "\\dotsx",
};
b("\\dots", function (r) {
	var e = "\\dotso",
		t = r.expandAfterFuture().text;
	return (
		t in M1
			? (e = M1[t])
			: (t.slice(0, 4) === "\\not" ||
					(t in Vt.math && Je.contains(["bin", "rel"], Vt.math[t].group))) &&
				(e = "\\dotsb"),
		e
	);
});
var Du = {
	")": !0,
	"]": !0,
	"\\rbrack": !0,
	"\\}": !0,
	"\\rbrace": !0,
	"\\rangle": !0,
	"\\rceil": !0,
	"\\rfloor": !0,
	"\\rgroup": !0,
	"\\rmoustache": !0,
	"\\right": !0,
	"\\bigr": !0,
	"\\biggr": !0,
	"\\Bigr": !0,
	"\\Biggr": !0,
	$: !0,
	";": !0,
	".": !0,
	",": !0,
};
b("\\dotso", function (r) {
	var e = r.future().text;
	return e in Du ? "\\ldots\\," : "\\ldots";
});
b("\\dotsc", function (r) {
	var e = r.future().text;
	return e in Du && e !== "," ? "\\ldots\\," : "\\ldots";
});
b("\\cdots", function (r) {
	var e = r.future().text;
	return e in Du ? "\\@cdots\\," : "\\@cdots";
});
b("\\dotsb", "\\cdots");
b("\\dotsm", "\\cdots");
b("\\dotsi", "\\!\\cdots");
b("\\dotsx", "\\ldots\\,");
b("\\DOTSI", "\\relax");
b("\\DOTSB", "\\relax");
b("\\DOTSX", "\\relax");
b("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
b("\\,", "\\tmspace+{3mu}{.1667em}");
b("\\thinspace", "\\,");
b("\\>", "\\mskip{4mu}");
b("\\:", "\\tmspace+{4mu}{.2222em}");
b("\\medspace", "\\:");
b("\\;", "\\tmspace+{5mu}{.2777em}");
b("\\thickspace", "\\;");
b("\\!", "\\tmspace-{3mu}{.1667em}");
b("\\negthinspace", "\\!");
b("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
b("\\negthickspace", "\\tmspace-{5mu}{.277em}");
b("\\enspace", "\\kern.5em ");
b("\\enskip", "\\hskip.5em\\relax");
b("\\quad", "\\hskip1em\\relax");
b("\\qquad", "\\hskip2em\\relax");
b("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
b("\\tag@paren", "\\tag@literal{({#1})}");
b("\\tag@literal", (r) => {
	if (r.macros.get("\\df@tag")) throw new fe("Multiple \\tag");
	return "\\gdef\\df@tag{\\text{#1}}";
});
b(
	"\\bmod",
	"\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"
);
b("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
b("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
b(
	"\\mod",
	"\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"
);
b("\\newline", "\\\\\\relax");
b("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var sm = xe(Ln["Main-Regular"][84][1] - 0.7 * Ln["Main-Regular"][65][1]);
b(
	"\\LaTeX",
	"\\textrm{\\html@mathml{" +
		("L\\kern-.36em\\raisebox{" + sm + "}{\\scriptstyle A}") +
		"\\kern-.15em\\TeX}{LaTeX}}"
);
b(
	"\\KaTeX",
	"\\textrm{\\html@mathml{" +
		("K\\kern-.17em\\raisebox{" + sm + "}{\\scriptstyle A}") +
		"\\kern-.15em\\TeX}{KaTeX}}"
);
b("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
b("\\@hspace", "\\hskip #1\\relax");
b("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
b("\\ordinarycolon", ":");
b("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
b(
	"\\dblcolon",
	'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}'
);
b(
	"\\coloneqq",
	'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}'
);
b(
	"\\Coloneqq",
	'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}'
);
b(
	"\\coloneq",
	'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}'
);
b(
	"\\Coloneq",
	'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}'
);
b(
	"\\eqqcolon",
	'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}'
);
b(
	"\\Eqqcolon",
	'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}'
);
b(
	"\\eqcolon",
	'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}'
);
b(
	"\\Eqcolon",
	'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}'
);
b(
	"\\colonapprox",
	'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}'
);
b(
	"\\Colonapprox",
	'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}'
);
b(
	"\\colonsim",
	'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}'
);
b(
	"\\Colonsim",
	'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}'
);
b("∷", "\\dblcolon");
b("∹", "\\eqcolon");
b("≔", "\\coloneqq");
b("≕", "\\eqqcolon");
b("⩴", "\\Coloneqq");
b("\\ratio", "\\vcentcolon");
b("\\coloncolon", "\\dblcolon");
b("\\colonequals", "\\coloneqq");
b("\\coloncolonequals", "\\Coloneqq");
b("\\equalscolon", "\\eqqcolon");
b("\\equalscoloncolon", "\\Eqqcolon");
b("\\colonminus", "\\coloneq");
b("\\coloncolonminus", "\\Coloneq");
b("\\minuscolon", "\\eqcolon");
b("\\minuscoloncolon", "\\Eqcolon");
b("\\coloncolonapprox", "\\Colonapprox");
b("\\coloncolonsim", "\\Colonsim");
b("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
b("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
b("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
b("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
b("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
b("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
b("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
b("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
b("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
b("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
b("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
b("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
b("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
b("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
b("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
b("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
b("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
b("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
b("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
b("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
b("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
b("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
b("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
b("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
b("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
b("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
b("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
b("\\imath", "\\html@mathml{\\@imath}{ı}");
b("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
b("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
b("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
b("⟦", "\\llbracket");
b("⟧", "\\rrbracket");
b("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
b("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
b("⦃", "\\lBrace");
b("⦄", "\\rBrace");
b(
	"\\minuso",
	"\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}"
);
b("⦵", "\\minuso");
b("\\darr", "\\downarrow");
b("\\dArr", "\\Downarrow");
b("\\Darr", "\\Downarrow");
b("\\lang", "\\langle");
b("\\rang", "\\rangle");
b("\\uarr", "\\uparrow");
b("\\uArr", "\\Uparrow");
b("\\Uarr", "\\Uparrow");
b("\\N", "\\mathbb{N}");
b("\\R", "\\mathbb{R}");
b("\\Z", "\\mathbb{Z}");
b("\\alef", "\\aleph");
b("\\alefsym", "\\aleph");
b("\\Alpha", "\\mathrm{A}");
b("\\Beta", "\\mathrm{B}");
b("\\bull", "\\bullet");
b("\\Chi", "\\mathrm{X}");
b("\\clubs", "\\clubsuit");
b("\\cnums", "\\mathbb{C}");
b("\\Complex", "\\mathbb{C}");
b("\\Dagger", "\\ddagger");
b("\\diamonds", "\\diamondsuit");
b("\\empty", "\\emptyset");
b("\\Epsilon", "\\mathrm{E}");
b("\\Eta", "\\mathrm{H}");
b("\\exist", "\\exists");
b("\\harr", "\\leftrightarrow");
b("\\hArr", "\\Leftrightarrow");
b("\\Harr", "\\Leftrightarrow");
b("\\hearts", "\\heartsuit");
b("\\image", "\\Im");
b("\\infin", "\\infty");
b("\\Iota", "\\mathrm{I}");
b("\\isin", "\\in");
b("\\Kappa", "\\mathrm{K}");
b("\\larr", "\\leftarrow");
b("\\lArr", "\\Leftarrow");
b("\\Larr", "\\Leftarrow");
b("\\lrarr", "\\leftrightarrow");
b("\\lrArr", "\\Leftrightarrow");
b("\\Lrarr", "\\Leftrightarrow");
b("\\Mu", "\\mathrm{M}");
b("\\natnums", "\\mathbb{N}");
b("\\Nu", "\\mathrm{N}");
b("\\Omicron", "\\mathrm{O}");
b("\\plusmn", "\\pm");
b("\\rarr", "\\rightarrow");
b("\\rArr", "\\Rightarrow");
b("\\Rarr", "\\Rightarrow");
b("\\real", "\\Re");
b("\\reals", "\\mathbb{R}");
b("\\Reals", "\\mathbb{R}");
b("\\Rho", "\\mathrm{P}");
b("\\sdot", "\\cdot");
b("\\sect", "\\S");
b("\\spades", "\\spadesuit");
b("\\sub", "\\subset");
b("\\sube", "\\subseteq");
b("\\supe", "\\supseteq");
b("\\Tau", "\\mathrm{T}");
b("\\thetasym", "\\vartheta");
b("\\weierp", "\\wp");
b("\\Zeta", "\\mathrm{Z}");
b("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
b("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
b("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
b("\\bra", "\\mathinner{\\langle{#1}|}");
b("\\ket", "\\mathinner{|{#1}\\rangle}");
b("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
b("\\Bra", "\\left\\langle#1\\right|");
b("\\Ket", "\\left|#1\\right\\rangle");
var lm = (r) => (e) => {
	var t = e.consumeArg().tokens,
		n = e.consumeArg().tokens,
		a = e.consumeArg().tokens,
		i = e.consumeArg().tokens,
		o = e.macros.get("|"),
		s = e.macros.get("\\|");
	e.macros.beginGroup();
	var l = (f) => (p) => {
		r && (p.macros.set("|", o), a.length && p.macros.set("\\|", s));
		var g = f;
		if (!f && a.length) {
			var y = p.future();
			y.text === "|" && (p.popToken(), (g = !0));
		}
		return { tokens: g ? a : n, numArgs: 0 };
	};
	e.macros.set("|", l(!1)), a.length && e.macros.set("\\|", l(!0));
	var u = e.consumeArg().tokens,
		h = e.expandTokens([...i, ...u, ...t]);
	return e.macros.endGroup(), { tokens: h.reverse(), numArgs: 0 };
};
b("\\bra@ket", lm(!1));
b("\\bra@set", lm(!0));
b(
	"\\Braket",
	"\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}"
);
b("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
b("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
b("\\angln", "{\\angl n}");
b("\\blue", "\\textcolor{##6495ed}{#1}");
b("\\orange", "\\textcolor{##ffa500}{#1}");
b("\\pink", "\\textcolor{##ff00af}{#1}");
b("\\red", "\\textcolor{##df0030}{#1}");
b("\\green", "\\textcolor{##28ae7b}{#1}");
b("\\gray", "\\textcolor{gray}{#1}");
b("\\purple", "\\textcolor{##9d38bd}{#1}");
b("\\blueA", "\\textcolor{##ccfaff}{#1}");
b("\\blueB", "\\textcolor{##80f6ff}{#1}");
b("\\blueC", "\\textcolor{##63d9ea}{#1}");
b("\\blueD", "\\textcolor{##11accd}{#1}");
b("\\blueE", "\\textcolor{##0c7f99}{#1}");
b("\\tealA", "\\textcolor{##94fff5}{#1}");
b("\\tealB", "\\textcolor{##26edd5}{#1}");
b("\\tealC", "\\textcolor{##01d1c1}{#1}");
b("\\tealD", "\\textcolor{##01a995}{#1}");
b("\\tealE", "\\textcolor{##208170}{#1}");
b("\\greenA", "\\textcolor{##b6ffb0}{#1}");
b("\\greenB", "\\textcolor{##8af281}{#1}");
b("\\greenC", "\\textcolor{##74cf70}{#1}");
b("\\greenD", "\\textcolor{##1fab54}{#1}");
b("\\greenE", "\\textcolor{##0d923f}{#1}");
b("\\goldA", "\\textcolor{##ffd0a9}{#1}");
b("\\goldB", "\\textcolor{##ffbb71}{#1}");
b("\\goldC", "\\textcolor{##ff9c39}{#1}");
b("\\goldD", "\\textcolor{##e07d10}{#1}");
b("\\goldE", "\\textcolor{##a75a05}{#1}");
b("\\redA", "\\textcolor{##fca9a9}{#1}");
b("\\redB", "\\textcolor{##ff8482}{#1}");
b("\\redC", "\\textcolor{##f9685d}{#1}");
b("\\redD", "\\textcolor{##e84d39}{#1}");
b("\\redE", "\\textcolor{##bc2612}{#1}");
b("\\maroonA", "\\textcolor{##ffbde0}{#1}");
b("\\maroonB", "\\textcolor{##ff92c6}{#1}");
b("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
b("\\maroonD", "\\textcolor{##ca337c}{#1}");
b("\\maroonE", "\\textcolor{##9e034e}{#1}");
b("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
b("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
b("\\purpleC", "\\textcolor{##aa87ff}{#1}");
b("\\purpleD", "\\textcolor{##7854ab}{#1}");
b("\\purpleE", "\\textcolor{##543b78}{#1}");
b("\\mintA", "\\textcolor{##f5f9e8}{#1}");
b("\\mintB", "\\textcolor{##edf2df}{#1}");
b("\\mintC", "\\textcolor{##e0e5cc}{#1}");
b("\\grayA", "\\textcolor{##f6f7f7}{#1}");
b("\\grayB", "\\textcolor{##f0f1f2}{#1}");
b("\\grayC", "\\textcolor{##e3e5e6}{#1}");
b("\\grayD", "\\textcolor{##d6d8da}{#1}");
b("\\grayE", "\\textcolor{##babec2}{#1}");
b("\\grayF", "\\textcolor{##888d93}{#1}");
b("\\grayG", "\\textcolor{##626569}{#1}");
b("\\grayH", "\\textcolor{##3b3e40}{#1}");
b("\\grayI", "\\textcolor{##21242c}{#1}");
b("\\kaBlue", "\\textcolor{##314453}{#1}");
b("\\kaGreen", "\\textcolor{##71B307}{#1}");
var cm = { "^": !0, _: !0, "\\limits": !0, "\\nolimits": !0 };
class B6 {
	constructor(e, t, n) {
		(this.settings = void 0),
			(this.expansionCount = void 0),
			(this.lexer = void 0),
			(this.macros = void 0),
			(this.stack = void 0),
			(this.mode = void 0),
			(this.settings = t),
			(this.expansionCount = 0),
			this.feed(e),
			(this.macros = new L6(z6, t.macros)),
			(this.mode = n),
			(this.stack = []);
	}
	feed(e) {
		this.lexer = new T1(e, this.settings);
	}
	switchMode(e) {
		this.mode = e;
	}
	beginGroup() {
		this.macros.beginGroup();
	}
	endGroup() {
		this.macros.endGroup();
	}
	endGroups() {
		this.macros.endGroups();
	}
	future() {
		return (
			this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1]
		);
	}
	popToken() {
		return this.future(), this.stack.pop();
	}
	pushToken(e) {
		this.stack.push(e);
	}
	pushTokens(e) {
		this.stack.push(...e);
	}
	scanArgument(e) {
		var t, n, a;
		if (e) {
			if ((this.consumeSpaces(), this.future().text !== "[")) return null;
			(t = this.popToken()), ({ tokens: a, end: n } = this.consumeArg(["]"]));
		} else ({ tokens: a, start: t, end: n } = this.consumeArg());
		return this.pushToken(new un("EOF", n.loc)), this.pushTokens(a), t.range(n, "");
	}
	consumeSpaces() {
		for (;;) {
			var e = this.future();
			if (e.text === " ") this.stack.pop();
			else break;
		}
	}
	consumeArg(e) {
		var t = [],
			n = e && e.length > 0;
		n || this.consumeSpaces();
		var a = this.future(),
			i,
			o = 0,
			s = 0;
		do {
			if (((i = this.popToken()), t.push(i), i.text === "{")) ++o;
			else if (i.text === "}") {
				if ((--o, o === -1)) throw new fe("Extra }", i);
			} else if (i.text === "EOF")
				throw new fe(
					"Unexpected end of input in a macro argument, expected '" + (e && n ? e[s] : "}") + "'",
					i
				);
			if (e && n)
				if ((o === 0 || (o === 1 && e[s] === "{")) && i.text === e[s]) {
					if ((++s, s === e.length)) {
						t.splice(-s, s);
						break;
					}
				} else s = 0;
		} while (o !== 0 || n);
		return (
			a.text === "{" && t[t.length - 1].text === "}" && (t.pop(), t.shift()),
			t.reverse(),
			{ tokens: t, start: a, end: i }
		);
	}
	consumeArgs(e, t) {
		if (t) {
			if (t.length !== e + 1)
				throw new fe("The length of delimiters doesn't match the number of args!");
			for (var n = t[0], a = 0; a < n.length; a++) {
				var i = this.popToken();
				if (n[a] !== i.text) throw new fe("Use of the macro doesn't match its definition", i);
			}
		}
		for (var o = [], s = 0; s < e; s++) o.push(this.consumeArg(t && t[s + 1]).tokens);
		return o;
	}
	countExpansion(e) {
		if (((this.expansionCount += e), this.expansionCount > this.settings.maxExpand))
			throw new fe("Too many expansions: infinite loop or need to increase maxExpand setting");
	}
	expandOnce(e) {
		var t = this.popToken(),
			n = t.text,
			a = t.noexpand ? null : this._getExpansion(n);
		if (a == null || (e && a.unexpandable)) {
			if (e && a == null && n[0] === "\\" && !this.isDefined(n))
				throw new fe("Undefined control sequence: " + n);
			return this.pushToken(t), !1;
		}
		this.countExpansion(1);
		var i = a.tokens,
			o = this.consumeArgs(a.numArgs, a.delimiters);
		if (a.numArgs) {
			i = i.slice();
			for (var s = i.length - 1; s >= 0; --s) {
				var l = i[s];
				if (l.text === "#") {
					if (s === 0) throw new fe("Incomplete placeholder at end of macro body", l);
					if (((l = i[--s]), l.text === "#")) i.splice(s + 1, 1);
					else if (/^[1-9]$/.test(l.text)) i.splice(s, 2, ...o[+l.text - 1]);
					else throw new fe("Not a valid argument number", l);
				}
			}
		}
		return this.pushTokens(i), i.length;
	}
	expandAfterFuture() {
		return this.expandOnce(), this.future();
	}
	expandNextToken() {
		for (;;)
			if (this.expandOnce() === !1) {
				var e = this.stack.pop();
				return e.treatAsRelax && (e.text = "\\relax"), e;
			}
		throw new Error();
	}
	expandMacro(e) {
		return this.macros.has(e) ? this.expandTokens([new un(e)]) : void 0;
	}
	expandTokens(e) {
		var t = [],
			n = this.stack.length;
		for (this.pushTokens(e); this.stack.length > n; )
			if (this.expandOnce(!0) === !1) {
				var a = this.stack.pop();
				a.treatAsRelax && ((a.noexpand = !1), (a.treatAsRelax = !1)), t.push(a);
			}
		return this.countExpansion(t.length), t;
	}
	expandMacroAsText(e) {
		var t = this.expandMacro(e);
		return t && t.map((n) => n.text).join("");
	}
	_getExpansion(e) {
		var t = this.macros.get(e);
		if (t == null) return t;
		if (e.length === 1) {
			var n = this.lexer.catcodes[e];
			if (n != null && n !== 13) return;
		}
		var a = typeof t == "function" ? t(this) : t;
		if (typeof a == "string") {
			var i = 0;
			if (a.indexOf("#") !== -1)
				for (var o = a.replace(/##/g, ""); o.indexOf("#" + (i + 1)) !== -1; ) ++i;
			for (var s = new T1(a, this.settings), l = [], u = s.lex(); u.text !== "EOF"; )
				l.push(u), (u = s.lex());
			l.reverse();
			var h = { tokens: l, numArgs: i };
			return h;
		}
		return a;
	}
	isDefined(e) {
		return (
			this.macros.has(e) ||
			Aa.hasOwnProperty(e) ||
			Vt.math.hasOwnProperty(e) ||
			Vt.text.hasOwnProperty(e) ||
			cm.hasOwnProperty(e)
		);
	}
	isExpandable(e) {
		var t = this.macros.get(e);
		return t != null
			? typeof t == "string" || typeof t == "function" || !t.unexpandable
			: Aa.hasOwnProperty(e) && !Aa[e].primitive;
	}
}
var C1 = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,
	js = Object.freeze({
		"₊": "+",
		"₋": "-",
		"₌": "=",
		"₍": "(",
		"₎": ")",
		"₀": "0",
		"₁": "1",
		"₂": "2",
		"₃": "3",
		"₄": "4",
		"₅": "5",
		"₆": "6",
		"₇": "7",
		"₈": "8",
		"₉": "9",
		ₐ: "a",
		ₑ: "e",
		ₕ: "h",
		ᵢ: "i",
		ⱼ: "j",
		ₖ: "k",
		ₗ: "l",
		ₘ: "m",
		ₙ: "n",
		ₒ: "o",
		ₚ: "p",
		ᵣ: "r",
		ₛ: "s",
		ₜ: "t",
		ᵤ: "u",
		ᵥ: "v",
		ₓ: "x",
		ᵦ: "β",
		ᵧ: "γ",
		ᵨ: "ρ",
		ᵩ: "ϕ",
		ᵪ: "χ",
		"⁺": "+",
		"⁻": "-",
		"⁼": "=",
		"⁽": "(",
		"⁾": ")",
		"⁰": "0",
		"¹": "1",
		"²": "2",
		"³": "3",
		"⁴": "4",
		"⁵": "5",
		"⁶": "6",
		"⁷": "7",
		"⁸": "8",
		"⁹": "9",
		ᴬ: "A",
		ᴮ: "B",
		ᴰ: "D",
		ᴱ: "E",
		ᴳ: "G",
		ᴴ: "H",
		ᴵ: "I",
		ᴶ: "J",
		ᴷ: "K",
		ᴸ: "L",
		ᴹ: "M",
		ᴺ: "N",
		ᴼ: "O",
		ᴾ: "P",
		ᴿ: "R",
		ᵀ: "T",
		ᵁ: "U",
		ⱽ: "V",
		ᵂ: "W",
		ᵃ: "a",
		ᵇ: "b",
		ᶜ: "c",
		ᵈ: "d",
		ᵉ: "e",
		ᶠ: "f",
		ᵍ: "g",
		ʰ: "h",
		ⁱ: "i",
		ʲ: "j",
		ᵏ: "k",
		ˡ: "l",
		ᵐ: "m",
		ⁿ: "n",
		ᵒ: "o",
		ᵖ: "p",
		ʳ: "r",
		ˢ: "s",
		ᵗ: "t",
		ᵘ: "u",
		ᵛ: "v",
		ʷ: "w",
		ˣ: "x",
		ʸ: "y",
		ᶻ: "z",
		ᵝ: "β",
		ᵞ: "γ",
		ᵟ: "δ",
		ᵠ: "ϕ",
		ᵡ: "χ",
		ᶿ: "θ",
	}),
	Jl = {
		"́": { text: "\\'", math: "\\acute" },
		"̀": { text: "\\`", math: "\\grave" },
		"̈": { text: '\\"', math: "\\ddot" },
		"̃": { text: "\\~", math: "\\tilde" },
		"̄": { text: "\\=", math: "\\bar" },
		"̆": { text: "\\u", math: "\\breve" },
		"̌": { text: "\\v", math: "\\check" },
		"̂": { text: "\\^", math: "\\hat" },
		"̇": { text: "\\.", math: "\\dot" },
		"̊": { text: "\\r", math: "\\mathring" },
		"̋": { text: "\\H" },
		"̧": { text: "\\c" },
	},
	O1 = {
		á: "á",
		à: "à",
		ä: "ä",
		ǟ: "ǟ",
		ã: "ã",
		ā: "ā",
		ă: "ă",
		ắ: "ắ",
		ằ: "ằ",
		ẵ: "ẵ",
		ǎ: "ǎ",
		â: "â",
		ấ: "ấ",
		ầ: "ầ",
		ẫ: "ẫ",
		ȧ: "ȧ",
		ǡ: "ǡ",
		å: "å",
		ǻ: "ǻ",
		ḃ: "ḃ",
		ć: "ć",
		ḉ: "ḉ",
		č: "č",
		ĉ: "ĉ",
		ċ: "ċ",
		ç: "ç",
		ď: "ď",
		ḋ: "ḋ",
		ḑ: "ḑ",
		é: "é",
		è: "è",
		ë: "ë",
		ẽ: "ẽ",
		ē: "ē",
		ḗ: "ḗ",
		ḕ: "ḕ",
		ĕ: "ĕ",
		ḝ: "ḝ",
		ě: "ě",
		ê: "ê",
		ế: "ế",
		ề: "ề",
		ễ: "ễ",
		ė: "ė",
		ȩ: "ȩ",
		ḟ: "ḟ",
		ǵ: "ǵ",
		ḡ: "ḡ",
		ğ: "ğ",
		ǧ: "ǧ",
		ĝ: "ĝ",
		ġ: "ġ",
		ģ: "ģ",
		ḧ: "ḧ",
		ȟ: "ȟ",
		ĥ: "ĥ",
		ḣ: "ḣ",
		ḩ: "ḩ",
		í: "í",
		ì: "ì",
		ï: "ï",
		ḯ: "ḯ",
		ĩ: "ĩ",
		ī: "ī",
		ĭ: "ĭ",
		ǐ: "ǐ",
		î: "î",
		ǰ: "ǰ",
		ĵ: "ĵ",
		ḱ: "ḱ",
		ǩ: "ǩ",
		ķ: "ķ",
		ĺ: "ĺ",
		ľ: "ľ",
		ļ: "ļ",
		ḿ: "ḿ",
		ṁ: "ṁ",
		ń: "ń",
		ǹ: "ǹ",
		ñ: "ñ",
		ň: "ň",
		ṅ: "ṅ",
		ņ: "ņ",
		ó: "ó",
		ò: "ò",
		ö: "ö",
		ȫ: "ȫ",
		õ: "õ",
		ṍ: "ṍ",
		ṏ: "ṏ",
		ȭ: "ȭ",
		ō: "ō",
		ṓ: "ṓ",
		ṑ: "ṑ",
		ŏ: "ŏ",
		ǒ: "ǒ",
		ô: "ô",
		ố: "ố",
		ồ: "ồ",
		ỗ: "ỗ",
		ȯ: "ȯ",
		ȱ: "ȱ",
		ő: "ő",
		ṕ: "ṕ",
		ṗ: "ṗ",
		ŕ: "ŕ",
		ř: "ř",
		ṙ: "ṙ",
		ŗ: "ŗ",
		ś: "ś",
		ṥ: "ṥ",
		š: "š",
		ṧ: "ṧ",
		ŝ: "ŝ",
		ṡ: "ṡ",
		ş: "ş",
		ẗ: "ẗ",
		ť: "ť",
		ṫ: "ṫ",
		ţ: "ţ",
		ú: "ú",
		ù: "ù",
		ü: "ü",
		ǘ: "ǘ",
		ǜ: "ǜ",
		ǖ: "ǖ",
		ǚ: "ǚ",
		ũ: "ũ",
		ṹ: "ṹ",
		ū: "ū",
		ṻ: "ṻ",
		ŭ: "ŭ",
		ǔ: "ǔ",
		û: "û",
		ů: "ů",
		ű: "ű",
		ṽ: "ṽ",
		ẃ: "ẃ",
		ẁ: "ẁ",
		ẅ: "ẅ",
		ŵ: "ŵ",
		ẇ: "ẇ",
		ẘ: "ẘ",
		ẍ: "ẍ",
		ẋ: "ẋ",
		ý: "ý",
		ỳ: "ỳ",
		ÿ: "ÿ",
		ỹ: "ỹ",
		ȳ: "ȳ",
		ŷ: "ŷ",
		ẏ: "ẏ",
		ẙ: "ẙ",
		ź: "ź",
		ž: "ž",
		ẑ: "ẑ",
		ż: "ż",
		Á: "Á",
		À: "À",
		Ä: "Ä",
		Ǟ: "Ǟ",
		Ã: "Ã",
		Ā: "Ā",
		Ă: "Ă",
		Ắ: "Ắ",
		Ằ: "Ằ",
		Ẵ: "Ẵ",
		Ǎ: "Ǎ",
		Â: "Â",
		Ấ: "Ấ",
		Ầ: "Ầ",
		Ẫ: "Ẫ",
		Ȧ: "Ȧ",
		Ǡ: "Ǡ",
		Å: "Å",
		Ǻ: "Ǻ",
		Ḃ: "Ḃ",
		Ć: "Ć",
		Ḉ: "Ḉ",
		Č: "Č",
		Ĉ: "Ĉ",
		Ċ: "Ċ",
		Ç: "Ç",
		Ď: "Ď",
		Ḋ: "Ḋ",
		Ḑ: "Ḑ",
		É: "É",
		È: "È",
		Ë: "Ë",
		Ẽ: "Ẽ",
		Ē: "Ē",
		Ḗ: "Ḗ",
		Ḕ: "Ḕ",
		Ĕ: "Ĕ",
		Ḝ: "Ḝ",
		Ě: "Ě",
		Ê: "Ê",
		Ế: "Ế",
		Ề: "Ề",
		Ễ: "Ễ",
		Ė: "Ė",
		Ȩ: "Ȩ",
		Ḟ: "Ḟ",
		Ǵ: "Ǵ",
		Ḡ: "Ḡ",
		Ğ: "Ğ",
		Ǧ: "Ǧ",
		Ĝ: "Ĝ",
		Ġ: "Ġ",
		Ģ: "Ģ",
		Ḧ: "Ḧ",
		Ȟ: "Ȟ",
		Ĥ: "Ĥ",
		Ḣ: "Ḣ",
		Ḩ: "Ḩ",
		Í: "Í",
		Ì: "Ì",
		Ï: "Ï",
		Ḯ: "Ḯ",
		Ĩ: "Ĩ",
		Ī: "Ī",
		Ĭ: "Ĭ",
		Ǐ: "Ǐ",
		Î: "Î",
		İ: "İ",
		Ĵ: "Ĵ",
		Ḱ: "Ḱ",
		Ǩ: "Ǩ",
		Ķ: "Ķ",
		Ĺ: "Ĺ",
		Ľ: "Ľ",
		Ļ: "Ļ",
		Ḿ: "Ḿ",
		Ṁ: "Ṁ",
		Ń: "Ń",
		Ǹ: "Ǹ",
		Ñ: "Ñ",
		Ň: "Ň",
		Ṅ: "Ṅ",
		Ņ: "Ņ",
		Ó: "Ó",
		Ò: "Ò",
		Ö: "Ö",
		Ȫ: "Ȫ",
		Õ: "Õ",
		Ṍ: "Ṍ",
		Ṏ: "Ṏ",
		Ȭ: "Ȭ",
		Ō: "Ō",
		Ṓ: "Ṓ",
		Ṑ: "Ṑ",
		Ŏ: "Ŏ",
		Ǒ: "Ǒ",
		Ô: "Ô",
		Ố: "Ố",
		Ồ: "Ồ",
		Ỗ: "Ỗ",
		Ȯ: "Ȯ",
		Ȱ: "Ȱ",
		Ő: "Ő",
		Ṕ: "Ṕ",
		Ṗ: "Ṗ",
		Ŕ: "Ŕ",
		Ř: "Ř",
		Ṙ: "Ṙ",
		Ŗ: "Ŗ",
		Ś: "Ś",
		Ṥ: "Ṥ",
		Š: "Š",
		Ṧ: "Ṧ",
		Ŝ: "Ŝ",
		Ṡ: "Ṡ",
		Ş: "Ş",
		Ť: "Ť",
		Ṫ: "Ṫ",
		Ţ: "Ţ",
		Ú: "Ú",
		Ù: "Ù",
		Ü: "Ü",
		Ǘ: "Ǘ",
		Ǜ: "Ǜ",
		Ǖ: "Ǖ",
		Ǚ: "Ǚ",
		Ũ: "Ũ",
		Ṹ: "Ṹ",
		Ū: "Ū",
		Ṻ: "Ṻ",
		Ŭ: "Ŭ",
		Ǔ: "Ǔ",
		Û: "Û",
		Ů: "Ů",
		Ű: "Ű",
		Ṽ: "Ṽ",
		Ẃ: "Ẃ",
		Ẁ: "Ẁ",
		Ẅ: "Ẅ",
		Ŵ: "Ŵ",
		Ẇ: "Ẇ",
		Ẍ: "Ẍ",
		Ẋ: "Ẋ",
		Ý: "Ý",
		Ỳ: "Ỳ",
		Ÿ: "Ÿ",
		Ỹ: "Ỹ",
		Ȳ: "Ȳ",
		Ŷ: "Ŷ",
		Ẏ: "Ẏ",
		Ź: "Ź",
		Ž: "Ž",
		Ẑ: "Ẑ",
		Ż: "Ż",
		ά: "ά",
		ὰ: "ὰ",
		ᾱ: "ᾱ",
		ᾰ: "ᾰ",
		έ: "έ",
		ὲ: "ὲ",
		ή: "ή",
		ὴ: "ὴ",
		ί: "ί",
		ὶ: "ὶ",
		ϊ: "ϊ",
		ΐ: "ΐ",
		ῒ: "ῒ",
		ῑ: "ῑ",
		ῐ: "ῐ",
		ό: "ό",
		ὸ: "ὸ",
		ύ: "ύ",
		ὺ: "ὺ",
		ϋ: "ϋ",
		ΰ: "ΰ",
		ῢ: "ῢ",
		ῡ: "ῡ",
		ῠ: "ῠ",
		ώ: "ώ",
		ὼ: "ὼ",
		Ύ: "Ύ",
		Ὺ: "Ὺ",
		Ϋ: "Ϋ",
		Ῡ: "Ῡ",
		Ῠ: "Ῠ",
		Ώ: "Ώ",
		Ὼ: "Ὼ",
	};
class Sl {
	constructor(e, t) {
		(this.mode = void 0),
			(this.gullet = void 0),
			(this.settings = void 0),
			(this.leftrightDepth = void 0),
			(this.nextToken = void 0),
			(this.mode = "math"),
			(this.gullet = new B6(e, t, this.mode)),
			(this.settings = t),
			(this.leftrightDepth = 0);
	}
	expect(e, t) {
		if ((t === void 0 && (t = !0), this.fetch().text !== e))
			throw new fe("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
		t && this.consume();
	}
	consume() {
		this.nextToken = null;
	}
	fetch() {
		return (
			this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken
		);
	}
	switchMode(e) {
		(this.mode = e), this.gullet.switchMode(e);
	}
	parse() {
		this.settings.globalGroup || this.gullet.beginGroup(),
			this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
		try {
			var e = this.parseExpression(!1);
			return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e;
		} finally {
			this.gullet.endGroups();
		}
	}
	subparse(e) {
		var t = this.nextToken;
		this.consume(), this.gullet.pushToken(new un("}")), this.gullet.pushTokens(e);
		var n = this.parseExpression(!1);
		return this.expect("}"), (this.nextToken = t), n;
	}
	parseExpression(e, t) {
		for (var n = []; ; ) {
			this.mode === "math" && this.consumeSpaces();
			var a = this.fetch();
			if (
				Sl.endOfExpression.indexOf(a.text) !== -1 ||
				(t && a.text === t) ||
				(e && Aa[a.text] && Aa[a.text].infix)
			)
				break;
			var i = this.parseAtom(t);
			if (i) {
				if (i.type === "internal") continue;
			} else break;
			n.push(i);
		}
		return this.mode === "text" && this.formLigatures(n), this.handleInfixNodes(n);
	}
	handleInfixNodes(e) {
		for (var t = -1, n, a = 0; a < e.length; a++)
			if (e[a].type === "infix") {
				if (t !== -1) throw new fe("only one infix operator per group", e[a].token);
				(t = a), (n = e[a].replaceWith);
			}
		if (t !== -1 && n) {
			var i,
				o,
				s = e.slice(0, t),
				l = e.slice(t + 1);
			s.length === 1 && s[0].type === "ordgroup"
				? (i = s[0])
				: (i = { type: "ordgroup", mode: this.mode, body: s }),
				l.length === 1 && l[0].type === "ordgroup"
					? (o = l[0])
					: (o = { type: "ordgroup", mode: this.mode, body: l });
			var u;
			return (
				n === "\\\\abovefrac"
					? (u = this.callFunction(n, [i, e[t], o], []))
					: (u = this.callFunction(n, [i, o], [])),
				[u]
			);
		} else return e;
	}
	handleSupSubscript(e) {
		var t = this.fetch(),
			n = t.text;
		this.consume(), this.consumeSpaces();
		var a;
		do {
			var i;
			a = this.parseGroup(e);
		} while (((i = a) == null ? void 0 : i.type) === "internal");
		if (!a) throw new fe("Expected group after '" + n + "'", t);
		return a;
	}
	formatUnsupportedCmd(e) {
		for (var t = [], n = 0; n < e.length; n++)
			t.push({ type: "textord", mode: "text", text: e[n] });
		var a = { type: "text", mode: this.mode, body: t },
			i = { type: "color", mode: this.mode, color: this.settings.errorColor, body: [a] };
		return i;
	}
	parseAtom(e) {
		var t = this.parseGroup("atom", e);
		if ((t == null ? void 0 : t.type) === "internal" || this.mode === "text") return t;
		for (var n, a; ; ) {
			this.consumeSpaces();
			var i = this.fetch();
			if (i.text === "\\limits" || i.text === "\\nolimits") {
				if (t && t.type === "op") {
					var o = i.text === "\\limits";
					(t.limits = o), (t.alwaysHandleSupSub = !0);
				} else if (t && t.type === "operatorname")
					t.alwaysHandleSupSub && (t.limits = i.text === "\\limits");
				else throw new fe("Limit controls must follow a math operator", i);
				this.consume();
			} else if (i.text === "^") {
				if (n) throw new fe("Double superscript", i);
				n = this.handleSupSubscript("superscript");
			} else if (i.text === "_") {
				if (a) throw new fe("Double subscript", i);
				a = this.handleSupSubscript("subscript");
			} else if (i.text === "'") {
				if (n) throw new fe("Double superscript", i);
				var s = { type: "textord", mode: this.mode, text: "\\prime" },
					l = [s];
				for (this.consume(); this.fetch().text === "'"; ) l.push(s), this.consume();
				this.fetch().text === "^" && l.push(this.handleSupSubscript("superscript")),
					(n = { type: "ordgroup", mode: this.mode, body: l });
			} else if (js[i.text]) {
				var u = C1.test(i.text),
					h = [];
				for (h.push(new un(js[i.text])), this.consume(); ; ) {
					var f = this.fetch().text;
					if (!js[f] || C1.test(f) !== u) break;
					h.unshift(new un(js[f])), this.consume();
				}
				var p = this.subparse(h);
				u
					? (a = { type: "ordgroup", mode: "math", body: p })
					: (n = { type: "ordgroup", mode: "math", body: p });
			} else break;
		}
		return n || a ? { type: "supsub", mode: this.mode, base: t, sup: n, sub: a } : t;
	}
	parseFunction(e, t) {
		var n = this.fetch(),
			a = n.text,
			i = Aa[a];
		if (!i) return null;
		if ((this.consume(), t && t !== "atom" && !i.allowedInArgument))
			throw new fe("Got function '" + a + "' with no arguments" + (t ? " as " + t : ""), n);
		if (this.mode === "text" && !i.allowedInText)
			throw new fe("Can't use function '" + a + "' in text mode", n);
		if (this.mode === "math" && i.allowedInMath === !1)
			throw new fe("Can't use function '" + a + "' in math mode", n);
		var { args: o, optArgs: s } = this.parseArguments(a, i);
		return this.callFunction(a, o, s, n, e);
	}
	callFunction(e, t, n, a, i) {
		var o = { funcName: e, parser: this, token: a, breakOnTokenText: i },
			s = Aa[e];
		if (s && s.handler) return s.handler(o, t, n);
		throw new fe("No function handler for " + e);
	}
	parseArguments(e, t) {
		var n = t.numArgs + t.numOptionalArgs;
		if (n === 0) return { args: [], optArgs: [] };
		for (var a = [], i = [], o = 0; o < n; o++) {
			var s = t.argTypes && t.argTypes[o],
				l = o < t.numOptionalArgs;
			((t.primitive && s == null) || (t.type === "sqrt" && o === 1 && i[0] == null)) &&
				(s = "primitive");
			var u = this.parseGroupOfType("argument to '" + e + "'", s, l);
			if (l) i.push(u);
			else if (u != null) a.push(u);
			else throw new fe("Null argument, please report this as a bug");
		}
		return { args: a, optArgs: i };
	}
	parseGroupOfType(e, t, n) {
		switch (t) {
			case "color":
				return this.parseColorGroup(n);
			case "size":
				return this.parseSizeGroup(n);
			case "url":
				return this.parseUrlGroup(n);
			case "math":
			case "text":
				return this.parseArgumentGroup(n, t);
			case "hbox": {
				var a = this.parseArgumentGroup(n, "text");
				return a != null ? { type: "styling", mode: a.mode, body: [a], style: "text" } : null;
			}
			case "raw": {
				var i = this.parseStringGroup("raw", n);
				return i != null ? { type: "raw", mode: "text", string: i.text } : null;
			}
			case "primitive": {
				if (n) throw new fe("A primitive argument cannot be optional");
				var o = this.parseGroup(e);
				if (o == null) throw new fe("Expected group as " + e, this.fetch());
				return o;
			}
			case "original":
			case null:
			case void 0:
				return this.parseArgumentGroup(n);
			default:
				throw new fe("Unknown group type as " + e, this.fetch());
		}
	}
	consumeSpaces() {
		for (; this.fetch().text === " "; ) this.consume();
	}
	parseStringGroup(e, t) {
		var n = this.gullet.scanArgument(t);
		if (n == null) return null;
		for (var a = "", i; (i = this.fetch()).text !== "EOF"; ) (a += i.text), this.consume();
		return this.consume(), (n.text = a), n;
	}
	parseRegexGroup(e, t) {
		for (
			var n = this.fetch(), a = n, i = "", o;
			(o = this.fetch()).text !== "EOF" && e.test(i + o.text);

		)
			(a = o), (i += a.text), this.consume();
		if (i === "") throw new fe("Invalid " + t + ": '" + n.text + "'", n);
		return n.range(a, i);
	}
	parseColorGroup(e) {
		var t = this.parseStringGroup("color", e);
		if (t == null) return null;
		var n = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
		if (!n) throw new fe("Invalid color: '" + t.text + "'", t);
		var a = n[0];
		return (
			/^[0-9a-f]{6}$/i.test(a) && (a = "#" + a), { type: "color-token", mode: this.mode, color: a }
		);
	}
	parseSizeGroup(e) {
		var t,
			n = !1;
		if (
			(this.gullet.consumeSpaces(),
			!e && this.gullet.future().text !== "{"
				? (t = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size"))
				: (t = this.parseStringGroup("size", e)),
			!t)
		)
			return null;
		!e && t.text.length === 0 && ((t.text = "0pt"), (n = !0));
		var a = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
		if (!a) throw new fe("Invalid size: '" + t.text + "'", t);
		var i = { number: +(a[1] + a[2]), unit: a[3] };
		if (!yf(i)) throw new fe("Invalid unit: '" + i.unit + "'", t);
		return { type: "size", mode: this.mode, value: i, isBlank: n };
	}
	parseUrlGroup(e) {
		this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
		var t = this.parseStringGroup("url", e);
		if ((this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), t == null))
			return null;
		var n = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
		return { type: "url", mode: this.mode, url: n };
	}
	parseArgumentGroup(e, t) {
		var n = this.gullet.scanArgument(e);
		if (n == null) return null;
		var a = this.mode;
		t && this.switchMode(t), this.gullet.beginGroup();
		var i = this.parseExpression(!1, "EOF");
		this.expect("EOF"), this.gullet.endGroup();
		var o = { type: "ordgroup", mode: this.mode, loc: n.loc, body: i };
		return t && this.switchMode(a), o;
	}
	parseGroup(e, t) {
		var n = this.fetch(),
			a = n.text,
			i;
		if (a === "{" || a === "\\begingroup") {
			this.consume();
			var o = a === "{" ? "}" : "\\endgroup";
			this.gullet.beginGroup();
			var s = this.parseExpression(!1, o),
				l = this.fetch();
			this.expect(o),
				this.gullet.endGroup(),
				(i = {
					type: "ordgroup",
					mode: this.mode,
					loc: Jr.range(n, l),
					body: s,
					semisimple: a === "\\begingroup" || void 0,
				});
		} else if (
			((i = this.parseFunction(t, e) || this.parseSymbol()),
			i == null && a[0] === "\\" && !cm.hasOwnProperty(a))
		) {
			if (this.settings.throwOnError) throw new fe("Undefined control sequence: " + a, n);
			(i = this.formatUnsupportedCmd(a)), this.consume();
		}
		return i;
	}
	formLigatures(e) {
		for (var t = e.length - 1, n = 0; n < t; ++n) {
			var a = e[n],
				i = a.text;
			i === "-" &&
				e[n + 1].text === "-" &&
				(n + 1 < t && e[n + 2].text === "-"
					? (e.splice(n, 3, {
							type: "textord",
							mode: "text",
							loc: Jr.range(a, e[n + 2]),
							text: "---",
						}),
						(t -= 2))
					: (e.splice(n, 2, {
							type: "textord",
							mode: "text",
							loc: Jr.range(a, e[n + 1]),
							text: "--",
						}),
						(t -= 1))),
				(i === "'" || i === "`") &&
					e[n + 1].text === i &&
					(e.splice(n, 2, {
						type: "textord",
						mode: "text",
						loc: Jr.range(a, e[n + 1]),
						text: i + i,
					}),
					(t -= 1));
		}
	}
	parseSymbol() {
		var e = this.fetch(),
			t = e.text;
		if (/^\\verb[^a-zA-Z]/.test(t)) {
			this.consume();
			var n = t.slice(5),
				a = n.charAt(0) === "*";
			if ((a && (n = n.slice(1)), n.length < 2 || n.charAt(0) !== n.slice(-1)))
				throw new fe(`\\verb assertion failed --
                    please report what input caused this bug`);
			return (n = n.slice(1, -1)), { type: "verb", mode: "text", body: n, star: a };
		}
		O1.hasOwnProperty(t[0]) &&
			!Vt[this.mode][t[0]] &&
			(this.settings.strict &&
				this.mode === "math" &&
				this.settings.reportNonstrict(
					"unicodeTextInMathMode",
					'Accented Unicode text character "' + t[0] + '" used in math mode',
					e
				),
			(t = O1[t[0]] + t.slice(1)));
		var i = I6.exec(t);
		i && ((t = t.substring(0, i.index)), t === "i" ? (t = "ı") : t === "j" && (t = "ȷ"));
		var o;
		if (Vt[this.mode][t]) {
			this.settings.strict &&
				this.mode === "math" &&
				Bc.indexOf(t) >= 0 &&
				this.settings.reportNonstrict(
					"unicodeTextInMathMode",
					'Latin-1/Unicode text character "' + t[0] + '" used in math mode',
					e
				);
			var s = Vt[this.mode][t].group,
				l = Jr.range(e),
				u;
			if (E5.hasOwnProperty(s)) {
				var h = s;
				u = { type: "atom", mode: this.mode, family: h, loc: l, text: t };
			} else u = { type: s, mode: this.mode, loc: l, text: t };
			o = u;
		} else if (t.charCodeAt(0) >= 128)
			this.settings.strict &&
				(bf(t.charCodeAt(0))
					? this.mode === "math" &&
						this.settings.reportNonstrict(
							"unicodeTextInMathMode",
							'Unicode text character "' + t[0] + '" used in math mode',
							e
						)
					: this.settings.reportNonstrict(
							"unknownSymbol",
							'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"),
							e
						)),
				(o = { type: "textord", mode: "text", loc: Jr.range(e), text: t });
		else return null;
		if ((this.consume(), i))
			for (var f = 0; f < i[0].length; f++) {
				var p = i[0][f];
				if (!Jl[p]) throw new fe("Unknown accent ' " + p + "'", e);
				var g = Jl[p][this.mode] || Jl[p].text;
				if (!g) throw new fe("Accent " + p + " unsupported in " + this.mode + " mode", e);
				o = {
					type: "accent",
					mode: this.mode,
					loc: Jr.range(e),
					label: g,
					isStretchy: !1,
					isShifty: !0,
					base: o,
				};
			}
		return o;
	}
}
Sl.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var Lu = function (e, t) {
		if (!(typeof e == "string" || e instanceof String))
			throw new TypeError("KaTeX can only parse string typed expression");
		var n = new Sl(e, t);
		delete n.gullet.macros.current["\\df@tag"];
		var a = n.parse();
		if (
			(delete n.gullet.macros.current["\\current@color"],
			delete n.gullet.macros.current["\\color"],
			n.gullet.macros.get("\\df@tag"))
		) {
			if (!t.displayMode) throw new fe("\\tag works only in display equations");
			a = [{ type: "tag", mode: "text", body: a, tag: n.subparse([new un("\\df@tag")]) }];
		}
		return a;
	},
	um = function (e, t, n) {
		t.textContent = "";
		var a = zu(e, n).toNode();
		t.appendChild(a);
	};
typeof document < "u" &&
	document.compatMode !== "CSS1Compat" &&
	(typeof console < "u" &&
		console.warn(
			"Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."
		),
	(um = function () {
		throw new fe("KaTeX doesn't work in quirks mode.");
	}));
var P6 = function (e, t) {
		var n = zu(e, t).toMarkup();
		return n;
	},
	F6 = function (e, t) {
		var n = new vu(t);
		return Lu(e, n);
	},
	dm = function (e, t, n) {
		if (n.throwOnError || !(e instanceof fe)) throw e;
		var a = U.makeSpan(["katex-error"], [new dn(t)]);
		return (
			a.setAttribute("title", e.toString()), a.setAttribute("style", "color:" + n.errorColor), a
		);
	},
	zu = function (e, t) {
		var n = new vu(t);
		try {
			var a = Lu(e, n);
			return X5(a, e, n);
		} catch (i) {
			return dm(i, e, n);
		}
	},
	q6 = function (e, t) {
		var n = new vu(t);
		try {
			var a = Lu(e, n);
			return Z5(a, e, n);
		} catch (i) {
			return dm(i, e, n);
		}
	},
	U6 = "0.16.22",
	H6 = { Span: Ns, Anchor: xu, SymbolNode: dn, SvgNode: ha, PathNode: Da, LineNode: zc },
	Is = {
		version: U6,
		render: um,
		renderToString: P6,
		ParseError: fe,
		SETTINGS_SCHEMA: c0,
		__parse: F6,
		__renderToDomTree: zu,
		__renderToHTMLTree: q6,
		__setFontMetrics: v5,
		__defineSymbol: c,
		__defineFunction: Ae,
		__defineMacro: b,
		__domTree: H6,
	};
Is.__defineMacro("\\ce", function (r) {
	return hm(r.consumeArgs(1)[0], "ce");
});
Is.__defineMacro("\\pu", function (r) {
	return hm(r.consumeArgs(1)[0], "pu");
});
Is.__defineMacro(
	"\\tripledash",
	"{\\vphantom{-}\\raisebox{2.56mu}{$\\mkern2mu\\tiny\\text{-}\\mkern1mu\\text{-}\\mkern1mu\\text{-}\\mkern2mu$}}"
);
var hm = function (e, t) {
		for (var n = "", a = e.length && e[e.length - 1].loc.start, i = e.length - 1; i >= 0; i--)
			e[i].loc.start > a && ((n += " "), (a = e[i].loc.start)),
				(n += e[i].text),
				(a += e[i].text.length);
		var o = Ft.go(ee.go(n, t));
		return o;
	},
	ee = {
		go: function (e, t) {
			if (!e) return [];
			t === void 0 && (t = "ce");
			var n = "0",
				a = {};
			(a.parenthesisLevel = 0),
				(e = e.replace(/\n/g, " ")),
				(e = e.replace(/[\u2212\u2013\u2014\u2010]/g, "-")),
				(e = e.replace(/[\u2026]/g, "..."));
			for (var i, o = 10, s = []; ; ) {
				i !== e ? ((o = 10), (i = e)) : o--;
				var l = ee.stateMachines[t],
					u = l.transitions[n] || l.transitions["*"];
				e: for (var h = 0; h < u.length; h++) {
					var f = ee.patterns.match_(u[h].pattern, e);
					if (f) {
						for (var p = u[h].task, g = 0; g < p.action_.length; g++) {
							var y;
							if (l.actions[p.action_[g].type_])
								y = l.actions[p.action_[g].type_](a, f.match_, p.action_[g].option);
							else if (ee.actions[p.action_[g].type_])
								y = ee.actions[p.action_[g].type_](a, f.match_, p.action_[g].option);
							else
								throw ["MhchemBugA", "mhchem bug A. Please report. (" + p.action_[g].type_ + ")"];
							ee.concatArray(s, y);
						}
						if (((n = p.nextState || n), e.length > 0)) {
							if ((p.revisit || (e = f.remainder), !p.toContinue)) break e;
						} else return s;
					}
				}
				if (o <= 0) throw ["MhchemBugU", "mhchem bug U. Please report."];
			}
		},
		concatArray: function (e, t) {
			if (t)
				if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e.push(t[n]);
				else e.push(t);
		},
		patterns: {
			patterns: {
				empty: /^$/,
				else: /^./,
				else2: /^./,
				space: /^\s/,
				"space A": /^\s(?=[A-Z\\$])/,
				space$: /^\s$/,
				"a-z": /^[a-z]/,
				x: /^x/,
				x$: /^x$/,
				i$: /^i$/,
				letters:
					/^(?:[a-zA-Z\u03B1-\u03C9\u0391-\u03A9?@]|(?:\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))))+/,
				"\\greek":
					/^\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))/,
				"one lowercase latin letter $": /^(?:([a-z])(?:$|[^a-zA-Z]))$/,
				"$one lowercase latin letter$ $": /^\$(?:([a-z])(?:$|[^a-zA-Z]))\$$/,
				"one lowercase greek letter $":
					/^(?:\$?[\u03B1-\u03C9]\$?|\$?\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega)\s*\$?)(?:\s+|\{\}|(?![a-zA-Z]))$/,
				digits: /^[0-9]+/,
				"-9.,9": /^[+\-]?(?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))/,
				"-9.,9 no missing 0": /^[+\-]?[0-9]+(?:[.,][0-9]+)?/,
				"(-)(9.,9)(e)(99)": function (e) {
					var t = e.match(
						/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))?(\((?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))\))?(?:([eE]|\s*(\*|x|\\times|\u00D7)\s*10\^)([+\-]?[0-9]+|\{[+\-]?[0-9]+\}))?/
					);
					return t && t[0] ? { match_: t.splice(1), remainder: e.substr(t[0].length) } : null;
				},
				"(-)(9)^(-9)": function (e) {
					var t = e.match(
						/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+)?)\^([+\-]?[0-9]+|\{[+\-]?[0-9]+\})/
					);
					return t && t[0] ? { match_: t.splice(1), remainder: e.substr(t[0].length) } : null;
				},
				"state of aggregation $": function (e) {
					var t = ee.patterns.findObserveGroups(e, "", /^\([a-z]{1,3}(?=[\),])/, ")", "");
					if (t && t.remainder.match(/^($|[\s,;\)\]\}])/)) return t;
					var n = e.match(/^(?:\((?:\\ca\s?)?\$[amothc]\$\))/);
					return n ? { match_: n[0], remainder: e.substr(n[0].length) } : null;
				},
				"_{(state of aggregation)}$": /^_\{(\([a-z]{1,3}\))\}/,
				"{[(": /^(?:\\\{|\[|\()/,
				")]}": /^(?:\)|\]|\\\})/,
				", ": /^[,;]\s*/,
				",": /^[,;]/,
				".": /^[.]/,
				". ": /^([.\u22C5\u00B7\u2022])\s*/,
				"...": /^\.\.\.(?=$|[^.])/,
				"* ": /^([*])\s*/,
				"^{(...)}": function (e) {
					return ee.patterns.findObserveGroups(e, "^{", "", "", "}");
				},
				"^($...$)": function (e) {
					return ee.patterns.findObserveGroups(e, "^", "$", "$", "");
				},
				"^a": /^\^([0-9]+|[^\\_])/,
				"^\\x{}{}": function (e) {
					return ee.patterns.findObserveGroups(
						e,
						"^",
						/^\\[a-zA-Z]+\{/,
						"}",
						"",
						"",
						"{",
						"}",
						"",
						!0
					);
				},
				"^\\x{}": function (e) {
					return ee.patterns.findObserveGroups(e, "^", /^\\[a-zA-Z]+\{/, "}", "");
				},
				"^\\x": /^\^(\\[a-zA-Z]+)\s*/,
				"^(-1)": /^\^(-?\d+)/,
				"'": /^'/,
				"_{(...)}": function (e) {
					return ee.patterns.findObserveGroups(e, "_{", "", "", "}");
				},
				"_($...$)": function (e) {
					return ee.patterns.findObserveGroups(e, "_", "$", "$", "");
				},
				_9: /^_([+\-]?[0-9]+|[^\\])/,
				"_\\x{}{}": function (e) {
					return ee.patterns.findObserveGroups(
						e,
						"_",
						/^\\[a-zA-Z]+\{/,
						"}",
						"",
						"",
						"{",
						"}",
						"",
						!0
					);
				},
				"_\\x{}": function (e) {
					return ee.patterns.findObserveGroups(e, "_", /^\\[a-zA-Z]+\{/, "}", "");
				},
				"_\\x": /^_(\\[a-zA-Z]+)\s*/,
				"^_": /^(?:\^(?=_)|\_(?=\^)|[\^_]$)/,
				"{}": /^\{\}/,
				"{...}": function (e) {
					return ee.patterns.findObserveGroups(e, "", "{", "}", "");
				},
				"{(...)}": function (e) {
					return ee.patterns.findObserveGroups(e, "{", "", "", "}");
				},
				"$...$": function (e) {
					return ee.patterns.findObserveGroups(e, "", "$", "$", "");
				},
				"${(...)}$": function (e) {
					return ee.patterns.findObserveGroups(e, "${", "", "", "}$");
				},
				"$(...)$": function (e) {
					return ee.patterns.findObserveGroups(e, "$", "", "", "$");
				},
				"=<>": /^[=<>]/,
				"#": /^[#\u2261]/,
				"+": /^\+/,
				"-$": /^-(?=[\s_},;\]/]|$|\([a-z]+\))/,
				"-9": /^-(?=[0-9])/,
				"- orbital overlap": /^-(?=(?:[spd]|sp)(?:$|[\s,;\)\]\}]))/,
				"-": /^-/,
				"pm-operator": /^(?:\\pm|\$\\pm\$|\+-|\+\/-)/,
				operator: /^(?:\+|(?:[\-=<>]|<<|>>|\\approx|\$\\approx\$)(?=\s|$|-?[0-9]))/,
				arrowUpDown: /^(?:v|\(v\)|\^|\(\^\))(?=$|[\s,;\)\]\}])/,
				"\\bond{(...)}": function (e) {
					return ee.patterns.findObserveGroups(e, "\\bond{", "", "", "}");
				},
				"->": /^(?:<->|<-->|->|<-|<=>>|<<=>|<=>|[\u2192\u27F6\u21CC])/,
				CMT: /^[CMT](?=\[)/,
				"[(...)]": function (e) {
					return ee.patterns.findObserveGroups(e, "[", "", "", "]");
				},
				"1st-level escape": /^(&|\\\\|\\hline)\s*/,
				"\\,": /^(?:\\[,\ ;:])/,
				"\\x{}{}": function (e) {
					return ee.patterns.findObserveGroups(
						e,
						"",
						/^\\[a-zA-Z]+\{/,
						"}",
						"",
						"",
						"{",
						"}",
						"",
						!0
					);
				},
				"\\x{}": function (e) {
					return ee.patterns.findObserveGroups(e, "", /^\\[a-zA-Z]+\{/, "}", "");
				},
				"\\ca": /^\\ca(?:\s+|(?![a-zA-Z]))/,
				"\\x": /^(?:\\[a-zA-Z]+\s*|\\[_&{}%])/,
				orbital: /^(?:[0-9]{1,2}[spdfgh]|[0-9]{0,2}sp)(?=$|[^a-zA-Z])/,
				others: /^[\/~|]/,
				"\\frac{(...)}": function (e) {
					return ee.patterns.findObserveGroups(e, "\\frac{", "", "", "}", "{", "", "", "}");
				},
				"\\overset{(...)}": function (e) {
					return ee.patterns.findObserveGroups(e, "\\overset{", "", "", "}", "{", "", "", "}");
				},
				"\\underset{(...)}": function (e) {
					return ee.patterns.findObserveGroups(e, "\\underset{", "", "", "}", "{", "", "", "}");
				},
				"\\underbrace{(...)}": function (e) {
					return ee.patterns.findObserveGroups(e, "\\underbrace{", "", "", "}_", "{", "", "", "}");
				},
				"\\color{(...)}0": function (e) {
					return ee.patterns.findObserveGroups(e, "\\color{", "", "", "}");
				},
				"\\color{(...)}{(...)}1": function (e) {
					return ee.patterns.findObserveGroups(e, "\\color{", "", "", "}", "{", "", "", "}");
				},
				"\\color(...){(...)}2": function (e) {
					return ee.patterns.findObserveGroups(e, "\\color", "\\", "", /^(?=\{)/, "{", "", "", "}");
				},
				"\\ce{(...)}": function (e) {
					return ee.patterns.findObserveGroups(e, "\\ce{", "", "", "}");
				},
				oxidation$: /^(?:[+-][IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/,
				"d-oxidation$": /^(?:[+-]?\s?[IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/,
				"roman numeral": /^[IVX]+/,
				"1/2$": /^[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+(?:\$[a-z]\$|[a-z])?$/,
				amount: function (e) {
					var t;
					if (
						((t = e.match(
							/^(?:(?:(?:\([+\-]?[0-9]+\/[0-9]+\)|[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+|[+\-]?[0-9]+[.,][0-9]+|[+\-]?\.[0-9]+|[+\-]?[0-9]+)(?:[a-z](?=\s*[A-Z]))?)|[+\-]?[a-z](?=\s*[A-Z])|\+(?!\s))/
						)),
						t)
					)
						return { match_: t[0], remainder: e.substr(t[0].length) };
					var n = ee.patterns.findObserveGroups(e, "", "$", "$", "");
					return n &&
						((t = n.match_.match(
							/^\$(?:\(?[+\-]?(?:[0-9]*[a-z]?[+\-])?[0-9]*[a-z](?:[+\-][0-9]*[a-z]?)?\)?|\+|-)\$$/
						)),
						t)
						? { match_: t[0], remainder: e.substr(t[0].length) }
						: null;
				},
				amount2: function (e) {
					return this.amount(e);
				},
				"(KV letters),": /^(?:[A-Z][a-z]{0,2}|i)(?=,)/,
				formula$: function (e) {
					if (e.match(/^\([a-z]+\)$/)) return null;
					var t = e.match(
						/^(?:[a-z]|(?:[0-9\ \+\-\,\.\(\)]+[a-z])+[0-9\ \+\-\,\.\(\)]*|(?:[a-z][0-9\ \+\-\,\.\(\)]+)+[a-z]?)$/
					);
					return t ? { match_: t[0], remainder: e.substr(t[0].length) } : null;
				},
				uprightEntities: /^(?:pH|pOH|pC|pK|iPr|iBu)(?=$|[^a-zA-Z])/,
				"/": /^\s*(\/)\s*/,
				"//": /^\s*(\/\/)\s*/,
				"*": /^\s*[*.]\s*/,
			},
			findObserveGroups: function (e, t, n, a, i, o, s, l, u, h) {
				var f = function (B, A) {
						if (typeof A == "string") return B.indexOf(A) !== 0 ? null : A;
						var N = B.match(A);
						return N ? N[0] : null;
					},
					p = function (B, A, N) {
						for (var z = 0; A < B.length; ) {
							var I = B.charAt(A),
								G = f(B.substr(A), N);
							if (G !== null && z === 0) return { endMatchBegin: A, endMatchEnd: A + G.length };
							if (I === "{") z++;
							else if (I === "}") {
								if (z === 0)
									throw ["ExtraCloseMissingOpen", "Extra close brace or missing open brace"];
								z--;
							}
							A++;
						}
						return z > 0, null;
					},
					g = f(e, t);
				if (g === null || ((e = e.substr(g.length)), (g = f(e, n)), g === null)) return null;
				var y = p(e, g.length, a || i);
				if (y === null) return null;
				var x = e.substring(0, a ? y.endMatchEnd : y.endMatchBegin);
				if (o || s) {
					var _ = this.findObserveGroups(e.substr(y.endMatchEnd), o, s, l, u);
					if (_ === null) return null;
					var k = [x, _.match_];
					return { match_: h ? k.join("") : k, remainder: _.remainder };
				} else return { match_: x, remainder: e.substr(y.endMatchEnd) };
			},
			match_: function (e, t) {
				var n = ee.patterns.patterns[e];
				if (n === void 0) throw ["MhchemBugP", "mhchem bug P. Please report. (" + e + ")"];
				if (typeof n == "function") return ee.patterns.patterns[e](t);
				var a = t.match(n);
				if (a) {
					var i;
					return (
						a[2] ? (i = [a[1], a[2]]) : a[1] ? (i = a[1]) : (i = a[0]),
						{ match_: i, remainder: t.substr(a[0].length) }
					);
				}
				return null;
			},
		},
		actions: {
			"a=": function (e, t) {
				e.a = (e.a || "") + t;
			},
			"b=": function (e, t) {
				e.b = (e.b || "") + t;
			},
			"p=": function (e, t) {
				e.p = (e.p || "") + t;
			},
			"o=": function (e, t) {
				e.o = (e.o || "") + t;
			},
			"q=": function (e, t) {
				e.q = (e.q || "") + t;
			},
			"d=": function (e, t) {
				e.d = (e.d || "") + t;
			},
			"rm=": function (e, t) {
				e.rm = (e.rm || "") + t;
			},
			"text=": function (e, t) {
				e.text_ = (e.text_ || "") + t;
			},
			insert: function (e, t, n) {
				return { type_: n };
			},
			"insert+p1": function (e, t, n) {
				return { type_: n, p1: t };
			},
			"insert+p1+p2": function (e, t, n) {
				return { type_: n, p1: t[0], p2: t[1] };
			},
			copy: function (e, t) {
				return t;
			},
			rm: function (e, t) {
				return { type_: "rm", p1: t || "" };
			},
			text: function (e, t) {
				return ee.go(t, "text");
			},
			"{text}": function (e, t) {
				var n = ["{"];
				return ee.concatArray(n, ee.go(t, "text")), n.push("}"), n;
			},
			"tex-math": function (e, t) {
				return ee.go(t, "tex-math");
			},
			"tex-math tight": function (e, t) {
				return ee.go(t, "tex-math tight");
			},
			bond: function (e, t, n) {
				return { type_: "bond", kind_: n || t };
			},
			"color0-output": function (e, t) {
				return { type_: "color0", color: t[0] };
			},
			ce: function (e, t) {
				return ee.go(t);
			},
			"1/2": function (e, t) {
				var n = [];
				t.match(/^[+\-]/) && (n.push(t.substr(0, 1)), (t = t.substr(1)));
				var a = t.match(/^([0-9]+|\$[a-z]\$|[a-z])\/([0-9]+)(\$[a-z]\$|[a-z])?$/);
				return (
					(a[1] = a[1].replace(/\$/g, "")),
					n.push({ type_: "frac", p1: a[1], p2: a[2] }),
					a[3] && ((a[3] = a[3].replace(/\$/g, "")), n.push({ type_: "tex-math", p1: a[3] })),
					n
				);
			},
			"9,9": function (e, t) {
				return ee.go(t, "9,9");
			},
		},
		createTransitions: function (e) {
			var t,
				n,
				a,
				i,
				o = {};
			for (t in e)
				for (n in e[t])
					for (a = n.split("|"), e[t][n].stateArray = a, i = 0; i < a.length; i++) o[a[i]] = [];
			for (t in e)
				for (n in e[t])
					for (a = e[t][n].stateArray || [], i = 0; i < a.length; i++) {
						var s = e[t][n];
						if (s.action_) {
							s.action_ = [].concat(s.action_);
							for (var l = 0; l < s.action_.length; l++)
								typeof s.action_[l] == "string" && (s.action_[l] = { type_: s.action_[l] });
						} else s.action_ = [];
						for (var u = t.split("|"), h = 0; h < u.length; h++)
							if (a[i] === "*") for (var f in o) o[f].push({ pattern: u[h], task: s });
							else o[a[i]].push({ pattern: u[h], task: s });
					}
			return o;
		},
		stateMachines: {},
	};
ee.stateMachines = {
	ce: {
		transitions: ee.createTransitions({
			empty: { "*": { action_: "output" } },
			else: { "0|1|2": { action_: "beginsWithBond=false", revisit: !0, toContinue: !0 } },
			oxidation$: { 0: { action_: "oxidation-output" } },
			CMT: { r: { action_: "rdt=", nextState: "rt" }, rd: { action_: "rqt=", nextState: "rdt" } },
			arrowUpDown: { "0|1|2|as": { action_: ["sb=false", "output", "operator"], nextState: "1" } },
			uprightEntities: { "0|1|2": { action_: ["o=", "output"], nextState: "1" } },
			orbital: { "0|1|2|3": { action_: "o=", nextState: "o" } },
			"->": {
				"0|1|2|3": { action_: "r=", nextState: "r" },
				"a|as": { action_: ["output", "r="], nextState: "r" },
				"*": { action_: ["output", "r="], nextState: "r" },
			},
			"+": {
				o: { action_: "d= kv", nextState: "d" },
				"d|D": { action_: "d=", nextState: "d" },
				q: { action_: "d=", nextState: "qd" },
				"qd|qD": { action_: "d=", nextState: "qd" },
				dq: { action_: ["output", "d="], nextState: "d" },
				3: { action_: ["sb=false", "output", "operator"], nextState: "0" },
			},
			amount: { "0|2": { action_: "a=", nextState: "a" } },
			"pm-operator": {
				"0|1|2|a|as": {
					action_: ["sb=false", "output", { type_: "operator", option: "\\pm" }],
					nextState: "0",
				},
			},
			operator: { "0|1|2|a|as": { action_: ["sb=false", "output", "operator"], nextState: "0" } },
			"-$": {
				"o|q": { action_: ["charge or bond", "output"], nextState: "qd" },
				d: { action_: "d=", nextState: "d" },
				D: { action_: ["output", { type_: "bond", option: "-" }], nextState: "3" },
				q: { action_: "d=", nextState: "qd" },
				qd: { action_: "d=", nextState: "qd" },
				"qD|dq": { action_: ["output", { type_: "bond", option: "-" }], nextState: "3" },
			},
			"-9": {
				"3|o": { action_: ["output", { type_: "insert", option: "hyphen" }], nextState: "3" },
			},
			"- orbital overlap": {
				o: { action_: ["output", { type_: "insert", option: "hyphen" }], nextState: "2" },
				d: { action_: ["output", { type_: "insert", option: "hyphen" }], nextState: "2" },
			},
			"-": {
				"0|1|2": {
					action_: [
						{ type_: "output", option: 1 },
						"beginsWithBond=true",
						{ type_: "bond", option: "-" },
					],
					nextState: "3",
				},
				3: { action_: { type_: "bond", option: "-" } },
				a: { action_: ["output", { type_: "insert", option: "hyphen" }], nextState: "2" },
				as: {
					action_: [
						{ type_: "output", option: 2 },
						{ type_: "bond", option: "-" },
					],
					nextState: "3",
				},
				b: { action_: "b=" },
				o: { action_: { type_: "- after o/d", option: !1 }, nextState: "2" },
				q: { action_: { type_: "- after o/d", option: !1 }, nextState: "2" },
				"d|qd|dq": { action_: { type_: "- after o/d", option: !0 }, nextState: "2" },
				"D|qD|p": { action_: ["output", { type_: "bond", option: "-" }], nextState: "3" },
			},
			amount2: { "1|3": { action_: "a=", nextState: "a" } },
			letters: {
				"0|1|2|3|a|as|b|p|bp|o": { action_: "o=", nextState: "o" },
				"q|dq": { action_: ["output", "o="], nextState: "o" },
				"d|D|qd|qD": { action_: "o after d", nextState: "o" },
			},
			digits: {
				o: { action_: "q=", nextState: "q" },
				"d|D": { action_: "q=", nextState: "dq" },
				q: { action_: ["output", "o="], nextState: "o" },
				a: { action_: "o=", nextState: "o" },
			},
			"space A": { "b|p|bp": {} },
			space: {
				a: { nextState: "as" },
				0: { action_: "sb=false" },
				"1|2": { action_: "sb=true" },
				"r|rt|rd|rdt|rdq": { action_: "output", nextState: "0" },
				"*": { action_: ["output", "sb=true"], nextState: "1" },
			},
			"1st-level escape": {
				"1|2": { action_: ["output", { type_: "insert+p1", option: "1st-level escape" }] },
				"*": {
					action_: ["output", { type_: "insert+p1", option: "1st-level escape" }],
					nextState: "0",
				},
			},
			"[(...)]": {
				"r|rt": { action_: "rd=", nextState: "rd" },
				"rd|rdt": { action_: "rq=", nextState: "rdq" },
			},
			"...": {
				"o|d|D|dq|qd|qD": { action_: ["output", { type_: "bond", option: "..." }], nextState: "3" },
				"*": {
					action_: [
						{ type_: "output", option: 1 },
						{ type_: "insert", option: "ellipsis" },
					],
					nextState: "1",
				},
			},
			". |* ": {
				"*": {
					action_: ["output", { type_: "insert", option: "addition compound" }],
					nextState: "1",
				},
			},
			"state of aggregation $": {
				"*": { action_: ["output", "state of aggregation"], nextState: "1" },
			},
			"{[(": {
				"a|as|o": { action_: ["o=", "output", "parenthesisLevel++"], nextState: "2" },
				"0|1|2|3": { action_: ["o=", "output", "parenthesisLevel++"], nextState: "2" },
				"*": { action_: ["output", "o=", "output", "parenthesisLevel++"], nextState: "2" },
			},
			")]}": {
				"0|1|2|3|b|p|bp|o": { action_: ["o=", "parenthesisLevel--"], nextState: "o" },
				"a|as|d|D|q|qd|qD|dq": { action_: ["output", "o=", "parenthesisLevel--"], nextState: "o" },
			},
			", ": { "*": { action_: ["output", "comma"], nextState: "0" } },
			"^_": { "*": {} },
			"^{(...)}|^($...$)": {
				"0|1|2|as": { action_: "b=", nextState: "b" },
				p: { action_: "b=", nextState: "bp" },
				"3|o": { action_: "d= kv", nextState: "D" },
				q: { action_: "d=", nextState: "qD" },
				"d|D|qd|qD|dq": { action_: ["output", "d="], nextState: "D" },
			},
			"^a|^\\x{}{}|^\\x{}|^\\x|'": {
				"0|1|2|as": { action_: "b=", nextState: "b" },
				p: { action_: "b=", nextState: "bp" },
				"3|o": { action_: "d= kv", nextState: "d" },
				q: { action_: "d=", nextState: "qd" },
				"d|qd|D|qD": { action_: "d=" },
				dq: { action_: ["output", "d="], nextState: "d" },
			},
			"_{(state of aggregation)}$": {
				"d|D|q|qd|qD|dq": { action_: ["output", "q="], nextState: "q" },
			},
			"_{(...)}|_($...$)|_9|_\\x{}{}|_\\x{}|_\\x": {
				"0|1|2|as": { action_: "p=", nextState: "p" },
				b: { action_: "p=", nextState: "bp" },
				"3|o": { action_: "q=", nextState: "q" },
				"d|D": { action_: "q=", nextState: "dq" },
				"q|qd|qD|dq": { action_: ["output", "q="], nextState: "q" },
			},
			"=<>": {
				"0|1|2|3|a|as|o|q|d|D|qd|qD|dq": {
					action_: [{ type_: "output", option: 2 }, "bond"],
					nextState: "3",
				},
			},
			"#": {
				"0|1|2|3|a|as|o": {
					action_: [
						{ type_: "output", option: 2 },
						{ type_: "bond", option: "#" },
					],
					nextState: "3",
				},
			},
			"{}": { "*": { action_: { type_: "output", option: 1 }, nextState: "1" } },
			"{...}": {
				"0|1|2|3|a|as|b|p|bp": { action_: "o=", nextState: "o" },
				"o|d|D|q|qd|qD|dq": { action_: ["output", "o="], nextState: "o" },
			},
			"$...$": {
				a: { action_: "a=" },
				"0|1|2|3|as|b|p|bp|o": { action_: "o=", nextState: "o" },
				"as|o": { action_: "o=" },
				"q|d|D|qd|qD|dq": { action_: ["output", "o="], nextState: "o" },
			},
			"\\bond{(...)}": {
				"*": { action_: [{ type_: "output", option: 2 }, "bond"], nextState: "3" },
			},
			"\\frac{(...)}": {
				"*": { action_: [{ type_: "output", option: 1 }, "frac-output"], nextState: "3" },
			},
			"\\overset{(...)}": {
				"*": { action_: [{ type_: "output", option: 2 }, "overset-output"], nextState: "3" },
			},
			"\\underset{(...)}": {
				"*": { action_: [{ type_: "output", option: 2 }, "underset-output"], nextState: "3" },
			},
			"\\underbrace{(...)}": {
				"*": { action_: [{ type_: "output", option: 2 }, "underbrace-output"], nextState: "3" },
			},
			"\\color{(...)}{(...)}1|\\color(...){(...)}2": {
				"*": { action_: [{ type_: "output", option: 2 }, "color-output"], nextState: "3" },
			},
			"\\color{(...)}0": { "*": { action_: [{ type_: "output", option: 2 }, "color0-output"] } },
			"\\ce{(...)}": { "*": { action_: [{ type_: "output", option: 2 }, "ce"], nextState: "3" } },
			"\\,": { "*": { action_: [{ type_: "output", option: 1 }, "copy"], nextState: "1" } },
			"\\x{}{}|\\x{}|\\x": {
				"0|1|2|3|a|as|b|p|bp|o|c0": { action_: ["o=", "output"], nextState: "3" },
				"*": { action_: ["output", "o=", "output"], nextState: "3" },
			},
			others: { "*": { action_: [{ type_: "output", option: 1 }, "copy"], nextState: "3" } },
			else2: {
				a: { action_: "a to o", nextState: "o", revisit: !0 },
				as: { action_: ["output", "sb=true"], nextState: "1", revisit: !0 },
				"r|rt|rd|rdt|rdq": { action_: ["output"], nextState: "0", revisit: !0 },
				"*": { action_: ["output", "copy"], nextState: "3" },
			},
		}),
		actions: {
			"o after d": function (e, t) {
				var n;
				if ((e.d || "").match(/^[0-9]+$/)) {
					var a = e.d;
					(e.d = void 0), (n = this.output(e)), (e.b = a);
				} else n = this.output(e);
				return ee.actions["o="](e, t), n;
			},
			"d= kv": function (e, t) {
				(e.d = t), (e.dType = "kv");
			},
			"charge or bond": function (e, t) {
				if (e.beginsWithBond) {
					var n = [];
					return (
						ee.concatArray(n, this.output(e)), ee.concatArray(n, ee.actions.bond(e, t, "-")), n
					);
				} else e.d = t;
			},
			"- after o/d": function (e, t, n) {
				var a = ee.patterns.match_("orbital", e.o || ""),
					i = ee.patterns.match_("one lowercase greek letter $", e.o || ""),
					o = ee.patterns.match_("one lowercase latin letter $", e.o || ""),
					s = ee.patterns.match_("$one lowercase latin letter$ $", e.o || ""),
					l = t === "-" && ((a && a.remainder === "") || i || o || s);
				l && !e.a && !e.b && !e.p && !e.d && !e.q && !a && o && (e.o = "$" + e.o + "$");
				var u = [];
				return (
					l
						? (ee.concatArray(u, this.output(e)), u.push({ type_: "hyphen" }))
						: ((a = ee.patterns.match_("digits", e.d || "")),
							n && a && a.remainder === ""
								? (ee.concatArray(u, ee.actions["d="](e, t)), ee.concatArray(u, this.output(e)))
								: (ee.concatArray(u, this.output(e)),
									ee.concatArray(u, ee.actions.bond(e, t, "-")))),
					u
				);
			},
			"a to o": function (e) {
				(e.o = e.a), (e.a = void 0);
			},
			"sb=true": function (e) {
				e.sb = !0;
			},
			"sb=false": function (e) {
				e.sb = !1;
			},
			"beginsWithBond=true": function (e) {
				e.beginsWithBond = !0;
			},
			"beginsWithBond=false": function (e) {
				e.beginsWithBond = !1;
			},
			"parenthesisLevel++": function (e) {
				e.parenthesisLevel++;
			},
			"parenthesisLevel--": function (e) {
				e.parenthesisLevel--;
			},
			"state of aggregation": function (e, t) {
				return { type_: "state of aggregation", p1: ee.go(t, "o") };
			},
			comma: function (e, t) {
				var n = t.replace(/\s*$/, ""),
					a = n !== t;
				return a && e.parenthesisLevel === 0
					? { type_: "comma enumeration L", p1: n }
					: { type_: "comma enumeration M", p1: n };
			},
			output: function (e, t, n) {
				var a;
				if (!e.r)
					(a = []),
						(!e.a && !e.b && !e.p && !e.o && !e.q && !e.d && !n) ||
							(e.sb && a.push({ type_: "entitySkip" }),
							!e.o && !e.q && !e.d && !e.b && !e.p && n !== 2
								? ((e.o = e.a), (e.a = void 0))
								: !e.o && !e.q && !e.d && (e.b || e.p)
									? ((e.o = e.a), (e.d = e.b), (e.q = e.p), (e.a = e.b = e.p = void 0))
									: e.o && e.dType === "kv" && ee.patterns.match_("d-oxidation$", e.d || "")
										? (e.dType = "oxidation")
										: e.o && e.dType === "kv" && !e.q && (e.dType = void 0),
							a.push({
								type_: "chemfive",
								a: ee.go(e.a, "a"),
								b: ee.go(e.b, "bd"),
								p: ee.go(e.p, "pq"),
								o: ee.go(e.o, "o"),
								q: ee.go(e.q, "pq"),
								d: ee.go(e.d, e.dType === "oxidation" ? "oxidation" : "bd"),
								dType: e.dType,
							}));
				else {
					var i;
					e.rdt === "M"
						? (i = ee.go(e.rd, "tex-math"))
						: e.rdt === "T"
							? (i = [{ type_: "text", p1: e.rd || "" }])
							: (i = ee.go(e.rd));
					var o;
					e.rqt === "M"
						? (o = ee.go(e.rq, "tex-math"))
						: e.rqt === "T"
							? (o = [{ type_: "text", p1: e.rq || "" }])
							: (o = ee.go(e.rq)),
						(a = { type_: "arrow", r: e.r, rd: i, rq: o });
				}
				for (var s in e) s !== "parenthesisLevel" && s !== "beginsWithBond" && delete e[s];
				return a;
			},
			"oxidation-output": function (e, t) {
				var n = ["{"];
				return ee.concatArray(n, ee.go(t, "oxidation")), n.push("}"), n;
			},
			"frac-output": function (e, t) {
				return { type_: "frac-ce", p1: ee.go(t[0]), p2: ee.go(t[1]) };
			},
			"overset-output": function (e, t) {
				return { type_: "overset", p1: ee.go(t[0]), p2: ee.go(t[1]) };
			},
			"underset-output": function (e, t) {
				return { type_: "underset", p1: ee.go(t[0]), p2: ee.go(t[1]) };
			},
			"underbrace-output": function (e, t) {
				return { type_: "underbrace", p1: ee.go(t[0]), p2: ee.go(t[1]) };
			},
			"color-output": function (e, t) {
				return { type_: "color", color1: t[0], color2: ee.go(t[1]) };
			},
			"r=": function (e, t) {
				e.r = t;
			},
			"rdt=": function (e, t) {
				e.rdt = t;
			},
			"rd=": function (e, t) {
				e.rd = t;
			},
			"rqt=": function (e, t) {
				e.rqt = t;
			},
			"rq=": function (e, t) {
				e.rq = t;
			},
			operator: function (e, t, n) {
				return { type_: "operator", kind_: n || t };
			},
		},
	},
	a: {
		transitions: ee.createTransitions({
			empty: { "*": {} },
			"1/2$": { 0: { action_: "1/2" } },
			else: { 0: { nextState: "1", revisit: !0 } },
			"$(...)$": { "*": { action_: "tex-math tight", nextState: "1" } },
			",": { "*": { action_: { type_: "insert", option: "commaDecimal" } } },
			else2: { "*": { action_: "copy" } },
		}),
		actions: {},
	},
	o: {
		transitions: ee.createTransitions({
			empty: { "*": {} },
			"1/2$": { 0: { action_: "1/2" } },
			else: { 0: { nextState: "1", revisit: !0 } },
			letters: { "*": { action_: "rm" } },
			"\\ca": { "*": { action_: { type_: "insert", option: "circa" } } },
			"\\x{}{}|\\x{}|\\x": { "*": { action_: "copy" } },
			"${(...)}$|$(...)$": { "*": { action_: "tex-math" } },
			"{(...)}": { "*": { action_: "{text}" } },
			else2: { "*": { action_: "copy" } },
		}),
		actions: {},
	},
	text: {
		transitions: ee.createTransitions({
			empty: { "*": { action_: "output" } },
			"{...}": { "*": { action_: "text=" } },
			"${(...)}$|$(...)$": { "*": { action_: "tex-math" } },
			"\\greek": { "*": { action_: ["output", "rm"] } },
			"\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: ["output", "copy"] } },
			else: { "*": { action_: "text=" } },
		}),
		actions: {
			output: function (e) {
				if (e.text_) {
					var t = { type_: "text", p1: e.text_ };
					for (var n in e) delete e[n];
					return t;
				}
			},
		},
	},
	pq: {
		transitions: ee.createTransitions({
			empty: { "*": {} },
			"state of aggregation $": { "*": { action_: "state of aggregation" } },
			i$: { 0: { nextState: "!f", revisit: !0 } },
			"(KV letters),": { 0: { action_: "rm", nextState: "0" } },
			formula$: { 0: { nextState: "f", revisit: !0 } },
			"1/2$": { 0: { action_: "1/2" } },
			else: { 0: { nextState: "!f", revisit: !0 } },
			"${(...)}$|$(...)$": { "*": { action_: "tex-math" } },
			"{(...)}": { "*": { action_: "text" } },
			"a-z": { f: { action_: "tex-math" } },
			letters: { "*": { action_: "rm" } },
			"-9.,9": { "*": { action_: "9,9" } },
			",": { "*": { action_: { type_: "insert+p1", option: "comma enumeration S" } } },
			"\\color{(...)}{(...)}1|\\color(...){(...)}2": { "*": { action_: "color-output" } },
			"\\color{(...)}0": { "*": { action_: "color0-output" } },
			"\\ce{(...)}": { "*": { action_: "ce" } },
			"\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "copy" } },
			else2: { "*": { action_: "copy" } },
		}),
		actions: {
			"state of aggregation": function (e, t) {
				return { type_: "state of aggregation subscript", p1: ee.go(t, "o") };
			},
			"color-output": function (e, t) {
				return { type_: "color", color1: t[0], color2: ee.go(t[1], "pq") };
			},
		},
	},
	bd: {
		transitions: ee.createTransitions({
			empty: { "*": {} },
			x$: { 0: { nextState: "!f", revisit: !0 } },
			formula$: { 0: { nextState: "f", revisit: !0 } },
			else: { 0: { nextState: "!f", revisit: !0 } },
			"-9.,9 no missing 0": { "*": { action_: "9,9" } },
			".": { "*": { action_: { type_: "insert", option: "electron dot" } } },
			"a-z": { f: { action_: "tex-math" } },
			x: { "*": { action_: { type_: "insert", option: "KV x" } } },
			letters: { "*": { action_: "rm" } },
			"'": { "*": { action_: { type_: "insert", option: "prime" } } },
			"${(...)}$|$(...)$": { "*": { action_: "tex-math" } },
			"{(...)}": { "*": { action_: "text" } },
			"\\color{(...)}{(...)}1|\\color(...){(...)}2": { "*": { action_: "color-output" } },
			"\\color{(...)}0": { "*": { action_: "color0-output" } },
			"\\ce{(...)}": { "*": { action_: "ce" } },
			"\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "copy" } },
			else2: { "*": { action_: "copy" } },
		}),
		actions: {
			"color-output": function (e, t) {
				return { type_: "color", color1: t[0], color2: ee.go(t[1], "bd") };
			},
		},
	},
	oxidation: {
		transitions: ee.createTransitions({
			empty: { "*": {} },
			"roman numeral": { "*": { action_: "roman-numeral" } },
			"${(...)}$|$(...)$": { "*": { action_: "tex-math" } },
			else: { "*": { action_: "copy" } },
		}),
		actions: {
			"roman-numeral": function (e, t) {
				return { type_: "roman numeral", p1: t || "" };
			},
		},
	},
	"tex-math": {
		transitions: ee.createTransitions({
			empty: { "*": { action_: "output" } },
			"\\ce{(...)}": { "*": { action_: ["output", "ce"] } },
			"{...}|\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "o=" } },
			else: { "*": { action_: "o=" } },
		}),
		actions: {
			output: function (e) {
				if (e.o) {
					var t = { type_: "tex-math", p1: e.o };
					for (var n in e) delete e[n];
					return t;
				}
			},
		},
	},
	"tex-math tight": {
		transitions: ee.createTransitions({
			empty: { "*": { action_: "output" } },
			"\\ce{(...)}": { "*": { action_: ["output", "ce"] } },
			"{...}|\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "o=" } },
			"-|+": { "*": { action_: "tight operator" } },
			else: { "*": { action_: "o=" } },
		}),
		actions: {
			"tight operator": function (e, t) {
				e.o = (e.o || "") + "{" + t + "}";
			},
			output: function (e) {
				if (e.o) {
					var t = { type_: "tex-math", p1: e.o };
					for (var n in e) delete e[n];
					return t;
				}
			},
		},
	},
	"9,9": {
		transitions: ee.createTransitions({
			empty: { "*": {} },
			",": { "*": { action_: "comma" } },
			else: { "*": { action_: "copy" } },
		}),
		actions: {
			comma: function () {
				return { type_: "commaDecimal" };
			},
		},
	},
	pu: {
		transitions: ee.createTransitions({
			empty: { "*": { action_: "output" } },
			space$: { "*": { action_: ["output", "space"] } },
			"{[(|)]}": { "0|a": { action_: "copy" } },
			"(-)(9)^(-9)": { 0: { action_: "number^", nextState: "a" } },
			"(-)(9.,9)(e)(99)": { 0: { action_: "enumber", nextState: "a" } },
			space: { "0|a": {} },
			"pm-operator": { "0|a": { action_: { type_: "operator", option: "\\pm" }, nextState: "0" } },
			operator: { "0|a": { action_: "copy", nextState: "0" } },
			"//": { d: { action_: "o=", nextState: "/" } },
			"/": { d: { action_: "o=", nextState: "/" } },
			"{...}|else": {
				"0|d": { action_: "d=", nextState: "d" },
				a: { action_: ["space", "d="], nextState: "d" },
				"/|q": { action_: "q=", nextState: "q" },
			},
		}),
		actions: {
			enumber: function (e, t) {
				var n = [];
				return (
					t[0] === "+-" || t[0] === "+/-" ? n.push("\\pm ") : t[0] && n.push(t[0]),
					t[1] &&
						(ee.concatArray(n, ee.go(t[1], "pu-9,9")),
						t[2] && (t[2].match(/[,.]/) ? ee.concatArray(n, ee.go(t[2], "pu-9,9")) : n.push(t[2])),
						(t[3] = t[4] || t[3]),
						t[3] &&
							((t[3] = t[3].trim()),
							t[3] === "e" || t[3].substr(0, 1) === "*"
								? n.push({ type_: "cdot" })
								: n.push({ type_: "times" }))),
					t[3] && n.push("10^{" + t[5] + "}"),
					n
				);
			},
			"number^": function (e, t) {
				var n = [];
				return (
					t[0] === "+-" || t[0] === "+/-" ? n.push("\\pm ") : t[0] && n.push(t[0]),
					ee.concatArray(n, ee.go(t[1], "pu-9,9")),
					n.push("^{" + t[2] + "}"),
					n
				);
			},
			operator: function (e, t, n) {
				return { type_: "operator", kind_: n || t };
			},
			space: function () {
				return { type_: "pu-space-1" };
			},
			output: function (e) {
				var t,
					n = ee.patterns.match_("{(...)}", e.d || "");
				n && n.remainder === "" && (e.d = n.match_);
				var a = ee.patterns.match_("{(...)}", e.q || "");
				if (
					(a && a.remainder === "" && (e.q = a.match_),
					e.d &&
						((e.d = e.d.replace(/\u00B0C|\^oC|\^{o}C/g, "{}^{\\circ}C")),
						(e.d = e.d.replace(/\u00B0F|\^oF|\^{o}F/g, "{}^{\\circ}F"))),
					e.q)
				) {
					(e.q = e.q.replace(/\u00B0C|\^oC|\^{o}C/g, "{}^{\\circ}C")),
						(e.q = e.q.replace(/\u00B0F|\^oF|\^{o}F/g, "{}^{\\circ}F"));
					var i = { d: ee.go(e.d, "pu"), q: ee.go(e.q, "pu") };
					e.o === "//"
						? (t = { type_: "pu-frac", p1: i.d, p2: i.q })
						: ((t = i.d),
							i.d.length > 1 || i.q.length > 1 ? t.push({ type_: " / " }) : t.push({ type_: "/" }),
							ee.concatArray(t, i.q));
				} else t = ee.go(e.d, "pu-2");
				for (var o in e) delete e[o];
				return t;
			},
		},
	},
	"pu-2": {
		transitions: ee.createTransitions({
			empty: { "*": { action_: "output" } },
			"*": { "*": { action_: ["output", "cdot"], nextState: "0" } },
			"\\x": { "*": { action_: "rm=" } },
			space: { "*": { action_: ["output", "space"], nextState: "0" } },
			"^{(...)}|^(-1)": { 1: { action_: "^(-1)" } },
			"-9.,9": { 0: { action_: "rm=", nextState: "0" }, 1: { action_: "^(-1)", nextState: "0" } },
			"{...}|else": { "*": { action_: "rm=", nextState: "1" } },
		}),
		actions: {
			cdot: function () {
				return { type_: "tight cdot" };
			},
			"^(-1)": function (e, t) {
				e.rm += "^{" + t + "}";
			},
			space: function () {
				return { type_: "pu-space-2" };
			},
			output: function (e) {
				var t = [];
				if (e.rm) {
					var n = ee.patterns.match_("{(...)}", e.rm || "");
					n && n.remainder === "" ? (t = ee.go(n.match_, "pu")) : (t = { type_: "rm", p1: e.rm });
				}
				for (var a in e) delete e[a];
				return t;
			},
		},
	},
	"pu-9,9": {
		transitions: ee.createTransitions({
			empty: { 0: { action_: "output-0" }, o: { action_: "output-o" } },
			",": { 0: { action_: ["output-0", "comma"], nextState: "o" } },
			".": { 0: { action_: ["output-0", "copy"], nextState: "o" } },
			else: { "*": { action_: "text=" } },
		}),
		actions: {
			comma: function () {
				return { type_: "commaDecimal" };
			},
			"output-0": function (e) {
				var t = [];
				if (((e.text_ = e.text_ || ""), e.text_.length > 4)) {
					var n = e.text_.length % 3;
					n === 0 && (n = 3);
					for (var a = e.text_.length - 3; a > 0; a -= 3)
						t.push(e.text_.substr(a, 3)), t.push({ type_: "1000 separator" });
					t.push(e.text_.substr(0, n)), t.reverse();
				} else t.push(e.text_);
				for (var i in e) delete e[i];
				return t;
			},
			"output-o": function (e) {
				var t = [];
				if (((e.text_ = e.text_ || ""), e.text_.length > 4)) {
					for (var n = e.text_.length - 3, a = 0; a < n; a += 3)
						t.push(e.text_.substr(a, 3)), t.push({ type_: "1000 separator" });
					t.push(e.text_.substr(a));
				} else t.push(e.text_);
				for (var i in e) delete e[i];
				return t;
			},
		},
	},
};
var Ft = {
		go: function (e, t) {
			if (!e) return "";
			for (var n = "", a = !1, i = 0; i < e.length; i++) {
				var o = e[i];
				typeof o == "string"
					? (n += o)
					: ((n += Ft._go2(o)), o.type_ === "1st-level escape" && (a = !0));
			}
			return !t && !a && n && (n = "{" + n + "}"), n;
		},
		_goInner: function (e) {
			return e && Ft.go(e, !0);
		},
		_go2: function (e) {
			var t;
			switch (e.type_) {
				case "chemfive":
					t = "";
					var n = {
						a: Ft._goInner(e.a),
						b: Ft._goInner(e.b),
						p: Ft._goInner(e.p),
						o: Ft._goInner(e.o),
						q: Ft._goInner(e.q),
						d: Ft._goInner(e.d),
					};
					n.a && (n.a.match(/^[+\-]/) && (n.a = "{" + n.a + "}"), (t += n.a + "\\,")),
						(n.b || n.p) &&
							((t += "{\\vphantom{X}}"),
							(t += "^{\\hphantom{" + (n.b || "") + "}}_{\\hphantom{" + (n.p || "") + "}}"),
							(t += "{\\vphantom{X}}"),
							(t += "^{\\smash[t]{\\vphantom{2}}\\mathllap{" + (n.b || "") + "}}"),
							(t += "_{\\vphantom{2}\\mathllap{\\smash[t]{" + (n.p || "") + "}}}")),
						n.o && (n.o.match(/^[+\-]/) && (n.o = "{" + n.o + "}"), (t += n.o)),
						e.dType === "kv"
							? ((n.d || n.q) && (t += "{\\vphantom{X}}"),
								n.d && (t += "^{" + n.d + "}"),
								n.q && (t += "_{\\smash[t]{" + n.q + "}}"))
							: e.dType === "oxidation"
								? (n.d && ((t += "{\\vphantom{X}}"), (t += "^{" + n.d + "}")),
									n.q && ((t += "{\\vphantom{X}}"), (t += "_{\\smash[t]{" + n.q + "}}")))
								: (n.q && ((t += "{\\vphantom{X}}"), (t += "_{\\smash[t]{" + n.q + "}}")),
									n.d && ((t += "{\\vphantom{X}}"), (t += "^{" + n.d + "}")));
					break;
				case "rm":
					t = "\\mathrm{" + e.p1 + "}";
					break;
				case "text":
					e.p1.match(/[\^_]/)
						? ((e.p1 = e.p1.replace(" ", "~").replace("-", "\\text{-}")),
							(t = "\\mathrm{" + e.p1 + "}"))
						: (t = "\\text{" + e.p1 + "}");
					break;
				case "roman numeral":
					t = "\\mathrm{" + e.p1 + "}";
					break;
				case "state of aggregation":
					t = "\\mskip2mu " + Ft._goInner(e.p1);
					break;
				case "state of aggregation subscript":
					t = "\\mskip1mu " + Ft._goInner(e.p1);
					break;
				case "bond":
					if (((t = Ft._getBond(e.kind_)), !t))
						throw ["MhchemErrorBond", "mhchem Error. Unknown bond type (" + e.kind_ + ")"];
					break;
				case "frac":
					var a = "\\frac{" + e.p1 + "}{" + e.p2 + "}";
					t = "\\mathchoice{\\textstyle" + a + "}{" + a + "}{" + a + "}{" + a + "}";
					break;
				case "pu-frac":
					var i = "\\frac{" + Ft._goInner(e.p1) + "}{" + Ft._goInner(e.p2) + "}";
					t = "\\mathchoice{\\textstyle" + i + "}{" + i + "}{" + i + "}{" + i + "}";
					break;
				case "tex-math":
					t = e.p1 + " ";
					break;
				case "frac-ce":
					t = "\\frac{" + Ft._goInner(e.p1) + "}{" + Ft._goInner(e.p2) + "}";
					break;
				case "overset":
					t = "\\overset{" + Ft._goInner(e.p1) + "}{" + Ft._goInner(e.p2) + "}";
					break;
				case "underset":
					t = "\\underset{" + Ft._goInner(e.p1) + "}{" + Ft._goInner(e.p2) + "}";
					break;
				case "underbrace":
					t = "\\underbrace{" + Ft._goInner(e.p1) + "}_{" + Ft._goInner(e.p2) + "}";
					break;
				case "color":
					t = "{\\color{" + e.color1 + "}{" + Ft._goInner(e.color2) + "}}";
					break;
				case "color0":
					t = "\\color{" + e.color + "}";
					break;
				case "arrow":
					var o = { rd: Ft._goInner(e.rd), rq: Ft._goInner(e.rq) },
						s = "\\x" + Ft._getArrow(e.r);
					o.rq && (s += "[{" + o.rq + "}]"), o.rd ? (s += "{" + o.rd + "}") : (s += "{}"), (t = s);
					break;
				case "operator":
					t = Ft._getOperator(e.kind_);
					break;
				case "1st-level escape":
					t = e.p1 + " ";
					break;
				case "space":
					t = " ";
					break;
				case "entitySkip":
					t = "~";
					break;
				case "pu-space-1":
					t = "~";
					break;
				case "pu-space-2":
					t = "\\mkern3mu ";
					break;
				case "1000 separator":
					t = "\\mkern2mu ";
					break;
				case "commaDecimal":
					t = "{,}";
					break;
				case "comma enumeration L":
					t = "{" + e.p1 + "}\\mkern6mu ";
					break;
				case "comma enumeration M":
					t = "{" + e.p1 + "}\\mkern3mu ";
					break;
				case "comma enumeration S":
					t = "{" + e.p1 + "}\\mkern1mu ";
					break;
				case "hyphen":
					t = "\\text{-}";
					break;
				case "addition compound":
					t = "\\,{\\cdot}\\,";
					break;
				case "electron dot":
					t = "\\mkern1mu \\bullet\\mkern1mu ";
					break;
				case "KV x":
					t = "{\\times}";
					break;
				case "prime":
					t = "\\prime ";
					break;
				case "cdot":
					t = "\\cdot ";
					break;
				case "tight cdot":
					t = "\\mkern1mu{\\cdot}\\mkern1mu ";
					break;
				case "times":
					t = "\\times ";
					break;
				case "circa":
					t = "{\\sim}";
					break;
				case "^":
					t = "uparrow";
					break;
				case "v":
					t = "downarrow";
					break;
				case "ellipsis":
					t = "\\ldots ";
					break;
				case "/":
					t = "/";
					break;
				case " / ":
					t = "\\,/\\,";
					break;
				default:
					throw ["MhchemBugT", "mhchem bug T. Please report."];
			}
			return t;
		},
		_getArrow: function (e) {
			switch (e) {
				case "->":
					return "rightarrow";
				case "→":
					return "rightarrow";
				case "⟶":
					return "rightarrow";
				case "<-":
					return "leftarrow";
				case "<->":
					return "leftrightarrow";
				case "<-->":
					return "rightleftarrows";
				case "<=>":
					return "rightleftharpoons";
				case "⇌":
					return "rightleftharpoons";
				case "<=>>":
					return "rightequilibrium";
				case "<<=>":
					return "leftequilibrium";
				default:
					throw ["MhchemBugT", "mhchem bug T. Please report."];
			}
		},
		_getBond: function (e) {
			switch (e) {
				case "-":
					return "{-}";
				case "1":
					return "{-}";
				case "=":
					return "{=}";
				case "2":
					return "{=}";
				case "#":
					return "{\\equiv}";
				case "3":
					return "{\\equiv}";
				case "~":
					return "{\\tripledash}";
				case "~-":
					return "{\\mathrlap{\\raisebox{-.1em}{$-$}}\\raisebox{.1em}{$\\tripledash$}}";
				case "~=":
					return "{\\mathrlap{\\raisebox{-.2em}{$-$}}\\mathrlap{\\raisebox{.2em}{$\\tripledash$}}-}";
				case "~--":
					return "{\\mathrlap{\\raisebox{-.2em}{$-$}}\\mathrlap{\\raisebox{.2em}{$\\tripledash$}}-}";
				case "-~-":
					return "{\\mathrlap{\\raisebox{-.2em}{$-$}}\\mathrlap{\\raisebox{.2em}{$-$}}\\tripledash}";
				case "...":
					return "{{\\cdot}{\\cdot}{\\cdot}}";
				case "....":
					return "{{\\cdot}{\\cdot}{\\cdot}{\\cdot}}";
				case "->":
					return "{\\rightarrow}";
				case "<-":
					return "{\\leftarrow}";
				case "<":
					return "{<}";
				case ">":
					return "{>}";
				default:
					throw ["MhchemBugT", "mhchem bug T. Please report."];
			}
		},
		_getOperator: function (e) {
			switch (e) {
				case "+":
					return " {}+{} ";
				case "-":
					return " {}-{} ";
				case "=":
					return " {}={} ";
				case "<":
					return " {}<{} ";
				case ">":
					return " {}>{} ";
				case "<<":
					return " {}\\ll{} ";
				case ">>":
					return " {}\\gg{} ";
				case "\\pm":
					return " {}\\pm{} ";
				case "\\approx":
					return " {}\\approx{} ";
				case "$\\approx$":
					return " {}\\approx{} ";
				case "v":
					return " \\downarrow{} ";
				case "(v)":
					return " \\downarrow{} ";
				case "^":
					return " \\uparrow{} ";
				case "(^)":
					return " \\uparrow{} ";
				default:
					throw ["MhchemBugT", "mhchem bug T. Please report."];
			}
		},
	},
	Ql,
	N1;
function G6() {
	if (N1) return Ql;
	N1 = 1;
	function r(M) {
		return (
			M instanceof Map
				? (M.clear =
						M.delete =
						M.set =
							function () {
								throw new Error("map is read-only");
							})
				: M instanceof Set &&
					(M.add =
						M.clear =
						M.delete =
							function () {
								throw new Error("set is read-only");
							}),
			Object.freeze(M),
			Object.getOwnPropertyNames(M).forEach((Y) => {
				const ve = M[Y],
					Ge = typeof ve;
				(Ge === "object" || Ge === "function") && !Object.isFrozen(ve) && r(ve);
			}),
			M
		);
	}
	class e {
		constructor(Y) {
			Y.data === void 0 && (Y.data = {}), (this.data = Y.data), (this.isMatchIgnored = !1);
		}
		ignoreMatch() {
			this.isMatchIgnored = !0;
		}
	}
	function t(M) {
		return M.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#x27;");
	}
	function n(M, ...Y) {
		const ve = Object.create(null);
		for (const Ge in M) ve[Ge] = M[Ge];
		return (
			Y.forEach(function (Ge) {
				for (const kt in Ge) ve[kt] = Ge[kt];
			}),
			ve
		);
	}
	const a = "</span>",
		i = (M) => !!M.scope,
		o = (M, { prefix: Y }) => {
			if (M.startsWith("language:")) return M.replace("language:", "language-");
			if (M.includes(".")) {
				const ve = M.split(".");
				return [`${Y}${ve.shift()}`, ...ve.map((Ge, kt) => `${Ge}${"_".repeat(kt + 1)}`)].join(" ");
			}
			return `${Y}${M}`;
		};
	class s {
		constructor(Y, ve) {
			(this.buffer = ""), (this.classPrefix = ve.classPrefix), Y.walk(this);
		}
		addText(Y) {
			this.buffer += t(Y);
		}
		openNode(Y) {
			if (!i(Y)) return;
			const ve = o(Y.scope, { prefix: this.classPrefix });
			this.span(ve);
		}
		closeNode(Y) {
			i(Y) && (this.buffer += a);
		}
		value() {
			return this.buffer;
		}
		span(Y) {
			this.buffer += `<span class="${Y}">`;
		}
	}
	const l = (M = {}) => {
		const Y = { children: [] };
		return Object.assign(Y, M), Y;
	};
	class u {
		constructor() {
			(this.rootNode = l()), (this.stack = [this.rootNode]);
		}
		get top() {
			return this.stack[this.stack.length - 1];
		}
		get root() {
			return this.rootNode;
		}
		add(Y) {
			this.top.children.push(Y);
		}
		openNode(Y) {
			const ve = l({ scope: Y });
			this.add(ve), this.stack.push(ve);
		}
		closeNode() {
			if (this.stack.length > 1) return this.stack.pop();
		}
		closeAllNodes() {
			for (; this.closeNode(); );
		}
		toJSON() {
			return JSON.stringify(this.rootNode, null, 4);
		}
		walk(Y) {
			return this.constructor._walk(Y, this.rootNode);
		}
		static _walk(Y, ve) {
			return (
				typeof ve == "string"
					? Y.addText(ve)
					: ve.children &&
						(Y.openNode(ve), ve.children.forEach((Ge) => this._walk(Y, Ge)), Y.closeNode(ve)),
				Y
			);
		}
		static _collapse(Y) {
			typeof Y != "string" &&
				Y.children &&
				(Y.children.every((ve) => typeof ve == "string")
					? (Y.children = [Y.children.join("")])
					: Y.children.forEach((ve) => {
							u._collapse(ve);
						}));
		}
	}
	class h extends u {
		constructor(Y) {
			super(), (this.options = Y);
		}
		addText(Y) {
			Y !== "" && this.add(Y);
		}
		startScope(Y) {
			this.openNode(Y);
		}
		endScope() {
			this.closeNode();
		}
		__addSublanguage(Y, ve) {
			const Ge = Y.root;
			ve && (Ge.scope = `language:${ve}`), this.add(Ge);
		}
		toHTML() {
			return new s(this, this.options).value();
		}
		finalize() {
			return this.closeAllNodes(), !0;
		}
	}
	function f(M) {
		return M ? (typeof M == "string" ? M : M.source) : null;
	}
	function p(M) {
		return x("(?=", M, ")");
	}
	function g(M) {
		return x("(?:", M, ")*");
	}
	function y(M) {
		return x("(?:", M, ")?");
	}
	function x(...M) {
		return M.map((ve) => f(ve)).join("");
	}
	function _(M) {
		const Y = M[M.length - 1];
		return typeof Y == "object" && Y.constructor === Object ? (M.splice(M.length - 1, 1), Y) : {};
	}
	function k(...M) {
		return "(" + (_(M).capture ? "" : "?:") + M.map((Ge) => f(Ge)).join("|") + ")";
	}
	function T(M) {
		return new RegExp(M.toString() + "|").exec("").length - 1;
	}
	function B(M, Y) {
		const ve = M && M.exec(Y);
		return ve && ve.index === 0;
	}
	const A = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
	function N(M, { joinWith: Y }) {
		let ve = 0;
		return M.map((Ge) => {
			ve += 1;
			const kt = ve;
			let P = f(Ge),
				H = "";
			for (; P.length > 0; ) {
				const J = A.exec(P);
				if (!J) {
					H += P;
					break;
				}
				(H += P.substring(0, J.index)),
					(P = P.substring(J.index + J[0].length)),
					J[0][0] === "\\" && J[1]
						? (H += "\\" + String(Number(J[1]) + kt))
						: ((H += J[0]), J[0] === "(" && ve++);
			}
			return H;
		})
			.map((Ge) => `(${Ge})`)
			.join(Y);
	}
	const z = /\b\B/,
		I = "[a-zA-Z]\\w*",
		G = "[a-zA-Z_]\\w*",
		re = "\\b\\d+(\\.\\d+)?",
		V = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
		se = "\\b(0b[01]+)",
		ce =
			"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
		Ce = (M = {}) => {
			const Y = /^#![ ]*\//;
			return (
				M.binary && (M.begin = x(Y, /.*\b/, M.binary, /\b.*/)),
				n(
					{
						scope: "meta",
						begin: Y,
						end: /$/,
						relevance: 0,
						"on:begin": (ve, Ge) => {
							ve.index !== 0 && Ge.ignoreMatch();
						},
					},
					M
				)
			);
		},
		Q = { begin: "\\\\[\\s\\S]", relevance: 0 },
		$ = { scope: "string", begin: "'", end: "'", illegal: "\\n", contains: [Q] },
		K = { scope: "string", begin: '"', end: '"', illegal: "\\n", contains: [Q] },
		le = {
			begin:
				/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
		},
		ie = function (M, Y, ve = {}) {
			const Ge = n({ scope: "comment", begin: M, end: Y, contains: [] }, ve);
			Ge.contains.push({
				scope: "doctag",
				begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
				end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
				excludeBegin: !0,
				relevance: 0,
			});
			const kt = k(
				"I",
				"a",
				"is",
				"so",
				"us",
				"to",
				"at",
				"if",
				"in",
				"it",
				"on",
				/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
				/[A-Za-z]+[-][a-z]+/,
				/[A-Za-z][a-z]{2,}/
			);
			return Ge.contains.push({ begin: x(/[ ]+/, "(", kt, /[.]?[:]?([.][ ]|[ ])/, "){3}") }), Ge;
		},
		oe = ie("//", "$"),
		te = ie("/\\*", "\\*/"),
		Ke = ie("#", "$"),
		qe = { scope: "number", begin: re, relevance: 0 },
		Qe = { scope: "number", begin: V, relevance: 0 },
		je = { scope: "number", begin: se, relevance: 0 },
		Xe = {
			scope: "regexp",
			begin: /\/(?=[^/\n]*\/)/,
			end: /\/[gimuy]*/,
			contains: [Q, { begin: /\[/, end: /\]/, relevance: 0, contains: [Q] }],
		},
		it = { scope: "title", begin: I, relevance: 0 },
		lt = { scope: "title", begin: G, relevance: 0 },
		we = { begin: "\\.\\s*" + G, relevance: 0 };
	var be = Object.freeze({
		__proto__: null,
		APOS_STRING_MODE: $,
		BACKSLASH_ESCAPE: Q,
		BINARY_NUMBER_MODE: je,
		BINARY_NUMBER_RE: se,
		COMMENT: ie,
		C_BLOCK_COMMENT_MODE: te,
		C_LINE_COMMENT_MODE: oe,
		C_NUMBER_MODE: Qe,
		C_NUMBER_RE: V,
		END_SAME_AS_BEGIN: function (M) {
			return Object.assign(M, {
				"on:begin": (Y, ve) => {
					ve.data._beginMatch = Y[1];
				},
				"on:end": (Y, ve) => {
					ve.data._beginMatch !== Y[1] && ve.ignoreMatch();
				},
			});
		},
		HASH_COMMENT_MODE: Ke,
		IDENT_RE: I,
		MATCH_NOTHING_RE: z,
		METHOD_GUARD: we,
		NUMBER_MODE: qe,
		NUMBER_RE: re,
		PHRASAL_WORDS_MODE: le,
		QUOTE_STRING_MODE: K,
		REGEXP_MODE: Xe,
		RE_STARTERS_RE: ce,
		SHEBANG: Ce,
		TITLE_MODE: it,
		UNDERSCORE_IDENT_RE: G,
		UNDERSCORE_TITLE_MODE: lt,
	});
	function Le(M, Y) {
		M.input[M.index - 1] === "." && Y.ignoreMatch();
	}
	function ze(M, Y) {
		M.className !== void 0 && ((M.scope = M.className), delete M.className);
	}
	function Be(M, Y) {
		Y &&
			M.beginKeywords &&
			((M.begin = "\\b(" + M.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)"),
			(M.__beforeBegin = Le),
			(M.keywords = M.keywords || M.beginKeywords),
			delete M.beginKeywords,
			M.relevance === void 0 && (M.relevance = 0));
	}
	function tt(M, Y) {
		Array.isArray(M.illegal) && (M.illegal = k(...M.illegal));
	}
	function ot(M, Y) {
		if (M.match) {
			if (M.begin || M.end) throw new Error("begin & end are not supported with match");
			(M.begin = M.match), delete M.match;
		}
	}
	function st(M, Y) {
		M.relevance === void 0 && (M.relevance = 1);
	}
	const vt = (M, Y) => {
			if (!M.beforeMatch) return;
			if (M.starts) throw new Error("beforeMatch cannot be used with starts");
			const ve = Object.assign({}, M);
			Object.keys(M).forEach((Ge) => {
				delete M[Ge];
			}),
				(M.keywords = ve.keywords),
				(M.begin = x(ve.beforeMatch, p(ve.begin))),
				(M.starts = { relevance: 0, contains: [Object.assign(ve, { endsParent: !0 })] }),
				(M.relevance = 0),
				delete ve.beforeMatch;
		},
		ct = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"],
		pt = "keyword";
	function Mt(M, Y, ve = pt) {
		const Ge = Object.create(null);
		return (
			typeof M == "string"
				? kt(ve, M.split(" "))
				: Array.isArray(M)
					? kt(ve, M)
					: Object.keys(M).forEach(function (P) {
							Object.assign(Ge, Mt(M[P], Y, P));
						}),
			Ge
		);
		function kt(P, H) {
			Y && (H = H.map((J) => J.toLowerCase())),
				H.forEach(function (J) {
					const de = J.split("|");
					Ge[de[0]] = [P, Ct(de[0], de[1])];
				});
		}
	}
	function Ct(M, Y) {
		return Y ? Number(Y) : Pe(M) ? 0 : 1;
	}
	function Pe(M) {
		return ct.includes(M.toLowerCase());
	}
	const _e = {},
		De = (M) => {
			console.error(M);
		},
		ke = (M, ...Y) => {
			console.log(`WARN: ${M}`, ...Y);
		},
		Re = (M, Y) => {
			_e[`${M}/${Y}`] || (console.log(`Deprecated as of ${M}. ${Y}`), (_e[`${M}/${Y}`] = !0));
		},
		dt = new Error();
	function Et(M, Y, { key: ve }) {
		let Ge = 0;
		const kt = M[ve],
			P = {},
			H = {};
		for (let J = 1; J <= Y.length; J++) (H[J + Ge] = kt[J]), (P[J + Ge] = !0), (Ge += T(Y[J - 1]));
		(M[ve] = H), (M[ve]._emit = P), (M[ve]._multi = !0);
	}
	function Ht(M) {
		if (Array.isArray(M.begin)) {
			if (M.skip || M.excludeBegin || M.returnBegin)
				throw (De("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), dt);
			if (typeof M.beginScope != "object" || M.beginScope === null)
				throw (De("beginScope must be object"), dt);
			Et(M, M.begin, { key: "beginScope" }), (M.begin = N(M.begin, { joinWith: "" }));
		}
	}
	function nr(M) {
		if (Array.isArray(M.end)) {
			if (M.skip || M.excludeEnd || M.returnEnd)
				throw (De("skip, excludeEnd, returnEnd not compatible with endScope: {}"), dt);
			if (typeof M.endScope != "object" || M.endScope === null)
				throw (De("endScope must be object"), dt);
			Et(M, M.end, { key: "endScope" }), (M.end = N(M.end, { joinWith: "" }));
		}
	}
	function Zt(M) {
		M.scope &&
			typeof M.scope == "object" &&
			M.scope !== null &&
			((M.beginScope = M.scope), delete M.scope);
	}
	function $t(M) {
		Zt(M),
			typeof M.beginScope == "string" && (M.beginScope = { _wrap: M.beginScope }),
			typeof M.endScope == "string" && (M.endScope = { _wrap: M.endScope }),
			Ht(M),
			nr(M);
	}
	function Gt(M) {
		function Y(H, J) {
			return new RegExp(
				f(H),
				"m" + (M.case_insensitive ? "i" : "") + (M.unicodeRegex ? "u" : "") + (J ? "g" : "")
			);
		}
		class ve {
			constructor() {
				(this.matchIndexes = {}), (this.regexes = []), (this.matchAt = 1), (this.position = 0);
			}
			addRule(J, de) {
				(de.position = this.position++),
					(this.matchIndexes[this.matchAt] = de),
					this.regexes.push([de, J]),
					(this.matchAt += T(J) + 1);
			}
			compile() {
				this.regexes.length === 0 && (this.exec = () => null);
				const J = this.regexes.map((de) => de[1]);
				(this.matcherRe = Y(N(J, { joinWith: "|" }), !0)), (this.lastIndex = 0);
			}
			exec(J) {
				this.matcherRe.lastIndex = this.lastIndex;
				const de = this.matcherRe.exec(J);
				if (!de) return null;
				const Ie = de.findIndex((gt, St) => St > 0 && gt !== void 0),
					Ne = this.matchIndexes[Ie];
				return de.splice(0, Ie), Object.assign(de, Ne);
			}
		}
		class Ge {
			constructor() {
				(this.rules = []),
					(this.multiRegexes = []),
					(this.count = 0),
					(this.lastIndex = 0),
					(this.regexIndex = 0);
			}
			getMatcher(J) {
				if (this.multiRegexes[J]) return this.multiRegexes[J];
				const de = new ve();
				return (
					this.rules.slice(J).forEach(([Ie, Ne]) => de.addRule(Ie, Ne)),
					de.compile(),
					(this.multiRegexes[J] = de),
					de
				);
			}
			resumingScanAtSamePosition() {
				return this.regexIndex !== 0;
			}
			considerAll() {
				this.regexIndex = 0;
			}
			addRule(J, de) {
				this.rules.push([J, de]), de.type === "begin" && this.count++;
			}
			exec(J) {
				const de = this.getMatcher(this.regexIndex);
				de.lastIndex = this.lastIndex;
				let Ie = de.exec(J);
				if (this.resumingScanAtSamePosition() && !(Ie && Ie.index === this.lastIndex)) {
					const Ne = this.getMatcher(0);
					(Ne.lastIndex = this.lastIndex + 1), (Ie = Ne.exec(J));
				}
				return (
					Ie &&
						((this.regexIndex += Ie.position + 1),
						this.regexIndex === this.count && this.considerAll()),
					Ie
				);
			}
		}
		function kt(H) {
			const J = new Ge();
			return (
				H.contains.forEach((de) => J.addRule(de.begin, { rule: de, type: "begin" })),
				H.terminatorEnd && J.addRule(H.terminatorEnd, { type: "end" }),
				H.illegal && J.addRule(H.illegal, { type: "illegal" }),
				J
			);
		}
		function P(H, J) {
			const de = H;
			if (H.isCompiled) return de;
			[ze, ot, $t, vt].forEach((Ne) => Ne(H, J)),
				M.compilerExtensions.forEach((Ne) => Ne(H, J)),
				(H.__beforeBegin = null),
				[Be, tt, st].forEach((Ne) => Ne(H, J)),
				(H.isCompiled = !0);
			let Ie = null;
			return (
				typeof H.keywords == "object" &&
					H.keywords.$pattern &&
					((H.keywords = Object.assign({}, H.keywords)),
					(Ie = H.keywords.$pattern),
					delete H.keywords.$pattern),
				(Ie = Ie || /\w+/),
				H.keywords && (H.keywords = Mt(H.keywords, M.case_insensitive)),
				(de.keywordPatternRe = Y(Ie, !0)),
				J &&
					(H.begin || (H.begin = /\B|\b/),
					(de.beginRe = Y(de.begin)),
					!H.end && !H.endsWithParent && (H.end = /\B|\b/),
					H.end && (de.endRe = Y(de.end)),
					(de.terminatorEnd = f(de.end) || ""),
					H.endsWithParent &&
						J.terminatorEnd &&
						(de.terminatorEnd += (H.end ? "|" : "") + J.terminatorEnd)),
				H.illegal && (de.illegalRe = Y(H.illegal)),
				H.contains || (H.contains = []),
				(H.contains = [].concat(
					...H.contains.map(function (Ne) {
						return sr(Ne === "self" ? H : Ne);
					})
				)),
				H.contains.forEach(function (Ne) {
					P(Ne, de);
				}),
				H.starts && P(H.starts, J),
				(de.matcher = kt(de)),
				de
			);
		}
		if (
			(M.compilerExtensions || (M.compilerExtensions = []),
			M.contains && M.contains.includes("self"))
		)
			throw new Error(
				"ERR: contains `self` is not supported at the top-level of a language.  See documentation."
			);
		return (M.classNameAliases = n(M.classNameAliases || {})), P(M);
	}
	function mr(M) {
		return M ? M.endsWithParent || mr(M.starts) : !1;
	}
	function sr(M) {
		return (
			M.variants &&
				!M.cachedVariants &&
				(M.cachedVariants = M.variants.map(function (Y) {
					return n(M, { variants: null }, Y);
				})),
			M.cachedVariants
				? M.cachedVariants
				: mr(M)
					? n(M, { starts: M.starts ? n(M.starts) : null })
					: Object.isFrozen(M)
						? n(M)
						: M
		);
	}
	var _r = "11.11.1";
	class Wn extends Error {
		constructor(Y, ve) {
			super(Y), (this.name = "HTMLInjectionError"), (this.html = ve);
		}
	}
	const kn = t,
		Zr = n,
		Ur = Symbol("nomatch"),
		Lr = 7,
		Wt = function (M) {
			const Y = Object.create(null),
				ve = Object.create(null),
				Ge = [];
			let kt = !0;
			const P =
					"Could not find the language '{}', did you forget to load/include a language module?",
				H = { disableAutodetect: !0, name: "Plain text", contains: [] };
			let J = {
				ignoreUnescapedHTML: !1,
				throwUnescapedHTML: !1,
				noHighlightRe: /^(no-?highlight)$/i,
				languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
				classPrefix: "hljs-",
				cssSelector: "pre code",
				languages: null,
				__emitter: h,
			};
			function de(he) {
				return J.noHighlightRe.test(he);
			}
			function Ie(he) {
				let Ve = he.className + " ";
				Ve += he.parentNode ? he.parentNode.className : "";
				const mt = J.languageDetectRe.exec(Ve);
				if (mt) {
					const Bt = kr(mt[1]);
					return (
						Bt ||
							(ke(P.replace("{}", mt[1])),
							ke("Falling back to no-highlight mode for this block.", he)),
						Bt ? mt[1] : "no-highlight"
					);
				}
				return Ve.split(/\s+/).find((Bt) => de(Bt) || kr(Bt));
			}
			function Ne(he, Ve, mt) {
				let Bt = "",
					er = "";
				typeof Ve == "object"
					? ((Bt = he), (mt = Ve.ignoreIllegals), (er = Ve.language))
					: (Re("10.7.0", "highlight(lang, code, ...args) has been deprecated."),
						Re(
							"10.7.0",
							`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`
						),
						(er = he),
						(Bt = Ve)),
					mt === void 0 && (mt = !0);
				const jr = { code: Bt, language: er };
				En("before:highlight", jr);
				const nn = jr.result ? jr.result : gt(jr.language, jr.code, mt);
				return (nn.code = jr.code), En("after:highlight", nn), nn;
			}
			function gt(he, Ve, mt, Bt) {
				const er = Object.create(null);
				function jr(Te, Ue) {
					return Te.keywords[Ue];
				}
				function nn() {
					if (!rt.keywords) {
						gr.addText(Ot);
						return;
					}
					let Te = 0;
					rt.keywordPatternRe.lastIndex = 0;
					let Ue = rt.keywordPatternRe.exec(Ot),
						ht = "";
					for (; Ue; ) {
						ht += Ot.substring(Te, Ue.index);
						const Nt = Gr.case_insensitive ? Ue[0].toLowerCase() : Ue[0],
							vr = jr(rt, Nt);
						if (vr) {
							const [pn, an] = vr;
							if (
								(gr.addText(ht),
								(ht = ""),
								(er[Nt] = (er[Nt] || 0) + 1),
								er[Nt] <= Lr && (fi += an),
								pn.startsWith("_"))
							)
								ht += Ue[0];
							else {
								const Xn = Gr.classNameAliases[pn] || pn;
								Sr(Ue[0], Xn);
							}
						} else ht += Ue[0];
						(Te = rt.keywordPatternRe.lastIndex), (Ue = rt.keywordPatternRe.exec(Ot));
					}
					(ht += Ot.substring(Te)), gr.addText(ht);
				}
				function Tn() {
					if (Ot === "") return;
					let Te = null;
					if (typeof rt.subLanguage == "string") {
						if (!Y[rt.subLanguage]) {
							gr.addText(Ot);
							return;
						}
						(Te = gt(rt.subLanguage, Ot, !0, qa[rt.subLanguage])), (qa[rt.subLanguage] = Te._top);
					} else Te = Dt(Ot, rt.subLanguage.length ? rt.subLanguage : null);
					rt.relevance > 0 && (fi += Te.relevance), gr.__addSublanguage(Te._emitter, Te.language);
				}
				function cr() {
					rt.subLanguage != null ? Tn() : nn(), (Ot = "");
				}
				function Sr(Te, Ue) {
					Te !== "" && (gr.startScope(Ue), gr.addText(Te), gr.endScope());
				}
				function $i(Te, Ue) {
					let ht = 1;
					const Nt = Ue.length - 1;
					for (; ht <= Nt; ) {
						if (!Te._emit[ht]) {
							ht++;
							continue;
						}
						const vr = Gr.classNameAliases[Te[ht]] || Te[ht],
							pn = Ue[ht];
						vr ? Sr(pn, vr) : ((Ot = pn), nn(), (Ot = "")), ht++;
					}
				}
				function eo(Te, Ue) {
					return (
						Te.scope &&
							typeof Te.scope == "string" &&
							gr.openNode(Gr.classNameAliases[Te.scope] || Te.scope),
						Te.beginScope &&
							(Te.beginScope._wrap
								? (Sr(Ot, Gr.classNameAliases[Te.beginScope._wrap] || Te.beginScope._wrap),
									(Ot = ""))
								: Te.beginScope._multi && ($i(Te.beginScope, Ue), (Ot = ""))),
						(rt = Object.create(Te, { parent: { value: rt } })),
						rt
					);
				}
				function to(Te, Ue, ht) {
					let Nt = B(Te.endRe, ht);
					if (Nt) {
						if (Te["on:end"]) {
							const vr = new e(Te);
							Te["on:end"](Ue, vr), vr.isMatchIgnored && (Nt = !1);
						}
						if (Nt) {
							for (; Te.endsParent && Te.parent; ) Te = Te.parent;
							return Te;
						}
					}
					if (Te.endsWithParent) return to(Te.parent, Ue, ht);
				}
				function ro(Te) {
					return rt.matcher.regexIndex === 0 ? ((Ot += Te[0]), 1) : ((An = !0), 0);
				}
				function zs(Te) {
					const Ue = Te[0],
						ht = Te.rule,
						Nt = new e(ht),
						vr = [ht.__beforeBegin, ht["on:begin"]];
					for (const pn of vr) if (pn && (pn(Te, Nt), Nt.isMatchIgnored)) return ro(Ue);
					return (
						ht.skip
							? (Ot += Ue)
							: (ht.excludeBegin && (Ot += Ue),
								cr(),
								!ht.returnBegin && !ht.excludeBegin && (Ot = Ue)),
						eo(ht, Te),
						ht.returnBegin ? 0 : Ue.length
					);
				}
				function di(Te) {
					const Ue = Te[0],
						ht = Ve.substring(Te.index),
						Nt = to(rt, Te, ht);
					if (!Nt) return Ur;
					const vr = rt;
					rt.endScope && rt.endScope._wrap
						? (cr(), Sr(Ue, rt.endScope._wrap))
						: rt.endScope && rt.endScope._multi
							? (cr(), $i(rt.endScope, Te))
							: vr.skip
								? (Ot += Ue)
								: (vr.returnEnd || vr.excludeEnd || (Ot += Ue), cr(), vr.excludeEnd && (Ot = Ue));
					do
						rt.scope && gr.closeNode(),
							!rt.skip && !rt.subLanguage && (fi += rt.relevance),
							(rt = rt.parent);
					while (rt !== Nt.parent);
					return Nt.starts && eo(Nt.starts, Te), vr.returnEnd ? 0 : Ue.length;
				}
				function hi() {
					const Te = [];
					for (let Ue = rt; Ue !== Gr; Ue = Ue.parent) Ue.scope && Te.unshift(Ue.scope);
					Te.forEach((Ue) => gr.openNode(Ue));
				}
				let Hr = {};
				function Kn(Te, Ue) {
					const ht = Ue && Ue[0];
					if (((Ot += Te), ht == null)) return cr(), 0;
					if (Hr.type === "begin" && Ue.type === "end" && Hr.index === Ue.index && ht === "") {
						if (((Ot += Ve.slice(Ue.index, Ue.index + 1)), !kt)) {
							const Nt = new Error(`0 width match regex (${he})`);
							throw ((Nt.languageName = he), (Nt.badRule = Hr.rule), Nt);
						}
						return 1;
					}
					if (((Hr = Ue), Ue.type === "begin")) return zs(Ue);
					if (Ue.type === "illegal" && !mt) {
						const Nt = new Error(
							'Illegal lexeme "' + ht + '" for mode "' + (rt.scope || "<unnamed>") + '"'
						);
						throw ((Nt.mode = rt), Nt);
					} else if (Ue.type === "end") {
						const Nt = di(Ue);
						if (Nt !== Ur) return Nt;
					}
					if (Ue.type === "illegal" && ht === "")
						return (
							(Ot += `
`),
							1
						);
					if (tr > 1e5 && tr > Ue.index * 3)
						throw new Error("potential infinite loop, way more iterations than matches");
					return (Ot += ht), ht.length;
				}
				const Gr = kr(he);
				if (!Gr) throw (De(P.replace("{}", he)), new Error('Unknown language: "' + he + '"'));
				const no = Gt(Gr);
				let ao = "",
					rt = Bt || no;
				const qa = {},
					gr = new J.__emitter(J);
				hi();
				let Ot = "",
					fi = 0,
					Yn = 0,
					tr = 0,
					An = !1;
				try {
					if (Gr.__emitTokens) Gr.__emitTokens(Ve, gr);
					else {
						for (rt.matcher.considerAll(); ; ) {
							tr++, An ? (An = !1) : rt.matcher.considerAll(), (rt.matcher.lastIndex = Yn);
							const Te = rt.matcher.exec(Ve);
							if (!Te) break;
							const Ue = Ve.substring(Yn, Te.index),
								ht = Kn(Ue, Te);
							Yn = Te.index + ht;
						}
						Kn(Ve.substring(Yn));
					}
					return (
						gr.finalize(),
						(ao = gr.toHTML()),
						{ language: he, value: ao, relevance: fi, illegal: !1, _emitter: gr, _top: rt }
					);
				} catch (Te) {
					if (Te.message && Te.message.includes("Illegal"))
						return {
							language: he,
							value: kn(Ve),
							illegal: !0,
							relevance: 0,
							_illegalBy: {
								message: Te.message,
								index: Yn,
								context: Ve.slice(Yn - 100, Yn + 100),
								mode: Te.mode,
								resultSoFar: ao,
							},
							_emitter: gr,
						};
					if (kt)
						return {
							language: he,
							value: kn(Ve),
							illegal: !1,
							relevance: 0,
							errorRaised: Te,
							_emitter: gr,
							_top: rt,
						};
					throw Te;
				}
			}
			function St(he) {
				const Ve = {
					value: kn(he),
					illegal: !1,
					relevance: 0,
					_top: H,
					_emitter: new J.__emitter(J),
				};
				return Ve._emitter.addText(he), Ve;
			}
			function Dt(he, Ve) {
				Ve = Ve || J.languages || Object.keys(Y);
				const mt = St(he),
					Bt = Ve.filter(kr)
						.filter(Fa)
						.map((cr) => gt(cr, he, !1));
				Bt.unshift(mt);
				const er = Bt.sort((cr, Sr) => {
						if (cr.relevance !== Sr.relevance) return Sr.relevance - cr.relevance;
						if (cr.language && Sr.language) {
							if (kr(cr.language).supersetOf === Sr.language) return 1;
							if (kr(Sr.language).supersetOf === cr.language) return -1;
						}
						return 0;
					}),
					[jr, nn] = er,
					Tn = jr;
				return (Tn.secondBest = nn), Tn;
			}
			function at(he, Ve, mt) {
				const Bt = (Ve && ve[Ve]) || mt;
				he.classList.add("hljs"), he.classList.add(`language-${Bt}`);
			}
			function We(he) {
				let Ve = null;
				const mt = Ie(he);
				if (de(mt)) return;
				if ((En("before:highlightElement", { el: he, language: mt }), he.dataset.highlighted)) {
					console.log(
						"Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",
						he
					);
					return;
				}
				if (
					he.children.length > 0 &&
					(J.ignoreUnescapedHTML ||
						(console.warn(
							"One of your code blocks includes unescaped HTML. This is a potentially serious security risk."
						),
						console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),
						console.warn("The element with unescaped HTML:"),
						console.warn(he)),
					J.throwUnescapedHTML)
				)
					throw new Wn("One of your code blocks includes unescaped HTML.", he.innerHTML);
				Ve = he;
				const Bt = Ve.textContent,
					er = mt ? Ne(Bt, { language: mt, ignoreIllegals: !0 }) : Dt(Bt);
				(he.innerHTML = er.value),
					(he.dataset.highlighted = "yes"),
					at(he, mt, er.language),
					(he.result = { language: er.language, re: er.relevance, relevance: er.relevance }),
					er.secondBest &&
						(he.secondBest = {
							language: er.secondBest.language,
							relevance: er.secondBest.relevance,
						}),
					En("after:highlightElement", { el: he, result: er, text: Bt });
			}
			function Pt(he) {
				J = Zr(J, he);
			}
			const wt = () => {
				Kt(), Re("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
			};
			function zr() {
				Kt(), Re("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
			}
			let bt = !1;
			function Kt() {
				function he() {
					Kt();
				}
				if (document.readyState === "loading") {
					bt || window.addEventListener("DOMContentLoaded", he, !1), (bt = !0);
					return;
				}
				document.querySelectorAll(J.cssSelector).forEach(We);
			}
			function pr(he, Ve) {
				let mt = null;
				try {
					mt = Ve(M);
				} catch (Bt) {
					if ((De("Language definition for '{}' could not be registered.".replace("{}", he)), kt))
						De(Bt);
					else throw Bt;
					mt = H;
				}
				mt.name || (mt.name = he),
					(Y[he] = mt),
					(mt.rawDefinition = Ve.bind(null, M)),
					mt.aliases && Vn(mt.aliases, { languageName: he });
			}
			function Or(he) {
				delete Y[he];
				for (const Ve of Object.keys(ve)) ve[Ve] === he && delete ve[Ve];
			}
			function rn() {
				return Object.keys(Y);
			}
			function kr(he) {
				return (he = (he || "").toLowerCase()), Y[he] || Y[ve[he]];
			}
			function Vn(he, { languageName: Ve }) {
				typeof he == "string" && (he = [he]),
					he.forEach((mt) => {
						ve[mt.toLowerCase()] = Ve;
					});
			}
			function Fa(he) {
				const Ve = kr(he);
				return Ve && !Ve.disableAutodetect;
			}
			function fn(he) {
				he["before:highlightBlock"] &&
					!he["before:highlightElement"] &&
					(he["before:highlightElement"] = (Ve) => {
						he["before:highlightBlock"](Object.assign({ block: Ve.el }, Ve));
					}),
					he["after:highlightBlock"] &&
						!he["after:highlightElement"] &&
						(he["after:highlightElement"] = (Ve) => {
							he["after:highlightBlock"](Object.assign({ block: Ve.el }, Ve));
						});
			}
			function Sn(he) {
				fn(he), Ge.push(he);
			}
			function mn(he) {
				const Ve = Ge.indexOf(he);
				Ve !== -1 && Ge.splice(Ve, 1);
			}
			function En(he, Ve) {
				const mt = he;
				Ge.forEach(function (Bt) {
					Bt[mt] && Bt[mt](Ve);
				});
			}
			function Qi(he) {
				return (
					Re("10.7.0", "highlightBlock will be removed entirely in v12.0"),
					Re("10.7.0", "Please use highlightElement now."),
					We(he)
				);
			}
			Object.assign(M, {
				highlight: Ne,
				highlightAuto: Dt,
				highlightAll: Kt,
				highlightElement: We,
				highlightBlock: Qi,
				configure: Pt,
				initHighlighting: wt,
				initHighlightingOnLoad: zr,
				registerLanguage: pr,
				unregisterLanguage: Or,
				listLanguages: rn,
				getLanguage: kr,
				registerAliases: Vn,
				autoDetection: Fa,
				inherit: Zr,
				addPlugin: Sn,
				removePlugin: mn,
			}),
				(M.debugMode = function () {
					kt = !1;
				}),
				(M.safeMode = function () {
					kt = !0;
				}),
				(M.versionString = _r),
				(M.regex = { concat: x, lookahead: p, either: k, optional: y, anyNumberOfTimes: g });
			for (const he in be) typeof be[he] == "object" && r(be[he]);
			return Object.assign(M, be), M;
		},
		lr = Wt({});
	return (lr.newInstance = () => Wt({})), (Ql = lr), (lr.HighlightJS = lr), (lr.default = lr), Ql;
}
var W6 = G6();
const d0 = eh(W6),
	R1 = "[A-Za-z$_][0-9A-Za-z$_]*",
	V6 = [
		"as",
		"in",
		"of",
		"if",
		"for",
		"while",
		"finally",
		"var",
		"new",
		"function",
		"do",
		"return",
		"void",
		"else",
		"break",
		"catch",
		"instanceof",
		"with",
		"throw",
		"case",
		"default",
		"try",
		"switch",
		"continue",
		"typeof",
		"delete",
		"let",
		"yield",
		"const",
		"class",
		"debugger",
		"async",
		"await",
		"static",
		"import",
		"from",
		"export",
		"extends",
		"using",
	],
	K6 = ["true", "false", "null", "undefined", "NaN", "Infinity"],
	fm = [
		"Object",
		"Function",
		"Boolean",
		"Symbol",
		"Math",
		"Date",
		"Number",
		"BigInt",
		"String",
		"RegExp",
		"Array",
		"Float32Array",
		"Float64Array",
		"Int8Array",
		"Uint8Array",
		"Uint8ClampedArray",
		"Int16Array",
		"Int32Array",
		"Uint16Array",
		"Uint32Array",
		"BigInt64Array",
		"BigUint64Array",
		"Set",
		"Map",
		"WeakSet",
		"WeakMap",
		"ArrayBuffer",
		"SharedArrayBuffer",
		"Atomics",
		"DataView",
		"JSON",
		"Promise",
		"Generator",
		"GeneratorFunction",
		"AsyncFunction",
		"Reflect",
		"Proxy",
		"Intl",
		"WebAssembly",
	],
	mm = [
		"Error",
		"EvalError",
		"InternalError",
		"RangeError",
		"ReferenceError",
		"SyntaxError",
		"TypeError",
		"URIError",
	],
	pm = [
		"setInterval",
		"setTimeout",
		"clearInterval",
		"clearTimeout",
		"require",
		"exports",
		"eval",
		"isFinite",
		"isNaN",
		"parseFloat",
		"parseInt",
		"decodeURI",
		"decodeURIComponent",
		"encodeURI",
		"encodeURIComponent",
		"escape",
		"unescape",
	],
	Y6 = [
		"arguments",
		"this",
		"super",
		"console",
		"window",
		"document",
		"localStorage",
		"sessionStorage",
		"module",
		"global",
	],
	X6 = [].concat(pm, fm, mm);
function Z6(r) {
	const e = r.regex,
		t = (ie, { after: oe }) => {
			const te = "</" + ie[0].slice(1);
			return ie.input.indexOf(te, oe) !== -1;
		},
		n = R1,
		a = { begin: "<>", end: "</>" },
		i = /<[A-Za-z0-9\\._:-]+\s*\/>/,
		o = {
			begin: /<[A-Za-z0-9\\._:-]+/,
			end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
			isTrulyOpeningTag: (ie, oe) => {
				const te = ie[0].length + ie.index,
					Ke = ie.input[te];
				if (Ke === "<" || Ke === ",") {
					oe.ignoreMatch();
					return;
				}
				Ke === ">" && (t(ie, { after: te }) || oe.ignoreMatch());
				let qe;
				const Qe = ie.input.substring(te);
				if ((qe = Qe.match(/^\s*=/))) {
					oe.ignoreMatch();
					return;
				}
				if ((qe = Qe.match(/^\s+extends\s+/)) && qe.index === 0) {
					oe.ignoreMatch();
					return;
				}
			},
		},
		s = { $pattern: R1, keyword: V6, literal: K6, built_in: X6, "variable.language": Y6 },
		l = "[0-9](_?[0-9])*",
		u = `\\.(${l})`,
		h = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
		f = {
			className: "number",
			variants: [
				{ begin: `(\\b(${h})((${u})|\\.)?|(${u}))[eE][+-]?(${l})\\b` },
				{ begin: `\\b(${h})\\b((${u})\\b|\\.)?|(${u})\\b` },
				{ begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
				{ begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
				{ begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
				{ begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
				{ begin: "\\b0[0-7]+n?\\b" },
			],
			relevance: 0,
		},
		p = { className: "subst", begin: "\\$\\{", end: "\\}", keywords: s, contains: [] },
		g = {
			begin: ".?html`",
			end: "",
			starts: { end: "`", returnEnd: !1, contains: [r.BACKSLASH_ESCAPE, p], subLanguage: "xml" },
		},
		y = {
			begin: ".?css`",
			end: "",
			starts: { end: "`", returnEnd: !1, contains: [r.BACKSLASH_ESCAPE, p], subLanguage: "css" },
		},
		x = {
			begin: ".?gql`",
			end: "",
			starts: {
				end: "`",
				returnEnd: !1,
				contains: [r.BACKSLASH_ESCAPE, p],
				subLanguage: "graphql",
			},
		},
		_ = { className: "string", begin: "`", end: "`", contains: [r.BACKSLASH_ESCAPE, p] },
		T = {
			className: "comment",
			variants: [
				r.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
					relevance: 0,
					contains: [
						{
							begin: "(?=@[A-Za-z]+)",
							relevance: 0,
							contains: [
								{ className: "doctag", begin: "@[A-Za-z]+" },
								{
									className: "type",
									begin: "\\{",
									end: "\\}",
									excludeEnd: !0,
									excludeBegin: !0,
									relevance: 0,
								},
								{ className: "variable", begin: n + "(?=\\s*(-)|$)", endsParent: !0, relevance: 0 },
								{ begin: /(?=[^\n])\s/, relevance: 0 },
							],
						},
					],
				}),
				r.C_BLOCK_COMMENT_MODE,
				r.C_LINE_COMMENT_MODE,
			],
		},
		B = [r.APOS_STRING_MODE, r.QUOTE_STRING_MODE, g, y, x, _, { match: /\$\d+/ }, f];
	p.contains = B.concat({ begin: /\{/, end: /\}/, keywords: s, contains: ["self"].concat(B) });
	const A = [].concat(T, p.contains),
		N = A.concat([{ begin: /(\s*)\(/, end: /\)/, keywords: s, contains: ["self"].concat(A) }]),
		z = {
			className: "params",
			begin: /(\s*)\(/,
			end: /\)/,
			excludeBegin: !0,
			excludeEnd: !0,
			keywords: s,
			contains: N,
		},
		I = {
			variants: [
				{
					match: [
						/class/,
						/\s+/,
						n,
						/\s+/,
						/extends/,
						/\s+/,
						e.concat(n, "(", e.concat(/\./, n), ")*"),
					],
					scope: { 1: "keyword", 3: "title.class", 5: "keyword", 7: "title.class.inherited" },
				},
				{ match: [/class/, /\s+/, n], scope: { 1: "keyword", 3: "title.class" } },
			],
		},
		G = {
			relevance: 0,
			match: e.either(
				/\bJSON/,
				/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
				/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
				/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
			),
			className: "title.class",
			keywords: { _: [...fm, ...mm] },
		},
		re = {
			label: "use_strict",
			className: "meta",
			relevance: 10,
			begin: /^\s*['"]use (strict|asm)['"]/,
		},
		V = {
			variants: [
				{ match: [/function/, /\s+/, n, /(?=\s*\()/] },
				{ match: [/function/, /\s*(?=\()/] },
			],
			className: { 1: "keyword", 3: "title.function" },
			label: "func.def",
			contains: [z],
			illegal: /%/,
		},
		se = { relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: "variable.constant" };
	function ce(ie) {
		return e.concat("(?!", ie.join("|"), ")");
	}
	const Ce = {
			match: e.concat(
				/\b/,
				ce([...pm, "super", "import"].map((ie) => `${ie}\\s*\\(`)),
				n,
				e.lookahead(/\s*\(/)
			),
			className: "title.function",
			relevance: 0,
		},
		Q = {
			begin: e.concat(/\./, e.lookahead(e.concat(n, /(?![0-9A-Za-z$_(])/))),
			end: n,
			excludeBegin: !0,
			keywords: "prototype",
			className: "property",
			relevance: 0,
		},
		$ = {
			match: [/get|set/, /\s+/, n, /(?=\()/],
			className: { 1: "keyword", 3: "title.function" },
			contains: [{ begin: /\(\)/ }, z],
		},
		K =
			"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" +
			r.UNDERSCORE_IDENT_RE +
			")\\s*=>",
		le = {
			match: [/const|var|let/, /\s+/, n, /\s*/, /=\s*/, /(async\s*)?/, e.lookahead(K)],
			keywords: "async",
			className: { 1: "keyword", 3: "title.function" },
			contains: [z],
		};
	return {
		name: "JavaScript",
		aliases: ["js", "jsx", "mjs", "cjs"],
		keywords: s,
		exports: { PARAMS_CONTAINS: N, CLASS_REFERENCE: G },
		illegal: /#(?![$_A-z])/,
		contains: [
			r.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }),
			re,
			r.APOS_STRING_MODE,
			r.QUOTE_STRING_MODE,
			g,
			y,
			x,
			_,
			T,
			{ match: /\$\d+/ },
			f,
			G,
			{ scope: "attr", match: n + e.lookahead(":"), relevance: 0 },
			le,
			{
				begin: "(" + r.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
				keywords: "return throw case",
				relevance: 0,
				contains: [
					T,
					r.REGEXP_MODE,
					{
						className: "function",
						begin: K,
						returnBegin: !0,
						end: "\\s*=>",
						contains: [
							{
								className: "params",
								variants: [
									{ begin: r.UNDERSCORE_IDENT_RE, relevance: 0 },
									{ className: null, begin: /\(\s*\)/, skip: !0 },
									{
										begin: /(\s*)\(/,
										end: /\)/,
										excludeBegin: !0,
										excludeEnd: !0,
										keywords: s,
										contains: N,
									},
								],
							},
						],
					},
					{ begin: /,/, relevance: 0 },
					{ match: /\s+/, relevance: 0 },
					{
						variants: [
							{ begin: a.begin, end: a.end },
							{ match: i },
							{ begin: o.begin, "on:begin": o.isTrulyOpeningTag, end: o.end },
						],
						subLanguage: "xml",
						contains: [{ begin: o.begin, end: o.end, skip: !0, contains: ["self"] }],
					},
				],
			},
			V,
			{ beginKeywords: "while if switch catch for" },
			{
				begin:
					"\\b(?!function)" +
					r.UNDERSCORE_IDENT_RE +
					"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
				returnBegin: !0,
				label: "func.def",
				contains: [z, r.inherit(r.TITLE_MODE, { begin: n, className: "title.function" })],
			},
			{ match: /\.\.\./, relevance: 0 },
			Q,
			{ match: "\\$" + n, relevance: 0 },
			{ match: [/\bconstructor(?=\s*\()/], className: { 1: "title.function" }, contains: [z] },
			Ce,
			se,
			I,
			$,
			{ match: /\$[(.]/ },
		],
	};
}
const z0 = "[A-Za-z$_][0-9A-Za-z$_]*",
	gm = [
		"as",
		"in",
		"of",
		"if",
		"for",
		"while",
		"finally",
		"var",
		"new",
		"function",
		"do",
		"return",
		"void",
		"else",
		"break",
		"catch",
		"instanceof",
		"with",
		"throw",
		"case",
		"default",
		"try",
		"switch",
		"continue",
		"typeof",
		"delete",
		"let",
		"yield",
		"const",
		"class",
		"debugger",
		"async",
		"await",
		"static",
		"import",
		"from",
		"export",
		"extends",
		"using",
	],
	vm = ["true", "false", "null", "undefined", "NaN", "Infinity"],
	bm = [
		"Object",
		"Function",
		"Boolean",
		"Symbol",
		"Math",
		"Date",
		"Number",
		"BigInt",
		"String",
		"RegExp",
		"Array",
		"Float32Array",
		"Float64Array",
		"Int8Array",
		"Uint8Array",
		"Uint8ClampedArray",
		"Int16Array",
		"Int32Array",
		"Uint16Array",
		"Uint32Array",
		"BigInt64Array",
		"BigUint64Array",
		"Set",
		"Map",
		"WeakSet",
		"WeakMap",
		"ArrayBuffer",
		"SharedArrayBuffer",
		"Atomics",
		"DataView",
		"JSON",
		"Promise",
		"Generator",
		"GeneratorFunction",
		"AsyncFunction",
		"Reflect",
		"Proxy",
		"Intl",
		"WebAssembly",
	],
	ym = [
		"Error",
		"EvalError",
		"InternalError",
		"RangeError",
		"ReferenceError",
		"SyntaxError",
		"TypeError",
		"URIError",
	],
	xm = [
		"setInterval",
		"setTimeout",
		"clearInterval",
		"clearTimeout",
		"require",
		"exports",
		"eval",
		"isFinite",
		"isNaN",
		"parseFloat",
		"parseInt",
		"decodeURI",
		"decodeURIComponent",
		"encodeURI",
		"encodeURIComponent",
		"escape",
		"unescape",
	],
	wm = [
		"arguments",
		"this",
		"super",
		"console",
		"window",
		"document",
		"localStorage",
		"sessionStorage",
		"module",
		"global",
	],
	_m = [].concat(xm, bm, ym);
function j6(r) {
	const e = r.regex,
		t = (ie, { after: oe }) => {
			const te = "</" + ie[0].slice(1);
			return ie.input.indexOf(te, oe) !== -1;
		},
		n = z0,
		a = { begin: "<>", end: "</>" },
		i = /<[A-Za-z0-9\\._:-]+\s*\/>/,
		o = {
			begin: /<[A-Za-z0-9\\._:-]+/,
			end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
			isTrulyOpeningTag: (ie, oe) => {
				const te = ie[0].length + ie.index,
					Ke = ie.input[te];
				if (Ke === "<" || Ke === ",") {
					oe.ignoreMatch();
					return;
				}
				Ke === ">" && (t(ie, { after: te }) || oe.ignoreMatch());
				let qe;
				const Qe = ie.input.substring(te);
				if ((qe = Qe.match(/^\s*=/))) {
					oe.ignoreMatch();
					return;
				}
				if ((qe = Qe.match(/^\s+extends\s+/)) && qe.index === 0) {
					oe.ignoreMatch();
					return;
				}
			},
		},
		s = { $pattern: z0, keyword: gm, literal: vm, built_in: _m, "variable.language": wm },
		l = "[0-9](_?[0-9])*",
		u = `\\.(${l})`,
		h = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
		f = {
			className: "number",
			variants: [
				{ begin: `(\\b(${h})((${u})|\\.)?|(${u}))[eE][+-]?(${l})\\b` },
				{ begin: `\\b(${h})\\b((${u})\\b|\\.)?|(${u})\\b` },
				{ begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
				{ begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
				{ begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
				{ begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
				{ begin: "\\b0[0-7]+n?\\b" },
			],
			relevance: 0,
		},
		p = { className: "subst", begin: "\\$\\{", end: "\\}", keywords: s, contains: [] },
		g = {
			begin: ".?html`",
			end: "",
			starts: { end: "`", returnEnd: !1, contains: [r.BACKSLASH_ESCAPE, p], subLanguage: "xml" },
		},
		y = {
			begin: ".?css`",
			end: "",
			starts: { end: "`", returnEnd: !1, contains: [r.BACKSLASH_ESCAPE, p], subLanguage: "css" },
		},
		x = {
			begin: ".?gql`",
			end: "",
			starts: {
				end: "`",
				returnEnd: !1,
				contains: [r.BACKSLASH_ESCAPE, p],
				subLanguage: "graphql",
			},
		},
		_ = { className: "string", begin: "`", end: "`", contains: [r.BACKSLASH_ESCAPE, p] },
		T = {
			className: "comment",
			variants: [
				r.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
					relevance: 0,
					contains: [
						{
							begin: "(?=@[A-Za-z]+)",
							relevance: 0,
							contains: [
								{ className: "doctag", begin: "@[A-Za-z]+" },
								{
									className: "type",
									begin: "\\{",
									end: "\\}",
									excludeEnd: !0,
									excludeBegin: !0,
									relevance: 0,
								},
								{ className: "variable", begin: n + "(?=\\s*(-)|$)", endsParent: !0, relevance: 0 },
								{ begin: /(?=[^\n])\s/, relevance: 0 },
							],
						},
					],
				}),
				r.C_BLOCK_COMMENT_MODE,
				r.C_LINE_COMMENT_MODE,
			],
		},
		B = [r.APOS_STRING_MODE, r.QUOTE_STRING_MODE, g, y, x, _, { match: /\$\d+/ }, f];
	p.contains = B.concat({ begin: /\{/, end: /\}/, keywords: s, contains: ["self"].concat(B) });
	const A = [].concat(T, p.contains),
		N = A.concat([{ begin: /(\s*)\(/, end: /\)/, keywords: s, contains: ["self"].concat(A) }]),
		z = {
			className: "params",
			begin: /(\s*)\(/,
			end: /\)/,
			excludeBegin: !0,
			excludeEnd: !0,
			keywords: s,
			contains: N,
		},
		I = {
			variants: [
				{
					match: [
						/class/,
						/\s+/,
						n,
						/\s+/,
						/extends/,
						/\s+/,
						e.concat(n, "(", e.concat(/\./, n), ")*"),
					],
					scope: { 1: "keyword", 3: "title.class", 5: "keyword", 7: "title.class.inherited" },
				},
				{ match: [/class/, /\s+/, n], scope: { 1: "keyword", 3: "title.class" } },
			],
		},
		G = {
			relevance: 0,
			match: e.either(
				/\bJSON/,
				/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
				/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
				/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
			),
			className: "title.class",
			keywords: { _: [...bm, ...ym] },
		},
		re = {
			label: "use_strict",
			className: "meta",
			relevance: 10,
			begin: /^\s*['"]use (strict|asm)['"]/,
		},
		V = {
			variants: [
				{ match: [/function/, /\s+/, n, /(?=\s*\()/] },
				{ match: [/function/, /\s*(?=\()/] },
			],
			className: { 1: "keyword", 3: "title.function" },
			label: "func.def",
			contains: [z],
			illegal: /%/,
		},
		se = { relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: "variable.constant" };
	function ce(ie) {
		return e.concat("(?!", ie.join("|"), ")");
	}
	const Ce = {
			match: e.concat(
				/\b/,
				ce([...xm, "super", "import"].map((ie) => `${ie}\\s*\\(`)),
				n,
				e.lookahead(/\s*\(/)
			),
			className: "title.function",
			relevance: 0,
		},
		Q = {
			begin: e.concat(/\./, e.lookahead(e.concat(n, /(?![0-9A-Za-z$_(])/))),
			end: n,
			excludeBegin: !0,
			keywords: "prototype",
			className: "property",
			relevance: 0,
		},
		$ = {
			match: [/get|set/, /\s+/, n, /(?=\()/],
			className: { 1: "keyword", 3: "title.function" },
			contains: [{ begin: /\(\)/ }, z],
		},
		K =
			"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" +
			r.UNDERSCORE_IDENT_RE +
			")\\s*=>",
		le = {
			match: [/const|var|let/, /\s+/, n, /\s*/, /=\s*/, /(async\s*)?/, e.lookahead(K)],
			keywords: "async",
			className: { 1: "keyword", 3: "title.function" },
			contains: [z],
		};
	return {
		name: "JavaScript",
		aliases: ["js", "jsx", "mjs", "cjs"],
		keywords: s,
		exports: { PARAMS_CONTAINS: N, CLASS_REFERENCE: G },
		illegal: /#(?![$_A-z])/,
		contains: [
			r.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }),
			re,
			r.APOS_STRING_MODE,
			r.QUOTE_STRING_MODE,
			g,
			y,
			x,
			_,
			T,
			{ match: /\$\d+/ },
			f,
			G,
			{ scope: "attr", match: n + e.lookahead(":"), relevance: 0 },
			le,
			{
				begin: "(" + r.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
				keywords: "return throw case",
				relevance: 0,
				contains: [
					T,
					r.REGEXP_MODE,
					{
						className: "function",
						begin: K,
						returnBegin: !0,
						end: "\\s*=>",
						contains: [
							{
								className: "params",
								variants: [
									{ begin: r.UNDERSCORE_IDENT_RE, relevance: 0 },
									{ className: null, begin: /\(\s*\)/, skip: !0 },
									{
										begin: /(\s*)\(/,
										end: /\)/,
										excludeBegin: !0,
										excludeEnd: !0,
										keywords: s,
										contains: N,
									},
								],
							},
						],
					},
					{ begin: /,/, relevance: 0 },
					{ match: /\s+/, relevance: 0 },
					{
						variants: [
							{ begin: a.begin, end: a.end },
							{ match: i },
							{ begin: o.begin, "on:begin": o.isTrulyOpeningTag, end: o.end },
						],
						subLanguage: "xml",
						contains: [{ begin: o.begin, end: o.end, skip: !0, contains: ["self"] }],
					},
				],
			},
			V,
			{ beginKeywords: "while if switch catch for" },
			{
				begin:
					"\\b(?!function)" +
					r.UNDERSCORE_IDENT_RE +
					"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
				returnBegin: !0,
				label: "func.def",
				contains: [z, r.inherit(r.TITLE_MODE, { begin: n, className: "title.function" })],
			},
			{ match: /\.\.\./, relevance: 0 },
			Q,
			{ match: "\\$" + n, relevance: 0 },
			{ match: [/\bconstructor(?=\s*\()/], className: { 1: "title.function" }, contains: [z] },
			Ce,
			se,
			I,
			$,
			{ match: /\$[(.]/ },
		],
	};
}
function J6(r) {
	const e = r.regex,
		t = j6(r),
		n = z0,
		a = [
			"any",
			"void",
			"number",
			"boolean",
			"string",
			"object",
			"never",
			"symbol",
			"bigint",
			"unknown",
		],
		i = { begin: [/namespace/, /\s+/, r.IDENT_RE], beginScope: { 1: "keyword", 3: "title.class" } },
		o = {
			beginKeywords: "interface",
			end: /\{/,
			excludeEnd: !0,
			keywords: { keyword: "interface extends", built_in: a },
			contains: [t.exports.CLASS_REFERENCE],
		},
		s = { className: "meta", relevance: 10, begin: /^\s*['"]use strict['"]/ },
		l = [
			"type",
			"interface",
			"public",
			"private",
			"protected",
			"implements",
			"declare",
			"abstract",
			"readonly",
			"enum",
			"override",
			"satisfies",
		],
		u = {
			$pattern: z0,
			keyword: gm.concat(l),
			literal: vm,
			built_in: _m.concat(a),
			"variable.language": wm,
		},
		h = { className: "meta", begin: "@" + n },
		f = (x, _, k) => {
			const T = x.contains.findIndex((B) => B.label === _);
			if (T === -1) throw new Error("can not find mode to replace");
			x.contains.splice(T, 1, k);
		};
	Object.assign(t.keywords, u), t.exports.PARAMS_CONTAINS.push(h);
	const p = t.contains.find((x) => x.scope === "attr"),
		g = Object.assign({}, p, { match: e.concat(n, e.lookahead(/\s*\?:/)) });
	t.exports.PARAMS_CONTAINS.push([t.exports.CLASS_REFERENCE, p, g]),
		(t.contains = t.contains.concat([h, i, o, g])),
		f(t, "shebang", r.SHEBANG()),
		f(t, "use_strict", s);
	const y = t.contains.find((x) => x.label === "func.def");
	return (
		(y.relevance = 0),
		Object.assign(t, { name: "TypeScript", aliases: ["ts", "tsx", "mts", "cts"] }),
		t
	);
}
function Q6(r) {
	const e = { className: "attr", begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/, relevance: 1.01 },
		t = { match: /[{}[\],:]/, className: "punctuation", relevance: 0 },
		n = ["true", "false", "null"],
		a = { scope: "literal", beginKeywords: n.join(" ") };
	return {
		name: "JSON",
		aliases: ["jsonc"],
		keywords: { literal: n },
		contains: [
			e,
			t,
			r.QUOTE_STRING_MODE,
			a,
			r.C_NUMBER_MODE,
			r.C_LINE_COMMENT_MODE,
			r.C_BLOCK_COMMENT_MODE,
		],
		illegal: "\\S",
	};
}
function $6(r) {
	const e = r.regex,
		t = {},
		n = { begin: /\$\{/, end: /\}/, contains: ["self", { begin: /:-/, contains: [t] }] };
	Object.assign(t, {
		className: "variable",
		variants: [{ begin: e.concat(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])") }, n],
	});
	const a = { className: "subst", begin: /\$\(/, end: /\)/, contains: [r.BACKSLASH_ESCAPE] },
		i = r.inherit(r.COMMENT(), { match: [/(^|\s)/, /#.*$/], scope: { 2: "comment" } }),
		o = {
			begin: /<<-?\s*(?=\w+)/,
			starts: {
				contains: [r.END_SAME_AS_BEGIN({ begin: /(\w+)/, end: /(\w+)/, className: "string" })],
			},
		},
		s = { className: "string", begin: /"/, end: /"/, contains: [r.BACKSLASH_ESCAPE, t, a] };
	a.contains.push(s);
	const l = { match: /\\"/ },
		u = { className: "string", begin: /'/, end: /'/ },
		h = { match: /\\'/ },
		f = {
			begin: /\$?\(\(/,
			end: /\)\)/,
			contains: [{ begin: /\d+#[0-9a-f]+/, className: "number" }, r.NUMBER_MODE, t],
		},
		p = ["fish", "bash", "zsh", "sh", "csh", "ksh", "tcsh", "dash", "scsh"],
		g = r.SHEBANG({ binary: `(${p.join("|")})`, relevance: 10 }),
		y = {
			className: "function",
			begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
			returnBegin: !0,
			contains: [r.inherit(r.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
			relevance: 0,
		},
		x = [
			"if",
			"then",
			"else",
			"elif",
			"fi",
			"time",
			"for",
			"while",
			"until",
			"in",
			"do",
			"done",
			"case",
			"esac",
			"coproc",
			"function",
			"select",
		],
		_ = ["true", "false"],
		k = { match: /(\/[a-z._-]+)+/ },
		T = [
			"break",
			"cd",
			"continue",
			"eval",
			"exec",
			"exit",
			"export",
			"getopts",
			"hash",
			"pwd",
			"readonly",
			"return",
			"shift",
			"test",
			"times",
			"trap",
			"umask",
			"unset",
		],
		B = [
			"alias",
			"bind",
			"builtin",
			"caller",
			"command",
			"declare",
			"echo",
			"enable",
			"help",
			"let",
			"local",
			"logout",
			"mapfile",
			"printf",
			"read",
			"readarray",
			"source",
			"sudo",
			"type",
			"typeset",
			"ulimit",
			"unalias",
		],
		A = [
			"autoload",
			"bg",
			"bindkey",
			"bye",
			"cap",
			"chdir",
			"clone",
			"comparguments",
			"compcall",
			"compctl",
			"compdescribe",
			"compfiles",
			"compgroups",
			"compquote",
			"comptags",
			"comptry",
			"compvalues",
			"dirs",
			"disable",
			"disown",
			"echotc",
			"echoti",
			"emulate",
			"fc",
			"fg",
			"float",
			"functions",
			"getcap",
			"getln",
			"history",
			"integer",
			"jobs",
			"kill",
			"limit",
			"log",
			"noglob",
			"popd",
			"print",
			"pushd",
			"pushln",
			"rehash",
			"sched",
			"setcap",
			"setopt",
			"stat",
			"suspend",
			"ttyctl",
			"unfunction",
			"unhash",
			"unlimit",
			"unsetopt",
			"vared",
			"wait",
			"whence",
			"where",
			"which",
			"zcompile",
			"zformat",
			"zftp",
			"zle",
			"zmodload",
			"zparseopts",
			"zprof",
			"zpty",
			"zregexparse",
			"zsocket",
			"zstyle",
			"ztcp",
		],
		N = [
			"chcon",
			"chgrp",
			"chown",
			"chmod",
			"cp",
			"dd",
			"df",
			"dir",
			"dircolors",
			"ln",
			"ls",
			"mkdir",
			"mkfifo",
			"mknod",
			"mktemp",
			"mv",
			"realpath",
			"rm",
			"rmdir",
			"shred",
			"sync",
			"touch",
			"truncate",
			"vdir",
			"b2sum",
			"base32",
			"base64",
			"cat",
			"cksum",
			"comm",
			"csplit",
			"cut",
			"expand",
			"fmt",
			"fold",
			"head",
			"join",
			"md5sum",
			"nl",
			"numfmt",
			"od",
			"paste",
			"ptx",
			"pr",
			"sha1sum",
			"sha224sum",
			"sha256sum",
			"sha384sum",
			"sha512sum",
			"shuf",
			"sort",
			"split",
			"sum",
			"tac",
			"tail",
			"tr",
			"tsort",
			"unexpand",
			"uniq",
			"wc",
			"arch",
			"basename",
			"chroot",
			"date",
			"dirname",
			"du",
			"echo",
			"env",
			"expr",
			"factor",
			"groups",
			"hostid",
			"id",
			"link",
			"logname",
			"nice",
			"nohup",
			"nproc",
			"pathchk",
			"pinky",
			"printenv",
			"printf",
			"pwd",
			"readlink",
			"runcon",
			"seq",
			"sleep",
			"stat",
			"stdbuf",
			"stty",
			"tee",
			"test",
			"timeout",
			"tty",
			"uname",
			"unlink",
			"uptime",
			"users",
			"who",
			"whoami",
			"yes",
		];
	return {
		name: "Bash",
		aliases: ["sh", "zsh"],
		keywords: {
			$pattern: /\b[a-z][a-z0-9._-]+\b/,
			keyword: x,
			literal: _,
			built_in: [...T, ...B, "set", "shopt", ...A, ...N],
		},
		contains: [g, r.SHEBANG(), y, f, i, o, k, s, l, u, h, t],
	};
}
function e7(r) {
	return {
		name: "Shell Session",
		aliases: ["console", "shellsession"],
		contains: [
			{
				className: "meta.prompt",
				begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
				starts: { end: /[^\\](?=\s*$)/, subLanguage: "bash" },
			},
		],
	};
}
function t7(r) {
	const e = r.regex,
		t = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u"),
		n = [
			"and",
			"as",
			"assert",
			"async",
			"await",
			"break",
			"case",
			"class",
			"continue",
			"def",
			"del",
			"elif",
			"else",
			"except",
			"finally",
			"for",
			"from",
			"global",
			"if",
			"import",
			"in",
			"is",
			"lambda",
			"match",
			"nonlocal|10",
			"not",
			"or",
			"pass",
			"raise",
			"return",
			"try",
			"while",
			"with",
			"yield",
		],
		s = {
			$pattern: /[A-Za-z]\w+|__\w+__/,
			keyword: n,
			built_in: [
				"__import__",
				"abs",
				"all",
				"any",
				"ascii",
				"bin",
				"bool",
				"breakpoint",
				"bytearray",
				"bytes",
				"callable",
				"chr",
				"classmethod",
				"compile",
				"complex",
				"delattr",
				"dict",
				"dir",
				"divmod",
				"enumerate",
				"eval",
				"exec",
				"filter",
				"float",
				"format",
				"frozenset",
				"getattr",
				"globals",
				"hasattr",
				"hash",
				"help",
				"hex",
				"id",
				"input",
				"int",
				"isinstance",
				"issubclass",
				"iter",
				"len",
				"list",
				"locals",
				"map",
				"max",
				"memoryview",
				"min",
				"next",
				"object",
				"oct",
				"open",
				"ord",
				"pow",
				"print",
				"property",
				"range",
				"repr",
				"reversed",
				"round",
				"set",
				"setattr",
				"slice",
				"sorted",
				"staticmethod",
				"str",
				"sum",
				"super",
				"tuple",
				"type",
				"vars",
				"zip",
			],
			literal: ["__debug__", "Ellipsis", "False", "None", "NotImplemented", "True"],
			type: [
				"Any",
				"Callable",
				"Coroutine",
				"Dict",
				"List",
				"Literal",
				"Generic",
				"Optional",
				"Sequence",
				"Set",
				"Tuple",
				"Type",
				"Union",
			],
		},
		l = { className: "meta", begin: /^(>>>|\.\.\.) / },
		u = { className: "subst", begin: /\{/, end: /\}/, keywords: s, illegal: /#/ },
		h = { begin: /\{\{/, relevance: 0 },
		f = {
			className: "string",
			contains: [r.BACKSLASH_ESCAPE],
			variants: [
				{
					begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
					end: /'''/,
					contains: [r.BACKSLASH_ESCAPE, l],
					relevance: 10,
				},
				{
					begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
					end: /"""/,
					contains: [r.BACKSLASH_ESCAPE, l],
					relevance: 10,
				},
				{
					begin: /([fF][rR]|[rR][fF]|[fF])'''/,
					end: /'''/,
					contains: [r.BACKSLASH_ESCAPE, l, h, u],
				},
				{
					begin: /([fF][rR]|[rR][fF]|[fF])"""/,
					end: /"""/,
					contains: [r.BACKSLASH_ESCAPE, l, h, u],
				},
				{ begin: /([uU]|[rR])'/, end: /'/, relevance: 10 },
				{ begin: /([uU]|[rR])"/, end: /"/, relevance: 10 },
				{ begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/ },
				{ begin: /([bB]|[bB][rR]|[rR][bB])"/, end: /"/ },
				{ begin: /([fF][rR]|[rR][fF]|[fF])'/, end: /'/, contains: [r.BACKSLASH_ESCAPE, h, u] },
				{ begin: /([fF][rR]|[rR][fF]|[fF])"/, end: /"/, contains: [r.BACKSLASH_ESCAPE, h, u] },
				r.APOS_STRING_MODE,
				r.QUOTE_STRING_MODE,
			],
		},
		p = "[0-9](_?[0-9])*",
		g = `(\\b(${p}))?\\.(${p})|\\b(${p})\\.`,
		y = `\\b|${n.join("|")}`,
		x = {
			className: "number",
			relevance: 0,
			variants: [
				{ begin: `(\\b(${p})|(${g}))[eE][+-]?(${p})[jJ]?(?=${y})` },
				{ begin: `(${g})[jJ]?` },
				{ begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${y})` },
				{ begin: `\\b0[bB](_?[01])+[lL]?(?=${y})` },
				{ begin: `\\b0[oO](_?[0-7])+[lL]?(?=${y})` },
				{ begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${y})` },
				{ begin: `\\b(${p})[jJ](?=${y})` },
			],
		},
		_ = {
			className: "comment",
			begin: e.lookahead(/# type:/),
			end: /$/,
			keywords: s,
			contains: [{ begin: /# type:/ }, { begin: /#/, end: /\b\B/, endsWithParent: !0 }],
		},
		k = {
			className: "params",
			variants: [
				{ className: "", begin: /\(\s*\)/, skip: !0 },
				{
					begin: /\(/,
					end: /\)/,
					excludeBegin: !0,
					excludeEnd: !0,
					keywords: s,
					contains: ["self", l, x, f, r.HASH_COMMENT_MODE],
				},
			],
		};
	return (
		(u.contains = [f, x, l]),
		{
			name: "Python",
			aliases: ["py", "gyp", "ipython"],
			unicodeRegex: !0,
			keywords: s,
			illegal: /(<\/|\?)|=>/,
			contains: [
				l,
				x,
				{ scope: "variable.language", match: /\bself\b/ },
				{ beginKeywords: "if", relevance: 0 },
				{ match: /\bor\b/, scope: "keyword" },
				f,
				_,
				r.HASH_COMMENT_MODE,
				{ match: [/\bdef/, /\s+/, t], scope: { 1: "keyword", 3: "title.function" }, contains: [k] },
				{
					variants: [
						{ match: [/\bclass/, /\s+/, t, /\s*/, /\(\s*/, t, /\s*\)/] },
						{ match: [/\bclass/, /\s+/, t] },
					],
					scope: { 1: "keyword", 3: "title.class", 6: "title.class.inherited" },
				},
				{ className: "meta", begin: /^[\t ]*@/, end: /(?=#)|$/, contains: [x, k, f] },
			],
		}
	);
}
function r7(r) {
	const i = {
		keyword: [
			"break",
			"case",
			"chan",
			"const",
			"continue",
			"default",
			"defer",
			"else",
			"fallthrough",
			"for",
			"func",
			"go",
			"goto",
			"if",
			"import",
			"interface",
			"map",
			"package",
			"range",
			"return",
			"select",
			"struct",
			"switch",
			"type",
			"var",
		],
		type: [
			"bool",
			"byte",
			"complex64",
			"complex128",
			"error",
			"float32",
			"float64",
			"int8",
			"int16",
			"int32",
			"int64",
			"string",
			"uint8",
			"uint16",
			"uint32",
			"uint64",
			"int",
			"uint",
			"uintptr",
			"rune",
		],
		literal: ["true", "false", "iota", "nil"],
		built_in: [
			"append",
			"cap",
			"close",
			"complex",
			"copy",
			"imag",
			"len",
			"make",
			"new",
			"panic",
			"print",
			"println",
			"real",
			"recover",
			"delete",
		],
	};
	return {
		name: "Go",
		aliases: ["golang"],
		keywords: i,
		illegal: "</",
		contains: [
			r.C_LINE_COMMENT_MODE,
			r.C_BLOCK_COMMENT_MODE,
			{
				className: "string",
				variants: [r.QUOTE_STRING_MODE, r.APOS_STRING_MODE, { begin: "`", end: "`" }],
			},
			{
				className: "number",
				variants: [
					{ match: /-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/, relevance: 0 },
					{
						match:
							/-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/,
						relevance: 0,
					},
					{ match: /-?\b0[oO](_?[0-7])*i?/, relevance: 0 },
					{ match: /-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/, relevance: 0 },
					{ match: /-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/, relevance: 0 },
				],
			},
			{ begin: /:=/ },
			{
				className: "function",
				beginKeywords: "func",
				end: "\\s*(\\{|$)",
				excludeEnd: !0,
				contains: [
					r.TITLE_MODE,
					{
						className: "params",
						begin: /\(/,
						end: /\)/,
						endsParent: !0,
						keywords: i,
						illegal: /["']/,
					},
				],
			},
		],
	};
}
function n7(r) {
	const e = r.regex,
		t = /(r#)?/,
		n = e.concat(t, r.UNDERSCORE_IDENT_RE),
		a = e.concat(t, r.IDENT_RE),
		i = {
			className: "title.function.invoke",
			relevance: 0,
			begin: e.concat(/\b/, /(?!let|for|while|if|else|match\b)/, a, e.lookahead(/\s*\(/)),
		},
		o = "([ui](8|16|32|64|128|size)|f(32|64))?",
		s = [
			"abstract",
			"as",
			"async",
			"await",
			"become",
			"box",
			"break",
			"const",
			"continue",
			"crate",
			"do",
			"dyn",
			"else",
			"enum",
			"extern",
			"false",
			"final",
			"fn",
			"for",
			"if",
			"impl",
			"in",
			"let",
			"loop",
			"macro",
			"match",
			"mod",
			"move",
			"mut",
			"override",
			"priv",
			"pub",
			"ref",
			"return",
			"self",
			"Self",
			"static",
			"struct",
			"super",
			"trait",
			"true",
			"try",
			"type",
			"typeof",
			"union",
			"unsafe",
			"unsized",
			"use",
			"virtual",
			"where",
			"while",
			"yield",
		],
		l = ["true", "false", "Some", "None", "Ok", "Err"],
		u = [
			"drop ",
			"Copy",
			"Send",
			"Sized",
			"Sync",
			"Drop",
			"Fn",
			"FnMut",
			"FnOnce",
			"ToOwned",
			"Clone",
			"Debug",
			"PartialEq",
			"PartialOrd",
			"Eq",
			"Ord",
			"AsRef",
			"AsMut",
			"Into",
			"From",
			"Default",
			"Iterator",
			"Extend",
			"IntoIterator",
			"DoubleEndedIterator",
			"ExactSizeIterator",
			"SliceConcatExt",
			"ToString",
			"assert!",
			"assert_eq!",
			"bitflags!",
			"bytes!",
			"cfg!",
			"col!",
			"concat!",
			"concat_idents!",
			"debug_assert!",
			"debug_assert_eq!",
			"env!",
			"eprintln!",
			"panic!",
			"file!",
			"format!",
			"format_args!",
			"include_bytes!",
			"include_str!",
			"line!",
			"local_data_key!",
			"module_path!",
			"option_env!",
			"print!",
			"println!",
			"select!",
			"stringify!",
			"try!",
			"unimplemented!",
			"unreachable!",
			"vec!",
			"write!",
			"writeln!",
			"macro_rules!",
			"assert_ne!",
			"debug_assert_ne!",
		],
		h = [
			"i8",
			"i16",
			"i32",
			"i64",
			"i128",
			"isize",
			"u8",
			"u16",
			"u32",
			"u64",
			"u128",
			"usize",
			"f32",
			"f64",
			"str",
			"char",
			"bool",
			"Box",
			"Option",
			"Result",
			"String",
			"Vec",
		];
	return {
		name: "Rust",
		aliases: ["rs"],
		keywords: { $pattern: r.IDENT_RE + "!?", type: h, keyword: s, literal: l, built_in: u },
		illegal: "</",
		contains: [
			r.C_LINE_COMMENT_MODE,
			r.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
			r.inherit(r.QUOTE_STRING_MODE, { begin: /b?"/, illegal: null }),
			{ className: "symbol", begin: /'[a-zA-Z_][a-zA-Z0-9_]*(?!')/ },
			{
				scope: "string",
				variants: [
					{ begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
					{
						begin: /b?'/,
						end: /'/,
						contains: [{ scope: "char.escape", match: /\\('|\w|x\w{2}|u\w{4}|U\w{8})/ }],
					},
				],
			},
			{
				className: "number",
				variants: [
					{ begin: "\\b0b([01_]+)" + o },
					{ begin: "\\b0o([0-7_]+)" + o },
					{ begin: "\\b0x([A-Fa-f0-9_]+)" + o },
					{ begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + o },
				],
				relevance: 0,
			},
			{ begin: [/fn/, /\s+/, n], className: { 1: "keyword", 3: "title.function" } },
			{
				className: "meta",
				begin: "#!?\\[",
				end: "\\]",
				contains: [{ className: "string", begin: /"/, end: /"/, contains: [r.BACKSLASH_ESCAPE] }],
			},
			{
				begin: [/let/, /\s+/, /(?:mut\s+)?/, n],
				className: { 1: "keyword", 3: "keyword", 4: "variable" },
			},
			{
				begin: [/for/, /\s+/, n, /\s+/, /in/],
				className: { 1: "keyword", 3: "variable", 5: "keyword" },
			},
			{ begin: [/type/, /\s+/, n], className: { 1: "keyword", 3: "title.class" } },
			{
				begin: [/(?:trait|enum|struct|union|impl|for)/, /\s+/, n],
				className: { 1: "keyword", 3: "title.class" },
			},
			{ begin: r.IDENT_RE + "::", keywords: { keyword: "Self", built_in: u, type: h } },
			{ className: "punctuation", begin: "->" },
			i,
		],
	};
}
var vi = "[0-9](_*[0-9])*",
	Js = `\\.(${vi})`,
	Qs = "[0-9a-fA-F](_*[0-9a-fA-F])*",
	I1 = {
		className: "number",
		variants: [
			{ begin: `(\\b(${vi})((${Js})|\\.)?|(${Js}))[eE][+-]?(${vi})[fFdD]?\\b` },
			{ begin: `\\b(${vi})((${Js})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
			{ begin: `(${Js})[fFdD]?\\b` },
			{ begin: `\\b(${vi})[fFdD]\\b` },
			{ begin: `\\b0[xX]((${Qs})\\.?|(${Qs})?\\.(${Qs}))[pP][+-]?(${vi})[fFdD]?\\b` },
			{ begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
			{ begin: `\\b0[xX](${Qs})[lL]?\\b` },
			{ begin: "\\b0(_*[0-7])*[lL]?\\b" },
			{ begin: "\\b0[bB][01](_*[01])*[lL]?\\b" },
		],
		relevance: 0,
	};
function km(r, e, t) {
	return t === -1 ? "" : r.replace(e, (n) => km(r, e, t - 1));
}
function a7(r) {
	const e = r.regex,
		t = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",
		n = t + km("(?:<" + t + "~~~(?:\\s*,\\s*" + t + "~~~)*>)?", /~~~/g, 2),
		l = {
			keyword: [
				"synchronized",
				"abstract",
				"private",
				"var",
				"static",
				"if",
				"const ",
				"for",
				"while",
				"strictfp",
				"finally",
				"protected",
				"import",
				"native",
				"final",
				"void",
				"enum",
				"else",
				"break",
				"transient",
				"catch",
				"instanceof",
				"volatile",
				"case",
				"assert",
				"package",
				"default",
				"public",
				"try",
				"switch",
				"continue",
				"throws",
				"protected",
				"public",
				"private",
				"module",
				"requires",
				"exports",
				"do",
				"sealed",
				"yield",
				"permits",
				"goto",
				"when",
			],
			literal: ["false", "true", "null"],
			type: ["char", "boolean", "long", "float", "int", "byte", "short", "double"],
			built_in: ["super", "this"],
		},
		u = {
			className: "meta",
			begin: "@" + t,
			contains: [{ begin: /\(/, end: /\)/, contains: ["self"] }],
		},
		h = {
			className: "params",
			begin: /\(/,
			end: /\)/,
			keywords: l,
			relevance: 0,
			contains: [r.C_BLOCK_COMMENT_MODE],
			endsParent: !0,
		};
	return {
		name: "Java",
		aliases: ["jsp"],
		keywords: l,
		illegal: /<\/|#/,
		contains: [
			r.COMMENT("/\\*\\*", "\\*/", {
				relevance: 0,
				contains: [
					{ begin: /\w+@/, relevance: 0 },
					{ className: "doctag", begin: "@[A-Za-z]+" },
				],
			}),
			{ begin: /import java\.[a-z]+\./, keywords: "import", relevance: 2 },
			r.C_LINE_COMMENT_MODE,
			r.C_BLOCK_COMMENT_MODE,
			{ begin: /"""/, end: /"""/, className: "string", contains: [r.BACKSLASH_ESCAPE] },
			r.APOS_STRING_MODE,
			r.QUOTE_STRING_MODE,
			{
				match: [/\b(?:class|interface|enum|extends|implements|new)/, /\s+/, t],
				className: { 1: "keyword", 3: "title.class" },
			},
			{ match: /non-sealed/, scope: "keyword" },
			{
				begin: [e.concat(/(?!else)/, t), /\s+/, t, /\s+/, /=(?!=)/],
				className: { 1: "type", 3: "variable", 5: "operator" },
			},
			{
				begin: [/record/, /\s+/, t],
				className: { 1: "keyword", 3: "title.class" },
				contains: [h, r.C_LINE_COMMENT_MODE, r.C_BLOCK_COMMENT_MODE],
			},
			{ beginKeywords: "new throw return else", relevance: 0 },
			{
				begin: ["(?:" + n + "\\s+)", r.UNDERSCORE_IDENT_RE, /\s*(?=\()/],
				className: { 2: "title.function" },
				keywords: l,
				contains: [
					{
						className: "params",
						begin: /\(/,
						end: /\)/,
						keywords: l,
						relevance: 0,
						contains: [u, r.APOS_STRING_MODE, r.QUOTE_STRING_MODE, I1, r.C_BLOCK_COMMENT_MODE],
					},
					r.C_LINE_COMMENT_MODE,
					r.C_BLOCK_COMMENT_MODE,
				],
			},
			I1,
			u,
		],
	};
}
function i7(r) {
	const e = [
			"bool",
			"byte",
			"char",
			"decimal",
			"delegate",
			"double",
			"dynamic",
			"enum",
			"float",
			"int",
			"long",
			"nint",
			"nuint",
			"object",
			"sbyte",
			"short",
			"string",
			"ulong",
			"uint",
			"ushort",
		],
		t = [
			"public",
			"private",
			"protected",
			"static",
			"internal",
			"protected",
			"abstract",
			"async",
			"extern",
			"override",
			"unsafe",
			"virtual",
			"new",
			"sealed",
			"partial",
		],
		n = ["default", "false", "null", "true"],
		a = [
			"abstract",
			"as",
			"base",
			"break",
			"case",
			"catch",
			"class",
			"const",
			"continue",
			"do",
			"else",
			"event",
			"explicit",
			"extern",
			"finally",
			"fixed",
			"for",
			"foreach",
			"goto",
			"if",
			"implicit",
			"in",
			"interface",
			"internal",
			"is",
			"lock",
			"namespace",
			"new",
			"operator",
			"out",
			"override",
			"params",
			"private",
			"protected",
			"public",
			"readonly",
			"record",
			"ref",
			"return",
			"scoped",
			"sealed",
			"sizeof",
			"stackalloc",
			"static",
			"struct",
			"switch",
			"this",
			"throw",
			"try",
			"typeof",
			"unchecked",
			"unsafe",
			"using",
			"virtual",
			"void",
			"volatile",
			"while",
		],
		i = [
			"add",
			"alias",
			"and",
			"ascending",
			"args",
			"async",
			"await",
			"by",
			"descending",
			"dynamic",
			"equals",
			"file",
			"from",
			"get",
			"global",
			"group",
			"init",
			"into",
			"join",
			"let",
			"nameof",
			"not",
			"notnull",
			"on",
			"or",
			"orderby",
			"partial",
			"record",
			"remove",
			"required",
			"scoped",
			"select",
			"set",
			"unmanaged",
			"value|0",
			"var",
			"when",
			"where",
			"with",
			"yield",
		],
		o = { keyword: a.concat(i), built_in: e, literal: n },
		s = r.inherit(r.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" }),
		l = {
			className: "number",
			variants: [
				{ begin: "\\b(0b[01']+)" },
				{ begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" },
				{
					begin:
						"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
				},
			],
			relevance: 0,
		},
		u = { className: "string", begin: /"""("*)(?!")(.|\n)*?"""\1/, relevance: 1 },
		h = { className: "string", begin: '@"', end: '"', contains: [{ begin: '""' }] },
		f = r.inherit(h, { illegal: /\n/ }),
		p = { className: "subst", begin: /\{/, end: /\}/, keywords: o },
		g = r.inherit(p, { illegal: /\n/ }),
		y = {
			className: "string",
			begin: /\$"/,
			end: '"',
			illegal: /\n/,
			contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, r.BACKSLASH_ESCAPE, g],
		},
		x = {
			className: "string",
			begin: /\$@"/,
			end: '"',
			contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: '""' }, p],
		},
		_ = r.inherit(x, {
			illegal: /\n/,
			contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: '""' }, g],
		});
	(p.contains = [x, y, h, r.APOS_STRING_MODE, r.QUOTE_STRING_MODE, l, r.C_BLOCK_COMMENT_MODE]),
		(g.contains = [
			_,
			y,
			f,
			r.APOS_STRING_MODE,
			r.QUOTE_STRING_MODE,
			l,
			r.inherit(r.C_BLOCK_COMMENT_MODE, { illegal: /\n/ }),
		]);
	const k = { variants: [u, x, y, h, r.APOS_STRING_MODE, r.QUOTE_STRING_MODE] },
		T = { begin: "<", end: ">", contains: [{ beginKeywords: "in out" }, s] },
		B = r.IDENT_RE + "(<" + r.IDENT_RE + "(\\s*,\\s*" + r.IDENT_RE + ")*>)?(\\[\\])?",
		A = { begin: "@" + r.IDENT_RE, relevance: 0 };
	return {
		name: "C#",
		aliases: ["cs", "c#"],
		keywords: o,
		illegal: /::/,
		contains: [
			r.COMMENT("///", "$", {
				returnBegin: !0,
				contains: [
					{
						className: "doctag",
						variants: [
							{ begin: "///", relevance: 0 },
							{ begin: "<!--|-->" },
							{ begin: "</?", end: ">" },
						],
					},
				],
			}),
			r.C_LINE_COMMENT_MODE,
			r.C_BLOCK_COMMENT_MODE,
			{
				className: "meta",
				begin: "#",
				end: "$",
				keywords: {
					keyword:
						"if else elif endif define undef warning error line region endregion pragma checksum",
				},
			},
			k,
			l,
			{
				beginKeywords: "class interface",
				relevance: 0,
				end: /[{;=]/,
				illegal: /[^\s:,]/,
				contains: [
					{ beginKeywords: "where class" },
					s,
					T,
					r.C_LINE_COMMENT_MODE,
					r.C_BLOCK_COMMENT_MODE,
				],
			},
			{
				beginKeywords: "namespace",
				relevance: 0,
				end: /[{;=]/,
				illegal: /[^\s:]/,
				contains: [s, r.C_LINE_COMMENT_MODE, r.C_BLOCK_COMMENT_MODE],
			},
			{
				beginKeywords: "record",
				relevance: 0,
				end: /[{;=]/,
				illegal: /[^\s:]/,
				contains: [s, T, r.C_LINE_COMMENT_MODE, r.C_BLOCK_COMMENT_MODE],
			},
			{
				className: "meta",
				begin: "^\\s*\\[(?=[\\w])",
				excludeBegin: !0,
				end: "\\]",
				excludeEnd: !0,
				contains: [{ className: "string", begin: /"/, end: /"/ }],
			},
			{ beginKeywords: "new return throw await else", relevance: 0 },
			{
				className: "function",
				begin: "(" + B + "\\s+)+" + r.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
				returnBegin: !0,
				end: /\s*[{;=]/,
				excludeEnd: !0,
				keywords: o,
				contains: [
					{ beginKeywords: t.join(" "), relevance: 0 },
					{
						begin: r.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
						returnBegin: !0,
						contains: [r.TITLE_MODE, T],
						relevance: 0,
					},
					{ match: /\(\)/ },
					{
						className: "params",
						begin: /\(/,
						end: /\)/,
						excludeBegin: !0,
						excludeEnd: !0,
						keywords: o,
						relevance: 0,
						contains: [k, l, r.C_BLOCK_COMMENT_MODE],
					},
					r.C_LINE_COMMENT_MODE,
					r.C_BLOCK_COMMENT_MODE,
				],
			},
			A,
		],
	};
}
function o7(r) {
	const e = r.regex,
		t = r.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }),
		n = "decltype\\(auto\\)",
		a = "[a-zA-Z_]\\w*::",
		o = "(?!struct)(" + n + "|" + e.optional(a) + "[a-zA-Z_]\\w*" + e.optional("<[^<>]+>") + ")",
		s = { className: "type", begin: "\\b[a-z\\d_]*_t\\b" },
		u = {
			className: "string",
			variants: [
				{ begin: '(u8?|U|L)?"', end: '"', illegal: "\\n", contains: [r.BACKSLASH_ESCAPE] },
				{
					begin: "(u8?|U|L)?'(" + "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)" + "|.)",
					end: "'",
					illegal: ".",
				},
				r.END_SAME_AS_BEGIN({
					begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
					end: /\)([^()\\ ]{0,16})"/,
				}),
			],
		},
		h = {
			className: "number",
			variants: [
				{
					begin:
						"[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)",
				},
				{
					begin:
						"[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)",
				},
			],
			relevance: 0,
		},
		f = {
			className: "meta",
			begin: /#\s*[a-z]+\b/,
			end: /$/,
			keywords: {
				keyword:
					"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include",
			},
			contains: [
				{ begin: /\\\n/, relevance: 0 },
				r.inherit(u, { className: "string" }),
				{ className: "string", begin: /<.*?>/ },
				t,
				r.C_BLOCK_COMMENT_MODE,
			],
		},
		p = { className: "title", begin: e.optional(a) + r.IDENT_RE, relevance: 0 },
		g = e.optional(a) + r.IDENT_RE + "\\s*\\(",
		y = [
			"alignas",
			"alignof",
			"and",
			"and_eq",
			"asm",
			"atomic_cancel",
			"atomic_commit",
			"atomic_noexcept",
			"auto",
			"bitand",
			"bitor",
			"break",
			"case",
			"catch",
			"class",
			"co_await",
			"co_return",
			"co_yield",
			"compl",
			"concept",
			"const_cast|10",
			"consteval",
			"constexpr",
			"constinit",
			"continue",
			"decltype",
			"default",
			"delete",
			"do",
			"dynamic_cast|10",
			"else",
			"enum",
			"explicit",
			"export",
			"extern",
			"false",
			"final",
			"for",
			"friend",
			"goto",
			"if",
			"import",
			"inline",
			"module",
			"mutable",
			"namespace",
			"new",
			"noexcept",
			"not",
			"not_eq",
			"nullptr",
			"operator",
			"or",
			"or_eq",
			"override",
			"private",
			"protected",
			"public",
			"reflexpr",
			"register",
			"reinterpret_cast|10",
			"requires",
			"return",
			"sizeof",
			"static_assert",
			"static_cast|10",
			"struct",
			"switch",
			"synchronized",
			"template",
			"this",
			"thread_local",
			"throw",
			"transaction_safe",
			"transaction_safe_dynamic",
			"true",
			"try",
			"typedef",
			"typeid",
			"typename",
			"union",
			"using",
			"virtual",
			"volatile",
			"while",
			"xor",
			"xor_eq",
		],
		x = [
			"bool",
			"char",
			"char16_t",
			"char32_t",
			"char8_t",
			"double",
			"float",
			"int",
			"long",
			"short",
			"void",
			"wchar_t",
			"unsigned",
			"signed",
			"const",
			"static",
		],
		_ = [
			"any",
			"auto_ptr",
			"barrier",
			"binary_semaphore",
			"bitset",
			"complex",
			"condition_variable",
			"condition_variable_any",
			"counting_semaphore",
			"deque",
			"false_type",
			"flat_map",
			"flat_set",
			"future",
			"imaginary",
			"initializer_list",
			"istringstream",
			"jthread",
			"latch",
			"lock_guard",
			"multimap",
			"multiset",
			"mutex",
			"optional",
			"ostringstream",
			"packaged_task",
			"pair",
			"promise",
			"priority_queue",
			"queue",
			"recursive_mutex",
			"recursive_timed_mutex",
			"scoped_lock",
			"set",
			"shared_future",
			"shared_lock",
			"shared_mutex",
			"shared_timed_mutex",
			"shared_ptr",
			"stack",
			"string_view",
			"stringstream",
			"timed_mutex",
			"thread",
			"true_type",
			"tuple",
			"unique_lock",
			"unique_ptr",
			"unordered_map",
			"unordered_multimap",
			"unordered_multiset",
			"unordered_set",
			"variant",
			"vector",
			"weak_ptr",
			"wstring",
			"wstring_view",
		],
		k = [
			"abort",
			"abs",
			"acos",
			"apply",
			"as_const",
			"asin",
			"atan",
			"atan2",
			"calloc",
			"ceil",
			"cerr",
			"cin",
			"clog",
			"cos",
			"cosh",
			"cout",
			"declval",
			"endl",
			"exchange",
			"exit",
			"exp",
			"fabs",
			"floor",
			"fmod",
			"forward",
			"fprintf",
			"fputs",
			"free",
			"frexp",
			"fscanf",
			"future",
			"invoke",
			"isalnum",
			"isalpha",
			"iscntrl",
			"isdigit",
			"isgraph",
			"islower",
			"isprint",
			"ispunct",
			"isspace",
			"isupper",
			"isxdigit",
			"labs",
			"launder",
			"ldexp",
			"log",
			"log10",
			"make_pair",
			"make_shared",
			"make_shared_for_overwrite",
			"make_tuple",
			"make_unique",
			"malloc",
			"memchr",
			"memcmp",
			"memcpy",
			"memset",
			"modf",
			"move",
			"pow",
			"printf",
			"putchar",
			"puts",
			"realloc",
			"scanf",
			"sin",
			"sinh",
			"snprintf",
			"sprintf",
			"sqrt",
			"sscanf",
			"std",
			"stderr",
			"stdin",
			"stdout",
			"strcat",
			"strchr",
			"strcmp",
			"strcpy",
			"strcspn",
			"strlen",
			"strncat",
			"strncmp",
			"strncpy",
			"strpbrk",
			"strrchr",
			"strspn",
			"strstr",
			"swap",
			"tan",
			"tanh",
			"terminate",
			"to_underlying",
			"tolower",
			"toupper",
			"vfprintf",
			"visit",
			"vprintf",
			"vsprintf",
		],
		A = {
			type: x,
			keyword: y,
			literal: ["NULL", "false", "nullopt", "nullptr", "true"],
			built_in: ["_Pragma"],
			_type_hints: _,
		},
		N = {
			className: "function.dispatch",
			relevance: 0,
			keywords: { _hint: k },
			begin: e.concat(
				/\b/,
				/(?!decltype)/,
				/(?!if)/,
				/(?!for)/,
				/(?!switch)/,
				/(?!while)/,
				r.IDENT_RE,
				e.lookahead(/(<[^<>]+>|)\s*\(/)
			),
		},
		z = [N, f, s, t, r.C_BLOCK_COMMENT_MODE, h, u],
		I = {
			variants: [
				{ begin: /=/, end: /;/ },
				{ begin: /\(/, end: /\)/ },
				{ beginKeywords: "new throw return else", end: /;/ },
			],
			keywords: A,
			contains: z.concat([
				{ begin: /\(/, end: /\)/, keywords: A, contains: z.concat(["self"]), relevance: 0 },
			]),
			relevance: 0,
		},
		G = {
			className: "function",
			begin: "(" + o + "[\\*&\\s]+)+" + g,
			returnBegin: !0,
			end: /[{;=]/,
			excludeEnd: !0,
			keywords: A,
			illegal: /[^\w\s\*&:<>.]/,
			contains: [
				{ begin: n, keywords: A, relevance: 0 },
				{ begin: g, returnBegin: !0, contains: [p], relevance: 0 },
				{ begin: /::/, relevance: 0 },
				{ begin: /:/, endsWithParent: !0, contains: [u, h] },
				{ relevance: 0, match: /,/ },
				{
					className: "params",
					begin: /\(/,
					end: /\)/,
					keywords: A,
					relevance: 0,
					contains: [
						t,
						r.C_BLOCK_COMMENT_MODE,
						u,
						h,
						s,
						{
							begin: /\(/,
							end: /\)/,
							keywords: A,
							relevance: 0,
							contains: ["self", t, r.C_BLOCK_COMMENT_MODE, u, h, s],
						},
					],
				},
				s,
				t,
				r.C_BLOCK_COMMENT_MODE,
				f,
			],
		};
	return {
		name: "C++",
		aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
		keywords: A,
		illegal: "</",
		classNameAliases: { "function.dispatch": "built_in" },
		contains: [].concat(I, G, N, z, [
			f,
			{
				begin:
					"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",
				end: ">",
				keywords: A,
				contains: ["self", s],
			},
			{ begin: r.IDENT_RE + "::", keywords: A },
			{
				match: [/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/, /\s+/, /\w+/],
				className: { 1: "keyword", 3: "title.class" },
			},
		]),
	};
}
function s7(r) {
	const e = r.regex,
		t = r.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }),
		n = "decltype\\(auto\\)",
		a = "[a-zA-Z_]\\w*::",
		o = "(" + n + "|" + e.optional(a) + "[a-zA-Z_]\\w*" + e.optional("<[^<>]+>") + ")",
		s = {
			className: "type",
			variants: [{ begin: "\\b[a-z\\d_]*_t\\b" }, { match: /\batomic_[a-z]{3,6}\b/ }],
		},
		u = {
			className: "string",
			variants: [
				{ begin: '(u8?|U|L)?"', end: '"', illegal: "\\n", contains: [r.BACKSLASH_ESCAPE] },
				{
					begin: "(u8?|U|L)?'(" + "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)" + "|.)",
					end: "'",
					illegal: ".",
				},
				r.END_SAME_AS_BEGIN({
					begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
					end: /\)([^()\\ ]{0,16})"/,
				}),
			],
		},
		h = {
			className: "number",
			variants: [
				{ match: /\b(0b[01']+)/ },
				{
					match: /(-?)\b([\d']+(\.[\d']*)?|\.[\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)/,
				},
				{
					match:
						/(-?)\b(0[xX][a-fA-F0-9]+(?:'[a-fA-F0-9]+)*(?:\.[a-fA-F0-9]*(?:'[a-fA-F0-9]*)*)?(?:[pP][-+]?[0-9]+)?(l|L)?(u|U)?)/,
				},
				{ match: /(-?)\b\d+(?:'\d+)*(?:\.\d*(?:'\d*)*)?(?:[eE][-+]?\d+)?/ },
			],
			relevance: 0,
		},
		f = {
			className: "meta",
			begin: /#\s*[a-z]+\b/,
			end: /$/,
			keywords: {
				keyword:
					"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef elifdef elifndef include",
			},
			contains: [
				{ begin: /\\\n/, relevance: 0 },
				r.inherit(u, { className: "string" }),
				{ className: "string", begin: /<.*?>/ },
				t,
				r.C_BLOCK_COMMENT_MODE,
			],
		},
		p = { className: "title", begin: e.optional(a) + r.IDENT_RE, relevance: 0 },
		g = e.optional(a) + r.IDENT_RE + "\\s*\\(",
		_ = {
			keyword: [
				"asm",
				"auto",
				"break",
				"case",
				"continue",
				"default",
				"do",
				"else",
				"enum",
				"extern",
				"for",
				"fortran",
				"goto",
				"if",
				"inline",
				"register",
				"restrict",
				"return",
				"sizeof",
				"typeof",
				"typeof_unqual",
				"struct",
				"switch",
				"typedef",
				"union",
				"volatile",
				"while",
				"_Alignas",
				"_Alignof",
				"_Atomic",
				"_Generic",
				"_Noreturn",
				"_Static_assert",
				"_Thread_local",
				"alignas",
				"alignof",
				"noreturn",
				"static_assert",
				"thread_local",
				"_Pragma",
			],
			type: [
				"float",
				"double",
				"signed",
				"unsigned",
				"int",
				"short",
				"long",
				"char",
				"void",
				"_Bool",
				"_BitInt",
				"_Complex",
				"_Imaginary",
				"_Decimal32",
				"_Decimal64",
				"_Decimal96",
				"_Decimal128",
				"_Decimal64x",
				"_Decimal128x",
				"_Float16",
				"_Float32",
				"_Float64",
				"_Float128",
				"_Float32x",
				"_Float64x",
				"_Float128x",
				"const",
				"static",
				"constexpr",
				"complex",
				"bool",
				"imaginary",
			],
			literal: "true false NULL",
			built_in:
				"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
		},
		k = [f, s, t, r.C_BLOCK_COMMENT_MODE, h, u],
		T = {
			variants: [
				{ begin: /=/, end: /;/ },
				{ begin: /\(/, end: /\)/ },
				{ beginKeywords: "new throw return else", end: /;/ },
			],
			keywords: _,
			contains: k.concat([
				{ begin: /\(/, end: /\)/, keywords: _, contains: k.concat(["self"]), relevance: 0 },
			]),
			relevance: 0,
		},
		B = {
			begin: "(" + o + "[\\*&\\s]+)+" + g,
			returnBegin: !0,
			end: /[{;=]/,
			excludeEnd: !0,
			keywords: _,
			illegal: /[^\w\s\*&:<>.]/,
			contains: [
				{ begin: n, keywords: _, relevance: 0 },
				{
					begin: g,
					returnBegin: !0,
					contains: [r.inherit(p, { className: "title.function" })],
					relevance: 0,
				},
				{ relevance: 0, match: /,/ },
				{
					className: "params",
					begin: /\(/,
					end: /\)/,
					keywords: _,
					relevance: 0,
					contains: [
						t,
						r.C_BLOCK_COMMENT_MODE,
						u,
						h,
						s,
						{
							begin: /\(/,
							end: /\)/,
							keywords: _,
							relevance: 0,
							contains: ["self", t, r.C_BLOCK_COMMENT_MODE, u, h, s],
						},
					],
				},
				s,
				t,
				r.C_BLOCK_COMMENT_MODE,
				f,
			],
		};
	return {
		name: "C",
		aliases: ["h"],
		keywords: _,
		disableAutodetect: !0,
		illegal: "</",
		contains: [].concat(T, B, k, [
			f,
			{ begin: r.IDENT_RE + "::", keywords: _ },
			{
				className: "class",
				beginKeywords: "enum class struct union",
				end: /[{;:<>=]/,
				contains: [{ beginKeywords: "final class struct" }, r.TITLE_MODE],
			},
		]),
		exports: { preprocessor: f, strings: u, keywords: _ },
	};
}
function D1(r) {
	const e = r.regex,
		t = e.concat(/[\p{L}_]/u, e.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u),
		n = /[\p{L}0-9._:-]+/u,
		a = { className: "symbol", begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/ },
		i = {
			begin: /\s/,
			contains: [{ className: "keyword", begin: /#?[a-z_][a-z1-9_-]+/, illegal: /\n/ }],
		},
		o = r.inherit(i, { begin: /\(/, end: /\)/ }),
		s = r.inherit(r.APOS_STRING_MODE, { className: "string" }),
		l = r.inherit(r.QUOTE_STRING_MODE, { className: "string" }),
		u = {
			endsWithParent: !0,
			illegal: /</,
			relevance: 0,
			contains: [
				{ className: "attr", begin: n, relevance: 0 },
				{
					begin: /=\s*/,
					relevance: 0,
					contains: [
						{
							className: "string",
							endsParent: !0,
							variants: [
								{ begin: /"/, end: /"/, contains: [a] },
								{ begin: /'/, end: /'/, contains: [a] },
								{ begin: /[^\s"'=<>`]+/ },
							],
						},
					],
				},
			],
		};
	return {
		name: "HTML, XML",
		aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
		case_insensitive: !0,
		unicodeRegex: !0,
		contains: [
			{
				className: "meta",
				begin: /<![a-z]/,
				end: />/,
				relevance: 10,
				contains: [
					i,
					l,
					s,
					o,
					{
						begin: /\[/,
						end: /\]/,
						contains: [{ className: "meta", begin: /<![a-z]/, end: />/, contains: [i, o, l, s] }],
					},
				],
			},
			r.COMMENT(/<!--/, /-->/, { relevance: 10 }),
			{ begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 },
			a,
			{
				className: "meta",
				end: /\?>/,
				variants: [
					{ begin: /<\?xml/, relevance: 10, contains: [l] },
					{ begin: /<\?[a-z][a-z0-9]+/ },
				],
			},
			{
				className: "tag",
				begin: /<style(?=\s|>)/,
				end: />/,
				keywords: { name: "style" },
				contains: [u],
				starts: { end: /<\/style>/, returnEnd: !0, subLanguage: ["css", "xml"] },
			},
			{
				className: "tag",
				begin: /<script(?=\s|>)/,
				end: />/,
				keywords: { name: "script" },
				contains: [u],
				starts: {
					end: /<\/script>/,
					returnEnd: !0,
					subLanguage: ["javascript", "handlebars", "xml"],
				},
			},
			{ className: "tag", begin: /<>|<\/>/ },
			{
				className: "tag",
				begin: e.concat(/</, e.lookahead(e.concat(t, e.either(/\/>/, />/, /\s/)))),
				end: /\/?>/,
				contains: [{ className: "name", begin: t, relevance: 0, starts: u }],
			},
			{
				className: "tag",
				begin: e.concat(/<\//, e.lookahead(e.concat(t, />/))),
				contains: [
					{ className: "name", begin: t, relevance: 0 },
					{ begin: />/, relevance: 0, endsParent: !0 },
				],
			},
		],
	};
}
const l7 = (r) => ({
		IMPORTANT: { scope: "meta", begin: "!important" },
		BLOCK_COMMENT: r.C_BLOCK_COMMENT_MODE,
		HEXCOLOR: { scope: "number", begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/ },
		FUNCTION_DISPATCH: { className: "built_in", begin: /[\w-]+(?=\()/ },
		ATTRIBUTE_SELECTOR_MODE: {
			scope: "selector-attr",
			begin: /\[/,
			end: /\]/,
			illegal: "$",
			contains: [r.APOS_STRING_MODE, r.QUOTE_STRING_MODE],
		},
		CSS_NUMBER_MODE: {
			scope: "number",
			begin:
				r.NUMBER_RE +
				"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
			relevance: 0,
		},
		CSS_VARIABLE: { className: "attr", begin: /--[A-Za-z_][A-Za-z0-9_-]*/ },
	}),
	c7 = [
		"a",
		"abbr",
		"address",
		"article",
		"aside",
		"audio",
		"b",
		"blockquote",
		"body",
		"button",
		"canvas",
		"caption",
		"cite",
		"code",
		"dd",
		"del",
		"details",
		"dfn",
		"div",
		"dl",
		"dt",
		"em",
		"fieldset",
		"figcaption",
		"figure",
		"footer",
		"form",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"header",
		"hgroup",
		"html",
		"i",
		"iframe",
		"img",
		"input",
		"ins",
		"kbd",
		"label",
		"legend",
		"li",
		"main",
		"mark",
		"menu",
		"nav",
		"object",
		"ol",
		"optgroup",
		"option",
		"p",
		"picture",
		"q",
		"quote",
		"samp",
		"section",
		"select",
		"source",
		"span",
		"strong",
		"summary",
		"sup",
		"table",
		"tbody",
		"td",
		"textarea",
		"tfoot",
		"th",
		"thead",
		"time",
		"tr",
		"ul",
		"var",
		"video",
	],
	u7 = [
		"defs",
		"g",
		"marker",
		"mask",
		"pattern",
		"svg",
		"switch",
		"symbol",
		"feBlend",
		"feColorMatrix",
		"feComponentTransfer",
		"feComposite",
		"feConvolveMatrix",
		"feDiffuseLighting",
		"feDisplacementMap",
		"feFlood",
		"feGaussianBlur",
		"feImage",
		"feMerge",
		"feMorphology",
		"feOffset",
		"feSpecularLighting",
		"feTile",
		"feTurbulence",
		"linearGradient",
		"radialGradient",
		"stop",
		"circle",
		"ellipse",
		"image",
		"line",
		"path",
		"polygon",
		"polyline",
		"rect",
		"text",
		"use",
		"textPath",
		"tspan",
		"foreignObject",
		"clipPath",
	],
	d7 = [...c7, ...u7],
	h7 = [
		"any-hover",
		"any-pointer",
		"aspect-ratio",
		"color",
		"color-gamut",
		"color-index",
		"device-aspect-ratio",
		"device-height",
		"device-width",
		"display-mode",
		"forced-colors",
		"grid",
		"height",
		"hover",
		"inverted-colors",
		"monochrome",
		"orientation",
		"overflow-block",
		"overflow-inline",
		"pointer",
		"prefers-color-scheme",
		"prefers-contrast",
		"prefers-reduced-motion",
		"prefers-reduced-transparency",
		"resolution",
		"scan",
		"scripting",
		"update",
		"width",
		"min-width",
		"max-width",
		"min-height",
		"max-height",
	]
		.sort()
		.reverse(),
	f7 = [
		"active",
		"any-link",
		"blank",
		"checked",
		"current",
		"default",
		"defined",
		"dir",
		"disabled",
		"drop",
		"empty",
		"enabled",
		"first",
		"first-child",
		"first-of-type",
		"fullscreen",
		"future",
		"focus",
		"focus-visible",
		"focus-within",
		"has",
		"host",
		"host-context",
		"hover",
		"indeterminate",
		"in-range",
		"invalid",
		"is",
		"lang",
		"last-child",
		"last-of-type",
		"left",
		"link",
		"local-link",
		"not",
		"nth-child",
		"nth-col",
		"nth-last-child",
		"nth-last-col",
		"nth-last-of-type",
		"nth-of-type",
		"only-child",
		"only-of-type",
		"optional",
		"out-of-range",
		"past",
		"placeholder-shown",
		"read-only",
		"read-write",
		"required",
		"right",
		"root",
		"scope",
		"target",
		"target-within",
		"user-invalid",
		"valid",
		"visited",
		"where",
	]
		.sort()
		.reverse(),
	m7 = [
		"after",
		"backdrop",
		"before",
		"cue",
		"cue-region",
		"first-letter",
		"first-line",
		"grammar-error",
		"marker",
		"part",
		"placeholder",
		"selection",
		"slotted",
		"spelling-error",
	]
		.sort()
		.reverse(),
	p7 = [
		"accent-color",
		"align-content",
		"align-items",
		"align-self",
		"alignment-baseline",
		"all",
		"anchor-name",
		"animation",
		"animation-composition",
		"animation-delay",
		"animation-direction",
		"animation-duration",
		"animation-fill-mode",
		"animation-iteration-count",
		"animation-name",
		"animation-play-state",
		"animation-range",
		"animation-range-end",
		"animation-range-start",
		"animation-timeline",
		"animation-timing-function",
		"appearance",
		"aspect-ratio",
		"backdrop-filter",
		"backface-visibility",
		"background",
		"background-attachment",
		"background-blend-mode",
		"background-clip",
		"background-color",
		"background-image",
		"background-origin",
		"background-position",
		"background-position-x",
		"background-position-y",
		"background-repeat",
		"background-size",
		"baseline-shift",
		"block-size",
		"border",
		"border-block",
		"border-block-color",
		"border-block-end",
		"border-block-end-color",
		"border-block-end-style",
		"border-block-end-width",
		"border-block-start",
		"border-block-start-color",
		"border-block-start-style",
		"border-block-start-width",
		"border-block-style",
		"border-block-width",
		"border-bottom",
		"border-bottom-color",
		"border-bottom-left-radius",
		"border-bottom-right-radius",
		"border-bottom-style",
		"border-bottom-width",
		"border-collapse",
		"border-color",
		"border-end-end-radius",
		"border-end-start-radius",
		"border-image",
		"border-image-outset",
		"border-image-repeat",
		"border-image-slice",
		"border-image-source",
		"border-image-width",
		"border-inline",
		"border-inline-color",
		"border-inline-end",
		"border-inline-end-color",
		"border-inline-end-style",
		"border-inline-end-width",
		"border-inline-start",
		"border-inline-start-color",
		"border-inline-start-style",
		"border-inline-start-width",
		"border-inline-style",
		"border-inline-width",
		"border-left",
		"border-left-color",
		"border-left-style",
		"border-left-width",
		"border-radius",
		"border-right",
		"border-right-color",
		"border-right-style",
		"border-right-width",
		"border-spacing",
		"border-start-end-radius",
		"border-start-start-radius",
		"border-style",
		"border-top",
		"border-top-color",
		"border-top-left-radius",
		"border-top-right-radius",
		"border-top-style",
		"border-top-width",
		"border-width",
		"bottom",
		"box-align",
		"box-decoration-break",
		"box-direction",
		"box-flex",
		"box-flex-group",
		"box-lines",
		"box-ordinal-group",
		"box-orient",
		"box-pack",
		"box-shadow",
		"box-sizing",
		"break-after",
		"break-before",
		"break-inside",
		"caption-side",
		"caret-color",
		"clear",
		"clip",
		"clip-path",
		"clip-rule",
		"color",
		"color-interpolation",
		"color-interpolation-filters",
		"color-profile",
		"color-rendering",
		"color-scheme",
		"column-count",
		"column-fill",
		"column-gap",
		"column-rule",
		"column-rule-color",
		"column-rule-style",
		"column-rule-width",
		"column-span",
		"column-width",
		"columns",
		"contain",
		"contain-intrinsic-block-size",
		"contain-intrinsic-height",
		"contain-intrinsic-inline-size",
		"contain-intrinsic-size",
		"contain-intrinsic-width",
		"container",
		"container-name",
		"container-type",
		"content",
		"content-visibility",
		"counter-increment",
		"counter-reset",
		"counter-set",
		"cue",
		"cue-after",
		"cue-before",
		"cursor",
		"cx",
		"cy",
		"direction",
		"display",
		"dominant-baseline",
		"empty-cells",
		"enable-background",
		"field-sizing",
		"fill",
		"fill-opacity",
		"fill-rule",
		"filter",
		"flex",
		"flex-basis",
		"flex-direction",
		"flex-flow",
		"flex-grow",
		"flex-shrink",
		"flex-wrap",
		"float",
		"flood-color",
		"flood-opacity",
		"flow",
		"font",
		"font-display",
		"font-family",
		"font-feature-settings",
		"font-kerning",
		"font-language-override",
		"font-optical-sizing",
		"font-palette",
		"font-size",
		"font-size-adjust",
		"font-smooth",
		"font-smoothing",
		"font-stretch",
		"font-style",
		"font-synthesis",
		"font-synthesis-position",
		"font-synthesis-small-caps",
		"font-synthesis-style",
		"font-synthesis-weight",
		"font-variant",
		"font-variant-alternates",
		"font-variant-caps",
		"font-variant-east-asian",
		"font-variant-emoji",
		"font-variant-ligatures",
		"font-variant-numeric",
		"font-variant-position",
		"font-variation-settings",
		"font-weight",
		"forced-color-adjust",
		"gap",
		"glyph-orientation-horizontal",
		"glyph-orientation-vertical",
		"grid",
		"grid-area",
		"grid-auto-columns",
		"grid-auto-flow",
		"grid-auto-rows",
		"grid-column",
		"grid-column-end",
		"grid-column-start",
		"grid-gap",
		"grid-row",
		"grid-row-end",
		"grid-row-start",
		"grid-template",
		"grid-template-areas",
		"grid-template-columns",
		"grid-template-rows",
		"hanging-punctuation",
		"height",
		"hyphenate-character",
		"hyphenate-limit-chars",
		"hyphens",
		"icon",
		"image-orientation",
		"image-rendering",
		"image-resolution",
		"ime-mode",
		"initial-letter",
		"initial-letter-align",
		"inline-size",
		"inset",
		"inset-area",
		"inset-block",
		"inset-block-end",
		"inset-block-start",
		"inset-inline",
		"inset-inline-end",
		"inset-inline-start",
		"isolation",
		"justify-content",
		"justify-items",
		"justify-self",
		"kerning",
		"left",
		"letter-spacing",
		"lighting-color",
		"line-break",
		"line-height",
		"line-height-step",
		"list-style",
		"list-style-image",
		"list-style-position",
		"list-style-type",
		"margin",
		"margin-block",
		"margin-block-end",
		"margin-block-start",
		"margin-bottom",
		"margin-inline",
		"margin-inline-end",
		"margin-inline-start",
		"margin-left",
		"margin-right",
		"margin-top",
		"margin-trim",
		"marker",
		"marker-end",
		"marker-mid",
		"marker-start",
		"marks",
		"mask",
		"mask-border",
		"mask-border-mode",
		"mask-border-outset",
		"mask-border-repeat",
		"mask-border-slice",
		"mask-border-source",
		"mask-border-width",
		"mask-clip",
		"mask-composite",
		"mask-image",
		"mask-mode",
		"mask-origin",
		"mask-position",
		"mask-repeat",
		"mask-size",
		"mask-type",
		"masonry-auto-flow",
		"math-depth",
		"math-shift",
		"math-style",
		"max-block-size",
		"max-height",
		"max-inline-size",
		"max-width",
		"min-block-size",
		"min-height",
		"min-inline-size",
		"min-width",
		"mix-blend-mode",
		"nav-down",
		"nav-index",
		"nav-left",
		"nav-right",
		"nav-up",
		"none",
		"normal",
		"object-fit",
		"object-position",
		"offset",
		"offset-anchor",
		"offset-distance",
		"offset-path",
		"offset-position",
		"offset-rotate",
		"opacity",
		"order",
		"orphans",
		"outline",
		"outline-color",
		"outline-offset",
		"outline-style",
		"outline-width",
		"overflow",
		"overflow-anchor",
		"overflow-block",
		"overflow-clip-margin",
		"overflow-inline",
		"overflow-wrap",
		"overflow-x",
		"overflow-y",
		"overlay",
		"overscroll-behavior",
		"overscroll-behavior-block",
		"overscroll-behavior-inline",
		"overscroll-behavior-x",
		"overscroll-behavior-y",
		"padding",
		"padding-block",
		"padding-block-end",
		"padding-block-start",
		"padding-bottom",
		"padding-inline",
		"padding-inline-end",
		"padding-inline-start",
		"padding-left",
		"padding-right",
		"padding-top",
		"page",
		"page-break-after",
		"page-break-before",
		"page-break-inside",
		"paint-order",
		"pause",
		"pause-after",
		"pause-before",
		"perspective",
		"perspective-origin",
		"place-content",
		"place-items",
		"place-self",
		"pointer-events",
		"position",
		"position-anchor",
		"position-visibility",
		"print-color-adjust",
		"quotes",
		"r",
		"resize",
		"rest",
		"rest-after",
		"rest-before",
		"right",
		"rotate",
		"row-gap",
		"ruby-align",
		"ruby-position",
		"scale",
		"scroll-behavior",
		"scroll-margin",
		"scroll-margin-block",
		"scroll-margin-block-end",
		"scroll-margin-block-start",
		"scroll-margin-bottom",
		"scroll-margin-inline",
		"scroll-margin-inline-end",
		"scroll-margin-inline-start",
		"scroll-margin-left",
		"scroll-margin-right",
		"scroll-margin-top",
		"scroll-padding",
		"scroll-padding-block",
		"scroll-padding-block-end",
		"scroll-padding-block-start",
		"scroll-padding-bottom",
		"scroll-padding-inline",
		"scroll-padding-inline-end",
		"scroll-padding-inline-start",
		"scroll-padding-left",
		"scroll-padding-right",
		"scroll-padding-top",
		"scroll-snap-align",
		"scroll-snap-stop",
		"scroll-snap-type",
		"scroll-timeline",
		"scroll-timeline-axis",
		"scroll-timeline-name",
		"scrollbar-color",
		"scrollbar-gutter",
		"scrollbar-width",
		"shape-image-threshold",
		"shape-margin",
		"shape-outside",
		"shape-rendering",
		"speak",
		"speak-as",
		"src",
		"stop-color",
		"stop-opacity",
		"stroke",
		"stroke-dasharray",
		"stroke-dashoffset",
		"stroke-linecap",
		"stroke-linejoin",
		"stroke-miterlimit",
		"stroke-opacity",
		"stroke-width",
		"tab-size",
		"table-layout",
		"text-align",
		"text-align-all",
		"text-align-last",
		"text-anchor",
		"text-combine-upright",
		"text-decoration",
		"text-decoration-color",
		"text-decoration-line",
		"text-decoration-skip",
		"text-decoration-skip-ink",
		"text-decoration-style",
		"text-decoration-thickness",
		"text-emphasis",
		"text-emphasis-color",
		"text-emphasis-position",
		"text-emphasis-style",
		"text-indent",
		"text-justify",
		"text-orientation",
		"text-overflow",
		"text-rendering",
		"text-shadow",
		"text-size-adjust",
		"text-transform",
		"text-underline-offset",
		"text-underline-position",
		"text-wrap",
		"text-wrap-mode",
		"text-wrap-style",
		"timeline-scope",
		"top",
		"touch-action",
		"transform",
		"transform-box",
		"transform-origin",
		"transform-style",
		"transition",
		"transition-behavior",
		"transition-delay",
		"transition-duration",
		"transition-property",
		"transition-timing-function",
		"translate",
		"unicode-bidi",
		"user-modify",
		"user-select",
		"vector-effect",
		"vertical-align",
		"view-timeline",
		"view-timeline-axis",
		"view-timeline-inset",
		"view-timeline-name",
		"view-transition-name",
		"visibility",
		"voice-balance",
		"voice-duration",
		"voice-family",
		"voice-pitch",
		"voice-range",
		"voice-rate",
		"voice-stress",
		"voice-volume",
		"white-space",
		"white-space-collapse",
		"widows",
		"width",
		"will-change",
		"word-break",
		"word-spacing",
		"word-wrap",
		"writing-mode",
		"x",
		"y",
		"z-index",
		"zoom",
	]
		.sort()
		.reverse();
function g7(r) {
	const e = r.regex,
		t = l7(r),
		n = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ },
		a = "and or not only",
		i = /@-?\w[\w]*(-\w+)*/,
		o = "[a-zA-Z-][a-zA-Z0-9_-]*",
		s = [r.APOS_STRING_MODE, r.QUOTE_STRING_MODE];
	return {
		name: "CSS",
		case_insensitive: !0,
		illegal: /[=|'\$]/,
		keywords: { keyframePosition: "from to" },
		classNameAliases: { keyframePosition: "selector-tag" },
		contains: [
			t.BLOCK_COMMENT,
			n,
			t.CSS_NUMBER_MODE,
			{ className: "selector-id", begin: /#[A-Za-z0-9_-]+/, relevance: 0 },
			{ className: "selector-class", begin: "\\." + o, relevance: 0 },
			t.ATTRIBUTE_SELECTOR_MODE,
			{
				className: "selector-pseudo",
				variants: [{ begin: ":(" + f7.join("|") + ")" }, { begin: ":(:)?(" + m7.join("|") + ")" }],
			},
			t.CSS_VARIABLE,
			{ className: "attribute", begin: "\\b(" + p7.join("|") + ")\\b" },
			{
				begin: /:/,
				end: /[;}{]/,
				contains: [
					t.BLOCK_COMMENT,
					t.HEXCOLOR,
					t.IMPORTANT,
					t.CSS_NUMBER_MODE,
					...s,
					{
						begin: /(url|data-uri)\(/,
						end: /\)/,
						relevance: 0,
						keywords: { built_in: "url data-uri" },
						contains: [
							...s,
							{ className: "string", begin: /[^)]/, endsWithParent: !0, excludeEnd: !0 },
						],
					},
					t.FUNCTION_DISPATCH,
				],
			},
			{
				begin: e.lookahead(/@/),
				end: "[{;]",
				relevance: 0,
				illegal: /:/,
				contains: [
					{ className: "keyword", begin: i },
					{
						begin: /\s/,
						endsWithParent: !0,
						excludeEnd: !0,
						relevance: 0,
						keywords: { $pattern: /[a-z-]+/, keyword: a, attribute: h7.join(" ") },
						contains: [{ begin: /[a-z-]+(?=:)/, className: "attribute" }, ...s, t.CSS_NUMBER_MODE],
					},
				],
			},
			{ className: "selector-tag", begin: "\\b(" + d7.join("|") + ")\\b" },
		],
	};
}
const v7 = (r) => ({
		IMPORTANT: { scope: "meta", begin: "!important" },
		BLOCK_COMMENT: r.C_BLOCK_COMMENT_MODE,
		HEXCOLOR: { scope: "number", begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/ },
		FUNCTION_DISPATCH: { className: "built_in", begin: /[\w-]+(?=\()/ },
		ATTRIBUTE_SELECTOR_MODE: {
			scope: "selector-attr",
			begin: /\[/,
			end: /\]/,
			illegal: "$",
			contains: [r.APOS_STRING_MODE, r.QUOTE_STRING_MODE],
		},
		CSS_NUMBER_MODE: {
			scope: "number",
			begin:
				r.NUMBER_RE +
				"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
			relevance: 0,
		},
		CSS_VARIABLE: { className: "attr", begin: /--[A-Za-z_][A-Za-z0-9_-]*/ },
	}),
	b7 = [
		"a",
		"abbr",
		"address",
		"article",
		"aside",
		"audio",
		"b",
		"blockquote",
		"body",
		"button",
		"canvas",
		"caption",
		"cite",
		"code",
		"dd",
		"del",
		"details",
		"dfn",
		"div",
		"dl",
		"dt",
		"em",
		"fieldset",
		"figcaption",
		"figure",
		"footer",
		"form",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"header",
		"hgroup",
		"html",
		"i",
		"iframe",
		"img",
		"input",
		"ins",
		"kbd",
		"label",
		"legend",
		"li",
		"main",
		"mark",
		"menu",
		"nav",
		"object",
		"ol",
		"optgroup",
		"option",
		"p",
		"picture",
		"q",
		"quote",
		"samp",
		"section",
		"select",
		"source",
		"span",
		"strong",
		"summary",
		"sup",
		"table",
		"tbody",
		"td",
		"textarea",
		"tfoot",
		"th",
		"thead",
		"time",
		"tr",
		"ul",
		"var",
		"video",
	],
	y7 = [
		"defs",
		"g",
		"marker",
		"mask",
		"pattern",
		"svg",
		"switch",
		"symbol",
		"feBlend",
		"feColorMatrix",
		"feComponentTransfer",
		"feComposite",
		"feConvolveMatrix",
		"feDiffuseLighting",
		"feDisplacementMap",
		"feFlood",
		"feGaussianBlur",
		"feImage",
		"feMerge",
		"feMorphology",
		"feOffset",
		"feSpecularLighting",
		"feTile",
		"feTurbulence",
		"linearGradient",
		"radialGradient",
		"stop",
		"circle",
		"ellipse",
		"image",
		"line",
		"path",
		"polygon",
		"polyline",
		"rect",
		"text",
		"use",
		"textPath",
		"tspan",
		"foreignObject",
		"clipPath",
	],
	x7 = [...b7, ...y7],
	w7 = [
		"any-hover",
		"any-pointer",
		"aspect-ratio",
		"color",
		"color-gamut",
		"color-index",
		"device-aspect-ratio",
		"device-height",
		"device-width",
		"display-mode",
		"forced-colors",
		"grid",
		"height",
		"hover",
		"inverted-colors",
		"monochrome",
		"orientation",
		"overflow-block",
		"overflow-inline",
		"pointer",
		"prefers-color-scheme",
		"prefers-contrast",
		"prefers-reduced-motion",
		"prefers-reduced-transparency",
		"resolution",
		"scan",
		"scripting",
		"update",
		"width",
		"min-width",
		"max-width",
		"min-height",
		"max-height",
	]
		.sort()
		.reverse(),
	_7 = [
		"active",
		"any-link",
		"blank",
		"checked",
		"current",
		"default",
		"defined",
		"dir",
		"disabled",
		"drop",
		"empty",
		"enabled",
		"first",
		"first-child",
		"first-of-type",
		"fullscreen",
		"future",
		"focus",
		"focus-visible",
		"focus-within",
		"has",
		"host",
		"host-context",
		"hover",
		"indeterminate",
		"in-range",
		"invalid",
		"is",
		"lang",
		"last-child",
		"last-of-type",
		"left",
		"link",
		"local-link",
		"not",
		"nth-child",
		"nth-col",
		"nth-last-child",
		"nth-last-col",
		"nth-last-of-type",
		"nth-of-type",
		"only-child",
		"only-of-type",
		"optional",
		"out-of-range",
		"past",
		"placeholder-shown",
		"read-only",
		"read-write",
		"required",
		"right",
		"root",
		"scope",
		"target",
		"target-within",
		"user-invalid",
		"valid",
		"visited",
		"where",
	]
		.sort()
		.reverse(),
	k7 = [
		"after",
		"backdrop",
		"before",
		"cue",
		"cue-region",
		"first-letter",
		"first-line",
		"grammar-error",
		"marker",
		"part",
		"placeholder",
		"selection",
		"slotted",
		"spelling-error",
	]
		.sort()
		.reverse(),
	S7 = [
		"accent-color",
		"align-content",
		"align-items",
		"align-self",
		"alignment-baseline",
		"all",
		"anchor-name",
		"animation",
		"animation-composition",
		"animation-delay",
		"animation-direction",
		"animation-duration",
		"animation-fill-mode",
		"animation-iteration-count",
		"animation-name",
		"animation-play-state",
		"animation-range",
		"animation-range-end",
		"animation-range-start",
		"animation-timeline",
		"animation-timing-function",
		"appearance",
		"aspect-ratio",
		"backdrop-filter",
		"backface-visibility",
		"background",
		"background-attachment",
		"background-blend-mode",
		"background-clip",
		"background-color",
		"background-image",
		"background-origin",
		"background-position",
		"background-position-x",
		"background-position-y",
		"background-repeat",
		"background-size",
		"baseline-shift",
		"block-size",
		"border",
		"border-block",
		"border-block-color",
		"border-block-end",
		"border-block-end-color",
		"border-block-end-style",
		"border-block-end-width",
		"border-block-start",
		"border-block-start-color",
		"border-block-start-style",
		"border-block-start-width",
		"border-block-style",
		"border-block-width",
		"border-bottom",
		"border-bottom-color",
		"border-bottom-left-radius",
		"border-bottom-right-radius",
		"border-bottom-style",
		"border-bottom-width",
		"border-collapse",
		"border-color",
		"border-end-end-radius",
		"border-end-start-radius",
		"border-image",
		"border-image-outset",
		"border-image-repeat",
		"border-image-slice",
		"border-image-source",
		"border-image-width",
		"border-inline",
		"border-inline-color",
		"border-inline-end",
		"border-inline-end-color",
		"border-inline-end-style",
		"border-inline-end-width",
		"border-inline-start",
		"border-inline-start-color",
		"border-inline-start-style",
		"border-inline-start-width",
		"border-inline-style",
		"border-inline-width",
		"border-left",
		"border-left-color",
		"border-left-style",
		"border-left-width",
		"border-radius",
		"border-right",
		"border-right-color",
		"border-right-style",
		"border-right-width",
		"border-spacing",
		"border-start-end-radius",
		"border-start-start-radius",
		"border-style",
		"border-top",
		"border-top-color",
		"border-top-left-radius",
		"border-top-right-radius",
		"border-top-style",
		"border-top-width",
		"border-width",
		"bottom",
		"box-align",
		"box-decoration-break",
		"box-direction",
		"box-flex",
		"box-flex-group",
		"box-lines",
		"box-ordinal-group",
		"box-orient",
		"box-pack",
		"box-shadow",
		"box-sizing",
		"break-after",
		"break-before",
		"break-inside",
		"caption-side",
		"caret-color",
		"clear",
		"clip",
		"clip-path",
		"clip-rule",
		"color",
		"color-interpolation",
		"color-interpolation-filters",
		"color-profile",
		"color-rendering",
		"color-scheme",
		"column-count",
		"column-fill",
		"column-gap",
		"column-rule",
		"column-rule-color",
		"column-rule-style",
		"column-rule-width",
		"column-span",
		"column-width",
		"columns",
		"contain",
		"contain-intrinsic-block-size",
		"contain-intrinsic-height",
		"contain-intrinsic-inline-size",
		"contain-intrinsic-size",
		"contain-intrinsic-width",
		"container",
		"container-name",
		"container-type",
		"content",
		"content-visibility",
		"counter-increment",
		"counter-reset",
		"counter-set",
		"cue",
		"cue-after",
		"cue-before",
		"cursor",
		"cx",
		"cy",
		"direction",
		"display",
		"dominant-baseline",
		"empty-cells",
		"enable-background",
		"field-sizing",
		"fill",
		"fill-opacity",
		"fill-rule",
		"filter",
		"flex",
		"flex-basis",
		"flex-direction",
		"flex-flow",
		"flex-grow",
		"flex-shrink",
		"flex-wrap",
		"float",
		"flood-color",
		"flood-opacity",
		"flow",
		"font",
		"font-display",
		"font-family",
		"font-feature-settings",
		"font-kerning",
		"font-language-override",
		"font-optical-sizing",
		"font-palette",
		"font-size",
		"font-size-adjust",
		"font-smooth",
		"font-smoothing",
		"font-stretch",
		"font-style",
		"font-synthesis",
		"font-synthesis-position",
		"font-synthesis-small-caps",
		"font-synthesis-style",
		"font-synthesis-weight",
		"font-variant",
		"font-variant-alternates",
		"font-variant-caps",
		"font-variant-east-asian",
		"font-variant-emoji",
		"font-variant-ligatures",
		"font-variant-numeric",
		"font-variant-position",
		"font-variation-settings",
		"font-weight",
		"forced-color-adjust",
		"gap",
		"glyph-orientation-horizontal",
		"glyph-orientation-vertical",
		"grid",
		"grid-area",
		"grid-auto-columns",
		"grid-auto-flow",
		"grid-auto-rows",
		"grid-column",
		"grid-column-end",
		"grid-column-start",
		"grid-gap",
		"grid-row",
		"grid-row-end",
		"grid-row-start",
		"grid-template",
		"grid-template-areas",
		"grid-template-columns",
		"grid-template-rows",
		"hanging-punctuation",
		"height",
		"hyphenate-character",
		"hyphenate-limit-chars",
		"hyphens",
		"icon",
		"image-orientation",
		"image-rendering",
		"image-resolution",
		"ime-mode",
		"initial-letter",
		"initial-letter-align",
		"inline-size",
		"inset",
		"inset-area",
		"inset-block",
		"inset-block-end",
		"inset-block-start",
		"inset-inline",
		"inset-inline-end",
		"inset-inline-start",
		"isolation",
		"justify-content",
		"justify-items",
		"justify-self",
		"kerning",
		"left",
		"letter-spacing",
		"lighting-color",
		"line-break",
		"line-height",
		"line-height-step",
		"list-style",
		"list-style-image",
		"list-style-position",
		"list-style-type",
		"margin",
		"margin-block",
		"margin-block-end",
		"margin-block-start",
		"margin-bottom",
		"margin-inline",
		"margin-inline-end",
		"margin-inline-start",
		"margin-left",
		"margin-right",
		"margin-top",
		"margin-trim",
		"marker",
		"marker-end",
		"marker-mid",
		"marker-start",
		"marks",
		"mask",
		"mask-border",
		"mask-border-mode",
		"mask-border-outset",
		"mask-border-repeat",
		"mask-border-slice",
		"mask-border-source",
		"mask-border-width",
		"mask-clip",
		"mask-composite",
		"mask-image",
		"mask-mode",
		"mask-origin",
		"mask-position",
		"mask-repeat",
		"mask-size",
		"mask-type",
		"masonry-auto-flow",
		"math-depth",
		"math-shift",
		"math-style",
		"max-block-size",
		"max-height",
		"max-inline-size",
		"max-width",
		"min-block-size",
		"min-height",
		"min-inline-size",
		"min-width",
		"mix-blend-mode",
		"nav-down",
		"nav-index",
		"nav-left",
		"nav-right",
		"nav-up",
		"none",
		"normal",
		"object-fit",
		"object-position",
		"offset",
		"offset-anchor",
		"offset-distance",
		"offset-path",
		"offset-position",
		"offset-rotate",
		"opacity",
		"order",
		"orphans",
		"outline",
		"outline-color",
		"outline-offset",
		"outline-style",
		"outline-width",
		"overflow",
		"overflow-anchor",
		"overflow-block",
		"overflow-clip-margin",
		"overflow-inline",
		"overflow-wrap",
		"overflow-x",
		"overflow-y",
		"overlay",
		"overscroll-behavior",
		"overscroll-behavior-block",
		"overscroll-behavior-inline",
		"overscroll-behavior-x",
		"overscroll-behavior-y",
		"padding",
		"padding-block",
		"padding-block-end",
		"padding-block-start",
		"padding-bottom",
		"padding-inline",
		"padding-inline-end",
		"padding-inline-start",
		"padding-left",
		"padding-right",
		"padding-top",
		"page",
		"page-break-after",
		"page-break-before",
		"page-break-inside",
		"paint-order",
		"pause",
		"pause-after",
		"pause-before",
		"perspective",
		"perspective-origin",
		"place-content",
		"place-items",
		"place-self",
		"pointer-events",
		"position",
		"position-anchor",
		"position-visibility",
		"print-color-adjust",
		"quotes",
		"r",
		"resize",
		"rest",
		"rest-after",
		"rest-before",
		"right",
		"rotate",
		"row-gap",
		"ruby-align",
		"ruby-position",
		"scale",
		"scroll-behavior",
		"scroll-margin",
		"scroll-margin-block",
		"scroll-margin-block-end",
		"scroll-margin-block-start",
		"scroll-margin-bottom",
		"scroll-margin-inline",
		"scroll-margin-inline-end",
		"scroll-margin-inline-start",
		"scroll-margin-left",
		"scroll-margin-right",
		"scroll-margin-top",
		"scroll-padding",
		"scroll-padding-block",
		"scroll-padding-block-end",
		"scroll-padding-block-start",
		"scroll-padding-bottom",
		"scroll-padding-inline",
		"scroll-padding-inline-end",
		"scroll-padding-inline-start",
		"scroll-padding-left",
		"scroll-padding-right",
		"scroll-padding-top",
		"scroll-snap-align",
		"scroll-snap-stop",
		"scroll-snap-type",
		"scroll-timeline",
		"scroll-timeline-axis",
		"scroll-timeline-name",
		"scrollbar-color",
		"scrollbar-gutter",
		"scrollbar-width",
		"shape-image-threshold",
		"shape-margin",
		"shape-outside",
		"shape-rendering",
		"speak",
		"speak-as",
		"src",
		"stop-color",
		"stop-opacity",
		"stroke",
		"stroke-dasharray",
		"stroke-dashoffset",
		"stroke-linecap",
		"stroke-linejoin",
		"stroke-miterlimit",
		"stroke-opacity",
		"stroke-width",
		"tab-size",
		"table-layout",
		"text-align",
		"text-align-all",
		"text-align-last",
		"text-anchor",
		"text-combine-upright",
		"text-decoration",
		"text-decoration-color",
		"text-decoration-line",
		"text-decoration-skip",
		"text-decoration-skip-ink",
		"text-decoration-style",
		"text-decoration-thickness",
		"text-emphasis",
		"text-emphasis-color",
		"text-emphasis-position",
		"text-emphasis-style",
		"text-indent",
		"text-justify",
		"text-orientation",
		"text-overflow",
		"text-rendering",
		"text-shadow",
		"text-size-adjust",
		"text-transform",
		"text-underline-offset",
		"text-underline-position",
		"text-wrap",
		"text-wrap-mode",
		"text-wrap-style",
		"timeline-scope",
		"top",
		"touch-action",
		"transform",
		"transform-box",
		"transform-origin",
		"transform-style",
		"transition",
		"transition-behavior",
		"transition-delay",
		"transition-duration",
		"transition-property",
		"transition-timing-function",
		"translate",
		"unicode-bidi",
		"user-modify",
		"user-select",
		"vector-effect",
		"vertical-align",
		"view-timeline",
		"view-timeline-axis",
		"view-timeline-inset",
		"view-timeline-name",
		"view-transition-name",
		"visibility",
		"voice-balance",
		"voice-duration",
		"voice-family",
		"voice-pitch",
		"voice-range",
		"voice-rate",
		"voice-stress",
		"voice-volume",
		"white-space",
		"white-space-collapse",
		"widows",
		"width",
		"will-change",
		"word-break",
		"word-spacing",
		"word-wrap",
		"writing-mode",
		"x",
		"y",
		"z-index",
		"zoom",
	]
		.sort()
		.reverse();
function E7(r) {
	const e = v7(r),
		t = k7,
		n = _7,
		a = "@[a-z-]+",
		i = "and or not only",
		s = { className: "variable", begin: "(\\$" + "[a-zA-Z-][a-zA-Z0-9_-]*" + ")\\b", relevance: 0 };
	return {
		name: "SCSS",
		case_insensitive: !0,
		illegal: "[=/|']",
		contains: [
			r.C_LINE_COMMENT_MODE,
			r.C_BLOCK_COMMENT_MODE,
			e.CSS_NUMBER_MODE,
			{ className: "selector-id", begin: "#[A-Za-z0-9_-]+", relevance: 0 },
			{ className: "selector-class", begin: "\\.[A-Za-z0-9_-]+", relevance: 0 },
			e.ATTRIBUTE_SELECTOR_MODE,
			{ className: "selector-tag", begin: "\\b(" + x7.join("|") + ")\\b", relevance: 0 },
			{ className: "selector-pseudo", begin: ":(" + n.join("|") + ")" },
			{ className: "selector-pseudo", begin: ":(:)?(" + t.join("|") + ")" },
			s,
			{ begin: /\(/, end: /\)/, contains: [e.CSS_NUMBER_MODE] },
			e.CSS_VARIABLE,
			{ className: "attribute", begin: "\\b(" + S7.join("|") + ")\\b" },
			{
				begin:
					"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b",
			},
			{
				begin: /:/,
				end: /[;}{]/,
				relevance: 0,
				contains: [
					e.BLOCK_COMMENT,
					s,
					e.HEXCOLOR,
					e.CSS_NUMBER_MODE,
					r.QUOTE_STRING_MODE,
					r.APOS_STRING_MODE,
					e.IMPORTANT,
					e.FUNCTION_DISPATCH,
				],
			},
			{ begin: "@(page|font-face)", keywords: { $pattern: a, keyword: "@page @font-face" } },
			{
				begin: "@",
				end: "[{;]",
				returnBegin: !0,
				keywords: { $pattern: /[a-z-]+/, keyword: i, attribute: w7.join(" ") },
				contains: [
					{ begin: a, className: "keyword" },
					{ begin: /[a-z-]+(?=:)/, className: "attribute" },
					s,
					r.QUOTE_STRING_MODE,
					r.APOS_STRING_MODE,
					e.HEXCOLOR,
					e.CSS_NUMBER_MODE,
				],
			},
			e.FUNCTION_DISPATCH,
		],
	};
}
function T7(r) {
	const e = r.regex,
		t = { begin: /<\/?[A-Za-z_]/, end: ">", subLanguage: "xml", relevance: 0 },
		n = { begin: "^[-\\*]{3,}", end: "$" },
		a = {
			className: "code",
			variants: [
				{ begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
				{ begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
				{ begin: "```", end: "```+[ ]*$" },
				{ begin: "~~~", end: "~~~+[ ]*$" },
				{ begin: "`.+?`" },
				{
					begin: "(?=^( {4}|\\t))",
					contains: [{ begin: "^( {4}|\\t)", end: "(\\n)$" }],
					relevance: 0,
				},
			],
		},
		i = {
			className: "bullet",
			begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
			end: "\\s+",
			excludeEnd: !0,
		},
		o = {
			begin: /^\[[^\n]+\]:/,
			returnBegin: !0,
			contains: [
				{ className: "symbol", begin: /\[/, end: /\]/, excludeBegin: !0, excludeEnd: !0 },
				{ className: "link", begin: /:\s*/, end: /$/, excludeBegin: !0 },
			],
		},
		s = /[A-Za-z][A-Za-z0-9+.-]*/,
		l = {
			variants: [
				{ begin: /\[.+?\]\[.*?\]/, relevance: 0 },
				{ begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/, relevance: 2 },
				{ begin: e.concat(/\[.+?\]\(/, s, /:\/\/.*?\)/), relevance: 2 },
				{ begin: /\[.+?\]\([./?&#].*?\)/, relevance: 1 },
				{ begin: /\[.*?\]\(.*?\)/, relevance: 0 },
			],
			returnBegin: !0,
			contains: [
				{ match: /\[(?=\])/ },
				{
					className: "string",
					relevance: 0,
					begin: "\\[",
					end: "\\]",
					excludeBegin: !0,
					returnEnd: !0,
				},
				{
					className: "link",
					relevance: 0,
					begin: "\\]\\(",
					end: "\\)",
					excludeBegin: !0,
					excludeEnd: !0,
				},
				{
					className: "symbol",
					relevance: 0,
					begin: "\\]\\[",
					end: "\\]",
					excludeBegin: !0,
					excludeEnd: !0,
				},
			],
		},
		u = {
			className: "strong",
			contains: [],
			variants: [
				{ begin: /_{2}(?!\s)/, end: /_{2}/ },
				{ begin: /\*{2}(?!\s)/, end: /\*{2}/ },
			],
		},
		h = {
			className: "emphasis",
			contains: [],
			variants: [
				{ begin: /\*(?![*\s])/, end: /\*/ },
				{ begin: /_(?![_\s])/, end: /_/, relevance: 0 },
			],
		},
		f = r.inherit(u, { contains: [] }),
		p = r.inherit(h, { contains: [] });
	u.contains.push(p), h.contains.push(f);
	let g = [t, l];
	return (
		[u, h, f, p].forEach((k) => {
			k.contains = k.contains.concat(g);
		}),
		(g = g.concat(u, h)),
		{
			name: "Markdown",
			aliases: ["md", "mkdown", "mkd"],
			contains: [
				{
					className: "section",
					variants: [
						{ begin: "^#{1,6}", end: "$", contains: g },
						{
							begin: "(?=^.+?\\n[=-]{2,}$)",
							contains: [{ begin: "^[=-]*$" }, { begin: "^", end: "\\n", contains: g }],
						},
					],
				},
				t,
				i,
				u,
				h,
				{ className: "quote", begin: "^>\\s+", contains: g, end: "$" },
				a,
				n,
				l,
				o,
				{ scope: "literal", match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/ },
			],
		}
	);
}
function A7(r) {
	const e = "true false yes no null",
		t = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
		n = {
			className: "attr",
			variants: [
				{ begin: /[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/ },
				{ begin: /"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/ },
				{ begin: /'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/ },
			],
		},
		a = {
			className: "template-variable",
			variants: [
				{ begin: /\{\{/, end: /\}\}/ },
				{ begin: /%\{/, end: /\}/ },
			],
		},
		i = {
			className: "string",
			relevance: 0,
			begin: /'/,
			end: /'/,
			contains: [{ match: /''/, scope: "char.escape", relevance: 0 }],
		},
		o = {
			className: "string",
			relevance: 0,
			variants: [{ begin: /"/, end: /"/ }, { begin: /\S+/ }],
			contains: [r.BACKSLASH_ESCAPE, a],
		},
		s = r.inherit(o, {
			variants: [
				{ begin: /'/, end: /'/, contains: [{ begin: /''/, relevance: 0 }] },
				{ begin: /"/, end: /"/ },
				{ begin: /[^\s,{}[\]]+/ },
			],
		}),
		p = {
			className: "number",
			begin:
				"\\b" +
				"[0-9]{4}(-[0-9][0-9]){0,2}" +
				"([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?" +
				"(\\.[0-9]*)?" +
				"([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?" +
				"\\b",
		},
		g = { end: ",", endsWithParent: !0, excludeEnd: !0, keywords: e, relevance: 0 },
		y = { begin: /\{/, end: /\}/, contains: [g], illegal: "\\n", relevance: 0 },
		x = { begin: "\\[", end: "\\]", contains: [g], illegal: "\\n", relevance: 0 },
		_ = [
			n,
			{ className: "meta", begin: "^---\\s*$", relevance: 10 },
			{
				className: "string",
				begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*",
			},
			{
				begin: "<%[%=-]?",
				end: "[%-]?%>",
				subLanguage: "ruby",
				excludeBegin: !0,
				excludeEnd: !0,
				relevance: 0,
			},
			{ className: "type", begin: "!\\w+!" + t },
			{ className: "type", begin: "!<" + t + ">" },
			{ className: "type", begin: "!" + t },
			{ className: "type", begin: "!!" + t },
			{ className: "meta", begin: "&" + r.UNDERSCORE_IDENT_RE + "$" },
			{ className: "meta", begin: "\\*" + r.UNDERSCORE_IDENT_RE + "$" },
			{ className: "bullet", begin: "-(?=[ ]|$)", relevance: 0 },
			r.HASH_COMMENT_MODE,
			{ beginKeywords: e, keywords: { literal: e } },
			p,
			{ className: "number", begin: r.C_NUMBER_RE + "\\b", relevance: 0 },
			y,
			x,
			i,
			o,
		],
		k = [..._];
	return (
		k.pop(),
		k.push(s),
		(g.contains = k),
		{ name: "YAML", case_insensitive: !0, aliases: ["yml"], contains: _ }
	);
}
function M7(r) {
	const e = r.regex,
		t = r.COMMENT("--", "$"),
		n = { scope: "string", variants: [{ begin: /'/, end: /'/, contains: [{ match: /''/ }] }] },
		a = { begin: /"/, end: /"/, contains: [{ match: /""/ }] },
		i = ["true", "false", "unknown"],
		o = ["double precision", "large object", "with timezone", "without timezone"],
		s = [
			"bigint",
			"binary",
			"blob",
			"boolean",
			"char",
			"character",
			"clob",
			"date",
			"dec",
			"decfloat",
			"decimal",
			"float",
			"int",
			"integer",
			"interval",
			"nchar",
			"nclob",
			"national",
			"numeric",
			"real",
			"row",
			"smallint",
			"time",
			"timestamp",
			"varchar",
			"varying",
			"varbinary",
		],
		l = ["add", "asc", "collation", "desc", "final", "first", "last", "view"],
		u = [
			"abs",
			"acos",
			"all",
			"allocate",
			"alter",
			"and",
			"any",
			"are",
			"array",
			"array_agg",
			"array_max_cardinality",
			"as",
			"asensitive",
			"asin",
			"asymmetric",
			"at",
			"atan",
			"atomic",
			"authorization",
			"avg",
			"begin",
			"begin_frame",
			"begin_partition",
			"between",
			"bigint",
			"binary",
			"blob",
			"boolean",
			"both",
			"by",
			"call",
			"called",
			"cardinality",
			"cascaded",
			"case",
			"cast",
			"ceil",
			"ceiling",
			"char",
			"char_length",
			"character",
			"character_length",
			"check",
			"classifier",
			"clob",
			"close",
			"coalesce",
			"collate",
			"collect",
			"column",
			"commit",
			"condition",
			"connect",
			"constraint",
			"contains",
			"convert",
			"copy",
			"corr",
			"corresponding",
			"cos",
			"cosh",
			"count",
			"covar_pop",
			"covar_samp",
			"create",
			"cross",
			"cube",
			"cume_dist",
			"current",
			"current_catalog",
			"current_date",
			"current_default_transform_group",
			"current_path",
			"current_role",
			"current_row",
			"current_schema",
			"current_time",
			"current_timestamp",
			"current_path",
			"current_role",
			"current_transform_group_for_type",
			"current_user",
			"cursor",
			"cycle",
			"date",
			"day",
			"deallocate",
			"dec",
			"decimal",
			"decfloat",
			"declare",
			"default",
			"define",
			"delete",
			"dense_rank",
			"deref",
			"describe",
			"deterministic",
			"disconnect",
			"distinct",
			"double",
			"drop",
			"dynamic",
			"each",
			"element",
			"else",
			"empty",
			"end",
			"end_frame",
			"end_partition",
			"end-exec",
			"equals",
			"escape",
			"every",
			"except",
			"exec",
			"execute",
			"exists",
			"exp",
			"external",
			"extract",
			"false",
			"fetch",
			"filter",
			"first_value",
			"float",
			"floor",
			"for",
			"foreign",
			"frame_row",
			"free",
			"from",
			"full",
			"function",
			"fusion",
			"get",
			"global",
			"grant",
			"group",
			"grouping",
			"groups",
			"having",
			"hold",
			"hour",
			"identity",
			"in",
			"indicator",
			"initial",
			"inner",
			"inout",
			"insensitive",
			"insert",
			"int",
			"integer",
			"intersect",
			"intersection",
			"interval",
			"into",
			"is",
			"join",
			"json_array",
			"json_arrayagg",
			"json_exists",
			"json_object",
			"json_objectagg",
			"json_query",
			"json_table",
			"json_table_primitive",
			"json_value",
			"lag",
			"language",
			"large",
			"last_value",
			"lateral",
			"lead",
			"leading",
			"left",
			"like",
			"like_regex",
			"listagg",
			"ln",
			"local",
			"localtime",
			"localtimestamp",
			"log",
			"log10",
			"lower",
			"match",
			"match_number",
			"match_recognize",
			"matches",
			"max",
			"member",
			"merge",
			"method",
			"min",
			"minute",
			"mod",
			"modifies",
			"module",
			"month",
			"multiset",
			"national",
			"natural",
			"nchar",
			"nclob",
			"new",
			"no",
			"none",
			"normalize",
			"not",
			"nth_value",
			"ntile",
			"null",
			"nullif",
			"numeric",
			"octet_length",
			"occurrences_regex",
			"of",
			"offset",
			"old",
			"omit",
			"on",
			"one",
			"only",
			"open",
			"or",
			"order",
			"out",
			"outer",
			"over",
			"overlaps",
			"overlay",
			"parameter",
			"partition",
			"pattern",
			"per",
			"percent",
			"percent_rank",
			"percentile_cont",
			"percentile_disc",
			"period",
			"portion",
			"position",
			"position_regex",
			"power",
			"precedes",
			"precision",
			"prepare",
			"primary",
			"procedure",
			"ptf",
			"range",
			"rank",
			"reads",
			"real",
			"recursive",
			"ref",
			"references",
			"referencing",
			"regr_avgx",
			"regr_avgy",
			"regr_count",
			"regr_intercept",
			"regr_r2",
			"regr_slope",
			"regr_sxx",
			"regr_sxy",
			"regr_syy",
			"release",
			"result",
			"return",
			"returns",
			"revoke",
			"right",
			"rollback",
			"rollup",
			"row",
			"row_number",
			"rows",
			"running",
			"savepoint",
			"scope",
			"scroll",
			"search",
			"second",
			"seek",
			"select",
			"sensitive",
			"session_user",
			"set",
			"show",
			"similar",
			"sin",
			"sinh",
			"skip",
			"smallint",
			"some",
			"specific",
			"specifictype",
			"sql",
			"sqlexception",
			"sqlstate",
			"sqlwarning",
			"sqrt",
			"start",
			"static",
			"stddev_pop",
			"stddev_samp",
			"submultiset",
			"subset",
			"substring",
			"substring_regex",
			"succeeds",
			"sum",
			"symmetric",
			"system",
			"system_time",
			"system_user",
			"table",
			"tablesample",
			"tan",
			"tanh",
			"then",
			"time",
			"timestamp",
			"timezone_hour",
			"timezone_minute",
			"to",
			"trailing",
			"translate",
			"translate_regex",
			"translation",
			"treat",
			"trigger",
			"trim",
			"trim_array",
			"true",
			"truncate",
			"uescape",
			"union",
			"unique",
			"unknown",
			"unnest",
			"update",
			"upper",
			"user",
			"using",
			"value",
			"values",
			"value_of",
			"var_pop",
			"var_samp",
			"varbinary",
			"varchar",
			"varying",
			"versioning",
			"when",
			"whenever",
			"where",
			"width_bucket",
			"window",
			"with",
			"within",
			"without",
			"year",
		],
		h = [
			"abs",
			"acos",
			"array_agg",
			"asin",
			"atan",
			"avg",
			"cast",
			"ceil",
			"ceiling",
			"coalesce",
			"corr",
			"cos",
			"cosh",
			"count",
			"covar_pop",
			"covar_samp",
			"cume_dist",
			"dense_rank",
			"deref",
			"element",
			"exp",
			"extract",
			"first_value",
			"floor",
			"json_array",
			"json_arrayagg",
			"json_exists",
			"json_object",
			"json_objectagg",
			"json_query",
			"json_table",
			"json_table_primitive",
			"json_value",
			"lag",
			"last_value",
			"lead",
			"listagg",
			"ln",
			"log",
			"log10",
			"lower",
			"max",
			"min",
			"mod",
			"nth_value",
			"ntile",
			"nullif",
			"percent_rank",
			"percentile_cont",
			"percentile_disc",
			"position",
			"position_regex",
			"power",
			"rank",
			"regr_avgx",
			"regr_avgy",
			"regr_count",
			"regr_intercept",
			"regr_r2",
			"regr_slope",
			"regr_sxx",
			"regr_sxy",
			"regr_syy",
			"row_number",
			"sin",
			"sinh",
			"sqrt",
			"stddev_pop",
			"stddev_samp",
			"substring",
			"substring_regex",
			"sum",
			"tan",
			"tanh",
			"translate",
			"translate_regex",
			"treat",
			"trim",
			"trim_array",
			"unnest",
			"upper",
			"value_of",
			"var_pop",
			"var_samp",
			"width_bucket",
		],
		f = [
			"current_catalog",
			"current_date",
			"current_default_transform_group",
			"current_path",
			"current_role",
			"current_schema",
			"current_transform_group_for_type",
			"current_user",
			"session_user",
			"system_time",
			"system_user",
			"current_time",
			"localtime",
			"current_timestamp",
			"localtimestamp",
		],
		p = [
			"create table",
			"insert into",
			"primary key",
			"foreign key",
			"not null",
			"alter table",
			"add constraint",
			"grouping sets",
			"on overflow",
			"character set",
			"respect nulls",
			"ignore nulls",
			"nulls first",
			"nulls last",
			"depth first",
			"breadth first",
		],
		g = h,
		y = [...u, ...l].filter((N) => !h.includes(N)),
		x = { scope: "variable", match: /@[a-z0-9][a-z0-9_]*/ },
		_ = { scope: "operator", match: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/, relevance: 0 },
		k = { match: e.concat(/\b/, e.either(...g), /\s*\(/), relevance: 0, keywords: { built_in: g } };
	function T(N) {
		return e.concat(/\b/, e.either(...N.map((z) => z.replace(/\s+/, "\\s+"))), /\b/);
	}
	const B = { scope: "keyword", match: T(p), relevance: 0 };
	function A(N, { exceptions: z, when: I } = {}) {
		const G = I;
		return (
			(z = z || []),
			N.map((re) => (re.match(/\|\d+$/) || z.includes(re) ? re : G(re) ? `${re}|0` : re))
		);
	}
	return {
		name: "SQL",
		case_insensitive: !0,
		illegal: /[{}]|<\//,
		keywords: {
			$pattern: /\b[\w\.]+/,
			keyword: A(y, { when: (N) => N.length < 3 }),
			literal: i,
			type: s,
			built_in: f,
		},
		contains: [
			{ scope: "type", match: T(o) },
			B,
			k,
			x,
			n,
			a,
			r.C_NUMBER_MODE,
			r.C_BLOCK_COMMENT_MODE,
			t,
			_,
		],
	};
}
function C7(r) {
	return { name: "Plain text", aliases: ["text", "txt"], disableAutodetect: !0 };
}
const O7 = /(!?\[)([^\]]*?)$/,
	N7 = /(\*\*)([^*]*?)$/,
	R7 = /(__)([^_]*?)$/,
	I7 = /(\*\*\*)([^*]*?)$/,
	D7 = /(\*)([^*]*?)$/,
	L7 = /(_)([^_]*?)$/,
	z7 = /(`)([^`]*?)$/,
	B7 = /(~~)([^~]*?)$/,
	Ds = (r) => {
		const e = (r.match(/```/g) || []).length;
		return (
			e > 0 &&
			e % 2 === 0 &&
			r.includes(`
`)
		);
	},
	Ls = (r) => {
		let e = -1,
			t = !1;
		for (const n of r.matchAll(/```/g)) {
			const a = n.index ?? -1;
			a !== -1 && (t ? ((t = !1), (e = -1)) : ((t = !0), (e = a)));
		}
		return e;
	},
	P7 = (r) => {
		const e = /(!?)\[([^\]]+)\]\(([^)]+)$/,
			t = r.match(e);
		if (t) {
			const a = t[1] === "!",
				i = t[2],
				o = t[3],
				s = r.lastIndexOf(`${a ? "!" : ""}[${i}](${o}`),
				l = r.substring(0, s);
			return a ? l : `${l}[${i}](streamdown:incomplete-link)`;
		}
		const n = r.match(O7);
		if (n) {
			if (n[1].startsWith("!")) {
				const i = r.lastIndexOf(n[1]);
				return r.substring(0, i);
			}
			return `${r}](streamdown:incomplete-link)`;
		}
		return r;
	},
	F7 = (r) => {
		if (Ds(r)) return r;
		const e = r.match(N7);
		if (e) {
			const t = e[2];
			if (!t || /^[\s_~*`]*$/.test(t)) return r;
			const n = r.lastIndexOf(e[1]),
				a = Ls(r);
			if (a !== -1 && n > a) return r;
			const o = r.substring(0, n).lastIndexOf(`
`),
				s = o === -1 ? 0 : o + 1,
				l = r.substring(s, n);
			if (
				/^[\s]*[-*+][\s]+$/.test(l) &&
				t.includes(`
`)
			)
				return r;
			if ((r.match(/\*\*/g) || []).length % 2 === 1) return `${r}**`;
		}
		return r;
	},
	q7 = (r) => {
		if (Ds(r)) return r;
		const e = r.match(R7);
		if (e) {
			const t = e[2];
			if (!t || /^[\s_~*`]*$/.test(t)) return r;
			const n = r.lastIndexOf(e[1]),
				a = Ls(r);
			if (a !== -1 && n > a) return r;
			const o = r.substring(0, n).lastIndexOf(`
`),
				s = o === -1 ? 0 : o + 1,
				l = r.substring(s, n);
			if (
				/^[\s]*[-*+][\s]+$/.test(l) &&
				t.includes(`
`)
			)
				return r;
			if ((r.match(/__/g) || []).length % 2 === 1) return `${r}__`;
		}
		return r;
	},
	U7 = (r) =>
		r.split("").reduce((e, t, n) => {
			if (t === "*") {
				const a = r[n - 1],
					i = r[n + 1];
				if (a === "\\") return e;
				let o = n;
				for (let l = n - 1; l >= 0; l--) {
					if (
						r[l] ===
						`
`
					) {
						o = l + 1;
						break;
					}
					if (l === 0) {
						o = 0;
						break;
					}
				}
				if (r.substring(o, n).trim() === "" && (i === " " || i === "	")) return e;
				if (a !== "*" && i !== "*") return e + 1;
			}
			return e;
		}, 0),
	H7 = (r) => {
		if (Ds(r)) return r;
		if (r.match(D7)) {
			let t = -1;
			for (let o = 0; o < r.length; o++)
				if (r[o] === "*" && r[o - 1] !== "*" && r[o + 1] !== "*") {
					t = o;
					break;
				}
			if (t === -1) return r;
			const n = Ls(r);
			if (n !== -1 && t > n) return r;
			const a = r.substring(t + 1);
			if (!a || /^[\s_~*`]*$/.test(a)) return r;
			if (U7(r) % 2 === 1) return `${r}*`;
		}
		return r;
	},
	Sm = (r, e) => {
		let t = !1,
			n = !1;
		for (let a = 0; a < r.length && a < e; a++) {
			if (r[a] === "\\" && r[a + 1] === "$") {
				a++;
				continue;
			}
			r[a] === "$" && (r[a + 1] === "$" ? ((n = !n), a++, (t = !1)) : n || (t = !t));
		}
		return t || n;
	},
	G7 = (r) =>
		r.split("").reduce((e, t, n) => {
			if (t === "_") {
				const a = r[n - 1],
					i = r[n + 1];
				if (
					a === "\\" ||
					Sm(r, n) ||
					(a && i && /[\p{L}\p{N}_]/u.test(a) && /[\p{L}\p{N}_]/u.test(i))
				)
					return e;
				if (a !== "_" && i !== "_") return e + 1;
			}
			return e;
		}, 0),
	W7 = (r) => {
		if (Ds(r)) return r;
		if (r.match(L7)) {
			let t = -1;
			for (let o = 0; o < r.length; o++)
				if (
					r[o] === "_" &&
					r[o - 1] !== "_" &&
					r[o + 1] !== "_" &&
					r[o - 1] !== "\\" &&
					!Sm(r, o)
				) {
					const s = o > 0 ? r[o - 1] : "",
						l = o < r.length - 1 ? r[o + 1] : "";
					if (s && l && /[\p{L}\p{N}_]/u.test(s) && /[\p{L}\p{N}_]/u.test(l)) continue;
					t = o;
					break;
				}
			if (t === -1) return r;
			const n = Ls(r);
			if (n !== -1 && t > n) return r;
			const a = r.substring(t + 1);
			if (!a || /^[\s_~*`]*$/.test(a)) return r;
			if (G7(r) % 2 === 1) {
				const o = r.match(/\n+$/);
				return o ? `${r.slice(0, -o[0].length)}_${o[0]}` : `${r}_`;
			}
		}
		return r;
	},
	V7 = (r, e) => {
		const t = r.substring(e, e + 3) === "```",
			n = e > 0 && r.substring(e - 1, e + 2) === "```",
			a = e > 1 && r.substring(e - 2, e + 1) === "```";
		return t || n || a;
	},
	K7 = (r) => {
		let e = 0;
		for (let t = 0; t < r.length; t++) r[t] === "`" && !V7(r, t) && e++;
		return e;
	},
	Y7 = (r) => {
		if (
			r.match(/^```[^`\n]*```?$/) &&
			!r.includes(`
`)
		)
			return r.endsWith("``") && !r.endsWith("```") ? `${r}\`` : r;
		const t = (r.match(/```/g) || []).length,
			n = t % 2 === 1;
		if (
			(t > 0 &&
				t % 2 === 0 &&
				r.includes(`
`)) ||
			((r.endsWith("```\n") || r.endsWith("```")) && t % 2 === 0)
		)
			return r;
		const a = r.match(z7);
		if (a && !n) {
			const i = a[2];
			if (!i || /^[\s_~*`]*$/.test(i)) return r;
			if (K7(r) % 2 === 1) return `${r}\``;
		}
		return r;
	},
	X7 = (r) => {
		const e = r.match(B7);
		if (e) {
			const t = e[2];
			if (!t || /^[\s_~*`]*$/.test(t)) return r;
			if ((r.match(/~~/g) || []).length % 2 === 1) return `${r}~~`;
		}
		return r;
	},
	Z7 = (r) => {
		if ((r.match(/\$\$/g) || []).length % 2 === 0) return r;
		const t = r.indexOf("$$");
		return t !== -1 &&
			r.indexOf(
				`
`,
				t
			) !== -1 &&
			!r.endsWith(`
`)
			? `${r}
$$`
			: `${r}$$`;
	},
	j7 = (r) => {
		let e = 0;
		const t = r.match(/\*+/g) || [];
		for (const n of t) {
			const a = n.length;
			a >= 3 && (e += Math.floor(a / 3));
		}
		return e;
	},
	J7 = (r) => {
		if (Ds(r) || /^\*{4,}$/.test(r)) return r;
		const e = r.match(I7);
		if (e) {
			const t = e[2];
			if (!t || /^[\s_~*`]*$/.test(t)) return r;
			const n = r.lastIndexOf(e[1]),
				a = Ls(r);
			if (a !== -1 && n > a) return r;
			if (j7(r) % 2 === 1) return `${r}***`;
		}
		return r;
	},
	Em = (r) => {
		if (!r || typeof r != "string") return r;
		let e = r;
		const t = P7(e);
		return t.endsWith("](streamdown:incomplete-link)")
			? t
			: ((e = t),
				(e = J7(e)),
				(e = F7(e)),
				(e = q7(e)),
				(e = H7(e)),
				(e = W7(e)),
				(e = Y7(e)),
				(e = X7(e)),
				(e = Z7(e)),
				e);
	};
function Tm(r) {
	const e = /\[\^[^\]\s]{1,200}\](?!:)/.test(r),
		t = /\[\^[^\]\s]{1,200}\]:/.test(r);
	if (e || t) return [r];
	const n = _p.lex(r, { gfm: !0 }),
		a = [],
		i = [];
	for (let o = 0; o < n.length; o++) {
		const s = n[o],
			l = s.raw;
		if (i.length > 0) {
			if (((a[a.length - 1] += l), s.type === "html")) {
				const u = l.match(/<\/(\w+)>/);
				if (u) {
					const h = u[1];
					i[i.length - 1] === h && i.pop();
				}
			}
			continue;
		}
		if (s.type === "html" && s.block) {
			const u = l.match(/<(\w+)[\s>]/);
			if (u) {
				const h = u[1];
				l.includes(`</${h}>`) || i.push(h);
			}
		}
		if (l.trim() === "$$" && a.length > 0) {
			const u = a.at(-1);
			if (!u) {
				a.push(l);
				continue;
			}
			const h = u.trimStart().startsWith("$$"),
				f = (u.match(/\$\$/g) || []).length;
			if (h && f % 2 === 1) {
				a[a.length - 1] = u + l;
				continue;
			}
		}
		if (a.length > 0 && l.trimEnd().endsWith("$$")) {
			const u = a.at(-1);
			if (!u) {
				a.push(l);
				continue;
			}
			const h = u.trimStart().startsWith("$$"),
				f = (u.match(/\$\$/g) || []).length,
				p = (l.match(/\$\$/g) || []).length;
			if (h && f % 2 === 1 && !l.trimStart().startsWith("$$") && p === 1) {
				a[a.length - 1] = u + l;
				continue;
			}
		}
		a.push(l);
	}
	return a;
}
const Q7 = [
	["javascript", Z6],
	["typescript", J6],
	["json", Q6],
	["bash", $6],
	["shell", e7],
	["python", t7],
	["go", r7],
	["rust", n7],
	["java", a7],
	["csharp", i7],
	["cpp", o7],
	["c", s7],
	["xml", D1],
	["html", D1],
	["css", g7],
	["scss", E7],
	["markdown", T7],
	["yaml", A7],
	["sql", M7],
	["plaintext", C7],
];
Q7.forEach(([r, e]) => d0.registerLanguage(r, e));
const $7 = {
		name: "katexBlock",
		level: "block",
		start(r) {
			const e = r.match(/(\${2}|\\\[)/);
			return e ? e.index : -1;
		},
		tokenizer(r) {
			const t = /^\${2}([\s\S]+?)\${2}/.exec(r);
			if (t) return { type: "katexBlock", raw: t[0], text: t[1].trim(), displayMode: !0 };
			const a = /^\\\[([\s\S]+?)\\\]/.exec(r);
			if (a) return { type: "katexBlock", raw: a[0], text: a[1].trim(), displayMode: !0 };
		},
		renderer(r) {
			if (r.type === "katexBlock")
				return Is.renderToString(r.text, { throwOnError: !1, displayMode: r.displayMode });
		},
	},
	eb = {
		name: "katexInline",
		level: "inline",
		start(r) {
			const e = r.match(/(\$|\\\()/);
			return e ? e.index : -1;
		},
		tokenizer(r) {
			const t = /^\$([^$]+?)\$/.exec(r);
			if (t) return { type: "katexInline", raw: t[0], text: t[1].trim(), displayMode: !1 };
			const a = /^\\\(([\s\S]+?)\\\)/.exec(r);
			if (a) return { type: "katexInline", raw: a[0], text: a[1].trim(), displayMode: !1 };
		},
		renderer(r) {
			if (r.type === "katexInline")
				return Is.renderToString(r.text, { throwOnError: !1, displayMode: r.displayMode });
		},
	};
function L1(r) {
	return r.replace(
		/[<>&"']/g,
		(e) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&#39;", '"': "&quot;" })[e] || e
	);
}
function tb(r, e = []) {
	const t = "color: rgb(59, 130, 246); text-decoration: none; hover:text-decoration: underline;";
	return r.replace(/\[(\d+)\]/g, (n) => {
		const i = (n.match(/\d+/g) || [])
			.map(Number)
			.map((o) => {
				if (o === 0) return !1;
				const s = e[o - 1];
				return s
					? `<a href="${s.link}" target="_blank" rel="noreferrer" style="${t}">${o}</a>`
					: "";
			})
			.filter(Boolean)
			.join(", ");
		return i ? ` <sup>${i}</sup>` : n;
	});
}
function rb(r) {
	if (!r) return;
	const e = r.trim(),
		t = e.toLowerCase();
	if (!(t.startsWith("javascript:") || t.startsWith("data:text/html"))) return e.replace(/>$/, "");
}
function Am(r, e) {
	if (e && d0.getLanguage(e))
		try {
			return d0.highlight(r, { language: e, ignoreIllegals: !0 }).value;
		} catch {}
	return d0.highlightAuto(r).value;
}
function Mm(r) {
	return new kp({
		hooks: { postprocess: (e) => tb(e, r) },
		extensions: [$7, eb],
		renderer: {
			link: (e, t, n) => {
				const a = rb(e);
				return a
					? `<a href="${a}" target="_blank" rel="noreferrer">${n}</a>`
					: `<span>${L1(n ?? "")}</span>`;
			},
			html: (e) => L1(e),
		},
		gfm: !0,
		breaks: !0,
	});
}
function Cm(r) {
	if (!r) return !0;
	const e = r.replace(/[\s\u0000]+$/, ""),
		t = e.match(/^([`~]{3,})/);
	if (!t) return !0;
	const n = t[1];
	return new RegExp(`(?:
|\r
)${n}(?:[	 ]+)?$`).test(e);
}
const B0 = new Map();
function Om(r, e, t) {
	const n = t.map((a) => a.link).join("|");
	return `${r}-${Bu(e)}|${n}`;
}
async function nb(r, e) {
	const t = Em(r),
		n = Mm(e),
		a = n.lexer(t);
	return await Promise.all(
		a.map(async (o) =>
			o.type === "code"
				? {
						type: "code",
						lang: o.lang,
						code: Am(o.text, o.lang),
						rawCode: o.text,
						isClosed: Cm(o.raw ?? ""),
					}
				: { type: "text", html: n.parse(o.raw) }
		)
	);
}
function ab(r, e) {
	const t = Em(r),
		n = Mm(e);
	return n
		.lexer(t)
		.map((i) =>
			i.type === "code"
				? {
						type: "code",
						lang: i.lang,
						code: Am(i.text, i.lang),
						rawCode: i.text,
						isClosed: Cm(i.raw ?? ""),
					}
				: { type: "text", html: n.parse(i.raw) }
		);
}
function Bu(r) {
	let e = 0;
	for (let t = 0; t < r.length; t++) {
		const n = r.charCodeAt(t);
		(e = (e << 5) - e + n), (e = e & e);
	}
	return Math.abs(e).toString(36);
}
async function ib(r, e = []) {
	const t = Tm(r);
	return await Promise.all(
		t.map(async (n, a) => {
			const i = Om(a, n, e),
				o = B0.get(i);
			if (o) return o;
			const s = await nb(n, e),
				l = { id: `${a}-${Bu(n)}`, content: n, tokens: s };
			return B0.set(i, l), l;
		})
	);
}
function ob(r, e = []) {
	return Tm(r).map((n, a) => {
		const i = Om(a, n, e),
			o = B0.get(i);
		if (o) return o;
		const s = ab(n, e),
			l = { id: `${a}-${Bu(n)}`, content: n, tokens: s };
		return B0.set(i, l), l;
	});
}
function sb(r) {
	return new Worker("/_app/immutable/workers/markdownWorker-C3fHgXeo.js", {
		name: r == null ? void 0 : r.name,
	});
}
/*! @license DOMPurify 3.3.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.0/LICENSE */ var $l,
	z1;
function B1() {
	if (z1) return $l;
	z1 = 1;
	const {
		entries: r,
		setPrototypeOf: e,
		isFrozen: t,
		getPrototypeOf: n,
		getOwnPropertyDescriptor: a,
	} = Object;
	let { freeze: i, seal: o, create: s } = Object,
		{ apply: l, construct: u } = typeof Reflect < "u" && Reflect;
	i ||
		(i = function (_e) {
			return _e;
		}),
		o ||
			(o = function (_e) {
				return _e;
			}),
		l ||
			(l = function (_e, De) {
				for (var ke = arguments.length, Re = new Array(ke > 2 ? ke - 2 : 0), dt = 2; dt < ke; dt++)
					Re[dt - 2] = arguments[dt];
				return _e.apply(De, Re);
			}),
		u ||
			(u = function (_e) {
				for (var De = arguments.length, ke = new Array(De > 1 ? De - 1 : 0), Re = 1; Re < De; Re++)
					ke[Re - 1] = arguments[Re];
				return new _e(...ke);
			});
	const h = G(Array.prototype.forEach),
		f = G(Array.prototype.lastIndexOf),
		p = G(Array.prototype.pop),
		g = G(Array.prototype.push),
		y = G(Array.prototype.splice),
		x = G(String.prototype.toLowerCase),
		_ = G(String.prototype.toString),
		k = G(String.prototype.match),
		T = G(String.prototype.replace),
		B = G(String.prototype.indexOf),
		A = G(String.prototype.trim),
		N = G(Object.prototype.hasOwnProperty),
		z = G(RegExp.prototype.test),
		I = re(TypeError);
	function G(Pe) {
		return function (_e) {
			_e instanceof RegExp && (_e.lastIndex = 0);
			for (var De = arguments.length, ke = new Array(De > 1 ? De - 1 : 0), Re = 1; Re < De; Re++)
				ke[Re - 1] = arguments[Re];
			return l(Pe, _e, ke);
		};
	}
	function re(Pe) {
		return function () {
			for (var _e = arguments.length, De = new Array(_e), ke = 0; ke < _e; ke++)
				De[ke] = arguments[ke];
			return u(Pe, De);
		};
	}
	function V(Pe, _e) {
		let De = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : x;
		e && e(Pe, null);
		let ke = _e.length;
		for (; ke--; ) {
			let Re = _e[ke];
			if (typeof Re == "string") {
				const dt = De(Re);
				dt !== Re && (t(_e) || (_e[ke] = dt), (Re = dt));
			}
			Pe[Re] = !0;
		}
		return Pe;
	}
	function se(Pe) {
		for (let _e = 0; _e < Pe.length; _e++) N(Pe, _e) || (Pe[_e] = null);
		return Pe;
	}
	function ce(Pe) {
		const _e = s(null);
		for (const [De, ke] of r(Pe))
			N(Pe, De) &&
				(Array.isArray(ke)
					? (_e[De] = se(ke))
					: ke && typeof ke == "object" && ke.constructor === Object
						? (_e[De] = ce(ke))
						: (_e[De] = ke));
		return _e;
	}
	function Ce(Pe, _e) {
		for (; Pe !== null; ) {
			const ke = a(Pe, _e);
			if (ke) {
				if (ke.get) return G(ke.get);
				if (typeof ke.value == "function") return G(ke.value);
			}
			Pe = n(Pe);
		}
		function De() {
			return null;
		}
		return De;
	}
	const Q = i([
			"a",
			"abbr",
			"acronym",
			"address",
			"area",
			"article",
			"aside",
			"audio",
			"b",
			"bdi",
			"bdo",
			"big",
			"blink",
			"blockquote",
			"body",
			"br",
			"button",
			"canvas",
			"caption",
			"center",
			"cite",
			"code",
			"col",
			"colgroup",
			"content",
			"data",
			"datalist",
			"dd",
			"decorator",
			"del",
			"details",
			"dfn",
			"dialog",
			"dir",
			"div",
			"dl",
			"dt",
			"element",
			"em",
			"fieldset",
			"figcaption",
			"figure",
			"font",
			"footer",
			"form",
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6",
			"head",
			"header",
			"hgroup",
			"hr",
			"html",
			"i",
			"img",
			"input",
			"ins",
			"kbd",
			"label",
			"legend",
			"li",
			"main",
			"map",
			"mark",
			"marquee",
			"menu",
			"menuitem",
			"meter",
			"nav",
			"nobr",
			"ol",
			"optgroup",
			"option",
			"output",
			"p",
			"picture",
			"pre",
			"progress",
			"q",
			"rp",
			"rt",
			"ruby",
			"s",
			"samp",
			"search",
			"section",
			"select",
			"shadow",
			"slot",
			"small",
			"source",
			"spacer",
			"span",
			"strike",
			"strong",
			"style",
			"sub",
			"summary",
			"sup",
			"table",
			"tbody",
			"td",
			"template",
			"textarea",
			"tfoot",
			"th",
			"thead",
			"time",
			"tr",
			"track",
			"tt",
			"u",
			"ul",
			"var",
			"video",
			"wbr",
		]),
		$ = i([
			"svg",
			"a",
			"altglyph",
			"altglyphdef",
			"altglyphitem",
			"animatecolor",
			"animatemotion",
			"animatetransform",
			"circle",
			"clippath",
			"defs",
			"desc",
			"ellipse",
			"enterkeyhint",
			"exportparts",
			"filter",
			"font",
			"g",
			"glyph",
			"glyphref",
			"hkern",
			"image",
			"inputmode",
			"line",
			"lineargradient",
			"marker",
			"mask",
			"metadata",
			"mpath",
			"part",
			"path",
			"pattern",
			"polygon",
			"polyline",
			"radialgradient",
			"rect",
			"stop",
			"style",
			"switch",
			"symbol",
			"text",
			"textpath",
			"title",
			"tref",
			"tspan",
			"view",
			"vkern",
		]),
		K = i([
			"feBlend",
			"feColorMatrix",
			"feComponentTransfer",
			"feComposite",
			"feConvolveMatrix",
			"feDiffuseLighting",
			"feDisplacementMap",
			"feDistantLight",
			"feDropShadow",
			"feFlood",
			"feFuncA",
			"feFuncB",
			"feFuncG",
			"feFuncR",
			"feGaussianBlur",
			"feImage",
			"feMerge",
			"feMergeNode",
			"feMorphology",
			"feOffset",
			"fePointLight",
			"feSpecularLighting",
			"feSpotLight",
			"feTile",
			"feTurbulence",
		]),
		le = i([
			"animate",
			"color-profile",
			"cursor",
			"discard",
			"font-face",
			"font-face-format",
			"font-face-name",
			"font-face-src",
			"font-face-uri",
			"foreignobject",
			"hatch",
			"hatchpath",
			"mesh",
			"meshgradient",
			"meshpatch",
			"meshrow",
			"missing-glyph",
			"script",
			"set",
			"solidcolor",
			"unknown",
			"use",
		]),
		ie = i([
			"math",
			"menclose",
			"merror",
			"mfenced",
			"mfrac",
			"mglyph",
			"mi",
			"mlabeledtr",
			"mmultiscripts",
			"mn",
			"mo",
			"mover",
			"mpadded",
			"mphantom",
			"mroot",
			"mrow",
			"ms",
			"mspace",
			"msqrt",
			"mstyle",
			"msub",
			"msup",
			"msubsup",
			"mtable",
			"mtd",
			"mtext",
			"mtr",
			"munder",
			"munderover",
			"mprescripts",
		]),
		oe = i([
			"maction",
			"maligngroup",
			"malignmark",
			"mlongdiv",
			"mscarries",
			"mscarry",
			"msgroup",
			"mstack",
			"msline",
			"msrow",
			"semantics",
			"annotation",
			"annotation-xml",
			"mprescripts",
			"none",
		]),
		te = i(["#text"]),
		Ke = i([
			"accept",
			"action",
			"align",
			"alt",
			"autocapitalize",
			"autocomplete",
			"autopictureinpicture",
			"autoplay",
			"background",
			"bgcolor",
			"border",
			"capture",
			"cellpadding",
			"cellspacing",
			"checked",
			"cite",
			"class",
			"clear",
			"color",
			"cols",
			"colspan",
			"controls",
			"controlslist",
			"coords",
			"crossorigin",
			"datetime",
			"decoding",
			"default",
			"dir",
			"disabled",
			"disablepictureinpicture",
			"disableremoteplayback",
			"download",
			"draggable",
			"enctype",
			"enterkeyhint",
			"exportparts",
			"face",
			"for",
			"headers",
			"height",
			"hidden",
			"high",
			"href",
			"hreflang",
			"id",
			"inert",
			"inputmode",
			"integrity",
			"ismap",
			"kind",
			"label",
			"lang",
			"list",
			"loading",
			"loop",
			"low",
			"max",
			"maxlength",
			"media",
			"method",
			"min",
			"minlength",
			"multiple",
			"muted",
			"name",
			"nonce",
			"noshade",
			"novalidate",
			"nowrap",
			"open",
			"optimum",
			"part",
			"pattern",
			"placeholder",
			"playsinline",
			"popover",
			"popovertarget",
			"popovertargetaction",
			"poster",
			"preload",
			"pubdate",
			"radiogroup",
			"readonly",
			"rel",
			"required",
			"rev",
			"reversed",
			"role",
			"rows",
			"rowspan",
			"spellcheck",
			"scope",
			"selected",
			"shape",
			"size",
			"sizes",
			"slot",
			"span",
			"srclang",
			"start",
			"src",
			"srcset",
			"step",
			"style",
			"summary",
			"tabindex",
			"title",
			"translate",
			"type",
			"usemap",
			"valign",
			"value",
			"width",
			"wrap",
			"xmlns",
			"slot",
		]),
		qe = i([
			"accent-height",
			"accumulate",
			"additive",
			"alignment-baseline",
			"amplitude",
			"ascent",
			"attributename",
			"attributetype",
			"azimuth",
			"basefrequency",
			"baseline-shift",
			"begin",
			"bias",
			"by",
			"class",
			"clip",
			"clippathunits",
			"clip-path",
			"clip-rule",
			"color",
			"color-interpolation",
			"color-interpolation-filters",
			"color-profile",
			"color-rendering",
			"cx",
			"cy",
			"d",
			"dx",
			"dy",
			"diffuseconstant",
			"direction",
			"display",
			"divisor",
			"dur",
			"edgemode",
			"elevation",
			"end",
			"exponent",
			"fill",
			"fill-opacity",
			"fill-rule",
			"filter",
			"filterunits",
			"flood-color",
			"flood-opacity",
			"font-family",
			"font-size",
			"font-size-adjust",
			"font-stretch",
			"font-style",
			"font-variant",
			"font-weight",
			"fx",
			"fy",
			"g1",
			"g2",
			"glyph-name",
			"glyphref",
			"gradientunits",
			"gradienttransform",
			"height",
			"href",
			"id",
			"image-rendering",
			"in",
			"in2",
			"intercept",
			"k",
			"k1",
			"k2",
			"k3",
			"k4",
			"kerning",
			"keypoints",
			"keysplines",
			"keytimes",
			"lang",
			"lengthadjust",
			"letter-spacing",
			"kernelmatrix",
			"kernelunitlength",
			"lighting-color",
			"local",
			"marker-end",
			"marker-mid",
			"marker-start",
			"markerheight",
			"markerunits",
			"markerwidth",
			"maskcontentunits",
			"maskunits",
			"max",
			"mask",
			"mask-type",
			"media",
			"method",
			"mode",
			"min",
			"name",
			"numoctaves",
			"offset",
			"operator",
			"opacity",
			"order",
			"orient",
			"orientation",
			"origin",
			"overflow",
			"paint-order",
			"path",
			"pathlength",
			"patterncontentunits",
			"patterntransform",
			"patternunits",
			"points",
			"preservealpha",
			"preserveaspectratio",
			"primitiveunits",
			"r",
			"rx",
			"ry",
			"radius",
			"refx",
			"refy",
			"repeatcount",
			"repeatdur",
			"restart",
			"result",
			"rotate",
			"scale",
			"seed",
			"shape-rendering",
			"slope",
			"specularconstant",
			"specularexponent",
			"spreadmethod",
			"startoffset",
			"stddeviation",
			"stitchtiles",
			"stop-color",
			"stop-opacity",
			"stroke-dasharray",
			"stroke-dashoffset",
			"stroke-linecap",
			"stroke-linejoin",
			"stroke-miterlimit",
			"stroke-opacity",
			"stroke",
			"stroke-width",
			"style",
			"surfacescale",
			"systemlanguage",
			"tabindex",
			"tablevalues",
			"targetx",
			"targety",
			"transform",
			"transform-origin",
			"text-anchor",
			"text-decoration",
			"text-rendering",
			"textlength",
			"type",
			"u1",
			"u2",
			"unicode",
			"values",
			"viewbox",
			"visibility",
			"version",
			"vert-adv-y",
			"vert-origin-x",
			"vert-origin-y",
			"width",
			"word-spacing",
			"wrap",
			"writing-mode",
			"xchannelselector",
			"ychannelselector",
			"x",
			"x1",
			"x2",
			"xmlns",
			"y",
			"y1",
			"y2",
			"z",
			"zoomandpan",
		]),
		Qe = i([
			"accent",
			"accentunder",
			"align",
			"bevelled",
			"close",
			"columnsalign",
			"columnlines",
			"columnspan",
			"denomalign",
			"depth",
			"dir",
			"display",
			"displaystyle",
			"encoding",
			"fence",
			"frame",
			"height",
			"href",
			"id",
			"largeop",
			"length",
			"linethickness",
			"lspace",
			"lquote",
			"mathbackground",
			"mathcolor",
			"mathsize",
			"mathvariant",
			"maxsize",
			"minsize",
			"movablelimits",
			"notation",
			"numalign",
			"open",
			"rowalign",
			"rowlines",
			"rowspacing",
			"rowspan",
			"rspace",
			"rquote",
			"scriptlevel",
			"scriptminsize",
			"scriptsizemultiplier",
			"selection",
			"separator",
			"separators",
			"stretchy",
			"subscriptshift",
			"supscriptshift",
			"symmetric",
			"voffset",
			"width",
			"xmlns",
		]),
		je = i(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
		Xe = o(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
		it = o(/<%[\w\W]*|[\w\W]*%>/gm),
		lt = o(/\$\{[\w\W]*/gm),
		we = o(/^data-[\-\w.\u00B7-\uFFFF]+$/),
		ye = o(/^aria-[\-\w]+$/),
		be = o(
			/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
		),
		Le = o(/^(?:\w+script|data):/i),
		ze = o(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
		Be = o(/^html$/i),
		tt = o(/^[a-z][.\w]*(-[.\w]+)+$/i);
	var ot = Object.freeze({
		__proto__: null,
		ARIA_ATTR: ye,
		ATTR_WHITESPACE: ze,
		CUSTOM_ELEMENT: tt,
		DATA_ATTR: we,
		DOCTYPE_NAME: Be,
		ERB_EXPR: it,
		IS_ALLOWED_URI: be,
		IS_SCRIPT_OR_DATA: Le,
		MUSTACHE_EXPR: Xe,
		TMPLIT_EXPR: lt,
	});
	const st = { element: 1, text: 3, progressingInstruction: 7, comment: 8, document: 9 },
		vt = function () {
			return typeof window > "u" ? null : window;
		},
		ct = function (_e, De) {
			if (typeof _e != "object" || typeof _e.createPolicy != "function") return null;
			let ke = null;
			const Re = "data-tt-policy-suffix";
			De && De.hasAttribute(Re) && (ke = De.getAttribute(Re));
			const dt = "dompurify" + (ke ? "#" + ke : "");
			try {
				return _e.createPolicy(dt, {
					createHTML(Et) {
						return Et;
					},
					createScriptURL(Et) {
						return Et;
					},
				});
			} catch {
				return console.warn("TrustedTypes policy " + dt + " could not be created."), null;
			}
		},
		pt = function () {
			return {
				afterSanitizeAttributes: [],
				afterSanitizeElements: [],
				afterSanitizeShadowDOM: [],
				beforeSanitizeAttributes: [],
				beforeSanitizeElements: [],
				beforeSanitizeShadowDOM: [],
				uponSanitizeAttribute: [],
				uponSanitizeElement: [],
				uponSanitizeShadowNode: [],
			};
		};
	function Mt() {
		let Pe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : vt();
		const _e = (Ze) => Mt(Ze);
		if (
			((_e.version = "3.3.0"),
			(_e.removed = []),
			!Pe || !Pe.document || Pe.document.nodeType !== st.document || !Pe.Element)
		)
			return (_e.isSupported = !1), _e;
		let { document: De } = Pe;
		const ke = De,
			Re = ke.currentScript,
			{
				DocumentFragment: dt,
				HTMLTemplateElement: Et,
				Node: Ht,
				Element: nr,
				NodeFilter: Zt,
				NamedNodeMap: $t = Pe.NamedNodeMap || Pe.MozNamedAttrMap,
				HTMLFormElement: Gt,
				DOMParser: mr,
				trustedTypes: sr,
			} = Pe,
			_r = nr.prototype,
			Wn = Ce(_r, "cloneNode"),
			kn = Ce(_r, "remove"),
			Zr = Ce(_r, "nextSibling"),
			Ur = Ce(_r, "childNodes"),
			Lr = Ce(_r, "parentNode");
		if (typeof Et == "function") {
			const Ze = De.createElement("template");
			Ze.content && Ze.content.ownerDocument && (De = Ze.content.ownerDocument);
		}
		let Wt,
			lr = "";
		const {
				implementation: M,
				createNodeIterator: Y,
				createDocumentFragment: ve,
				getElementsByTagName: Ge,
			} = De,
			{ importNode: kt } = ke;
		let P = pt();
		_e.isSupported =
			typeof r == "function" && typeof Lr == "function" && M && M.createHTMLDocument !== void 0;
		const {
			MUSTACHE_EXPR: H,
			ERB_EXPR: J,
			TMPLIT_EXPR: de,
			DATA_ATTR: Ie,
			ARIA_ATTR: Ne,
			IS_SCRIPT_OR_DATA: gt,
			ATTR_WHITESPACE: St,
			CUSTOM_ELEMENT: Dt,
		} = ot;
		let { IS_ALLOWED_URI: at } = ot,
			We = null;
		const Pt = V({}, [...Q, ...$, ...K, ...ie, ...te]);
		let wt = null;
		const zr = V({}, [...Ke, ...qe, ...Qe, ...je]);
		let bt = Object.seal(
				s(null, {
					tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
					attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
					allowCustomizedBuiltInElements: {
						writable: !0,
						configurable: !1,
						enumerable: !0,
						value: !1,
					},
				})
			),
			Kt = null,
			pr = null;
		const Or = Object.seal(
			s(null, {
				tagCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
				attributeCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
			})
		);
		let rn = !0,
			kr = !0,
			Vn = !1,
			Fa = !0,
			fn = !1,
			Sn = !0,
			mn = !1,
			En = !1,
			Qi = !1,
			he = !1,
			Ve = !1,
			mt = !1,
			Bt = !0,
			er = !1;
		const jr = "user-content-";
		let nn = !0,
			Tn = !1,
			cr = {},
			Sr = null;
		const $i = V({}, [
			"annotation-xml",
			"audio",
			"colgroup",
			"desc",
			"foreignobject",
			"head",
			"iframe",
			"math",
			"mi",
			"mn",
			"mo",
			"ms",
			"mtext",
			"noembed",
			"noframes",
			"noscript",
			"plaintext",
			"script",
			"style",
			"svg",
			"template",
			"thead",
			"title",
			"video",
			"xmp",
		]);
		let eo = null;
		const to = V({}, ["audio", "video", "img", "source", "image", "track"]);
		let ro = null;
		const zs = V({}, [
				"alt",
				"class",
				"for",
				"id",
				"label",
				"name",
				"pattern",
				"placeholder",
				"role",
				"summary",
				"title",
				"value",
				"style",
				"xmlns",
			]),
			di = "http://www.w3.org/1998/Math/MathML",
			hi = "http://www.w3.org/2000/svg",
			Hr = "http://www.w3.org/1999/xhtml";
		let Kn = Hr,
			Gr = !1,
			no = null;
		const ao = V({}, [di, hi, Hr], _);
		let rt = V({}, ["mi", "mo", "mn", "ms", "mtext"]),
			qa = V({}, ["annotation-xml"]);
		const gr = V({}, ["title", "style", "font", "a", "script"]);
		let Ot = null;
		const fi = ["application/xhtml+xml", "text/html"],
			Yn = "text/html";
		let tr = null,
			An = null;
		const Te = De.createElement("form"),
			Ue = function (R) {
				return R instanceof RegExp || R instanceof Function;
			},
			ht = function () {
				let R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				if (!(An && An === R)) {
					if (
						((!R || typeof R != "object") && (R = {}),
						(R = ce(R)),
						(Ot = fi.indexOf(R.PARSER_MEDIA_TYPE) === -1 ? Yn : R.PARSER_MEDIA_TYPE),
						(tr = Ot === "application/xhtml+xml" ? _ : x),
						(We = N(R, "ALLOWED_TAGS") ? V({}, R.ALLOWED_TAGS, tr) : Pt),
						(wt = N(R, "ALLOWED_ATTR") ? V({}, R.ALLOWED_ATTR, tr) : zr),
						(no = N(R, "ALLOWED_NAMESPACES") ? V({}, R.ALLOWED_NAMESPACES, _) : ao),
						(ro = N(R, "ADD_URI_SAFE_ATTR") ? V(ce(zs), R.ADD_URI_SAFE_ATTR, tr) : zs),
						(eo = N(R, "ADD_DATA_URI_TAGS") ? V(ce(to), R.ADD_DATA_URI_TAGS, tr) : to),
						(Sr = N(R, "FORBID_CONTENTS") ? V({}, R.FORBID_CONTENTS, tr) : $i),
						(Kt = N(R, "FORBID_TAGS") ? V({}, R.FORBID_TAGS, tr) : ce({})),
						(pr = N(R, "FORBID_ATTR") ? V({}, R.FORBID_ATTR, tr) : ce({})),
						(cr = N(R, "USE_PROFILES") ? R.USE_PROFILES : !1),
						(rn = R.ALLOW_ARIA_ATTR !== !1),
						(kr = R.ALLOW_DATA_ATTR !== !1),
						(Vn = R.ALLOW_UNKNOWN_PROTOCOLS || !1),
						(Fa = R.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
						(fn = R.SAFE_FOR_TEMPLATES || !1),
						(Sn = R.SAFE_FOR_XML !== !1),
						(mn = R.WHOLE_DOCUMENT || !1),
						(he = R.RETURN_DOM || !1),
						(Ve = R.RETURN_DOM_FRAGMENT || !1),
						(mt = R.RETURN_TRUSTED_TYPE || !1),
						(Qi = R.FORCE_BODY || !1),
						(Bt = R.SANITIZE_DOM !== !1),
						(er = R.SANITIZE_NAMED_PROPS || !1),
						(nn = R.KEEP_CONTENT !== !1),
						(Tn = R.IN_PLACE || !1),
						(at = R.ALLOWED_URI_REGEXP || be),
						(Kn = R.NAMESPACE || Hr),
						(rt = R.MATHML_TEXT_INTEGRATION_POINTS || rt),
						(qa = R.HTML_INTEGRATION_POINTS || qa),
						(bt = R.CUSTOM_ELEMENT_HANDLING || {}),
						R.CUSTOM_ELEMENT_HANDLING &&
							Ue(R.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
							(bt.tagNameCheck = R.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
						R.CUSTOM_ELEMENT_HANDLING &&
							Ue(R.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
							(bt.attributeNameCheck = R.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
						R.CUSTOM_ELEMENT_HANDLING &&
							typeof R.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" &&
							(bt.allowCustomizedBuiltInElements =
								R.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
						fn && (kr = !1),
						Ve && (he = !0),
						cr &&
							((We = V({}, te)),
							(wt = []),
							cr.html === !0 && (V(We, Q), V(wt, Ke)),
							cr.svg === !0 && (V(We, $), V(wt, qe), V(wt, je)),
							cr.svgFilters === !0 && (V(We, K), V(wt, qe), V(wt, je)),
							cr.mathMl === !0 && (V(We, ie), V(wt, Qe), V(wt, je))),
						R.ADD_TAGS &&
							(typeof R.ADD_TAGS == "function"
								? (Or.tagCheck = R.ADD_TAGS)
								: (We === Pt && (We = ce(We)), V(We, R.ADD_TAGS, tr))),
						R.ADD_ATTR &&
							(typeof R.ADD_ATTR == "function"
								? (Or.attributeCheck = R.ADD_ATTR)
								: (wt === zr && (wt = ce(wt)), V(wt, R.ADD_ATTR, tr))),
						R.ADD_URI_SAFE_ATTR && V(ro, R.ADD_URI_SAFE_ATTR, tr),
						R.FORBID_CONTENTS && (Sr === $i && (Sr = ce(Sr)), V(Sr, R.FORBID_CONTENTS, tr)),
						nn && (We["#text"] = !0),
						mn && V(We, ["html", "head", "body"]),
						We.table && (V(We, ["tbody"]), delete Kt.tbody),
						R.TRUSTED_TYPES_POLICY)
					) {
						if (typeof R.TRUSTED_TYPES_POLICY.createHTML != "function")
							throw I(
								'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
							);
						if (typeof R.TRUSTED_TYPES_POLICY.createScriptURL != "function")
							throw I(
								'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
							);
						(Wt = R.TRUSTED_TYPES_POLICY), (lr = Wt.createHTML(""));
					} else
						Wt === void 0 && (Wt = ct(sr, Re)),
							Wt !== null && typeof lr == "string" && (lr = Wt.createHTML(""));
					i && i(R), (An = R);
				}
			},
			Nt = V({}, [...$, ...K, ...le]),
			vr = V({}, [...ie, ...oe]),
			pn = function (R) {
				let me = Lr(R);
				(!me || !me.tagName) && (me = { namespaceURI: Kn, tagName: "template" });
				const Fe = x(R.tagName),
					Yt = x(me.tagName);
				return no[R.namespaceURI]
					? R.namespaceURI === hi
						? me.namespaceURI === Hr
							? Fe === "svg"
							: me.namespaceURI === di
								? Fe === "svg" && (Yt === "annotation-xml" || rt[Yt])
								: !!Nt[Fe]
						: R.namespaceURI === di
							? me.namespaceURI === Hr
								? Fe === "math"
								: me.namespaceURI === hi
									? Fe === "math" && qa[Yt]
									: !!vr[Fe]
							: R.namespaceURI === Hr
								? (me.namespaceURI === hi && !qa[Yt]) || (me.namespaceURI === di && !rt[Yt])
									? !1
									: !vr[Fe] && (gr[Fe] || !Nt[Fe])
								: !!(Ot === "application/xhtml+xml" && no[R.namespaceURI])
					: !1;
			},
			an = function (R) {
				g(_e.removed, { element: R });
				try {
					Lr(R).removeChild(R);
				} catch {
					kn(R);
				}
			},
			Xn = function (R, me) {
				try {
					g(_e.removed, { attribute: me.getAttributeNode(R), from: me });
				} catch {
					g(_e.removed, { attribute: null, from: me });
				}
				if ((me.removeAttribute(R), R === "is"))
					if (he || Ve)
						try {
							an(me);
						} catch {}
					else
						try {
							me.setAttribute(R, "");
						} catch {}
			},
			Ju = function (R) {
				let me = null,
					Fe = null;
				if (Qi) R = "<remove></remove>" + R;
				else {
					const ur = k(R, /^[\r\n\t ]+/);
					Fe = ur && ur[0];
				}
				Ot === "application/xhtml+xml" &&
					Kn === Hr &&
					(R =
						'<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
						R +
						"</body></html>");
				const Yt = Wt ? Wt.createHTML(R) : R;
				if (Kn === Hr)
					try {
						me = new mr().parseFromString(Yt, Ot);
					} catch {}
				if (!me || !me.documentElement) {
					me = M.createDocument(Kn, "template", null);
					try {
						me.documentElement.innerHTML = Gr ? lr : Yt;
					} catch {}
				}
				const Nr = me.body || me.documentElement;
				return (
					R && Fe && Nr.insertBefore(De.createTextNode(Fe), Nr.childNodes[0] || null),
					Kn === Hr ? Ge.call(me, mn ? "html" : "body")[0] : mn ? me.documentElement : Nr
				);
			},
			Qu = function (R) {
				return Y.call(
					R.ownerDocument || R,
					R,
					Zt.SHOW_ELEMENT |
						Zt.SHOW_COMMENT |
						Zt.SHOW_TEXT |
						Zt.SHOW_PROCESSING_INSTRUCTION |
						Zt.SHOW_CDATA_SECTION,
					null
				);
			},
			Tl = function (R) {
				return (
					R instanceof Gt &&
					(typeof R.nodeName != "string" ||
						typeof R.textContent != "string" ||
						typeof R.removeChild != "function" ||
						!(R.attributes instanceof $t) ||
						typeof R.removeAttribute != "function" ||
						typeof R.setAttribute != "function" ||
						typeof R.namespaceURI != "string" ||
						typeof R.insertBefore != "function" ||
						typeof R.hasChildNodes != "function")
				);
			},
			$u = function (R) {
				return typeof Ht == "function" && R instanceof Ht;
			};
		function Zn(Ze, R, me) {
			h(Ze, (Fe) => {
				Fe.call(_e, R, me, An);
			});
		}
		const ed = function (R) {
				let me = null;
				if ((Zn(P.beforeSanitizeElements, R, null), Tl(R))) return an(R), !0;
				const Fe = tr(R.nodeName);
				if (
					(Zn(P.uponSanitizeElement, R, { tagName: Fe, allowedTags: We }),
					(Sn &&
						R.hasChildNodes() &&
						!$u(R.firstElementChild) &&
						z(/<[/\w!]/g, R.innerHTML) &&
						z(/<[/\w!]/g, R.textContent)) ||
						R.nodeType === st.progressingInstruction ||
						(Sn && R.nodeType === st.comment && z(/<[/\w]/g, R.data)))
				)
					return an(R), !0;
				if (!(Or.tagCheck instanceof Function && Or.tagCheck(Fe)) && (!We[Fe] || Kt[Fe])) {
					if (
						!Kt[Fe] &&
						rd(Fe) &&
						((bt.tagNameCheck instanceof RegExp && z(bt.tagNameCheck, Fe)) ||
							(bt.tagNameCheck instanceof Function && bt.tagNameCheck(Fe)))
					)
						return !1;
					if (nn && !Sr[Fe]) {
						const Yt = Lr(R) || R.parentNode,
							Nr = Ur(R) || R.childNodes;
						if (Nr && Yt) {
							const ur = Nr.length;
							for (let Wr = ur - 1; Wr >= 0; --Wr) {
								const jn = Wn(Nr[Wr], !0);
								(jn.__removalCount = (R.__removalCount || 0) + 1), Yt.insertBefore(jn, Zr(R));
							}
						}
					}
					return an(R), !0;
				}
				return (R instanceof nr && !pn(R)) ||
					((Fe === "noscript" || Fe === "noembed" || Fe === "noframes") &&
						z(/<\/no(script|embed|frames)/i, R.innerHTML))
					? (an(R), !0)
					: (fn &&
							R.nodeType === st.text &&
							((me = R.textContent),
							h([H, J, de], (Yt) => {
								me = T(me, Yt, " ");
							}),
							R.textContent !== me &&
								(g(_e.removed, { element: R.cloneNode() }), (R.textContent = me))),
						Zn(P.afterSanitizeElements, R, null),
						!1);
			},
			td = function (R, me, Fe) {
				if (Bt && (me === "id" || me === "name") && (Fe in De || Fe in Te)) return !1;
				if (!(kr && !pr[me] && z(Ie, me))) {
					if (!(rn && z(Ne, me))) {
						if (!(Or.attributeCheck instanceof Function && Or.attributeCheck(me, R))) {
							if (!wt[me] || pr[me]) {
								if (
									!(
										(rd(R) &&
											((bt.tagNameCheck instanceof RegExp && z(bt.tagNameCheck, R)) ||
												(bt.tagNameCheck instanceof Function && bt.tagNameCheck(R))) &&
											((bt.attributeNameCheck instanceof RegExp && z(bt.attributeNameCheck, me)) ||
												(bt.attributeNameCheck instanceof Function &&
													bt.attributeNameCheck(me, R)))) ||
										(me === "is" &&
											bt.allowCustomizedBuiltInElements &&
											((bt.tagNameCheck instanceof RegExp && z(bt.tagNameCheck, Fe)) ||
												(bt.tagNameCheck instanceof Function && bt.tagNameCheck(Fe))))
									)
								)
									return !1;
							} else if (!ro[me]) {
								if (!z(at, T(Fe, St, ""))) {
									if (
										!(
											(me === "src" || me === "xlink:href" || me === "href") &&
											R !== "script" &&
											B(Fe, "data:") === 0 &&
											eo[R]
										)
									) {
										if (!(Vn && !z(gt, T(Fe, St, "")))) {
											if (Fe) return !1;
										}
									}
								}
							}
						}
					}
				}
				return !0;
			},
			rd = function (R) {
				return R !== "annotation-xml" && k(R, Dt);
			},
			nd = function (R) {
				Zn(P.beforeSanitizeAttributes, R, null);
				const { attributes: me } = R;
				if (!me || Tl(R)) return;
				const Fe = {
					attrName: "",
					attrValue: "",
					keepAttr: !0,
					allowedAttributes: wt,
					forceKeepAttr: void 0,
				};
				let Yt = me.length;
				for (; Yt--; ) {
					const Nr = me[Yt],
						{ name: ur, namespaceURI: Wr, value: jn } = Nr,
						mi = tr(ur),
						Al = jn;
					let Er = ur === "value" ? Al : A(Al);
					if (
						((Fe.attrName = mi),
						(Fe.attrValue = Er),
						(Fe.keepAttr = !0),
						(Fe.forceKeepAttr = void 0),
						Zn(P.uponSanitizeAttribute, R, Fe),
						(Er = Fe.attrValue),
						er && (mi === "id" || mi === "name") && (Xn(ur, R), (Er = jr + Er)),
						Sn && z(/((--!?|])>)|<\/(style|title|textarea)/i, Er))
					) {
						Xn(ur, R);
						continue;
					}
					if (mi === "attributename" && k(Er, "href")) {
						Xn(ur, R);
						continue;
					}
					if (Fe.forceKeepAttr) continue;
					if (!Fe.keepAttr) {
						Xn(ur, R);
						continue;
					}
					if (!Fa && z(/\/>/i, Er)) {
						Xn(ur, R);
						continue;
					}
					fn &&
						h([H, J, de], (id) => {
							Er = T(Er, id, " ");
						});
					const ad = tr(R.nodeName);
					if (!td(ad, mi, Er)) {
						Xn(ur, R);
						continue;
					}
					if (Wt && typeof sr == "object" && typeof sr.getAttributeType == "function" && !Wr)
						switch (sr.getAttributeType(ad, mi)) {
							case "TrustedHTML": {
								Er = Wt.createHTML(Er);
								break;
							}
							case "TrustedScriptURL": {
								Er = Wt.createScriptURL(Er);
								break;
							}
						}
					if (Er !== Al)
						try {
							Wr ? R.setAttributeNS(Wr, ur, Er) : R.setAttribute(ur, Er),
								Tl(R) ? an(R) : p(_e.removed);
						} catch {
							Xn(ur, R);
						}
				}
				Zn(P.afterSanitizeAttributes, R, null);
			},
			Lm = function Ze(R) {
				let me = null;
				const Fe = Qu(R);
				for (Zn(P.beforeSanitizeShadowDOM, R, null); (me = Fe.nextNode()); )
					Zn(P.uponSanitizeShadowNode, me, null),
						ed(me),
						nd(me),
						me.content instanceof dt && Ze(me.content);
				Zn(P.afterSanitizeShadowDOM, R, null);
			};
		return (
			(_e.sanitize = function (Ze) {
				let R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
					me = null,
					Fe = null,
					Yt = null,
					Nr = null;
				if (((Gr = !Ze), Gr && (Ze = "<!-->"), typeof Ze != "string" && !$u(Ze)))
					if (typeof Ze.toString == "function") {
						if (((Ze = Ze.toString()), typeof Ze != "string"))
							throw I("dirty is not a string, aborting");
					} else throw I("toString is not a function");
				if (!_e.isSupported) return Ze;
				if ((En || ht(R), (_e.removed = []), typeof Ze == "string" && (Tn = !1), Tn)) {
					if (Ze.nodeName) {
						const jn = tr(Ze.nodeName);
						if (!We[jn] || Kt[jn])
							throw I("root node is forbidden and cannot be sanitized in-place");
					}
				} else if (Ze instanceof Ht)
					(me = Ju("<!---->")),
						(Fe = me.ownerDocument.importNode(Ze, !0)),
						(Fe.nodeType === st.element && Fe.nodeName === "BODY") || Fe.nodeName === "HTML"
							? (me = Fe)
							: me.appendChild(Fe);
				else {
					if (!he && !fn && !mn && Ze.indexOf("<") === -1) return Wt && mt ? Wt.createHTML(Ze) : Ze;
					if (((me = Ju(Ze)), !me)) return he ? null : mt ? lr : "";
				}
				me && Qi && an(me.firstChild);
				const ur = Qu(Tn ? Ze : me);
				for (; (Yt = ur.nextNode()); ) ed(Yt), nd(Yt), Yt.content instanceof dt && Lm(Yt.content);
				if (Tn) return Ze;
				if (he) {
					if (Ve)
						for (Nr = ve.call(me.ownerDocument); me.firstChild; ) Nr.appendChild(me.firstChild);
					else Nr = me;
					return (wt.shadowroot || wt.shadowrootmode) && (Nr = kt.call(ke, Nr, !0)), Nr;
				}
				let Wr = mn ? me.outerHTML : me.innerHTML;
				return (
					mn &&
						We["!doctype"] &&
						me.ownerDocument &&
						me.ownerDocument.doctype &&
						me.ownerDocument.doctype.name &&
						z(Be, me.ownerDocument.doctype.name) &&
						(Wr =
							"<!DOCTYPE " +
							me.ownerDocument.doctype.name +
							`>
` +
							Wr),
					fn &&
						h([H, J, de], (jn) => {
							Wr = T(Wr, jn, " ");
						}),
					Wt && mt ? Wt.createHTML(Wr) : Wr
				);
			}),
			(_e.setConfig = function () {
				let Ze = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				ht(Ze), (En = !0);
			}),
			(_e.clearConfig = function () {
				(An = null), (En = !1);
			}),
			(_e.isValidAttribute = function (Ze, R, me) {
				An || ht({});
				const Fe = tr(Ze),
					Yt = tr(R);
				return td(Fe, Yt, me);
			}),
			(_e.addHook = function (Ze, R) {
				typeof R == "function" && g(P[Ze], R);
			}),
			(_e.removeHook = function (Ze, R) {
				if (R !== void 0) {
					const me = f(P[Ze], R);
					return me === -1 ? void 0 : y(P[Ze], me, 1)[0];
				}
				return p(P[Ze]);
			}),
			(_e.removeHooks = function (Ze) {
				P[Ze] = [];
			}),
			(_e.removeAllHooks = function () {
				P = pt();
			}),
			_e
		);
	}
	var Ct = Mt();
	return ($l = Ct), $l;
}
var ec, P1;
function lb() {
	return P1 || ((P1 = 1), (ec = window.DOMPurify || (window.DOMPurify = B1().default || B1()))), ec;
}
var cb = lb();
const ub = eh(cb);
var db = (r, e, t) => e(t()),
	hb = Z(
		'<button class="btn absolute bottom-4 right-4 flex items-center gap-2 rounded-full border-2 border-red-500/60 bg-red-800/90 px-4 py-1.5 text-sm text-white shadow-lg" title="Copy error"><!> <span> </span></button>'
	),
	fb = Z(
		'<div class="p-4"><div class="relative h-[90dvh] w-[80dvw]"><iframe title="HTML Preview" class="h-full w-full rounded-lg border border-gray-200 dark:border-gray-700" sandbox="allow-scripts allow-popups" referrerpolicy="no-referrer"></iframe> <!></div></div>'
	);
function mb(r, e) {
	yt(e, !0);
	let t = Ee(void 0),
		n = `preview_${Math.random().toString(36).slice(2)}`,
		a = Ee(cn([]));
	function i(g, y) {
		const x = g.trimStart(),
			_ = /^(?:<\?xml[^>]*>\s*)?(?:<!doctype\s+svg[^>]*>\s*)?<svg[\s>]/i,
			k = '<base target="_blank">',
			T = `<style>
			a[data-chatui-link-disabled] {}
		</style>`,
			A = `
<script>
(function(){
  function send(detail){
    try{ parent.postMessage({ type: 'chatui.preview.error', channel: '${y}', detail: detail }, '*'); }catch(e){}
  }
  function markDisabled(anchor){
    if (!anchor || anchor.dataset.chatuiLinkDisabled === 'true') return;
    anchor.dataset.chatuiLinkDisabled = 'true';
    var note = 'Link disabled in preview';
    var title = anchor.getAttribute('title');
    if (!title) {
      anchor.setAttribute('title', note);
    } else if (title.indexOf(note) === -1) {
      anchor.setAttribute('title', title + ' — ' + note);
    }
  }
  function disableAnchors(scope){
    try {
      var root = scope && scope.querySelectorAll ? scope : document;
      var anchors = root.querySelectorAll ? root.querySelectorAll('a') : [];
      for (var i = 0; i < anchors.length; i++) {
        markDisabled(anchors[i]);
      }
    } catch (err) {}
  }
  function nearestAnchor(node){
    while (node && node !== document) {
      if (node.tagName && node.tagName.toLowerCase() === 'a') return node;
      node = node.parentNode;
    }
    return null;
  }
  function intercept(ev){
    var anchor = nearestAnchor(ev.target);
    if (!anchor) return;
    markDisabled(anchor);
    ev.preventDefault();
    ev.stopPropagation();
  }
  disableAnchors();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function(){ disableAnchors(); });
  } else {
    setTimeout(function(){ disableAnchors(); }, 0);
  }
  if (window.MutationObserver) {
    var observer = new MutationObserver(function(mutations){
      for (var i = 0; i < mutations.length; i++) {
        var nodes = mutations[i].addedNodes;
        for (var j = 0; j < nodes.length; j++) {
          var node = nodes[j];
          if (!node || node.nodeType !== 1) continue;
          if (node.tagName && node.tagName.toLowerCase() === 'a') {
            markDisabled(node);
          } else {
            disableAnchors(node);
          }
        }
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }
  window.addEventListener('click', intercept, true);
  window.addEventListener('auxclick', intercept, true);
  window.addEventListener('keydown', function(ev){
    if (ev.key === 'Enter' || ev.key === ' ') {
      intercept(ev);
    }
  }, true);
  window.addEventListener('error', function(ev){
    var msg = ev && ev.message ? ev.message : 'Script error';
    var stack = ev && ev.error && ev.error.stack ? ev.error.stack : undefined;
    send({ message: msg, stack: stack });
  });
  window.addEventListener('unhandledrejection', function(ev){
    var r = ev && ev.reason;
    var msg = (typeof r === 'string') ? r : (r && r.message) ? r.message : 'Unhandled promise rejection';
    var stack = r && r.stack ? r.stack : undefined;
    send({ message: msg, stack: stack });
  });
})();
<\/script>`;
		if (_.test(x)) {
			const G = x.replace(/^(<\?xml[^>]*>\s*)/i, "").replace(/^(<!doctype[^>]*>\s*)/i, "");
			return `<!doctype html><html><head>${k}${T}${A}</head><body>${G}</body></html>`;
		}
		const N = g.match(/<head[^>]*>/i);
		if (N) return g.replace(N[0], N[0] + k + T + A);
		const z = g.match(/<html[^>]*>/i);
		if (z)
			return g.replace(
				z[0],
				z[0] +
					`
<head>` +
					k +
					T +
					A +
					"</head>"
			);
		const I = g.match(/<!doctype[^>]*>/i);
		if (I) {
			const G = g.indexOf(I[0]) + I[0].length;
			return (
				g.slice(0, G) +
				`
<head>` +
				k +
				T +
				A +
				"</head>" +
				g.slice(G)
			);
		}
		return (
			"<head>" +
			k +
			T +
			A +
			`</head>
` +
			g
		);
	}
	let o = j(() => i(e.html, n));
	function s(g) {
		if (!m(t) || g.source !== m(t).contentWindow) return;
		const y = g.data;
		if (!y || typeof y != "object") return;
		const x = y;
		if (x.type !== "chatui.preview.error" || x.channel !== n) return;
		const _ = x.detail ?? {};
		F(a, [...m(a), { message: String(_.message ?? "Error"), stack: _.stack }], !0);
	}
	_s(() => {
		window.addEventListener("message", s);
	}),
		Ki(() => {
			window.removeEventListener("message", s), f && clearTimeout(f);
		});
	function l() {
		const y =
			m(a).map(
				(x, _) =>
					`${_ + 1}. ${x.message}${
						x.stack
							? `
${x.stack}`
							: ""
					}`
			)[0] ?? "Unknown error";
		return m(a).length > 1
			? `it's not working: ${y} (+${m(a).length - 1} more) - can you fix it?`
			: `it's not working: ${y} - can you fix it?`;
	}
	async function u(g) {
		try {
			if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(g);
			else {
				const y = document.createElement("textarea");
				(y.value = g),
					(y.style.position = "fixed"),
					(y.style.left = "-9999px"),
					document.body.appendChild(y),
					y.focus(),
					y.select(),
					document.execCommand("copy"),
					document.body.removeChild(y);
			}
			F(h, !0), clearTimeout(f), (f = setTimeout(() => F(h, !1), 1200));
		} catch (y) {
			console.error("Copy failed", y);
		}
	}
	let h = Ee(!1),
		f;
	function p(g) {
		var y;
		g.key === "Escape" && (g.preventDefault(), (y = e.onclose) == null || y.call(e));
	}
	dr("keydown", lo, p),
		ks(r, {
			width: "max-w-[90dvw]",
			closeButton: !0,
			onclose: () => {
				var g;
				return (g = e.onclose) == null ? void 0 : g.call(e);
			},
			children: (g, y) => {
				var x = fb(),
					_ = L(x),
					k = L(_);
				vn(
					k,
					(A) => F(t, A),
					() => m(t)
				);
				var T = X(k, 2);
				{
					var B = (A) => {
						var N = hb();
						N.__click = [db, u, l];
						var z = L(N);
						xp(z, { class: "text-xs" });
						var I = X(z, 2),
							G = L(I, !0);
						O(I), O(N), Me(() => ut(G, m(h) ? "Copied" : `Error caught (${m(a).length})`)), C(A, N);
					};
					ne(T, (A) => {
						m(a).length > 0 && A(B);
					});
				}
				O(_), O(x), Me(() => qt(k, "srcdoc", m(o))), C(g, x);
			},
			$$slots: { default: !0 },
		}),
		xt();
}
Mr(["click"]);
var pb = or("<svg><!></svg>");
function gb(r, e) {
	const t = Cr(e, ["children", "$$slots", "$$events", "$$legacy"]);
	var n = pb();
	zt(n, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var a = L(n);
	wr(
		a,
		() =>
			'<path fill="currentColor" d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28"/>',
		!0
	),
		O(n),
		C(r, n);
}
var vb = (r, e, t) => {
		e() || F(t, !0);
	},
	bb = Z(
		'<button class="btn h-7 gap-1 rounded-lg border px-2 text-xs shadow-sm backdrop-blur transition-none hover:border-gray-500 active:shadow-inner disabled:cursor-not-allowed disabled:opacity-80 dark:border-gray-600 dark:bg-gray-600/50 dark:hover:border-gray-500" title="Preview HTML" aria-label="Preview HTML"><!> Preview</button>'
	),
	yb = Z(
		'<div class="group relative my-4 rounded-lg"><div class="pointer-events-none sticky top-0 w-full"><div class="pointer-events-auto absolute right-2 top-2 flex items-center gap-1.5 md:right-3 md:top-3"><!> <!></div></div> <pre class="scrollbar-custom overflow-auto px-5 font-mono transition-[height]"><code><!></code></pre> <!></div>'
	);
function xb(r, e) {
	yt(e, !0);
	let t = q(e, "code", 3, ""),
		n = q(e, "rawCode", 3, ""),
		a = q(e, "loading", 3, !1),
		i = Ee(!1);
	function o(A) {
		if (!A) return !1;
		const z = A.replace(/^\uFEFF/, "").trimStart();
		return /^<!doctype\s+html\s*>/i.test(z);
	}
	function s(A) {
		const N = A.trimStart();
		return /^(?:<\?xml[^>]*>\s*)?(?:<!doctype\s+svg[^>]*>\s*)?<svg[\s>]/i.test(N);
	}
	let l = j(() => o(n()) || s(n()));
	var u = yb(),
		h = L(u),
		f = L(h),
		p = L(f);
	{
		var g = (A) => {
			var N = bb();
			N.__click = [vb, a, i];
			var z = L(N);
			{
				var I = (re) => {
						gu(re, { class: "size-3.5" });
					},
					G = (re) => {
						gb(re, { class: "size-3.5" });
					};
				ne(z, (re) => {
					a() ? re(I) : re(G, !1);
				});
			}
			ar(), O(N), Me(() => (N.disabled = a())), C(A, N);
		};
		ne(p, (A) => {
			m(l) && A(g);
		});
	}
	var y = X(p, 2);
	jc(y, {
		iconClassNames: "size-3",
		classNames:
			"btn transition-none rounded-lg border size-7 text-sm shadow-sm dark:bg-gray-600/50 backdrop-blur dark:hover:border-gray-500  active:shadow-inner dark:border-gray-600  hover:border-gray-500",
		get value() {
			return n();
		},
	}),
		O(f),
		O(h);
	var x = X(h, 2),
		_ = L(x),
		k = L(_);
	wr(k, () => ub.sanitize(t())), O(_), O(x);
	var T = X(x, 2);
	{
		var B = (A) => {
			mb(A, {
				get html() {
					return n();
				},
				onclose: () => F(i, !1),
			});
		};
		ne(T, (A) => {
			m(i) && A(B);
		});
	}
	O(u), C(r, u), xt();
}
Mr(["click"]);
function wb(r, e) {
	let t = q(e, "loading", 3, !1);
	const n = j(() => e.tokens);
	var a = He(),
		i = pe(a);
	Tr(
		i,
		17,
		() => m(n),
		sn,
		(o, s) => {
			var l = He(),
				u = pe(l);
			{
				var h = (p) => {
						var g = He(),
							y = pe(g);
						wr(y, () => m(s).html), C(p, g);
					},
					f = (p, g) => {
						{
							var y = (x) => {
								const _ = j(() => t() && !m(s).isClosed);
								xb(x, {
									get code() {
										return m(s).code;
									},
									get rawCode() {
										return m(s).rawCode;
									},
									get loading() {
										return m(_);
									},
								});
							};
							ne(
								p,
								(x) => {
									m(s).type === "code" && x(y);
								},
								g
							);
						}
					};
				ne(u, (p) => {
					m(s).type === "text" ? p(h) : p(f, !1);
				});
			}
			C(o, l);
		}
	),
		C(r, a);
}
class _b {
	constructor() {
		(this.renderStartedAt = null), (this.lastRenderTimes = []);
	}
	get maxUpdateTime() {
		if (this.lastRenderTimes.length === 0) return 50;
		const e = this.lastRenderTimes.reduce((t, n) => t + n, 0) / this.lastRenderTimes.length;
		return Math.min(e * 3, 500);
	}
	startRender() {
		this.renderStartedAt = new Date();
	}
	endRender() {
		if (!this.renderStartedAt) return;
		const e = new Date().getTime() - this.renderStartedAt.getTime();
		this.lastRenderTimes.push(e),
			this.lastRenderTimes.length > 10 && this.lastRenderTimes.shift(),
			(this.renderStartedAt = null);
	}
}
const tc = new _b();
function Gc(r, e) {
	yt(e, !0);
	let t = q(e, "sources", 19, () => []),
		n = q(e, "loading", 3, !1),
		a = Ee(cn(ob(e.content, t()))),
		i = null,
		o = 0;
	function s(h, f) {
		f === o && (F(a, h, !0), tc.endRender());
	}
	Rt(() => {
		const h = ++o;
		if (i) {
			tc.startRender(),
				i.postMessage({ type: "process", content: e.content, sources: t(), requestId: h });
			return;
		}
		(async () => {
			tc.startRender();
			const f = await ib(e.content, t());
			s(f, h);
		})();
	}),
		_s(() => {
			typeof Worker < "u" &&
				((i = new sb()),
				(i.onmessage = (h) => {
					const f = h.data;
					(f == null ? void 0 : f.type) !== "processed" ||
						!f.blocks ||
						f.requestId === void 0 ||
						s(f.blocks, f.requestId);
				}));
		}),
		Ki(() => {
			i == null || i.terminate(), (i = null);
		});
	var l = He(),
		u = pe(l);
	Tr(
		u,
		19,
		() => m(a),
		(h, f) => (n() && f === m(a).length - 1 ? `stream-${f}` : h.id),
		(h, f) => {
			wb(h, {
				get tokens() {
					return m(f).tokens;
				},
				get loading() {
					return n();
				},
			});
		}
	),
		C(r, l),
		xt();
}
var kb = or(
		'<path class="animate-pulse stroke-white" style="stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 50;" d="M16 6v3.33M16 6c0-2.65 3.25-4.3 5.4-2.62 1.2.95 1.6 2.65.95 4.04a3.63 3.63 0 0 1 4.61.16 3.45 3.45 0 0 1 .46 4.37 5.32 5.32 0 0 1 1.87 4.75c-.22 1.66-1.39 3.6-3.07 4.14M16 6c0-2.65-3.25-4.3-5.4-2.62a3.37 3.37 0 0 0-.95 4.04 3.65 3.65 0 0 0-4.6.16 3.37 3.37 0 0 0-.49 4.27 5.57 5.57 0 0 0-1.85 4.85 5.3 5.3 0 0 0 3.07 4.15M16 9.33v17.34m0-17.34c0 2.18 1.82 4 4 4m6.22 7.5c.67 1.3.56 2.91-.27 4.11a4.05 4.05 0 0 1-4.62 1.5c0 1.53-1.05 2.9-2.66 2.9A2.7 2.7 0 0 1 16 26.66m10.22-5.83a4.05 4.05 0 0 0-3.55-2.17m-16.9 2.18a4.05 4.05 0 0 0 .28 4.1c1 1.44 2.92 2.09 4.59 1.5 0 1.52 1.12 2.88 2.7 2.88A2.7 2.7 0 0 0 16 26.67M5.78 20.85a4.04 4.04 0 0 1 3.55-2.18"><animate attributeName="stroke-dashoffset" values="0;500" dur="12s" repeatCount="indefinite"></animate></path>'
	),
	Sb =
		Z(`<details class="group flex w-fit max-w-full flex-col rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 [&amp;:has(+_.prose)]:mb-4 [.prose+&amp;]:mt-4 [details+&amp;]:mt-2 svelte-135jgtx"><summary class="
		grid min-w-72 cursor-pointer select-none grid-cols-[40px,1fr,24px] items-center gap-2.5 rounded-xl p-2 group-open:rounded-b-none hover:bg-gray-50 dark:hover:bg-gray-800/20 svelte-135jgtx"><div class="relative grid aspect-square place-content-center overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"><div class="grid h-dvh place-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path class="stroke-gray-600 dark:stroke-gray-400" style="stroke-width: 1.9; fill: none; stroke-linecap: round; stroke-linejoin: round;" d="M16 6v3.33M16 6c0-2.65 3.25-4.3 5.4-2.62 1.2.95 1.6 2.65.95 4.04a3.63 3.63 0 0 1 4.61.16 3.45 3.45 0 0 1 .46 4.37 5.32 5.32 0 0 1 1.87 4.75c-.22 1.66-1.39 3.6-3.07 4.14M16 6c0-2.65-3.25-4.3-5.4-2.62a3.37 3.37 0 0 0-.95 4.04 3.65 3.65 0 0 0-4.6.16 3.37 3.37 0 0 0-.49 4.27 5.57 5.57 0 0 0-1.85 4.85 5.3 5.3 0 0 0 3.07 4.15M16 9.33v17.34m0-17.34c0 2.18 1.82 4 4 4m6.22 7.5c.67 1.3.56 2.91-.27 4.11a4.05 4.05 0 0 1-4.62 1.5c0 1.53-1.05 2.9-2.66 2.9A2.7 2.7 0 0 1 16 26.66m10.22-5.83a4.05 4.05 0 0 0-3.55-2.17m-16.9 2.18a4.05 4.05 0 0 0 .28 4.1c1 1.44 2.92 2.09 4.59 1.5 0 1.52 1.12 2.88 2.7 2.88A2.7 2.7 0 0 0 16 26.67M5.78 20.85a4.04 4.04 0 0 1 3.55-2.18"></path><!></svg></div></div> <dl class="leading-4"><dd class="text-sm">Reasoning</dd> <dt> </dt></dl> <!></summary> <div class="prose prose-sm !max-w-none space-y-4 border-t border-gray-200 p-3 text-sm text-gray-600 dark:prose-invert prose-img:my-0 prose-img:rounded-lg dark:border-gray-800 dark:text-gray-400"><!></div></details>`);
function Eb(r, e) {
	yt(e, !0);
	let t = q(e, "loading", 3, !1),
		n = Ee(cn(t()));
	Rt(() => {
		F(n, t());
	});
	var a = Sb(),
		i = L(a),
		o = L(i),
		s = L(o),
		l = L(s),
		u = X(L(l));
	{
		var h = (T) => {
			var B = kb();
			C(T, B);
		};
		ne(u, (T) => {
			t() && T(h);
		});
	}
	O(l), O(s), O(o);
	var f = X(o, 2),
		p = X(L(f), 2);
	let g;
	var y = L(p, !0);
	O(p), O(f);
	var x = X(f, 2);
	lh(x, { class: "transition-rotate size-5 -rotate-90 text-gray-400 group-open:rotate-0" }), O(i);
	var _ = X(i, 2),
		k = L(_);
	ah(
		k,
		() => e.content,
		(T) => {
			Gc(T, {
				get content() {
					return e.content;
				},
				get loading() {
					return t();
				},
			});
		}
	),
		O(_),
		O(a),
		Me(
			(T, B) => {
				(g = Tt(
					p,
					1,
					"flex items-center gap-1 truncate whitespace-nowrap text-[.82rem] text-gray-400",
					null,
					g,
					T
				)),
					ut(y, B);
			},
			[
				() => ({ "animate-pulse": t() }),
				() =>
					e.summary.length > 33
						? e.summary.substring(0, 33) + "..."
						: e.summary.endsWith("...")
							? e.summary
							: e.summary + "...",
			]
		),
		oh(
			"open",
			"toggle",
			a,
			(T) => F(n, T),
			() => m(n)
		),
		C(r, a),
		xt();
}
var Tb = (r, e, t, n) => {
		var a;
		return (a = e.onshowAlternateMsg) == null
			? void 0
			: a.call(e, { id: t()[Math.max(0, m(n) - 1)] });
	},
	Ab = (r, e, t, n) => {
		var a;
		return (a = e.onshowAlternateMsg) == null
			? void 0
			: a.call(e, { id: t()[Math.min(t().length - 1, m(n) + 1)] });
	},
	Mb = Z(
		'<div><button class="inline text-lg font-thin text-gray-400 hover:text-gray-800 disabled:pointer-events-none disabled:opacity-25 dark:text-gray-500 dark:hover:text-gray-200"><!></button> <span class=" text-gray-400 dark:text-gray-500"> </span> <button class="inline text-lg font-thin text-gray-400 hover:text-gray-800 disabled:pointer-events-none disabled:opacity-25 dark:text-gray-500 dark:hover:text-gray-200"><!></button></div>'
	);
function F1(r, e) {
	yt(e, !0);
	let t = q(e, "alternatives", 19, () => []),
		n = q(e, "loading", 3, !1),
		a = q(e, "classNames", 3, ""),
		i = j(() => t().findIndex((g) => g === e.message.id));
	var o = Mb(),
		s = L(o);
	s.__click = [Tb, e, t, i];
	var l = L(s);
	th(l, { class: "text-sm" }), O(s);
	var u = X(s, 2),
		h = L(u);
	O(u);
	var f = X(u, 2);
	f.__click = [Ab, e, t, i];
	var p = L(f);
	O0(p, { class: "text-sm" }),
		O(f),
		O(o),
		Me(() => {
			Tt(
				o,
				1,
				`font-white group/navbranch z-0 flex h-6 w-fit select-none items-center justify-center gap-1 whitespace-nowrap text-sm ${a() ?? ""}`
			),
				(s.disabled = m(i) === 0 || n()),
				ut(h, `${m(i) + 1} / ${t().length ?? ""}`),
				(f.disabled = m(i) === t().length - 1 || n());
		}),
		C(r, o),
		xt();
}
Mr(["click"]);
var Cb =
	or(`<svg id="ball" width="1em" height="1em" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Ball mask"><g clip-path="url(#a)"><path d="M12 6A6 6 0 1 0 0 6a6 6 0 0 0 12 0Z" fill="#fff"></path><mask id="b" style="mask-type:luminance" x="0" y="0" width="12" height="12"><path d="M12 6A6 6 0 1 0 0 6a6 6 0 0 0 12 0Z" fill="#fff"></path></mask><g filter="url(#c)" mask="url(#b)"><path id="blob" fill="#000" d="M11 1 L8 -4 L3 -8 L-6 6 L3 12 L7 11 L6 2 L11 1 Z"><animate attributeName="d" begin="indefinite" end="indefinite" dur="3.2s" repeatCount="indefinite" fill="remove" calcMode="spline" keyTimes="0; .33; .66; .9; 1" keySplines="
            .4 0 .2 1;
            .4 0 .2 1;
            .4 0 .2 1;
            .4 0 .2 1" values="
            M11 1 L8 -4 L3 -8 L-6 6 L3 12 L7 11 L6 2 L11 1 Z;
            M11 1 L8 -4 L3 -8 L-6 6 L3 12 L5 9  L7 4  L11 1 Z;
            M11 1 L8 -4 L3 -8 L-6 6 L3 12 L3 6  L5 1  L11 1 Z;
            M11 1 L8 -4 L3 -8 L-6 6 L3 12 L5 9  L7 4  L11 1 Z;
            M11 1 L8 -4 L3 -8 L-6 6 L3 12 L7 11 L6 2 L11 1 Z"></animate></path></g></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h12v12H0z"></path></clipPath><filter id="c" x="-9.4" y="-10.8" width="23.8" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="1.6"></feGaussianBlur></filter></defs></svg>`);
function Ob(r, e) {
	yt(e, !0);
	let t = q(e, "animating", 3, !1),
		n = q(e, "classNames", 3, ""),
		a = Ee(void 0),
		i = Ee(void 0),
		o,
		s;
	Rt(() => {
		var x, _, k, T;
		if (!m(a)) return;
		const g = m(a) !== s,
			y = t() !== o;
		(g || y) &&
			(t()
				? ((_ = (x = m(i)) == null ? void 0 : x.unpauseAnimations) == null || _.call(x),
					m(a).beginElement())
				: (m(a).endElement(),
					(T = (k = m(i)) == null ? void 0 : k.pauseAnimations) == null || T.call(k)),
			(o = t()),
			(s = m(a)));
	}),
		Ki(() => {
			var g, y, x;
			(g = m(a)) == null || g.endElement(),
				(x = (y = m(i)) == null ? void 0 : y.pauseAnimations) == null || x.call(y);
		});
	var l = Cb(),
		u = L(l),
		h = X(L(u), 2),
		f = L(h),
		p = L(f);
	vn(
		p,
		(g) => F(a, g),
		() => m(a)
	),
		O(f),
		O(h),
		O(u),
		ar(),
		O(l),
		vn(
			l,
			(g) => F(i, g),
			() => m(i)
		),
		Me(() => Tt(l, 0, ti(n()))),
		C(r, l),
		xt();
}
async function Yy(r, e, t) {
	var s;
	const n = new AbortController();
	t.addEventListener("abort", () => n.abort());
	const a = new FormData(),
		i = JSON.stringify({
			inputs: e.inputs,
			id: e.messageId,
			is_retry: e.isRetry,
			is_continue: !!e.isContinue,
			selectedMcpServerNames: e.selectedMcpServerNames,
			selectedMcpServers: e.selectedMcpServers,
		});
	(s = e.files) == null ||
		s.forEach((l) => {
			const u = l.type + ";" + l.name;
			a.append("files", new File([l.value], u, { type: l.mime }));
		}),
		a.append("data", i);
	const o = await fetch(`${e.base}/conversation/${r}`, {
		method: "POST",
		body: a,
		signal: n.signal,
	});
	if (!o.ok) {
		const l = await o
			.json()
			.then((u) => u.message)
			.catch(() => `Request failed with status code ${o.status}: ${o.statusText}`);
		throw Error(l);
	}
	if (!o.body) throw Error("Body not defined");
	return br.data.publicConfig.PUBLIC_SMOOTH_UPDATES !== "true" ? q1(o, n) : Ib(Rb(q1(o, n)));
}
async function* q1(r, e) {
	var a;
	const t = (a = r.body) == null ? void 0 : a.pipeThrough(new TextDecoderStream()).getReader();
	if (!t) throw Error("Response for endpoint had no body");
	t.closed.then(() => e.abort()), e.signal.addEventListener("abort", () => t.cancel());
	let n = "";
	for (; !e.signal.aborted; ) {
		const { done: i, value: o } = await t.read();
		if (i) {
			e.abort();
			break;
		}
		if (!o) continue;
		const { messageUpdates: s, remainingText: l } = Nb(n + o);
		n = l;
		for (const u of s) yield u;
	}
}
function Nb(r) {
	const e = r.split(`
`),
		t = [];
	for (const n of e)
		try {
			t.push(JSON.parse(n));
		} catch (a) {
			if (a instanceof SyntaxError) return { messageUpdates: t, remainingText: e.at(-1) ?? "" };
		}
	return { messageUpdates: t, remainingText: "" };
}
async function* Rb(r) {
	let e = [];
	const t = /[a-zA-Z0-9À-ž'`]+$/,
		n = /^[a-zA-Z0-9À-ž'`]+/;
	for await (const a of r) {
		if (a.type !== "stream") {
			e.length > 0 && (yield { type: ac.Stream, token: e.map((o) => o.token).join("") }, (e = [])),
				yield a;
			continue;
		}
		e.push(a);
		let i = 0;
		for (let o = 1; o < e.length; o++) {
			const s = t.test(e[o - 1].token),
				l = n.test(e[o].token),
				u = s && l,
				h = o - i >= 5;
			(u && !h) ||
				(yield {
					type: ac.Stream,
					token: e
						.slice(i, o)
						.map((f) => f.token)
						.join(""),
				},
				(i = o));
		}
		e = e.slice(i);
	}
	for (const a of e) yield a;
}
async function* Ib(r) {
	const e = new EventTarget();
	let t = !1;
	const n = [],
		a = [],
		i = async () => {
			const s = await r.next();
			s.done ? (t = !0) : (n.push(s.value), a.push(performance.now()), i()),
				e.dispatchEvent(new Event("next"));
		};
	i();
	let o = performance.now();
	for (; !t || n.length > 0; ) {
		const s = a.slice(-30),
			l = 2e3,
			u = s
				.map((x, _, k) => x - k[_ - 1])
				.slice(1)
				.filter((x) => x > l)
				.reduce((x, _) => x + _, 0),
			f = s.at(-1) - s[0] - u,
			p = Math.min(200, f / (s.length - 1)),
			g = performance.now() - o;
		(await Promise.race([Db(Math.max(5, p - g)), Lb(e, "next")])) ||
			(n.length !== 0 && ((o = performance.now()), yield n.shift()));
	}
}
const El = (r) => r.type === ac.Tool,
	Nm = (r) => El(r) && r.subtype === yi.Call,
	h0 = (r) => El(r) && r.subtype === yi.Result,
	Rm = (r) => El(r) && r.subtype === yi.Error,
	Db = (r) => new Promise((e) => setTimeout(e, r)),
	Lb = (r, e) => new Promise((t) => r.addEventListener(e, () => t(!0), { once: !0 }));
var Wc = ((r) => ((r.Success = "success"), (r.Error = "error"), r))(Wc || {}),
	zb = (r, e) => {
		var t;
		r.preventDefault(), r.stopPropagation(), (t = e.onprev) == null || t.call(e);
	},
	Bb = (r, e) => {
		var t;
		r.preventDefault(), r.stopPropagation(), (t = e.onnext) == null || t.call(e);
	},
	Pb = Z(
		'<div class="relative ml-auto flex items-center gap-1.5"><div class="flex items-center divide-x rounded-md border border-gray-200 bg-gray-50 dark:divide-gray-700 dark:border-gray-800 dark:bg-gray-800"><button type="button" class="btn size-5 text-xs text-gray-500 hover:text-gray-700 focus:ring-0 disabled:opacity-40 dark:text-gray-400 dark:hover:text-gray-200" title="Previous tool" aria-label="Previous tool"><!></button> <span class="select-none px-1 text-center text-[10px] font-medium text-gray-500 dark:text-gray-400" aria-live="polite"> <span class="text-gray-300 dark:text-gray-500">/</span> </span> <button type="button" class="btn size-5 text-xs text-gray-500 hover:text-gray-700 focus:ring-0 disabled:opacity-40 dark:text-gray-400 dark:hover:text-gray-200" title="Next tool" aria-label="Next tool"><!></button></div></div>'
	),
	Fb = Z(
		'<li><span class="font-semibold"> </span>: <span class="whitespace-pre-wrap"> </span></li>'
	),
	qb = Z(
		'<div class="mt-1 flex items-center gap-2 opacity-80"><h3 class="text-sm">Parameters</h3> <div class="h-px flex-1 bg-gradient-to-r from-gray-500/20"></div></div> <ul class="py-1 text-sm"></ul>',
		1
	),
	Ub = Z(
		'<div class="mt-1 flex items-center gap-2 opacity-80"><h3 class="text-sm">Error</h3> <div class="h-px flex-1 bg-gradient-to-r from-gray-500/20"></div></div> <p class="text-sm"> </p>',
		1
	),
	Hb = Z('<pre class="whitespace-pre-wrap break-all font-mono text-xs"> </pre>'),
	Gb = Z('<img class="max-h-60 rounded border border-gray-200 dark:border-gray-800"/>'),
	Wb = Z('<div class="flex flex-wrap gap-2"></div>'),
	Vb = Z(
		'<li><span class="font-semibold"> </span>: <span class="whitespace-pre-wrap"> </span></li>'
	),
	Kb = Z('<ul class="space-y-1"></ul>'),
	Yb = Z('<div class="space-y-2 py-2 first:pt-0 last:pb-0"><!> <!> <!></div>'),
	Xb = Z(
		'<div class="mt-1 flex items-center gap-2 opacity-80"><h3 class="text-sm">Result</h3> <div class="h-px flex-1 bg-gradient-to-r from-gray-500/20"></div></div> <div class="py-1 text-sm"></div>',
		1
	),
	Zb = Z(
		'<div class="mt-1 flex items-center gap-2 opacity-80"><h3 class="text-sm text-red-600 dark:text-red-400">Error</h3> <div class="h-px flex-1 bg-gradient-to-r from-red-500/20"></div></div> <p class="whitespace-pre-wrap text-sm text-red-600 dark:text-red-400"> </p>',
		1
	),
	jb = Z(
		'<details><summary class="relative flex select-none list-none items-center gap-1.5 py-1 group-open/tool:text-purple-700 group-open/tool:dark:text-purple-300 svelte-9ax0m0"><div class="absolute -m-1 hidden h-full w-full rounded-lg bg-purple-500/5 transition-all dark:bg-purple-500/10"></div> <div class="relative grid size-[22px] place-items-center rounded bg-purple-600/10 dark:bg-purple-600/20"><svg width="22" height="22" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="loading-path svelte-9ax0m0" d="M8 2.5H30C30 2.5 35.5 2.5 35.5 8V30C35.5 30 35.5 35.5 30 35.5H8C8 35.5 2.5 35.5 2.5 30V8C2.5 8 2.5 2.5 8 2.5Z" pathLength="100" stroke="currentColor" stroke-width="1" stroke-linecap="round" id="shape"></path></svg> <!></div> <span class="relative"> <span class="font-semibold"> </span></span> <!></summary> <!></details>'
	);
function Jb(r, e) {
	yt(e, !0);
	let t = q(e, "loading", 3, !1),
		n = j(() => {
			var A;
			return (A = e.tool.find(Nm)) == null ? void 0 : A.call.name;
		}),
		a = j(() => e.tool.some(Rm)),
		i = j(() => e.tool.some(h0)),
		o = j(() => {
			var A;
			return (A = e.tool.find((N) => N.subtype === yi.ETA)) == null ? void 0 : A.eta;
		});
	const s = j(() => {
		var A;
		return ((A = br.data) == null ? void 0 : A.tools) ?? [];
	});
	let l = Ee(void 0),
		u = Ee(void 0),
		h = Ee(!1);
	const f = (A) => {
			if (A == null) return "";
			if (typeof A == "object")
				try {
					return JSON.stringify(A, null, 2);
				} catch {
					return String(A);
				}
			return String(A);
		},
		p = (A) => {
			const N = A.text;
			if (typeof N == "string") return N;
		},
		g = (A) => {
			if (typeof A != "object" || A === null) return !1;
			const N = A;
			return N.type === "image" && typeof N.data == "string" && typeof N.mimeType == "string";
		},
		y = (A) => {
			const N = A.content;
			return Array.isArray(N) ? N.filter(g) : [];
		},
		x = (A) => Object.entries(A).filter(([N, z]) => z != null && N !== "content" && N !== "text"),
		_ = (A) => A.map((N) => ({ text: p(N), images: y(N), metadata: x(N) }));
	Rt(() => {
		!m(a) &&
			!m(i) &&
			t() &&
			m(l) &&
			m(o) &&
			(m(l).classList.remove("hidden"),
			F(h, !0),
			F(
				u,
				m(l).animate([{ width: "0%" }, { width: "calc(100%+1rem)" }], {
					duration: (m(o) ?? 0) * 1e3,
					fill: "forwards",
				}),
				!0
			));
	}),
		Ki(() => {
			var A;
			(A = m(u)) == null || A.cancel();
		}),
		Rt(() => {
			var A;
			if ((!t() || m(i) || m(a)) && Sp && m(l) && m(h)) {
				F(h, !1), m(l).classList.remove("hidden"), (A = m(u)) == null || A.cancel();
				const N = getComputedStyle(m(l)).width;
				F(
					u,
					m(l).animate([{ width: N }, { width: "calc(100%+1rem)" }], {
						duration: 300,
						fill: "forwards",
					}),
					!0
				),
					setTimeout(() => {
						var z;
						return (z = m(l)) == null ? void 0 : z.classList.add("hidden");
					}, 300);
			}
		});
	var k = He(),
		T = pe(k);
	{
		var B = (A) => {
			var N = jb(),
				z = L(N),
				I = L(z);
			vn(
				I,
				(oe) => F(l, oe),
				() => m(l)
			);
			var G = X(I, 2),
				re = L(G);
			let V;
			var se = X(re, 2);
			rh(se, { class: "text-xs text-purple-700 dark:text-purple-500" }), O(G);
			var ce = X(G, 2),
				Ce = L(ce),
				Q = X(Ce),
				$ = L(Q, !0);
			O(Q), O(ce);
			var K = X(ce, 2);
			{
				var le = (oe) => {
					var te = Pb(),
						Ke = L(te),
						qe = L(Ke);
					qe.__click = [zb, e];
					var Qe = L(qe);
					th(Qe, {}), O(qe);
					var je = X(qe, 2),
						Xe = L(je),
						it = X(Xe, 2);
					O(je);
					var lt = X(je, 2);
					lt.__click = [Bb, e];
					var we = L(lt);
					O0(we, {}),
						O(lt),
						O(Ke),
						O(te),
						Me(() => {
							(qe.disabled = (e.index ?? 0) <= 0),
								ut(Xe, `${(e.index ?? 0) + 1} `),
								ut(it, ` ${e.total ?? ""}`),
								(lt.disabled = (e.index ?? 0) >= (e.total ?? 1) - 1);
						}),
						C(oe, te);
				};
				ne(K, (oe) => {
					(e.total ?? 0) > 1 && oe(le);
				});
			}
			O(z);
			var ie = X(z, 2);
			Tr(
				ie,
				17,
				() => e.tool,
				sn,
				(oe, te) => {
					var Ke = He(),
						qe = pe(Ke);
					{
						var Qe = (Xe) => {
								var it = qb(),
									lt = X(pe(it), 2);
								Tr(
									lt,
									21,
									() => Object.entries(m(te).call.parameters ?? {}),
									sn,
									(we, ye) => {
										var be = j(() => gd(m(ye), 2));
										let Le = () => m(be)[0],
											ze = () => m(be)[1];
										var Be = He(),
											tt = pe(Be);
										{
											var ot = (st) => {
												var vt = Fb(),
													ct = L(vt),
													pt = L(ct, !0);
												O(ct);
												var Mt = X(ct, 2),
													Ct = L(Mt, !0);
												O(Mt),
													O(vt),
													Me(
														(Pe) => {
															ut(pt, Le()), ut(Ct, Pe);
														},
														[() => f(ze())]
													),
													C(st, vt);
											};
											ne(tt, (st) => {
												ze() != null && st(ot);
											});
										}
										C(we, Be);
									}
								),
									O(lt),
									C(Xe, it);
							},
							je = (Xe, it) => {
								{
									var lt = (ye) => {
											var be = Ub(),
												Le = X(pe(be), 2),
												ze = L(Le, !0);
											O(Le), Me(() => ut(ze, m(te).message)), C(ye, be);
										},
										we = (ye, be) => {
											{
												var Le = (Be) => {
														var tt = Xb(),
															ot = X(pe(tt), 2);
														Tr(
															ot,
															21,
															() => _(m(te).result.outputs),
															sn,
															(st, vt) => {
																var ct = Yb(),
																	pt = L(ct);
																{
																	var Mt = (ke) => {
																		var Re = Hb(),
																			dt = L(Re, !0);
																		O(Re), Me(() => ut(dt, m(vt).text)), C(ke, Re);
																	};
																	ne(pt, (ke) => {
																		m(vt).text && ke(Mt);
																	});
																}
																var Ct = X(pt, 2);
																{
																	var Pe = (ke) => {
																		var Re = Wb();
																		Tr(
																			Re,
																			21,
																			() => m(vt).images,
																			sn,
																			(dt, Et, Ht) => {
																				var nr = Gb();
																				qt(nr, "alt", `Tool result image ${Ht + 1}`),
																					Me(() =>
																						qt(
																							nr,
																							"src",
																							`data:${m(Et).mimeType};base64,${m(Et).data}`
																						)
																					),
																					C(dt, nr);
																			}
																		),
																			O(Re),
																			C(ke, Re);
																	};
																	ne(Ct, (ke) => {
																		m(vt).images.length > 0 && ke(Pe);
																	});
																}
																var _e = X(Ct, 2);
																{
																	var De = (ke) => {
																		var Re = Kb();
																		Tr(
																			Re,
																			21,
																			() => m(vt).metadata,
																			sn,
																			(dt, Et) => {
																				var Ht = j(() => gd(m(Et), 2));
																				let nr = () => m(Ht)[0],
																					Zt = () => m(Ht)[1];
																				var $t = Vb(),
																					Gt = L($t),
																					mr = L(Gt, !0);
																				O(Gt);
																				var sr = X(Gt, 2),
																					_r = L(sr, !0);
																				O(sr),
																					O($t),
																					Me(
																						(Wn) => {
																							ut(mr, nr()), ut(_r, Wn);
																						},
																						[() => f(Zt())]
																					),
																					C(dt, $t);
																			}
																		),
																			O(Re),
																			C(ke, Re);
																	};
																	ne(_e, (ke) => {
																		m(vt).metadata.length > 0 && ke(De);
																	});
																}
																O(ct), C(st, ct);
															}
														),
															O(ot),
															C(Be, tt);
													},
													ze = (Be, tt) => {
														{
															var ot = (st) => {
																var vt = Zb(),
																	ct = X(pe(vt), 2),
																	pt = L(ct, !0);
																O(ct), Me(() => ut(pt, m(te).result.message)), C(st, vt);
															};
															ne(
																Be,
																(st) => {
																	h0(m(te)) &&
																		m(te).result.status === Wc.Error &&
																		m(te).result.display &&
																		st(ot);
																},
																tt
															);
														}
													};
												ne(
													ye,
													(Be) => {
														h0(m(te)) && m(te).result.status === Wc.Success && m(te).result.display
															? Be(Le)
															: Be(ze, !1);
													},
													be
												);
											}
										};
									ne(
										Xe,
										(ye) => {
											m(te).subtype === yi.Error ? ye(lt) : ye(we, !1);
										},
										it
									);
								}
							};
						ne(qe, (Xe) => {
							m(te).subtype === yi.Call ? Xe(Qe) : Xe(je, !1);
						});
					}
					C(oe, Ke);
				}
			),
				O(N),
				Me(
					(oe, te) => {
						Tt(
							N,
							1,
							`group/tool my-2.5 w-fit max-w-full cursor-pointer rounded-lg border border-gray-200 bg-white px-1 ${(e.total ?? 0) > 1 ? "" : "pr-2"} text-sm shadow-sm first:mt-0 open:mb-3 open:border-purple-500/10 open:bg-purple-600/5 open:shadow-sm dark:border-gray-800 dark:bg-gray-900 open:dark:border-purple-800/40 open:dark:bg-purple-800/10 [&+details]:-mt-2`,
							"svelte-9ax0m0"
						),
							(V = Tt(
								re,
								0,
								"absolute inset-0 text-purple-500/40 transition-opacity",
								null,
								V,
								oe
							)),
							ut(Ce, `${m(a) ? "Error calling" : m(i) ? "Called" : "Calling"} tool `),
							ut($, te);
					},
					[
						() => ({ invisible: m(i) || m(a) }),
						() => {
							var oe;
							return (
								((oe = m(s).find((te) => te.name === m(n))) == null ? void 0 : oe.displayName) ??
								m(n)
							);
						},
					]
				),
				C(A, N);
		};
		ne(T, (A) => {
			m(n) && A(B);
		});
	}
	C(r, k), xt();
}
Mr(["click"]);
function Qb(r, e, t) {
	var n;
	r.key === "Enter" && (r.metaKey || r.ctrlKey) && ((n = m(e)) == null || n.requestSubmit()),
		r.key === "Escape" && t(null);
}
var $b = (r, e) => e(!e()),
	e8 = (r, e) => e(!e()),
	t8 = Z('<div class="flex h-fit flex-wrap gap-x-5 gap-y-2"></div>'),
	r8 = Z(
		'<div class="prose max-w-none dark:prose-invert max-sm:prose-sm prose-headings:font-semibold prose-h1:text-lg prose-h2:text-base prose-h3:text-base prose-pre:bg-gray-800 prose-img:my-0 prose-img:rounded-lg dark:prose-pre:bg-gray-900"><!></div>'
	),
	n8 = Z(
		'<div class="prose max-w-none dark:prose-invert max-sm:prose-sm prose-headings:font-semibold prose-h1:text-lg prose-h2:text-base prose-h3:text-base prose-pre:bg-gray-800 prose-img:my-0 prose-img:rounded-lg dark:prose-pre:bg-gray-900"><!></div>'
	),
	a8 = Z(
		'<a class="flex items-center gap-1 truncate rounded bg-gray-100 px-1 font-mono hover:text-gray-500 dark:bg-gray-800 dark:hover:text-gray-300 sm:py-px"> </a>'
	),
	i8 = Z(
		'<span class="truncate rounded bg-gray-100 px-1.5 font-mono dark:bg-gray-800 sm:py-px"> </span>'
	),
	o8 = Z(
		'<span class="truncate rounded bg-gray-100 px-1 font-mono dark:bg-gray-800 sm:py-px"> </span> <span class="text-gray-500">with</span> <!>',
		1
	),
	s8 = Z(
		'<span class="text-gray-500 max-sm:hidden">via</span> <a target="_blank" class="flex items-center gap-1 truncate rounded bg-gray-100 px-1 font-mono hover:text-gray-500 dark:bg-gray-800 dark:hover:text-gray-300 max-sm:hidden sm:py-px"><img class="size-2.5 flex-none rounded-sm"/> </a>',
		1
	),
	l8 = Z(
		'<div class="mr-2 flex items-center gap-1.5 truncate whitespace-nowrap text-[.65rem] text-gray-400 dark:text-gray-400 sm:text-xs"><!> <!></div>'
	),
	c8 = (r, e) => {
		var t;
		(t = e.onretry) == null || t.call(e, { id: e.message.id });
	},
	u8 = Z(
		'<!> <button class="btn rounded-sm p-1 text-xs text-gray-400 hover:text-gray-500 focus:ring-0 dark:text-gray-400 dark:hover:text-gray-300" title="Retry" type="button"><!></button> <!>',
		1
	),
	d8 = Z("<div><!> <!></div>"),
	h8 = Z(
		'<div data-message-role="assistant" role="presentation"><!> <div class="relative flex min-w-[60px] flex-col gap-2 break-words rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 px-5 py-3.5 text-gray-600 prose-pre:my-2 dark:border-gray-800 dark:from-gray-800/80 dark:text-gray-300"><!> <!> <div><!> <!></div></div> <!></div>'
	),
	f8 = (r, e) => e(!e()),
	m8 = (r, e) => e(!e()),
	p8 = Z('<div class="flex w-fit gap-4 px-5"></div>'),
	g8 = Z(
		'<p class="disabled w-full appearance-none whitespace-break-spaces text-wrap break-words bg-inherit px-5 py-3.5 text-gray-500 dark:text-gray-400"> </p>'
	),
	v8 = (r, e) => {
		e(null);
	},
	b8 = Z(
		'<form class="mt-3 flex w-full flex-col"><textarea class="w-full whitespace-break-spaces break-words rounded-xl bg-gray-100 px-5 py-3.5 text-gray-500 *:h-max focus:outline-none dark:bg-gray-800 dark:text-gray-400" rows="5" required></textarea> <div class="flex w-full flex-row flex-nowrap items-center justify-center gap-2 pt-2"><button type="submit">Send</button> <button type="button" class="btn rounded-sm p-2 text-sm text-gray-400 hover:text-gray-500 focus:ring-0 dark:text-gray-400 dark:hover:text-gray-300">Cancel</button></div></form>'
	),
	y8 = (r, e, t) => {
		Bn() || e(t.message.id);
	},
	x8 = Z(
		'<button class="hidden cursor-pointer items-center gap-1 rounded-md border border-gray-200 px-1.5 py-0.5 text-xs text-gray-400 group-hover:flex hover:flex hover:text-gray-500 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300 lg:-right-2" title="Edit" type="button"><!> Edit</button>'
	),
	w8 = Z(
		'<div data-message-type="user" role="presentation"><div class="flex w-full flex-col gap-2"><!> <div class="flex w-full flex-row flex-nowrap"><!></div> <div class="absolute -bottom-4 ml-3.5 flex w-full gap-1.5"><!> <!></div></div></div>'
	),
	_8 = Z("<!> <!>", 1);
function U1(r, e) {
	yt(e, !0);
	const t = $1();
	let n = q(e, "loading", 3, !1),
		a = q(e, "isAuthor", 3, !0),
		i = q(e, "readOnly", 3, !1),
		o = q(e, "isTapped", 15, !1),
		s = q(e, "alternatives", 19, () => []),
		l = q(e, "editMsdgId", 15, null),
		u = q(e, "isLast", 3, !1),
		h = Ee(void 0),
		f = Ee(!1),
		p = Ee(0),
		g = Ee(0);
	Rt(() => {
		a(), i();
	});
	function y($) {
		if (!m(h)) return;
		const K = window.getSelection();
		if (!K || K.isCollapsed || !K.anchorNode || !K.focusNode) return;
		const le = m(h).contains(K.anchorNode),
			ie = m(h).contains(K.focusNode);
		if ((!le && !ie) || !$.clipboardData) return;
		const oe = K.getRangeAt(0),
			te = document.createElement("div");
		te.appendChild(oe.cloneContents()),
			te.querySelectorAll("*").forEach((Qe) => {
				Qe.removeAttribute("style"),
					Qe.removeAttribute("class"),
					Qe.removeAttribute("color"),
					Qe.removeAttribute("bgcolor"),
					Qe.removeAttribute("background");
				for (const je of Array.from(Qe.attributes))
					(je.name === "id" || je.name.startsWith("data-")) && Qe.removeAttribute(je.name);
			});
		const Ke = te.innerHTML,
			qe = te.textContent ?? "";
		$.preventDefault(),
			$.clipboardData.setData("text/html", Ke),
			$.clipboardData.setData("text/plain", qe);
	}
	let x = Ee(void 0),
		_ = Ee(void 0);
	const k = /(<think>[\s\S]*?(?:<\/think>|$))/gi;
	let T = j(() => e.message.content.split(k).length > 1),
		B = j(() => e.message.content.replace(k, "").trim()),
		A = j(() => {
			var K;
			const $ = {};
			for (const le of e.message.updates ?? [])
				El(le) && ($[(K = le.uuid)] || ($[K] = [])).push(le);
			return $;
		}),
		N = j(() => Object.keys(m(A)).length > 0),
		z = j(() => Object.values(m(A))),
		I = Ee(0),
		G = Ee(!0);
	Rt(() => {
		const $ = m(z).length;
		if ($ === 0) {
			F(I, 0);
			return;
		}
		m(I) > $ - 1 && F(I, $ - 1), u() && n() && m(G) && F(I, $ - 1);
	}),
		Rt(() => {
			n() || F(G, !0);
		}),
		Rt(() => {
			m(f) &&
				setTimeout(() => {
					F(f, !1);
				}, 1e3);
		});
	let re = j(() => l() === e.message.id);
	Rt(() => {
		var $;
		m(re) && (bn(), m(x) && ((m(x).value = e.message.content), ($ = m(x)) == null || $.focus()));
	});
	var V = _8(),
		se = pe(V);
	{
		var ce = ($) => {
			var K = h8();
			(K.__click = [$b, o]), (K.__keydown = [e8, o]);
			var le = L(K);
			const ie = j(() => u() && n());
			Ob(le, {
				classNames: "mt-5 size-3.5 flex-none select-none rounded-full shadow-lg max-sm:hidden",
				get animating() {
					return m(ie);
				},
			});
			var oe = X(le, 2),
				te = L(oe);
			{
				var Ke = (ze) => {
					var Be = t8();
					Tr(
						Be,
						21,
						() => e.message.files,
						(tt) => tt.value,
						(tt, ot) => {
							Ic(tt, {
								get file() {
									return m(ot);
								},
								canClose: !1,
							});
						}
					),
						O(Be),
						C(ze, Be);
				};
				ne(te, (ze) => {
					var Be;
					(Be = e.message.files) != null && Be.length && ze(Ke);
				});
			}
			var qe = X(te, 2);
			{
				var Qe = (ze) => {
					var Be = He(),
						tt = pe(Be);
					{
						var ot = (st) => {
							const vt = j(() => m(z)[m(I)]);
							Jb(st, {
								get tool() {
									return m(vt);
								},
								get loading() {
									return n();
								},
								get index() {
									return m(I);
								},
								get total() {
									return m(z).length;
								},
								onprev: () => {
									F(G, !1), F(I, Math.max(0, m(I) - 1), !0);
								},
								onnext: () => {
									F(I, Math.min(m(z).length - 1, m(I) + 1), !0), F(G, m(I) === m(z).length - 1);
								},
							});
						};
						ne(tt, (st) => {
							m(z).length && st(ot);
						});
					}
					C(ze, Be);
				};
				ne(qe, (ze) => {
					m(N) && ze(Qe);
				});
			}
			var je = X(qe, 2),
				Xe = L(je);
			{
				var it = (ze) => {
					s3(ze, { classNames: "loading inline ml-2 first:ml-0" });
				};
				ne(Xe, (ze) => {
					u() && n() && e.message.content.length === 0 && ze(it);
				});
			}
			var lt = X(Xe, 2);
			{
				var we = (ze) => {
						var Be = He(),
							tt = pe(Be);
						Tr(
							tt,
							17,
							() => e.message.content.split(k),
							sn,
							(ot, st) => {
								var vt = He(),
									ct = pe(vt);
								{
									var pt = (Ct) => {
											const Pe = j(() => m(st).endsWith("</think>")),
												_e = j(() => m(st).slice(7, m(Pe) ? -8 : void 0)),
												De = j(() => !m(Pe) && !n()),
												ke = j(() =>
													m(Pe) || m(De)
														? m(_e).trim().split(/\n+/)[0] || "Reasoning"
														: "Thinking..."
												),
												Re = j(() => u() && n() && !m(Pe));
											Eb(Ct, {
												get summary() {
													return m(ke);
												},
												get content() {
													return m(_e);
												},
												get loading() {
													return m(Re);
												},
											});
										},
										Mt = (Ct, Pe) => {
											{
												var _e = (De) => {
													var ke = r8(),
														Re = L(ke);
													const dt = j(() => u() && n());
													Gc(Re, {
														get content() {
															return m(st);
														},
														get loading() {
															return m(dt);
														},
													}),
														O(ke),
														C(De, ke);
												};
												ne(
													Ct,
													(De) => {
														m(st) && m(st).trim().length > 0 && De(_e);
													},
													Pe
												);
											}
										};
									ne(ct, (Ct) => {
										m(st) && m(st).startsWith("<think>") ? Ct(pt) : Ct(Mt, !1);
									});
								}
								C(ot, vt);
							}
						),
							C(ze, Be);
					},
					ye = (ze) => {
						var Be = n8(),
							tt = L(Be);
						const ot = j(() => u() && n());
						Gc(tt, {
							get content() {
								return e.message.content;
							},
							get loading() {
								return m(ot);
							},
						}),
							O(Be),
							C(ze, Be);
					};
				ne(lt, (ze) => {
					m(T) ? ze(we) : ze(ye, !1);
				});
			}
			O(je),
				vn(
					je,
					(ze) => F(h, ze),
					() => m(h)
				),
				O(oe);
			var be = X(oe, 2);
			{
				var Le = (ze) => {
					var Be = d8(),
						tt = L(Be);
					{
						var ot = (ct) => {
							var pt = l8(),
								Mt = L(pt);
							{
								var Ct = (De) => {
									var ke = o8(),
										Re = pe(ke),
										dt = L(Re, !0);
									O(Re);
									var Et = X(Re, 4);
									{
										var Ht = (Zt) => {
												var $t = a8(),
													Gt = L($t, !0);
												O($t),
													Me(
														(mr) => {
															qt(
																$t,
																"href",
																`/chat/settings/${e.message.routerMetadata.model ?? ""}`
															),
																ut(Gt, mr);
														},
														[() => e.message.routerMetadata.model.split("/").pop()]
													),
													C(Zt, $t);
											},
											nr = (Zt) => {
												var $t = i8(),
													Gt = L($t, !0);
												O($t),
													Me(
														(mr) => ut(Gt, mr),
														[() => e.message.routerMetadata.model.split("/").pop()]
													),
													C(Zt, $t);
											};
										ne(Et, (Zt) => {
											t.isHuggingChat ? Zt(Ht) : Zt(nr, !1);
										});
									}
									Me(() => ut(dt, e.message.routerMetadata.route)), C(De, ke);
								};
								ne(Mt, (De) => {
									e.message.routerMetadata.route && e.message.routerMetadata.model && De(Ct);
								});
							}
							var Pe = X(Mt, 2);
							{
								var _e = (De) => {
									var ke = s8();
									const Re = j(() => wp[e.message.routerMetadata.provider]);
									var dt = X(pe(ke), 2),
										Et = L(dt),
										Ht = X(Et);
									O(dt),
										Me(() => {
											qt(dt, "href", `https://huggingface.co/${m(Re) ?? ""}`),
												qt(
													Et,
													"src",
													`https://huggingface.co/api/organizations/${m(Re) ?? ""}/avatar`
												),
												qt(Et, "alt", `${e.message.routerMetadata.provider ?? ""} logo`),
												ut(Ht, ` ${e.message.routerMetadata.provider ?? ""}`);
										}),
										dr("error", Et, (nr) => (nr.currentTarget.style.display = "none")),
										op(Et),
										C(De, ke);
								};
								ne(Pe, (De) => {
									e.message.routerMetadata.provider && De(_e);
								});
							}
							O(pt), C(ct, pt);
						};
						ne(tt, (ct) => {
							e.message.routerMetadata &&
								(e.message.routerMetadata.route ||
									e.message.routerMetadata.model ||
									e.message.routerMetadata.provider) &&
								(!u() || !n()) &&
								ct(ot);
						});
					}
					var st = X(tt, 2);
					{
						var vt = (ct) => {
							var pt = u8(),
								Mt = pe(pt);
							jc(Mt, {
								onClick: () => {
									F(f, !0);
								},
								classNames:
									"btn rounded-sm p-1 text-sm text-gray-400 hover:text-gray-500 focus:ring-0 dark:text-gray-400 dark:hover:text-gray-300",
								get value() {
									return m(B);
								},
								iconClassNames: "text-xs",
							});
							var Ct = X(Mt, 2);
							Ct.__click = [c8, e];
							var Pe = L(Ct);
							gf(Pe, {}), O(Ct);
							var _e = X(Ct, 2);
							{
								var De = (ke) => {
									F1(ke, {
										get message() {
											return e.message;
										},
										get alternatives() {
											return s();
										},
										get loading() {
											return n();
										},
										onshowAlternateMsg: (Re) => {
											var dt;
											return (dt = e.onshowAlternateMsg) == null ? void 0 : dt.call(e, Re);
										},
									});
								};
								ne(_e, (ke) => {
									s().length > 1 && l() === null && ke(De);
								});
							}
							C(ct, pt);
						};
						ne(st, (ct) => {
							(!u() || !n()) && ct(vt);
						});
					}
					O(Be),
						Me(() =>
							Tt(
								Be,
								1,
								`absolute -bottom-3.5 ${e.message.routerMetadata && m(g) > m(p) ? "left-1 pl-1 lg:pl-7" : "right-1"} flex max-w-[calc(100dvw-40px)] items-center gap-0.5`
							)
						),
						xd(Be, "offsetWidth", (ct) => F(g, ct)),
						C(ze, Be);
				};
				ne(be, (ze) => {
					(e.message.routerMetadata || (!n() && e.message.content)) && ze(Le);
				});
			}
			O(K),
				Me(() => {
					Tt(
						K,
						1,
						`group relative -mb-4 flex w-fit max-w-full items-start justify-start gap-4 pb-4 leading-relaxed max-sm:mb-1 ${e.message.routerMetadata && m(g) >= m(p) ? "mb-1" : ""}`
					),
						qt(K, "data-message-id", e.message.id);
				}),
				dr("copy", je, y),
				xd(K, "offsetWidth", (ze) => F(p, ze)),
				C($, K);
		};
		ne(se, ($) => {
			e.message.from === "assistant" && $(ce);
		});
	}
	var Ce = X(se, 2);
	{
		var Q = ($) => {
			var K = w8();
			(K.__click = [f8, o]), (K.__keydown = [m8, o]);
			var le = L(K),
				ie = L(le);
			{
				var oe = (ye) => {
					var be = p8();
					Tr(
						be,
						21,
						() => e.message.files,
						sn,
						(Le, ze) => {
							Ic(Le, {
								get file() {
									return m(ze);
								},
								canClose: !1,
							});
						}
					),
						O(be),
						C(ye, be);
				};
				ne(ie, (ye) => {
					var be;
					(be = e.message.files) != null && be.length && ye(oe);
				});
			}
			var te = X(ie, 2),
				Ke = L(te);
			{
				var qe = (ye) => {
						var be = g8(),
							Le = L(be, !0);
						O(be), Me((ze) => ut(Le, ze), [() => e.message.content.trim()]), C(ye, be);
					},
					Qe = (ye) => {
						var be = b8(),
							Le = L(be);
						Yc(Le),
							(Le.__keydown = [Qb, _, l]),
							vn(
								Le,
								(ot) => F(x, ot),
								() => m(x)
							);
						var ze = X(Le, 2),
							Be = L(ze),
							tt = X(Be, 2);
						(tt.__click = [v8, l]),
							O(ze),
							O(be),
							vn(
								be,
								(ot) => F(_, ot),
								() => m(_)
							),
							Me(
								(ot) => {
									Xc(Le, ot),
										Tt(
											Be,
											1,
											`btn rounded-lg px-3 py-1.5 text-sm
                                ${n() ? "bg-gray-300 text-gray-400 dark:bg-gray-700 dark:text-gray-600" : "bg-gray-200 text-gray-600 hover:text-gray-800   focus:ring-0 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-gray-200"}
								`
										),
										(Be.disabled = n());
								},
								[() => e.message.content.trim()]
							),
							dr("submit", be, (ot) => {
								var st, vt;
								ot.preventDefault(),
									(vt = e.onretry) == null ||
										vt.call(e, {
											content: (st = m(x)) == null ? void 0 : st.value,
											id: e.message.id,
										}),
									l(null);
							}),
							C(ye, be);
					};
				ne(Ke, (ye) => {
					m(re) ? ye(Qe, !1) : ye(qe);
				});
			}
			O(te);
			var je = X(te, 2),
				Xe = L(je);
			{
				var it = (ye) => {
					F1(ye, {
						get message() {
							return e.message;
						},
						get alternatives() {
							return s();
						},
						get loading() {
							return n();
						},
						onshowAlternateMsg: (be) => {
							var Le;
							return (Le = e.onshowAlternateMsg) == null ? void 0 : Le.call(e, be);
						},
					});
				};
				ne(Xe, (ye) => {
					s().length > 1 && l() === null && ye(it);
				});
			}
			var lt = X(Xe, 2);
			{
				var we = (ye) => {
					var be = x8();
					be.__click = [y8, l, e];
					var Le = L(be);
					c3(Le, {}), ar(), O(be), C(ye, be);
				};
				ne(lt, (ye) => {
					((s().length > 1 && l() === null) || (!n() && !m(re))) && ye(we);
				});
			}
			O(je),
				O(le),
				O(K),
				Me(() => {
					Tt(
						K,
						1,
						`group relative ${s().length > 1 && l() === null ? "mb-7" : ""} w-full items-start justify-start gap-4 max-sm:text-sm`
					),
						qt(K, "data-message-id", e.message.id);
				}),
				C($, K);
		};
		ne(Ce, ($) => {
			e.message.from === "user" && $(Q);
		});
	}
	C(r, V), xt();
}
Mr(["click", "keydown"]);
var k8 = or(
	'<svg width="1em" height="1em" viewBox="0 0 15 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.67236 1L7.67236 7L13.6724 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
);
function Im(r, e) {
	let t = q(e, "classNames", 3, "");
	var n = k8();
	Me(() => Tt(n, 0, ti(t()))), C(r, n);
}
var S8 = (r, e) => e.scrollNode.scrollTo({ top: e.scrollNode.scrollHeight, behavior: "smooth" }),
	E8 = Z("<button><!></button>");
function T8(r, e) {
	yt(e, !0);
	let t = q(e, "class", 3, ""),
		n = Ee(!1),
		a = Ee(null);
	function i() {
		e.scrollNode &&
			F(
				n,
				Math.ceil(e.scrollNode.scrollTop) + 200 <
					e.scrollNode.scrollHeight - e.scrollNode.clientHeight
			);
	}
	function o() {
		var f, p;
		(f = m(a)) == null || f.disconnect(),
			(p = e.scrollNode) == null || p.removeEventListener("scroll", i);
	}
	const s = Kc(
		() => (
			Rt(() => {
				var f;
				e.scrollNode &&
					(window.ResizeObserver &&
						(F(a, new ResizeObserver(() => i()), !0), m(a).observe(e.scrollNode), s()),
					(f = e.scrollNode) == null || f.addEventListener("scroll", i));
			}),
			() => o()
		)
	);
	var l = He(),
		u = pe(l);
	{
		var h = (f) => {
			var p = E8();
			p.__click = [S8, e];
			var g = L(p);
			Im(g, { classNames: "mt-[2px]" }),
				O(p),
				Me(() =>
					Tt(
						p,
						1,
						`btn absolute flex h-[41px] w-[41px] rounded-full border bg-white shadow-md transition-all hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:shadow-gray-950 dark:hover:bg-gray-600 ${t() ?? ""}`
					)
				),
				Zc(
					3,
					p,
					() => J1,
					() => ({ duration: 150 })
				),
				C(f, p);
		};
		ne(u, (f) => {
			m(n) && f(h);
		});
	}
	C(r, l), xt();
}
Mr(["click"]);
var A8 = Z("<button><!></button>");
function M8(r, e) {
	yt(e, !0);
	let t = Ee(!1),
		n = q(e, "class", 3, ""),
		a = Ee(null);
	function i() {
		e.scrollNode &&
			F(
				t,
				Math.ceil(e.scrollNode.scrollTop) + 200 <
					e.scrollNode.scrollHeight - e.scrollNode.clientHeight && e.scrollNode.scrollTop > 200,
				!0
			);
	}
	function o() {
		if (!e.scrollNode) return;
		const f = e.scrollNode.querySelectorAll("[data-message-id]"),
			p = e.scrollNode.scrollTop;
		let g = null;
		for (let y = f.length - 1; y >= 0; y--)
			if (f[y].getBoundingClientRect().top + p - e.scrollNode.getBoundingClientRect().top < p - 1) {
				g = f[y];
				break;
			}
		g && g.scrollIntoView({ behavior: "smooth", block: "start" });
	}
	function s() {
		var f, p;
		(f = m(a)) == null || f.disconnect(),
			(p = e.scrollNode) == null || p.removeEventListener("scroll", i);
	}
	Ki(s),
		Rt(() => {
			e.scrollNode &&
				ni(() => {
					e.scrollNode &&
						(s(),
						window.ResizeObserver &&
							(F(
								a,
								new ResizeObserver(() => {
									i();
								}),
								!0
							),
							m(a).observe(e.scrollNode)),
						e.scrollNode.addEventListener("scroll", i));
				});
		});
	var l = He(),
		u = pe(l);
	{
		var h = (f) => {
			var p = A8();
			p.__click = o;
			var g = L(p);
			Im(g, { classNames: "rotate-180 mt-[2px]" }),
				O(p),
				Me(() =>
					Tt(
						p,
						1,
						`btn absolute flex h-[41px] w-[41px] rounded-full border bg-white shadow-md transition-all hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:shadow-gray-950 dark:hover:bg-gray-600 ${n() ?? ""}`
					)
				),
				Zc(
					3,
					p,
					() => J1,
					() => ({ duration: 150 })
				),
				C(f, p);
		};
		ne(u, (f) => {
			m(t) && f(h);
		});
	}
	C(r, l), xt();
}
Mr(["click"]);
const C8 = 10,
	H1 = () =>
		typeof requestAnimationFrame == "function"
			? new Promise((r) => {
					requestAnimationFrame(() => r());
				})
			: Promise.resolve(),
	rc = (r, e) => {
		let t = r.scrollTop,
			n = !1,
			a;
		const i = () => {
				r.scrollTo({ top: r.scrollHeight });
			},
			o = () => r.scrollHeight - r.scrollTop - r.clientHeight;
		async function s(u = {}) {
			const h = { force: !1, ...u },
				{ force: f } = h;
			(!f && n && !yd.to) ||
				(await bn(),
				i(),
				typeof requestAnimationFrame == "function" && (await H1(), i(), await H1(), i()));
		}
		const l = () => {
			if ((r.scrollTop < t && (n = !0), o() <= C8)) {
				const h = n;
				(n = !1), h && s({ force: !0 });
			}
			t = r.scrollTop;
		};
		if ((r.addEventListener("scroll", l), typeof ResizeObserver < "u")) {
			const u = r.firstElementChild ?? r;
			(a = new ResizeObserver(() => {
				(n && !yd.to) || i();
			})),
				a.observe(u);
		}
		return (
			e && s({ force: !0 }),
			{
				update: s,
				destroy: () => {
					r.removeEventListener("scroll", l), a == null || a.disconnect();
				},
			}
		);
	};
var O8 = or("<svg><!></svg>");
function N8(r, e) {
	const t = Cr(e, ["children", "$$slots", "$$events", "$$legacy"]);
	var n = O8();
	zt(n, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var a = L(n);
	wr(
		a,
		() => '<path fill="currentColor" d="M6 24H4V8h2ZM28 8h-2v16h2Zm-4-2V4H8v2Zm0 22v-2H8v2Z"/>',
		!0
	),
		O(n),
		C(r, n);
}
var R8 = (r, e) => F(e, !m(e)),
	I8 = (r, e) => r.key === "Enter" && F(e, !m(e)),
	D8 = (r, e) => F(e, !1),
	L8 = Z(
		'<div class="flex w-full flex-col gap-5 p-6"><div class="flex items-start justify-between text-xl font-semibold text-gray-800 dark:text-gray-200"><h2>System Prompt</h2> <button type="button" class="group"><!></button></div> <textarea disabled class="min-h-[420px] w-full resize-none rounded-lg border bg-gray-50 p-2.5 text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 max-sm:text-sm"></textarea></div>'
	),
	z8 = Z(
		'<button type="button" class="mx-auto flex items-center gap-1.5 rounded-full border border-gray-100 bg-gray-50 px-3 py-1 text-xs text-gray-500 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"><!> Using Custom System Prompt</button> <!>',
		1
	);
function B8(r, e) {
	let t = Ee(!1);
	var n = z8(),
		a = pe(n);
	(a.__click = [R8, t]), (a.__keydown = [I8, t]);
	var i = L(a);
	N8(i, { class: "text-xxs" }), ar(), O(a);
	var o = X(a, 2);
	{
		var s = (l) => {
			ks(l, {
				onclose: () => F(t, !1),
				width: "w-full !max-w-xl",
				children: (u, h) => {
					var f = L8(),
						p = L(f),
						g = X(L(p), 2);
					g.__click = [D8, t];
					var y = L(g);
					m0(y, {
						class:
							"mt-auto text-gray-900 group-hover:text-gray-500 dark:text-gray-200 dark:group-hover:text-gray-400",
					}),
						O(g),
						O(p);
					var x = X(p, 2);
					Yc(x), O(f), Me(() => Xc(x, e.preprompt)), C(u, f);
				},
				$$slots: { default: !0 },
			});
		};
		ne(o, (l) => {
			m(t) && l(s);
		});
	}
	C(r, n);
}
Mr(["click", "keydown"]);
async function Dm(r) {
	const e =
		br.data.publicConfig.PUBLIC_SHARE_PREFIX ||
		`${br.data.publicConfig.PUBLIC_ORIGIN || br.url.origin}${Oa}`;
	if (r.length === 7) return `${e}/r/${r}`;
	const t = await fetch(`${Oa}/conversation/${r}/share`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
	});
	if (!t.ok) {
		const a = await t.text().catch(() => "");
		throw new Error(a || "Failed to create share link");
	}
	const { shareId: n } = await t.json();
	return `${e}/r/${n}`;
}
async function P8(r, e, t, n) {
	try {
		F(e, !0), F(t, null), F(n, await Dm(br.params.id), !0);
	} catch (a) {
		F(t, a.message || "Could not create link", !0);
	} finally {
		F(e, !1);
	}
}
var F8 = Z(
		'<div class="flex items-start justify-between"><div class="text-xl font-semibold text-gray-800 dark:text-gray-200">Public link created</div> <button type="button" class="group" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="size-5 text-gray-700 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-400"><path d="M24 9.41 22.59 8 16 14.59 9.41 8 8 9.41 14.59 16 8 22.59 9.41 24 16 17.41 22.59 24 24 22.59 17.41 16 24 9.41z" fill="currentColor"></path></svg></button></div> <div class="text-sm text-gray-600 dark:text-gray-400">A public link to your chat has been created.</div>',
		1
	),
	q8 = Z(
		'<div class="flex items-start justify-between"><div class="text-xl font-semibold text-gray-800 dark:text-gray-200">Share public link to chat</div> <button type="button" class="group" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="size-5 text-gray-700 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-400"><path d="M24 9.41 22.59 8 16 14.59 9.41 8 8 9.41 14.59 16 8 22.59 9.41 24 16 17.41 22.59 24 24 22.59 17.41 16 24 9.41z" fill="currentColor"></path></svg></button></div> <div class="text-sm text-gray-600 dark:text-gray-400">Any messages you add after sharing stay private.</div>',
		1
	),
	U8 = Z(
		'<div class="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-700 dark:bg-red-500/10 dark:text-red-300"> </div>'
	),
	H8 = Z("<!> Copied", 1),
	G8 = or(
		'<svg width="1em" height="1em" viewBox="0 0 32 32" class="text-[.95em]"><path fill="currentColor" d="M28 10v18H10V10zm-2 2H12v14h14zm-4-8v2H6v14H4V4z"></path></svg> Copy link',
		1
	),
	W8 = Z('<span class="inline-flex items-center gap-1.5"><!></span>'),
	V8 = Z("<!> Creating…", 1),
	K8 = Z("<!> Create link", 1),
	Y8 = Z(
		'<button class="-mr-1 inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 shadow hover:bg-gray-50 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600" type="button"><!></button>'
	),
	X8 = Z(
		'<div class="flex w-full flex-col gap-3 p-5 sm:gap-5 sm:p-6"><!> <!> <div class="flex h-12 items-center gap-2 whitespace-nowrap rounded-2xl border border-gray-200 bg-gray-50 p-2.5 dark:border-gray-700 dark:bg-gray-800"><input class="w-full truncate bg-transparent text-[15px] text-gray-700 outline-none placeholder:text-gray-400 dark:text-gray-200 dark:placeholder:text-gray-500 max-sm:text-sm" readonly=""/> <!></div></div>'
	);
function Z8(r, e) {
	yt(e, !0);
	let t = q(e, "open", 7, !1),
		n = Ee(!1),
		a = Ee(null),
		i = Ee(null),
		o = Ee(!1);
	function s() {
		var p;
		t(!1), (p = e.onclose) == null || p.call(e);
	}
	_s(async () => {
		if (br.params.id && br.params.id.length === 7)
			try {
				F(a, await Dm(br.params.id), !0);
			} catch {}
	});
	function l(p) {
		if (!p) return p;
		try {
			const g = localStorage.getItem("leafId");
			if (!g) return p;
			const y = new URL(p);
			return y.searchParams.set("leafId", g), y.toString();
		} catch {
			return p;
		}
	}
	var u = He(),
		h = pe(u);
	{
		var f = (p) => {
			ks(p, {
				onclose: s,
				width: "w-[90dvh] md:w-[500px]",
				children: (g, y) => {
					var x = X8(),
						_ = L(x);
					{
						var k = (V) => {
								var se = F8(),
									ce = pe(se),
									Ce = X(L(ce), 2);
								(Ce.__click = s), O(ce), ar(2), C(V, se);
							},
							T = (V) => {
								var se = q8(),
									ce = pe(se),
									Ce = X(L(ce), 2);
								(Ce.__click = s), O(ce), ar(2), C(V, se);
							};
						ne(_, (V) => {
							m(a) ? V(k) : V(T, !1);
						});
					}
					var B = X(_, 2);
					{
						var A = (V) => {
							var se = U8(),
								ce = L(se, !0);
							O(se), Me(() => ut(ce, m(i))), C(V, se);
						};
						ne(B, (V) => {
							m(i) && V(A);
						});
					}
					var N = X(B, 2),
						z = L(N);
					j1(z);
					var I = X(z, 2);
					{
						var G = (V) => {
								const se = j(() => l(m(a)) ?? m(a));
								jc(V, {
									classNames:
										"inline-flex items-center rounded-xl -mr-1 border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 shadow enabled:hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 dark:enabled:hover:bg-gray-600",
									showTooltip: !1,
									get value() {
										return m(se);
									},
									onClick: () => {
										var Ce;
										F(o, !0),
											(Ce = e.oncopied) == null || Ce.call(e),
											setTimeout(() => F(o, !1), 1200);
									},
									children: (Ce) => {
										var Q = W8(),
											$ = L(Q);
										{
											var K = (ie) => {
													var oe = H8(),
														te = pe(oe);
													up(te, { class: "text-[.95em] text-green-600 dark:text-green-400" }),
														ar(),
														C(ie, oe);
												},
												le = (ie) => {
													var oe = G8();
													ar(), C(ie, oe);
												};
											ne($, (ie) => {
												m(o) ? ie(K) : ie(le, !1);
											});
										}
										O(Q), C(Ce, Q);
									},
									$$slots: { default: !0 },
								});
							},
							re = (V) => {
								var se = Y8();
								se.__click = [P8, n, i, a];
								var ce = L(se);
								{
									var Ce = ($) => {
											var K = V8(),
												le = pe(K);
											gu(le, { class: "text-[1.05em]" }), ar(), C($, K);
										},
										Q = ($) => {
											var K = K8(),
												le = pe(K);
											mf(le, { class: "text-[1.05em]" }), ar(), C($, K);
										};
									ne(ce, ($) => {
										m(n) ? $(Ce) : $(Q, !1);
									});
								}
								O(se), Me(() => (se.disabled = m(n))), C(V, se);
							};
						ne(I, (V) => {
							m(a) ? V(G) : V(re, !1);
						});
					}
					O(N),
						O(x),
						Me(() =>
							Xc(
								z,
								m(a) ??
									`${br.data.publicConfig.PUBLIC_SHARE_PREFIX || `${br.data.publicConfig.PUBLIC_ORIGIN || br.url.origin}${Oa}`}/r/...`
							)
						),
						C(g, x);
				},
				$$slots: { default: !0 },
			});
		};
		ne(h, (p) => {
			t() && p(f);
		});
	}
	C(r, u), xt();
}
Mr(["click"]);
var j8 = Z(
	'<div class="my-auto grid items-center justify-center gap-8 text-center"><div class="flex -translate-y-16 select-none items-center rounded-xl text-3xl font-semibold md:-translate-y-12 md:text-5xl"><!> </div></div>'
);
function J8(r, e) {
	yt(e, !0);
	const t = $1();
	Rt(() => {
		e.currentModel, e.onmessage;
	});
	var n = j8(),
		a = L(n),
		i = L(a);
	yp(i, { classNames: "size-12 md:size-20 dark:invert mr-0.5" });
	var o = X(i);
	O(a), O(n), Me(() => ut(o, ` ${t.PUBLIC_APP_NAME ?? ""}`)), C(r, n), xt();
}
async function Q8(r, e) {
	if (br.params.id)
		try {
			if (
				!(
					await fetch(`${Oa}/conversation/${br.params.id}`, {
						method: "PATCH",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ model: m(e) }),
					})
				).ok
			)
				throw new Error("Failed to update model");
			await Um();
		} catch (t) {
			console.error(t);
		}
}
var $8 = Z("<option> </option>"),
	ey = Z(
		'<div class="mx-auto mt-0 flex w-fit flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 bg-gray-500/20 p-4 dark:border-gray-800"><span>This model is no longer available. Switch to a new one to continue this conversation:</span> <div class="flex items-center space-x-2"><select class="rounded-md bg-gray-100 px-2 py-1 dark:bg-gray-900 max-sm:max-w-32"></select> <button class="rounded-md bg-gray-100 px-2 py-1 dark:bg-gray-900">Accept</button></div></div>'
	);
function ty(r, e) {
	yt(e, !0);
	let t = Ee(
		cn(e.models.map((s) => s.id).includes(e.currentModel.id) ? e.currentModel.id : e.models[0].id)
	);
	var n = ey(),
		a = X(L(n), 2),
		i = L(a);
	Tr(
		i,
		21,
		() => e.models,
		sn,
		(s, l) => {
			var u = $8(),
				h = {},
				f = L(u, !0);
			O(u),
				Me(() => {
					h !== (h = m(l).id) && (u.value = (u.__value = m(l).id) ?? ""), ut(f, m(l).name);
				}),
				C(s, u);
		}
	),
		O(i);
	var o = X(i, 2);
	(o.__click = [Q8, t]),
		O(a),
		O(n),
		Me(() => (o.disabled = m(t) === e.currentModel.id)),
		lp(
			i,
			() => m(t),
			(s) => F(t, s)
		),
		C(r, n),
		xt();
}
Mr(["click"]);
const $s = [
	{
		title: "HTML game",
		prompt: "Code a minimal Flappy Bird game using HTML and Canvas",
		followUps: [
			{
				title: "README.md file",
				prompt: "Create a comprehensive README.md for the Flappy Bird game project.",
			},
			{ title: "CRT Screen", prompt: "Add a CRT screen effect to the game" },
			{
				title: "Add power-ups",
				prompt:
					"Add collectible coins between pipes that award bonus points and a shield power-up that allows one collision.",
			},
			{
				title: "Explain collision detection",
				prompt:
					"Explain the collision detection algorithm for the bird and pipes in simple terms with examples.",
			},
		],
	},
	{
		title: "Weird painting",
		prompt: "is this a real painting?",
		attachments: [{ src: "huggingchat/castle-example.jpg" }],
	},
	{
		title: "Landing page",
		prompt:
			"Build a responsive SaaS landing page for my AI coding assitant using Tailwind CSS. With a hero, features, testimonials, and pricing sections.",
		followUps: [
			{ title: "Dark mode", prompt: "Add dark mode and make it the default" },
			{ title: "Write blog post", prompt: "Write a blog post introducing my service." },
			{
				title: "Translate to Italian",
				prompt: "Translate only the text content displayed to users into Italian.",
			},
			{
				title: "Architecture review",
				prompt:
					"Review the architecture and suggest improvements for scalability, SEO optimization, and performance.",
			},
		],
	},
	{
		title: "Eminem song",
		prompt:
			"Write an Eminem-style rap battling AI taking over hip-hop, with two energetic verses and a catchy hook.",
		followUps: [
			{
				title: "Psychological analysis",
				prompt: "Provide a psychological analysis of Eminem's emotions in this song.",
			},
			{
				title: "Wired Article",
				prompt: "Write an article in the style of Wired explaining this Eminem release.",
			},
			{ title: "Roleplay", prompt: "Roleplay as Eminem so I can discuss the song with him." },
			{
				title: "Translate to Spanish",
				prompt: "Translate the rap lyrics to Spanish while maintaining the rhyme scheme and flow.",
			},
		],
	},
	{
		title: "Act as Yoda",
		prompt: "Act as Yoda",
		followUps: [
			{
				title: "Give advice",
				prompt:
					"Continue acting as Yoda and offer three pieces of life advice for staying focused under pressure.",
			},
			{
				title: "Explain the Force",
				prompt:
					"In Yoda's voice, explain the concept of the Force to a young padawan using modern language.",
			},
			{
				title: "Plain English",
				prompt:
					"Rewrite the previous response from Yoda into plain English while keeping the same meaning.",
			},
			{
				title: "Compare philosophies",
				prompt:
					"Compare Yoda's Jedi philosophy to Stoic philosophy from ancient Greece and explain the similarities and differences.",
			},
		],
	},
	{
		title: "Generate prompts",
		prompt:
			'Generate 5 creative prompts Text-to-image prompts like: "Cyberpunk cityscape at night, neon lights, flying cars, rain-slicked streets, blade runner aesthetic, highly detailed',
		followUps: [
			{
				title: "Turn into JSON",
				prompt:
					"Generate a detailed JSON object for each prompt. Include fields for subjects (list of objects), scene (setting, environment, background details), actions (what's happening), style (artistic style or medium)",
			},
			{
				title: "Sci-fi portraits",
				prompt:
					"Produce five futuristic character portrait prompts with unique professions and settings.",
			},
			{
				title: "Explain image generation",
				prompt:
					"Explain how text-to-image diffusion models work, covering the denoising process and how text prompts guide generation.",
			},
		],
	},
	{
		title: "Explain LLMs",
		prompt:
			"Explain how large language models based on transformers work, covering attention, embeddings, and training objectives.",
		followUps: [
			{
				title: "Generate a Quiz",
				prompt: "Craft a 5-question multiple-choice quiz to validate what I learned.",
			},
			{
				title: "Compare to RNNs",
				prompt:
					"Compare transformer-based large language models to recurrent neural networks, focusing on training efficiency and capabilities.",
			},
			{
				title: "Student summary",
				prompt:
					"Summarize the explanation of large language models for a high school student using relatable analogies.",
			},
			{
				title: "Write a blog post",
				prompt:
					"Write a blog post about how transformers revolutionized NLP, targeting software engineers who are new to AI.",
			},
		],
	},
	{
		title: "Translate in Italian",
		prompt:
			"Translate in Italian: Some are born great, some achieve greatness, and some have greatness thrust upon 'em",
		followUps: [
			{
				title: "Back to English",
				prompt:
					"Translate the Italian version back into English while keeping Shakespeare's tone intact.",
			},
			{
				title: "Explain choices",
				prompt: "Explain your translation choices for each key phrase from the Italian version.",
			},
			{
				title: "Modernize",
				prompt:
					"Modernize the Italian translation into contemporary informal Italian suitable for social media.",
			},
			{
				title: "Teach me Italian",
				prompt:
					"Help me practice Italian by conversing about this Shakespeare quote, correcting my grammar when needed.",
			},
		],
	},
	{
		title: "Pelican on a bicycle",
		prompt: "Draw an SVG of a pelican riding a bicycle",
		followUps: [
			{
				title: "Add a top hat",
				prompt: "Add a fancy top hat to the pelican and make it look distinguished",
			},
			{
				title: "Make it animated",
				prompt: "Add CSS animations to make the bicycle wheels spin and the pelican's wings flap",
			},
		],
	},
];
var ry = Z('<div class="flex h-max flex-col gap-8 pb-52 svelte-1pgzd69"><!> <!></div>'),
	ny = (r, e, t) => e(m(t)),
	ay = Z(
		'<button class="flex items-center rounded-lg bg-gray-100/90 px-2 py-0.5 text-center text-sm backdrop-blur hover:text-gray-500 dark:bg-gray-700/50 dark:hover:text-gray-400 svelte-1pgzd69"> </button>'
	),
	iy = Z(
		'<div class="no-scrollbar mb-3 flex w-full select-none justify-start gap-2 overflow-x-auto whitespace-nowrap text-gray-400 dark:text-gray-500 svelte-1pgzd69"></div>'
	),
	oy = (r, e, t) => e(m(t)),
	sy = Z(
		'<button class="flex items-center gap-1 rounded-lg bg-gray-100/90 px-2 py-0.5 text-center text-sm backdrop-blur hover:text-gray-500 dark:bg-gray-700/50 dark:hover:text-gray-400 svelte-1pgzd69"><!> </button>'
	),
	ly = Z(
		'<div class="no-scrollbar mb-3 flex w-full select-none justify-start gap-2 overflow-x-auto whitespace-nowrap text-gray-400 dark:text-gray-500 svelte-1pgzd69"></div>'
	),
	cy = Z(
		'<div class="flex flex-row flex-wrap justify-center gap-2.5 rounded-xl pb-3 svelte-1pgzd69"></div>'
	),
	uy = Z(
		'<button type="submit" aria-label="Send message" name="submit"><svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1pgzd69"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.0606 4.23197C16.4748 3.64618 15.525 3.64618 14.9393 4.23197L5.68412 13.4871C5.09833 14.0729 5.09833 15.0226 5.68412 15.6084C6.2699 16.1942 7.21965 16.1942 7.80544 15.6084L14.4999 8.91395V26.7074C14.4999 27.5359 15.1715 28.2074 15.9999 28.2074C16.8283 28.2074 17.4999 27.5359 17.4999 26.7074V8.91395L24.1944 15.6084C24.7802 16.1942 25.7299 16.1942 26.3157 15.6084C26.9015 15.0226 26.9015 14.0729 26.3157 13.4871L17.0606 4.23197Z" fill="currentColor" class="svelte-1pgzd69"></path></svg></button>'
	),
	dy = Z("<div><!> <!></div>"),
	hy = Z(
		'<span class="inline-flex items-center gap-1 whitespace-nowrap text-xs svelte-1pgzd69"><!> Calling tool <span class="loading-dots font-medium svelte-1pgzd69"> </span></span>'
	),
	fy = (r) => {
		Bn() && r.preventDefault();
	},
	my = Z("<!> ", 1),
	py = Z('<a class="inline-flex items-center gap-1 hover:underline svelte-1pgzd69"><!> <!></a>'),
	gy = Z(
		'<div class="mr-2 flex items-center gap-1.5 whitespace-nowrap text-[.70rem] text-xs leading-none text-gray-400 dark:text-gray-400 svelte-1pgzd69"><!> <span class="router-badge-text router-shimmer svelte-1pgzd69"> </span> <span class="text-gray-500 svelte-1pgzd69">with</span> <span class="router-badge-text svelte-1pgzd69"> </span></div>'
	),
	vy = Z(
		'<div class="loading-dots relative inline-flex items-center text-gray-400 dark:text-gray-400 svelte-1pgzd69" aria-label="Routing…"><!> Routing</div>'
	),
	by = Z(
		'<span class="inline-flex items-center line-through dark:border-gray-700 svelte-1pgzd69"> </span>'
	),
	yy = Z('<span class="svelte-1pgzd69">Generated content may be inaccurate or false.</span>'),
	xy =
		Z(`<div class="relative z-[-1] min-h-0 min-w-0 svelte-1pgzd69"><!> <div class="scrollbar-custom h-full overflow-y-auto svelte-1pgzd69"><div class="mx-auto flex h-full max-w-3xl flex-col gap-6 px-5 pt-6 sm:gap-8 xl:max-w-4xl xl:pt-10 svelte-1pgzd69"><!> <!></div> <!> <!></div> <div class="pointer-events-none absolute inset-x-0 bottom-0 z-0 mx-auto flex w-full
			max-w-3xl flex-col items-center justify-center bg-gradient-to-t from-white
			via-white/100 to-white/0 px-3.5 pt-2 dark:border-gray-800
			dark:from-gray-900 dark:via-gray-900/100
			dark:to-gray-900/0 max-sm:py-0 sm:px-5 md:pb-4 xl:max-w-4xl [&amp;>*]:pointer-events-auto svelte-1pgzd69"><!> <!> <!> <div class="w-full svelte-1pgzd69"><div class="flex w-full *:mb-3 svelte-1pgzd69"><!></div> <form tabindex="-1"><!></form> <div><!> <!></div></div></div></div>`);
function Xy(r, e) {
	yt(e, !0);
	const [t, n] = Q1(),
		a = () => r0(Ke, "$settings", t);
	let i = q(e, "messages", 19, () => []),
		o = q(e, "messagesAlternatives", 19, () => []),
		s = q(e, "loading", 3, !1),
		l = q(e, "pending", 3, !1),
		u = q(e, "shared", 3, !1),
		h = q(e, "preprompt", 3, void 0),
		f = q(e, "files", 31, () => cn([])),
		p = q(e, "draft", 15, ""),
		g = j(() => !e.models.some((P) => P.id === e.currentModel.id)),
		y = Ee(!1),
		x = Ee(null),
		_ = Ee(!1);
	const k = () => {
		var P;
		Bn() || s() || !p() || ((P = e.onmessage) == null || P.call(e, p()), p(""));
	};
	let T = null,
		B = Ee(!1);
	const A = (P) => {
			(T = P.target), F(B, !0);
		},
		N = (P) => {
			P.target === T && F(B, !1);
		},
		z = (P) => {
			var de;
			const H = (de = P.clipboardData) == null ? void 0 : de.getData("text");
			if (!a().directPaste && H && H.length >= 3984) {
				P.preventDefault(),
					F(_, !0),
					setTimeout(() => {
						F(_, !1);
					}, 1e3);
				const Ie = new File([H], "Pasted Content", { type: "application/vnd.chatui.clipboard" });
				f([...f(), Ie]);
			}
			if (!P.clipboardData) return;
			const J = Array.from(P.clipboardData.files);
			if (J.length !== 0) {
				P.preventDefault();
				const Ie = J.filter((Ne) =>
					m(it).some((gt) => {
						const [St, Dt] = gt.split("/"),
							[at, We] = Ne.type.split("/");
						return (St === "*" || at === St) && (Dt === "*" || We === Dt);
					})
				);
				f([...f(), ...Ie]);
			}
		};
	let I = j(() => i().at(-1)),
		G = j(() => {
			const P = i().at(-1);
			return P ? `${P.id}:${P.content.length}:${i().length}` : `${i().length}:0`;
		}),
		re = j(() =>
			(() => {
				for (let P = i().length - 1; P >= 0; P -= 1) {
					const H = i()[P];
					if (H.from === "assistant") return H;
				}
			})()
		),
		V = j(() => {
			var P;
			return ((P = m(re)) == null ? void 0 : P.routerMetadata) ?? null;
		}),
		se = j(() => {
			var P;
			return (P = m(V)) != null && P.model ? (m(V).model.split("/").pop() ?? m(V).model) : "";
		}),
		ce = j(() => {
			var P, H;
			return (
				!s() &&
				(((H = (P = m(re)) == null ? void 0 : P.updates) == null
					? void 0
					: H.findIndex((J) => J.type === "status" && J.status === "error")) ?? -1) !== -1
			);
		});
	const Ce = j(() => {
		var P;
		return ((P = br.data) == null ? void 0 : P.tools) ?? [];
	});
	let Q = j(() => {
			var J;
			const P = ((J = m(re)) == null ? void 0 : J.updates) ?? [];
			if (!P.length) return null;
			const H = new Set();
			for (const de of P) (h0(de) || Rm(de)) && H.add(de.uuid);
			for (let de = P.length - 1; de >= 0; de -= 1) {
				const Ie = P[de];
				if (Nm(Ie) && !H.has(Ie.uuid)) return Ie.call.name;
			}
			return null;
		}),
		$ = Ee(!1),
		K;
	Rt(() => {
		if (!e.currentModel.isRouter || !s()) {
			F($, !1), K && (clearTimeout(K), (K = void 0));
			return;
		}
		K && clearTimeout(K),
			F($, !1),
			(K = setTimeout(() => {
				F($, !0);
			}, 500));
	});
	let le = j(() => {
		var P;
		return (P = f()) == null
			? void 0
			: P.map((H) => i3(H).then((J) => ({ type: "base64", value: J, mime: H.type, name: H.name })));
	});
	const ie = Rl.subscribe((P) => {
		F(y, P, !0);
	});
	Ki(() => {
		ie(), Rl.close(), K && clearTimeout(K);
	});
	let oe = Ee(void 0);
	async function te() {
		await bn(), m(oe) && (m(oe).scrollTop = m(oe).scrollHeight);
	}
	Rt(() => {
		m(I) && m(I).from === "user" && te();
	});
	const Ke = cp();
	let qe = j(() => {
			var P;
			return ((P = a().hidePromptExamples) == null ? void 0 : P[e.currentModel.id]) ?? !1;
		}),
		Qe = j(() => {
			var P;
			return (P = a().multimodalOverrides) == null ? void 0 : P[e.currentModel.id];
		}),
		je = j(() => (m(Qe) ?? e.currentModel.multimodal) === !0),
		Xe = j(() => {
			var P;
			return (
				(((P = a().toolsOverrides) == null ? void 0 : P[e.currentModel.id]) ??
					e.currentModel.supportsTools) === !0
			);
		}),
		it = j(() =>
			Array.from(
				new Set([...pu, ...(m(je) ? (e.currentModel.multimodalAcceptedMimetypes ?? [...pf]) : [])])
			)
		),
		lt = j(() => m(it).length > 0),
		we = Ee(!1),
		ye = Ee(null),
		be = j(() => {
			var P;
			return m(ye)
				? (((P = $s.find((H) => H.prompt === m(ye))) == null ? void 0 : P.followUps) ?? [])
				: [];
		}),
		Le = j(() => i().filter((P) => P.from === "user")),
		ze = j(
			() =>
				!p().length &&
				m(ye) &&
				m(be).length > 0 &&
				m(Le).length === 1 &&
				e.currentModel.isRouter &&
				!m(qe) &&
				!s()
		);
	Rt(() => {
		if (!e.currentModel.isRouter || !i().length) {
			F(ye, null);
			return;
		}
		const P = i().find((J) => J.from === "user");
		if (!P) {
			F(ye, null);
			return;
		}
		const H = $s.find((J) => J.prompt.trim() === P.content.trim());
		F(ye, H ? H.prompt : null, !0);
	});
	function Be(P) {
		Bn() || s() || (p(P), k());
	}
	async function tt(P) {
		var H;
		if (!Bn()) {
			if ((F(ye, P.prompt, !0), (H = P.attachments) != null && H.length)) {
				const J = [];
				for (const de of P.attachments)
					try {
						const Ie = await fetch(`${Oa}/${de.src}`);
						if (!Ie.ok) continue;
						const Ne = await Ie.blob(),
							gt = de.src.split("/").pop() ?? "attachment";
						J.push(new File([Ne], gt, { type: Ne.type || "application/octet-stream" }));
					} catch (Ie) {
						console.error("Error loading attachment:", Ie);
					}
				f(J);
			}
			Be(P.prompt);
		}
	}
	function ot(P) {
		Be(P.prompt);
	}
	var st = xy();
	dr("dragenter", lo, A),
		dr("dragleave", lo, N),
		dr("dragover", lo, (P) => {
			P.preventDefault();
		}),
		dr("drop", lo, (P) => {
			P.preventDefault(), F(B, !1);
		});
	var vt = L(st);
	{
		var ct = (P) => {
			Z8(P, {
				get open() {
					return m(y);
				},
				onclose: () => Rl.close(),
			});
		};
		ne(vt, (P) => {
			m(y) && P(ct);
		});
	}
	var pt = X(vt, 2),
		Mt = L(pt),
		Ct = L(Mt);
	{
		var Pe = (P) => {
			const H = j(() => h() ?? "");
			B8(P, {
				get preprompt() {
					return m(H);
				},
			});
		};
		ne(Ct, (P) => {
			h() && h() != e.currentModel.preprompt && P(Pe);
		});
	}
	var _e = X(Ct, 2);
	{
		var De = (P) => {
				var H = ry(),
					J = L(H);
				Tr(
					J,
					19,
					i,
					(Ne) => Ne.id,
					(Ne, gt, St) => {
						const Dt = j(() => o().find((Pt) => Pt.includes(m(gt).id)) ?? []),
							at = j(() => !u()),
							We = j(() => m(St) === i().length - 1);
						U1(Ne, {
							get loading() {
								return s();
							},
							get message() {
								return m(gt);
							},
							get alternatives() {
								return m(Dt);
							},
							get isAuthor() {
								return m(at);
							},
							get readOnly() {
								return m(g);
							},
							get isLast() {
								return m(We);
							},
							onretry: (Pt) => {
								var wt;
								return (wt = e.onretry) == null ? void 0 : wt.call(e, Pt);
							},
							onshowAlternateMsg: (Pt) => {
								var wt;
								return (wt = e.onshowAlternateMsg) == null ? void 0 : wt.call(e, Pt);
							},
							get editMsdgId() {
								return m(x);
							},
							set editMsdgId(Pt) {
								F(x, Pt, !0);
							},
						});
					}
				);
				var de = X(J, 2);
				{
					var Ie = (Ne) => {
						ty(Ne, {
							get models() {
								return e.models;
							},
							get currentModel() {
								return e.currentModel;
							},
						});
					};
					ne(de, (Ne) => {
						m(g) && Ne(Ie);
					});
				}
				O(H), C(P, H);
			},
			ke = (P, H) => {
				{
					var J = (Ie) => {
							const Ne = j(() => !u());
							U1(Ie, {
								loading: !0,
								message: { id: "0-0-0-0-0", content: "", from: "assistant", children: [] },
								get isAuthor() {
									return m(Ne);
								},
								get readOnly() {
									return m(g);
								},
							});
						},
						de = (Ie) => {
							J8(Ie, {
								get currentModel() {
									return e.currentModel;
								},
								onmessage: (Ne) => {
									var gt;
									(gt = e.onmessage) == null || gt.call(e, Ne);
								},
							});
						};
					ne(
						P,
						(Ie) => {
							l() ? Ie(J) : Ie(de, !1);
						},
						H
					);
				}
			};
		ne(_e, (P) => {
			i().length > 0 ? P(De) : P(ke, !1);
		});
	}
	O(Mt);
	var Re = X(Mt, 2);
	M8(Re, {
		class: "fixed bottom-48 right-4 lg:right-10",
		get scrollNode() {
			return m(oe);
		},
	});
	var dt = X(Re, 2);
	T8(dt, {
		class: "fixed bottom-36 right-4 lg:right-10",
		get scrollNode() {
			return m(oe);
		},
	}),
		O(pt),
		Tp(
			pt,
			(P, H) => (rc == null ? void 0 : rc(P, H)),
			() => m(G)
		),
		vn(
			pt,
			(P) => F(oe, P),
			() => m(oe)
		);
	var Et = X(pt, 2),
		Ht = L(Et);
	{
		var nr = (P) => {
			var H = iy();
			Tr(
				H,
				21,
				() => $s,
				sn,
				(J, de) => {
					var Ie = ay();
					Ie.__click = [ny, tt, de];
					var Ne = L(Ie, !0);
					O(Ie), Me(() => ut(Ne, m(de).title)), C(J, Ie);
				}
			),
				O(H),
				C(P, H);
		};
		ne(Ht, (P) => {
			!p().length &&
				!i().length &&
				!m(le).length &&
				!s() &&
				e.currentModel.isRouter &&
				$s.length &&
				!m(qe) &&
				!m(ce) &&
				P(nr);
		});
	}
	var Zt = X(Ht, 2);
	{
		var $t = (P) => {
			var H = ly();
			Tr(
				H,
				21,
				() => m(be),
				sn,
				(J, de) => {
					var Ie = sy();
					Ie.__click = [oy, ot, de];
					var Ne = L(Ie);
					Rp(Ne, { class: "scale-y-[-1] text-xs" });
					var gt = X(Ne);
					O(Ie), Me(() => ut(gt, ` ${m(de).title ?? ""}`)), C(J, Ie);
				}
			),
				O(H),
				C(P, H);
		};
		ne(Zt, (P) => {
			m(ze) && !m(ce) && P($t);
		});
	}
	var Gt = X(Zt, 2);
	{
		var mr = (P) => {
			var H = cy();
			Tr(
				H,
				21,
				() => m(le),
				sn,
				(J, de, Ie) => {
					var Ne = He(),
						gt = pe(Ne);
					nh(
						gt,
						() => m(de),
						null,
						(St, Dt) => {
							Ic(St, {
								get file() {
									return m(Dt);
								},
								onclose: () => {
									f(f().filter((at, We) => We !== Ie));
								},
							});
						}
					),
						C(J, Ne);
				}
			),
				O(H),
				Zc(
					1,
					H,
					() => hp,
					() => (m(le).length === 1 ? { y: -20, easing: dp } : void 0)
				),
				C(P, H);
		};
		ne(Gt, (P) => {
			var H;
			(H = m(le)) != null && H.length && !s() && P(mr);
		});
	}
	var sr = X(Gt, 2),
		_r = L(sr),
		Wn = L(_r);
	{
		var kn = (P) => {
			a3(P, {
				classNames: "ml-auto",
				onClick: () => {
					var H;
					m(I) && m(I).ancestors && ((H = e.onretry) == null || H.call(e, { id: m(I).id }));
				},
			});
		};
		ne(Wn, (P) => {
			!s() && m(ce) && P(kn);
		});
	}
	O(_r);
	var Zr = X(_r, 2),
		Ur = L(Zr);
	{
		var Lr = (P) => {
				t3(P, {
					get mimeTypes() {
						return m(it);
					},
					get files() {
						return f();
					},
					set files(H) {
						f(H);
					},
					get onDrag() {
						return m(B);
					},
					set onDrag(H) {
						F(B, H, !0);
					},
				});
			},
			Wt = (P) => {
				var H = dy();
				let J;
				var de = L(H);
				{
					var Ie = (at) => {
							Zd(at, { value: "Sorry, something went wrong. Please try again.", disabled: !0 });
						},
						Ne = (at) => {
							const We = j(() => (m(g) ? "This conversation is read-only." : "Ask anything")),
								Pt = j(() => m(g) || m(ce));
							Zd(at, {
								get placeholder() {
									return m(We);
								},
								get loading() {
									return s();
								},
								get mimeTypes() {
									return m(it);
								},
								onsubmit: k,
								onPaste: z,
								get disabled() {
									return m(Pt);
								},
								get modelIsMultimodal() {
									return m(je);
								},
								get modelSupportsTools() {
									return m(Xe);
								},
								get value() {
									return p();
								},
								set value(wt) {
									p(wt);
								},
								get files() {
									return f();
								},
								set files(wt) {
									f(wt);
								},
								get focused() {
									return m(we);
								},
								set focused(wt) {
									F(we, wt, !0);
								},
							});
						};
					ne(de, (at) => {
						m(ce) ? at(Ie) : at(Ne, !1);
					});
				}
				var gt = X(de, 2);
				{
					var St = (at) => {
							$v(at, {
								onClick: () => {
									var We;
									return (We = e.onstop) == null ? void 0 : We.call(e);
								},
								showBorder: !0,
								classNames:
									"absolute bottom-2 right-2 size-7 self-end rounded-full border bg-white text-black shadow transition-none dark:border-transparent dark:bg-gray-600 dark:text-white",
							});
						},
						Dt = (at) => {
							var We = uy();
							Me(() => {
								Tt(
									We,
									1,
									`btn absolute bottom-2 right-2 size-7 self-end rounded-full border bg-white text-black shadow transition-none enabled:hover:bg-white enabled:hover:shadow-inner dark:border-transparent dark:bg-gray-600 dark:text-white dark:hover:enabled:bg-black ${!p() || m(g) ? "" : "!bg-black !text-white dark:!bg-white dark:!text-black"}`,
									"svelte-1pgzd69"
								),
									(We.disabled = !p() || m(g));
							}),
								C(at, We);
						};
					ne(gt, (at) => {
						s() ? at(St) : at(Dt, !1);
					});
				}
				O(H),
					Me(
						(at) =>
							(J = Tt(
								H,
								1,
								"flex w-full flex-1 rounded-xl border-none bg-transparent svelte-1pgzd69",
								null,
								J,
								at
							)),
						[() => ({ "paste-glow": m(_) })]
					),
					C(P, H);
			};
		ne(Ur, (P) => {
			m(B) && m(lt) ? P(Lr) : P(Wt, !1);
		});
	}
	O(Zr);
	var lr = X(Zr, 2),
		M = L(lr);
	{
		var Y = (P) => {
				var H = He(),
					J = pe(H);
				{
					var de = (Ne) => {
							var gt = hy(),
								St = L(gt);
							rh(St, { class: "text-[11px]" });
							var Dt = X(St, 2),
								at = L(Dt, !0);
							O(Dt),
								O(gt),
								Me(
									(We) => ut(at, We),
									[
										() => {
											var We;
											return (
												((We = m(Ce).find((Pt) => Pt.name === m(Q))) == null
													? void 0
													: We.displayName) ?? m(Q)
											);
										},
									]
								),
								C(Ne, gt);
						},
						Ie = (Ne, gt) => {
							{
								var St = (at) => {
										var We = py();
										We.__click = [fy];
										var Pt = L(We);
										{
											var wt = (Kt) => {
													var pr = my(),
														Or = pe(pr);
													Nl(Or, {});
													var rn = X(Or);
													Me(() => ut(rn, ` ${e.currentModel.displayName ?? ""}`)), C(Kt, pr);
												},
												zr = (Kt) => {
													var pr = f0();
													Me(() => ut(pr, `Model: ${e.currentModel.displayName ?? ""}`)), C(Kt, pr);
												};
											ne(Pt, (Kt) => {
												e.currentModel.isRouter ? Kt(wt) : Kt(zr, !1);
											});
										}
										var bt = X(Pt, 2);
										lh(bt, { class: "-ml-0.5 text-xxs" }),
											O(We),
											Me(() => qt(We, "href", `${Oa ?? ""}/settings/${e.currentModel.id ?? ""}`)),
											C(at, We);
									},
									Dt = (at, We) => {
										{
											var Pt = (zr) => {
													var bt = gy(),
														Kt = L(bt);
													Nl(Kt, { classNames: "text-xs animate-pulse" });
													var pr = X(Kt, 2),
														Or = L(pr, !0);
													O(pr);
													var rn = X(pr, 4),
														kr = L(rn, !0);
													O(rn),
														O(bt),
														Me(() => {
															ut(Or, m(V).route), ut(kr, m(se));
														}),
														C(zr, bt);
												},
												wt = (zr) => {
													var bt = vy(),
														Kt = L(bt);
													Nl(Kt, { classNames: "text-xs animate-pulse mr-1" }),
														ar(),
														O(bt),
														C(zr, bt);
												};
											ne(
												at,
												(zr) => {
													var bt;
													m($) && (bt = m(V)) != null && bt.route ? zr(Pt) : zr(wt, !1);
												},
												We
											);
										}
									};
								ne(
									Ne,
									(at) => {
										!e.currentModel.isRouter || !s() ? at(St) : at(Dt, !1);
									},
									gt
								);
							}
						};
					ne(J, (Ne) => {
						s() && m(Q) ? Ne(de) : Ne(Ie, !1);
					});
				}
				C(P, H);
			},
			ve = (P) => {
				var H = by(),
					J = L(H, !0);
				O(H), Me(() => ut(J, e.currentModel.id)), C(P, H);
			};
		ne(M, (P) => {
			e.models.find((H) => H.id === e.currentModel.id) ? P(Y) : P(ve, !1);
		});
	}
	var Ge = X(M, 2);
	{
		var kt = (P) => {
			var H = yy();
			C(P, H);
		};
		ne(Ge, (P) => {
			!i().length && !s() && P(kt);
		});
	}
	O(lr),
		O(sr),
		O(Et),
		O(st),
		Me(
			(P, H) => {
				qt(Zr, "aria-label", m(lt) ? "file dropzone" : void 0),
					Tt(Zr, 1, P, "svelte-1pgzd69"),
					Tt(lr, 1, H, "svelte-1pgzd69");
			},
			[
				() =>
					ti({
						"relative flex w-full max-w-4xl flex-1 items-center rounded-xl border bg-gray-100 dark:border-gray-700 dark:bg-gray-800":
							!0,
						"opacity-30": m(g),
						"max-sm:mb-4": m(we) && wi(),
					}),
				() =>
					ti({
						"mt-1.5 flex h-5 items-center self-stretch whitespace-nowrap px-0.5 text-xs text-gray-400/90 max-md:mb-2 max-sm:gap-2":
							!0,
						"max-sm:hidden": m(we) && wi(),
					}),
			]
		),
		dr("submit", Zr, (P) => {
			P.preventDefault(), k();
		}),
		C(r, st),
		xt(),
		n();
}
Mr(["click"]);
const Zy = Hm(),
	jy = (r, e = [], t) => {
		if (t) {
			const n = r.find((a) => a.id === t);
			if (n) return n;
		}
		return r[0];
	};
export { Xy as C, _v as a, i3 as b, Yy as c, jy as f, Zy as p, tc as u };
