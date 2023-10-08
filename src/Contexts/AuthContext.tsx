import { useContext, createContext, useEffect, useState } from 'react'
import { Loading } from '../Components/Loading'
import { useLoading } from './LoadingContext'

interface AuthContextProvider {
  children: React.ReactNode
}

interface AuthContextType {
  authToken: string
  setAuthToken: React.Dispatch<React.SetStateAction<string>>
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthContextProvider = ({ children }: AuthContextProvider) => {
  const [authToken, setAuthToken] = useState<string>('')
  const { setLoading, loading } = useLoading()

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken')
    if (storedToken) {
      setAuthToken(storedToken)
    }

    setLoading(false)
  }, [])

  console.log('Token', authToken)

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  return context
}
