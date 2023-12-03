<script>
  import Navbar from "$lib/dashboard/layout/navbar.svelte";
  import Sidebar from "$lib/dashboard/layout/sidebar.svelte";
</script>

<main class="min-h-screen flex flex-col">
  <Navbar
    username="asd asddd"
    avatarSrc="https://www.thesun.co.uk/wp-content/uploads/2023/09/SC-Sam-Sulek-Transformation-Off-Plat-copy.jpg?strip=all&quality=100&w=1920&h=1080&crop=1"
  />
  <div class="flex h-full">
    <Sidebar />
    <div class=" w-full grow p-5">
      <slot />
    </div>
  </div>
</main>
