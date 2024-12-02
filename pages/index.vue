<template>
  <div>
    <!-- Sección Hero -->
    <section class="relative bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block">Apoyo emocional en</span>
                <span class="block text-indigo-600">momentos difíciles</span>
              </h1>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Bienvenidos al Centro de Orientación y Empoderamiento para Mujeres Afectadas por la Violencia (COEMAV). 
                Aquí encontrarás un espacio seguro y profesional dedicado a ofrecer apoyo emocional, psicológico y social 
                para superar las heridas del abuso y empoderarte en cada paso de tu recuperación. Creemos en tu fortaleza 
                y trabajamos contigo para transformar el dolor en esperanza, construyendo juntos un camino hacia la 
                sanación y una vida plena. Tu bienestar es nuestra prioridad.
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <NuxtLink to="/resources" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Explorar recursos
                  </NuxtLink>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <NuxtLink to="/contact" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    Contactar profesional
                  </NuxtLink>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>

    <!-- Recursos Principales -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">Recursos de Apoyo</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="resource in mainResources" 
             :key="resource.title" 
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
  </div>
</template>

<script setup>
const mainResources = [
  {
    title: 'Manejo de Ansiedad',
    description: 'Aprende técnicas efectivas para manejar la ansiedad y encontrar calma en momentos difíciles.',
    link: '/resources/anxiety',
    image: '/images/resources/anxiety.jpg'
  },
  {
    title: 'Meditación Guiada',
    description: 'Accede a sesiones de meditación que te ayudarán a encontrar paz y tranquilidad interior.',
    link: '/resources/meditation',
    image: '/images/resources/meditation.jpg'
  },
  {
    title: 'Apoyo en Crisis',
    description: 'Encuentra ayuda inmediata y recursos de apoyo disponibles 24/7.',
    link: '/resources/crisis',
    image: '/images/resources/crisis.jpg'
  }
]

const handleImageError = (e) => {
  e.target.src = '/images/resources/default.jpg'
}
</script>