import { ref } from 'vue'

export const useEmergencyServices = () => {
  const emergencyContacts = ref([
    { name: 'Emergency Services', number: '911' },
    { name: 'Crisis Hotline', number: '1-800-273-8255' },
    { name: 'Support Text Line', number: '741741' }
  ])

  const isEmergency = ref(false)
  
  const toggleEmergencyMode = () => {
    isEmergency.value = !isEmergency.value
  }

  return {
    emergencyContacts,
    isEmergency,
    toggleEmergencyMode
  }
}