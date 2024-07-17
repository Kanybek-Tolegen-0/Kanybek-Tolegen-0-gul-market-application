import { api } from '../../api'
import { AxiosResponse } from 'axios'

export const action = async ({ request }: { request: Request }) => {
  const body = await request.json()
  const { type, submitData } = body
  switch (type) {
    case 'add_favorite':
      try {
        const response1: AxiosResponse = await api.post('/api/add-favorite-product', submitData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('idToken')}`
          }
        })

        return { success: true, message: 'Товар добавлен в избранные', data: response1.data }
      } catch (e) {
        return { success: false, message: 'Не удалось добавить товар в избранные, попробуйте ещё раз', data: e }
      }

    case 'remove_favorite':
      try {
        const response2: AxiosResponse = await api.delete('/api/remove-favorite-product', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('idToken')}`
          },
          data: submitData
        })

        return { success: true, message: 'Товар убран из избранных', data: response2.data }
      } catch (e) {
        return { success: false, message: 'Не удалось убрать товар избранных, попробуйте ещё раз', data: e }
      }

    default:
      return null
  }
}
