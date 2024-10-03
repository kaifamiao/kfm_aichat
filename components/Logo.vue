<template>
  <div class="logo" @click="sidebarStore.toggleSidebar()">
    <!-- 在这里放置您的 Logo 图像或 SVG 代码 -->
    <img src="@/assets/logo12.png" alt="Logo" width="150" height="40"/>



  </div>
</template>

<script setup>
// 如果您的 Logo 有任何交互逻辑，可以在这里添加
import {useSidebarStore} from "~/stores/sidebar.js";

const sidebarStore = useSidebarStore()
</script>

<style scoped>
.logo {
  /* 您的 Logo 样式 */
  width: 120px;
  height: auto;
}
</style>
