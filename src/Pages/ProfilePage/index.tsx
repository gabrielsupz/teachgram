import * as S from './style'
import { BackArrowButton } from '../../Components/BackArrowButton'
import { Aside } from '../../Components/Aside'
import { useConfigSection } from '../../Contexts/ConfigSectionContext'
import { ConfigSection } from '../../Components/ConfigSection'
import { CreatePostModal } from '../../Components/CreatePostModal'
import { FriendsList } from '../../Components/FriendsList'
import { Loading } from '../../Components/Loading'
import { useState, useEffect } from 'react'
import {
  GetAuthUser,
  GetPostByUserId,
  GetUser,
  UserPropsType
} from '../../services/UserAndPost.service'
import { useAuthContext } from '../../Contexts/AuthContext'
import { PostDataType } from '../FeedPage'
import { useNavigate, useParams } from 'react-router-dom'

export function ProfilePage() {
  const { authToken } = useAuthContext()
  const { configSection, setConfigSection } = useConfigSection()
  const { urlid } = useParams()

  const isFriends = false
  const [
    {
      description,

      id,
      name,
      profileLink,
      userName,
      friendsCount,
      postsCount
    },
    setUser
  ] = useState<UserPropsType>({} as UserPropsType)
  const [posts, setPosts] = useState<PostDataType[]>()
  const navigate = useNavigate()
  useEffect(() => {
    const urlId = urlid ? parseInt(urlid) : undefined
    if (urlId) {
      GetUser(authToken, urlId)
        .then(e => setUser(e))
        .then(() => getPosts(urlId))
        .catch(() => navigate('/'))
    } else {
      GetAuthUser(authToken)
        .then(e => setUser(e))
        .then(() => getPosts(id))
        .catch(() => navigate('/'))
    }
  }, [])

  useEffect(() => {
    getPosts(id)
  }, [id])

  const getPosts = async (userId: number) => {
    GetPostByUserId(authToken, userId).then(e => setPosts(e.content))
  }
  const handleConfigButton = () => {
    setConfigSection(true)
  }

  if (configSection) {
    return (
      <>
        <ConfigSection /> <Loading />
      </>
    )
  } else
    return (
      <>
        {' '}
        <Loading />
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
                src={profileLink}
                alt="Foto de perfil do usuário"
              />
              <S.nameAndDescriptionDivSyled>
                <h2>
                  @{userName}
                  <button onClick={() => handleConfigButton()}>
                    <img src="/configButton.svg" alt="Ícone de engrenagem " />
                  </button>
                </h2>
                <h4>{name}</h4>
                <p>{description}</p>
                <div>
                  <h5>
                    <strong>{postsCount}</strong>Posts
                  </h5>
                  <h5>
                    <strong>{friendsCount}</strong>Amigos
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
              {posts ? (
                posts.map(e => (
                  <img
                    key={e.id}
                    src={e.photoLink}
                    alt={`Postagem de ${e.author}`}
                  ></img>
                ))
              ) : (
                <h3>Sem postagens</h3>
              )}
            </S.imgBoxStyled>
          </main>
          <CreatePostModal />
          <FriendsList />
        </S.profilePageStyled>
      </>
    )
}
