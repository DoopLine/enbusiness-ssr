<script>
  import { flip } from "svelte/animate";

  import CourseCard from "../components/CourseCard.svelte";
  import Button from "../components/Button.svelte";
  import CourseSearch from "../containers/CourseSearch.svelte";

  import { courses } from "../data/coursesData.js";

  courses.sort();

  let searchValue = "";

  $: currCourses = () => {
    if (!searchValue) return courses;
    return courses.filter(_c => _c.includes(searchValue.toLowerCase()));
  };
</script>

<style lang="scss">
  @import "../style/theme.scss";
  @import "../style/_mixins.scss";

  span {
    margin: 3rem 0;
    @include flex-center;
    flex-wrap: wrap;

    h5 {
      text-align: center;
      margin: 2rem;
    }

    :global(a) {
      animation: pulse 1s ease infinite;

      &:hover {
        animation-play-state: paused;
      }
    }
  }

  h3 {
    font-weight: 100;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>

<svelte:head>
  <title>Cursos Enbusiness</title>
</svelte:head>

<span>
  <h5>
    Conheça os nossos
    <strong>cursos</strong>
  </h5>
  <Button href="/inscricao">Inscrever-se</Button>
</span>

<section>
  {#each currCourses() as course, i (course)}
    <div animate:flip={{ duration: 700 }}>
      <CourseCard courseType={course} />
    </div>
  {:else}
    <h3>Curso não encontrado</h3>
  {/each}
</section>

<CourseSearch
  value={searchValue}
  on:input={e => (searchValue = e.target.value)}
  on:clean={() => (searchValue = '')} />
