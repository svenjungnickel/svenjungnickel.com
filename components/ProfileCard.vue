<template>
  <div
    class="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased bg-no-repeat bg-cover bg-blend-multiply"
    :style="{ backgroundImage: 'url(' + background + ')' }"
  >
    <div class="md:w-1/3 w-full">
      <img class="rounded-lg shadow-lg antialiased" alt="Profile picture of Sven Jungnickel smiling" :src="image" />
    </div>
    <div class="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
      <div class="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
        <div class="text-2xl text-white leading-tight">{{ content.name }}</div>
        <div class="text-normal text-gray-300 hover:text-gray-400">
          <span class="border-b border-dashed border-gray-500 pb-1">{{ content.position }}</span>
        </div>
        <div class="text-sm text-gray-300 md:absolute pt-3 md:pt-0 bottom-0 right-0">
          <nuxt-content :document="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  computed: {
    background() {
      return this.content?.background ? require(`~/assets/${this.content.background}`) : ''
    },
    image() {
      return this.content?.image ? require(`~/assets/${this.content.image}`) : ''
    },
  },
}
</script>
