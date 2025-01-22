<script setup>
import { ref, computed } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import demo1 from './components/demo1.vue'
import Parent from './components/Parent.vue';
import ArrayDemo from './components/ArrayDemo.vue';
import CarPark from './components/CarPark.vue';
import Statistic from './components/Statistic/Statistic.vue';

const routes = {
  // '/TheWelcome': TheWelcome,
  '/CarPark': CarPark,
  // '/Parent': Parent,
  '/Statistic': Statistic,
}
const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
const currentView = computed(() => {
  console.log(currentPath)
  return routes[currentPath.value.slice(1) || '/'] || TheWelcome
})
</script>

<template>
  <el-container style="width: 1280px;  border: 1px solid red;">
    <el-header>
      <a href="#/CarPark">CarPark</a>
      <a href="#/Statistic">Statistic</a>
    </el-header>
    <el-main>
      <component :is="currentView" />
    </el-main>
  </el-container>
</template>

<style scoped></style>
