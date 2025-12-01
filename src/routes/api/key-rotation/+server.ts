import type { RequestHandler } from "./$types";
import { KeyRotationManager } from "$lib/server/keyRotation";
import { json } from "@sveltejs/kit";
import { config } from "$lib/server/config";

export const GET: RequestHandler = async ({ url }) => {
	try {
		// Check for admin authentication
		const adminSecret = url.searchParams.get("secret") || config.ADMIN_API_SECRET;
		if (!adminSecret || adminSecret !== config.ADMIN_API_SECRET) {
			return json(
				{
					error: "Unauthorized. Admin access required.",
				},
				{ status: 401 }
			);
		}

		const status = KeyRotationManager.getStatus();
		return json({
			...status,
			message: "Key rotation status retrieved successfully",
		});
	} catch (error) {
		return json(
			{
				error: "Failed to get key rotation status",
				details: String(error),
			},
			{ status: 500 }
		);
	}
};

export const POST: RequestHandler = async ({ request, url }) => {
	try {
		// Check for admin authentication
		const adminSecret = url.searchParams.get("secret") || config.ADMIN_API_SECRET;
		if (!adminSecret || adminSecret !== config.ADMIN_API_SECRET) {
			return json(
				{
					error: "Unauthorized. Admin access required.",
				},
				{ status: 401 }
			);
		}

		const { action } = await request.json();

		if (action === "reset") {
			KeyRotationManager.resetAllKeys();
			return json({
				message: "All keys reset successfully",
				status: KeyRotationManager.getStatus(),
			});
		}

		return json(
			{
				error: "Invalid action. Use 'reset'",
			},
			{ status: 400 }
		);
	} catch (error) {
		return json(
			{
				error: "Failed to perform action",
				details: String(error),
			},
			{ status: 500 }
		);
	}
};
