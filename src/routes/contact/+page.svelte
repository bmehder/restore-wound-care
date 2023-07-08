<script>
  import { dev } from '$app/environment'
  import FormSpark from './FormSpark.svelte'

  const FORMSPARK_URL = 'https://submit-form.com/sAOnImzN'
  const BOTPOISON_KEY = 'pk_a3136ac2-f7c3-4fee-8735-5285801ca731'
  const devURL = 'http://localhost:5173/contact/thank-you'
  const prodURL = 'https://restore-wound-care.vercel.app/contact/thank-you'
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
    <FormSpark
      formSparkURL={FORMSPARK_URL}
      botpoison={BOTPOISON_KEY}
      redirect={dev ? devURL : prodURL}
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
      Suite 301<br />
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
