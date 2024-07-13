import { api } from '../../api'
import { AxiosResponse } from 'axios'

export const action = async ({ request }: { request: Request }) => {
  const body = await request.json()
  const { type, submitData } = body
  try {
    switch (type) {
      case 'accept_order':
        const response1: AxiosResponse = await api.post('/api/approve-order', submitData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('idToken')}`
          }
        })
        return response1.data
      case 'decline_order':
        const response2: AxiosResponse = await api.post('/api/decline-order', submitData, {
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
