import { Link } from 'react-router-dom'
import { AppRoute } from 'routing/AppRoute.enum'
import { Header } from 'components/Common/Header/Header'

export const Products = () => {
  return (
    <>
      <Header />
      <h2>Products page</h2>
      <Link to={AppRoute.Login}> Login </Link>
    </>
  )
}
