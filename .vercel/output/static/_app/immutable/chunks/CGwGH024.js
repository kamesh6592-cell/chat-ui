import {
	P as f,
	as as x,
	R as m,
	at as p,
	au as E,
	J as v,
	j as u,
	q as s,
	k as h,
	O as w,
} from "./C6vgWmgZ.js";
function g(e) {
	var t = document.createElement("template");
	return (t.innerHTML = e.replaceAll("<!>", "<!---->")), t.content;
}
function o(e, t) {
	var r = v;
	r.nodes_start === null && ((r.nodes_start = e), (r.nodes_end = t));
}
function b(e, t) {
	var r = (t & p) !== 0,
		c = (t & E) !== 0,
		a,
		i = !e.startsWith("<!>");
	return () => {
		if (u) return o(s, null), s;
		a === void 0 && ((a = g(i ? e : "<!>" + e)), r || (a = f(a)));
		var n = c || x ? document.importNode(a, !0) : a.cloneNode(!0);
		if (r) {
			var _ = f(n),
				l = n.lastChild;
			o(_, l);
		} else o(n, n);
		return n;
	};
}
function y(e, t, r = "svg") {
	var c = !e.startsWith("<!>"),
		a = (t & p) !== 0,
		i = `<${r}>${c ? e : "<!>" + e}</${r}>`,
		n;
	return () => {
		if (u) return o(s, null), s;
		if (!n) {
			var _ = g(i),
				l = f(_);
			if (a) for (n = document.createDocumentFragment(); f(l); ) n.appendChild(f(l));
			else n = f(l);
		}
		var d = n.cloneNode(!0);
		if (a) {
			var C = f(d),
				T = d.lastChild;
			o(C, T);
		} else o(d, d);
		return d;
	};
}
function M(e, t) {
	return y(e, t, "svg");
}
function P(e) {
	return () => A(e());
}
function A(e) {
	if (u) return e;
	const t = e.nodeType === 11,
		r = e.tagName === "SCRIPT" ? [e] : e.querySelectorAll("script"),
		c = v;
	for (const i of r) {
		const n = document.createElement("script");
		for (var a of i.attributes) n.setAttribute(a.name, a.value);
		(n.textContent = i.textContent),
			(t ? e.firstChild === i : e === i) && (c.nodes_start = n),
			(t ? e.lastChild === i : e === i) && (c.nodes_end = n),
			i.replaceWith(n);
	}
	return e;
}
function R(e = "") {
	if (!u) {
		var t = m(e + "");
		return o(t, t), t;
	}
	var r = s;
	return r.nodeType !== 3 && (r.before((r = m())), w(r)), o(r, r), r;
}
function W() {
	if (u) return o(s, null), s;
	var e = document.createDocumentFragment(),
		t = document.createComment(""),
		r = m();
	return e.append(t, r), o(t, r), e;
}
function $(e, t) {
	if (u) {
		(v.nodes_end = s), h();
		return;
	}
	e !== null && e.before(t);
}
function D() {
	var e, t;
	if (u && s && s.nodeType === 8 && (e = s.textContent) != null && e.startsWith("#")) {
		const r = s.textContent.substring(1);
		return h(), r;
	}
	return (
		(t = window.__svelte ?? (window.__svelte = {})).uid ?? (t.uid = 1), `c${window.__svelte.uid++}`
	);
}
export { $ as a, M as b, W as c, o as d, g as e, b as f, D as p, R as t, P as w };
