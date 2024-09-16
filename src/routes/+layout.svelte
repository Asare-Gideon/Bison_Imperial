<script>
  import NavigationBar from "../components/NavigationBar.svelte";
  import "../app.css";
  import Footer from "../components/Footer.svelte";
</script>

<div class="app">
  <NavigationBar />

  <main class="main">
    <slot />
  </main>
  <Footer />
</div>

<style>
</style>
