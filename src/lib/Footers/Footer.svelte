<script>
  import Facebook from '$lib/icons/Facebook.svelte'
  import LinkedIn from '$lib/icons/LinkedIn.svelte'

  const currentYear = new Date().getFullYear()
</script>

<footer class="bg-light">
  <div class="inner flex swap">
    <div class="alt-content half-flow">
      <p>Proud members of:</p>
      <div>
        <a class="half-flow" href="https://www.woundcarestakeholders.org/" target="_blank"
          ><img
            src="/wound-care-stakeholders-logo.png"
            alt="Wound Care Stakeholders Logo"
          /></a
        >
      </div>
    </div>
    <div class="flow">
      <p>
        To book an evaluation, please call: <a href="tel:7206789868">(720) 678-9868</a>
      </p>
      <p>Patient Fax Line: <a href="tel:7206789860">(720) 678-9860</a></p>
      <p>NPI: 1770259061</p>
      <p>
        Copyright © 2021-{currentYear} Restore Wound Care, LLC. All rights reserved.
      </p>
      <p>
        <a
          href="https://www.facebook.com/profile.php?id=100090581164027"
          target="_blank"
          aria-label="Facebook"
        >
          <Facebook />
        </a>
        <a
          href="https://www.linkedin.com/company/restore-wound-care-llc/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <LinkedIn />
        </a>
      </p>
    </div>
  </div>
</footer>

<style>
  .inner {
    padding-block-start: var(--double-size);
  }
  .alt-content img {
    max-width: 300px;
    padding: var(--size);
    background-color: white;
  }
</style>
