import { HeaderLogo } from '../../Components/HeaderLogo'
import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'
import * as S from './style'
export function LoginPage() {
  return (
    <S.loginPage>
      <HeaderLogo />

      <S.formStyled action="">
        <h1>Faça seu login</h1>
        <S.labelAndInputStyled htmlFor="">
          E-mail <input type="text" placeholder="Digite seu E-mail" />
        </S.labelAndInputStyled>
        <div>
          <S.labelAndInputStyled htmlFor="">
            Senha <input type="text" placeholder="Digite sua senha" />
          </S.labelAndInputStyled>
          <S.rememberAndForgotPassword>
            <label htmlFor="">
              <input type="checkbox" name="" id="" /> Lembrar senha
            </label>
            <a href="">Esqueci minha senha</a>
            <h5 className="active">
              {' '}
              <p className="ball" /> Senha incorreta
            </h5>
          </S.rememberAndForgotPassword>
        </div>

        <button type="submit">Entrar</button>
      </S.formStyled>
      <h4>
        {' '}
        Não possui uma conta? <a href="">Cadastre-se</a>
      </h4>

      <S.enterWithStyled>
        <p> Entrar com </p>

        <button>
          {' '}
          <FcGoogle size={18} /> Entrar com Google
        </button>
        <button>
          {' '}
          <BsApple size={18} color="black" /> Entrar com Apple
        </button>
      </S.enterWithStyled>
    </S.loginPage>
  )
}
