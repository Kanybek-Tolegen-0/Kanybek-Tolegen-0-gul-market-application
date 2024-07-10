import { api } from '../../api'

export const action = async ({ request }: { request: Request }) => {
  const body = await request.json()

  try {
    const response = await api.post('/api/show-filtered-products', body)
    return response.data
  } catch (e) {
    return e
  }
}
