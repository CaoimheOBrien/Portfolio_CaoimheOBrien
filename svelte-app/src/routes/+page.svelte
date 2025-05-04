<script>
	import { onMount } from "svelte";

    onMount(() => {
        console.log("Home Page Loaded");
    });

    function videoNotReady(){
        alert("This video is currently being redone.\nPlease click the hamburger menu to find projects, CV and Contact information.")
    }
</script>

<h1>Welcome to My Portfolio.</h1>

<img src="/IntroVidThumbnail.png" id="thumbnail" alt="Thumbnail for introduction video with cartoon girl with blonde hair.">
<p>"Welcome! Click play for a brief walkthrough—I’ll guide you through what this site has to offer."</p>
<br>
<button id="playButton" onclick={videoNotReady}> Play</button>
<style>
    #thumbnail{
        width: 60%;
    }

    p{
        width: 80%; /*For responsiveness*/
        margin: auto; 
    }

    #playButton{
        background-color: rgb(3, 88, 36);
        border: 3px solid rgb(0, 45, 16);
        border-radius: 10px;

        /*Text stuff */ 
        text-align: center;
        font-size: 1.8rem;

        /*Layout */
        min-width: fit-content;
        min-height: fit-content;
        margin: 1.5rem;
        margin-top: 1.75rem; 
        display: inline-block;
        padding: 1rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    #playButton:hover{
        color: white; 
        transform: translateY(-10px);
    }
    @media (max-width: 550px){
        h1{
            font-size: 2rem; 
        }
        #playButton{
            font-size: 1.2rem;
            padding: 0.75rem;
            margin: 1rem auto;
            max-width: 15rem;
        }
    }
</style>