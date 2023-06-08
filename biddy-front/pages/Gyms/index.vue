<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <GymItem v-for="gym of gyms" :gym="gym"></GymItem>
  </div>
</template>
<script setup lang="ts">

import { useGymStore } from '~/stores/gymStore';
import { storeToRefs } from 'pinia';
const gymStore = useGymStore()
const { gyms } = storeToRefs(gymStore)
const { retrieveGyms } = gymStore

retrieveGyms()

</script>
