import { UIIcon } from '../../UI/UIIcon/UIIcon'
import './UICheckbox.scss'

interface Props {
  name: string
  color: 'primary'
  id: string
}

export const UICheckbox = (props: Props) => {
  const { name, color, id } = props

  return (
    <label className={`UICheckbox ${color}`} htmlFor={id}>
      <input className="input" id={id} type="checkbox" name={name} />

      <span className="checkmark">
        <UIIcon name="checkmark" color="white" />
      </span>

      <span className="text">{name}</span>
    </label>
  )
}
