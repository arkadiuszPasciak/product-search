import { Header } from 'components/Common/Header/Header'
import { ProductList as ProductListComponent } from 'components/Product/ProductList/ProductList'
import { ProductPagination } from 'components/Product/ProductPagination/ProductPagination'
import './ProductList.scss'

export const ProductList = () => {
  return (
    <div className="ProductListRoute">
      <Header />
      <ProductListComponent />
      <ProductPagination currentPage={2} totalPage={10} />
    </div>
  )
}
