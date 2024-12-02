import { ref, onMounted } from 'vue'

export const useImageLoader = (src: string) => {
  const isLoaded = ref(false)
  const hasError = ref(false)

  onMounted(() => {
    const img = new Image()
    img.onload = () => {
      isLoaded.value = true
    }
    img.onerror = () => {
      hasError.value = true
    }
    img.src = src
  })

  return {
    isLoaded,
    hasError
  }
}