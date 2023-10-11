import styled, { css, keyframes } from 'styled-components'

interface modalProps {
  active?: boolean
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

export const modalBaseStyle = styled.div<modalProps>`
  display: ${({ active }) => (active ? 'flex' : 'none')};

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

  h2,
  h3 {
    font-size: 20px;
    color: var(--text-color);
    font-weight: 600;
  }

  .closeButton:hover {
    transition: all 0.3s;
    scale: 1.1;
  }

  .box {
    height: max-content;
    background-color: white;
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
  }
`
