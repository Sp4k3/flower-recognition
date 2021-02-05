import { mount } from '@vue/test-utils'
import About from './About.vue'

describe('About component', () => {
  it('Should renders', () => {
    const wrapper = mount(About)
    expect(wrapper.html()).toContain('About')
  })
})
