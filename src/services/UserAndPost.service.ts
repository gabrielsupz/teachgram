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

export interface CreatePostData {
  title: string
  description: string
  photoLink: string
  postIsPrivate: false
  videoLink: string
}
export interface UserPropsType {
  id: number
  userName: string
  name: string
  phone: string
  email: string
  profileLink: string
  description: string
  friendsCount: number
  postsCount: number
}

export interface LoginUserProps {
  email: string
  password: string
}

interface LoginDataResponseType {
  token: string
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

export async function DeleteUser(token: string) {
  try {
    await Api.delete('/usuarios/delete', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(() => {
      localStorage.removeItem('authToken')
    })

    console.log('User deletado')
  } catch (err) {
    console.log(err)
  }
}

export async function GetAuthUser(token: string) {
  try {
    const response = await Api.get(`/usuarios/authuser`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  } catch (err) {
    console.log(err)

    return null
  }
}

export async function GetUser(token: string, id: number) {
  try {
    const response = await Api.get(`/usuarios/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  } catch (err) {
    throw new Error('Erro ao obter usuário')

    return null
  }
}

export async function GetFriends(token: string, page: number) {
  try {
    const response = await Api.get(`/usuarios/friends?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  } catch (err) {
    console.log(err)

    return null
  }
}

export async function GetFriendsPosts(token: string, page: number) {
  try {
    const response = await Api.get(`/posts/friends?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  } catch (err) {
    throw new Error('Erro ao obter posts de amigos')
  }
}

export async function GetPostByUserId(token: string, userId: number) {
  try {
    const response = await Api.get(`/posts/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  } catch (err) {
    throw new Error('Erro ao obter os posts')

    return null
  }
}
export async function CreatePost(
  token: string,
  { description, photoLink, postIsPrivate, title, videoLink }: CreatePostData
) {
  try {
    const response = await Api.post(
      `/posts`,
      {
        title,
        description,
        photoLink,
        postIsPrivate,
        videoLink
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    return response.data
  } catch (err) {
    throw new Error('Erro ao obter os posts')

    return null
  }
}
export async function LikePost(token: string, idPost: number) {
  try {
    await Api.put(
      `/posts/likes`,
      {
        id: idPost
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
  } catch (err) {
    throw new Error('Erro ao realizar o gostei')
  }
}
export async function RemoveLikePost(token: string, idPost: number) {
  try {
    await Api.put(
      `/posts/likes/remove`,
      {
        id: idPost
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
  } catch (err) {
    throw new Error('Erro ao retirar o gostei')
  }
}
