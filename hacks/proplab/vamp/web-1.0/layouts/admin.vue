<template>
  <div>
    <!-- <app-layout> -->
      <div class="flex space-x-4">
        <h1>Admin Layout</h1>
        <div class="flex-1 ...">1</div>
        <div class="flex-1 ...">2</div>
        <div class="flex-1 ...">3</div>
      </div>

      <div>
          <nuxt />
      </div>
    <!-- </app-layout> -->
  </div>
</template>

<script>
export default {
  components: {
    "app-layout": () => "@/components/layouts/app",
  },
};
</script>