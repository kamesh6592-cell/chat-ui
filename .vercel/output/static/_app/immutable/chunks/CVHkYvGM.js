var ve = Object.defineProperty;
var Oe = (e, t, r) =>
	t in e ? ve(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r);
var ee = (e, t, r) => Oe(e, typeof t != "symbol" ? t + "" : t, r);
import { b as Re } from "./CSa6KPDp.js";
import { g as xe } from "./BJid9-HC.js";
var U = class extends Error {
		constructor(e, t) {
			super(t + ""), (this.status = e), (this.value = t);
		}
	},
	ke =
		/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
	Te =
		/(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}\sGMT(?:\+|-)\d{4}\s\([^)]+\)/,
	Ie =
		/^(?:(?:(?:(?:0?[1-9]|[12][0-9]|3[01])[/\s-](?:0?[1-9]|1[0-2])[/\s-](?:19|20)\d{2})|(?:(?:19|20)\d{2}[/\s-](?:0?[1-9]|1[0-2])[/\s-](?:0?[1-9]|[12][0-9]|3[01]))))(?:\s(?:1[012]|0?[1-9]):[0-5][0-9](?::[0-5][0-9])?(?:\s[AP]M)?)?$/,
	Ne = (e) => e.trim().length !== 0 && !Number.isNaN(Number(e)),
	le = (e) => {
		if (typeof e != "string") return null;
		let t = e.replace(/"/g, "");
		if (ke.test(t) || Te.test(t) || Ie.test(t)) {
			let r = new Date(t);
			if (!Number.isNaN(r.getTime())) return r;
		}
		return null;
	},
	Pe = (e) => {
		let t = e.charCodeAt(0),
			r = e.charCodeAt(e.length - 1);
		return (t === 123 && r === 125) || (t === 91 && r === 93);
	},
	Ce = (e) => JSON.parse(e, (t, r) => le(r) || r),
	Q = (e) => {
		if (!e) return e;
		if (Ne(e)) return +e;
		if (e === "true") return !0;
		if (e === "false") return !1;
		let t = le(e);
		if (t) return t;
		if (Pe(e))
			try {
				return Ce(e);
			} catch {}
		return e;
	},
	Ve = (e) => {
		let t = e.data.toString();
		return t === "null" ? null : Q(t);
	},
	De = class {
		constructor(e) {
			ee(this, "ws");
			(this.url = e), (this.ws = new WebSocket(e));
		}
		send(e) {
			return Array.isArray(e)
				? (e.forEach((t) => this.send(t)), this)
				: (this.ws.send(typeof e == "object" ? JSON.stringify(e) : e.toString()), this);
		}
		on(e, t, r) {
			return this.addEventListener(e, t, r);
		}
		off(e, t, r) {
			return this.ws.removeEventListener(e, t, r), this;
		}
		subscribe(e, t) {
			return this.addEventListener("message", e, t);
		}
		addEventListener(e, t, r) {
			return (
				this.ws.addEventListener(
					e,
					(n) => {
						if (e === "message") {
							let i = Ve(n);
							t({ ...n, data: i });
						} else t(n);
					},
					r
				),
				this
			);
		}
		removeEventListener(e, t, r) {
			return this.off(e, t, r), this;
		}
		close() {
			return this.ws.close(), this;
		}
	},
	je = ["get", "post", "put", "delete", "patch", "options", "head", "connect", "subscribe"],
	fe = ["localhost", "127.0.0.1", "0.0.0.0"],
	X = typeof FileList > "u",
	te = (e) => (X ? e instanceof Blob : e instanceof FileList || e instanceof File),
	Be = (e) => {
		if (!e) return !1;
		for (let t in e) if (te(e[t]) || (Array.isArray(e[t]) && e[t].find(te))) return !0;
		return !1;
	},
	q = (e) =>
		X
			? e
			: new Promise((t) => {
					let r = new FileReader();
					(r.onload = () => {
						let n = new File([r.result], e.name, { lastModified: e.lastModified, type: e.type });
						t(n);
					}),
						r.readAsArrayBuffer(e);
				}),
	T = (e, t, r = {}, n = {}) => {
		if (Array.isArray(e)) {
			for (let i of e)
				if (!Array.isArray(i)) n = T(i, t, r, n);
				else {
					let a = i[0];
					if (typeof a == "string") n[a.toLowerCase()] = i[1];
					else for (let [o, c] of a) n[o.toLowerCase()] = c;
				}
			return n;
		}
		if (!e) return n;
		switch (typeof e) {
			case "function":
				if (e instanceof Headers) return T(e, t, r, n);
				let i = e(t, r);
				return i ? T(i, t, r, n) : n;
			case "object":
				if (e instanceof Headers)
					return (
						e.forEach((a, o) => {
							n[o.toLowerCase()] = a;
						}),
						n
					);
				for (let [a, o] of Object.entries(e)) n[a.toLowerCase()] = o;
				return n;
			default:
				return n;
		}
	};
async function* Me(e) {
	let t = e.body;
	if (!t) return;
	let r = t.getReader(),
		n = new TextDecoder();
	try {
		for (;;) {
			let { done: i, value: a } = await r.read();
			if (i) break;
			let o = n.decode(a);
			yield Q(o);
		}
	} finally {
		r.releaseLock();
	}
}
var C = (e, t, r = [], n) =>
		new Proxy(() => {}, {
			get(i, a) {
				return C(e, t, a === "index" ? r : [...r, a], n);
			},
			apply(i, a, [o, c]) {
				if (
					!o ||
					c ||
					(typeof o == "object" && Object.keys(o).length !== 1) ||
					je.includes(r.at(-1))
				) {
					let y = [...r],
						f = y.pop(),
						h = "/" + y.join("/"),
						{ fetcher: S = fetch, headers: v, onRequest: s, onResponse: l, fetch: F } = t,
						R = f === "get" || f === "head" || f === "subscribe";
					v = T(v, h, c);
					let M = R ? (o == null ? void 0 : o.query) : c == null ? void 0 : c.query,
						L = "";
					if (M) {
						let d = (O, A) => {
							L += (L ? "&" : "?") + `${encodeURIComponent(O)}=${encodeURIComponent(A)}`;
						};
						for (let [O, A] of Object.entries(M)) {
							if (Array.isArray(A)) {
								for (let g of A) d(O, g);
								continue;
							}
							if (A != null) {
								if (typeof A == "object") {
									d(O, JSON.stringify(A));
									continue;
								}
								d(O, `${A}`);
							}
						}
					}
					if (f === "subscribe") {
						let d =
							e.replace(
								/^([^]+):\/\//,
								e.startsWith("https://")
									? "wss://"
									: e.startsWith("http://") || fe.find((O) => e.includes(O))
										? "ws://"
										: "wss://"
							) +
							h +
							L;
						return new De(d);
					}
					return (async () => {
						var Y;
						let d = { method: f == null ? void 0 : f.toUpperCase(), body: o, ...F, headers: v };
						d.headers = {
							...v,
							...T(R ? (o == null ? void 0 : o.headers) : c == null ? void 0 : c.headers, h, d),
						};
						let O = R && typeof o == "object" ? o.fetch : c == null ? void 0 : c.fetch;
						if (((d = { ...d, ...O }), R && delete d.body, s)) {
							Array.isArray(s) || (s = [s]);
							for (let m of s) {
								let p = await m(h, d);
								typeof p == "object" &&
									(d = { ...d, ...p, headers: { ...d.headers, ...T(p.headers, h, d) } });
							}
						}
						if ((R && delete d.body, Be(o))) {
							let m = new FormData();
							for (let [p, w] of Object.entries(d.body)) {
								if (Array.isArray(w)) {
									for (let k = 0; k < w.length; k++) {
										let H = w[k];
										m.append(p, H instanceof File ? await q(H) : H);
									}
									continue;
								}
								if (X) {
									m.append(p, w);
									continue;
								}
								if (w instanceof File) {
									m.append(p, await q(w));
									continue;
								}
								if (w instanceof FileList) {
									for (let k = 0; k < w.length; k++) m.append(p, await q(w[k]));
									continue;
								}
								m.append(p, w);
							}
							d.body = m;
						} else
							typeof o == "object"
								? ((d.headers["content-type"] = "application/json"), (d.body = JSON.stringify(o)))
								: o != null && (d.headers["content-type"] = "text/plain");
						if ((R && delete d.body, s)) {
							Array.isArray(s) || (s = [s]);
							for (let m of s) {
								let p = await m(h, d);
								typeof p == "object" &&
									(d = { ...d, ...p, headers: { ...d.headers, ...T(p.headers, h, d) } });
							}
						}
						let A = e + h + L,
							g = await ((n == null ? void 0 : n.handle(new Request(A, d))) ?? S(A, d)),
							b = null,
							P = null;
						if (l) {
							Array.isArray(l) || (l = [l]);
							for (let m of l)
								try {
									let p = await m(g.clone());
									if (p != null) {
										b = p;
										break;
									}
								} catch (p) {
									p instanceof U ? (P = p) : (P = new U(422, p));
									break;
								}
						}
						if (b !== null)
							return { data: b, error: P, response: g, status: g.status, headers: g.headers };
						switch ((Y = g.headers.get("Content-Type")) == null ? void 0 : Y.split(";")[0]) {
							case "text/event-stream":
								b = Me(g);
								break;
							case "application/json":
								b = await g.json();
								break;
							case "application/octet-stream":
								b = await g.arrayBuffer();
								break;
							case "multipart/form-data":
								let m = await g.formData();
								(b = {}),
									m.forEach((p, w) => {
										b[w] = p;
									});
								break;
							default:
								b = await g.text().then(Q);
						}
						return (
							(g.status >= 300 || g.status < 200) && ((P = new U(g.status, b)), (b = null)),
							{ data: b, error: P, response: g, status: g.status, headers: g.headers }
						);
					})();
				}
				return typeof o == "object" ? C(e, t, [...r, Object.values(o)[0]], n) : C(e, t, r);
			},
		}),
	Le = (e, t = {}) =>
		typeof e == "string"
			? (t.keepDomain ||
					(e.includes("://") || (e = (fe.find((r) => e.includes(r)) ? "http://" : "https://") + e),
					e.endsWith("/") && (e = e.slice(0, -1))),
				C(e, t))
			: (typeof window < "u" &&
					console.warn(
						"Elysia instance server found on client side, this is not recommended for security reason. Use generic type instead."
					),
				C("http://e.ly", t, [], e));
class _e {
	constructor() {
		(this.keyToValue = new Map()), (this.valueToKey = new Map());
	}
	set(t, r) {
		this.keyToValue.set(t, r), this.valueToKey.set(r, t);
	}
	getByKey(t) {
		return this.keyToValue.get(t);
	}
	getByValue(t) {
		return this.valueToKey.get(t);
	}
	clear() {
		this.keyToValue.clear(), this.valueToKey.clear();
	}
}
class ue {
	constructor(t) {
		(this.generateIdentifier = t), (this.kv = new _e());
	}
	register(t, r) {
		this.kv.getByValue(t) || (r || (r = this.generateIdentifier(t)), this.kv.set(r, t));
	}
	clear() {
		this.kv.clear();
	}
	getIdentifier(t) {
		return this.kv.getByValue(t);
	}
	getValue(t) {
		return this.kv.getByKey(t);
	}
}
class ze extends ue {
	constructor() {
		super((t) => t.name), (this.classToAllowedProps = new Map());
	}
	register(t, r) {
		typeof r == "object"
			? (r.allowProps && this.classToAllowedProps.set(t, r.allowProps),
				super.register(t, r.identifier))
			: super.register(t, r);
	}
	getAllowedProps(t) {
		return this.classToAllowedProps.get(t);
	}
}
function He(e) {
	if ("values" in Object) return Object.values(e);
	const t = [];
	for (const r in e) e.hasOwnProperty(r) && t.push(e[r]);
	return t;
}
function Ue(e, t) {
	const r = He(e);
	if ("find" in r) return r.find(t);
	const n = r;
	for (let i = 0; i < n.length; i++) {
		const a = n[i];
		if (t(a)) return a;
	}
}
function N(e, t) {
	Object.entries(e).forEach(([r, n]) => t(n, r));
}
function _(e, t) {
	return e.indexOf(t) !== -1;
}
function re(e, t) {
	for (let r = 0; r < e.length; r++) {
		const n = e[r];
		if (t(n)) return n;
	}
}
class qe {
	constructor() {
		this.transfomers = {};
	}
	register(t) {
		this.transfomers[t.name] = t;
	}
	findApplicable(t) {
		return Ue(this.transfomers, (r) => r.isApplicable(t));
	}
	findByName(t) {
		return this.transfomers[t];
	}
}
const Ke = (e) => Object.prototype.toString.call(e).slice(8, -1),
	ce = (e) => typeof e > "u",
	$e = (e) => e === null,
	D = (e) =>
		typeof e != "object" || e === null || e === Object.prototype
			? !1
			: Object.getPrototypeOf(e) === null
				? !0
				: Object.getPrototypeOf(e) === Object.prototype,
	W = (e) => D(e) && Object.keys(e).length === 0,
	x = (e) => Array.isArray(e),
	We = (e) => typeof e == "string",
	Je = (e) => typeof e == "number" && !isNaN(e),
	Ze = (e) => typeof e == "boolean",
	Ge = (e) => e instanceof RegExp,
	j = (e) => e instanceof Map,
	B = (e) => e instanceof Set,
	de = (e) => Ke(e) === "Symbol",
	Qe = (e) => e instanceof Date && !isNaN(e.valueOf()),
	Xe = (e) => e instanceof Error,
	ne = (e) => typeof e == "number" && isNaN(e),
	Ye = (e) => Ze(e) || $e(e) || ce(e) || Je(e) || We(e) || de(e),
	et = (e) => typeof e == "bigint",
	tt = (e) => e === 1 / 0 || e === -1 / 0,
	rt = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView),
	nt = (e) => e instanceof URL,
	ye = (e) => e.replace(/\./g, "\\."),
	K = (e) => e.map(String).map(ye).join("."),
	V = (e) => {
		const t = [];
		let r = "";
		for (let i = 0; i < e.length; i++) {
			let a = e.charAt(i);
			if (a === "\\" && e.charAt(i + 1) === ".") {
				(r += "."), i++;
				continue;
			}
			if (a === ".") {
				t.push(r), (r = "");
				continue;
			}
			r += a;
		}
		const n = r;
		return t.push(n), t;
	};
