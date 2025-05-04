<script>
    
</script>

<button id="topButton" title="Go to Top">
    <a href="#Start" aria-label="navigationLinkToTopOfPage"> Top </a>
</button>

<style> 
    #topButton {
        /*Colours */ 
        background: rgba(18, 104, 51, 0.4);
        color: white;

        /*Border Styling */
        border-radius: 10px;
        border: 4px groove rgb(3, 71, 39);

        /*Layout */ 
        padding: 1rem;
        width: 7rem; 
        right: 0.5rem;
        bottom: 1rem;
        float: right;
        position: fixed;
        transition: transform 0.3s ease, box-shadow 0.3s ease; /*transitions */
    }

    #topButton a{
        font-size: 2.6rem;
    }

    #topButton:hover{
        background: rgba(18, 104, 51, 0.8);
        transform: translateY(-10px);
    }

    /*Responsiveness*/ 
    @media(max-width: 1223px){
        #topButton{
            right: 1rem; 
        }

        #topButton a{
            font-size: 1.8rem;
        }
    }

    @media(max-width: 650px){
        #topButton{
            font-size: 1.5rem;
            width: 5rem;
            right: 0.5rem;
        }

        #topButton a{
            font-size: 1.5rem;
        }
    }
</style>