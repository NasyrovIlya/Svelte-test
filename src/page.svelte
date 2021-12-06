<script>

    export let countPage = 0;
    let mass = [];
    let active = 1;

    function generatePages(count) {
        let mass = [];
        for (let index = 0; index < count; index++) {
            mass = [...mass, index];
        }        
        return mass;
    }
    mass = generatePages(countPage);

    function linkHandler(event) {
        active = event.target.innerHTML;
    }

</script>

<div class="wrap">
    {#each mass as item}
        <div on:click class="page" class:active={item+1 == active}>
            <div on:click={linkHandler} class="link">{item+1}</div>            
        </div>
    {/each}
</div>

<style>
    .wrap {
        margin: 0 auto;
        /* width: 100%; */
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }
    .page {
        padding: 10px;
        border-radius: 10px;
        border: 1px solid black;
        text-align: center;        
    }
    .page:not(:last-child) {
        margin-right: 1em;
    }
    .link {        
        width: 100%;
        height: 100%;
        cursor:pointer;
    }
    .page:hover {
        color: white;
        background-color: blue;
    }
    .active {
        background-color: rgb(41, 6, 122);
        color: white;
    }
</style>
