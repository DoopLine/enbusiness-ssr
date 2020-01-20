<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { stores } from "@sapper/app";

  import EnPolygon from "../components/ENPolygon.svelte";

  export let addPolygon = true;
  export let block = false;
  export let hide = false;

  const { page } = stores();
  const dispatch = createEventDispatcher();
  let hash;
  let timeout;

  $: location = $page.path;

  onMount(async () => {
    hash = await window.location.hash || "#home";
  });

  const linksList = [
    { title: "início", href: "#home" },
    { title: "serviços", href: "#service" },
    { title: "cursos", href: "/cursos" },
    { title: "contatos", href: "#contact" },
    { title: "sobre", href: "#about" }
  ];

  const handleClick = () => {
    if(timeout) clearTimeout(timeout);
    
    timeout = setTimeout(() => {
      hash = window.location.hash;
    }, 500);

    dispatch("next");
  };
</script>

<style lang="scss">
  @import "../style/theme.scss";

  ul {
    display: flex;
    font-size: 1.4rem;

    :global(svg) {
      color: $white-color;
    }
  }

  li {
    position: relative;

    :global(svg) {
      position: absolute;
      top: -15px;
      left: 0px;
    }
  }

  a {
    text-decoration: none;
    margin: 0 1rem;
    color: $white-color;
    transition: 0.3s;
    border-bottom-color: transparent;
    padding: 3px;
    text-transform: uppercase;
    font-weight: 500;

    &:hover {
      border-bottom: 3px solid $white-color;
    }
  }

  .active_link {
    font-weight: bold;
    letter-spacing: 1px;
  }

  .pulse {
    animation: pulse 1s ease infinite;
  }

  .block {
    display: block;
    margin-top: 4rem;

    li {
      margin-bottom: 3rem;

      > a {
        border-bottom: 2px solid #335897;
        transition: 0.3s ease-in;
        display: flex;
        padding: 1rem;

        &:hover {
          background-color: #33589799;
        }
      }
    }
  }

  .hide {
    @media only screen and (max-width: $desktop) {
      display: none !important;
    }
  }
</style>

<ul class:block class:hide>
  {#each linksList as { title, href }}
    <li
      class="link_item"
      class:pulse={title === 'cursos' && location !== '/cursos'}>
      {#if (location === href || hash === href) && addPolygon}
        <EnPolygon />
      {/if}
      <a {href} on:click={handleClick}>{title}</a>
    </li>
  {/each}
</ul>
