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
    preset: 'netlify',
    static: true,
    prerender: {
      crawlLinks: false,
      routes: ['/']
    }
  },

  build: {
    transpile: ['@heroicons/vue']
  },

  compatibilityDate: '2024-11-30',

  typescript: {
    typeCheck: false,
    shim: false
  },

  routeRules: {
    '/profile/**': { middleware: ['auth'] },
    '/admin/**': { middleware: ['auth'] }
  },

  runtimeConfig: {
    public: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID
    }
  }
})