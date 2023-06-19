<script>
  export let image = ''
</script>

<div class="hero" style="background-image: url({image})">
  <div class="inner">
    <slot>Fallback content</slot>
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
    text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.6);
    letter-spacing: 1px;
  }
  .inner {
    display: grid;
    gap: var(--size);
  }
  .inner :global(.h2) {
    color: var(--light);
    font-size: var(--double-size);
  }
  .inner :global(.h3) {
    color: var(--light);
    font-size: calc(var(--size) + 0.5rem);
  }
  .inner :global(.button) {
    display: inline-block;
    margin-block-start: var(--half-size);
    font-size: calc(var(--size) - 0.25rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.24);
    text-shadow: none;
  }
  .inner :global(.button:hover) {
    display: inline-block;
    color: var(--light);
    outline-color: var(--light);
  }
</style>
