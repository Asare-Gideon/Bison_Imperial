<script>
  import AboutSection from "../AboutSection.svelte";
  import bgImg from "../../lib/img/page-title-bg.jpg";
  import Team from "./Team.svelte";
  import WhyUs from "./WhyUs.svelte";
  import OurMisson from "./OurMisson.svelte";
  import Offices from "./Offices.svelte";
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="Bison Imperial Global Shipping and Logistics | About" />
</svelte:head>

<div class="">
  <div class="page-title dark-background" data-aos="fade">
    <div class="bg-img-container">
      <img src={bgImg} class="bg-img" alt="bg-imag" />
      <div class="overlay"></div>
    </div>
    <div class="container position-relative">
      <h1>About</h1>
      <nav class="breadcrumbs">
        <ol>
          <li><a href="/">Home</a></li>
          <li class="current">About</li>
        </ol>
      </nav>
    </div>
  </div>
  <AboutSection />
  <OurMisson />
  <WhyUs />
  <Offices />
  <!-- <Team /> -->
</div>

<style>
  .bg-img-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #001973;
    opacity: 0.6;
  }
</style>
