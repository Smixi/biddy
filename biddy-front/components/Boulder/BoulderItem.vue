<template>
  <div class="flex flex-row">
    <div>
      {{ boulder.grade != BoulderGrade.MYSTERY ? boulder.grade : "?" }}
    </div>
    <div>
      {{  boulder.name }}
    </div>
  </div>
</template>
<script setup lang="ts">
  import { Boulder, BoulderGrade } from '~/models/boulder';
  const boulder = defineProps<Boulder>()

</script>
