import { b as base } from "../../../chunks/paths.js";
import { collections } from "../../../chunks/database.js";
import { r as redirect } from "../../../chunks/index.js";
import { c as config } from "../../../chunks/config.js";
async function POST({ locals, cookies }) {
	await collections.sessions.deleteOne({ sessionId: locals.sessionId });
	cookies.delete(config.COOKIE_NAME, {
		path: "/",
		// So that it works inside the space's iframe
		sameSite: config.ALLOW_INSECURE_COOKIES === "true" ? "lax" : "none",
		secure: !(config.ALLOW_INSECURE_COOKIES === "true"),
		httpOnly: true,
	});
	return redirect(302, `${base}/`);
}
export { POST };
