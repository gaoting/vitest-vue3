<template>
  <div>
    <div class="message">
      {{ message }}
    </div>
    Enter your name: <input :value="name" />
    <div v-if="error" class="error">
      Please enter a name with at least seven letters.
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    message: string;
    name: string;
  }>(),
  {
    message: "",
    name: "",
  }
);

const name = computed(() => props.name);

const error = computed(() => {
  return props.name.trim().length < 200;
});
</script>
