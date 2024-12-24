<template>
  <div>
    <button 
      v-on:click="msg++" 
      class="custom-button"
    >
      增加计数
    </button>
    <p>计数: {{ msg }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
   const msg= ref(0);
  
</script>

<style>
.custom-button {
  width: 100px;
  height: 100px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}
</style>