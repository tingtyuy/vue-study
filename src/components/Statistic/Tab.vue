<template>
    <el-tabs type="card" stretch="false" class="chat-tabs" v-model="activeTab" @tab-click="handleTabClick">
        <el-tab-pane v-for="(pane, index) in tabPanes" :key="index" :label="pane.label" :name="pane.name">
            <!-- 使用插槽来让外部定义内容 -->
            <slot :name="'tab-content-' + pane.name" :pane="pane"></slot>
        </el-tab-pane>
    </el-tabs>
</template>
<script setup>
var props = defineProps({
    tabPanes: {
        type: Array,
        required: true,
        validator: function (value) {
            // 验证tabPanes数组中的每个对象是否都有label和name属性
            return value.every(pane => typeof pane.label === 'string' && typeof pane.name === 'string');
        }
    },
    activeTab: {
        type: String,
        default: '年'
    }
})

const handleTabClick = (tab) => {
    this.$emit('tab-change', tab.name);
}
</script>
<style lang="scss" scoped>
.chat-tabs {

    width: 8rem;
}

::v-deep .el-tabs__item {

    width: 0.2rem !important;
    height: 1.3rem !important;
    padding: 0 0 !important;
}
</style>