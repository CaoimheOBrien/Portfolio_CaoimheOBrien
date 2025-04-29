<script>
	import { onMount } from "svelte";

    onMount(() => {
        console.log("Contact Me Page Loaded");
    });

    import Card	 from "$lib/components/Card.svelte";
</script>

<h1>Got Questions? Let’s Spark a Conversation!</h1>
<div class="gallery">
    <Card title="My Student Email">
        <a href ="mailto:C00297178@setu.ie">C00297178@setu.ie</a>
    </Card>

    <Card title="My LinkedIn">
        <a href ="https://www.linkedin.com/in/caoimhe-o-brien-8808b5307/">Caoimhe's LinkedIn</a>
    </Card>
</div>

<p> temporary layout</p>

<style>
    .gallery{
        display: grid;
        grid-template-columns: repeat(2,2fr);
        gap: 2rem;
        max-width: 1400px;
        margin: 3rem auto;
        padding: 0 1 rem;
        justify-content: center;
    }


</style>