import { defineStore } from 'pinia';

export const useModelStore = defineStore('modelStore', {
    state: () => ({
        selectedModel: '模型1',
        selectedOption: '选项1',
        selectedRole: '专家',
    }),
    actions: {
        updateModel(model) {
            this.selectedModel = model;
        },
        updateOption(option) {
            this.selectedOption = option;
        },
        updateRole(role) {
            this.selectedRole = role;
        },
    },
    persist: true, // 简化配置
});

//第一版
// import { defineStore } from 'pinia';
//
// export const useModelStore = defineStore('model', {
//     state: () => ({
//         selectedModel: '模型1',
//         selectedOption: '选项1', // 确保默认值正确
//         selectedRole: '专家',
//     }),
//     actions: {
//         updateModel(model) {
//             this.selectedModel = model;
//         },
//         updateOption(option) {
//             this.selectedOption = option;
//         },
//         updateRole(role) {
//             this.selectedRole = role;
//         },
//     },
// });
