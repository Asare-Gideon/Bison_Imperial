<script>
  import { MapPinCheckInside, Locate, Mail, Phone } from "lucide-svelte";
  import img from "../../lib/img/office.jpg";
</script>

<section id="about" class="about section">
  <div class="container">
    <div class="row gy-4">
      <div
        class="col-lg-6 position-relative align-self-start order-lg-last order-first"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img src={img} class="img-fluid" style="border-radius: 10px;" alt="" />
        <!-- <a href="" class="glightbox pulsating-play-btn"></a> -->
      </div>

      <div
        class="col-lg-6 content order-last order-lg-first office-content"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h3>OUR OFFICES AND DELIVERIES</h3>
        <ul>
          <li>
            <!-- <Locate size={50} color="#f68b1e" /> -->
            <div style="margin-left: 10px;">
              <h5>
                TEMA: GT-057-8157, SAMTASHIE BUILDING, NEAR OLD MERIDIAN HOTEL,
                TEMA COMMUNITY ONE
              </h5>
              <p>
                <span> <Mail size={19} /></span> info@bisonshipping.org,
                <span style="margin-left: 5px;"><Phone size={19} /> </span> +233322498145
              </p>
            </div>
          </li>
          <li>
            <div style="margin-left: 10px;">
              <h5>
                KUMASI: AK 1838684, GOLD OFFICE, APINO PLAZA, OPP. ALLIANZ
                FRACAISE, KUMASI
              </h5>
              <p>
                <span> <Mail size={19} /></span> kumasi@bisonshipping.org,
                <span style="margin-left: 5px;"><Phone size={19} /> </span> +233248614131
              </p>
            </div>
          </li>
          <li>
            <div style="margin-left: 10px;">
              <h5>TAKORADI, 185 C. BOTWE STREET CHAPEL HILL TAKORADI</h5>
              <p>
                <span> <Mail size={19} /></span> takoradi@bisonshipping.org,
                <span style="margin-left: 5px;"><Phone size={19} /> </span> +233534520648
              </p>
            </div>
          </li>
          <li>
            <div style="margin-left: 10px;">
              <h5>ELUBO FUTURE BREAK COMPLEX OPPOSITE OBAMA FILLING STATION</h5>
              <p>
                <span> <Mail size={19} /></span> elubo@bisonshipping.org,
              </p>
            </div>
          </li>
          <li>
            <div style="margin-left: 10px;">
              <h5>KIA, ACCRA</h5>
              <p>
                <span> <Mail size={19} /></span> kia@bisonshipping.org,
                <span style="margin-left: 5px;"><Phone size={19} /> </span> +233206750049
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<style>
  .office-content {
    margin-top: 4rem;
  }
</style>
