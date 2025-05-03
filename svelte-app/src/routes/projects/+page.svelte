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
            title="Sage Academy"
            image="/sageAcademyScreenshot.png"
            description="Here is a website that I made for a group project"
            moreInfo ="I created this website as a part of a group project with 2 other classmates. In our brief we were told to create an educational website so we created a platform for staff and students to have learning resources, quizzes and other information. I had a great experience during this project. It was my first time using the Svelte framework which opened up a lot of opportunities for us. The link to the live website is below:"
            link="https://caoimheobrien.github.io/WebUIDesign_2025GroupProject/"
            expandedId={expandedProjectId}
            setExpanded={setExpanded}
        />

        <ProjectCard
            id="website_project2"
            title="'Adventure In the Woods' Report"
            image="/adventureInTheWoodsReportScreenshot.png"
            description="Here is a website that I made for my Leaving Certificate Project"
            moreInfo ="As part of my Leaving Cert Computer Science final project, I had to create a report in the format of a website. For my project I had made a text-based python game called 'Adventure in the Woods' which was a RPG/ choose your own adventure game. It was one of the first websites I had total creative freedom over and this made me fall in love with web development."
            link=""
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
            image="/Bounce_Caoimhe.gif"
            description="Here is one animation that I made."
            moreInfo ="This was my first attempt at animation in first year using Aesprite. We created a simple bounce animation and I'm really proud of how it turned out."
            link=""
            expandedId={expandedProjectId}
            setExpanded={setExpanded}
        />

        <ProjectCard
            id="animation_project2"
            title="Animation Project 2"
            image="/enemy1_idle.gif"
            description="Here is an idle animation that I made."
            moreInfo ="I made this character and idle animation as an enemy in a game."
            link=""
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
            image="/menu_screen.png"
            description="Here is a menu screen that I made"
            moreInfo ="I made this screen was made for a group project in Semester 2 of first year. It was the opening screen for a maze game where the player wondered around a forest. I used Aesprite to create all the assets in this game, I loved the cutesy retro feeling of the artstyle. I was heavily inspired by pixelated games such as the original Stardew Valley & Terraria and by other games known for their 'cute' style, such as Animal Crossing."
            link=""
            expandedId={expandedProjectId}
            setExpanded={setExpanded}
        />

        <ProjectCard
            id="artwork_project2"
            title="Artwork Project 2"
            image="/background.png"
            description="Here is a game background that I made."
            moreInfo ="I created this piece for a cosy barista simulator game that I made in Semester 1 of second year. Like my previous project, I used Aesprite to create the assets for this game. I felt the pixel-art style reflected the warm, homey atmosphere of a coffee shop."
            link=""
            expandedId={expandedProjectId}
            setExpanded={setExpanded}
        />

        <ProjectCard
            id="artwork_project3"
            title="Artwork Project 3"
            image="/TypefacePoster_Finished.png"
            description="Here is a poster that I made."
            moreInfo ="I created this poster to show off a typeface that I had created for one of my modules in Semester 2 of ."
            link=""
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
            image="/coffeeUtopiaScreenshot.png"
            description="Here is a game that I made."
            moreInfo ="Slay."
            link=""
            expandedId={expandedProjectId}
            setExpanded={setExpanded}
        />
    </div>
</div>
<hr id="divider">

<div id="miscSection">
    <h1>Miscellaneous</h1>
    <h2> There are no projects in this section yet, come back soon! </h2>
    <div class="projects">
        
    </div>
</div>


<style>
    h1{
        text-align: left;
        margin-left: 2rem;
    }
    h2{
        text-align: center;
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
        max-width: 1600px;
        margin: 3rem auto;
        padding: 0 1 rem;
        justify-content: center;
    }

</style>