export default defineNuxtConfig({
  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  app: {
    head: {
      title: 'Emotional Support Platform',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A platform dedicated to emotional support and mental well-being' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    preset: 'netlify'
  },

  build: {
    transpile: ['@heroicons/vue']
  },

  compatibilityDate: '2024-11-30'
})