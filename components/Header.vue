<template>
  <header class="header">
    <button class="toggle-button" @click="$emit('toggle-sidebar')">
      ☰
    </button>
    <h1 class="logo">Logo</h1>
    <h2 class="user-info">欢迎，{{ username }}</h2>
  </header>
</template>

<script setup>
const username = '用户姓名'; // 可以通过 props 或状态管理获取
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f5f5f5;
}

.toggle-button {
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .toggle-button {
    display: block;
  }
}
</style>
