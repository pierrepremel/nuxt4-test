export enum SaleStatus {
  UPCOMING = 'upcoming',
  ACTIVE = 'active',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

export interface Sale {
  id: string
  title: string
  description: string
  status: SaleStatus
  location: string
}