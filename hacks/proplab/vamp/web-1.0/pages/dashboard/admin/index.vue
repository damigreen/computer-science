<template>
  <div class="container">
    <div class="slim-pageheader">
      <ol class="breadcrumb slim-breadcrumb">
        <li class="breadcrumb-item">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
      </ol>
      <h6 class="slim-pagetitle">
        Hi

        <span v-text="`Welcome To Greenm`"></span>
      </h6>
    </div>

    <div class="flex ...">
      <div class="w-1/2 ...">w-1/2</div>
      <div class="w-1/2 ...">w-1/2</div>
    </div>
    <div class="flex ...">
      <div class="w-2/5 ...">w-2/5</div>
      <div class="w-3/5 ...">w-3/5</div>
    </div>
    <div class="flex ...">
      <div class="w-1/3 ...">w-1/3</div>
      <div class="w-2/3 ...">w-2/3</div>
    </div>
    <div class="flex ...">
      <div class="w-1/4 ...">w-1/4</div>
      <div class="w-3/4 ...">w-3/4</div>
    </div>
    <div class="flex ...">
      <div class="w-1/5 ...">w-1/5</div>
      <div class="w-4/5 ...">w-4/5</div>
    </div>
    <div class="flex ...">
      <div class="w-1/6 ...">w-1/6</div>
      <div class="w-5/6 ...">w-5/6</div>
    </div>
    <div class="w-full ...">w-full</div>
  </div>
</template>

<script>
import authMixin from "@/mixins/auth";

export default {
  head: () => ({
    title: "Admin Dashboard . Greenm",
  }),
  mixins: [authMixin],
};
</script>