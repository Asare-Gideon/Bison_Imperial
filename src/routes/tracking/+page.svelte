<script lang="ts">
  import bgImg from "../../lib/img/page-title-bg.jpg";
  import { ScanQrCode } from "lucide-svelte";
  import ShipmentResults from "./ShipmentResults.svelte";
  import trackingApi, { TrackKindEnum } from "../../requests/tracking";
  import Querier from "../../requests/querier";
  import Loader from "../../components/Loader.svelte";
  const urlParams = new URLSearchParams(typeof window !== "undefined" ? window.location.search : {});
  const trackingNumber = urlParams.get("tckNum") as string;
  let searchedTracking = trackingNumber || "";
  let fetcher = trackingApi.useFetch({trackFor: TrackKindEnum.containerTracking, trackingNumber: searchedTracking});
  const query = Querier().call(fetcher)

  $: searchedTracking = trackingNumber;
  $: fetcher = trackingApi.useFetch({trackFor: TrackKindEnum.containerTracking, trackingNumber: searchedTracking});
</script>

<svelte:head>
  <title>Tracking</title>
  <meta name="description" content="Bison Imperial Global Shipping and Logistics | Tracking" />
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
        <form action="#" on:submit={(e) => {
          e.preventDefault();
          Querier.call(fetcher)
        }} class="form-search d-flex align-items-stretch mb-3">
          <span
            style="margin-top: 10px; margin-right: -5px; margin-left: 10px;"
          >
            <ScanQrCode color={"#777a7d"} />
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Tracking Number"
            bind:value={searchedTracking}
            required
          />
          <button type="submit" class="btn btn-primary" style="border: none">
            Track
          </button>
        </form>
      </div>
    </div>
  </div>
    {#if $query.loading}
        <div class="track-content container center-items">
          <div class="loading-container">
            <Loader />
            <span style="margin-top:30px; font-size: 16px;">Loading</span>
          </div>
          
        </div>
        {:else if $query.error}
        <div class="track-content container center-items">
          <img src="/images/not-found.svg" class="error-icon" alt="Tracking number not found svg illustration" />
          <div>
            <p class="error-text">{$query.error?.message || ""}</p>
            {#if $query.error.name === "NotFoundError"}
            <p class="error-sub-text">We couldn't find your tracking number, kindly contact us for clarity or try a different one</p>
            {/if}
          </div>
        </div>
        {:else}
        <div class="track-content container">
          <ShipmentResults
            shipment={$query.data}
          />
        </div>
    {/if}
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
  .error-text{
    font-size: xx-large;
  }
  .error-sub-text{
    color: black;
    max-width: 480px;
  }
  .track-content.center-items{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .error-icon{
    width: 350px;
    height: 350px;
  }
  @media screen and (max-width: 1024px){
    .error-text{
      font-size: larger;
    }
    .track-content.track-content.center-items{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .error-icon{
      width: 256px;
      height: 256px;
    }
  }
  .loading-container{
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
  }
</style>
