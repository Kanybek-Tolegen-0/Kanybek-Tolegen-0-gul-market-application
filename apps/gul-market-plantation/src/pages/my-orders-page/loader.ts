import { api } from '../../api'

export const loader = async () => {
  const response = await api.get('/api/plantation-orders', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('idToken')}`
    },
    params: {
      status: 'plantation_declined'
    }
  })
  if (!response) {
    throw new Error('Network response was not ok')
  }
  return response.data.orders
}
