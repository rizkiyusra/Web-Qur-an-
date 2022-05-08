<template>
  <TopbarView />
  <RouterView />
  <FooterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import FooterView from "./views/FooterView.vue";
import TopbarView from "./views/TopbarView.vue";
</script>
