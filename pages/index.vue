<template>
  <div class="container">
    <Header @toggle-sidebar="toggleSidebar" />
    <div class="content">
      <Sidebar :class="sidebarClass" @close-sidebar="closeSidebar" />
      <Main />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
import Main from '../components/Main.vue';
import Footer from '../components/Footer.vue';

const isSidebarVisible = ref(true);

function toggleSidebar() {
  isSidebarVisible.value = !isSidebarVisible.value;
}

function closeSidebar() {
  isSidebarVisible.value = false;
}

function handleResize() {
  if (window.innerWidth > 768) {
    isSidebarVisible.value = true;
  } else {
    isSidebarVisible.value = false;
  }
}

onMounted(() => {
  if (process.client) {
    handleResize();
    window.addEventListener('resize', handleResize);
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('resize', handleResize);
  }
});

const sidebarClass = computed(() => {
  return {
    sidebar: true,
    active: isSidebarVisible.value,
  };
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.sidebar {
  width: 20%;
}

.main {
  flex: 1;
}

@media (max-width: 768px) {
  .content {
    position: relative;
  }

  .sidebar {
    display: none;
  }

  .sidebar.active {
    display: flex;
    width: 100%;
  }

  .main {
    width: 100%;
  }
}
</style>
