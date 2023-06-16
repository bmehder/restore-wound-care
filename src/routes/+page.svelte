<script>
  import Sveltetube from '$lib/Sveltetube.svelte'
</script>

<section class="flow intro">
  <h1>Restore Wound Care</h1>

  <div class="flex">
    <div class="text flow">
      <p>
        Welcome to Restore Wound Care - a truly unique health care practice. Restore Wound
        Care has developed an insurance backed protocol for treating recalcitrant wounds that
        prove difficult to heal using conventional wound care methods.
      </p>
      <p>
        Our treatment protocol incorporates a combination of therapies including our
        exclusively sourced amnio products that rapidly promote healing in wound areas.
      </p>
      <p>Our approach can provide either in-clinic or on-location care options.</p>
    </div>
    <div class="video">
      <Sveltetube id="cppKXqC-260" />
    </div>
  </div>
</section>

<style>
  .flex {
    display: flex;
    flex-direction: column;
    gap: var(--size);
  }
  .flex > * {
    flex: 1;
  }
  @media (min-width: 48em) {
    .flex {
      flex-direction: row;
      gap: var(--double-size);
    }
  }
</style>