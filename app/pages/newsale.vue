<script setup lang="ts">
import type { Lot } from '~/types/lot'
const saleImg = ref<File | null>(null)
const saleTitle = ref<string>('')
const saleDescription = ref<string>('')
const saleLocation = ref<string>('')
const saleDate = ref<Date>()

const saleLots = ref<Lot[]>([])

// 🧩 Gestion des lots
const addNewLot = () => {
  console.log('➕ Ajout d’un nouveau lot')
}
const importLots = () => {
  console.log('📦 Import de lots')
}

const submitSale = async () => {
  const payload = {
    title: saleTitle.value,
    description: saleDescription.value,
    location: saleLocation.value,
    date: saleDate.value,
    image: saleImg.value,
  }
}
</script>

<template>
  <div>
    <UPageHeader
      title="Création d'une nouvelle vente"
      description="Remplissez les informations pour mettre vos lots en vente"
    />

    <UPageBody>
      <div class="flex flex-col gap-8">
        <CreateSaleInformations
          v-model:saleImg="saleImg"
          v-model:saleTitle="saleTitle"
          v-model:saleDescription="saleDescription"
          v-model:saleDate="saleDate"
          v-model:saleLocation="saleLocation"
        />
        <CreateSaleAddLots v-model:lots="saleLots" />

        <div class="mt-6 flex justify-end">
          <UButton
            color="primary"
            icon="i-lucide-save"
            size="lg"
            @click="submitSale"
            class="cursor-pointer"
          >
            Enregistrer la vente
          </UButton>
        </div>
      </div>
    </UPageBody>
  </div>
</template>
