<template>

    <div class="myChart">
        <div class="title">
            <el-text style="color: rgb(3 254 254); margin-left: 0.5rem;">{{ chatTitle }}</el-text>
        </div>
        <div :id="chatId" style=" height: 13rem;"></div>
    </div>

</template>
<script setup>

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

    border: 2px solid #03a0a1;
    padding: 1.2rem;
    width: 100%;
}

.title {
    min-height: 1.5rem;
    max-width: 90%;
    background: -webkit-linear-gradient(left, rgb(3 136 138), rgb(3 136 138), rgb(0 29 30)) no-repeat;
}
</style>