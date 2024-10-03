<template>
  <div class="history-chat">
    <ul>
      <li v-for="chat in chats" :key="chat.id">{{ chat.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const chats = ref([
  { id: 1, title: '聊天记录1' },
  { id: 2, title: '聊天记录2' },
  // 更多聊天记录
]);
</script>

<style scoped>
.history-chat {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}
</style>
