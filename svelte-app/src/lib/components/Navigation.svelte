<script>
    import { base } from "$app/paths"; 
    let opened = false; // is the menu opened or not
</script>

<nav>
    <div class ="navContainer">
        <ul class:open ={opened}> 
            <li><a href= "{base}/">Home</a></li>
            <li><a href= "{base}/contact_me">Contact Me</a></li>
            <li><a href= "{base}/CV">CV</a></li>
            <li><a href= "{base}/projects">Projects</a></li>
        </ul>

        <button class="hamburgerMenu" on:click={() => (opened = !opened)} aria-label="Menu Hamburder Menu">☰</button>

    </div>
</nav>

<style>
    nav{
        background-color: rgba(7, 108, 59, 0.8);
        padding: 1rem;
        border-radius: 10px;
        position: fixed;
        right: 1rem;
        top: 0.5rem;
    }

    .navContainer{
        display: flex;
        align-items: flex-start;
        flex-direction: cloumn;
        width: 100%; 
    }

    .hamburgerMenu{
        /* Color and text*/
        font-size: 3rem;
        color: white;
        background: none;

        /*Border and cursor*/
        border: none;
        cursor: pointer;

        /*Layout*/
        margin-left: auto; 
    }

    ul{
        list-style: none;
		padding: 0;
		margin: 1rem;

		display: none;
        flex-direction: column;
        gap: 0.75rem; 
        width: 100%;
    }

    ul.open{
        display: flex; 
    }

    li{
        width: 100%; 
    }

    li a{
        /* Text stuff*/
        text-decoration: none;
        font-size: 1.5rem;

        /*Color*/
		color: white;

        /*Border stuff */
        border-radius: 10px;

        /*Layout */
        padding: 0.5rem;
        display: block;
        transition: background 0.3s ease-in-out;
    }

    li a:hover{
        background-color: rgba(34, 193, 55, 0.4);
    }


    /*Responsiveness*/
    @media (max-width: 1223px){
        .hamburgerMenu{
            font-size: 3rem; 
        }

        nav{
            padding: 0.5rem; 
            margin: 0.2rem; 
        }

        li a{
            font-size: 1.5rem;
            padding: 0.3rem;
        }
    }


    @media(max: 650px){
        .hamburgerMenu{
            font-size: 1.5rem;  /* keeping the button big enough for mobile screens */
        }

        nav{
            padding: 0.5rem; 
        }

        li a{
            font-size: 1rem;
            padding: 0.3rem;
        }
    }

    @media(max-width: 530px){
        .hamburgerMenu{
            font-size: 2.5rem;  /* keeping the button big enough for mobile screens */
        }

        nav{
            padding: 0.5rem; 
        }

        li a{
            font-size: 1rem;
            padding: 0.3rem;
        }
    }

    @media (max-width: 380px){
        .hamburgerMenu{
            font-size: 2rem;
        }
    }
</style>