<template>
  <aside class="sidebar" v-show="sidebarStore.isVisible" >
    <button class="close-button" @click="closeSidebar" >×</button>
    <NewChat />
    <HistoryChat />
    <Setting />
  </aside>
</template>

<script setup>
import {defineProps, defineEmits, ref} from 'vue';
import NewChat from './NewChat.vue';
import HistoryChat from './HistoryChat.vue';
import Setting from './Setting.vue';
import {useSidebarStore} from "~/stores/sidebar.js";
const isSidebarVisible= ref(true)

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['close-sidebar']);
const sidebarStore = useSidebarStore()
function closeSidebar() {
  emit('close-sidebar');
  console.log("closeSidebar"+sidebarStore.toggleSidebar)

  sidebarStore.toggleSidebar = !sidebarStore.toggleSidebar;

}


</script>

<style scoped>
.sidebar {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #fff;
}

/* 关闭按钮样式 */
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

}

@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    z-index: 1000;
    width: 250px;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    transition: transform 0.3s ease-in-out;
    transform: translateX(-100%);
  }

  .sidebar.active {
    transform: translateX(0);
  }
}
</style>
