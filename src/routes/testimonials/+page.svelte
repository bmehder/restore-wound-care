<script>
  import videos from './data'
  import Vimeo from './Vimeo.svelte'
</script>

<svelte:head>
  <title>Testimonials - Restore Wound Care - Colorado</title>
</svelte:head>

<h1 class="title">Testimonials</h1>

<section>
  <ul class="auto-grid">
    {#each videos as item}
      <Vimeo {item} />
    {/each}
  </ul>
</section>

<style>
  @media (min-width: 48em) {
    .auto-grid {
      --min: 20em;
    }
  }
</style>
