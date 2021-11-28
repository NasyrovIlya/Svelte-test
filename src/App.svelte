<script>
	import { append } from "svelte/internal";

	import Card from "./card.svelte";
	import Page from "./pagination.svelte";

	const URLALBUMS = "https://jsonplaceholder.typicode.com/albums";
	const COUNT_ELEM = 9;

	let page = 1;
	$: start = page * COUNT_ELEM - (COUNT_ELEM - 1);
	$: end = page * COUNT_ELEM;

	let name = "Каталог альбомов: ";
	let date = getDateFromUrl(URLALBUMS);	

	async function getDateFromUrl(url) {
		const responce = await fetch(url);
		let db = await responce.json();
		return db;
	}

	function getCountPage(data) {
		if (data) {
			return Math.ceil(data.length / COUNT_ELEM);
		}
	}

	function handleOnPagin(event) {
		if (event.target.closest(".link")) {
			page = event.target.innerHTML;
		}
	}
</script>

<h1>{name}</h1>

{#await date}
	<p>... Получаем данные</p>
{:then item}
	<div class="main">
		<Card startPage={start} endPage={end} date = {item} />
		<Page on:click={handleOnPagin} countPage={getCountPage(item)} />
	</div>
{/await}

<style>
	h1 {
		color: #ff3e00;
	}
	.main {
		height: 100%;
		width: 80%;
		padding: 1em;
		margin-bottom: 1em;
	}
</style>
