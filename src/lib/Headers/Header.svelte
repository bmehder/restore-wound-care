<script>
  import DesktopHeader from '$lib/Headers/DesktopHeader.svelte'
  import MobileHeader from '$lib/Headers/MobileHeader.svelte'

  const logo = '<img src="/logo.png" alt="Restore Wound Care Logo" />'

  export let mobileThreshold = 768

  let innerWidth = mobileThreshold + 1
</script>

<svelte:window bind:innerWidth />

{#if innerWidth > mobileThreshold}
  <DesktopHeader {logo}/>
{:else}
  <MobileHeader {logo}/>
{/if}
