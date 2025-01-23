<template>
    <div class="dutyInfo">
        <el-row>
            <el-col :span="18">
                <el-descriptions title="值班信息" :column="2" size="small" >
                    <el-descriptions-item align="center" label="连队值班干部:">{{ infoData.groupUser
                        }}</el-descriptions-item>
                    <el-descriptions-item align="center" label="电话:">{{ infoData.groupPhone
                        }}</el-descriptions-item>
                    <el-descriptions-item align="center" label="车场值班员:">{{ infoData.parkUser
                        }}</el-descriptions-item>
                    <el-descriptions-item align="center" label="电话:">{{ infoData.parkPhone
                        }}</el-descriptions-item>
                    <el-descriptions-item align="center" label="调度室值班员:">{{ infoData.scheduleUser
                        }}</el-descriptions-item>
                    <el-descriptions-item align="center" label="电话:">{{ infoData.schedulePhone
                        }}</el-descriptions-item>
                </el-descriptions></el-col>
            <el-col :span="6">
                <el-row justify="end">
                    <el-button type="primary" link style="color: #03a0a1;"  @click="dialogTableVisible = true">设置</el-button>
                </el-row>

            </el-col>

        </el-row>

    </div>
</template>
<script setup>
import { ref } from 'vue';
const infoData = ref({
    groupUser: "张连队",
    groupPhone: "13011112222",
    parkUser: "张车场",
    parkPhone: "13011112222",
    scheduleUser: "张调度",
    schedulePhone: "13011112222",

});
</script>
<style scoped lang="scss">
.dutyInfo {

    border: 1.5px solid #03a0a1;
    padding: 1.2rem;
    width: 98%;
    height: 15rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;

}

::v-deep .el-descriptions__body {
    background: rgb(1 26 30) !important;
}

::v-deep .el-descriptions__title {
    color: #03a0a1;
}

::v-deep .el-descriptions__label {
    color: rgb(3 254 254)
}

::v-deep .el-descriptions__content {
    color: rgb(199 180 127)
}
</style>