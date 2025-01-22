<template>
    <el-container style="width: 100%; height: 100%; border: 1px solid red;">
        <el-header>Header</el-header>
        <el-main>

            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>Main</el-main>
                <el-aside width="200px">Aside</el-aside>
            </el-container>
        </el-main>
    </el-container>
</template>
<script setup>
import { ref, computed } from 'vue';
function init() {

}
init()
</script>
<style scoped lang="scss"></style>