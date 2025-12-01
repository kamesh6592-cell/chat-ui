export const index = 8;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import("../entries/pages/privacy/_page.svelte.js")).default);
export const imports = [
	"_app/immutable/nodes/8.DsJ-gGFm.js",
	"_app/immutable/chunks/CWj6FrbW.js",
	"_app/immutable/chunks/69_IOA4Y.js",
	"_app/immutable/chunks/DIeogL5L.js",
	"_app/immutable/chunks/C6vgWmgZ.js",
	"_app/immutable/chunks/CGwGH024.js",
	"_app/immutable/chunks/6DPKqfPG.js",
	"_app/immutable/chunks/DKAXoy2a.js",
	"_app/immutable/chunks/BMNPVVsa.js",
];
export const stylesheets = [];
export const fonts = [];
