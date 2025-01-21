<template>
  <div class="parking-lot-container" ref="container">
    <img src="../assets/parking-lot.jpg" alt="停车场背景" class="background-image" />

    <div id="carparkleft">
      <Car2 :number="n"  v-for=" n in 19" :key="n"></Car2>

    </div>

    <div id="carparkcenter">
      <Car2 :number="n"  v-for=" n in 19" :key="n"></Car2>
    </div>
    <div id="carparkcenter2">
      <Car2 :number="n"  v-for=" n in 19" :key="n"></Car2>
    </div>

  </div>
</template>

<script setup>
import Car from '../components/Car.vue';
import Car2 from '../components/Car2.vue';

</script>

<style scoped>

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
  position: relative;
  width: 1836px;
  /* 根据背景图片的实际宽度调整 */
  height: 840px;
  /* 根据背景图片的实际高度调整 */
  margin: 0 auto;
  display: flex;
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.parking-spot {
  position: absolute;
  width: 50px;
  /* 停车位的宽度 */
  height: 30px;
  /* 停车位的高度 */
  background-color: rgba(0, 128, 0, 0.5);
  /* 半透明的绿色 */
  border: 2px solid #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.parking-spot:hover {
  background-color: rgba(0, 128, 0, 0.8);
}
</style>