<script>
  import Sveltetube from '$lib/Sveltetube.svelte'
  import videos from './data'
</script>

<svelte:head>
  <title>Testimonials - Restore Wound Care - Colorado</title>
</svelte:head>

<h1 class="title">Testimonials</h1>

<section>
  <ul class="auto-grid">
    {#each videos as { heading, id, content }}
      <div class="flow">
        <h2>{heading}</h2>
        <Sveltetube {id} />
        <p>{content}</p>
      </div>
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
