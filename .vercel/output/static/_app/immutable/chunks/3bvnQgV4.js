import {
	l as B,
	H as q,
	m as K,
	v as R,
	j as A,
	x as m,
	a7 as x,
	aK as rr,
	aL as tr,
	G as ir,
	aM as er,
	aN as ar,
	aO as sr,
	g as fr,
	aP as ur,
	aQ as or,
	Y,
	aR as nr,
	aS as lr,
	I as cr,
} from "./C6vgWmgZ.js";
import {
	l as vr,
	f as dr,
	g as gr,
	d as br,
	j as hr,
	n as Sr,
	k as _r,
	o as pr,
} from "./18m15ENF.js";
import { w as Ar, d as O, b as $, i as I } from "./CSa6KPDp.js";
function Tr(r, t) {
	var i = void 0,
		e;
	B(() => {
		i !== (i = t()) &&
			(e && (q(e), (e = null)),
			i &&
				(e = K(() => {
					R(() => i(r));
				})));
	});
}
function z(r) {
	var t,
		i,
		e = "";
	if (typeof r == "string" || typeof r == "number") e += r;
	else if (typeof r == "object")
		if (Array.isArray(r)) {
			var a = r.length;
			for (t = 0; t < a; t++) r[t] && (i = z(r[t])) && (e && (e += " "), (e += i));
		} else for (i in r) r[i] && (e && (e += " "), (e += i));
	return e;
}
function yr() {
	for (var r, t, i = 0, e = "", a = arguments.length; i < a; i++)
		(r = arguments[i]) && (t = z(r)) && (e && (e += " "), (e += t));
	return e;
}
function Or(r) {
	return typeof r == "object" ? yr(r) : (r ?? "");
}
const G = [
	...` 	
\r\f \v\uFEFF`,
];
function Nr(r, t, i) {
	var e = r == null ? "" : "" + r;
	if ((t && (e = e ? e + " " + t : t), i)) {
		for (var a in i)
			if (i[a]) e = e ? e + " " + a : a;
			else if (e.length)
				for (var s = a.length, u = 0; (u = e.indexOf(a, u)) >= 0; ) {
					var o = u + s;
					(u === 0 || G.includes(e[u - 1])) && (o === e.length || G.includes(e[o]))
						? (e = (u === 0 ? "" : e.substring(0, u)) + e.substring(o + 1))
						: (u = o);
				}
	}
	return e === "" ? null : e;
}
function J(r, t = !1) {
	var i = t ? " !important;" : ";",
		e = "";
	for (var a in r) {
		var s = r[a];
		s != null && s !== "" && (e += " " + a + ": " + s + i);
	}
	return e;
}
function M(r) {
	return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r;
}
function Cr(r, t) {
	if (t) {
		var i = "",
			e,
			a;
		if ((Array.isArray(t) ? ((e = t[0]), (a = t[1])) : (e = t), r)) {
			r = String(r)
				.replaceAll(/\s*\/\*.*?\*\/\s*/g, "")
				.trim();
			var s = !1,
				u = 0,
				o = !1,
				n = [];
			e && n.push(...Object.keys(e).map(M)), a && n.push(...Object.keys(a).map(M));
			var f = 0,
				h = -1;
			const y = r.length;
			for (var c = 0; c < y; c++) {
				var v = r[c];
				if (
					(o
						? v === "/" && r[c - 1] === "*" && (o = !1)
						: s
							? s === v && (s = !1)
							: v === "/" && r[c + 1] === "*"
								? (o = !0)
								: v === '"' || v === "'"
									? (s = v)
									: v === "("
										? u++
										: v === ")" && u--,
					!o && s === !1 && u === 0)
				) {
					if (v === ":" && h === -1) h = c;
					else if (v === ";" || c === y - 1) {
						if (h !== -1) {
							var g = M(r.substring(f, h).trim());
							if (!n.includes(g)) {
								v !== ";" && c++;
								var p = r.substring(f, c).trim();
								i += " " + p + ";";
							}
						}
						(f = c + 1), (h = -1);
					}
				}
			}
		}
		return e && (i += J(e)), a && (i += J(a, !0)), (i = i.trim()), i === "" ? null : i;
	}
	return r == null ? null : String(r);
}
function Lr(r, t, i, e, a, s) {
	var u = r.__className;
	if (A || u !== i || u === void 0) {
		var o = Nr(i, e, s);
		(!A || o !== r.getAttribute("class")) &&
			(o == null ? r.removeAttribute("class") : t ? (r.className = o) : r.setAttribute("class", o)),
			(r.__className = i);
	} else if (s && a !== s)
		for (var n in s) {
			var f = !!s[n];
			(a == null || f !== !!a[n]) && r.classList.toggle(n, f);
		}
	return s;
}
function k(r, t = {}, i, e) {
	for (var a in i) {
		var s = i[a];
		t[a] !== s && (i[a] == null ? r.style.removeProperty(a) : r.style.setProperty(a, s, e));
	}
}
function wr(r, t, i, e) {
	var a = r.__style;
	if (A || a !== t) {
		var s = Cr(t, e);
		(!A || s !== r.getAttribute("style")) &&
			(s == null ? r.removeAttribute("style") : (r.style.cssText = s)),
			(r.__style = t);
	} else
		e &&
			(Array.isArray(e)
				? (k(r, i == null ? void 0 : i[0], e[0]),
					k(r, i == null ? void 0 : i[1], e[1], "important"))
				: k(r, i, e));
	return e;
}
function E(r, t, i) {
	if (r.multiple) {
		if (t == null) return;
		if (!x(t)) return rr();
		for (var e of r.options) e.selected = t.includes(L(e));
		return;
	}
	for (e of r.options) {
		var a = L(e);
		if (tr(a, t)) {
			e.selected = !0;
			return;
		}
	}
	(!i || t !== void 0) && (r.selectedIndex = -1);
}
function F(r, t) {
	let i = !0;
	R(() => {
		t && E(r, m(t), i), (i = !1);
		var e = new MutationObserver(() => {
			var a = r.__value;
			E(r, a);
		});
		return (
			e.observe(r, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["value"] }),
			() => {
				e.disconnect();
			}
		);
	});
}
function Mr(r, t, i = t) {
	var e = !0;
	vr(r, "change", (a) => {
		var s = a ? "[selected]" : ":checked",
			u;
		if (r.multiple) u = [].map.call(r.querySelectorAll(s), L);
		else {
			var o = r.querySelector(s) ?? r.querySelector("option:not([disabled])");
			u = o && L(o);
		}
		i(u);
	}),
		R(() => {
			var a = t();
			if ((E(r, a, e), e && a === void 0)) {
				var s = r.querySelector(":checked");
				s !== null && ((a = L(s)), i(a));
			}
			(r.__value = a), (e = !1);
		}),
		F(r);
}
function L(r) {
	return "__value" in r ? r.__value : r.value;
}
const N = Symbol("class"),
	C = Symbol("style"),
	Q = Symbol("is custom element"),
	D = Symbol("is html");
