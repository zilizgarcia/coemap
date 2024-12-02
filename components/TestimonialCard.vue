<template>
  <div class="bg-white rounded-lg shadow-sm" :class="{ 'p-8': featured, 'p-6': !featured }">
    <div class="flex items-center" :class="{ 'mb-6': featured, 'mb-4': !featured }">
      <img :src="image" :alt="name"
           :class="[
             'rounded-full object-cover',
             featured ? 'h-12 w-12' : 'h-10 w-10'
           ]">
      <div :class="featured ? 'ml-4' : 'ml-3'">
        <h3 :class="[
          'font-medium text-gray-900',
          featured ? 'text-lg' : 'text-sm'
        ]">{{ name }}</h3>
        <p :class="[
          'text-gray-500',
          featured ? 'text-sm' : 'text-xs'
        ]">{{ location }}</p>
      </div>
    </div>
    <p :class="[
      'text-gray-600',
      featured ? 'mb-4' : 'mb-3',
      featured ? 'text-base' : 'text-sm'
    ]">{{ content }}</p>
    <div class="flex items-center">
      <StarRating :rating="rating" :size="featured ? 5 : 4" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    validator: (value) => value >= 0 && value <= 5
  },
  featured: {
    type: Boolean,
    default: false
  }
})
</script>