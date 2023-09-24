import * as S from './style'
import { HeaderLogo } from '../../Components/HeaderLogo'
import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'

export function RegisterPage() {
  return (
    <S.RegisterPageStyled>
      <HeaderLogo />

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
            Celular <input type="text" placeholder="Digite seu celular" />
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

        <button type="submit">Próximo</button>
      </S.formStyled>
      <h4>
        {' '}
        Já possui conta? <a href="">Entrar</a>
      </h4>
    </S.RegisterPageStyled>
  )
}
