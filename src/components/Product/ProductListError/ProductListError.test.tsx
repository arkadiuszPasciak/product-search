import { render } from 'tests'
import { ProductListError } from 'components/Product/ProductListError/ProductListError'

describe('[components]:Product:ProductListError', () => {
  test('Display elements', async () => {
    const { container, getByText } = render(
      <ProductListError
        title="Ooops… It’s empty here"
        description="There are no products on the list"
      />
    )

    expect(container.getElementsByClassName('ProductListError').length).toBe(1)

    expect(getByText('Ooops… It’s empty here')).toBeInTheDocument()
    expect(getByText('There are no products on the list')).toBeInTheDocument()
  })
})
