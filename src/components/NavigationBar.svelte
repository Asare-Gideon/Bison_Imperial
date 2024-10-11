<script>
  import logo from "../lib/img/bison.png";
  import { page } from '$app/stores';  
</script>

<header id="header" class="header d-flex align-items-center fixed-top">
  <div
    class="container-fluid container-xl position-relative d-flex align-items-center"
  >
    <a href="/" class="logo d-flex align-items-center me-auto">
      <!-- Uncomment the line below if you also wish to use an image logo -->
      <img src={logo} alt="" />
      <!-- <h1 class="sitename">Bison</h1> -->
    </a>

    <nav id="navmenu" class="navmenu">
      <ul>
        <li>
          <a href="/" class={`${$page.url.pathname === "/" ? "active" : ""}`}>Home<br /></a>
        </li>
        <li><a href="/about" class={`${$page.url.pathname === "/about" ? "active" : ""}`}>About</a></li>
        <li><a href="/services" class={`${$page.url.pathname === "/services" ? "active" : ""}`}>Services</a></li>
        <li><a href="/team" class={`${$page.url.pathname === "/team" ? "active" : ""}`}>Team</a></li>
        <li><a href="/contacts" class={`${$page.url.pathname === "/contacts" ? "active" : ""}`}>Contact</a></li>
      </ul>
      <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>

    <a class="btn-getstarted" href="/quote">Get a Quote</a>
  </div>
</header>

<style></style>
