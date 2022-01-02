import { shallowMount } from '@vue/test-utils'
import ProfileCard from '@/components/ProfileCard.vue'

describe('ProfileCard', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(ProfileCard, {
      propsData: {
        content: {
          name: 'name',
          position: 'position',
          image: {
            src: 'image.jpg',
            alt: 'alt',
          },
          background: 'background.jpg',
          social: {},
        },
      },
      stubs: {
        NuxtContent: true,
        NuxtImg: true,
        SocialLinks: true,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
