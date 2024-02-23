export default {
  mounted(el: any, binding: any) {
    console.log(el, binding);
    el.handler = function (e: any) {
      // 点击范围在绑定的元素范围内，不执行指令操作
      if (el.contains(e.target)) return;

      if (typeof binding.value === "function") {
        binding.value.apply(this, arguments);
      }
    };
    document.addEventListener("click", el.handler);
  },
  beforeUnmount(el: any) {
    document.removeEventListener("click", el.handler);
  },
};
