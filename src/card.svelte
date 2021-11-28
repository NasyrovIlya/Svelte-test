<script>
    import Photos from "./photos.svelte";

    export let startPage = 1;
    export let endPage = 9;
    export let date = [];

    let showModal = false;
    let id = 1;

    function clickHandler(event) {
        showModal = true;
        id = event.target.id;
    }
</script>

{#each date as item}
    {#if item.id >= startPage && item.id <= endPage}
        <div class="wrap" id={item.id} on:click={clickHandler}>
            <p id={item.id}>
                {item.id} : {item.title}
            </p>
        </div>
    {/if}
{/each}

{#if showModal}
    <Photos {showModal} {id} />
{/if}

<style>
    .wrap {
        padding: 1em;
        margin-bottom: 1em;
        background-color: aliceblue;
        border: 1px solid black;
        cursor: pointer;
    }
    .wrap:hover {
        background-color: bisque;
    }
    p {
        color: black;
    }
</style>
