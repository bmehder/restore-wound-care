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
  div {
    padding: var(--size);
  }
  h3 {
    text-wrap: balance;
  }
</style>
