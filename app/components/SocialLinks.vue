<template>
  <ul class="flex justify-end">
    <li v-for="(link, index) in social" :key="index" class="px-1">
      <a :href="link" target="_blank" rel="nofollow noopener noreferrer" :title="index">
        <component :is="getIcon(index)" />
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import BlueskySvg from '@/assets/icons/bluesky.svg?component'
import GithubSvg from '@/assets/icons/github.svg?component'
import LinkedinSvg from '@/assets/icons/linkedin.svg?component'
import MailSvg from '@/assets/icons/mail.svg?component'
import XTwitterSvg from '@/assets/icons/x-twitter.svg?component'
import XingSvg from '@/assets/icons/xing.svg?component'

defineProps<{
  social: Record<string, string>
}>()

const iconMap: Record<string, any> = {
  bluesky: BlueskySvg,
  github: GithubSvg,
  linkedin: LinkedinSvg,
  mail: MailSvg,
  'x-twitter': XTwitterSvg,
  xing: XingSvg,
}

const getIcon = (name: string) => {
  return iconMap[name]
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
