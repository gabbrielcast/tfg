<template>
    <div class="vivienda-card">
        <div class="fotos">
            <div class="arrow arrow-left" @click="clickFlecha('left')">
                <i class="bi bi-arrow-left-circle"></i>
            </div>
            <img :src="img" />

            <div class="arrow arrow-right" @click="clickFlecha('right')">
                <i class="bi bi-arrow-right-circle"></i>
            </div>
        </div>
        <div class="contenido">
            <h3 class="nombre">Tres plantas</h3>
            <h4 class="ubicacion">Valencia</h4>
            <span class="precio">30.3€</span>
            <p class="descripcion">bfdbfddfbfdbfdb</p>
            <div class="interaccion">
                <i
                    :class="favorite ? 'bi bi-suit-heart-fill' : 'bi bi-suit-heart'"
                    @click="toggleFavorite"
                ></i>
                <button>VER</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import '@/scss/components/vivienda.scss'
import { ref, computed } from 'vue'
let vivienda: {
    imgs: Array<{ pos: number; url: string }>
} = {
    imgs: [
        { pos: 0, url: 'src/assets/img/hero.jpg' },
        { pos: 1, url: 'src/assets/img/prueba2.jpg' },
        { pos: 2, url: 'src/assets/img/prueba3.jpg' }
    ]
}
let favorite = ref(false)
let viewImg = ref(1)

let toggleFavorite = () => (favorite.value = !favorite.value)

let img = computed(() => {
    return vivienda.imgs.find((img) => img.pos === viewImg.value)?.url
})

let clickFlecha = (type: string) => {
    if (type === 'left' && viewImg.value > 0) {
        viewImg.value--
    }
    if (type === 'right' && viewImg.value < 2) {
        viewImg.value++
    }
}
</script>

<style scoped></style>
