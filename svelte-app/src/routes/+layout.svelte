<script>
    import { Header } from "$lib";
</script>

<!--Header-->
<Header />

<!--Main Content-->
<main>
    <slot />
</main>

<style>
    main{
        padding: 2rem; 
        text-align: center;
        height: 100%;
    }

</style>