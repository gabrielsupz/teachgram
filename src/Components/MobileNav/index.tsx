import * as S from './style'

export function MobileNav() {
  return (
    <S.mobileNavStyled>
      <button>
        <img src="/mobileNavHome.svg" alt="" />
      </button>
      <button>
        <img src="/mobileNavFriends.svg" alt="" />
      </button>
      <button>
        <img src="/mobileNavCreate.svg" alt="" />
      </button>
      <button>
        <img src="/mobileNavConfig.svg" alt="" />
      </button>
      <button>
        <img
          src="https://avatars.githubusercontent.com/u/102992996?s=400&u=80dfdee29368bfbd801dd0d3d6f27a84009a10f1&v=4"
          alt="Foto do perfil"
        />
      </button>
    </S.mobileNavStyled>
  )
}
