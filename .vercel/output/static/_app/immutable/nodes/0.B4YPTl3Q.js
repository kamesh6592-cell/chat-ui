var ft = (a) => {
	throw TypeError(a);
};
var at = (a, e, t) => e.has(a) || ft("Cannot " + t);
var b = (a, e, t) => (at(a, e, "read from private field"), t ? t.call(a) : e.get(a)),
	Q = (a, e, t) =>
		e.has(a)
			? ft("Cannot add the same private member more than once")
			: e instanceof WeakSet
				? e.add(a)
				: e.set(a, t),
	$ = (a, e, t, r) => (at(a, e, "write to private field"), r ? r.call(a, t) : e.set(a, t), t),
	mt = (a, e, t) => (at(a, e, "access private method"), t);
import {
	U as Te,
	s as ee,
	d as _e,
	a as Et,
	r as Ot,
	e as jt,
	b as G,
	f as ht,
	g as zt,
} from "../chunks/3bvnQgV4.js";
import { u as $e, h as ge } from "../chunks/CVHkYvGM.js";
import { g as Rt, u as Mt } from "../chunks/Da9RVyMh.js";
import "../chunks/CWj6FrbW.js";
import { o as lt, b as se, e as st, f as Gt, i as je, g as We } from "../chunks/CSa6KPDp.js";
import {
	t as L,
	c as u,
	s as i,
	r as g,
	p as ye,
	b as te,
	d as Pt,
	B as xe,
	e as _,
	g as s,
	f as K,
	a as we,
	u as le,
	aU as Ft,
	a6 as ze,
	w as Vt,
	aV as Ht,
	n as ct,
	h as rt,
	aW as qt,
	aS as Wt,
	x as Kt,
	$ as Jt,
} from "../chunks/C6vgWmgZ.js";
import { s as me, d as Se, i as N, e as It, h as Xt } from "../chunks/18m15ENF.js";
import { b as Le, a as x, f as B, c as Ye, w as St } from "../chunks/CGwGH024.js";
import { s as Lt } from "../chunks/CnTZH1bt.js";
import { p as oe, l as Yt, s as dt, a as Ne, u as Qt, b as Ke } from "../chunks/_wu0PA6r.js";
import { p as R } from "../chunks/lmEnKYxK.js";
import { T as $t, e as Je } from "../chunks/BJid9-HC.js";
import { l as Bt } from "../chunks/BLeiJgKp.js";
import {
	P as ea,
	t as ta,
	f as aa,
	M as Zt,
	C as ra,
	r as na,
	l as sa,
} from "../chunks/zLvdPMOW.js";
import { e as pt, i as bt } from "../chunks/CYA4sdSw.js";
import {
	r as he,
	L as oa,
	b as ia,
	c as la,
	s as At,
	M as xt,
	a as ca,
} from "../chunks/Djt0-lxN.js";
import { a as da, b as va } from "../chunks/CTQezUnf.js";
import { i as Tt, b as _t, r as nt, t as yt } from "../chunks/DJLsIVhr.js";
import { C as ga } from "../chunks/OwagsJha.js";
import "../chunks/69_IOA4Y.js";
import { h as ua } from "../chunks/6DPKqfPG.js";
import { b as vt } from "../chunks/CDRdzyOh.js";
import { b as fa } from "../chunks/C6o0iJkr.js";
import { I as ma } from "../chunks/B9mu6Rtg.js";
const ha = async ({ depends: a, fetch: e, url: t }) => {
		a(Te.ConversationList);
		const r = $e({ fetch: e, origin: t.origin }),
			[c, n, f, h, l, P] = await Promise.all([
				r.user.settings.get().then(ge),
				r.models.get().then(ge),
				r.user.get().then(ge),
				r["public-config"].get().then(ge),
				r["feature-flags"].get().then(ge),
				r.conversations.get({ query: { p: 0 } }).then(ge),
			]),
			y = n[0],
			{ conversations: w } = P;
		return {
			conversations: w.map((Z) => {
				const o = Z.title.trim();
				return (
					(Z.title = o),
					{
						id: Z._id.toString(),
						title: Z.title,
						model: Z.model ?? y,
						updatedAt: new Date(Z.updatedAt),
					}
				);
			}),
			models: n,
			oldModels: [],
			user: f,
			settings: {
				...c,
				welcomeModalSeenAt: c.welcomeModalSeenAt ? new Date(c.welcomeModalSeenAt) : null,
			},
			publicConfig: Rt(h),
			...l,
		};
	},
	Y1 = Object.freeze(
		Object.defineProperty({ __proto__: null, load: ha }, Symbol.toStringTag, { value: "Module" })
	);
