export interface ITSHGetProductsParameters {
  search: string
  limit: number
  page: number
  promo?: boolean
  active?: boolean
}

export interface ITSHProductList {
  id: number
  name: string
  description: string
  rating: number
  image: string
  promo: boolean
  active: boolean
}

export interface ITSHProductPages {
  totalPages: number
  currentPage: number
}

export interface ITSHGetProductsResponse {
  items: ITSHProductList[]
  meta: ITSHProductPages
}
