import { useNavigate } from 'react-router-dom'
import { UserPropsType } from '../../services/UserAndPost.service'
import * as S from './style'
import { useFriendsList } from '../../Contexts/FriendsListContext'
export function FriendItem(user: UserPropsType) {
  const { setFriendsListIsActive } = useFriendsList()
  const navigate = useNavigate()
  const handleShowProfileButton = () => {
    navigate(`/profile/${user.id}`)
    setFriendsListIsActive(false)
  }
  return (
    <S.friendItemStyled>
      <img src={user.profileLink} />
      <div>
        <h3>{user.userName}</h3>
        <h4>{user.name}</h4>
      </div>
      <button onClick={() => handleShowProfileButton()}>Ver perfil</button>
    </S.friendItemStyled>
  )
}
