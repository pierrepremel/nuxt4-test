<script setup lang="ts">
const { getSales } = useSales()
const { getLots } = useLots()

const { data: sales } = await getSales()
const { data: lots } = await getLots()
console.log(sales.value)
const query = ref<string>('')

const results = computed(() => {
  if (!query.value) return []

  const q = query.value.toLowerCase()

  const saleResults = sales.value
    .filter((s) => s.title.toLowerCase().includes(q))
    .map((s) => ({
      type: 'sale' as const,
      id: s.id,
      title: s.title,
      subtitle: `Vente ${s.status === 'live' ? 'en cours' : 'prévue'} à ${
        s.location
      }`,
    }))

  const lotResults = lots.value
    .filter((l) => l.title.toLowerCase().includes(q))
    .map((l) => ({
      type: 'lot' as const,
      id: l.id,
      title: l.title,
      subtitle: `Lot de la vente #${l.saleId}`,
    }))

  return [...saleResults, ...lotResults]
})
</script>

<template>
  <UPageBody>
    <div class="space-y-4">
      <UInput
        v-model="query"
        size="xl"
        class="w-full"
        placeholder="Que recherchez vous ? Mobilier, montre, matériel..."
      />
    </div>
    <section>
      <div v-if="results.length">
        <div
          v-for="item in results"
          :key="item.type + item.id"
          class="p-3 border rounded-lg flex items-center justify-between"
        >
          <div>
            <div class="font-medium">{{ item.title }}</div>
            <div class="text-sm text-gray-500">{{ item.subtitle }}</div>
          </div>
          <UBadge :color="item.type === 'sale' ? 'blue' : 'green'">
            {{ item.type === 'sale' ? 'Vente' : 'Lot' }}
          </UBadge>
        </div>
      </div>
      <div v-else-if="query">Aucun résultat trouvé.</div>
    </section>
  </UPageBody>
</template>
