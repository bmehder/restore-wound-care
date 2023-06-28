<script>
  import { fade } from 'svelte/transition'
  import { onMount } from 'svelte'

  let isReady = false

  onMount(() => (isReady = true))
</script>

{#if isReady}
  <button
    in:fade={{ duration: 0 }}
    aria-expanded="true"
    aria-controls="header-nav"
    aria-label="Open"
  >
    <i class="fa-sharp fa-solid fa-2x fa-bars" />
  </button>
{/if}

<style>
  button {
    padding-inline: 0;
  }

  button:hover {
    color: unset;
  }
</style>
