<template>
  <header class="header custom-sticky !top-0 !w-full">
    <nav class="main-header" aria-label="Global">
      <div class="header-content">
        <div class="header-left">
          <!-- Navigation Toggle -->
          <div class="">
            <button type="button" class="sidebar-toggle">
              <span class="sr-only">Toggle Navigation</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-headerprime"
                   enable-background="new 0 0 24 24"
                   height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <g>
                  <rect fill="none" height="24" width="24"></rect>
                </g>
                <g>
                  <g>
                    <path
                        d="M4,12c0-4.41,3.59-8,8-8s8,3.59,8,8s-3.59,8-8,8S4,16.41,4,12 M12,11l-4,0v2l4,0v3l4-4l-4-4V11z"
                        opacity=".3"></path>
                    <path
                        d="M4,12c0-4.41,3.59-8,8-8s8,3.59,8,8s-3.59,8-8,8S4,16.41,4,12 M2,12c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10 c0-5.52-4.48-10-10-10C6.48,2,2,6.48,2,12L2,12z M12,11l-4,0v2l4,0v3l4-4l-4-4V11z">
                    </path>
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <!-- End Navigation Toggle -->
        </div>

        <div class="responsive-logo">
          <a class="responsive-logo-dark" href="#" aria-label="Brand">
            <img src="../assets/tailwind-dashboard/img/brand-logos/desktop-logo.png" alt="logo" class="mx-auto">
          </a>

          <a class="responsive-logo-light" href="#" aria-label="Brand">
            <img src="../assets/img/profile.png" alt="logo" class="mx-auto">
          </a>
        </div>

        <div class="header-right">
          <div class="responsive-headernav">
            <div class="header-nav-right">

              <div class="header-theme-mode hidden sm:block">
                <a aria-label="anchor"
                   class="hs-dark-mode-active:hidden flex hs-dark-mode group flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                   href="javascript:;" data-hs-theme-click-value="dark">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-headerprime"
                       enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
                       width="24px" fill="#000000">
                    <rect fill="none" height="24" width="24"></rect>
                    <path
                        d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27 C17.45,17.19,14.93,19,12,19c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z"
                        opacity=".3"></path>
                    <path
                        d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z">
                    </path>
                  </svg>
                </a>
                <a aria-label="anchor"
                   class="hs-dark-mode-active:flex hidden hs-dark-mode group flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                   href="javascript:;" data-hs-theme-click-value="light">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-headerprime"
                       enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
                       width="24px" fill="#000000">
                    <rect fill="none" height="24" width="24"></rect>
                    <circle cx="12" cy="12" opacity=".3" r="3"></circle>
                    <path
                        d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z">
                    </path>
                  </svg>
                </a>
              </div>

              <!-- Fullscreen -->
              <div class="header-fullscreen hidden lg:block">
                <a aria-label="anchor" href="javascript:void(0);" @click="openFullscreen"
                   class="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg"
                       class="w-6 h-6 fill-headerprime full-screen-open" height="24px"
                       viewBox="0 0 24 24" width="24px" fill="#000000">
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg"
                       class="w-6 h-6 fill-headerprime full-screen-close hidden"
                       height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path>
                  </svg>
                </a>
              </div>
              <!-- End Fullscreen -->

              <!-- Notifications -->
              <!-- End of Notification -->

              <!-- Profile -->
              <div class="header-profile hs-dropdown ti-dropdown"
                   data-hs-dropdown-placement="bottom-right">
                <button id="dropdown-profile" type="button"
                        class="hs-dropdown-toggle ti-dropdown-toggle gap-2 p-0 flex-shrink-0 h-8 w-8 rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10">
                  <img class="avatar inline-block rounded-full ring-2 ring-white dark:ring-white/10 "
                       style="height: 100%"
                       src="../assets/img/profile.png" alt="Image Description">
                </button>

                <div class="hs-dropdown-menu ti-dropdown-menu border-0 w-[20rem]"
                     aria-labelledby="dropdown-profile">
                  <div class="ti-dropdown-header !bg-primary flex">
                    <div class="ltr:mr-3 rtl:ml-3">
                      <img class="avatar shadow-none rounded-full !ring-transparent"
                           src="../assets/img/profile.png" alt="profile-img">
                    </div>
                    <div>
                      <p class="ti-dropdown-header-title !text-white">{{user.name}}</p>
                    </div>
                  </div>
                  <div class="mt-2 ti-dropdown-divider">
                    <div role="button" @click="onClickLogout" class="ti-dropdown-item">
                      <i class="ti ti-logout  text-lg"></i>
                      Log Out
                    </div>
                  </div>
                </div>
              </div>
              <!-- End of Profile -->

            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import {openFullscreen} from "../assets/tailwind-dashboard/js/custom.js";
import useAuth from "../services/useAuth.js";
import router from "../router/index.js";

const {logout, loading,user} = useAuth();

const onClickLogout = async () => {
  let status = await logout();

}

</script>

<style scoped>

</style>
