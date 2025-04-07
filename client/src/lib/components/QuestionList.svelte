<script>
    import { useQuestionState } from "$lib/states/questionState.svelte.js";
    import QuestionItem from "./QuestionItem.svelte";

    let { courseId, questions } = $props();
    let questionState = useQuestionState(courseId);
  </script>
  
  <ul class="space-y-4">
    {#each questionState.questions as question}
      <li>
        <QuestionItem {question} {courseId} />
      </li>
    {/each}
  </ul>