<template>

  <div class="page">

    <!-- Start::app-sidebar -->
    <Sidebar/>
    <!-- End::app-sidebar -->

    <!-- Start::Header -->
    <Header/>
    <!-- End::Header -->

    <!-- Start::app-content -->
    <div class="content">

      <!-- Start::main-content -->
      <div class="main-content">
        <RouterView/>

      </div>
    </div>
    <!-- End::app-content -->


    <Footer/>

  </div>

  <!-- Back To Top -->
  <div class="scrollToTop">
    <span class="arrow"><i class="ri-arrow-up-s-fill text-xl"></i></span>
  </div>

  <div id="responsive-overlay"></div>

</template>


<script setup>
import defaultMenu from '../assets/tailwind-dashboard/js/defaultmenu.js'
import sticky from '../assets/tailwind-dashboard/js/sticky.js'
import switchJs from '../assets/tailwind-dashboard/js/switch.js'
import customJs from '../assets/tailwind-dashboard/js/custom.js'
// import js files
import '../assets/tailwind-dashboard/js/main.js'
import '../assets/tailwind-dashboard/libs/apexcharts/apexcharts.min.js'
import '../assets/tailwind-dashboard/libs/chart.js/chart.min.js'
import '../assets/tailwind-dashboard/libs/@popperjs/core/umd/popper.min.js'
import '../assets/tailwind-dashboard/libs/@simonwep/pickr/pickr.es5.min.js'
import '../assets/tailwind-dashboard/libs/preline/preline.js'
import '../assets/tailwind-dashboard/libs/simplebar/simplebar.min.js'
import '../assets/tailwind-dashboard/js/custom-switcher.js'
import '../assets/tailwind-dashboard/libs/flatpickr/flatpickr.min.js'

import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

import {onMounted} from "vue";

onMounted(() => {
  defaultMenu();
  sticky();
  switchJs();
  customJs();
})

</script>


<style>

@import '../assets/tailwind-dashboard/css/style.css';
@import '../assets/tailwind-dashboard/libs/simplebar/simplebar.min.css';
@import '../assets/tailwind-dashboard/libs/@simonwep/pickr/themes/nano.min.css';
@import '../assets/tailwind-dashboard/libs/jsvectormap/css/jsvectormap.min.css';

@import '../assets/tailwind-dashboard/libs/@simonwep/pickr/themes/nano.min.css';
@import '../assets/tailwind-dashboard/libs/flatpickr/flatpickr.min.css';
@import '../assets/tailwind-dashboard/libs/choices.js/public/assets/styles/choices.min.css';


</style>
