<script>
  import { flip } from "svelte/animate";
  import CourseCard from "../components/CourseCard.svelte";
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

  h5 {
    text-align: center;
    margin-bottom: 6rem;
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

<h5>
  Conheça os nossos
  <strong>cursos</strong>
</h5>

<section>
  {#each currCourses() as course, i (course)}
    <div animate:flip={{ duration: 700 }}>
      <CourseCard courseType={course} />
    </div>
  {:else}
    <h3>Nenhum curso encontrado</h3>
  {/each}
</section>

<CourseSearch
  value={searchValue}
  on:input={e => (searchValue = e.target.value)} />
