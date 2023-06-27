<script>
  import teamMembers from './data'
  import Member from './Member.svelte'
</script>

<svelte:head>
  <title>About Us - Restore Wound Care</title>
  <!-- <meta name="description" content="Restore Wound Care has developed an insurance backed protocol for treating recalcitrant wounds proving difficult to heal using conventional wound care methods."> -->
</svelte:head>

<h1 class="title">About Restore Wound Care</h1>

<section class="flow">
  <h2>Lorem Ipsum</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum suscipit accusamus natus
    soluta explicabo voluptatem veritatis aliquid at adipisci nobis architecto quibusdam,
    et quos fuga ea maiores, a voluptates laudantium! Quos itaque et corrupti, ad alias
    odit inventore quibusdam, esse nobis facilis nemo in. Facere nesciunt odio ipsa magni
    natus.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum suscipit accusamus natus
    soluta explicabo voluptatem veritatis aliquid at adipisci nobis architecto quibusdam,
    et quos fuga ea maiores, a voluptates laudantium! Quos itaque et corrupti, ad alias
    odit inventore quibusdam, esse nobis facilis nemo in. Facere nesciunt odio ipsa magni
    natus.
  </p>
</section>

<section class="flow">
  <h2>Our Team</h2>
  <ul class="auto-grid">
    {#each teamMembers as item}
      <Member {item} />
    {/each}
  </ul>
</section>
