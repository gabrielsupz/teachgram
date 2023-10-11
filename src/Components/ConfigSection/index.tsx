import * as S from './style'
import { useConfigSection } from '../../Contexts/ConfigSectionContext'
import { BackArrowButton } from '../BackArrowButton'
import { useState, useEffect } from 'react'
import { ConfigInput } from '../ConfigInput'
import { useAuthContext } from '../../Contexts/AuthContext'
import {
  DeleteUser,
  GetAuthUser,
  UpdateUser,
  UpdateUserPropsType,
  UserPropsType
} from '../../services/UserAndPost.service'
import { useNavigate } from 'react-router-dom'

interface InConfigType {
  section: 'nav' | 'updateProfile' | 'configAccount'
}
export function ConfigSection() {
  const { setConfigSection } = useConfigSection()
  const { authToken, setAuthToken } = useAuthContext()
  const navigate = useNavigate()
  const [inConfig, setInConfig] = useState<InConfigType>({
    section: 'nav'
  } as InConfigType)
  const [user, setUser] = useState<UserPropsType>()
  useEffect(() => {
    GetAuthUser(authToken).then(e => setUser(e))
  }, [])

  const handleBackArrowButton = () => {
    setConfigSection(false)
  }

  const handleConfigButton = (section: InConfigType) => {
    setName('')
    setUserName('')
    setEmail('')
    setPhone('')
    setPassword('')
    setProfileLink('')
    setDescription('')
    setInConfig(section)
  }

  const addAndRemoveActiveInDeleteAccountDiv = () => {
    const deleteAccountDiv = document.getElementById('deleteAccountDiv')
    if (deleteAccountDiv) deleteAccountDiv.classList.toggle('active')
  }

  const handelDeleteAccountButton = async () => {
    await DeleteUser(authToken)
      .then(() => {
        setAuthToken('')
      })
      .then(() => navigate('/'))
  }
  // Lidando com os inputs e o update do usuário

  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [profileLink, setProfileLink] = useState('')
  const [description, setDescription] = useState('')

  const validatePhone = (phone: string) => {
    return phone.length >= 8
  }

  const validatePassword = (password: string) => {
    return password.length >= 3 && password.length <= 20
  }

  const handleUpdateAccountButton = () => {
    const updatedUser: UpdateUserPropsType = {}
    if (name) updatedUser.name = name
    if (email) updatedUser.email = email
    if (phone) {
      if (validatePhone(phone)) updatedUser.phone = phone
      else alert('Telefone deve ter no minimo 8 digitos')
    }
    if (password) {
      if (validatePassword(password)) updatedUser.password = password
      else {
        alert('Senha deve ter entre 3 a 20 digitos')
      }
    }

    UpdateUser(authToken, updatedUser).then(e => {
      if (userName) {
        alert('Necessário logar novamente')

        navigate('/login')
      } else {
        navigate('/profile')
      }

      setConfigSection(false)
    })
  }
  const handleUpdateProfileButton = () => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/

    const updatedUser: UpdateUserPropsType = {}
    if (profileLink) {
      if (urlRegex.test(profileLink)) {
        updatedUser.profileLink = profileLink
      } else alert('Link de imagem inválido')
    }
    if (name) updatedUser.name = name
    if (userName) updatedUser.userName = userName
    if (description) updatedUser.description = description

    UpdateUser(authToken, updatedUser).then(e => {
      navigate('/profile')
      setConfigSection(false)
    })
  }

  return (
    <S.contentConfigSectionStyled>
      {inConfig.section === 'nav' ? (
        <S.configSection>
          <BackArrowButton backFunction={handleBackArrowButton} />

          <div>
            <button
              onClick={() => handleConfigButton({ section: 'configAccount' })}
            >
              Configurações da conta <img src="/rightArrow.svg" alt="" />
            </button>

            <button
              onClick={() => handleConfigButton({ section: 'updateProfile' })}
            >
              Editar Perfil <img src="/rightArrow.svg" alt="" />
            </button>

            <button onClick={() => addAndRemoveActiveInDeleteAccountDiv()}>
              Excluir conta
            </button>
          </div>
        </S.configSection>
      ) : inConfig.section === 'configAccount' ? (
        <>
          {' '}
          <BackArrowButton
            backFunction={() => setInConfig({ section: 'nav' })}
          />
          <S.inSpecificSection>
            <h2>Configurações da conta</h2>
            <div className="configAccountInputs">
              <ConfigInput
                id="inputName"
                name="Nome"
                placeholder={user?.name || ''}
                value={name}
                onChange={setName}
              />
              <ConfigInput
                id="inputEmail"
                name="Email"
                placeholder={user?.email || ''}
                value={email}
                onChange={setEmail}
              />
              <ConfigInput
                id="inputPhone"
                name="Celular"
                placeholder={user?.phone || ''}
                value={phone}
                onChange={setPhone}
              />
              <ConfigInput
                id="inputPassword"
                name="Senha"
                type="password"
                placeholder="*******"
                value={password}
                onChange={setPassword}
              />
            </div>
            <div className="buttonsBox">
              <button
                className="return"
                onClick={() => handleConfigButton({ section: 'nav' })}
              >
                Voltar
              </button>
              <button
                onClick={() => handleUpdateAccountButton()}
                className="update"
              >
                Salvar
              </button>
            </div>
          </S.inSpecificSection>
        </>
      ) : (
        <>
          {' '}
          <BackArrowButton
            backFunction={() => setInConfig({ section: 'nav' })}
          />{' '}
          <S.inSpecificSection>
            <h2>Editar Perfil</h2>
            <img
              src={
                user?.profileLink ||
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv8NfrKHYJHjf3FxKhrD9OEO17wd6YXGzfs_j3lDUFz7JsGQZR09IyyD9EVo6Z3jxH3MQ&usqp=CAU'
              }
              alt="Imagem de perfil"
            />
            <div className="updateProfileInputs">
              <ConfigInput
                id="inputProfileLink"
                name="Foto de perfil"
                placeholder={user?.profileLink || ''}
                onChange={setProfileLink}
                value={profileLink}
              />
              <ConfigInput
                id="inputUserName"
                name="Nome"
                placeholder={user?.userName || ''}
                onChange={setUserName}
                value={userName}
              />
              <ConfigInput
                id="inputName"
                name="Nome do usuário"
                placeholder={user?.name || ''}
                onChange={setName}
                value={name}
              />
              <ConfigInput
                id="inputDescription"
                name="Bio"
                placeholder={user?.description || ''}
                onChange={setDescription}
                value={description}
              />
            </div>
            <div className="buttonsBox">
              <button
                className="return"
                onClick={() => handleConfigButton({ section: 'nav' })}
              >
                Voltar
              </button>
              <button
                onClick={() => handleUpdateProfileButton()}
                className="update"
              >
                Atualizar
              </button>
            </div>
          </S.inSpecificSection>
        </>
      )}
      <S.deleteAccountDiv id="deleteAccountDiv">
        <div>
          <h3>Excluir conta</h3>
          <p>Todos os seus dados serão excluídos.</p>

          <div>
            <button
              onClick={() => addAndRemoveActiveInDeleteAccountDiv()}
              className="cancel"
            >
              Cancelar
            </button>
            <button
              onClick={() => handelDeleteAccountButton()}
              className="confirm"
            >
              Confirmar
            </button>
          </div>
        </div>
      </S.deleteAccountDiv>
      <div id="imgRectangle"></div>
    </S.contentConfigSectionStyled>
  )
}
