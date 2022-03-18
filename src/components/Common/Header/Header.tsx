import { LoginUser } from 'components/Customer/LoginUser/LoginUser'
import { Logo } from 'components/Common/Logo/Logo'
import './Header.scss'

export const Header = () => {
  return (
    <header className="Header">
      <Logo />
      <div />
      <div />
      <LoginUser />
    </header>
  )
}
