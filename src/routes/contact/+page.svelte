<script>
  import Form from '$lib/Form.svelte'
</script>

<svelte:head>
  <title>Contact Us - Restore Wound Care</title>
  <meta
    name="description"
    content="Restore Wound Care, LLC – Send Us A Message – Location – 9195 Grant Street, Suite 305, Thornton, CO 80229 – (720) 678-9868 (Phone) – (720) 678-9860 (Fax)"
  />
</svelte:head>

<h1 class="title">Contact Us</h1>

<div class="flex">
  <div class="flow form">
    <h2>Send Us A Message</h2>
    <Form
      api="https://submit-form.com/sAOnImzN"
      botpoison="pk_a3136ac2-f7c3-4fee-8735-5285801ca731"
      redirect="http://localhost:5173/contact/thank-you"
    />
  </div>
  <div class="flow sidebar">
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
      <a href="tel:7206789860">(720) 678-9860</a> (Fax)
    </p>
  </div>
</div>

<style>
  @media (min-width: 48em) {
    .flex {
      gap: calc(var(--size) * 4);
    }
  }

  @media (min-width: 32em) {
    .form {
      flex: 2;
    }
  }
</style>
