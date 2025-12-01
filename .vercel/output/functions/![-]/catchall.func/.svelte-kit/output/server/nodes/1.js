export const index = 1;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import("../entries/pages/_error.svelte.js")).default);
export const imports = [
	"_app/immutable/nodes/1.D_oZzlWR.js",
	"_app/immutable/chunks/CWj6FrbW.js",
	"_app/immutable/chunks/69_IOA4Y.js",
	"_app/immutable/chunks/DIeogL5L.js",
	"_app/immutable/chunks/C6vgWmgZ.js",
	"_app/immutable/chunks/18m15ENF.js",
	"_app/immutable/chunks/CGwGH024.js",
	"_app/immutable/chunks/DKAXoy2a.js",
	"_app/immutable/chunks/lmEnKYxK.js",
	"_app/immutable/chunks/CSa6KPDp.js",
];
export const stylesheets = [];
export const fonts = [];
