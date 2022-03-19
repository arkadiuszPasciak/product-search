import { Header } from 'components/Common/Header/Header'
import { ProductList as ProductListComponent } from 'components/Product/ProductList/ProductList'
import './ProductList.scss'

export const ProductList = () => {
  return (
    <div className="ProductListRoute">
      <Header />
      <ProductListComponent />
    </div>
  )
}
