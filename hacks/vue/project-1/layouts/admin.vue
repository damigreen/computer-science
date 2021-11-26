<template>
  <app-layout>
    <div>
      <h1>hi</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti
        asperiores rem incidunt ullam animi voluptate repellat quis placeat,
        alias exercitationem corporis ea iusto molestiae non recusandae
        similique ipsum obcaecati tempora esse necessitatibus at repudiandae
        pariatur. Cupiditate voluptates, sunt exercitationem cum recusandae
        dolorem voluptas nihil dignissimos labore sit accusamus doloribus fuga
        vel suscipit maxime laboriosam id aliquam commodi modi saepe rem
        temporibus. Iure iusto deserunt maxime incidunt, vitae quis aspernatur
        quos error praesentium magni porro veniam sit, minus inventore,
        laboriosam nesciunt fuga? Ut necessitatibus consequuntur odio quasi!
        Corrupti iure aliquam vero at in, veritatis vel accusantium, fuga animi
        quibusdam minima.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti
        asperiores rem incidunt ullam animi voluptate repellat quis placeat,
        alias exercitationem corporis ea iusto molestiae non recusandae
        similique ipsum obcaecati tempora esse necessitatibus at repudiandae
        pariatur. Cupiditate voluptates, sunt exercitationem cum recusandae
        dolorem voluptas nihil dignissimos labore sit accusamus doloribus fuga
        vel suscipit maxime laboriosam id aliquam commodi modi saepe rem
        temporibus. Iure iusto deserunt maxime incidunt, vitae quis aspernatur
        quos error praesentium magni porro veniam sit, minus inventore,
        laboriosam nesciunt fuga? Ut necessitatibus consequuntur odio quasi!
        Corrupti iure aliquam vero at in, veritatis vel accusantium, fuga animi
        quibusdam minima.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti
        asperiores rem incidunt ullam animi voluptate repellat quis placeat,
        alias exercitationem corporis ea iusto molestiae non recusandae
        similique ipsum obcaecati tempora esse necessitatibus at repudiandae
        pariatur. Cupiditate voluptates, sunt exercitationem cum recusandae
        dolorem voluptas nihil dignissimos labore sit accusamus doloribus fuga
        vel suscipit maxime laboriosam id aliquam commodi modi saepe rem
        temporibus. Iure iusto deserunt maxime incidunt, vitae quis aspernatur
        quos error praesentium magni porro veniam sit, minus inventore,
        laboriosam nesciunt fuga? Ut necessitatibus consequuntur odio quasi!
        Corrupti iure aliquam vero at in, veritatis vel accusantium, fuga animi
        quibusdam minima.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti
        asperiores rem incidunt ullam animi voluptate repellat quis placeat,
        alias exercitationem corporis ea iusto molestiae non recusandae
        similique ipsum obcaecati tempora esse necessitatibus at repudiandae
        pariatur. Cupiditate voluptates, sunt exercitationem cum recusandae
        dolorem voluptas nihil dignissimos labore sit accusamus doloribus fuga
        vel suscipit maxime laboriosam id aliquam commodi modi saepe rem
        temporibus. Iure iusto deserunt maxime incidunt, vitae quis aspernatur
        quos error praesentium magni porro veniam sit, minus inventore,
        laboriosam nesciunt fuga? Ut necessitatibus consequuntur odio quasi!
        Corrupti iure aliquam vero at in, veritatis vel accusantium, fuga animi
        quibusdam minima.s
      </p>
    </div>

    
    <nuxt />
  </app-layout>
</template>

<script>
import layoutMixin from "@/mixins/layout";

export default {
  components: {
    "app-layout": () => import("@/components/layouts/app"),
  },
  head: () => ({
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: process.env.APP_URL + "/favicon.ico",
      },
    ],
  }),
  mixins: [layoutMixin],
};
</script>
