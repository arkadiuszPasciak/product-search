import { useState } from 'react'
import { ProductListError } from 'components/Product/ProductListError/ProductListError'
import { ProductListItem } from 'components/Product/ProductListItem/ProductListItem'
import { ProductListLoader } from 'components/Product/ProductListLoader/ProductListLoader'
import { MTSHProductList } from 'services/TSHService/TSHService.mocks'
import './ProductList.scss'

export const ProductList = () => {
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
          {MTSHProductList.map((product) => {
            return <ProductListItem product={product} key={product.id} />
          })}
        </ul>
      )}
    </div>
  )
}
