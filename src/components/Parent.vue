<template>
    <h1>Child1</h1>
    <Child1 :count="_count" @updateData="_updateData" :v-model="something" />
    <el-button @click="_count++" type="primary">Increment</el-button>
</template>
<script setup>
import Child1 from './Child1.vue';
import { ref } from 'vue'
const _count =ref(99);

const _updateData = (data) => {
    _count.value = data;
}
</script>
