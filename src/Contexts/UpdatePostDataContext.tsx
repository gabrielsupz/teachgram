import { useContext, createContext, useState } from 'react'
import { PostDataType } from '../Pages/FeedPage'

interface UpdatePostDataProvider {
  children: React.ReactNode
}

interface UpdatePostDataContextType {
  updatePostData: PostDataType
  setUpdatePostData: React.Dispatch<React.SetStateAction<PostDataType>>
}
const UpdatePostDataContext = createContext<UpdatePostDataContextType>(
  {} as UpdatePostDataContextType
)

export const UpdatePostDataProvider = ({
  children
}: UpdatePostDataProvider) => {
  const [updatePostData, setUpdatePostData] = useState<PostDataType>(
    {} as PostDataType
  )
  return (
    <UpdatePostDataContext.Provider
      value={{ updatePostData, setUpdatePostData }}
    >
      {children}
    </UpdatePostDataContext.Provider>
  )
}

export const useUpdatePostData = () => {
  const context = useContext(UpdatePostDataContext)
  return context
}
