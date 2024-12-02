import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = ref({
      name: "",
      email: "",
      subject: "general",
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" }, _attrs))}><h1 class="text-4xl font-bold text-gray-900 mb-8">Contacto</h1><div class="bg-white rounded-lg shadow-sm p-8 mb-12"><h2 class="text-2xl font-semibold mb-4">\xBFNecesitas Ayuda?</h2><p class="text-gray-600"> Estamos aqu\xED para apoyarte. Si necesitas ayuda profesional o tienes preguntas sobre nuestros servicios, no dudes en contactarnos. </p><div class="mt-4 p-4 bg-red-50 rounded-md"><p class="text-red-700 font-medium"> Si est\xE1s experimentando una crisis o emergencia, por favor contacta al 911 o a tu servicio local de emergencias inmediatamente. </p></div></div><div class="bg-white rounded-lg shadow-sm p-8"><form class="space-y-6"><div><label class="block text-sm font-medium text-gray-700 mb-2"> Nombre Completo </label><input${ssrRenderAttr("value", formData.value.name)} type="text" required class="w-full border rounded-md px-4 py-2"></div><div><label class="block text-sm font-medium text-gray-700 mb-2"> Correo Electr\xF3nico </label><input${ssrRenderAttr("value", formData.value.email)} type="email" required class="w-full border rounded-md px-4 py-2"></div><div><label class="block text-sm font-medium text-gray-700 mb-2"> Asunto </label><select class="w-full border rounded-md px-4 py-2"><option value="general"${ssrIncludeBooleanAttr(Array.isArray(formData.value.subject) ? ssrLooseContain(formData.value.subject, "general") : ssrLooseEqual(formData.value.subject, "general")) ? " selected" : ""}>Consulta General</option><option value="therapy"${ssrIncludeBooleanAttr(Array.isArray(formData.value.subject) ? ssrLooseContain(formData.value.subject, "therapy") : ssrLooseEqual(formData.value.subject, "therapy")) ? " selected" : ""}>Busco Terapia</option><option value="support"${ssrIncludeBooleanAttr(Array.isArray(formData.value.subject) ? ssrLooseContain(formData.value.subject, "support") : ssrLooseEqual(formData.value.subject, "support")) ? " selected" : ""}>Soporte T\xE9cnico</option><option value="other"${ssrIncludeBooleanAttr(Array.isArray(formData.value.subject) ? ssrLooseContain(formData.value.subject, "other") : ssrLooseEqual(formData.value.subject, "other")) ? " selected" : ""}>Otro</option></select></div><div><label class="block text-sm font-medium text-gray-700 mb-2"> Mensaje </label><textarea rows="6" required class="w-full border rounded-md px-4 py-2">${ssrInterpolate(formData.value.message)}</textarea></div><button type="submit" class="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700"> Enviar Mensaje </button></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-1VsLFhyN.mjs.map
