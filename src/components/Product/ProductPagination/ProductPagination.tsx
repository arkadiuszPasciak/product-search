import { UIPagination } from 'components/UI/UIPagination/UIPagination'
import './ProductPagination.scss'

interface Props {
  currentPage: number
  totalPage: number
  routerParams: Record<string, string>
}

export const ProductPagination = (props: Props) => {
  const { currentPage, totalPage, routerParams } = props

  return (
    <div className="ProductPagination">
      <UIPagination
        currentPage={currentPage}
        totalPage={totalPage}
        routerParams={routerParams}
      />
    </div>
  )
}
