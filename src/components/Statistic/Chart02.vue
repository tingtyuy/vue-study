<template>
     <Chat :chat-id="chatid" :chat-title="chattitle">
        <TabButton @click="tabButtionClick"> </TabButton>
    </Chat>

</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import * as echarts from 'echarts';
import jsonData from './myEChart.json'
import Chat from './Chat.vue';
import TabButton from './TabButton.vue';
echarts.registerTheme('customed', jsonData)
const chatid = 'Chart02';
const chattitle = '单装统计';
const tabButtionClick = (param) => {

console.log("parent tabButtionClick",param);
}
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
                name: '已出车任务数量',
                type: 'bar',
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290]
            }
            // ,
            // {
            //     name: '车型维修保养的数量',
            //     type: 'bar',
            //     emphasis: {
            //         focus: 'series'
            //     },
            //     data: [220, 182, 191, 234, 290]
            // }

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