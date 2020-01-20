<script>
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";

  import Backdrop from "../components/Backdrop.svelte";

  const dispatch = createEventDispatcher();
</script>

<style lang="scss">
  @import "../style/theme.scss";
  aside {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 40%;
    min-width: 25rem;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: $main-color;
    padding: 2rem;
    outline: none;
    z-index: 10;
    box-shadow: 3px 0 10px 0px rgba(0, 0, 0, 0.4);

    :global(figure) {
      margin-bottom: 5rem;
    }

    @media only screen and (max-width: $mobile + 100) {
      :global(svg) {
        width: 15rem;
      }
    }
  }
</style>

<Backdrop on:click={() => dispatch('close')} />
<aside transition:fly={{ x: -400 }}>
  <slot />
</aside>
