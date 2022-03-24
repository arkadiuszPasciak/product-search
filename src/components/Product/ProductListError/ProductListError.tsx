import './ProductListError.scss'

interface Props {
  title: string
  description: string
}

export const ProductListError = (props: Props) => {
  const { title, description } = props

  return (
    <div className="ProductListError">
      <i className="wf-cart" />
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </div>
  )
}
