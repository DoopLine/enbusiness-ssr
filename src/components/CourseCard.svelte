<script>
  import { getModules } from "../data/coursesData.js";

  import Button from "../components/Button.svelte";
  import Modal from "../components/Modal.svelte";
  import CourseDetails from "../containers/CourseDetails.svelte";
  import LogoOriginal from "../components/LogoOriginal.svelte";
  import Label from "../components/Label.svelte";

  // courses Logos
  import PhotoshopLogo from "../components/PhotoshopLogo.svelte";
  import IllustratorLogo from "../components/IllustratorLogo.svelte";
  import AfterEffectsLogo from "../components/AfterEffectsLogo.svelte";
  import ExcelLogo from "../components/ExcelLogo.svelte";
  import HtmlLogo from "../components/HtmlLogo.svelte";
  import CssLogo from "../components/CssLogo.svelte";
  import JavascriptLogo from "../components/JavascriptLogo.svelte";
  import NodejsLogo from "../components/NodejsLogo.svelte";
  import PHPLogo from "../components/PHPLogo.svelte";
  import DigitalMarketingLogo from "../components/DigitalMarketingLogo.svelte";
  import AnimationLogo from "../components/AnimationLogo.svelte";
  import InCopyLogo from "../components/InCopyLogo.svelte";
  import InDesignLogo from "../components/InDesignLogo.svelte";
  import LightRoomLogo from "../components/LightRoomLogo.svelte";
  import PreludeLogo from "../components/PreludeLogo.svelte";
  import PremierLogo from "../components/PremierLogo.svelte";

  export let courseType = "photoshop";
  export let theme;

  let showMoreInfo = false;
  const { sections, courseDesc } = getModules(courseType);

  $: currLogo = () => {
    switch (courseType) {
      case "photoshop":
        theme = "ps-theme";
        return PhotoshopLogo;
      case "illustrator":
        theme = "ai-theme";
        return IllustratorLogo;
      case "after effects":
        theme = "ae-theme";
        return AfterEffectsLogo;
      case "excel":
        theme = "ex-theme";
        return ExcelLogo;
      case "html":
        theme = "ht-theme";
        return HtmlLogo;
      case "css":
        theme = "cs-theme";
        return CssLogo;
      case "javascript":
        theme = "js-theme";
        return JavascriptLogo;
      case "php":
        theme = "ph-theme";
        return PHPLogo;
      case "node js":
        theme = "nd-theme";
        return NodejsLogo;
      case "marketing digital":
        theme = "mk-theme";
        return DigitalMarketingLogo;
      case "animation":
        theme = "an-theme";
        return AnimationLogo;
      case "incopy":
        theme = "ic-theme";
        return InCopyLogo;
      case "indesign":
        theme = "id-theme";
        return InDesignLogo;
      case "lightroom":
        theme = "lr-theme";
        return LightRoomLogo;
      case "prelude":
        theme = "pl-theme";
        return PreludeLogo;
      case "premiere":
        theme = "pm-theme";
        return PremierLogo;
      default:
        theme = "ps-theme";
        return PhotoshopLogo;
    }
  };
</script>

<style lang="scss">
  @import "../style/theme.scss";
  article {
    position: relative;
    perspective: 150rem;
    -moz-perspective: 150rem;
    flex-basis: calc(#{$desktop} / 4);
    flex-shrink: 0;
    margin-right: 3rem;
    margin-bottom: 3rem;
    height: 51rem;

    //Rotation code
    &:hover,
    &:focus {
      .front {
        transform: rotateY(-180deg);
      }
      .back {
        transform: rotateY(0);

        :global(button) {
          transform: translateY(2.7rem);
          opacity: 1;
        }
      }
    }

    @media only screen and (max-width: $mobile) {
      margin-right: initial;
    }
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    justify-content: center;
    text-align: center;
    transition: all 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
    backface-visibility: hidden;
    height: inherit;
    width: 100%;
  }

  .front {
    background: url("/bg_course_card.png") #ececec;
    background-blend-mode: luminosity;
    justify-content: flex-start;

    :global(svg) {
      &:first-child {
        margin-bottom: 1.5rem;
      }
      &:last-of-type {
        align-self: flex-end;
        width: 80%;
      }
    }

    h5,
    p {
      padding: 0 2rem;
      margin-bottom: 1.5rem;
    }

    h5 {
      text-transform: uppercase;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
      margin-top: -1rem;
      font-size: 2.5rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  .back {
    position: relative;
    transform: rotateY(180deg);
    color: $white-color;
    font-size: 1.5rem;
    padding: 1rem;

    :global(button) {
      position: absolute;
      bottom: 0.5rem;
      opacity: 0;
      min-width: 14rem;
      transform: translateY(0);
      transition: transform 1s cubic-bezier(0.22, 0.61, 0.36, 1),
        opacity 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      list-style: initial;
      align-self: baseline;
      margin-left: 2rem;
    }
  }

  .ps-theme {
    background-color: $ps-dark-color;
  }

  .ai-theme {
    background-color: $ai-dark-color;
  }
  .ae-theme {
    background-color: $ae-dark-color;
  }
  .ex-theme {
    background-color: $ex-dark-color;
  }
  .ht-theme {
    background-color: $ht-dark-color;
  }

  .cs-theme {
    background-color: $cs-dark-color;
  }

  .js-theme {
    background-color: $js-dark-color;
  }

  .ph-theme {
    background-color: $ph-dark-color;
  }

  .nd-theme {
    background-color: $nd-dark-color;
  }

  .mk-theme {
    background-color: $mk-dark-color;
  }

  .an-theme {
    background-color: $an-dark-color;
  }

  .ic-theme {
    background-color: $ic-dark-color;
  }

  .id-theme {
    background-color: $id-dark-color;
  }

  .lr-theme {
    background-color: $lr-dark-color;
  }

  .pl-theme {
    background-color: $pl-dark-color;
  }

  .pm-theme {
    background-color: $pm-dark-color;
  }
</style>

<article>
  <div class="front">
    <LogoOriginal />
    <svelte:component this={currLogo()} />
    <h5 class={theme + '--text'}>{courseType}</h5>
    <p>{courseDesc}</p>
  </div>
  <div class={'back ' + theme}>
    {#each sections as data}
      <Label {theme}>{data.title}</Label>
      <ul>
        {#each data.modules as module}
          <li>{module.name}</li>
        {/each}
      </ul>
    {/each}

    <!-- <ul>
      {#each modules[0].modules as module}
        <li>{module}</li>
      {/each}
    </ul>
    <Label {theme}>{advanceModule.title}</Label>
    <ul>
      {#each advanceModule.modules as module}
        <li>{module}</li>
      {/each}
    </ul> -->
    <Label {theme}>Inclui E-book e Certificado</Label>
    <Button
      theme={theme + '--border'}
      on:click={() => (showMoreInfo = !showMoreInfo)}>
      Saiba Mais
    </Button>
  </div>
</article>

{#if showMoreInfo}
  <Modal {theme} on:close={() => (showMoreInfo = !showMoreInfo)}>
    <CourseDetails {theme} {courseType} />
  </Modal>
{/if}
