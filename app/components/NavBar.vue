<script setup lang="ts">
const route = useRoute()

const navItems = computed(() => [
  {
    label: 'Les ventes',
    to: '/',
  },
  {
    label: 'Recherche avancée',
    to: '/search',
  },
  {
    label: 'Menu Item',
    to: '/page2',
  },
  {
    label: 'Menu Item',
    to: '/page4',
  },
])
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <img
          src="~/assets/img/logo_adn.svg"
          class="w-auto h-10 shrink-0"
          alt="adn enchères logo"
        />
      </NuxtLink>
      <TemplateMenu />
    </template>

    <UNavigationMenu :items="navItems" variant="link" />

    <template #right>
      <UColorModeButton class="cursor-pointer" />

      <UButton
        label="Espace adjudicataire"
        color="primary"
        trailing-icon="i-lucide-arrow-right"
        class="hidden lg:inline-flex"
        to="/login"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="navItems"
        orientation="vertical"
        class="-mx-2.5"
      />

      <USeparator class="my-6" />

      <UButton
        label="Espace adjudicataire"
        color="primary"
        to="/login"
        trailing-icon="i-lucide-arrow-right"
        block
      />
    </template>
  </UHeader>
</template>
