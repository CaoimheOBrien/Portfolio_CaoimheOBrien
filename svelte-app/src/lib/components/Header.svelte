<script>
    import { Navigation } from  "$lib"
</script>

<header>
    <!--My Name Logo Thing-->
    <div class="Logo_Title">
        <h2>Caoimhe O'Brien</h2> 
    </div>

    <Navigation />
</header>


<style>
    header{
        display: flex;
        position: relative;
        margin: 1rem;
        justify-content: space-between;
    }
    .Logo_Title{
        display: flex;
        align-content: start;
        text-align: left;
        font-size: 1.5rem;
        margin-right: 0.2rem;
    }

    /*Responsiveness */
    @media (max-width: 380px){
        .Logo_Title{
            font-size: 1.3rem;
        }
    }
</style>