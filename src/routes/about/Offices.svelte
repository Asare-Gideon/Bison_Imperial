<script>
  import { MapPinCheckInside, Locate, Mail, Phone } from "lucide-svelte";
  import img from "../../lib/img/office.jpg";
  import { MapPin } from "lucide-svelte";
</script>

<section id="featured-services" class="featured-services section">
  <div class="container section-title" data-aos="fade-up">
    <span>OUR OFFICES AND DELIVERIES</span>
    <h2>OUR OFFICES AND DELIVERIES</h2>
    <p>
      Our regional offices and efficient logistics network ensure reliable,
      seamless deliveries tailored to your needs.
    </p>
  </div>

  <div class="container">
    <div class="row gy-4">
      <div class="col-lg-4 col-md-6 service-item d-flex" data-aos-delay="100">
        <div class="icon flex-shrink-0">
          <MapPin size={40} color="#f68b1e" />
        </div>
        <div>
          <h4 class="title">Tema Office</h4>
          <p class="description">
            TEMA: GT-057-8157, SAMTASHIE BUILDING, NEAR OLD MERIDIAN HOTEL, TEMA
            COMMUNITY ONE
          </p>
          <p class="contact-p">
            <span> <Mail size={19} /></span> info@bisonshipping.org,
            <span style="margin-left: 5px;">
              <br class="break" />
              <Phone size={19} />
            </span> +233322498145
          </p>
        </div>
      </div>
      <!-- End Service Item -->

      <div class="col-lg-4 col-md-6 service-item d-flex">
        <div class="icon flex-shrink-0">
          <MapPin size={40} color="#f68b1e" />
        </div>
        <div>
          <h4 class="title">Kumasi Office</h4>
          <p class="description">
            AK 1838684, GOLD OFFICE, APINO PLAZA, OPP. ALLIANZ FRACAISE, KUMASI
          </p>
          <p class="contact-p">
            <span> <Mail size={19} /></span> kumasi@bisonshipping.org,
            <span style="margin-left: 5px;">
              <br class="break" />
              <Phone size={19} />
            </span> +233248614131
          </p>
        </div>
      </div>
      <!-- End Service Item -->

      <div class="col-lg-4 col-md-6 service-item d-flex">
        <div class="icon flex-shrink-0">
          <MapPin size={40} color="#f68b1e" />
        </div>
        <div>
          <h4 class="title">TAKORADI Office</h4>
          <p class="description">
            TAKORADI, 185 C. BOTWE STREET CHAPEL HILL TAKORADI
          </p>
          <p class="contact-p">
            <span> <Mail size={19} /></span> takoradi@bisonshipping.org,
            <span style="margin-left: 5px;">
              <br class="break" /><Phone size={19} />
            </span> +233534520648
          </p>
        </div>
      </div>
      <!-- End Service Item -->
    </div>
  </div>
</section>

<section
  id="featured-services"
  style="margin-top: -60px;"
  class="featured-services section"
>
  <div class="container">
    <div class="row gy-4">
      <div class="col-lg-4 col-md-6 service-item d-flex" data-aos-delay="100">
        <div class="icon flex-shrink-0">
          <MapPin size={40} color="#f68b1e" />
        </div>
        <div>
          <h4 class="title">ELUBO Office</h4>
          <p class="description">
            ELUBO FUTURE BREAK COMPLEX OPPOSITE OBAMA FILLING STATION
          </p>
          <p class="contact-p">
            <span> <Mail size={19} /></span> elubo@bisonshipping.org,,
          </p>
        </div>
      </div>
      <!-- End Service Item -->

      <div class="col-lg-4 col-md-6 service-item d-flex">
        <div class="icon flex-shrink-0">
          <MapPin size={40} color="#f68b1e" />
        </div>
        <div>
          <h4 class="title">KIA Office</h4>
          <p class="description">KIA, ACCRA DA: GT - 356-3729</p>
          <p class="contact-p">
            <span> <Mail size={19} /></span> kia@bisonshipping.org,
            <span style="margin-left: 5px;">
              <br class="break" />
              <Phone size={19} />
            </span> +233206750049
          </p>
        </div>
      </div>
      <!-- End Service Item -->

      <div class="col-lg-4 col-md-6 service-item d-flex">
        <div class="icon flex-shrink-0">
          <MapPin size={40} color="#f68b1e" />
        </div>
        <div>
          <h4 class="title">Kotoka Office</h4>
          <p class="description">
            Kotoka International Airport office Aviance Cargo Village, Room 50
          </p>
          <p class="contact-p">
            <span> <Mail size={19} /></span> info@bisonshipping.org,
            <span style="margin-left: 5px;">
              <br class="break" />
              <Phone size={19} />
            </span>+233322498145
          </p>
        </div>
      </div>
      <!-- End Service Item -->
    </div>
  </div>
</section>

<style>
  .office-content {
    margin-top: 4rem;
  }
  .contact-p {
    font-size: 15px;
    font-style: italic;
  }
  .title {
    text-transform: uppercase;
  }
  .break {
    display: none;
  }
  @media (max-width: 600px) {
    .break {
      display: block;
      margin-top: 8px !important;
    }
  }
</style>
