<script>
  import { page } from '$app/stores'
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="flow center">
  <h1>{$page.status} – Page {$page.error.message}</h1>
</div>

<style>
  div {
    display: grid;
    place-items: center;
    margin-block-start: var(--double-size);
  }
</style>
