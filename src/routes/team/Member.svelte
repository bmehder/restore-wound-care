<script>
  export let item

  const { src, name, description } = item
</script>

<li>
  {#if src}
    <img class="square" class:position-center={name === 'Shaun Baillie, APN'} {src} alt={name} />
  {:else}
    &nbsp;
  {/if}
  <div class="flow">
    <h3 class="balance">{name}</h3>
    <p>
      {description}
    </p>
  </div>
</li>

<style>
  li {
    background-color: var(--light);
  }

  div {
    padding: var(--size);
    padding-block-start: var(--size);
  }

  @media (min-width: 48em) {
    li {
      display: grid;
      grid-template-columns: 16em 1fr;
      gap: var(--double-size);
      padding: var(--double-size);
      padding-inline-end: var(--double-size);
    }

    div {
      padding: unset;
      padding-block-start: var(--half-size);
    }

    img {
      padding: calc(var(--half-size) / 2);
      background-color: white;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.24);
      object-position: top;
    }
    .position-center {
      object-position: center;
    }
  }
</style>
