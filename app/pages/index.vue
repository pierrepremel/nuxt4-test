<script setup lang="ts">
import type { Lot } from '~/types/lot'
const { getSales } = useSales()
const { getLots } = useLots()

const { data: sales, pendingSales, errorSales } = await getSales()
const { data: lots, pendingLots, errorLots } = await getLots()

const lotsBySaleId = computed(() => {
  if (!lots.value) return new Map()

  return lots.value.reduce(
    (map, lot) => map.set(lot.saleId, [...(map.get(lot.saleId) || []), lot]),
    new Map<string, Lot[]>()
  )
})

const links = ref([
  {
    label: 'Créer une vente',
    icon: 'i-ep-plus',
    color: 'neutral',
    to: '/newsale',
  },
])
</script>

<template>
  <div>
    <UPageHeader
      title="Les ventes"
      description="Ventes en cours et à venir"
      :links="links"
    />
    <UPageBody>
      <div>
        <div v-if="pendingSales">Chargement</div>
        <div v-else-if="errorSales">Erreur : {{ errorSales.message }}</div>
        <div v-else class="grid grid-cols-3 gap-6">
          <SaleCard
            v-for="sale in sales"
            :key="sale.id"
            :sale="sale"
            :pendingLots="pendingLots"
            :errorLots="errorLots"
            :lots="lotsBySaleId.get(sale.id) || []"
          />
        </div>
      </div>
    </UPageBody>
  </div>
</template>
