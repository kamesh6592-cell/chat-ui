import type { PageServerLoad } from "./$types";

export const load = (async ({ fetch, url }) => {
	try {
		// Get admin secret from URL parameter or use a default URL with secret
		const secret =
			url.searchParams.get("secret") ||
			"a3c8426f995f4c3cb9d1c637fec96b40c39f818b3ee445bd95c2c4089a039a20";
		const response = await fetch(`/api/key-rotation?secret=${secret}`);
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
