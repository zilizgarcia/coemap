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
  __name: "blog",
  __ssrInlineRender: true,
  setup(__props) {
    const blogPosts = [
      {
        title: "C\xF3mo Reducir la Ansiedad en 5 Minutos",
        excerpt: "T\xE9cnicas r\xE1pidas y efectivas para manejar momentos de ansiedad en tu d\xEDa a d\xEDa.",
        category: "Ansiedad",
        date: "15 Mar 2024",
        image: "/images/default-post.jpg",
        link: "/blog/reduce-anxiety"
      },
      {
        title: "5 Beneficios del Mindfulness",
        excerpt: "Descubre c\xF3mo la pr\xE1ctica del mindfulness puede mejorar tu bienestar diario.",
        category: "Mindfulness",
        date: "12 Mar 2024",
        image: "/images/default-post.jpg",
        link: "/blog/mindfulness-benefits"
      },
      {
        title: "Se\xF1ales de una Crisis Emocional",
        excerpt: "Aprende a reconocer las se\xF1ales tempranas de una crisis emocional.",
        category: "Salud Mental",
        date: "10 Mar 2024",
        image: "/images/default-post.jpg",
        link: "/blog/crisis-signs"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" }, _attrs))}><h1 class="text-4xl font-bold text-gray-900 mb-8">Blog de Salud Mental</h1><div class="bg-white rounded-lg shadow-sm p-8 mb-12"><h2 class="text-2xl font-semibold mb-4">Recursos y Art\xEDculos</h2><p class="text-gray-600"> Explora nuestros art\xEDculos sobre salud mental, bienestar emocional y consejos pr\xE1cticos para tu d\xEDa a d\xEDa. Contenido actualizado semanalmente por profesionales de la salud mental. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(blogPosts, (post, index) => {
        _push(`<div class="bg-white rounded-lg shadow-sm overflow-hidden"><div class="aspect-w-16 aspect-h-9"><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.title)} class="w-full h-48 object-cover"></div><div class="p-6"><div class="flex items-center mb-2"><span class="text-sm font-medium text-indigo-600">${ssrInterpolate(post.category)}</span><span class="mx-2 text-gray-300">\u2022</span><span class="text-sm text-gray-500">${ssrInterpolate(post.date)}</span></div><h3 class="text-xl font-semibold mb-2">${ssrInterpolate(post.title)}</h3><p class="text-gray-600 mb-4">${ssrInterpolate(post.excerpt)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: post.link,
          class: "text-indigo-600 hover:text-indigo-800 font-medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Leer m\xE1s \u2192 `);
            } else {
              return [
                createTextVNode(" Leer m\xE1s \u2192 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blog-scKL_9h5.mjs.map
