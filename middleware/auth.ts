import { auth } from '~/plugins/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore()
  
  if (to.meta.requiresAuth) {
    const user = await new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        resolve(user)
      })
    })
    
    if (!user) {
      return navigateTo('/auth/login', {
        query: { redirect: to.fullPath }
      })
    }
  }
}) 