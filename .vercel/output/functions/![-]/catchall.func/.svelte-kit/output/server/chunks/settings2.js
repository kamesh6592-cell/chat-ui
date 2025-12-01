import "./client.js";
import { s as setContext, t as getContext } from "./index3.js";
import { w as writable, g as get } from "./index2.js";
function useSettingsStore() {
	return getContext("settings");
}
function createSettingsStore(initialValue) {
	const baseStore = writable({ ...initialValue, recentlySaved: false });
	async function setSettings(settings) {
		baseStore.update((s) => ({
			...s,
			...settings,
		}));
	}
	async function initValue(key, nestedKey, value) {
		const currentStore = get(baseStore);
		const currentNestedObject = currentStore[key];
		if (currentNestedObject?.[nestedKey] !== void 0) {
			return;
		}
		const newNestedObject = {
			...(currentNestedObject || {}),
			[nestedKey]: value,
		};
		baseStore.update((s) => ({
			...s,
			[key]: newNestedObject,
		}));
	}
	async function instantSet(settings) {
		baseStore.update((s) => ({
			...s,
			...settings,
		}));
	}
	const newStore = {
		subscribe: baseStore.subscribe,
		set: setSettings,
		instantSet,
		initValue,
		update: (fn) => {
			setSettings(fn(get(baseStore)));
		},
	};
	setContext("settings", newStore);
	return newStore;
}
export { createSettingsStore as c, useSettingsStore as u };
