import './UICheckbox.scss'

interface Props {
  name: string
  color: 'primary'
  id: string
  checked: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const UICheckbox = (props: Props) => {
  const { name, color, id, checked, onChange } = props

  return (
    <label className={`UICheckbox ${color}`} htmlFor={id}>
      <input
        className="input"
        id={id}
        type="checkbox"
        name={name}
        defaultChecked={checked}
        onChange={onChange}
      />

      <span className="checkmark">
        <i className="wf-checkmark" />
      </span>

      <span className="text">{name}</span>
    </label>
  )
}
