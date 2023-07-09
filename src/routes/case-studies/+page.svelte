<script>
  import { series1, series2 } from './data'
  import Notice from '$lib/Notice.svelte'
  import Wound from './Wound.svelte'
</script>

<svelte:head>
  <title>Case Studies - Restore Wound Care</title>
  <!-- <meta name="description" content="Restore Wound Care specializes in treating chronic wounds. There are many treatment options for wounds, and Restore Medical Group will work with you to provide the best option for care."> -->
</svelte:head>

<h1 class="title">Case Studies</h1>

<section class="flow">
  <h2>Wound Series I</h2>
  <p>
    Patient M was suffering from a WHAT KIND OF WOUNDS? in both legs caused by WHAT WAS
    THE CAUSE OF THE WOUNDS? After 5 years of treatment using traditional methods, WHAT
    WAS THE STATE OF THE PATIENT BEFORE BEING TREATED BY RESTORE WOUND CARE? After just 21
    days of WHAT KIND OF TREATMENT DID RESTORE WOUND CARE PROVIDE?, Restore Wound Care
    helped this patient WHAT WAS THE RESULT?.
  </p>
  <p>
    Are the last two pictures in this section the same patient? If so, do we need to
    change this section subheading?
  </p>
  <p>
    <em
      >I am trying to solve for two problems: 1.) I need some text here for Google to use
      as a meta description in Google Search Results for this page, and 2.) Without some
      explanation, we are leaving it up to the site visitors to figure out what this page
      is all about.</em
    >
  </p>
  <Notice>Graphic Wound Images. Click on an image to show or blur it.</Notice>
  <ul class="auto-grid series1">
    {#each series1 as item}
      <Wound {item} />
    {/each}
  </ul>
</section>

<section class="flow" style="margin-block-start: var(--double-size);">
  <h2>Wound Series II</h2>
  <p>
    You can follow the same template as the description for the first section. What was
    the problem and what caused it? What did they try before using RWC? What did RWC do to
    fix the problem? What was the result in the end?
  </p>
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
