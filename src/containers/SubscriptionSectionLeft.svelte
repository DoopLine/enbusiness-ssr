<script>
  import Input from "../components/Input.svelte";
  import Button from "../components/Button.svelte";
  import CheckBox from "../components/CheckBox.svelte";
  import RadioButton from "../components/RadioButton.svelte";
  import Label from "../components/Label.svelte";

  import { courses, getModules } from "../data/coursesData";

  let currCourse;
  let selectedModule = 1;

  $: currModules = getModules(currCourse);

  $: currModule = () => {
    if (selectedModule === 1) return currModules.sections[0].modules;
    if (selectedModule === 2) return currModules.sections[1].modules;
    if (selectedModule === 3)
      return [
        ...currModules.sections[0].modules,
        ...currModules.sections[1].modules
      ];
  };
</script>

<style lang="scss">
  article {
    flex-basis: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    padding: 0 1rem;
  }

  form {
    :global(input),
    :global(select) {
      margin-bottom: 2rem;
    }
  }

  .radio-group {
    display: flex;
    justify-content: space-evenly;
    margin: 0.5rem 0;
    font-size: 1.5rem;
  }

  ul {
    list-style: none;
    margin-bottom: 2rem;

    li {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      border-bottom: 2px solid #e2e2e2ad;
    }
  }

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    :global(button) {
      margin-right: 1rem;
      height: fit-content;
    }

    :global(p) {
      width: fit-content;
    }
  }
</style>

<article>
  <form>
    <Input placeholder="Nome Completo" />
    <Input type="tel" placeholder="Email" />
    <Input type="email" placeholder="Telefone" />
    <Input type="select" bind:value={currCourse}>
      {#each courses as course}
        <option value={course}>{course}</option>
      {/each}
    </Input>
    <div class="radio-group">
      <RadioButton name="module" value={1} bind:group={selectedModule}>
        Básico
      </RadioButton>
      <RadioButton name="module" value={2} bind:group={selectedModule}>
        Avançado
      </RadioButton>
      <RadioButton name="module" value={3} bind:group={selectedModule}>
        Todos
      </RadioButton>
    </div>
    <ul>
      {#each currModule() as { name, price }}
        <li>
          <CheckBox id={name} text={name} />
          <Label small={true}>Indisponivel</Label>
        </li>
      {/each}
    </ul>
    <span>
      <Button type="submit">Concluir</Button>
      <Label>Total: 20,000.00 Akz</Label>
    </span>
  </form>
</article>
