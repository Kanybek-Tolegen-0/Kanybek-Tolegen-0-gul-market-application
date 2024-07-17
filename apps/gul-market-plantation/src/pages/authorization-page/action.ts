import { redirect } from 'react-router-dom'
import { api } from '../../api'
import { AxiosResponse } from 'axios'

export const action = async ({ request }: { request: Request }) => {
  try {
    const body = await request.json()
    const response: AxiosResponse<{
      tokens: {
        idToken: string
        refreshToken: string
      }
    }> = await api.post('/api/plantation-signup', body)
    const {
      tokens: { idToken, refreshToken }
    } = response.data
    localStorage.setItem('idToken', idToken)
    localStorage.setItem('refreshToken', refreshToken)
    return redirect('/main')
  } catch (e) {
    console.error(e)
    return e
  }
}
