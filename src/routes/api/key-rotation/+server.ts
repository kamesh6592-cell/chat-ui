import type { RequestHandler } from "./$types";
import { KeyRotationManager } from "$lib/server/keyRotation";
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
	try {
		const status = KeyRotationManager.getStatus();
		return json({
			...status,
			message: "Key rotation status retrieved successfully"
		});
	} catch (error) {
		return json({
			error: "Failed to get key rotation status",
			details: String(error)
		}, { status: 500 });
	}
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { action } = await request.json();
		
		if (action === "reset") {
			KeyRotationManager.resetAllKeys();
			return json({
				message: "All keys reset successfully",
				status: KeyRotationManager.getStatus()
			});
		}
		
		return json({
			error: "Invalid action. Use 'reset'"
		}, { status: 400 });
	} catch (error) {
		return json({
			error: "Failed to perform action",
			details: String(error)
		}, { status: 500 });
	}
};