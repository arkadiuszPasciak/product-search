import { UIIcon } from 'components/UI/UIIcon/UIIcon'
import './UIStars.scss'

interface Props {
  amount: number
  range?: number
}

export const UIStars = (props: Props) => {
  const { amount, range = 5 } = props
  const stars = []
  let star = 0

  while (star < amount) {
    stars.push(<UIIcon name="star-1" color="orange" key={`star-1-${star}`} />)
    star++
  }

  while (star < range) {
    stars.push(<UIIcon name="star-2" color="gray" key={`star-2-${star}`} />)
    star++
  }

  return <div className={`UIStars`}>{stars}</div>
}
