<template>
  <aside class="app-sidebar" id="sidebar">

    <!-- Start::main-sidebar-header -->
    <div class="main-sidebar-header">
      <a href="index.html" class="header-logo">
        <img src="../assets/tailwind-dashboard/img/brand-logos/desktop-logo.png" alt="logo"
             class="main-logo desktop-logo">
        <img src="../assets/tailwind-dashboard/img/brand-logos/toggle-logo.png" alt="logo"
             class="main-logo toggle-logo">
        <img src="../assets/tailwind-dashboard/img/brand-logos/desktop-dark.png" alt="logo"
             class="main-logo desktop-dark">
        <img src="../assets/tailwind-dashboard/img/brand-logos/toggle-dark.png" alt="logo"
             class="main-logo toggle-dark">
      </a>
    </div>
    <!-- End::main-sidebar-header -->

    <!-- Start::main-sidebar -->
    <div class="main-sidebar " id="sidebar-scroll">

      <!-- Start::nav -->
      <nav class="main-menu-container nav nav-pills flex-column sub-open">
        <div class="slide-left" id="slide-left">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24"
               height="24" viewBox="0 0 24 24">
            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
          </svg>
        </div>
        <ul class="main-menu">

          <!-- Start::slide -->
          <li class="slide">
            <RouterLink :to="{name:'product'}" class="side-menu__item">
              <svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon"
                   enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                <path fill="#b7bbc0"
                      d="M20.23 7.24 12 12 3.77 7.24a1.98 1.98 0 0 1 .7-.71L11 2.76c.62-.35 1.38-.35 2 0l6.53 3.77c.29.173.531.418.7.71z"/>
                <path fill="#9399a1"
                      d="M12 12v9.5a2.09 2.09 0 0 1-.91-.21L4.5 17.48a2.003 2.003 0 0 1-1-1.73v-7.5a2.06 2.06 0 0 1 .27-1.01L12 12z"/>
                <path fill="#4b5563"
                      d="M20.5 8.25v7.5a2.003 2.003 0 0 1-1 1.73l-6.62 3.82c-.275.13-.576.198-.88.2V12l8.23-4.76c.175.308.268.656.27 1.01z"/>
              </svg>
              <span class="side-menu__label">Products</span>
            </RouterLink>
          </li>
          <!-- End::slide -->



        </ul>
        <div class="slide-right" id="slide-right">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24"
               height="24" viewBox="0 0 24 24">
            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
          </svg>
        </div>
      </nav>
      <!-- End::nav -->

    </div>
    <!-- End::main-sidebar -->

  </aside>
</template>

<script setup>
</script>

<style scoped>

</style>