function E(e, t, r, n) {
	return { isApplicable: e, annotation: t, transform: r, untransform: n };
}
const pe = [
	E(
		ce,
		"undefined",
		() => null,
		() => {}
	),
	E(
		et,
		"bigint",
		(e) => e.toString(),
		(e) => (typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e))
	),
	E(
		Qe,
		"Date",
		(e) => e.toISOString(),
		(e) => new Date(e)
	),
	E(
		Xe,
		"Error",
		(e, t) => {
			const r = { name: e.name, message: e.message };
			return (
				t.allowedErrorProps.forEach((n) => {
					r[n] = e[n];
				}),
				r
			);
		},
		(e, t) => {
			const r = new Error(e.message);
			return (
				(r.name = e.name),
				(r.stack = e.stack),
				t.allowedErrorProps.forEach((n) => {
					r[n] = e[n];
				}),
				r
			);
		}
	),
	E(
		Ge,
		"regexp",
		(e) => "" + e,
		(e) => {
			const t = e.slice(1, e.lastIndexOf("/")),
				r = e.slice(e.lastIndexOf("/") + 1);
			return new RegExp(t, r);
		}
	),
	E(
		B,
		"set",
		(e) => [...e.values()],
		(e) => new Set(e)
	),
	E(
		j,
		"map",
		(e) => [...e.entries()],
		(e) => new Map(e)
	),
	E(
		(e) => ne(e) || tt(e),
		"number",
		(e) => (ne(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity"),
		Number
	),
	E(
		(e) => e === 0 && 1 / e === -1 / 0,
		"number",
		() => "-0",
		Number
	),
	E(
		nt,
		"URL",
		(e) => e.toString(),
		(e) => new URL(e)
	),
];
function z(e, t, r, n) {
	return { isApplicable: e, annotation: t, transform: r, untransform: n };
}
const ge = z(
		(e, t) => (de(e) ? !!t.symbolRegistry.getIdentifier(e) : !1),
		(e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)],
		(e) => e.description,
		(e, t, r) => {
			const n = r.symbolRegistry.getValue(t[1]);
			if (!n) throw new Error("Trying to deserialize unknown symbol");
			return n;
		}
	),
	st = [
		Int8Array,
		Uint8Array,
		Int16Array,
		Uint16Array,
		Int32Array,
		Uint32Array,
		Float32Array,
		Float64Array,
		Uint8ClampedArray,
	].reduce((e, t) => ((e[t.name] = t), e), {}),
	he = z(
		rt,
		(e) => ["typed-array", e.constructor.name],
		(e) => [...e],
		(e, t) => {
			const r = st[t[1]];
			if (!r) throw new Error("Trying to deserialize unknown typed array");
			return new r(e);
		}
	);
