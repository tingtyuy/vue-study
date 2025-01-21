<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import demo1 from './components/demo1.vue'
import Parent from './components/Parent.vue';
import ArrayDemo from './components/ArrayDemo.vue';
import CarPark from './components/CarPark.vue';
</script>

<template>
  <el-container>
    <el-main>
      <CarPark></CarPark>
    </el-main>
  </el-container>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->


  <!-- <TheWelcome /> -->
  <!-- <demo1></demo1> -->
  <!-- <Parent></Parent> -->

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
