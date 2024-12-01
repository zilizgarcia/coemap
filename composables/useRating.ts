import { computed } from 'vue'

export const useRating = (rating: number) => {
  const validateRating = (value: number) => value >= 0 && value <= 5

  const normalizedRating = computed(() => {
    if (!validateRating(rating)) {
      console.warn('Rating must be between 0 and 5')
      return Math.min(Math.max(rating, 0), 5)
    }
    return rating
  })

  return {
    normalizedRating,
    validateRating
  }
}