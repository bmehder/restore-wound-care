<script>
  export let api = ''
  export let redirect = ''
</script>

<form action="{api}" method="POST">
  <div class="columns">
    <div>
      <label for="first-name">First Name <span>*</span></label>
      <input type="text" id="first-name" name="first-name" required/>
    </div>
    <div>
      <label for="last-name">Last Name <span>*</span></label>
      <input type="text" id="last-name" name="last-name" required/>
    </div>
  </div>
  <div class="columns">
    <div>
      <label for="email">Email <span>*</span></label>
      <input type="email" id="email" name="email" required/>
    </div>
    <div>
      <label for="phone">Phone <span>*</span></label>
      <input type="phone" id="phone" name="phone" required/>
    </div>
  </div>
  <div>
    <label for="message">Message <span>*</span></label>
    <textarea id="message" name="message" cols="30" rows="10" required></textarea>
  </div>
  <input
    type="hidden"
    name="_redirect"
    value="{redirect}"
  />
  <div>
    <button type="submit">Submit Message</button>
  </div>
</form>

<style>
  form {
    width: min(100%, 48rem);
    display: grid;
    gap: var(--size);
  }

  .columns {
    gap: var(--size);
  }

  label {
    font-weight: 600;
  }

  span {
    color: red;
  }
  
  div {
    display: grid;
    gap: calc(var(--size) / 4);
  }

  input, textarea {
    padding: var(--half-size);
  }
  
  button {
    padding-block: var(--size);
  }
</style>