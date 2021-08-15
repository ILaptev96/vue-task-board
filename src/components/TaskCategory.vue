<template>
  <div class="col mb-4">
    <div class="card shadow-sm p-2">
      <b class="category-header mb-2">{{category.name}}</b>
      <div class="tasks">
        <Task
          v-bind:task="task"
          v-bind:key="task.name"
          v-for="task in filterTasks(tasks, category.id)"
        ></Task>
      </div>
      <div class="row">
        <div class="col-4">
        <select class="form-select" v-model="taskType">
          <option v-for="taskType in taskTypes" v-bind:value="taskType.code" v-bind:key="taskType.code">{{taskType.name}}</option>
        </select>
        </div>
        <div class="d-flex col-8">
        <input class="form-control me-2" type="text" v-model="taskName" placeholder="Task Name" />
        <button class="btn btn-primary" @click="addTask">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  name: "TaskCategory",
  props: ["category", "taskTypes"],
  inject: ["tasks"],
  data() {
    return {
      taskName: ""
    };
  },
  methods: {
    filterTasks: function(aTasks, sType) {
      return aTasks.filter(function(el) {
        return el.category === sType;
      });
    },
    addTask: function() {
      if (this.taskName) {
        this.tasks.push({
          name: this.taskName,
          author: "Tailer",
          performer: "",
          deadline: new Date().toISOString().split('T')[0],
          description: "",
          category: this.category.id,
          type: this.taskType
        });
        this.taskName = "";
        console.log(this.tasks);
      }
    }
  },
  components: {
    Task
  }
};
</script>