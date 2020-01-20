<script>
  import { onDestroy } from "svelte";

  import EnPolygon from "./EnPolygon.svelte";
  import { fade } from "svelte/transition";

  export let currColor;

  const items = [
    { image: "./intro.mp4", desc: "Introdução", color: "blue" }
    // { image: "./photo1.png", desc: "Social", color: "blue" },
    // { image: "./photo2.jpeg", desc: "some ", color: "orange" },
    // { image: "./photo3.jpeg", desc: "Desc", color: "green" }
  ];

  let currIndex = 0;

  // window.addEventListener("scroll", handleWindowScroll);

  // onDestroy(() => {
  //   console.log("scroll evt");
  //   window.removeEventListener("scroll", handleWindowScroll);
  // });

  // Methods / Functions
  const handleChangeContent = (index, color) => {
    currIndex = index;
    currColor = color;
  };

  // function handleWindowScroll() {
  //   if (window.scrollY > 5) {
  //     currIndex = 0;
  //     currColor = "blue";
  //   }
  // }
</script>

<style lang="scss">
  @import "../style/theme.scss";

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 50rem;
  }

  figure {
    flex-basis: 100%;
    height: 30rem;
    margin-bottom: 1rem;
    border-radius: $radius;

    @media only screen and (max-width: $tablet) {
      margin: 0 2rem;
      margin-bottom: 4rem;
      height: auto;
    }

    img,
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      animation: zoomIn 1s ease-out;
      border-radius: $radius;
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.4);
    }
  }

  nav {
    display: flex;
    width: fit-content;

    :global(svg) {
      margin-right: 0.5rem;
      cursor: pointer;
      color: $white-color;
    }
  }
</style>

<article>
  <figure>
    {#if items[currIndex].image.endsWith('.mp4')}
      <video
        src={items[currIndex].image}
        alt={items[currIndex].desc}
        muted
        autoplay
        autobuffer
        playsinline
        loop />
    {:else}
      <img src={items[currIndex].image} alt={items[currIndex].desc} />
    {/if}
  </figure>
  <!-- <nav>
    {#each items as _, i}
      <EnPolygon
        size="md"
        stroke={currIndex !== i}
        on:click={() => handleChangeContent(i, _.color)} />
    {/each}
  </nav> -->

</article>
