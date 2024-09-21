<script lang="ts">
  let currentToggle: "sea" | "air" | "rates" = "sea"; // Default toggle state
  let length: number = 0,
    width: number = 0,
    height: number = 0,
    quantity: number = 0,
    weight: number = 0;
  let seaCbm: number = 0,
    airShippingCost: number = 0,
    seaShippingCost: number = 0;
  let fromCountry: string = "",
    toCountry: string = ""; // Selected countries
  const countries = [
    "Ghana",
    "China",
    "USA",
    "UK",
    "Turkey",
    "Germany",
    "Dubai",
  ]; // Example countries

  const shippingRateCedi: number = 12; // Example rates for conversion
  const shippingRateDollar: number = 1; // Conversion rate for dollars
  const rates = { sea: 50, air: 100 }; // Example shipping rates for sea and air

  const calculateCBM = (): void => {
    if (currentToggle === "sea") {
      seaCbm = (length * width * height * quantity) / 1000000; // Convert cm to meters (CBM)
      seaShippingCost = seaCbm * rates.sea;
    } else if (currentToggle === "air") {
      airShippingCost = weight * quantity * rates.air;
    }
  };

  const switchToggle = (toggle: "sea" | "air" | "rates"): void => {
    currentToggle = toggle;
    resetFields();
  };

  const resetFields = (): void => {
    seaCbm = 0;
    airShippingCost = 0;
    length = 0;
    width = 0;
    height = 0;
    weight = 0;
    quantity = 0;
    fromCountry = "";
    toCountry = "";
  };
</script>

