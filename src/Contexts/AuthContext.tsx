import { useContext, createContext, useEffect, useState } from 'react'
import { Loading } from '../Components/Loading'
import { useLoading } from './LoadingContext'
import { GetAuthUser, UserPropsType } from '../services/UserAndPost.service'

interface AuthContextProvider {
  children: React.ReactNode
}

interface AuthContextType {
  authToken: string
  setAuthToken: React.Dispatch<React.SetStateAction<string>>
  setAuthId: React.Dispatch<React.SetStateAction<number>>
  authId: number
  authUserPhoto: string
  setAuthUserPhoto: React.Dispatch<React.SetStateAction<string>>
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthContextProvider = ({ children }: AuthContextProvider) => {
  const [authToken, setAuthToken] = useState<string>('')
  const [authUserPhoto, setAuthUserPhoto] = useState<string>('')
  const [authId, setAuthId] = useState<number>(0)
  const { setAuthLoading, authLoading } = useLoading()

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken')
    if (storedToken) {
      setAuthToken(storedToken)
      GetAuthUser(storedToken).then((e: UserPropsType) => {
        setAuthUserPhoto(e.profileLink)
        setAuthId(e.id)
      })
    }

    setAuthLoading(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        authToken,
        setAuthToken,
        authId,
        setAuthId,
        authUserPhoto,
        setAuthUserPhoto
      }}
    >
      {authLoading ? <Loading /> : children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  return context
}
