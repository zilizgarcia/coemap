import { ref, computed } from 'vue'
import type { Testimonial } from '~/types/testimonial'

export const useTestimonials = () => {
  const testimonials = ref<Testimonial[]>([
    {
      id: 1,
      name: "María García",
      role: "Paciente",
      content: "El programa me ayudó enormemente a encontrar herramientas para manejar mi ansiedad y estrés. El apoyo profesional y la comunidad han sido fundamentales en mi proceso de recuperación.",
      image: "/images/default-avatar.jpg",
      rating: 5,
      date: "15 Marzo 2024",
      learned: "Aprendí técnicas invaluables",
      valuable: "El apoyo fue fundamental",
      coping: "Nuevas estrategias de afrontamiento",
      strategies: "Meditación y mindfulness",
      aid: "Ayuda profesional",
      made: "Cambios positivos",
      meaningful: "Conexiones significativas",
      connections: "Comunidad de apoyo",
      others: "Ayudar a otros",
      on: "En el camino correcto",
      similar: "Experiencias compartidas",
      journeys: "Mi viaje de recuperación"
    },
    {
      id: 2,
      name: "Juan Pérez",
      role: "Participante",
      content: "Gracias a COEMAP encontré un espacio seguro para compartir mis experiencias y aprender de otros. Las herramientas y recursos proporcionados son invaluables.",
      image: "/images/default-avatar.jpg",
      rating: 5,
      date: "10 Marzo 2024",
      learned: "Herramientas prácticas",
      valuable: "Espacio seguro",
      coping: "Manejo del estrés",
      strategies: "Técnicas de respiración",
      aid: "Apoyo grupal",
      made: "Progreso significativo",
      meaningful: "Experiencias compartidas",
      connections: "Red de apoyo",
      others: "Crecimiento personal",
      on: "Camino de sanación",
      similar: "Historias inspiradoras",
      journeys: "Proceso de recuperación"
    },
    {
      id: 3,
      name: "Ana Martínez",
      role: "Miembro",
      content: "Los grupos de apoyo y las sesiones individuales han transformado mi perspectiva sobre la salud mental. Me siento más fuerte y preparada para enfrentar los desafíos.",
      image: "/images/default-avatar.jpg",
      rating: 5,
      date: "5 Marzo 2024",
      learned: "Autoconocimiento",
      valuable: "Acompañamiento profesional",
      coping: "Gestión emocional",
      strategies: "Autocuidado",
      aid: "Terapia grupal",
      made: "Transformación personal",
      meaningful: "Vínculos terapéuticos",
      connections: "Apoyo mutuo",
      others: "Empatía y comprensión",
      on: "Desarrollo personal",
      similar: "Compañerismo",
      journeys: "Crecimiento continuo"
    }
  ]);

  const featuredTestimonials = computed(() => {
    return testimonials.value.slice(0, 3);
  });

  return {
    testimonials,
    featuredTestimonials
  };
}