import { Header } from 'components/Common/Header/Header'
import { ProductListError } from 'components/Product/ProductListError/ProductListError'
import './ErrorPage.scss'

export const ErrorPage = () => {
  return (
    <div className="ProductListRoute">
      <Header />
      <main className="main">
        <ProductListError
          title="Ooops… It’s empty here"
          description="There are no products on the list"
          iconName="cart"
          iconColor="gray"
        />
      </main>
    </div>
  )
}
