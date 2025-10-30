import type { Sale } from '~/types/sale'

export const useSales = () => {
  const { $api } = useNuxtApp()
  
  const getSales = () => {
    return useFetch<Sale[]>('/sales', { 
      $fetch: $api,
      key: 'sales'
    })
  }
  
  const getSale = (id: string) => {
    return useFetch<Sale>(`/sales/${id}`, { 
      $fetch: $api,
      key: `sale-${id}`
    })
  }
  
  return {
    getSales,
    getSale
  }
}