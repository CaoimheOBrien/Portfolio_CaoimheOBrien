<script>
	import TopButton from "$lib/components/TopButton.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        console.log("Projects Page Loaded");
    });

    /**
	 * @type {null}
	 */
    let expandedProjectId = null; 

    /**
	 * @param {null} id
	 */
    function setExpanded(id){
        expandedProjectId = id;
    }

</script>

<h1 id="Start">Check out what I can do!</h1>
<hr id="divider">

<TopButton /> 

<h1 id="Start">Categories</h1>
<nav id="gallery">
    <a href="#websiteSection" aria-label="navigationLinkToWebsiteSection"> <img src="circle.png" class="circleImg" alt="Dark grey circle"/> Website Section</a>
    <a href="#animationSection" aria-label="navigationLinkToAnimationSection"> <img src="circle.png" class="circleImg" alt="Dark grey circle"/> Animation Section</a>
    <a href="#artworkSection" aria-label="navigationLinkToArtworkSection"> <img src="circle.png" class="circleImg" alt="Dark grey circle"/> Artwork Section</a>
    <a href="#gamesSection" aria-label="navigationLinkToGamesSection"> <img src="circle.png" class="circleImg" alt="Dark grey circle"/> Games Section</a>
    <a href="#miscSection" aria-label="navigationLinkToMiscellaneousSection"> <img src="circle.png" class="circleImg" alt="Dark grey circle"/> Misc. Section</a>
</nav>

<hr id="divider">
<hr id="divider">

<div id="websiteSection">
    <h1>Websites</h1>
    <div class="projects">
        <ProjectCard
            id="website_project1"
            title="Website Project 1"
            image="/websiteImage.jpg"
            description="Here is one website that I made"
            moreInfo ="And here is even more information on this project that I'm quite proud of!"
            expandedId={expandedProjectId}
            setExpanded={setExpanded}
        />

        <ProjectCard
            id="website_project2"
            title="Website Project 2"
            image="/websiteImage.jpg"
            description="Here is one website that I made."
            moreInfo ="And here is even more information on this project that I'm quite proud of! But I like website 1 better."
            expandedId={expandedProjectId}
            setExpanded={setExpanded}
        />
        
    </div>
</div>
<hr id="divider">


<div id="animationSection">
    <h1>Animations</h1>
    <div class="projects">
        <ProjectCard
            id="animation_project1"
            title="Animation Project 1"
            image="/animationImage.png"
            description="Here is one animation that I made."
            moreInfo ="Slay."
            expandedId={expandedProjectId}
            setExpanded={setExpanded}
        />

        <ProjectCard
            id="animation_project2"
            title="Animation Project 2"
            image="/animationImage.png"
            description="Here is one animation that I made."
            moreInfo ="Slay."
            expandedId={expandedProjectId}
            setExpanded={setExpanded}
        />
    </div>
</div>
<hr id="divider">


<div id="artworkSection">
    <h1>Artworks</h1>
    <div class="projects">
        <ProjectCard
            id="artwork_project1"
            title="Artwork Project 1"
            image="/artworkImage.png"
            description="Here is one piece of art that I made."
            moreInfo ="Slay."
            expandedId={expandedProjectId}
            setExpanded={setExpanded}
        />

        <ProjectCard
            id="artwork_project2"
            title="Artwork Project 2"
            image="/artworkImage.png"
            description="Here is one piece of art that I made."
            moreInfo ="Slay."
            expandedId={expandedProjectId}
            setExpanded={setExpanded}
        />

        <ProjectCard
            id="artwork_project3"
            title="Artwork Project 3"
            image="/artworkImage.png"
            description="Here is one piece of art that I made."
            moreInfo ="Slay."
            expandedId={expandedProjectId}
            setExpanded={setExpanded}
        />
    </div>
</div>
<hr id="divider">

<div id="gamesSection">
    <h1>Games</h1>
    <div class="projects">
        <ProjectCard
            id="games_project1"
            title="Games Project 1"
            image="/gameImage.png"
            description="Here is a game that I made."
            moreInfo ="Slay."
            expandedId={expandedProjectId}
            setExpanded={setExpanded}
        />
    </div>
</div>
<hr id="divider">

<div id="miscSection">
    <h1>Miscellaneous</h1>
    <div class="projects">
        <ProjectCard
            id="misc_project1"
            title="Random Project 1"
            image="/artworkImage.png"
            description="Here is a random project that I was proud of."
            moreInfo ="Slay."
            expandedId={expandedProjectId}
            setExpanded={setExpanded}
        />
    </div>
</div>


<style>
    h1{
        text-align: left;
        margin-left: 2rem;
    }
    #divider{
        border: 0.15rem solid rgb(159, 159, 159);
        border-radius: 10px;
        margin: 0.6rem;
    }

    #gallery{
        /*Layout Stuff */
        grid-template-columns: repeat(2,2fr);
        max-width: 2000px;
        width: 100%;
        margin: 1rem auto;
        padding: 0 1 rem;
        justify-content: center;
    }

    #gallery a{
        /*Border and Color stuff */ 
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

    #gallery a:hover{
        transform: translateY(-10px);
    }

    .circleImg{
        width: 3vh;
    }

    .projects{
        display: grid;
        grid-template-columns: repeat(2,2fr);
        gap: 2rem;
        max-width: 1400px;
        margin: 3rem auto;
        padding: 0 1 rem;
        justify-content: center;
    }

</style>