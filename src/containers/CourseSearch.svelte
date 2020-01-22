<script>
  import { fade, slide } from "svelte/transition";
  import MdSearch from "svelte-icons/md/MdSearch.svelte";
  import MdClose from "svelte-icons/md/MdClose.svelte";
  import Input from "../components/Input.svelte";

  export let value;

  let showInput = false;
</script>

<style lang="scss">
  @import "../style/theme.scss";
  @import "../style/mixins.scss";

  button {
    @include flex-center;
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    background-color: $main-color;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: none;
    box-shadow: 0 1px 6px 2px #00000038;
    transition: box-shadow 0.3s;
    cursor: pointer;
    z-index: 2;
    outline: none;

    &:hover,
    &:focus {
      box-shadow: 0 3px 6px 4px #00000038;
    }

    :global(svg) {
      width: 50%;
      color: white;
    }
  }

  div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 90;
    background: rgba(0, 0, 0, 0.15);
  }

  span {
    :global(input) {
      position: fixed;
      @include transform-center;
      z-index: 91;
      width: 50% !important;
      background-color: #fff !important;
      box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.5);

      @media only screen and (max-width: $mobile) {
        width: 90% !important;
      }
    }
  }
</style>

<button title="pesquisar" on:click={() => (showInput = !showInput)}>
  {#if value}
    <MdClose />
  {:else}
    <MdSearch />
  {/if}
</button>

{#if showInput}
  <div transition:fade on:click={() => (showInput = !showInput)} />
  <span>
    <Input {value} placeholder="Que curso?" on:input />
  </span>
{/if}
