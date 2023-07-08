<script>
  import Information from '$lib/icons/Information.svelte'
</script>

<p class="blur-notice">
  <Information />
  <span><slot /></span>
</p>

<style>
  .blur-notice {
    display: inline-flex;
    gap: var(--half-size);
    padding: var(--size);
    padding-inline-end: var(--double-size);
    background-color: var(--accent-light);
  }
</style>
