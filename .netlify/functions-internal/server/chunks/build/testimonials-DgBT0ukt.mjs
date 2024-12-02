import { mergeProps, unref, useSSRContext, ref, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const useTestimonials = () => {
  const testimonials = ref([
    {
      id: 1,
      name: "Mar\xEDa Garc\xEDa",
      role: "Paciente",
      content: "El programa me ayud\xF3 enormemente a encontrar herramientas para manejar mi ansiedad y estr\xE9s. El apoyo profesional y la comunidad han sido fundamentales en mi proceso de recuperaci\xF3n.",
      image: "/images/default-avatar.jpg",
      rating: 5,
      date: "15 Marzo 2024",
      learned: "Aprend\xED t\xE9cnicas invaluables",
      valuable: "El apoyo fue fundamental",
      coping: "Nuevas estrategias de afrontamiento",
      strategies: "Meditaci\xF3n y mindfulness",
      aid: "Ayuda profesional",
      made: "Cambios positivos",
      meaningful: "Conexiones significativas",
      connections: "Comunidad de apoyo",
      others: "Ayudar a otros",
      on: "En el camino correcto",
      similar: "Experiencias compartidas",
      journeys: "Mi viaje de recuperaci\xF3n"
    },
    {
      id: 2,
      name: "Juan P\xE9rez",
      role: "Participante",
      content: "Gracias a COEMAP encontr\xE9 un espacio seguro para compartir mis experiencias y aprender de otros. Las herramientas y recursos proporcionados son invaluables.",
      image: "/images/default-avatar.jpg",
      rating: 5,
      date: "10 Marzo 2024",
      learned: "Herramientas pr\xE1cticas",
      valuable: "Espacio seguro",
      coping: "Manejo del estr\xE9s",
      strategies: "T\xE9cnicas de respiraci\xF3n",
      aid: "Apoyo grupal",
      made: "Progreso significativo",
      meaningful: "Experiencias compartidas",
      connections: "Red de apoyo",
      others: "Crecimiento personal",
      on: "Camino de sanaci\xF3n",
      similar: "Historias inspiradoras",
      journeys: "Proceso de recuperaci\xF3n"
    },
    {
      id: 3,
      name: "Ana Mart\xEDnez",
      role: "Miembro",
      content: "Los grupos de apoyo y las sesiones individuales han transformado mi perspectiva sobre la salud mental. Me siento m\xE1s fuerte y preparada para enfrentar los desaf\xEDos.",
      image: "/images/default-avatar.jpg",
      rating: 5,
      date: "5 Marzo 2024",
      learned: "Autoconocimiento",
      valuable: "Acompa\xF1amiento profesional",
      coping: "Gesti\xF3n emocional",
      strategies: "Autocuidado",
      aid: "Terapia grupal",
      made: "Transformaci\xF3n personal",
      meaningful: "V\xEDnculos terap\xE9uticos",
      connections: "Apoyo mutuo",
      others: "Empat\xEDa y comprensi\xF3n",
      on: "Desarrollo personal",
      similar: "Compa\xF1erismo",
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
};
const _sfc_main = {
  __name: "testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const { testimonials } = useTestimonials();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" }, _attrs))}><h1 class="text-4xl font-bold text-gray-900 mb-8">Testimonios</h1><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(unref(testimonials), (testimonial) => {
        _push(`<div class="bg-white rounded-lg shadow-sm p-6"><div class="flex items-center mb-4"><img${ssrRenderAttr("src", testimonial.image)}${ssrRenderAttr("alt", testimonial.name)} class="w-12 h-12 rounded-full object-cover"><div class="ml-4"><h3 class="font-semibold">${ssrInterpolate(testimonial.name)}</h3><p class="text-sm text-gray-500">${ssrInterpolate(testimonial.role)}</p></div></div><p class="text-gray-600 mb-4">${ssrInterpolate(testimonial.content)}</p><div class="flex items-center text-yellow-400"><!--[-->`);
        ssrRenderList(testimonial.rating, (n) => {
          _push(`<span class="mr-1">\u2605</span>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/testimonials.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=testimonials-DgBT0ukt.mjs.map
