<template>
  <div>
    <DashboardHeader />
    <h1>About</h1>
    <p>This is an about</p>
  </div>
</template>

<script>
import { ref } from "@nuxtjs/composition-api"
export default {
  data() {
    return {
      title: "About"
    }
  },
  head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'About page',
            name: 'About',
            content: 'About page for  nuxt app'
          }
        ],
        link: [
          {
            rel: 'canonical', href: "http://127.0.0.1:3000"
          }
        ]
      }
  }
}
</script>
