<template>
  <div :class="'z-10 fixed h-full  w-full bg-black bg-opacity-30 ' + (isSideBarVisible === true ? 'visible' : 'hidden')" @click="hideSideBar()"></div>
  <div class="z-20 fixed bg-red-500 h-full">
    <ul :class="'wrapper ' + (isSideBarVisible === true ? 'open' : 'close')">
      <li>
        <NuxtLink class="flex flex-row place-content-between w-full nav-btn" to="/boulders" @click="hideSideBar()">
          <span class="justify-start text-xl">Boulders</span>
          <Icon class="justify-end" name="guidance:climbing-wall" size="1.5em" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="flex flex-row place-content-between nav-btn" to="/gyms" @click="hideSideBar()">
          <span class="justify-start text-xl">Gyms</span>
          <Icon class="justify-end" name="cil:room" size="1.5em" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="flex flex-row place-content-between nav-btn" to="/profile" @click="hideSideBar()">
          <span class="justify-start text-xl">Profile</span>
          <Icon class="justify-end" name="carbon:user-profile" size="1.5em" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { toRefs } from '@vueuse/core'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores/globalStore';

const store = useGlobalStore();
const { isSideBarVisible } = storeToRefs(store);
const { hideSideBar } = store

const props = withDefaults(defineProps<{
  width?: string,
}>(), { width: '200px' });
defineEmits(['update:visible']);
let { width } = toRefs(props)

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
