<script>
	import { onMount } from "svelte";

    onMount(() => {
        console.log("CV Page Loaded");
    });

</script>
<div id="container">
    <div id="CV_image">
        <img src="/CV.png" alt="My CV">
    </div>
    
    <div id="Downloads">
        <h1>My CV</h1>
        <div id="downloadLinks">
            <a href="/CV_CaoimheOBrien2025.pdf" download="CV_CaoimheOBrien2025.pdf" class="downloadLink">
                <img src="/downloadSymbol.png" id="downloadSymbol" alt="Black download symbol"/><span id="buttonText"> Download as a PDF </span>
            </a>

            <a href="/CV_CaoimheOBrien2025.docx" download="CV_CaoimheOBrien2025.docx" class="downloadLink">
                <img src="/downloadSymbol.png" id="downloadSymbol" alt="Black download symbol"/> <span id="buttonText">Download as a Document </span>
            </a>
        </div>
    </div>
</div>


<style>
    #container{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    }

    #CV_image,#Downloads{
        width: fit-content;
        margin: 0.2rem;
        padding: 0.5rem;
    }

    #CV_image{
        max-width: 1400px;
    }
    
    #downloadLinks{
        display: flex;
        align-items: stretch;
        flex-direction: column;
        gap: 2.5rem;
        width: max-content;
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
        padding: 0.5rem;
        padding-right: 1rem;
        display: block;

        /*Transistions/ Transformations */
        transition: transform 0.3s ease-out, box-shadow 0.3s ease;

        /*Responsive stuff*/ 
        max-width: 800px;
        max-height: 120px;
        
        /*Others*/
        cursor: pointer;
    }

    .downloadLink:hover{
        transform: translateY(-10px);
    }

    #buttonText{
        justify-content: center;
    }

    #downloadSymbol{
        margin-right: 0.3rem;
        margin-top: 0.3rem;
    }
</style>