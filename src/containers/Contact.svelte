<script>
  import MdRoom from "svelte-icons/md/MdRoom.svelte";
  import MdAssignmentInd from "svelte-icons/md/MdAssignmentInd.svelte";
  import FiPhone from "svelte-icons/fi/FiPhone.svelte";

  import Input from "../components/Input.svelte";
  import Button from "../components/Button.svelte";

  let email = "";
  let name = "";
  // let email = '';
</script>

<style lang="scss">
  @import "../style/theme.scss";

  section {
    display: flex;
    color: $dark-color;
    justify-content: space-evenly;
    margin: auto;
    max-width: 80rem;
    margin-bottom: 10rem;

    h6 {
      text-transform: uppercase;
      margin-bottom: 2rem;
    }

    @media only screen and (max-width: $tablet - 100) {
      flex-direction: column;
      margin-bottom: 5rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    flex-basis: 65%;
    padding: 4rem;

    :global(*) {
      margin-bottom: 1rem;
    }

    :global(button) {
      align-self: flex-end;
    }

    @media only screen and (max-width: $mobile) {
      align-items: center;
      padding: 1rem;
      margin-top: 2rem;

      :global(button) {
        align-self: initial;
        margin-top: 1rem;
      }
    }
  }
  article {
    display: flex;
    flex-basis: 35%;
    flex-direction: column;
    padding: 4rem;
    justify-content: space-between;
    color: #fff;
    background-color: $main-color;
    border-radius: $radius;

    > p,
    div > p {
      font-size: 1.3rem;
      margin-left: 2rem;
    }
  }

  span {
    display: flex;

    p {
      font-size: 1.5rem;
      font-weight: 600;
    }

    :global(svg) {
      width: 1.8rem;
      margin-right: 0.2rem;
    }
  }
</style>

<section>
  <article>
    <h6>Informações</h6>
    <div>
      <span>
        <MdRoom />
        <p>Localização</p>
      </span>
      <p>Av. Pedro de Castro Van-Dúnem "Loy" N° 76, 1° Andar.</p>
    </div>
    <div>
      <span>
        <FiPhone />
        <p>Telefones</p>
      </span>
      <p>927 939 824</p>
      <p>935 677 777</p>
      <p>923 481 267</p>
    </div>
    <div>
      <span>
        <MdAssignmentInd />
        <p>NIF</p>
      </span>
      <p>5417276642</p>
    </div>
    <p>ANGOLA - LUANDA</p>
  </article>
  <form action="mailto:{email}" method="GET">
    <h6>Mantenha-se em Contacto</h6>
    <Input placeholder="Seu nome..." on:input={e => (name = e.target.value)} />
    <Input
      type="email"
      placeholder="Seu email..."
      value={email}
      on:input={e => (email = e.target.value)} />
    <Input type="textarea" placeholder="Sua mensagem..." />
    <Button type="submit">Enviar</Button>
  </form>
</section>
