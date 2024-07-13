import { api } from '../../api'
import { OrderStatus } from './types'

export const loader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url)
  const status = url.searchParams.get('status')
  const response = await api.get('/api/plantation-orders', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('idToken')}`
    },
    params: {
      status: status
    }
  })
  if (!response) {
    throw new Error('Network response was not ok')
  }
  return response.data.orders
}
