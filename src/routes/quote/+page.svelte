<script>
  import AboutSection from "../AboutSection.svelte";
  import bgImg from "../../lib/img/page-title-bg.jpg";
  import Calculator from "./Calculator.svelte";
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="">
  <div class="page-title dark-background quote-cont" data-aos="fade">
    <div class="bg-img-container">
      <img src={bgImg} class="bg-img" alt="bg-imag" />
      <div class="overlay"></div>
    </div>
    <div class="container position-relative">
      <h1>Quote</h1>
      <nav class="breadcrumbs">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          labore nihil magnam. Quasi aliquid, officia neque natus adipisci
          perspiciatis velit.
        </p>
      </nav>
    </div>
  </div>
  <div class="container content-cont">
    <Calculator />
  </div>
</div>

<style>
  .quote-cont {
    min-height: 50vh;
  }
  .content-cont {
    min-height: 90vh;
  }
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

  @media (max-width: 600px) {
    .quote-cont {
      min-height: auto;
    }
  }
</style>
