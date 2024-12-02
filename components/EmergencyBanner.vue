<template>
  <div v-if="isEmergency" 
       class="fixed bottom-0 left-0 right-0 bg-red-600 text-white p-4 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <div class="flex items-center">
        <ExclamationTriangleIcon class="h-6 w-6 mr-2" />
        <span class="font-medium">Emergency Services Available</span>
      </div>
      <div class="flex space-x-4">
        <a v-for="contact in emergencyContacts"
           :key="contact.number"
           :href="`tel:${contact.number}`"
           class="px-4 py-2 bg-white text-red-600 rounded-md hover:bg-red-50 transition-colors">
          {{ contact.name }}: {{ contact.number }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ExclamationTriangleIcon } from '@heroicons/vue/24/solid'
import { useEmergencyServices } from '~/composables/useEmergencyServices'

const { emergencyContacts, isEmergency } = useEmergencyServices()
</script>