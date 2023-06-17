<script>
  export let apiKey = ''
</script>

<form action="https://formspree.io/f/{apiKey}" method="POST">
  <div>
    <label for="first-name">First Name</label>
    <input type="text" id="first-name" name="first-name" required/>
  </div>
  <div>
    <label for="last-name">Last Name</label>
    <input type="text" id="last-name" name="last-name" required/>
  </div>
  <div>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required/>
  </div>
  <div>
    <label for="message">Message</label>
    <textarea name="message" id="message" cols="30" rows="10" required></textarea>
  </div>
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
  
  div {
    display: grid;
    gap: calc(var(--size) / 4);
  }

  input, textarea {
    padding: var(--half-size);
  }
</style>