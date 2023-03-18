import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@firebaseConfig': fileURLToPath(new URL('./src/utils/firebase.js', import.meta.url)),
            '@scss/': fileURLToPath(new URL('./src/scss/', import.meta.url)),
            '@scss/components/': fileURLToPath(new URL('./src/scss/components/', import.meta.url)),
            '@scss/variables': fileURLToPath(
                new URL('./src/scss/utilities/variables.scss', import.meta.url)
            )
        }
    }
})
