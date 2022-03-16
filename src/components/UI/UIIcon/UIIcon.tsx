import './UIIcon.scss'

interface Props {
  name: string
  color: string
}

export const UIIcon = (props: Props) => {
  const { name, color } = props

  return <i className={`UIIcon ${name} ${color}`} />
}
