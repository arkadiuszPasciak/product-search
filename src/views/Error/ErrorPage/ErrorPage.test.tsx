import { render } from 'tests'
import { ErrorPage } from 'views/Error/ErrorPage/ErrorPage'

describe('Views:Error:ErrorPage', () => {
  test('Display component Header', async () => {
    const { container, getByText } = render(<ErrorPage />)

    expect(container.getElementsByClassName('Header').length).toBe(1)

    expect(container.getElementsByClassName('Logo').length).toBe(1)
    expect(getByText('join.tsh.io')).toBeInTheDocument()

    expect(container.getElementsByClassName('ProductSearch').length).toBe(1)
    expect(container.getElementsByClassName('UIButton').length).toBe(1)
  })

  test('Display component ProductListError', async () => {
    const { container, getByText } = render(<ErrorPage />)

    expect(container.getElementsByClassName('ProductListError').length).toBe(1)

    expect(getByText('Ooops… It’s empty here')).toBeInTheDocument()
    expect(getByText('There are no products on the list')).toBeInTheDocument()
  })
})
