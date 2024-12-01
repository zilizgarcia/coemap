<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-8">Testimonios</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="testimonial in testimonials" 
           :key="testimonial.id" 
           class="bg-white rounded-lg shadow-sm p-6">
        <div class="flex items-center mb-4">
          <img :src="testimonial.image" 
               :alt="testimonial.name"
               class="w-12 h-12 rounded-full object-cover"
               @error="handleImageError">
          <div class="ml-4">
            <h3 class="font-semibold">{{ testimonial.name }}</h3>
            <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
          </div>
        </div>
        <p class="text-gray-600 mb-4">{{ testimonial.content }}</p>
        <div class="flex items-center text-yellow-400">
          <span v-for="n in testimonial.rating" :key="n" class="mr-1">★</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { testimonials } = useTestimonials();

const handleImageError = (e) => {
  e.target.src = '/images/default-avatar.jpg'
}
</script>