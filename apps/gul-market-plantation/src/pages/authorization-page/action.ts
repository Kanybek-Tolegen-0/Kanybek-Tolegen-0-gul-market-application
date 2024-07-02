import { redirect } from 'react-router-dom'
import { api } from './../../api'

export const action = async ({ request }: { request: Request }) => {
  const body = await request.json()
  const response = await api.post('/api/plantation-signup', body)

  return redirect('/register-plantation')
}
