<template>
    <div class="car">
        <el-text class="left" size="large"> {{ number }}</el-text>

    </div>
</template>
<script setup>
defineProps({

    number:
    {
        type: Number,
        required: true,
    }
})
</script>
<style scoped>
.car {
    width: 3.5rem;
    height: 1.3rem;
    background-color: gray;
    z-index: 3;
    border: 1px solid green;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;

}

.left {
    font-size: 0.7rem;
    color: rgb(218, 218, 218);
    margin-left: 0.5rem;
}

.right {
    font-size: 0.7rem;
    color: rgb(218, 218, 218);
    margin-right: 0.5rem;
}
</style>