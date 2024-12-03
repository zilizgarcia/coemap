<template>
  <div class="max-w-md mx-auto bg-white rounded-lg shadow-sm p-8">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Registrarse</h2>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Alerta de error o éxito -->
      <div v-if="error" class="bg-red-50 text-red-600 p-4 rounded-md">
        {{ error }}
      </div>
      <div v-if="successMessage" class="bg-green-50 text-green-600 p-4 rounded-md">
        {{ successMessage }}
      </div>

      <!-- Nombre -->
      <div>
        <label for="displayName" class="block text-sm font-medium text-gray-700">
          Nombre completo
        </label>
        <input
          id="displayName"
          v-model="formData.displayName"
          type="text"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        >
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">
          Correo Electrónico
        </label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        >
      </div>

      <!-- Contraseña -->
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          id="password"
          v-model="formData.password"
          type="password"
          required
          minlength="6"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        >
        <p class="mt-1 text-sm text-gray-500">
          La contraseña debe tener al menos 6 caracteres
        </p>
      </div>

      <!-- Confirmar Contraseña -->
      <div>
        <label for="confirmPassword" class="block text-sm font-medium text-gray-700">
          Confirmar Contraseña
        </label>
        <input
          id="confirmPassword"
          v-model="formData.confirmPassword"
          type="password"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        >
      </div>

      <!-- Términos y condiciones -->
      <div class="flex items-center">
        <input
          id="terms"
          v-model="formData.acceptTerms"
          type="checkbox"
          required
          class="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
        >
        <label for="terms" class="ml-2 block text-sm text-gray-900">
          Acepto los <a href="/terms" class="text-primary-600 hover:text-primary-500">términos y condiciones</a>
        </label>
      </div>

      <!-- Botón de envío -->
      <button
        type="submit"
        :disabled="isLoading || !isFormValid"
        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
      >
        <span v-if="isLoading">
          <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            <!-- Ícono de carga -->
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
          </svg>
          Registrando...
        </span>
        <span v-else>Registrarse</span>
      </button>
    </form>

    <!-- Enlace de inicio de sesión -->
    <div class="mt-6 text-center">
      <p class="text-sm text-gray-600">
        ¿Ya tienes una cuenta?
        <NuxtLink to="/auth/login" class="text-primary-600 hover:text-primary-500">
          Inicia sesión aquí
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()

const formData = ref({
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false
})

const error = ref('')
const successMessage = ref('')
const isLoading = ref(false)

const isFormValid = computed(() => {
  return (
    formData.value.displayName.length > 0 &&
    formData.value.email.length > 0 &&
    formData.value.password.length >= 6 &&
    formData.value.password === formData.value.confirmPassword &&
    formData.value.acceptTerms
  )
})

const handleSubmit = async () => {
  if (!isFormValid.value) {
    error.value = 'Por favor, completa todos los campos correctamente'
    return
  }

  try {
    isLoading.value = true
    error.value = ''
    successMessage.value = ''

    const result = await authStore.register(
      formData.value.email,
      formData.value.password,
      formData.value.displayName
    )

    if (result.success) {
      successMessage.value = result.message
      // Esperar 2 segundos antes de redirigir
      setTimeout(() => {
        router.push('/auth/login')
      }, 2000)
    }
  } catch (e: any) {
    error.value = e.message
  } finally {
    isLoading.value = false
  }
}
</script> 