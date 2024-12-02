<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-8">Blog de Salud Mental</h1>
    
    <!-- Introducción -->
    <div class="bg-white rounded-lg shadow-sm p-8 mb-12">
      <h2 class="text-2xl font-semibold mb-4">Recursos y Artículos</h2>
      <p class="text-gray-600">
        Explora nuestros artículos sobre salud mental, bienestar emocional y consejos 
        prácticos para tu día a día. Contenido actualizado semanalmente por profesionales 
        de la salud mental.
      </p>
    </div>

    <!-- Lista de Artículos -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="(post, index) in blogPosts" 
           :key="index" 
           class="bg-white rounded-lg shadow-sm overflow-hidden">
        <div class="aspect-w-16 aspect-h-9">
          <img 
            :src="post.image" 
            :alt="post.title" 
            class="w-full h-48 object-cover"
            @error="handleImageError"
          >
        </div>
        <div class="p-6">
          <div class="flex items-center mb-2">
            <span class="text-sm font-medium text-indigo-600">{{ post.category }}</span>
            <span class="mx-2 text-gray-300">•</span>
            <span class="text-sm text-gray-500">{{ post.date }}</span>
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ post.title }}</h3>
          <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
          <NuxtLink 
            :to="post.link"
            class="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Leer más →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const blogPosts = [
  {
    title: 'Cómo Reducir la Ansiedad en 5 Minutos',
    excerpt: 'Técnicas rápidas y efectivas para manejar momentos de ansiedad en tu día a día.',
    category: 'Ansiedad',
    date: '15 Mar 2024',
    image: '/images/default-post.jpg',
    link: '/blog/reduce-anxiety'
  },
  {
    title: '5 Beneficios del Mindfulness',
    excerpt: 'Descubre cómo la práctica del mindfulness puede mejorar tu bienestar diario.',
    category: 'Mindfulness',
    date: '12 Mar 2024',
    image: '/images/default-post.jpg',
    link: '/blog/mindfulness-benefits'
  },
  {
    title: 'Señales de una Crisis Emocional',
    excerpt: 'Aprende a reconocer las señales tempranas de una crisis emocional.',
    category: 'Salud Mental',
    date: '10 Mar 2024',
    image: '/images/default-post.jpg',
    link: '/blog/crisis-signs'
  }
]

const handleImageError = (e) => {
  e.target.src = '/images/default-post.jpg'
}
</script>