import { Link } from 'react-router-dom'
import { AppRoute } from 'routing/AppRoute.enum'
import './Logo.scss'

export const Logo = () => {
  return (
    <Link className="Logo" to={AppRoute.Products}>
      join.tsh.io
    </Link>
  )
}
