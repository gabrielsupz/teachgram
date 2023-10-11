import styled from 'styled-components'

export const mobileNavStyled = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  bottom: 0;
  min-height: 77px;
  background-color: white;
  width: 100vw;
  max-width: 450px;
  box-shadow: 0px -1px 4px 0px #bdbdbd;

  button {
    border: none;
    background-color: transparent;
    img.profile {
      width: 32px;
      height: 32px;
    }
  }
  button:last-child {
    img {
      border-radius: 100%;
      width: 32px;
    }
  }

  @media (min-width: 750px) {
    display: none;
    width: 0;
    height: 0;
  }
`
