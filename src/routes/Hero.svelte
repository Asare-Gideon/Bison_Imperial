<script>
  import bg from "../lib/img/hero-bg.png";
  import rightImg from "../lib/img/right-bg.png";
  import { ScanQrCode } from "lucide-svelte";
  import {goto} from "$app/navigation";
  let tracking = "";

</script>

<section id="hero" class="hero section dark-background">
  <img src={bg} alt="" class="hero-bg" />

  <div class="container">
    <div class="row gy-4 d-flex justify-content-between">
      <div
        class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center hero-content"
      >
        <h2>Ship BIG, Pay Small</h2>
        <p>
          Save on shipping costs with our efficient consolidation services.
          Bison Imperial Global Shipping helps you move large volumes
          affordably.
        </p>

        <form action="#" on:submit={(e) => {
          e.preventDefault();
              if(!tracking) return;
              goto(`/tracking?tckNum=${tracking}`);
        }} class="form-search d-flex align-items-stretch mb-3">
          <span
            style="margin-top: 11px; margin-right: -5px; margin-left: 10px;"
          >
            <ScanQrCode color={"#777a7d"} />
          </span>
          <input
            type="text"
            required
            class="form-control"
            placeholder="Enter Tracking Number"
            bind:value={tracking}
          />
          <button
            type="submit"
            class="btn btn-primary"
            style="border: none; display: flex; align-items: center; justify-content: center;"
          >
            Track
          </button>
        </form>
      </div>
      <div class="col-lg-5 order-1 order-lg-2 hero-img">
        <img
          src={rightImg}
          class="img-fluid mb-3 mb-lg-0 hero-img-right"
          alt=""
        />
      </div>
    </div>
  </div>
</section>

<style>
  .hero-img-right {
    height: 29rem;
    background-color: transparent;
  }
  #hero {
    margin-top: -4rem;
  }

  @media (max-width: 600px) {
    .hero-img-right {
      display: none !important;
      visibility: hidden !important;
    }
    #hero {
      min-height: 40vh !important;
      margin-top: -8rem;
    }
  }
</style>
