import { useAuthContext } from '../Contexts/AuthContext'
import { Api } from './api'

export interface RegisterUserProps {
  userName: string
  password: string
  name: string
  phone: string
  email: string
  profileLink: string
  description: string
}

export interface LoginUserProps {
  email: string
  password: string
}

export async function RegisterUser({
  email,
  name,
  password,
  phone,
  profileLink,
  userName,
  description
}: RegisterUserProps) {
  try {
    await Api.post('/usuarios', {
      userName,
      password,
      name,
      phone,
      email,
      profileLink,
      description
    })
    console.log(`Usuário ${name} registrado`)
  } catch (err: any) {
    console.log(err)
  }
}
interface LoginDataResponseType {
  token: string
}

export async function LoginUser({ email, password }: LoginUserProps) {
  try {
    const response = await Api.post('/login', {
      email: email,
      password: password
    })

    const responseData: LoginDataResponseType = response.data
    localStorage.setItem('authToken', responseData.token)

    return responseData.token
  } catch (err) {
    console.log(err)

    return null
  }
}
