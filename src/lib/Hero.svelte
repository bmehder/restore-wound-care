<script>
  export let image = ''
</script>

<div class="hero" style="background-image: url({image})">
  <div class="inner flow">
    <slot>Fallback content</slot>
  </div>
</div>

<style>
  .hero {
    padding-block: calc(var(--size) * 4);
    background-position: center;
    background-size: cover;
    color: var(--light);
    font-size: 2rem;
    line-height: 1.5;
    text-align: center;
    text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  }
  .inner :global(.button) {
    display: inline-block;
    font-size: 1.5rem;
  }
  
  .inner :global(h2) {
    color: var(--light);
  }

</style>
