<script setup lang="ts">
import type { Lot } from '~/types/lot'

const lots = defineModel<Lot[]>('lots', { default: [] })
const addLot = () => {
  const newLot: Lot = {
    id: crypto.randomUUID(),
    saleId: '',
    saleOrder: 0,
    title: '',
    description: '',
    category: '',
    lowEstimate: null,
    highEstimate: null,
    imageUrl: '',
  }
  lots.value.push(newLot)
}

const removeLot = (id: string) => {
  lots.value = lots.value.filter((lot) => lot.id !== id)
}
</script>

<template>
  <section>
    <h2 class="text-xl sm:text-2xl font-semibold">
      Lots associés à cette vente
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-4">
      <template v-if="lots.length > 0" class="space-y-3">
        <UCard v-for="(lot, index) in lots" :key="lot.id">
          <div class="flex justify-between mb-2">
            <h3 class="font-semibold text-md">Lot n°{{ index + 1 }}</h3>
            <UButton
              icon="i-lucide-trash"
              class="cursor-pointer"
              variant="outline"
              size="sm"
              @click="removeLot(lot.id)"
            />
          </div>
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <div class="w-1/3">
                <UFormField label="Image du lot" required>
                  <UFileUpload v-model="lot.imageUrl" class="w-full h-36" />
                </UFormField>
              </div>
              <div class="flex flex-col space-y-2 gap-2 w-2/3">
                <UFormField label="Nom du lot" required>
                  <UInput
                    v-model="lot.category"
                    placeholder="Ex : Lot d'ordinateurs portable"
                    class="w-full"
                  />
                </UFormField>
                <UFormField label="Description" required>
                  <UTextarea
                    v-model="saleDescription"
                    placeholder="Décrivez brièvement votre lot..."
                    autoresize
                    :maxrows="2"
                    class="w-full"
                  />
                </UFormField>
              </div>
            </div>
            <div class="flex gap-2">
              <div class="w-1/3">
                <UFormField label="Catégorie" required>
                  <UInput v-model="lot.title" placeholder="" class="w-full" />
                </UFormField>
              </div>
              <UFormField label="Estimation basse">
                <UInput v-model="lot.lowEstimate" placeholder="Ex : 150" />
              </UFormField>
              <UFormField label="Estimation haute">
                <UInput v-model="lot.highEstimate" placeholder="Ex : 400" />
              </UFormField>
            </div>
          </div>
        </UCard>
      </template>

      <UEmpty
        icon="i-lucide-package"
        title="Ajouter un nouveau lot"
        description="Vous pouvez ajouter jusqu'à 500 lots par vente"
      >
        <template #actions>
          <div class="flex flex-col sm:flex-row gap-4">
            <UButton
              @click="addLot()"
              icon="i-lucide-package-plus"
              size="md"
              color="primary"
              variant="solid"
              class="cursor-pointer"
            >
              Ajouter un lot
            </UButton>

            <UButton
              icon="i-lucide-import"
              size="md"
              color="primary"
              class="cursor-pointer"
              variant="outline"
            >
              Importer des lots
            </UButton>
          </div>
        </template>
      </UEmpty>
    </div>
  </section>
</template>
