<script>
  export let formSparkURL = ''
  export let redirect = ''
  export let botpoison = ''
  export let isPhoneRequired = true

  let isBotpoisoning = false

  const handleBotPoisonStart = () => {
    console.log('challenge started.')
    isBotpoisoning = true
  }

  const handleBotPoisonSuccess = () => {
    console.log('challenge success.')
    isBotpoisoning = false
  }

  const handleBotPoisonError = () => console.log('challenge error.')
</script>

<svelte:head>
  <script src="https://unpkg.com/@botpoison/browser" async></script>
</svelte:head>

<form
  class="flow"
  method="POST"
  action={formSparkURL}
  data-botpoison-public-key={botpoison}
  on:botpoison-challenge-start={handleBotPoisonStart}
  on:botpoison-challenge-success={handleBotPoisonSuccess}
  on:botpoison-challenge-error={handleBotPoisonError}
>
  <div class="columns">
    <div>
      <label for="first-name">First Name <span>*</span></label>
      <input type="text" id="first-name" name="FirstName" required />
    </div>
    <div>
      <label for="last-name">Last Name <span>*</span></label>
      <input type="text" id="last-name" name="LastName" required />
    </div>
  </div>
  <div class="columns">
    <div>
      <label for="email">Email <span>*</span></label>
      <input type="email" id="email" name="email" required />
    </div>
    <div>
      <label for="phone"
        >Phone {#if isPhoneRequired}<span>*</span>{/if}</label
      >
      <input type="phone" id="phone" name="Phone" required={isPhoneRequired} />
    </div>
  </div>
  <div class="request-evaluation">
    <input
      type="checkbox"
      name="Evaluation"
      id="request-evaluation"
      value="evaluation"
    />
    <label for="request-evaluation"> I would like to request an evaluation. </label>
  </div>
  <div>
    <label for="message">Message <span>*</span></label>
    <textarea id="message" name="Message" cols="30" rows="10" required />
  </div>
  <div style="display: contents;">
    <input
      type="checkbox"
      name="_honeypot"
      style="display:none"
      tabindex="-1"
      autocomplete="off"
    />
    <input type="hidden" name="_redirect" value={redirect} />
  </div>
  <div>
    <button type="submit" disabled={isBotpoisoning}>Submit Message</button>
  </div>
</form>

<style>
  .columns {
    gap: var(--size);
  }

  div {
    display: grid;
    gap: calc(var(--size) / 4);
  }

  span {
    color: red;
  }

  .request-evaluation {
    display: flex;
    align-items: center;
    gap: var(--half-size);
  }

  .request-evaluation input {
    width: var(--size);
    height: var(--size);
  }

  button {
    padding-block: var(--size);
  }
</style>
