<script setup lang="ts">
const config = useAppConfig()

useSeoMeta({
  title: config.title,
})
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
