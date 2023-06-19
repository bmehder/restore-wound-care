<script>
  import teamMembers from './data'
  import Provider from '$lib/Provider.svelte'
</script>

<h1 class="title">About Restore Wound Care</h1>

<section class="flow" title="Our Team">
  <h2>Our Team</h2>

  <ul class="auto-grid" style="--min: 16em">
    {#each teamMembers as { src, name, description }}
      <Provider {src} {name} {description} />
    {/each}
  </ul>
</section>
