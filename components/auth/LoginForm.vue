<template>
  <div class="max-w-md mx-auto bg-white rounded-lg shadow-sm p-8">
    <div class="text-center mb-8">
      <img src="/img/logo.png" alt="COEMAP" class="mx-auto h-16 mb-4" />
      <h2 class="text-2xl font-bold text-gray-900">Inicia sesión en tu cuenta</h2>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">
          Correo electrónico
        </label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
          placeholder="tu@ejemplo.com"
        />
      </div>

      <!-- Password -->
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          id="password"
          v-model="password"
          type="password"
          required
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
          placeholder="••••••••"
        />
      </div>

      <!-- Remember me & Forgot password -->
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input
            id="remember-me"
            v-model="rememberMe"
            type="checkbox"
            class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          />
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">
            Recordarme
          </label>
        </div>

        <NuxtLink
          to="/auth/forgot-password"
          class="text-sm font-medium text-primary-600 hover:text-primary-500"
        >
          ¿Olvidaste tu contraseña?
        </NuxtLink>
      </div>

      <!-- Submit button -->
      <button
        type="submit"
        :disabled="loading"
        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >
        {{ loading ? 'Iniciando sesión...' : 'Iniciar sesión' }}
      </button>

      <!-- Register link -->
      <p class="text-center text-sm text-gray-600">
        ¿No tienes una cuenta?
        <NuxtLink
          to="/auth/register"
          class="font-medium text-primary-600 hover:text-primary-500"
        >
          Regístrate aquí
        </NuxtLink>
      </p>
    </form>
  </div>
</template>

<script setup>
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const loading = ref(false)
const { signIn } = useAuthStore()

const handleSubmit = async () => {
  loading.value = true
  try {
    await signIn(email.value, password.value)
    // Redirigir después del login exitoso
    navigateTo('/profile')
  } catch (error) {
    console.error('Error de inicio de sesión:', error)
    // Aquí puedes mostrar un mensaje de error al usuario
  } finally {
    loading.value = false
  }
}
</script> 