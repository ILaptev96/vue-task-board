<template>
  <div class="container">
    <div class="row mb-5">
      <TaskCategory
        v-bind:key="category.id"
        v-bind:tasks="tasks"
        v-bind:category="category"
        v-for="category in categories"
      ></TaskCategory>
    </div>
    <div class="col-5 d-flex">
      <input
        class="form-control me-3"
        type="text"
        v-model="newCategoryName"
        placeholder="Column name"
      />
      <button class="btn btn-primary" v-on:click="addNewCategory">Add</button>
    </div>
    <div id="task-detail">
      
    </div>
  </div>
</template>

<script>
import TaskCategory from "./components/TaskCategory.vue";

export default {
  name: "App",
  data: function() {
    return {
      categories: [
        { name: "backlog", id: "backlog" },
        { name: "In Process", id: "inprocess" },
        { name: "Done", id: "Done" }
      ],
      tasks: [
        {
          name: "Task1",
          type: "backlog"
        },
        {
          name: "Task1",
          type: "backlog"
        },
        {
          name: "Task1",
          type: "inprocess"
        },
        {
          name: "Task1",
          type: "inprocess"
        },
        {
          name: "Task1",
          type: "Done"
        },
        {
          name: "Task1",
          type: "Done"
        },
        {
          name: "Test task",
          type: "test"
        }
      ],
      newCategoryName: "",
      categoryCounter: 0,
      addNewCategory: function() {
        this.categories.push({
          name: this.newCategoryName,
          id: `category${this.categoryCounter}`
        });
        this.categoryCounter++;
        this.newCategoryName = "";
      }
    };
  },
  components: {
    TaskCategory
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

/*
  (  )
^ (00)
|/(  )\
| |  \
 
 */