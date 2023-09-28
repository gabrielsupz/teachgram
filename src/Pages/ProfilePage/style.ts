import styled from 'styled-components'
import { boxPageStyled } from '../styles'

export const profilePageStyled = styled(boxPageStyled)`
  flex-direction: column;
  padding-top: 33px;
  width: 300px;
  margin: auto;
  gap: 33px;
  h2 {
    font-size: 20px;
    font-weight: 600;
    color: var(--text-color);
    text-align: center;
  }

  h4,
  p {
    font-size: 15px;
    font-weight: 400;
    color: var(--light-grey-color);
    text-align: center;
  }
  h5 {
    font-size: 15px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    color: var(--light-grey-color);
    strong {
      color: var(--text-color);
      font-size: 15px;
      font-weight: 700;
    }
  }
  main {
    display: flex;
    flex-direction: column;
    gap: 31px;
  }
  #backArroButton {
    img {
      width: 19px;
    }

    @media (min-width: 1300px) {
    }
  }
`
export const headerProfilePageStyle = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const threeDotsButton = styled.button`
  background-color: white;
  border: none;
  height: 19px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transition: all 0.3s;
    scale: 1.1;
  }
`
export const profileInfoBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  div {
    display: flex;
    justify-content: center;
    width: 100%;
    h5 {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }

    h5:first-child {
      padding-right: 23px;
      border-right: 1px solid #dbdada;
    }

    h5:nth-child(2) {
      padding-left: 23px;
    }
  }
`
export const buttonFriendStyled = styled.button`
  margin-left: 37px;
  font-size: 15px;
  font-weight: 500;
  color: white;
  text-align: center;
  padding: 5px 10px 5px 10px;
  border-radius: 8px;

  box-shadow: 0px 4px 21px -4px #00000033;
  border: none;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
  }
`

export const addFrienButtonStyle = styled(buttonFriendStyled)`
  background-color: var(--red-color);

  &:hover {
    background-color: var(--red-color-hover);
  }
`
export const unfriendButtonStyle = styled(buttonFriendStyled)`
  background-color: white;
  color: var(--light-grey-color);
  border: 1px solid var(--light-grey-color);

  &:hover {
    color: white;
    background-color: var(--light-grey-color);

    path {
      stroke: white;
    }
  }
`

export const imgProfileSyled = styled.img`
  width: 176px;
  height: 176px;
  border: 1.18px solid #dfdfdf;
  border-radius: 100%;
`

export const imgBoxStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid #ffffff;
  }
`
