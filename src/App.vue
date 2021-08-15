
<template>
  <div class="container">
    <div class="row mb-5">
      <TaskCategory
        v-bind:key="category.id"
        v-bind:category="category"
        v-bind:taskTypes="taskTypes"
        v-for="category in categories"
      ></TaskCategory>
    </div>
    <div class="col-5 d-flex">
      <input class="form-control me-3" type="text" v-model="categoryName" placeholder="Column name" />
      <button class="btn btn-primary" v-on:click="addColumns">Add</button>
    </div>
    <div id="task-detail"></div>
  </div>
</template>

<script>
import TaskCategory from "./components/TaskCategory.vue";

export default {
  name: "App",
  props: {
    /*     inputCategoryName: {
      type: string,
      require: true
    } */
  },
  data: function() {
    return {
       taskTypes: [{
        name: "Новая функциональность",
        code: "feat"
      }, {
        name: "Дефект",
        code: "defect"
      }, {
        name: "Технический долг",
        code: "tech"
      }],
      categories: [
        { name: "backlog", id: "backlog" },
        { name: "In Process", id: "inprocess" },
        { name: "Done", id: "Done" }
      ],
      tasks: [
        {
          name: "Purple",
          author: "Tailer",
          performer: "Alex",
          complexity: 4,
          deadline: "2021-08-10",
          description: "This is the best description",
          category: "backlog",
          type: "",
          id: 5
        },
        {
          name: "Green",
          author: "Tailer",
          performer: "Alex",
          complexity: 2,
          deadline: "2021-08-10",
          description: "This is the best description",
          category: "backlog",
          type: "",
          id: 4
        },
        {
          name: "Yellow",
          author: "Tailer",
          performer: "Alex",
          complexity: 10,
          deadline: "2021-08-10",
          description: "This is the best description",
          category: "inprocess",
          type: "",
          id: 3
        },
        {
          name: "Red",
          author: "Tailer",
          performer: "Alex",
          complexity: 7,
          deadline: "2021-08-10",
          description: "This is the best description",
          category: "inprocess",
          type: "",
          id: 2
        },
        {
          name: "Blue",
          author: "Tailer",
          performer: "Alex",
          complexity: 5,
          deadline: "2021-08-10",
          description: "This is the best description",
          category: "Done",
          type: "",
          id: 1
        },
        {
          name: "Orange",
          author: "Tailer",
          performer: "Alex",
          complexity: 8,
          deadline: "2021-08-10",
          description: "This is the best description",
          category: "Done",
          type: "",
          id: 0
        }
      ],
      categoryName: "",
      categoryCounter: 0
    };
  },
  provide: function() {
    return {
      tasks: this.tasks,
      categories: this.categories
    };
  },
  components: {
    TaskCategory
  },
  methods: {
    addColumns: function() {
      if (this.categoryName != "") {
        this.categories.push({
          name: this.categoryName,
          id: this.categoryCounter
        });
        this.categoryCounter++;
        this.categoryName = "";
      }
    }
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


