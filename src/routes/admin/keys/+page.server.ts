import type { PageServerLoad } from "./$types";

export const load = (async ({ fetch }) => {
	try {
		const response = await fetch("/api/key-rotation");
		const keyStatus = await response.json();

		return {
			keyStatus,
		};
	} catch (error) {
		return {
			keyStatus: { error: "Failed to load key status" },
		};
	}
}) satisfies PageServerLoad;
