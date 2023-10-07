import styled, { keyframes } from 'styled-components'

const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`

export const loadingBoxStyled = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: var(--red-color);
  max-width: 100%;
  gap: 20px;
  overflow: hidden;
  z-index: 1000;
  img {
    width: 100px;
    animation: ${scaleAnimation} 2s linear infinite;
  }
  h3 {
    font-size: 25px;
    font-weight: 700;
    color: white;
  }

  @media (min-width: 750px) {
    img {
      width: 200px;
    }
  }
`
