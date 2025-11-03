<script setup lang="ts">
import type { Lot } from '~/types/lot'

const { getSales } = useSales()
const { getLots } = useLots()

const {
  data: sales,
  pending: pendingSales,
  error: errorSales,
} = await getSales()
const { data: lots, pending: pendingLots, error: errorLots } = await getLots()

const lotsBySaleId = computed(() => {
  if (!lots.value) return new Map<string, Lot[]>()

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
      <div v-if="pendingSales">Chargement…</div>
      <div v-else-if="errorSales">Erreur : {{ errorSales.message }}</div>

      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
      >
        <template v-for="sale in sales" :key="sale.id">
          <NuxtLink :to="`/${sale.id}`">
            <SaleCard
              :sale="sale"
              :pendingLots="pendingLots"
              :errorLots="errorLots"
              :lots="lotsBySaleId.get(sale.id) || []"
            />
          </NuxtLink>
        </template>
      </div>
    </UPageBody>
  </div>
</template>
