import styled from 'styled-components'

export const asideStyled = styled.aside`
  display: none;
  .profile {
    width: 44px;
    height: 44px;
  }
  @media (min-width: 750px) {
    align-self: flex-start;
    display: flex;
  }
  @media (min-width: 1300px) {
    margin-right: 50px;
  }

  header {
    img {
      height: 36px;
    }
  }

  flex-direction: column;
  gap: 78px;
`
export const navigateAsideButtonsStyled = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 37px;

  button {
    width: 100%;
  }
`
export const arrowAndHeaderStyle = styled.div`
  display: flex;
  gap: 20px;
`
