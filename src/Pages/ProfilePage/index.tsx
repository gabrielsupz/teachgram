import * as S from './style'
import { BackArrowButton } from '../../Components/BackArrowButton'
import { Aside } from '../../Components/Aside'
import { useConfigSection } from '../../Contexts/ConfigSectionContext'
import { ConfigSection } from '../../Components/ConfigSection'
import { CreatePostModal } from '../../Components/CreatePostModal'
import { FriendsList } from '../../Components/FriendsList'

export function ProfilePage() {
  const { configSection, setConfigSection } = useConfigSection()
  const isFriends = false

  const handleConfigButton = () => {
    setConfigSection(true)
  }

  if (configSection) {
    return <ConfigSection />
  } else
    return (
      <S.profilePageStyled>
        <S.headerProfilePageStyle>
          <BackArrowButton
            backFunction={() => console.log('Essa é pra sair do perfil ')}
          />
          <S.threeDotsButton onClick={() => handleConfigButton()}>
            <svg
              width="5"
              height="19"
              viewBox="0 0 5 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2.5001" cy="1.9" r="1.9" fill="#303030" />
              <circle cx="2.5001" cy="9.5" r="1.9" fill="#303030" />
              <circle cx="2.5001" cy="17.1" r="1.9" fill="#303030" />
            </svg>
          </S.threeDotsButton>
        </S.headerProfilePageStyle>
        <Aside />

        <main>
          <S.profileInfoBoxStyle>
            <S.imgProfileSyled
              src="https://avatars.githubusercontent.com/u/102992996?s=400&u=80dfdee29368bfbd801dd0d3d6f27a84009a10f1&v=4"
              alt=""
            />
            <S.nameAndDescriptionDivSyled>
              <h2>
                Gabriel Suptitz{' '}
                <button onClick={() => handleConfigButton()}>
                  <img src="/configButton.svg" alt="Ícone de engrenagem " />
                </button>
              </h2>
              <h4>Desenvolvedor</h4>
              <p>
                A programação foi o caminho que escolhi, dev foi a profissão que
                me fez querer evoluir e o código me deixou feliz com resultados,
                por isso abracei a ideia.
              </p>
              <div>
                <h5>
                  <strong>50</strong>Posts
                </h5>
                <h5>
                  <strong>100</strong>Amigos
                </h5>
                {isFriends ? (
                  <S.addFrienButtonStyle>
                    Adicionar
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </S.addFrienButtonStyle>
                ) : (
                  <S.unfriendButtonStyle>
                    Amigos
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.04612 3.78052L3.63542 6.31263C3.84152 6.51418 4.1749 6.50016 4.36335 6.28203L8.927 0.999817"
                        stroke="#666666"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </S.unfriendButtonStyle>
                )}
              </div>
            </S.nameAndDescriptionDivSyled>
          </S.profileInfoBoxStyle>
          <S.imgBoxStyled>
            <img
              src="https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
              alt=""
            />
            <img
              src="https://i.pinimg.com/236x/35/cc/35/35cc357473dcc4c3f367c3f6fc12fbef.jpg"
              alt=""
            />
            <img
              src="https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
              alt=""
            />
            <img
              src="https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
              alt=""
            />
            <img
              src="https://i.pinimg.com/236x/35/cc/35/35cc357473dcc4c3f367c3f6fc12fbef.jpg"
              alt=""
            />
            <img
              src="https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg"
              alt=""
            />
            <img
              src="https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
              alt=""
            />
            <img
              src="https://i.pinimg.com/236x/35/cc/35/35cc357473dcc4c3f367c3f6fc12fbef.jpg"
              alt=""
            />
            <img
              src="https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg"
              alt=""
            />
          </S.imgBoxStyled>
        </main>
        <CreatePostModal />
        <FriendsList />
      </S.profilePageStyled>
    )
}
