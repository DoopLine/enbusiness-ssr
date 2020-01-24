<script>
  export let id;
  export let text = "Lorem ipsuum";
  export let value;
  export let group;
</script>

<style lang="scss">
  @import "../style/_theme.scss";
  $checked-color: #fff;

  input {
    position: absolute;
    opacity: 0;

    &:hover + label:before {
      background-color: $main-color;
    }

    &:focus + label:before {
      box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
    }

    &:checked + label:before {
      background-color: $main-color;
    }

    &:disabled + label {
      color: #b8b8b8;
      cursor: auto;
    }

    &:checked + label::after {
      content: "";
      position: absolute;
      left: 5px;
      top: 12px;
      background-color: $checked-color;
      width: 2px;
      height: 2px;
      box-shadow: 2px 0 0 $checked-color, 4px 0 0 $checked-color,
        4px -2px 0 $checked-color, 4px -4px 0 $checked-color,
        4px -6px 0 $checked-color, 4px -8px 0 $checked-color;
      transform: rotate(45deg);
    }
  }

  label {
    position: relative;
    cursor: pointer;
    padding: 0;
    font-size: 1.6rem;

    &::before {
      content: "";
      margin-right: 10px;
      display: inline-block;
      vertical-align: text-top;
      width: 20px;
      height: 20px;
      border: 2px solid $main-color;
      transition: 0.3s;
    }
  }
</style>

<input type="checkbox" {id} {value} bind:group />
<label for={id}>{text}</label> 
