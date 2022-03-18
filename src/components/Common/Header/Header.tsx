import { LoginUser } from 'components/Customer/LoginUser/LoginUser'
import { Logo } from 'components/Common/Logo/Logo'
import { ProductSearch } from 'components/Product/ProductSearch/ProductSearch'
import './Header.scss'

export const Header = () => {
  return (
    <header className="Header">
      <Logo />
      <ProductSearch />
      <LoginUser />
    </header>
  )
}
