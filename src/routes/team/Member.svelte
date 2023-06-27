<script>
  export let item

  const { src, name, description } = item
</script>

<li>
  <img class="square" {src} alt={name} />
  <div class="flow">
    <h3>{name}</h3>
    <p>
      {description}
    </p>
  </div>
</li>

<style>
  li {
    background-color: var(--light);
  }
  
  h3 {
    text-wrap: balance;
  }

  div {
    padding: var(--double-size);
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
    }
  }
</style>
