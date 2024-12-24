<template>
    <div class="mb-4">
        <el-button>count:{{count}}</el-button>

        <el-button>model:{{model}}</el-button>
        <el-button type="primary"  @click="count--">减少</el-button>
    </div>
</template>
<script setup>
const props = defineProps({
    count: Number,
    increment: Function,
    decrement: Function
});
const emits = defineEmits(['updateData']);

const model = defineModel()

function update() {
  model.value++
}

</script>
