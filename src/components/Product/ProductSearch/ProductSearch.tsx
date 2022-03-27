import { useState } from 'react'
import { UICheckbox } from 'components/UI/UICheckbox/UICheckbox'
import { UIInput } from 'components/UI/UIInput/UIInput'
import { generatePath, Link } from 'react-router-dom'
import { AppRoute } from 'routing/AppRoute.enum'
import './ProductSearch.scss'

export const ProductSearch = () => {
  const [searchInputValue, setSearchInputValue] = useState('')
  const [filterActive, setfilterActive] = useState(false)
  const [filterPromo, setfilterPromo] = useState(false)

  const setPath = (): string => {
    if (!searchInputValue) {
      return '/'
    }

    const path = generatePath(AppRoute.ProductList, {
      search: searchInputValue,
      page: 1,
      promo: filterPromo ? 'true' : 'undefined',
      active: filterActive ? 'true' : 'undefined',
    })

    return path
  }

  return (
    <div className="ProductSearch">
      <div className="wrapper-input">
        <UIInput
          name="product-search"
          placeholder="Search"
          color="primary"
          onChange={(event) => setSearchInputValue(event.target.value)}
        />

        <Link
          className={`button ${!searchInputValue ? 'disable' : ''}`}
          to={setPath}
          aria-label="search products"
        >
          <i className="wf-loop" />
        </Link>
      </div>

      <div className="filters">
        <UICheckbox
          name="Active"
          color="primary"
          id="search-filter-active"
          checked={filterActive}
          onChange={() => setfilterActive(!filterActive)}
        />

        <UICheckbox
          name="Promo"
          color="primary"
          id="search-filter-promo"
          checked={filterPromo}
          onChange={() => setfilterPromo(!filterPromo)}
        />
      </div>
    </div>
  )
}
