<template>
  <div>
    <app-layout>
      <div class="table w-full ...">
        <div class="table-row-group">
          <div class="table-row">
            <div class="table-cell ...">A cell with more content</div>
            <div class="table-cell ...">Cell 2</div>
            <div class="table-cell ...">Cell 3</div>
          </div>
          <div class="table-row">
            <div class="table-cell ...">Cell 4</div>
            <div class="table-cell ...">A cell with more content</div>
            <div class="table-cell ...">Cell 6</div>
          </div>

          <nuxt />
        </div>
      </div>
    </app-layout>
  </div>
</template>

<script>
export default {
  components: {
    "app-layout": () => "@/components/layout/app",
  },
};
</script>