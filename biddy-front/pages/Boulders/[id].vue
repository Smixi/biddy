<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBoulderStore } from '~/stores/boulderStore'

const boulderStore = useBoulderStore()
const { currentBoulder } = storeToRefs(boulderStore)
const { retrieveBoulder } = boulderStore
const route = useRoute();
retrieveBoulder(route.params.id as string)
</script>
<template>
  <div v-if="currentBoulder !== null"
    class="h-full w-full flex flex-col bg-green-400 md:grid md:grid-cols-2 md:auto-rows-fr">
    <div class="flex h-full flex-col">
      <div class="w-full grid grid-cols-3 bg-gray-500">
        <button>
          <Icon name="icon-park-solid:left-c">
            
          </Icon></button>
          <span>

          </span>{{ currentBoulder.name }}
      </div>
      <div class="self-center h-full flex align-middle">
          <nuxt-img :src="currentBoulder.pictureUrl" class="m2" />
      </div>
    </div>
    <div class="bg-purple-400">
      <BoulderDetails :boulder="currentBoulder"></BoulderDetails>
    </div>
  </div>
</template>
