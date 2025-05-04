<script>
	import { onMount } from "svelte";
    import { base } from "$app/paths";
    
    onMount(() => {
        console.log("CV Page Loaded");
    });

</script>
<div id="container">
    <div id="CV_image">
        <img src="{base}/CV.png" alt="My CV">
    </div>
    
    <div id="Downloads">
        <h1>My CV</h1>
        <div id="downloadLinks">
            <a href="{base}/CV_CaoimheOBrien2025.pdf" download="CV_CaoimheOBrien2025.pdf" class="downloadLink">
                <img src="{base}/downloadSymbol.png" id="downloadSymbol" alt="Black download symbol"/><span id="buttonText"> Download as a PDF </span>
            </a>

            <a href="{base}/CV_CaoimheOBrien2025.docx" download="CV_CaoimheOBrien2025.docx" class="downloadLink">
                <img src="{base}/downloadSymbol.png" id="downloadSymbol" alt="Black download symbol"/> <span id="buttonText">Download as a Document </span>
            </a>
        </div>
    </div>
</div>


<style>
    #container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;
        padding: 2rem;
        width: 100%; 
    }

    #CV_image,#Downloads{
        max-width: 600px;
        min-width: 280px;
        margin: 0.2rem;
        padding: 0.5rem;
    }

    #CV_image img{
        max-width: 100%;
        height: auto;
    }
    
    #downloadLinks{
        display: flex;
        justify-content: center;
        align-items: stretch;
        flex-direction: column;
        gap: 2.5rem;

        width: max-content;
        margin: 2rem; 
        height: 30vh; 
        text-align: start;
    }

    .downloadLink{
        /*Color & text stuff*/
        background-color: rgb(212, 227, 233);
        color: black;
        font-size: 2rem;
        box-shadow: 0rem 0rem 2rem 0.8rem rgb(128, 195, 168);
        border: 0.5rem solid rgb(146, 146, 146);
        border-radius: 10px;

        /*Padding, layout, etc */
        padding: 1rem;

        /*Transistions/ Transformations */
        transition: transform 0.3s ease-out, box-shadow 0.3s ease;

        /*Responsive stuff*/ 
        max-width: 600px;
        max-height: 120px;
        width: 100%; 
        
        /*Others*/
        cursor: pointer;
    }

    .downloadLink:hover{
        transform: translateY(-10px);
    }

    #downloadSymbol{
        width: 2rem;
        height: auto;
    }

    /*Responsiveness*/ 
    @media (max-width: 1090px){
        #CV_image, #Downloads{
            max-width: 100%;
            width: 90%;
            margin: 0 auto;
            text-align: center;
        }

        #downloadLinks{
            justify-content: center;
            display: inline-flex; 
        }
    }

    @media (max-width: 711px){
        #CV_image, #Downloads{
            max-width: 100%;
            width: 80%;
            margin: 0 auto;
        }

        #downloadLinks{
            max-width: 100%;
            margin: auto; 
        }

        .downloadLink{
            font-size: 1.2rem;
        }
    }

</style>