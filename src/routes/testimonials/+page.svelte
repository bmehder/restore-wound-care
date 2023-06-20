<script>
  import Vimeo from '$lib/Vimeo.svelte'
  import videos from './data'
</script>

<h1 class="title">Testimonials</h1>

<div class="auto-grid">
  {#each videos as { heading, src, content }}
    <Vimeo {heading} {src} {content} />
  {/each}
</div>

<style>
  @media (min-width: 48em) {
    .auto-grid {
      --min: 20em;
    }
  }
</style>
