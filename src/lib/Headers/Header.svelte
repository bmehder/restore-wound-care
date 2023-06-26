<script>
  import { onMount } from 'svelte'
  import Desktop from '$lib/Headers/Desktop.svelte'
  import Mobile from '$lib/Headers/Mobile.svelte'

  export let mobileThreshold
  export let logo = 'Logo'
  export let menuItems

  let innerWidth
  let isMounted = false

  onMount(() => (isMounted = true))
</script>

<svelte:window bind:innerWidth />

{#if innerWidth > mobileThreshold}
  <Desktop {logo} {menuItems} />
{:else if isMounted}
  <Mobile {logo} {menuItems} />
{/if}
