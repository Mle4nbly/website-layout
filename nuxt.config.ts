// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  app: {
    baseURL: './'
  },

  ssr: false,

  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/', '/specialists']
    }
  }
})