<script>
  import Header from "../containers/Header.svelte";
  import Footer from "../containers/Footer/Footer.svelte";

  // export let segment;
  // $: console.log(segment);
</script>

<style lang="scss" global>
  @import "./style/global.scss";

  main {
    padding: 6rem 5rem;
    max-width: $landscape;
    margin: auto;

    @media only screen and (max-width: $mobile) {
      padding: 6rem 2rem;
    }
  }
</style>

<Header />

<main>
  <slot />
</main>

<Footer />
