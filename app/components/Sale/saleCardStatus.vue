<script lang="ts" setup>
type SaleStatus = 'upcoming' | 'live'

const props = defineProps<{
  saleStatus: SaleStatus
}>()

const statusMap: Record<
  SaleStatus,
  {
    label: string
    variant: string
    color: string
    icon?: string
  }
> = {
  upcoming: {
    label: 'À venir',
    variant: 'solid',
    color: 'secondary',
    icon: 'i-lucide:calendar-clock',
  },
  live: {
    label: 'En cours',
    variant: 'outline',
    color: 'primary',
  },
}
</script>

<template>
  <div>
    <UBadge
      :icon="statusMap[saleStatus].icon ?? ''"
      size="md"
      :variant="statusMap[saleStatus].variant"
      :color="statusMap[saleStatus].color"
    >
      <span v-if="saleStatus === 'live'" class="relative flex size-2 mr-1">
        <span
          class="bg-success animate-ping absolute inline-flex size-full rounded-full opacity-75"
        />
        <span
          class="bg-success relative inline-flex size-2 scale-90 rounded-full"
        />
      </span>
      {{ statusMap[saleStatus].label }}
    </UBadge>
  </div>
</template>

<style></style>
