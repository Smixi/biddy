<template>
  <div class="m-2">
    <div class="flex-col space-y-2">
      <div v-for="boulder of boulders">
        <BoulderItem :boulder="boulder"></BoulderItem>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import { useBoulderStore } from '~/stores/boulderStore';
import { storeToRefs } from 'pinia';
const boulderStore = useBoulderStore()
const { boulders } = storeToRefs(boulderStore)
const { retrieveBoulders } = boulderStore

retrieveBoulders()

</script>
