<template>
  <div class="parking-lot-container" ref="container">
    <el-text id="label" size="large">洗车台</el-text>
    <el-text id="labelleft" size="large">膜结构车棚</el-text>
    <el-text id="labelright" size="large">地下车库</el-text>
    <!-- left -->
    <div id="carparkleft">
      <Car :number="n.number" v-for=" n in l1" :key="n" number-position="right" :isStop="n.isStop"
        :carNumber="n.carNumber" :stopName="n.stopName" :from="n.from" :masterName="n.masterName"
        :carClass="n.carClass"></Car>
    </div>
    <div class="overlay"></div>
    <div class="overlay2"></div>
    <div class="overlay3"></div>
    <div id="carparkcenter">
      <Car :number="n.number" v-for=" n in l2" :key="n" number-position="left" :isStop="n.isStop"
        :carNumber="n.carNumber" :stopName="n.stopName" :from="n.from" :masterName="n.masterName"
        :carClass="n.carClass"></Car>
    </div>
    <div id="carparkcenter2">
      <Car :number="n.number" v-for=" n in l3" :key="n" number-position="right" :isStop="n.isStop"
        :carNumber="n.carNumber" :stopName="n.stopName" :from="n.from" :masterName="n.masterName"
        :carClass="n.carClass"></Car>
    </div>
    <div id="carparkright">
      <Car :number="n.number" v-for=" n in l4" :key="n" number-position="left" :isStop="n.isStop"
        :carNumber="n.carNumber" :stopName="n.stopName" :from="n.from" :masterName="n.masterName"
        :carClass="n.carClass"></Car>
    </div>
    <div id="carparkright2">
      <Car :number="n.number" v-for=" n in l5" :key="n" number-position="right" :isStop="n.isStop"
        :carNumber="n.carNumber" :stopName="n.stopName" :from="n.from" :masterName="n.masterName"
        :carClass="n.carClass"></Car>
    </div>
    <!-- right -->

    <div id="r1">
      <Car :number="n.number" v-for=" n in r1" :key="n" number-position="right" headerDirection="vertical"
        :isStop="n.isStop" numberPosition="rcenter" :carNumber="n.carNumber" :stopName="n.stopName" :from="n.from"
        :masterName="n.masterName" :carClass="n.carClass"></Car>
    </div>

    <div id="r2">
      <Car :number="n.number" v-for=" n in r2" :key="n" number-position="right" headerDirection="vertical"
        :isStop="n.isStop" numberPosition="rright" :carNumber="n.carNumber" :stopName="n.stopName" :from="n.from"
        :masterName="n.masterName" :carClass="n.carClass"></Car>
    </div>

    <div id="r3">
      <Car :number="n.number" v-for=" n in r3" :key="n" number-position="right" headerDirection="vertical"
        :isStop="n.isStop" numberPosition="rright" :carNumber="n.carNumber" :stopName="n.stopName" :from="n.from"
        :masterName="n.masterName" :carClass="n.carClass"></Car>
    </div>

    <div id="r4">
      <Car :number="n.number" v-for=" n in r4" :key="n" number-position="right" headerDirection="vertical"
        :isStop="n.isStop" numberPosition="rright" :carNumber="n.carNumber" :stopName="n.stopName" :from="n.from"
        :masterName="n.masterName" :carClass="n.carClass"></Car>
    </div>

    <div id="r5">
      <Car :number="n.number" v-for=" n in r5" :key="n" number-position="right" headerDirection="vertical"
        :isStop="n.isStop" numberPosition="rright" :carNumber="n.carNumber" :stopName="n.stopName" :from="n.from"
        :masterName="n.masterName" :carClass="n.carClass"></Car>
    </div>

    <div id="r6">
      <Car :number="n.number" v-for=" n in r6" :key="n" number-position="right" headerDirection="vertical"
        :isStop="n.isStop" numberPosition="rright" :carNumber="n.carNumber" :stopName="n.stopName" :from="n.from"
        :masterName="n.masterName" :carClass="n.carClass"></Car>
    </div>

    <div id="r7">
      <Car :number="n.number" v-for=" n in r7" :key="n" number-position="right" headerDirection="vertical"
        :isStop="n.isStop" numberPosition="rright" :carNumber="n.carNumber" :stopName="n.stopName" :from="n.from"
        :masterName="n.masterName" :carClass="n.carClass"></Car>
    </div>

    <div id="r8">
      <Car :number="n.number" v-for=" n in r8" :key="n" number-position="right" headerDirection="vertical"
        :isStop="n.isStop" numberPosition="rright" :carNumber="n.carNumber" :stopName="n.stopName" :from="n.from"
        :masterName="n.masterName" :carClass="n.carClass"></Car>
    </div>

    <div id="r9">
      <Car :number="n.number" v-for=" n in r9" :key="n" number-position="right" headerDirection="vertical"
        :isStop="n.isStop" numberPosition="rright" :carClass="n.carClass" :carNumber="n.carNumber"
        :stopName="n.stopName" :from="n.from" :masterName="n.masterName"></Car>
    </div>

    <div id="r10">
      <Car :number="n.number" v-for=" n in r10" :key="n" number-position="right" headerDirection="vertical"
        :isStop="n.isStop" numberPosition="rright" :carNumber="n.carNumber" :stopName="n.stopName" :from="n.from"
        :masterName="n.masterName" :carClass="n.carClass"></Car>
    </div>
    <div id="r11">
      <Car :number="n.number" v-for=" n in r11" :key="n" number-position="right" headerDirection="vertical"
        :isStop="n.isStop" numberPosition="rright" :carNumber="n.carNumber" :stopName="n.stopName" :from="n.from"
        :masterName="n.masterName" :carClass="n.carClass"></Car>
    </div>
    <div id="r12">
      <Car :number="n.number" v-for=" n in r12" :key="n" number-position="right" headerDirection="horizontal"
        :isStop="n.isStop" numberPosition="right" :carNumber="n.carNumber" :stopName="n.stopName" :from="n.from"
        :masterName="n.masterName" :carClass="n.carClass"></Car>
    </div>
    <el-table id="rightTable" border :data="tableData" >
      <el-table-column prop="parkName" label="装备场" width="80" />
      <el-table-column prop="stopNum" label="在位" width="50" />
      <el-table-column prop="leaveNum" label="离位" width="50" />
      <el-table-column prop="emptyNum" label="空位" width="50" />
      <el-table-column prop="sumNum" label="总计" width="50" />

    </el-table>
  </div>
