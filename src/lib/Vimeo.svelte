<script>
  export let src
  export let heading
  export let content
</script>

<div class="flow">
  <h2>{heading}</h2>
  <div class="video">
    <iframe title="vimeo-player" {src} frameborder="0" allowfullscreen />
  </div>
  <p>
    {content}
  </p>
</div>
