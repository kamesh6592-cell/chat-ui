import "./CWj6FrbW.js";
import {
	p as Oe,
	t as w,
	a as Te,
	c as o,
	r as s,
	s as c,
	g as n,
	u as j,
	h as Z,
	b as oe,
	e as _,
	d as ze,
	f as er,
} from "./C6vgWmgZ.js";
import { f as h, a as v, b as G, c as fr, t as Le } from "./CGwGH024.js";
import { s as ke, d as rr, b as Pe, a as ne, r as Ee } from "./3bvnQgV4.js";
import { p as _e, l as le, a as je, s as hr } from "./_wu0PA6r.js";
import { u as tr } from "./Da9RVyMh.js";
import { b as ge, g as xr, w as De, j as ar } from "./CSa6KPDp.js";
import { p as ye } from "./lmEnKYxK.js";
import { d as Ke, i as f, s as k } from "./18m15ENF.js";
import { e as Ne, i as sr, a as He } from "./CYA4sdSw.js";
import { M as pr } from "./zLvdPMOW.js";
import "./69_IOA4Y.js";
import { h as ie } from "./6DPKqfPG.js";
import { T as or } from "./BJid9-HC.js";
import { T as nr, V as yr } from "./Cbtu-SQV.js";
import { S as _r } from "./DgLqPQQO.js";
import { S as kr } from "./PDNaNhLJ.js";
import { d as Ye, b as wr } from "./C6o0iJkr.js";
var Sr = h("<img/>");
function Yt(e, r) {
	Oe(r, !0);
	const t = tr();
	let a = _e(r, "classNames", 3, "");
	var i = Sr();
	w(() => {
		ke(i, 1, rr(a())),
			Pe(i, "alt", `${t.PUBLIC_APP_NAME ?? ""} logo`),
			Pe(i, "src", `${t.assetPath ?? ""}/logo.svg`);
	}),
		v(e, i),
		Te();
}
function Wt() {
	if (ye.data.loginEnabled && !ye.data.user) {
		const e =
			ye.data.shared || ye.url.pathname.startsWith(`${ge}/models/`)
				? `${ge}/login?next=${encodeURIComponent(ye.url.pathname + ye.url.search)}`
				: `${ge}/login`;
		return xr(e, { invalidateAll: !0 }), !0;
	}
	return !1;
}
const We = globalThis.__sveltekit_1famkl8.env;
function lr(e) {
	return (e || "").toLowerCase().replace(/[^a-z0-9_-]+/g, "-");
}
const Cr = lr(We.PUBLIC_APP_ASSETS || We.PUBLIC_APP_NAME),
	Ar = lr(typeof ge == "string" ? ge : ""),
	Je = Cr || Ar || "app",
	Ve = { CUSTOM_SERVERS: `${Je}:mcp:custom-servers`, SELECTED_IDS: `${Je}:mcp:selected-ids` };
function Be() {
	try {
		const e = localStorage.getItem(Ve.CUSTOM_SERVERS);
		return e ? JSON.parse(e) : [];
	} catch (e) {
		return console.error("Failed to load custom MCP servers from localStorage:", e), [];
	}
}
function Pr() {
	try {
		const e = localStorage.getItem(Ve.SELECTED_IDS),
			r = e ? JSON.parse(e) : [];
		return new Set(r);
	} catch (e) {
		return console.error("Failed to load selected MCP server IDs from localStorage:", e), new Set();
	}
}
function ir(e) {
	try {
		localStorage.setItem(Ve.CUSTOM_SERVERS, JSON.stringify(e));
	} catch (r) {
		console.error("Failed to save custom MCP servers to localStorage:", r);
	}
}
function $r(e) {
	try {
		localStorage.setItem(Ve.SELECTED_IDS, JSON.stringify([...e]));
	} catch (r) {
		console.error("Failed to save selected MCP server IDs to localStorage:", r);
	}
}
const $e = De([]),
	we = De(Pr());
we.subscribe((e) => {
	$r(e);
});
const Mr = ar([$e, we], ([e, r]) => e.filter((t) => r.has(t.id))),
	zr = ar(Mr, (e) => e.length);
