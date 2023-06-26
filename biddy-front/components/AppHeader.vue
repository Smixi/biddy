<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores/globalStore'

const globalStore = useGlobalStore()
const { isSideBarVisible } = storeToRefs(globalStore)
const { toggleSideBar } = globalStore
</script>

<template>
  <header class="h-full">
    <div class="h-full flex flex-row content-around items-center">
      <button class="inline-flex items-center rounded px-4 py-2 font-bold text-gray-800 hover:bg-gray-400" @click="toggleSideBar">
        <Icon :name="`lucide:panel-${isSideBarVisible ? 'left' : 'right'}`" size="1.5em" />
      </button>
      <div class="flex-auto">
        Current Gym
      </div>
    </div>
  </header>
</template>
