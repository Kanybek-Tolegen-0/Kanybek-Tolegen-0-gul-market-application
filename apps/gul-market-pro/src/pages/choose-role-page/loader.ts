import { api } from '../../api'

export const loader = async () => {
  const response = await api.get('/api/onboarding', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('idToken')}`
    }
  })
  if (!response) {
    throw new Error('Network response was not ok')
  }
  return response
}
