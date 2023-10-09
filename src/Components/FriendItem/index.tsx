import { UserPropsType } from '../../services/UserAndPost.service'
import * as S from './style'
export function FriendItem(user: UserPropsType) {
  return (
    <S.friendItemStyled>
      <img src={user.profileLink} />
      <div>
        <h3>{user.userName}</h3>
        <h4>{user.name}</h4>
      </div>
      <button>Ver perfil</button>
    </S.friendItemStyled>
  )
}
