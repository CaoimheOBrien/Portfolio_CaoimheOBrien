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
        width: 100%;
        max-width: 250px; /* Maximum width for larger screens*/
        margin: 0 auto;
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
</style>