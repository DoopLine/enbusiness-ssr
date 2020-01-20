<script>
  export let size = "sm";
  export let stroke = false;
</script>

<style scss="scss">
  @import "../style/theme.scss";

  svg {
    width: 1.5rem;
    animation: zoomIn 0.3s ease-out;
    fill: currentColor;
    animation: EnRanbow 5s ease infinite;
  }

  .md {
    width: 1.7rem;
  }

  .stroke {
    stroke: currentColor;
    fill: transparent;
    animation: none;
  }
</style>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="20.856"
  height="20.124"
  viewBox="0 0 20.856 20.124"
  class:md={size === 'md'}
  class:stroke
  on:click>
  <path
    id="Polígono_1"
    data-name="Polígono 1"
    d="M10.839,0a2,2,0,0,1,1.736,1.008l2.857,5a2,2,0,0,1,0,1.985l-2.857,5A2,2,0,0,1,10.839,14H5.161a2,2,0,0,1-1.736-1.008l-2.857-5a2,2,0,0,1,0-1.985l2.857-5A2,2,0,0,1,5.161,0Z"
    transform="translate(7) rotate(30)" />
</svg>
