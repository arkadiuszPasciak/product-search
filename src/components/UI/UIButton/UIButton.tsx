import './UIButton.scss'

interface Props {
  name: string
  color: 'primary' | 'secondary'
  disabled?: boolean
  onClick?: () => void
}

export const UIButton = (props: Props) => {
  const { name, color, disabled, onClick } = props

  return (
    <button
      className={`UIButton ${color}`}
      type="button"
      disabled={disabled ?? false}
      onClick={onClick}
    >
      {name}
    </button>
  )
}
