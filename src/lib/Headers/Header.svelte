<script>
  import menuItems from '$lib/Headers/menuItems'
  import Desktop from '$lib/Headers/Desktop.svelte'
  import Mobile from '$lib/Headers/Mobile.svelte'

  const logo = '<img src="/logo.png" alt="Restore Wound Care Logo">'
  const mobileThreshold = 768

  let innerWidth = 769
</script>

<svelte:window bind:innerWidth />

{#if innerWidth > mobileThreshold}
  <Desktop {logo} {menuItems} />
{:else}
  <Mobile {logo} {menuItems} />
{/if}