</template>

<script setup>
import Car from '../components/Car.vue';
import { ref } from 'vue';

const tableData = [
  {
    parkName: '膜结构车棚',
    stopNum: 8,
    leaveNum: 0,
    emptyNum: 87,
    sumNum: 95,
  },
  {
    parkName: '地下车库',
    stopNum: 0,
    leaveNum: 0,
    emptyNum: 104,
    sumNum: 104,
  }

]


const startNumber = 1;
const endNumber = 95;

const ldata = Array.from({ length: endNumber - startNumber + 1 }, (_, index) => ({
  number: startNumber + index,
  isStop: false,
  isLeave: false,
  isEmpty: true,
  parkName: "膜结构车棚",
  carClass: "轿车",
  carNumber: "XL12062",
  stopName: "在位",
  from: "教练勤务连",
  masterName: "熊廷建",
}));
const rstartNumber = 1;
const rendNumber = 191;
const rdata = Array.from({ length: rendNumber - rstartNumber + 1 }, (_, index) => ({
  number: rstartNumber + index,
  isStop: false,
  isLeave: false,
  isEmpty: true,
  parkName: "膜结构车棚",
  carClass: "轿车",
  carNumber: "XL12062",
  stopName: "在位",
  from: "教练勤务连",
  masterName: "熊廷建",
}));

let l1 = ref([]);
let l2 = ref([]);
let l3 = ref([]);
let l4 = ref([]);
let l5 = ref([]);

let r1 = ref([]);
let r2 = ref([]);
let r3 = ref([]);
let r4 = ref([]);
let r5 = ref([]);
let r6 = ref([]);
let r7 = ref([]);
let r8 = ref([]);
let r9 = ref([]);
let r10 = ref([]);
let r11 = ref([]);
let r12 = ref([]);

