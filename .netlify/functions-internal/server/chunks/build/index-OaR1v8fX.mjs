import { a as __nuxt_component_0 } from './server.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const mainResources = [
      {
        title: "Manejo de Ansiedad",
        description: "Aprende t\xE9cnicas efectivas para manejar la ansiedad y encontrar calma en momentos dif\xEDciles.",
        link: "/resources/anxiety",
        image: "/images/resources/anxiety.jpg"
      },
      {
        title: "Meditaci\xF3n Guiada",
        description: "Accede a sesiones de meditaci\xF3n que te ayudar\xE1n a encontrar paz y tranquilidad interior.",
        link: "/resources/meditation",
        image: "/images/resources/meditation.jpg"
      },
      {
        title: "Apoyo en Crisis",
        description: "Encuentra ayuda inmediata y recursos de apoyo disponibles 24/7.",
        link: "/resources/crisis",
        image: "/images/resources/crisis.jpg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative bg-white overflow-hidden"><div class="max-w-7xl mx-auto"><div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"><main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"><div class="sm:text-center lg:text-left"><h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"><span class="block">Apoyo emocional en</span><span class="block text-indigo-600">momentos dif\xEDciles</span></h1><p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"> En MindCare, entendemos lo dif\xEDcil que puede ser lidiar con problemas emocionales y de salud mental. Ya sea que te sientas abrumado por la ansiedad, el estr\xE9s, o simplemente necesites un espacio donde puedas encontrar recursos \xFAtiles, estamos aqu\xED para ayudarte. </p><div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"><div class="rounded-md shadow">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/resources",
        class: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Explorar recursos `);
          } else {
            return [
              createTextVNode(" Explorar recursos ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-3 sm:mt-0 sm:ml-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contactar profesional `);
          } else {
            return [
              createTextVNode(" Contactar profesional ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></main></div></div></section><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><h2 class="text-3xl font-bold text-gray-900 mb-8">Recursos de Apoyo</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(mainResources, (resource) => {
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
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-OaR1v8fX.mjs.map
