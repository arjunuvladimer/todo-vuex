<template>
    <div>
        <form @submit.prevent="addTodo">
            <input type="text" placeholder="Enter a Task" v-model="task" />
            <input type="text" placeholder="Enter a Description" v-model="description" />
            <button type="submit">Add Todo</button>
        </form>
    </div>
</template>

<script>
export default{
    data(){
        return{
            task:"",
            description:"",
            id: 0
        }
    },
    methods:{
        addTodo: function (){
            this.$store.dispatch("addTodo", this)
            this.id++
            this.task = ""
            this.description= ""
        }
    }
}
</script>

<style>
</style>