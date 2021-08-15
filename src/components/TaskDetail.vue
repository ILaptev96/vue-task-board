<template>
<div class="modal fade show" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-modal="true" role="dialog" style="display: block;">
      <div class="modal-dialog">
        <div class="modal-content" v-show="!edit">
          <div class="modal-header">
            <h5 class="modal-title fw-bold" id="modalTaskLabel">{{taskData.name}}</h5>
            <button type="button" class="btn ms-1" @click="nextStep"><i class="fas fa-edit"></i></button>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
          </div>
          <div class="modal-body" style="text-align: left;">
                <div class="input-group mb-1">
                    <span class="input-group-text border-0"><i class="fas fa-user-cog"></i></span>
                    <input type="text" class="form-control border-0 ps-0" :value="taskData.performer" disabled>
                </div>
                <div class="row">
                  <div class="col-lg-6 ol-12">
                    <ul class="list-group list-group-flush mb-2">
                        <li class="list-group-item list-group-item d-flex justify-content-between align-items-center">Performer: <span>{{taskData.performer}}</span></li>
                        <li class="list-group-item list-group-item d-flex justify-content-between align-items-center">Author: <span>{{taskData.author}}</span></li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">Complexity: <span>{{taskData.complexity}}/10</span></li>
                    </ul>   
                  </div>    
                  <div class="col-lg-6 ol-12">        
                    <ul class="list-group list-group-flush mb-2">
                        <li class="list-group-item list-group-item d-flex justify-content-between align-items-center">Deadline: <span>{{taskData.deadline}}</span></li>
                        <li class="list-group-item list-group-item d-flex justify-content-between align-items-center border-bottom">type: <span>{{taskData.type}}</span></li>
                  </ul>
                  </div> 
                </div>
                <p class="ps-3 h6">
                    {{taskData.description}}
                </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">Close</button>
          </div>
        </div>
        <div class="modal-content" v-show="edit">
          <div class="modal-header">
            <h5 class="modal-title fw-bold" id="modalTaskLabel">Task edit: {{taskData.name}}</h5>
            <button type="button" class="btn ms-1" @click="nextStep"><i class="fas fa-file-alt"></i></button>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
          </div>
          <form @submit.prevent="onSubmit">
           <div class="modal-body" style="text-align: left;" v-show="edit">
              <div class="mb-3">
                    <label for="Task" class="form-label">Task name</label>
                    <input type="text" v-model="name" class="form-control" id="Task"  >
                </div>
              <div class="mb-3">
                    <label for="performer" class="form-label">Performer</label>
                    <input type="text" v-model="performer" class="form-control" id="performer">
                </div>
              <div class="mb-3">
                    <label for="Complexity" class="form-label">Complexity</label>
                    <input type="number" v-model="complexity" class="form-control" id="Complexity">
                </div>
              <div class="mb-3">
                    <label for="Deadline" class="form-label">Deadline</label>
                    <input type="date" v-model="deadline" class="form-control" id="Deadline">
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea v-model="description" class="form-control bg-light border-0" id="description" rows="2"></textarea>
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
  inject: ["tasks", "categories"],
  data() {
    return {
      name: this.task.name,
      performer: this.task.performer,
      complexity: this.task.complexity,
      deadline: this.task.deadline,
      description: this.task.description,
    };
  },
  created() {
     
/*     console.log(this.task)
    console.log(this.tasks)
    console.log(this.taskData) */
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    nextStep() {
      this.$emit("nextStep");
    },
    onSubmit() {    
     this.taskData.name = this.name
     this.taskData.performer = this.performer
     this.taskData.complexity = this.complexity
     this.taskData.deadline = this.deadline
     this.taskData.description = this.description 
    
     this.$emit("nextStep");
     this.$emit("closeModal");
    },
  },
  computed: {
    taskData: function () {
      return this.tasks.find(el => el.id == this.task.id);
    }
  }
};
</script>

