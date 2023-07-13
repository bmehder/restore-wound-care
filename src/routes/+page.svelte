<script>
  import Sveltetube from '$lib/Sveltetube.svelte'
  import Phone from '$lib/icons/Phone.svelte'
</script>

<svelte:head>
  <title>Home - Restore Wound Care - Colorado</title>
  <meta
    name="description"
    content="Restore Wound Care has developed an insurance backed protocol for treating recalcitrant wounds proving difficult to heal using conventional wound care methods."
  />
</svelte:head>

<div class="home flow">
  <section class="flow">
    <h1>Restore Wound Care</h1>

    <div class="flex swap">
      <div>
        <Sveltetube id="cppKXqC-260" />
      </div>
      <div class="flow">
        <p>
          Welcome to Restore Wound Care – a truly unique health care practice. Restore
          Wound Care has developed an insurance backed protocol for treating recalcitrant
          wounds that prove difficult to heal using conventional wound care methods.
        </p>
        <p>
          Our treatment protocol incorporates a combination of therapies including our
          exclusively sourced amnio products that rapidly promote healing in wound areas.
        </p>
        <p>Our approach can provide either in–clinic or on–location care options.</p>
      </div>
    </div>
  </section>

  <section class="flow">
    <h2>Our Treatment Protocol</h2>
    <p>
      Our treatment protocol is a minimally invasive procedure that incorporates the use
      of specialty allograft products to promote rapid healing in chronic wounds. Patients
      typically receive weekly treatments for 10–week cycles. Most patients will see
      marked improvement in healing for their chronic wound within months, and ultimately,
      complete closure – even for wounds that have lasted for years.
    </p>

    <div class="auto-grid boxes" style="padding-block-start: var(--half-size);">
      <div class="half-flow">
        <h3>A Partnership.</h3>
        <p>
          Restore Wound Care partners with physicians, nurse practitioners and home health
          professionals to ensure collaborative approaches for optimal patient outcomes.
        </p>
      </div>
      <div class="half-flow">
        <h3>A Solution.</h3>
        <p>
          Restore Wound Care has access to a multitude of wound healing products to best
          provide a patient–specific solution for optimal healing.
        </p>
      </div>
      <div class="half-flow">
        <h3>An Answer.</h3>
        <p>
          We offer our partners an answer to current excess costs and invasive methods. We
          offer our patients an answer to current limited mobility and function.
        </p>
      </div>
    </div>
  </section>

  <section class="flow full-bleed bg-accent">
    <div class="flex swap">
      <div class="image">
        <img src="/we-travel-to-you.jpg" alt="nurse with patient at home" />
      </div>
      <div class="flow content">
        <h2>We travel to you!</h2>
        <p>
          We understand that mobility can sometimes be a challenge, especially when
          managing chronic wounds. That's why we're bringing our cutting-edge,
          insurance-backed treatment protocol right to your doorstep. It's the same
          high-quality care in the comfort and convenience of your own home environment.
          Whether you're a senior, a busy professional, or anyone in need of effective
          wound care, our mobile clinic is your solution.
        </p>
        <p>Call to schedule an on–site patient evaluation appointment.</p>
        <a href="/contact" class="button"><Phone /> Contact Us</a>
      </div>
    </div>
  </section>
</div>

<style>
  section:last-child {
    margin-block-end: 0;
  }

  .boxes div {
    padding: var(--double-size);
    background-color: var(--light);
  }
</style>
