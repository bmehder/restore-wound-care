<script>
  import { top, legWounds } from './data'
  import Wound from '$lib/Wound.svelte'
</script>

<svelte:head>
  <title>Case Studies - Restore Wound Care</title>
  <!-- <meta name="description" content="Restore Wound Care specializes in treating chronic wounds. There are many treatment options for wounds, and Restore Medical Group will work with you to provide the best option for care."> -->
</svelte:head>

<h1 class="title">Case Studies</h1>

<h2>Lorem Ipsum</h2>

<ul class="auto-grid">
  {#each top as item}
    <Wound {item} />
  {/each}
</ul>

<h2>Leg Wound Series</h2>

<ul class="auto-grid">
  {#each legWounds as item}
    <Wound {item} />
  {/each}
</ul>
