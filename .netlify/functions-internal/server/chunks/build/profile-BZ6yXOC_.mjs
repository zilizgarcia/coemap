import { a as __nuxt_component_0 } from './server.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent } from 'vue/server-renderer';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref("profile");
    const showNewPostForm = ref(false);
    const tabs = [
      { id: "profile", name: "Datos Personales" },
      { id: "appointments", name: "Gestionar Citas" },
      { id: "history", name: "Historial de Citas" },
      { id: "blog", name: "Mis Publicaciones" }
    ];
    const userProfile = ref({
      name: "Usuario de Ejemplo",
      email: "usuario@ejemplo.com",
      phone: "123-456-7890",
      birthdate: "1990-01-01",
      avatar: null
    });
    const specialists = ref([
      { id: 1, name: "Dra. Ana L\xF3pez", specialty: "Psic\xF3loga" },
      { id: 2, name: "Dr. Carlos Ruiz", specialty: "Psiquiatra" },
      { id: 3, name: "Dra. Mar\xEDa S\xE1nchez", specialty: "Terapeuta" }
    ]);
    const availableTimes = [
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "16:00",
      "17:00",
      "18:00"
    ];
    const newAppointment = ref({
      specialist: "",
      date: "",
      time: "",
      type: "",
      notes: ""
    });
    const appointments = ref([
      {
        id: 1,
        specialist: { name: "Dra. Ana L\xF3pez", specialty: "Psic\xF3loga" },
        date: "2024-03-20",
        time: "10:00",
        notes: "Primera consulta"
      }
    ]);
    const appointmentHistory = ref([
      {
        id: 1,
        specialist: { name: "Dr. Carlos Ruiz", specialty: "Psiquiatra" },
        date: "2024-02-15",
        time: "11:00",
        notes: "Seguimiento mensual",
        status: "completed"
      }
    ]);
    const userPosts = ref([
      {
        id: 1,
        title: "Mi experiencia con la meditaci\xF3n",
        date: "2024-03-15",
        excerpt: "Compartiendo mi viaje personal con la pr\xE1ctica de la meditaci\xF3n...",
        views: 156,
        comments: 12
      },
      {
        id: 2,
        title: "T\xE9cnicas de respiraci\xF3n para la ansiedad",
        date: "2024-03-10",
        excerpt: "Descubre c\xF3mo la respiraci\xF3n consciente puede ayudarte...",
        views: 243,
        comments: 18
      }
    ]);
    const userComments = ref([
      {
        id: 1,
        postTitle: "Beneficios del ejercicio en la salud mental",
        postSlug: "beneficios-ejercicio-salud-mental",
        content: "Excelente art\xEDculo, me ha ayudado mucho a establecer una rutina...",
        date: "2024-03-14"
      },
      {
        id: 2,
        postTitle: "Mindfulness para principiantes",
        postSlug: "mindfulness-principiantes",
        content: "Las t\xE9cnicas compartidas son muy \xFAtiles para comenzar...",
        date: "2024-03-12"
      }
    ]);
    const newPost = ref({
      title: "",
      content: "",
      category: ""
    });
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    const getStatusColor = (status) => {
      const colors = {
        completed: "text-green-600",
        cancelled: "text-red-600",
        rescheduled: "text-yellow-600"
      };
      return colors[status] || "text-gray-600";
    };
    const getStatusText = (status) => {
      const texts = {
        completed: "Completada",
        cancelled: "Cancelada",
        rescheduled: "Reagendada"
      };
      return texts[status] || status;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" }, _attrs))}><div class="flex flex-col md:flex-row gap-8"><div class="w-full md:w-64 bg-white rounded-lg shadow-sm p-6"><div class="flex items-center space-x-4 mb-6"><img${ssrRenderAttr("src", unref(userProfile).avatar || "/images/default-avatar.jpg")} alt="Foto de perfil" class="w-16 h-16 rounded-full object-cover"><div><h2 class="text-lg font-semibold text-primary-600">${ssrInterpolate(unref(userProfile).name)}</h2><p class="text-sm text-gray-500">${ssrInterpolate(unref(userProfile).email)}</p></div></div><nav class="space-y-2"><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<button class="${ssrRenderClass([
          "w-full text-left px-4 py-2 rounded-lg transition-colors duration-200",
          unref(activeTab) === tab.id ? "bg-primary-500 text-white" : "text-primary-600 hover:bg-primary-50"
        ])}">${ssrInterpolate(tab.name)}</button>`);
      });
      _push(`<!--]--></nav></div><div class="flex-1">`);
      if (unref(activeTab) === "profile") {
        _push(`<div class="bg-white rounded-lg shadow-sm p-6"><h3 class="text-xl font-semibold mb-6">Datos Personales</h3><form class="space-y-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label><input${ssrRenderAttr("value", unref(userProfile).name)} type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Email</label><input${ssrRenderAttr("value", unref(userProfile).email)} type="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Tel\xE9fono</label><input${ssrRenderAttr("value", unref(userProfile).phone)} type="tel" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Fecha de Nacimiento</label><input${ssrRenderAttr("value", unref(userProfile).birthdate)} type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></div></div><button type="submit" class="w-full md:w-auto px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"> Guardar Cambios </button></form></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "appointments") {
        _push(`<div class="space-y-6"><div class="bg-white rounded-lg shadow-sm p-6"><h3 class="text-xl font-semibold mb-6">Agendar Nueva Cita</h3><form class="space-y-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="block text-sm font-medium text-gray-700 mb-2">Especialista</label><select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"><!--[-->`);
        ssrRenderList(unref(specialists), (specialist) => {
          _push(`<option${ssrRenderAttr("value", specialist.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(newAppointment).specialist) ? ssrLooseContain(unref(newAppointment).specialist, specialist.id) : ssrLooseEqual(unref(newAppointment).specialist, specialist.id)) ? " selected" : ""}>${ssrInterpolate(specialist.name)} - ${ssrInterpolate(specialist.specialty)}</option>`);
        });
        _push(`<!--]--></select></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Fecha</label><input${ssrRenderAttr("value", unref(newAppointment).date)} type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Hora</label><select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"><!--[-->`);
        ssrRenderList(availableTimes, (time) => {
          _push(`<option${ssrRenderAttr("value", time)}${ssrIncludeBooleanAttr(Array.isArray(unref(newAppointment).time) ? ssrLooseContain(unref(newAppointment).time, time) : ssrLooseEqual(unref(newAppointment).time, time)) ? " selected" : ""}>${ssrInterpolate(time)}</option>`);
        });
        _push(`<!--]--></select></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Tipo de Consulta</label><select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"><option value="first"${ssrIncludeBooleanAttr(Array.isArray(unref(newAppointment).type) ? ssrLooseContain(unref(newAppointment).type, "first") : ssrLooseEqual(unref(newAppointment).type, "first")) ? " selected" : ""}>Primera Consulta</option><option value="followup"${ssrIncludeBooleanAttr(Array.isArray(unref(newAppointment).type) ? ssrLooseContain(unref(newAppointment).type, "followup") : ssrLooseEqual(unref(newAppointment).type, "followup")) ? " selected" : ""}>Seguimiento</option><option value="emergency"${ssrIncludeBooleanAttr(Array.isArray(unref(newAppointment).type) ? ssrLooseContain(unref(newAppointment).type, "emergency") : ssrLooseEqual(unref(newAppointment).type, "emergency")) ? " selected" : ""}>Emergencia</option></select></div></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Notas Adicionales</label><textarea rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">${ssrInterpolate(unref(newAppointment).notes)}</textarea></div><button type="submit" class="w-full md:w-auto px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"> Agendar Cita </button></form></div><div class="bg-white rounded-lg shadow-sm p-6"><h3 class="text-xl font-semibold mb-6">Citas Programadas</h3><div class="space-y-4"><!--[-->`);
        ssrRenderList(unref(appointments), (appointment) => {
          _push(`<div class="border border-gray-200 rounded-lg p-4"><div class="flex justify-between items-start"><div><h4 class="font-semibold text-primary-600">${ssrInterpolate(appointment.specialist.name)} - ${ssrInterpolate(appointment.specialist.specialty)}</h4><p class="text-sm text-gray-600">${ssrInterpolate(formatDate(appointment.date))} a las ${ssrInterpolate(appointment.time)}</p><p class="text-sm text-gray-500 mt-2">${ssrInterpolate(appointment.notes)}</p></div><div class="flex space-x-2"><button class="px-3 py-1 text-sm text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"> Reagendar </button><button class="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"> Cancelar </button></div></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "history") {
        _push(`<div class="bg-white rounded-lg shadow-sm p-6"><h3 class="text-xl font-semibold mb-6">Historial de Citas</h3><div class="space-y-4"><!--[-->`);
        ssrRenderList(unref(appointmentHistory), (appointment) => {
          _push(`<div class="border border-gray-200 rounded-lg p-4"><div class="flex justify-between items-start"><div><h4 class="font-semibold text-gray-600">${ssrInterpolate(appointment.specialist.name)} - ${ssrInterpolate(appointment.specialist.specialty)}</h4><p class="text-sm text-gray-500">${ssrInterpolate(formatDate(appointment.date))} a las ${ssrInterpolate(appointment.time)}</p><p class="text-sm text-gray-500 mt-2">${ssrInterpolate(appointment.notes)}</p><p class="${ssrRenderClass([getStatusColor(appointment.status), "text-sm font-medium mt-2"])}">${ssrInterpolate(getStatusText(appointment.status))}</p></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "blog") {
        _push(`<div class="space-y-6"><div class="bg-white rounded-lg shadow-sm p-6"><div class="flex justify-between items-center mb-6"><h3 class="text-xl font-semibold">Mis Publicaciones</h3><button class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"> Nueva Publicaci\xF3n </button></div><div class="space-y-4"><!--[-->`);
        ssrRenderList(unref(userPosts), (post) => {
          _push(`<div class="border border-gray-200 rounded-lg p-4"><div class="flex justify-between items-start"><div><h4 class="font-semibold text-primary-600">${ssrInterpolate(post.title)}</h4><p class="text-sm text-gray-500"> Publicado el ${ssrInterpolate(formatDate(post.date))}</p><p class="text-sm text-gray-600 mt-2">${ssrInterpolate(post.excerpt)}</p><div class="flex items-center space-x-4 mt-2"><span class="text-sm text-gray-500">${ssrInterpolate(post.views)} visualizaciones </span><span class="text-sm text-gray-500">${ssrInterpolate(post.comments)} comentarios </span></div></div><div class="flex space-x-2"><button class="px-3 py-1 text-sm text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"> Editar </button><button class="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"> Eliminar </button></div></div></div>`);
        });
        _push(`<!--]--></div></div><div class="bg-white rounded-lg shadow-sm p-6"><h3 class="text-xl font-semibold mb-6">Mis Comentarios</h3><div class="space-y-4"><!--[-->`);
        ssrRenderList(unref(userComments), (comment) => {
          _push(`<div class="border border-gray-200 rounded-lg p-4"><div class="flex justify-between items-start"><div><div class="flex items-center space-x-2"><h4 class="font-semibold text-primary-600"> En respuesta a: ${ssrInterpolate(comment.postTitle)}</h4>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/blog/" + comment.postSlug,
            class: "text-sm text-primary-500 hover:text-primary-600"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Ver post `);
              } else {
                return [
                  createTextVNode(" Ver post ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><p class="text-sm text-gray-500"> Comentado el ${ssrInterpolate(formatDate(comment.date))}</p><p class="text-sm text-gray-600 mt-2">${ssrInterpolate(comment.content)}</p></div><div class="flex space-x-2"><button class="px-3 py-1 text-sm text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"> Editar </button><button class="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"> Eliminar </button></div></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (unref(showNewPostForm)) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"><div class="bg-white rounded-lg max-w-2xl w-full p-6"><h3 class="text-xl font-semibold mb-6">Nueva Publicaci\xF3n</h3><form class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-2">T\xEDtulo</label><input${ssrRenderAttr("value", unref(newPost).title)} type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Contenido</label><textarea rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">${ssrInterpolate(unref(newPost).content)}</textarea></div><div><label class="block text-sm font-medium text-gray-700 mb-2">Categor\xEDas</label><select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"><option value="mental-health"${ssrIncludeBooleanAttr(Array.isArray(unref(newPost).category) ? ssrLooseContain(unref(newPost).category, "mental-health") : ssrLooseEqual(unref(newPost).category, "mental-health")) ? " selected" : ""}>Salud Mental</option><option value="wellness"${ssrIncludeBooleanAttr(Array.isArray(unref(newPost).category) ? ssrLooseContain(unref(newPost).category, "wellness") : ssrLooseEqual(unref(newPost).category, "wellness")) ? " selected" : ""}>Bienestar</option><option value="self-care"${ssrIncludeBooleanAttr(Array.isArray(unref(newPost).category) ? ssrLooseContain(unref(newPost).category, "self-care") : ssrLooseEqual(unref(newPost).category, "self-care")) ? " selected" : ""}>Autocuidado</option><option value="mindfulness"${ssrIncludeBooleanAttr(Array.isArray(unref(newPost).category) ? ssrLooseContain(unref(newPost).category, "mindfulness") : ssrLooseEqual(unref(newPost).category, "mindfulness")) ? " selected" : ""}>Mindfulness</option></select></div><div class="flex justify-end space-x-4 mt-6"><button type="button" class="px-4 py-2 text-gray-600 hover:text-gray-800"> Cancelar </button><button type="submit" class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"> Publicar </button></div></form></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-BZ6yXOC_.mjs.map
