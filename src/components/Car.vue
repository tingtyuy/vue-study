<template>

    <el-popover placement="right" width="16rem" trigger="click">
        <template #reference>
            <div :class="headerDirection" :style="{ backgroundColor: carbackgroundColor }">
                <el-text :class="numberPosition" size="large"> {{ cnumber }}</el-text>
            </div>
        </template>
        <el-descriptions title="车辆信息" :column="2" size="small">
            <el-descriptions-item label="位置">{{ cnumber }}</el-descriptions-item>
            <el-descriptions-item label="车型">{{ carClass }}</el-descriptions-item>
            <el-descriptions-item label="车号">{{ carNumber }}</el-descriptions-item>
            <el-descriptions-item label="状态">{{ stopName }}</el-descriptions-item>
            <el-descriptions-item label="所属分队">{{ from }}</el-descriptions-item>
            <el-descriptions-item label="责任人">{{ masterName }}</el-descriptions-item>

        </el-descriptions>
    </el-popover>


</template>
<script setup>
import { ref, computed } from 'vue';
const props = defineProps({
    headerDirection:
    {
        type: String,
        default: "horizontal" // horizontal | vertical 

    },
    numberPosition:
    {
        type: String,
        default: "left" // left | right | center

    },
    number:
    {
        type: Number,
        default: -1
    }
    ,
    hasCar:
    {
        type: Boolean,
        default: false
    },

    carNumber:
    {
        type: String,
        default: false
    },
    carClass:
    {
        type: String,
        default: false
    },
    stopName:
    {
        type: String,
        default: false
    },
    from:
    {
        type: String,
        default: false
    },
    masterName:
    {
        type: String,
        default: false
    },
})
const cnumber = computed(() => {
    return String(props.number).padStart(3, '0');
})
let carbackgroundColor = ref("#909090");
function setCarColor() {
    if (props.hasCar) {
        carbackgroundColor.value = "#49c298";
    }
}
function init() {
    setCarColor();
}
init()
</script>
<style scoped lang="scss">
.horizontal {
    width: 3.5rem;
    height: 1.3rem;
    // background-color: gray;
    z-index: 3;
    /* border: 1px solid green; */
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    position: relative;

}

.vertical {
    height: 3.5rem;
    width: 1.3rem;
    // background-color: gray;
    z-index: 3;
    /* border: 1px solid green; */
    // margin-top: 0.2rem;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    margin-right: 0.2rem;
    position: relative;
}

.left {
    font-size: 0.5rem;
    color: rgb(218, 218, 218);
    margin-left: 0.5rem;
    position: absolute;
    // line-height: 1.2rem;
    top: 0.3rem;
}

.right {
    font-size: 0.5rem;
    color: rgb(218, 218, 218);
    position: absolute;
    right: 0.5rem;
    top: 0.3rem;
}

.center {
    font-size: 0.5rem;
    color: rgb(218, 218, 218);
    position: absolute;
    right: 1rem;
    top: 0.3rem;
}

.rleft {
    font-size: 0.5rem;
    color: rgb(218, 218, 218);
    margin-left: 0.5rem;
    position: absolute;
    // line-height: 1.2rem;
    top: 0.3rem;
}

.rright {
    font-size: 0.5rem;
    color: rgb(218, 218, 218);
    position: absolute;
    right: 0.25rem;
    bottom: 0.5rem;
}

.rcenter {
    font-size: 0.5rem;
    color: rgb(218, 218, 218);
    position: absolute;
    left: 0.2rem;
    top: 1.2rem;
}
</style>