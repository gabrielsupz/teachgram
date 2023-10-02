import styled from 'styled-components'

export const contentConfigSectionStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .update,
  .confirm {
    background-color: var(--red-color);
    color: white;
    border: none;
    box-shadow: 0px 4px 21px -4px #00000066;
  }

  .return,
  .cancel {
    background-color: transparent;
    border: 1px solid var(--red-color);
    color: var(--red-color);
  }

  .update:hover,
  .confirm:hover {
    transition: all 0.3s;
    background-color: var(--red-color-hover);
  }
  .return:hover,
  .cancel:hover {
    transition: all 0.3s;
    background-color: var(--red-color-hover);
    color: white;
  }
  #backArrowButton {
    display: none;
  }

  @media (min-width: 750px) {
    position: initial;
    justify-content: space-between;

    #backArrowButton {
      display: block;
      position: absolute;
      left: 60px;
      top: 50px;
    }

    #imgRectangle {
      min-height: 100vh;
      min-width: 300px;
      background-image: url('/rectangle.svg');
    }
  }
`

export const configSection = styled.section`
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  position: absolute;
  transition: all 0.3s;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  gap: 105px;
  #backArrowButton {
    display: flex;
    align-self: left;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 48px;

    button {
      display: flex;
      justify-content: space-between;
      cursor: pointer;

      color: var(--text-color);
      font-size: 20px;
      font-weight: 600;

      background-color: transparent;
      border: none;
    }
    button:last-child {
      color: var(--red-color);
      font-weight: 400;
      text-decoration: underline;
    }
  }

  @media (min-width: 750px) {
    width: 400px;
    margin-top: 100px;
    position: initial;
    margin-left: 200px;

    div button {
      width: 100%;
      font-size: 25px;
    }
  }
`

export const inSpecificSection = styled.section`
  width: 85%;
  padding-top: 84px;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-bottom: 50px;
  img {
    align-self: center;
    width: 176px;
    border-radius: 100%;
    margin-bottom: 60px;
  }
  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 55px;
  }

  div {
    gap: 8px;
    display: flex;
    flex-direction: column;
  }
  .buttonsBox {
    display: flex;
    margin-top: 40px;
    width: 100%;
    gap: 20px;
    flex-direction: row;
  }

  button {
    width: 85px;
    height: 35px;
    border-radius: 8px;
    font-size: 15px;
    transition: all 0.3s;
  }

  @media (min-width: 750px) {
    position: initial;
    div {
      gap: 13px;
    }

    img {
      align-self: flex-start;
    }
    margin-left: 200px;
    h2 {
      font-size: 25px;
    }
  }
`
export const deleteAccountDiv = styled.div`
  display: none;
  width: 0;
  height: 0;
  z-index: -100;
  position: relative;

  &.active {
    z-index: 1;
    position: absolute;
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    background: #30303059;
    align-items: center;

    div:first-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: white;
      height: max-content;
      min-height: 300px;
      min-width: 300px;
      border-radius: 34px;
      gap: 40px;
      h3 {
        font-size: 25px;
        font-weight: 600;
        color: var(--text-color);
        border-bottom: 2px solid #cecece;
        padding-bottom: 30px;
        width: 100%;
        text-align: center;
      }
      p {
        width: 250px;
        text-align: center;
        font-size: 15px;
        font-weight: 400;
      }
      button {
        width: 85px;
        height: 35px;
        border-radius: 8px;
        font-size: 15px;
        transition: all 0.3s;
      }
      div:last-child {
        display: flex;
        gap: 20px;
      }
    }
  }

  @media (min-width: 750px) {
    height: 100%;

    &.active {
      div:first-child {
        width: 528px;
        height: 310px;
      }

      div {
        button.cancel,
        button.confirm {
          width: 150px;
        }
      }
    }
  }
`
