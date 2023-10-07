import { useContext, createContext, useState } from 'react'

interface loadingProvider {
  children: React.ReactNode
}

interface LoadingContextType {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}
const LoadingContext = createContext<LoadingContextType>(
  {} as LoadingContextType
)

export const LoadingProvider = ({ children }: loadingProvider) => {
  const [loading, setLoading] = useState<boolean>(true)
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export const useLoading = () => {
  const context = useContext(LoadingContext)
  return context
}
