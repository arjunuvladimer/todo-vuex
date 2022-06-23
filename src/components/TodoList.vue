<template>
    <div>
        <ul>
            <li 
                v-for="todo in todos" 
                :key="todo.id" 
                :class="{completed: todo.status}"
                @click="toggleTodo(todo.id)"
                >
                <p>{{todo.task}}</p>
                <p>{{todo.description}}</p>
                <span 
                    class="delete" 
                    @click="deleteTodo(todo.id)">
                        &#10006
                    </span>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    computed:{
        todos(){
            // Subscription 
            return this.$store.getters.getTodos
        }
    },
    methods:{
        toggleTodo: function (id){
            this.$store.dispatch("toggleTodo", id)
        },
        deleteTodo: function (id){
            this.$store.dispatch("deleteTodo", id)
        }
    }
}
</script>
<style>
.completed{
    color:green
}
</style>