<script>
  import teamMembers from './data'
  import Member from './Member.svelte'
</script>

<svelte:head>
  <title>Meet Our Team - Restore Wound Care</title>
  <!-- <meta name="description" content="Restore Wound Care has developed an insurance backed protocol for treating recalcitrant wounds proving difficult to heal using conventional wound care methods."> -->
</svelte:head>

<h1 class="title">Team</h1>

<section class="flow">
  <h2>Meet Our Team</h2>
  <ul>
    {#each teamMembers as item}
      <Member {item} />
    {/each}
  </ul>
</section>

<style>
  ul {
    display: grid;
    gap: var(--double-size);
  }
</style>