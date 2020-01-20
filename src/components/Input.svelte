<script>
  export let type = "text";
  export let placeholder = "Digite Aqui...";
  export let value = "";
</script>

<style lang="scss">
  @import "../style/theme.scss";

  input,
  textarea {
    min-width: 10rem;
    height: 4rem;
    width: 100%;
    font-size: 1.5rem;
    border: none;
    border-bottom: 2px solid $light-color;
    padding: 0 1rem;
    transition: 0.3s;
    outline: none;
    background-color: rgba(0, 0, 0, 0.03);

    &:focus {
      border-color: $main-color;
    }

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }

  textarea {
    width: 100%;
    height: 8rem;
    padding-top: 0.5rem;
    resize: none;
  }
</style>

{#if type === 'textarea'}
  <textarea cols="30" rows="10" {placeholder}>{value}</textarea>
{:else}
  <input {type} {placeholder} {value} on:input />
{/if}
