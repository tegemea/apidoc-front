<template>
  <div>
    <div v-for="terminal in terminals" :key="terminal.id">
      <span class="badge badge-success">{{ terminal.method }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['terminals'],
  method: { 
      get: 'success', 
      post: 'secondary', 
      delete: 'danger', 
      options: 'secondary' 
    }
}
</script>