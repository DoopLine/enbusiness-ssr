<script>
  // import {fly} from 'svelte/transition';

  import Logo from "./Logo.svelte";
  import GraphicsLogo from "./GraphicsLogo.svelte";
  import ConsultLogo from "./ConsultLogo.svelte";
  import EnOutline from "./EnOutline.svelte";

  import Button from "./Button.svelte";
  import GridImage from "../components/GridImage.svelte";

  export let title;
  export let reverse = false;
  export let type = "service";
  export let images = [];

  let showGrid = false;
  let currIndex = undefined;

  const handleShowGrid = () => {
    if (showGrid) currIndex = undefined;
    showGrid = !showGrid;
  };
</script>

<style lang="scss">
  @import "../style/theme.scss";

  section {
    display: flex;
    max-height: 35rem;
    color: $dark-color;
    margin-bottom: 10rem;
    height: 30rem;

    @media only screen and (max-width: $tablet) {
      flex-direction: column;
      height: initial;
      max-height: initial;
    }

    &:nth-child(1) {
      button {
        animation: blink 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
      }
    }
  }

  button {
    position: relative;
    display: flex;
    justify-content: center;
    border: none;
    outline: none;
    align-items: center;
    width: 100%;
    height: auto;
    // min-width: 30rem;
    border-radius: $radius;
    background-color: $main-color;
    cursor: pointer;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 0 5px 12px 1px #00000054;
    }
    &:focus {
      box-shadow: 0 5px 12px 1px #00000080;
    }

    @media only screen and (max-width: $tablet) {
      height: 25rem;
    }
  }
  .success {
    background-color: $success-color;
  }
  .danger {
    background-color: $danger-color;
  }

  article {
    width: 100%;
    padding-left: 10rem;
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4 {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    @media only screen and (max-width: $tablet) {
      margin-top: 2rem;
      padding: 1rem;
    }

    :global(button) {
      align-self: flex-end;
      margin-top: 2rem;
    }
  }

  .reverse {
    flex-direction: row-reverse;

    @media only screen and (max-width: $tablet) {
      flex-direction: column;
      height: initial;
      max-height: initial;
    }

    article {
      padding-right: 10rem;
      padding-left: 0;

      @media only screen and (max-width: $tablet) {
        margin-top: 2rem;
        padding: 1rem;
      }
    }
  }
</style>

<section class:reverse>
  {#if showGrid}
    <GridImage {images} bind:currImageindex={currIndex} />
  {:else}
    <button
      class:danger={type === 'graphics'}
      class:success={type === 'economic'}
      on:click={handleShowGrid}>
      {#if type === 'graphics'}
        <GraphicsLogo size="lg" />
      {:else if type === 'economic'}
        <ConsultLogo size="lg" />
      {:else}
        <Logo size="lg" />
      {/if}
      <EnOutline />
    </button>
  {/if}
  <article>
    <h4>{title}</h4>
    {#if currIndex !== undefined && showGrid}
      <p>{images[currIndex].text}</p>
    {:else}
      <p>
        <slot>
          lsklf;kdsl;kfl;sdkfl;dskl;fkdsl;fksdlkfl;sdkfl;sdkfl;dsklf;sdk;l
        </slot>
      </p>
    {/if}
    <Button on:click={handleShowGrid}>
      {showGrid ? 'Voltar' : 'Ver mais'}
    </Button>
  </article>
</section>
