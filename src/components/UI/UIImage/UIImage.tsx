import './UIImage.scss'

interface Props {
  src: string
  description: string
}

export const UIImage = (props: Props) => {
  const { src, description } = props

  return <img className="UIImage" src={src} alt={description} />
}
