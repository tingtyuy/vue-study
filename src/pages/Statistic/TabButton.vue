<template>

    <el-button-group>
        <el-button type="primary" size="small" @Click="tabButtionClick(1)"
            :class="activeButionStatus == 1 ? 'el-button-isActive' : ''" class="el-button-backgroundcolor">年</el-button>
        <el-button type="primary" @Click="tabButtionClick(2)"
            :class="activeButionStatus == 2 ? 'el-button-isActive' : ''" class="el-button-backgroundcolor">月</el-button>
        <el-button type="primary" @Click="tabButtionClick(3)"
            :class="activeButionStatus == 3 ? 'el-button-isActive' : ''" class="el-button-backgroundcolor">周</el-button>
        <el-button type="primary" @Click="tabButtionClick(4)"
            :class="activeButionStatus == 4 ? 'el-button-isActive' : ''" class="el-button-backgroundcolor">日</el-button>
    </el-button-group>
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps({
    activeBution: {
        type: Number,
        default: 1
    }
})
const activeButionStatus = ref(1)
const emit = defineEmits(['click']);
const tabButtionClick = (param) => {
    console.log("child tabButtionClick", param);
    activeButionStatus.value = param;
    emit("click",param);
}
</script>
<style lang="scss" scoped>
.el-button-backgroundcolor {
    background-color: rgb(28, 94, 95);
    color: #fff;
    width: 0.6rem;
}

.el-button-isActive {
    background-color: rgb(3 136 138);
}
</style>