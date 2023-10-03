import * as S from './style'
export function FriendItem() {
  return (
    <S.friendItemStyled>
      <img
        src="https://avatars.githubusercontent.com/u/102992996?s=400&u=80dfdee29368bfbd801dd0d3d6f27a84009a10f1&v=4"
        alt="Foto do perfil"
      />
      <div>
        <h3>gabrielsupz</h3>
        <h4>Gabriel Suptitz</h4>
      </div>
      <button>Ver perfil</button>
    </S.friendItemStyled>
  )
}
