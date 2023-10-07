import * as S from './style'
import { HeaderLogo } from '../../Components/HeaderLogo'
import { useState, FormEvent } from 'react'
import { BackArrowButton } from '../../Components/BackArrowButton'
import {
  RegisterUserProps,
  RegisterUser
} from '../../services/UserAndPost.service'
import { Loading } from '../../Components/Loading'

export function RegisterPage() {
  const [profilePhotoSection, setProfilePhotoSection] = useState<boolean>(false)
  const [userData, setUserData] = useState<RegisterUserProps>(
    {} as RegisterUserProps
  )
  const handleNextButton = () => {
    const name =
      (document.getElementById('name') as HTMLInputElement)?.value || ''
    const userName =
      (document.getElementById('userName') as HTMLInputElement)?.value || ''
    const email =
      (document.getElementById('email') as HTMLInputElement)?.value || ''
    const description =
      (document.getElementById('description') as HTMLInputElement)?.value || ''
    const phone =
      (document.getElementById('phone') as HTMLInputElement)?.value || ''
    const password =
      (document.getElementById('password') as HTMLInputElement)?.value || ''

    const inputsUserData: RegisterUserProps = {
      name,
      userName,
      email,
      description,
      phone,
      password,
      profileLink: ''
    }
    setUserData(inputsUserData)
    console.log(userData)
    setProfilePhotoSection(true)
  }
  const handleSaveButton = async () => {
    const profileLink =
      (document.getElementById('profileLink') as HTMLInputElement)?.value || ''

    try {
      await RegisterUser({
        email: userData.email,
        name: userData.name,
        password: userData.password,
        phone: userData.phone,
        description: userData.description,
        userName: userData.userName,
        profileLink: profileLink
      })
    } catch (error) {
      console.error(error)
    }
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
        {!profilePhotoSection ? (
          <>
            {' '}
            <S.formStyled action="">
              <h1>Crie sua conta</h1>
              <div>
                <S.labelAndInputsStyled htmlFor="">
                  Nome{' '}
                  <input
                    id="name"
                    required
                    type="text"
                    placeholder="Digite seu nome"
                  />
                </S.labelAndInputsStyled>
              </div>
              <div>
                <S.labelAndInputsStyled htmlFor="">
                  Username{' '}
                  <input
                    id="userName"
                    required
                    type="text"
                    placeholder="@ seu_username"
                  />
                </S.labelAndInputsStyled>
              </div>
              <div>
                <S.labelAndInputsStyled htmlFor="">
                  E-mail{' '}
                  <input
                    id="email"
                    required
                    type="text"
                    placeholder="Digite seu E-mail"
                  />
                </S.labelAndInputsStyled>
              </div>

              <div>
                <S.labelAndInputsStyled htmlFor="">
                  Descrição{' '}
                  <input
                    id="description"
                    required
                    type="text"
                    placeholder="Faça uma descrição"
                  />
                </S.labelAndInputsStyled>
              </div>
              <div>
                <S.labelAndInputsStyled htmlFor="">
                  Celular{' '}
                  <input
                    id="phone"
                    type="text"
                    placeholder="Digite se número de celular"
                  />
                </S.labelAndInputsStyled>
              </div>
              <S.alertDivStyled>
                <S.labelAndInputsStyled htmlFor="">
                  Senha{' '}
                  <input
                    id="password"
                    required
                    type="password"
                    placeholder="Digite sua senha"
                  />
                </S.labelAndInputsStyled>
                <h5 className="active">
                  {' '}
                  <p className="ball" /> Campo não preenchido
                </h5>
              </S.alertDivStyled>

              <button
                onClick={() => handleNextButton()}
                className="submit"
                type="button"
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
                  Link{' '}
                  <input
                    id="profileLink"
                    required
                    type="text"
                    placeholder="Insira seu link"
                  />
                </S.labelAndInputsStyled>
              </div>
              <button
                onClick={() => handleSaveButton()}
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
      <Loading />
    </S.boxRegisterPageStyled>
  )
}
