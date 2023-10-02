import { useContext, createContext, useState } from 'react'

interface friendsListProvider {
  children: React.ReactNode
}

interface friendsListContextType {
  friendsList: boolean
  setFriendsList: React.Dispatch<React.SetStateAction<boolean>>
}
const friendsListContext = createContext<friendsListContextType>(
  {} as friendsListContextType
)

export const FriendsListProvider = ({ children }: friendsListProvider) => {
  const [friendsList, setFriendsList] = useState<boolean>(false)
  return (
    <friendsListContext.Provider value={{ friendsList, setFriendsList }}>
      {children}
    </friendsListContext.Provider>
  )
}

export const usefriendsList = () => {
  const context = useContext(friendsListContext)
  return context
}
