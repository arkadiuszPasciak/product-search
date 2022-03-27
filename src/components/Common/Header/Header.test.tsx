import { render } from 'tests'
import { Header } from 'components/Common/Header/Header'

describe('[components]:Common:Header', () => {
  test('Display elements', async () => {
    const { container, getByText } = render(<Header />)

    expect(container.getElementsByClassName('Header').length).toBe(1)

    expect(container.getElementsByClassName('Logo').length).toBe(1)
    expect(getByText('join.tsh.io')).toBeInTheDocument()

    expect(container.getElementsByClassName('ProductSearch').length).toBe(1)
    expect(container.getElementsByClassName('UIButton').length).toBe(1)
  })
})
