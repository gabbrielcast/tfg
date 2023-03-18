<template>
    <div class="navbar">
        <i v-if="isMovil" class="bi bi-list"></i>
        <!-- <img src="../assets/img/logo.png" alt="" /> -->

        <div>
            <h1 v-if="isMovil" class="name">BH</h1>
            <h1 v-else class="name">ByHouse</h1>
        </div>

        <div class="btns">
            <button class="navbar-otro">
                <i class="login bi bi-person-add"></i>
                <span>Otro</span>
            </button>
            <button class="navbar-acceder">
                <i class="login bi bi-person-add"></i>
                <span>LogIn</span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

let width = ref(screen.width)

onMounted(() => {
    window.addEventListener('resize', chekIsMobile)
})
let chekIsMobile = () => {
    width.value = screen.width
    return width.value <= 425
}

let isMovil = computed(() => {
    return chekIsMobile()
})
</script>

<style lang="scss" scoped>
@import '@/scss/components/header.scss';
</style>
