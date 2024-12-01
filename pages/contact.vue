<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-8">Contacto</h1>
    
    <!-- Introducción -->
    <div class="bg-white rounded-lg shadow-sm p-8 mb-12">
      <h2 class="text-2xl font-semibold mb-4">¿Necesitas Ayuda?</h2>
      <p class="text-gray-600">
        Estamos aquí para apoyarte. Si necesitas ayuda profesional o tienes preguntas 
        sobre nuestros servicios, no dudes en contactarnos.
      </p>
      <div class="mt-4 p-4 bg-red-50 rounded-md">
        <p class="text-red-700 font-medium">
          Si estás experimentando una crisis o emergencia, por favor contacta al 911 
          o a tu servicio local de emergencias inmediatamente.
        </p>
      </div>
    </div>

    <!-- Formulario de Contacto -->
    <div class="bg-white rounded-lg shadow-sm p-8">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Nombre Completo
          </label>
          <input 
            v-model="formData.name"
            type="text" 
            required
            class="w-full border rounded-md px-4 py-2"
          >
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Correo Electrónico
          </label>
          <input 
            v-model="formData.email"
            type="email" 
            required
            class="w-full border rounded-md px-4 py-2"
          >
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Asunto
          </label>
          <select 
            v-model="formData.subject"
            class="w-full border rounded-md px-4 py-2"
          >
            <option value="general">Consulta General</option>
            <option value="therapy">Busco Terapia</option>
            <option value="support">Soporte Técnico</option>
            <option value="other">Otro</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Mensaje
          </label>
          <textarea 
            v-model="formData.message"
            rows="6" 
            required
            class="w-full border rounded-md px-4 py-2"
          ></textarea>
        </div>

        <button 
          type="submit"
          class="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: 'general',
  message: ''
})

const handleSubmit = async () => {
  // Aquí iría la lógica para enviar el formulario
  console.log('Formulario enviado:', formData.value)
}
</script>