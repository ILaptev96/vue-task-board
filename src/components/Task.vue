<template>
  <div
    v-on:click="showDetailInfo"
    class="bg-warning p-2 mb-2"
    style="--bs-bg-opacity: 0.3"
  >
    <div>{{ task.name }}</div>
  </div>
  <TaskDetail
    @nextStep="stepEdit"
    @closeModal="hideDetailInfo"
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
    hideDetailInfo() {
      document.getElementById("modal-backdrop").className = "";
      this.showDetail = false;
    },
    stepEdit() {  
      this.edit ? (this.edit = !1) : (this.edit = !0);
    },
  },
  components: {
    TaskDetail,
  },
  data() {
    return {
      showDetail: false,
      edit: false,
    };
  },
};
</script>