<template>
  <div class="grid grid-cols-1" :class="gridClass">
    <TestimonialCard
      v-for="testimonial in testimonials"
      :key="testimonial.id"
      v-bind="testimonial"
      :class="cardClass"
      :featured="featured"
    />
  </div>
</template>

<script setup lang="ts">
import type { Testimonial } from '~/types/testimonial'

defineProps({
  testimonials: {
    type: Array as () => Testimonial[],
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  gridClass: {
    type: String,
    default: 'md:grid-cols-3 gap-6'
  },
  cardClass: {
    type: String,
    default: 'p-6'
  }
})
</script>