var pa = Le(
	'<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 26 23"><path fill="url(#gr)" d="M.93 10.65A10.17 10.17 0 0 1 11.11.48h4.67a9.45 9.45 0 0 1 0 18.89H4.53L1.62 22.2a.38.38 0 0 1-.69-.28V10.65Z"></path><path fill="#000" fill-rule="evenodd" d="M11.52 7.4a1.86 1.86 0 1 1-3.72 0 1.86 1.86 0 0 1 3.72 0Zm7.57 0a1.86 1.86 0 1 1-3.73 0 1.86 1.86 0 0 1 3.73 0ZM8.9 12.9a.55.55 0 0 0-.11.35.76.76 0 0 1-1.51 0c0-.95.67-1.94 1.76-1.94 1.09 0 1.76 1 1.76 1.94H9.3a.55.55 0 0 0-.12-.35c-.06-.07-.1-.08-.13-.08s-.08 0-.14.08Zm4.04 0a.55.55 0 0 0-.12.35h-1.51c0-.95.68-1.94 1.76-1.94 1.1 0 1.77 1 1.77 1.94h-1.51a.55.55 0 0 0-.12-.35c-.06-.07-.11-.08-.14-.08-.02 0-.07 0-.13.08Zm-1.89.79c-.02 0-.07-.01-.13-.08a.55.55 0 0 1-.12-.36h-1.5c0 .95.67 1.95 1.75 1.95 1.1 0 1.77-1 1.77-1.95h-1.51c0 .16-.06.28-.12.36-.06.07-.11.08-.14.08Zm4.04 0c-.03 0-.08-.01-.14-.08a.55.55 0 0 1-.12-.36h-1.5c0 .95.67 1.95 1.76 1.95 1.08 0 1.76-1 1.76-1.95h-1.51c0 .16-.06.28-.12.36-.06.07-.11.08-.13.08Zm1.76-.44c0-.16.05-.28.12-.35.06-.07.1-.08.13-.08s.08 0 .14.08c.06.07.11.2.11.35a.76.76 0 0 0 1.51 0c0-.95-.67-1.94-1.76-1.94-1.09 0-1.76 1-1.76 1.94h1.5Z" clip-rule="evenodd"></path><defs><radialGradient id="gr" cx="0" cy="0" r="1" gradientTransform="matrix(0 31.37 -34.85 0 13.08 -9.02)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFD21E"></stop><stop offset="1" stop-color="red"></stop></radialGradient></defs></svg>'
);
function ba(a, e) {
	let t = oe(e, "classNames", 3, "");
	var r = pa();
	L(() => ee(r, 0, _e(t()))), x(a, r);
}
var xa = B(
	'<div class="pointer-events-none fixed right-0 top-12 z-50 bg-gradient-to-bl from-red-500/20 via-red-500/0 to-red-500/0 pb-36 pl-36 pr-2 pt-2 max-sm:text-sm md:top-0 md:pr-8 md:pt-5"><div class="pointer-events-auto flex items-center rounded-full bg-white/90 px-3 py-1 shadow-sm dark:bg-gray-900/80"><!> <h2 class="line-clamp-2 max-w-2xl font-semibold text-gray-800 dark:text-gray-200"> </h2></div></div>'
);
function _a(a, e) {
	let t = oe(e, "message", 3, "");
	ea(a, {
		children: (r, c) => {
			var n = xa(),
				f = u(n),
				h = u(f);
			ba(h, { classNames: "text-2xl mr-2 flex-none" });
			var l = i(h, 2),
				P = u(l, !0);
			g(l),
				g(f),
				g(n),
				L(() => me(P, t())),
				ta(
					7,
					n,
					() => aa,
					() => ({ duration: 300 })
				),
				x(r, n);
		},
		$$slots: { default: !0 },
	});
}
var ya = Le(
	'<svg width="1em" height="1em" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="45" height="45"><path d="M24.501 39c.438 0 .784.143 1.071.43.288.287.43.633.428 1.068V44.5c0 .44-.144.787-.43 1.073-.285.285-.63.428-1.069.427H24.5c-.44 0-.786-.143-1.07-.428-.25-.25-.391-.548-.423-.913L23 44.5V40.5c0-.44.143-.786.429-1.07.286-.285.632-.429 1.072-.43Zm11.26-4.673c.43.013.787.157 1.093.435l2.147 2.096.005.006.006.005c.287.263.426.588.414 1.017a1.66 1.66 0 0 1-.433 1.112c-.305.305-.66.453-1.093.453-.433 0-.764-.147-1.032-.439l-.005-.006-.006-.005-2.093-2.144a1.537 1.537 0 0 1-.414-1.08c0-.426.136-.755.404-1.024l.117-.117c.245-.22.533-.32.89-.31Zm-22.537.023c.425 0 .755.137 1.023.404l.117.117c.22.246.322.534.312.891-.013.43-.157.787-.439 1.094L12.143 39l-.006.005-.005.006c-.264.288-.589.426-1.018.414a1.66 1.66 0 0 1-1.113-.433 1.476 1.476 0 0 1-.451-1.092c0-.434.147-.765.438-1.033l.006-.004.005-.006 2.146-2.096a1.537 1.537 0 0 1 1.079-.412ZM24.5 15c2.632 0 4.863.924 6.723 2.78 1.858 1.857 2.78 4.087 2.777 6.72-.004 2.633-.927 4.865-2.78 6.723-1.852 1.857-4.082 2.78-6.719 2.777H24.5c-2.634 0-4.866-.922-6.72-2.779-1.856-1.857-2.779-4.087-2.78-6.72-.001-2.634.921-4.865 2.78-6.721C19.636 15.923 21.867 15 24.5 15Zm-20 8h4c.44 0 .786.144 1.072.43.286.286.429.631.428 1.07-.001.439-.145.786-.43 1.074-.284.285-.629.428-1.068.426H4.5c-.44 0-.786-.143-1.07-.428-.285-.287-.429-.633-.43-1.073-.001-.438.142-.783.429-1.069.288-.287.634-.43 1.071-.43Zm36 0h4c.44 0 .786.144 1.072.43.286.286.429.631.428 1.07-.001.439-.145.786-.43 1.074-.284.285-.629.428-1.068.426H40.5c-.44 0-.786-.143-1.07-.428-.285-.287-.429-.633-.43-1.073-.001-.438.142-.783.429-1.069.288-.287.634-.43 1.071-.43ZM11.1 9.55c.433 0 .764.147 1.032.439l.005.006.006.004 2.092 2.144c.281.308.415.654.415 1.058 0 .405-.135.752-.419 1.061a1.216 1.216 0 0 1-.99.414 1.635 1.635 0 0 1-1.098-.44l-2.144-2.093-.005-.006-.006-.005-.101-.102c-.22-.245-.323-.54-.313-.915a1.66 1.66 0 0 1 .435-1.116c.305-.302.659-.449 1.09-.449Zm26.786.025c.445.012.808.157 1.112.431.305.306.452.66.452 1.094 0 .434-.147.765-.438 1.032l-.006.005-.005.006-2.145 2.093c-.308.28-.653.415-1.056.415-.406 0-.752-.136-.062-.42a1.216 1.216 0 0 1-.414-.99c.013-.428.157-.787.44-1.098l2.093-2.144.006-.004.005-.006c.264-.288.589-.426 1.018-.414ZM24.5 3c.438 0 .784.143 1.071.43.288.287.43.633.428 1.068V8.5c0 .44-.144.787-.43 1.073-.285.285-.63.428-1.069.427H24.5c-.44 0-.786-.143-1.07-.428-.25-.25-.391-.548-.423-.912L23 8.5v-4c0-.44.143-.786.429-1.07.286-.285.632-.429 1.072-.43Z" fill="#E9E9E9" stroke="#000"></path></mask><g mask="url(#a)"><path d="M24.5 34.5c-2.767 0-5.125-.975-7.074-2.926-1.95-1.95-2.925-4.308-2.926-7.074-.001-2.765.974-5.123 2.926-7.074 1.952-1.95 4.31-2.926 7.074-2.926 2.764 0 5.123.976 7.076 2.926 1.953 1.951 2.928 4.309 2.924 7.074-.004 2.766-.98 5.124-2.926 7.076-1.947 1.952-4.305 2.927-7.074 2.924Zm-20-8c-.567 0-1.041-.192-1.424-.576-.383-.384-.575-.858-.576-1.424-.001-.565.19-1.04.576-1.424.385-.384.86-.576 1.424-.576h4c.567 0 1.042.192 1.426.576.384.384.575.859.574 1.424-.001.566-.193 1.041-.576 1.426-.383.386-.857.577-1.424.574h-4Zm36 0c-.567 0-1.041-.192-1.424-.576-.383-.384-.575-.858-.576-1.424-.001-.565.19-1.04.576-1.424.385-.384.86-.576 1.424-.576h4c.567 0 1.042.192 1.426.576.384.384.575.859.574 1.424-.001.566-.193 1.041-.576 1.426-.383.386-.857.577-1.424.574h-4Zm-16-16c-.567 0-1.041-.192-1.424-.576-.383-.384-.575-.858-.576-1.424v-4c0-.566.192-1.041.576-1.424.384-.382.859-.574 1.424-.576a1.93 1.93 0 0 1 1.426.576c.385.386.577.86.574 1.424v4c0 .567-.192 1.042-.576 1.426-.384.384-.859.576-1.424.574Zm0 36c-.567 0-1.041-.192-1.424-.576-.383-.384-.575-.858-.576-1.424v-4c0-.566.192-1.041.576-1.424.384-.382.859-.574 1.424-.576a1.93 1.93 0 0 1 1.426.576c.385.386.577.86.574 1.424v4c0 .567-.192 1.042-.576 1.426-.384.384-.859.576-1.424.574ZM11.8 14.6l-2.15-2.1c-.4-.366-.592-.833-.576-1.4a2.16 2.16 0 0 1 .576-1.45c.4-.4.883-.6 1.45-.6s1.033.2 1.4.6l2.1 2.15c.367.4.55.867.55 1.4 0 .534-.183 1-.55 1.4-.367.4-.825.592-1.374.576A2.137 2.137 0 0 1 11.8 14.6Zm24.7 24.75-2.1-2.15c-.367-.4-.55-.874-.55-1.424 0-.549.183-1.008.55-1.376a1.71 1.71 0 0 1 1.376-.574 2.14 2.14 0 0 1 1.424.574l2.15 2.1c.4.367.592.834.576 1.4a2.16 2.16 0 0 1-.576 1.45c-.4.4-.883.6-1.45.6s-1.033-.2-1.4-.6ZM34.4 14.6a1.714 1.714 0 0 1-.576-1.374c.016-.549.208-1.024.576-1.426l2.1-2.15c.367-.4.833-.592 1.4-.576a2.16 2.16 0 0 1 1.45.576c.4.4.6.884.6 1.45 0 .567-.2 1.034-.6 1.4l-2.15 2.1c-.4.367-.867.55-1.4.55-.533 0-1-.183-1.4-.55ZM9.65 39.35c-.4-.4-.6-.883-.6-1.45 0-.566.2-1.033.6-1.4l2.15-2.1c.4-.366.875-.55 1.424-.55.55 0 1.008.184 1.376.55.4.367.592.826.576 1.376A2.124 2.124 0 0 1 14.6 37.2l-2.1 2.15c-.367.4-.833.592-1.4.576a2.16 2.16 0 0 1-1.45-.576Z" fill="#fff"></path><path d="M24.5 34.5c-2.767 0-5.125-.975-7.074-2.926-1.95-1.95-2.925-4.308-2.926-7.074-.001-2.765.974-5.123 2.926-7.074 1.952-1.95 4.31-2.926 7.074-2.926 2.764 0 5.123.976 7.076 2.926 1.953 1.951 2.928 4.309 2.924 7.074-.004 2.766-.98 5.124-2.926 7.076-1.947 1.952-4.305 2.927-7.074 2.924Zm-20-8c-.567 0-1.041-.192-1.424-.576-.383-.384-.575-.858-.576-1.424-.001-.565.19-1.04.576-1.424.385-.384.86-.576 1.424-.576h4c.567 0 1.042.192 1.426.576.384.384.575.859.574 1.424-.001.566-.193 1.041-.576 1.426-.383.386-.857.577-1.424.574h-4Zm36 0c-.567 0-1.041-.192-1.424-.576-.383-.384-.575-.858-.576-1.424-.001-.565.19-1.04.576-1.424.385-.384.86-.576 1.424-.576h4c.567 0 1.042.192 1.426.576.384.384.575.859.574 1.424-.001.566-.193 1.041-.576 1.426-.383.386-.857.577-1.424.574h-4Zm-16-16c-.567 0-1.041-.192-1.424-.576-.383-.384-.575-.858-.576-1.424v-4c0-.566.192-1.041.576-1.424.384-.382.859-.574 1.424-.576a1.93 1.93 0 0 1 1.426.576c.385.386.577.86.574 1.424v4c0 .567-.192 1.042-.576 1.426-.384.384-.859.576-1.424.574Zm0 36c-.567 0-1.041-.192-1.424-.576-.383-.384-.575-.858-.576-1.424v-4c0-.566.192-1.041.576-1.424.384-.382.859-.574 1.424-.576a1.93 1.93 0 0 1 1.426.576c.385.386.577.86.574 1.424v4c0 .567-.192 1.042-.576 1.426-.384.384-.859.576-1.424.574ZM11.8 14.6l-2.15-2.1c-.4-.366-.592-.833-.576-1.4a2.16 2.16 0 0 1 .576-1.45c.4-.4.883-.6 1.45-.6s1.033.2 1.4.6l2.1 2.15c.367.4.55.867.55 1.4 0 .534-.183 1-.55 1.4-.367.4-.825.592-1.374.576A2.137 2.137 0 0 1 11.8 14.6Zm24.7 24.75-2.1-2.15c-.367-.4-.55-.874-.55-1.424 0-.549.183-1.008.55-1.376a1.71 1.71 0 0 1 1.376-.574 2.14 2.14 0 0 1 1.424.574l2.15 2.1c.4.367.592.834.576 1.4a2.16 2.16 0 0 1-.576 1.45c-.4.4-.883.6-1.45.6s-1.033-.2-1.4-.6ZM34.4 14.6a1.714 1.714 0 0 1-.576-1.374c.016-.549.208-1.024.576-1.426l2.1-2.15c.367-.4.833-.592 1.4-.576a2.16 2.16 0 0 1 1.45.576c.4.4.6.884.6 1.45 0 .567-.2 1.034-.6 1.4l-2.15 2.1c-.4.367-.867.55-1.4.55-.533 0-1-.183-1.4-.55ZM9.65 39.35c-.4-.4-.6-.883-.6-1.45 0-.566.2-1.033.6-1.4l2.15-2.1c.4-.366.875-.55 1.424-.55.55 0 1.008.184 1.376.55.4.367.592.826.576 1.376A2.124 2.124 0 0 1 14.6 37.2l-2.1 2.15c-.367.4-.833.592-1.4.576a2.16 2.16 0 0 1-1.45-.576Z" fill="url(#b)"></path><g filter="url(#c)"><path d="M24.306 41.34c0 .522.178.962.532 1.317.354.355.793.532 1.317.532.12 0 .234-.01.345-.028v1.34c0 .566-.192 1.042-.576 1.426-.384.383-.859.575-1.424.574-.567 0-1.041-.192-1.424-.576-.382-.384-.575-.859-.576-1.424v-4c0-.567.192-1.042.576-1.425.34-.338.75-.527 1.23-.567v2.83Zm10.63-7.343c.084.214.208.412.374.593l1.942 1.988c.339.37.771.555 1.295.555.402 0 .759-.111 1.07-.33.218.311.32.677.309 1.097a2.161 2.161 0 0 1-.575 1.45c-.4.4-.884.6-1.45.6-.567 0-1.034-.2-1.401-.6l-2.1-2.15c-.366-.4-.55-.875-.55-1.424 0-.549.184-1.008.55-1.376.16-.175.34-.308.536-.403Zm-23.14.546c-.369.339-.554.77-.554 1.295 0 .524.185.97.555 1.34.37.34.817.518 1.34.533.525.015.957-.163 1.296-.532l.56-.575a2.161 2.161 0 0 1-.392.596L12.5 39.35c-.367.4-.833.593-1.4.577a2.162 2.162 0 0 1-1.45-.577c-.4-.4-.6-.883-.6-1.45 0-.566.2-1.032.6-1.4l2.15-2.1a2.12 2.12 0 0 1 .49-.339l-.493.482ZM5.84 22.5a2.07 2.07 0 0 0-.028.344 1.8 1.8 0 0 0 .532 1.317c.354.355.793.532 1.317.532h2.831c-.04.481-.229.892-.567 1.233-.383.385-.857.576-1.424.574h-4c-.567 0-1.041-.192-1.424-.576-.382-.384-.575-.859-.576-1.424-.001-.566.19-1.04.576-1.425.385-.384.86-.575 1.424-.575h1.339Zm34.401.015a1.962 1.962 0 0 0-.076.562c.001.523.179.961.532 1.316.354.356.794.534 1.318.534h3.698c.28 0 .536-.052.768-.154a1.916 1.916 0 0 1-.556 1.153c-.383.385-.857.576-1.424.574h-4c-.566 0-1.041-.192-1.424-.576-.382-.384-.575-.859-.576-1.424-.001-.566.19-1.04.576-1.425a1.907 1.907 0 0 1 1.164-.56ZM11.1 9.052c.236 0 .455.036.656.105-.328.366-.5.805-.514 1.32-.015.523.163.955.533 1.294l1.988 1.942c.32.293.69.464 1.111.515-.076.13-.165.255-.273.373-.367.4-.825.593-1.374.577A2.138 2.138 0 0 1 11.8 14.6l-2.15-2.1c-.4-.367-.592-.834-.576-1.4.016-.567.208-1.05.576-1.45.4-.4.884-.6 1.45-.6Zm24.835 1.563c-.34.371-.518.811-.533 1.32-.014.507.163.931.533 1.27.37.339.801.508 1.294.508.494 0 .925-.169 1.295-.508l1.197-1.17c-.095.17-.217.326-.37.467l-2.15 2.1c-.4.366-.868.55-1.401.55s-1-.184-1.4-.55a1.714 1.714 0 0 1-.576-1.375c.016-.549.208-1.024.576-1.425l2.1-2.15c.25-.273.546-.447.889-.526l-1.454 1.49ZM24.5 2.501c.31 0 .592.058.848.174a1.805 1.805 0 0 0-.51.358c-.355.354-.532.793-.532 1.317V8.05c0 .523.178.962.532 1.317.308.31.681.484 1.119.524l-.033.037c-.384.383-.859.575-1.424.574-.567 0-1.041-.192-1.424-.576-.382-.384-.575-.859-.576-1.424v-4c0-.567.192-1.042.576-1.425.384-.382.859-.574 1.424-.575Z" fill="#89969F"></path></g><g filter="url(#d)"><path d="M21.153 15.044a9.752 9.752 0 0 0-1.54 1.26c-1.805 1.803-2.706 3.984-2.705 6.541.002 2.557.903 4.738 2.705 6.542 1.803 1.804 3.984 2.705 6.542 2.705 2.561.003 4.742-.899 6.542-2.704.485-.486.902-1 1.256-1.54-.479 1.375-1.27 2.618-2.379 3.729-1.946 1.952-4.305 2.926-7.074 2.924-2.767 0-5.125-.976-7.074-2.926-1.95-1.95-2.925-4.31-2.926-7.075-.001-2.765.974-5.123 2.926-7.074 1.11-1.11 2.354-1.903 3.727-2.382Z" fill="#30363A"></path></g></g><defs><filter id="c" x="-3.79" y="-3.789" width="56.56" height="56.58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="1.021" result="effect1_foregroundBlur_3607_89"></feGaussianBlur></filter><filter id="d" x="7.87" y="8.414" width="32.714" height="32.717" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="3.315" result="effect1_foregroundBlur_3607_89"></feGaussianBlur></filter><radialGradient id="b" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-9 11 -11 -9 29.905 18.58)"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#F8FAFC"></stop></radialGradient></defs></svg>'
);
function wa(a, e) {
	let t = oe(e, "classNames", 3, "");
	var r = ya();
	L(() => ee(r, 0, _e(t()))), x(a, r);
}
var ka = Le(
	'<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.054 43.02C20.02 43.02 15.762 41.278 12.28 37.794C8.79695 34.31 7.05496 30.052 7.05396 25.02C7.05396 20.42 8.55396 16.428 11.554 13.044C14.554 9.66 18.387 7.685 23.054 7.12C23.487 7.053 23.87 7.112 24.204 7.296C24.537 7.48 24.804 7.721 25.004 8.02C25.204 8.318 25.312 8.668 25.33 9.07C25.347 9.471 25.222 9.854 24.954 10.22C24.3955 11.0688 23.9655 11.9955 23.678 12.97C23.3906 13.961 23.2477 14.9882 23.254 16.02C23.254 19.02 24.304 21.57 26.404 23.67C28.504 25.77 31.054 26.82 34.054 26.82C35.087 26.82 36.112 26.67 37.13 26.37C38.096 26.0936 39.0145 25.6721 39.854 25.12C40.22 24.886 40.596 24.778 40.98 24.796C41.364 24.813 41.705 24.904 42.004 25.07C42.337 25.236 42.596 25.486 42.78 25.82C42.964 26.153 43.022 26.553 42.954 27.02C42.487 31.62 40.529 35.436 37.08 38.47C33.63 41.503 29.622 43.02 25.054 43.02Z" fill="#D2D5DB"></path></svg>'
);
function Ca(a, e) {
	let t = oe(e, "classNames", 3, "");
	var r = ka();
	L(() => ee(r, 0, _e(t()))), x(a, r);
}
var Ma = Le("<svg><!></svg>");
function Pa(a, e) {
	const t = Yt(e, ["children", "$$slots", "$$events", "$$legacy"]);
	var r = Ma();
	Et(r, () => ({ viewBox: "0 0 32 32", width: "1.2em", height: "1.2em", ...t }));
	var c = u(r);
	ua(
		c,
		() =>
			'<path fill="currentColor" d="M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4zm-5-5L24 7.6l-3 3L17.4 7zM6 22v-3.6l10-10l3.6 3.6l-10 10z"/>',
		!0
	),
		g(r),
		x(a, r);
}
var Ia = (a, e) => _(e, a.currentTarget.value, !0),
	Sa = B(
		'<form class="flex w-full flex-col gap-5 p-6"><div class="flex items-start justify-between"><h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Rename conversation</h2> <button type="button" class="group" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="size-5 text-gray-700 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-400"><path d="M24 9.41 22.59 8 16 14.59 9.41 8 8 9.41 14.59 16 8 22.59 9.41 24 16 17.41 22.59 24 24 22.59 17.41 16 24 9.41z" fill="currentColor"></path></svg></button></div> <div class="flex flex-col gap-2"><label for="conv-title" class="text-sm text-gray-600 dark:text-gray-400">Title</label> <input autocomplete="off" id="conv-title" class="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-[15px] text-gray-800 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-gray-700" placeholder="Enter a title"/></div> <div class="flex items-center justify-end gap-2"><button type="button" class="inline-flex items-center rounded-xl border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 shadow hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">Cancel</button> <button type="submit" class="inline-flex items-center rounded-xl border border-gray-900 bg-gray-900 px-3 py-1.5 text-sm font-semibold text-white hover:bg-black disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-100 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white">Save</button></div></form>'
	);
