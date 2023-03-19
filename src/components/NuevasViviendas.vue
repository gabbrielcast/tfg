<template>
    <div class="l-grid l-grid--area-cards l-grid--place-center">
        <Vivienda></Vivienda>
        <Vivienda></Vivienda>
        <Vivienda></Vivienda>
        <Vivienda></Vivienda>
    </div>
</template>

<script setup>
import Vivienda from '@components/Vivienda.vue'
</script>

<style lang="scss" scoped>
@import url('@/scss/layout/l-grid.scss');
</style>
