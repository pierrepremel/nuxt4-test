<script setup lang="ts">
const { getSales } = useSales()
const { getLots } = useLots()
const { data: sales, pendingSales, errorSales } = await getSales()
const { data: lots, pendingLots, errorLots } = await getLots()

const links = ref([
  {
    label: 'Créer une vente',
    icon: 'i-ep-plus',
    color: 'neutral',
    to: '/create',
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
      <div v-if="pendingSales">Chargement</div>
      <div v-else-if="errorSales">Erreur : {{ errorSales.message }}</div>
      <ul v-else>
        <li v-for="sale in sales" :key="sale.id">{{ sale.title }}</li>
      </ul>

      <div>
        <div v-if="pendingLots">Chargement</div>
        <div v-else-if="errorLots">Erreur : {{ errorLots.message }}</div>
        <ul v-else>
          <li v-for="lot in lots" :key="lot.id">{{ lot.title }}</li>
        </ul>
      </div>
    </UPageBody>
  </div>
</template>
