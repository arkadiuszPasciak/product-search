import './UIButton.scss'

interface Props {
  name: string
  color: 'primary' | 'secondary'
  disabled?: boolean
}

export const UIButton = (props: Props) => {
  const { name, color, disabled } = props

  return (
    <button
      className={`UIButton ${color}`}
      type="button"
      disabled={disabled ?? false}
    >
      {name}
    </button>
  )
}
