<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Boulder } from '~/models/boulder'
import { useBoulderStore } from '~/stores/boulderStore'

const boulderStore = useBoulderStore()
const { boulders } = storeToRefs(boulderStore)
const { retrieveBoulders, setCurrentBoulder } = boulderStore

retrieveBoulders()

function goToBoulder(boulder: Boulder){
  setCurrentBoulder(boulder)
  navigateTo(`/boulders/${boulder.id}`)
}
</script>

<template>
  <div class="m-2">
    <div class=" m-y-2 grid grid-cols-3 gap-4">
      <label class="relative block">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><!-- ... --></svg>
        </span>
        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
      </label>
      <button
        type="button"
        class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-sm">
        <Icon name="material-symbols:add"></Icon>
        Create your block
      </button>
    </div>
    <div class="grid grid-cols-1 auto-rows-fr gap-4 md:grid-cols-3">
      <div v-for="boulder of boulders" :key="boulder.id">
        <BoulderItem :boulder="boulder" @boulder-clicked="goToBoulder(boulder)"/>
      </div>
    </div>
  </div>
</template>
