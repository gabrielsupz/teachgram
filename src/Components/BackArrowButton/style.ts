import styled from 'styled-components'

export const BackArrowButtonStyled = styled.button`
  background-color: white;
  border: none;

  cursor: pointer;
  img {
    transition: all 0.3s;
    width: 12px;
    height: 12px;
  }

  @media (min-width: 750px) {
    img {
      width: 25px;
      height: 26px;
    }
  }

  &:hover {
    img {
      transition: all 0.3s;
      scale: 1.1;
    }
  }
`
