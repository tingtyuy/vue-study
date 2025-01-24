<template>
    <el-dialog v-model="SetDutyInfoDialog" width="700" :inline="true" custom-class="setdutyinfo"
        style="background: rgb(20 63 67);">
        <template #title>
            <span style="color: rgb(0 255 252);">值班信息设置</span>
        </template>
        <el-form :model="infoData">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="连队值班干部：" :label-width="100">
                        <el-input v-model="infoData.groupUser" autocomplete="off" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="电话：" :label-width="100">
                        <el-input v-model="infoData.groupPhone" autocomplete="off" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="车场值班员：" :label-width="100">
                        <el-input v-model="infoData.parkUser" autocomplete="off" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="电话：" :label-width="100">
                        <el-input v-model="infoData.parkPhone" autocomplete="off" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="调度室值班员：" :label-width="100">
                        <el-input v-model="infoData.scheduleUser" autocomplete="off" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="电话：" :label-width="100">
                        <el-input v-model="infoData.schedulePhone" autocomplete="off" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="天气：" :label-width="100">
                        <el-input v-model="infoData.weather" autocomplete="off" />
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="SetDutyInfoDialog = false" color="#9C9C9C">取消</el-button>
                <el-button type="primary" @click="SetDutyInfoDialog = false" color="#1C9795">
                    确定
                </el-button>
            </div>
        </template>
    </el-dialog>
    <dv-border-box9 class="dutyInfo">
        <!-- <div class="dutyInfo"> -->
        <el-row>
            <el-col :span="17">
                <el-descriptions :column="2" size="small">
                    <template #title>
                        <span style="color: #03a0a1; font-size: 1rem;">值班信息</span>
                    </template>
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
            <el-col :span="7">
                <el-row justify="center">
                    <el-button type="primary" link style="color: #03a0a1;"
                        @click="SetDutyInfoDialog = true">设置</el-button>
                </el-row>

            </el-col>

        </el-row>
        <!-- </div> -->
    </dv-border-box9>

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

    // border: 1.5px solid #03a0a1;
    padding: 3.2rem;
    width: 100%;
    height: 15rem;
    // margin-left: 1.5rem;
    // margin-right: 1.5rem;

}

::v-deep .el-dialog__title {
    color: red !important;
}

::v-deep .el-dialog {
    // background: rgb(1 26 30) !important;
    color: red;

}

// .my-custom-dialog .el-dialog__wrapper {
//     background-color: rgb(1 26 30) !important;
// }

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

::v-deep .el-form-item--small .el-form-item__label {

    color: #fff !important;
}

::v-deep .el-input--small .el-input__wrapper {

    background-color: #426264 !important;
}

::v-deep .el-input--small .el-input__inner {
    color: #fff !important;
}
</style>