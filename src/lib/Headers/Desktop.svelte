<script>
  import { page } from '$app/stores'

  export let logo = 'Add Logo Prop!'
  export let menuItems
</script>

<header>
  <div class="inner">
    <div class="logo">
      <a href="/">{@html logo}</a>
    </div>
    <nav>
      <ul>
        {#each menuItems as { name, url, children }}
          <li>
            <a aria-current={$page.url.pathname === url} href={url}>{name}</a>
            {#if children}
              <ul class="flow">
                {#each children as { name, url }}
                  <li>
                    <a aria-current={$page.url.pathname === url} href={url}>{name}</a>
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>

<style>
  header {
    background-color: var(--accent);
  }

  .inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: var(--size);
  }

  .logo {
    max-width: 12em;
  }

  ul {
    display: flex;
    gap: var(--size);
    list-style: none;
  }

  ul ul {
    display: none;
  }

  ul li {
    position: relative;
  }

  ul li:hover ul {
    position: absolute;
    left: calc(var(--size) * -1);
    display: block;
    padding: var(--size);
    padding-block-start: var(--size);
    background-color: var(--accent);
  }

  a {
    color: var(--light);
    text-underline-offset: var(--half-size);
    text-decoration-thickness: calc(var(--size) / 12);
  }

  a:hover {
    text-decoration-color: var(--alt-one);
  }

  a[aria-current='true'] {
    text-decoration: underline;
    text-decoration-thickness: calc(var(--size) / 12);
    text-decoration-color: var(--light);
  }
</style>
