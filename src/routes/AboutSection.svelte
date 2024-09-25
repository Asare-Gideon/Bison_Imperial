<script>
  import img from "../lib/img/about-bg.jpg";
</script>

<section id="about" class="about section">
  <div class="container">
    <div class="row gy-4">
      <div
        class="col-lg-6 position-relative align-self-start order-lg-last order-first"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img src={img} class="bg-img" alt="" />
        <a href="#" class="glightbox pulsating-play-btn"><span></span></a>
      </div>

      <div
        class="col-lg-6 content order-last order-lg-first"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h3 style="text-transform: uppercase;">About Us</h3>
        <p>
          Bison Imperial Global Shipping and Logistics is a fast-expanding
          shipping and logistics service provider headquartered in the biggest
          port enclave of Ghana (Tema) with presence in Accra and Kumasi.
        </p>
        <ul>
          <li class="">
            <i class="bi bi-diagram-3 about-icon"></i>
            <div>
              <h5>Evolution Of Shipping Solutions</h5>
              <p>
                Our shipping services evolve to meet modern business demands,
                adapting to market changes and customer expectations for optimal
                performance and reliability.
              </p>
            </div>
          </li>
          <li>
            <i class="bi bi-fullscreen-exit about-icon"></i>
            <div>
              <h5>Integrity In Every Action</h5>
              <p>
                We operate with the highest ethical standards, ensuring that
                every decision is made with transparency and accountability,
                building lasting trust with our clients and partners.
              </p>
            </div>
          </li>
          <li>
            <i class="bi bi-broadcast about-icon"></i>
            <div>
              <h5>The Power Of Teamwork</h5>
              <p>
                Collaboration is at the heart of our success, where every team
                member, partner, and client works together toward shared goals,
                driving efficiency and innovation in our operations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<style>
  .about h5 {
    text-transform: capitalize;
  }
  .bg-img {
    width: 100%;
    height: 30rem;
    object-fit: fill;
  }
  @media only screen and (max-width: 600px) {
    .about-icon {
      font-size: 30px !important;
    }
  }

  @media only screen and (max-width: 900px) {
    .bg-img {
      height: 100%;
    }
  }
</style>
