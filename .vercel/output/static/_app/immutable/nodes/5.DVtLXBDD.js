import { u as Pe, h as Fe } from "../chunks/CVHkYvGM.js";
import { U as Re, u as He } from "../chunks/3bvnQgV4.js";
import { r as Oe } from "../chunks/svoSlOfU.js";
import "../chunks/CWj6FrbW.js";
import { o as Ge, f as We, b as ce, h as Ve } from "../chunks/CSa6KPDp.js";
import {
	s as te,
	c as fe,
	r as ge,
	p as je,
	b as R,
	d as J,
	B as G,
	f as qe,
	a as Be,
	t as ze,
	e as U,
	g as n,
	u as W,
	aT as Ke,
	$ as Le,
} from "../chunks/C6vgWmgZ.js";
import { d as Ne, e as Ye, h as Ze, i as Je } from "../chunks/18m15ENF.js";
import { f as we, a as ve } from "../chunks/CGwGH024.js";
import { p as Qe, s as Xe, a as H, b as i } from "../chunks/_wu0PA6r.js";
import { C as et, p as ue, b as tt, c as st, u as at, f as rt } from "../chunks/DJxNqzGf.js";
import { a as me, r as nt, i as O, t as ot } from "../chunks/DJLsIVhr.js";
import { p as w } from "../chunks/lmEnKYxK.js";
import { e as $, E as pe } from "../chunks/BJid9-HC.js";
import { M as x, a as Q, r as it, e as lt } from "../chunks/Djt0-lxN.js";
import { b as he } from "../chunks/C6o0iJkr.js";
import { M as dt } from "../chunks/zLvdPMOW.js";
import { l as A } from "../chunks/BLeiJgKp.js";
const ct = async ({ params: s, depends: r, fetch: l, url: o }) => {
		r(Re.Conversation);
		const y = Pe({ fetch: l, origin: o.origin });
		try {
			return await y
				.conversations({ id: s.id })
				.get({ query: { fromShare: o.searchParams.get("fromShare") ?? void 0 } })
				.then(Fe);
		} catch {
			Oe(302, "/");
		}
	},
	Ft = Object.freeze(
		Object.defineProperty({ __proto__: null, load: ct }, Symbol.toStringTag, { value: "Module" })
	);
var m = [];
for (var X = 0; X < 256; ++X) m.push((X + 256).toString(16).slice(1));
function ft(s, r = 0) {
	return (
		m[s[r + 0]] +
		m[s[r + 1]] +
		m[s[r + 2]] +
		m[s[r + 3]] +
		"-" +
		m[s[r + 4]] +
		m[s[r + 5]] +
		"-" +
		m[s[r + 6]] +
		m[s[r + 7]] +
		"-" +
		m[s[r + 8]] +
		m[s[r + 9]] +
		"-" +
		m[s[r + 10]] +
		m[s[r + 11]] +
		m[s[r + 12]] +
		m[s[r + 13]] +
		m[s[r + 14]] +
		m[s[r + 15]]
	).toLowerCase();
}
var V,
	gt = new Uint8Array(16);
