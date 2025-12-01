var it = (e) => {
	throw TypeError(e);
};
var Kt = (e, t, n) => t.has(e) || it("Cannot " + n);
var k = (e, t, n) => (Kt(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
	P = (e, t, n) =>
		t.has(e)
			? it("Cannot add the same private member more than once")
			: t instanceof WeakSet
				? t.add(e)
				: t.set(e, n);
import {
	n as z,
	x as ze,
	a_ as Wt,
	C as Yt,
	b2 as kt,
	B as Jt,
	z as me,
	b as O,
	g as C,
	e as N,
	i as Xt,
} from "./C6vgWmgZ.js";
import { l as Zt } from "./DIeogL5L.js";
function At(e, t, n) {
	if (e == null) return t(void 0), n && n(void 0), z;
	const r = ze(() => e.subscribe(t, n));
	return r.unsubscribe ? () => r.unsubscribe() : r;
}
const M = [];
function Qt(e, t) {
	return { subscribe: Re(e, t).subscribe };
}
function Re(e, t = z) {
	let n = null;
	const r = new Set();
	function a(o) {
		if (Wt(e, o) && ((e = o), n)) {
			const c = !M.length;
			for (const l of r) l[1](), M.push(l, e);
			if (c) {
				for (let l = 0; l < M.length; l += 2) M[l][0](M[l + 1]);
				M.length = 0;
			}
		}
	}
	function s(o) {
		a(o(e));
	}
	function i(o, c = z) {
		const l = [o, c];
		return (
			r.add(l),
			r.size === 1 && (n = t(a, s) || z),
			o(e),
			() => {
				r.delete(l), r.size === 0 && n && (n(), (n = null));
			}
		);
	}
	return { set: a, update: s, subscribe: i };
}
function er(e, t, n) {
	const r = !Array.isArray(e),
		a = r ? [e] : e;
	if (!a.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
	const s = t.length < 2;
	return Qt(n, (i, o) => {
		let c = !1;
		const l = [];
		let d = 0,
			u = z;
		const _ = () => {
				if (d) return;
				u();
				const m = t(r ? l[0] : l, i, o);
				s ? i(m) : (u = typeof m == "function" ? m : z);
			},
			f = a.map((m, h) =>
				At(
					m,
					(p) => {
						(l[h] = p), (d &= ~(1 << h)), c && _();
					},
					() => {
						d |= 1 << h;
					}
				)
			);
		return (
			(c = !0),
			_(),
			function () {
				Yt(f), u(), (c = !1);
			}
		);
	});
}
function tr(e) {
	let t;
	return At(e, (n) => (t = n))(), t;
}
function _e(e) {
	me === null && kt(),
		Zt && me.l !== null
			? en(me).m.push(e)
			: Jt(() => {
					const t = ze(e);
					if (typeof t == "function") return t;
				});
}
function nr(e) {
	me === null && kt(), _e(() => () => ze(e));
}
function en(e) {
	var t = e.l;
	return t.u ?? (t.u = { a: [], b: [], m: [] });
}
new URL("sveltekit-internal://");
function tn(e, t) {
	return e === "/" || t === "ignore"
		? e
		: t === "never"
			? e.endsWith("/")
				? e.slice(0, -1)
				: e
			: t === "always" && !e.endsWith("/")
				? e + "/"
				: e;
}
function nn(e) {
	return e.split("%25").map(decodeURI).join("%25");
}
function rn(e) {
	for (const t in e) e[t] = decodeURIComponent(e[t]);
	return e;
}
function $e({ href: e }) {
	return e.split("#")[0];
}
function an(e, t, n, r = !1) {
	const a = new URL(e);
	Object.defineProperty(a, "searchParams", {
		value: new Proxy(a.searchParams, {
			get(i, o) {
				if (o === "get" || o === "getAll" || o === "has") return (l) => (n(l), i[o](l));
				t();
				const c = Reflect.get(i, o);
				return typeof c == "function" ? c.bind(i) : c;
			},
		}),
		enumerable: !0,
		configurable: !0,
	});
	const s = ["href", "pathname", "search", "toString", "toJSON"];
	r && s.push("hash");
	for (const i of s)
		Object.defineProperty(a, i, {
			get() {
				return t(), e[i];
			},
			enumerable: !0,
			configurable: !0,
		});
	return a;
}
function on(...e) {
	let t = 5381;
	for (const n of e)
		if (typeof n == "string") {
			let r = n.length;
			for (; r; ) t = (t * 33) ^ n.charCodeAt(--r);
		} else if (ArrayBuffer.isView(n)) {
			const r = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
			let a = r.length;
			for (; a; ) t = (t * 33) ^ r[--a];
		} else throw new TypeError("value must be a string or TypedArray");
	return (t >>> 0).toString(36);
}
function sn(e) {
	const t = atob(e),
		n = new Uint8Array(t.length);
	for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
	return n.buffer;
}
const cn = window.fetch;
window.fetch = (e, t) => (
	(e instanceof Request ? e.method : (t == null ? void 0 : t.method) || "GET") !== "GET" &&
		X.delete(He(e)),
	cn(e, t)
);
const X = new Map();
function ln(e, t) {
	const n = He(e, t),
		r = document.querySelector(n);
	if (r != null && r.textContent) {
		let { body: a, ...s } = JSON.parse(r.textContent);
		const i = r.getAttribute("data-ttl");
		return (
			i && X.set(n, { body: a, init: s, ttl: 1e3 * Number(i) }),
			r.getAttribute("data-b64") !== null && (a = sn(a)),
			Promise.resolve(new Response(a, s))
		);
	}
	return window.fetch(e, t);
}
function fn(e, t, n) {
	if (X.size > 0) {
		const r = He(e, n),
			a = X.get(r);
		if (a) {
			if (
				performance.now() < a.ttl &&
				["default", "force-cache", "only-if-cached", void 0].includes(n == null ? void 0 : n.cache)
			)
				return new Response(a.body, a.init);
			X.delete(r);
		}
	}
	return window.fetch(t, n);
}
function He(e, t) {
	let r = `script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request ? e.url : e)}]`;
	if ((t != null && t.headers) || (t != null && t.body)) {
		const a = [];
		t.headers && a.push([...new Headers(t.headers)].join(",")),
			t.body && (typeof t.body == "string" || ArrayBuffer.isView(t.body)) && a.push(t.body),
			(r += `[data-hash="${on(...a)}"]`);
	}
	return r;
}
const un = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function dn(e) {
	const t = [];
	return {
		pattern:
			e === "/"
				? /^\/$/
				: new RegExp(
						`^${pn(e)
							.map((r) => {
								const a = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);
								if (a)
									return (
										t.push({ name: a[1], matcher: a[2], optional: !1, rest: !0, chained: !0 }),
										"(?:/(.*))?"
									);
								const s = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);
								if (s)
									return (
										t.push({ name: s[1], matcher: s[2], optional: !0, rest: !1, chained: !0 }),
										"(?:/([^/]+))?"
									);
								if (!r) return;
								const i = r.split(/\[(.+?)\](?!\])/);
								return (
									"/" +
									i
										.map((c, l) => {
											if (l % 2) {
												if (c.startsWith("x+"))
													return De(String.fromCharCode(parseInt(c.slice(2), 16)));
												if (c.startsWith("u+"))
													return De(
														String.fromCharCode(
															...c
																.slice(2)
																.split("-")
																.map((h) => parseInt(h, 16))
														)
													);
												const d = un.exec(c),
													[, u, _, f, m] = d;
												return (
													t.push({
														name: f,
														matcher: m,
														optional: !!u,
														rest: !!_,
														chained: _ ? l === 1 && i[0] === "" : !1,
													}),
													_ ? "(.*?)" : u ? "([^/]*)?" : "([^/]+?)"
												);
											}
											return De(c);
										})
										.join("")
								);
							})
							.join("")}/?$`
					),
		params: t,
	};
}
function hn(e) {
	return !/^\([^)]+\)$/.test(e);
}
function pn(e) {
	return e.slice(1).split("/").filter(hn);
}
function gn(e, t, n) {
	const r = {},
		a = e.slice(1),
		s = a.filter((o) => o !== void 0);
	let i = 0;
	for (let o = 0; o < t.length; o += 1) {
		const c = t[o];
		let l = a[o - i];
		if (
			(c.chained &&
				c.rest &&
				i &&
				((l = a
					.slice(o - i, o + 1)
					.filter((d) => d)
					.join("/")),
				(i = 0)),
			l === void 0)
		) {
			c.rest && (r[c.name] = "");
			continue;
		}
		if (!c.matcher || n[c.matcher](l)) {
			r[c.name] = l;
			const d = t[o + 1],
				u = a[o + 1];
			d && !d.rest && d.optional && u && c.chained && (i = 0),
				!d && !u && Object.keys(r).length === s.length && (i = 0);
			continue;
		}
		if (c.optional && c.chained) {
			i++;
			continue;
		}
		return;
	}
	if (!i) return r;
}
function De(e) {
	return e
		.normalize()
		.replace(/[[\]]/g, "\\$&")
		.replace(/%/g, "%25")
		.replace(/\//g, "%2[Ff]")
		.replace(/\?/g, "%3[Ff]")
		.replace(/#/g, "%23")
		.replace(/[.*+?^${}()|\\]/g, "\\$&");
}
function mn({ nodes: e, server_loads: t, dictionary: n, matchers: r }) {
	const a = new Set(t);
	return Object.entries(n).map(([o, [c, l, d]]) => {
		const { pattern: u, params: _ } = dn(o),
			f = {
				id: o,
				exec: (m) => {
					const h = u.exec(m);
					if (h) return gn(h, _, r);
				},
				errors: [1, ...(d || [])].map((m) => e[m]),
				layouts: [0, ...(l || [])].map(i),
				leaf: s(c),
			};
		return (f.errors.length = f.layouts.length = Math.max(f.errors.length, f.layouts.length)), f;
	});
	function s(o) {
		const c = o < 0;
		return c && (o = ~o), [c, e[o]];
	}
	function i(o) {
		return o === void 0 ? o : [a.has(o), e[o]];
	}
}
function St(e, t = JSON.parse) {
	try {
		return t(sessionStorage[e]);
	} catch {}
}
function ct(e, t, n = JSON.stringify) {
	const r = n(t);
	try {
		sessionStorage[e] = r;
	} catch {}
}
var _t;
const x = ((_t = globalThis.__sveltekit_1famkl8) == null ? void 0 : _t.base) ?? "";
var yt;
const _n = ((yt = globalThis.__sveltekit_1famkl8) == null ? void 0 : yt.assets) ?? x,
	yn = "1764557586089",
	Et = "sveltekit:snapshot",
	Rt = "sveltekit:scroll",
	Ke = "sveltekit:states",
	It = "sveltekit:pageurl",
	V = "sveltekit:history",
	W = "sveltekit:navigation",
	F = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1, false: -1 },
	he = location.origin;
function Ie(e) {
	if (e instanceof URL) return e;
	let t = document.baseURI;
	if (!t) {
		const n = document.getElementsByTagName("base");
		t = n.length ? n[0].href : document.URL;
	}
	return new URL(e, t);
}
function We() {
	return { x: pageXOffset, y: pageYOffset };
}
function G(e, t) {
	return e.getAttribute(`data-sveltekit-${t}`);
}
const lt = { ...F, "": F.hover };
function Ut(e) {
	let t = e.assignedSlot ?? e.parentNode;
	return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host), t;
}
function Lt(e, t) {
	for (; e && e !== t; ) {
		if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href")) return e;
		e = Ut(e);
	}
}
function qe(e, t, n) {
	let r;
	try {
		if (
			((r = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href, document.baseURI)),
			n && r.hash.match(/^#[^/]/))
		) {
			const o = location.hash.split("#")[1] || "/";
			r.hash = `#${o}${r.hash}`;
		}
	} catch {}
	const a = e instanceof SVGAElement ? e.target.baseVal : e.target,
		s = !r || !!a || Ue(r, t, n) || (e.getAttribute("rel") || "").split(/\s+/).includes("external"),
		i = (r == null ? void 0 : r.origin) === he && e.hasAttribute("download");
	return { url: r, external: s, target: a, download: i };
}
function ye(e) {
	let t = null,
		n = null,
		r = null,
		a = null,
		s = null,
		i = null,
		o = e;
	for (; o && o !== document.documentElement; )
		r === null && (r = G(o, "preload-code")),
			a === null && (a = G(o, "preload-data")),
			t === null && (t = G(o, "keepfocus")),
			n === null && (n = G(o, "noscroll")),
			s === null && (s = G(o, "reload")),
			i === null && (i = G(o, "replacestate")),
			(o = Ut(o));
	function c(l) {
		switch (l) {
			case "":
			case "true":
				return !0;
			case "off":
			case "false":
				return !1;
			default:
				return;
		}
	}
	return {
		preload_code: lt[r ?? "off"],
		preload_data: lt[a ?? "off"],
		keepfocus: c(t),
		noscroll: c(n),
		reload: c(s),
		replace_state: c(i),
	};
}
function ft(e) {
	const t = Re(e);
	let n = !0;
	function r() {
		(n = !0), t.update((i) => i);
	}
	function a(i) {
		(n = !1), t.set(i);
	}
	function s(i) {
		let o;
		return t.subscribe((c) => {
			(o === void 0 || (n && c !== o)) && i((o = c));
		});
	}
	return { notify: r, set: a, subscribe: s };
}
const Tt = { v: () => {} };
function wn() {
	const { set: e, subscribe: t } = Re(!1);
	let n;
	async function r() {
		clearTimeout(n);
		try {
			const a = await fetch(`${_n}/_app/version.json`, {
				headers: { pragma: "no-cache", "cache-control": "no-cache" },
			});
			if (!a.ok) return !1;
			const i = (await a.json()).version !== yn;
			return i && (e(!0), Tt.v(), clearTimeout(n)), i;
		} catch {
			return !1;
		}
	}
	return { subscribe: t, check: r };
}
function Ue(e, t, n) {
	return e.origin !== he || !e.pathname.startsWith(t)
		? !0
		: n
			? !(
					e.pathname === t + "/" ||
					e.pathname === t + "/index.html" ||
					(e.protocol === "file:" && e.pathname.replace(/\/[^/]+\.html?$/, "") === t)
				)
			: !1;
}
function rr(e) {}
function ut(e) {
	const t = bn(e),
		n = new ArrayBuffer(t.length),
		r = new DataView(n);
	for (let a = 0; a < n.byteLength; a++) r.setUint8(a, t.charCodeAt(a));
	return n;
}
const vn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function bn(e) {
	e.length % 4 === 0 && (e = e.replace(/==?$/, ""));
	let t = "",
		n = 0,
		r = 0;
	for (let a = 0; a < e.length; a++)
		(n <<= 6),
			(n |= vn.indexOf(e[a])),
			(r += 6),
			r === 24 &&
				((t += String.fromCharCode((n & 16711680) >> 16)),
				(t += String.fromCharCode((n & 65280) >> 8)),
				(t += String.fromCharCode(n & 255)),
				(n = r = 0));
	return (
		r === 12
			? ((n >>= 4), (t += String.fromCharCode(n)))
			: r === 18 &&
				((n >>= 2),
				(t += String.fromCharCode((n & 65280) >> 8)),
				(t += String.fromCharCode(n & 255))),
		t
	);
}
const kn = -1,
	An = -2,
	Sn = -3,
	En = -4,
	Rn = -5,
	In = -6;
function Un(e, t) {
	if (typeof e == "number") return a(e, !0);
	if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
	const n = e,
		r = Array(n.length);
	function a(s, i = !1) {
		if (s === kn) return;
		if (s === Sn) return NaN;
		if (s === En) return 1 / 0;
		if (s === Rn) return -1 / 0;
		if (s === In) return -0;
		if (i) throw new Error("Invalid input");
		if (s in r) return r[s];
		const o = n[s];
		if (!o || typeof o != "object") r[s] = o;
		else if (Array.isArray(o))
			if (typeof o[0] == "string") {
				const c = o[0],
					l = t == null ? void 0 : t[c];
				if (l) return (r[s] = l(a(o[1])));
				switch (c) {
					case "Date":
						r[s] = new Date(o[1]);
						break;
					case "Set":
						const d = new Set();
						r[s] = d;
						for (let f = 1; f < o.length; f += 1) d.add(a(o[f]));
						break;
					case "Map":
						const u = new Map();
						r[s] = u;
						for (let f = 1; f < o.length; f += 2) u.set(a(o[f]), a(o[f + 1]));
						break;
					case "RegExp":
						r[s] = new RegExp(o[1], o[2]);
						break;
					case "Object":
						r[s] = Object(o[1]);
						break;
					case "BigInt":
						r[s] = BigInt(o[1]);
						break;
					case "null":
						const _ = Object.create(null);
						r[s] = _;
						for (let f = 1; f < o.length; f += 2) _[o[f]] = a(o[f + 1]);
						break;
					case "Int8Array":
					case "Uint8Array":
					case "Uint8ClampedArray":
					case "Int16Array":
					case "Uint16Array":
					case "Int32Array":
					case "Uint32Array":
					case "Float32Array":
					case "Float64Array":
					case "BigInt64Array":
					case "BigUint64Array": {
						const f = globalThis[c],
							m = o[1],
							h = ut(m),
							p = new f(h);
						r[s] = p;
						break;
					}
					case "ArrayBuffer": {
						const f = o[1],
							m = ut(f);
						r[s] = m;
						break;
					}
					default:
						throw new Error(`Unknown type ${c}`);
				}
			} else {
				const c = new Array(o.length);
				r[s] = c;
				for (let l = 0; l < o.length; l += 1) {
					const d = o[l];
					d !== An && (c[l] = a(d));
				}
			}
		else {
			const c = {};
			r[s] = c;
			for (const l in o) {
				const d = o[l];
				c[l] = a(d);
			}
		}
		return r[s];
	}
	return a(0);
}
const xt = new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...xt];
const Ln = new Set([...xt]);
[...Ln];
function Tn(e) {
	return e.filter((t) => t != null);
}
class Le {
	constructor(t, n) {
		(this.status = t),
			typeof n == "string"
				? (this.body = { message: n })
				: n
					? (this.body = n)
					: (this.body = { message: `Error: ${t}` });
	}
	toString() {
		return JSON.stringify(this.body);
	}
}
class Ye {
	constructor(t, n) {
		(this.status = t), (this.location = n);
	}
}
class Je extends Error {
	constructor(t, n, r) {
		super(r), (this.status = t), (this.text = n);
	}
}
const xn = "x-sveltekit-invalidated",
	Pn = "x-sveltekit-trailing-slash";
function we(e) {
	return e instanceof Le || e instanceof Je ? e.status : 500;
}
function On(e) {
	return e instanceof Je ? e.text : "Internal Error";
}
let S, ee, Be;
const Cn = _e.toString().includes("$$") || /function \w+\(\) \{\}/.test(_e.toString());
var re, ae, oe, se, ie, ce, le, fe, wt, ue, vt, de, bt;
Cn
	? ((S = {
			data: {},
			form: null,
			error: null,
			params: {},
			route: { id: null },
			state: {},
			status: -1,
			url: new URL("https://example.com"),
		}),
		(ee = { current: null }),
		(Be = { current: !1 }))
	: ((S = new ((wt = class {
			constructor() {
				P(this, re, O({}));
				P(this, ae, O(null));
				P(this, oe, O(null));
				P(this, se, O({}));
				P(this, ie, O({ id: null }));
				P(this, ce, O({}));
				P(this, le, O(-1));
				P(this, fe, O(new URL("https://example.com")));
			}
			get data() {
				return C(k(this, re));
			}
			set data(t) {
				N(k(this, re), t);
			}
			get form() {
				return C(k(this, ae));
			}
			set form(t) {
				N(k(this, ae), t);
			}
			get error() {
				return C(k(this, oe));
			}
			set error(t) {
				N(k(this, oe), t);
			}
			get params() {
				return C(k(this, se));
			}
			set params(t) {
				N(k(this, se), t);
			}
			get route() {
				return C(k(this, ie));
			}
			set route(t) {
				N(k(this, ie), t);
			}
			get state() {
				return C(k(this, ce));
			}
			set state(t) {
				N(k(this, ce), t);
			}
			get status() {
				return C(k(this, le));
			}
			set status(t) {
				N(k(this, le), t);
			}
			get url() {
				return C(k(this, fe));
			}
			set url(t) {
				N(k(this, fe), t);
			}
		}),
		(re = new WeakMap()),
		(ae = new WeakMap()),
		(oe = new WeakMap()),
		(se = new WeakMap()),
		(ie = new WeakMap()),
		(ce = new WeakMap()),
		(le = new WeakMap()),
		(fe = new WeakMap()),
		wt)()),
		(ee = new ((vt = class {
			constructor() {
				P(this, ue, O(null));
			}
			get current() {
				return C(k(this, ue));
			}
			set current(t) {
				N(k(this, ue), t);
			}
		}),
		(ue = new WeakMap()),
		vt)()),
		(Be = new ((bt = class {
			constructor() {
				P(this, de, O(!1));
			}
			get current() {
				return C(k(this, de));
			}
			set current(t) {
				N(k(this, de), t);
			}
		}),
		(de = new WeakMap()),
		bt)()),
		(Tt.v = () => (Be.current = !0)));
function Pt(e) {
	Object.assign(S, e);
}
const Nn = "/__data.json",
	jn = ".html__data.json";
function $n(e) {
	return e.endsWith(".html") ? e.replace(/\.html$/, jn) : e.replace(/\/$/, "") + Nn;
}
const Dn = new Set(["icon", "shortcut icon", "apple-touch-icon"]),
	q = St(Rt) ?? {},
	te = St(Et) ?? {},
	D = { url: ft({}), page: ft({}), navigating: Re(null), updated: wn() };
function Xe(e) {
	q[e] = We();
}
function Bn(e, t) {
	let n = e + 1;
	for (; q[n]; ) delete q[n], (n += 1);
	for (n = t + 1; te[n]; ) delete te[n], (n += 1);
}
function Y(e) {
	return (location.href = e.href), new Promise(() => {});
}
async function Ot() {
	if ("serviceWorker" in navigator) {
		const e = await navigator.serviceWorker.getRegistration(x || "/");
		e && (await e.update());
	}
}
function dt() {}
let Ze, Me, ve, j, Ge, A;
const be = [],
	ke = [];
let L = null;
const ge = new Map(),
	Qe = new Set(),
	Fn = new Set(),
	H = new Set();
let y = { branch: [], error: null, url: null },
	et = !1,
	Ae = !1,
	ht = !0,
	ne = !1,
	J = !1,
	Ct = !1,
	Te = !1,
	xe,
	R,
	T,
	$;
const Z = new Set();
let Fe;
async function ir(e, t, n) {
	var a, s, i, o;
	document.URL !== location.href && (location.href = location.href),
		(A = e),
		await ((s = (a = e.hooks).init) == null ? void 0 : s.call(a)),
		(Ze = mn(e)),
		(j = document.documentElement),
		(Ge = t),
		(Me = e.nodes[0]),
		(ve = e.nodes[1]),
		Me(),
		ve(),
		(R = (i = history.state) == null ? void 0 : i[V]),
		(T = (o = history.state) == null ? void 0 : o[W]),
		R || ((R = T = Date.now()), history.replaceState({ ...history.state, [V]: R, [W]: T }, ""));
	const r = q[R];
	r && ((history.scrollRestoration = "manual"), scrollTo(r.x, r.y)),
		n
			? await Wn(Ge, n)
			: await Q({
					type: "enter",
					url: Ie(A.hash ? Jn(new URL(location.href)) : location.href),
					replace_state: !0,
				}),
		Kn();
}
async function Nt() {
	if ((await (Fe || (Fe = Promise.resolve())), !Fe)) return;
	Fe = null;
	const e = ($ = {}),
		t = await pe(y.url, !0);
	L = null;
	const n = t && (await rt(t));
	if (!(!n || e !== $)) {
		if (n.type === "redirect") return Pe(new URL(n.location, y.url).href, {}, 1, e);
		n.props.page && Object.assign(S, n.props.page),
			(y = n.state),
			jt(),
			xe.$set(n.props),
			Pt(n.props.page);
	}
}
function jt() {
	(be.length = 0), (Te = !1);
}
function $t(e) {
	ke.some((t) => (t == null ? void 0 : t.snapshot)) &&
		(te[e] = ke.map((t) => {
			var n;
			return (n = t == null ? void 0 : t.snapshot) == null ? void 0 : n.capture();
		}));
}
function Dt(e) {
	var t;
	(t = te[e]) == null ||
		t.forEach((n, r) => {
			var a, s;
			(s = (a = ke[r]) == null ? void 0 : a.snapshot) == null || s.restore(n);
		});
}
function pt() {
	Xe(R), ct(Rt, q), $t(T), ct(Et, te);
}
async function Pe(e, t, n, r) {
	return Q({
		type: "goto",
		url: Ie(e),
		keepfocus: t.keepFocus,
		noscroll: t.noScroll,
		replace_state: t.replaceState,
		state: t.state,
		redirect_count: n,
		nav_token: r,
		accept: () => {
			t.invalidateAll && (Te = !0), t.invalidate && t.invalidate.forEach(Gt);
		},
	});
}
async function Vn(e) {
	if (e.id !== (L == null ? void 0 : L.id)) {
		const t = {};
		Z.add(t),
			(L = {
				id: e.id,
				token: t,
				promise: rt({ ...e, preload: t }).then(
					(n) => (Z.delete(t), n.type === "loaded" && n.state.error && (L = null), n)
				),
			});
	}
	return L.promise;
}
async function Ve(e) {
	var n;
	const t = (n = await pe(e, !1)) == null ? void 0 : n.route;
	t && (await Promise.all([...t.layouts, t.leaf].map((r) => (r == null ? void 0 : r[1]()))));
}
function Bt(e, t, n) {
	var a;
	y = e.state;
	const r = document.querySelector("style[data-sveltekit]");
	if (
		(r && r.remove(),
		Object.assign(S, e.props.page),
		(xe = new A.root({
			target: t,
			props: { ...e.props, stores: D, components: ke },
			hydrate: n,
			sync: !1,
		})),
		Dt(T),
		n)
	) {
		const s = {
			from: null,
			to: {
				params: y.params,
				route: { id: ((a = y.route) == null ? void 0 : a.id) ?? null },
				url: new URL(location.href),
			},
			willUnload: !1,
			type: "enter",
			complete: Promise.resolve(),
		};
		H.forEach((i) => i(s));
	}
	Ae = !0;
}
function Se({ url: e, params: t, branch: n, status: r, error: a, route: s, form: i }) {
	let o = "never";
	if (x && (e.pathname === x || e.pathname === x + "/")) o = "always";
	else for (const f of n) (f == null ? void 0 : f.slash) !== void 0 && (o = f.slash);
	(e.pathname = tn(e.pathname, o)), (e.search = e.search);
	const c = {
		type: "loaded",
		state: { url: e, params: t, branch: n, error: a, route: s },
		props: { constructors: Tn(n).map((f) => f.node.component), page: Ce(S) },
	};
	i !== void 0 && (c.props.form = i);
	let l = {},
		d = !S,
		u = 0;
	for (let f = 0; f < Math.max(n.length, y.branch.length); f += 1) {
		const m = n[f],
			h = y.branch[f];
		(m == null ? void 0 : m.data) !== (h == null ? void 0 : h.data) && (d = !0),
			m && ((l = { ...l, ...m.data }), d && (c.props[`data_${u}`] = l), (u += 1));
	}
	return (
		(!y.url || e.href !== y.url.href || y.error !== a || (i !== void 0 && i !== S.form) || d) &&
			(c.props.page = {
				error: a,
				params: t,
				route: { id: (s == null ? void 0 : s.id) ?? null },
				state: {},
				status: r,
				url: new URL(e),
				form: i ?? null,
				data: d ? l : S.data,
			}),
		c
	);
}
async function tt({ loader: e, parent: t, url: n, params: r, route: a, server_data_node: s }) {
	var d, u, _;
	let i = null,
		o = !0;
	const c = {
			dependencies: new Set(),
			params: new Set(),
			parent: !1,
			route: !1,
			url: !1,
			search_params: new Set(),
		},
		l = await e();
	if ((d = l.universal) != null && d.load) {
		let f = function (...h) {
			for (const p of h) {
				const { href: v } = new URL(p, n);
				c.dependencies.add(v);
			}
		};
		const m = {
			route: new Proxy(a, { get: (h, p) => (o && (c.route = !0), h[p]) }),
			params: new Proxy(r, { get: (h, p) => (o && c.params.add(p), h[p]) }),
			data: (s == null ? void 0 : s.data) ?? null,
			url: an(
				n,
				() => {
					o && (c.url = !0);
				},
				(h) => {
					o && c.search_params.add(h);
				},
				A.hash
			),
			async fetch(h, p) {
				h instanceof Request &&
					(p = {
						body: h.method === "GET" || h.method === "HEAD" ? void 0 : await h.blob(),
						cache: h.cache,
						credentials: h.credentials,
						headers: [...h.headers].length ? h.headers : void 0,
						integrity: h.integrity,
						keepalive: h.keepalive,
						method: h.method,
						mode: h.mode,
						redirect: h.redirect,
						referrer: h.referrer,
						referrerPolicy: h.referrerPolicy,
						signal: h.signal,
						...p,
					});
				const { resolved: v, promise: I } = Ft(h, p, n);
				return o && f(v.href), I;
			},
			setHeaders: () => {},
			depends: f,
			parent() {
				return o && (c.parent = !0), t();
			},
			untrack(h) {
				o = !1;
				try {
					return h();
				} finally {
					o = !0;
				}
			},
		};
		i = (await l.universal.load.call(null, m)) ?? null;
	}
	return {
		node: l,
		loader: e,
		server: s,
		universal: (u = l.universal) != null && u.load ? { type: "data", data: i, uses: c } : null,
		data: i ?? (s == null ? void 0 : s.data) ?? null,
		slash: ((_ = l.universal) == null ? void 0 : _.trailingSlash) ?? (s == null ? void 0 : s.slash),
	};
}
function Ft(e, t, n) {
	let r = e instanceof Request ? e.url : e;
	const a = new URL(r, n);
	a.origin === n.origin && (r = a.href.slice(n.origin.length));
	const s = Ae ? fn(r, a.href, t) : ln(r, t);
	return { resolved: a, promise: s };
}
function gt(e, t, n, r, a, s) {
	if (Te) return !0;
	if (!a) return !1;
	if ((a.parent && e) || (a.route && t) || (a.url && n)) return !0;
	for (const i of a.search_params) if (r.has(i)) return !0;
	for (const i of a.params) if (s[i] !== y.params[i]) return !0;
	for (const i of a.dependencies) if (be.some((o) => o(new URL(i)))) return !0;
	return !1;
}
function nt(e, t) {
	return (e == null ? void 0 : e.type) === "data"
		? e
		: (e == null ? void 0 : e.type) === "skip"
			? (t ?? null)
			: null;
}
function qn(e, t) {
	if (!e) return new Set(t.searchParams.keys());
	const n = new Set([...e.searchParams.keys(), ...t.searchParams.keys()]);
	for (const r of n) {
		const a = e.searchParams.getAll(r),
			s = t.searchParams.getAll(r);
		a.every((i) => s.includes(i)) && s.every((i) => a.includes(i)) && n.delete(r);
	}
	return n;
}
function mt({ error: e, url: t, route: n, params: r }) {
	return {
		type: "loaded",
		state: { error: e, url: t, route: n, params: r, branch: [] },
		props: { page: Ce(S), constructors: [] },
	};
}
async function rt({ id: e, invalidating: t, url: n, params: r, route: a, preload: s }) {
	if ((L == null ? void 0 : L.id) === e) return Z.delete(L.token), L.promise;
	const { errors: i, layouts: o, leaf: c } = a,
		l = [...o, c];
	i.forEach((g) => (g == null ? void 0 : g().catch(() => {}))),
		l.forEach((g) => (g == null ? void 0 : g[1]().catch(() => {})));
	let d = null;
	const u = y.url ? e !== Ee(y.url) : !1,
		_ = y.route ? a.id !== y.route.id : !1,
		f = qn(y.url, n);
	let m = !1;
	const h = l.map((g, w) => {
		var B;
		const b = y.branch[w],
			E =
				!!(g != null && g[0]) &&
				((b == null ? void 0 : b.loader) !== g[1] ||
					gt(m, _, u, f, (B = b.server) == null ? void 0 : B.uses, r));
		return E && (m = !0), E;
	});
	if (h.some(Boolean)) {
		try {
			d = await zt(n, h);
		} catch (g) {
			const w = await K(g, { url: n, params: r, route: { id: e } });
			return Z.has(s)
				? mt({ error: w, url: n, params: r, route: a })
				: Oe({ status: we(g), error: w, url: n, route: a });
		}
		if (d.type === "redirect") return d;
	}
	const p = d == null ? void 0 : d.nodes;
	let v = !1;
	const I = l.map(async (g, w) => {
		var Ne;
		if (!g) return;
		const b = y.branch[w],
			E = p == null ? void 0 : p[w];
		if (
			(!E || E.type === "skip") &&
			g[1] === (b == null ? void 0 : b.loader) &&
			!gt(v, _, u, f, (Ne = b.universal) == null ? void 0 : Ne.uses, r)
		)
			return b;
		if (((v = !0), (E == null ? void 0 : E.type) === "error")) throw E;
		return tt({
			loader: g[1],
			url: n,
			params: r,
			route: a,
			parent: async () => {
				var st;
				const ot = {};
				for (let je = 0; je < w; je += 1)
					Object.assign(ot, (st = await I[je]) == null ? void 0 : st.data);
				return ot;
			},
			server_data_node: nt(
				E === void 0 && g[0] ? { type: "skip" } : (E ?? null),
				g[0] ? (b == null ? void 0 : b.server) : void 0
			),
		});
	});
	for (const g of I) g.catch(() => {});
	const U = [];
	for (let g = 0; g < l.length; g += 1)
		if (l[g])
			try {
				U.push(await I[g]);
			} catch (w) {
				if (w instanceof Ye) return { type: "redirect", location: w.location };
				if (Z.has(s))
					return mt({
						error: await K(w, { params: r, url: n, route: { id: a.id } }),
						url: n,
						params: r,
						route: a,
					});
				let b = we(w),
					E;
				if (p != null && p.includes(w)) (b = w.status ?? b), (E = w.error);
				else if (w instanceof Le) E = w.body;
				else {
					if (await D.updated.check()) return await Ot(), await Y(n);
					E = await K(w, { params: r, url: n, route: { id: a.id } });
				}
				const B = await Mn(g, U, i);
				return B
					? Se({
							url: n,
							params: r,
							branch: U.slice(0, B.idx).concat(B.node),
							status: b,
							error: E,
							route: a,
						})
					: await qt(n, { id: a.id }, E, b);
			}
		else U.push(void 0);
	return Se({
		url: n,
		params: r,
		branch: U,
		status: 200,
		error: null,
		route: a,
		form: t ? void 0 : null,
	});
}
async function Mn(e, t, n) {
	for (; e--; )
		if (n[e]) {
			let r = e;
			for (; !t[r]; ) r -= 1;
			try {
				return {
					idx: r + 1,
					node: { node: await n[e](), loader: n[e], data: {}, server: null, universal: null },
				};
			} catch {
				continue;
			}
		}
}
async function Oe({ status: e, error: t, url: n, route: r }) {
	const a = {};
	let s = null;
	if (A.server_loads[0] === 0)
		try {
			const o = await zt(n, [!0]);
			if (o.type !== "data" || (o.nodes[0] && o.nodes[0].type !== "data")) throw 0;
			s = o.nodes[0] ?? null;
		} catch {
			(n.origin !== he || n.pathname !== location.pathname || et) && (await Y(n));
		}
	try {
		const o = await tt({
				loader: Me,
				url: n,
				params: a,
				route: r,
				parent: () => Promise.resolve({}),
				server_data_node: nt(s),
			}),
			c = { node: await ve(), loader: ve, universal: null, server: null, data: null };
		return Se({ url: n, params: a, branch: [o, c], status: e, error: t, route: null });
	} catch (o) {
		if (o instanceof Ye) return Pe(new URL(o.location, location.href), {}, 0);
		throw o;
	}
}
async function Gn(e) {
	const t = e.href;
	if (ge.has(t)) return ge.get(t);
	let n;
	try {
		const r = (async () => {
			let a =
				(await A.hooks.reroute({ url: new URL(e), fetch: async (s, i) => Ft(s, i, e).promise })) ??
				e;
			if (typeof a == "string") {
				const s = new URL(e);
				A.hash ? (s.hash = a) : (s.pathname = a), (a = s);
			}
			return a;
		})();
		ge.set(t, r), (n = await r);
	} catch {
		ge.delete(t);
		return;
	}
	return n;
}
async function pe(e, t) {
	if (e && !Ue(e, x, A.hash)) {
		const n = await Gn(e);
		if (!n) return;
		const r = zn(n);
		for (const a of Ze) {
			const s = a.exec(r);
			if (s) return { id: Ee(e), invalidating: t, route: a, params: rn(s), url: e };
		}
	}
}
function zn(e) {
	return (
		nn(A.hash ? e.hash.replace(/^#/, "").replace(/[?#].+/, "") : e.pathname.slice(x.length)) || "/"
	);
}
function Ee(e) {
	return (A.hash ? e.hash.replace(/^#/, "") : e.pathname) + e.search;
}
function Vt({ url: e, type: t, intent: n, delta: r }) {
	let a = !1;
	const s = at(y, n, e, t);
	r !== void 0 && (s.navigation.delta = r);
	const i = {
		...s.navigation,
		cancel: () => {
			(a = !0), s.reject(new Error("navigation cancelled"));
		},
	};
	return ne || Qe.forEach((o) => o(i)), a ? null : s;
}
async function Q({
	type: e,
	url: t,
	popped: n,
	keepfocus: r,
	noscroll: a,
	replace_state: s,
	state: i = {},
	redirect_count: o = 0,
	nav_token: c = {},
	accept: l = dt,
	block: d = dt,
}) {
	const u = $;
	$ = c;
	const _ = await pe(t, !1),
		f =
			e === "enter"
				? at(y, _, t, e)
				: Vt({ url: t, type: e, delta: n == null ? void 0 : n.delta, intent: _ });
	if (!f) {
		d(), $ === c && ($ = u);
		return;
	}
	const m = R,
		h = T;
	l(),
		(ne = !0),
		Ae && f.navigation.type !== "enter" && D.navigating.set((ee.current = f.navigation));
	let p = _ && (await rt(_));
	if (!p) {
		if (Ue(t, x, A.hash)) return await Y(t);
		p = await qt(
			t,
			{ id: null },
			await K(new Je(404, "Not Found", `Not found: ${t.pathname}`), {
				url: t,
				params: {},
				route: { id: null },
			}),
			404
		);
	}
	if (((t = (_ == null ? void 0 : _.url) || t), $ !== c))
		return f.reject(new Error("navigation aborted")), !1;
	if (p.type === "redirect")
		if (o >= 20)
			p = await Oe({
				status: 500,
				error: await K(new Error("Redirect loop"), { url: t, params: {}, route: { id: null } }),
				url: t,
				route: { id: null },
			});
		else return await Pe(new URL(p.location, t).href, {}, o + 1, c), !1;
	else p.props.page.status >= 400 && (await D.updated.check()) && (await Ot(), await Y(t));
	if (
		(jt(),
		Xe(m),
		$t(h),
		p.props.page.url.pathname !== t.pathname && (t.pathname = p.props.page.url.pathname),
		(i = n ? n.state : i),
		!n)
	) {
		const g = s ? 0 : 1,
			w = { [V]: (R += g), [W]: (T += g), [Ke]: i };
		(s ? history.replaceState : history.pushState).call(history, w, "", t), s || Bn(R, T);
	}
	if (((L = null), (p.props.page.state = i), Ae)) {
		(y = p.state), p.props.page && (p.props.page.url = t);
		const g = (await Promise.all(Array.from(Fn, (w) => w(f.navigation)))).filter(
			(w) => typeof w == "function"
		);
		if (g.length > 0) {
			let w = function () {
				g.forEach((b) => {
					H.delete(b);
				});
			};
			g.push(w),
				g.forEach((b) => {
					H.add(b);
				});
		}
		xe.$set(p.props), Pt(p.props.page), (Ct = !0);
	} else Bt(p, Ge, !1);
	const { activeElement: v } = document;
	await Xt();
	const I = n ? n.scroll : a ? We() : null;
	if (ht) {
		const g =
			t.hash &&
			document.getElementById(
				decodeURIComponent(A.hash ? (t.hash.split("#")[2] ?? "") : t.hash.slice(1))
			);
		I ? scrollTo(I.x, I.y) : g ? g.scrollIntoView() : scrollTo(0, 0);
	}
	const U = document.activeElement !== v && document.activeElement !== document.body;
	!r && !U && Yn(),
		(ht = !0),
		p.props.page && Object.assign(S, p.props.page),
		(ne = !1),
		e === "popstate" && Dt(T),
		f.fulfil(void 0),
		H.forEach((g) => g(f.navigation)),
		D.navigating.set((ee.current = null));
}
async function qt(e, t, n, r) {
	return e.origin === he && e.pathname === location.pathname && !et
		? await Oe({ status: r, error: n, url: e, route: t })
		: await Y(e);
}
function Hn() {
	let e, t, n;
	j.addEventListener("mousemove", (o) => {
		const c = o.target;
		clearTimeout(e),
			(e = setTimeout(() => {
				s(c, F.hover);
			}, 20));
	});
	function r(o) {
		o.defaultPrevented || s(o.composedPath()[0], F.tap);
	}
	j.addEventListener("mousedown", r), j.addEventListener("touchstart", r, { passive: !0 });
	const a = new IntersectionObserver(
		(o) => {
			for (const c of o) c.isIntersecting && (Ve(new URL(c.target.href)), a.unobserve(c.target));
		},
		{ threshold: 0 }
	);
	async function s(o, c) {
		const l = Lt(o, j),
			d = l === t && c >= n;
		if (!l || d) return;
		const { url: u, external: _, download: f } = qe(l, x, A.hash);
		if (_ || f) return;
		const m = ye(l),
			h = u && Ee(y.url) === Ee(u);
		if (!(m.reload || h))
			if (c <= m.preload_data) {
				(t = l), (n = F.tap);
				const p = await pe(u, !1);
				if (!p) return;
				Vn(p);
			} else c <= m.preload_code && ((t = l), (n = c), Ve(u));
	}
	function i() {
		a.disconnect();
		for (const o of j.querySelectorAll("a")) {
			const { url: c, external: l, download: d } = qe(o, x, A.hash);
			if (l || d) continue;
			const u = ye(o);
			u.reload ||
				(u.preload_code === F.viewport && a.observe(o), u.preload_code === F.eager && Ve(c));
		}
	}
	H.add(i), i();
}
function K(e, t) {
	if (e instanceof Le) return e.body;
	const n = we(e),
		r = On(e);
	return A.hooks.handleError({ error: e, event: t, status: n, message: r }) ?? { message: r };
}
function Mt(e, t) {
	_e(
		() => (
			e.add(t),
			() => {
				e.delete(t);
			}
		)
	);
}
function cr(e) {
	Mt(H, e);
}
function lr(e) {
	Mt(Qe, e);
}
function fr(e, t = {}) {
	return (
		(e = new URL(Ie(e))),
		e.origin !== he ? Promise.reject(new Error("goto: invalid URL")) : Pe(e, t, 0)
	);
}
function ur(e) {
	return Gt(e), Nt();
}
function Gt(e) {
	if (typeof e == "function") be.push(e);
	else {
		const { href: t } = new URL(e, location.href);
		be.push((n) => n.href === t);
	}
}
function dr() {
	return (Te = !0), Nt();
}
function hr(e, t) {
	const n = { [V]: R, [W]: T, [It]: S.url.href, [Ke]: t };
	history.replaceState(n, "", Ie(e)), (S.state = t), xe.$set({ page: Ce(S) });
}
function Kn() {
	var t;
	(history.scrollRestoration = "manual"),
		addEventListener("beforeunload", (n) => {
			let r = !1;
			if ((pt(), !ne)) {
				const a = at(y, void 0, null, "leave"),
					s = {
						...a.navigation,
						cancel: () => {
							(r = !0), a.reject(new Error("navigation cancelled"));
						},
					};
				Qe.forEach((i) => i(s));
			}
			r ? (n.preventDefault(), (n.returnValue = "")) : (history.scrollRestoration = "auto");
		}),
		addEventListener("visibilitychange", () => {
			document.visibilityState === "hidden" && pt();
		}),
		((t = navigator.connection) != null && t.saveData) || Hn(),
		j.addEventListener("click", async (n) => {
			if (
				n.button ||
				n.which !== 1 ||
				n.metaKey ||
				n.ctrlKey ||
				n.shiftKey ||
				n.altKey ||
				n.defaultPrevented
			)
				return;
			const r = Lt(n.composedPath()[0], j);
			if (!r) return;
			const { url: a, external: s, target: i, download: o } = qe(r, x, A.hash);
			if (!a) return;
			if (i === "_parent" || i === "_top") {
				if (window.parent !== window) return;
			} else if (i && i !== "_self") return;
			const c = ye(r);
			if (
				(!(r instanceof SVGAElement) &&
					a.protocol !== location.protocol &&
					!(a.protocol === "https:" || a.protocol === "http:")) ||
				o
			)
				return;
			const [d, u] = (A.hash ? a.hash.replace(/^#/, "") : a.href).split("#"),
				_ = d === $e(location);
			if (s || (c.reload && (!_ || !u))) {
				Vt({ url: a, type: "link" }) ? (ne = !0) : n.preventDefault();
				return;
			}
			if (u !== void 0 && _) {
				const [, f] = y.url.href.split("#");
				if (f === u) {
					if (
						(n.preventDefault(),
						u === "" || (u === "top" && r.ownerDocument.getElementById("top") === null))
					)
						window.scrollTo({ top: 0 });
					else {
						const m = r.ownerDocument.getElementById(decodeURIComponent(u));
						m && (m.scrollIntoView(), m.focus());
					}
					return;
				}
				if (((J = !0), Xe(R), e(a), !c.replace_state)) return;
				J = !1;
			}
			n.preventDefault(),
				await new Promise((f) => {
					requestAnimationFrame(() => {
						setTimeout(f, 0);
					}),
						setTimeout(f, 100);
				}),
				await Q({
					type: "link",
					url: a,
					keepfocus: c.keepfocus,
					noscroll: c.noscroll,
					replace_state: c.replace_state ?? a.href === location.href,
				});
		}),
		j.addEventListener("submit", (n) => {
			if (n.defaultPrevented) return;
			const r = HTMLFormElement.prototype.cloneNode.call(n.target),
				a = n.submitter;
			if (
				((a == null ? void 0 : a.formTarget) || r.target) === "_blank" ||
				((a == null ? void 0 : a.formMethod) || r.method) !== "get"
			)
				return;
			const o = new URL(
				((a == null ? void 0 : a.hasAttribute("formaction")) &&
					(a == null ? void 0 : a.formAction)) ||
					r.action
			);
			if (Ue(o, x, !1)) return;
			const c = n.target,
				l = ye(c);
			if (l.reload) return;
			n.preventDefault(), n.stopPropagation();
			const d = new FormData(c),
				u = a == null ? void 0 : a.getAttribute("name");
			u && d.append(u, (a == null ? void 0 : a.getAttribute("value")) ?? ""),
				(o.search = new URLSearchParams(d).toString()),
				Q({
					type: "form",
					url: o,
					keepfocus: l.keepfocus,
					noscroll: l.noscroll,
					replace_state: l.replace_state ?? o.href === location.href,
				});
		}),
		addEventListener("popstate", async (n) => {
			var r;
			if ((r = n.state) != null && r[V]) {
				const a = n.state[V];
				if ((($ = {}), a === R)) return;
				const s = q[a],
					i = n.state[Ke] ?? {},
					o = new URL(n.state[It] ?? location.href),
					c = n.state[W],
					l = y.url ? $e(location) === $e(y.url) : !1;
				if (c === T && (Ct || l)) {
					i !== S.state && (S.state = i), e(o), (q[R] = We()), s && scrollTo(s.x, s.y), (R = a);
					return;
				}
				const u = a - R;
				await Q({
					type: "popstate",
					url: o,
					popped: { state: i, scroll: s, delta: u },
					accept: () => {
						(R = a), (T = c);
					},
					block: () => {
						history.go(-u);
					},
					nav_token: $,
				});
			} else if (!J) {
				const a = new URL(location.href);
				e(a), A.hash && location.reload();
			}
		}),
		addEventListener("hashchange", () => {
			J &&
				((J = !1), history.replaceState({ ...history.state, [V]: ++R, [W]: T }, "", location.href));
		});
	for (const n of document.querySelectorAll("link")) Dn.has(n.rel) && (n.href = n.href);
	addEventListener("pageshow", (n) => {
		n.persisted && D.navigating.set((ee.current = null));
	});
	function e(n) {
		(y.url = S.url = n), D.page.set(Ce(S)), D.page.notify();
	}
}
async function Wn(
	e,
	{ status: t = 200, error: n, node_ids: r, params: a, route: s, server_route: i, data: o, form: c }
) {
	et = !0;
	const l = new URL(location.href);
	let d;
	({ params: a = {}, route: s = { id: null } } = (await pe(l, !1)) || {}),
		(d = Ze.find(({ id: f }) => f === s.id));
	let u,
		_ = !0;
	try {
		const f = r.map(async (h, p) => {
				const v = o[p];
				return (
					v != null && v.uses && (v.uses = Ht(v.uses)),
					tt({
						loader: A.nodes[h],
						url: l,
						params: a,
						route: s,
						parent: async () => {
							const I = {};
							for (let U = 0; U < p; U += 1) Object.assign(I, (await f[U]).data);
							return I;
						},
						server_data_node: nt(v),
					})
				);
			}),
			m = await Promise.all(f);
		if (d) {
			const h = d.layouts;
			for (let p = 0; p < h.length; p++) h[p] || m.splice(p, 0, void 0);
		}
		u = Se({ url: l, params: a, branch: m, status: t, error: n, form: c, route: d ?? null });
	} catch (f) {
		if (f instanceof Ye) {
			await Y(new URL(f.location, location.href));
			return;
		}
		(u = await Oe({
			status: we(f),
			error: await K(f, { url: l, params: a, route: s }),
			url: l,
			route: s,
		})),
			(e.textContent = ""),
			(_ = !1);
	}
	u.props.page && (u.props.page.state = {}), Bt(u, e, _);
}
async function zt(e, t) {
	var s;
	const n = new URL(e);
	(n.pathname = $n(e.pathname)),
		e.pathname.endsWith("/") && n.searchParams.append(Pn, "1"),
		n.searchParams.append(xn, t.map((i) => (i ? "1" : "0")).join(""));
	const r = window.fetch,
		a = await r(n.href, {});
	if (!a.ok) {
		let i;
		throw (
			((s = a.headers.get("content-type")) != null && s.includes("application/json")
				? (i = await a.json())
				: a.status === 404
					? (i = "Not Found")
					: a.status === 500 && (i = "Internal Error"),
			new Le(a.status, i))
		);
	}
	return new Promise(async (i) => {
		var _;
		const o = new Map(),
			c = a.body.getReader(),
			l = new TextDecoder();
		function d(f) {
			return Un(f, {
				...A.decoders,
				Promise: (m) =>
					new Promise((h, p) => {
						o.set(m, { fulfil: h, reject: p });
					}),
			});
		}
		let u = "";
		for (;;) {
			const { done: f, value: m } = await c.read();
			if (f && !u) break;
			for (
				u +=
					!m && u
						? `
`
						: l.decode(m, { stream: !0 });
				;

			) {
				const h = u.indexOf(`
`);
				if (h === -1) break;
				const p = JSON.parse(u.slice(0, h));
				if (((u = u.slice(h + 1)), p.type === "redirect")) return i(p);
				if (p.type === "data")
					(_ = p.nodes) == null ||
						_.forEach((v) => {
							(v == null ? void 0 : v.type) === "data" &&
								((v.uses = Ht(v.uses)), (v.data = d(v.data)));
						}),
						i(p);
				else if (p.type === "chunk") {
					const { id: v, data: I, error: U } = p,
						g = o.get(v);
					o.delete(v), U ? g.reject(d(U)) : g.fulfil(d(I));
				}
			}
		}
	});
}
function Ht(e) {
	return {
		dependencies: new Set((e == null ? void 0 : e.dependencies) ?? []),
		params: new Set((e == null ? void 0 : e.params) ?? []),
		parent: !!(e != null && e.parent),
		route: !!(e != null && e.route),
		url: !!(e != null && e.url),
		search_params: new Set((e == null ? void 0 : e.search_params) ?? []),
	};
}
function Yn() {
	const e = document.querySelector("[autofocus]");
	if (e) e.focus();
	else {
		const t = document.body,
			n = t.getAttribute("tabindex");
		(t.tabIndex = -1),
			t.focus({ preventScroll: !0, focusVisible: !1 }),
			n !== null ? t.setAttribute("tabindex", n) : t.removeAttribute("tabindex");
		const r = getSelection();
		if (r && r.type !== "None") {
			const a = [];
			for (let s = 0; s < r.rangeCount; s += 1) a.push(r.getRangeAt(s));
			setTimeout(() => {
				if (r.rangeCount === a.length) {
					for (let s = 0; s < r.rangeCount; s += 1) {
						const i = a[s],
							o = r.getRangeAt(s);
						if (
							i.commonAncestorContainer !== o.commonAncestorContainer ||
							i.startContainer !== o.startContainer ||
							i.endContainer !== o.endContainer ||
							i.startOffset !== o.startOffset ||
							i.endOffset !== o.endOffset
						)
							return;
					}
					r.removeAllRanges();
				}
			});
		}
	}
}
function at(e, t, n, r) {
	var c, l;
	let a, s;
	const i = new Promise((d, u) => {
		(a = d), (s = u);
	});
	return (
		i.catch(() => {}),
		{
			navigation: {
				from: {
					params: e.params,
					route: { id: ((c = e.route) == null ? void 0 : c.id) ?? null },
					url: e.url,
				},
				to: n && {
					params: (t == null ? void 0 : t.params) ?? null,
					route: { id: ((l = t == null ? void 0 : t.route) == null ? void 0 : l.id) ?? null },
					url: n,
				},
				willUnload: !t,
				type: r,
				complete: i,
			},
			fulfil: a,
			reject: s,
		}
	);
}
function Ce(e) {
	return {
		data: e.data,
		error: e.error,
		form: e.form,
		params: e.params,
		route: e.route,
		state: e.state,
		status: e.status,
		url: e.url,
	};
}
function Jn(e) {
	const t = new URL(e);
	return (t.hash = decodeURIComponent(e.hash)), t;
}
const pr = Object.freeze(
	Object.defineProperty({ __proto__: null }, Symbol.toStringTag, { value: "Module" })
);
export {
	Ye as R,
	pr as _,
	cr as a,
	x as b,
	At as c,
	tr as d,
	nr as e,
	lr as f,
	fr as g,
	dr as h,
	ur as i,
	er as j,
	ir as k,
	rr as l,
	ee as n,
	_e as o,
	S as p,
	hr as r,
	D as s,
	Re as w,
};
