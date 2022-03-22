import { Redirect, Route, Switch } from 'react-router-dom'
import { ProductList } from 'views/Product/ProductList/ProductList'
import { AppRoute } from './AppRoute.enum'

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path={AppRoute.ProductList} exact component={ProductList} />

      <Redirect to={AppRoute.ProductListRedirect} />
    </Switch>
  )
}
