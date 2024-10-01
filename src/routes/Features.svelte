<script>
  import { Zap, Skull, Truck, ShieldCheck } from "lucide-svelte";
</script>

<section id="featured-services" class="featured-services section">
  <div class="container">
    <div class="row gy-4">
      <div class="col-lg-4 col-md-6 service-item d-flex" data-aos-delay="100">
        <div class="icon flex-shrink-0">
          <Truck size={40} color="#f68b1e" />
        </div>
        <div>
          <h4 class="title">Flexible Delivery Options</h4>
          <p class="description">
            Choose from a range of delivery speeds and times, allowing you to
            tailor shipping to your business needs and customer preferences
          </p>
          <!-- <a href="#" class="readmore stretched-link"
            ><span>Learn More</span><i class="bi bi-arrow-right"></i></a
          > -->
        </div>
      </div>
      <!-- End Service Item -->

      <div class="col-lg-4 col-md-6 service-item d-flex">
        <div class="icon flex-shrink-0">
          <ShieldCheck size={40} color="#f68b1e" />
        </div>
        <div>
          <h4 class="title">Insurance Protection</h4>
          <p class="description">
            Protect your shipments with comprehensive insurance options that
            cover damage, loss, or unforeseen events (T&C Apply).
          </p>
          <!-- <a href="#" class="readmore stretched-link"
            ><span>Learn More</span><i class="bi bi-arrow-right"></i></a
          > -->
        </div>
      </div>
      <!-- End Service Item -->

      <div class="col-lg-4 col-md-6 service-item d-flex">
        <div class="icon flex-shrink-0">
          <Zap size={40} color="#f68b1e" />
        </div>
        <div>
          <h4 class="title">Fast Shipments</h4>
          <p class="description">
            Expedite your deliveries with our priority shipping service,
            ensuring your goods reach their destination faster than ever.
          </p>
          <!-- <a href="#" class="readmore stretched-link"
            ><span>Learn More</span><i class="bi bi-arrow-right"></i></a
          > -->
        </div>
      </div>
      <!-- End Service Item -->
    </div>
  </div>
</section>

<style>
</style>
