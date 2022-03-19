import { useState } from 'react'
import { UIError } from 'components/UI/UIError/UIError'
import { UILoader } from 'components/UI/UILoader/UILoader'
import './ProductList.scss'

export const ProductList = () => {
  const [isLoading] = useState(false)
  const [isError] = useState(false)

  return (
    <div className="ProductList">
      {isLoading && !isError && <UILoader />}
      {isError && !isLoading && (
        <UIError
          title="Ooops… It’s empty here"
          description="There are no products on the list"
          iconName="cart"
          iconColor="gray"
        />
      )}
      {!isLoading && !isError && (
        <ul className="list">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      )}
    </div>
  )
}
