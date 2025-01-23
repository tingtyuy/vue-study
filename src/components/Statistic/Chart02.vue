<template>
    <Chat :chat-id="chatid" :chat-title="chattitle"></Chat>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import * as echarts from 'echarts';
import jsonData from './myEChart.json'
import Chat from './Chat.vue';
echarts.registerTheme('customed', jsonData)
const chatid = 'Chart02';
const chattitle = '单装统计';
function init() {
    const Chart = document.getElementById(chatid);
    const mainInstance = echarts.init(Chart, 'customed');
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: [
            {
                type: 'category',
                axisTick: { show: false },
                data: ['大巴车', '轿车', '卡车', '商务车', '皮卡']
            }
        ],
        yAxis: [
            {
                type: 'value'
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
                data: [320, 332, 301, 334, 390]
            },
            {
                name: '车型封存数量r',
                type: 'bar',
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290]
            },
            {
                name: '车型维修保养的数量',
                type: 'bar',
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290]
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
.myChart {

    border: 2px solid #03a0a1;
    padding: 1.2rem;
    width: 20rem;
}

.title {
    min-height: 1.5rem;
    max-width: 12rem;
    background: -webkit-linear-gradient(left, rgb(3 136 138), rgb(3 136 138), rgb(0 29 30)) no-repeat;
}
</style>