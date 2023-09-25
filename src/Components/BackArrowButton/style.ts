import styled from 'styled-components'

export const BackArrowButtonStyled = styled.button`
  background-color: white;
  border: none;
  position: absolute;
  left: 20px;
  top: -25px;

  img {
    width: 12px;
    height: 12px;
  }

  @media (min-width: 750px) {
    img {
      width: 25px;
      height: 26px;
    }
  }
  @media (min-width: 1300px) {
    top: 20px;
    left: -70px;
  }
`
