<template>
    <div class="car">
        {{ number }}
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
    width: 58px;
    height: 32px;
    background-color: gray;
    z-index: 3;
    border: 1px solid green;
}
</style>