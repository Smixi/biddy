<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Gym } from '~/models/gym'
import { useGymStore } from '~/stores/gymStore'

const gymStore = useGymStore()
const { gyms } = storeToRefs(gymStore)
const { retrieveGyms, setCurrentGym } = gymStore


function goToBoulder(gym: Gym){
  setCurrentGym(gym)
  navigateTo(`/gyms/${gym.id}`)
}

retrieveGyms()
</script>

<template>
  <div class="grid grid-cols-2 gap-4 md:grid-cols-3 auto-rows-fr">
    <GymItem v-for="gym of gyms" :key="gym.id" :gym="gym" @gym-clicked="goToBoulder(gym)"/>
  </div>
</template>
