<template>
  <div
    class="flex overflow-hidden bg-white space-x-2 shadow-md hover:bg-gray-300 hover:opacity-90 hover:shadow-sm flex-row transition m-x-3 duration-320 hover:scale-102 justify-center items-stretch rounded-full">
    <div :class="`text-center basis-2/12 md:basis-1/12 bg-${getGradeColor()}-200 rounded-l-full justify-center`">
      <div class="flex items-center h-full w-full">
        <span class="flex-1">
          {{ boulder.grade === BoulderGrade.MYSTERY ? "?" : boulder.grade }}
        </span>
      </div>
    </div>
    <div class="flex-grow text-center basis-6/12">
      <div class="flex items-center h-full w-full">
        <span class="flex-1">
          {{ boulder.name }}
        </span>
      </div>
    </div>
    <div class="flex bg-green-50">
      <div class="flex items-center">
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
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Boulder, BoulderGrade } from '~/models/boulder';
import { toRefs } from '@vueuse/core'

const props = defineProps<{ boulder: Boulder }>()
const { boulder } = toRefs(props)

function getGradeColor() {
  console.log(boulder.value.grade)
  if (boulder.value.grade === BoulderGrade.MYSTERY) {
    return "pink"
  }
  if (boulder.value.grade < 3) {
    return "green"
  }
  if (boulder.value.grade < 6) {
    return "orange"
  }
  if (boulder.value.grade < 9) {
    return "red"
  }
  if (boulder.value.grade < 12) {
    return "black"
  }
  return "white"
}

</script>
