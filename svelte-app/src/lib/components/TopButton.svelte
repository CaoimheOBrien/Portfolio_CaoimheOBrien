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

        /*Text Stuff */
        font-size: 3rem;
        
        /*Layout */ 
        align-content: center;
        padding: 0.75rem;
        padding-top: 0.2rem;
        width: 8rem; 
        right: 2.8rem;
        bottom: 1rem;
        float: right;
        position: fixed;
        transition: transform 0.3s ease, box-shadow 0.3s ease; /*transitions */
    }

    #topButton a{
        text-align: center;
        font-size: 1.6rem;
    }

    #topButton:hover{
        background: rgba(18, 104, 51, 0.8);
        transform: translateY(-10px);
    }
</style>