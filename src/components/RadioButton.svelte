<script>
  export let name;
  export let value;
  export let group;
</script>

<style>
  span {
    display: flex;
    align-items: center;
  }

  input {
    margin-right: 1rem;
  }
</style>

<span>
  <label>
    <input type="radio" {value} {name} bind:group />
    <slot>Lorem ipsum</slot>
  </label>
</span>
