<template>
  <div class="container">
    <Header />
    <div class="content">
      <Sidebar />
      <Main />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
import Main from '../components/Main.vue';
import Footer from '../components/Footer.vue';
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
</style>
