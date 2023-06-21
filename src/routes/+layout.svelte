<script>
  import '$lib/styles/app.css'
  import '$lib/styles/theme.css'
  import { page } from '$app/stores'
  import menuItems from '$lib/Header/menuItems'
  import Header from '$lib/Header/Header.svelte'
  import MobileHeader from '$lib/Header/MobileHeader.svelte'
  import Hero from '$lib/Hero.svelte'
  import Footer from '$lib/Footer.svelte'
  import BackToTop from '$lib/BackToTop.svelte'

  const logo = '<img src="/logo.png" alt="Restore Wound Care Logo">'
  const mobileThreshold = 768

  let innerWidth = 769
</script>

<svelte:window bind:innerWidth />

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
  {#if innerWidth > mobileThreshold}
    <Header {logo} {menuItems} />
  {:else}
    <MobileHeader {logo} {menuItems} />
  {/if}

  {#if $page.route.id === '/'}
    <Hero image="/hero.jpg">
      <div class="h2">A Revolution in Chronic Wound Care</div>
      <div class="h3">Proudly serving the Front Range of Colorado</div>
      <div>
        <a class="button" aria-label="Request Appointment" href="/contact"
          >Request Appointment</a
        >
      </div>
    </Hero>
  {/if}

  <main class="flow">
    <slot />
  </main>

  <Footer>
    <p>
      Copyright © 2021-2023 Restore Wound Care, LLC. All rights reserved. NPI 1770259061
    </p>

    <p>To book an evaluation, please call: <a href="tel:7206789868">(720) 678-9868</a></p>

    <p>Patient Fax Line: <a href="tel:7206789860">(720) 678-9860</a></p>
  </Footer>
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
