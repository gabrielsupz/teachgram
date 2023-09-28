import {
  mainPageStyled,
  formBaseStyled,
  labelAndInputStyledBase,
  alertBoxStyled,
  boxPageStyled
} from '../styles'
import styled from 'styled-components'

export const boxRegisterPageStyled = styled(boxPageStyled)``
export const registerPageStyled = styled(mainPageStyled)`
  position: relative;
  @media (min-width: 1300px) {
    h4 {
      margin-top: 44px;
    }
  }

  #backArroButton {
    position: absolute;
    left: 20px;
    top: -25px;

    @media (min-width: 1300px) {
      top: 20px;
      left: -70px;
    }
  }
`
export const labelAndInputsStyled = styled(labelAndInputStyledBase)``
export const formStyled = styled(formBaseStyled)``
export const alertDivStyled = styled(alertBoxStyled)``
export const profilePhotoInputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  h1 {
    margin-bottom: 63px;
  }
  button {
    margin-top: 34px;
  }
  @media (min-width: 1300px) {
    margin-top: 100px;

    h1 {
      margin-bottom: 84px;
    }
  }
`
