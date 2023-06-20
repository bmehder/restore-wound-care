<svelte:head>
  <title>About Us - Restore Wound Care</title>
  <!-- <meta name="description" content="Restore Wound Care has developed an insurance backed protocol for treating recalcitrant wounds proving difficult to heal using conventional wound care methods."> -->
</svelte:head>

<script>
  import teamMembers from './data'
  import Member from '$lib/Member.svelte'
</script>

<h1 class="title">About Restore Wound Care</h1>

<section class="flow" title="Our Team">
  <h2>Our Team</h2>

  <ul class="auto-grid">
    {#each teamMembers as { src, name, description }}
      <Member {src} {name} {description} />
    {/each}
  </ul>
</section>
