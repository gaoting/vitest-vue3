import { ref, watchEffect } from "vue";

const hasPermission = (permission: any) => {
  const userPermissions = ["view", "edit"];
  return userPermissions.includes(permission);
};

export default {
  beforeMount(el: any, binding: any) {
    const { value } = binding;
    const visible = ref(false);

    watchEffect(() => {
      visible.value = hasPermission(value);
    });

    el.style.display = visible.value ? "block" : "none";
  },
};
