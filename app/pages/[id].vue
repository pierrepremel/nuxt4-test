<script setup lang="ts">
import type { Sale } from '~/types/sale'
import type { Lot } from '~/types/lot'
const route = useRoute()
const { getSale } = useSales()
const { getLotsBySale } = useLots()

const saleId = route.params.id

const { data: sale, pending: pendingSale } = await getSale(saleId as string)
const { data: lots, pending: pendinglots } = await getLotsBySale(
  saleId as string
)

useSeoMeta({
  title: () => sale.value?.title,
})
</script>

<template>
  <div v-if="pendingSale || pendinglots">Chargement...</div>
  <div v-else>
    <UPageHeader :title="`Vente id : ${route.params.id}`" />
    <UPageBody>
      <div>
        {{ sale }}
      </div>
      <USeparator />
      <div v-for="lot in lots" :key="lot.id">
        {{ lot }}
      </div>
    </UPageBody>
  </div>
</template>
