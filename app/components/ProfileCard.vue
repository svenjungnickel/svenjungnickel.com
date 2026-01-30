<template>
  <div
    class="flex w-full flex-row flex-wrap rounded-lg bg-gray-600 bg-cover bg-no-repeat p-3 antialiased bg-blend-multiply shadow-lg"
    :style="{ backgroundImage: 'url(' + content.background.modern + '), url(' + content.background.fallback + ')' }"
  >
    <div class="w-full md:w-1/3">
      <NuxtImg
        class="mx-auto rounded-lg antialiased shadow-lg md:mx-0"
        preset="profile"
        :src="content.image.src"
        :alt="content.image.alt"
        width="312"
        height="312"
      />
    </div>
    <div class="flex w-full flex-row flex-wrap px-3 md:w-2/3">
      <div class="relative w-full pt-3 text-right font-semibold text-gray-700 md:pt-0">
        <div class="text-2xl leading-tight text-white">{{ content.name }}</div>
        <div class="text-normal text-gray-300 hover:text-gray-400">
          <span class="border-b border-dashed border-gray-500 pb-1">{{ content.position }}</span>
        </div>
        <div class="bottom-0 right-0 pt-3 text-sm text-gray-300 md:absolute md:pt-0">
          <ContentRenderer :value="content" />
          <SocialLinks :social="content.social" class="right-0 pt-3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  content: any
}>()
</script>
