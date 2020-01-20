<script>
  import Label from "../components/Label.svelte";
  import RadioButton from "../components/RadioButton.svelte";
  import { getModules } from "../data/coursesData.js";

  export let theme = "";
  export let courseType;

  let selectedModule = 1;
  let { sections, courseDesc } = getModules(courseType);

  $: currModule =
    selectedModule === 1
      ? (currModule = sections[0].modules)
      : (currModule = sections[1].modules);

  // const currencyFormat = num =>
  //   num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "1,");
</script>

<style lang="scss">
  @import "../style/theme.scss";
  .container {
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    height: 50vh;
    justify-content: center;

    @media only screen and (max-width: $tablet) {
      flex-wrap: nowrap;
      flex-direction: column;
      justify-content: initial;
    }
  }

  .column {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 30%;
    font-size: 1.5rem;
    margin: 0 1rem;

    &:not(:first-child) {
      width: 60%;
    }

    @media only screen and (max-width: $tablet) {
      width: 100%;
      margin: initial;

      &:not(:first-child) {
        width: 100%;
      }
    }
  }

  .radio-group {
    display: flex;
    justify-content: space-evenly;
    margin: 0.5rem 0;
  }

  ul {
    list-style: none;

    li {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      border-bottom: 2px solid #ffffff26;
    }

    details {
      width: 65%;
      p {
        padding-left: 2rem;
      }
    }
  }

  .extra-info {
    display: flex;
    width: 90%;
    margin: 1rem 0;
    align-self: center;
  }
</style>

<div class="container">
  <div class="column">
    <Label {theme}>Destinatários</Label>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dolores?
    Explicabo alias nostrum mollitia, consectetur sint esse sit blanditiis
    dolores eos iusto a tempora quidem quia laboriosam amet totam non.
    <Label {theme}>Objectivos</Label>
    O Presente curso pretende dotar os formandos de conhecimentos básicos e
    avançados.
    <Label {theme}>Metodologias</Label>
    As metodologias a utilizar pelo formador serão explorativas, desmotrativas,
    e/ou ativas, privilegiando sempre que possível a última.
  </div>
  <div class="column">
    <Label {theme}>Módulos do Curso</Label>
    <div class="radio-group">
      <RadioButton name="module" value={1} bind:group={selectedModule}>
        Básico
      </RadioButton>
      <RadioButton name="module" value={2} bind:group={selectedModule}>
        Avançado
      </RadioButton>
    </div>
    <ul>
      {#each currModule as { name, price, desc }}
        <li>
          <details>
            <summary>{name}</summary>
            <p>{desc}</p>
          </details>
          <Label {theme} small={true}>Indisponivel</Label>
        </li>
      {/each}
    </ul>
  </div>
  <span class="extra-info">
    <Label {theme}>
      Formação Presencial | Inclui e-book e Certificado | 2 Horas/Dia - 1 Mês
    </Label>
  </span>
</div>
