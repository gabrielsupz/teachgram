import styled from 'styled-components'

export const feedPageStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  #logo {
    margin: 38px 0 38px 0;
    width: 187px;
  }

  @media (min-width: 750px) {
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    margin-right: 90px;
    aside {
      margin-left: 50px;
      margin-top: 50px;
    }
    #logo {
      display: none;
    }
  }
  #backToTopButton {
    display: none;
  }

  .pageInteract {
    padding-bottom: 30px;
    button {
      border: none;
      background-color: transparent;

      a {
        transition: all 0.3s;
        color: var(--red-color);
      }
    }

    button:hover a {
      color: var(--red-color-hover);
    }
  }

  @media (min-width: 750px) {
    #Aside {
      align-self: flex-start;
    }
    #backArrowButton {
      display: none;
    }
    #backToTopButton {
      display: flex;
      position: fixed;
      bottom: 1rem;
      left: 2.5rem;

      opacity: 0;
      visibility: hidden;

      transition: 200ms;
      transform: translateX(-100%);
    }

    #backToTopButton.show {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
    }
  }

  @media (min-width: 1300px) {
    aside {
      margin-left: 60px;
      position: absolute;
    }
    #rectangleBox {
      align-self: flex-start;
    }
    #imgRectangle {
      min-height: 100vh;
      min-width: 300px;
      background-image: url('/rectangle.svg');
      position: fixed;
      right: 0;
      background-repeat: no-repeat;
    }
  }
`

export const feedListStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;

  gap: 16px;
  @media (min-width: 750px) {
    width: 300px;
    margin: auto;
    padding-top: 150px;
  }

  @media (min-width: 1300px) {
    width: 500px;
  }

  overflow: visible;
`
