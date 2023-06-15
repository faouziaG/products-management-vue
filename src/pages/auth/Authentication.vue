<template>
  <div class="authentication-page">
    <main id="content" class="w-full max-w-md mx-auto p-6">

      <!--Login window-->
      <div v-if="window==='login'" class="mt-7 bg-white rounded-sm shadow-sm dark:bg-bgdark">
        <div class="p-4 sm:p-7">
          <div class="text-center">
            <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Log in</h1>
            <p class="mt-3 text-sm text-gray-600 dark:text-white/70">
              Don't have an account?
              <span role="button" @click="window = 'register'"
                    class="text-primary decoration-2 hover:underline font-medium"
                    href="signup.html">
                Sign up here
              </span>
            </p>
          </div>

          <div class="mt-5">

            <!-- Form -->
            <div>
              <div class="grid gap-y-4">
                <!-- Form Group -->
                <div>
                  <label for="email" class="block text-sm mb-2 dark:text-white">Email</label>
                  <div class="relative">
                    <input type="email" id="email" name="email" v-model="userAuth.email"
                           :class="{'border-red-500' : errors.email}"
                           class="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                           required>

                    <div v-if="errors.email" class="invalid">
                            <span v-for="msg in errors.email" class="dobError text-red-500 text-xs hidden"
                                  style="display: block;">
                              {{ msg }}
                            </span>
                    </div>
                  </div>
                </div>
                <!-- End Form Group -->

                <!-- Form Group -->
                <div>
                  <div class="relative">
                    <input type="password" id="password" name="password"
                           :class="{'border-red-500' : errors.password}"
                           v-model="userAuth.password"
                           class="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                           required>

                    <div v-if="errors.password" class="invalid">
                            <span v-for="msg in errors.password" class="dobError text-red-500 text-xs hidden"
                                  style="display: block;">
                              {{ msg }}
                            </span>
                    </div>
                  </div>
                </div>
                <!-- End Form Group -->

                <div v-if="!loading" @click="onClickLogin"
                     class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10">
                  Log in
                </div>
                <div v-else
                     class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10">
                  <div class="ti ti-spinner ti-spin"></div>
                  Log in
                </div>
              </div>
            </div>
            <!-- End Form -->
          </div>
        </div>
      </div>


      <!--Register window-->
      <div v-else class="mt-7 bg-white rounded-sm shadow-sm dark:bg-bgdark">
        <div class="p-4 sm:p-7">
          <div class="text-center">
            <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Sign Up</h1>
            <p class="mt-3 text-sm text-gray-600 dark:text-white/70">
              have an account?
              <span role="button" @click="window = 'login'"
                    class="text-primary decoration-2 hover:underline font-medium"
                    href="signup.html">
                Sign in
              </span>
            </p>
          </div>

          <div class="mt-5">

            <!-- Form -->
            <div>
              <div class="grid gap-y-4">

                <!-- Form Group -->
                <div>
                  <label for="email" class="block text-sm mb-2 dark:text-white">Name</label>
                  <div class="relative">
                    <input type="email" id="email" name="email"
                           :class="{'border-red-500' : errors.name}"
                           v-model="userAuth.name"
                           class="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                           required>
                    <div v-if="errors.name" class="invalid">
                            <span v-for="msg in errors.name" class="dobError text-red-500 text-xs hidden"
                                  style="display: block;">
                              {{ msg }}
                            </span>
                    </div>
                  </div>
                </div>
                <!-- End Form Group -->

                <!-- Form Group -->
                <div>
                  <label for="email" class="block text-sm mb-2 dark:text-white">Email</label>
                  <div class="relative">
                    <input type="email" id="email" name="email" v-model="userAuth.email"
                           :class="{'border-red-500' : errors.email}"
                           class="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                           required>

                    <div v-if="errors.email" class="invalid">
                            <span v-for="msg in errors.email" class="dobError text-red-500 text-xs hidden"
                                  style="display: block;">
                              {{ msg }}
                            </span>
                    </div>
                  </div>

                </div>
                <!-- End Form Group -->

                <!-- Form Group -->
                <div>
                  <div class="relative">
                    <input type="password" id="password" name="password"
                           :class="{'border-red-500' : errors.password}"
                           v-model="userAuth.password"
                           class="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                           required>
                    <div v-if="errors.password" class="invalid">
                            <span v-for="msg in errors.password" class="dobError text-red-500 text-xs hidden"
                                  style="display: block;">
                              {{ msg }}
                            </span>
                    </div>
                  </div>
                </div>
                <!-- End Form Group -->

                <!-- Form Group -->
                <div>
                  <div class="relative">
                    <input type="password" id="password" name="password"
                           :class="{'border-red-500' : errors.password_confirmation}"
                           v-model="userAuth.password_confirmation"
                           class="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                           required>
                    <div v-if="errors.password_confirmation" class="invalid">
                            <span v-for="msg in errors.password_confirmation"
                                  class="dobError text-red-500 text-xs hidden" style="display: block;">
                              {{ msg }}
                            </span>
                    </div>
                  </div>
                </div>
                <!-- End Form Group -->

                <div v-if="!loading" @click="onClickRegister"
                     class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10">
                  Log in
                </div>
                <div v-else
                     class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10">
                  <div class="ti ti-spinner ti-spin"></div>
                  Log in
                </div>
              </div>
            </div>
            <!-- End Form -->
          </div>
        </div>
      </div>

    </main>

  </div>

</template>

<script setup>
import '../../assets/tailwind-dashboard/libs/@popperjs/core/umd/popper.min.js'
import '../../assets/tailwind-dashboard/libs/simplebar/simplebar.min.js'
import '../../assets/tailwind-dashboard/js/custom-switcher.js'
import '../../assets/tailwind-dashboard/libs/preline/preline.js'
import useAuth from "../../services/useAuth.js";
import {ref} from "vue";
import router from "../../router/index.js";

// use authentication compostable
const {login, register, loading, errors} = useAuth();

// store the user properties her for login or register
const userAuth = ref({})

// selected window by default login
const window = ref("login")

const onClickLogin = () => {
  login(userAuth.value.email, userAuth.value.password)
}

const onClickRegister = async () => {
  let status = await register(userAuth.value.name, userAuth.value.email, userAuth.value.password, userAuth.value.password_confirmation)
  if (status) {
    await router.replace({name: "product"})
  }
}


</script>

<style>
@import '../../assets/tailwind-dashboard/css/style.css';
@import '../../assets/tailwind-dashboard/libs/simplebar/simplebar.min.css';
@import '../../assets/tailwind-dashboard/libs/@simonwep/pickr/themes/nano.min.css';

</style>
