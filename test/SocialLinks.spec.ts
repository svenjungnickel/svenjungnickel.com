import { describe, test, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import SocialLinks from '@/components/SocialLinks.vue'

describe('SocialLinks', () => {
  test('is a Vue instance', async () => {
    const wrapper = await mountSuspended(SocialLinks, {
      props: {
        social: {},
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
