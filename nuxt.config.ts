// @ts-nocheck
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  future: {
    compatibilityVersion: 4,
  },

  // Global page headers
  app: {
    head: {
      title: 'svenjungnickel.com',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // Global CSS
  css: ['@/assets/css/tailwind.scss'],

  // Auto import components
  components: true,

  // Modules
  modules: [
    // '@nuxtjs/eslint-module', // Temporarily disabled to test
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vite-pwa/nuxt',
    '@nuxt/content',
  ],

  // Content module configuration
  content: {
    // https://content.nuxtjs.org/api/configuration
  },

  // Dev server configuration
  devServer: {
    host: '0.0.0.0',
  },

  // Image configuration
  image: {
    presets: {
      profile: {
        modifiers: {
          format: 'webp',
          quality: 80,
        },
      },
    },
  },

  // Vite configuration for SVG imports
  vite: {
    plugins: [svgLoader()],
  },
})
