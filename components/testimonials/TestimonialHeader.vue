<template>
  <div class="flex items-center" :class="{ 'mb-6': featured, 'mb-4': !featured }">
    <Avatar
      :src="image"
      :alt="name"
      :size="featured ? 'md' : 'sm'"
    />
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
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  featured: { type: Boolean, default: false }
})
</script>