<template>
    <div :class="headerDirection" :style="{ backgroundColor :carbackgroundColor}">
        <el-text :class="numberPosition" size="large"> 0{{ number }}</el-text>

    </div>
</template>
<script setup>
import { ref } from 'vue';
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
    }
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
    width: 1.1rem;
    // background-color: gray;
    z-index: 3;
    /* border: 1px solid green; */
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    position: relative;
}

.left {
    font-size: 0.7rem;
    color: rgb(218, 218, 218);
    margin-left: 0.5rem;

}

.right {
    font-size: 0.7rem;
    color: rgb(218, 218, 218);
    position: absolute;
    right: 0.5rem;
}

.center {
    font-size: 0.7rem;
    color: rgb(218, 218, 218);
    position: absolute;
    right: 1rem;
}
</style>