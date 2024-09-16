<script>
  //   import Counter from "./Counter.svelte";

  import AboutSection from "./AboutSection.svelte";
  import CallToAction from "./CallToAction.svelte";
  import Faq from "./Faq.svelte";
  import Features from "./Features.svelte";
  import Hero from "./Hero.svelte";
  import ServicesSections from "./ServicesSections.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="index-page">
  <Hero />
  <Features />
  <AboutSection />
  <ServicesSections />
  <CallToAction />
  <Faq />
</section>

<style>
</style>
