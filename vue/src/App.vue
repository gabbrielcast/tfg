<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/Header.vue"
</script>

<template>
  <Header></Header>
  <RouterView />
</template>

<style lang="scss" scoped>
@import "@/scss/base/base.scss";
@import "@/scss/base/reset.scss";
</style>
