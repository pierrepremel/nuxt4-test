export enum SaleStatus {
  UPCOMING = 'upcoming',
  LIVE = 'live',
}

export interface Sale {
  id: string
  title: string
  description: string
  status: SaleStatus
  location: string
}
