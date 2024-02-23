import { ref, watchEffect, beforeUnMount } from "vue";

export default {
  beforeMount(el: any, binding: any) {
    console.log(el, binding)
    const { value } = binding;

    if (typeof value.fn !== "function" || !value.event) return;

    el.timer = null;
    el.handler = function () {
      if (el.timer) {
        clearTimeout(el.timer);
        el.timer = null;
      }
      el.timer = setTimeout(() => {
        binding.value.fn.apply(this, arguments);
        el.timer = null;
      }, value.delay || 300);
    };
    el.addEventListener(value.event, el.handler);
  },
  beforeUnMount(el: any, binding: any) {
    if (el.timer) {
      clearTimeout(el.timer);
      el.timer = null;
    }
    el.removeEventListener(binding.value.event, el.handler);
  },
};
