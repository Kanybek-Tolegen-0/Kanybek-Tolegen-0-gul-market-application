import { api } from '../../api'

export const loader = async () => {
  try {
    if (localStorage.getItem('idToken')) {
      const response = await api.get('/api/wallet', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('idToken')}`
        }
      })
      return response.data
    }
    return null
  } catch (e) {
    return e
  }
}
