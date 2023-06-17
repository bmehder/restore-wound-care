<aside>
  <div class="one">Is an open wound on the skin</div>
  <div class="two">Is not infected</div>
  <div class="three">Is greater than 1 square cm</div>
  <div class="four">Has not improved after 4 weeks of therapy</div>
</aside>

<style>
  aside {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: calc(var(--half-size) / 2);
    font-weight: bold;
    color: var(--accent);
    text-align: center;
  }
  div {
    display: grid;
    place-content: center;
    padding-inline: var(--size);
    aspect-ratio: 1;
    border-radius: 25%;
  }
  .one, .four {
    background-color: var(--alt-one);
  }
  .two, .three {
    background-color: var(--alt-two);
  }
</style>
