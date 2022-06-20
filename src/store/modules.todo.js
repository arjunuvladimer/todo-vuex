// INTIAL STATE
export const state = {
    todos: []
}

// GETTERS // READING OPERATION
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
    addTodo: (context,payload) => {
        context.commit("ADD_TODO", payload)
    },
    toggleTodo: (context,payload) => {
        context.commit("TOGGLE_TODO", payload)
    },
    deleteTodo: (context,payload) => {
        context.commit("DELETE_TODO", payload)
    }
}

