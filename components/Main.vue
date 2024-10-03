<template>
  <main class="main">
    <MainHeader />
    <ChatArea />
    <ChatInput />
  </main>
</template>

<script setup>
import MainHeader from './MainHeader.vue';
import ChatArea from './ChatArea.vue';
import ChatInput from './ChatInput.vue';
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
