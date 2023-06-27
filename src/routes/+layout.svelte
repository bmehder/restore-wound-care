<script>
  import { page } from '$app/stores'
  import '$lib/styles/app.css'
  import '$lib/styles/theme.css'
  import menuItems from '$lib/Headers/menuItems'
  import Header from '$lib/Headers/Header.svelte'
  import HomeHero from './HomeHero.svelte'
  import Footer from '$lib/Footers/Footer.svelte'
  import BackToTop from '$lib/BackToTop.svelte'

  const logo = '<img src="/logo.png" alt="Restore Wound Care Logo" />'
  const mobileThreshold = 1240

  $: isHome = $page.route.id === '/'
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</svelte:head>

<div class="wrapper">
  <Header {logo} {menuItems} {mobileThreshold} />

  {#if isHome}
    <HomeHero image="/hero.jpg" />
  {/if}

  <main class="flow">
    <slot />
  </main>

  <Footer />
</div>

<BackToTop />

<style>
  .wrapper {
    min-height: 100dvh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  main {
    width: var(--width);
    max-width: var(--max-width);
    padding-block-start: var(--double-size);
    padding-block-end: var(--triple-size);
    margin-inline: auto;
    line-height: 1.5;
  }
</style>
