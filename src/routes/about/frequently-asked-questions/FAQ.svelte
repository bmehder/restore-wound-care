<script>
  import { slide } from 'svelte/transition'

  export let question = 'Question'
  export let answer = 'Answer'
  export let openIcon
  export let closeIcon
  export let classNames = ''

  let isOpen

  const handleClick = () => (isOpen = !isOpen)
</script>

<div class="flow faq">
  <a
    href
    class="{classNames} question"
    on:click|preventDefault={handleClick}
    on:keypress={handleClick}
  >
    <span>{question}</span>
    <span>
      <svelte:component this={isOpen ? closeIcon : openIcon} />
    </span>
  </a>
  {#if isOpen}
    <div class="flow answer" aria-expanded={isOpen} transition:slide>{@html answer}</div>
  {/if}
</div>

<style>
  .question {
    display: flex;
    justify-content: space-between;
    gap: var(--size);
  }

  .answer {
    padding-inline-end: var(--size);
  }
</style>
