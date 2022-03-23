import './UIInput.scss'

interface Props {
  name: string
  color: 'primary'
  placeholder: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const UIInput = (props: Props) => {
  const { name, color, placeholder, onChange } = props

  return (
    <input
      className={`UIInput ${color}`}
      name={name}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}