function La(a, e) {
	ye(e, !0);
	let t = oe(e, "open", 7, !1),
		r = oe(e, "title", 3, ""),
		c = te(Pt(r())),
		n = te(void 0);
	xe(() => {
		t() && _(c, r());
	});
	function f() {
		var w;
		t(!1), (w = e.onclose) == null || w.call(e);
	}
	function h() {
		var D;
		const w = (s(c) ?? "").trim();
		w && ((D = e.onsave) == null || D.call(e, { title: w }), f());
	}
	lt(() => {
		setTimeout(() => {
			var w, D;
			(w = s(n)) == null || w.focus(), (D = s(n)) == null || D.select();
		}, 0);
	});
	var l = Ye(),
		P = K(l);
	{
		var y = (w) => {
			Zt(w, {
				onclose: f,
				width: "w-[90dvh] md:w-[480px]",
				children: (D, Z) => {
					var o = Sa(),
						p = u(o),
						C = i(u(p), 2);
					(C.__click = f), g(p);
					var O = i(p, 2),
						q = i(u(O), 2);
					Ot(q),
						(q.__input = [Ia, c]),
						vt(
							q,
							(S) => _(n, S),
							() => s(n)
						),
						g(O);
					var F = i(O, 2),
						U = u(F);
					U.__click = f;
					var j = i(U, 2);
					g(F),
						g(o),
						L(
							(S) => {
								jt(q, s(c)), (j.disabled = S);
							},
							[
								() => {
									var S;
									return !((S = s(c)) != null && S.trim());
								},
							]
						),
						It("submit", o, (S) => {
							S.preventDefault(), h();
						}),
						x(D, o);
				},
				$$slots: { default: !0 },
			});
		};
		N(P, (w) => {
			t() && w(y);
		});
	}
	x(a, l), we();
}
Se(["click", "input"]);
var Ba = B('<span class="mr-1 font-semibold">Delete?</span>'),
	Za = (a, e) => {
		a.preventDefault(), !he() && _(e, !1);
	},
	Aa = (a, e, t) => {
		var r;
		a.preventDefault(),
			!he() && (_(e, !1), (r = t.ondeleteConversation) == null || r.call(t, t.conv.id.toString()));
	},
	Ta = B(
		'<button type="button" class="flex h-5 w-5 items-center justify-center rounded md:hidden md:group-hover:flex" title="Cancel delete action"><!></button> <button type="button" class="flex h-5 w-5 items-center justify-center rounded md:hidden md:group-hover:flex" title="Confirm delete action"><!></button>',
		1
	),
	Na = (a, e) => {
		a.preventDefault(), !he() && _(e, !0);
	},
	Da = (a, e, t) => {
		var r;
		a.preventDefault(),
			!he() &&
				(a.shiftKey
					? (r = e.ondeleteConversation) == null || r.call(e, e.conv.id.toString())
					: _(t, !0));
	},
	Ua = B(
		'<button type="button" class="flex h-5 w-5 items-center justify-center rounded md:hidden md:group-hover:flex" title="Edit conversation title"><!></button> <button type="button" class="flex h-5 w-5 items-center justify-center rounded md:hidden md:group-hover:flex" title="Delete conversation"><!></button>',
		1
	),
	Ea = B(
		'<a data-sveltekit-noscroll=""><div class="my-2 min-w-0 flex-1 truncate first-letter:uppercase"><span><!> </span></div> <!></a> <!>',
		1
	);
