<script>
    import Photos from "./photos.svelte";
    import { getPhotos } from "./utl/helper";

    export let startPage = 1;
    export let endPage = 9;
    export let date = [];

    let photo = [];

    $: showModal = false;
    let id = 0;

    async function clickHandler(event) {
        id = event.target.id;
        showModal = true;
        photo = await getPhotos(id);
    }

    function closeModal() {
        showModal=false;
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
    <Photos {showModal} {photo} on:onClose={closeModal} />
{/if}

<style>
    .wrap {
        padding: 10px;
        margin-bottom: 10px;
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
