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
        // addTodo is method you created
        addTodo: function (){
            // dispatch function an inbuilt function 
            // is carrying paylod => this from component to 
            // store action creator
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