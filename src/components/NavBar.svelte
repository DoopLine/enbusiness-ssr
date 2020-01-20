<script>
  // import { onDestroy } from "svelte";
  // import { location } from "svelte-spa-router";

  import FaBars from "svelte-icons/fa/FaBars.svelte";
  import MdMenu from "svelte-icons/md/MdMenu.svelte";

  import Logo from "./Logo.svelte";
  import GraphicsLogo from "./GraphicsLogo.svelte";
  import ConsultLogo from "./ConsultLogo.svelte";
  import NavLinks from "./NavLinks.svelte";
  import SideBar from "./SideBar.svelte";

  export let currColor = "blue";

  let showSideNav = false;

  $: currLogoComponent = () => {
    if (currColor === "orange") {
      return GraphicsLogo;
    } else if (currColor === "green") {
      return ConsultLogo;
    } else {
      return Logo;
    }
  };

  // const handleNavLinkClick = () => {

  // };

  // document.addEventListener("scroll", handleWindowScroll);

  // onDestroy(() => {
  //   document.removeEventListener("scroll", handleWindowScroll);
  // });

  // function handleWindowScroll(e) {
  //   if ($location === "/cursos") {
  //     hash = null;
  //     return;
  //   }

  //   let calc =
  //     (window.scrollY * 100) /
  //     (document.scrollingElement.scrollHeight - window.innerHeight);

  //   if (calc >= 19 && calc < 65) {
  //     hash = "#service";
  //   } else if (calc >= 65 && calc < 98) {
  //     hash = "#contact";
  //   } else if (calc >= 96) {
  //     hash = "#about";
  //   } else {
  //     hash = "#home";
  //   }
  // }
</script>

<style lang="scss">
  @import "../style/theme.scss";

  .wrapper {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 50;
    transition: 0.5s;
    padding: 0 6rem;
    background-color: $main-color;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

    @media only screen and (max-width: $mobile) {
      padding: 0 3rem;
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: fit-content;
    max-width: $landscape;
    height: 7rem;

    :global(figure) {
      margin-right: auto;
    }

    span {
      width: 3rem;
      margin-right: 5rem;
      color: $white-color;
      cursor: pointer;
      display: none;

      @media only screen and (max-width: $desktop) {
        display: initial;
      }
    }
  }

  a {
    @media only screen and (max-width: $mobile + 100) {
      :global(svg) {
        width: 15rem;
      }
    }
  }
</style>

<div class="wrapper">
  <nav>
    <span on:click={() => (showSideNav = true)}>
      <MdMenu />
    </span>
    <a href="#home">
      <svelte:component this={currLogoComponent()} />
    </a>
    <NavLinks hide={true} />
    {#if showSideNav}
      <SideBar on:close={() => (showSideNav = false)}>
        <Logo />
        <NavLinks on:next={() => (showSideNav = false)} block={true} />
      </SideBar>
    {/if}
  </nav>
</div>
