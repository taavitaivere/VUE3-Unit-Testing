import AppHeader from '../../src/components/AppHeader'
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {
  test('If user is not logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBe(false)
  })

  test('if logged in, show logout button', async () => {
    const wrapper = mount(AppHeader)
    await wrapper.setData({ logging: true })
    expect(wrapper.find('button').isVisible()).toBe(false)
  })
})
