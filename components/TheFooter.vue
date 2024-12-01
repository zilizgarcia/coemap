<template>
  <footer class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">About</h3>
          <ul class="mt-4 space-y-4">
            <li><NuxtLink to="/about" class="footer-link">Our Story</NuxtLink></li>
            <li><NuxtLink to="/team" class="footer-link">Team</NuxtLink></li>
            <li><NuxtLink to="/testimonials" class="footer-link">Testimonials</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
          <ul class="mt-4 space-y-4">
            <li><NuxtLink to="/blog" class="footer-link">Blog</NuxtLink></li>
            <li><NuxtLink to="/guides" class="footer-link">Guides</NuxtLink></li>
            <li><NuxtLink to="/faq" class="footer-link">FAQ</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Emergency</h3>
          <ul class="mt-4 space-y-4">
            <li><a href="tel:911" class="footer-link">Emergency: 911</a></li>
            <li><a href="tel:1234567890" class="footer-link">Crisis Hotline</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
          <ul class="mt-4 space-y-4">
            <li><NuxtLink to="/contact" class="footer-link">Contact Us</NuxtLink></li>
            <li><a href="#" class="footer-link">Facebook</a></li>
            <li><a href="#" class="footer-link">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div class="mt-8 border-t border-gray-200 pt-8">
        <p class="text-center text-gray-400">&copy; {{ new Date().getFullYear() }} EmotionalSupport. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  @apply text-base text-gray-500 hover:text-gray-900;
}
</style>