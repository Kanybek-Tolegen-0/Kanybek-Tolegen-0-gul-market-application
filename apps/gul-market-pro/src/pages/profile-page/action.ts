import { api } from '../../api'
import { AxiosResponse } from 'axios'
import { redirect } from 'react-router-dom'

export const action = async ({ request }: { request: Request }) => {
  const body = await request.json()
  const { type, submitData } = body

  switch (type) {
    case 'update_role':
      try {
        const response1: AxiosResponse = await api.put('/api/update-pro-user-role', submitData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('idToken')}`
          }
        })
        const {
          updated_tokens: { idToken, refreshToken }
        } = response1.data
        localStorage.setItem('idToken', idToken)
        localStorage.setItem('refreshToken', refreshToken)
        return { success: true, message: 'Роль успешна изменена', data: response1.data }
      } catch (e) {
        return { success: false, message: 'Не удалось изменить роль, попробуйте ещё раз', data: e }
      }

    case 'update_initials':
      try {
        const response2: AxiosResponse = await api.put('/api/update-initials', submitData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('idToken')}`
          }
        })
        return { success: true, message: 'Инициалы изменены успешно', data: response2.data }
      } catch (e) {
        return { success: false, message: 'Не удалось изменить инициалы, попробуйте ещё раз', data: e }
      }
    case 'update_shops':
      try {
        const response3: AxiosResponse = await api.put(
          '/api/update-shops-info',
          { shops: submitData },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('idToken')}`
            }
          }
        )
        return { success: true, message: 'Информация о магазинах успешно обновлена', data: response3.data }
      } catch (e) {
        return { success: false, message: 'Не удалось обновить информацию о магазинах, попробуйте ещё раз', data: e }
      }

    default:
      return null
  }
}
