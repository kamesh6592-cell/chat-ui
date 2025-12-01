export const index = 6;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import("../entries/pages/models/_page.svelte.js")).default);
export const imports = [
	"_app/immutable/nodes/6.CY-ZSFS5.js",
	"_app/immutable/chunks/CWj6FrbW.js",
	"_app/immutable/chunks/C6vgWmgZ.js",
	"_app/immutable/chunks/DIeogL5L.js",
	"_app/immutable/chunks/18m15ENF.js",
	"_app/immutable/chunks/CGwGH024.js",
	"_app/immutable/chunks/CYA4sdSw.js",
	"_app/immutable/chunks/3bvnQgV4.js",
	"_app/immutable/chunks/CSa6KPDp.js",
	"_app/immutable/chunks/_wu0PA6r.js",
	"_app/immutable/chunks/Da9RVyMh.js",
	"_app/immutable/chunks/lmEnKYxK.js",
	"_app/immutable/chunks/69_IOA4Y.js",
	"_app/immutable/chunks/6DPKqfPG.js",
	"_app/immutable/chunks/Cbtu-SQV.js",
	"_app/immutable/chunks/DgLqPQQO.js",
];
export const stylesheets = ["_app/immutable/assets/6.10FG8IHD.css"];
export const fonts = [];
