<script>
  import Facebook from '../icons/Facebook.svelte'
  import LinkedIn from '../icons/LinkedIn.svelte'

  const currentYear = new Date().getFullYear()
</script>

<footer class="bg-light">
  <div class="inner flow">
      <p>To book an evaluation, please call: <a href="tel:7206789868">(720) 678-9868</a></p>
      <p>Patient Fax Line: <a href="tel:7206789860">(720) 678-9860</a></p>
      <p>NPI: 1770259061</p>
      <p>
        Copyright © 2021-{currentYear} Restore Wound Care, LLC. All rights reserved.
      </p>
      <p>
        <a href="https://www.facebook.com/profile.php?id=100090581164027" target="_blank">
          <Facebook />
        </a>
        <a href="https://www.linkedin.com/company/restore-wound-care-llc/" target="_blank">
          <LinkedIn />
        </a>
      </p>
  </div>
</footer>

<style>
  footer > div {
    padding-block-start: var(--double-size);
  }
</style>
