import "../chunks/CWj6FrbW.js";
import "../chunks/69_IOA4Y.js";
import { p as k, t as g, a as w, s as p, c as a, r as e, f as j } from "../chunks/C6vgWmgZ.js";
import { i as I, s as d } from "../chunks/18m15ENF.js";
import { f as v, a as l } from "../chunks/CGwGH024.js";
import { i as q } from "../chunks/DKAXoy2a.js";
import { p as s } from "../chunks/lmEnKYxK.js";
var z = v(
		'<div class="-mx-8 my-2 h-px bg-gray-200 dark:bg-gray-700"></div> <pre class="max-w-sm whitespace-pre-wrap text-left font-mono text-xs"> </pre>',
		1
	),
	A = v(
		'<div class="flex items-center justify-center bg-gradient-to-t from-gray-200 text-gray-800 dark:from-gray-700 dark:text-gray-300"><div class="align-center -mt-24 flex flex-col justify-center rounded-xl border bg-white px-8 pb-2 pt-4 text-center dark:border-gray-700 dark:bg-gray-800"><h1 class="mb-2 text-5xl font-semibold"> </h1> <div class="-mx-8 my-2 h-px bg-gray-200 dark:bg-gray-700"></div> <h2 class="max-w-sm text-lg"> </h2> <!></div></div>'
	);
function J(c, n) {
	k(n, !1), q();
	var o = A(),
		f = a(o),
		i = a(f),
		b = a(i, !0);
	e(i);
	var m = p(i, 4),
		h = a(m, !0);
	e(m);
	var y = p(m, 2);
	{
		var _ = (r) => {
			var t = z(),
				x = p(j(t), 2),
				u = a(x, !0);
			e(x), g(() => d(u, s.error.errorId)), l(r, t);
		};
		I(y, (r) => {
			var t;
			(t = s.error) != null && t.errorId && r(_);
		});
	}
	e(f),
		e(o),
		g(() => {
			var r;
			d(b, s.status), d(h, (r = s.error) == null ? void 0 : r.message);
		}),
		l(c, o),
		w();
}
export { J as component };
