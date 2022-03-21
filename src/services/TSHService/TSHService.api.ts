import axios from 'axios'
import {
  ITSHGetProductsParameters,
  ITSHGetProductsResponse,
} from './TSHService.support'

/**
 * Get products by TSHService API
 * @param {ITSHGetProductsParameters} parameters - The parameters to get products
 * @return {ITSHGetProductsResponse} response data - The response from TSHService API
 */
export const getProductsByTSHService = async (
  params: ITSHGetProductsParameters
): Promise<ITSHGetProductsResponse | null> => {
  try {
    const response = await axios.get(
      'https://join-tsh-api-staging.herokuapp.com/products',
      {
        params: {
          search: params.search,
          limit: params.limit,
          page: params.page,
          promo: params.promo,
          active: params.active,
        },
      }
    )

    return response.data
  } catch (error) {
    console.warn(`[TSHService API] getProductsByTSHService: ${error}`)
    return null
  }
}
