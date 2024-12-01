<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-8">Recursos de Apoyo Emocional</h1>
    
    <!-- Introducción -->
    <div class="bg-white rounded-lg shadow-sm p-8 mb-12">
      <h2 class="text-2xl font-semibold mb-4">Encuentra las Herramientas que Necesitas</h2>
      <p class="text-gray-600">
        Explora nuestra colección de recursos diseñados para ayudarte a manejar la ansiedad, 
        el estrés y otros aspectos emocionales. Cada sección ofrece herramientas prácticas 
        y guías para mejorar tu bienestar emocional.
      </p>
    </div>

    <!-- Categorías de Recursos -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="(resource, index) in resources" 
           :key="index" 
           class="bg-white rounded-lg shadow-sm overflow-hidden">
        <div class="aspect-w-16 aspect-h-9">
          <img 
            :src="resource.image" 
            :alt="resource.title" 
            class="object-cover"
            @error="handleImageError"
          >
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mt-2">{{ resource.title }}</h3>
          <p class="mt-2 text-gray-600">{{ resource.description }}</p>
          <NuxtLink 
            :to="resource.link"
            class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Explorar
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const resources = [
  {
    title: 'Manejo de Ansiedad',
    description: 'Técnicas y recursos para manejar la ansiedad y encontrar calma en momentos difíciles.',
    link: '/resources/anxiety',
    image: '/images/resources/anxiety.jpg'
  },
  {
    title: 'Meditación Guiada',
    description: 'Sesiones de meditación para ayudarte a relajarte y encontrar paz interior.',
    link: '/resources/meditation',
    image: '/images/resources/meditation.jpg'
  },
  {
    title: 'Ejercicios de Respiración',
    description: 'Aprende técnicas de respiración para reducir el estrés y la ansiedad.',
    link: '/resources/breathing',
    image: '/images/resources/breathing.jpg'
  },
  {
    title: 'Diario Emocional',
    description: 'Registra y reflexiona sobre tus emociones diarias.',
    link: '/resources/journal',
    image: '/images/resources/journal.jpg'
  },
  {
    title: 'Apoyo en Crisis',
    description: 'Recursos y líneas de ayuda disponibles 24/7 para momentos difíciles.',
    link: '/resources/crisis',
    image: '/images/resources/crisis.jpg'
  },
  {
    title: 'Encuentra un Terapeuta',
    description: 'Conecta con profesionales de salud mental verificados.',
    link: '/resources/therapists',
    image: '/images/resources/therapists.jpg'
  }
]

const handleImageError = (e) => {
  e.target.src = '/images/resources/default.jpg'
}
</script>