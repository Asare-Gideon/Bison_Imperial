<script>
  import bgImg from "../../lib/img/page-title-bg.jpg";
  import TeamSection from "./TeamSection.svelte";
</script>

<svelte:head>
  <title>Services</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="">
  <div class="page-title dark-background" data-aos="fade">
    <div class="bg-img-container">
      <img src={bgImg} class="bg-img" alt="bg-imag" />
      <div class="overlay"></div>
    </div>
    <div class="container position-relative">
      <h1>Our Team</h1>
      <nav class="breadcrumbs">
        <ol>
          <li><a href="/">Home</a></li>
          <li class="current">Team</li>
        </ol>
      </nav>
    </div>
  </div>
  <div class="content-cont">
    <div class="container">
      <TeamSection />
    </div>
  </div>
</div>

<style>
  .content-cont {
    background-color: #f4f8fa !important;
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
