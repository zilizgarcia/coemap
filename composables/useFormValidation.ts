import { ref } from 'vue'

export const useFormValidation = () => {
  const errors = ref({})
  
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateRequired = (value: string): boolean => {
    return value.trim().length > 0
  }

  const validateForm = (form: Record<string, any>) => {
    const newErrors: Record<string, string> = {}

    Object.entries(form).forEach(([key, value]) => {
      if (!validateRequired(value)) {
        newErrors[key] = `${key} is required`
      }
      if (key === 'email' && !validateEmail(value)) {
        newErrors[key] = 'Invalid email format'
      }
    })

    errors.value = newErrors
    return Object.keys(newErrors).length === 0
  }

  return {
    errors,
    validateForm
  }
}