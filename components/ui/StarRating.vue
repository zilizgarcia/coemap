<template>
  <div class="flex">
    <StarIcon v-for="n in 5" :key="n"
             :class="[
               n <= normalizedRating ? 'text-yellow-400' : 'text-gray-200',
               `h-${size} w-${size}`
             ]" />
  </div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/24/solid'
import { useRating } from '~/composables/useRating'

const props = defineProps({
  rating: {
    type: Number,
    required: true,
    validator: (value) => useRating(value).validateRating(value)
  },
  size: {
    type: Number,
    default: 5
  }
})

const { normalizedRating } = useRating(props.rating)
</script>