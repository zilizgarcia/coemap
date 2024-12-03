<template>
  <div class="min-h-screen bg-primary-100 font-sans">
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <NuxtLink to="/" class="flex items-center">
              <img src="/images/loggo.png" alt="COEMAP" class="h-12">
            </NuxtLink>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NuxtLink to="/" class="nav-link">Inicio</NuxtLink>
            <NuxtLink to="/about" class="nav-link">Acerca de nosotros</NuxtLink>
            <NuxtLink to="/resources" class="nav-link">Recursos</NuxtLink>
            <NuxtLink to="/testimonials" class="nav-link">Testimonios</NuxtLink>
            <NuxtLink to="/contact" class="nav-link">Contacto</NuxtLink>
            
            <!-- Botón condicional basado en el estado de autenticación -->
            <template v-if="authStore.isAuthenticated">
              <div class="relative">
                <NuxtLink to="/profile" class="nav-link flex items-center">
                  <span>Mi Perfil</span>
                </NuxtLink>
                <button @click="handleLogout" class="nav-link text-red-600 hover:text-red-500">
                  Cerrar Sesión
                </button>
              </div>
            </template>
            <template v-else>
              <NuxtLink to="/auth/login" class="nav-link flex items-center">
                <span>Iniciar Sesión</span>
              </NuxtLink>
            </template>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <NuxtPage />
    </main>

    <footer class="bg-primary-600 text-white mt-12">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4 text-primary-100">Contacto de Emergencia</h3>
            <p>Línea de Ayuda 24/7: 01800-56-7958</p>
            <p>WhatsApp: +52 4402346810</p>
            <p>Email: zilizgarcia@gmail.com</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4 text-primary-100">Enlaces Rápidos</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/resources" class="hover:text-accent-200">Recursos de Ayuda</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/blog" class="hover:text-accent-200">Blog de Bienestar</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/faq" class="hover:text-accent-200">Preguntas Frecuentes</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/testimonials" class="hover:text-accent-200">Testimonios</NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4 text-primary-100">Síguenos</h3>
            <div class="flex flex-col space-y-2">
              <a href="https://twitter.com/soporteemocional" class="hover:text-accent-200">Twitter</a>
              <a href="https://facebook.com/soporteemocional" class="hover:text-accent-200">Facebook</a>
              <a href="https://instagram.com/soporteemocional" class="hover:text-accent-200">Instagram</a>
              <p class="mt-4 text-sm text-primary-200">Horario de atención:<br />Lunes a Domingo 8:00 - 22:00</p>
            </div>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-primary-400 text-center text-sm text-primary-200">
          <p>© 2024 COEMAP. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const handleLogout = async () => {
  await authStore.logout()
  router.push('/')
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

.nav-link {
  @apply inline-flex items-center px-1 pt-1 text-sm font-medium text-primary-600 hover:text-primary-500 transition-colors duration-200;
}
</style>