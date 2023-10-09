import styled from 'styled-components'
import { modalBaseStyle } from '../Styles/baseStyles'

export const containingFriendsListStyled = styled(modalBaseStyle)`
  .box {
    padding: 42px 36px;
  }

  h2 {
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
    #backArrowButton {
      display: none;
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

  button {
    border: none;
    background-color: transparent;
  }

  div {
    color: var(--friend-pages-color);
    cursor: default;
    button {
      cursor: pointer;
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
