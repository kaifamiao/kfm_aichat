<template>
  <div class="main-header">
    <select v-model="selectedModel">
      <option v-for="model in models" :key="model">{{ model }}</option>
    </select>
    <!-- 其他选择器 -->
  </div>
</template>

<script setup>
import { ref } from 'vue';

const models = ref(['模型1', '模型2', '模型3']);
const selectedModel = ref(models.value[0]);
</script>

<style scoped>
.main-header {
  padding: 16px;
  background-color: #f0f0f0;
}
</style>
