import { render } from 'tests'
import { ProductListItem } from 'components/Product/ProductListItem/ProductListItem'
import { MTSHProductList } from 'services/TSHService/TSHService.mocks'

const product = MTSHProductList[1]

describe('[components]:Product:ProductListItem', () => {
  test('Display elements', async () => {
    const { container, getByText } = render(
      <ProductListItem product={product} />
    )

    expect(container.getElementsByClassName('ProductListItem').length).toBe(1)
    expect(container.getElementsByClassName('UIImage').length).toBe(1)
    expect(container.getElementsByClassName('title').length).toBe(1)
    expect(container.getElementsByClassName('UIEmblem').length).toBe(1)
    expect(container.getElementsByClassName('description').length).toBe(1)
    expect(container.getElementsByClassName('UIStars').length).toBe(1)
    expect(container.getElementsByClassName('UIButton').length).toBe(1)

    expect(getByText('Licensed Plastic Bike')).toBeInTheDocument()
    expect(getByText('Delectus asperiores debitis culpa.')).toBeInTheDocument()
  })
})
