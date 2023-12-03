<script lang="ts">
  export let username: string;
  export let avatarSrc: string;
</script>

<nav
  class="w-full px-6 py-3 border-b flex justify-end items-center gap-3 font-semibold"
>
  <p>{username}</p>
  <img class=" w-10 h-10 rounded-full" src={avatarSrc} alt="avatar" />
</nav>
