// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
   runtimeConfig: {
     public: {
      baseURL: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:3001'
    }
   },
})
