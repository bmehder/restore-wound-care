<footer class="bg-light">
  <div class="inner flow">
    <slot><!-- optional fallback --></slot>
  </div>
</footer>

<style>
  .inner {
    display: flex;
    flex-direction: column;
    /* gap: var(--double-size); */
    /* text-align: center; */
  }
</style>
