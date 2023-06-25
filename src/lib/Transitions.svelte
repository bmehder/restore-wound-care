<script>
  import { fade, fly } from 'svelte/transition'

  export let key

  const options = {
    in: { delay: 500, duration: 300, x: -1000, opacity: 0 },
    out: { delay: 0, duration: 100 },
  }
</script>

{#key key}
  <div class="flow" in:fly={options.in} out:fade={options.out}>
    <slot />
  </div>
{/key}
