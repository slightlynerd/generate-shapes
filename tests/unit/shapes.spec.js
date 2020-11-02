import { shallowMount } from '@vue/test-utils'
import CircleShape from '@/components/CircleShape.vue'
import RectangleShape from '@/components/RectangleShape.vue'
import SquareShape from '@/components/SquareShape.vue'

window.alert = jest.fn()

describe('Test shapes', () => {
  it('renders circle shape component', () => {
    const wrapper = shallowMount(CircleShape)
    wrapper.setData({ radii: '' })
    const button = wrapper.find('button')
    button.trigger('click')
    const alert = jest.spyOn(window, 'alert').mockReturnValue()
    expect(alert.mock.calls[0][0]).toBe('Please enter radius')
  })

  it('renders square shape component', () => {
    const wrapper = shallowMount(SquareShape)
    wrapper.setData({ length: '' })
    const button = wrapper.find('button')
    button.trigger('click')
    const alert = jest.spyOn(window, 'alert').mockReturnValue()
    expect(alert.mock.calls[0][0]).toBe('Please enter length')
  })

  it('renders rectangle shape component', () => {
    const wrapper = shallowMount(RectangleShape)
    wrapper.setData({ length: '', breadth: '100' })
    const button = wrapper.find('button')
    button.trigger('click')
    const alert = jest.spyOn(window, 'alert').mockReturnValue()
    expect(alert.mock.calls[0][0]).toBe('Please enter length and breadth')
  })

  afterEach(() => {
    window.alert.mockClear()
  })
})
