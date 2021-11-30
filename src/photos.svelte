<script>
    // import Modal from "./modal.svelte";

    const URLPHORO = "https://jsonplaceholder.typicode.com/photos";

    export let id = 1;
    // export let photos = [];

    // async function getDateFromUrl(url) {
    //     const responce = await fetch(url);
    //     return await responce.json();
    // }

    // let photos = getDateFromUrl(`${URLPHORO}?albumId=${id}`);

    function handleModal() {
        showModal = false;
    }
</script>

{#if showModal}
    <!-- <Modal on:close={handleModal}> -->
    <!-- {#await photos}
        <p>...Получаем данные</p>
    {:then photos}    
        {#each photos as photo}
            <img src={photo.thumbnailUrl} alt="" />
        {/each}
    {:catch error}
        <p style="color: red">
            При получении данных произошла ошибка: {error.message}
        </p>
    {/await} -->
    <!-- </Modal> -->
{:else}
    ..иначе
{/if}

<style>
</style>
