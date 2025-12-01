let o = "system";
const i = new Set();
function d(e, t) {
	for (const n of i) n({ preference: e, isDark: t });
}
function k(e) {
	if ((i.add(e), typeof document < "u")) {
		const t = f(),
			n = document.documentElement.classList.contains("dark");
		e({ preference: t, isDark: n });
	} else e({ preference: "system", isDark: !1 });
	return () => {
		i.delete(e);
	};
}
function h(e) {
	const t = document.querySelector('meta[name="theme-color"]');
	t && t.setAttribute("content", e ? "rgb(26, 36, 50)" : "rgb(249, 250, 251)");
}
function u(e) {
	const { classList: t } = document.querySelector("html");
	e ? t.add("dark") : t.remove("dark"), h(e), d(o, e);
}
function f() {
	const e = typeof localStorage < "u" ? localStorage.getItem("theme") : null;
	return e === "light" || e === "dark" || e === "system"
		? ((o = e), e)
		: ((o = "system"), "system");
}
function y(e) {
	try {
		localStorage.theme = e;
	} catch {}
	const t = window.matchMedia("(prefers-color-scheme: dark)");
	o = e;
	const n = () => u(e === "dark" || (e === "system" && t.matches));
	n();
	const r = () => n(),
		c = "__theme_mql_listener",
		a = window,
		m = a[c];
	if (m) {
		try {
			t.removeEventListener("change", m);
		} catch {
			const s = t.removeListener;
			s == null || s(m);
		}
		a[c] = void 0;
	}
	if (e === "system") {
		try {
			t.addEventListener("change", r);
		} catch {
			const s = t.addListener;
			s == null || s(r);
		}
		a[c] = r;
	}
}
function g() {
	const n = document.querySelector("html").classList.contains("dark") ? "light" : "dark";
	y(n);
}
export { k as a, g as b, f as g, y as s };
