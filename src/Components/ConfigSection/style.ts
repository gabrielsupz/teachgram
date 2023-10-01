import styled from 'styled-components'

export const contentConfigSectionStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  padding-top: 32px;

  margin-bottom: 50px;
`

export const configSection = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  transition: all 0.3s;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  gap: 105px;
  #backArroButton {
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
  .update {
    background-color: var(--red-color);
    color: white;
    border: none;
    box-shadow: 0px 4px 21px -4px #00000066;
  }

  .return {
    background-color: transparent;
    border: 1px solid var(--red-color);
    color: var(--red-color);
  }

  .update:hover {
    transition: all 0.3s;
    background-color: var(--red-color-hover);
  }
  .return:hover {
    transition: all 0.3s;
    background-color: var(--red-color-hover);
  }
`
