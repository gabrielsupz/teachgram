import styled from 'styled-components'

export const asideStyled = styled.aside`
  display: none;

  @media (min-width: 750px) {
    display: flex;
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
`
