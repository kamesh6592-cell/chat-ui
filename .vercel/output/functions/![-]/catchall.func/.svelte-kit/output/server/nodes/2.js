export const index = 2;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import("../entries/pages/settings/_layout.svelte.js")).default);
export const imports = [
	"_app/immutable/nodes/2.DlfDHXe4.js",
	"_app/immutable/chunks/CWj6FrbW.js",
	"_app/immutable/chunks/C6vgWmgZ.js",
	"_app/immutable/chunks/DIeogL5L.js",
	"_app/immutable/chunks/CGwGH024.js",
	"_app/immutable/chunks/CnTZH1bt.js",
	"_app/immutable/chunks/18m15ENF.js",
	"_app/immutable/chunks/_wu0PA6r.js",
	"_app/immutable/chunks/CSa6KPDp.js",
	"_app/immutable/chunks/3bvnQgV4.js",
	"_app/immutable/chunks/zLvdPMOW.js",
	"_app/immutable/chunks/69_IOA4Y.js",
	"_app/immutable/chunks/6DPKqfPG.js",
	"_app/immutable/chunks/CDRdzyOh.js",
	"_app/immutable/chunks/OwagsJha.js",
];
export const stylesheets = [];
export const fonts = [];
