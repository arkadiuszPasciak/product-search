import { UICheckbox } from 'components/UI/UICheckbox/UICheckbox'
import { UIInput } from 'components/UI/UIInput/UIInput'
import { UIIcon } from 'components/UI/UIIcon/UIIcon'
import { Link } from 'react-router-dom'
import './ProductSearch.scss'

export const ProductSearch = () => {
  return (
    <div className="ProductSearch">
      <div className="wrapper-input">
        <UIInput name="product-search" placeholder="Search" color="primary" />

        <Link className="Logo" to="/">
          <UIIcon name="loop" color="black" />
        </Link>
      </div>

      <div className="filters">
        <UICheckbox name="Active" color="primary" id="search-filter-active" />

        <UICheckbox name="Promo" color="primary" id="search-filter-promo" />
      </div>
    </div>
  )
}
