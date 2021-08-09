<template>
  <!--   <div v-on:click="showDetailInfo" v-if="task.complexity<=5" class="bg-success text-white p-2 mb-2" style="--bs-bg-opacity: .9;">
    <div>{{ task.name }}</div>
  </div>
  <div v-on:click="showDetailInfo" v-else-if="task.complexity>=5&&task.complexity<=8" class="bg-warning text-white p-2 mb-2" style="--bs-bg-opacity: .9;">
    <div>{{ task.name }}</div>
  </div>
  <div v-on:click="showDetailInfo" v-else class="bg-danger p-2 mb-2 text-white" style="--bs-bg-opacity: .9;">
    <div>{{ task.name }}</div>
  </div> -->
  <div
    v-on:click="showDetailInfo"
    class="bg-warning p-2 mb-2"
    style="--bs-bg-opacity: 0.3"
  >
    <div>{{ task.name }}</div>
  </div>
  <TaskDetail
    @nextStep="stepEdit"
    @closeModal="hideDetail"
    :edit="edit"
    :task="task"
    v-if="showDetail"
  >
  </TaskDetail>
</template>

<script>
import TaskDetail from "./TaskDetail.vue";
export default {
  name: "Task",
  props: ["task"],
  methods: {
    showDetailInfo() {
      document.getElementById("modal-backdrop").className =
        "fade modal-backdrop show";
      this.showDetail = true;
    },
    hideDetail() {
      document.getElementById("modal-backdrop").className = "";
      this.showDetail = false;
    },
    stepEdit() {  
      this.edit ? (this.edit = !1) : (this.edit = !0);
    },
/*     editTask() {
     console.log( this.task)
    } */
  },
  components: {
    TaskDetail,
  },
  data() {
    return {
      showDetail: false,
      edit: false,
      inputTask: "",
    };
  },
};
</script>