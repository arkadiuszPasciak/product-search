import { useState } from 'react'
import { ProductListError } from 'components/Product/ProductListError/ProductListError'
import { ProductListItem } from 'components/Product/ProductListItem/ProductListItem'
import { ProductListLoader } from 'components/Product/ProductListLoader/ProductListLoader'
import { ITSHProductList } from 'services/TSHService/TSHService.support'
import './ProductList.scss'

interface Props {
  products: ITSHProductList[]
}

export const ProductList = (prop: Props) => {
  const { products } = prop

  const [isLoading] = useState(false)
  const [isError] = useState(false)

  return (
    <div className="ProductList">
      {isLoading && !isError && <ProductListLoader />}
      {isError && !isLoading && (
        <ProductListError
          title="Ooops… It’s empty here"
          description="There are no products on the list"
          iconName="cart"
          iconColor="gray"
        />
      )}
      {!isLoading && !isError && (
        <ul className="list">
          {products.map((product) => {
            return <ProductListItem product={product} key={product.id} />
          })}
        </ul>
      )}
    </div>
  )
}
