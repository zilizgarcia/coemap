<template>
  <div class="flex">
    <StarIcon v-for="n in 5" :key="n"
             :class="[
               n <= rating ? 'text-yellow-400' : 'text-gray-200',
               `h-${size} w-${size}`
             ]" />
  </div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/24/solid'

defineProps({
  rating: {
    type: Number,
    required: true,
    validator: (value) => value >= 0 && value <= 5
  },
  size: {
    type: Number,
    default: 5
  }
})
</script>