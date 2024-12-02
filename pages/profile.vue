<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="flex flex-col md:flex-row gap-8">
      <!-- Sidebar de navegación -->
      <div class="w-full md:w-64 bg-white rounded-lg shadow-sm p-6">
        <div class="flex items-center space-x-4 mb-6">
          <img 
            :src="userProfile.avatar || '/images/default-avatar.jpg'" 
            alt="Foto de perfil"
            class="w-16 h-16 rounded-full object-cover"
          >
          <div>
            <h2 class="text-lg font-semibold text-primary-600">{{ userProfile.name }}</h2>
            <p class="text-sm text-gray-500">{{ userProfile.email }}</p>
          </div>
        </div>
        <nav class="space-y-2">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'w-full text-left px-4 py-2 rounded-lg transition-colors duration-200',
              activeTab === tab.id 
                ? 'bg-primary-500 text-white' 
                : 'text-primary-600 hover:bg-primary-50'
            ]"
          >
            {{ tab.name }}
          </button>
        </nav>
      </div>

      <!-- Contenido principal -->
      <div class="flex-1">
        <!-- Datos del perfil -->
        <div v-if="activeTab === 'profile'" class="bg-white rounded-lg shadow-sm p-6">
          <h3 class="text-xl font-semibold mb-6">Datos Personales</h3>
          <form @submit.prevent="updateProfile" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                <input 
                  v-model="userProfile.name" 
                  type="text" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  v-model="userProfile.email" 
                  type="email" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                <input 
                  v-model="userProfile.phone" 
                  type="tel" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Fecha de Nacimiento</label>
                <input 
                  v-model="userProfile.birthdate" 
                  type="date" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
              </div>
            </div>
            <button 
              type="submit"
              class="w-full md:w-auto px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Guardar Cambios
            </button>
          </form>
        </div>

        <!-- Gestión de Citas -->
        <div v-if="activeTab === 'appointments'" class="space-y-6">
          <!-- Agendar nueva cita -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h3 class="text-xl font-semibold mb-6">Agendar Nueva Cita</h3>
            <form @submit.prevent="scheduleAppointment" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Especialista</label>
                  <select 
                    v-model="newAppointment.specialist"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option v-for="specialist in specialists" :key="specialist.id" :value="specialist.id">
                      {{ specialist.name }} - {{ specialist.specialty }}
                    </option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Fecha</label>
                  <input 
                    v-model="newAppointment.date"
                    type="date" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Hora</label>
                  <select 
                    v-model="newAppointment.time"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option v-for="time in availableTimes" :key="time" :value="time">
                      {{ time }}
                    </option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Tipo de Consulta</label>
                  <select 
                    v-model="newAppointment.type"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="first">Primera Consulta</option>
                    <option value="followup">Seguimiento</option>
                    <option value="emergency">Emergencia</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Notas Adicionales</label>
                <textarea 
                  v-model="newAppointment.notes"
                  rows="3"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                ></textarea>
              </div>
              <button 
                type="submit"
                class="w-full md:w-auto px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Agendar Cita
              </button>
            </form>
          </div>

          <!-- Citas Programadas -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h3 class="text-xl font-semibold mb-6">Citas Programadas</h3>
            <div class="space-y-4">
              <div 
                v-for="appointment in appointments" 
                :key="appointment.id"
                class="border border-gray-200 rounded-lg p-4"
              >
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-semibold text-primary-600">
                      {{ appointment.specialist.name }} - {{ appointment.specialist.specialty }}
                    </h4>
                    <p class="text-sm text-gray-600">
                      {{ formatDate(appointment.date) }} a las {{ appointment.time }}
                    </p>
                    <p class="text-sm text-gray-500 mt-2">
                      {{ appointment.notes }}
                    </p>
                  </div>
                  <div class="flex space-x-2">
                    <button 
                      @click="rescheduleAppointment(appointment)"
                      class="px-3 py-1 text-sm text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                    >
                      Reagendar
                    </button>
                    <button 
                      @click="cancelAppointment(appointment.id)"
                      class="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Historial de Citas -->
        <div v-if="activeTab === 'history'" class="bg-white rounded-lg shadow-sm p-6">
          <h3 class="text-xl font-semibold mb-6">Historial de Citas</h3>
          <div class="space-y-4">
            <div 
              v-for="appointment in appointmentHistory" 
              :key="appointment.id"
              class="border border-gray-200 rounded-lg p-4"
            >
              <div class="flex justify-between items-start">
                <div>
                  <h4 class="font-semibold text-gray-600">
                    {{ appointment.specialist.name }} - {{ appointment.specialist.specialty }}
                  </h4>
                  <p class="text-sm text-gray-500">
                    {{ formatDate(appointment.date) }} a las {{ appointment.time }}
                  </p>
                  <p class="text-sm text-gray-500 mt-2">
                    {{ appointment.notes }}
                  </p>
                  <p class="text-sm font-medium mt-2" :class="getStatusColor(appointment.status)">
                    {{ getStatusText(appointment.status) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Nueva sección: Gestión de Blog -->
        <div v-if="activeTab === 'blog'" class="space-y-6">
          <!-- Mis Publicaciones -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-xl font-semibold">Mis Publicaciones</h3>
              <button 
                @click="showNewPostForm = true"
                class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Nueva Publicación
              </button>
            </div>
            
            <!-- Lista de publicaciones -->
            <div class="space-y-4">
              <div 
                v-for="post in userPosts" 
                :key="post.id"
                class="border border-gray-200 rounded-lg p-4"
              >
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-semibold text-primary-600">{{ post.title }}</h4>
                    <p class="text-sm text-gray-500">
                      Publicado el {{ formatDate(post.date) }}
                    </p>
                    <p class="text-sm text-gray-600 mt-2">{{ post.excerpt }}</p>
                    <div class="flex items-center space-x-4 mt-2">
                      <span class="text-sm text-gray-500">
                        {{ post.views }} visualizaciones
                      </span>
                      <span class="text-sm text-gray-500">
                        {{ post.comments }} comentarios
                      </span>
                    </div>
                  </div>
                  <div class="flex space-x-2">
                    <button 
                      @click="editPost(post)"
                      class="px-3 py-1 text-sm text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                    >
                      Editar
                    </button>
                    <button 
                      @click="deletePost(post.id)"
                      class="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mis Comentarios -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h3 class="text-xl font-semibold mb-6">Mis Comentarios</h3>
            <div class="space-y-4">
              <div 
                v-for="comment in userComments" 
                :key="comment.id"
                class="border border-gray-200 rounded-lg p-4"
              >
                <div class="flex justify-between items-start">
                  <div>
                    <div class="flex items-center space-x-2">
                      <h4 class="font-semibold text-primary-600">
                        En respuesta a: {{ comment.postTitle }}
                      </h4>
                      <NuxtLink 
                        :to="'/blog/' + comment.postSlug"
                        class="text-sm text-primary-500 hover:text-primary-600"
                      >
                        Ver post
                      </NuxtLink>
                    </div>
                    <p class="text-sm text-gray-500">
                      Comentado el {{ formatDate(comment.date) }}
                    </p>
                    <p class="text-sm text-gray-600 mt-2">{{ comment.content }}</p>
                  </div>
                  <div class="flex space-x-2">
                    <button 
                      @click="editComment(comment)"
                      class="px-3 py-1 text-sm text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                    >
                      Editar
                    </button>
                    <button 
                      @click="deleteComment(comment.id)"
                      class="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para nueva publicación -->
    <div v-if="showNewPostForm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg max-w-2xl w-full p-6">
        <h3 class="text-xl font-semibold mb-6">Nueva Publicación</h3>
        <form @submit.prevent="submitPost" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Título</label>
            <input 
              v-model="newPost.title"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Contenido</label>
            <textarea 
              v-model="newPost.content"
              rows="6"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            ></textarea>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Categorías</label>
            <select 
              v-model="newPost.category"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="mental-health">Salud Mental</option>
              <option value="wellness">Bienestar</option>
              <option value="self-care">Autocuidado</option>
              <option value="mindfulness">Mindfulness</option>
            </select>
          </div>
          <div class="flex justify-end space-x-4 mt-6">
            <button 
              type="button"
              @click="showNewPostForm = false"
              class="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancelar
            </button>
            <button 
              type="submit"
              class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Publicar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const activeTab = ref('profile')
const showNewPostForm = ref(false)

const tabs = [
  { id: 'profile', name: 'Datos Personales' },
  { id: 'appointments', name: 'Gestionar Citas' },
  { id: 'history', name: 'Historial de Citas' },
  { id: 'blog', name: 'Mis Publicaciones' }
]

// Datos de ejemplo
const userProfile = ref({
  name: 'Usuario de Ejemplo',
  email: 'usuario@ejemplo.com',
  phone: '123-456-7890',
  birthdate: '1990-01-01',
  avatar: null
})

const specialists = ref([
  { id: 1, name: 'Dra. Ana López', specialty: 'Psicóloga' },
  { id: 2, name: 'Dr. Carlos Ruiz', specialty: 'Psiquiatra' },
  { id: 3, name: 'Dra. María Sánchez', specialty: 'Terapeuta' }
])

const availableTimes = [
  '09:00', '10:00', '11:00', '12:00', '16:00', '17:00', '18:00'
]

const newAppointment = ref({
  specialist: '',
  date: '',
  time: '',
  type: '',
  notes: ''
})

const appointments = ref([
  {
    id: 1,
    specialist: { name: 'Dra. Ana López', specialty: 'Psicóloga' },
    date: '2024-03-20',
    time: '10:00',
    notes: 'Primera consulta'
  }
])

const appointmentHistory = ref([
  {
    id: 1,
    specialist: { name: 'Dr. Carlos Ruiz', specialty: 'Psiquiatra' },
    date: '2024-02-15',
    time: '11:00',
    notes: 'Seguimiento mensual',
    status: 'completed'
  }
])

// Datos de ejemplo para el blog
const userPosts = ref([
  {
    id: 1,
    title: 'Mi experiencia con la meditación',
    date: '2024-03-15',
    excerpt: 'Compartiendo mi viaje personal con la práctica de la meditación...',
    views: 156,
    comments: 12
  },
  {
    id: 2,
    title: 'Técnicas de respiración para la ansiedad',
    date: '2024-03-10',
    excerpt: 'Descubre cómo la respiración consciente puede ayudarte...',
    views: 243,
    comments: 18
  }
])

const userComments = ref([
  {
    id: 1,
    postTitle: 'Beneficios del ejercicio en la salud mental',
    postSlug: 'beneficios-ejercicio-salud-mental',
    content: 'Excelente artículo, me ha ayudado mucho a establecer una rutina...',
    date: '2024-03-14'
  },
  {
    id: 2,
    postTitle: 'Mindfulness para principiantes',
    postSlug: 'mindfulness-principiantes',
    content: 'Las técnicas compartidas son muy útiles para comenzar...',
    date: '2024-03-12'
  }
])

const newPost = ref({
  title: '',
  content: '',
  category: ''
})

// Funciones
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getStatusColor = (status) => {
  const colors = {
    completed: 'text-green-600',
    cancelled: 'text-red-600',
    rescheduled: 'text-yellow-600'
  }
  return colors[status] || 'text-gray-600'
}

const getStatusText = (status) => {
  const texts = {
    completed: 'Completada',
    cancelled: 'Cancelada',
    rescheduled: 'Reagendada'
  }
  return texts[status] || status
}

const updateProfile = () => {
  // Aquí iría la lógica para actualizar el perfil
  console.log('Actualizando perfil:', userProfile.value)
}

const scheduleAppointment = () => {
  // Aquí iría la lógica para agendar la cita
  console.log('Agendando cita:', newAppointment.value)
}

const rescheduleAppointment = (appointment) => {
  // Aquí iría la lógica para reagendar la cita
  console.log('Reagendando cita:', appointment)
}

const cancelAppointment = (appointmentId) => {
  // Aquí iría la lógica para cancelar la cita
  console.log('Cancelando cita:', appointmentId)
}

// Funciones para el blog
const submitPost = () => {
  console.log('Publicando:', newPost.value)
  showNewPostForm.value = false
}

const editPost = (post) => {
  console.log('Editando post:', post)
}

const deletePost = (postId) => {
  console.log('Eliminando post:', postId)
}

const editComment = (comment) => {
  console.log('Editando comentario:', comment)
}

const deleteComment = (commentId) => {
  console.log('Eliminando comentario:', commentId)
}
</script> 