import {
	H as HYDRATION_ERROR,
	g as get_next_sibling,
	a as active_effect,
	i as init_operations,
	b as get_first_child,
	c as HYDRATION_START,
	d as HYDRATION_END,
	h as hydration_failed,
	e as clear_text_content,
	f as array_from,
	j as component_root,
	k as create_text,
	l as branch,
	p as push,
	m as component_context,
	n as pop,
	s as set,
	L as LEGACY_PROPS,
	o as get,
	q as flushSync,
	r as define_property,
	t as mutable_source,
} from "./utils.js";
import {
	a as all_registered_events,
	r as root_event_handles,
	h as handle_event_propagation,
} from "./events.js";
import {
	i as is_passive_event,
	r as render,
	p as push$1,
	s as setContext,
	a as pop$1,
} from "./index3.js";
import "clsx";
import "./environment.js";
import "./paths.js";
import "./shared-server.js";
function hydration_mismatch(location) {
	{
		console.warn(`https://svelte.dev/e/hydration_mismatch`);
	}
}
let hydrating = false;
function set_hydrating(value) {
	hydrating = value;
}
let hydrate_node;
function set_hydrate_node(node) {
	if (node === null) {
		hydration_mismatch();
		throw HYDRATION_ERROR;
	}
	return (hydrate_node = node);
}
function hydrate_next() {
	return set_hydrate_node(
		/** @type {TemplateNode} */
		get_next_sibling(hydrate_node)
	);
}
function assign_nodes(start, end) {
	var effect =
		/** @type {Effect} */
		active_effect;
	if (effect.nodes_start === null) {
		effect.nodes_start = start;
		effect.nodes_end = end;
	}
}
function mount(component, options2) {
	return _mount(component, options2);
}
function hydrate(component, options2) {
	init_operations();
	options2.intro = options2.intro ?? false;
	const target = options2.target;
	const was_hydrating = hydrating;
	const previous_hydrate_node = hydrate_node;
	try {
		var anchor =
			/** @type {TemplateNode} */
			get_first_child(target);
		while (
			anchor &&
			(anchor.nodeType !== 8 || /** @type {Comment} */ anchor.data !== HYDRATION_START)
		) {
			anchor = /** @type {TemplateNode} */ get_next_sibling(anchor);
		}
		if (!anchor) {
			throw HYDRATION_ERROR;
		}
		set_hydrating(true);
		set_hydrate_node(
			/** @type {Comment} */
			anchor
		);
		hydrate_next();
		const instance = _mount(component, { ...options2, anchor });
		if (
			hydrate_node === null ||
			hydrate_node.nodeType !== 8 ||
			/** @type {Comment} */
			hydrate_node.data !== HYDRATION_END
		) {
			hydration_mismatch();
			throw HYDRATION_ERROR;
		}
		set_hydrating(false);
		return (
			/**  @type {Exports} */
			instance
		);
	} catch (error) {
		if (error === HYDRATION_ERROR) {
			if (options2.recover === false) {
				hydration_failed();
			}
			init_operations();
			clear_text_content(target);
			set_hydrating(false);
			return mount(component, options2);
		}
		throw error;
	} finally {
		set_hydrating(was_hydrating);
		set_hydrate_node(previous_hydrate_node);
	}
}
const document_listeners = /* @__PURE__ */ new Map();
function _mount(Component, { target, anchor, props = {}, events, context, intro = true }) {
	init_operations();
	var registered_events = /* @__PURE__ */ new Set();
	var event_handle = (events2) => {
		for (var i = 0; i < events2.length; i++) {
			var event_name = events2[i];
			if (registered_events.has(event_name)) continue;
			registered_events.add(event_name);
			var passive = is_passive_event(event_name);
			target.addEventListener(event_name, handle_event_propagation, { passive });
			var n = document_listeners.get(event_name);
			if (n === void 0) {
				document.addEventListener(event_name, handle_event_propagation, { passive });
				document_listeners.set(event_name, 1);
			} else {
				document_listeners.set(event_name, n + 1);
			}
		}
	};
	event_handle(array_from(all_registered_events));
	root_event_handles.add(event_handle);
	var component = void 0;
	var unmount2 = component_root(() => {
		var anchor_node = anchor ?? target.appendChild(create_text());
		branch(() => {
			if (context) {
				push({});
				var ctx =
					/** @type {ComponentContext} */
					component_context;
				ctx.c = context;
			}
			if (events) {
				props.$$events = events;
			}
			if (hydrating) {
				assign_nodes(
					/** @type {TemplateNode} */
					anchor_node,
					null
				);
			}
			component = Component(anchor_node, props) || {};
			if (hydrating) {
				active_effect.nodes_end = hydrate_node;
			}
			if (context) {
				pop();
			}
		});
		return () => {
			for (var event_name of registered_events) {
				target.removeEventListener(event_name, handle_event_propagation);
				var n =
					/** @type {number} */
					document_listeners.get(event_name);
				if (--n === 0) {
					document.removeEventListener(event_name, handle_event_propagation);
					document_listeners.delete(event_name);
				} else {
					document_listeners.set(event_name, n);
				}
			}
			root_event_handles.delete(event_handle);
			if (anchor_node !== anchor) {
				anchor_node.parentNode?.removeChild(anchor_node);
			}
		};
	});
	mounted_components.set(component, unmount2);
	return component;
}
let mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(component, options2) {
	const fn = mounted_components.get(component);
	if (fn) {
		mounted_components.delete(component);
		return fn(options2);
	}
	return Promise.resolve();
}
function asClassComponent$1(component) {
	return class extends Svelte4Component {
		/** @param {any} options */
		constructor(options2) {
			super({
				component,
				...options2,
			});
		}
	};
}
class Svelte4Component {
	/** @type {any} */
	#events;
	/** @type {Record<string, any>} */
	#instance;
	/**
	 * @param {ComponentConstructorOptions & {
	 *  component: any;
	 * }} options
	 */
	constructor(options2) {
		var sources = /* @__PURE__ */ new Map();
		var add_source = (key, value) => {
			var s = mutable_source(value);
			sources.set(key, s);
			return s;
		};
		const props = new Proxy(
			{ ...(options2.props || {}), $$events: {} },
			{
				get(target, prop) {
					return get(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
				},
				has(target, prop) {
					if (prop === LEGACY_PROPS) return true;
					get(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
					return Reflect.has(target, prop);
				},
				set(target, prop, value) {
					set(sources.get(prop) ?? add_source(prop, value), value);
					return Reflect.set(target, prop, value);
				},
			}
		);
		this.#instance = (options2.hydrate ? hydrate : mount)(options2.component, {
			target: options2.target,
			anchor: options2.anchor,
			props,
			context: options2.context,
			intro: options2.intro ?? false,
			recover: options2.recover,
		});
		if (!options2?.props?.$$host || options2.sync === false) {
			flushSync();
		}
		this.#events = props.$$events;
		for (const key of Object.keys(this.#instance)) {
			if (key === "$set" || key === "$destroy" || key === "$on") continue;
			define_property(this, key, {
				get() {
					return this.#instance[key];
				},
				/** @param {any} value */
				set(value) {
					this.#instance[key] = value;
				},
				enumerable: true,
			});
		}
		this.#instance.$set =
			/** @param {Record<string, any>} next */
			(next) => {
				Object.assign(props, next);
			};
		this.#instance.$destroy = () => {
			unmount(this.#instance);
		};
	}
	/** @param {Record<string, any>} props */
	$set(props) {
		this.#instance.$set(props);
	}
	/**
	 * @param {string} event
	 * @param {(...args: any[]) => any} callback
	 * @returns {any}
	 */
	$on(event, callback) {
		this.#events[event] = this.#events[event] || [];
		const cb = (...args) => callback.call(this, ...args);
		this.#events[event].push(cb);
		return () => {
			this.#events[event] = this.#events[event].filter(
				/** @param {any} fn */
				(fn) => fn !== cb
			);
		};
	}
	$destroy() {
		this.#instance.$destroy();
	}
}
let read_implementation = null;
function set_read_implementation(fn) {
	read_implementation = fn;
}
function set_manifest(_) {}
function asClassComponent(component) {
	const component_constructor = asClassComponent$1(component);
	const _render = (props, { context } = {}) => {
		const result = render(component, { props, context });
		return {
			css: { code: "", map: null },
			head: result.head,
			html: result.body,
		};
	};
	component_constructor.render = _render;
	return component_constructor;
}
function Root($$payload, $$props) {
	push$1();
	let {
		stores,
		page,
		constructors,
		components = [],
		form,
		data_0 = null,
		data_1 = null,
		data_2 = null,
		data_3 = null,
	} = $$props;
	{
		setContext("__svelte__", stores);
	}
	{
		stores.page.set(page);
	}
	const Pyramid_3 = constructors[3];
	if (constructors[1]) {
		$$payload.out += "<!--[-->";
		const Pyramid_0 = constructors[0];
		$$payload.out += `<!---->`;
		Pyramid_0($$payload, {
			data: data_0,
			form,
			children: ($$payload2) => {
				if (constructors[2]) {
					$$payload2.out += "<!--[-->";
					const Pyramid_1 = constructors[1];
					$$payload2.out += `<!---->`;
					Pyramid_1($$payload2, {
						data: data_1,
						form,
						children: ($$payload3) => {
							if (constructors[3]) {
								$$payload3.out += "<!--[-->";
								const Pyramid_2 = constructors[2];
								$$payload3.out += `<!---->`;
								Pyramid_2($$payload3, {
									data: data_2,
									form,
									children: ($$payload4) => {
										$$payload4.out += `<!---->`;
										Pyramid_3($$payload4, { data: data_3, form });
										$$payload4.out += `<!---->`;
									},
									$$slots: { default: true },
								});
								$$payload3.out += `<!---->`;
							} else {
								$$payload3.out += "<!--[!-->";
								const Pyramid_2 = constructors[2];
								$$payload3.out += `<!---->`;
								Pyramid_2($$payload3, { data: data_2, form });
								$$payload3.out += `<!---->`;
							}
							$$payload3.out += `<!--]-->`;
						},
						$$slots: { default: true },
					});
					$$payload2.out += `<!---->`;
				} else {
					$$payload2.out += "<!--[!-->";
					const Pyramid_1 = constructors[1];
					$$payload2.out += `<!---->`;
					Pyramid_1($$payload2, { data: data_1, form });
					$$payload2.out += `<!---->`;
				}
				$$payload2.out += `<!--]-->`;
			},
			$$slots: { default: true },
		});
		$$payload.out += `<!---->`;
	} else {
		$$payload.out += "<!--[!-->";
		const Pyramid_0 = constructors[0];
		$$payload.out += `<!---->`;
		Pyramid_0($$payload, { data: data_0, form });
		$$payload.out += `<!---->`;
	}
	$$payload.out += `<!--]--> `;
	{
		$$payload.out += "<!--[!-->";
	}
	$$payload.out += `<!--]-->`;
	pop$1();
}
const root = asClassComponent(Root);
const options = {
	app_template_contains_nonce: false,
	csp: {
		mode: "auto",
		directives: { "upgrade-insecure-requests": false, "block-all-mixed-content": false },
		reportOnly: { "upgrade-insecure-requests": false, "block-all-mixed-content": false },
	},
	csrf_check_origin: false,
	embedded: false,
	env_public_prefix: "PUBLIC_",
	env_private_prefix: "",
	hash_routing: false,
	hooks: null,
	// added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) =>
			`<!doctype html>\r
<html lang="en" class="h-full">\r
	<head>\r
		<meta charset="utf-8" />\r
		<meta name="viewport" content="width=device-width, initial-scale=1" />\r
		<meta name="theme-color" content="rgb(249, 250, 251)" />\r
		<script>\r
			(function () {\r
				try {\r
					var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;\r
					var stored = localStorage.getItem("theme");\r
					var followSystem = stored === null || stored === "system";\r
					var isDark = stored === "dark" || (followSystem && prefersDark);\r
					if (isDark) {\r
						document.documentElement.classList.add("dark");\r
						document.querySelector('meta[name="theme-color"]').setAttribute("content", "#07090d");\r
					}\r
				} catch (e) {}\r
			})();\r
\r
			// For some reason, Sveltekit doesn't let us load env variables from .env here, so we load it from hooks.server.ts\r
			window.gaId = "%gaId%";\r
		<\/script>\r
		` +
			head +
			'\r\n	</head>\r\n	<body data-sveltekit-preload-data="hover" class="h-full dark:bg-gray-900">\r\n		<div id="app" class="contents h-full">' +
			body +
			`</div>\r
\r
		<!-- Google Tag Manager -->\r
		<script>\r
			if (window.gaId) {\r
				const script = document.createElement("script");\r
				script.src = "https://www.googletagmanager.com/gtag/js?id=" + window.gaId;\r
				script.async = true;\r
				document.head.appendChild(script);\r
\r
				window.dataLayer = window.dataLayer || [];\r
				function gtag() {\r
					dataLayer.push(arguments);\r
				}\r
				gtag("js", new Date());\r
				/// ^ See https://developers.google.com/tag-platform/gtagjs/install\r
				gtag("config", window.gaId);\r
				gtag("consent", "default", { ad_storage: "denied", analytics_storage: "denied" });\r
				/// ^ See https://developers.google.com/tag-platform/gtagjs/reference#consent\r
				/// TODO: ask the user for their consent and update this with gtag('consent', 'update')\r
			}\r
		<\/script>\r
	</body>\r
</html>\r
`,
		error: ({ status, message }) =>
			'<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' +
			message +
			`</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` +
			status +
			'</span>\n			<div class="message">\n				<h1>' +
			message +
			"</h1>\n			</div>\n		</div>\n	</body>\n</html>\n",
	},
	version_hash: "1famkl8",
};
async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let init;
	({ handle, handleFetch, handleError, init } = await import("./hooks.server.js"));
	let reroute;
	let transport;
	({ reroute, transport } = await import("./hooks.js"));
	return {
		handle,
		handleFetch,
		handleError,
		init,
		reroute,
		transport,
	};
}
export {
	set_manifest as a,
	get_hooks as g,
	options as o,
	read_implementation as r,
	set_read_implementation as s,
};
