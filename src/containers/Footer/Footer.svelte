<script>
  import NavLinks from "../../components/NavLinks.svelte";
  import SocialIcon from "../../components/SocialIcon.svelte";
  import Logo from "../../components/Logo.svelte";
</script>

<style lang="scss">
  @import "../../style/theme.scss";
  @import "../../style/mixins.scss";

  footer {
    @include flex-center;
    flex-direction: column;
    justify-content: space-between;
    background: url("/bg_polygon.png") no-repeat $main-color;
    background-position: center;
    background-size: cover;
    min-height: 15rem;
    padding: 2rem;
  }
  section {
    display: flex;
    align-items: center;

    @media only screen and (max-width: $tablet - 100) {
      flex-direction: column;
      align-items: flex-end;

      :last-child {
        text-align: center;
      }
    }

    :last-child {
      @include flex-center;
      font-size: 1.5rem;
      color: $white-color;
    }
  }
  div {
    display: flex;
    margin-right: 4rem;
    min-width: 18rem;
    justify-content: space-around;
  }
</style>

<footer>
  <section>
    <div>
      <SocialIcon
        href="https://www.facebook.com/Enbusiness-1520586474901498/" />
      <SocialIcon
        socialType="instagram"
        href="https://instagram.com/enbusiness?igshid=16u4cuxk9n1u2" />
      <SocialIcon socialType="whatsapp" href="https://whats.link/enbusiness" />
    </div>
    <a href="#home">
      <Logo />
    </a>
  </section>
  <section>
    <small>© 2020 enbusiness &reg;, Todos os direitos reservados.</small>
  </section>
</footer>
