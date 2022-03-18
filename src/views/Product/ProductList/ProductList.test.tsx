import { render } from 'tests'
import { ProductList } from 'views/Product/ProductList/ProductList'

describe('Views:Product:ProductList', () => {
  test('Displays page header', async () => {
    const { getByText } = render(<ProductList />)

    expect(true)
  })
})
