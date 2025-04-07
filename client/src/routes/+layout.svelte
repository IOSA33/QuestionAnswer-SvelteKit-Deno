<script>
  import { useUserState } from "$lib/states/userState.svelte.js";
  import "../app.css";

  let { children, data } = $props();
  $effect(() => {
    document.body.classList.add("e2e-ready");
  });

  const userState = useUserState();
  if (data.user) {
    userState.user = data.user;
  }
</script>



<div class="flex flex-col h-full">
    {#if data.user?.email}
      <p>{data.user?.email}!</p>
    {/if}


  <header class="flex items-center bg-primary-100 p-4 mb-6">
    <h1 class="text-xl text-primary-900">Application name</h1>
    <nav class="ml-4">
      <ul class="flex space-x-4">
        <li><a class="anchor" href={`http://localhost:5173`}>Home</a></li>
        <li><a class="anchor" href={`http://localhost:5173/auth/register`}> Registration </a></li>
        <li><a class="anchor" href={`http://localhost:5173/auth/login`}> Login </a></li>
        <li><a class="anchor" href={`http://localhost:5173/notes`}> Notes </a></li>
      </ul>
    </nav>
  </header>

  <main class="container mx-auto max-w-lg">
    {@render children()}
  </main>
</div>