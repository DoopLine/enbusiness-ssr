<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  import MdChevronLeft from "svelte-icons/md/MdChevronLeft.svelte";
  import MdChevronRight from "svelte-icons/md/MdChevronRight.svelte";

  export let imagePath;
  export let alt;

  const dispatch = createEventDispatcher();
  let showImageNode;
  let expand = false;

  onMount(() => showImageNode.focus());

  const expandPreview = () => {
    if (!window.matchMedia("(min-width: 768px)").matches) return null;
    expand = !expand;
  };
</script>

<style lang="scss">
  @import "../style/mixins.scss";
  @import "../style/theme.scss";
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    @include transform-center;
    align-items: center;
    z-index: 2;

    :global(svg) {
      cursor: pointer;
      z-index: 1;
      height: auto;
      color: $white-color;
    }

    @media only screen and (max-width: $tablet) {
      height: auto;
    }
  }

  .expand {
    @media only screen and (min-width: $tablet) {
      position: fixed;
      justify-content: center;
      min-width: 60rem;
      max-width: 134rem;
      width: 70%;
      height: 80%;
      max-height: 85rem;
      margin-top: 3.5rem;

      :global(svg) {
        display: none;
      }

      img,
      video {
        width: 100%;
      }
    }
  }

  img,
  video {
    height: 100%;
    width: 70%;
    object-fit: cover;
  }

  span {
    position: absolute;
    width: 99%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: $radius;
  }

  .full-backdrop {
    @media only screen and (min-width: $tablet) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      border-radius: 0;
      z-index: 1;
    }
  }
</style>

<div
  tabindex="0"
  transition:fade
  bind:this={showImageNode}
  on:blur
  class:expand>
  <MdChevronLeft on:click={() => dispatch('prev')} />
  {#if imagePath.endsWith('.mp4')}
    <video src={imagePath} autoplay muted loop on:click={expandPreview} />
  {:else}
    <img src={imagePath} {alt} on:click={expandPreview} />
  {/if}
  <MdChevronRight on:click={() => dispatch('next')} />
</div>
<span class:full-backdrop={expand} />
