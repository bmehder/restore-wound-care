<script>
  import Sveltetube from '$lib/Sveltetube.svelte'
  import Phone from '$lib/icons/Phone.svelte'
  import CaretDown from '$lib/icons/CaretDown.svelte'
  import CaretRight from '$lib/icons/CaretRight.svelte'
  import questionsAndAnswers from './faqs'
  import Faq from '$lib/FAQ.svelte'
</script>

<svelte:head>
  <title>Home - Restore Wound Care</title>
  <meta
    name="description"
    content="Restore Wound Care has developed an insurance backed protocol for treating recalcitrant wounds proving difficult to heal using conventional wound care methods."
  />
</svelte:head>

<section class="flow">
  <h1>Restore Wound Care</h1>

  <div class="flex swap">
    <div>
      <Sveltetube id="cppKXqC-260" />
    </div>
    <div class="flow">
      <p>
        Welcome to Restore Wound Care - a truly unique health care practice. Restore Wound
        Care has developed an insurance backed protocol for treating recalcitrant wounds
        that prove difficult to heal using conventional wound care methods.
      </p>
      <p>
        Our treatment protocol incorporates a combination of therapies including our
        exclusively sourced amnio products that rapidly promote healing in wound areas.
      </p>
      <p>Our approach can provide either in-clinic or on-location care options.</p>
    </div>
  </div>
</section>

<section class="flow">
  <h2>Our Treatment Protocol</h2>
  <p>
    Our treatment protocol is a minimally invasive procedure that incorporates the use of
    specialty allograft products to promote rapid healing in chronic wounds. Patients
    typically receive weekly treatments for 10-week cycles. Most patients will see marked
    improvement in healing for their chronic wound within months, and ultimately, complete
    closure – even for wounds that have lasted for years.
  </p>

  <div class="auto-grid" style="padding-block-start: var(--half-size);">
    <div class="half-flow">
      <h3>A Partnership.</h3>
      <p>
        Restore Medical Group partners with physicians, nurse practitioners and home
        health professionals to ensure collaborative approaches for optimal patient
        outcomes.
      </p>
    </div>
    <div class="half-flow">
      <h3>A Solution.</h3>
      <p>
        Restore Medical Group has access to a multitude of wound healing products to best
        provide a patient–specific solution for optimal healing.
      </p>
    </div>
    <div class="half-flow">
      <h3>An Answer.</h3>
      <p>
        We offer our partners an answer for current excess costs and invasive methods. We offer our patients an answer for current limited mobility and function.
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolores architecto
        repellendus. Doloribus consectetur libero ut repellendus, aspernatur sint non
        temporibus maxime expedita voluptatibus. Voluptatem nostrum aliquid neque, quo
        ducimus pariatur veniam?
      </p>
      <p>Call to schedule an on-site patient evaluation appointment.</p>
      <div>
        <a href="/contact" class="button"><Phone /> Contact Us</a>
      </div>
    </div>
  </div>
</section>

<section class="flow">
  <h2>Lorem Ipsum.</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cum animi tenetur at
    mollitia nisi laboriosam natus molestias quisquam nobis laborum soluta accusamus, aut
    repellendus minima? Necessitatibus voluptatibus dicta nostrum eligendi. Voluptate
    deleniti corporis incidunt architecto, quibusdam provident magnam consectetur, optio
    error perferendis eveniet laudantium consequatur, quod iusto eligendi quas?
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cum animi tenetur at
    mollitia nisi laboriosam natus molestias quisquam nobis laborum soluta accusamus, aut
    repellendus minima? Necessitatibus voluptatibus dicta nostrum eligendi. Voluptate
    deleniti corporis incidunt architecto, quibusdam provident magnam consectetur, optio
    error perferendis eveniet laudantium consequatur, quod iusto eligendi quas?
  </p>
</section>

<style>
  .half-flow {
    padding: var(--double-size);
    background-color: var(--light);
  }
  .half-flow > * + * {
    margin-block-start: var(--half-size);
  }
</style>