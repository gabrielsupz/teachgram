import styled from 'styled-components'
import { modalBaseStyle } from '../Styles/baseStyles'

export const createPostModalStyled = styled(modalBaseStyle)`
  .box {
    display: flex;
    align-items: center;

    flex-direction: column;
    background-color: #30303059;
    height: 100%;
    width: 100%;

    header {
      background-color: white;
      padding: 30px 0;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      #backArrowButton,
      img {
        display: flex;
        width: 12px;
        height: 12px;
      }

      button {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: transparent;
        color: var(--red-color);
        text-decoration: underline;

        font-size: 15px;
        font-weight: 600;
      }
    }

    div.modalBox {
      margin-top: 45px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 300px;
      height: 300px;
      border-radius: 10px;
      padding: 25px;
      background-color: white;

      input {
        padding: 10px;
        color: var(--navigate-text-color);
        border: none;
      }
    }

    .imgDiv {
      margin-top: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      img {
        align-self: center;
      }
      display: flex;

      input {
        margin-left: 36px;
      }
    }
  }

  div.desktopIncrement {
    display: none;
  }

  label {
    display: none;
  }

  @media (min-width: 750px) {
    .box {
      border-radius: 0;
      align-items: center;
      justify-content: center;
      button {
        cursor: pointer;
      }
      header {
        display: none;
      }

      div.modalBox {
        padding: 44px 54px;
        width: 528px;
        height: 229px;

        border-radius: 34px;

        h3,
        input {
          display: none;
        }

        .alwaysVisible {
          display: flex;
        }
      }
      header.desktopIncrement {
        padding: 0;
        display: flex;
        position: relative;

        button.close {
          position: absolute;
          left: -25px;
          top: -15px;
          transition: all 0.3s;
        }

        button.close:hover {
          transition: all 0.3s;

          scale: 1.1;
        }
        img {
          width: 14px;
          height: 14px;
        }
      }
      div.desktopIncrement {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        button {
          border: none;
          background-color: transparent;
          transition: all 0.3s;
        }
        button:hover {
          transition: all 0.3s;

          scale: 1.1;
        }
      }

      div:nth-child(4) {
        border: 1px solid var(--red-color);
        border-radius: 10px;
        display: grid;
        grid-template-columns: auto 1fr;
        margin-top: 50px;

        input {
          height: 32px;
          padding: 0;
          padding-left: 10px;
          border: none;
          background-color: transparent;
          font-size: 15px;
          display: flex;
          color: var(--navigate-text-color);
        }

        input::placeholder {
          color: var(--navigate-text-color);
        }
      }
      label.labelDesktopIncrement {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--red-color);
        color: white;
        border-radius: 8px;
        font-size: 15px;
        font-weight: 500;
        width: 135px;
        height: 100%;
      }
    }
  }
`
