export const index = 3;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import("../entries/pages/settings/(nav)/_layout.svelte.js")).default);
export const universal = {
	ssr: false,
};
export const universal_id = "src/routes/settings/(nav)/+layout.ts";
export const imports = [
	"_app/immutable/nodes/3.wYMw6L97.js",
	"_app/immutable/chunks/CWj6FrbW.js",
	"_app/immutable/chunks/CSa6KPDp.js",
	"_app/immutable/chunks/C6vgWmgZ.js",
	"_app/immutable/chunks/DIeogL5L.js",
	"_app/immutable/chunks/18m15ENF.js",
	"_app/immutable/chunks/CGwGH024.js",
	"_app/immutable/chunks/CYA4sdSw.js",
	"_app/immutable/chunks/CnTZH1bt.js",
	"_app/immutable/chunks/3bvnQgV4.js",
	"_app/immutable/chunks/CDRdzyOh.js",
	"_app/immutable/chunks/_wu0PA6r.js",
	"_app/immutable/chunks/lmEnKYxK.js",
	"_app/immutable/chunks/B9mu6Rtg.js",
	"_app/immutable/chunks/OwagsJha.js",
	"_app/immutable/chunks/69_IOA4Y.js",
	"_app/immutable/chunks/6DPKqfPG.js",
	"_app/immutable/chunks/wt6lPunf.js",
	"_app/immutable/chunks/Cbtu-SQV.js",
	"_app/immutable/chunks/C6o0iJkr.js",
];
export const stylesheets = [];
export const fonts = [];
