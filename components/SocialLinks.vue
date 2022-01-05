<!-- eslint-disable vue/no-v-html -->
<template>
  <ul class="flex justify-end">
    <li v-for="(link, index) in social" :key="index" class="px-1">
      <a :href="link" target="_blank" rel="nofollow noopener noreferrer" :title="index">
        <i v-html="require(`../assets/icons/${index}.svg?raw`)" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SocialLinks',
  props: {
    social: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
ul {
  a {
    @apply text-gray-300;

    &:hover {
      @apply text-gray-400;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
