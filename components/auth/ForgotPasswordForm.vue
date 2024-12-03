<template>
  <div class="max-w-md mx-auto bg-white rounded-lg shadow-sm p-8">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Recuperar Contraseña</h2>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Alerta de error o éxito -->
      <div v-if="error" class="bg-red-50 text-red-600 p-4 rounded-md">
        {{ error }}
      </div>
      <div v-if="successMessage" class="bg-green-50 text-green-600 p-4 rounded-md">
        {{ successMessage }}
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">
          Correo Electrónico
        </label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          placeholder="Ingresa tu correo electrónico"
        >
      </div>

      <!-- Botón de envío -->
      <button
        type="submit"
        :disabled="isLoading || !email"
        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
      >
        <span v-if="isLoading">
          <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
          </svg>
          Enviando...
        </span>
        <span v-else>Enviar instrucciones</span>
      </button>
    </form>

    <!-- Enlaces de navegación -->
    <div class="mt-6 text-center space-y-2">
      <p class="text-sm text-gray-600">
        ¿Recordaste tu contraseña?
        <NuxtLink to="/auth/login" class="text-primary-600 hover:text-primary-500">
          Iniciar sesión
        </NuxtLink>
      </p>
      <p class="text-sm text-gray-600">
        ¿No tienes una cuenta?
        <NuxtLink to="/auth/register" class="text-primary-600 hover:text-primary-500">
          Regístrate aquí
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const error = ref('')
const successMessage = ref('')
const isLoading = ref(false)

const handleSubmit = async () => {
  try {
    isLoading.value = true
    // Aquí puedes agregar la lógica para enviar el correo de recuperación
  } catch (error) {
    console.error('Error al enviar el correo de recuperación:', error)
  } finally {
    isLoading.value = false
  }
}
</script> 