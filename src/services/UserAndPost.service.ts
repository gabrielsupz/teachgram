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

export interface UpdatePostData {
  description: string
  id: number
}
export interface UserPropsType {
  id: number
  userName: string
  name: string
  phone: string
  email: string
  profileLink: string
  description: string
  friendsCount?: number
  postsCount?: number
}

export interface UpdateUserPropsType {
  userName?: string
  name?: string
  phone?: string
  email?: string
  profileLink?: string
  description?: string
  password?: string
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
    alert(`Usuário ${name} registrado`)
  } catch (err: any) {
    throw new Error('Não foi possível fazer o cadastro do usuário')
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
    throw new Error('Senha ou email inválidos')
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
    throw new Error('Não foi possível deletar o usuário')
  }
}

export async function UpdateUser(
  token: string,
  {
    description,
    email,
    name,
    phone,
    profileLink,
    userName,
    password
  }: UpdateUserPropsType
) {
  try {
    const response = await Api.put(
      '/usuarios/update',
      {
        ...(userName && { userName }),
        ...(password && { password }),
        ...(name && { name }),
        ...(phone && { phone }),
        ...(email && { email }),
        ...(profileLink && { profileLink }),
        ...(description && { description })
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    if (userName) localStorage.removeItem('authToken')
    return response.data
  } catch (err: any) {
    throw new Error(
      'Não foi possível atualizar o perfil, o dado pode já ser registrado por outro usuário ou a seção expirou'
    )
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
    throw new Error('Não foi possível trazer os dados do usuário')
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
    throw new Error('Não foi possível trazer os amigos')
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
export async function IsFriend(token: string, possibleFriendID: number) {
  try {
    const response = await Api.get(`/usuarios/friend/${possibleFriendID}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  } catch (err) {
    throw new Error('Erro ao verificar a relação entre os usuários')
  }
}
export async function AddFriend(token: string, userId: number) {
  try {
    const response = await Api.post(
      `/usuarios/friends`,
      {
        id: userId
      },

      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    return response.data
  } catch (err) {
    throw new Error('Erro ao adicionar amigo')
  }
}
export async function RemoveFriend(token: string, userId: number) {
  try {
    const response = await Api.put(
      `/usuarios/friends`,
      {
        id: userId
      },

      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    return response.data
  } catch (err) {
    throw new Error('Erro ao remover amigo')
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
  }
}
export async function UpdatePost(
  token: string,
  { description, id }: UpdatePostData
) {
  try {
    const response = await Api.put(
      `/posts/update`,
      {
        description,
        id
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
