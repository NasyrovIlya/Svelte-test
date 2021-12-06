<script>
	import Card from "./card.svelte";
	import Page from "./page.svelte";

	import { getDateFromUrl } from "./utl/helper";
	import { onMount } from "svelte";

	const URLALBUMS = "https://jsonplaceholder.typicode.com/albums";
	const COUNT_ELEM = 9;

	let page = 1;
	$: start = page * COUNT_ELEM - (COUNT_ELEM - 1);
	$: end = page * COUNT_ELEM;

	let date = [];
	let countPage = 0;

	onMount(async () => {
		date = await getDateFromUrl(URLALBUMS);
		if (date.length > 0) {
			countPage = Math.ceil(date.length / COUNT_ELEM);
		} else {
			countPage = 1;
		}
	});

	function handleOnPagin(event) {
		if (event.target.closest(".link")) {
			page = event.target.innerHTML;
		}
	}
</script>

<main>
	{#if date.length > 0}
		<div class="main">
			<Card startPage={start} endPage={end} {date} />
			<Page on:click={handleOnPagin} {countPage} />
		</div>
	{:else}
		<p>Данных пока нет</p>
	{/if}
</main>

<style>
	.main {
		text-align: center;
		padding: 5px;
		max-width: 1200px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
