<template>
    <!-- <dv-border-box-5> -->
    <dv-border-box8 class="myChart">
        <!-- <div class="myChart"> -->
        <el-row>
            <el-col :span="12">
                <div class="title">
                    <el-text style="color: rgb(3 254 254); margin-left: 0.5rem;">{{ chatTitle }}</el-text>
                </div>
            </el-col>
            <el-col :span="12">
                <el-row justify="end">
                    <slot></slot>
                    <!-- <TabButton tab-Buttion-Click="tabButtionClick"> </TabButton> -->
                </el-row>

            </el-col>
        </el-row>
        <div :id="chatId" style="height: 14rem;"></div>
        <!-- </div> -->
    </dv-border-box8>
    <!-- </dv-border-box-5> -->


</template>
<script setup>
// import TabButton from './TabButton.vue';
const props = defineProps({
    chatId: {
        type: String,
        default: "chat"
    },
    chatTitle: {
        type: String,
        default: "**统计"
    }
})
</script>
<style scoped lang="scss">
.myChart {

    // border: 1px solid #03a0a1;
    padding: 1.2rem;
    width: 100%;
    margin-bottom: 1.2rem;
}

.title {
    min-height: 1.5rem;
    max-width: 95%;
    background: -webkit-linear-gradient(left, rgb(3 136 138), rgb(6, 87, 88), rgb(0 29 30)) no-repeat;
}
</style>