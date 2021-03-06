import { generatePath } from 'react-router'
import { Link } from 'react-router-dom'
import { AppRoute } from 'routing/AppRoute.enum'
import './UIPagination.scss'

interface Props {
  currentPage: number
  totalPage: number
  maxAmountOfSimplePagination?: number
  routerParams: Record<string, string>
}

export const UIPagination = (props: Props) => {
  const {
    currentPage,
    totalPage,
    maxAmountOfSimplePagination = 6,
    routerParams,
  } = props

  const checkCurrentPage =
    currentPage > totalPage || currentPage < 1 ? 1 : currentPage

  let HTMLPagesElement

  const generateURL = (params: Record<string, string>, page: number) => {
    return generatePath(AppRoute.ProductList, {
      search: params.search,
      page: page,
      promo: params.promo,
      active: params.active,
    })
  }

  const HTMLLinkElement = (page: number, currentPage: number) => {
    return (
      <Link
        className={`link ${page === currentPage ? 'active' : ''}`}
        key={page}
        to={generateURL(routerParams, page)}
      >
        {page}
      </Link>
    )
  }

  const simplePagination = (currentPage: number, totalPage: number) => {
    const pages = []
    let page = 1

    while (page <= totalPage) {
      const element = HTMLLinkElement(page, currentPage)
      pages.push(element)
      page++
    }

    return pages
  }

  const advancedPagination = (currentPage: number, totalPage: number) => {
    const pages = []
    let firstPageOfFirstGroup = 1

    switch (currentPage) {
      case 1:
      case 2:
        firstPageOfFirstGroup = 1
        break
      case totalPage:
      case totalPage - 1:
      case totalPage - 2:
        firstPageOfFirstGroup = totalPage - 5
        break
      case totalPage - 3:
        firstPageOfFirstGroup = currentPage - 2
        break
      default:
        firstPageOfFirstGroup = currentPage - 1
    }

    const lastPageOfFirstGroup = firstPageOfFirstGroup + 2

    while (firstPageOfFirstGroup <= lastPageOfFirstGroup) {
      const element = HTMLLinkElement(firstPageOfFirstGroup, currentPage)
      pages.push(element)

      if (firstPageOfFirstGroup === lastPageOfFirstGroup) {
        pages.push(
          <span className="link dots" key="dots">
            ...
          </span>
        )
      }

      firstPageOfFirstGroup++
    }

    let firstPageOfLastGroup = totalPage - 2
    const lastPageOfLastGroup = totalPage

    while (firstPageOfLastGroup <= lastPageOfLastGroup) {
      const element = HTMLLinkElement(firstPageOfLastGroup, currentPage)
      pages.push(element)

      firstPageOfLastGroup++
    }

    return pages
  }

  if (totalPage <= maxAmountOfSimplePagination) {
    HTMLPagesElement = simplePagination(checkCurrentPage, totalPage)
  } else if (totalPage > maxAmountOfSimplePagination) {
    HTMLPagesElement = advancedPagination(checkCurrentPage, totalPage)
  }

  return (
    <>
      {totalPage && HTMLPagesElement && (
        <div className="UIPagination">
          <Link
            className={`link first ${currentPage === 1 ? 'disabled' : ''}`}
            to={generateURL(routerParams, 1)}
          >
            First
          </Link>

          {HTMLPagesElement}

          <Link
            className={`link last ${
              currentPage === totalPage ? 'disabled' : ''
            }`}
            to={generateURL(routerParams, totalPage)}
          >
            Last
          </Link>
        </div>
      )}
    </>
  )
}
