import { api } from '../../api'

export const action = async ({ request }: { request: Request }) => {
  const data = request.json()
  const response = await api.get(`/api/plantation-orders?status=pending`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('idToken')}`
    }
  })

  console.log({ response })

  return null
}
