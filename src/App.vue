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
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div> -->
  </header>

  <main>
    <!-- <TheWelcome /> -->
    <!-- <a href="#/TheWelcome">TheWelcome</a> -->
    <a href="#/CarPark">CarPark</a>
    <a href="#/Statistic">Statistic</a>
    <component :is="currentView" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
