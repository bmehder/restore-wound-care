<aside id="qualified-patients">
  <div class="one">Is an open wound on the skin</div>
  <div class="two">Is not infected</div>
  <div class="three">Is greater than 1 square cm</div>
  <div class="four">Has not improved after 4 weeks of therapy</div>
</aside>

<style>
  #qualified-patients {
    position: relative;
    max-width: 450px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
  }
  #qualified-patients div {
    display: grid;
    place-content: center;
    font-weight: bold;
    color: var(--primary);
    padding-left: 1rem;
    padding-right: 1rem;
    aspect-ratio: 1;
    text-align: center;
    border-radius: 25%;
  }
  #qualified-patients .one {
    background-color: var(--alt-one);
  }
  #qualified-patients .two {
    background-color: var(--alt-two);
  }
  #qualified-patients .three {
    background-color: var(--alt-two);
  }
  #qualified-patients .four {
    background-color: var(--alt-one);
  }
  /* #qualified-patients .title {
    position: absolute;
    width: 30%;
    height: 30%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    place-content: center;
    line-height: initial;
    background-color: var(--primary);
    color: #fff;
    border-color: var(--contrast);
    border-style: solid;
    border-width: 4px;
    font-weight: bold;
    border-radius: 1000px;
  }
  #qualified-patients .title span {
    font-size: 120%;
  } */
</style>