function me(e, t) {
	return e != null && e.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
const be = z(
		me,
		(e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)],
		(e, t) => {
			const r = t.classRegistry.getAllowedProps(e.constructor);
			if (!r) return { ...e };
			const n = {};
			return (
				r.forEach((i) => {
					n[i] = e[i];
				}),
				n
			);
		},
		(e, t, r) => {
			const n = r.classRegistry.getValue(t[1]);
			if (!n)
				throw new Error(
					`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`
				);
			return Object.assign(Object.create(n.prototype), e);
		}
	),
	we = z(
		(e, t) => !!t.customTransformerRegistry.findApplicable(e),
		(e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name],
		(e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e),
		(e, t, r) => {
			const n = r.customTransformerRegistry.findByName(t[1]);
			if (!n) throw new Error("Trying to deserialize unknown custom value");
			return n.deserialize(e);
		}
	),
	it = [be, ge, we, he],
	se = (e, t) => {
		const r = re(it, (i) => i.isApplicable(e, t));
		if (r) return { value: r.transform(e, t), type: r.annotation(e, t) };
		const n = re(pe, (i) => i.isApplicable(e, t));
		if (n) return { value: n.transform(e, t), type: n.annotation };
	},
	Fe = {};
pe.forEach((e) => {
	Fe[e.annotation] = e;
});
const ot = (e, t, r) => {
		if (x(t))
			switch (t[0]) {
				case "symbol":
					return ge.untransform(e, t, r);
				case "class":
					return be.untransform(e, t, r);
				case "custom":
					return we.untransform(e, t, r);
				case "typed-array":
					return he.untransform(e, t, r);
				default:
					throw new Error("Unknown transformation: " + t);
			}
		else {
			const n = Fe[t];
			if (!n) throw new Error("Unknown transformation: " + t);
			return n.untransform(e, r);
		}
	},
	I = (e, t) => {
		if (t > e.size) throw new Error("index out of bounds");
		const r = e.keys();
		for (; t > 0; ) r.next(), t--;
		return r.next().value;
	};
