<script>
  export let src
  export let name
  export let description
</script>

<li class="flow">
  <img
    class="square"
    {src}
    alt="{name}"
  />
  <h3>{name}</h3>
  <p>
    {description}
  </p>
</li>

<style>
  h3 {
    text-wrap: balance;
  }
</style>
