import { useCreatePostModal } from '../../Contexts/CreatePostContext'
import { useState } from 'react'

import * as S from './style'
import { BackArrowButton } from '../BackArrowButton'

export function CreatePostModal() {
  const { createPostModalIsActive } = useCreatePostModal()
  const [inSecondStage, setInSecondStage] = useState(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [captionValue, setCaptionValue] = useState<string>('')

  const handleAdvanceButton = () => {
    setInSecondStage(true)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleCaptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCaptionValue(event.target.value)
  }

  return (
    <S.createPostModalStyled active={createPostModalIsActive}>
      <div className="box">
        <header>
          {inSecondStage ? (
            <BackArrowButton backFunction={() => setInSecondStage(false)} />
          ) : (
            <img
              className="closeButton"
              src="/close.svg"
              alt="Imagem do botão fechar"
            />
          )}

          <h2>Nova publicação</h2>

          {!inSecondStage ? (
            <button onClick={handleAdvanceButton}>Avançar</button>
          ) : (
            <button>Compartilhar</button>
          )}
        </header>
        <div className="modalBox">
          <header className="desktopIncrement">
            <button className="close" onClick={() => setInSecondStage(false)}>
              {' '}
              <img src="/close.svg" alt="Imagem do botão para fechar modal" />
            </button>
            <h2>Criar nova publicação</h2>
            <button onClick={() => setInSecondStage(true)}>Avançar</button>
          </header>
          {!inSecondStage ? (
            <>
              <h3>Link da imagem</h3>
              <input
                type="text"
                placeholder="Insira aqui a url da imagem"
                value={inputValue}
                onChange={handleInputChange}
              />
              <div className="desktopIncrement">
                <label htmlFor="" className="labelDesktopIncrement">
                  Link da Imagem
                </label>{' '}
                <input
                  type="text"
                  placeholder="Insira aqui a url da imagem"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </div>
            </>
          ) : (
            <>
              <img src={inputValue} alt="Imagem da publicação" />

              <input
                className="alwaysVisible"
                type="text"
                placeholder="Escreva uma legenda"
                value={captionValue}
                onChange={handleCaptionChange}
              />
            </>
          )}
        </div>
      </div>
    </S.createPostModalStyled>
  )
}
