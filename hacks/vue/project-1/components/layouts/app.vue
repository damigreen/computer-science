<template>
  <div class="app-layout">
    <h1>App Component</h1>
    <p>App app app app app app app app app app app app app app app app app app app app </p>
    <p>App app app app app app app app app app app app app app app app app app app app </p>
    <p>App app app app app app app app app app app app app app app app app app app app </p>
    <p>App app app app app app app app app app app app app app app app app app app app </p>
    <p>App app app app app app app app app app app app app app app app app app app app </p>

    <slot></slot>

  </div>
</template>

<script>
export default {
  data: () => ({
    showProfileDropDown: false
  }),
  methods: {
    logout() {
      //logout logic 
    }
  }
}
</script>

<style scoped>
  .app-layout {
    background-color: lightgreen;
  }
</style>