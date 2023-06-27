<script>
  import CaretDown from '$lib/icons/CaretDown.svelte'
  import CaretRight from '$lib/icons/CaretRight.svelte'
  import questionsAndAnswers from './faqs'
  import Faq from '$lib/FAQ.svelte'
</script>

<svelte:head>
  <title>Frequently Asked Questions - Restore Wound Care</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<h1 class="title">Frequently Asked Questions</h1>

<section class="flow">
  <h2>General FAQs</h2>
  {#each questionsAndAnswers as { question, answer }}
    <Faq {question} {answer} classNames="h3" openIcon={CaretRight} closeIcon={CaretDown} />
  {/each}
</section>