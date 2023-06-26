<script setup lang="ts">
</script>

<template>
  <div>
    <Suspense>
      <div>
        Dashboard
      </div>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>
