export const index = 12;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import("../entries/pages/settings/(nav)/_...model_/_page.svelte.js"))
		.default);
export const universal = {
	ssr: false,
};
export const universal_id = "src/routes/settings/(nav)/[...model]/+page.ts";
export const imports = [
	"_app/immutable/nodes/12.-ExvajE0.js",
	"_app/immutable/chunks/CSa6KPDp.js",
	"_app/immutable/chunks/C6vgWmgZ.js",
	"_app/immutable/chunks/DIeogL5L.js",
	"_app/immutable/chunks/svoSlOfU.js",
	"_app/immutable/chunks/CWj6FrbW.js",
	"_app/immutable/chunks/18m15ENF.js",
	"_app/immutable/chunks/CGwGH024.js",
	"_app/immutable/chunks/CYA4sdSw.js",
	"_app/immutable/chunks/3bvnQgV4.js",
	"_app/immutable/chunks/_wu0PA6r.js",
	"_app/immutable/chunks/lmEnKYxK.js",
	"_app/immutable/chunks/B9mu6Rtg.js",
	"_app/immutable/chunks/60oP_XVD.js",
	"_app/immutable/chunks/CnTZH1bt.js",
	"_app/immutable/chunks/69_IOA4Y.js",
	"_app/immutable/chunks/6DPKqfPG.js",
	"_app/immutable/chunks/CXl0Ln_S.js",
	"_app/immutable/chunks/Da9RVyMh.js",
	"_app/immutable/chunks/PDNaNhLJ.js",
];
export const stylesheets = [];
export const fonts = [];