<div class="main">
  <div class="content-main">
    <!-- Toggle Buttons -->
    <div class="toggle-main">
      <div class="toggle-btns">
        <button
          class="btn mx-2 {currentToggle === 'sea' ? 'active' : 'inactive'}"
          on:click={() => switchToggle("sea")}
        >
          Sea
        </button>
        <button
          class="btn mx-2 {currentToggle === 'air' ? 'active' : 'inactive'}"
          on:click={() => switchToggle("air")}
        >
          Air
        </button>
      </div>
    </div>

    <!-- Sea CBM Calculator (Questionnaire Style) -->
    {#if currentToggle === "sea"}
      <div class="calculator-container toggle-content">
        <h3 class="result-text">CBM CALCULATOR</h3>

        <div>
          <div class="form-group">
            <label>Shipping from?</label>
            <select bind:value={fromCountry} class="form-control">
              <option value="">Select a country</option>
              {#each countries as country}
                <option value={country}>{country}</option>
              {/each}
            </select>
          </div>

          <div class="form-group">
            <label>Shipping to?</label>
            <select bind:value={toCountry} class="form-control">
              <option value="">Select a country</option>
              {#each countries as country}
                <option value={country}>{country}</option>
              {/each}
            </select>
          </div>
        </div>

        <!-- Sea Shipping Details -->
        <div class="result-section mt-3">
          <h4 class="result-text" style="color: #f8f9fa;">
            Total CBM: {seaCbm.toFixed(2)} m³
          </h4>
          <h5 class="result-text" style="color: #f8f9fa;">
            Cost: ${seaShippingCost.toFixed(2)} / GHS {(
              seaShippingCost * shippingRateCedi
            ).toFixed(2)}
          </h5>
        </div>

        <div class="row mt-4">
          <div class="col-md-6">
            <label>Length (cm)</label>
            <input type="number" bind:value={length} class="form-control" />
          </div>
          <div class="col-md-6">
            <label>Width (cm)</label>
            <input type="number" bind:value={width} class="form-control" />
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-6">
            <label>Height (cm)</label>
            <input type="number" bind:value={height} class="form-control" />
          </div>
          <div class="col-md-6">
            <label>Quantity</label>
            <input type="number" bind:value={quantity} class="form-control" />
          </div>
        </div>

        <!-- <button class="btn cal-btn btn-success mt-3" on:click={calculateCBM}>
          Calculate
        </button> -->
      </div>
    {/if}

    <!-- Air Shipping Calculator (Questionnaire Style) -->
    {#if currentToggle === "air"}
      <div class="calculator-container toggle-content">
        <h3 class="result-text" style="text-transform: uppercase;">
          Air Calculator
        </h3>

        <div class="form-group">
          <label>Shipping from?</label>
          <select bind:value={fromCountry} class="form-control">
            <option value="">Select a country</option>
            {#each countries as country}
              <option value={country}>{country}</option>
            {/each}
          </select>
        </div>

        <div class="form-group">
          <label>Shipping to?</label>
          <select bind:value={toCountry} class="form-control">
            <option value="">Select a country</option>
            {#each countries as country}
              <option value={country}>{country}</option>
            {/each}
          </select>
        </div>

        <div class="result-section mt-3">
          <h5 class="result-text" style="color: #f8f9fa;">
            Cost: ${airShippingCost.toFixed(2)}
          </h5>
          <h5 class="result-text" style="color: #f8f9fa;">
            GHS {(airShippingCost * shippingRateCedi).toFixed(2)}
          </h5>
        </div>

        <div class="row mt-3">
          <div class="col-md-6">
            <label>Weight (kg)</label>
            <input type="number" bind:value={weight} class="form-control" />
          </div>
          <div class="col-md-6">
            <label>Quantity</label>
            <input type="number" bind:value={quantity} class="form-control" />
          </div>
        </div>

        <!-- <button class="btn cal-btn btn-success mt-3" on:click={calculateCBM}>
          Calculate
        </button> -->
      </div>
    {/if}

    <!-- Rates Section -->
    {#if currentToggle === "rates"}
      <div class="rates-container toggle-content">
        <h3>Shipping Rates</h3>
        <div class="rates-content">
          <p><strong>Sea Rate:</strong> ${rates.sea} per CBM</p>
          <p><strong>Air Rate:</strong> ${rates.air} per KG</p>
          <p>
            <strong>Current Dollar Rate:</strong> GHS {shippingRateCedi} = $1
          </p>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  :root {
    --main-color: #f68b1e;
    --inactive-color: #e0e0e0;
    --text-dark: #333;
    --bg-light: #f8f9fa;
    --result-bg: #e9ecef;
    --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  .cal-btn {
    width: 48%;
    padding: 11px 10px;
  }
  .main {
    position: absolute;
    top: 37vh;
    left: 0;
    right: 0;
  }
  .country-cont {
    display: flex;
  }
  .form-control {
    padding: 11px 10px;
  }
  .content-main {
    background-color: #262262;
    margin-bottom: 2rem;
    max-width: 35rem;
    border-radius: 10px;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1.7rem;
  }
  .toggle-main {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .toggle-btns {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    background-color: #f8f9fa;
    width: 70%;
    border-radius: 30px;
    overflow: hidden;
  }

  .toggle-btns button {
    width: 210px;
    padding: 13px;
    border: none;
    border-radius: 30px;
    margin: 0 !important;
    /* box-shadow: var(--box-shadow); */
    transition:
      background-color 0.3s ease-in-out,
      color 0.3s ease-in-out;
  }

  .toggle-btns button.active {
    background-color: var(--main-color);
    color: #fff;
    border: 1px solid #d67317;
  }

  .toggle-btns button.inactive {
    /* background-color: var(--inactive-color); */
    color: var(--text-dark);
  }

  .calculator-container,
  .rates-container {
    background-color: var(--bg-light);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: var(--box-shadow);
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
  }

  .btn-success {
    background-color: var(--main-color);
    border-color: var(--main-color);
    transition: background-color 0.3s ease;
  }

  .btn-success:hover {
    background-color: #d67317;
  }

  .result-section {
    background-color: #262262;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1.5rem;
    text-align: center;
    color: white;
    min-height: 6rem;
  }

  .toggle-content {
    display: block;
    transition: transform 0.4s ease-in-out;
  }

  .form-group {
    margin-bottom: 1rem;
  }
  @media (max-width: 600px) {
    .toggle-btns {
      width: 90%;
    }
    .main {
      position: relative;
      margin-top: 1rem;
      top: 0px;
    }
    .result-text {
      font-size: 18px;
    }
    .calculator-container,
    .rates-container {
      padding: 1rem;
    }
    .toggle-btns button {
      padding: 8px 13px;
    }
  }
</style>
