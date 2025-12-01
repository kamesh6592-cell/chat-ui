import { b as d, o as A, g as I, r as $ } from "../chunks/CSa6KPDp.js";
import "../chunks/CWj6FrbW.js";
import {
	p as L,
	b as y,
	d as O,
	a as x,
	f as j,
	s as v,
	t as k,
	e as n,
	g as i,
	u as F,
	i as C,
	h as N,
} from "../chunks/C6vgWmgZ.js";
import { h as T } from "../chunks/18m15ENF.js";
import { f as q, a as B } from "../chunks/CGwGH024.js";
import { u as z, b as u } from "../chunks/3bvnQgV4.js";
import { s as G, a as J } from "../chunks/_wu0PA6r.js";
import { p as r } from "../chunks/lmEnKYxK.js";
import { u as Q } from "../chunks/Da9RVyMh.js";
import { C as W, p as D, f as H } from "../chunks/DJxNqzGf.js";
import { e as P, E as K } from "../chunks/BJid9-HC.js";
import { l as V, s as M } from "../chunks/DLFdkLJk.js";
async function X({ params: m, parent: o, fetch: f }) {
	return (
		await f(`${d}/api/v2/models/${m.model}/subscribe`, { method: "POST" }),
		{ settings: await o().then((g) => ({ ...g.settings, activeModel: m.model })) }
	);
}
const pe = Object.freeze(
	Object.defineProperty({ __proto__: null, load: X }, Symbol.toStringTag, { value: "Module" })
);
var Y = q(
	'<meta property="og:title"/> <meta property="og:type" content="link"/> <meta property="og:description"/> <meta property="og:image"/> <meta property="og:url"/> <meta name="twitter:card" content="summary_large_image"/>',
	1
);
function ue(m, o) {
	L(o, !0);
	const [f, g] = G(),
		U = () => J(b, "$settings", f);
	let h = y(!1),
		c = y(O([])),
		p = y("");
	const b = z(),
		s = r.params.model,
		_ = Q();
	async function w(t) {
		try {
			n(h, !0);
			const a = await fetch(`${d}/conversation`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ model: s, preprompt: U().customPrompts[s] }),
			});
			if (!a.ok) {
				P.set("Error while creating conversation, try again."),
					console.error("Error while creating conversation: " + (await a.text()));
				return;
			}
			const { conversationId: e } = await a.json();
			D.set({ content: t, files: i(c) }), await I(`${d}/conversation/${e}`, { invalidateAll: !0 });
		} catch (a) {
			P.set(K.default), console.error(a);
		} finally {
			n(h, !1);
		}
	}
	A(async () => {
		try {
			if (r.url.searchParams.has("attachments")) {
				const e = await V(r.url.searchParams);
				n(c, e.files, !0),
					e.errors.length > 0 &&
						(console.error("Failed to load some attachments:", e.errors),
						P.set(`Failed to load ${e.errors.length} attachment(s). Check console for details.`));
				const l = new URL(r.url);
				l.searchParams.delete("attachments"), history.replaceState({}, "", l);
			}
			const t = M(r.url.searchParams.get("q"));
			if (t) {
				w(t);
				const e = new URL(r.url);
				e.searchParams.delete("q"),
					C().then(() => {
						$(e, r.state);
					});
				return;
			}
			const a = M(r.url.searchParams.get("prompt"));
			if (a && !i(p)) {
				n(p, a, !0);
				const e = new URL(r.url);
				e.searchParams.delete("prompt"),
					C().then(() => {
						$(e, r.state);
					});
			}
		} catch (t) {
			console.error("Failed to process URL parameters:", t);
		}
		b.instantSet({ activeModel: s });
	}),
		T((t) => {
			var a = Y(),
				e = j(a),
				l = v(e, 4),
				S = v(l, 2),
				R = v(S, 2);
			N(2),
				k(() => {
					u(e, "content", s + " - " + _.PUBLIC_APP_NAME),
						u(l, "content", `Use ${s} with ${_.PUBLIC_APP_NAME}`),
						u(
							S,
							"content",
							`${(_.PUBLIC_ORIGIN || r.url.origin) ?? ""}${d ?? ""}/models/${s ?? ""}/thumbnail.png`
						),
						u(R, "content", r.url.href);
				}),
				B(t, a);
		});
	const E = F(() => H(o.data.models, o.data.oldModels, s));
	W(m, {
		onmessage: (t) => w(t),
		get loading() {
			return i(h);
		},
		get currentModel() {
			return i(E);
		},
		get models() {
			return o.data.models;
		},
		get files() {
			return i(c);
		},
		set files(t) {
			n(c, t, !0);
		},
		get draft() {
			return i(p);
		},
		set draft(t) {
			n(p, t, !0);
		},
	}),
		x(),
		g();
}
export { ue as component, pe as universal };
