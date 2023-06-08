<template>
  <div class="flex flex-col text-center rounded-md shadow-sm m-2 items-center hover:scale-105 transition-transform">
    <div>
      <nuxt-img width="100px" src="https://placehold.co/200x200" class="m2"></nuxt-img>
    </div>
    <div class="text-2xl">
      {{  gym.name }}
    </div>
    <div>
      {{  gym.city }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { Gym } from '~/models/gym';
import { toRefs } from '@vueuse/core'

const props = defineProps<{ gym: Gym }>()
const { gym } = toRefs(props)
</script>
