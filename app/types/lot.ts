export enum LotCategory {
  MOBILIER = 'Mobilier',
  OBJETS_ART = 'Objets d\'Art',
  PEINTURE = 'Peinture',
  SCULPTURE = 'Sculpture',
  BIJOUX = 'Bijoux',
  CERAMIQUE = 'Céramique',
  TEXTILE = 'Textile'
}

export interface Lot {
  id: string
  saleId: string
  saleOrder: number
  title: string
  description: string
  category: LotCategory 
  lowEstimate: number
  highEstimate: number
  imageUrl: string
}