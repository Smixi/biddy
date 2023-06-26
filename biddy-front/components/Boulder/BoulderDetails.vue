<script setup lang="ts">
import { Radar } from 'vue-chartjs'
import type {
  ChartData,
} from 'chart.js'
import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from 'chart.js'
import type { Boulder } from '~/models/boulder'

const props = defineProps<{ boulder: Boulder }>()
const { boulder } = toRefs(props)
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
)
const options = {
  responsive: true,
  maintainAspectRatio: false,
}
const labels = [
  'Strength',
  'Finger Strength',
  'Technique',
  'Reading',
  'Dynamic',
  'Footwork',
]
const rating = boulder.value.rating
const data: ChartData<'radar'> = {
  labels,
  datasets: [
    {
      label: boulder.value.name,
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [rating.strength, rating.fingerStrength, rating.technique, rating.reading, rating.dynamic, rating.footwork],
      // data: [boulder.value.strength, boulder.value.technique, boulder.value.reading],
    },
  ],
}
</script>

<template>
  <Radar :data="data" :options="options" />
</template>
