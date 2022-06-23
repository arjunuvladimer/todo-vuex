import { createStore } from 'vuex'

import * as todosModule from '@/store/modules.todo'


// INTIAL STORE WHEN COMPONENT GETS LOADED
// state: todos: []
// getters: getTodo:todos: []
// mutations: null
// actions: null

// 

export default createStore({
  state:  todosModule.state, 
  getters: todosModule.getters,
  mutations: todosModule.mutations,
  actions: todosModule.actions,
})

