import styled from 'styled-components'
import {
  alertBoxStyled,
  boxPageStyled,
  formBaseStyled,
  labelAndInputStyledBase,
  mainPageStyled
} from '../styles'

export const boxLoginPageStyled = styled(boxPageStyled)``
export const loginPage = styled(mainPageStyled)``
export const formStyled = styled(formBaseStyled)``

export const labelAndInputStyled = styled(labelAndInputStyledBase)``
export const rememberAndForgotPassword = styled(alertBoxStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  margin-top: 14px;
  position: relative;
  label {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  a {
    color: var(--placeholder-link-color);
  }
`
export const enterWithStyled = styled.div`
  width: 300px;
  margin-top: 1px solid var(--grey-color);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  border-top: 1.5px solid var(--grey-color);
  padding-top: 33px;

  button {
    color: var(--grey-color);
    background-color: white;
    border: none;
    width: 100%;
    height: 50px;
    padding: 12px 0 12px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    box-shadow: 0px 4px 21px -4px #00000033;
    transition: all 0.3s;
  }

  button:hover {
    transition: all 0.3s;
    box-shadow: 0px 6px 27px -8px var(--red-color-hover);
  }

  p {
    color: var(--grey-color);
    font-size: 12px;
    position: absolute;
    top: -9px;
    background-color: white;
    padding: 3px 30px 3px 30px;
  }
`
