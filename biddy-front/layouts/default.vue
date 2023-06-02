<template>
  <section id="page">
    <div class="header">
      <AppHeader/>
    </div>
    <main>
      <div class="flex h-full w-full">
        <div class="sidebar">
          <AppNav :visible="isSideBarVisible"/>
        </div>
        <div class="flex-auto">
          <slot/>
        </div>
      </div>
    </main>
    <div class="footer">
      <AppFooter/>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useGlobalStore } from '@/stores/globalStore';

  const store = useGlobalStore();

  const { isSideBarVisible } = storeToRefs(store);

</script>

<style>

#page {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas:
    "head"
    "main"
    "foot";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 1fr;
}

#page > .header {
  grid-area: head;
  background-color: #8ca0ff;
}

.sidebar {
  grid-area: nav;
  background-color: #ffa08c;
  transition: width 0.75s,
}

#page > main {
  grid-area: main;
  background-color: #ffff64;
}

#page > .footer {
  grid-area: foot;
  background-color: #8cffa0;
}
</style>
