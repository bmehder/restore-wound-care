<script>
  import { top, bottom } from './data'
</script>

<h1 class="title">Case Studies</h1>

<h2>Lorem Ipsum</h2>
<ul class="auto-grid top">
  {#each top as { heading, src, description }}
    <li class="flow">
      <h3>{heading}</h3>
      <img class="square" {src} alt="wound" />
      <p>{description}</p>
    </li>
  {/each}
</ul>

<h2>Leg Wound Series</h2>
<ul class="auto-grid">
  {#each bottom as { heading, src, description }}
    <li class="flow">
      <h3>{heading}</h3>
      <img class="square" {src} alt="wound" />
      <p>{description}</p>
    </li>
  {/each}
</ul>

<style>
  .top {
    --min: 16em;
  }
  @media (min-width: 32em) {
    .top {
      --min: 24em;
    }
  }
</style>