// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-08-16",
  devtools: { enabled: true },
  css: ["@/assets/stylesheets/all.scss"],

  app: {
    head: {
      title:'享樂酒店',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap' },
      ],
    },
  },
});
