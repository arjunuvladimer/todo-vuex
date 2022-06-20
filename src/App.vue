<template>
<div>
  <h1>Todo APP</h1>
    <TodoList />
    <AddTodo />
</div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'
export default {
  name: 'App',
  components: {
    TodoList,
    AddTodo
  }
}
</script>

<style>

</style>
