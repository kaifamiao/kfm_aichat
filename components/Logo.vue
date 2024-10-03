<template>
  <div class="logo" @click="sidebarStore.toggleSidebar()">
    <!-- 在这里放置您的 Logo 图像或 SVG 代码 -->
<!--    <img src="@/assets/logo.png" alt="Logo" />-->
    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#4a90e2"/>

      <!-- 简化的机器人脸 -->
      <rect x="8" y="8" width="24" height="20" rx="2" fill="white"/>

      <!-- 机器人眼睛 -->
      <circle cx="16" cy="18" r="3" fill="#4a90e2"/>
      <circle cx="24" cy="18" r="3" fill="#4a90e2"/>

      <!-- 机器人天线 -->
      <line x1="20" y1="8" x2="20" y2="4" stroke="white" stroke-width="2"/>
      <circle cx="20" cy="3" r="1.5" fill="white"/>

      <!-- 简化的文字 "E" 代表 "Everyone" -->
      <text x="20" y="37" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle" fill="white">Everyone-llm</text>
    </svg>


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
