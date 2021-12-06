<script>
    import { createEventDispatcher } from "svelte";

    export let showModal = false;
    export let photo = [];

    const dispatch = createEventDispatcher();

    function handleModal(event) {
        if (event.target.closest(".modal-container")) {
            return;
        }
        handleCloseModal();
    }
    function handleCloseModal() {
        showModal = false;
        photo = [];
        dispatch("onClose", {
            showModal: false,
        });
    }
</script>

{#if showModal}
    <div class="modal-place" on:click={handleModal}>
        <div class="modal-container">
            <button class="btn-close" on:click={handleCloseModal}
                >Закрыть</button
            >
            <div class="modal-content">
                {#if photo.length > 0}
                    {#each photo as item}
                        <div class="photos-container">
                            <img
                                class="img-photo"
                                src={item.thumbnailUrl}
                                alt=""
                            />
                            <p>{item.title}</p>
                        </div>
                    {/each}
                {:else}
                    <p>получаем данные</p>
                {/if}
            </div>
        </div>
    </div>
{/if}

<style>
    .photos-container {
        padding: 15px;
        margin-bottom: 5px;
        border-radius: 15px;
        border: 1px solid black;
    }

    .modal-place {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        /* height: 100%; */
        background-color: rgba(0, 0, 0, 0.5);
    }

    .modal-container {
        z-index: 50;
        position: relative;
        top: 5px;
        margin: 0 auto;
        padding: 15px;
        width: 1100px;
        height: 80%;
        background-color: white;
    }
    .modal-content {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: center;
    }

    .btn-close {
        cursor: pointer;
    }
</style>
