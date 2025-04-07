<script>
  import QuestionForm from "$lib/components/QuestionForm.svelte";
  import QuestionList from "$lib/components/QuestionList.svelte";

  let { data } = $props();
  const { course, questions } = data;
</script>

<h1 class="text-2xl">Course Name: {data.course?.name}</h1>

<h1 class="text-xl">Course ID: {data.course?.id}</h1>

<h2 class="text-2xl mt-4">Questions?</h2>

<QuestionForm courseId={course.id} />

<h2 class="text-xl mt-4">Existing questions</h2>

<QuestionList {questions} courseId={course.id} />