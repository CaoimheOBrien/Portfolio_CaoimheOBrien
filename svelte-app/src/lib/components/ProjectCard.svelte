<script>
    export let id; // exports the id
    export let title; // exports the name of the project
    export let image; // exports the screenshot/ gif of the project
    export let description; // exports the small project description
    export let moreInfo; // exports the more detailed description
    export let expandedId; //exports the variable that says if each id is expanded
    export let setExpanded; // exports whether it is expanded or not.

    $: isExpanded = expandedId === id; 
</script>

<div id = {id}>
    <h2>{title}</h2>
    <img src = {image} class = "projectPic" alt={`Screenshot of ${title}`}/>
    <p>
        {description}
        {#if !isExpanded}
        <span id="dots">...</span>
    {/if}
    {#if isExpanded}
        <span id="more"><br>{moreInfo}</span>
    {/if}
    </p>
    <button on:click={() => setExpanded(isExpanded ? null : id)} class="readMoreButton">
        {isExpanded ? 'Read Less' : 'Read More'}
</button>
</div>


<style>
    .projectPic {
        width: 40rem;
    }

    .readMoreButton {
        /*Color*/
        background: rgba(15, 149, 66, 0.6);
        color: white;

        /*Text*/
        font-size: 1.1rem;
        font-weight: 500;

        /*Layout */
        padding: 0.5rem;
    }

    .readMoreButton:hover {
        cursor: pointer;
        color: rgb(186, 253, 205);
    }

    #dots, #more {
        display: inline;
        font-size: 1.2rem;
    }

    h2, p {
        text-align: left;
        margin-left: 2.2rem; 
        margin-top: 1rem;
    }
</style>