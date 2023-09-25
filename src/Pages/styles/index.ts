import styled from 'styled-components'

export const boxPageStyled = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  img.loginAndRegisterImage {
    display: none;
  }

  @media (min-width: 820px) {
    img.loginAndRegisterImage {
      display: flex;
      width: 520px;
    }
  }
  @media (min-width: 1300px) {
    img.loginAndRegisterImage {
      display: block;
      width: 720px;
    }
  }

  button.submit {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 0 12px 0;
    width: 300px;
    background-color: var(--red-color);
    border-radius: 10px;
    color: white;
    border: 1px solid var(--red-color);
    font-weight: 600;
    font-size: 20px;
    box-shadow: 0px 4px 21px -4px #00000066;
    transition: all 0.3s;
    margin-top: 24px;
  }

  button.submit:hover {
    transition: all 0.3s;
    background-color: var(--red-color-hover);
  }
`

export const mainPageStyled = styled.main`
  width: 390px;
  display: flex;
  flex-direction: column;

  align-items: center;
  margin: auto;
  margin-top: 56px;
  margin-bottom: 56px;

  h1 {
    margin-top: 48px;
    font-size: 20px;
    color: var(--text-color);
    font-weight: 600;
  }

  h4 {
    margin-top: 27px;
    margin-bottom: 33px;
    font-size: 15px;
    font-weight: 400;
    color: var(--text-color);
    a {
      transition: all 0.3s;
      font-weight: 700;
      color: var(--red-color);
    }

    a:hover {
      transition: all 0.3s;
      color: var(--red-color-hover);
    }
  }

  @media (min-width: 1300px) {
    margin-bottom: 120px;

    img.logo {
      margin-top: 60px;
      height: 70px;
    }

    h1 {
      margin-top: 121px;
      margin-bottom: 9px;
    }
  }
`
export const labelAndInputStyledBase = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  gap: 7px;
  width: 300px;

  input {
    border: 1px solid var(--grey-color);
    border-radius: 8px;
    padding: 12px 15px 12px 15px;
    transition: all 0.3s;
  }

  input::placeholder {
    color: var(--placeholder-link-color);
  }

  input:focus {
    border: 1px solid var(--red-color);

    outline: 0;
    box-shadow: 3px 3px 0px 0px var(--red-color);
    transition: all 0.3s;
  }
`

export const formBaseStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
export const alertBoxStyled = styled.div`
  position: relative;
  h5 {
    display: none;
  }
  h5.active {
    display: flex;
    align-self: flex-end;
    color: var(--red-color);
    font-size: 15px;
    font-weight: 600;
    align-items: center;
    gap: 6px;
    position: absolute;
    right: 0;
    bottom: -23px;

    .ball {
      background-color: var(--red-color);
      width: 12px;
      height: 12px;
      border-radius: 100%;
    }
  }
`
