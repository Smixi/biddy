<script setup lang="ts">
import { toRefs } from '@vueuse/core'
import type { Gym } from '~/models/gym'

defineEmits(['gymClicked'])
const props = defineProps<{ gym: Gym }>()
const { gym } = toRefs(props)
</script>

<template>
  <div class="m-5 flex flex-col items-center rounded-md text-center shadow-sm transition-transform hover:scale-105"
       @click="$emit('gymClicked')">
    <div>
      <nuxt-img width="100px" :src="gym.logoUrl" class="m2" />
    </div>
    <div class="text-2xl">
      {{ gym.name }}
    </div>
    <div>
      {{ gym.city }}
    </div>
  </div>
</template>
