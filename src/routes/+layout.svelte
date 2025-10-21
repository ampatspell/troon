<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	let err = $state();

	let start = async () => {
		try {
			let audio = new Audio('/Untitled 100.mp3');
			audio.volume = 1;
			await audio.play();
		} catch(_err) {
			err = _err;
		}
	}

	$effect(() => {
		start();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if err}
	{err}
{/if}

{@render children?.()}
