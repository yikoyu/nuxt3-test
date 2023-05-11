import vuetify from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['vuetify/styles'], // vuetify ships precompiled css, no need to import sass
  vite: {
    // @ts-ignore
    // curently this will lead to a type error, but hopefully will be fixed soon #justBetaThings
    ssr: {
      noExternal: ['vuetify'] // add the vuetify vite plugin
    },
    plugins: [
      vuetify({
        autoImport: true,
        styles: 'sass'
      })
    ]
  }
})
