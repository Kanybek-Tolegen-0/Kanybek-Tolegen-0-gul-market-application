import { api } from '../../api'
import { AxiosResponse } from 'axios'

export const action = async ({ request }: { request: Request }) => {
  const body = await request.json()
  const { type, submitData } = body
  try {
    switch (type) {
      case 'filter':
        const response1: AxiosResponse = await api.post('/api/show-filtered-products', submitData)
        return response1.data
      case 'order':
        const response2: AxiosResponse = await api.post('/api/create-order', submitData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('idToken')}`
          }
        })
        return response2.data
      default:
        return null
    }
  } catch (e) {
    console.error(e)
    return e
  }
}
