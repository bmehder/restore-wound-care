<script>
  export let src
  export let heading
  export let content
</script>

<li class="flow">
  <h2>{heading}</h2>
  <div class="video">
    <iframe title="vimeo-player" {src} frameborder="0" allowfullscreen />
  </div>
  <p>
    {content}
  </p>
</li>
