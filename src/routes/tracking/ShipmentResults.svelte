<script lang="ts">
  import ShipmentTable from "./ShipmentTable.svelte";

  export let trackingId: string = "";
  export let loadingDate: string = "";
  export let totalCBM: number = 0;
  export let destination: string = "";
  export let email: string = "";
  export let phoneNumber: string = "";
  export let shipmentItems: {
    description: string;
    cbm: number;
    quantity: number;
  }[] = [];
  export let totalPrice: number = 0;

  const downloadInvoice = () => {
    // Simulate invoice download
    alert("Invoice downloaded.");
  };
</script>

<div class="tracking-result">
  <h2 style="margin-top: 20px;">Shipment Tracking Information</h2>

  <div class="info-container">
    <div class="info-item">
      <strong>Loading Date:</strong>
      {loadingDate}
    </div>
    <div class="info-item">
      <strong>Tracking ID:</strong>
      {trackingId}
    </div>

    <div class="info-item">
      <strong>Total CBM:</strong>
      {totalCBM} m³
    </div>

    <div class="info-item">
      <strong>Email:</strong>
      {email}
    </div>
    <div class="info-item">
      <strong>Current Destination:</strong>
      {destination}
    </div>
    <div class="info-item">
      <strong>Phone Number:</strong>
      {phoneNumber}
    </div>
  </div>

  <ShipmentTable {shipmentItems} />

  <div class="total-price">
    <h4>Total Price:</h4>
    <p>₵ {totalPrice.toFixed(2)} GHS</p>
  </div>
</div>

<style>
  .tracking-result {
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 100%;
    margin: 20px;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 22px;
  }

  .info-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 20px;
  }

  .info-item {
    background-color: #ffffff;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 16px;
  }

  .total-price {
    text-align: right;
    margin-top: 20px;
    font-size: 18px;
  }

  .total-price p {
    font-size: 28px;
    color: #f68b1e;
  }

  .download-btn {
    background-color: #f68b1e;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    width: 100%;
    transition: background-color 0.2s ease;
  }

  .download-btn:hover {
    background-color: #f68b1e;
  }

  @media (max-width: 600px) {
    .info-container {
      grid-template-columns: 1fr;
    }
    .tracking-result {
      margin: 0px;
    }

    .total-price,
    .download-btn {
      text-align: center;
    }

    .download-btn {
      width: auto;
    }
  }
</style>
