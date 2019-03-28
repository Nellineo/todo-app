import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import TodoList from '@/components/TodoList'
import TestHelpers from '../test-helpers'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TodoList', () => {
  let wrapper
  let store
  let h
  beforeEach(() => {
      store = new Vuex.Store({})
      wrapper = mount(TodoList, { localVue, store })
      h = new TestHelpers(wrapper, expect)
  })

  it('renders without error', ()=>{
      expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('shows the remaining todo items when the list renders', () => {
      expect(wrapper.contains('.remaining')).toBe(true)
  })
})