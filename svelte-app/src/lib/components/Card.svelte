<script> 
    export let title = "Card Title";

</script>

<div class="card">
    <div class="content">
        <h2>{title}</h2>
        <p><slot></slot></p>
    </div>
</div>

<style>
    .card {
        background: rgba(34, 193, 119, 0.3);
        border-radius: 10px;
        border: 4px solid --var(background-color);
        box-shadow: 0 4px 10px rgba(12, 0, 78, 0.1);
        overflow: hidden;
        margin-left: auto; 
        margin-right: auto;
        width: 100%;
        max-width: 250px; /* Maximum width for larger screens*/
        
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease; /*transitions */
    }

    .content {
        padding: 1.5rem;
    }

    .content h2 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    /*Responsiveness */
    @media(max-width: 1223px){
        .card{
            margin-top: 2rem;
        }
    }

    @media(max-width: 711px){
        .card{
            max-width: 50%;
        }

        .content h2{
            font-size: 1rem;
        }
    }

    @media(max-width: 375px){
        .card{
            max-width: 60%;
        }

        .content h2{
            font-size: 1rem;
        }
        
    }
</style>