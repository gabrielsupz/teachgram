import { useEffect, useState } from 'react'
import { Aside } from '../../Components/Aside'
import { FeedPost } from '../../Components/FeedPost'
import { MobileNav } from '../../Components/MobileNav'
import * as S from './style'
import { FriendsList } from '../../Components/FriendsList'
import { CreatePostModal } from '../../Components/CreatePostModal'
import { Loading } from '../../Components/Loading'
import { GetFriendsPosts } from '../../services/UserAndPost.service'
import { useAuthContext } from '../../Contexts/AuthContext'

export interface PostDataType {
  author: string
  authorPhoto: string
  id: number
  title: string
  description: string
  photoLink: string
  videoLink: string
  createdAt: string
  updatedAt: string
  likes: number
}

export function FeedPage() {
  const { authToken } = useAuthContext()
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [posts, setPosts] = useState<PostDataType[]>([])

  useEffect(() => {
    GetFriendsPosts(authToken, currentPage).then(e => {
      setPosts(e.content)
      setTotalPages(e.totalPages - 1)
    })
  }, [currentPage, authToken])

  const handleNextPostPage = async () => {
    const nextPage = currentPage + 1 > totalPages ? 1 : currentPage + 1

    await GetFriendsPosts(authToken, nextPage).then(e => {
      setPosts(e.content)
      setCurrentPage(nextPage)
    })

    console.log('Page: ' + nextPage, 'Total Pages: ' + totalPages)
  }

  useEffect(() => {
    window.addEventListener('scroll', showBackToTopButtonOnScroll)
    return () => {
      window.removeEventListener('scroll', showBackToTopButtonOnScroll)
    }
  }, [])

  function showBackToTopButtonOnScroll() {
    const backToTopButton = document.getElementById('backToTopButton')

    if (backToTopButton) {
      backToTopButton.classList.toggle('show', window.scrollY > 750)
    }
  }

  return (
    <>
      <S.feedPageStyled>
        <Loading />
        <img id="logo" src="/logoAndText.svg" alt="logo do Teachgram" />
        <Aside />
        <S.feedListStyled>
          {posts.length > 0 ? (
            <>
              {posts.map(post => (
                <FeedPost {...post} />
              ))}

              <div className="pageInteract">
                {currentPage === totalPages ? (
                  <button onClick={() => setCurrentPage(1)}>
                    <a href="#top">Voltar ao início</a>
                  </button>
                ) : (
                  <button onClick={handleNextPostPage}>
                    <a href="#top">Mais</a>
                  </button>
                )}
              </div>
            </>
          ) : (
            <h3>Sem posts</h3>
          )}
          <MobileNav />
        </S.feedListStyled>
        <div id="rectangleBox">
          <div id="imgRectangle"></div>
        </div>
        <a id="backToTopButton" href="#top">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#F37671" />
            <path
              d="M20 27V13"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 20L20 13L27 20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <CreatePostModal />
        <FriendsList />
      </S.feedPageStyled>
    </>
  )
}
