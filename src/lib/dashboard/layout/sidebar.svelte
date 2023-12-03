<script>
  import { Button } from "$lib/shared/ui";
  import { Code, Home, SmilePlus } from "lucide-svelte";
</script>

<aside class=" flex flex-col w-60 p-5 gap-1 border-r h-full">
  <Button href="/dashboard" class="justify-start" variant="ghost"
    ><Home class="mr-4 h-4 w-4" />Home</Button
  >
  <Button href="/dashboard/posts" class="justify-start" variant="ghost"
    ><Code class="mr-4 h-4 w-4" /> Posts</Button
  >
  <Button href="/dashboard/profile" class=" justify-start" variant="ghost"
    ><SmilePlus class="mr-4 h-4 w-4" />Profile</Button
  >
</aside>
