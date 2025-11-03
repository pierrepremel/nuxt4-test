import type { Lot } from '~/types/lot'

export const useLots = () => {
  const { $api } = useNuxtApp()
  
  const getLots = () => {
    return useFetch<Lot[]>('/lots', { 
      $fetch: $api,
      key: 'lots',
      lazy: true
    })
  }
  
  const getLot = (id: string) => {
    return useFetch<Lot>(`/lots/${id}`, { 
      $fetch: $api,
      key: `lot-${id}`,
      lazy: true
    })
  }
  
  const getLotsBySale = (saleId: string) => {
    return useFetch<Lot[]>(`/lots?saleId=${saleId}`, { 
      $fetch: $api,
      key: `lots-sale-${saleId}`,
      lazy: true
    })
  }
  
  return {
    getLots,
    getLot,
    getLotsBySale
  }
}