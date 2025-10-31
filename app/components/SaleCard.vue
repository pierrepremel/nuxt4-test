<script lang="ts" setup>
import type { Sale } from '~/types/sale'
import type { Lot } from '~/types/lot'
import SaleCardStatus from './saleCardStatus.vue'

const props = defineProps<{
  sale: Sale
  lots: Lot[]
  pendingLots?: boolean
  errorLots?: Error | null
}>()
</script>

<template>
  <div>
    <UCard class="hover:shadow-lg transition-all duration-200 cursor-pointer">
      <div class="flex justify-between items-center">
        <SaleCardStatus :saleStatus="sale.status" />
        <div class="flex items-center text-sm font-semibold text-gray-600 mt-1">
          <UIcon name="i-lucide-map-pin" class="size-4 mr-1" />
          {{ sale.location }}
        </div>
      </div>
      <div class="flex justify-between items-center my-3">
        <h2 class="font-semibold text-lg">{{ sale.title }}</h2>
      </div>

      <p class="text-gray-700 leading-relaxed line-clamp-3 text-sm">
        {{ sale.description }}
      </p>

      <div v-if="pendingLots">Chargement des lots...</div>
      <div v-else-if="lots && lots.length > 0" class="mt-4">
        <SaleCardLots :lots="lots" />
      </div>
      <div v-else>Aucun lot n'a été créé pour cette vente</div>
    </UCard>
  </div>
</template>

<style>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
