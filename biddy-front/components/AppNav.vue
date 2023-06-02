<template>
  <ul :class="'wrapper ' + (visible === true ? 'open' : 'close')">
    <li>
      <NuxtLink class="flex flex-row place-content-between w-full nav-btn" to="/boulders">
        <span class="justify-start text-xl">Boulders</span>
        <Icon class="justify-end" name="guidance:climbing-wall" size="1.5em"/>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink class="flex flex-row place-content-between nav-btn" to="/gyms">
        <span class="justify-start text-xl">Gyms</span>
        <Icon class="justify-end" name="cil:room" size="1.5em"/>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink class="flex flex-row place-content-between nav-btn" to="/profile">
        <span class="justify-start text-xl">Profile</span>
        <Icon class="justify-end" name="carbon:user-profile" size="1.5em"/>
      </NuxtLink>
    </li>
  </ul>
</template>
<script setup lang="ts">
  import { toRefs } from '@vueuse/core'
  const props = withDefaults(defineProps<{
    width?: string,
    visible?: boolean
  }>(), {visible: true, width: '200px'});
  let { width, visible } = toRefs(props)
</script>
<style>

.wrapper {
  box-sizing: content-box;
  width: v-bind(width);
  overflow: hidden;
}

.open {
  transition: width 0.5s;
}

.close {
  width: 0px;
  transition: width 0.5s;
}
</style>
