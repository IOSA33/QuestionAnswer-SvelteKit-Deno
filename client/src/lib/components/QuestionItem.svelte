<script>
    import { useQuestionState } from "$lib/states/questionState.svelte.js";
    let { question, courseId, data  } = $props();
    let questionState = useQuestionState(courseId);
  </script>
  
<div class="bg-white p-4 rounded shadow-md">
    <h3 class="text-xl font-bold">{question.title}</h3>
    <p class="mt-2">{question.text}</p>
    <p class="mt-2">Upvotes: {question.upvotes}</p>

    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer" onclick={async () => await questionState.upvote(question.id)}>Upvote</button>
    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer" onclick={async () => await questionState.remove(question.id)}>Delete</button>
</div>  