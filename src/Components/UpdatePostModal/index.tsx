import { useCreatePostModal } from '../../Contexts/CreatePostContext'
import { useState } from 'react'

import * as S from './style'

import { useAuthContext } from '../../Contexts/AuthContext'

import { useUpdatePostData } from '../../Contexts/UpdatePostDataContext'
import { UpdatePost } from '../../services/UserAndPost.service'
import { useNavigate } from 'react-router-dom'

export function UpdatePostModal() {
  const { authToken } = useAuthContext()
  const { updatePostModalIsActive, setUpdatePostModalIsActive } =
    useCreatePostModal()
  const [inputValue, setInputValue] = useState<string>('')
  const { updatePostData } = useUpdatePostData()
  const navigate = useNavigate()
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSaveUpdatePostButton = () => {
    if (inputValue !== '') {
      UpdatePost(authToken, {
        description: inputValue,
        id: updatePostData.id
      }).then(() => {
        alert('Post atualizado com sucesso  ')

        setUpdatePostModalIsActive(false)
        navigate('/')
      })
    } else alert('Descrição vazia')
  }

  return (
    <S.createPostModalStyled
      active={updatePostModalIsActive ? true : undefined}
    >
      <div className="box">
        <header>
          <button onClick={() => setUpdatePostModalIsActive(false)}>
            <img
              className="closeButton"
              src="/close.svg"
              alt="Imagem do botão fechar"
            />
          </button>

          <h2>Editar publicação</h2>

          <button onClick={() => handleSaveUpdatePostButton()}>Salvar</button>
        </header>
        <div className="modalBox">
          <header className="desktopIncrement">
            <button
              className="close"
              onClick={() => setUpdatePostModalIsActive(false)}
            >
              {' '}
              <img src="/close.svg" alt="Imagem do botão para fechar modal" />
            </button>

            <h2>Editar publicação</h2>

            <button onClick={() => handleSaveUpdatePostButton()}>Salvar</button>
          </header>

          <img
            id="postImage"
            src={updatePostData.photoLink}
            alt="Imagem da publicação"
          />

          <input
            className="alwaysVisible"
            type="text"
            placeholder={updatePostData.description}
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </S.createPostModalStyled>
  )
}
