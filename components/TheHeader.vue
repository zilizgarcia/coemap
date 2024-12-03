<template>
  <header class="bg-white shadow-sm">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <NuxtLink to="/" class="flex items-center">
            <span class="text-xl font-bold text-indigo-600">EmotionalSupport</span>
          </NuxtLink>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NuxtLink v-for="link in navigationLinks" 
                      :key="link.path"
                      :to="link.path" 
                      class="nav-link"
                      active-class="text-gray-900 border-indigo-500">
              {{ link.name }}
            </NuxtLink>
          </div>
        </div>
        <div class="flex items-center">
          <button @click="toggleEmergencyMode" 
                  class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
            Emergency Help
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useEmergencyServices } from '~/composables/useEmergencyServices'
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useRouter } from 'vue-router'

const { toggleEmergencyMode } = useEmergencyServices()
const authStore = useAuthStore()
const isMenuOpen = ref(false)

const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Resources', path: '/resources' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
]

const handleLogout = async () => {
  authStore.logout()
  router.push('/')
}
</script>

<style scoped>
.nav-link {
  @apply inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent;
}
</style>