<template>
  <div class="chat-input">
    <select v-model="selectedOption">
      <option v-for="option in options" :key="option">{{ option }}</option>
    </select>
    <input type="text" v-model="messageText" @keyup.enter="sendMessage" />
    <button @click="sendMessage">发送</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const options = ref(['选项1', '选项2']);
const selectedOption = ref(options.value[0]);
const messageText = ref('');

function sendMessage() {
  if (messageText.value.trim()) {
    // 发送消息的逻辑
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
