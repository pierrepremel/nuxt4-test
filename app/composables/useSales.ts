import type { Sale } from '~/types/sale'

export const useSales = () => {
  const { $api } = useNuxtApp()
  
  const getSales = () => {
    return useFetch<Sale[]>('/sales', { 
      $fetch: $api,
      key: 'sales',
      transform: (sales) => {
      return sales.sort((a, b) => {
        const order = { live: 0, upcoming: 1 }
        return order[a.status] - order[b.status]
      })
    }
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