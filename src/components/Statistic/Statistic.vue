<template>
    <el-container id="chatContainer">
        <el-header class="header">
            <el-row style="margin-top: 1.5rem;">
                <el-col :span="6">

                    <el-row justify="space-between">
                        <div style="line-height: 1rem;">
                            <el-icon :size="20" color="#4EDAB0">
                                <Timer />
                            </el-icon>
                            <span>{{ currentTime }}</span>
                        </div>
                        <span>{{ currentDate }}</span>
                        <span>{{ dayOfWeek }}</span>
                        <span>{{ temperature }}</span>
                    </el-row>
                </el-col>
                <el-col :span="12" style=" text-align: center;">
                    <el-image style="width: 15rem; bottom: 0.5rem;" :src="logoSrc" fit="fill" />
                </el-col>
                <el-col :span="6">

                    <el-row justify="end">
                        <el-button type="primary" :icon="Operation" link style="color: #C6D0D1;">退出</el-button>
                    </el-row>
                </el-col>
            </el-row>

        </el-header>
        <el-main class="main">
            <el-row justify="center" style="color: rgb(199 180 127); ">
                <span style="letter-spacing: 5px; margin-right: 1rem;">做遵纪守法模范</span>
                <span style="letter-spacing: 5px;">树军中良好形象</span>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <el-row>
                        <el-col :span="24">
                            <Chart01></Chart01>
                        </el-col>
                        <el-col :span="24">
                            <Chart02></Chart02>
                        </el-col>
                        <el-col :span="24">
                            <Chart03></Chart03>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="12">
                    <el-row>
                        <el-col :span="24">
                            <DutytInfo></DutytInfo>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <List></List>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6">
                    <el-row>
                        <el-col :span="24">
                            <Chart04></Chart04>
                        </el-col>
                        <el-col :span="24">
                            <Chart05></Chart05>
                        </el-col>
                        <el-col :span="24">
                            <Chart06></Chart06>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>
<script setup>
import { ref, computed, reactive, onMounted, onUnmounted } from 'vue';
import { Operation } from '@element-plus/icons-vue'
import Chart01 from './Chart01.vue';
import Chart02 from './Chart02.vue';
import Chart03 from './Chart03.vue';
import Chart04 from './Chart04.vue';
import Chart05 from './Chart05.vue';
import Chart06 from './Chart06.vue';
import logo from '@/assets/logo2.png';
import DutytInfo from './DutyInfo.vue';
import List from './List.vue';



// 创建响应式变量
const currentTime = ref('');
const currentDate = ref('');
const dayOfWeek = ref('');
const temperature = ref('');
// const logoSrc = "../../assets/logo2.png"
const logoSrc = logo
// 更新时间和日期的函数
const updateTime = () => {
    const now = new Date();
    currentTime.value = now.toLocaleTimeString();
    currentDate.value = now.toLocaleDateString();
    const daysOfWeek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    dayOfWeek.value = daysOfWeek[now.getDay()];
};

const allGreen = () => {

    const elem = document.documentElement; // 通常使用 document.documentElement 或某个特定的元素
    if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(err => {
            console.error('Error attempting to enable full-screen mode:', err);
        });
    } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
    }
}
// 在组件挂载时初始化时间和日期，并设置定时器
onMounted(() => {
    // allGreen();
    updateTime();
    const timer = setInterval(updateTime, 1000); // 每秒更新一次

    // 在组件卸载时清除定时器
    onUnmounted(() => {
        clearInterval(timer);
    });
});


function init() {
    temperature.value = "晴 15°C~25°C"
}
init()
</script>
<style scoped lang="scss">
.header {
    color: rgb(0 193 171);
    min-height: 3.5rem;
    background: -webkit-linear-gradient(bottom, rgb(1 26 30), rgb(1 26 30), rgb(3 136 138)) no-repeat;
    border-bottom: 1px solid rgb(51 103 105);
}

.main {
    margin-top: 2px;
    border-top: 1px solid rgb(51 103 105);
    height: 100%;
    width: 100%;
    background-color: rgb(1 26 30);
    padding-top: 0.3rem;
}
</style>