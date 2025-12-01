import { logger } from "./logger";

// Your 6 HF API keys - add your actual keys here
const HF_API_KEYS = [
	process.env.HF_KEY_1 || "",
	process.env.HF_KEY_2 || "",
	process.env.HF_KEY_3 || "",
	process.env.HF_KEY_4 || "",
	process.env.HF_KEY_5 || "",
	process.env.HF_KEY_6 || "",
].filter((key) => key.length > 0);

// Track current key index and failed keys
let currentKeyIndex = 0;
const failedKeys = new Set<number>();
const keyRetryTime = new Map<number, number>(); // Track when to retry failed keys

// Reset failed keys every 24 hours
const RETRY_AFTER_MS = 24 * 60 * 60 * 1000; // 24 hours

export class KeyRotationManager {
	static getCurrentKey(): string {
		if (HF_API_KEYS.length === 0) {
			throw new Error("No HF API keys configured");
		}

		// Clean up old failed keys (retry after 24 hours)
		const now = Date.now();
		for (const [keyIndex, failTime] of keyRetryTime.entries()) {
			if (now - failTime > RETRY_AFTER_MS) {
				failedKeys.delete(keyIndex);
				keyRetryTime.delete(keyIndex);
				logger.info(`Key ${keyIndex + 1} is now available for retry`);
			}
		}

		// Find next available key
		let attempts = 0;
		while (attempts < HF_API_KEYS.length) {
			if (!failedKeys.has(currentKeyIndex)) {
				const key = HF_API_KEYS[currentKeyIndex];
				logger.info(`Using HF API Key ${currentKeyIndex + 1}/${HF_API_KEYS.length}`);
				return key;
			}

			// Move to next key
			currentKeyIndex = (currentKeyIndex + 1) % HF_API_KEYS.length;
			attempts++;
		}

		// All keys failed, use the first one anyway (it might work again)
		currentKeyIndex = 0;
		failedKeys.clear();
		keyRetryTime.clear();
		logger.warn("All keys failed, resetting and trying key 1 again");
		return HF_API_KEYS[0];
	}

	static markCurrentKeyAsFailed(error?: unknown): void {
		const isRateLimit = this.isRateLimitError(error);

		if (isRateLimit) {
			failedKeys.add(currentKeyIndex);
			keyRetryTime.set(currentKeyIndex, Date.now());

			logger.warn(
				`Key ${currentKeyIndex + 1} hit rate limit, marking as failed. Available keys: ${HF_API_KEYS.length - failedKeys.size}/${HF_API_KEYS.length}`
			);

			// Move to next key
			const oldIndex = currentKeyIndex;
			currentKeyIndex = (currentKeyIndex + 1) % HF_API_KEYS.length;

			logger.info(`Rotating from key ${oldIndex + 1} to key ${currentKeyIndex + 1}`);
		}
	}

	static isRateLimitError(error: unknown): boolean {
		if (!error) return false;

		const errorStr = String(error).toLowerCase();
		const errorObj = error as Record<string, unknown>;
		const responseObj = errorObj?.response as Record<string, unknown> | undefined;
		const statusCode = errorObj?.status || responseObj?.status;

		// Check for rate limit indicators
		return (
			statusCode === 429 ||
			errorStr.includes("rate limit") ||
			errorStr.includes("too many requests") ||
			errorStr.includes("quota exceeded") ||
			errorStr.includes("rate_limit_exceeded") ||
			statusCode === 503 // Service unavailable (sometimes used for rate limits)
		);
	}

	static getStatus(): object {
		return {
			totalKeys: HF_API_KEYS.length,
			currentKey: currentKeyIndex + 1,
			failedKeys: Array.from(failedKeys).map((i) => i + 1),
			availableKeys: HF_API_KEYS.length - failedKeys.size,
			nextRetryTime: Math.min(...Array.from(keyRetryTime.values())) + RETRY_AFTER_MS,
		};
	}

	// Reset all keys (useful for testing or manual reset)
	static resetAllKeys(): void {
		currentKeyIndex = 0;
		failedKeys.clear();
		keyRetryTime.clear();
		logger.info("All API keys reset");
	}
}
