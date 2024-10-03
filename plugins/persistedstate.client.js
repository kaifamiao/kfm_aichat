import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
    const pinia = nuxtApp.$pinia;

    // 检查 pinia 是否已定义
    if (!pinia) {
        console.error('Pinia 未初始化，请确保您已正确设置 Pinia 插件。');
        return;
    }

    // 在 Pinia 中注册插件
    pinia.use(({ store }) => {
        const storeId = store.$id;

        // 初始化时从 localStorage 加载状态
        const fromStorage = localStorage.getItem(`pinia-${storeId}`);
        if (fromStorage) {
            store.$patch(JSON.parse(fromStorage));
        }

        // 订阅 store 的变化，将状态保存到 localStorage
        store.$subscribe((_mutation, state) => {
            localStorage.setItem(`pinia-${storeId}`, JSON.stringify(state));
        });
    });
});
