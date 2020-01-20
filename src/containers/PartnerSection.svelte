<script>
  import BonwsLogo from "../components/BonwsLogo.svelte";
  import HoneywellLogo from "../components/HoneywellLogo.svelte";
  import MatestLogo from "../components/MatestLogo.svelte";
  import MavinsaLogo from "../components/MavinsaLogo.svelte";
  import MarkasLogo from "../components/MarkasLogo.svelte";
  import PortwestLogo from "../components/PortwestLogo.svelte";
  import FortotalLogo from "../components/FortotalLogo.svelte";
  import SahamLogo from "../components/SahamLogo.svelte";
  import ConnectionRHLogo from "../components/ConnectionRHLogo.svelte";
</script>

<style lang="scss">
  @import "../style/theme.scss";
  @import "../style/mixins.scss";
  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
    min-height: 15rem;
    border-radius: $radius;
    background-image: linear-gradient(45deg, #355da4, #3763b0);
    color: $light-color;
    margin-bottom: 8rem;

    ::-webkit-scrollbar {
      background: $white-color;
      height: 1rem;
      border-radius: $radius;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: $radius;
      background-color: $light-color;
      box-shadow: 0 0 5px #0000004a;
      &:hover {
        background-color: #3763b061;
      }
    }

    // ::-webkit-scrollbar-thumb:hover{
    //     background-color: var(--secondary-color);
    // }
    // ::-webkit-scrollbar-button{
    //     background: transparent;
    //     height: inherit;
    // }

    // ::-webkit-scrollbar-track{
    //     background: var(--primary-transparent-color);
    // }
  }

  article {
    @include flex-center;
    justify-content: space-between;

    @media screen and (min-width: $landscape) {
      justify-content: center;
    }
    overflow-x: auto;
    overflow-y: hidden;

    :global(svg) {
      width: 15rem;
      min-width: 15rem;
      transition: 0.2s;
      margin-left: 1rem;

      &:hover {
        color: $white-color;
        transform: scale(1.1);
      }
    }

    :global(path) {
      fill: currentColor;
    }
  }

  h5 {
    text-align: center;
    // margin-bottom: 2rem;
    color: $white-color;
  }
</style>

<section>
  <h5>Parceiros</h5>
  <article>
    <BonwsLogo />
    <PortwestLogo />
    <HoneywellLogo />
    <FortotalLogo />
    <SahamLogo />
    <MatestLogo />
    <MarkasLogo />
    <ConnectionRHLogo />
    <MavinsaLogo />
  </article>
</section>
