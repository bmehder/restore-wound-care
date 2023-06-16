<script>
  import { slide } from 'svelte/transition'
  import Hamburger from '$lib/icons/Hamburger.svelte'
  import Close from '$lib/icons/Close.svelte'

  // Component prop
  export let logo = 'Add Logo Prop!'
  export let menuItems

  // Component State
  let isOpen = false

  const toggleMenu = () => (isOpen = !isOpen)
  const closeMenu = () => (isOpen = false)
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  />
</svelte:head>

<header class="bg-accent" class:isOpen>
  <div class="inner">
    <div class="top">
      <div class="logo">
        <a on:click={closeMenu} href="/">{@html logo}</a>
      </div>
      <div class="trigger" on:click={toggleMenu} on:keypress>
        {#if isOpen}
          <Close />
        {:else}
          <Hamburger />
        {/if}
      </div>
    </div>
    {#if isOpen}
      <nav transition:slide>
        <ul>
          {#each menuItems as { name, url, children }}
            <li>
              <a on:click={closeMenu} href={url}>{name}</a>
            </li>
            {#if children}
              {#each children as { name, url }}
                <li class="child">
                  <a on:click={closeMenu} href={url}>{name}</a>
                </li>
              {/each}
            {/if}
          {/each}
        </ul>
      </nav>
    {/if}
  </div>
</header>

<style>
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--size);
  }

  .logo {
    font-size: 2rem;
    font-weight: bold;
  }

  ul {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    gap: var(--size);
    padding-block-start: var(--double-size);
    font-size: var(--size);
    list-style: none;
  }

  li {
    padding-block-end: calc(var(--size));
    border-bottom: 2px solid var(--light);
  }

  .child {
    padding-inline-start: var(--size);
  }

  a {
    display: block;
  }

  :global(body:has(.isOpen)) {
    position: fixed;
    inset: 0;
  }
</style>
