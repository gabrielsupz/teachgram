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
      padding: 30px;
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

    div {
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
`
