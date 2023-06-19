<script>
  import { PUBLIC_FORMSPARK_URL } from '$env/static/public'
  import Form from '$lib/Form.svelte'
</script>

<h1 class="title">Contact Us</h1>

<div class="flex">
  <div class="flow form" style="flex: 2">
    <h2>Send Us A Message</h2>
    <Form api="{PUBLIC_FORMSPARK_URL}" redirect="http://localhost:5173/contact/thank-you" />
  </div>
  <div class="flow sidebar" style="flex: 1">
    <h2>Location</h2>
    <img src="/contact.jpg" alt="Nurse holding patient's hand." />
    <p>
      Treatments are available at your home, in-facility, or in one of our convenient
      clinics along the Front Range of Colorado. Clinic visits and locations are
      determined when scheduling.
    </p>
    <p>
      <strong>Restore Wound Care, LLC</strong><br />
      9195 Grant Street<br />
      Suite 305<br />
      Thornton, CO 80229<br />
      <a href="tel:7206789868">(720) 678-9868</a> (Phone)<br />
      <a href="tel:7206789860">(720) 678-9860</a> (Fax)</p>
  </div>
</div>

<style>
  @media (min-width: 48em) {
    .flex {
      gap: calc(var(--size) * 4);
    }
  }

  .form {
    flex: 1
  }

  .sidebar {
    flex: 1
  }

  @media (min-width: 32em) {
    .form {
      flex: 2
    }
  }
</style>
