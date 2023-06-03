<template>
  <div class="w-full h-full">
    <ul class="list-none">
      <li v-for="boulder of boulders" class="flex flex-row">
        <div>{{ boulder.grade }}</div>
        <div class="flex-1 text-center">{{ boulder.name }}</div>
        <div>
          <Icon name="icon-park-outline:muscle"></Icon>
          <span>{{ boulder.strength }}</span>
        </div>
        <div>
          <Icon name="solar:star-bold-duotone"></Icon>
          <span>
            {{ boulder.technique }}
          </span>
        </div>
        <div>
          <Icon name="icon-park-outline:brain"></Icon>
          <span>{{ boulder.reading }}</span>
        </div>
        <div>
          <Icon name="icon-park-outline:like"></Icon>
          <span>{{ boulder.liked }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useBoulderStore } from '~/stores/boulderStore';
const { boulders, retrieveBoulders } = useBoulderStore()
retrieveBoulders()
</script>