async function Ue() {
	try {
		const e = await fetch(`${ge}/api/mcp/servers`);
		if (!e.ok) throw new Error(`Failed to fetch base servers: ${e.statusText}`);
		const r = await e.json(),
			t = Be(),
			a = [...r, ...t];
		$e.set(a);
		const i = new Set(a.map((P) => P.id));
		we.update((P) => new Set([...P].filter((y) => i.has(y))));
	} catch (e) {
		console.error("Failed to refresh MCP servers:", e), $e.set(Be());
	}
}
function Lr(e) {
	we.update((r) => {
		const t = new Set(r);
		return t.has(e) ? t.delete(e) : t.add(e), t;
	});
}
function Er(e) {
	const r = { ...e, id: crypto.randomUUID(), type: "custom", status: "disconnected" },
		t = Be();
	return t.push(r), ir(t), Ue(), r.id;
}
function Hr(e) {
	const t = Be().filter((a) => a.id !== e);
	ir(t),
		we.update((a) => {
			const i = new Set(a);
			return i.delete(e), i;
		}),
		Ue();
}
function Ie(e, r, t, a, i) {
	$e.update((P) =>
		P.map((p) => (p.id === e ? { ...p, status: r, errorMessage: t, tools: a, authRequired: i } : p))
	);
}
async function dr(e) {
	try {
		Ie(e.id, "connecting");
		const t = await (
			await fetch(`${ge}/api/mcp/health`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ url: e.url, headers: e.headers }),
			})
		).json();
		return t.ready && t.tools
			? (Ie(e.id, "connected", void 0, t.tools, !1), { ready: !0, tools: t.tools })
			: (Ie(e.id, "error", t.error, void 0, !!t.authRequired), { ready: !1, error: t.error });
	} catch (r) {
		const t = r instanceof Error ? r.message : "Unknown error";
		return Ie(e.id, "error", t), { ready: !1, error: t };
	}
}
Ue();
var Ir = G("<svg><!></svg>");
function Xe(e, r) {
	const t = le(r, ["children", "$$slots", "$$events", "$$legacy"]);
	var a = Ir();
	ne(a, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var i = o(a);
	ie(
		i,
		() =>
			'<path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z"/><path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585z"/>',
		!0
	),
		s(a),
		v(e, a);
}
var Rr = G("<svg><!></svg>");
function Ze(e, r) {
	const t = le(r, ["children", "$$slots", "$$events", "$$legacy"]);
	var a = Rr();
	ne(a, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var i = o(a);
	ie(
		i,
		() =>
			'<path fill="currentColor" d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2m-1.1 6h2.2v11h-2.2zM16 25c-.8 0-1.5-.7-1.5-1.5S15.2 22 16 22s1.5.7 1.5 1.5S16.8 25 16 25"/>',
		!0
	),
		s(a),
		v(e, a);
}
var Nr = G("<svg><!></svg>");
function Re(e, r) {
	const t = le(r, ["children", "$$slots", "$$events", "$$legacy"]);
	var a = Nr();
	ne(a, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var i = o(a);
	ie(
		i,
		() =>
			'<path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2M8 18a2 2 0 1 1 2-2a2 2 0 0 1-2 2m8 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2m8 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2"/><path fill="none" d="M10 16a2 2 0 1 1-2-2a2 2 0 0 1 2 2m6-2a2 2 0 1 0 2 2a2 2 0 0 0-2-2m8 0a2 2 0 1 0 2 2a2 2 0 0 0-2-2"/>',
		!0
	),
		s(a),
		v(e, a);
}
var Br = G("<svg><!></svg>");
function cr(e, r) {
	const t = le(r, ["children", "$$slots", "$$events", "$$legacy"]);
	var a = Br();
	ne(a, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var i = o(a);
	ie(
		i,
		() =>
			'<path fill="currentColor" d="M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"/>',
		!0
	),
		s(a),
		v(e, a);
}
function Or(e, r = 64) {
	try {
		const t = new URL(e),
			a = t.hostname.split("."),
			i = a.length >= 2 ? a.slice(-2).join(".") : t.hostname,
			P = `${t.protocol}//${i}`;
		return `https://www.google.com/s2/favicons?sz=${r}&domain_url=${encodeURIComponent(P)}`;
	} catch {
		return `https://www.google.com/s2/favicons?sz=${r}&domain_url=${encodeURIComponent(e)}`;
	}
}
function Tr(e) {
	try {
		const r = new URL(e),
			t = r.hostname.toLowerCase(),
			a = new Set(["hf.co", "huggingface.co"]);
		return r.protocol === "https:" && a.has(t) && r.pathname === "/mcp" && r.search === "?login";
	} catch {
		return !1;
	}
}
function Vr(e, r) {
	Hr(r.server.id);
}
var Ur = h(
		'<span class="inline-flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400"><!> </span>'
	),
	Fr = h('<div class="mb-2 flex items-center gap-2"><span><!> </span> <!></div>'),
	jr = h(
		'<div class="mb-2 flex items-center gap-2"><div class="line-clamp-6 break-words rounded bg-red-50 px-2 py-1 text-xs text-red-800 dark:bg-red-900/20 dark:text-red-200"> </div></div>'
	),
	Dr = h(
		'<a href="https://huggingface.co/settings/mcp" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-[.29rem] text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600" aria-label="Open Hugging Face MCP settings"><!> Settings</a>'
	),
	Kr = h(
		'<button class="flex items-center gap-1.5 rounded-lg border border-red-500/15 bg-red-50 px-2.5 py-[.29rem] text-xs font-medium text-red-600 hover:bg-red-100 dark:border-red-500/25 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50"><!> Delete</button>'
	),
	qr = h('<span class="text-gray-500 dark:text-gray-500"> </span>'),
	Yr = h(
		'<li class="text-gray-600 dark:text-gray-400"><span class="font-medium text-gray-900 dark:text-gray-100"> </span> <!></li>'
	),
	Wr = h(
		'<details class="mt-3"><summary class="cursor-pointer text-xs font-medium text-gray-700 dark:text-gray-300"> </summary> <ul class="mt-2 space-y-1 text-xs"></ul></details>'
	),
	Jr = h(
		'<div><div class="px-4 py-3.5"><div class="mb-3 flex items-start justify-between gap-3"><div class="min-w-0 flex-1"><div class="mb-0.5 flex items-center gap-2"><img alt="" class="size-4 flex-shrink-0 rounded"/> <h3 class="truncate font-semibold text-gray-900 dark:text-gray-100"> </h3></div> <p class="truncate text-sm text-gray-600 dark:text-gray-400"> </p></div> <!></div> <!> <!> <div class="flex flex-wrap gap-1"><button class="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-[.29rem] text-xs font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"><!> Health Check</button> <!> <!></div> <!></div></div>'
	);
function Ge(e, r) {
	Oe(r, !0);
	let t = oe(!1);
	const a = j(() => Tr(r.server.url)),
		i = j(() => {
			switch (r.server.status) {
				case "connected":
					return {
						label: "Connected",
						color: "text-green-600 dark:text-green-400",
						bgColor: "bg-green-100 dark:bg-green-900/20",
						icon: Xe,
					};
				case "connecting":
					return {
						label: "Connecting...",
						color: "text-blue-600 dark:text-blue-400",
						bgColor: "bg-blue-100 dark:bg-blue-900/20",
						icon: Re,
					};
				case "error":
					return {
						label: "Error",
						color: "text-red-600 dark:text-red-400",
						bgColor: "bg-red-100 dark:bg-red-900/20",
						icon: Ze,
					};
				case "disconnected":
				default:
					return {
						label: "Unknown",
						color: "text-gray-600 dark:text-gray-400",
						bgColor: "bg-gray-100 dark:bg-gray-700",
						icon: Re,
					};
			}
		});
	function P(l) {
		l !== r.isSelected && (Lr(r.server.id), l && r.server.status !== "connected" && p());
	}
	async function p() {
		_(t, !0);
		try {
			await dr(r.server);
		} finally {
			_(t, !1);
		}
	}
	var y = Jr(),
		b = o(y),
		S = o(b),
		$ = o(S),
		J = o($),
		Q = o(J),
		me = c(Q, 2),
		de = o(me, !0);
	s(me), s(J);
	var ee = c(J, 2),
		E = o(ee, !0);
	s(ee), s($);
	var be = c($, 2);
	const re = j(() => `enable-${r.server.id}`);
	var X = () => r.isSelected,
		te = P;
	kr(be, {
		get name() {
			return n(re);
		},
		get checked() {
			return X();
		},
		set checked(l) {
			te(l);
		},
	}),
		s(S);
	var ce = c(S, 2);
	{
		var Se = (l) => {
			var d = Fr(),
				u = o(d),
				C = o(u);
			{
				var M = (m) => {
						Xe(m, { class: "size-3" });
					},
					V = (m, N) => {
						{
							var D = (A) => {
									Re(A, { class: "size-3" });
								},
								z = (A, L) => {
									{
										var K = (q) => {
												Ze(q, { class: "size-3" });
											},
											xe = (q) => {
												Re(q, { class: "size-3" });
											};
										f(
											A,
											(q) => {
												r.server.status === "error" ? q(K) : q(xe, !1);
											},
											L
										);
									}
								};
							f(
								m,
								(A) => {
									r.server.status === "connecting" ? A(D) : A(z, !1);
								},
								N
							);
						}
					};
				f(C, (m) => {
					r.server.status === "connected" ? m(M) : m(V, !1);
				});
			}
			var I = c(C);
			s(u);
			var U = c(u, 2);
			{
				var R = (m) => {
					var N = Ur(),
						D = o(N);
					nr(D, { class: "size-3" });
					var z = c(D);
					s(N),
						w(() =>
							k(
								z,
								` ${r.server.tools.length ?? ""}
						${r.server.tools.length === 1 ? "tool" : "tools"}`
							)
						),
						v(m, N);
				};
				f(U, (m) => {
					r.server.tools && r.server.tools.length > 0 && m(R);
				});
			}
			s(d),
				w(() => {
					ke(
						u,
						1,
						`inline-flex items-center gap-1 rounded-full ${n(i).bgColor ?? ""} py-0.5 pl-1.5 pr-2 text-xs font-medium ${n(i).color ?? ""}`
					),
						k(I, ` ${n(i).label ?? ""}`);
				}),
				v(l, d);
		};
		f(ce, (l) => {
			r.server.status && l(Se);
		});
	}
	var fe = c(ce, 2);
	{
		var ae = (l) => {
			var d = jr(),
				u = o(d),
				C = o(u, !0);
			s(u), s(d), w(() => k(C, r.server.errorMessage)), v(l, d);
		};
		f(fe, (l) => {
			r.server.errorMessage && l(ae);
		});
	}
	var ve = c(fe, 2),
		O = o(ve);
	O.__click = p;
	var he = o(O);
	const Ce = j(() => (n(t) ? "animate-spin" : ""));
	cr(he, {
		get class() {
			return `size-3 ${n(Ce) ?? ""}`;
		},
	}),
		Z(),
		s(O);
	var ue = c(O, 2);
	{
		var Ae = (l) => {
			var d = Dr(),
				u = o(d);
			_r(u, { class: "size-3" }), Z(), s(d), v(l, d);
		};
		f(ue, (l) => {
			n(a) && l(Ae);
		});
	}
	var g = c(ue, 2);
	{
		var x = (l) => {
			var d = Kr();
			d.__click = [Vr, r];
			var u = o(d);
			or(u, { class: "size-3" }), Z(), s(d), v(l, d);
		};
		f(g, (l) => {
			r.server.type === "custom" && l(x);
		});
	}
	s(ve);
	var H = c(ve, 2);
	{
		var T = (l) => {
			var d = Wr(),
				u = o(d),
				C = o(u);
			s(u);
			var M = c(u, 2);
			Ne(
				M,
				21,
				() => r.server.tools,
				sr,
				(V, I) => {
					var U = Yr(),
						R = o(U),
						m = o(R, !0);
					s(R);
					var N = c(R, 2);
					{
						var D = (z) => {
							var A = qr(),
								L = o(A);
							s(A), w(() => k(L, `- ${n(I).description ?? ""}`)), v(z, A);
						};
						f(N, (z) => {
							n(I).description && z(D);
						});
					}
					s(U), w(() => k(m, n(I).name)), v(V, U);
				}
			),
				s(M),
				s(d),
				w(() => k(C, `Available Tools (${r.server.tools.length ?? ""})`)),
				v(l, d);
		};
		f(H, (l) => {
			r.server.tools && r.server.tools.length > 0 && l(T);
		});
	}
	s(b),
		s(y),
		w(
			(l) => {
				ke(
					y,
					1,
					`rounded-lg border bg-gradient-to-br transition-colors ${r.isSelected ? "border-blue-600/20 bg-blue-50 from-blue-500/5 to-transparent dark:border-blue-700/60 dark:bg-blue-900/10 dark:from-blue-900/20" : "border-gray-200 bg-white from-black/5 dark:border-gray-700 dark:bg-gray-800 dark:from-white/5"}`
				),
					Pe(Q, "src", l),
					k(de, r.server.name),
					k(E, r.server.url),
					(O.disabled = n(t));
			},
			[() => Or(r.server.url)]
		),
		v(e, y),
		Te();
}
Ke(["click"]);
function Xr(e) {
	if (!e || typeof e != "string") return null;
	try {
		const r = new URL(e.trim());
		return ["http:", "https:"].includes(r.protocol)
			? (!Ye &&
					r.protocol === "http:" &&
					wr &&
					console.warn(
						"Warning: Connecting to non-HTTPS MCP server in production. This may expose sensitive data."
					),
				!Ye &&
					Zr(r.hostname) &&
					console.warn(
						"Warning: Localhost/private IP addresses are not recommended in production."
					),
				r.toString())
			: null;
	} catch {
		return null;
	}
}
function Zr(e) {
	return !!(
		e === "localhost" ||
		e === "127.0.0.1" ||
		e === "::1" ||
		e.endsWith(".localhost") ||
		/^(10\.|172\.(1[6-9]|2[0-9]|3[01])\.|192\.168\.|127\.|0\.0\.0\.0|169\.254\.)/.test(e)
	);
}
function Gr(e) {
	const r = [
			"authorization",
			"api-key",
			"api_key",
			"apikey",
			"token",
			"secret",
			"password",
			"bearer",
			"x-api-key",
			"x-auth-token",
		],
		t = e.toLowerCase();
	return r.some((a) => t.includes(a));
}
function Qr(e, r) {
	return !e || !e.trim()
		? "Header name is required"
		: /^[a-zA-Z0-9_-]+$/.test(e)
			? r
				? null
				: "Header value is required"
			: "Header name can only contain letters, numbers, hyphens, and underscores";
}
var et = G("<svg><!></svg>");
function rt(e, r) {
	const t = le(r, ["children", "$$slots", "$$events", "$$legacy"]);
	var a = et();
	ne(a, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var i = o(a);
	ie(
		i,
		() =>
			'<path fill="currentColor" d="m5.24 22.51l1.43-1.42A14.06 14.06 0 0 1 3.07 16C5.1 10.93 10.7 7 16 7a12.4 12.4 0 0 1 4 .72l1.55-1.56A14.7 14.7 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68a16 16 0 0 0 4.18 6.17"/><path fill="currentColor" d="M12 15.73a4 4 0 0 1 3.7-3.7l1.81-1.82a6 6 0 0 0-7.33 7.33zm18.94-.07a16.4 16.4 0 0 0-5.74-7.44L30 3.41L28.59 2L2 28.59L3.41 30l5.1-5.1A15.3 15.3 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M20 16a4 4 0 0 1-6 3.44L19.44 14a4 4 0 0 1 .56 2m-4 9a13.05 13.05 0 0 1-6-1.58l2.54-2.54a6 6 0 0 0 8.35-8.35l2.87-2.87A14.54 14.54 0 0 1 28.93 16C26.9 21.07 21.3 25 16 25"/>',
		!0
	),
		s(a),
		v(e, a);
}
var tt = G("<svg><!></svg>");
function at(e, r) {
	const t = le(r, ["children", "$$slots", "$$events", "$$legacy"]);
	var a = tt();
	ne(a, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var i = o(a);
	ie(i, () => '<path fill="currentColor" d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z"/>', !0),
		s(a),
		v(e, a);
}
var st = G("<svg><!></svg>");
function ot(e, r) {
	const t = le(r, ["children", "$$slots", "$$events", "$$legacy"]);
	var a = st();
	ne(a, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var i = o(a);
	ie(
		i,
		() =>
			'<path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"/><path fill="currentColor" d="M15 8h2v11h-2zm1 14a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 22"/>',
		!0
	),
		s(a),
		v(e, a);
}
function nt(e, r) {
	_(r, [...n(r), { key: "", value: "" }], !0);
}
function lt(e, r, t, a, i, P) {
	if (!r()) return;
	const p = n(t).filter((y) => y.key.trim() && y.value.trim());
	a.onsubmit({ name: n(i).trim(), url: n(P).trim(), headers: p.length > 0 ? p : void 0 });
}
var it = h('<p class="text-sm text-gray-500 dark:text-gray-400">No headers configured</p>'),
	dt = h(
		'<button type="button" class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"><!></button>'
	),
	ct = h(
		'<div class="flex gap-2"><input placeholder="Header name (e.g., Authorization)" class="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"/> <div class="relative flex-1"><input placeholder="Value" class="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 pr-10 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"/> <!></div> <button type="button" class="rounded-lg bg-red-100 p-2 text-red-600 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50" title="Remove header"><!></button></div>'
	),
	vt = h(
		'<div class="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20"><p class="text-sm text-red-800 dark:text-red-200"> </p></div>'
	),
	ut =
		h(`<div class="space-y-4"><div><label for="server-name" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Server Name <span class="text-red-500">*</span></label> <input id="server-name" type="text" placeholder="My MCP Server" class="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"/></div> <div><label for="server-url" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Server URL <span class="text-red-500">*</span></label> <input id="server-url" type="url" placeholder="https://example.com/mcp" class="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"/></div> <details class="rounded-lg border border-gray-200 dark:border-gray-700"><summary class="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300">HTTP Headers (Optional)</summary> <div class="space-y-2 border-t border-gray-200 p-4 dark:border-gray-700"><!> <button type="button" class="flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"><!> Add Header</button> <p class="text-xs text-gray-500 dark:text-gray-400">Common examples:<br/> • Bearer token: <code class="rounded bg-gray-100 px-1 dark:bg-gray-700">Authorization: Bearer YOUR_TOKEN</code><br/> • API key: <code class="rounded bg-gray-100 px-1 dark:bg-gray-700">X-API-Key: YOUR_KEY</code></p></div></details> <div class="rounded-lg border border-amber-200 bg-amber-50 p-3 text-amber-900 dark:border-yellow-900/40 dark:bg-yellow-900/20 dark:text-yellow-100"><div class="flex items-start gap-3"><!> <div class="text-sm leading-5"><p class="font-medium">Be careful with custom MCP servers.</p> <p class="mt-1 text-[13px] text-amber-800 dark:text-yellow-100/90">They receive your requests (including conversation context and any headers you add) and
					can run powerful tools on your behalf. Only add servers you trust and review their source.
					Never share confidental informations.</p></div></div></div> <!> <div class="flex justify-end gap-2"><button type="button" class="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">Cancel</button> <button type="button" class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"> </button></div></div>`);
function gt(e, r) {
	Oe(r, !0);
	let t = _e(r, "initialName", 3, ""),
		a = _e(r, "initialUrl", 3, ""),
		i = _e(r, "initialHeaders", 19, () => []),
		P = _e(r, "submitLabel", 3, "Add Server"),
		p = oe(ze(t())),
		y = oe(ze(a())),
		b = oe(ze(i().length > 0 ? [...i()] : [])),
		S = oe(ze({})),
		$ = oe(null);
	function J(l) {
		_(
			b,
			n(b).filter((d, u) => u !== l),
			!0
		),
			delete n(S)[l];
	}
	function Q(l) {
		_(S, { ...n(S), [l]: !n(S)[l] }, !0);
	}
	function me() {
		if (!n(p).trim()) return _($, "Server name is required"), !1;
		if (!n(y).trim()) return _($, "Server URL is required"), !1;
		if (!Xr(n(y))) return _($, "Invalid URL."), !1;
		for (let d = 0; d < n(b).length; d++) {
			const u = n(b)[d];
			if (u.key.trim() || u.value.trim()) {
				const C = Qr(u.key, u.value);
				if (C) return _($, `Header ${d + 1}: ${C}`), !1;
			}
		}
		return _($, null), !0;
	}
	var de = ut(),
		ee = o(de),
		E = c(o(ee), 2);
	Ee(E), s(ee);
	var be = c(ee, 2),
		re = c(o(be), 2);
	Ee(re), s(be);
	var X = c(be, 2),
		te = c(o(X), 2),
		ce = o(te);
	{
		var Se = (l) => {
				var d = it();
				v(l, d);
			},
			fe = (l) => {
				var d = fr(),
					u = er(d);
				Ne(
					u,
					17,
					() => n(b),
					sr,
					(C, M, V) => {
						var I = ct(),
							U = o(I);
						Ee(U);
						var R = c(U, 2),
							m = o(R);
						Ee(m);
						var N = c(m, 2);
						{
							var D = (L) => {
								var K = dt();
								K.__click = () => Q(V);
								var xe = o(K);
								{
									var q = (Y) => {
											rt(Y, { class: "size-4" });
										},
										Me = (Y) => {
											yr(Y, { class: "size-4" });
										};
									f(xe, (Y) => {
										n(S)[V] ? Y(q) : Y(Me, !1);
									});
								}
								s(K), w(() => Pe(K, "title", n(S)[V] ? "Hide value" : "Show value")), v(L, K);
							};
							f(N, (L) => {
								Gr(n(M).key) && L(D);
							});
						}
						s(R);
						var z = c(R, 2);
						z.__click = () => J(V);
						var A = o(z);
						or(A, { class: "size-4" }),
							s(z),
							s(I),
							w(() => Pe(m, "type", n(S)[V] ? "text" : "password")),
							He(
								U,
								() => n(M).key,
								(L) => (n(M).key = L)
							),
							He(
								m,
								() => n(M).value,
								(L) => (n(M).value = L)
							),
							v(C, I);
					}
				),
					v(l, d);
			};
		f(ce, (l) => {
			n(b).length === 0 ? l(Se) : l(fe, !1);
		});
	}
	var ae = c(ce, 2);
	ae.__click = [nt, b];
	var ve = o(ae);
	at(ve, { class: "size-4" }), Z(), s(ae), Z(2), s(te), s(X);
	var O = c(X, 2),
		he = o(O),
		Ce = o(he);
	ot(Ce, { class: "mt-0.5 size-4 flex-none text-amber-600 dark:text-yellow-300" }),
		Z(2),
		s(he),
		s(O);
	var ue = c(O, 2);
	{
		var Ae = (l) => {
			var d = vt(),
				u = o(d),
				C = o(u, !0);
			s(u), s(d), w(() => k(C, n($))), v(l, d);
		};
		f(ue, (l) => {
			n($) && l(Ae);
		});
	}
	var g = c(ue, 2),
		x = o(g);
	x.__click = function (...l) {
		var d;
		(d = r.oncancel) == null || d.apply(this, l);
	};
	var H = c(x, 2);
	H.__click = [lt, me, b, r, p, y];
	var T = o(H, !0);
	s(H),
		s(g),
		s(de),
		w(() => k(T, P())),
		He(
			E,
			() => n(p),
			(l) => _(p, l)
		),
		He(
			re,
			() => n(y),
			(l) => _(y, l)
		),
		v(e, de),
		Te();
}
Ke(["click"]);
var mt = G("<svg><!></svg>");
function Qe(e, r) {
	const t = le(r, ["children", "$$slots", "$$events", "$$legacy"]);
	var a = mt();
	ne(a, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var i = o(a);
	ie(i, () => '<path fill="currentColor" d="M17 15V5h-2v10H5v2h10v10h2V17h10v-2z"/>', !0),
		s(a),
		v(e, a);
}
var bt = G(
	'<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m3.5 11.75l8.172-8.171a2.828 2.828 0 1 1 4 4m0 0L9.5 13.75m6.172-6.171a2.828 2.828 0 0 1 4 4l-6.965 6.964a1 1 0 0 0 0 1.414L14 21.25"></path><path d="m17.5 9.75l-6.172 6.171a2.829 2.829 0 0 1-4-4L13.5 5.749"></path></g></svg>'
);
function ft(e, r) {
	let t = _e(r, "classNames", 3, "");
	var a = bt();
	w(() => ke(a, 0, rr(t()))), v(e, a);
}
async function ht(e, r, t) {
	if (!n(r)) {
		_(r, !0);
		try {
			await Ue();
			const a = t();
			await Promise.allSettled(a.map((i) => dr(i)));
		} finally {
			_(r, !1);
		}
	}
}
var xt = (e, r) => _(r, "add"),
	pt = h(
		'<div><h3 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300"> </h3> <div class="grid grid-cols-1 gap-3 md:grid-cols-2"></div></div>'
	),
	yt = (e, r) => _(r, "add"),
	_t = h(
		'<div class="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-8 dark:border-gray-700"><!> <p class="mb-1 text-sm font-medium text-gray-900 dark:text-gray-100">No custom servers yet</p> <p class="mb-4 text-xs text-gray-600 dark:text-gray-400">Add your own MCP servers with custom tools</p> <button class="flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"><!> Add Your First Server</button></div>'
	),
	kt = h('<div class="grid grid-cols-1 gap-3 md:grid-cols-2"></div>'),
	wt = h(
		'<div><div class="flex items-center gap-3"><div><!></div> <div><p class="text-sm font-semibold text-gray-900 dark:text-gray-100"> </p> <p class="text-xs text-gray-600 dark:text-gray-400"> </p></div></div> <div class="flex gap-2"><button class="btn gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"><!> </button> <button class="btn flex items-center gap-0.5 rounded-lg bg-blue-600 py-1.5 pl-2 pr-3 text-sm font-medium text-white hover:bg-blue-600"><!> Add Server</button></div></div> <div class="space-y-5"><!> <div><h3 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300"> </h3> <!></div> <div class="rounded-lg bg-gray-50 p-4 dark:bg-gray-700"><h4 class="mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">💡 Quick Tips</h4> <ul class="space-y-1 text-xs text-gray-600 dark:text-gray-400"><li>• Only connect to servers you trust</li> <li>• Enable servers to make their tools available in chat</li> <li>• Use the Health Check button to verify server connectivity</li> <li>• You can add HTTP headers for authentication when required</li></ul></div></div>',
		1
	),
	St = h(
		'<div class="p-6"><div class="mb-6"><h2 class="mb-1 text-xl font-semibold text-gray-900 dark:text-gray-200"><!></h2> <p class="text-sm text-gray-600 dark:text-gray-400"><!></p></div> <!></div>'
	);
function Jt(e, r) {
	Oe(r, !0);
	const [t, a] = hr(),
		i = () => je($e, "$allMcpServers", t),
		P = () => je(zr, "$enabledServersCount", t),
		p = () => je(we, "$selectedServerIds", t),
		y = tr();
	let b = oe("list"),
		S = oe(!1);
	const $ = j(() => i().filter((E) => E.type === "base")),
		J = j(() => i().filter((E) => E.type === "custom")),
		Q = j(P);
	function me(E) {
		Er(E), _(b, "list");
	}
	function de() {
		_(b, "list");
	}
	const ee = j(() => (n(b) === "list" ? "w-[800px]" : "w-[600px]"));
	pr(e, {
		get width() {
			return n(ee);
		},
		get onclose() {
			return r.onclose;
		},
		closeButton: !0,
		children: (E, be) => {
			var re = St(),
				X = o(re),
				te = o(X),
				ce = o(te);
			{
				var Se = (g) => {
						var x = Le("MCP Servers");
						v(g, x);
					},
					fe = (g) => {
						var x = Le("Add MCP server");
						v(g, x);
					};
				f(ce, (g) => {
					n(b) === "list" ? g(Se) : g(fe, !1);
				});
			}
			s(te);
			var ae = c(te, 2),
				ve = o(ae);
			{
				var O = (g) => {
						var x = Le();
						w(() =>
							k(x, `Manage MCP servers to extend ${y.PUBLIC_APP_NAME ?? ""} with external tools.`)
						),
							v(g, x);
					},
					he = (g) => {
						var x = Le();
						w(() => k(x, `Add a custom MCP server to ${y.PUBLIC_APP_NAME ?? ""}.`)), v(g, x);
					};
				f(ve, (g) => {
					n(b) === "list" ? g(O) : g(he, !1);
				});
			}
			s(ae), s(X);
			var Ce = c(X, 2);
			{
				var ue = (g) => {
						var x = wt(),
							H = er(x),
							T = o(H),
							l = o(T);
						let d;
						var u = o(l);
						ft(u, { classNames: "size-8 text-blue-600 dark:text-blue-500" }), s(l);
						var C = c(l, 2),
							M = o(C),
							V = o(M);
						s(M);
						var I = c(M, 2),
							U = o(I);
						s(I), s(C), s(T);
						var R = c(T, 2),
							m = o(R);
						m.__click = [ht, S, i];
						var N = o(m);
						const D = j(() => (n(S) ? "animate-spin" : ""));
						cr(N, {
							get class() {
								return `size-4 ${n(D) ?? ""}`;
							},
						});
						var z = c(N);
						s(m);
						var A = c(m, 2);
						A.__click = [xt, b];
						var L = o(A);
						Qe(L, { class: "size-4" }), Z(), s(A), s(R), s(H);
						var K = c(H, 2),
							xe = o(K);
						{
							var q = (B) => {
								var F = pt(),
									W = o(F),
									se = o(W);
								s(W);
								var pe = c(W, 2);
								Ne(
									pe,
									21,
									() => n($),
									(Fe) => Fe.id,
									(Fe, qe) => {
										const br = j(() => p().has(n(qe).id));
										Ge(Fe, {
											get server() {
												return n(qe);
											},
											get isSelected() {
												return n(br);
											},
										});
									}
								),
									s(pe),
									s(F),
									w(() => k(se, `Base Servers (${n($).length ?? ""})`)),
									v(B, F);
							};
							f(xe, (B) => {
								n($).length > 0 && B(q);
							});
						}
						var Me = c(xe, 2),
							Y = o(Me),
							vr = o(Y);
						s(Y);
						var ur = c(Y, 2);
						{
							var gr = (B) => {
									var F = _t(),
										W = o(F);
									nr(W, { class: "mb-3 size-12 text-gray-400" });
									var se = c(W, 6);
									se.__click = [yt, b];
									var pe = o(se);
									Qe(pe, { class: "size-4" }), Z(), s(se), s(F), v(B, F);
								},
								mr = (B) => {
									var F = kt();
									Ne(
										F,
										21,
										() => n(J),
										(W) => W.id,
										(W, se) => {
											const pe = j(() => p().has(n(se).id));
											Ge(W, {
												get server() {
													return n(se);
												},
												get isSelected() {
													return n(pe);
												},
											});
										}
									),
										s(F),
										v(B, F);
								};
							f(ur, (B) => {
								n(J).length === 0 ? B(gr) : B(mr, !1);
							});
						}
						s(Me),
							Z(2),
							s(K),
							w(
								(B) => {
									ke(
										H,
										1,
										`mb-6 flex justify-between rounded-lg p-4 max-sm:flex-col max-sm:gap-4 sm:items-center ${n(Q) ? "bg-blue-50 dark:bg-blue-900/10" : "bg-gray-100 dark:bg-white/5"}`
									),
										(d = ke(
											l,
											1,
											"flex size-10 items-center justify-center rounded-xl bg-blue-500/10",
											null,
											d,
											B
										)),
										k(
											V,
											`${i().length ?? ""}
							${i().length === 1 ? "server" : "servers"} configured`
										),
										k(U, `${n(Q) ?? ""} enabled`),
										(m.disabled = n(S)),
										k(z, ` ${n(S) ? "Refreshing…" : "Refresh"}`),
										k(vr, `Custom Servers (${n(J).length ?? ""})`);
								},
								[() => ({ grayscale: !n(Q) })]
							),
							v(g, x);
					},
					Ae = (g, x) => {
						{
							var H = (T) => {
								gt(T, { onsubmit: me, oncancel: de });
							};
							f(
								g,
								(T) => {
									n(b) === "add" && T(H);
								},
								x
							);
						}
					};
				f(Ce, (g) => {
					n(b) === "list" ? g(ue) : g(Ae, !1);
				});
			}
			s(re), v(E, re);
		},
		$$slots: { default: !0 },
	}),
		Te(),
		a();
}
Ke(["click"]);
function Ct() {
	const { subscribe: e, set: r } = De(!1);
	return { subscribe: e, open: () => r(!0), close: () => r(!1) };
}
const Xt = Ct();
var At = ((e) => (
		(e.Status = "status"),
		(e.Title = "title"),
		(e.Tool = "tool"),
		(e.Stream = "stream"),
		(e.File = "file"),
		(e.FinalAnswer = "finalAnswer"),
		(e.Reasoning = "reasoning"),
		(e.RouterMetadata = "routerMetadata"),
		e
	))(At || {}),
	Pt = ((e) => (
		(e.Started = "started"),
		(e.Error = "error"),
		(e.Finished = "finished"),
		(e.KeepAlive = "keepAlive"),
		e
	))(Pt || {}),
	$t = ((e) => ((e.Call = "call"), (e.Result = "result"), (e.Error = "error"), (e.ETA = "eta"), e))(
		$t || {}
	);
export {
	at as A,
	ft as I,
	Yt as L,
	At as M,
	Pt as a,
	Jt as b,
	zr as c,
	we as d,
	Mr as e,
	$e as f,
	Or as g,
	$t as h,
	Wt as r,
	Xt as s,
	Lr as t,
};
