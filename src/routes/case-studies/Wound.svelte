<script>
  export let item

  const { heading, src, description } = item

  let isUnblurred = false

  const handleClick = () => (isUnblurred = !isUnblurred)
</script>

<li class="flow">
  <h3>{heading}</h3>
  <img
    on:click={handleClick}
    on:keydown={handleClick}
    class:isUnblurred
    class="square"
    {src}
    alt={heading}
  />
  <p>{description}</p>
</li>

<style>
  img {
    filter: blur(var(--size));
    transition: filter 600ms ease;
    cursor: pointer;
  }
  .isUnblurred {
    filter: blur(0);
  }
</style>
