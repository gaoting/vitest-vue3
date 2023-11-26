<template>
  <div>{{ data }}</div>
</template>
 
<script>
export default {
  async setup() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    
    return {
      data: data.title
    }
  }
}
</script>