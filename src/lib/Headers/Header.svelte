<script>
  import DesktopHeader from '$lib/Headers/DesktopHeader.svelte'
  import MobileHeader from '$lib/Headers/MobileHeader.svelte'

  export let logo = 'Logo'
  export let menuItems
  export let mobileThreshold = 768

  let innerWidth = null
</script>

<svelte:window bind:innerWidth />

{#if innerWidth > mobileThreshold}
  <DesktopHeader {logo} {menuItems} />
{:else if innerWidth}
  <MobileHeader {logo} {menuItems} />
{/if}
