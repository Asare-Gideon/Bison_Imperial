<script>
  import { writable } from "svelte/store";
  let faq = writable([
    {
      id: "1",
      question: "What services does Bison Imperial Global offer?",
      answer:
        "  We provide comprehensive shipping and logistics services,including sea and air freight, customs clearance, warehousing, and courier services, both domestically and internationally",
      active: true,
    },
    {
      id: "2",
      question: "How can I track my shipment?",
      answer:
        "You can track your shipment using our online tracking system. Simply enter your tracking number on our website to view real-time updates.",
      active: false,
    },
    {
      id: "3",
      question: "How do I become an agent for Bison Imperial Global?",
      answer:
        "To become an agent, fill out the Agent Registration Form available on our website. Once reviewed and approved, you’ll receive all the necessary details to get started.",
      active: false,
    },
    {
      id: "4",
      question: "What countries does Bison Imperial Global ship to?",
      answer:
        " We ship to various countries worldwide, excluding war zones. Our key hubs include China, Dubai, and Turkey.",
      active: false,
    },
    {
      id: "5",
      question: "How do I get a quote for my shipment?",
      answer:
        "You can easily get an estimated price by visiting our Quote Page on the website. Simply enter your shipment details, and our calculator will provide you with an instant estimate for your shipping costs.",
      active: false,
    },
  ]);
  const TogleFaq = (id) => {
    let newList = $faq.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });
    faq.set(newList);
  };
</script>

<section id="faq" class="faq section">
  <div class="container section-title">
    <span>Frequently Asked Questions</span>
    <h2>Frequently Asked Questions</h2>
  </div>
  <!-- End Section Title -->

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="faq-container">
          {#each $faq as item}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
              on:click={() => TogleFaq(item.id)}
              class={`faq-item ${item.active ? "faq-active" : ""}`}
              data-aos-delay="200"
            >
              <i class="faq-icon bi bi-question-circle"></i>
              <h3>{item.question}</h3>
              <div class="faq-content">
                <p style="color: white;">
                  {item.answer}
                </p>
              </div>
              <i class="faq-toggle bi bi-chevron-right"></i>
            </div>
          {/each}

          <!-- End Faq item-->
        </div>
      </div>
    </div>
  </div>
</section>
