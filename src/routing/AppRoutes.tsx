import { Route, Switch } from 'react-router-dom'
import { ErrorPage } from 'views/Error/ErrorPage/ErrorPage'
import { ProductList } from 'views/Product/ProductList/ProductList'
import { AppRoute } from './AppRoute.enum'

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path={AppRoute.ProductList} exact component={ProductList} />

      <Route component={ErrorPage} />
    </Switch>
  )
}
