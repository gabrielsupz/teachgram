import * as S from './style'
import { HeaderLogo } from '../../Components/HeaderLogo'
import { useState } from 'react'
import { BackArrowButton } from '../../Components/BackArrowButton'

export function RegisterPage() {
  const [profilePhotoSection, setProfilePhotoSection] = useState<boolean>(true)
  const handleSubmitRegisterFormButton = () => {
    if (profilePhotoSection) {
      setProfilePhotoSection(false)
    } else setProfilePhotoSection(true)
  }
  const handleBackArrowButton = () => {
    profilePhotoSection
      ? setProfilePhotoSection(false)
      : setProfilePhotoSection(true)
  }

  return (
    <S.boxRegisterPageStyled>
      <S.registerPageStyled>
        <HeaderLogo />
        {profilePhotoSection ? (
          <>
            {' '}
            <S.formStyled action="">
              <h1>Crie sua conta</h1>
              <div>
                <S.labelAndInputsStyled htmlFor="">
                  Nome <input type="text" placeholder="Digite seu nome" />
                </S.labelAndInputsStyled>
              </div>
              <S.labelAndInputsStyled htmlFor="">
                E-mail <input type="text" placeholder="Digite seu E-mail" />
              </S.labelAndInputsStyled>
              <div>
                <S.labelAndInputsStyled htmlFor="">
                  Descrição{' '}
                  <input type="text" placeholder="Faça uma descrição" />
                </S.labelAndInputsStyled>
              </div>
              <div>
                <S.labelAndInputsStyled htmlFor="">
                  Celular{' '}
                  <input
                    type="text"
                    placeholder="Digite se número de celular"
                  />
                </S.labelAndInputsStyled>
              </div>
              <S.alertDivStyled>
                <S.labelAndInputsStyled htmlFor="">
                  Senha <input type="text" placeholder="Digite sua senha" />
                </S.labelAndInputsStyled>
                <h5 className="active">
                  {' '}
                  <p className="ball" /> Campo não prenchido
                </h5>
              </S.alertDivStyled>

              <button
                onClick={() => handleSubmitRegisterFormButton()}
                className="submit"
                type="submit"
              >
                Próximo
              </button>
            </S.formStyled>
            <h4>
              {' '}
              Já possui conta? <a href="">Entrar</a>
            </h4>
          </>
        ) : (
          <>
            <BackArrowButton backFunction={handleBackArrowButton} />
            <S.profilePhotoInputBox>
              <h1>Insira o link da sua foto de perfil </h1>
              <div>
                <S.labelAndInputsStyled htmlFor="">
                  Link <input type="text" placeholder="Insira seu link" />
                </S.labelAndInputsStyled>
              </div>
              <button
                onClick={() => handleSubmitRegisterFormButton()}
                className="submit"
                type="submit"
              >
                Salvar
              </button>
            </S.profilePhotoInputBox>
          </>
        )}
      </S.registerPageStyled>
      <img
        className="loginAndRegisterImage"
        src="/loginAndRegisterImage.svg"
        alt="Imagem de mulheres tirando uma self e sorrindo"
      />
    </S.boxRegisterPageStyled>
  )
}