function kr(r) {
	if (A) {
		var t = !1,
			i = () => {
				if (!t) {
					if (((t = !0), r.hasAttribute("value"))) {
						var e = r.value;
						j(r, "value", null), (r.value = e);
					}
					if (r.hasAttribute("checked")) {
						var a = r.checked;
						j(r, "checked", null), (r.checked = a);
					}
				}
			};
		(r.__on_r = i), nr(i), _r();
	}
}
function qr(r, t) {
	var i = H(r);
	i.value === (i.value = t ?? void 0) ||
		(r.value === t && (t !== 0 || r.nodeName !== "PROGRESS")) ||
		(r.value = t ?? "");
}
function Er(r, t) {
	t ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected");
}
function j(r, t, i, e) {
	var a = H(r);
	(A &&
		((a[t] = r.getAttribute(t)),
		t === "src" || t === "srcset" || (t === "href" && r.nodeName === "LINK"))) ||
		(a[t] !== (a[t] = i) &&
			(t === "loading" && (r[er] = i),
			i == null
				? r.removeAttribute(t)
				: typeof i != "string" && W(r).includes(t)
					? (r[t] = i)
					: r.setAttribute(t, i)));
}
function jr(r, t, i, e, a = !1) {
	var s = H(r),
		u = s[Q],
		o = !s[D];
	let n = A && u;
	n && Y(!1);
	var f = t || {},
		h = r.tagName === "OPTION";
	for (var c in t) c in i || (i[c] = null);
	i.class ? (i.class = Or(i.class)) : i[N] && (i.class = null),
		i[C] && (i.style ?? (i.style = null));
	var v = W(r);
	for (const l in i) {
		let d = i[l];
		if (h && l === "value" && d == null) {
			(r.value = r.__value = ""), (f[l] = d);
			continue;
		}
		if (l === "class") {
			var g = r.namespaceURI === "http://www.w3.org/1999/xhtml";
			Lr(r, g, d, e, t == null ? void 0 : t[N], i[N]), (f[l] = d), (f[N] = i[N]);
			continue;
		}
		if (l === "style") {
			wr(r, d, t == null ? void 0 : t[C], i[C]), (f[l] = d), (f[C] = i[C]);
			continue;
		}
		var p = f[l];
		if (d !== p) {
			f[l] = d;
			var y = l[0] + l[1];
			if (y !== "$$")
				if (y === "on") {
					const S = {},
						T = "$$" + l;
					let b = l.slice(2);
					var P = pr(b);
					if ((dr(b) && ((b = b.slice(0, -7)), (S.capture = !0)), !P && p)) {
						if (d != null) continue;
						r.removeEventListener(b, f[T], S), (f[T] = null);
					}
					if (d != null)
						if (P) (r[`__${b}`] = d), br([b]);
						else {
							let X = function (Z) {
								f[l].call(this, Z);
							};
							f[T] = gr(b, r, X, S);
						}
					else P && (r[`__${b}`] = void 0);
				} else if (l === "style") j(r, l, d);
				else if (l === "autofocus") hr(r, !!d);
				else if (!u && (l === "__value" || (l === "value" && d != null))) r.value = r.__value = d;
				else if (l === "selected" && h) Er(r, d);
				else {
					var _ = l;
					o || (_ = Sr(_));
					var V = _ === "defaultValue" || _ === "defaultChecked";
					if (d == null && !u && !V)
						if (((s[l] = null), _ === "value" || _ === "checked")) {
							let S = r;
							const T = t === void 0;
							if (_ === "value") {
								let b = S.defaultValue;
								S.removeAttribute(_), (S.defaultValue = b), (S.value = S.__value = T ? b : null);
							} else {
								let b = S.defaultChecked;
								S.removeAttribute(_), (S.defaultChecked = b), (S.checked = T ? b : !1);
							}
						} else r.removeAttribute(l);
					else
						V || (v.includes(_) && (u || typeof d != "string"))
							? (r[_] = d)
							: typeof d != "function" && j(r, _, d);
				}
		}
	}
	return n && Y(!0), f;
}
function Rr(r, t, i = [], e, a = !1, s = ir) {
	const u = i.map(s);
	var o = void 0,
		n = {},
		f = r.nodeName === "SELECT",
		h = !1;
	B(() => {
		var c = t(...u.map(fr));
		jr(r, o, c, e, a), h && f && "value" in c && E(r, c.value, !1);
		for (let g of Object.getOwnPropertySymbols(n)) c[g] || q(n[g]);
		for (let g of Object.getOwnPropertySymbols(c)) {
			var v = c[g];
			g.description === ur &&
				(!o || v !== o[g]) &&
				(n[g] && q(n[g]), (n[g] = K(() => Tr(r, () => v))));
		}
		o = c;
	}),
		f && F(r, () => o.value),
		(h = !0);
}
function H(r) {
	return (
		r.__attributes ??
		(r.__attributes = { [Q]: r.nodeName.includes("-"), [D]: r.namespaceURI === ar })
	);
}
var U = new Map();
function W(r) {
	var t = U.get(r.nodeName);
	if (t) return t;
	U.set(r.nodeName, (t = []));
	for (var i, e = r, a = Element.prototype; a !== e; ) {
		i = or(e);
		for (var s in i) i[s].set && t.push(s);
		e = sr(e);
	}
	return t;
}
var w = ((r) => (
	(r.ConversationList = "conversation:list"), (r.Conversation = "conversation:id"), r
))(w || {});
function Hr() {
	return cr("settings");
}
function Vr(r) {
	const t = Ar({ ...r, recentlySaved: !1 });
	let i,
		e = !1;
	async function a(n) {
		t.update((f) => ({ ...f, ...n })),
			(e = !0),
			clearTimeout(i),
			(i = setTimeout(async () => {
				await fetch(`${$}/settings`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(O(t)),
				}),
					I(w.ConversationList),
					e &&
						(t.update((f) => ({ ...f, recentlySaved: !0 })),
						setTimeout(() => {
							t.update((f) => ({ ...f, recentlySaved: !1 }));
						}, 3e3)),
					(e = !1);
			}, 300));
	}
	async function s(n, f, h) {
		const v = O(t)[n];
		if ((v == null ? void 0 : v[f]) !== void 0) return;
		const g = { ...(v || {}), [f]: h };
		t.update((p) => ({ ...p, [n]: g })),
			clearTimeout(i),
			(i = setTimeout(async () => {
				await fetch(`${$}/settings`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(O(t)),
				}),
					I(w.ConversationList),
					e &&
						(t.update((p) => ({ ...p, recentlySaved: !0 })),
						setTimeout(() => {
							t.update((p) => ({ ...p, recentlySaved: !1 }));
						}, 3e3)),
					(e = !1);
			}, 300));
	}
	async function u(n) {
		t.update((f) => ({ ...f, ...n })),
			await fetch(`${$}/settings`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ...O(t), ...n }),
			}),
			I(w.ConversationList);
	}
	const o = {
		subscribe: t.subscribe,
		set: a,
		instantSet: u,
		initValue: s,
		update: (n) => {
			a(n(O(t)));
		},
	};
	return lr("settings", o), o;
}
export {
	w as U,
	Rr as a,
	j as b,
	E as c,
	Or as d,
	qr as e,
	wr as f,
	Vr as g,
	yr as h,
	F as i,
	Mr as j,
	kr as r,
	Lr as s,
	Hr as u,
};