function Oa(a, e) {
	ye(e, !0);
	let t = te(!1),
		r = te(!1);
	var c = Ea(),
		n = K(c),
		f = u(n),
		h = u(f),
		l = u(h);
	{
		var P = (p) => {
			var C = Ba();
			x(p, C);
		};
		N(l, (p) => {
			s(t) && p(P);
		});
	}
	var y = i(l);
	g(h), g(f);
	var w = i(f, 2);
	{
		var D = (p) => {
			var C = Ye(),
				O = K(C);
			{
				var q = (U) => {
						var j = Ta(),
							S = K(j);
						S.__click = [Za, t];
						var I = u(S);
						ga(I, { class: "text-xs text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" }),
							g(S);
						var V = i(S, 2);
						V.__click = [Aa, t, e];
						var J = u(V);
						ra(J, { class: "text-xs text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" }),
							g(V),
							x(U, j);
					},
					F = (U) => {
						var j = Ua(),
							S = K(j);
						S.__click = [Na, r];
						var I = u(S);
						Pa(I, { class: "text-xs text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" }),
							g(S);
						var V = i(S, 2);
						V.__click = [Da, e, t];
						var J = u(V);
						$t(J, { class: "text-xs text-gray-400  hover:text-gray-500 dark:hover:text-gray-300" }),
							g(V),
							x(U, j);
					};
				N(O, (U) => {
					s(t) ? U(q) : U(F, !1);
				});
			}
			x(p, C);
		};
		N(w, (p) => {
			e.readOnly || p(D);
		});
	}
	g(n);
	var Z = i(n, 2);
	{
		var o = (p) => {
			La(p, {
				get open() {
					return s(r);
				},
				get title() {
					return e.conv.title;
				},
				onclose: () => _(r, !1),
				onsave: (C) => {
					var O;
					_(r, !1),
						(O = e.oneditConversationTitle) == null ||
							O.call(e, { id: e.conv.id.toString(), title: C.title });
				},
			});
		};
		N(Z, (p) => {
			s(r) && p(o);
		});
	}
	L(() => {
		G(n, "href", `${se ?? ""}/conversation/${e.conv.id ?? ""}`),
			ee(
				n,
				1,
				`group flex h-[2.15rem] flex-none items-center gap-1.5 rounded-lg pl-2.5 pr-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 max-sm:h-10
		${e.conv.id === R.params.id ? "bg-gray-100 dark:bg-gray-700" : ""}`
			),
			me(y, ` ${e.conv.title ?? ""}`);
	}),
		It("mouseleave", n, () => {
			_(t, !1);
		}),
		x(a, c),
		we();
}
Se(["click"]);
var ja = B('<div class="h-2"></div>');
function za(a, e) {
	ye(e, !0);
	let t = te(void 0),
		r,
		c;
	lt(() => {
		if (s(t))
			return (
				(r = new IntersectionObserver((f) => {
					f.forEach((h) => {
						h.isIntersecting
							? (c && clearInterval(c),
								(c = setInterval(() => {
									var l;
									(l = e.onvisible) == null || l.call(e);
								}, 250)))
							: c && (clearInterval(c), (c = void 0));
					});
				})),
				r.observe(s(t)),
				() => {
					r.disconnect(), c && clearInterval(c);
				}
			);
	});
	var n = ja();
	vt(
		n,
		(f) => _(t, f),
		() => s(t)
	),
		x(a, n),
		we();
}
const Ra = 30,
	Ga = { today: "Today", week: "This week", month: "This month", older: "Older" };
function Fa(a) {
	Tt.set(!0), he() && a.preventDefault();
}
function wt(a) {
	he() && a.preventDefault();
}
var Va = B(
		'<h4 class="mb-1.5 mt-4 pl-0.5 text-sm text-gray-400 first:mt-0 dark:text-gray-500"> </h4> <!>',
		1
	),
	Ha = B(
		'<div class="group flex items-center gap-1.5 rounded-lg pl-2.5 pr-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span class="flex h-9 flex-none shrink items-center gap-1.5 truncate pr-2 text-gray-500 dark:text-gray-400"> </span> <img class="ml-auto size-4 rounded-full border bg-gray-500 dark:border-white/40" alt=""/></div>'
	),
	qa = (a, e) => _(e, !0),
	Wa = B(
		'<span class="ml-auto rounded-md bg-blue-600/10 px-1.5 py-0.5 text-xs text-blue-600 dark:bg-blue-600/20 dark:text-blue-400"> </span>'
	),
	Ka = B(
		'<button class="flex h-9 flex-none items-center gap-1.5 rounded-lg pl-2.5 pr-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">MCP Servers <!></button>'
	),
	Ja = () => {
		va();
	},
	Xa = B(
		'<div class="sticky top-0 flex flex-none touch-none items-center justify-between px-1.5 py-3.5 max-sm:pt-0"><a class="flex select-none items-center rounded-xl text-lg font-semibold"><!> </a> <a class="flex rounded-lg border bg-white px-2 py-0.5 text-center shadow-sm hover:shadow-none dark:border-gray-600 dark:bg-gray-700 sm:text-smd" title="Ctrl/Cmd + Shift + O">New Chat</a></div> <div class="scrollbar-custom flex touch-pan-y flex-col gap-1 overflow-y-auto rounded-r-xl border border-l-0 border-gray-100 from-gray-50 px-3 pb-3 pt-2 text-[.9rem] dark:border-transparent dark:from-gray-800/30 max-sm:bg-gradient-to-t md:bg-gradient-to-l"><div class="flex flex-col gap-0.5"></div> <!></div> <div class="flex touch-none flex-col gap-1 rounded-r-xl border border-l-0 border-gray-100 p-3 text-sm dark:border-transparent md:mt-3 md:bg-gradient-to-l md:from-gray-50 md:dark:from-gray-800/30"><!> <a class="flex h-9 flex-none items-center gap-1.5 rounded-lg pl-2.5 pr-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">Models <span class="ml-auto rounded-md bg-gray-500/5 px-1.5 py-0.5 text-xs text-gray-400 dark:bg-gray-500/20 dark:text-gray-400"> </span></a> <!> <span class="flex gap-1"><a class="flex h-9 flex-none flex-grow items-center gap-1.5 rounded-lg pl-2.5 pr-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">Settings</a> <button aria-label="Toggle theme" class="flex size-9 min-w-[1.5em] flex-none items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"><!></button></span></div> <!>',
		1
	);
