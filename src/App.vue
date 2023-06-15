<template>
  <!-- If user authenticated give it permission to access to dashboard --->
  <AppLayout v-if="isLoggedIn && !loading"/>

  <!-- Else show auth page -->
  <Authentication v-if="!isLoggedIn && !loading"/>

</template>

<script setup>
import AppLayout from "./layouts/AppLayout.vue";
import useAuth from "./services/useAuth.js";
import {computed, onMounted} from "vue";
import Authentication from "./pages/auth/Authentication.vue";

const {fetchProfile, user, loading} = useAuth();

const isLoggedIn = computed(() => !!user.value);

onMounted(() => {
  // Get authenticated user using their token if exists
  fetchProfile();
});

</script>

<style scoped>

</style>
