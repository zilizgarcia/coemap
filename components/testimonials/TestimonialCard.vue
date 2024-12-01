<template>
  <div class="bg-white rounded-lg shadow-sm" :class="{ 'p-8': featured, 'p-6': !featured }">
    <TestimonialHeader
      :name="name"
      :location="location"
      :image="image"
      :featured="featured"
    />
    <p :class="[
      'text-gray-600',
      featured ? 'mb-4 text-base' : 'mb-3 text-sm'
    ]">{{ content }}</p>
    <StarRating :rating="rating" :size="featured ? 5 : 4" />
  </div>
</template>

<script setup>
import { useRating } from '~/composables/useRating'

const props = defineProps({
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
    validator: (value) => useRating(value).validateRating(value)
  },
  featured: {
    type: Boolean,
    default: false
  }
})
</script>