function ut() {
	if (
		!V &&
		((V = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)), !V)
	)
		throw new Error(
			"crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
		);
	return V(gt);
}
var mt = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const ye = { randomUUID: mt };
function se(s, r, l) {
	if (ye.randomUUID && !s) return ye.randomUUID();
	s = s || {};
	var o = s.random || (s.rng || ut)();
	return (o[6] = (o[6] & 15) | 64), (o[8] = (o[8] & 63) | 128), ft(o);
}
function ee(s, r, l) {
	var M;
	if (s.messages.length === 0) {
		const p = se();
		return (s.rootMessageId = p), s.messages.push({ ...r, ancestors: [], id: p }), p;
	}
	if (!l) throw new Error("You need to specify a parentId if this is not the first message");
	const o = se();
	if (!s.rootMessageId) {
		if (l && l !== s.messages[s.messages.length - 1].id)
			throw new Error("This is a legacy conversation, you can only append to the last message");
		return s.messages.push({ ...r, id: o }), o;
	}
	const y = [
		...(((M = s.messages.find((p) => p.id === l)) == null ? void 0 : M.ancestors) ?? []),
		l,
	];
	s.messages.push({ ...r, ancestors: y, id: o, children: [] });
	const k = s.messages.find((p) => p.id === l);
	return k && (k.children ? k.children.push(o) : (k.children = [o])), o;
}
function be(s, r, l) {
	var p;
	if (s.messages.length === 0) throw new Error("Cannot add a sibling to an empty conversation");
	if (!s.rootMessageId) throw new Error("Cannot add a sibling to a legacy conversation");
	const o = s.messages.find((_) => _.id === l);
	if (!o) throw new Error("The sibling message doesn't exist");
	if (!o.ancestors || ((p = o.ancestors) == null ? void 0 : p.length) === 0)
		throw new Error("The sibling message is the root message, therefore we can't add a sibling");
	const y = se();
	s.messages.push({ ...r, id: y, ancestors: o.ancestors, children: [] });
	const k = o.ancestors[o.ancestors.length - 1],
		M = s.messages.find((_) => _.id === k);
	return M && (M.children ? M.children.push(y) : (M.children = [y])), y;
}
var pt =
	we(`<div class="flex w-full flex-col gap-8 bg-white bg-gradient-to-b to-transparent px-6 pb-7 dark:bg-black dark:from-white/10 dark:to-white/5"><div class="-mx-6 grid h-48 select-none place-items-center bg-gradient-to-t from-black/5 dark:from-white/10"><div class="flex flex-col items-center justify-center gap-2.5 px-8 text-center"><div class="flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-500/15 from-15% via-green-500/15 to-yellow-500/15 text-3xl"><svg width="1em" height="1em" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.48 1.26001C6.48 2.81001 7.15 3.84001 7.98 4.50001C8.84 5.18001 9.88 5.50001 10.56 5.57001V6.43001C9.6233 6.5513 8.73602 6.92071 7.99 7.50001C7.50131 7.88332 7.10989 8.37647 6.84753 8.93943C6.58516 9.50238 6.45925 10.1193 6.48 10.74H5.52C5.52 9.19001 4.85 8.16001 4.02 7.50001C3.27114 6.91907 2.3802 6.54958 1.44 6.43001V5.57001C2.37671 5.44872 3.26398 5.07931 4.01 4.50001C4.4987 4.1167 4.89011 3.62355 5.15248 3.06059C5.41484 2.49764 5.54076 1.88075 5.52 1.26001H6.48Z" fill="url(#paint0_linear_141_2)"></path><defs><linearGradient id="paint0_linear_141_2" x1="3.37" y1="3.43001" x2="8.14" y2="8.90001" gradientUnits="userSpaceOnUse"><stop stop-color="#FF0789"></stop><stop offset="0.63" stop-color="#21DE75"></stop><stop offset="1" stop-color="#FF8D00"></stop></linearGradient></defs></svg></div> <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">Upgrade Required</h2></div></div> <div class="text-gray-700 dark:text-gray-200"><p class="text-[15px] leading-relaxed">You've reached your message limit. Upgrade to Hugging Face PRO to continue using
				HuggingChat.</p> <p class="mt-3 text-[15px] italic leading-relaxed opacity-75">It's also possible to use your PRO credits in your favorite AI tools.</p></div> <div class="flex flex-col gap-2.5"><a href="https://huggingface.co/subscribe/pro?from=HuggingChat" target="_blank" rel="noopener noreferrer" class="w-full rounded-xl bg-black px-5 py-2.5 text-center text-base font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">Upgrade to Pro</a> <button class="w-full rounded-xl bg-gray-200 px-5 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-300/80 dark:bg-white/5 dark:text-gray-200 dark:hover:bg-white/10">Maybe later</button></div></div>`);
