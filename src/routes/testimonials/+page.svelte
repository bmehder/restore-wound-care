<script>
  import videos from './data'
  import Vimeo from './Vimeo.svelte'
</script>

<svelte:head>
  <title>Testimonials - Restore Wound Care</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<h1 class="title">Testimonials</h1>

<ul class="auto-grid">
  {#each videos as item}
    <Vimeo {item} />
  {/each}
</ul>

<style>
  @media (min-width: 48em) {
    .auto-grid {
      --min: 20em;
    }
  }
</style>
