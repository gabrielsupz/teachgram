import { useContext, createContext, useState } from 'react'

interface friendsListProvider {
  children: React.ReactNode
}

interface friendsListContextType {
  friendsListIsActive: boolean
  setFriendsListIsActive: React.Dispatch<React.SetStateAction<boolean>>
}
const friendsListContext = createContext<friendsListContextType>(
  {} as friendsListContextType
)

export const FriendsListProvider = ({ children }: friendsListProvider) => {
  const [friendsListIsActive, setFriendsListIsActive] = useState<boolean>(false)
  return (
    <friendsListContext.Provider
      value={{ friendsListIsActive, setFriendsListIsActive }}
    >
      {children}
    </friendsListContext.Provider>
  )
}

export const useFriendsList = () => {
  const context = useContext(friendsListContext)
  return context
}
