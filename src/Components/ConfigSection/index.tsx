import * as S from './style'
import { useConfigSection } from '../../Contexts/ConfigSectionContext'
import { BackArrowButton } from '../BackArrowButton'
import { useState } from 'react'
import { ConfigInput } from '../ConfigInput'

interface InConfigType {
  section: 'nav' | 'updateProfile' | 'configAccount'
}
export function ConfigSection() {
  const { setConfigSection } = useConfigSection()
  const [inConfig, setInConfig] = useState<InConfigType>({
    section: 'nav'
  } as InConfigType)

  const handleBackArrowButton = () => {
    setConfigSection(false)
  }

  const handleConfigButton = (section: InConfigType) => {
    setInConfig(section)
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

            <button>Excluir conta</button>
          </div>
        </S.configSection>
      ) : inConfig.section === 'configAccount' ? (
        <S.inSpecificSection>
          <h2>Configurações da conta</h2>
          <div>
            <ConfigInput name="Nome" placeholder="Gabriel Suptitz" />
            <ConfigInput name="Email" placeholder="exemple@email.com" />
            <ConfigInput name="Celular" placeholder="051997464822" />
            <ConfigInput name="Senha" type="password" placeholder="********" />
          </div>
          <div className="buttonsBox">
            <button
              className="return"
              onClick={() => handleConfigButton({ section: 'nav' })}
            >
              Voltar
            </button>
            <button className="update">Atualizar</button>
          </div>
        </S.inSpecificSection>
      ) : (
        <S.inSpecificSection>
          <h2>Editar Perfil</h2>
          <img
            src="https://avatars.githubusercontent.com/u/102992996?s=400&u=80dfdee29368bfbd801dd0d3d6f27a84009a10f1&v=4"
            alt=""
          />
          <div>
            <ConfigInput
              name="Foto de perfil"
              placeholder="https://www.google.com/search?sca_..."
            />
            <ConfigInput name="Nome" placeholder="Gabriel Suptitz" />
            <ConfigInput name="Nome do usário" placeholder="GabrielSupz" />
            <ConfigInput
              name="Bio"
              placeholder="O melhor de mim ainda está por vir. 🌹"
            />
          </div>
          <div className="buttonsBox">
            <button
              className="return"
              onClick={() => handleConfigButton({ section: 'nav' })}
            >
              Voltar
            </button>
            <button className="update">Atualizar</button>
          </div>
        </S.inSpecificSection>
      )}
    </S.contentConfigSectionStyled>
  )
}
