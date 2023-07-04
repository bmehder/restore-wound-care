<script>
  import videos from './data'
  import Vimeo from './Vimeo.svelte'
</script>

<svelte:head>
  <title>Testimonials - Restore Wound Care</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<h1 class="title">Testimonials</h1>

<p>
  WE NEED TITLES AND DESCRIPTIONS FOR THESE VIDEOS. THE FIRST VIDEO ALREADY HAS A
  DESCRIPTION. THE SAME TITLES AND DESCRIPTIONS SHOULD BE ADDED TO VIMEO. I DON'T THINK WE
  WILL END UP INDEXING THIS PAGE. GOOGLE WILL INDEX THE VIDEOS ON VIMEO INSTEAD.
</p>

<ul class="auto-grid">
  {#each videos as item}
    <Vimeo {item} />
  {/each}
</ul>

<style>
  @media (min-width: 48em) {
    .auto-grid {
      --min: 20em;
    }
  }
</style>
