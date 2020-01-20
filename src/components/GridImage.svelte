<script>
  import GridImagePreview from "../components/GridImagePreview.svelte";
  // import { fly } from 'svelte/transition';

  export let images = [];
  export let currImageindex;

  let showImage = false;

  const handleOpenShowImage = index => {
    currImageindex = index;
    showImage = true;
  };

  const handleNext = () => {
    if (currImageindex === images.length - 1) return (currImageindex = 0);
    currImageindex++;
  };

  const handlePrev = () => {
    if (currImageindex === 0) return (currImageindex = images.length - 1);
    currImageindex--;
  };
</script>

<style lang="scss">
  @import "../style/theme.scss";
  @import "../style/mixins.scss";
  article {
    display: flex;
    width: 100%;
    height: auto;
    // min-width: 30rem;
    border-radius: $radius;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
  }

  img,
  video {
    width: 49%;
    height: 49.5%;
    object-fit: cover;
    cursor: pointer;
    animation: fadeIn 1s ease-out;

    &:nth-child(1) {
      border-top-left-radius: $radius;
    }
    &:nth-child(2) {
      border-top-right-radius: $radius;
    }
    &:nth-child(3) {
      border-bottom-left-radius: $radius;
    }
    &:nth-child(4) {
      border-bottom-right-radius: $radius;
    }

    &:not(:nth-child(2)),
    &:not(:last-child) {
      margin-bottom: 0.3rem;
      margin-right: 0.3rem;
    }

    @media only screen and (max-width: $mobile - 100) {
      width: 100%;
      height: auto;
    }
  }
</style>

<article>
  {#each images as { text, image, alt }, i}
    {#if image.endsWith('.mp4')}
      <video
        src={image}
        autoplay
        muted
        loop
        on:click={() => handleOpenShowImage(i)} />
    {:else}
      <img src={image} {alt} on:click={() => handleOpenShowImage(i)} />
    {/if}
  {/each}
  {#if showImage}
    <GridImagePreview
      imagePath={images[currImageindex].image}
      alt={images[currImageindex].alt}
      on:blur={() => (showImage = false)}
      on:next={handleNext}
      on:prev={handlePrev} />
  {/if}
</article>
