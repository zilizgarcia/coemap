<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <section class="mb-16">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 class="text-2xl font-semibold mb-4">Our Mission</h2>
          <p class="text-gray-600 mb-4">
            We are dedicated to providing accessible emotional support and resources to help individuals navigate life's challenges with confidence and resilience.
          </p>
          <h2 class="text-2xl font-semibold mb-4">Our Vision</h2>
          <p class="text-gray-600 mb-4">
            To create a world where everyone has access to the emotional support they need to thrive and live fulfilling lives.
          </p>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-4">Our Values</h2>
          <ul class="space-y-4">
            <li v-for="(value, index) in values" :key="index" class="flex items-start">
              <CheckCircleIcon class="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
              <div>
                <h3 class="font-semibold">{{ value.title }}</h3>
                <p class="text-gray-600">{{ value.description }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(member, index) in team" :key="index" class="bg-white rounded-lg shadow-sm p-6">
          <img 
            :src="member.image" 
            :alt="member.name" 
            class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            @error="handleImageError"
          >
          <h3 class="text-xl font-semibold text-center mb-2">{{ member.name }}</h3>
          <p class="text-gray-600 text-center mb-2">{{ member.role }}</p>
          <p class="text-gray-500 text-center">{{ member.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'

const values = [
  {
    title: 'Compassion',
    description: 'We approach every interaction with empathy and understanding.'
  },
  {
    title: 'Accessibility',
    description: 'Support should be available to everyone, whenever they need it.'
  },
  {
    title: 'Confidentiality',
    description: 'We maintain the highest standards of privacy and trust.'
  }
]

const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Clinical Director',
    description: 'Specialized in trauma-informed care with 15 years of experience.',
    image: '/images/team/sarah.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Support Coordinator',
    description: 'Dedicated to creating meaningful connections and support networks.',
    image: '/images/team/michael.jpg'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Crisis Counselor',
    description: 'Expert in emergency response and immediate intervention.',
    image: '/images/team/emma.jpg'
  }
]

const handleImageError = (e) => {
  e.target.src = '/images/team/default-avatar.jpg'
}
</script>