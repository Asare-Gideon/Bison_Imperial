<script>
  import bgImg from "../../lib/img/page-title-bg.jpg";
  import AgentForm from "./AgentForm.svelte";
  import Cards from "./Cards.svelte";
</script>

<svelte:head>
  <title>Agent form</title>
  <meta name="description" content="Bison Imperial Global Shipping and Logistics | Agent Form" />
</svelte:head>

<div class="">
  <div class="page-title dark-background" data-aos="fade">
    <div class="bg-img-container">
      <img src={bgImg} class="bg-img" alt="bg-imag" />
      <div class="overlay"></div>
    </div>
    <div class="container position-relative">
      <h1>Agent Form</h1>
      <nav class="breadcrumbs">
        <ol>
          <li><a href="/">Home</a></li>
          <li class="current">Agent form</li>
        </ol>
      </nav>
    </div>
  </div>
  <div class="content-container container">
    <div class="header-content">
      <h1>Benefits of Being Our Agent</h1>
    </div>
    <Cards />
    <AgentForm />
  </div>
</div>

<style>
  .header-content {
    width: 100%;
    padding: 20px 0px;
  }
  .header-content h1 {
    text-align: center;
  }
  .content-container {
    min-height: 50vh;
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
</style>
