<script>
  import { series1, series2 } from './data'
  import Notice from '$lib/Notice.svelte'
  import Wound from './Wound.svelte'
</script>

<svelte:head>
  <title>Case Studies - Restore Wound Care - Colorado</title>
  <!-- <meta name="description" content="Restore Wound Care specializes in treating chronic wounds. There are many treatment options for wounds, and Restore Medical Group will work with you to provide the best option for care."> -->
</svelte:head>

<h1 class="title">Case Studies</h1>

<section class="flow">
  <h2>Wound Series I</h2>
  <Notice>Graphic Wound Images. Click on an image to show or blur it.</Notice>
  <ul class="auto-grid series1">
    {#each series1 as item}
      <Wound {item} />
    {/each}
  </ul>
</section>

<section class="flow" style="margin-block-start: var(--double-size);">
  <h2>Wound Series II</h2>
  <ul class="auto-grid">
    {#each series2 as item}
      <Wound {item} />
    {/each}
  </ul>
</section>

<style>
  @media (min-width: 48em) {
    .series1 {
      max-width: 41em;
    }
  }
</style>
