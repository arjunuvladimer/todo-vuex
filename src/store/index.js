import { createStore } from 'vuex'

import * as todosModule from '@/store/modules.todo'



export default createStore({
  state:  todosModule.state,
  getters: todosModule.getters,
  mutations: todosModule.mutations,
  actions: todosModule.actions,
})

