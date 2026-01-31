import { describe, test, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProfileCard from '@/components/ProfileCard.vue'

describe('ProfileCard', () => {
  test('is a Vue instance', async () => {
    const wrapper = await mountSuspended(ProfileCard, {
      props: {
        content: {
          name: 'name',
          position: 'position',
          image: {
            src: 'image.jpg',
            alt: 'alt',
          },
          background: {
            modern: 'background.webp',
            fallback: 'background.jpg',
          },
          social: {},
        },
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
