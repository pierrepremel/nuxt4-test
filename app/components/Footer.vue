<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  {
    label: 'Conditions générales des ventes',
    to: '/#',
    active: false,
  },

  {
    label: 'Conditions générales des expéditions',
    to: '/#',
    active: false,
  },
  {
    label: 'Politique de confidentialité',
    to: '/#',
    active: false,
  },
  {
    label: 'Mentions légales',
    to: '/#',
    active: false,
  },
  {
    label: 'Support',
    to: '/#',
    active: false,
  },
]
</script>

<template>
  <div>
    <USeparator type="dashed" class="h-px" />

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          ADN Enchères - © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UNavigationMenu :items="items" variant="link" />
      </template>
    </UFooter>
  </div>
</template>

<style></style>