function Ae(e) {
	if (_(e, "__proto__")) throw new Error("__proto__ is not allowed as a property");
	if (_(e, "prototype")) throw new Error("prototype is not allowed as a property");
	if (_(e, "constructor")) throw new Error("constructor is not allowed as a property");
}
const at = (e, t) => {
		Ae(t);
		for (let r = 0; r < t.length; r++) {
			const n = t[r];
			if (B(e)) e = I(e, +n);
			else if (j(e)) {
				const i = +n,
					a = +t[++r] == 0 ? "key" : "value",
					o = I(e, i);
				switch (a) {
					case "key":
						e = o;
						break;
					case "value":
						e = e.get(o);
						break;
				}
			} else e = e[n];
		}
		return e;
	},
	J = (e, t, r) => {
		if ((Ae(t), t.length === 0)) return r(e);
		let n = e;
		for (let a = 0; a < t.length - 1; a++) {
			const o = t[a];
			if (x(n)) {
				const c = +o;
				n = n[c];
			} else if (D(n)) n = n[o];
			else if (B(n)) {
				const c = +o;
				n = I(n, c);
			} else if (j(n)) {
				if (a === t.length - 2) break;
				const y = +o,
					f = +t[++a] == 0 ? "key" : "value",
					h = I(n, y);
				switch (f) {
					case "key":
						n = h;
						break;
					case "value":
						n = n.get(h);
						break;
				}
			}
		}
		const i = t[t.length - 1];
		if ((x(n) ? (n[+i] = r(n[+i])) : D(n) && (n[i] = r(n[i])), B(n))) {
			const a = I(n, +i),
				o = r(a);
			a !== o && (n.delete(a), n.add(o));
		}
		if (j(n)) {
			const a = +t[t.length - 2],
				o = I(n, a);
			switch (+i == 0 ? "key" : "value") {
				case "key": {
					const y = r(o);
					n.set(y, n.get(o)), y !== o && n.delete(o);
					break;
				}
				case "value": {
					n.set(o, r(n.get(o)));
					break;
				}
			}
		}
		return e;
	};
