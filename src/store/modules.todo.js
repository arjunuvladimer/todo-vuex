// INTIAL STATE
export const state = {
    todos: []
}

// GETTERS // READING info from state 
export const getters = {
    getTodos: state => state.todos
}

// Mutations
export const mutations = {
    ADD_TODO: (state, payload) => {
        const newTodo = {
            id: payload.id,
            task: payload.task,
            description: payload.description,
            status: false
        }
        // unshift adds the value at the end of array
        state.todos.unshift(newTodo)
    },

    TOGGLE_TODO: (state, payload) =>{
        const statusChange = state.todos.find(todo => 
                todo.id === payload
        )
        statusChange.status = !statusChange.status
    },

    DELETE_TODO: (state, payload) => {
        const indexPosition = state.todos.findIndex(
            (todo) => todo.id === payload 
        )
        state.todos.splice(indexPosition,1)
    }
}

export const actions = {
    // From Component through dispatch function we got => this{
    // title, description, id
    // } payload
    // Payload => "ADD_TODO" MUTATION using context.commit under 
    // addTodo Action Creator

    addTodo: (context,payload) => {
        context.commit("ADD_TODO", payload)
    },
    // From Component through dispatch function we got => {
    // id
    // } payload
    // Payload => "TOGGLE_TODO" MUTATION using context.commit under 
    // toggleTodo Action Creator

    toggleTodo: (context,payload) => {
        context.commit("TOGGLE_TODO", payload)
    },

    // From Component through dispatch function we got => {
    // id
    // } payload
    // Payload => "DELETE_TODO" MUTATION using context.commit under 
    // deleteTodo Action Creator
    deleteTodo: (context,payload) => {
        context.commit("DELETE_TODO", payload)
    }
}


// FLUX CONCEPT

// COMPONENT => PAYLOAD => DISPATCH  => PAYLOAD => ACTION CREATOR => PAYLOAD => MUTATION  => PAYLOAD => STORE => PAYLOAD=> SINGLE WAY

// STORE => MUTATION => ACTION CREATOR => DISPATCH => COMPONENT => WRONG WAY X


// STORE => GETTERS => DATA => BACK => COMPUTED INFORM THE COMPONENT TO RE RENDER THE DATA


// Component => Template Only

// Data, Methods, OPTIONS API => Mixins
// Functions, Directives =>Filters, Directives
// API Calls => Services
// State Management => Store

// MVC => Model => Data, Controller => Logics , View => Vuejs

// Data => Store, Logics => Mixins, Filters, Directives , View => Template, Style
// API Calls => Services
