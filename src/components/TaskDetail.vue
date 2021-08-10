<template>
<div class="modal fade show" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-modal="true" role="dialog" style="display: block;">
      <div class="modal-dialog">
        <div class="modal-content" v-show="!edit">
          <div class="modal-header">
            <h5 class="modal-title fw-bold" id="modalTaskLabel">{{taskData.name}} <span class="fs-6 text-secondary fw-light">- [Author: {{taskData.author}}]</span></h5>
            <button type="button" class="btn ms-1" @click="nextStep"><i class="fas fa-edit"></i></button>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
          </div>
          <div class="modal-body" style="text-align: left;">
                <div class="input-group mb-1">
                    <span class="input-group-text border-0"><i class="fas fa-user-cog"></i></span>
                    <input type="text" class="form-control border-0 ps-0" :value="taskData.performer" disabled>
                </div>
                <ul class="list-group list-group-flush mb-2">
                    <li class="list-group-item list-group-item d-flex justify-content-between align-items-center">Deadline: <span>{{taskData.deadline}}</span></li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">Complexity: <span>{{taskData.complexity}}/10</span></li>
                    <li class="list-group-item list-group-item d-flex justify-content-between align-items-center border-bottom">type: <span>{{taskData.type}}</span></li>
                </ul>
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
      // name: this.taskData.name,
      // performer: this.taskData.performer
    };
  },
  inject: ["tasks", "categories"],
  created() {
    console.log(this.task)
    console.log(this.tasks)
    console.log(this.taskData)
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    nextStep() {
      this.$emit("nextStep");
    },
    onSubmit() {
      /*
      this.$emit("nextStep");
      console.log("onSubmit");
      const newTask = {
        name: this.name,
        taskId: this.taskData.id,
      };
      this.$emit("created", newTask);
       */
      //this.taskData.splice(1, 0, "February");

      //Если попытаться изменить массив выходит ошибка
      //По логике метод для редактирования и изменения массива должден быть в App.vue, но как его вызвать отсюда?
      //this.$emit(""); Не помогает т.к там 3 компонента подряд

     this.taskData.name = this.name
    },
  },
  computed: {
    taskData: function () {
      return this.tasks.find(el => el.id == this.task.id);
    }
  }
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