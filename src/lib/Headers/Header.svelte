<script>
  import Desktop from '$lib/Headers/Desktop.svelte'
  import Mobile from '$lib/Headers/Mobile.svelte'

  const mobileThreshold = 768

  export let logo = 'Logo'
  export let menuItems

  let innerWidth = 769
</script>

<svelte:window bind:innerWidth />

{#if innerWidth > mobileThreshold}
  <Desktop {logo} {menuItems} />
{:else}
  <Mobile {logo} {menuItems} />
{/if}
