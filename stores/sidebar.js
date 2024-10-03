// stores/sidebar.js
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
    state: () => ({
        isVisible: false
    }),
    actions: {
        toggleSidebar() {
            this.isVisible = !this.isVisible
            console.log(this.isVisible)
        }
    }
})
