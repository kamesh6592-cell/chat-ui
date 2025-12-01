var u = (t) => {
	throw TypeError(t);
};
var b = (t, i, n) => i.has(t) || u("Cannot " + n);
var g = (t, i, n) => (b(t, i, "read from private field"), n ? n.call(t) : i.get(t)),
	f = (t, i, n) =>
		i.has(t)
			? u("Cannot add the same private member more than once")
			: i instanceof WeakSet
				? i.add(t)
				: i.set(t, n);
import { b as C, d as l, e as P, g as o, I as S } from "./C6vgWmgZ.js";
import { p } from "./lmEnKYxK.js";
import { b as d } from "./CSa6KPDp.js";
var e;
class c {
	constructor(i) {
		f(this, e, C(l({})));
		(this.init = this.init.bind(this)),
			(this.getPublicConfig = this.getPublicConfig.bind(this)),
			i && this.init(i);
	}
	init(i) {
		P(g(this, e), i, !0);
	}
	get(i) {
		return o(g(this, e))[i];
	}
	getPublicConfig() {
		return o(g(this, e));
	}
	get isHuggingChat() {
		return o(g(this, e)).PUBLIC_APP_ASSETS === "huggingchat";
	}
	get assetPath() {
		return (
			(o(g(this, e)).PUBLIC_ORIGIN || p.url.origin) + d + "/" + o(g(this, e)).PUBLIC_APP_ASSETS
		);
	}
}
e = new WeakMap();
function m(t) {
	const i = new c(t);
	return new Proxy(i, {
		get(r, s) {
			if (s in r) return Reflect.get(r, s);
			if (typeof s == "string") return r.get(s);
		},
		set(r, s, a, h) {
			return s in r ? Reflect.set(r, s, a, h) : !1;
		},
	});
}
const A = {
		encode: (t) => (t instanceof c ? JSON.stringify(t.getPublicConfig()) : !1),
		decode: (t) => m(JSON.parse(t)),
	},
	B = () => S("publicConfig");
export { m as g, A as p, B as u };
