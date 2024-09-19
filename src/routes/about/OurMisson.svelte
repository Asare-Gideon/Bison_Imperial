<script>
  import bg from "../../lib/img/cta-bg.jpg";
</script>

<section id="call-to-action" class="call-to-action section dark-background">
  <img src={bg} alt="" />

  <div class="container">
    <div class="row">
      <!-- Mission -->
      <div class="col-lg-6 mb-4">
        <div class="section-header">
          <h2 class="mission-header">Our Mission</h2>
        </div>
        <div class="section-content">
          <p class="v-para">
            To ensure that our clients and other stakeholders enjoy the best
            service and are competitive by not only delivering ahead of
            schedule, but also in an innovative, efficient and effective way.
          </p>
        </div>
      </div>

      <!-- Vision -->
      <div class="col-lg-6 mb-4">
        <div class="section-header">
          <h2 class="mission-header">Our Vision</h2>
        </div>
        <div class="section-content">
          <p class="v-para">
            Our vision is to be the most sought-after shipping and logistics
            provider in Africa, known for our excellence, reliability, and
            innovative solutions. We strive to set new industry standards by
            delivering efficient and customer-focused services across the
            continent
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .mission-header {
    position: relative;
  }
  .mission-header::after {
    content: "";
    position: absolute;
    width: 80px;
    height: 4px;
    background-color: #f68b1e;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
  }

  .why-us {
    background-color: rgb(223, 225, 226);
  }
  .section-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .section-header h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .section-content {
    text-align: center;
    margin-bottom: 2rem;
  }

  .section-content p {
    font-size: 1.1rem;
    line-height: 1.6;
  }
  @media only screen and (max-width: 600px) {
    .v-para {
      font-size: 15px !important;
    }
  }
</style>
