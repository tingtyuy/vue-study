<template>
    <!-- <Tab :tabPanes="tabPanes" v-model="activeTab" @tab-change="handleTabChange">
        <template v-slot:tab-content-1="{ pane }">
            <Chat :chat-id="chatid" :chat-title="chattitle"></Chat>
        </template>
</Tab> -->
    <!-- <TabButton tab-Buttion-Click="tabButtionClick"> </TabButton> -->

    <Chat :chat-id="chatid" :chat-title="chattitle">
        <TabButton @click="tabButtionClick"> </TabButton>
    </Chat>


</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import * as echarts from 'echarts';
import jsonData from './myEChart.json'
import Chat from './Chat.vue';
// import Tab from './Tab.vue';
import TabButton from './TabButton.vue';
const chatid = 'Chart06';
const chattitle = '申请统计';
echarts.registerTheme('customed', jsonData)

const tabButtionClick = (param) => {

    console.log("parent tabButtionClick", param);
}

function init() {
    const Chart = document.getElementById(chatid);
    const mainInstance = echarts.init(Chart, 'customed');
    const option = {
        dataset: {
            source: [
                ['amount', 'km'],
                [50, '教学用车'],
                [80, '公务用车'],
                [200, '紧急用车'],
            ]
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: [
            {
                type: 'category',
                // axisTick: { show: false },
                // data: ['大巴车', '轿车', '卡车', '商务车', '皮卡']
            }
        ],
        yAxis: [
            {
                name: '出车任务数'
            }
        ],
        series: [
            {
                name: '出车任务数',
                type: 'bar',
                barGap: 0,
                emphasis: {
                    focus: 'series'
                },
                // data: [320, 332, 301, 334, 390],
                encode: {
                    x: 'km',
                    y: 'amount'
                }
            }

        ]
    };
    mainInstance.setOption(option);

    window.addEventListener("resize", () => {
        mainInstance.resize();
    });
}

onMounted(() => {
    init()
});
</script>
<style scoped lang="scss"></style>