<script>
  import Phone from '$lib/icons/Phone.svelte'
</script>

<section class="flow full-bleed bg-accent center">
  <slot />
</section>

<style>
  .h1 {
    margin-inline: auto;
    padding-block-end: var(--half-size);
    border-bottom: 4px solid var(--alt-one);
    width: max-content;
  }
</style>

