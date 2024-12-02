import { a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "resources",
  __ssrInlineRender: true,
  setup(__props) {
    const resources = [
      {
        title: "Manejo de Ansiedad",
        description: "T\xE9cnicas y recursos para manejar la ansiedad y encontrar calma en momentos dif\xEDciles.",
        link: "/resources/anxiety",
        image: "/images/resources/anxiety.jpg"
      },
      {
        title: "Meditaci\xF3n Guiada",
        description: "Sesiones de meditaci\xF3n para ayudarte a relajarte y encontrar paz interior.",
        link: "/resources/meditation",
        image: "/images/resources/meditation.jpg"
      },
      {
        title: "Ejercicios de Respiraci\xF3n",
        description: "Aprende t\xE9cnicas de respiraci\xF3n para reducir el estr\xE9s y la ansiedad.",
        link: "/resources/breathing",
        image: "/images/resources/breathing.jpg"
      },
      {
        title: "Diario Emocional",
        description: "Registra y reflexiona sobre tus emociones diarias.",
        link: "/resources/journal",
        image: "/images/resources/journal.jpg"
      },
      {
        title: "Apoyo en Crisis",
        description: "Recursos y l\xEDneas de ayuda disponibles 24/7 para momentos dif\xEDciles.",
        link: "/resources/crisis",
        image: "/images/resources/crisis.jpg"
      },
      {
        title: "Encuentra un Terapeuta",
        description: "Conecta con profesionales de salud mental verificados.",
        link: "/resources/therapists",
        image: "/images/resources/therapists.jpg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" }, _attrs))}><h1 class="text-4xl font-bold text-gray-900 mb-8">Recursos de Apoyo Emocional</h1><div class="bg-white rounded-lg shadow-sm p-8 mb-12"><h2 class="text-2xl font-semibold mb-4">Encuentra las Herramientas que Necesitas</h2><p class="text-gray-600"> Explora nuestra colecci\xF3n de recursos dise\xF1ados para ayudarte a manejar la ansiedad, el estr\xE9s y otros aspectos emocionales. Cada secci\xF3n ofrece herramientas pr\xE1cticas y gu\xEDas para mejorar tu bienestar emocional. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(resources, (resource, index) => {
        _push(`<div class="bg-white rounded-lg shadow-sm overflow-hidden"><div class="aspect-w-16 aspect-h-9"><img${ssrRenderAttr("src", resource.image)}${ssrRenderAttr("alt", resource.title)} class="object-cover"></div><div class="p-6"><h3 class="text-xl font-semibold mt-2">${ssrInterpolate(resource.title)}</h3><p class="mt-2 text-gray-600">${ssrInterpolate(resource.description)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: resource.link,
          class: "mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Explorar `);
            } else {
              return [
                createTextVNode(" Explorar ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=resources-Bsf_zWqO.mjs.map
