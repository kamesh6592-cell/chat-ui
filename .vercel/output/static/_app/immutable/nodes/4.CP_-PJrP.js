import "../chunks/CWj6FrbW.js";
import { o as q, r as v, b as y, g as B } from "../chunks/CSa6KPDp.js";
import {
	p as T,
	b as M,
	d as $,
	f as z,
	a as G,
	t as H,
	e as m,
	i as P,
	g as n,
	$ as J,
	u as _,
} from "../chunks/C6vgWmgZ.js";
import { h as Q, i as W } from "../chunks/18m15ENF.js";
import { c as D, a as b, f as K } from "../chunks/CGwGH024.js";
import { s as V, b as w, a as x } from "../chunks/_wu0PA6r.js";
import { p as r } from "../chunks/lmEnKYxK.js";
import { u as X } from "../chunks/Da9RVyMh.js";
import { p as Y, C as Z, f as ee } from "../chunks/DJxNqzGf.js";
import { e as u, E as S } from "../chunks/BJid9-HC.js";
import { u as te } from "../chunks/3bvnQgV4.js";
import { l as ae, s as C } from "../chunks/DLFdkLJk.js";
import { l as f } from "../chunks/BLeiJgKp.js";
var re = K(
	'<div class="mx-auto my-20 max-w-xl rounded-xl border p-6 text-center dark:border-gray-700"><h2 class="mb-2 text-xl font-semibold">No models available</h2> <p class="text-gray-600 dark:text-gray-300">No chat models are configured. Set `OPENAI_BASE_URL` and ensure the server can reach the\n			endpoint, then reload. If unset, the app defaults to the Hugging Face router.</p></div>'
);
function ve(E, s) {
	T(s, !0);
	const [g, R] = V(),
		U = () => x(f, "$loading", g),
		l = () => x(L, "$settings", g),
		A = X();
	let k = _(() => {
			var e;
			return !!((e = s.data.models) != null && e.length);
		}),
		i = M($([])),
		c = M("");
	const L = te();
	async function h(e) {
		try {
			w(f, !0);
			const t = s.data.models.map((d) => d.id);
			let a;
			t.includes(l().activeModel) ? (a = l().activeModel) : (a = s.data.models[0].id);
			const o = await fetch(`${y}/conversation`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ model: a, preprompt: l().customPrompts[l().activeModel] }),
			});
			if (!o.ok) {
				const d = (await o.json()).message || S.default;
				u.set(d), console.error("Error while creating conversation: ", d);
				return;
			}
			const { conversationId: j } = await o.json();
			Y.set({ content: e, files: n(i) }), await B(`${y}/conversation/${j}`, { invalidateAll: !0 });
		} catch (t) {
			u.set(t.message || S.default), console.error(t);
		} finally {
			w(f, !1);
		}
	}
	q(async () => {
		try {
			if (r.url.searchParams.has("attachments")) {
				const a = await ae(r.url.searchParams);
				m(i, a.files, !0),
					a.errors.length > 0 &&
						(console.error("Failed to load some attachments:", a.errors),
						u.set(`Failed to load ${a.errors.length} attachment(s). Check console for details.`));
				const o = new URL(r.url);
				o.searchParams.delete("attachments"), history.replaceState({}, "", o);
			}
			const e = C(r.url.searchParams.get("q"));
			if (e) {
				h(e);
				const a = new URL(r.url);
				a.searchParams.delete("q"),
					P().then(() => {
						v(a, r.state);
					});
				return;
			}
			const t = C(r.url.searchParams.get("prompt"));
			if (t && !n(c)) {
				m(c, t, !0);
				const a = new URL(r.url);
				a.searchParams.delete("prompt"),
					P().then(() => {
						v(a, r.state);
					});
			}
		} catch (e) {
			console.error("Failed to process URL parameters:", e);
		}
	});
	let F = _(() => ee(s.data.models, s.data.oldModels, l().activeModel));
	var p = D();
	Q((e) => {
		H(() => (J.title = A.PUBLIC_APP_NAME));
	});
	var N = z(p);
	{
		var I = (e) => {
				Z(e, {
					onmessage: (t) => h(t),
					get loading() {
						return U();
					},
					get currentModel() {
						return n(F);
					},
					get models() {
						return s.data.models;
					},
					get files() {
						return n(i);
					},
					set files(t) {
						m(i, t, !0);
					},
					get draft() {
						return n(c);
					},
					set draft(t) {
						m(c, t, !0);
					},
				});
			},
			O = (e) => {
				var t = re();
				b(e, t);
			};
		W(N, (e) => {
			n(k) ? e(I) : e(O, !1);
		});
	}
	b(E, p), G(), R();
}
export { ve as component };
