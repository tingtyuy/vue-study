<template>
    <div class="list">
        <span style="color: #03a0a1; font-size: 0.9rem;">信息公告</span>
        <el-table id="rightTable" :data="tableData" style="width: 100%" :show-header=false
            header-row-class-name="rightTableHeader">
            <el-table-column prop="carClass" label="carClass" width="100" />
            <el-table-column prop="carnum" label="carnum" width="100" />
            <el-table-column prop="carUser" label="carUser" width="100" />
            <el-table-column prop="item" label="item" width="110" />
            <el-table-column prop="item2" label="item2" width="110" />
            <el-table-column prop="date" label="date" width="200" />

        </el-table>
    </div>

</template>

<script setup>
const tableData = [
    {
        carClass: '轿车',
        carnum: 'XL12005',
        carUser: '王某某',
        item: '2',
        item2: '2',
        date: '01月23日 15:25:48 至 01月23日 15:25:48',
    },
    {
        carClass: '轿车',
        carnum: 'XL12006',
        carUser: '李某某',
        item: '3',
        item2: '2',
        date: '01月23日 15:25:48 至 01月23日 15:25:48',
    }

]
</script>
<style scoped lang="scss">
.list {
    border: 1.5px solid #03a0a1;
    padding: 1.2rem;
    width: 98%;
    height: 41.8rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;

}

::v-deep #rightTable tbody tr {
    background: rgb(1 26 30) !important;
    color: rgb(3 254 254);
    text-align: center;
}

::v-deep .el-table .el-table__body-wrapper tbody tr td,
.el-table .el-table__body-wrapper tbody tr th,
.el-table,
.el-table .el-table__body-wrapper tbody tr,
.el-table .el-table__body-wrapper tbody,
.el-table .el-table__body-wrapper {
    border-bottom: 1px solid #03a0a1 !important;
}
</style>