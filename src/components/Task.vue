<template>
  <div v-on:click="showDetailInfo" v-if="task.complexity<=5" class="bg-success text-white p-2 mb-2" style="--bs-bg-opacity: .9;">
    <div>{{ task.name }}</div>
  </div>
  <div v-on:click="showDetailInfo" v-else-if="task.complexity>=5&&task.complexity<=8" class="bg-warning text-white p-2 mb-2" style="--bs-bg-opacity: .9;">
    <div>{{ task.name }}</div>
  </div>
  <div v-on:click="showDetailInfo" v-else class="bg-danger p-2 mb-2 text-white" style="--bs-bg-opacity: .9;">
    <div>{{ task.name }}</div>
  </div>
    <TaskDetail v-if="showDetail" @closeModal="hideDetail" v-bind:task="task"></TaskDetail>
</template>

<script>
import TaskDetail from "./TaskDetail.vue";
//import { defineComponent, createApp } from "vue";
export default {
  name: "Task",
  props: ["task"],
  methods: {
    showDetailInfo() {
     document.getElementById("modal-backdrop").className = "fade modal-backdrop show";
      this.showDetail = true;
  

      /*  fade show */

      //modal-backdrop fade show
      //  this.showDetail = true;
      /*       let oTaskDetailComponent = defineComponent({
        extends: TaskDetail 
      });

      const div = document.createElement("div");
      document.getElementById("task-detail").appendChild(div);
      createApp(oTaskDetailComponent).mount(div); */
    },
    hideDetail() {
      document.getElementById("modal-backdrop").className = "";
      this.showDetail = false;
    },
  },
  components: {
    TaskDetail,
  },
  data() {
    return {
      showDetail: false,
    };
  },
};
</script>