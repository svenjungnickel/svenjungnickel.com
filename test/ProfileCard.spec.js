import { mount } from '@vue/test-utils'
import ProfileCard from '@/components/ProfileCard.vue'

describe('ProfileCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ProfileCard, {
      propsData: {
        content: {
          name: 'name',
          position: 'position',
          image: {
            src: 'image.jpg',
            alt: 'alt',
          },
          background: 'background.jpg',
        },
      },
      stubs: {
        NuxtContent: true,
        NuxtImg: true,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
