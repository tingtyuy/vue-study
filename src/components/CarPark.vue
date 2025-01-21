<template>
  <div class="parking-lot-container" ref="container">
    <el-text id="label" size="large">洗车台</el-text>

    <div id="carparkleft">
      <Car :number="n" v-for=" n in 19" :key="n" number-position="right" :has-car="true"></Car>
    </div>
    <div class="overlay"></div>

    <div id="carparkcenter">
      <Car :number="n" v-for=" n in 18  " :key="n"></Car>
    </div>
    <div id="carparkcenter2">
      <Car :number="n" v-for=" n in 20" :key="n" number-position="right"></Car>>
    </div>


    <div id="carparkright">
      <Car :number="n" v-for=" n in 18  " :key="n"></Car>
    </div>
    <div id="carparkright2">
      <Car :number="n" v-for=" n in 20" :key="n" number-position="right"></Car>>
    </div>

    <div id="rightleft">
      <Car :number="n" v-for=" n in 19" :key="n" number-position="right" :has-car="true"></Car>
    </div>

  </div>
</template>

<script setup>
import Car from '../components/Car.vue';

let data = [
  { number: 1, isStop: false, isLeave: false, isEmpty: true ,place:"膜结构车棚"},
  { number: 2, isStop: false, isLeave: false, isEmpty: true ,place:"膜结构车棚"},
  { number: 3, isStop: false, isLeave: false, isEmpty: true ,place:"膜结构车棚"},
  { number: 4, isStop: false, isLeave: false, isEmpty: true ,place:"膜结构车棚"},
  { number: 5, isStop: false, isLeave: false, isEmpty: true ,place:"地下车库"},
  { number: 6, isStop: false, isLeave: false, isEmpty: true ,place:"地下车库"}
]
let lLeft=ref([]);
let lCenter=ref([]);
let lRight=ref([]);

function allotData()
{
  lLeft.value=data.number.filter()

}
function init(){
 

}
 init();
</script>

<style lang="scss" scoped>
$parking-lot: '../assets/parking-lot.jpg';



#label {
  font-size: 0.8rem;
  color: rgb(7, 88, 88);
  left: 21.5rem;
  top: 0.93rem;
  position: absolute;
  z-index: 2;
}

#carparkcenter {
  left: 8rem;
  top: 4rem;
  position: absolute;
  height: 29rem;
  width: 4rem;
  // border: 1px solid red;
  z-index: 2;
}

#carparkcenter2 {
  left: 12rem;
  top: 4rem;
  position: absolute;
  height: 29rem;
  width: 4rem;
  // border: 1px solid red;
  z-index: 2;
}

#carparkright {
  left: 18.8rem;
  top: 4rem;
  position: absolute;
  height: 29rem;
  width: 4rem;
  // border: 1px solid red;
  z-index: 2;
}

#carparkright2 {
  left: 22.8rem;
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
  height: 30rem;
  width: 4rem;
  // border: 1px solid red;
  z-index: 2;
}

.overlay {
  left: 0.9rem;
  top: 3.7rem;
  position: absolute;
  height: 29.3rem;
  width: 1.5rem;
  z-index: 2;
  background-color: #3bb1b1;
  // background-color: #4b7373;
  opacity: 0.7;
}

.overlay::before {
  // content: '2';
  position: absolute;
  top: -10px;
  /* 调整边框位置 */
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px dashed transparent;
  /* 透明边框 */
  // background: linear-gradient(45deg, transparent 25%, #fff 25%, #fff 50%, transparent 50%, transparent 75%, #fff 75%, #fff 100%);
  background-size: 40px 40px;
  /* 花纹大小 */
  z-index: -1;
  /* 确保在覆盖层背景之下 */
  pointer-events: none;
  /* 确保不影响覆盖层的交互 */
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