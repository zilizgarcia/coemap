import { a as __nuxt_component_0 } from './server.mjs';
import { ref, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext, openBlock, createElementBlock, createElementVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
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

function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const _sfc_main = {
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedCategory = ref("General");
    const categories = ["General", "Services", "Support", "Privacy", "Technical"];
    const faqs = ref([
      {
        id: 1,
        category: "General",
        question: "What is EmotionalSupport?",
        answer: "EmotionalSupport is a platform dedicated to providing mental health resources, support, and community to help individuals navigate their emotional well-being journey.",
        isOpen: false
      },
      {
        id: 2,
        category: "Services",
        question: "Are your services free?",
        answer: "Many of our resources are free, including basic support groups and educational content. Some specialized services may require a subscription or one-time payment.",
        isOpen: false
      },
      {
        id: 3,
        category: "Support",
        question: "How can I get immediate help?",
        answer: "For immediate support, you can use our 24/7 crisis hotline or chat with a support professional through our platform. In emergencies, always call your local emergency services.",
        isOpen: false
      },
      {
        id: 4,
        category: "Privacy",
        question: "How is my information protected?",
        answer: "We take privacy seriously and follow strict confidentiality protocols. All personal information is encrypted and stored securely following industry best practices.",
        isOpen: false
      },
      {
        id: 5,
        category: "Technical",
        question: "What devices can I use to access the platform?",
        answer: "Our platform is accessible through any modern web browser on desktop or mobile devices. We also offer mobile apps for iOS and Android.",
        isOpen: false
      }
    ]);
    const filteredFaqs = computed(() => {
      return faqs.value.filter((faq) => faq.category === selectedCategory.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" }, _attrs))}><h1 class="text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1><div class="mb-8"><div class="flex space-x-4 overflow-x-auto pb-2"><!--[-->`);
      ssrRenderList(categories, (category) => {
        _push(`<button class="${ssrRenderClass([selectedCategory.value === category ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200", "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap"])}">${ssrInterpolate(category)}</button>`);
      });
      _push(`<!--]--></div></div><div class="space-y-4"><!--[-->`);
      ssrRenderList(filteredFaqs.value, (faq) => {
        _push(`<div class="bg-white rounded-lg shadow-sm"><button class="w-full px-6 py-4 flex items-center justify-between focus:outline-none"><span class="text-lg font-medium text-gray-900">${ssrInterpolate(faq.question)}</span>`);
        _push(ssrRenderComponent(unref(render), {
          class: ["h-5 w-5 text-gray-500 transform transition-transform duration-200", { "rotate-180": faq.isOpen }]
        }, null, _parent));
        _push(`</button><div style="${ssrRenderStyle(faq.isOpen ? null : { display: "none" })}" class="px-6 pb-4"><p class="text-gray-600">${ssrInterpolate(faq.answer)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-12 bg-indigo-50 rounded-lg p-8 text-center"><h2 class="text-2xl font-bold text-indigo-900 mb-4">Still Have Questions?</h2><p class="text-indigo-700 mb-6">Our support team is here to help you 24/7</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact Us `);
          } else {
            return [
              createTextVNode(" Contact Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=faq-BL3G3djL.mjs.map