function ht(s, r) {
	dt(s, {
		closeOnBackdrop: !1,
		get onclose() {
			return r.close;
		},
		width: "!max-w-[420px] !m-4",
		children: (l, o) => {
			var y = pt(),
				k = te(fe(y), 4),
				M = te(fe(k), 2);
			(M.__click = function (...p) {
				var _;
				(_ = r.close) == null || _.apply(this, p);
			}),
				ge(k),
				ge(y),
				ve(l, y);
		},
		$$slots: { default: !0 },
	});
}
Ne(["click"]);
var yt = we("<!> <!>", 1);
function Rt(s, r) {
	je(r, !0);
	const [l, o] = Xe(),
		y = () => H(O, "$isAborted", l),
		k = () => H(A, "$loading", l),
		M = () => H(lt, "$enabledServers", l),
		p = () => H(ke, "$settings", l),
		_ = () => H(ue, "$pendingMessage", l);
	let d = Qe(r, "data", 15),
		P = R(!1),
		ae = !0,
		j = R(!1),
		F = R(J([])),
		q = R(J(d().conversations));
	G(() => {
		U(q, d().conversations, !0);
	});
	function B(t, a) {
		ae &&
			(!a &&
				w.url.searchParams.get("leafId") &&
				((a = w.url.searchParams.get("leafId")), w.url.searchParams.delete("leafId")),
			!a && he && localStorage.getItem("leafId") && (a = localStorage.getItem("leafId")),
			(ae = !1));
		const g = t.find((u) => u.id === a) ?? t.at(-1);
		if (!g) return [];
		const { ancestors: b } = g,
			v = [];
		if (b != null && b.length)
			for (const u of b) {
				const S = t.find((f) => f.id === u);
				S && v.push(S);
			}
		v.push(g);
		let c = g.children;
		for (; c != null && c.length; ) {
			let u = c.at(-1);
			const S = t.find((f) => f.id === u);
			S && v.push(S), (c = S == null ? void 0 : S.children);
		}
		return v;
	}
	function xe(t) {
		var g;
		const a = [];
		for (const b of t) (g = b.children) != null && g.length && a.push(b.children);
		return a;
	}
	async function z({
		prompt: t,
		messageId: a = ((b) => ((b = n(T).at(-1)) == null ? void 0 : b.id))() ?? void 0,
		isRetry: g = !1,
	}) {
		var v;
		try {
			i(O, !1), i(A, !0), U(P, !0);
			const c = await Promise.all(
				(n(F) ?? []).map((e) =>
					tt(e).then((D) => ({ type: "base64", value: D, mime: e.type, name: e.name }))
				)
			);
			let u;
			if (g && a) {
				const e = n(h).find((D) => D.id === a);
				if ((e || i($, "Message not found"), (e == null ? void 0 : e.from) === "user" && t)) {
					const D = be(
						{ messages: n(h), rootMessageId: d().rootMessageId },
						{ from: "user", content: t, files: e.files },
						a
					);
					u = ee(
						{ messages: n(h), rootMessageId: d().rootMessageId },
						{ from: "assistant", content: "" },
						D
					);
				} else
					(e == null ? void 0 : e.from) === "assistant" &&
						(u = be(
							{ messages: n(h), rootMessageId: d().rootMessageId },
							{ from: "assistant", content: "" },
							a
						));
			} else {
				const e = ee(
					{ messages: n(h), rootMessageId: d().rootMessageId },
					{ from: "user", content: t ?? "", files: c },
					a
				);
				d().rootMessageId || d((d().rootMessageId = e), !0),
					(u = ee(
						{ messages: n(h), rootMessageId: d().rootMessageId },
						{ from: "assistant", content: "" },
						e
					));
			}
			const S = n(h).find((e) => e.id === a),
				f = n(h).find((e) => e.id === u);
			if (!f) throw new Error("Message to write to not found");
			const le = new AbortController(),
				de = await st(
					w.params.id,
					{
						base: ce,
						inputs: t,
						messageId: a,
						isRetry: g,
						files: g ? (S == null ? void 0 : S.files) : c,
						selectedMcpServerNames: M().map((e) => e.name),
						selectedMcpServers: M().map((e) => ({ name: e.name, url: e.url, headers: e.headers })),
					},
					le.signal
				).catch((e) => {
					$.set(e.message);
				});
			if (de === void 0) return;
			U(F, [], !0);
			let E = "",
				K = new Date();
			for await (const e of de) {
				if (y()) {
					le.abort();
					return;
				}
				e.type === x.Stream && (e.token = e.token.replaceAll("\0", "")),
					e.type === x.Stream ||
						(e.type === x.Status && e.status === Q.KeepAlive) ||
						(f.updates = [...(f.updates ?? []), e]);
				const L = new Date();
				if (
					(e.type !== x.Stream &&
						!p().disableStream &&
						E.length > 0 &&
						((f.content += E), (E = ""), (K = L)),
					e.type === x.Stream && !p().disableStream)
				)
					(E += e.token),
						L.getTime() - K.getTime() > at.maxUpdateTime && ((f.content += E), (E = ""), (K = L)),
						U(P, !1);
				else if (e.type === x.FinalAnswer)
					if (((v = f.updates) == null ? void 0 : v.some((I) => I.type === x.Tool)) ?? !1) {
						const I = f.content,
							C = e.text ?? "",
							Y = I.replace(/\s+$/, ""),
							Z = C.replace(/^\s+/, ""),
							Ee = C && (I.endsWith(C) || (Z.length > 0 && Y.endsWith(Z)));
						if (I && I.length > 0)
							if (Ee) f.content = I;
							else if (C && (C.startsWith(I) || (Y.length > 0 && Z.startsWith(Y)))) f.content = C;
							else {
								const De = !/\n\n$/.test(I) && !/^\n/.test(C ?? "");
								f.content =
									I +
									(De
										? `

`
										: "") +
									C;
							}
						else f.content = C;
					} else f.content = e.text ?? "";
				else if (e.type === x.Status && e.status === Q.Error)
					e.statusCode === 402 ? U(j, !0) : i($, e.message ?? "An error has occurred");
				else if (e.type === x.Title) {
					const N = n(q).find(({ id: I }) => I === w.params.id);
					N && ((N.title = e.title), i(ot, { title: e.title, convId: w.params.id }));
				} else
					e.type === x.File
						? (f.files = [
								...(f.files ?? []),
								{ type: "hash", value: e.sha, mime: e.mime, name: e.name },
							])
						: e.type === x.RouterMetadata &&
							(f.routerMetadata = { route: e.route, model: e.model });
			}
		} catch (c) {
			c instanceof Error && c.message.includes("overloaded")
				? i($, "Too much traffic, please try again.")
				: c instanceof Error && c.message.includes("429")
					? i($, pe.rateLimited)
					: c instanceof Error
						? i($, c.message)
						: i($, pe.default),
				console.error(c);
		} finally {
			i(A, !1), U(P, !1), await Ve();
		}
	}
	async function re() {
		await fetch(`${ce}/conversation/${w.params.id}/stop-generating`, { method: "POST" }).then(
			(t) => {
				t.ok
					? setTimeout(() => {
							i(O, !0), i(A, !1);
						}, 500)
					: (i(O, !0), i(A, !1));
			}
		);
	}
	function Me(t) {
		t.key === "Escape" && A && (t.preventDefault(), re());
	}
	Ge(async () => {
		_() && (U(F, _().files, !0), await z({ prompt: _().content }), i(ue, void 0)),
			ne(n(h)) && (me({ id: w.params.id, startedAt: Date.now() }), i(A, !0));
	});
	async function Se(t) {
		await z({ prompt: t });
	}
	async function Ie(t) {
		if (it()) return;
		const a = t.id;
		U(T, B(n(h), a), !0), await z({ prompt: t.content, messageId: t.id, isRetry: !0 });
	}
	async function Ue(t) {
		const a = t.id;
		U(T, B(n(h), a), !0);
	}
	const ke = He();
	let h = R(J(d().messages));
	G(() => {
		U(h, d().messages, !0);
	});
	function ne(t) {
		var v, c;
		const a = [...t].reverse().find((u) => u.from === "assistant");
		if (!a) return !1;
		const g = ((v = a.updates) == null ? void 0 : v.some((u) => u.type === x.FinalAnswer)) ?? !1,
			b =
				((c = a.updates) == null
					? void 0
					: c.some((u) => u.type === x.Status && u.status === Q.Error)) ?? !1;
		return !g && !b;
	}
	G(() => {
		const t = ne(n(h));
		t ? i(A, !0) : n(P) || i(A, !1), !t && he && nt(w.params.id);
	});
	let T = W(() => B(n(h))),
		Ae = W(() => xe(n(h)));
	G(() => {
		var t, a;
		(t = n(T).at(-1)) != null &&
			t.id &&
			localStorage.setItem("leafId", (a = n(T).at(-1)) == null ? void 0 : a.id);
	}),
		We((t) => {
			var g, b, v;
			if (!w.params.id) return;
			const a =
				((g = t.to) == null ? void 0 : g.route.id) !== w.route.id ||
				((v = (b = t.to) == null ? void 0 : b.params) == null ? void 0 : v.id) !== w.params.id;
			A && a && me({ id: w.params.id, startedAt: Date.now() }), i(O, !0), i(A, !1);
		});
	let _e = W(() => {
		var a;
		const t =
			((a = n(q).find((g) => g.id === w.params.id)) == null ? void 0 : a.title) ?? d().title;
		return t && t.charAt(0).toUpperCase() + t.slice(1);
	});
	var oe = yt();
	Ye("keydown", Ke, Me),
		Ze((t) => {
			ze(() => (Le.title = n(_e)));
		});
	var ie = qe(oe);
	const Ce = W(() => rt(d().models, d().oldModels, d().model));
	et(ie, {
		get loading() {
			return k();
		},
		get pending() {
			return n(P);
		},
		get messages() {
			return n(T);
		},
		get messagesAlternatives() {
			return n(Ae);
		},
		get shared() {
			return d().shared;
		},
		get preprompt() {
			return d().preprompt;
		},
		onmessage: Se,
		onretry: Ie,
		onshowAlternateMsg: Ue,
		onstop: re,
		get models() {
			return d().models;
		},
		get currentModel() {
			return n(Ce);
		},
		get files() {
			return n(F);
		},
		set files(t) {
			U(F, t, !0);
		},
	});
	var $e = te(ie, 2);
	{
		var Te = (t) => {
			ht(t, { close: () => U(j, !1) });
		};
		Je($e, (t) => {
			n(j) && t(Te);
		});
	}
	ve(s, oe), Be(), o();
}
export { Rt as component, Ft as universal };
