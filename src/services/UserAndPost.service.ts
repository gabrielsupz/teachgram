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
    interface ErrorProps {
      campo: string
      mensagem: string
    }
    const errors = err.response.data as ErrorProps[]
    errors.forEach(({ campo, mensagem }: ErrorProps) =>
      console.log(`${campo}: ${mensagem}`)
    )
  }
}
