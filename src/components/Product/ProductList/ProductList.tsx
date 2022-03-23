import { ProductListItem } from 'components/Product/ProductListItem/ProductListItem'
import { ITSHProductList } from 'services/TSHService/TSHService.support'
import './ProductList.scss'

interface Props {
  products: ITSHProductList[]
}

export const ProductList = (prop: Props) => {
  const { products } = prop

  return (
    <div className="ProductList">
      {products && (
        <ul className="list">
          {products.map((product) => {
            return <ProductListItem product={product} key={product.id} />
          })}
        </ul>
      )}
    </div>
  )
}
