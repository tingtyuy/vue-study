<template>
    <dv-border-box11 class="list">
        <span style="color: #03a0a1; font-size: 1rem;">信息公告</span>
        <el-table id="rightTable" :data="tableData" style="width: 99%;" :show-header=false>
            <el-table-column prop="carClass" label="carClass" width="50" />
            <el-table-column prop="carnum" label="carnum" width="70" />
            <el-table-column prop="carUser" label="carUser" width="70" />
            <el-table-column prop="item" label="item" width="70" />
            <el-table-column prop="item2" label="item2" width="70" />
            <el-table-column prop="date" label="date" width="200" />

        </el-table>
    </dv-border-box11>

</template>

<script setup>
const tableData = [
    {
        carClass: '轿车',
        carnum: 'XL12005',
        carUser: '王某某',
        item: '事项1',
        item2: '事项2',
        date: '01月23日 15:25:48 至 01月23日 15:25:48',
    },
    {
        carClass: '轿车',
        carnum: 'XL12006',
        carUser: '李某某',
        item: '事项1',
        item2: '事项2',
        date: '01月23日 15:25:48 至 01月23日 15:25:48',
    }

]
</script>
<style scoped lang="scss">
.list {
    // border: 1.5px solid #03a0a1;
    border-color: #03a0a1;
    padding: 3.2rem;
    width: 100%;
    height: 42.8rem;
}

::v-deep .border-box-content {
    margin-top: 2rem !important;
}

::v-deep #rightTable tbody tr,
#rightTable {
    background: rgb(1 26 30) !important;
    color: rgb(3 254 254);
    text-align: center;
}

::v-deep .el-table .el-table__body-wrapper tbody tr td,
.el-table .el-table__body-wrapper tbody tr th {
    border-bottom: 1px solid #03a0a1 !important;
}

// ::v-deep .el-table,
// .el-table .el-table__body-wrapper tbody tr,
// .el-table .el-table__body-wrapper tbody,
// .el-table .el-table__body-wrapper {
//     border-bottom: none !important;
// }
</style>