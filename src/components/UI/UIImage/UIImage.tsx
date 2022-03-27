import './UIImage.scss'

interface Props {
  src: string
  description: string
  width?: number
  height?: number
}

export const UIImage = (props: Props) => {
  const { src, description, width, height } = props

  return (
    <img
      className="UIImage"
      src={src}
      alt={description}
      width={width}
      height={height}
    />
  )
}
