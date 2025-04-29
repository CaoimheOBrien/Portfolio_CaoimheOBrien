<script>
	import { onMount } from "svelte";

    onMount(() => {
        console.log("Home Page Loaded");
    });
</script>

<h1>Welcome to My Portfolio.</h1>

<img src="/IntroVidThumbnail.png" id="thumbnail" alt="Thumbnail for introduction video with cartoon girl with blonde hair.">
<p>"Welcome! Click play for a brief walkthrough—I’ll guide you through what this site has to offer."</p>
<br>

<style>
    #thumbnail{
        width: 60%;
    }
</style>