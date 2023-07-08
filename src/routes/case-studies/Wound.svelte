<script>
  export let item

  const { heading, src, description } = item

  export let isUnblurred = false  
</script>

<li class="flow">
  <h3>{heading}</h3>
  <img class:isUnblurred class="square" {src} alt="{heading}" />
  <p>{description}</p>
</li>

<style>
  img {
    filter: blur(var(--size));
    transition: filter 1000ms ease;
  }
  .isUnblurred {
    filter: blur(0);
  }
</style>