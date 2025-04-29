<script>
    import { Header, Footer, } from "$lib"; 
</script>

<!--Header-->
<Header />

<!--Main Content-->
<main>
    <slot />
</main>

<!--Footer-->
<Footer />

<style>
    main{
        padding: 2rem; 
        text-align: center;
        height: 100%; 
    }

</style>