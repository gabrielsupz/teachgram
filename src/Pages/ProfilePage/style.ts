import styled from 'styled-components'
import { boxPageStyled } from '../styles'

export const profilePageStyled = styled(boxPageStyled)`
  flex-direction: column;
  padding-top: 33px;
  padding-bottom: 50px;
  width: 300px;
  margin: auto;
  gap: 33px;
  align-items: center;

  @media (min-width: 1250px) {
    justify-content: space-around;
  }
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
  #backArrowButton {
    img {
      width: 19px;
    }

    @media (min-width: 1250px) {
    }
  }

  @media (min-width: 750px) {
    align-items: flex-start;
    display: flex;
    flex-direction: row;
  }
`

export const headerProfilePageStyle = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (min-width: 750px) {
    display: none;
  }
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
  position: relative;
  @media (min-width: 750px) {
    padding-bottom: 100px;
  }
  @media (min-width: 1250px) {
    flex-direction: row;
    padding-bottom: 150px;
  }
`

export const nameAndDescriptionDivSyled = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 20px;

  h2:first-child {
    position: relative;
  }
  h2 button {
    position: absolute;
    right: 0;
    top: 10px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    display: none;
  }

  h2 img:hover {
    animation: var(--rotate-animation);
  }

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

  @media (min-width: 750px) {
    align-items: center;
    h2,
    h4,
    p {
      width: 350px;
      padding-left: 50px;
      text-align: justify;
    }
    h2 {
      font-size: 20px;
    }

    h4 {
      font-size: 16px;
    }

    h2 {
      button {
        display: flex;
      }
    }
    div {
      justify-content: flex-start;
      padding-left: 100px;
      h5 {
        position: absolute;
        bottom: 0;
        font-size: 18px;
        font-weight: 400;

        strong {
          font-size: 20px;
        }
      }
      h5:nth-child(1) {
        left: 30%;
        padding-right: 30px;
      }
      h5:nth-child(2) {
        left: 50%;
      }
    }
  }
  @media (min-width: 1250px) {
    align-items: flex-start;

    h2,
    h4,
    p {
      padding-left: 100px;
    }
    h2 {
      font-size: 25px;
    }

    h4 {
      font-size: 20px;
    }
    div {
      justify-content: flex-start;
      padding-left: 100px;
      h5 {
        font-size: 20px;
        font-weight: 400;
      }
      h5:nth-child(1) {
        left: 40%;
        padding-right: 30px;
      }
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
  transition: all 0.3s;

  box-shadow: 0px 4px 21px -4px #00000033;
  border: none;
  transition: all 0.3s;

  &:hover {
    transition: all 0.3s;
  }

  @media (min-width: 750px) {
    margin: 0;
    height: 32px;
  }
`

export const addFrienButtonStyle = styled(buttonFriendStyled)`
  background-color: var(--red-color);
  --c: var(--red-color-hover);
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;

  span {
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: var(--c);
    transform: translateY(150%);
    border-radius: 50%;
    left: calc((var(--n) - 1) * 25%);
    transition: 0.5s;
    transition-delay: calc((var(--n) - 1) * 0.1s);
    z-index: -1;
  }

  &:hover span {
    transform: translateY(0) scale(2);
  }

  & span:nth-child(1) {
    --n: 1;
  }

  & span:nth-child(2) {
    --n: 2;
  }

  & span:nth-child(3) {
    --n: 3;
  }

  & span:nth-child(4) {
    --n: 4;
  }
`
export const unfriendButtonStyle = styled(buttonFriendStyled)`
  background-color: white;
  color: var(--light-grey-color);
  border: 1px solid var(--light-grey-color);

  --c: var(--light-grey-color);
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;

  span {
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: var(--c);
    transform: translateY(150%);
    border-radius: 50%;
    left: calc((var(--n) - 1) * 25%);
    transition: 0.3s;
    transition-delay: calc((var(--n) - 1) * 0.1s);
    z-index: -1;
  }
  svg {
    margin-left: 5px;
  }
  &:hover {
    color: white;

    path {
      stroke: white;
    }
  }

  &:hover span {
    transform: translateY(0) scale(2);
  }

  & span:nth-child(5) {
    --n: 5;
  }
  & span:nth-child(1) {
    --n: 1;
  }

  & span:nth-child(2) {
    --n: 2;
  }

  & span:nth-child(3) {
    --n: 3;
  }

  & span:nth-child(4) {
    --n: 4;
  }
`

export const imgProfileSyled = styled.img`
  width: 176px;
  height: 176px;
  border: 1.18px solid #dfdfdf;
  border-radius: 100%;

  @media (min-width: 1250px) {
    width: 300px;
    height: 300px;
  }
`

export const imgBoxStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  img {
    min-height: 100px;
    min-width: 100px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid #ffffff;
  }

  @media (min-width: 1250px) {
    img {
      width: 280px;
      height: 280px;
    }
  }
`
export const configSectionBoxStyle = styled.div`
  display: flex;
  justify-content: space-between;
  height: max-content;
`