function kt(a, e) {
	ye(e, !0);
	const [t, r] = dt(),
		c = () => Ne(la, "$enabledServersCount", t),
		n = Mt(),
		f = $e();
	let h = oe(e, "conversations", 15),
		l = oe(e, "p", 15, 0),
		P = te(!0);
	const y = [
		new Date().setDate(new Date().getDate() - 1),
		new Date().setDate(new Date().getDate() - 7),
		new Date().setMonth(new Date().getMonth() - 1),
	];
	let w = le(() => ({
		today: h().filter(({ updatedAt: v }) => v.getTime() > y[0]),
		week: h().filter(({ updatedAt: v }) => v.getTime() > y[1] && v.getTime() < y[0]),
		month: h().filter(({ updatedAt: v }) => v.getTime() > y[2] && v.getTime() < y[1]),
		older: h().filter(({ updatedAt: v }) => v.getTime() < y[2]),
	}));
	const D = R.data.models.filter((v) => !v.unlisted).length;
	async function Z() {
		Qt(l);
		const v = await f.conversations
			.get({ query: { p: l() } })
			.then(ge)
			.then((A) => A.conversations)
			.catch(() => []);
		v.length === 0 && _(P, !1), h([...h(), ...v]);
	}
	xe(() => {
		h().length <= Ra && l(0);
	});
	let o = te(!1),
		p,
		C = te(!1);
	(p = da(({ isDark: v }) => {
		_(o, v, !0);
	})),
		st(() => {
			p == null || p();
		});
	var O = Xa(),
		q = K(O),
		F = u(q),
		U = u(F);
	oa(U, { classNames: "dark:invert mr-[2px]" });
	var j = i(U);
	g(F);
	var S = i(F, 2);
	(S.__click = [Fa]), g(q);
	var I = i(q, 2),
		V = u(I);
	pt(
		V,
		21,
		() => Object.entries(s(w)),
		bt,
		(v, A) => {
			var E = le(() => Ft(s(A), 2));
			let de = () => s(E)[0],
				re = () => s(E)[1];
			var H = Ye(),
				ue = K(H);
			{
				var Ve = (Ae) => {
					var He = Va(),
						Oe = K(He),
						tt = u(Oe, !0);
					g(Oe);
					var z = i(Oe, 2);
					pt(z, 17, re, bt, (W, ve) => {
						Oa(W, {
							get conv() {
								return s(ve);
							},
							get oneditConversationTitle() {
								return e.oneditConversationTitle;
							},
							get ondeleteConversation() {
								return e.ondeleteConversation;
							},
						});
					}),
						L(() => me(tt, Ga[de()])),
						x(Ae, He);
				};
				N(ue, (Ae) => {
					re().length && Ae(Ve);
				});
			}
			x(v, H);
		}
	),
		g(V);
	var J = i(V, 2);
	{
		var ce = (v) => {
			za(v, { onvisible: Z });
		};
		N(J, (v) => {
			s(P) && v(ce);
		});
	}
	g(I);
	var X = i(I, 2),
		ae = u(X);
	{
		var Y = (v) => {
			var A = Ha(),
				E = u(A),
				de = u(E, !0);
			g(E);
			var re = i(E, 2);
			g(A),
				L(() => {
					var H, ue;
					me(
						de,
						((H = e.user) == null ? void 0 : H.username) ||
							((ue = e.user) == null ? void 0 : ue.email)
					),
						G(
							re,
							"src",
							`https://huggingface.co/api/users/${e.user.username ?? ""}/avatar?redirect=true`
						);
				}),
				x(v, A);
		};
		N(ae, (v) => {
			var A, E;
			(((A = e.user) != null && A.username) || ((E = e.user) != null && E.email)) && v(Y);
		});
	}
	var k = i(ae, 2);
	k.__click = [wt];
	var M = i(u(k)),
		ie = u(M, !0);
	g(M), g(k);
	var Be = i(k, 2);
	{
		var Ge = (v) => {
			var A = Ka();
			A.__click = [qa, C];
			var E = i(u(A));
			{
				var de = (re) => {
					var H = Wa(),
						ue = u(H, !0);
					g(H), L(() => me(ue, c())), x(re, H);
				};
				N(E, (re) => {
					c() > 0 && re(de);
				});
			}
			g(A), x(v, A);
		};
		N(Be, (v) => {
			var A, E;
			(((A = e.user) != null && A.username) || ((E = e.user) != null && E.email)) && v(Ge);
		});
	}
	var Fe = i(Be, 2),
		Ze = u(Fe);
	Ze.__click = [wt];
	var Ee = i(Ze, 2);
	Ee.__click = [Ja];
	var et = u(Ee);
	{
		var d = (v) => {
			var A = Ye(),
				E = K(A);
			{
				var de = (H) => {
						wa(H, {});
					},
					re = (H) => {
						Ca(H, {});
					};
				N(E, (H) => {
					s(o) ? H(de) : H(re, !1);
				});
			}
			x(v, A);
		};
		N(et, (v) => {
			v(d);
		});
	}
	g(Ee), g(Fe), g(X);
	var m = i(X, 2);
	{
		var T = (v) => {
			ia(v, { onclose: () => _(C, !1) });
		};
		N(m, (v) => {
			s(C) && v(T);
		});
	}
	L(() => {
		G(F, "href", `${n.PUBLIC_ORIGIN ?? ""}${se ?? ""}/`),
			me(j, ` ${n.PUBLIC_APP_NAME ?? ""}`),
			G(S, "href", `${se}/`),
			G(k, "href", `${se ?? ""}/models`),
			me(ie, D),
			G(Ze, "href", `${se ?? ""}/settings/application`);
	}),
		x(a, O),
		we(),
		r();
}
Se(["click"]);
var Ya = Le(
	'<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 16 16"><path d="M7.258 1.856c.333 0 .66.024.979.07-.558.319-.972.86-1.123 1.503A5.254 5.254 0 1 0 9.32 13.513l.275-.127c.334-.17.712-.229 1.08-.17l.158.031.01.003 1.343.36-.359-1.345a1.77 1.77 0 0 1 .137-1.247 5.23 5.23 0 0 0 .538-2.041 2.356 2.356 0 0 0 1.544-1 6.808 6.808 0 0 1-.676 3.742v.001c-.034.066-.031.116-.025.14l.36 1.345a1.572 1.572 0 0 1-1.823 1.945l-.1-.024-1.334-.357a.2.2 0 0 0-.14.018l-.012.005A6.825 6.825 0 1 1 7.259 1.856Zm4.837-1.36c.434 0 .785.352.785.786v1.905h1.9a.785.785 0 0 1 0 1.57h-1.9v1.9a.786.786 0 1 1-1.57 0v-1.9H9.404a.785.785 0 0 1 0-1.57h1.906V1.282c0-.434.352-.787.785-.787Z" fill="currentColor"></path></svg>'
);
function Qa(a, e) {
	let t = oe(e, "classNames", 3, "");
	var r = Ya();
	L(() => ee(r, 0, _e(t()))), x(a, r);
}
var $a = Le(
	'<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 12 12"><path d="M10.4646 6.85139C10.7605 6.85139 11 7.09093 11 7.38679V7.78965C11 8.35479 11.0013 8.82459 10.9581 9.20053C10.9136 9.58762 10.8165 9.94247 10.5745 10.2495C10.478 10.3719 10.3672 10.4826 10.2448 10.5791C9.93774 10.8212 9.58211 10.9183 9.19497 10.9628C8.81915 11.006 8.34979 11.0055 7.78496 11.0055H4.21503C3.6502 11.0055 3.18083 11.006 2.80502 10.9628C2.41788 10.9183 2.06224 10.8212 1.75515 10.5791C1.63274 10.4826 1.52198 10.3718 1.42554 10.2495C1.18354 9.94248 1.08635 9.58761 1.04186 9.20053C0.998661 8.82458 1 8.35479 1 7.78965V7.38679C1.00003 7.09093 1.23954 6.85139 1.53541 6.85139C1.83128 6.85139 2.07078 7.09093 2.07081 7.38679V7.78965C2.07081 8.38023 2.07202 8.77788 2.10656 9.07845C2.13978 9.36728 2.19822 9.49857 2.26701 9.58595C2.31143 9.64228 2.3625 9.69333 2.41873 9.73767C2.50614 9.80657 2.63774 9.86487 2.9271 9.89812C3.2276 9.93264 3.62467 9.93387 4.21503 9.93387H7.78496C8.37532 9.93387 8.77238 9.93264 9.07289 9.89812C9.36227 9.86487 9.49384 9.80658 9.58126 9.73767C9.63752 9.69329 9.68862 9.64222 9.73298 9.58595C9.80176 9.49856 9.86021 9.3673 9.89343 9.07845C9.92796 8.77788 9.92918 8.38023 9.92918 7.78965V7.38679C9.92921 7.09093 10.1687 6.85139 10.4646 6.85139ZM6.01046 1.00034C6.15239 1.0004 6.2885 1.05697 6.3889 1.15729L9.36849 4.13601C9.57767 4.34519 9.57759 4.68454 9.36849 4.89377C9.15925 5.10283 8.8199 5.10294 8.61073 4.89377L6.54586 2.8289V8.02945C6.54586 8.32526 6.30624 8.56559 6.01046 8.56572C5.71472 8.56555 5.47418 8.32523 5.47418 8.02945V2.8289L3.40931 4.89377C3.20011 5.10268 2.86157 5.10279 2.65243 4.89377C2.44341 4.68459 2.44341 4.34519 2.65243 4.13601L5.63114 1.15729C5.73154 1.0569 5.86848 1.00042 6.01046 1.00034Z" fill="currentColor"></path></svg>'
);
function Nt(a, e) {
	let t = oe(e, "classNames", 3, "");
	var r = $a();
	L(() => ee(r, 0, _e(t()))), x(a, r);
}
var e1 = Le(
	'<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 16 16"><path d="M8.795 10.418a.84.84 0 1 1 0 1.681H1.907a.84.84 0 0 1 0-1.681h6.888ZM14.093 3.9a.841.841 0 0 1 0 1.682H1.907a.84.84 0 0 1 0-1.682h12.186Z" fill="currentColor"></path></svg>'
);
function t1(a, e) {
	let t = oe(e, "classNames", 3, "");
	var r = e1();
	L(() => ee(r, 0, _e(t()))), x(a, r);
}
function Ct(a) {
	return Object.prototype.toString.call(a) === "[object Date]";
}
function ot(a, e, t, r) {
	if (typeof t == "number" || Ct(t)) {
		const c = r - t,
			n = (t - e) / (a.dt || 1 / 60),
			f = a.opts.stiffness * c,
			h = a.opts.damping * n,
			l = (f - h) * a.inv_mass,
			P = (n + l) * a.dt;
		return Math.abs(P) < a.opts.precision && Math.abs(c) < a.opts.precision
			? r
			: ((a.settled = !1), Ct(t) ? new Date(t.getTime() + P) : t + P);
	} else {
		if (Array.isArray(t)) return t.map((c, n) => ot(a, e[n], t[n], r[n]));
		if (typeof t == "object") {
			const c = {};
			for (const n in t) c[n] = ot(a, e[n], t[n], r[n]);
			return c;
		} else throw new Error(`Cannot spring ${typeof t} values`);
	}
}
var ke, Ce, Me, ne, be, Pe, De, Ie, Re, fe, Ue, Qe, Dt;
const gt = class gt {
	constructor(e, t = {}) {
		Q(this, Qe);
		Q(this, ke, ze(0.15));
		Q(this, Ce, ze(0.8));
		Q(this, Me, ze(0.01));
		Q(this, ne, ze(void 0));
		Q(this, be, ze(void 0));
		Q(this, Pe);
		Q(this, De, 0);
		Q(this, Ie, 1);
		Q(this, Re, 0);
		Q(this, fe, null);
		Q(this, Ue, null);
		(b(this, ne).v = b(this, be).v = e),
			typeof t.stiffness == "number" && (b(this, ke).v = Xe(t.stiffness, 0, 1)),
			typeof t.damping == "number" && (b(this, Ce).v = Xe(t.damping, 0, 1)),
			typeof t.precision == "number" && (b(this, Me).v = t.precision);
	}
	static of(e, t) {
		const r = new gt(e(), t);
		return (
			Vt(() => {
				r.set(e());
			}),
			r
		);
	}
	set(e, t) {
		var c, n;
		if (
			((c = b(this, Ue)) == null || c.reject(new Error("Aborted")),
			(t != null && t.instant) || b(this, ne).v === void 0)
		)
			return (
				(n = b(this, fe)) == null || n.abort(),
				$(this, fe, null),
				_(b(this, ne), _(b(this, be), e)),
				$(this, Pe, e),
				Promise.resolve()
			);
		t != null && t.preserveMomentum && ($(this, Ie, 0), $(this, Re, t.preserveMomentum));
		var r = $(this, Ue, Ht());
		return (
			r.promise.catch(ct),
			mt(this, Qe, Dt)
				.call(this, e)
				.then(() => {
					r === b(this, Ue) && r.resolve(void 0);
				}),
			r.promise
		);
	}
	get current() {
		return s(b(this, ne));
	}
	get damping() {
		return s(b(this, Ce));
	}
	set damping(e) {
		_(b(this, Ce), Xe(e, 0, 1));
	}
	get precision() {
		return s(b(this, Me));
	}
	set precision(e) {
		_(b(this, Me), e);
	}
	get stiffness() {
		return s(b(this, ke));
	}
	set stiffness(e) {
		_(b(this, ke), Xe(e, 0, 1));
	}
	get target() {
		return s(b(this, be));
	}
	set target(e) {
		this.set(e);
	}
};
(ke = new WeakMap()),
	(Ce = new WeakMap()),
	(Me = new WeakMap()),
	(ne = new WeakMap()),
	(be = new WeakMap()),
	(Pe = new WeakMap()),
	(De = new WeakMap()),
	(Ie = new WeakMap()),
	(Re = new WeakMap()),
	(fe = new WeakMap()),
	(Ue = new WeakMap()),
	(Qe = new WeakSet()),
	(Dt = function (e) {
		var r;
		if (
			(_(b(this, be), e),
			(r = b(this, ne)).v ?? (r.v = e),
			b(this, Pe) ?? $(this, Pe, b(this, ne).v),
			!b(this, fe))
		) {
			$(this, De, na.now());
			var t = 1e3 / (b(this, Re) * 60);
			b(this, fe) ??
				$(
					this,
					fe,
					sa((c) => {
						$(this, Ie, Math.min(b(this, Ie) + t, 1));
						const n = Math.min(c - b(this, De), 1e3 / 30),
							f = {
								inv_mass: b(this, Ie),
								opts: {
									stiffness: b(this, ke).v,
									damping: b(this, Ce).v,
									precision: b(this, Me).v,
								},
								settled: !0,
								dt: (n * 60) / 1e3,
							};
						var h = ot(f, b(this, Pe), b(this, ne).v, b(this, be).v);
						return (
							$(this, Pe, b(this, ne).v),
							$(this, De, c),
							_(b(this, ne), h),
							f.settled && $(this, fe, null),
							!f.settled
						);
					})
				);
		}
		return b(this, fe).promise;
	});
