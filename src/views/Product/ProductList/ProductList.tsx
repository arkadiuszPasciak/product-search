import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Header } from 'components/Common/Header/Header'
import { ProductList as ProductListComponent } from 'components/Product/ProductList/ProductList'
import { ProductPagination } from 'components/Product/ProductPagination/ProductPagination'
import { ITSHGetProductsResponse } from 'services/TSHService/TSHService.support'
import { getProductsByTSHService } from 'services/TSHService/TSHService.api'
import './ProductList.scss'

export const ProductList = () => {
  const [productList, setProducts] = useState<ITSHGetProductsResponse>()
  const { search, page, promo, active } = useParams<Record<string, string>>()

  const convertFilterToBooleanOrUndefined = (
    filter: string
  ): boolean | undefined => {
    switch (filter) {
      case 'true':
        return true
      case 'false':
        return false
      default:
        return undefined
    }
  }

  const params = {
    search: search,
    limit: 8,
    page: Number(page),
    promo: convertFilterToBooleanOrUndefined(promo),
    active: convertFilterToBooleanOrUndefined(active),
  }

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const request = await getProductsByTSHService(params)

    if (!request) {
      return null
    }

    setProducts(request)
  }

  return (
    <div className="ProductListRoute">
      <Header />
      {productList && (
        <>
          <ProductListComponent products={productList.items} />
          <ProductPagination
            currentPage={productList.meta.currentPage}
            totalPage={productList.meta.totalPages}
          />
        </>
      )}
    </div>
  )
}
