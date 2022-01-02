import { shallowMount } from '@vue/test-utils'
import SocialLinks from '@/components/SocialLinks.vue'

describe('SocialLinks', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(SocialLinks, {
      propsData: {
        social: {},
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
