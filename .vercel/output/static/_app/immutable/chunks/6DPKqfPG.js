import {
	t as u,
	j as n,
	k as l,
	J as g,
	K as p,
	q as h,
	L as y,
	M as w,
	N as R,
	O as b,
	P as f,
} from "./C6vgWmgZ.js";
import { d as m, e as O } from "./CGwGH024.js";
function $(c, v, i = !1, o = !1, k = !1) {
	var _ = c,
		t = "";
	u(() => {
		var r = g;
		if (t === (t = v() ?? "")) {
			n && l();
			return;
		}
		if (
			(r.nodes_start !== null &&
				(p(r.nodes_start, r.nodes_end), (r.nodes_start = r.nodes_end = null)),
			t !== "")
		) {
			if (n) {
				h.data;
				for (var e = l(), d = e; e !== null && (e.nodeType !== 8 || e.data !== ""); )
					(d = e), (e = y(e));
				if (e === null) throw (w(), R);
				m(h, d), (_ = b(e));
				return;
			}
			var s = t + "";
			i ? (s = `<svg>${s}</svg>`) : o && (s = `<math>${s}</math>`);
			var a = O(s);
			if (((i || o) && (a = f(a)), m(f(a), a.lastChild), i || o)) for (; f(a); ) _.before(f(a));
			else _.before(a);
		}
	});
}
export { $ as h };
