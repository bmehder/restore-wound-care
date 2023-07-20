<script>
  import teamMembers from './data'
  import Member from './Member.svelte'
  import CTA from '$lib/CTA.svelte';
  import Phone from '$lib/icons/Phone.svelte';
</script>

<svelte:head>
  <title>Meet Our Team - Restore Wound Care - Colorado</title>
  <!-- <meta name="description" content="Restore Wound Care has developed an insurance backed protocol for treating recalcitrant wounds proving difficult to heal using conventional wound care methods."> -->
</svelte:head>

<h1 class="title">Team</h1>

<section class="flow">
  <h2>Meet Our Team</h2>
  <ul class="flow">
    {#each teamMembers as item}
      <Member {item} />
    {/each}
  </ul>
</section>

<CTA>
  <p class="h1 underline">Contact Us</p>
  <p>Discuss your situation, and set up an evaluation.</p>
  <a class="button" href="/contact/"><Phone /> Contact us</a>
</CTA>

<style>
  ul {
    display: grid;
    gap: var(--size);
  }
</style>