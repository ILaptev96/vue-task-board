<template>
<div class="modal fade show" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-modal="true" role="dialog" style="display: block;">
      <div class="modal-dialog">
        <div class="modal-content" v-show="!edit">
          <div class="modal-header">
            <h5 class="modal-title fw-bold" id="modalTaskLabel">{{task.name}} <span class="fs-6 text-secondary fw-light">- [Author: {{task.author}}]</span></h5>
            <button type="button" class="btn ms-1" @click="nextStep"><i class="fas fa-edit"></i></button>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
          </div>  
          <div class="modal-body" style="text-align: left;">
                <div class="input-group mb-1">
                    <span class="input-group-text border-0"><i class="fas fa-user-cog"></i></span>
                    <input type="text" class="form-control border-0 ps-0" :value="task.performer" disabled>
                </div>  
                <ul class="list-group list-group-flush mb-2">
                    <li class="list-group-item list-group-item d-flex justify-content-between align-items-center">Deadline: <span>{{task.deadline}}</span></li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">Complexity: <span>{{task.complexity}}/10</span></li>
                    <li class="list-group-item list-group-item d-flex justify-content-between align-items-center border-bottom">type: <span>{{task.type}}</span></li>
                </ul>
                <p class="ps-3 h6">
                    {{task.description}}
                </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">Close</button>
          </div>
        </div>
        <div class="modal-content" v-show="edit">
          <div class="modal-header">
            <h5 class="modal-title fw-bold" id="modalTaskLabel">Task edit: {{task.name}}</h5>
            <button type="button" class="btn ms-1" @click="nextStep"><i class="fas fa-file-alt"></i></button>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
          </div>  
                      <form @submit.prevent="onSubmit">  
           <div class="modal-body" style="text-align: left;" v-show="edit">   
              <div class="mb-3">
                    <label for="Task" class="form-label">Task</label>
                    <input type="text" v-model="inputTask" class="form-control" id="Task"  >
                </div>
              <div class="mb-3">
                    <label for="performer" class="form-label">Performer</label>
                    <input type="text" class="form-control" id="performer">
                </div>
              <div class="mb-3">
                    <label for="Complexity" class="form-label">Complexity</label>
                    <input type="text" class="form-control" id="Complexity">
                </div>
              <div class="mb-3">
                    <label for="Deadline" class="form-label">Deadline</label>
                    <input type="date" class="form-control" id="Deadline">
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control bg-light border-0" id="description" rows="2"></textarea>
                </div>

              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" >Save</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">Close</button>
              </div>
               </form>
        </div>
      </div>
    </div>
 

</template>
    

<script>
export default {
  name: "TaskDetail",
  props: ["task", "edit"],
  data() {
    return {
      inputTask: this.task.name,
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    nextStep() {
      this.$emit("nextStep");
    },
    onSubmit() {
/*       this.$emit("nextStep");
      console.log("onSubmit");
      const newTask = {
        name: this.inputTask,
        taskId: this.task.id,
      };
      this.$emit("created", newTask); */

      //  this.task.splice(1, 0, "February");
    },
  },
};
</script>

<style>
.popup-bg {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
}

.popup {
    width: 70%;
    height: 60%;
    background: #fff;
}
</style>