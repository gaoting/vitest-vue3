<template>
  <div>
    <input v-focus  v-debounce="handleInput">
    <button v-permission="'edit'">edit</button>
    <button v-permission="'view'">view</button>
    <button v-permission="'delete'">delete</button>

  </div>
</template>

<script setup>
const vFocus = {
  mounted:(el)=> el.focus()
}

const handleInput = {
  event:'input',
  fn(event) {
    console.log('debounced input:', event.target.value)
  },
  delay: 500
}
</script>

<style lang="scss" scoped>

</style>