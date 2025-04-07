<script>
    import { useQuestionState } from "$lib/states/questionState.svelte.js";
    let { courseId } = $props();
    let questionState = useQuestionState(courseId);
  
    const addQuestion = async (e) => {
        const question = {
            id: crypto.randomUUID(),
            title: e.target.title.value,
            text: e.target.text.value,
            upvotes: 0,
        };

        await questionState.add(question);
        e.target.reset();
        e.preventDefault();
    };
  </script>
  
<form class="space-y-4" onsubmit={addQuestion}>
    <label class="block font-medium" for="title"> Title of a question: </label>
    <input class="w-full p-2 border border-gray-300 rounded" id="title" name="title" type="text" placeholder="Enter a title" required />
<br>
    <label class="block font-medium" for="text">Question:</label>
    <textarea class="w-full p-2 border border-gray-300 rounded" id="text" name="text" placeholder="Enter your question" required></textarea>

    <input class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer" type="submit" value="Submit question" />
</form>