<script>
  export let item

  const { heading, src, description } = item
</script>

<li class="flow">
  <h3>{heading}</h3>
  <img class="square" {src} alt="{heading}" />
  <p>{description}</p>
</li>
