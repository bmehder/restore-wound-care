<script>
  import teamMembers from './data'
  import Team from '$lib/Team.svelte'
</script>

<h1 class="title">About Restore Wound Care</h1>

<h2>Our Providers</h2>

<ul class="auto-grid" style="--min: 16em">
  {#each teamMembers as { src, name, description }}
    <Team {src} {name} {description} />
  {/each}
</ul>