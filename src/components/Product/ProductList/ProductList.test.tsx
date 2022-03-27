import { render } from 'tests'
import { ProductList } from 'components/Product/ProductList/ProductList'
import { MTSHProductList } from 'services/TSHService/TSHService.mocks'

describe('[components]:Product:ProductList', () => {
  test('Display elements', async () => {
    const { container } = render(<ProductList products={MTSHProductList} />)

    expect(container.getElementsByClassName('ProductList').length).toBe(1)
    expect(container.getElementsByClassName('ProductListItem').length).toBe(8)
  })
})
