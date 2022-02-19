import LoginForm from '@/components/LoginForm'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  it('emits an event with a user data payload', () => {
    const wrapper = mount(LoginForm)
    const input = wrapper.find('input[type="text"]')

    input.setValue('Lutsu Kommer')
    wrapper.trigger('submit')

    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)

    const expectedPayload = { name: 'Lutsu Kommer' }
    expect(wrapper.emitted('fromSubmitted')[0][0]).toMatchObject(
      expectedPayload
    )
  })
})
