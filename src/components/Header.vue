<template>
    <div class="navbar">
        <i v-if="isMovil" class="bi bi-list"></i>
        <!-- <img src="../assets/img/logo.png" alt="" /> -->

        <div>
            <h1 v-if="isMovil" class="name">BH</h1>
            <h1 v-else class="name">ByHouse</h1>
        </div>

        <div class="btns">
            <button class="boton-nav boton-nav--secundario">
                <i class="login bi bi-person-add"></i>
                <span>Otro</span>
            </button>
            <button class="boton-nav">
                <i class="login bi bi-person-add"></i>
                <span>LogIn</span>
            </button>
        </div>
    </div>
    <div class="hero"></div>
    <div class="search">
        <div class="search-info">
            <h2>Encuentra Tu Sitio</h2>
            <ul class="search-lista">
                <li>Comprar</li>
                <li>Alquilar</li>
                <li>Todas</li>
            </ul>
        </div>
        <div class="inputs">
            <select name="" id="">
                <option value="vivienda">Vivienda</option>
                <option value="vivienda">Habitación</option>
                <option value="vivienda">Oficina</option>
            </select>

            <button class="boton boton-search">
                <span>Buscar</span>
                <i class="bi bi-search"></i>
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
// @import '@/scss/components/boton.scss';
</style>
