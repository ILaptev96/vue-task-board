<template>
<div class="popup-bg">
<div class="popup">

</div>
</div>
</template>
    

<script>
export default {
    name: "TaskDetail",
    props: ["task"]
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