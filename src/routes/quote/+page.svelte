<script>
  import AboutSection from "../AboutSection.svelte";
  import bgImg from "../../lib/img/page-title-bg.jpg";
  import Calculator from "./Calculator.svelte";
</script>

<svelte:head>
  <title>Quote</title>
  <meta name="description" content="Bison Imperial Global Shipping and Logistics | Quote" />
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
        <p class="quote-para">
          Get an estimated price by simply entering your shipment details, and
          our calculator will provide you with an instant estimate for your
          shipping costs.
        </p>
      </nav>
    </div>
  </div>
  <div class="container content-cont">
    <Calculator />
  </div>
</div>

<style>
  .quote-para {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
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
    .quote-para {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
