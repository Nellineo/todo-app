import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
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
      wrapper = shallowMount(TodoList, { localVue, store })
      h = new TestHelpers(wrapper, expect)
  })

  it('renders without error', ()=>{
      expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('shows loader at first and then hides when todos have loaded', () => {
      h.domHas('.lds-ring')
  })
})