<script>
  import { fly } from 'svelte/transition'
  export let image = ''
</script>

<div class="hero" style="background-image: url({image})">
  <div class="inner balance">
    <div class="content">
      <div in:fly={{x: -1000, y: -1000, delay: 500, opacity: 0}} class="h2">A Revolution in Chronic Wound Care</div>
      <div in:fly={{x: 1000, y: -1000, delay: 700, opacity: 0}} class="h3">Proudly serving the Front Range of Colorado</div>
      <div in:fly={{y: 1000, delay: 900, opacity: 0}}>
        <a class="button" aria-label="Request Appointment" href="/contact"
          >Request Appointment</a
        >
      </div>
    </div>
  </div>
</div>

<style>
  .hero {
    padding-block: calc(var(--size) * 4);
    background-position: center;
    background-size: cover;
    color: var(--light);
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
    text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.6);
    letter-spacing: 1px;
  }
  .h2 {
    color: var(--light);
    font-size: var(--double-size);
  }
  .h3 {
    color: var(--light);
    font-size: calc(var(--size) + 0.5rem);
  }
  .button {
    display: inline-block;
    margin-block-start: var(--half-size);
    font-size: calc(var(--size) - 0.25rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.24);
  }
  .button:hover,
  .button:focus {
    color: var(--light);
    outline-color: var(--light);
  }
  .content {
    display: grid;
    gap: var(--size);
  }
</style>
