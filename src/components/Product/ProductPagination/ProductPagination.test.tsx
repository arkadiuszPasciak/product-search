import { render } from 'tests'
import { ProductPagination } from 'components/Product/ProductPagination/ProductPagination'

describe('[components]:Product:ProductPagination', () => {
  test('Display elements under 6 pages', async () => {
    const { container, getByText } = render(
      <ProductPagination
        currentPage={1}
        totalPage={6}
        routerParams={{
          search: 'a',
          page: '1',
          promo: 'true',
          active: 'true',
        }}
      />
    )

    expect(container.getElementsByClassName('ProductPagination').length).toBe(1)

    expect(getByText('First')).toBeInTheDocument()
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(container.getElementsByClassName('link dots').length).toBe(0)
    expect(getByText('4')).toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
    expect(getByText('6')).toBeInTheDocument()
    expect(getByText('Last')).toBeInTheDocument()
  })

  test('Display elements over 6 pages', async () => {
    const { container, getByText } = render(
      <ProductPagination
        currentPage={4}
        totalPage={13}
        routerParams={{
          search: 'a',
          page: '1',
          promo: 'true',
          active: 'true',
        }}
      />
    )

    expect(container.getElementsByClassName('ProductPagination').length).toBe(1)

    expect(getByText('First')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(getByText('4')).toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
    expect(container.getElementsByClassName('link dots').length).toBe(1)
    expect(getByText('11')).toBeInTheDocument()
    expect(getByText('12')).toBeInTheDocument()
    expect(getByText('13')).toBeInTheDocument()
    expect(getByText('Last')).toBeInTheDocument()
  })
})
