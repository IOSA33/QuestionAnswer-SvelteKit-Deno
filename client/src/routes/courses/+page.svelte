<script>
    import { useCourseState } from "$lib/states/courseState.svelte.js";
    let courseState = useCourseState();
  
    const addCourse = async (e) => {
        const course = {
            id: crypto.randomUUID(),
            name: e.target.name.value,
        };

        await courseState.add(course);
        e.target.reset();
        e.preventDefault();
    };
</script>


<h1 class="text-2xl font-bold mb-4"> Courses </h1>
  
<ul class="space-y-2">
{#each courseState.courses as course}
    <li class="bg-gray-100 p-2 rounded border border-gray-200">
        <a class="text-blue-600 hover:text-blue-800 font-medium" href={`/courses/${course.id}`}> {course.name}  </a>
    </li>
{/each}
</ul>


<form class="mt-4 flex flex-col" onsubmit={addCourse}>
    <label class="block font-medium mb-1" for="name"> Name of a course: </label>
    <input id="name" name="name" type="text" placeholder="Enter a name" required />
<br>
    <input class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer" type="submit" value="Submit course" />
</form>

