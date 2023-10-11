import { useNavigate } from 'react-router-dom'
import { useConfigSection } from '../../Contexts/ConfigSectionContext'
import { useFriendsList } from '../../Contexts/FriendsListContext'
import * as S from './style'
import { useCreatePostModal } from '../../Contexts/CreatePostContext'
import { useAuthContext } from '../../Contexts/AuthContext'

export function MobileNav() {
  const { setConfigSection } = useConfigSection()
  const { setFriendsListIsActive } = useFriendsList()
  const navigate = useNavigate()
  const { setCreatePostModalIsActive } = useCreatePostModal()
  const { authUserPhoto } = useAuthContext()
  return (
    <S.mobileNavStyled>
      <button onClick={() => navigate('/feed#')}>
        <img src="/mobileNavHome.svg" alt="Imagem do botão ir para feed/home" />
      </button>
      <button onClick={() => setFriendsListIsActive(true)}>
        <img
          src="/mobileNavFriends.svg"
          alt="Imagem do botão que abre lista de amigos"
        />
      </button>
      <button onClick={() => setCreatePostModalIsActive(true)}>
        <img src="/mobileNavCreate.svg" alt="" />
      </button>
      <button
        onClick={() => {
          navigate('/profile')
          setConfigSection(true)
        }}
      >
        <img src="/mobileNavConfig.svg" alt="" />
      </button>
      <button onClick={() => navigate('/profile')}>
        <img className="profile" src={authUserPhoto} alt="Foto do perfil" />
      </button>
    </S.mobileNavStyled>
  )
}
