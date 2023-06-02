<template>
  <header class="h-full">
    <div class="h-full flex flex-row content-around items-center">
      <button class="hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" v-on:click="toggleSideBar">
        <Icon :name="'lucide:panel-' + (isSideBarVisible ? 'left' : 'right')" size="1.5em"/>
      </button>
      <div class="flex-auto">
          Current Gym
      </div>
      <div class="flex-auto">
          Title
      </div>
      <div class="flex-none mr-3">
        <button class="h-full">
          Logout
        </button>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores/globalStore';
  const globalStore = useGlobalStore() 
  const { isSideBarVisible } = storeToRefs(globalStore)
  const { toggleSideBar } = globalStore

</script>
