<template>
  <div class="parking-lot-container" ref="container">
    <!-- <img src="../assets/parking-lot.jpg" alt="停车场背景" class="background-image" /> -->

    <div id="carparkleft">
      <Car2 :number="n" v-for=" n in 19" :key="n"></Car2>

    </div>

    <div id="carparkcenter">
      <Car2 :number="n" v-for=" n in 19" :key="n"></Car2>
    </div>
    <div id="carparkcenter2">
      <Car2 :number="n" v-for=" n in 19" :key="n"></Car2>
    </div>

  </div>
</template>

<script setup>
import Car from '../components/Car.vue';
import Car2 from '../components/Car2.vue';

</script>

<style lang="scss" scoped>
$parking-lot: '~@/assets/parking-lot.jpg';
#carparkcenter {
  left: 230px;
  top: 80px;
  position: absolute;
  height: 600px;
  width: 100px;
  border: 1px solid red;
  z-index: 2;
}

#carparkcenter2 {
  left: 280px;
  top: 80px;
  position: absolute;
  height: 600px;
  width: 100px;
  border: 1px solid red;
  z-index: 2;
}


#carparkleft {
  left: 30px;
  top: 80px;
  position: absolute;
  height: 600px;
  width: 100px;
  border: 1px solid red;
  z-index: 2;
}

.parking-lot-container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1280px;
  height: 0;
  padding-top: 45.75%;
  background-image: url($parking-lot);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid rgb(37, 145, 15);
}

</style>