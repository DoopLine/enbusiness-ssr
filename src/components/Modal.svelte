<script>
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";

  import Button from "../components/Button.svelte";

  export let theme;

  const dispatch = createEventDispatcher();
</script>

<style lang="scss">
  @import "../style/mixins.scss";
  @import "../style/theme.scss";
  section {
    @include flex-center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 49;
  }

  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0000002a;
  }
  .modal {
    position: relative;
    // background-color: #fff;
    width: 70%;
    max-width: $landscape;
    min-height: 15rem;
    max-height: 70%;
    padding: 2rem;
    padding-bottom: 3rem;
    // z-index: 1;

    :global(button) {
      position: absolute;
      bottom: 0;
      left: 50%;
      transition: all 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
      transform: translateX(-50%) translateY(2rem);
    }

    @media only screen and (max-width: $tablet) {
      width: 80%;
    }

    @media only screen and (max-width: $mobile) {
      width: 100%;
    }
  }
</style>

<section transition:slide={{ duration: 600 }}>
  <article class="backdrop" on:click={() => dispatch('close')} />
  <article class={'modal ' + (theme ? theme + '--border' : '')}>
    <slot>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veritatis
      inventore temporibus nam pariatur quidem! Placeat, ducimus! Facilis ullam
      non rerum harum excepturi iste in? Ea accusantium dignissimos odio quos.
    </slot>
    <Button {theme} on:click={() => dispatch('close')}>Fechar</Button>
  </article>
</section>
