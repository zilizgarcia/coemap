import { connectAuthEmulator } from 'firebase/auth'
import { connectFirestoreEmulator } from 'firebase/firestore'
import { connectStorageEmulator } from 'firebase/storage'
import { auth, db, storage } from './firebase'

export default defineNuxtPlugin(() => {
  if (process.env.NODE_ENV === 'development') {
    // Importante: Conectar los emuladores antes de cualquier operación
    try {
      connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
      connectFirestoreEmulator(db, 'localhost', 8080)
      connectStorageEmulator(storage, 'localhost', 9199)
      console.log('Emuladores conectados correctamente')
    } catch (error) {
      console.error('Error conectando emuladores:', error)
    }
  }
}) 