<template>
    <el-dialog v-model="SetDutyInfoDialog" title="值班信息设置" width="700" :inline="true" :custom-class="setdutyinfo">
        <el-form :model="infoData">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="连队值班干部：" :label-width="100">
                        <el-input v-model="groupUser" autocomplete="off" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="电话：" :label-width="100">
                        <el-input v-model="groupPhone" autocomplete="off" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="车场值班员：" :label-width="100">
                        <el-input v-model="parkUser" autocomplete="off" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="电话：" :label-width="100">
                        <el-input v-model="parkPhone" autocomplete="off" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="调度室值班员：" :label-width="100">
                        <el-input v-model="scheduleUser" autocomplete="off" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="电话：" :label-width="100">
                        <el-input v-model="schedulePhone" autocomplete="off" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="天气：" :label-width="100">
                        <el-input v-model="weather" autocomplete="off" />
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="SetDutyInfoDialog = false">取消</el-button>
                <el-button type="primary" @click="SetDutyInfoDialog = false">
                    确定
                </el-button>
            </div>
        </template>
    </el-dialog>
    <div class="dutyInfo">
        <el-row>
            <el-col :span="18">
                <el-descriptions title="值班信息" :column="2" size="small">
                    <el-descriptions-item align="right" label="连队值班干部:">{{ infoData.groupUser
                        }}</el-descriptions-item>
                    <el-descriptions-item align="right" label="电话:">{{ infoData.groupPhone
                        }}</el-descriptions-item>
                    <el-descriptions-item align="right" label="车场值班员:">{{ infoData.parkUser
                        }}</el-descriptions-item>
                    <el-descriptions-item align="right" label="电话:">{{ infoData.parkPhone
                        }}</el-descriptions-item>
                    <el-descriptions-item align="right" label="调度室值班员:">{{ infoData.scheduleUser
                        }}</el-descriptions-item>
                    <el-descriptions-item align="right" label="电话:">{{ infoData.schedulePhone
                        }}</el-descriptions-item>
                </el-descriptions></el-col>
            <el-col :span="6">
                <el-row justify="end">
                    <el-button type="primary" link style="color: #03a0a1;"
                        @click="SetDutyInfoDialog = true">设置</el-button>
                </el-row>

            </el-col>

        </el-row>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue';
// import SetDutyInfo from './SetDutyInfo.vue';
const SetDutyInfoDialog = ref(false)
// const SetDutyInfo = () => {
//     SetDutyInfoDialog.value = true;
// }


const infoData = ref({
    groupUser: "张连队",
    groupPhone: "13011112222",
    parkUser: "张车场",
    parkPhone: "13011112222",
    scheduleUser: "张调度",
    schedulePhone: "13011112222",
    weather: ''

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

.setdutyinfo {
    background-color: rgb(1 26 30) !important;

}

.my-custom-dialog .el-dialog__wrapper {
    background-color: rgb(1 26 30) !important;
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

// ::v-deep .el-dialog__header {
//     background: rgb(1 26 30) !important;
// }

// ::v-deep .el-dialog__body {
//     background: rgb(1 26 30) !important;
// }</style>