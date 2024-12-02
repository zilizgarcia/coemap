import { mergeProps, unref, useSSRContext, openBlock, createElementBlock, createElementVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';

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
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const values = [
      {
        title: "Compassion",
        description: "We approach every interaction with empathy and understanding."
      },
      {
        title: "Accessibility",
        description: "Support should be available to everyone, whenever they need it."
      },
      {
        title: "Confidentiality",
        description: "We maintain the highest standards of privacy and trust."
      }
    ];
    const team = [
      {
        name: "Dr. Sarah Johnson",
        role: "Clinical Director",
        description: "Specialized in trauma-informed care with 15 years of experience.",
        image: "/images/team/sarah.jpg"
      },
      {
        name: "Michael Chen",
        role: "Support Coordinator",
        description: "Dedicated to creating meaningful connections and support networks.",
        image: "/images/team/michael.jpg"
      },
      {
        name: "Emma Rodriguez",
        role: "Crisis Counselor",
        description: "Expert in emergency response and immediate intervention.",
        image: "/images/team/emma.jpg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" }, _attrs))}><section class="mb-16"><h1 class="text-4xl font-bold text-gray-900 mb-8">About Us</h1><div class="grid grid-cols-1 md:grid-cols-2 gap-12"><div><h2 class="text-2xl font-semibold mb-4">Our Mission</h2><p class="text-gray-600 mb-4"> We are dedicated to providing accessible emotional support and resources to help individuals navigate life&#39;s challenges with confidence and resilience. </p><h2 class="text-2xl font-semibold mb-4">Our Vision</h2><p class="text-gray-600 mb-4"> To create a world where everyone has access to the emotional support they need to thrive and live fulfilling lives. </p></div><div><h2 class="text-2xl font-semibold mb-4">Our Values</h2><ul class="space-y-4"><!--[-->`);
      ssrRenderList(values, (value, index) => {
        _push(`<li class="flex items-start">`);
        _push(ssrRenderComponent(unref(render), { class: "h-6 w-6 text-green-500 mr-2 flex-shrink-0" }, null, _parent));
        _push(`<div><h3 class="font-semibold">${ssrInterpolate(value.title)}</h3><p class="text-gray-600">${ssrInterpolate(value.description)}</p></div></li>`);
      });
      _push(`<!--]--></ul></div></div></section><section class="mb-16"><h2 class="text-3xl font-bold text-gray-900 mb-8">Our Team</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(team, (member, index) => {
        _push(`<div class="bg-white rounded-lg shadow-sm p-6"><img${ssrRenderAttr("src", member.image)}${ssrRenderAttr("alt", member.name)} class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"><h3 class="text-xl font-semibold text-center mb-2">${ssrInterpolate(member.name)}</h3><p class="text-gray-600 text-center mb-2">${ssrInterpolate(member.role)}</p><p class="text-gray-500 text-center">${ssrInterpolate(member.description)}</p></div>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-Du8NcJHP.mjs.map
