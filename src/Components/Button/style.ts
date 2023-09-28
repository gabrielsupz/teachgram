import styled from 'styled-components'

export const navigateButton = styled.button`
  padding: 30px;
  max-width: 250px;
  color: var(--navigate-text-color);
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  gap: 30px;
  border: 1px solid #e2e2e2;
  background-color: white;
  border-radius: 15px;
  align-items: center;

  img.profile {
    max-width: 44px;
    border: 1.18px solid #dfdfdf;
    border-radius: 100%;
  }
  svg {
    width: 30px;
  }
  path {
    transition: all 0.3s;
  }
  &:hover {
    color: white;

    path {
      transition: all 0.3s;
      stroke: white;
      fill: white;
    }
  }

  --c: var(--red-color);
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
