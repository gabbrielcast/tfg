<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import { onMounted, defineComponent } from 'vue'
import { DB } from '@firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

// onMounted(async () => {
//     const querySnapshot = await getDocs(collection(DB, 'vivienda'))
//     querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, ' => ', doc.data())
//     })
// })
</script>

<template>
    <Header></Header>
    <RouterView />
</template>

<style lang="scss" scoped>
@import '@/scss/base/base.scss';
@import '@/scss/base/reset.scss';
</style>
