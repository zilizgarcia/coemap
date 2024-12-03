<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img src="/images/loggo.png" alt="COEMAP" class="mx-auto h-12 w-auto">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Inicia sesión en tu cuenta
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <LoginForm />
    </div>
  </div>
</template>

<script setup>
import LoginForm from '~/components/auth/LoginForm.vue'
</script> 