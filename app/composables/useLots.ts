import type { Lot } from '~/types/lot'

export const useLots = () => {
  const { $api } = useNuxtApp()
  
  const getLots = () => {
    return useFetch<Lot[]>('/lots', { 
      $fetch: $api,
      key: 'lots'
    })
  }
  
  const getLot = (id: string) => {
    return useFetch<Lot>(`/lots/${id}`, { 
      $fetch: $api,
      key: `lot-${id}`
    })
  }
  
  // const getLotsBySale = (saleId: string) => {
  //   return useFetch<Lot[]>(`/sales/${saleId}/lots`, { 
  //     $fetch: $api,
  //     key: `lots-sale-${saleId}`
  //   })
  // }
  
  return {
    getLots,
    getLot,
    // getLotsBySale
  }
}