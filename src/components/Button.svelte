<script>
  export let type = "button";
  export let secondary = false;
  export let size = "md";
  export let theme;

  theme = theme ? theme + "--border" : "";
</script>

<style lang="scss">
  @import "../style/theme.scss";

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $main-color;
    color: $white-color;
    border-radius: 5px;
    box-shadow: 0 0 3px #00000026;
    border: none;
    width: fit-content;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;
    letter-spacing: 1px;
    transition: box-shadow 0.2s;

    &:hover,
    &:focus {
      box-shadow: 0 1px 8px lighten($dark-color, 5);
    }

    &:disabled {
      background-color: lighten($main-color, 30);
      box-shadow: none;
      cursor: not-allowed;
    }
  }

  .secondary {
    background-color: #fff;
    border: 1px solid $white-color;
    color: $dark-color;
  }

  .large {
    padding: 1rem 2.5rem;
    font-size: 2rem;
  }
</style>

<button
  class={theme}
  on:click
  {type}
  class:secondary
  class:large={size === 'lg'}>
  <slot>Lorem</slot>
</button>
