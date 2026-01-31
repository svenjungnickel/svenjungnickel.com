<template>
  <div class="flex h-screen w-screen flex-row flex-wrap content-center bg-white p-3">
    <div v-if="page" class="mx-auto sm:w-2/3 md:w-auto lg:w-2/3">
      <ProfileCard :content="page" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').where({ _path: '/' }).findOne())

useHead({
  title: page.value?.title || 'svenjungnickel.com',
  meta: [
    {
      name: 'description',
      content: page.value?.description || '',
    },
  ],
})
</script>
