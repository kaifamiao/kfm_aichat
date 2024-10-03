<template>
  <div class="main-header">
    <!-- 模型选择 -->
    <select v-model="selectedModel">
      <option v-for="model in models" :key="model" :value="model">{{ model }}</option>
    </select>

    <!-- 角色选择 -->
    <select v-model="selectedRole">
      <option v-for="role in roles" :key="role" :value="role">{{ role }}</option>
    </select>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useModelStore } from '@/stores/modelStore';

const modelStore = useModelStore();

const models = ref(['模型1', '模型2', '模型3']);
const roles = ref(['专家', '小红书', '翻译', '程序员']);

// 模型选择逻辑
const selectedModel = ref(modelStore.selectedModel);

watch(selectedModel, (newValue) => {
  modelStore.updateModel(newValue);
});

watch(
    () => modelStore.selectedModel,
    (newValue) => {
      selectedModel.value = newValue;
    }
);

// 角色选择逻辑
const selectedRole = ref(modelStore.selectedRole);

watch(selectedRole, (newValue) => {
  modelStore.updateRole(newValue);
});

watch(
    () => modelStore.selectedRole,
    (newValue) => {
      selectedRole.value = newValue;
    }
);
</script>

<style scoped>
.main-header {
  display: flex;
  gap: 16px;
  padding: 16px;
  background-color: #f0f0f0;
}
</style>
