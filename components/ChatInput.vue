<template>
  <div class="chat-input">
    <div>模型：{{ modelStore.selectedModel }}</div>
    <div>角色：{{ modelStore.selectedRole }}</div>
    <div>选项：{{ modelStore.selectedOption }}</div>

    <select v-model="selectedOption">
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>
    <input type="text" v-model="messageText" @keyup.enter="sendMessage" />
    <button @click="sendMessage">发送</button>
  </div>
</template>

<script setup>
import {ref, watch} from 'vue';
import { useModelStore } from '@/stores/modelStore';

const modelStore = useModelStore();

const options = ref(['选项1', '选项2']);
const selectedOption = ref(modelStore.selectedOption); // 初始化为 Store 中的值

const messageText = ref('');

// 监听 selectedOption 的变化，调用 updateOption
watch(selectedOption, (newValue) => {
  modelStore.updateOption(newValue);
});

// 如果需要同步 Store 的变化到本地，可以添加以下 watch
watch(
    () => modelStore.selectedOption,
    (newValue) => {
      selectedOption.value = newValue;
    }
);

function sendMessage() {
  if (messageText.value.trim()) {
    console.log(
        '使用模型:',
        modelStore.selectedModel,
        '选择的角色:',
        modelStore.selectedRole,
        '选择的选项:',
        modelStore.selectedOption,
        '发送消息:',
        messageText.value
    );
    // 在这里处理发送消息的逻辑
    messageText.value = '';
  }
}
</script>



<style scoped>
.chat-input {
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #f5f5f5;
}
.chat-input select,
.chat-input input {
  margin-right: 8px;
}
</style>
