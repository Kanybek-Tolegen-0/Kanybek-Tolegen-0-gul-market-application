import { api } from '../../api'
import { AxiosResponse } from 'axios'
import { redirect } from 'react-router-dom'

export const action = async ({ request }: { request: Request }) => {
  const body = await request.json()
  const { activeStep, formValues } = body

  try {
    switch (activeStep) {
      case 0:
        const response1: AxiosResponse = await api.put('/api/update-pro-user-city', formValues, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('idToken')}`
          }
        })
        return response1.data
      case 1:
        const response2: AxiosResponse = await api.put('/api/update-initials', formValues, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('idToken')}`
          }
        })
        return response2.data
      case 2:
        const response3: AxiosResponse = await api.put(
          '/api/update-pro-user-role',
          { role: 'individual' },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('idToken')}`
            }
          }
        )
        return redirect('/main')
      default:
        return redirect('/main')
    }
  } catch (e) {
    console.error(e)
    return e
  }
}
