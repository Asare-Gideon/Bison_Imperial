<script>
  import img from "../../lib/img/agent.jpg";
</script>

<section id="get-a-quote" class="get-a-quote section">
  <div class="container">
    <div class="row g-0" data-aos="fade-up" data-aos-delay="100">
      <div class="col-lg-5 quote-bg" style={`background-image: url(${img});`}>
        <!-- <img src={img} alt="img" /> -->
      </div>

      <div class="col-lg-7" data-aos="fade-up" data-aos-delay="200">
        <form
          action="forms/get-a-quote.php"
          method="post"
          class="php-email-form"
        >
          <h3>Registration form</h3>
          <p>
            Join Bison Imperial Global's network! Fill out the form below to
            become an agent and access exclusive opportunities in shipping and
            logistics. Let’s grow together!
          </p>

          <div class="row gy-4">
            <div class="col-md-6">
              <input
                type="text"
                class="form-control"
                placeholder="Company Name"
              />
            </div>
            <div class="col-md-6">
              <input
                type="email"
                class="form-control"
                placeholder="Business Email"
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control"
                placeholder="Business Location"
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control"
                placeholder="Reference Name"
              />
            </div>

            <div class="col-lg-12">
              <h4>Your Personal Details</h4>
            </div>

            <div class="col-12">
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Name"
              />
            </div>
            <div class="col-12">
              <input
                type="email"
                class="form-control"
                name="email"
                placeholder="Email"
              />
            </div>

            <div class="col-12">
              <input
                type="text"
                class="form-control"
                name="phone"
                placeholder="Phone"
              />
            </div>
            <div class="col-12 text-center">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">
                Your quote request has been sent successfully. Thank you!
              </div>
              <button type="submit">Submit form</button>
            </div>
          </div>
        </form>
      </div>
      <!-- End Quote Form -->
    </div>
  </div>
</section>