let it = gt;
function Xe(a, e, t) {
	return Math.max(e, Math.min(t, a));
}
let pe = te(!1);
function a1(a, e) {
	_(e, !1);
}
var r1 = (a, e) => _(e, !0),
	n1 = B(
		'<span class="max-w-full truncate px-4 first-letter:uppercase" data-testid="chat-title"> </span>'
	),
	s1 = (a, e) => {
		s(e) && At.open();
	},
	o1 = B(
		'<button type="button" class="flex size-8 shrink-0 items-center justify-center text-lg" aria-label="Share conversation"><!></button>'
	),
	i1 = (a) => {
		he() && a.preventDefault();
	},
	l1 = B(
		'<button type="button" class="fixed inset-0 z-20 cursor-default bg-black/30 md:hidden" aria-label="Close mobile navigation"></button>'
	),
	c1 = B(
		'<nav class="flex h-12 items-center justify-between rounded-b-xl border-b bg-gray-50 px-3 dark:border-gray-800 dark:bg-gray-800/30 dark:shadow-xl md:hidden"><button type="button" class="-ml-3 flex size-12 shrink-0 items-center justify-center text-lg" aria-label="Open menu"><!></button> <div class="flex h-full items-center justify-center overflow-hidden"><!></div> <div class="flex items-center"><!> <a class="flex size-8 shrink-0 items-center justify-center text-lg"><!></a></div></nav> <!> <nav><!></nav>',
		1
	);
