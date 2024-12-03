import { defineStore } from 'pinia'
import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc,
  serverTimestamp 
} from 'firebase/firestore'
import { db } from '~/plugins/firebase'

interface UserProfile {
  uid: string
  email: string
  displayName: string
  createdAt: any
  lastLoginAt: any
  photoURL?: string
  phoneNumber?: string
  preferences?: {
    notifications: boolean
    newsletter: boolean
  }
}

export const useUserStore = defineStore('user', {
  state: () => ({
    profile: null as UserProfile | null,
    loading: false,
    error: null as string | null
  }),

  actions: {
    async createUserProfile(userData: Partial<UserProfile>) {
      try {
        this.loading = true
        const userRef = doc(db, 'users', userData.uid!)
        
        const userProfile = {
          ...userData,
          createdAt: serverTimestamp(),
          lastLoginAt: serverTimestamp(),
          preferences: {
            notifications: true,
            newsletter: true
          }
        }

        await setDoc(userRef, userProfile)
        this.profile = userProfile as UserProfile
      } catch (error: any) {
        this.error = 'Error al crear el perfil de usuario'
        throw new Error(error)
      } finally {
        this.loading = false
      }
    },

    async fetchUserProfile(uid: string) {
      try {
        this.loading = true
        const userRef = doc(db, 'users', uid)
        const userDoc = await getDoc(userRef)

        if (userDoc.exists()) {
          this.profile = userDoc.data() as UserProfile
        } else {
          this.error = 'Perfil de usuario no encontrado'
        }
      } catch (error: any) {
        this.error = 'Error al obtener el perfil de usuario'
        throw new Error(error)
      } finally {
        this.loading = false
      }
    },

    async updateUserProfile(uid: string, data: Partial<UserProfile>) {
      try {
        this.loading = true
        const userRef = doc(db, 'users', uid)
        await updateDoc(userRef, {
          ...data,
          lastLoginAt: serverTimestamp()
        })
        
        // Actualizar el estado local
        if (this.profile) {
          this.profile = {
            ...this.profile,
            ...data
          }
        }
      } catch (error: any) {
        this.error = 'Error al actualizar el perfil de usuario'
        throw new Error(error)
      } finally {
        this.loading = false
      }
    }
  }
}) 