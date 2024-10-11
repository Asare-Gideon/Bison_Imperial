<script lang="ts">
  import moment from "moment";
  import type { ShipmentsQuerierType } from "../../common/types";
  import ShipmentTable from "./ShipmentTable.svelte";
  import { formatAmount, formatQty } from "../../common/utils";

  export let shipment: ShipmentsQuerierType | null;
  let totalValue = shipment?.shipments.reduce((p, c) => p + (shipment.container.isAir ? (c.weight || 0) : (c.confirmedCbm || c.cbm)),0) || 0
  let totalQuantity = shipment?.shipments.reduce((p, c) => p + (c.confirmedCalcQuantity || c.calcQuantity || c.quantity || 0), 0)
  let currentLocation = shipment?.container.routes?.find(route => route.isCurrent) || null;
  let totalPrice = (shipment?.shipments.reduce((p, c) => p + (c.confirmedPrice || c.price || 0), 0) || 0) * (shipment?.container.dollarRate || 0)

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
      {moment.utc(shipment?.container.loadingDate).format("Do MMM, YYYY")}
    </div>
    <div class="info-item">
      <strong>Tracking ID:</strong>
      {shipment?.tracking}
    </div>

    <div class="info-item">
      <strong>Total {shipment?.container.isAir ? "KG" : "CBM"}:</strong>
      {formatQty(totalValue, 3)} {shipment?.container.isAir ? "kg" : "m³" }
    </div>

    <div class="info-item">
      <strong>Email:</strong>
      {shipment?.user.email || ""}
    </div>
    <div class="info-item">
      <strong>Current Destination:</strong>
      {currentLocation?.location.name  || "UNKNOWN"}
    </div>
    <div class="info-item">
      <strong>Phone Number:</strong>
      {shipment?.user.phoneNumber}
    </div>
  </div>

  <ShipmentTable shipmentItems={(shipment?.shipments || []).map(item => ({value: shipment?.container.isAir ? item.weight || 0 : item.confirmedCbm || item.cbm, description: item.description, quantity: item.quantity, supplyTracking: item.supplyTracking}))} isAir={Boolean(shipment?.container.isAir)} />

  <div class="total-price">
    <h4>Total Price:</h4>
    <p>₵ {formatAmount(totalPrice)}</p>
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
