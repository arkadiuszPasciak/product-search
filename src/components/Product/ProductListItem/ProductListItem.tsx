import { UIButton } from 'components/UI/UIButton/UIButton'
import { UIEmblem } from 'components/UI/UIEmblem/UIEmblem'
import { UIImage } from 'components/UI/UIImage/UIImage'
import { UIStars } from 'components/UI/UIStars/UIStars'
import { ITSHProductList } from 'services/TSHService/TSHService.support'
import './ProductListItem.scss'

interface Props {
  product: ITSHProductList
}

export const ProductListItem = (props: Props) => {
  const { name, description, image, rating, active, promo } = props.product

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
      />
    </div>
  )
}
