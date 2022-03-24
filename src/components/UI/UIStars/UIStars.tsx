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
    stars.push(<i className="wf-star-1" key={`star-1-${star}`} />)
    star++
  }

  while (star < range) {
    stars.push(<i className="wf-star-2" key={`star-2-${star}`} />)
    star++
  }

  return <div className={`UIStars`}>{stars}</div>
}