function d1(a, e) {
	ye(e, !0);
	const [t, r] = dt(),
		c = () => Ne(Bt, "$loading", t);
	let n = oe(e, "title", 15),
		f,
		h = te(void 0);
	const l = le(() => {
			var k, M;
			return !!((M = (k = R.data) == null ? void 0 : k.publicConfig) != null && M.isHuggingChat);
		}),
		P = le(() => {
			var k, M;
			return (
				s(l) &&
				!c() &&
				!!((k = R.params) != null && k.id) &&
				((M = R.route.id) == null ? void 0 : M.startsWith("/conversation/"))
			);
		}),
		y = it.of(() => (s(pe) ? 0 : -100), { stiffness: 0.2, damping: 0.8 });
	xe(() => {
		n(n() ?? "New Chat");
	}),
		Gt(() => {
			_(pe, !1);
		});
	let w = le(() => s(pe) && f),
		D = le(() => !s(pe) && fa && document.activeElement === f);
	xe(() => {
		var k;
		s(w) || (s(D) && ((k = s(h)) == null || k.focus()));
	});
	var Z = c1(),
		o = K(Z),
		p = u(o);
	p.__click = [r1, pe];
	var C = u(p);
	t1(C, {}),
		g(p),
		vt(
			p,
			(k) => _(h, k),
			() => s(h)
		);
	var O = i(p, 2),
		q = u(O);
	{
		var F = (k) => {
			var M = n1(),
				ie = u(M, !0);
			g(M), L(() => me(ie, n())), x(k, M);
		};
		N(q, (k) => {
			var M;
			(M = R.params) != null && M.id && k(F);
		});
	}
	g(O);
	var U = i(O, 2),
		j = u(U);
	{
		var S = (k) => {
			var M = o1();
			M.__click = [s1, P];
			var ie = u(M);
			const Be = le(() => (s(P) ? "" : "opacity-40"));
			Nt(ie, {
				get classNames() {
					return s(Be);
				},
			}),
				g(M),
				L(() => (M.disabled = !s(P))),
				x(k, M);
		};
		N(j, (k) => {
			s(l) && k(S);
		});
	}
	var I = i(j, 2);
	I.__click = [i1];
	var V = u(I);
	Qa(V, {}), g(I), g(U), g(o);
	var J = i(o, 2);
	{
		var ce = (k) => {
			var M = l1();
			(M.__click = [a1, pe]),
				L(
					(ie) => ht(M, `opacity: ${ie ?? ""};`),
					[() => Math.max(0, Math.min(1, (100 + y.current) / 100))]
				),
				x(k, M);
		};
		N(J, (k) => {
			s(pe) && k(ce);
		});
	}
	var X = i(J, 2);
	let ae;
	var Y = u(X);
	Lt(Y, () => e.children ?? ct),
		g(X),
		L(
			(k, M) => {
				G(I, "href", `${se ?? ""}/`),
					ht(X, `transform: translateX(${k ?? ""}%); width: 85%;`),
					(ae = ee(
						X,
						1,
						`fixed bottom-0 left-0 top-0 z-30 grid max-h-screen grid-cols-1\r
	grid-rows-[auto,1fr,auto,auto] rounded-r-xl bg-white pt-4 dark:bg-gray-900 md:hidden`,
						null,
						ae,
						M
					));
			},
			[
				() => Math.max(-100, Math.min(0, y.current)),
				() => ({ "shadow-[5px_0_15px_0_rgba(0,0,0,0.3)]": s(pe) }),
			]
		),
		x(a, Z),
		we(),
		r();
}
Se(["click"]);
var v1 = B(
	`<div class="flex w-full flex-col gap-8 bg-white bg-gradient-to-b to-transparent px-6 pb-7 dark:bg-black dark:from-white/10 dark:to-white/5"><div class="relative -mx-6 grid h-48 select-none place-items-center bg-gradient-to-t from-black/5 dark:from-white/10"><video class="size-full object-cover" autoplay src="https://cdn-uploads.huggingface.co/production/uploads/5f17f0a0925b9863e28ad517/WSOTmErfqlGNZwSqdfrA7.mp4"></video> <div class="absolute bottom-3 right-3 rounded-lg border border-blue-500/20 bg-blue-500/20 px-2 py-0.5 text-sm font-semibold text-blue-500">Now with MCP!</div></div> <div class="text-gray-700 dark:text-gray-200"><p class="text-[15px] leading-relaxed"> </p> <p class="mt-3 text-[15px] leading-relaxed"><!> Omni automatically picks the best AI model to give
				you optimal answers depending on your requests.</p> <p class="mt-3 text-[15px] leading-relaxed">You can also choose from any available open source models to chat with directly.</p></div> <button class="k w-full rounded-xl bg-black px-5 py-2.5 text-base font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">Start chatting</button></div>`,
	2
);
function g1(a, e) {
	ye(e, !0);
	const t = Mt();
	Zt(a, {
		closeOnBackdrop: !1,
		get onclose() {
			return e.close;
		},
		width: "!max-w-[420px] !m-4",
		children: (r, c) => {
			var n = v1(),
				f = u(n),
				h = u(f);
			(h.muted = !0), rt(2), g(f);
			var l = i(f, 2),
				P = u(l),
				y = u(P);
			g(P);
			var w = i(P, 2),
				D = u(w);
			ma(D, { classNames: "-translate-y-px" }), rt(), g(w), rt(2), g(l);
			var Z = i(l, 2);
			(Z.__click = function (...o) {
				var p;
				(p = e.close) == null || p.apply(this, o);
			}),
				g(n),
				L(() =>
					me(
						y,
						`Welcome to ${t.PUBLIC_APP_NAME ?? ""}, the chat app powered by open source AI models.`
					)
				),
				x(r, n);
		},
		$$slots: { default: !0 },
	}),
		we();
}
Se(["click"]);
var u1 = B(
	'<button name="sidebar-toggle" aria-label="Toggle sidebar navigation"><div></div> <div></div></button>'
);
function f1(a, e) {
	var t = u1();
	t.__click = function (...n) {
		var f;
		(f = e.onClick) == null || f.apply(this, n);
	};
	var r = u(t),
		c = i(r, 2);
	g(t),
		L(() => {
			ee(
				t,
				1,
				`${e.classNames ?? ""} group flex h-16 w-6 flex-col items-center justify-center -space-y-1 outline-none *:h-3 *:w-1 *:rounded-full *:hover:bg-gray-300 dark:*:hover:bg-gray-600 max-md:hidden ${e.isCollapsed ? "*:bg-gray-200 dark:*:bg-gray-700" : "*:bg-gray-200/70 dark:*:bg-gray-800"}`
			),
				ee(r, 1, _e(e.isCollapsed ? "group-hover:-rotate-[20deg]" : "group-hover:rotate-[20deg]")),
				ee(c, 1, _e(e.isCollapsed ? "group-hover:rotate-[20deg]" : "group-hover:-rotate-[20deg]"));
		}),
		x(a, t);
}
Se(["click"]);
function m1(a, e) {
	ye(e, !0);
	const t = 1e3,
		r = 3 * 6e4,
		c = $e(),
		n = new Map(),
		f = new Set(),
		h = new Map(),
		l = new Map();
	qt(() => {
		let P = !1;
		const y = (...o) => {},
			w = (o, p) => {
				const C = n.get(o);
				C && (C(), n.delete(o), f.delete(o), h.delete(o), l.delete(o));
			},
			D = async (o) => {
				var C, O, q, F;
				if (P || f.has(o)) return;
				const p = _t.find((U) => U.id === o);
				if (p && Date.now() - p.startedAt > r) {
					nt(o), w(o), await je(Te.ConversationList), await je(Te.Conversation);
					return;
				}
				f.add(o);
				try {
					const U = await c.conversations({ id: o }).get({ query: {} }),
						j = ge(U),
						I = [...((j == null ? void 0 : j.messages) ?? [])]
							.reverse()
							.find((Y) => Y.from === "assistant"),
						V =
							((C = I == null ? void 0 : I.updates) == null
								? void 0
								: C.some((Y) => Y.type === xt.FinalAnswer)) ?? !1,
						J =
							((O = I == null ? void 0 : I.updates) == null
								? void 0
								: O.some((Y) => Y.type === xt.Status && Y.status === ca.Error)) ?? !1,
						ce = I
							? JSON.stringify({
									id: I.id,
									updatedAt: I.updatedAt,
									contentLength: ((q = I.content) == null ? void 0 : q.length) ?? 0,
									updatesLength: ((F = I.updates) == null ? void 0 : F.length) ?? 0,
								})
							: "__none__",
						X = h.get(o);
					let ae = !1;
					I ? (h.set(o, ce), ce !== X && (ae = !0)) : h.has(o) && (h.delete(o), (ae = !0)),
						I &&
							(V || J) &&
							(nt(o),
							h.delete(o),
							l.delete(o),
							(ae = !0),
							y("complete", o, V ? "final" : "error"),
							await je(Te.ConversationList)),
						ae && (await je(Te.Conversation)),
						l.delete(o);
				} catch (U) {
					console.error("Background generation poll failed", o, U);
					const j = (l.get(o) ?? 0) + 1;
					l.set(o, j), j >= 3 && (nt(o), h.delete(o), l.delete(o), await je(Te.ConversationList));
				} finally {
					f.delete(o);
				}
			},
			Z = (o) => {
				if (n.has(o.id)) return;
				const p = setInterval(() => {
					D(o.id);
				}, t);
				n.set(o.id, () => clearInterval(p)), D(o.id), y("start", o.id);
			};
		return (
			xe(() => {
				const o = _t;
				if (P) return;
				const p = new Set(o.map((C) => C.id));
				for (const C of n.keys()) p.has(C) || w(C);
				for (const C of o) Z(C);
			}),
			() => {
				P = !0;
				for (const o of n.values()) o();
				n.clear(), f.clear(), h.clear(), l.clear();
			}
		);
	}),
		we();
}
var h1 = B(
		'<meta property="og:title"/> <meta property="og:type" content="website"/> <meta property="og:url"/> <meta property="og:image"/> <meta property="og:description"/>',
		1
	),
	p1 = B(
		'<link rel="icon" type="image/svg+xml" media="(prefers-color-scheme: light)"/> <link rel="icon" type="image/svg+xml" media="(prefers-color-scheme: dark)"/>',
		1
	),
	b1 = B('<link rel="icon" type="image/svg+xml"/>'),
	x1 = St(B("<script async><\/script><!>", 1)),
	_1 = B('<meta name="apple-itunes-app"/>'),
	y1 = B(
		'<meta name="description"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:site" content="@huggingface"/>  <!> <link rel="icon" type="image/svg+xml"/> <!> <link rel="apple-touch-icon"/> <link rel="manifest"/> <!> <!>',
		1
	),
	w1 = () => At.open(),
	k1 = B('<button type="button" aria-label="Share conversation"><!></button>'),
	C1 = St(
		B(
			`<script>
			(window.plausible =
				window.plausible ||
				function () {
					(plausible.q = plausible.q || []).push(arguments);
				}),
				(plausible.init =
					plausible.init ||
					function (i) {
						plausible.o = i || {};
					});
			plausible.init();
		<\/script><!>`,
			1
		)
	),
	M1 = B(
		'<!> <!> <div><!> <!> <!> <nav class="grid max-h-screen grid-cols-1 grid-rows-[auto,1fr,auto] overflow-hidden *:w-[290px] max-md:hidden"><!></nav> <!> <!> <!></div>',
		1
	);
