<template>
  <div class="relative">
    <img
      v-if="!hasError"
      :src="src"
      :alt="alt"
      :class="[
        'rounded-full object-cover',
        sizeClasses[size],
        { 'opacity-0': !isLoaded }
      ]"
    />
    <div
      v-if="hasError || !isLoaded"
      :class="[
        'rounded-full bg-gray-200 flex items-center justify-center',
        sizeClasses[size]
      ]"
    >
      <UserIcon class="w-1/2 h-1/2 text-gray-400" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserIcon } from '@heroicons/vue/24/solid'
import { useImageLoader } from '~/composables/useImageLoader'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value)
  }
})

const sizeClasses = {
  sm: 'h-10 w-10',
  md: 'h-12 w-12',
  lg: 'h-16 w-16'
}

const { isLoaded, hasError } = useImageLoader(props.src)
</script>