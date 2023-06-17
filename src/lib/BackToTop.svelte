<script>
  import { fade } from 'svelte/transition'

  export let color = 'black'
  export let icon = '&#8593;'
  export let threshold = 1000

  const scrollToTop = () => window.scrollTo(0, 0)

  let scrollY
</script>

<svelte:window bind:scrollY />

{#if scrollY > threshold}
  <div
    style="background-color: {color}"
    transition:fade
    on:click={scrollToTop}
    on:keydown
  >
    {@html icon}
  </div>
{/if}

<style>
  div {
    display: grid;
    place-content: center;
    width: 4rem;
    aspect-ratio: 1;
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    color: var(--light, white);
    font-size: var(--size);
    font-weight: bold;
    border: 0.25rem solid var(--light, white);
    border-radius: 50%;
    box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.24);
    transition: scale 150ms ease;
    opacity: 0.8;
    cursor: pointer;
  }

  div:hover {
    scale: 0.95;
  }
</style>