function Q1(a, e) {
	ye(e, !0);
	const [t, r] = dt(),
		c = () => Ne(Je, "$error", t),
		n = () => Ne(yt, "$titleUpdate", t),
		f = () => Ne(F, "$settings", t),
		h = () => Ne(Bt, "$loading", t);
	Wt("publicConfig", e.data.publicConfig);
	const l = e.data.publicConfig,
		P = $e();
	let y = te(Pt(e.data.conversations));
	xe(() => {
		e.data.conversations && Kt(() => _(y, e.data.conversations, !0));
	});
	let w = te(!1),
		D,
		Z = te(void 0);
	async function o() {
		c() &&
			s(Z) &&
			c() !== s(Z) &&
			(clearTimeout(D), _(Z, void 0), await new Promise((d) => setTimeout(d, 300))),
			_(Z, c(), !0),
			(D = setTimeout(() => {
				Ke(Je, void 0), _(Z, void 0);
			}, 5e3));
	}
	let p = le(() => {
		var d, m;
		return (
			l.isHuggingChat &&
			!!((d = R.params) != null && d.id) &&
			((m = R.route.id) == null ? void 0 : m.startsWith("/conversation/"))
		);
	});
	async function C(d) {
		P.conversations({ id: d })
			.delete()
			.then(ge)
			.then(async () => {
				_(
					y,
					s(y).filter((m) => m.id !== d),
					!0
				),
					R.params.id === d && (await We(`${se}/`, { invalidateAll: !0 }));
			})
			.catch((m) => {
				console.error(m), Ke(Je, String(m));
			});
	}
	async function O(d, m) {
		P.conversations({ id: d })
			.patch({ title: m })
			.then(ge)
			.then(async () => {
				_(
					y,
					s(y).map((T) => (T.id === d ? { ...T, title: m } : T)),
					!0
				);
			})
			.catch((T) => {
				console.error(T), Ke(Je, String(T));
			});
	}
	function q() {
		he() || F.set({ welcomeModalSeen: !0 });
	}
	st(() => {
		clearTimeout(D);
	}),
		xe(() => {
			c() && o();
		}),
		xe(() => {
			var d;
			if (n()) {
				const m = s(y).findIndex(({ id: T }) => {
					var v;
					return T === ((v = n()) == null ? void 0 : v.convId);
				});
				m != -1 && (s(y)[m].title = ((d = n()) == null ? void 0 : d.title) ?? s(y)[m].title),
					Ke(yt, null);
			}
		});
	const F = zt(e.data.settings);
	lt(async () => {
		if (
			(R.url.searchParams.has("model") &&
				(await F.instantSet({
					activeModel: R.url.searchParams.get("model") ?? f().activeModel,
				}).then(async () => {
					const m = new URLSearchParams(R.url.searchParams.toString());
					m.delete("model"), await We(`${se}/?${m.toString()}`, { invalidateAll: !0 });
				})),
			R.url.searchParams.has("token"))
		) {
			const m = R.url.searchParams.get("token");
			await fetch(`${se}/api/user/validate-token`, {
				method: "POST",
				body: JSON.stringify({ token: m }),
			}).then(() => {
				We(`${se}/`, { invalidateAll: !0 });
			});
		}
		const d = (m) => {
			var E;
			const T = document.getElementById("app");
			if (T != null && T.hasAttribute("inert")) return;
			const v = ((E = m.key) == null ? void 0 : E.toLowerCase()) === "o",
				A = m.metaKey || m.ctrlKey;
			if (v && m.shiftKey && A) {
				if ((m.preventDefault(), Tt.set(!0), he())) return;
				We(`${se}/`, { invalidateAll: !0 });
			}
		};
		window.addEventListener("keydown", d, { capture: !0 }),
			st(() => window.removeEventListener("keydown", d, { capture: !0 }));
	});
	let U = le(() => {
			var d;
			return ["/models", "/privacy"].includes(R.route.id ?? "")
				? ""
				: (d = s(y).find((m) => m.id === R.params.id)) == null
					? void 0
					: d.title;
		}),
		j = le(() => {
			var d;
			return (
				!f().welcomeModalSeen &&
				!(R.data.shared === !0 && (d = R.route.id) != null && d.startsWith("/conversation/"))
			);
		});
	var S = M1();
	Xt((d) => {
		var m = y1(),
			T = K(m),
			v = i(T, 6);
		{
			var A = (z) => {
				var W = h1(),
					ve = K(W),
					qe = i(ve, 4),
					ut = i(qe, 2),
					Ut = i(ut, 2);
				L(() => {
					G(ve, "content", l.PUBLIC_APP_NAME),
						G(qe, "content", `${(l.PUBLIC_ORIGIN || R.url.origin) ?? ""}${se ?? ""}`),
						G(ut, "content", `${l.assetPath ?? ""}/thumbnail.png`),
						G(Ut, "content", l.PUBLIC_APP_DESCRIPTION);
				}),
					x(z, W);
			};
			N(v, (z) => {
				R.url.pathname.includes("/models/") || z(A);
			});
		}
		var E = i(v, 2),
			de = i(E, 2);
		{
			var re = (z) => {
					var W = p1(),
						ve = K(W),
						qe = i(ve, 2);
					L(() => {
						G(ve, "href", `${l.assetPath ?? ""}/favicon.svg`),
							G(qe, "href", `${l.assetPath ?? ""}/favicon-dark.svg`);
					}),
						x(z, W);
				},
				H = (z) => {
					var W = b1();
					L(() => G(W, "href", `${l.assetPath ?? ""}/favicon-dev.svg`)), x(z, W);
				};
			N(de, (z) => {
				l.PUBLIC_ORIGIN ? z(re) : z(H, !1);
			});
		}
		var ue = i(de, 2),
			Ve = i(ue, 2),
			Ae = i(Ve, 2);
		{
			var He = (z) => {
				var W = x1(),
					ve = K(W);
				i(ve), L(() => G(ve, "src", l.PUBLIC_PLAUSIBLE_SCRIPT_URL)), x(z, W);
			};
			N(Ae, (z) => {
				l.PUBLIC_PLAUSIBLE_SCRIPT_URL && z(He);
			});
		}
		var Oe = i(Ae, 2);
		{
			var tt = (z) => {
				var W = _1();
				L(() => G(W, "content", `app-id=${l.PUBLIC_APPLE_APP_ID}`)), x(z, W);
			};
			N(Oe, (z) => {
				l.PUBLIC_APPLE_APP_ID && z(tt);
			});
		}
		L(() => {
			(Jt.title = l.PUBLIC_APP_NAME),
				G(T, "content", l.PUBLIC_APP_DESCRIPTION),
				G(E, "href", `${l.assetPath ?? ""}/icon.svg`),
				G(ue, "href", `${l.assetPath ?? ""}/apple-touch-icon.png`),
				G(Ve, "href", `${l.assetPath ?? ""}/manifest.json`);
		}),
			x(d, m);
	});
	var I = K(S);
	{
		var V = (d) => {
			g1(d, { close: q });
		};
		N(I, (d) => {
			s(j) && d(V);
		});
	}
	var J = i(I, 2);
	m1(J, {});
	var ce = i(J, 2),
		X = u(ce);
	const ae = le(() => (s(w) ? "left-0" : "left-[290px]"));
	f1(X, {
		get isCollapsed() {
			return s(w);
		},
		onClick: () => _(w, !s(w)),
		get classNames() {
			return `absolute inset-y-0 z-10 my-auto ${s(ae) ?? ""} *:transition-transform`;
		},
	});
	var Y = i(X, 2);
	{
		var k = (d) => {
			var m = k1();
			m.__click = [w1];
			var T = u(m);
			Nt(T, {}),
				g(m),
				L(() => {
					ee(
						m,
						1,
						`hidden size-8 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white/90 text-sm font-medium text-gray-700 shadow-sm hover:bg-white/60 hover:text-gray-500 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-700 md:absolute md:right-6 md:top-5 md:flex
				${h() ? "cursor-not-allowed opacity-40" : ""}`
					),
						(m.disabled = h());
				}),
				x(d, m);
		};
		N(Y, (d) => {
			s(p) && d(k);
		});
	}
	var M = i(Y, 2);
	d1(M, {
		get title() {
			return s(U);
		},
		children: (d, m) => {
			kt(d, {
				get conversations() {
					return s(y);
				},
				get user() {
					return e.data.user;
				},
				ondeleteConversation: (T) => C(T),
				oneditConversationTitle: (T) => O(T.id, T.title),
			});
		},
		$$slots: { default: !0 },
	});
	var ie = i(M, 2),
		Be = u(ie);
	kt(Be, {
		get conversations() {
			return s(y);
		},
		get user() {
			return e.data.user;
		},
		ondeleteConversation: (d) => C(d),
		oneditConversationTitle: (d) => O(d.id, d.title),
	}),
		g(ie);
	var Ge = i(ie, 2);
	{
		var Fe = (d) => {
			_a(d, {
				get message() {
					return s(Z);
				},
			});
		};
		N(Ge, (d) => {
			s(Z) && d(Fe);
		});
	}
	var Ze = i(Ge, 2);
	Lt(Ze, () => e.children ?? ct);
	var Ee = i(Ze, 2);
	{
		var et = (d) => {
			var m = C1();
			i(K(m)), x(d, m);
		};
		N(Ee, (d) => {
			l.PUBLIC_PLAUSIBLE_SCRIPT_URL && d(et);
		});
	}
	g(ce),
		L(() =>
			ee(
				ce,
				1,
				`fixed grid h-full w-screen grid-cols-1 grid-rows-[auto,1fr] overflow-hidden text-smd ${s(w) ? "md:grid-cols-[0px,1fr]" : "md:grid-cols-[290px,1fr]"} transition-[300ms] [transition-property:grid-template-columns] dark:text-gray-300 md:grid-rows-[1fr]`
			)
		),
		x(a, S),
		we(),
		r();
}
Se(["click"]);
export { Q1 as component, Y1 as universal };
