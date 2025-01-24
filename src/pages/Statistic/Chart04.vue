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
const chatid = 'Chart04';
const chattitle = '车型统计';
echarts.registerTheme('customed', jsonData)

const tabButtionClick = (param) => {

    console.log("parent tabButtionClick", param);
}

// const activeTab = '1'
// const tabPanes = [
//     { label: '年', name: '1' },
//     { label: '月', name: '2' },
//     { label: '周', name: '3' },
//     { label: '日', name: '4' }
// ]
// const handleTabChange = (tabName) => {
//     console.log('当前激活的标签页是：', tabName);
// }
function init() {
    const Chart = document.getElementById(chatid);
    
    const mainInstance = echarts.init(Chart, 'customed',{ });
    const option = {
        dataset: {
            source: [
                ['sum', 'car'],
                [100, '大巴车'],
                [200, '轿车'],
                [100, '卡车'],
                [200, '商务车'],
                [200, '皮卡'],

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
                name:''
                // type: 'value',
                // axisTick: { show: false },
                // data: ['大巴车', '轿车', '卡车', '商务车', '皮卡']
            }
        ],
        yAxis: [
            {
                type: 'category'
            }
        ],
        series: [
            {
                name: '车型总数',
                type: 'bar',
                barGap: 0,
                emphasis: {
                    focus: 'series'
                },
                // data: [320, 332, 301, 334, 390],
                encode: {
                    x:'sum',
                    y: 'car'
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
<style scoped lang="scss">

</style>