<script>
  import { onMount } from "svelte";

  import Carrocel from "../components/Carrocel.svelte";
  import EnHandShake from "../components/EnHandShake.svelte";


  export let currColor;

	let animate = false;

  onMount(() => {
    animate = true;
  });

</script>
			
<style lang="scss">
  @import '../style/theme.scss';
		section {
    display: flex;
    height: fit-content;
    margin-bottom: 3rem;
    width: 100%;
    justify-content: space-around;
    max-width: $landscape;
    align-items: center;
    z-index: 1;

    @media only screen and (max-width: $tablet) {
      flex-direction: column-reverse;
      justify-content: center;
    }

    @media only screen and (min-width: $tablet) {
      padding: 0 3rem;
    }

    @media only screen and (max-width: $mobile) {
      margin-bottom: -1rem;
    }

    article {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 8rem;

      @media only screen and (max-width: $tablet) {
        text-align: center;
      }

      h1 {
        color: $white-color;
        margin-bottom: -1rem;
        text-shadow: 0 0 1px lighten($dark-color, 5);
        animation-duration: 1s;
        animation-delay: 1s;
        animation-fill-mode: backwards;
        
        @media only screen and (max-width: $tablet + 150) {
          font-size: var(--lg);
        }
      }

      h6 {
        color: $light-color;
        font-weight: 500;
        padding-left: 6px;
        animation-duration: 1s;
        animation-delay: 2s;
        animation-fill-mode: backwards;
      }
    }
  }
</style>

<section>
    <article class="header_content_text">
      <h1 class:slide-in-left={animate}>Enbusiness</h1>
      <h6 class:slide-in-left={animate}>Qualquer negócio em boas mãos.</h6>
    </article>
    <Carrocel bind:currColor />
  </section>
  <EnHandShake />
