import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Header } from 'components/Common/Header/Header'
import { ProductList as ProductListComponent } from 'components/Product/ProductList/ProductList'
import { ProductPagination } from 'components/Product/ProductPagination/ProductPagination'
import { ProductListLoader } from 'components/Product/ProductListLoader/ProductListLoader'
import { ProductListError } from 'components/Product/ProductListError/ProductListError'
import { ITSHGetProductsResponse } from 'services/TSHService/TSHService.support'
import { getProductsByTSHService } from 'services/TSHService/TSHService.api'
import './ProductList.scss'

export const ProductList = () => {
  const [productList, setProducts] = useState<ITSHGetProductsResponse | null>()
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
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

    if (!request || request.meta.totalPages <= 0) {
      setLoading(false)
      setError(true)
      setProducts(null)
      return
    }

    setLoading(false)
    setProducts(request)
  }

  return (
    <div className="ProductListRoute">
      <Header />
      <main className="main">
        {isLoading && !isError && !productList && <ProductListLoader />}
        {isError && !isLoading && !productList && (
          <ProductListError
            title="Ooops… It’s empty here"
            description="There are no products on the list"
          />
        )}
        {productList && !isLoading && !isError && (
          <>
            <ProductListComponent products={productList.items} />
            <ProductPagination
              currentPage={productList.meta.currentPage}
              totalPage={productList.meta.totalPages}
              routerParams={{
                search: search,
                page: page,
                promo: promo,
                active: active,
              }}
            />
          </>
        )}
      </main>
    </div>
  )
}
