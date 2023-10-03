import { useEffect } from 'react'
import { Aside } from '../../Components/Aside'
import { FeedPost } from '../../Components/FeedPost'
import { MobileNav } from '../../Components/MobileNav'
import * as S from './style'
import { FriendsList } from '../../Components/FriendsList'
import { ConfigSection } from '../../Components/ConfigSection'

export function FeedPage() {
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
    <S.feedPageStyled>
      <img id="logo" src="/logoAndText.svg" alt="logo do Teachgram" />
      <Aside />
      <S.feedListStyled>
        <FeedPost />
        <FeedPost />
        <FeedPost />
        <MobileNav />
      </S.feedListStyled>
      <div>
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 20L20 13L27 20"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>

      <FriendsList />
    </S.feedPageStyled>
  )
}
