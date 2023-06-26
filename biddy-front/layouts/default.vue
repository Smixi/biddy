<script setup lang="ts">

</script>

<template>
  <section id="page">
    <div class="header">
      <AppHeader />
    </div>
    <main>
      <div class="h-full w-full flex">
        <AppNav />
        <div class="flex-auto">
          <slot />
        </div>
      </div>
    </main>
    <div class="footer">
      <AppFooter />
    </div>
  </section>
</template>

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

#page>.header {
  grid-area: head;
  background-color: #8ca0ff;
}

#page>main {
  grid-area: main;
  background-color: #ffff64;
}

#page>.footer {
  grid-area: foot;
  background-color: #8cffa0;
}
</style>