function Z(e, t, r = []) {
	if (!e) return;
	if (!x(e)) {
		N(e, (a, o) => Z(a, t, [...r, ...V(o)]));
		return;
	}
	const [n, i] = e;
	i &&
		N(i, (a, o) => {
			Z(a, t, [...r, ...V(o)]);
		}),
		t(n, r);
}
function lt(e, t, r) {
	return (
		Z(t, (n, i) => {
			e = J(e, i, (a) => ot(a, n, r));
		}),
		e
	);
}
function ft(e, t) {
	function r(n, i) {
		const a = at(e, V(i));
		n.map(V).forEach((o) => {
			e = J(e, o, () => a);
		});
	}
	if (x(t)) {
		const [n, i] = t;
		n.forEach((a) => {
			e = J(e, V(a), () => e);
		}),
			i && N(i, r);
	} else N(t, r);
	return e;
}
const ut = (e, t) => D(e) || x(e) || j(e) || B(e) || me(e, t);
function ct(e, t, r) {
	const n = r.get(e);
	n ? n.push(t) : r.set(e, [t]);
}
function dt(e, t) {
	const r = {};
	let n;
	return (
		e.forEach((i) => {
			if (i.length <= 1) return;
			t || (i = i.map((c) => c.map(String)).sort((c, y) => c.length - y.length));
			const [a, ...o] = i;
			a.length === 0 ? (n = o.map(K)) : (r[K(a)] = o.map(K));
		}),
		n ? (W(r) ? [n] : [n, r]) : W(r) ? void 0 : r
	);
}
const Ee = (e, t, r, n, i = [], a = [], o = new Map()) => {
	const c = Ye(e);
	if (!c) {
		ct(e, i, t);
		const s = o.get(e);
		if (s) return n ? { transformedValue: null } : s;
	}
	if (!ut(e, r)) {
		const s = se(e, r),
			l = s ? { transformedValue: s.value, annotations: [s.type] } : { transformedValue: e };
		return c || o.set(e, l), l;
	}
	if (_(a, e)) return { transformedValue: null };
	const y = se(e, r),
		f = (y == null ? void 0 : y.value) ?? e,
		h = x(f) ? [] : {},
		S = {};
	N(f, (s, l) => {
		if (l === "__proto__" || l === "constructor" || l === "prototype")
			throw new Error(
				`Detected property ${l}. This is a prototype pollution risk, please remove it from your object.`
			);
		const F = Ee(s, t, r, n, [...i, l], [...a, e], o);
		(h[l] = F.transformedValue),
			x(F.annotations)
				? (S[l] = F.annotations)
				: D(F.annotations) &&
					N(F.annotations, (R, M) => {
						S[ye(l) + "." + M] = R;
					});
	});
	const v = W(S)
		? { transformedValue: h, annotations: y ? [y.type] : void 0 }
		: { transformedValue: h, annotations: y ? [y.type, S] : S };
	return c || o.set(e, v), v;
};
function Se(e) {
	return Object.prototype.toString.call(e).slice(8, -1);
}
function ie(e) {
	return Se(e) === "Array";
}
function yt(e) {
	if (Se(e) !== "Object") return !1;
	const t = Object.getPrototypeOf(e);
	return !!t && t.constructor === Object && t === Object.prototype;
}
function pt(e, t, r, n, i) {
	const a = {}.propertyIsEnumerable.call(n, t) ? "enumerable" : "nonenumerable";
	a === "enumerable" && (e[t] = r),
		i &&
			a === "nonenumerable" &&
			Object.defineProperty(e, t, { value: r, enumerable: !1, writable: !0, configurable: !0 });
}
function G(e, t = {}) {
	if (ie(e)) return e.map((i) => G(i, t));
	if (!yt(e)) return e;
	const r = Object.getOwnPropertyNames(e),
		n = Object.getOwnPropertySymbols(e);
	return [...r, ...n].reduce((i, a) => {
		if (ie(t.props) && !t.props.includes(a)) return i;
		const o = e[a],
			c = G(o, t);
		return pt(i, a, c, e, t.nonenumerable), i;
	}, {});
}
class u {
	constructor({ dedupe: t = !1 } = {}) {
		(this.classRegistry = new ze()),
			(this.symbolRegistry = new ue((r) => r.description ?? "")),
			(this.customTransformerRegistry = new qe()),
			(this.allowedErrorProps = []),
			(this.dedupe = t);
	}
	serialize(t) {
		const r = new Map(),
			n = Ee(t, r, this, this.dedupe),
			i = { json: n.transformedValue };
		n.annotations && (i.meta = { ...i.meta, values: n.annotations });
		const a = dt(r, this.dedupe);
		return a && (i.meta = { ...i.meta, referentialEqualities: a }), i;
	}
	deserialize(t) {
		const { json: r, meta: n } = t;
		let i = G(r);
		return (
			n != null && n.values && (i = lt(i, n.values, this)),
			n != null && n.referentialEqualities && (i = ft(i, n.referentialEqualities)),
			i
		);
	}
	stringify(t) {
		return JSON.stringify(this.serialize(t));
	}
	parse(t) {
		return this.deserialize(JSON.parse(t));
	}
	registerClass(t, r) {
		this.classRegistry.register(t, r);
	}
	registerSymbol(t, r) {
		this.symbolRegistry.register(t, r);
	}
	registerCustom(t, r) {
		this.customTransformerRegistry.register({ name: r, ...t });
	}
	allowErrorProps(...t) {
		this.allowedErrorProps.push(...t);
	}
}
u.defaultInstance = new u();
u.serialize = u.defaultInstance.serialize.bind(u.defaultInstance);
u.deserialize = u.defaultInstance.deserialize.bind(u.defaultInstance);
u.stringify = u.defaultInstance.stringify.bind(u.defaultInstance);
u.parse = u.defaultInstance.parse.bind(u.defaultInstance);
u.registerClass = u.defaultInstance.registerClass.bind(u.defaultInstance);
u.registerSymbol = u.defaultInstance.registerSymbol.bind(u.defaultInstance);
u.registerCustom = u.defaultInstance.registerCustom.bind(u.defaultInstance);
u.allowErrorProps = u.defaultInstance.allowErrorProps.bind(u.defaultInstance);
u.serialize;
u.deserialize;
u.stringify;
u.parse;
u.registerClass;
u.registerCustom;
u.registerSymbol;
u.allowErrorProps;
var $, oe;
function gt() {
	if (oe) return $;
	oe = 1;
	for (
		var e = Math.floor(Math.random() * 16777215),
			t = (f.index = parseInt(Math.random() * 16777215, 10)),
			r =
				(typeof process > "u" || typeof process.pid != "number"
					? Math.floor(Math.random() * 1e5)
					: process.pid) % 65535,
			n = (() => {
				try {
					return _Buffer;
				} catch {
					try {
						return Buffer;
					} catch {
						return null;
					}
				}
			})(),
			i = function (s) {
				return !!(
					s != null &&
					s.constructor &&
					typeof s.constructor.isBuffer == "function" &&
					s.constructor.isBuffer(s)
				);
			},
			a = [],
			o = 0;
		o < 256;
		o++
	)
		a[o] = (o <= 15 ? "0" : "") + o.toString(16);
	var c = new RegExp("^[0-9a-fA-F]{24}$"),
		y = [];
	for (o = 0; o < 10; ) y[48 + o] = o++;
	for (; o < 16; ) y[55 + o] = y[87 + o] = o++;
	function f(s) {
		if (!(this instanceof f)) return new f(s);
		if (s && (s instanceof f || s._bsontype === "ObjectID")) return s;
		if (((this._bsontype = "ObjectID"), s == null || typeof s == "number")) {
			this.id = this.generate(s);
			return;
		}
		var l = f.isValid(s);
		if (!l && s != null)
			throw new Error(
				"Argument passed in must be a single String of 12 bytes or a string of 24 hex characters"
			);
		if (l && typeof s == "string" && s.length === 24) return f.createFromHexString(s);
		if (s != null && s.length === 12) this.id = s;
		else {
			if (s != null && typeof s.toHexString == "function") return s;
			throw new Error(
				"Argument passed in must be a single String of 12 bytes or a string of 24 hex characters"
			);
		}
	}
	($ = f),
		(f.default = f),
		(f.createFromTime = function (s) {
			return (s = parseInt(s, 10) % 4294967295), new f(S(8, s) + "0000000000000000");
		}),
		(f.createFromHexString = function (s) {
			if (typeof s > "u" || (s != null && s.length !== 24))
				throw new Error(
					"Argument passed in must be a single String of 12 bytes or a string of 24 hex characters"
				);
			for (var l = "", F = 0; F < 24; )
				l += String.fromCharCode((y[s.charCodeAt(F++)] << 4) | y[s.charCodeAt(F++)]);
			return new f(l);
		}),
		(f.isValid = function (s) {
			return s == null
				? !1
				: typeof s == "number"
					? !0
					: typeof s == "string"
						? s.length === 12 || (s.length === 24 && c.test(s))
						: s instanceof f
							? !0
							: i(s)
								? f.isValid(s.toString("hex"))
								: typeof s.toHexString == "function" &&
									  n &&
									  (s.id instanceof n || typeof s.id == "string")
									? s.id.length === 12 || (s.id.length === 24 && c.test(s.id))
									: !1;
		}),
		(f.prototype = {
			constructor: f,
			toHexString: function () {
				if (!this.id || !this.id.length)
					throw new Error(
						"invalid ObjectId, ObjectId.id must be either a string or a Buffer, but is [" +
							JSON.stringify(this.id) +
							"]"
					);
				if (this.id.length === 24) return this.id;
				if (i(this.id)) return this.id.toString("hex");
				for (var s = "", l = 0; l < this.id.length; l++) s += a[this.id.charCodeAt(l)];
				return s;
			},
			equals: function (s) {
				return s instanceof f
					? this.toString() === s.toString()
					: typeof s == "string" && f.isValid(s) && s.length === 12 && i(this.id)
						? s === this.id.toString("binary")
						: typeof s == "string" && f.isValid(s) && s.length === 24
							? s.toLowerCase() === this.toHexString()
							: typeof s == "string" && f.isValid(s) && s.length === 12
								? s === this.id
								: s != null && (s instanceof f || s.toHexString)
									? s.toHexString() === this.toHexString()
									: !1;
			},
			getTimestamp: function () {
				var s = new Date(),
					l;
				return (
					i(this.id)
						? (l = this.id[3] | (this.id[2] << 8) | (this.id[1] << 16) | (this.id[0] << 24))
						: (l =
								this.id.charCodeAt(3) |
								(this.id.charCodeAt(2) << 8) |
								(this.id.charCodeAt(1) << 16) |
								(this.id.charCodeAt(0) << 24)),
					s.setTime(Math.floor(l) * 1e3),
					s
				);
			},
			generate: function (s) {
				typeof s != "number" && (s = ~~(Date.now() / 1e3)), (s = parseInt(s, 10) % 4294967295);
				var l = h();
				return String.fromCharCode(
					(s >> 24) & 255,
					(s >> 16) & 255,
					(s >> 8) & 255,
					s & 255,
					(e >> 16) & 255,
					(e >> 8) & 255,
					e & 255,
					(r >> 8) & 255,
					r & 255,
					(l >> 16) & 255,
					(l >> 8) & 255,
					l & 255
				);
			},
		});
	function h() {
		return (t = (t + 1) % 16777215);
	}
	function S(s, l) {
		return (l = l.toString(16)), l.length === s ? l : "00000000".substring(l.length, s) + l;
	}
	var v = (Symbol && Symbol.for && Symbol.for("nodejs.util.inspect.custom")) || "inspect";
	return (
		(f.prototype[v] = function () {
			return "ObjectID(" + this + ")";
		}),
		(f.prototype.toJSON = f.prototype.toHexString),
		(f.prototype.toString = f.prototype.toHexString),
		$
	);
}
var ht = gt();
const ae = xe(ht);
u.registerCustom(
	{
		isApplicable: (e) => {
			if (typeof e != "string" && ae.isValid(e)) {
				const t = e.toString();
				return /^[0-9a-fA-F]{24}$/.test(t);
			}
			return !1;
		},
		serialize: (e) => e.toString(),
		deserialize: (e) => new ae(e),
	},
	"ObjectId"
);
function Ft({ fetch: e, origin: t } = {}) {
	const r = `${window.location.origin}${Re}/api/v2`;
	return Le(r, { fetcher: e });
}
function At(e) {
	if (e.error) throw new Error(JSON.stringify(e.error));
	return u.parse(typeof e.data == "string" ? e.data : JSON.stringify(e.data));
}
export { At as h, Ft as u };
