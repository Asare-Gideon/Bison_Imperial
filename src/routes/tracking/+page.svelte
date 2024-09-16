<script lang="ts">
  import bgImg from "../../lib/img/page-title-bg.jpg";
  import { ScanQrCode } from "lucide-svelte";
  import ShipmentResults from "./ShipmentResults.svelte";
  let trackingId: string = "";
  let loadingDate: string = "2024-09-12";
  let totalCBM: number = 35.5;
  let destination: string = "Tema, Ghana";
  let email: string = "example@example.com";
  let phoneNumber: string = "+233 24 123 4567";
  let shipmentItems = [
    { description: "Electronic Appliances", cbm: 10.2, quantity: 3 },
    { description: "Furniture", cbm: 8.0, quantity: 2 },
    { description: "Clothing", cbm: 4.5, quantity: 5 },
  ];
  let totalPrice: number = 20000; // in GHS

  const handleTrack = (id: string) => {
    trackingId = id;
  };
</script>

<svelte:head>
  <title>Tracking</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="main">
  <div class="page-title dark-background hero-container">
    <div class="bg-img-container">
      <img src={bgImg} class="bg-img" alt="bg-imag" />
      <div class="overlay"></div>
    </div>
    <div class="container position-relative">
      <div class="track-input-container">
        <h1>Tracking</h1>
        <form action="#" class="form-search d-flex align-items-stretch mb-3">
          <span
            style="margin-top: 10px; margin-right: -5px; margin-left: 10px;"
          >
            <ScanQrCode color={"#777a7d"} />
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Tracking Number"
          />
          <button type="submit" class="btn btn-primary" style="border: none">
            Track
          </button>
        </form>
      </div>
    </div>
  </div>

  <div class="track-content container">
    <ShipmentResults
      {trackingId}
      {loadingDate}
      {totalCBM}
      {destination}
      {email}
      {phoneNumber}
      {shipmentItems}
      {totalPrice}
    />
  </div>
</div>

<style>
  form {
    background: color-mix(in srgb, var(--default-color) 5%, white 90%);
    padding: 10px;
    border-radius: 10px;
    width: 40%;
  }
  form .form-control {
    padding-top: 9px;
    padding-bottom: 9px;
    padding-left: 20px;
    padding-right: 20px;
    border: none;
    margin-right: 10px;
    border: none !important;
    background: none !important;
  }

  form .form-control:hover,
  form .form-control:focus {
    outline: none;
    box-shadow: none;
  }

  form .btn-primary {
    color: var(--contrast-color);
    background-color: var(--accent-color);
    flex-shrink: 0;
    padding: 0 25px;
  }

  form .btn-primary:hover {
    background-color: color-mix(in srgb, var(--accent-color), transparent 15%);
  }

  .track-input-container {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .track-content {
    min-height: 50vh;
  }
  h1 {
    font-size: 28px;
    text-align: center;
    margin-bottom: 30px;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 24px;
    }
    form {
      width: 100%;
    }

    .main {
      /* padding: 10px; */
    }
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
