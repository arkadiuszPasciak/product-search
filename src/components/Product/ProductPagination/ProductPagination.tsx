import { UIPagination } from 'components/UI/UIPagination/UIPagination'
import './ProductPagination.scss'

interface Props {
  currentPage: number
  totalPage: number
}

export const ProductPagination = (props: Props) => {
  const { currentPage, totalPage } = props

  return (
    <div className="ProductPagination">
      <UIPagination currentPage={currentPage} totalPage={totalPage} />
    </div>
  )
}
