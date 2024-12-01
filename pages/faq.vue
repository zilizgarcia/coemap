<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>

    <!-- FAQ Categories -->
    <div class="mb-8">
      <div class="flex space-x-4 overflow-x-auto pb-2">
        <button v-for="category in categories" :key="category"
                @click="selectedCategory = category"
                class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap"
                :class="selectedCategory === category ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'">
          {{ category }}
        </button>
      </div>
    </div>

    <!-- FAQ Items -->
    <div class="space-y-4">
      <div v-for="faq in filteredFaqs" :key="faq.id"
           class="bg-white rounded-lg shadow-sm">
        <button @click="faq.isOpen = !faq.isOpen"
                class="w-full px-6 py-4 flex items-center justify-between focus:outline-none">
          <span class="text-lg font-medium text-gray-900">{{ faq.question }}</span>
          <ChevronDownIcon class="h-5 w-5 text-gray-500 transform transition-transform duration-200"
                          :class="{ 'rotate-180': faq.isOpen }" />
        </button>
        <div v-show="faq.isOpen"
             class="px-6 pb-4">
          <p class="text-gray-600">{{ faq.answer }}</p>
        </div>
      </div>
    </div>

    <!-- Still Have Questions -->
    <div class="mt-12 bg-indigo-50 rounded-lg p-8 text-center">
      <h2 class="text-2xl font-bold text-indigo-900 mb-4">Still Have Questions?</h2>
      <p class="text-indigo-700 mb-6">Our support team is here to help you 24/7</p>
      <NuxtLink to="/contact"
                class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
        Contact Us
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'

const selectedCategory = ref('General')
const categories = ['General', 'Services', 'Support', 'Privacy', 'Technical']

const faqs = ref([
  {
    id: 1,
    category: 'General',
    question: 'What is EmotionalSupport?',
    answer: 'EmotionalSupport is a platform dedicated to providing mental health resources, support, and community to help individuals navigate their emotional well-being journey.',
    isOpen: false
  },
  {
    id: 2,
    category: 'Services',
    question: 'Are your services free?',
    answer: 'Many of our resources are free, including basic support groups and educational content. Some specialized services may require a subscription or one-time payment.',
    isOpen: false
  },
  {
    id: 3,
    category: 'Support',
    question: 'How can I get immediate help?',
    answer: 'For immediate support, you can use our 24/7 crisis hotline or chat with a support professional through our platform. In emergencies, always call your local emergency services.',
    isOpen: false
  },
  {
    id: 4,
    category: 'Privacy',
    question: 'How is my information protected?',
    answer: 'We take privacy seriously and follow strict confidentiality protocols. All personal information is encrypted and stored securely following industry best practices.',
    isOpen: false
  },
  {
    id: 5,
    category: 'Technical',
    question: 'What devices can I use to access the platform?',
    answer: 'Our platform is accessible through any modern web browser on desktop or mobile devices. We also offer mobile apps for iOS and Android.',
    isOpen: false
  }
])

const filteredFaqs = computed(() => {
  return faqs.value.filter(faq => faq.category === selectedCategory.value)
})
</script>