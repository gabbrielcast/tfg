<template>
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

<script setup></script>

<style lang="scss" scoped>
@import '@/scss/components/search.scss';
</style>
