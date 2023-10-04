import { useContext, createContext, useState } from 'react'

interface createPostModalProvider {
  children: React.ReactNode
}

interface createPostModalContextType {
  createPostModalIsActive: boolean
  setCreatePostModalIsActive: React.Dispatch<React.SetStateAction<boolean>>
}
const createPostModalContext = createContext<createPostModalContextType>(
  {} as createPostModalContextType
)

export const CreatePostModalProvider = ({
  children
}: createPostModalProvider) => {
  const [createPostModalIsActive, setCreatePostModalIsActive] =
    useState<boolean>(false)
  return (
    <createPostModalContext.Provider
      value={{ createPostModalIsActive, setCreatePostModalIsActive }}
    >
      {children}
    </createPostModalContext.Provider>
  )
}

export const useCreatePostModal = () => {
  const context = useContext(createPostModalContext)
  return context
}
