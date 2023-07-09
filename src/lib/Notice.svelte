<script>
  import Information from '$lib/icons/Information.svelte'
</script>

<p>
  <Information />
  <span><slot /></span>
</p>

<style>
  p {
    display: inline-flex;
    gap: var(--half-size);
    padding: var(--size);
    padding-inline-end: var(--double-size);
    background-color: var(--accent-light);
  }
</style>
