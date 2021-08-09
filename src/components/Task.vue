<template>
  <div v-on:click="showDetailInfo" class="bg-light p-2 mb-2">
    <div>{{task.name}}</div>
  </div>
</template>

<script>
import TaskDetail from "./TaskDetail.vue";
import { defineComponent, createApp } from "vue";
export default {
  name: "Task",
  props: ["task"],
  methods: {
    showDetailInfo: () => {
      let oTaskDetailComponent = defineComponent({
        extends: TaskDetail/* , {task: this.task} */
      });

      const div = document.createElement("div");
      document.getElementById("task-detail").appendChild(div);
      createApp(oTaskDetailComponent).mount(div);
    }
  }
};
</script>