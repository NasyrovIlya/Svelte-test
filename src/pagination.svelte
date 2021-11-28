<script>
    export let countPage = 0;
    let mass = [];

    function generatePages(count) {
        let mass = [];
        for (let index = 0; index < count; index++) {
            mass = [...mass, index];
        }        
        return mass;
    }

    mass = generatePages(countPage);
</script>

<div class="wrap">
    {#each mass as item}
        <div on:click class="page">
            <div class="link">{item+1}</div>            
        </div>
    {/each}
</div>

<style>
    .wrap {
        width: 80%;
        display: flex;
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
</style>
