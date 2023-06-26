<script setup lang="ts">
import { toRefs } from '@vueuse/core'
import { Boulder } from '~/models/boulder'
import { BoulderGrade } from '~/models/boulder'

defineEmits(['boulderClicked'])

const props = defineProps<{ boulder: Boulder }>()
const { boulder } = toRefs(props)

function getGradeColor() {
  if (boulder.value.grade === BoulderGrade.MYSTERY)
    return 'bg-purple-200'

  if (boulder.value.grade < 2)
    return 'bg-yellow-200'

  if (boulder.value.grade < 4)
    return 'bg-green-200'

  if (boulder.value.grade < 6)
    return 'bg-blue-200'

  if (boulder.value.grade < 8)
    return 'bg-red-200'

  if (boulder.value.grade < 10)
    return 'bg-black text-white'

  return 'bg-white'
}

</script>

<template>
  <div
    class="flex flex-row items-stretch justify-center overflow-hidden rounded-full bg-gray-200 shadow-md transition duration-320 hover:scale-102 space-x-2 hover:bg-gray-300 hover:opacity-90 hover:shadow-sm h-full w-full"
    @click="$emit('boulderClicked')"
    >
    <div :class="`text-center basis-2/12 md:basis-3/12 rounded-l-full justify-center border-r-black ${getGradeColor()}`">
      <div class="h-full w-full flex items-center">
        <span class="flex-1">
          V{{ boulder.grade === BoulderGrade.MYSTERY ? "?" : boulder.grade }}
        </span>
      </div>
    </div>
    <div class="flex-grow basis-6/12 text-center">
      <div class="h-full w-full flex items-center">
        <span class="flex-1">
          {{ boulder.name }}
        </span>
      </div>
    </div>  
    <div class="flex pr-3">
      <div class="flex items-center">
        <span class="mx-2 text-center invisible w-0 lg:visible lg:w-fit">{{ boulder.publishedAt.toLocaleDateString() }}</span>
        <!-- <div class="grid">
          <Icon name="icon-park-outline:muscle" />
          <span class="text-center">{{ boulder.strength.toFixed(0) }}</span>
        </div>
        <div class="grid">
          <Icon name="solar:star-bold-duotone" />
          <span class="text-center">
            {{ boulder.technique.toFixed(0) }}
          </span>
        </div>
        <div class="grid">
          <Icon name="icon-park-outline:brain" />
          <span class="text-center">{{ boulder.reading.toFixed(0) }}</span>
        </div> -->
        <div class="grid">
          <Icon name="icon-park-outline:like" />
          <span class="text-center">{{ boulder.liked }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
