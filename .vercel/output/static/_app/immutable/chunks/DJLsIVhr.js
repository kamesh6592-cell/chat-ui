import { w as t } from "./CSa6KPDp.js";
import { d as r } from "./C6vgWmgZ.js";
const d = t(!1),
	c = t(null),
	o = r([]);
function f(n) {
	const i = o.findIndex(({ id: e }) => e === n.id);
	if (i === -1) {
		o.push(n);
		return;
	}
	o[i] = n;
}
function u(n) {
	const i = o.findIndex((e) => e.id === n);
	i !== -1 && o.splice(i, 1);
}
export { f as a, o as b, d as i, u as r, c as t };
