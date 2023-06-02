import { defineStore } from 'pinia'

// This store is used for global app features, like sidebar, loading, etc.
// For data, use the specific store associated.
export const useGlobalStore = defineStore('global', () => {
  const isSideBarVisible = ref(true);

  function showSideBar() {
    isSideBarVisible.value = true
  }

  function hideSideBar(){
    isSideBarVisible.value = false
  }

  function toggleSideBar(){
    isSideBarVisible.value = !isSideBarVisible.value
  }

  return { isSideBarVisible, showSideBar, hideSideBar, toggleSideBar }
  
})
