<template>
  <div :class="!showNavResponsive ? 'h-24' : 'h-screen'" class="w-full bg-gradient-to-1 form-blue-400 flex md:flex-row">
    <div class="w-1/4 text-white">
      Nuxt Demo
    </div>

    <div class="w-1/2">
      <ul class="flex md:flex-row flex-col md:justify-center md:my-6 md:space-x-5 md:mx-0 mx-4 md:space-y-0 space-y-5">
        <li class="text-green text-xl" v-if="!isLoggedIn">
          <nuxt-link class="fas fa-sign-in-alt" to="/">Home</nuxt-link>
        </li>
        <li class="text-green text-xl" v-if="!isLoggedIn">
          <nuxt-link class="fas fa-user-plus" to="/">About</nuxt-link>
        </li>
      </ul>
    </div>
    
    <div class="w-1/2 menu-icons-wrapper absolute right-3 top-5">
    <button class="hamburger float-right mx-6 " @click="expand">
      <i class="fas fa-bars"></i>
    </button>
    </div>
    <!-- <h1>
      Dashboard
    </h1> -->
  </div>
</template>

<style>
.nuxt-logo {
  height: 180px;
}
</style>
<script>
import { ref, userRoute, watch } from '@vue/composition-api'
import { useRoute } from '@nuxtjs/composition-api'

export default {
  props: [
    "isLoggedIn"
  ],
  setup() {
    const route = useRoute()
    console.log(route)

    watch(route, () => {
      showNavResponsive.value = false
    })
    const showNavResponsive = ref(false)

    function expand() {
      showNavResponsive.value - !showNavResponsive.value;
    }
    return {
      showNavResponsive,
      expand
    }
  },
}
</script>

