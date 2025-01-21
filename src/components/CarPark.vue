<template>
  <div class="parking-lot-container" ref="container">
    <div id="carparkleft">
      <Car :number="n" v-for=" n in 19" :key="n"></Car>
    </div>

   <div id="carparkcenter">
      <Car :number="n" v-for=" n in 19" :key="n"></Car>
    </div>
    <div id="carparkcenter2">
      <Car :number="n" v-for=" n in 19" :key="n"></Car>
    </div> 

  </div>
</template>

<script setup>
import Car from '../components/Car.vue';
</script>

<style lang="scss" scoped>
$parking-lot: '../assets/parking-lot.jpg';
#carparkcenter {
  left: 8.2rem;;
  top: 4rem;
  position: absolute;
  height: 29rem;
  width: 4rem;
  // border: 1px solid red;
  z-index: 2;
}

#carparkcenter2 {
  left: 11.8rem;;
  top: 4rem;
  position: absolute;
  height: 29rem;
  width: 4rem;
  // border: 1px solid red;
  z-index: 2;
}

#carparkleft {
  left: 1.2rem;
  top: 4rem;
  position: absolute;
  height: 29rem;
  width: 4rem;
  // border: 1px solid red;
  z-index: 2;
}
// 1830  
// 840
// 45.75%;
.parking-lot-container {
  font-size: 4px;
  margin: 0 auto;
  position: relative;
  width: 85rem;
  height: 39.4rem;
  // padding-top: 45.75%;
  background-image: url($parking-lot);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

</style>