function allotData() {
  // left
  l1.value = ldata.filter(item => item.number <= 19).reverse();
  l2.value = ldata.filter(item => item.number <= 37 && item.number >= 20);
  l3.value = ldata.filter(item => item.number <= 57 && item.number >= 38).reverse();
  l4.value = ldata.filter(item => item.number <= 75 && item.number >= 58);
  l5.value = ldata.filter(item => item.number <= 95 && item.number >= 76).reverse();

  // right
  r1.value = rdata.filter(item => item.number >= 152 && item.number <= 154).reverse();
  r2.value = rdata.filter(item => item.number >= 25 && item.number <= 36);
  r3.value = rdata.filter(item => item.number == 88);
  r4.value = rdata.filter(item => item.number >= 89 && item.number <= 98);


  r5.value = rdata.filter(item => item.number >= 13 && item.number <= 24);
  r6.value = rdata.filter(item => item.number == 77);
  r7.value = rdata.filter(item => item.number >= 78 && item.number <= 87);


  r8.value = rdata.filter(item => item.number >= 1 && item.number <= 12);
  r9.value = rdata.filter(item => item.number == 66);
  r10.value = rdata.filter(item => item.number >= 67 && item.number <= 76);

  r11.value = rdata.filter(item => item.number >= 125 && item.number <= 151).reverse();
  r12.value = rdata.filter(item => item.number >= 187 && item.number <= 191);

}

function makeData() {
  l1.value.filter(item => item.number < 9).forEach(item => item.isStop = true);
}
function init() {
  allotData();
  makeData();
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


#labelleft {
  font-size: 1.2rem;
  color: rgb(7, 88, 88);
  left: 15rem;
  bottom: 0.01rem;
  position: absolute;
  z-index: 2;
}

#labelright {
  font-size: 1.2rem;
  color: rgb(7, 88, 88);
  left: 65rem;
  bottom: 0.01rem;
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

#r1 {
  left: 32.2rem;
  top: 10rem;
  position: absolute;
  height: 30rem;
  width: 4rem;
  // border: 1px solid red;
  z-index: 2;
}


#r2 {
  left: 36.5rem;
  top: 7.6rem;
  position: absolute;
  display: flex;
  height: 3.7rem;
  width: 20rem;
  z-index: 2;
}

.vertical:nth-child(3n) {
  margin-right: 0.5rem;
}

#r3 {
  left: 59.7rem;
  top: 7.6rem;
  position: absolute;
  display: flex;
  height: 3.7rem;
  width: 2rem;
  z-index: 2;
}

#r4 {
  left: 61.5rem;
  top: 7.6rem;
  position: absolute;
  display: flex;
  height: 3.7rem;
  width: 20rem;
  z-index: 2;
}

#r5 {
  left: 36.5rem;
  top: 17.4rem;
  position: absolute;
  display: flex;
  height: 3.7rem;
  width: 20rem;
  z-index: 2;
}

#r6 {
  left: 59.7rem;
  top: 17.4rem;
  position: absolute;
  display: flex;
  height: 3.7rem;
  width: 2rem;
  z-index: 2;
}

#r7 {
  left: 61.5rem;
  top: 17.4rem;
  position: absolute;
  display: flex;
  height: 3.7rem;
  width: 20rem;
  z-index: 2;
}

#r8 {
  left: 36.5rem;
  top: 21.3rem;
  position: absolute;
  display: flex;
  height: 3.7rem;
  width: 20rem;
  z-index: 2;
}

#r9 {
  left: 59.7rem;
  top: 21.3rem;
  position: absolute;
  display: flex;
  height: 3.7rem;
  width: 2rem;
  z-index: 2;
}

#r10 {
  left: 61.5rem;
  top: 21.3rem;
  position: absolute;
  display: flex;
  height: 3.7rem;
  width: 20rem;
  z-index: 2;
}

#r11 {
  left: 34.8rem;
  top: 30.5rem;
  position: absolute;
  display: flex;
  height: 3.7rem;
  width: 45rem;
  z-index: 2;
}

#r12 {
  left: 81.3rem;
  top: 7.6rem;
  position: absolute;
  height: 30rem;
  width: 4rem;
  // border: 1px solid red;
  z-index: 2;
}

#rightTable {
  width: 20rem;
  left: 59.7rem;
  top: 0.5rem;
  position: absolute;
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

.overlay2 {
  left: 10.25rem;
  top: 3.7rem;
  position: absolute;
  height: 30.7rem;
  width: 3rem;
  z-index: 3;
  background-color: #3bb1b1;
  // background-color: #4b7373;
  opacity: 0.7;
}

.overlay2::before {
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


.overlay3 {
  left: 21.1rem;
  top: 3.7rem;
  position: absolute;
  height: 30.7rem;
  width: 3rem;
  z-index: 3;
  background-color: #3bb1b1;
  // background-color: #4b7373;
  opacity: 0.7;
}

.overlay3::before {
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