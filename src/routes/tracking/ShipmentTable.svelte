<script lang="ts">
  export let shipmentItems: {
    description: string;
    cbm: number;
    quantity: number;
  }[] = [];
</script>

<table class="shipment-table">
  <thead>
    <tr>
      <th>Item Description</th>
      <th>CBM</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
    {#each shipmentItems as item}
      <tr>
        <td>{item.description}</td>
        <td>{item.cbm} m³</td>
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
