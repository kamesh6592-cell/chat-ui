<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;

	$: keyStatus = data.keyStatus;

	async function resetKeys() {
		try {
			const response = await fetch("/api/key-rotation", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ action: "reset" })
			});
			const result = await response.json();
			if (response.ok) {
				location.reload(); // Refresh to show updated status
			} else {
				alert(`Error: ${result.error}`);
			}
		} catch (error) {
			alert(`Failed to reset keys: ${error}`);
		}
	}

	function formatTime(timestamp: number) {
		return new Date(timestamp).toLocaleString();
	}
</script>

<svelte:head>
	<title>API Key Rotation Status - Admin</title>
</svelte:head>

<div class="container mx-auto p-6 max-w-4xl">
	<h1 class="text-3xl font-bold mb-6">🔑 API Key Rotation Status</h1>
	
	{#if keyStatus.error}
		<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
			<strong>Error:</strong> {keyStatus.error}
			{#if keyStatus.details}
				<br><small>{keyStatus.details}</small>
			{/if}
		</div>
	{:else}
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
			<!-- Current Status -->
			<div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
				<h2 class="text-lg font-semibold mb-3 text-blue-800">📊 Current Status</h2>
				<div class="space-y-2">
					<div><strong>Total Keys:</strong> {keyStatus.totalKeys || 0}</div>
					<div><strong>Current Key:</strong> #{keyStatus.currentKey || 1}</div>
					<div><strong>Available Keys:</strong> {keyStatus.availableKeys || 0}</div>
					<div class="text-sm text-gray-600">
						<strong>Health:</strong>
						{#if keyStatus.availableKeys > 0}
							<span class="text-green-600">✅ Healthy</span>
						{:else}
							<span class="text-red-600">⚠️ All keys rate limited</span>
						{/if}
					</div>
				</div>
			</div>

			<!-- Failed Keys -->
			<div class="bg-red-50 border border-red-200 rounded-lg p-4">
				<h2 class="text-lg font-semibold mb-3 text-red-800">🚫 Rate Limited Keys</h2>
				{#if keyStatus.failedKeys && keyStatus.failedKeys.length > 0}
					<div class="space-y-1">
						{#each keyStatus.failedKeys as keyNum}
							<div class="text-sm">Key #{keyNum} - Rate Limited</div>
						{/each}
						{#if keyStatus.nextRetryTime}
							<div class="text-xs text-gray-600 mt-2">
								Next retry: {formatTime(keyStatus.nextRetryTime)}
							</div>
						{/if}
					</div>
				{:else}
					<div class="text-green-600 text-sm">🎉 No rate limited keys!</div>
				{/if}
			</div>
		</div>

		<!-- Key Grid Status -->
		{#if keyStatus.totalKeys > 0}
			<div class="bg-white border border-gray-200 rounded-lg p-4 mb-6">
				<h2 class="text-lg font-semibold mb-3">🔄 Key Status Grid</h2>
				<div class="grid grid-cols-6 gap-2">
					{#each Array(keyStatus.totalKeys) as _, i}
						<div class="text-center p-3 rounded border {
							i + 1 === keyStatus.currentKey 
								? 'bg-blue-100 border-blue-500' 
								: keyStatus.failedKeys?.includes(i + 1) 
								? 'bg-red-100 border-red-500' 
								: 'bg-green-100 border-green-500'
						}">
							<div class="font-semibold">Key {i + 1}</div>
							<div class="text-xs mt-1">
								{#if i + 1 === keyStatus.currentKey}
									🔵 Active
								{:else if keyStatus.failedKeys?.includes(i + 1)}
									🔴 Limited
								{:else}
									🟢 Ready
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Setup Instructions -->
		<div class="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
			<h2 class="text-lg font-semibold mb-3">🛠️ Setup Instructions</h2>
			<div class="text-sm space-y-2">
				<p><strong>1.</strong> Create 6 different Hugging Face accounts (use different emails)</p>
				<p><strong>2.</strong> Generate API token for each account at: <a href="https://huggingface.co/settings/tokens" class="text-blue-600 underline" target="_blank">huggingface.co/settings/tokens</a></p>
				<p><strong>3.</strong> Add tokens to Vercel environment variables:</p>
				<div class="bg-gray-800 text-green-400 p-2 rounded text-xs font-mono mt-2">
					HF_KEY_1=hf_your_first_token<br>
					HF_KEY_2=hf_your_second_token<br>
					HF_KEY_3=hf_your_third_token<br>
					HF_KEY_4=hf_your_fourth_token<br>
					HF_KEY_5=hf_your_fifth_token<br>
					HF_KEY_6=hf_your_sixth_token
				</div>
				<p class="text-green-600"><strong>✨ The system will automatically rotate when keys hit rate limits!</strong></p>
			</div>
		</div>

		<!-- Actions -->
		<div class="flex gap-4">
			<button 
				on:click={resetKeys}
				class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-medium"
			>
				🔄 Reset All Keys
			</button>
			<button 
				on:click={() => location.reload()}
				class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium"
			>
				🔃 Refresh Status
			</button>
		</div>
	{/if}
</div>

<style>
	.container {
		font-family: system-ui, -apple-system, sans-serif;
	}
</style>