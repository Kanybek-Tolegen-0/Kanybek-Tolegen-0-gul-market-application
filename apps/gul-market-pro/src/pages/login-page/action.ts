import { api } from '../../api'

export const action = async ({ request }: { request: Request }) => {
  const formValues = request.json()

  return await api.post('/api/pro-user-signin', {
    email: 'asdfasdf@gmail.com',
    password: 'Qwerty1234'
  })
}
