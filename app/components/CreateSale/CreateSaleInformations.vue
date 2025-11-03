<script setup lang="ts">
import { DateFormatter, today, getLocalTimeZone } from '@internationalized/date'

const saleImg = defineModel<File | null>('saleImg')
const saleTitle = defineModel<string>('saleTitle')
const saleDescription = defineModel<string>('saleDescription')
const saleLocation = defineModel<string>('saleLocation')
const saleDate = defineModel('saleDate', {
  default: today(getLocalTimeZone()).add({ weeks: 1 }),
})

const dateFormat = new DateFormatter('fr-FR', { dateStyle: 'medium' })
</script>

<template>
  <section>
    <h2 class="text-xl sm:text-2xl font-semibold">Informations sur la vente</h2>

    <div class="flex flex-col md:flex-row my-4 gap-6">
      <div>
        <UFormField label="Image d'illustration">
          <UFileUpload
            v-model="saleImg"
            class="w-full md:w-80 min-h-40 md:min-h-51"
          />
        </UFormField>
      </div>

      <!-- 🧾 Détails -->
      <div class="grow space-y-2">
        <UFormField label="Titre" required>
          <UInput
            v-model="saleTitle"
            placeholder="Ex : Mobilier et Objets d'Art..."
            class="w-full"
          />
        </UFormField>

        <UFormField label="Description" required>
          <UTextarea
            v-model="saleDescription"
            placeholder="Décrivez brièvement votre vente..."
            autoresize
            :maxrows="3"
            class="w-full"
          />
        </UFormField>

        <div class="flex flex-col sm:flex-row w-full gap-6">
          <UFormField label="Date" required class="w-full sm:w-1/2">
            <UPopover>
              <UButton
                color="neutral"
                variant="subtle"
                icon="i-lucide-calendar"
                class="w-full"
              >
                {{
                  dateFormat.format(
                    saleDate.toDate
                      ? saleDate.toDate(getLocalTimeZone())
                      : new Date(saleDate)
                  )
                }}
              </UButton>
              <template #content>
                <UCalendar v-model="saleDate" class="p-2" />
              </template>
            </UPopover>
          </UFormField>

          <UFormField label="Lieu" required class="w-full sm:w-1/2">
            <UInput
              v-model="saleLocation"
              placeholder="Ex: Lyon"
              class="w-full"
            />
          </UFormField>
        </div>
      </div>
    </div>
  </section>
</template>
