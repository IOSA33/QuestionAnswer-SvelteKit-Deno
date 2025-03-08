<script>
    import { useQuestionState } from "$lib/states/questionState.svelte.js";
    let questionState = useQuestionState();
  
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
  
<form onsubmit={addQuestion}>
    <label for="title"> Title of a question: </label>
    <input id="title" name="title" type="text" placeholder="Enter a title" required />
<br>
    <label for="text">Question:</label>
    <textarea id="text" name="text" placeholder="Enter your question" required></textarea>

    <input type="submit" value="Submit question" />
</form>