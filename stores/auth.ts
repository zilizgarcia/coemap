import { defineStore } from 'pinia'
import { useUserStore } from './user'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth'
import { auth } from '~/plugins/firebase'

interface User {
  id: string
  email: string
  name: string
  role: 'user' | 'admin'
}

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null
  }),

  actions: {
    async register(email: string, password: string, displayName?: string) {
      this.loading = true
      this.error = null
      const userStore = useUserStore()
      
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        
        if (displayName) {
          await updateProfile(userCredential.user, { displayName })
        }

        // Crear perfil en Firestore
        await userStore.createUserProfile({
          uid: userCredential.user.uid,
          email: userCredential.user.email!,
          displayName: displayName || email.split('@')[0]
        })
        
        await sendEmailVerification(userCredential.user)
        
        return {
          success: true,
          message: 'Se ha enviado un correo de verificación a tu dirección de email'
        }
      } catch (error: any) {
        console.error('Error de registro:', error)
        this.error = 'Error al registrar el usuario'
        return { success: false, message: this.error }
      } finally {
        this.loading = false
      }
    },

    async login(email: string, password: string) {
      this.loading = true
      this.error = null
      const userStore = useUserStore()
      
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        
        // Actualizar último inicio de sesión
        await userStore.updateUserProfile(userCredential.user.uid, {
          lastLoginAt: new Date()
        })

        // Cargar perfil del usuario
        await userStore.fetchUserProfile(userCredential.user.uid)
        
        return { success: true }
      } catch (error: any) {
        console.error('Error de inicio de sesión:', error)
        this.error = 'Error al iniciar sesión'
        return { success: false, message: this.error }
      } finally {
        this.loading = false
      }
    },

    logout() {
      this.user = null
      this.token = null
      this.isAuthenticated = false
      localStorage.removeItem('auth_token')
    },

    async checkAuth() {
      const token = localStorage.getItem('auth_token')
      if (!token) return false

      try {
        // Verificar token con el backend
        const response = await fetch('/api/auth/verify', {
          headers: { 'Authorization': `Bearer ${token}` }
        })

        if (!response.ok) throw new Error('Token inválido')

        const data = await response.json()
        this.user = data.user
        this.token = token
        this.isAuthenticated = true
        return true
      } catch (error) {
        this.logout()
        return false
      }
    }
  }
}) 