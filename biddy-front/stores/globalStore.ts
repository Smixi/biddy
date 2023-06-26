import { defineStore } from 'pinia'
import { DefaultStoreNames } from './storeNames'

// This store is used for global app features, like sidebar, loading, etc.
// For data, use the specific store associated.
export const useGlobalStore = defineStore(DefaultStoreNames.GLOBAL, () => {
  const isSideBarVisible = ref(false)

  const preferences = ref(null)

  function showSideBar() {
    isSideBarVisible.value = true
  }

  function hideSideBar() {
    isSideBarVisible.value = false
  }

  function toggleSideBar() {
    isSideBarVisible.value = !isSideBarVisible.value
  }

  return { isSideBarVisible, showSideBar, hideSideBar, toggleSideBar }
})
