<script lang="ts">
  import { formatQty } from "../../common/utils";

  export let isAir: boolean;
  export let shipmentItems: {
    description: string;
    value: number;
    quantity: number;
    supplyTracking: string;
  }[] = [];
</script>

<table class="shipment-table">
  <thead>
    <tr>
      <th>Supplier Tracking Number</th>
      <th>Item Description</th>
      <th>{isAir ? "KG" : "CBM"}</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
    {#each shipmentItems as item}
      <tr>
        <td>{item.supplyTracking}</td>
        <td>{item.description}</td>
        <td>{formatQty(item.value, 3)} {isAir ? "kg" : "m³"}</td>
        <td>{item.quantity}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  .shipment-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th,
  td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #dddddd;
  }

  th {
    background-color: #f68b1e;
    color: white;
  }

  td {
    background-color: #ffffff;
    font-size: 16px;
  }

  @media (max-width: 600px) {
    th,
    td {
      padding: 10px;
      font-size: 14px;
    }
  }
</style>
