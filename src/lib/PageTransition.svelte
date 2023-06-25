<script>
  import { fly } from 'svelte/transition'

  export let key

  const options = { delay: 100, duration: 300, x: -1000, opacity: 0 }
</script>

{#key key}
  <div class="flow" in:fly={options}>
    <slot />
  </div>
{/key}
