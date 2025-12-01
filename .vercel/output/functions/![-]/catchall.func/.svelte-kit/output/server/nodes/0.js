import * as universal from "../entries/pages/_layout.ts.js";

export const index = 0;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import("../entries/pages/_layout.svelte.js")).default);
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = [
	"_app/immutable/nodes/0.B4YPTl3Q.js",
	"_app/immutable/chunks/3bvnQgV4.js",
	"_app/immutable/chunks/C6vgWmgZ.js",
	"_app/immutable/chunks/DIeogL5L.js",
	"_app/immutable/chunks/18m15ENF.js",
	"_app/immutable/chunks/CGwGH024.js",
	"_app/immutable/chunks/CSa6KPDp.js",
	"_app/immutable/chunks/CVHkYvGM.js",
	"_app/immutable/chunks/BJid9-HC.js",
	"_app/immutable/chunks/CWj6FrbW.js",
	"_app/immutable/chunks/69_IOA4Y.js",
	"_app/immutable/chunks/6DPKqfPG.js",
	"_app/immutable/chunks/_wu0PA6r.js",
	"_app/immutable/chunks/Da9RVyMh.js",
	"_app/immutable/chunks/lmEnKYxK.js",
	"_app/immutable/chunks/CnTZH1bt.js",
	"_app/immutable/chunks/BLeiJgKp.js",
	"_app/immutable/chunks/zLvdPMOW.js",
	"_app/immutable/chunks/CDRdzyOh.js",
	"_app/immutable/chunks/OwagsJha.js",
	"_app/immutable/chunks/CYA4sdSw.js",
	"_app/immutable/chunks/Djt0-lxN.js",
	"_app/immutable/chunks/Cbtu-SQV.js",
	"_app/immutable/chunks/DgLqPQQO.js",
	"_app/immutable/chunks/PDNaNhLJ.js",
	"_app/immutable/chunks/C6o0iJkr.js",
	"_app/immutable/chunks/CTQezUnf.js",
	"_app/immutable/chunks/DJLsIVhr.js",
	"_app/immutable/chunks/B9mu6Rtg.js",
];
export const stylesheets = ["_app/immutable/assets/0.BPdMrGlS.css"];
export const fonts = [];
