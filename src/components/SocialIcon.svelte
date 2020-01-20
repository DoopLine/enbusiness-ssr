<script>
  import FiFacebook from "svelte-icons/fi/FiFacebook.svelte";
  import FaInstagram from "svelte-icons/fa/FaInstagram.svelte";
  import FaWhatsapp from "svelte-icons/fa/FaWhatsapp.svelte";

  export let socialType = "facebook";
  export let href = "#";
</script>

<style lang="scss">
  @import "../style/theme.scss";
  @import "../style/mixins.scss";

  a {
    @include flex-center;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: $white-color;
    cursor: pointer;
    transition: all .5s;
    color: $main-color;

    :global(svg) {
      width: 3rem;
    }

    &:hover{
      box-shadow: 0 0 5px white;
    }
  }

  .whatsapp {
    &:hover {
      background: green;
      color: $white-color;
    }
  }
  .facebook {
    &:hover {
      background: blue;
      color: $white-color;
    }
  }
  .instagram {
    &:hover {
      background: linear-gradient(rgb(255, 29, 104), rgb(255, 199, 14));
      color: $white-color;
    }
  }
</style>

<a
  {href}
  target="_blank"
  class:whatsapp={socialType === 'whatsapp'}
  class:facebook={socialType === 'facebook'}
  class:instagram={socialType === 'instagram'}>
  {#if socialType === 'facebook'}
    <FiFacebook />
  {/if}
  {#if socialType === 'instagram'}
    <FaInstagram />
  {/if}
  {#if socialType === 'whatsapp'}
    <FaWhatsapp />
  {/if}
</a>
