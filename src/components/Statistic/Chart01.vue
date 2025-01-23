<template>

   
    <Chat :chat-id="chatid" :chat-title="chattitle"></Chat>

</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import * as echarts from 'echarts';
import jsonData from './myEChart.json'
import Chat from './Chat.vue';
echarts.registerTheme('customed', jsonData)
const chatid = 'Chart01';
const chattitle = '驾驶员统计';
function init() {
    const Chart = document.getElementById(chatid);
    const mainInstance = echarts.init(Chart, 'customed');
    const option = {
        legend: {
            top: 'bottom'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{{b} {c})'
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [
            {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [10, 50],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: [
                    { value: 40, name: '空闲中' },
                    { value: 38, name: '任务中' },
                    { value: 32, name: '休息中' },
                ]
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
.myChart
{

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