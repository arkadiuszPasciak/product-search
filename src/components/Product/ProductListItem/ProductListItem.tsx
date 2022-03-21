import { useState } from 'react'
import { UIButton } from 'components/UI/UIButton/UIButton'
import { UIEmblem } from 'components/UI/UIEmblem/UIEmblem'
import { UIImage } from 'components/UI/UIImage/UIImage'
import { UIModal } from 'components/UI/UIModal/UIModal'
import { UIStars } from 'components/UI/UIStars/UIStars'
import { ProductListItemModal } from 'components/Product/ProductListItemModal/ProductListItemModal'
import { ITSHProductList } from 'services/TSHService/TSHService.support'
import './ProductListItem.scss'

interface Props {
  product: ITSHProductList
}

export const ProductListItem = (props: Props) => {
  const { name, description, image, rating, active, promo } = props.product

  const [modalIsOpen, showModal] = useState(false)

  return (
    <div className={`ProductListItem ${active ? 'available' : 'unavailable'}`}>
      <UIImage src={image} description={name} />

      <p className="title">{name}</p>

      {promo && <UIEmblem text="promo" color="primary" />}

      <p className="description">{description}</p>

      <UIStars amount={rating} />

      <UIButton
        name={active ? 'Show details' : 'Unavailable'}
        color="primary"
        disabled={!active}
        onClick={() => showModal(true)}
      />
      {active && (
        <UIModal
          show={modalIsOpen}
          onCloseModal={() => showModal(false)}
          slot={
            <ProductListItemModal
              name={name}
              description={description}
              image={image}
            />
          }
        />
      )}
    </div>
  )
}
