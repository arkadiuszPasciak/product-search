import { UIIcon } from 'components/UI/UIIcon/UIIcon'
import './UIError.scss'

interface Props {
  title: string
  description: string
  iconName: string
  iconColor: string
}

export const UIError = (props: Props) => {
  const { title, description, iconName, iconColor } = props

  return (
    <div className="UIError">
      <UIIcon name={iconName} color={iconColor} />
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </div>
  )
}
