import Vuex from 'vuex'
import { shallow, createLocalVue } from '@vue/test-utils'
import TodoList from '@/components/TodoList'
import TestHelpers from '@/tests/TestHelpers'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TodoList', () => {
  let wrapper
  let store
  let h
  beforeEach(() => {
      store = new Vuex.Store({})
      wrapper = shallow(TodoList, { localVue, store })
      h = new TestHelpers(wrapper, expect)
  })

  it('renders without error', ()=>{
      expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('shows loader at first and then hides when todos have loaded', () => {
      h.domHas('.loader')
  })
})