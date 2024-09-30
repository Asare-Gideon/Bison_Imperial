<script>
  import bgImg from "../../lib/img/page-title-bg.jpg";
  import Features from "./Features.svelte";
  import ServicesSections from "../ServicesSections.svelte";
</script>

<svelte:head>
  <title>Services</title>
  <meta name="description" content="Bison Imperial Global Shipping and Logistics | Services" />
</svelte:head>

<div class="">
  <div class="page-title dark-background" data-aos="fade">
    <div class="bg-img-container">
      <img src={bgImg} class="bg-img" alt="bg-imag" />
      <div class="overlay"></div>
    </div>
    <div class="container position-relative">
      <h1>Services</h1>
      <p>
        Our services are tailored to meet all your logistics needs. From
        real-time shipment tracking to agent coordination, we provide seamless
        solutions that ensure efficiency, transparency, and full control over
        your operations.
      </p>
      <nav class="breadcrumbs">
        <ol>
          <li><a href="/">Home</a></li>
          <li class="current">Services</li>
        </ol>
      </nav>
    </div>
  </div>
  <Features />
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
