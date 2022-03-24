import { getProductsByTSHService } from 'services/TSHService/TSHService.api'

const defaultParams = {
  limit: 8,
  page: 1,
  promo: undefined,
  active: undefined,
}

describe('[TSHService]: getProductsByTSHService', () => {
  it('should get products', async () => {
    const response = await getProductsByTSHService({
      search: 'pizza',
      ...defaultParams,
    })

    expect(response?.items.length).toBeTruthy()
  })

  it('should get no products', async () => {
    const response = await getProductsByTSHService({
      search: '&*%*&%#$^@#$(&*(',
      ...defaultParams,
    })

    expect(response?.items.length).toBeFalsy()
  })
})
