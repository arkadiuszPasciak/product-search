import { UIImage } from 'components/UI/UIImage/UIImage'
import './ProductListItemModal.scss'

interface Props {
  name: string
  description: string
  image: string
}

export const ProductListItemModal = (prop: Props) => {
  const { name, description, image } = prop

  return (
    <div className="ProductListItemModal">
      <UIImage src={image} description={name} />

      <p className="name">{name}</p>

      <p className="description">{description}</p>
    </div>
  )
}
