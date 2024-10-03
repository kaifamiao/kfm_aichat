<template>
  <div class="chat-area">
    <div v-for="message in messages" :key="message.id" class="message">
      <strong>{{ message.sender }}:</strong> {{ message.text }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const messages = ref([
  { id: 1, sender: '用户', text: '你好' },
  { id: 2, sender: '机器人', text: '你好，有什么可以帮助你的吗？' },
  { id: 1, sender: '用户', text: '你好' },
  { id: 2, sender: '机器人', text: '你好，有什么可以帮助你的吗？' },
  { id: 1, sender: '用户', text: '你好' },
  { id: 2, sender: '机器人', text: '你好，有什么可以帮助你的吗？' },
  { id: 1, sender: '用户', text: '你好' },
  { id: 2, sender: '机器人', text: '你好，有什么可以帮助你的吗？' },
  { id: 1, sender: '用户', text: '你好' },
  { id: 2, sender: '机器人', text: '你好，有什么可以帮助你的吗？' },
  { id: 1, sender: '用户', text: '你好' },
  { id: 2, sender: '机器人', text: '你好，有什么可以帮助你的吗？' },
  { id: 1, sender: '用户', text: '你好' },
  { id: 2, sender: '机器人', text: '你好，有什么可以帮助你的吗？' },
  { id: 1, sender: '用户', text: '你好' },
  { id: 2, sender: '机器人', text: '你好，有什么可以帮助你的吗？' },
  { id: 1, sender: '用户', text: '你好' },
  { id: 2, sender: '机器人', text: '你好，有什么可以帮助你的吗？' },
  { id: 1, sender: '用户', text: '你好' },
  { id: 2, sender: '机器人', text: '你好，有什么可以帮助你的吗？' },
  { id: 1, sender: '用户', text: '你好' },
  { id: 2, sender: '机器人', text: '你好，有什么可以帮助你的吗？' },
  { id: 1, sender: '用户', text: '你好' },
  { id: 2, sender: '机器人', text: '你好，有什么可以帮助你的吗？' },
  { id: 1, sender: '用户', text: '你好' },
  { id: 2, sender: '机器人', text: '你好，有什么可以帮助你的吗？' },
  { id: 1, sender: '用户', text: '你好' },
  { id: 2, sender: '机器人', text: '你好，有什么可以帮助你的吗？' },
  { id: 1, sender: '用户', text: '你好' },
  { id: 2, sender: '机器人', text: '你好，有什么可以帮助你的吗？' },
  // 更多消息
]);
</script>

<style scoped>
.chat-area {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}
.message {
  margin-bottom: 8px;
}
</style>
