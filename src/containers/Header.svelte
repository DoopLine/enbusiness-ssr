<script>
  import { stores } from "@sapper/app";

  import HeaderHome from "./HeaderHome.svelte";
  import HeaderCourse from "./HeaderCourse.svelte";

  import Button from "../components/Button.svelte";
  import NavBar from "../components/NavBar.svelte";

  const { page } = stores();
  let currColor = "blue";

  $: location = $page.path;
</script>

<style lang="scss">
  @import "../style/theme.scss";

  .header {
    display: flex;
    flex-direction: column;
    background-color: $main-color;
    background-repeat: no-repeat;
    background-image: url("/bg_polygon.png");
    background-size: cover;
    background-position-y: center;
    height: fit-content;
    position: relative;
    align-items: center;
    height: fit-content;
    margin-top: 7rem;
    padding-top: 6rem;
  }
  .no-padding-top {
    padding-top: initial;
  }

  .bg-orange {
    background-color: $danger-color;
  }

  .bg-green {
    background-color: $success-color;
  }

  .bg-image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
  }
</style>

<header
  id="home"
  class="header"
  class:bg-orange={currColor === 'orange'}
  class:bg-green={currColor === 'green'}
  class:no-padding-top={location === '/cursos'}>
  <NavBar {currColor} />

  {#if location === '/cursos'}
    <HeaderCourse />
  {:else}
    <HeaderHome bind:currColor />
  {/if}
</header>
