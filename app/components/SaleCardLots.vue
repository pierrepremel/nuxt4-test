<script lang="ts" setup>
import type { Lot } from '~/types/lot'
const props = defineProps<{
  lots: Lot[]
}>()
</script>

<template>
  <div>
    <p class="font-semibold text-gray-400 mb-2">
      {{ lots.length }} lot{{ lots.length > 1 ? 's' : '' }}
    </p>
    <div class="grid grid-cols-4 gap-2">
      <div
        v-for="(lot, index) in lots.slice(0, 4)"
        :key="lot.id"
        class="relative aspect-square rounded-lg overflow-hidden"
      >
        <img
          :src="lot.imageUrl"
          :alt="lot.title"
          class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div
          v-if="index === 3 && lots.length > 4"
          class="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-semibold"
        >
          +{{ lots.length - 4 }}
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
