import "./CWj6FrbW.js";
import { p as c, f as d, s as l, t as p, a as f } from "./C6vgWmgZ.js";
import { d as h } from "./18m15ENF.js";
import { f as m, a as g } from "./CGwGH024.js";
import { r as b, b as s } from "./3bvnQgV4.js";
import { b as u } from "./CYA4sdSw.js";
import { p as k } from "./_wu0PA6r.js";
function v(e, r) {
	(e.key === " " || e.key === "Enter") && (e.preventDefault(), r());
}
var y = m(
	'<input type="checkbox" class="peer pointer-events-none absolute opacity-0"/> <div aria-roledescription="switch" aria-label="switch" role="switch" tabindex="0" class="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full bg-gray-300 p-1 shadow-inner ring-gray-400 peer-checked:bg-blue-600 hover:bg-gray-400 peer-checked:hover:bg-blue-600 focus-visible:ring focus-visible:ring-offset-1 dark:bg-gray-600 dark:ring-gray-700 dark:hover:bg-gray-500 dark:peer-checked:hover:bg-blue-600 peer-checked:[&amp;>div]:translate-x-3.5"><div class="h-3.5 w-3.5 rounded-full bg-white shadow-sm transition-transform"></div></div>',
	1
);
function j(e, r) {
	c(r, !0);
	let a = k(r, "checked", 15);
	function o() {
		a(!a());
	}
	var n = y(),
		i = d(n);
	b(i);
	var t = l(i, 2);
	(t.__click = o),
		(t.__keydown = [v, o]),
		p(() => {
			s(i, "name", r.name), s(t, "aria-checked", a());
		}),
		u(i, a),
		g(e, n),
		f();
}
h(["click", "keydown"]);
export { j as S };
