import styled from 'styled-components'

export const feedPostStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  box-shadow: 0px 0px 4px 0px #00000040;
  border-radius: 10px;
  padding: 16px 18px 16px 18px;
  h3,
  p {
    font-size: 12px;
    font-weight: 400;
    color: var(--navigate-text-color);
  }
  p {
    margin-bottom: 12px;
  }

  button {
    cursor: pointer;
    border: none;
    transition: all 0.3s;
    background-color: transparent;
  }

  h4 {
    transition: all 0.3s;
    margin-top: 5px;
    font-size: 10px;
    font-weight: 400;
    color: var(--navigate-text-color);
  }

  h4.liked {
    transition: all 0.3s;
    font-weight: 600;
    color: var(--red-color-hover);
  }

  div:first-child {
    display: flex;
    gap: 16px;
    align-items: center;
    position: relative;
    width: 100%;

    img {
      width: 40px;
      height: 40px;
      border-radius: 100%;
    }

    svg {
      transition: all 0.3s;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  div:nth-child(2) {
    img {
      width: 278px;
      border-radius: 9px;
    }
  }
  div:nth-child(3) {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }

  @media (min-width: 750px) {
    width: 350px;

    div:first-child {
      width: 100%;

      img {
        width: 50px;
        height: 50px;
      }
    }

    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      h3 {
        font-size: 18px;
      }
      p,
      h4 {
        font-size: 18px;
      }

      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  @media (min-width: 1024px) {
    width: 550px;
    padding: 30px;
    div:first-child {
      img {
        width: 77px;
        height: 77px;
      }
    }

    div:nth-child(2) {
      h3 {
        font-size: 25px;
      }
      p,
      h4 {
        font-size: 20px;
      }
    }
  }
`
