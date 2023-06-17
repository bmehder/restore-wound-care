<script>
  export let api = ''
</script>

<form action="{api}" method="POST">
  <div>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required/>
  </div>
  <div>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required/>
  </div>
  <div>
    <label for="phone">Phone</label>
    <input type="phone" id="phone" name="phone" required/>
  </div>
  <div>
    <label for="message">Message</label>
    <textarea id="message" name="message" cols="30" rows="10" required></textarea>
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
  button {
    padding-block: var(--size);
  }
</style>