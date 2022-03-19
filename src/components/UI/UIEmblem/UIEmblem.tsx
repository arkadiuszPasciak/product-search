import './UIEmblem.scss'

interface Props {
  text: string
  color: 'primary'
}

export const UIEmblem = (props: Props) => {
  const { text, color } = props

  return <span className={`UIEmblem ${color}`}>{text}</span>
}
