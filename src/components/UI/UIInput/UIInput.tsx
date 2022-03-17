import './UIInput.scss'

interface Props {
  name: string
  color: 'primary'
  placeholder: string
}

export const UIInput = (props: Props) => {
  const { name, color, placeholder } = props

  return (
    <input
      className={`UIInput ${color}`}
      name={name}
      type="text"
      placeholder={placeholder}
    />
  )
}
