export default {
  mounted(el: any, binding: any) {
    if (typeof binding.value.fn !== "function" || !binding.value.event) return;
    let delay = 200;
    el.timer = null;
    el.handler = function () {
      if (el.timer) return;
      el.timer = setTimeout(() => {
        binding.value.fn.apply(this, arguments);
        el.timer = null;
      }, binding.value.delay || delay);
    };
    el.addEventListener(binding.value.event, el.handler);
  },
  beforeUnmount(el, binding) {
    if (el.timer) {
      clearTimeout(el.timer);
      el.timer = null;
    }
    el.removeEventListener(binding.value.event, el.handler);
  },
};
