<script>
  import { top, legWounds } from './data'
  import Wound from '$lib/Wound.svelte'
</script>

<svelte:head>
  <title>Case Studies - Restore Wound Care</title>
  <!-- <meta name="description" content="Restore Wound Care specializes in treating chronic wounds. There are many treatment options for wounds, and Restore Medical Group will work with you to provide the best option for care."> -->
</svelte:head>

<h1 class="title">Case Studies</h1>

<section class="flow">
  <h2>Lorem Ipsum</h2>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil eveniet, provident id
    neque consectetur perspiciatis deleniti repudiandae hic veniam voluptas, sint, autem
    voluptatibus quasi obcaecati cupiditate inventore. Doloremque, placeat aliquid non
    sapiente facilis eveniet consequatur. Ratione animi perspiciatis vitae dignissimos quo
    voluptates in, quia nisi sed assumenda obcaecati aliquam itaque!
  </p>

  <ul class="auto-grid">
    {#each top as item}
      <Wound {item} />
    {/each}
  </ul>
</section>

<section class="flow">
  <h2>Leg Wound Series</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reprehenderit neque quos
    facere quas, soluta debitis quidem nesciunt praesentium quod aliquam laborum suscipit
    quae expedita quia magnam sapiente nemo, sunt quibusdam officia. Facere animi, et
    quisquam quae quo enim deserunt maxime perferendis mollitia, pariatur non, dolorum
    necessitatibus incidunt sed error!
  </p>
  <ul class="auto-grid">
    {#each legWounds as item}
      <Wound {item} />
    {/each}
  </ul>
</section>
