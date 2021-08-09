<template>
  <div class="col mb-4">
    <div class="card shadow-sm p-2">
      <b class="category-header">{{category.name}}</b>
      <div class="tasks">
        <Task v-bind:task="task" v-bind:key="task.name" v-for="task in filterTasks(tasks, category.id)">
        </Task>
      </div>
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  name: "TaskCategory",
  props: ["category", "tasks"],
  methods: {
    filterTasks: function(aTasks, sType) {
      return aTasks.filter(function(el) {
        return el.type === sType;
      });
    }
  },
  components: {
    Task
  }
};
</script>