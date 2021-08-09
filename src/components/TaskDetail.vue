<template>
<div class="modal fade show" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-modal="true" role="dialog" style="display: block;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title fw-bold" id="modalTaskLabel">{{task.name}} <span class="fs-6 text-secondary fw-light">- [Author: {{task.author}}]</span></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
          </div>
          <div class="modal-body" style="text-align: left;">
                <div class="input-group mb-1">
                    <span class="input-group-text border-0"><i class="fas fa-user-cog"></i></span>
                    <input type="text" class="form-control border-0 ps-0" :value="task.performer" disabled>
                </div>  
                <ul class="list-group list-group-flush mb-2">
                    <li class="list-group-item list-group-item d-flex justify-content-between align-items-center">Deadline <span>{{task.deadline}}</span></li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">Complexity: <span>{{task.complexity}}/10</span></li>
                    <li class="list-group-item list-group-item d-flex justify-content-between align-items-center border-bottom">type <span>{{task.type}}</span></li>
                </ul>
                <p class="ps-3 h6">
                    {{task.description}}
                </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">Close</button>
          </div>
        </div>
      </div>
    </div>
 

</template>
    

<script>
export default {
    name: "TaskDetail",
    props: ["task"],
    methods: {
      closeModal() {
      this.$emit("closeModal");
    },
    }
}
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