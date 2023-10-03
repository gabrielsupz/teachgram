import styled, { css, keyframes } from 'styled-components'

interface friendsListProps {
  active: boolean
}
const slideIn = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

export const containingFriendsListStyled = styled.div<friendsListProps>`
  ${({ active }) =>
    active
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}

  position: fixed;

  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: white;
  justify-content: center;
  z-index: 2;
  top: 0;
  align-self: center;
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-name: ${slideIn};
  .box {
    height: max-content;
    background-color: white;

    padding: 42px 36px;
  }
  h2 {
    font-size: 20px;
    color: var(--text-color);
    font-weight: 600;
    border-bottom: 2px solid #cecece;
    padding-bottom: 9px;
    margin-bottom: 36px;
  }
  header {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-bottom: 36px;

    img:nth-child(2) {
      width: 39px;
      height: 39px;
    }

    #backArrowButton {
      position: absolute;
      left: 36px;
      top: 36px;
    }

    .closeButton {
      display: none;
      border: none;
      background-color: transparent;
      cursor: pointer;
      transition: all 0.3s;
    }
    .closeButton:hover {
      transition: all 0.3s;
      scale: 1.1;
    }
  }

  @media (min-width: 750px) {
    background: #30303059;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 25px;
    }
    .box {
      width: 500px;
      border-radius: 34px;
    }
    img:nth-child(2) {
      display: none;
    }

    header .closeButton {
      display: flex;
    }
  }
`

export const friendsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 305px;

  @media (min-width: 750px) {
    max-width: 100%;
  }
`
export const friendsListPagesStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 52px;
  margin-bottom: 60px;
  gap: 14px;
  cursor: pointer;
  button {
    border: none;
    background-color: transparent;
  }

  div {
    button {
      color: var(--friend-pages-color);
    }

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 31px;
    height: 31px;
    border: 1px solid var(--friend-pages-color);
    border-radius: 8px;
  }

  div.active {
    background-color: var(--red-color);
    color: white;
  }

  @media (min-width: 450px) {
    margin: 35px 0 35px 0;
  }
`
